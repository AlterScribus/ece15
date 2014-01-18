/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          svgexplugin.cpp  -  description
                             -------------------
    begin                : Sun Aug 3 08:00:00 CEST 2002
    copyright            : (C) 2002 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <QBuffer>
#include <QByteArray>
#include <QCheckBox>
#include <QDataStream>
#include <QFile>
#include <QList>
#include <QMessageBox>
#include <QScopedPointer>
#include <QTextStream>

#include "svgexplugin.h"

#include "scconfig.h"
#include "canvas.h"
#include "cmsettings.h"
#include "commonstrings.h"
#include "pageitem_pathtext.h"
#include "pageitem_table.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "prefscontext.h"
#include "scgzfile.h"
#include "scpage.h"
#include "scpattern.h"
#include "scribuscore.h"
#include "sctextstruct.h"
#include "tableutils.h"
#include "util.h"
#include "ui/customfdialog.h"
#include "ui/guidemanager.h"
#include "sccolorengine.h"
#include "util_formats.h"
#include "util_math.h"

int svgexplugin_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* svgexplugin_getPlugin()
{
	SVGExportPlugin* plug = new SVGExportPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void svgexplugin_freePlugin(ScPlugin* plugin)
{
	SVGExportPlugin* plug = dynamic_cast<SVGExportPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

using namespace TableUtils;

SVGExportPlugin::SVGExportPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

SVGExportPlugin::~SVGExportPlugin() {};

void SVGExportPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "ExportAsSVG";
	// Action text for menu, including accel
	m_actionInfo.text = tr("Save as &SVG...");
	// Menu
	m_actionInfo.menu = "FileExport";
	m_actionInfo.enabledOnStartup = false;
	m_actionInfo.needsNumObjects = -1;
}

const QString SVGExportPlugin::fullTrName() const
{
	return QObject::tr("SVG Export");
}

const ScActionPlugin::AboutData* SVGExportPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	about->authors = "Franz Schmid <franz@scribus.info>";
	about->shortDescription = tr("Exports SVG Files");
	about->description = tr("Exports the current page into an SVG file.");
	about->license = "GPL";
	Q_CHECK_PTR(about);
	return about;
}

void SVGExportPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool SVGExportPlugin::run(ScribusDoc* doc, QString filename)
{
	Q_ASSERT(filename.isEmpty());
	QString fileName;
	if (doc!=0)
	{
		PrefsContext* prefs = PrefsManager::instance()->prefsFile->getPluginContext("svgex");
		QString wdir = prefs->get("wdir", ".");
		QScopedPointer<CustomFDialog> openDia( new CustomFDialog(doc->scMW(), wdir, QObject::tr("Save as"), QObject::tr("%1;;All Files (*)").arg(FormatsManager::instance()->extensionsForFormat(FormatsManager::SVG)), fdHidePreviewCheckBox) );
		openDia->setSelection(getFileNameByPage(doc, doc->currentPage()->pageNr(), "svg"));
		openDia->setExtension("svg");
		openDia->setZipExtension("svgz");
		QCheckBox* compress = new QCheckBox(openDia.data());
		compress->setText( tr("Compress File"));
		compress->setChecked(false);
		openDia->addWidgets(compress);
		QCheckBox* inlineImages = new QCheckBox(openDia.data());
		inlineImages->setText( tr("Save Images inline"));
		inlineImages->setToolTip( tr("Adds all Images on the Page inline to the SVG.\nCaution: this will increase the file size!"));
		inlineImages->setChecked(true);
		openDia->addWidgets(inlineImages);
		QCheckBox* exportBack = new QCheckBox(openDia.data());
		exportBack->setText( tr("Export Page background"));
		exportBack->setToolTip( tr("Adds the Page itself as background to the SVG."));
		exportBack->setChecked(false);
		openDia->addWidgets(exportBack);
		
		if (!openDia->exec())
			return true;
		fileName = openDia->selectedFile();
		QFileInfo fi(fileName);
		QString baseDir = fi.absolutePath();
		if (compress->isChecked())
			fileName = baseDir + "/" + fi.baseName() + ".svgz";
		else
			fileName = baseDir + "/" + fi.baseName() + ".svg";

		SVGOptions Options;
		Options.inlineImages = inlineImages->isChecked();
		Options.exportPageBackground = exportBack->isChecked();
		Options.compressFile = compress->isChecked();

		if (fileName.isEmpty())
			return true;
		prefs->set("wdir", fileName.left(fileName.lastIndexOf("/")));
		QFile f(fileName);
		if (f.exists())
		{
			int exit = QMessageBox::warning(doc->scMW(), CommonStrings::trWarning,
				QObject::tr("Do you really want to overwrite the file:\n%1 ?").arg(fileName),
				QMessageBox::Yes | QMessageBox::No);
			if (exit == QMessageBox::No)
				return true;
		}
		SVGExPlug *dia = new SVGExPlug(doc);
		dia->doExport(fileName, Options);
		delete dia;
	}
	return true;
}

SVGExPlug::SVGExPlug( ScribusDoc* doc )
{
	m_Doc = doc;
	Options.inlineImages = true;
	Options.exportPageBackground = false;
	Options.compressFile = false;
	glyphNames.clear();
}

bool SVGExPlug::doExport( QString fName, SVGOptions &Opts )
{
	Options = Opts;
	QFileInfo fiBase(fName);
	baseDir = fiBase.absolutePath();
	ScPage *page;
	GradCount = 0;
	ClipCount = 0;
	PattCount = 0;
	MaskCount = 0;
	docu = QDomDocument("svgdoc");
	QString vo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	QString st = "<svg></svg>";
	docu.setContent(st);
	page = m_Doc->currentPage();
	double pageWidth  = page->width();
	double pageHeight = page->height();
	docElement = docu.documentElement();
	docElement.setAttribute("width", FToStr(pageWidth)+"pt");
	docElement.setAttribute("height", FToStr(pageHeight)+"pt");
	docElement.setAttribute("viewBox", QString("0 0 %1 %2").arg(pageWidth).arg(pageHeight));
	docElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	docElement.setAttribute("xmlns:inkscape","http://www.inkscape.org/namespaces/inkscape");
	docElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
	docElement.setAttribute("version","1.1");
	if (!m_Doc->documentInfo().title().isEmpty())
	{
		QDomText title = docu.createTextNode(m_Doc->documentInfo().title());
		QDomElement titleElem = docu.createElement("title");
		titleElem.appendChild(title);
		docElement.appendChild(titleElem);
	}
	if (!m_Doc->documentInfo().comments().isEmpty())
	{
		QDomText desc = docu.createTextNode(m_Doc->documentInfo().comments());
		QDomElement descElem = docu.createElement("desc");
		descElem.appendChild(desc);
		docElement.appendChild(descElem);
	}
	globalDefs = docu.createElement("defs");
	writeBasePatterns();
	writeBaseSymbols();
	docElement.appendChild(globalDefs);
	if (Options.exportPageBackground)
	{
		QDomElement backG = docu.createElement("rect");
		backG.setAttribute("x", "0");
		backG.setAttribute("y", "0");
		backG.setAttribute("width", FToStr(pageWidth));
		backG.setAttribute("height", FToStr(pageHeight));
		backG.setAttribute("style", "fill:"+m_Doc->paperColor().name()+";" + "stroke:none;");
		docElement.appendChild(backG);
	}
	ScLayer ll;
	ll.isPrintable = false;
	for (int la = 0; la < m_Doc->Layers.count(); la++)
	{
		m_Doc->Layers.levelToLayer(ll, la);
		if (ll.isPrintable)
		{
			page = m_Doc->MasterPages.at(m_Doc->MasterNames[m_Doc->currentPage()->MPageNam]);
			ProcessPageLayer(page, ll);
			page = m_Doc->currentPage();
			ProcessPageLayer(page, ll);
		}
	}
	if(Options.compressFile)
	{
		// zipped saving
		QByteArray array(docu.toString().toUtf8());
		if (!ScGzFile::writeToFile(fName, array, vo.toUtf8().data()))
			return false;
	}
	else
	{
		QFile f(fName);
		if(!f.open(QIODevice::WriteOnly))
			return false;
		QDataStream s(&f);
		QString wr = vo;
		wr += docu.toString();
		QByteArray utf8wr = wr.toUtf8();
		s.writeRawData(utf8wr.data(), utf8wr.length());
		f.close();
	}
	return true;
}

void SVGExPlug::ProcessPageLayer(ScPage *page, ScLayer& layer)
{
	QDomElement layerGroup;
	PageItem *Item;
	QList<PageItem*> Items;
	ScPage* SavedAct = m_Doc->currentPage();
	if (page->pageName().isEmpty())
		Items = m_Doc->DocItems;
	else
		Items = m_Doc->MasterItems;
	if (Items.count() == 0)
		return;
	if (!layer.isPrintable)
		return;
	m_Doc->setCurrentPage(page);

	layerGroup = docu.createElement("g");
	layerGroup.setAttribute("id", layer.Name);
	layerGroup.setAttribute("inkscape:label", layer.Name);
	layerGroup.setAttribute("inkscape:groupmode", "layer");
	if (layer.transparency != 1.0)
		layerGroup.setAttribute("opacity", FToStr(layer.transparency));
	for(int j = 0; j < Items.count(); ++j)
	{
		Item = Items.at(j);
		if (Item->LayerID != layer.ID)
			continue;
		if (!Item->printEnabled())
			continue;
		double x = page->xOffset();
		double y = page->yOffset();
		double w = page->width();
		double h = page->height();
		double x2 = Item->BoundingX;
		double y2 = Item->BoundingY;
		double w2 = Item->BoundingW;
		double h2 = Item->BoundingH;
		if (!( qMax( x, x2 ) <= qMin( x+w, x2+w2 ) && qMax( y, y2 ) <= qMin( y+h, y2+h2 )))
			continue;
		if ((!page->pageName().isEmpty()) && (Item->OwnPage != static_cast<int>(page->pageNr())) && (Item->OwnPage != -1))
			continue;
		ProcessItemOnPage(Item->xPos()-page->xOffset(), Item->yPos()-page->yOffset(), Item, &layerGroup);
	}
	docElement.appendChild(layerGroup);

	m_Doc->setCurrentPage(SavedAct);
}

void SVGExPlug::ProcessItemOnPage(double xOffset, double yOffset, PageItem *Item, QDomElement *parentElem)
{
	QDomElement ob;
	QString trans = "translate("+FToStr(xOffset)+", "+FToStr(yOffset)+")";
	if (Item->rotation() != 0)
		trans += " rotate("+FToStr(Item->rotation())+")";
	QString fill = getFillStyle(Item);
	QString stroke = "stroke:none";
	stroke = getStrokeStyle(Item);
	switch (Item->itemType())
	{
		case PageItem::Arc:
		case PageItem::Polygon:
		case PageItem::PolyLine:
		case PageItem::RegularPolygon:
		case PageItem::Spiral:
			ob = processPolyItem(Item, trans, fill, stroke);
			if ((Item->lineColor() != CommonStrings::None) && ((Item->startArrowIndex() != 0) || (Item->endArrowIndex() != 0)))
				ob = processArrows(Item, ob, trans);
			break;
		case PageItem::Line:
			ob = processLineItem(Item, trans, stroke);
			if ((Item->lineColor() != CommonStrings::None) && ((Item->startArrowIndex() != 0) || (Item->endArrowIndex() != 0)))
				ob = processArrows(Item, ob, trans);
			break;
		case PageItem::ImageFrame:
		case PageItem::LatexFrame:
			ob = processImageItem(Item, trans, fill, stroke);
			break;
		case PageItem::TextFrame:
			ob = processTextItem(Item, trans, fill, stroke);
			break;
		case PageItem::PathText:
			ob = processPathTextItem(Item, trans, stroke);
			break;
		case PageItem::Symbol:
			ob = processSymbolItem(Item, trans);
			break;
		case PageItem::Group:
			if (Item->groupItemList.count() > 0)
			{
				ob = docu.createElement("g");
				if (!Item->AutoName)
					ob.setAttribute("id", Item->itemName());
				if (Item->GrMask > 0)
					ob.setAttribute("mask", handleMask(Item, xOffset, yOffset));
				else
				{
					if (Item->fillTransparency() != 0)
						ob.setAttribute("opacity", FToStr(1.0 - Item->fillTransparency()));
				}
				QString tr = trans;
				if (Item->imageFlippedH())
				{
					tr += QString(" translate(%1, 0.0)").arg(Item->width());
					tr += QString(" scale(-1.0, 1.0)");
				}
				if (Item->imageFlippedV())
				{
					tr += QString(" translate(0.0, %1)").arg(Item->height());
					tr += QString(" scale(1.0, -1.0)");
				}
				tr += QString(" scale(%1, %2)").arg(Item->width() / Item->groupWidth).arg(Item->height() / Item->groupHeight);
				ob.setAttribute("transform", tr);
				ob.setAttribute("style", "fill:none; stroke:none");
				FPointArray clipPath = Item->PoLine;
				QTransform transform;
				transform.scale(Item->width() / Item->groupWidth, Item->height() / Item->groupHeight);
				transform = transform.inverted();
				clipPath.map(transform);
				QDomElement obc = createClipPathElement(&clipPath);
				if (!obc.isNull())
					ob.setAttribute("clip-path", "url(#"+ obc.attribute("id") + ")");
				if (Item->fillRule)
					ob.setAttribute("clip-rule", "evenodd");
				else
					ob.setAttribute("clip-rule", "nonzero");
				for (int em = 0; em < Item->groupItemList.count(); ++em)
				{
					PageItem* embed = Item->groupItemList.at(em);
					ProcessItemOnPage(embed->gXpos, embed->gYpos, embed, &ob);
				}
			}
			break;
		case PageItem::Table:
			ob = docu.createElement("g");
			ob.setAttribute("transform", trans + QString("translate(%1, %2)").arg(Item->asTable()->gridOffset().x()).arg(Item->asTable()->gridOffset().y()));
			// Paint table fill.
			if (Item->asTable()->fillColor() != CommonStrings::None)
			{
				int lastCol = Item->asTable()->columns() - 1;
				int lastRow = Item->asTable()->rows() - 1;
				double x = Item->asTable()->columnPosition(0);
				double y = Item->asTable()->rowPosition(0);
				double width = Item->asTable()->columnPosition(lastCol) + Item->asTable()->columnWidth(lastCol) - x;
				double height = Item->asTable()->rowPosition(lastRow) + Item->asTable()->rowHeight(lastRow) - y;
				QDomElement cl = docu.createElement("rect");
				cl.setAttribute("fill", SetColor(Item->asTable()->fillColor(), Item->asTable()->fillShade()));
				cl.setAttribute("x", "0");
				cl.setAttribute("y", "0");
				cl.setAttribute("width", FToStr(width));
				cl.setAttribute("height", FToStr(height));
				ob.appendChild(cl);
			}
			// Pass 1: Paint cell fills.
			for (int row = 0; row < Item->asTable()->rows(); ++row)
			{
				int colSpan = 0;
				for (int col = 0; col < Item->asTable()->columns(); col += colSpan)
				{
					TableCell cell = Item->asTable()->cellAt(row, col);
					if (row == cell.row())
					{
						QString colorName = cell.fillColor();
						if (colorName != CommonStrings::None)
						{
							int row = cell.row();
							int col = cell.column();
							int lastRow = row + cell.rowSpan() - 1;
							int lastCol = col + cell.columnSpan() - 1;
							double x = Item->asTable()->columnPosition(col);
							double y = Item->asTable()->rowPosition(row);
							double width = Item->asTable()->columnPosition(lastCol) + Item->asTable()->columnWidth(lastCol) - x;
							double height = Item->asTable()->rowPosition(lastRow) + Item->asTable()->rowHeight(lastRow) - y;
							QDomElement cl = docu.createElement("rect");
							cl.setAttribute("fill", SetColor(colorName, cell.fillShade()));
							cl.setAttribute("x", FToStr(x));
							cl.setAttribute("y", FToStr(y));
							cl.setAttribute("width", FToStr(width));
							cl.setAttribute("height", FToStr(height));
							ob.appendChild(cl);
						}
					}
					colSpan = cell.columnSpan();
				}
			}
			// Pass 2: Paint vertical borders.
			for (int row = 0; row < Item->asTable()->rows(); ++row)
			{
				int colSpan = 0;
				for (int col = 0; col < Item->asTable()->columns(); col += colSpan)
				{
					TableCell cell = Item->asTable()->cellAt(row, col);
					if (row == cell.row())
					{
						const int lastRow = cell.row() + cell.rowSpan() - 1;
						const int lastCol = cell.column() + cell.columnSpan() - 1;
						const double borderX = Item->asTable()->columnPosition(lastCol) + Item->asTable()->columnWidth(lastCol);
						QPointF start(borderX, 0.0);
						QPointF end(borderX, 0.0);
						QPointF startOffsetFactors, endOffsetFactors;
						int startRow, endRow;
						for (int row = cell.row(); row <= lastRow; row += endRow - startRow + 1)
						{
							TableCell rightCell = Item->asTable()->cellAt(row, lastCol + 1);
							startRow = qMax(cell.row(), rightCell.row());
							endRow = qMin(lastRow, rightCell.isValid() ? rightCell.row() + rightCell.rowSpan() - 1 : lastRow);
							TableCell topLeftCell = Item->asTable()->cellAt(startRow - 1, lastCol);
							TableCell topRightCell = Item->asTable()->cellAt(startRow - 1, lastCol + 1);
							TableCell bottomRightCell = Item->asTable()->cellAt(endRow + 1, lastCol + 1);
							TableCell bottomLeftCell = Item->asTable()->cellAt(endRow + 1, lastCol);
							TableBorder topLeft, top, topRight, border, bottomLeft, bottom, bottomRight;
							resolveBordersVertical(topLeftCell, topRightCell, cell, rightCell, bottomLeftCell, bottomRightCell,
												   &topLeft, &top, &topRight, &border, &bottomLeft, &bottom, &bottomRight, Item->asTable());
							if (border.isNull())
								continue; // Quit early if the border to paint is null.
							start.setY(Item->asTable()->rowPosition(startRow));
							end.setY((Item->asTable()->rowPosition(endRow) + Item->asTable()->rowHeight(endRow)));
							joinVertical(border, topLeft, top, topRight, bottomLeft, bottom, bottomRight, &start, &end, &startOffsetFactors, &endOffsetFactors);
							paintBorder(border, start, end, startOffsetFactors, endOffsetFactors, ob);
						}
						if (col == 0)
						{
							const int lastRow = cell.row() + cell.rowSpan() - 1;
							const int firstCol = cell.column();
							const double borderX = Item->asTable()->columnPosition(firstCol);
							QPointF start(borderX, 0.0);
							QPointF end(borderX, 0.0);
							QPointF startOffsetFactors, endOffsetFactors;
							int startRow, endRow;
							for (int row = cell.row(); row <= lastRow; row += endRow - startRow + 1)
							{
								TableCell leftCell = Item->asTable()->cellAt(row, firstCol - 1);
								startRow = qMax(cell.row(), leftCell.row());
								endRow = qMin(lastRow, leftCell.isValid() ? leftCell.row() + leftCell.rowSpan() - 1 : lastRow);
								TableCell topLeftCell = Item->asTable()->cellAt(startRow - 1, firstCol - 1);
								TableCell topRightCell = Item->asTable()->cellAt(startRow - 1, firstCol);
								TableCell bottomRightCell = Item->asTable()->cellAt(lastRow + 1, firstCol);
								TableCell bottomLeftCell = Item->asTable()->cellAt(lastRow + 1, firstCol - 1);
								TableBorder topLeft, top, topRight, border, bottomLeft, bottom, bottomRight;
								resolveBordersVertical(topLeftCell, topRightCell, leftCell, cell, bottomLeftCell, bottomRightCell,
													   &topLeft, &top, &topRight, &border, &bottomLeft, &bottom, &bottomRight, Item->asTable());
								if (border.isNull())
									continue; // Quit early if the border to paint is null.
								start.setY(Item->asTable()->rowPosition(startRow));
								end.setY((Item->asTable()->rowPosition(endRow) + Item->asTable()->rowHeight(endRow)));
								joinVertical(border, topLeft, top, topRight, bottomLeft, bottom, bottomRight, &start, &end, &startOffsetFactors, &endOffsetFactors);
								paintBorder(border, start, end, startOffsetFactors, endOffsetFactors, ob);
							}
						}
					}
					colSpan = cell.columnSpan();
				}
			}
			// Pass 3: Paint horizontal borders.
			for (int row = 0; row < Item->asTable()->rows(); ++row)
			{
				int colSpan = 0;
				for (int col = 0; col < Item->asTable()->columns(); col += colSpan)
				{
					TableCell cell = Item->asTable()->cellAt(row, col);
					if (row == cell.row())
					{
						const int lastRow = cell.row() + cell.rowSpan() - 1;
						const int lastCol = cell.column() + cell.columnSpan() - 1;
						const double borderY = (Item->asTable()->rowPosition(lastRow) + Item->asTable()->rowHeight(lastRow));
						QPointF start(0.0, borderY);
						QPointF end(0.0, borderY);
						QPointF startOffsetFactors, endOffsetFactors;
						int startCol, endCol;
						for (int col = cell.column(); col <= lastCol; col += endCol - startCol + 1)
						{
							TableCell bottomCell = Item->asTable()->cellAt(lastRow + 1, col);
							startCol = qMax(cell.column(), bottomCell.column());
							endCol = qMin(lastCol, bottomCell.isValid() ? bottomCell.column() + bottomCell.columnSpan() - 1 : lastCol);
							TableCell topLeftCell = Item->asTable()->cellAt(lastRow, startCol - 1);
							TableCell topRightCell = Item->asTable()->cellAt(lastRow, endCol + 1);
							TableCell bottomRightCell = Item->asTable()->cellAt(lastRow + 1, endCol + 1);
							TableCell bottomLeftCell = Item->asTable()->cellAt(lastRow + 1, startCol - 1);
							TableBorder topLeft, left, bottomLeft, border, topRight, right, bottomRight;
							resolveBordersHorizontal(topLeftCell, cell, topRightCell, bottomLeftCell, bottomCell,
													 bottomRightCell, &topLeft, &left, &bottomLeft, &border, &topRight, &right, &bottomRight, Item->asTable());
							if (border.isNull())
								continue; // Quit early if the border is null.
							start.setX(Item->asTable()->columnPosition(startCol));
							end.setX(Item->asTable()->columnPosition(endCol) + Item->asTable()->columnWidth(endCol));
							joinHorizontal(border, topLeft, left, bottomLeft, topRight, right, bottomRight, &start, &end, &startOffsetFactors, &endOffsetFactors);
							paintBorder(border, start, end, startOffsetFactors, endOffsetFactors, ob);
						}
						if (row == 0)
						{
							const int firstRow = cell.row();
							const int lastCol = cell.column() + cell.columnSpan() - 1;
							const double borderY = Item->asTable()->rowPosition(firstRow);
							QPointF start(0.0, borderY);
							QPointF end(0.0, borderY);
							QPointF startOffsetFactors, endOffsetFactors;
							int startCol, endCol;
							for (int col = cell.column(); col <= lastCol; col += endCol - startCol + 1)
							{
								TableCell topCell = Item->asTable()->cellAt(firstRow - 1, col);
								startCol = qMax(cell.column(), topCell.column());
								endCol = qMin(lastCol, topCell.isValid() ? topCell.column() + topCell.columnSpan() - 1 : lastCol);
								TableCell topLeftCell = Item->asTable()->cellAt(firstRow - 1, startCol - 1);
								TableCell topRightCell = Item->asTable()->cellAt(firstRow - 1, endCol + 1);
								TableCell bottomRightCell = Item->asTable()->cellAt(firstRow, endCol + 1);
								TableCell bottomLeftCell = Item->asTable()->cellAt(firstRow, startCol - 1);
								TableBorder topLeft, left, bottomLeft, border, topRight, right, bottomRight;
								resolveBordersHorizontal(topLeftCell, topCell, topRightCell, bottomLeftCell, cell,
														 bottomRightCell, &topLeft, &left, &bottomLeft, &border, &topRight, &right, &bottomRight, Item->asTable());
								if (border.isNull())
									continue; // Quit early if the border is null.
								start.setX(Item->asTable()->columnPosition(startCol));
								end.setX(Item->asTable()->columnPosition(endCol) + Item->asTable()->columnWidth(endCol));
								joinHorizontal(border, topLeft, left, bottomLeft, topRight, right, bottomRight, &start, &end, &startOffsetFactors, &endOffsetFactors);
								paintBorder(border, start, end, startOffsetFactors, endOffsetFactors, ob);
							}
						}
					}
					colSpan = cell.columnSpan();
				}
			}
			// Pass 4: Paint cell content.
			for (int row = 0; row < Item->asTable()->rows(); ++row)
			{
				for (int col = 0; col < Item->asTable()->columns(); col ++)
				{
					TableCell cell = Item->asTable()->cellAt(row, col);
					if (cell.row() == row && cell.column() == col)
					{
						PageItem* textFrame = cell.textFrame();
						ProcessItemOnPage(cell.contentRect().x(), cell.contentRect().y(), textFrame, &ob);
					}
				}
			}
			break;
		default:
			break;
	}
	if (Item->GrMask > 0)
		ob.setAttribute("mask", handleMask(Item, xOffset, yOffset));
	if (!Item->AutoName)
		ob.setAttribute("id", Item->itemName());
	parentElem->appendChild(ob);
}

void SVGExPlug::paintBorder(const TableBorder& border, const QPointF& start, const QPointF& end, const QPointF& startOffsetFactors, const QPointF& endOffsetFactors, QDomElement &ob)
{
	QPointF lineStart, lineEnd;
	foreach (const TableBorderLine& line, border.borderLines())
	{
		lineStart.setX(start.x() + line.width() * startOffsetFactors.x());
		lineStart.setY(start.y() + line.width() * startOffsetFactors.y());
		lineEnd.setX(end.x() + line.width() * endOffsetFactors.x());
		lineEnd.setY(end.y() + line.width() * endOffsetFactors.y());
		QDomElement cl = docu.createElement("path");
		cl.setAttribute("d", "M "+FToStr(lineStart.x())+" "+FToStr(lineStart.y())+" L "+FToStr(lineEnd.x())+" "+FToStr(lineEnd.y()));
		QString stroke = "";
		if (line.color() != CommonStrings::None)
			cl.setAttribute("stroke", SetColor(line.color(), line.shade()));
		if (line.width() != 0.0)
			stroke = "stroke-width:"+FToStr(line.width())+";";
		else
			stroke = "stroke-width:1px;";
		stroke += " stroke-linecap:butt;";
		stroke += " stroke-linejoin:miter;";
		stroke += " stroke-dasharray:";
		if (line.style() == Qt::SolidLine)
			stroke += "none;";
		else
		{
			QString Da = getDashString(line.style(), qMax(line.width(), 1.0));
			if (Da.isEmpty())
				stroke += "none;";
			else
				stroke += Da.replace(" ", ", ")+";";
		}
		cl.setAttribute("style", stroke);
		ob.appendChild(cl);
	}
}

QDomElement SVGExPlug::processSymbolStroke(PageItem *Item, QString trans)
{
	QDomElement ob;
	ob = docu.createElement("g");
	ob.setAttribute("transform", trans);
	QPainterPath path = Item->PoLine.toQPainterPath(false);
	ScPattern pat = m_Doc->docPatterns[Item->strokePattern()];
	double pLen = path.length() - ((pat.width / 2.0) * (Item->patternStrokeScaleX / 100.0));
	double adv = pat.width * Item->patternStrokeScaleX / 100.0 * Item->patternStrokeSpace;
	double xpos = Item->patternStrokeOffsetX * Item->patternStrokeScaleX / 100.0;
	while (xpos < pLen)
	{
		double currPerc = path.percentAtLength(xpos);
		double currAngle = path.angleAtPercent(currPerc);
		if (currAngle <= 180.0)
			currAngle *= -1.0;
		else
			currAngle = 360.0 - currAngle;
		QPointF currPoint = path.pointAtPercent(currPerc);
		QTransform trans;
		trans.translate(currPoint.x(), currPoint.y());
		trans.rotate(-currAngle);
		trans.translate(0.0, Item->patternStrokeOffsetY);
		trans.rotate(-Item->patternStrokeRotation);
		trans.shear(Item->patternStrokeSkewX, -Item->patternStrokeSkewY);
		trans.scale(Item->patternStrokeScaleX / 100.0, Item->patternStrokeScaleY / 100.0);
		trans.translate(-pat.width / 2.0, -pat.height / 2.0);
		QDomElement obS;
		obS = docu.createElement("use");
		obS.setAttribute("transform", MatrixToStr(trans));
		if (Item->patternStrokeMirrorX)
		{
			trans.translate(pat.width, 0);
			trans.scale(-1, 1);
		}
		if (Item->patternStrokeMirrorY)
		{
			trans.translate(0, pat.height);
			trans.scale(1, -1);
		}
		obS.setAttribute("x", "0");
		obS.setAttribute("y", "0");
		obS.setAttribute("width", FToStr(pat.width));
		obS.setAttribute("height", FToStr(pat.height));
		obS.setAttribute("xlink:href", "#S"+Item->strokePattern());
		ob.appendChild(obS);
		xpos += adv;
	}
	return ob;
}

QDomElement SVGExPlug::processSymbolItem(PageItem *Item, QString trans)
{
	QDomElement ob;
	ob = docu.createElement("use");
	ob.setAttribute("x", "0");
	ob.setAttribute("y", "0");
	ob.setAttribute("width", FToStr(Item->width()));
	ob.setAttribute("height", FToStr(Item->height()));
	ob.setAttribute("xlink:href", "#S"+Item->pattern());
	ScPattern pat = m_Doc->docPatterns[Item->pattern()];
	QString tr = trans + QString(" scale(%1, %2)").arg(Item->width() / pat.width).arg(Item->height() / pat.height);
	ob.setAttribute("transform", tr);
	return ob;
}

QDomElement SVGExPlug::processPolyItem(PageItem *Item, QString trans, QString fill, QString stroke)
{
	bool closedPath;
	QDomElement ob;
	if ((Item->itemType() == PageItem::Polygon) || (Item->itemType() == PageItem::RegularPolygon) || (Item->itemType() == PageItem::Arc))
		closedPath = true;
	else
		closedPath = false;
	if (Item->NamedLStyle.isEmpty())
	{
		if ((!Item->strokePattern().isEmpty()) && (Item->patternStrokePath))
		{
			ob = docu.createElement("g");
			QDomElement ob2 = docu.createElement("path");
			ob2.setAttribute("d", SetClipPath(&Item->PoLine, closedPath));
			ob2.setAttribute("transform", trans);
			ob2.setAttribute("style", fill);
			ob.appendChild(ob2);
			ob.appendChild(processSymbolStroke(Item, trans));
		}
		else
		{
			ob = docu.createElement("path");
			ob.setAttribute("d", SetClipPath(&Item->PoLine, closedPath));
			ob.setAttribute("transform", trans);
			ob.setAttribute("style", fill + stroke);
		}
	}
	else
	{
		ob = docu.createElement("g");
		ob.setAttribute("transform", trans);
		QDomElement ob2 = docu.createElement("path");
		ob2.setAttribute("d", SetClipPath(&Item->PoLine, closedPath));
		ob2.setAttribute("style", fill);
		ob.appendChild(ob2);
		multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
			{
				QDomElement ob3 = docu.createElement("path");
				ob3.setAttribute("d", SetClipPath(&Item->PoLine, closedPath));
				ob3.setAttribute("style", GetMultiStroke(&ml[it], Item));
				ob.appendChild(ob3);
			}
		}
	}
	return ob;
}

QDomElement SVGExPlug::processLineItem(PageItem *Item, QString trans, QString stroke)
{
	QDomElement ob;
	if (Item->NamedLStyle.isEmpty())
	{
		ob = docu.createElement("path");
		ob.setAttribute("d", "M 0 0 L "+FToStr(Item->width())+" 0");
		ob.setAttribute("transform", trans);
		ob.setAttribute("style", stroke);
	}
	else
	{
		ob = docu.createElement("g");
		ob.setAttribute("transform", trans);
		multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
			{
				QDomElement ob2 = docu.createElement("path");
				ob2.setAttribute("d", "M 0 0 L "+FToStr(Item->width())+" 0");
				ob2.setAttribute("style", GetMultiStroke(&ml[it], Item));
				ob.appendChild(ob2);
			}
		}
	}
	return ob;
}

QDomElement SVGExPlug::processImageItem(PageItem *Item, QString trans, QString fill, QString stroke)
{
	QDomElement ob;
	ob = docu.createElement("g");
	ob.setAttribute("transform", trans);
	if ((Item->fillColor() != CommonStrings::None) || (Item->GrType != 0))
	{
		QDomElement ob1 = docu.createElement("path");
		ob1.setAttribute("d", SetClipPath(&Item->PoLine, true));
		ob1.setAttribute("style", fill);
		ob.appendChild(ob1);
	}
	if ((Item->PictureIsAvailable) && (!Item->Pfile.isEmpty()))
	{
		QDomElement cl, ob2;
		if (Item->imageClip.size() != 0)
			ob2 = createClipPathElement(&Item->imageClip, &cl);
		else
			ob2 = createClipPathElement(&Item->PoLine, &cl);
		if (!ob2.isNull())
		{
			ob2.setAttribute("clipPathUnits", "userSpaceOnUse");
			ob2.setAttribute("clip-rule", "evenodd");
			QTransform mpc;
			if (Item->imageFlippedH())
			{
				mpc.translate(Item->width(), 0);
				mpc.scale(-1, 1);
			}
			if (Item->imageFlippedV())
			{
				mpc.translate(0, Item->height());
				mpc.scale(1, -1);
			}
			cl.setAttribute("transform", MatrixToStr(mpc));
		}
		QDomElement ob6 = docu.createElement("g");
		if (!ob2.isNull())
			ob6.setAttribute("clip-path", "url(#" + ob2.attribute("id") + ")");
		QDomElement ob3 = docu.createElement("image");
		ScImage img;
		CMSettings cms(m_Doc, Item->IProfile, Item->IRender);
		cms.setUseEmbeddedProfile(Item->UseEmbedded);
		cms.allowSoftProofing(true);
		img.loadPicture(Item->Pfile, Item->pixm.imgInfo.actualPageNumber, cms, ScImage::RGBData, 72);
		img.applyEffect(Item->effectsInUse, m_Doc->PageColors, true);
		if (Options.inlineImages)
		{
			QBuffer buffer;
			buffer.open(QIODevice::WriteOnly);
			img.qImage().save(&buffer, "PNG");
			QByteArray ba = buffer.buffer().toBase64();
			buffer.close();
			ob3.setAttribute("xlink:href", "data:image/png;base64,"+QString(ba));
		}
		else
		{
			QFileInfo fi = QFileInfo(Item->Pfile);
			QString imgFileName = baseDir + "/" + fi.baseName()+".png";
			QFileInfo im = QFileInfo(imgFileName);
			if (im.exists())
				imgFileName = baseDir + "/" + fi.baseName()+"_copy.png";
			img.qImage().save(imgFileName, "PNG");
			QFileInfo fi2 = QFileInfo(imgFileName);
			ob3.setAttribute("xlink:href", fi2.baseName()+".png");
		}
		ob3.setAttribute("x", FToStr(Item->imageXOffset() * Item->imageXScale()));
		ob3.setAttribute("y", FToStr(Item->imageYOffset() * Item->imageYScale()));
		ob3.setAttribute("width", FToStr(img.width() * Item->imageXScale()));
		ob3.setAttribute("height", FToStr(img.height() * Item->imageYScale()));
		QTransform mpa;
		if (Item->imageFlippedH())
		{
			mpa.translate(Item->width(), 0);
			mpa.scale(-1, 1);
		}
		if (Item->imageFlippedV())
		{
			mpa.translate(0, Item->height());
			mpa.scale(1, -1);
		}
		mpa.rotate(Item->imageRotation());
		ob3.setAttribute("transform", MatrixToStr(mpa));
		ob6.appendChild(ob3);
		ob.appendChild(ob6);
	}
	if (Item->NamedLStyle.isEmpty())
	{
		if ((!Item->strokePattern().isEmpty()) && (Item->patternStrokePath))
		{
			QDomElement ob4 = docu.createElement("g");
			QDomElement ob2 = docu.createElement("path");
			ob2.setAttribute("d", SetClipPath(&Item->PoLine, true));
			ob2.setAttribute("transform", trans);
			ob2.setAttribute("style", fill);
			ob4.appendChild(ob2);
			ob4.appendChild(processSymbolStroke(Item, trans));
			ob.appendChild(ob4);
		}
		else
		{
			QDomElement ob4 = docu.createElement("path");
			ob4.setAttribute("d", SetClipPath(&Item->PoLine, true));
			ob4.setAttribute("style", "fill:none; "+stroke);
			ob.appendChild(ob4);
		}
	}
	else
	{
		multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
			{
				QDomElement ob5 = docu.createElement("path");
				ob5.setAttribute("d", SetClipPath(&Item->PoLine, true));
				ob5.setAttribute("style", "fill:none; "+GetMultiStroke(&ml[it], Item));
				ob.appendChild(ob5);
			}
		}
	}
	return ob;
}

QDomElement SVGExPlug::processTextItem(PageItem *Item, QString trans, QString fill, QString stroke)
{
	QDomElement ob;
	ob = docu.createElement("g");
	ob.setAttribute("transform", trans);
	if ((Item->fillColor() != CommonStrings::None) || (Item->GrType != 0))
	{
		QDomElement ob1 = docu.createElement("path");
		ob1.setAttribute("d", SetClipPath(&Item->PoLine, true));
		ob1.setAttribute("style", fill);
		ob.appendChild(ob1);
	}
	double x, y, wide;
	QString chstr;
	for (uint ll=0; ll < Item->itemText.lines(); ++ll)
	{
		LineSpec ls = Item->itemText.line(ll);
		double CurX = ls.x;
		for (int a = ls.firstItem; a <= ls.lastItem; ++a)
		{
			x = 0.0;
			y = 0.0;
			ScText * hl = Item->itemText.item_p(a);
			const CharStyle& charStyle(Item->itemText.charStyle(a));
			chstr = Item->itemText.text(a,1);
			if ((chstr == QChar(13)) || (chstr == QChar(29)))
			{
				if (chstr == QChar(29))
					CurX += hl->glyph.wide();
				continue;
			}
			if (chstr == QChar(30))
			{
				chstr = Item->ExpandToken(a);
				if (chstr == QChar(32))
				{
					CurX += hl->glyph.wide();
					continue;
				}
			}
			double chs = charStyle.fontSize();
			if (hl->effects() & ScStyle_SmallCaps)
			{
				if (chstr.toUpper() != chstr)
				{
					chs = qMax(static_cast<int>(hl->fontSize() * m_Doc->typographicPrefs().valueSmallCaps / 100), 1);
					chstr = chstr.toUpper();
				}
			}
			else if (hl->effects() & ScStyle_AllCaps)
				chstr = chstr.toUpper();
			uint chr = chstr[0].unicode();
			QTransform chma, chma2, chma3, chma4, chma6;
			QTransform trafo = QTransform( 1, 0, 0, 1, CurX, ls.y );
			if (Item->rotation() != 0)
			{
				QTransform sca;
				sca.translate(-Item->xPos(), -Item->yPos());
				trafo *= sca;
			}
			chma.scale(hl->glyph.scaleH * charStyle.fontSize() / 100.00, hl->glyph.scaleV * charStyle.fontSize() / 100.0);
			if (Item->reversed())
			{
				if (a < Item->itemText.length()-1)
					wide = hl->font().charWidth(chstr[0], hl->fontSize(), Item->itemText.text(a+1));
				else
					wide = hl->font().charWidth(chstr[0], hl->fontSize());
				chma3.scale(-1, 1);
				chma3.translate(-wide, 0);
			}
			chma4.translate(0, Item->BaseOffs - (charStyle.fontSize() / 10.0) * hl->glyph.scaleV);
			if (charStyle.effects() & (ScStyle_Subscript | ScStyle_Superscript | ScLayout_DropCap))
				chma6.translate(0, hl->glyph.yoffset);
			if (hl->baselineOffset() != 0)
				chma6.translate(0, (-charStyle.fontSize() / 10.0) * (charStyle.baselineOffset() / 1000.0));
			QTransform finalMat = chma * chma2 * chma3 * chma4 * chma6 * trafo;
			if (Item->rotation() != 0)
			{
				QTransform sca;
				sca.translate(Item->xPos(), Item->yPos());
				finalMat *= sca;
			}
			if (hl->hasObject(m_Doc))
			{
				ob.appendChild(processInlineItem(CurX + hl->glyph.xoffset, ls.y + hl->glyph.yoffset, finalMat, hl, false, trans));
				CurX += (hl->getItem(m_Doc)->width() + hl->getItem(m_Doc)->lineWidth()) * hl->glyph.scaleH;
			}
			else
			{
				QString glName;
				if (chstr > QChar(32))
					glName = handleGlyph(chr, hl);
				if ((charStyle.effects() & ScStyle_Shadowed) && (charStyle.strokeColor() != CommonStrings::None) && (chstr > QChar(32)))
				{
					QTransform sha = finalMat;
					QTransform shad;
					shad.translate(charStyle.fontSize() * charStyle.shadowXOffset() / 10000.0, -charStyle.fontSize() * charStyle.shadowYOffset() / 10000.0);
					sha *= shad;
					QDomElement ob2 = docu.createElement("use");
					ob2.setAttribute("xlink:href", "#" + glName);
					ob2.setAttribute("transform", MatrixToStr(sha));
					ob2.setAttribute("style", "fill:"+SetColor(hl->strokeColor(), hl->strokeShade())+";" + "stroke:none;");
					ob.appendChild(ob2);
				}
				QChar chstc = hl->ch;
				if (((charStyle.effects() & ScStyle_Underline) && !SpecialChars::isBreak(chstc))
					|| ((charStyle.effects() & ScStyle_UnderlineWords) && !chstc.isSpace() && !SpecialChars::isBreak(chstc)))
				{
					x = CurX;
					y = ls.y;
					double Ulen = hl->glyph.xadvance;
					double Upos, lw, kern;
					if (charStyle.effects() & ScLayout_StartOfLine)
						kern = 0;
					else
						kern = charStyle.fontSize() * charStyle.tracking() / 10000.0;
					if ((charStyle.underlineOffset() != -1) || (charStyle.underlineWidth() != -1))
					{
						if (charStyle.underlineOffset() != -1)
							Upos = (charStyle.underlineOffset() / 1000.0) * (charStyle.font().descent(charStyle.fontSize() / 10.0));
						else
							Upos = charStyle.font().underlinePos(charStyle.fontSize() / 10.0);
						if (charStyle.underlineWidth() != -1)
							lw = (charStyle.underlineWidth() / 1000.0) * (charStyle.fontSize() / 10.0);
						else
							lw = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
					}
					else
					{
						Upos = charStyle.font().underlinePos(charStyle.fontSize() / 10.0);
						lw = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
					}
					if (charStyle.baselineOffset() != 0)
						Upos += (charStyle.fontSize() / 10.0) * (charStyle.baselineOffset() / 1000.0);
					QDomElement ob6 = docu.createElement("path");
					if (charStyle.effects() & ScStyle_Subscript)
						ob6.setAttribute("d", QString("M %1 %2 L%3 %4").arg(x + hl->glyph.xoffset-kern).arg(y + hl->glyph.yoffset - Upos).arg(x + hl->glyph.xoffset+Ulen).arg(y + hl->glyph.yoffset - Upos));
					else
						ob6.setAttribute("d", QString("M %1 %2 L%3 %4").arg(x + hl->glyph.xoffset-kern).arg(y - Upos).arg(x + hl->glyph.xoffset+Ulen).arg(y - Upos));
					QString sT = "stroke:none;";
					if (charStyle.fillColor() != CommonStrings::None)
					{
						sT = "stroke:"+SetColor(charStyle.fillColor(), charStyle.fillShade())+";";
						sT += " stroke-width:"+FToStr(lw)+";";
					}
					ob6.setAttribute("style", "fill:none;" + sT);
					ob.appendChild(ob6);
				}
				if (chstr > QChar(32))
				{
					QDomElement ob3 = docu.createElement("use");
					ob3.setAttribute("xlink:href", "#" + glName);
					ob3.setAttribute("transform", MatrixToStr(finalMat));
					QString fT = "fill:"+SetColor(hl->fillColor(), hl->fillShade())+";";
					QString sT = "stroke:none;";
					if (charStyle.effects() & ScStyle_Outline)
					{
						sT = "stroke:"+SetColor(hl->strokeColor(), hl->strokeShade())+";";
						sT += " stroke-width:"+FToStr(chs * hl->outlineWidth() / 10000.0)+";";
					}
					ob3.setAttribute("style", fT + sT);
					ob.appendChild(ob3);
				}
				if (charStyle.effects() & ScStyle_Strikethrough)
				{
					x = CurX;
					y = ls.y;
					double Ulen = hl->glyph.xadvance;
					double Upos, lw, kern;
					if (charStyle.effects() & ScLayout_StartOfLine)
						kern = 0;
					else
						kern = charStyle.fontSize() * charStyle.tracking() / 10000.0;
					if ((charStyle.strikethruOffset() != -1) || (charStyle.strikethruWidth() != -1))
					{
						if (charStyle.strikethruOffset() != -1)
							Upos = (charStyle.strikethruOffset() / 1000.0) * (charStyle.font().ascent(charStyle.fontSize() / 10.0));
						else
							Upos = charStyle.font().strikeoutPos(charStyle.fontSize() / 10.0);
						if (charStyle.strikethruWidth() != -1)
							lw = (charStyle.strikethruWidth() / 1000.0) * (charStyle.fontSize() / 10.0);
						else
							lw = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
					}
					else
					{
						Upos = charStyle.font().strikeoutPos(charStyle.fontSize() / 10.0);
						lw = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
					}
					if (charStyle.baselineOffset() != 0)
						Upos += (charStyle.fontSize() / 10.0) * hl->glyph.scaleV * (charStyle.baselineOffset() / 1000.0);
					QDomElement ob7 = docu.createElement("path");
					ob7.setAttribute("d", QString("M %1 %2 L%3 %4").arg(x + hl->glyph.xoffset-kern).arg(y + hl->glyph.yoffset - Upos).arg(x + hl->glyph.xoffset+Ulen).arg(y + hl->glyph.yoffset - Upos));
					QString sT = "stroke:none;";
					if (charStyle.fillColor() != CommonStrings::None)
					{
						sT = "stroke:"+SetColor(charStyle.fillColor(), charStyle.fillShade())+";";
						sT += " stroke-width:"+FToStr(lw)+";";
					}
					ob7.setAttribute("style", "fill:none;" + sT);
					ob.appendChild(ob7);
				}
				CurX += hl->glyph.wide();
			}
		}
	}
	if (Item->NamedLStyle.isEmpty())
	{
		QDomElement ob4 = docu.createElement("path");
		ob4.setAttribute("d", SetClipPath(&Item->PoLine, true));
		ob4.setAttribute("style", "fill:none; "+stroke);
		if ((!Item->strokePattern().isEmpty()) && (Item->patternStrokePath))
			ob4.appendChild(processSymbolStroke(Item, trans));
		ob.appendChild(ob4);
	}
	else
	{
		multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
			{
				QDomElement ob5 = docu.createElement("path");
				ob5.setAttribute("d", SetClipPath(&Item->PoLine, true));
				ob5.setAttribute("style", "fill:none; "+GetMultiStroke(&ml[it], Item));
				ob.appendChild(ob5);
			}
		}
	}
	return ob;
}

QDomElement SVGExPlug::processPathTextItem(PageItem *Item, QString trans, QString stroke)
{
	QDomElement ob;
	ob = docu.createElement("g");
	ob.setAttribute("transform", trans);
	if (Item->PoShow)
	{
		if (Item->NamedLStyle.isEmpty())
		{
			QDomElement ob4 = docu.createElement("path");
			ob4.setAttribute("d", SetClipPath(&Item->PoLine, false));
			ob4.setAttribute("style", "fill:none; "+stroke);
			ob.appendChild(ob4);
		}
		else
		{
			multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
			{
				if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
				{
					QDomElement ob5 = docu.createElement("path");
					ob5.setAttribute("d", SetClipPath(&Item->PoLine, false));
					ob5.setAttribute("style", "fill:none; "+GetMultiStroke(&ml[it], Item));
					ob.appendChild(ob5);
				}
			}
		}
	}
	double wide;
	QString chstr;
	for (int a = 0; a < Item->asPathText()->itemRenderText.length(); ++a)
	{
		ScText *hl = Item->asPathText()->itemRenderText.item_p(a);
		const CharStyle& charStyle(Item->asPathText()->itemRenderText.charStyle(a));
		chstr = Item->asPathText()->itemRenderText.text(a,1);
		if ((chstr == QChar(13)) || (chstr == QChar(29)))
			continue;
		if (chstr == QChar(30))
		{
			chstr = Item->ExpandToken(a);
			if (chstr == QChar(32))
				continue;
		}
		double chs = charStyle.fontSize();
		if (hl->effects() & ScStyle_SmallCaps)
		{
			if (chstr.toUpper() != chstr)
			{
				chs = qMax(static_cast<int>(hl->fontSize() * m_Doc->typographicPrefs().valueSmallCaps / 100), 1);
				chstr = chstr.toUpper();
			}
		}
		else if (hl->effects() & ScStyle_AllCaps)
			chstr = chstr.toUpper();
		uint chr = chstr[0].unicode();
		QPointF tangt = QPointF( cos(hl->PRot), sin(hl->PRot) );
		QTransform chma, chma2, chma3, chma4, chma6;
		QTransform trafo = QTransform( 1, 0, 0, -1, -hl->PDx, 0 );
		if (Item->textPathFlipped)
			trafo *= QTransform(1, 0, 0, -1, 0, 0);
		if (Item->textPathType == 0)
			trafo *= QTransform( tangt.x(), tangt.y(), tangt.y(), -tangt.x(), hl->PtransX, hl->PtransY );
		else if (Item->textPathType == 1)
			trafo *= QTransform(1, 0, 0, -1, hl->PtransX, hl->PtransY );
		else if (Item->textPathType == 2)
		{
			double a = 1;
			double b = -1;
			if (tangt.x() < 0)
			{
				a = -1;
				b = 1;
			}
			if (fabs(tangt.x()) > 0.1)
				trafo *= QTransform( a, (tangt.y() / tangt.x()) * b, 0, -1, hl->PtransX, hl->PtransY ); // ID's Skew mode
			else
				trafo *= QTransform( a, 6 * b, 0, -1, hl->PtransX, hl->PtransY );
		}
		if (hl->hasObject(m_Doc))
		{
			QTransform finalMat = chma * chma2 * chma3 * chma4 * chma6 * trafo;
			ob.appendChild(processInlineItem(0, 0, finalMat, hl, true, trans));
		}
		else
		{
			if (Item->rotation() != 0)
			{
				QTransform sca;
				sca.translate(-Item->xPos(), -Item->yPos());
				trafo *= sca;
			}
			chma.scale(hl->glyph.scaleH * charStyle.fontSize() / 100.00, hl->glyph.scaleV * charStyle.fontSize() / 100.0);
			if (Item->reversed())
			{
				if (a < Item->itemText.length()-1)
					wide = hl->font().charWidth(chstr[0], hl->fontSize(), Item->itemText.text(a+1));
				else
					wide = hl->font().charWidth(chstr[0], hl->fontSize());
				chma3.scale(-1, 1);
				chma3.translate(-wide, 0);
			}
			chma4.translate(0, Item->BaseOffs - (charStyle.fontSize() / 10.0) * hl->glyph.scaleV);
			if (charStyle.effects() & (ScStyle_Subscript | ScStyle_Superscript | ScLayout_DropCap))
				chma6.translate(0, hl->glyph.yoffset);
			if (hl->baselineOffset() != 0)
				chma6.translate(0, (-charStyle.fontSize() / 10.0) * (charStyle.baselineOffset() / 1000.0));
			QTransform finalMat = chma * chma2 * chma3 * chma4 * chma6 * trafo;
			if (Item->rotation() != 0)
			{
				QTransform sca;
				sca.translate(Item->xPos(), Item->yPos());
				finalMat *= sca;
			}
			QChar chstc = hl->ch;
			if (((charStyle.effects() & ScStyle_Underline) && !SpecialChars::isBreak(chstc))
				|| ((charStyle.effects() & ScStyle_UnderlineWords) && !chstc.isSpace() && !SpecialChars::isBreak(chstc)))
			{
				QTransform stro = chma2 * chma3 * chma6 * trafo;
				if (Item->rotation() != 0)
				{
					QTransform sca;
					sca.translate(Item->xPos(), Item->yPos());
					stro *= sca;
				}
				double Ulen = hl->glyph.xadvance;
				double Upos, Uwid, kern;
				if (hl->effects() & ScLayout_StartOfLine)
					kern = 0;
				else
					kern = charStyle.fontSize() * charStyle.tracking() / 10000.0;
				if ((charStyle.underlineOffset() != -1) || (charStyle.underlineWidth() != -1))
				{
					if (charStyle.underlineOffset() != -1)
						Upos = (charStyle.underlineOffset() / 1000.0) * (charStyle.font().descent(charStyle.fontSize() / 10.0));
					else
						Upos = charStyle.font().underlinePos(charStyle.fontSize() / 10.0);
					if (charStyle.underlineWidth() != -1)
						Uwid = (charStyle.underlineWidth() / 1000.0) * (charStyle.fontSize() / 10.0);
					else
						Uwid = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
				}
				else
				{
					Upos = charStyle.font().underlinePos(charStyle.fontSize() / 10.0);
					Uwid = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
				}
				if (charStyle.baselineOffset() != 0)
					Upos += (charStyle.fontSize() / 10.0) * (charStyle.baselineOffset() / 1000.0);
				QDomElement ob8 = docu.createElement("path");
				ob8.setAttribute("transform", MatrixToStr(stro));
				if (charStyle.effects() & ScStyle_Subscript)
					ob8.setAttribute("d", QString("M %1 %2 L%3 %4").arg(hl->glyph.xoffset-kern).arg(-Upos).arg(hl->glyph.xoffset+Ulen).arg(-Upos));
				else
					ob8.setAttribute("d", QString("M %1 %2 L%3 %4").arg(hl->glyph.xoffset-kern).arg(-(Upos + hl->glyph.yoffset)).arg(hl->glyph.xoffset+Ulen).arg(-(Upos + hl->glyph.yoffset)));
				QString sT = "stroke:none;";
				if (charStyle.fillColor() != CommonStrings::None)
				{
					sT = "stroke:"+SetColor(charStyle.fillColor(), charStyle.fillShade())+";";
					sT += " stroke-width:"+FToStr(Uwid)+";";
				}
				ob8.setAttribute("style", "fill:none;" + sT);
				ob.appendChild(ob8);
			}
			if (chstr > QChar(32))
			{
				QString glName = handleGlyph(chr, hl);
				if ((charStyle.effects() & ScStyle_Shadowed) && (charStyle.strokeColor() != CommonStrings::None))
				{
					QTransform sha = finalMat;
					QTransform shad;
					shad.translate(charStyle.fontSize() * charStyle.shadowXOffset() / 10000.0, -charStyle.fontSize() * charStyle.shadowYOffset() / 10000.0);
					sha *= shad;
					QDomElement ob2 = docu.createElement("use");
					ob2.setAttribute("xlink:href", "#" + glName);
					ob2.setAttribute("transform", MatrixToStr(sha));
					ob2.setAttribute("style", "fill:"+SetColor(hl->strokeColor(), hl->strokeShade())+";" + "stroke:none;");
					ob.appendChild(ob2);
				}
				QDomElement ob1 = docu.createElement("use");
				ob1.setAttribute("xlink:href", "#" + glName);
				ob1.setAttribute("transform", MatrixToStr(finalMat));
				QString fT = "fill:"+SetColor(hl->fillColor(), hl->fillShade())+";";
				QString sT = "stroke:none;";
				if (charStyle.effects() & ScStyle_Outline)
				{
					sT = "stroke:"+SetColor(hl->strokeColor(), hl->strokeShade())+";";
					sT += " stroke-width:"+FToStr(chs * hl->outlineWidth() / 10000.0)+";";
				}
				ob1.setAttribute("style", fT + sT);
				ob.appendChild(ob1);
			}
			if (charStyle.effects() & ScStyle_Strikethrough)
			{
				QTransform stro = chma2 * chma3 * chma6 * trafo;
				if (Item->rotation() != 0)
				{
					QTransform sca;
					sca.translate(Item->xPos(), Item->yPos());
					stro *= sca;
				}
				double Ulen = hl->glyph.xadvance;
				double Upos, Uwid, kern;
				if (hl->effects() & ScLayout_StartOfLine)
					kern = 0;
				else
					kern = charStyle.fontSize() * charStyle.tracking() / 10000.0;
				if ((charStyle.strikethruOffset() != -1) || (charStyle.strikethruWidth() != -1))
				{
					if (charStyle.strikethruOffset() != -1)
						Upos = (charStyle.strikethruOffset() / 1000.0) * (charStyle.font().ascent(charStyle.fontSize() / 10.0));
					else
						Upos = charStyle.font().strikeoutPos(charStyle.fontSize() / 10.0);
					if (charStyle.strikethruWidth() != -1)
						Uwid = (charStyle.strikethruWidth() / 1000.0) * (charStyle.fontSize() / 10.0);
					else
						Uwid = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
				}
				else
				{
					Upos = charStyle.font().strikeoutPos(charStyle.fontSize() / 10.0);
					Uwid = qMax(charStyle.font().strokeWidth(charStyle.fontSize() / 10.0), 1.0);
				}
				if (charStyle.baselineOffset() != 0)
					Upos += (charStyle.fontSize() / 10.0) * (charStyle.baselineOffset() / 1000.0);
				QDomElement ob7 = docu.createElement("path");
				ob7.setAttribute("transform", MatrixToStr(stro));
				ob7.setAttribute("d", QString("M %1 %2 L%3 %4").arg(hl->glyph.xoffset-kern).arg(-Upos).arg(hl->glyph.xoffset+Ulen).arg(-Upos));
				QString sT = "stroke:none;";
				if (charStyle.fillColor() != CommonStrings::None)
				{
					sT = "stroke:"+SetColor(charStyle.fillColor(), charStyle.fillShade())+";";
					sT += " stroke-width:"+FToStr(Uwid)+";";
				}
				ob7.setAttribute("style", "fill:none;" + sT);
				ob.appendChild(ob7);
			}
		}
	}
	return ob;
}

QDomElement SVGExPlug::processInlineItem(double xpos, double ypos, QTransform &finalMat, ScText *hl, bool pathT, QString trans)
{
	const CharStyle & charStyle(*hl);
	QList<PageItem*> emG = hl->getGroupedItems(m_Doc);
	QDomElement layerGroup = docu.createElement("g");
	if (pathT)
		layerGroup.setAttribute("transform", MatrixToStr(finalMat));
	for (int em = 0; em < emG.count(); ++em)
	{
		PageItem* embedded = emG.at(em);
		QDomElement obE;
		QString fill = getFillStyle(embedded);
		QString stroke = "stroke:none";
		stroke = getStrokeStyle(embedded);
		switch (embedded->itemType())
		{
			case PageItem::Arc:
			case PageItem::Polygon:
			case PageItem::PolyLine:
			case PageItem::RegularPolygon:
			case PageItem::Spiral:
				obE = processPolyItem(embedded, trans, fill, stroke);
				if ((embedded->lineColor() != CommonStrings::None) && ((embedded->startArrowIndex() != 0) || (embedded->endArrowIndex() != 0)))
					obE = processArrows(embedded, obE, trans);
				break;
			case PageItem::Line:
				obE = processLineItem(embedded, trans, stroke);
				if ((embedded->lineColor() != CommonStrings::None) && ((embedded->startArrowIndex() != 0) || (embedded->endArrowIndex() != 0)))
					obE = processArrows(embedded, obE, trans);
				break;
			case PageItem::ImageFrame:
			case PageItem::LatexFrame:
				obE = processImageItem(embedded, trans, fill, stroke);
				break;
			case PageItem::TextFrame:
				obE = processTextItem(embedded, trans, fill, stroke);
				break;
			case PageItem::PathText:
				obE = processPathTextItem(embedded, trans, stroke);
				break;
			case PageItem::Symbol:
				obE = processSymbolItem(embedded, trans);
				break;
			default:
				break;
		}
		QTransform mm;
		mm.translate(xpos + embedded->gXpos * (charStyle.scaleH() / 1000.0), (ypos - (embedded->gHeight * (charStyle.scaleV() / 1000.0)) + embedded->gYpos * (charStyle.scaleV() / 1000.0)));
		if (charStyle.baselineOffset() != 0)
			mm.translate(0, embedded->gHeight * (charStyle.baselineOffset() / 1000.0));
		if (charStyle.scaleH() != 1000)
			mm.scale(charStyle.scaleH() / 1000.0, 1);
		if (charStyle.scaleV() != 1000)
			mm.scale(1, charStyle.scaleV() / 1000.0);
		mm.rotate(embedded->rotation());
		obE.setAttribute("transform", MatrixToStr(mm));
		layerGroup.appendChild(obE);
	}
	return layerGroup;
}

QString SVGExPlug::handleGlyph(uint chr, ScText *hl)
{
	if (chr == 32)
		return "SPACE";
	QString glName = QString("Gl%1%2").arg(hl->font().psName().simplified().replace(QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )).arg(chr);
	if (glyphNames.contains(glName))
		return glName;
	uint gl = hl->font().char2CMap(chr);
	FPointArray pts = hl->font().glyphOutline(gl);
	QDomElement ob = docu.createElement("path");
	ob.setAttribute("d", SetClipPath(&pts, true));
	ob.setAttribute("id", glName);
	globalDefs.appendChild(ob);
	glyphNames.append(glName);
	return glName;
}

QDomElement SVGExPlug::processArrows(PageItem *Item, QDomElement line, QString trans)
{
	QDomElement ob, gr;
	gr = docu.createElement("g");
	gr.appendChild(line);
	if (Item->startArrowIndex() != 0)
	{
		QTransform arrowTrans;
		FPointArray arrow = m_Doc->arrowStyles().at(Item->startArrowIndex()-1).points.copy();
		if (Item->itemType() == PageItem::Line)
		{
			arrowTrans.translate(0, 0);
			arrowTrans.scale(Item->startArrowScale() / 100.0, Item->startArrowScale() / 100.0);
			if (Item->NamedLStyle.isEmpty())
			{
				if (Item->lineWidth() != 0.0)
					arrowTrans.scale(Item->lineWidth(), Item->lineWidth());
			}
			else
			{
				multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
				if (ml[ml.size()-1].Width != 0.0)
					arrowTrans.scale(ml[ml.size()-1].Width, ml[ml.size()-1].Width);
			}
			arrowTrans.scale(-1,1);
		}
		else
		{
			FPoint Start = Item->PoLine.point(0);
			for (int xx = 1; xx < Item->PoLine.size(); xx += 2)
			{
				FPoint Vector = Item->PoLine.point(xx);
				if ((Start.x() != Vector.x()) || (Start.y() != Vector.y()))
				{
					double r = atan2(Start.y()-Vector.y(),Start.x()-Vector.x())*(180.0/M_PI);
					arrowTrans.translate(Start.x(), Start.y());
					arrowTrans.rotate(r);
					arrowTrans.scale(Item->startArrowScale() / 100.0, Item->startArrowScale() / 100.0);
					if (Item->NamedLStyle.isEmpty())
					{
						if (Item->lineWidth() != 0.0)
							arrowTrans.scale(Item->lineWidth(), Item->lineWidth());
					}
					else
					{
						multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
						if (ml[ml.size()-1].Width != 0.0)
							arrowTrans.scale(ml[ml.size()-1].Width, ml[ml.size()-1].Width);
					}
					break;
				}
			}
		}
		arrow.map(arrowTrans);
		if (Item->NamedLStyle.isEmpty())
		{
			ob = docu.createElement("path");
			ob.setAttribute("d", SetClipPath(&arrow, true));
			ob.setAttribute("transform", trans);
			QString aFill;
			if (!Item->strokePattern().isEmpty())
			{
				QString pattID = Item->strokePattern()+IToStr(PattCount);
				PattCount++;
				ScPattern pa = m_Doc->docPatterns[Item->strokePattern()];
				QDomElement patt = docu.createElement("pattern");
				patt.setAttribute("id", pattID);
				patt.setAttribute("height", pa.height);
				patt.setAttribute("width", pa.width);
				patt.setAttribute("patternUnits", "userSpaceOnUse");
				double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternSpace;
				Item->strokePatternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternSpace);
				bool mirrorX, mirrorY;
				Item->strokePatternFlip(mirrorX, mirrorY);
				QTransform mpa;
				mpa.translate(-Item->lineWidth() / 2.0, -Item->lineWidth() / 2.0);
				mpa.translate(patternOffsetX, patternOffsetY);
				mpa.rotate(patternRotation);
				mpa.shear(-patternSkewX, patternSkewY);
				mpa.scale(pa.scaleX, pa.scaleY);
				mpa.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
				if (mirrorX)
					mpa.scale(-1, 1);
				if (mirrorY)
					mpa.scale(1, -1);
				patt.setAttribute("patternTransform", MatrixToStr(mpa));
				patt.setAttribute("xlink:href", "#"+Item->strokePattern());
				globalDefs.appendChild(patt);
				aFill += "fill:url(#"+pattID+");";
			}
			else if (Item->GrTypeStroke > 0)
			{
				QDomElement grad;
				if (Item->GrTypeStroke == 7)
				{
					grad = docu.createElement("radialGradient");
					grad.setAttribute("r", FToStr(sqrt(pow(Item->GrStrokeEndX - Item->GrStrokeStartX, 2) + pow(Item->GrStrokeEndY - Item->GrStrokeStartY,2))));
					grad.setAttribute("cx", FToStr(Item->GrStrokeStartX));
					grad.setAttribute("cy", FToStr(Item->GrStrokeStartY));
				}
				else
				{
					grad = docu.createElement("linearGradient");
					grad.setAttribute("x1", FToStr(Item->GrStrokeStartX));
					grad.setAttribute("y1", FToStr(Item->GrStrokeStartY));
					grad.setAttribute("x2", FToStr(Item->GrStrokeEndX));
					grad.setAttribute("y2", FToStr(Item->GrStrokeEndY));
				}
				bool   isFirst = true;
				double actualStop = 0.0, lastStop = 0.0;
				QList<VColorStop*> cstops = Item->stroke_gradient.colorStops();
				for (uint cst = 0; cst < Item->stroke_gradient.Stops(); ++cst)
				{
					actualStop = cstops.at(cst)->rampPoint;
					if ((actualStop != lastStop) || (isFirst))
					{
						QDomElement itcl = docu.createElement("stop");
						itcl.setAttribute("offset", FToStr(cstops.at(cst)->rampPoint*100)+"%");
						if (cstops.at(cst)->name == CommonStrings::None)
							itcl.setAttribute("stop-opacity", FToStr(0));
						else
							itcl.setAttribute("stop-opacity", FToStr(cstops.at(cst)->opacity));
						itcl.setAttribute("stop-color", SetColor(cstops.at(cst)->name, cstops.at(cst)->shade));
						grad.appendChild(itcl);
						lastStop = actualStop;
						isFirst  = false;
					}
				}
				grad.setAttribute("id", "Grad"+IToStr(GradCount));
				grad.setAttribute("gradientUnits", "userSpaceOnUse");
				globalDefs.appendChild(grad);
				aFill = " fill:url(#Grad"+IToStr(GradCount)+");";
				GradCount++;
			}
			else
				aFill = "fill:"+SetColor(Item->lineColor(), Item->lineShade())+";";
			if (Item->lineTransparency() != 0)
				aFill += " fill-opacity:"+FToStr(1.0 - Item->lineTransparency())+";";
			ob.setAttribute("style", aFill + " stroke:none;");
			gr.appendChild(ob);
		}
		else
		{
			multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
			if (ml[0].Color != CommonStrings::None)
			{
				ob = docu.createElement("path");
				ob.setAttribute("d", SetClipPath(&arrow, true));
				ob.setAttribute("transform", trans);
				QString aFill = "fill:"+SetColor(ml[0].Color, ml[0].Shade)+";";
				ob.setAttribute("style", aFill + " stroke:none;");
				gr.appendChild(ob);
			}
			for (int it = ml.size()-1; it > 0; it--)
			{
				if (ml[it].Color != CommonStrings::None)
				{
					QDomElement ob5 = docu.createElement("path");
					ob5.setAttribute("d", SetClipPath(&arrow, true));
					ob5.setAttribute("transform", trans);
					QString stroke = "fill:none; stroke:"+SetColor(ml[it].Color, ml[it].Shade)+"; stroke-linecap:butt; stroke-linejoin:miter; stroke-dasharray:none;";
					if (ml[it].Width != 0.0)
						stroke += " stroke-width:"+FToStr(ml[it].Width)+";";
					else
						stroke += " stroke-width:1px;";
					ob5.setAttribute("style", stroke);
					gr.appendChild(ob5);
				}
			}
		}
	}
	if (Item->endArrowIndex() != 0)
	{
		QTransform arrowTrans;
		FPointArray arrow = m_Doc->arrowStyles().at(Item->endArrowIndex()-1).points.copy();
		if (Item->itemType() == PageItem::Line)
		{
			arrowTrans.translate(Item->width(), 0);
			arrowTrans.scale(Item->endArrowScale() / 100.0, Item->endArrowScale() / 100.0);
			if (Item->NamedLStyle.isEmpty())
			{
				if (Item->lineWidth() != 0.0)
					arrowTrans.scale(Item->lineWidth(), Item->lineWidth());
			}
			else
			{
				multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
				if (ml[ml.size()-1].Width != 0.0)
					arrowTrans.scale(ml[ml.size()-1].Width, ml[ml.size()-1].Width);
			}
		}
		else
		{
			FPoint End = Item->PoLine.point(Item->PoLine.size()-2);
			for (uint xx = Item->PoLine.size()-1; xx > 0; xx -= 2)
			{
				FPoint Vector = Item->PoLine.point(xx);
				if ((End.x() != Vector.x()) || (End.y() != Vector.y()))
				{
					double r = atan2(End.y()-Vector.y(),End.x()-Vector.x())*(180.0/M_PI);
					arrowTrans.translate(End.x(), End.y());
					arrowTrans.rotate(r);
					arrowTrans.scale(Item->endArrowScale() / 100.0, Item->endArrowScale() / 100.0);
					if (Item->NamedLStyle.isEmpty())
					{
						if (Item->lineWidth() != 0.0)
							arrowTrans.scale(Item->lineWidth(), Item->lineWidth());
					}
					else
					{
						multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
						if (ml[ml.size()-1].Width != 0.0)
							arrowTrans.scale(ml[ml.size()-1].Width, ml[ml.size()-1].Width);
					}
					break;
				}
			}
		}
		arrow.map(arrowTrans);
		if (Item->NamedLStyle.isEmpty())
		{
			ob = docu.createElement("path");
			ob.setAttribute("d", SetClipPath(&arrow, true));
			ob.setAttribute("transform", trans);
			QString aFill;
			if (!Item->strokePattern().isEmpty())
			{
				QString pattID = Item->strokePattern()+IToStr(PattCount);
				PattCount++;
				ScPattern pa = m_Doc->docPatterns[Item->strokePattern()];
				QDomElement patt = docu.createElement("pattern");
				patt.setAttribute("id", pattID);
				patt.setAttribute("height", pa.height);
				patt.setAttribute("width", pa.width);
				patt.setAttribute("patternUnits", "userSpaceOnUse");
				double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternSpace;
				Item->strokePatternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternSpace);
				bool mirrorX, mirrorY;
				Item->strokePatternFlip(mirrorX, mirrorY);
				QTransform mpa;
				mpa.translate(-Item->lineWidth() / 2.0, -Item->lineWidth() / 2.0);
				mpa.translate(patternOffsetX, patternOffsetY);
				mpa.rotate(patternRotation);
				mpa.shear(-patternSkewX, patternSkewY);
				mpa.scale(pa.scaleX, pa.scaleY);
				mpa.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
				if (mirrorX)
					mpa.scale(-1, 1);
				if (mirrorY)
					mpa.scale(1, -1);
				patt.setAttribute("patternTransform", MatrixToStr(mpa));
				patt.setAttribute("xlink:href", "#"+Item->strokePattern());
				globalDefs.appendChild(patt);
				aFill += "fill:url(#"+pattID+");";
			}
			else if (Item->GrTypeStroke > 0)
			{
				QDomElement grad;
				if (Item->GrTypeStroke == 7)
				{
					grad = docu.createElement("radialGradient");
					grad.setAttribute("r", FToStr(sqrt(pow(Item->GrStrokeEndX - Item->GrStrokeStartX, 2) + pow(Item->GrStrokeEndY - Item->GrStrokeStartY,2))));
					grad.setAttribute("cx", FToStr(Item->GrStrokeStartX));
					grad.setAttribute("cy", FToStr(Item->GrStrokeStartY));
				}
				else
				{
					grad = docu.createElement("linearGradient");
					grad.setAttribute("x1", FToStr(Item->GrStrokeStartX));
					grad.setAttribute("y1", FToStr(Item->GrStrokeStartY));
					grad.setAttribute("x2", FToStr(Item->GrStrokeEndX));
					grad.setAttribute("y2", FToStr(Item->GrStrokeEndY));
				}
				bool   isFirst = true;
				double actualStop = 0.0, lastStop = 0.0;
				QList<VColorStop*> cstops = Item->stroke_gradient.colorStops();
				for (uint cst = 0; cst < Item->stroke_gradient.Stops(); ++cst)
				{
					actualStop = cstops.at(cst)->rampPoint;
					if ((actualStop != lastStop) || (isFirst))
					{
						QDomElement itcl = docu.createElement("stop");
						itcl.setAttribute("offset", FToStr(cstops.at(cst)->rampPoint*100)+"%");
						if (cstops.at(cst)->name == CommonStrings::None)
							itcl.setAttribute("stop-opacity", FToStr(0));
						else
							itcl.setAttribute("stop-opacity", FToStr(cstops.at(cst)->opacity));
						itcl.setAttribute("stop-color", SetColor(cstops.at(cst)->name, cstops.at(cst)->shade));
						grad.appendChild(itcl);
						lastStop = actualStop;
						isFirst  = false;
					}
				}
				grad.setAttribute("id", "Grad"+IToStr(GradCount));
				grad.setAttribute("gradientUnits", "userSpaceOnUse");
				globalDefs.appendChild(grad);
				aFill = " fill:url(#Grad"+IToStr(GradCount)+");";
				GradCount++;
			}
			else
				aFill = "fill:"+SetColor(Item->lineColor(), Item->lineShade())+";";
			if (Item->lineTransparency() != 0)
				aFill += " fill-opacity:"+FToStr(1.0 - Item->lineTransparency())+";";
			ob.setAttribute("style", aFill + " stroke:none;");
			gr.appendChild(ob);
		}
		else
		{
			multiLine ml = m_Doc->MLineStyles[Item->NamedLStyle];
			if (ml[0].Color != CommonStrings::None)
			{
				ob = docu.createElement("path");
				ob.setAttribute("d", SetClipPath(&arrow, true));
				ob.setAttribute("transform", trans);
				QString aFill = "fill:"+SetColor(ml[0].Color, ml[0].Shade)+";";
				ob.setAttribute("style", aFill + " stroke:none;");
				gr.appendChild(ob);
			}
			for (int it = ml.size()-1; it > 0; it--)
			{
				if (ml[it].Color != CommonStrings::None)
				{
					QDomElement ob5 = docu.createElement("path");
					ob5.setAttribute("d", SetClipPath(&arrow, true));
					ob5.setAttribute("transform", trans);
					QString stroke = "fill:none; stroke:"+SetColor(ml[it].Color, ml[it].Shade)+"; stroke-linecap:butt; stroke-linejoin:miter; stroke-dasharray:none;";
					if (ml[it].Width != 0.0)
						stroke += " stroke-width:"+FToStr(ml[it].Width)+";";
					else
						stroke += " stroke-width:1px;";
					ob5.setAttribute("style", stroke);
					gr.appendChild(ob5);
				}
			}
		}
	}
	return gr;
}

QString SVGExPlug::handleMask(PageItem *Item, double xOffset, double yOffset)
{
	QDomElement grad;
	QString retVal = "";
	if (Item->GrMask != 0)
	{
		QString maskID = "Mask"+IToStr(MaskCount);
		MaskCount++;
		QDomElement mask = docu.createElement("mask");
		mask.setAttribute("id", maskID);
		QDomElement ob = docu.createElement("path");
		ob.setAttribute("d", "M 0 0 L "+FToStr(Item->width())+" 0 L "+FToStr(Item->width())+" "+FToStr(Item->height())+" L 0 "+FToStr(Item->height())+" Z");
		if (Item->isGroup())
		{
			QString trans = "translate("+FToStr(xOffset)+", "+FToStr(yOffset)+")";
			if (Item->rotation() != 0)
				trans += " rotate("+FToStr(Item->rotation())+")";
			ob.setAttribute("transform", trans);
		}
		if ((Item->GrMask == 3) || (Item->GrMask == 6))
		{
			QString pattID = Item->patternMask()+IToStr(PattCount);
			PattCount++;
			ScPattern pa = m_Doc->docPatterns[Item->patternMask()];
			QDomElement patt = docu.createElement("pattern");
			patt.setAttribute("id", pattID);
			patt.setAttribute("height", FToStr(pa.height));
			patt.setAttribute("width", FToStr(pa.width));
			patt.setAttribute("patternUnits", "userSpaceOnUse");
			double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY;
			Item->maskTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY);
			bool mirrorX, mirrorY;
			Item->maskFlip(mirrorX, mirrorY);
			QTransform mpa;
			mpa.translate(patternOffsetX, patternOffsetY);
			mpa.rotate(patternRotation);
			mpa.shear(-patternSkewX, patternSkewY);
			mpa.scale(pa.scaleX, pa.scaleY);
			mpa.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
			if (mirrorX)
				mpa.scale(-1, 1);
			if (mirrorY)
				mpa.scale(1, -1);
			patt.setAttribute("patternTransform", MatrixToStr(mpa));
			patt.setAttribute("xlink:href", "#"+Item->patternMask());
			globalDefs.appendChild(patt);
			ob.setAttribute("fill", "url(#"+pattID+")");
		}
		else if ((Item->GrMask == 1) || (Item->GrMask == 2) || (Item->GrMask == 4) || (Item->GrMask == 5))
		{
			if ((Item->GrMask == 1) || (Item->GrMask == 4))
			{
				grad = docu.createElement("linearGradient");
				grad.setAttribute("x1", FToStr(Item->GrMaskStartX));
				grad.setAttribute("y1", FToStr(Item->GrMaskStartY));
				grad.setAttribute("x2", FToStr(Item->GrMaskEndX));
				grad.setAttribute("y2", FToStr(Item->GrMaskEndY));
			}
			else
			{
				grad = docu.createElement("radialGradient");
				grad.setAttribute("r", FToStr(sqrt(pow(Item->GrMaskEndX - Item->GrMaskStartX, 2) + pow(Item->GrMaskEndY - Item->GrMaskStartY,2))));
				grad.setAttribute("cx", FToStr(Item->GrMaskStartX));
				grad.setAttribute("cy", FToStr(Item->GrMaskStartY));
				grad.setAttribute("fx", FToStr(Item->GrMaskFocalX));
				grad.setAttribute("fy", FToStr(Item->GrMaskFocalY));
			}
			double gradientSkew;
			if (Item->GrMaskSkew == 90)
				gradientSkew = 1;
			else if (Item->GrMaskSkew == 180)
				gradientSkew = 0;
			else if (Item->GrMaskSkew == 270)
				gradientSkew = -1;
			else if (Item->GrMaskSkew == 390)
				gradientSkew = 0;
			else
				gradientSkew = tan(M_PI / 180.0 * Item->GrMaskSkew);
			QTransform qmatrix;
			if (Item->GrType == 6)
			{
				qmatrix.translate(Item->GrMaskStartX, Item->GrMaskStartY);
				qmatrix.shear(-gradientSkew, 0);
				qmatrix.translate(-Item->GrMaskStartX, -Item->GrMaskStartY);
			}
			else
			{
				double rotEnd = xy2Deg(Item->GrMaskEndX - Item->GrMaskStartX, Item->GrMaskEndY - Item->GrMaskStartY);
				qmatrix.translate(Item->GrMaskStartX, Item->GrMaskStartY);
				qmatrix.rotate(rotEnd);
				qmatrix.shear(gradientSkew, 0);
				qmatrix.translate(0, Item->GrMaskStartY * (1.0 - Item->GrMaskScale));
				qmatrix.translate(-Item->GrMaskStartX, -Item->GrMaskStartY);
				qmatrix.scale(1, Item->GrMaskScale);
			}
			grad.setAttribute("gradientTransform", MatrixToStr(qmatrix));
			grad.setAttribute("id", "Grad"+IToStr(GradCount));
			grad.setAttribute("gradientUnits", "userSpaceOnUse");
			QList<VColorStop*> cstops = Item->mask_gradient.colorStops();
			for (uint cst = 0; cst < Item->mask_gradient.Stops(); ++cst)
			{
				QDomElement itcl = docu.createElement("stop");
				itcl.setAttribute("offset", FToStr(cstops.at(cst)->rampPoint*100)+"%");
				if (cstops.at(cst)->name == CommonStrings::None)
					itcl.setAttribute("stop-opacity", FToStr(0));
				else
					itcl.setAttribute("stop-opacity", FToStr(cstops.at(cst)->opacity));
				itcl.setAttribute("stop-color", SetColor(cstops.at(cst)->name, cstops.at(cst)->shade));
				grad.appendChild(itcl);
			}
			globalDefs.appendChild(grad);
			ob.setAttribute("fill", "url(#Grad"+IToStr(GradCount)+")");
			GradCount++;
		}
		if ((Item->lineColor() != CommonStrings::None) && (!Item->isGroup()))
		{
			ob.setAttribute("stroke", "white");
			if (Item->lineWidth() != 0.0)
				ob.setAttribute("stroke-width", FToStr(Item->lineWidth()));
			else
				ob.setAttribute("stroke-width", "1px");
		}
		else
			ob.setAttribute("stroke", "none");
		mask.appendChild(ob);
		globalDefs.appendChild(mask);
		retVal = "url(#"+maskID+")";
	}
	return retVal;
}

QString SVGExPlug::getFillStyle(PageItem *Item)
{
	QDomElement grad;
	QString fill;
	if (Item->asPathText())
		return "fill:none;";
	if ((Item->fillColor() != CommonStrings::None) || (Item->GrType != 0))
	{
		fill = "fill:"+SetColor(Item->fillColor(), Item->fillShade())+";";
		if (Item->GrType != 0)
		{
			if (Item->GrType == 8)
			{
				QString pattID = Item->pattern()+IToStr(PattCount);
				PattCount++;
				ScPattern pa = m_Doc->docPatterns[Item->pattern()];
				QDomElement patt = docu.createElement("pattern");
				patt.setAttribute("id", pattID);
				patt.setAttribute("height", FToStr(pa.height));
				patt.setAttribute("width", FToStr(pa.width));
				patt.setAttribute("patternUnits", "userSpaceOnUse");
				double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY;
				Item->patternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY);
				bool mirrorX, mirrorY;
				Item->patternFlip(mirrorX, mirrorY);
				QTransform mpa;
				mpa.translate(patternOffsetX, patternOffsetY);
				mpa.rotate(patternRotation);
				mpa.shear(-patternSkewX, patternSkewY);
				mpa.scale(pa.scaleX, pa.scaleY);
				mpa.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
				if (mirrorX)
					mpa.scale(-1, 1);
				if (mirrorY)
					mpa.scale(1, -1);
				patt.setAttribute("patternTransform", MatrixToStr(mpa));
				patt.setAttribute("xlink:href", "#"+Item->pattern());
				globalDefs.appendChild(patt);
				fill = "fill:url(#"+pattID+");";
			}
			else
			{
				if (Item->GrType == 6)
				{
					grad = docu.createElement("linearGradient");
					grad.setAttribute("x1", FToStr(Item->GrStartX));
					grad.setAttribute("y1", FToStr(Item->GrStartY));
					grad.setAttribute("x2", FToStr(Item->GrEndX));
					grad.setAttribute("y2", FToStr(Item->GrEndY));
				}
				else
				{
					grad = docu.createElement("radialGradient");
					grad.setAttribute("r", FToStr(sqrt(pow(Item->GrEndX - Item->GrStartX, 2) + pow(Item->GrEndY - Item->GrStartY,2))));
					grad.setAttribute("cx", FToStr(Item->GrStartX));
					grad.setAttribute("cy", FToStr(Item->GrStartY));
					grad.setAttribute("fx", FToStr(Item->GrFocalX));
					grad.setAttribute("fy", FToStr(Item->GrFocalY));
				}
				double gradientSkew;
				if (Item->GrSkew == 90)
					gradientSkew = 1;
				else if (Item->GrSkew == 180)
					gradientSkew = 0;
				else if (Item->GrSkew == 270)
					gradientSkew = -1;
				else if (Item->GrSkew == 390)
					gradientSkew = 0;
				else
					gradientSkew = tan(M_PI / 180.0 * Item->GrSkew);
				QTransform qmatrix;
				if (Item->GrType == 6)
				{
					qmatrix.translate(Item->GrStartX, Item->GrStartY);
					qmatrix.shear(-gradientSkew, 0);
					qmatrix.translate(-Item->GrStartX, -Item->GrStartY);
				}
				else
				{
					double rotEnd = xy2Deg(Item->GrEndX - Item->GrStartX, Item->GrEndY - Item->GrStartY);
					qmatrix.translate(Item->GrStartX, Item->GrStartY);
					qmatrix.rotate(rotEnd);
					qmatrix.shear(gradientSkew, 0);
					qmatrix.translate(0, Item->GrStartY * (1.0 - Item->GrScale));
					qmatrix.translate(-Item->GrStartX, -Item->GrStartY);
					qmatrix.scale(1, Item->GrScale);
				}
				grad.setAttribute("gradientTransform", MatrixToStr(qmatrix));
				grad.setAttribute("id", "Grad"+IToStr(GradCount));
				grad.setAttribute("gradientUnits", "userSpaceOnUse");
				bool   isFirst = true;
				double actualStop = 0.0, lastStop = 0.0;
				QList<VColorStop*> cstops = Item->fill_gradient.colorStops();
				for (uint cst = 0; cst < Item->fill_gradient.Stops(); ++cst)
				{
					actualStop = cstops.at(cst)->rampPoint;
					if ((actualStop != lastStop) || (isFirst))
					{
						QDomElement itcl = docu.createElement("stop");
						itcl.setAttribute("offset", FToStr(cstops.at(cst)->rampPoint*100)+"%");
						if (cstops.at(cst)->name == CommonStrings::None)
							itcl.setAttribute("stop-opacity", FToStr(0));
						else
							itcl.setAttribute("stop-opacity", FToStr(cstops.at(cst)->opacity));
						itcl.setAttribute("stop-color", SetColor(cstops.at(cst)->name, cstops.at(cst)->shade));
						grad.appendChild(itcl);
						lastStop = actualStop;
						isFirst  = false;
					}
				}
				globalDefs.appendChild(grad);
				fill = "fill:url(#Grad"+IToStr(GradCount)+");";
				GradCount++;
			}
		}
		if (Item->fillRule)
			fill += " fill-rule:evenodd;";
		else
			fill += " fill-rule:nonzero;";
		if (Item->fillTransparency() != 0)
			fill += " fill-opacity:"+FToStr(1.0 - Item->fillTransparency())+";";
	}
	else
		fill = "fill:none;";
	return fill;
}

void SVGExPlug::writeBasePatterns()
{
	QStringList patterns = m_Doc->getPatternDependencyList(m_Doc->getUsedPatterns());
	for (int c = 0; c < patterns.count(); ++c)
	{
		ScPattern pa = m_Doc->docPatterns[patterns[c]];
		QDomElement patt = docu.createElement("pattern");
		patt.setAttribute("id", patterns[c]);
		patt.setAttribute("height", FToStr(pa.height));
		patt.setAttribute("width", FToStr(pa.width));
		for (int em = 0; em < pa.items.count(); ++em)
		{
			PageItem* Item = pa.items.at(em);
			ProcessItemOnPage(Item->gXpos, Item->gYpos, Item, &patt);
		}
		globalDefs.appendChild(patt);
	}
}

void SVGExPlug::writeBaseSymbols()
{
	QStringList patterns = m_Doc->getUsedSymbols();
	for (int c = 0; c < patterns.count(); ++c)
	{
		ScPattern pa = m_Doc->docPatterns[patterns[c]];
		QDomElement patt = docu.createElement("symbol");
		patt.setAttribute("id", "S"+patterns[c]);
		patt.setAttribute("viewbox", "0 0 "+ FToStr(pa.height) + " " + FToStr(pa.width));
		for (int em = 0; em < pa.items.count(); ++em)
		{
			PageItem* Item = pa.items.at(em);
			ProcessItemOnPage(Item->gXpos, Item->gYpos, Item, &patt);
		}
		globalDefs.appendChild(patt);
	}
}

QString SVGExPlug::getStrokeStyle(PageItem *Item)
{
	QString stroke = "";
	if (Item->lineTransparency() != 0)
		stroke = "stroke-opacity:"+FToStr(1.0 - Item->lineTransparency())+";";
	if (Item->lineWidth() != 0.0)
		stroke = "stroke-width:"+FToStr(Item->lineWidth())+";";
	else
		stroke = "stroke-width:1px;";
	stroke += " stroke-linecap:";
	switch (Item->PLineEnd)
	{
		case Qt::FlatCap:
			stroke += "butt;";
			break;
		case Qt::SquareCap:
			stroke += "square;";
			break;
		case Qt::RoundCap:
			stroke += "round;";
			break;
		default:
			stroke += "butt;";
			break;
	}
	stroke += " stroke-linejoin:";
	switch (Item->PLineJoin)
	{
		case Qt::MiterJoin:
			stroke += "miter;";
			break;
		case Qt::BevelJoin:
			stroke += "bevel;";
			break;
		case Qt::RoundJoin:
			stroke += "round;";
			break;
		default:
			stroke += "miter;";
			break;
	}
	stroke += " stroke-dasharray:";
	if (Item->DashValues.count() != 0)
	{
		QVector<double>::iterator it;
		for ( it = Item->DashValues.begin(); it != Item->DashValues.end(); ++it )
		{
			stroke += IToStr(static_cast<int>(*it))+" ";
		}
		stroke += "; stroke-dashoffset:"+IToStr(static_cast<int>(Item->DashOffset))+";";
	}
	else
	{
		if (Item->PLineArt == Qt::SolidLine)
			stroke += "none;";
		else
		{
			QString Da = getDashString(Item->PLineArt, Item->lineWidth());
			if (Da.isEmpty())
				stroke += "none;";
			else
				stroke += Da.replace(" ", ", ")+";";
		}
	}
	if ((!Item->strokePattern().isEmpty()) && (!Item->patternStrokePath))
	{
		QString pattID = Item->strokePattern()+IToStr(PattCount);
		PattCount++;
		ScPattern pa = m_Doc->docPatterns[Item->strokePattern()];
		QDomElement patt = docu.createElement("pattern");
		patt.setAttribute("id", pattID);
		patt.setAttribute("height", FToStr(pa.height));
		patt.setAttribute("width", FToStr(pa.width));
		patt.setAttribute("patternUnits", "userSpaceOnUse");
		double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternSpace;
		Item->strokePatternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternSpace);
		bool mirrorX, mirrorY;
		Item->strokePatternFlip(mirrorX, mirrorY);
		QTransform mpa;
		mpa.translate(-Item->lineWidth() / 2.0, -Item->lineWidth() / 2.0);
		mpa.translate(patternOffsetX, patternOffsetY);
		mpa.rotate(patternRotation);
		mpa.shear(-patternSkewX, patternSkewY);
		mpa.scale(pa.scaleX, pa.scaleY);
		mpa.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
		if (mirrorX)
			mpa.scale(-1, 1);
		if (mirrorY)
			mpa.scale(1, -1);
		patt.setAttribute("patternTransform", MatrixToStr(mpa));
		patt.setAttribute("xlink:href", "#"+Item->strokePattern());
		globalDefs.appendChild(patt);
		stroke += " stroke:url(#"+pattID+");";
	}
	else if (Item->GrTypeStroke > 0)
	{
		QDomElement grad;
		if (Item->GrTypeStroke == 7)
		{
			grad = docu.createElement("radialGradient");
			grad.setAttribute("r", FToStr(sqrt(pow(Item->GrStrokeEndX - Item->GrStrokeStartX, 2) + pow(Item->GrStrokeEndY - Item->GrStrokeStartY,2))));
			grad.setAttribute("cx", FToStr(Item->GrStrokeStartX));
			grad.setAttribute("cy", FToStr(Item->GrStrokeStartY));
			grad.setAttribute("fx", FToStr(Item->GrStrokeFocalX));
			grad.setAttribute("fy", FToStr(Item->GrStrokeFocalY));
		}
		else
		{
			grad = docu.createElement("linearGradient");
			grad.setAttribute("x1", FToStr(Item->GrStrokeStartX));
			grad.setAttribute("y1", FToStr(Item->GrStrokeStartY));
			grad.setAttribute("x2", FToStr(Item->GrStrokeEndX));
			grad.setAttribute("y2", FToStr(Item->GrStrokeEndY));
		}
		bool   isFirst = true;
		double actualStop = 0.0, lastStop = 0.0;
		QList<VColorStop*> cstops = Item->stroke_gradient.colorStops();
		for (uint cst = 0; cst < Item->stroke_gradient.Stops(); ++cst)
		{
			actualStop = cstops.at(cst)->rampPoint;
			if ((actualStop != lastStop) || (isFirst))
			{
				QDomElement itcl = docu.createElement("stop");
				itcl.setAttribute("offset", FToStr(cstops.at(cst)->rampPoint*100)+"%");
				if (cstops.at(cst)->name == CommonStrings::None)
					itcl.setAttribute("stop-opacity", FToStr(0));
				else
					itcl.setAttribute("stop-opacity", FToStr(cstops.at(cst)->opacity));
				itcl.setAttribute("stop-color", SetColor(cstops.at(cst)->name, cstops.at(cst)->shade));
				grad.appendChild(itcl);
				lastStop = actualStop;
				isFirst  = false;
			}
		}
		double gradientSkew;
		if (Item->GrStrokeSkew == 90)
			gradientSkew = 1;
		else if (Item->GrStrokeSkew == 180)
			gradientSkew = 0;
		else if (Item->GrStrokeSkew == 270)
			gradientSkew = -1;
		else if (Item->GrStrokeSkew == 390)
			gradientSkew = 0;
		else
			gradientSkew = tan(M_PI / 180.0 * Item->GrStrokeSkew);
		QTransform qmatrix;
		if (Item->GrType == 6)
		{
			qmatrix.translate(Item->GrStrokeStartX, Item->GrStrokeStartY);
			qmatrix.shear(-gradientSkew, 0);
			qmatrix.translate(-Item->GrStrokeStartX, -Item->GrStrokeStartY);
		}
		else
		{
			double rotEnd = xy2Deg(Item->GrStrokeEndX - Item->GrStrokeStartX, Item->GrStrokeEndY - Item->GrStrokeStartY);
			qmatrix.translate(Item->GrStrokeStartX, Item->GrStrokeStartY);
			qmatrix.rotate(rotEnd);
			qmatrix.shear(gradientSkew, 0);
			qmatrix.translate(0, Item->GrStrokeStartY * (1.0 - Item->GrStrokeScale));
			qmatrix.translate(-Item->GrStrokeStartX, -Item->GrStrokeStartY);
			qmatrix.scale(1, Item->GrStrokeScale);
		}
		grad.setAttribute("gradientTransform", MatrixToStr(qmatrix));
		grad.setAttribute("id", "Grad"+IToStr(GradCount));
		grad.setAttribute("gradientUnits", "userSpaceOnUse");
		globalDefs.appendChild(grad);
		stroke += " stroke:url(#Grad"+IToStr(GradCount)+");";
		GradCount++;
	}
	else if (Item->lineColor() != CommonStrings::None)
	{
		stroke += " stroke:"+SetColor(Item->lineColor(), Item->lineShade())+";";
	}
	else
		stroke = "stroke:none;";
	return stroke;
}

QDomElement SVGExPlug::createClipPathElement(FPointArray *ite, QDomElement* pathElem)
{
	QString clipPathStr = SetClipPath(ite, true);
	if (clipPathStr.isEmpty())
		return QDomElement();
	QDomElement clipPathElem = docu.createElement("clipPath");
	clipPathElem.setAttribute("id", "Clip"+IToStr(ClipCount));
	QDomElement cl = docu.createElement("path");
	if (pathElem)
		*pathElem = cl;
	cl.setAttribute("d", clipPathStr);
	clipPathElem.appendChild(cl);
	globalDefs.appendChild(clipPathElem);
	ClipCount++;
	return clipPathElem;
}

QString SVGExPlug::SetClipPath(FPointArray *ite, bool closed)
{
	QString tmp;
	FPoint np, np1, np2, np3, np4, firstP;
	bool nPath = true;
	bool first = true;

	if (ite->size() <= 3)
		return tmp;

	for (int poi=0; poi<ite->size()-3; poi += 4)
	{
		if (ite->point(poi).x() > 900000)
		{
			nPath = true;
			continue;
		}
		if (nPath)
		{
			np = ite->point(poi);
			if ((!first) && (closed) && (np4 == firstP))
				tmp += "Z ";
			tmp += QString("M%1 %2 ").arg(np.x()).arg(np.y());
			nPath = false;
			first = false;
			firstP = np;
			np4 = np;
		}
		np = ite->point(poi);
		np1 = ite->point(poi+1);
		np2 = ite->point(poi+3);
		np3 = ite->point(poi+2);
		if ((np == np1) && (np2 == np3))
			tmp += QString("L%1 %2 ").arg(np3.x()).arg(np3.y());
		else
			tmp += QString("C%1 %2 %3 %4 %5 %6 ").arg(np1.x()).arg(np1.y()).arg(np2.x()).arg(np2.y()).arg(np3.x()).arg(np3.y());
		np4 = np3;
	}
	if (closed)
		tmp += "Z";
	return tmp;
}

QString SVGExPlug::FToStr(double c)
{
	QString cc;
	return cc.setNum(c);
}

QString SVGExPlug::IToStr(int c)
{
	QString cc;
	return cc.setNum(c);
}

QString SVGExPlug::MatrixToStr(QTransform &mat)
{
	QString cc("matrix(%1 %2 %3 %4 %5 %6)");
	return  cc.arg(mat.m11()).arg(mat.m12()).arg(mat.m21()).arg(mat.m22()).arg(mat.dx()).arg(mat.dy());
}

QString SVGExPlug::SetColor(QString farbe, int shad)
{
	if (farbe == CommonStrings::None)
		return "#FFFFFF";
	const ScColor& col = m_Doc->PageColors[farbe];
	return ScColorEngine::getShadeColorProof(col, m_Doc, shad).name();
}

QString SVGExPlug::GetMultiStroke(struct SingleLine *sl, PageItem *Item)
{
	QString tmp = "fill:none; ";
	tmp += "stroke:"+SetColor(sl->Color, sl->Shade)+"; ";
	if (Item->fillTransparency() != 0)
		tmp += QString(" stroke-opacity:%1; ").arg(1.0 - Item->fillTransparency());
	tmp += QString("stroke-width:%1; ").arg(sl->Width);
	tmp += "stroke-linecap:";
	switch (static_cast<Qt::PenCapStyle>(sl->LineEnd))
		{
		case Qt::FlatCap:
			tmp += "butt;";
			break;
		case Qt::SquareCap:
			tmp += "square;";
			break;
		case Qt::RoundCap:
			tmp += "round;";
			break;
		default:
			tmp += "butt;";
			break;
		}
	tmp += " stroke-linejoin:";
	switch (static_cast<Qt::PenJoinStyle>(sl->LineJoin))
		{
		case Qt::MiterJoin:
			tmp += "miter;";
			break;
		case Qt::BevelJoin:
			tmp += "bevel;";
			break;
		case Qt::RoundJoin:
			tmp += "round;";
			break;
		default:
			tmp += "miter;";
			break;
		}
	tmp += " stroke-dasharray:";
	if (static_cast<Qt::PenStyle>(sl->Dash) == Qt::SolidLine)
		tmp += "none;";
	else
	{
		QString Da = getDashString(sl->Dash, sl->Width);
		if (Da.isEmpty())
			tmp += "none;";
		else
			tmp += Da.replace(" ", ", ")+";";
	}
	return tmp;
}

SVGExPlug::~SVGExPlug()
{
}
