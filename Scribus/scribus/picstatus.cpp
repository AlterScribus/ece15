/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          picstatus.cpp  -  description
                             -------------------
    begin                : Fri Nov 29 2001
    copyright            : (C) 2001 by Franz Schmid
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
#include <qtable.h>
#include <qfileinfo.h>
#include <qfiledialog.h>
#include <qmessagebox.h>
#include <qtoolbutton.h>
#include <qstringlist.h>
#include <qtextstream.h>
#include <qtooltip.h>
#include <qcursor.h>
#include <qpainter.h>
#include <cstdio>

#include "picstatus.h"
#include "picstatus.moc"
#include "picsearch.h"
#include "scribusdoc.h"
#include "pageitem.h"
#include "filesearch.h"
#include "scribuscore.h"
#include "commonstrings.h"
#include "effectsdialog.h"
#include "extimageprops.h"

extern QPixmap loadIcon(QString nam);

PicItem::PicItem(QIconView* parent, QString text, QPixmap& pix, PageItem* pgItem) : QIconViewItem(parent, text, pix)
{
	PageItemObject = pgItem;
}

PicStatus::PicStatus(QWidget* parent, ScribusDoc *docu) : PicStatusBase( parent, "PicStatus", true, 0 )
{
	m_Doc = docu;
	currItem = NULL;
	setIcon(loadIcon("AppIcon.png"));
	fillTable();
	connect(closeButton, SIGNAL(clicked()), this, SLOT(accept()));
	connect(imageViewArea, SIGNAL(currentChanged(QIconViewItem *)), this, SLOT(imageSelected(QIconViewItem *)));
	connect(isPrinting, SIGNAL(clicked()), this, SLOT(PrintPic()));
	connect(isVisible, SIGNAL(clicked()), this, SLOT(visiblePic()));
	connect(goPageButton, SIGNAL(clicked()), this, SLOT(GotoPic()));
	connect(selectButton, SIGNAL(clicked()), this, SLOT(SelectPic()));
	connect(searchButton, SIGNAL(clicked()), this, SLOT(SearchPic()));
	connect(effectsButton, SIGNAL(clicked()), this, SLOT(doImageEffects()));
	connect(buttonLayers, SIGNAL(clicked()), this, SLOT(doImageExtProp()));
	connect(buttonEdit, SIGNAL(clicked()), this, SLOT(doEditImage()));
	QToolTip::add(caseInsensitiveCheck, "<qt>" + tr("The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows") + "</qt>");
}

void PicStatus::fillTable()
{
	PageItem *item;
	QPixmap pm(128, 128);
	QPainter p;
	imageViewArea->clear();
	for (item = m_Doc->MasterItems.first(); item; item = m_Doc->MasterItems.next())
	{
		QFileInfo fi = QFileInfo(item->Pfile);
		if (item->itemType() == PageItem::ImageFrame)
		{
			QBrush b(QColor(205,205,205), loadIcon("testfill.png"));
			p.begin(&pm);
			p.fillRect(0, 0, 128, 128, b);
			if (item->PicAvail)
			{
				QImage im2 = item->pixm.smoothScale(128, 128, QImage::ScaleMin);
				p.drawImage((128 - im2.width()) / 2, (128 - im2.height()) / 2, im2);
			}
			else
			{
				p.setBrush(Qt::NoBrush);
				p.setPen(QPen(red, 2, SolidLine, FlatCap, MiterJoin));
				p.drawLine(0, 0, 128, 128);
				p.drawLine(0, 128, 128, 0);
				p.setPen(QPen(black, 3, SolidLine, FlatCap, MiterJoin));
				p.drawRect(0, 0, 128, 128);
			}
			p.end();
			(void) new PicItem(imageViewArea, fi.fileName(), pm, item);
		}
	}
	for (item = m_Doc->Items->first(); item; item = m_Doc->Items->next())
	{
		QFileInfo fi = QFileInfo(item->Pfile);
		if (item->itemType() == PageItem::ImageFrame)
		{
			QBrush b(QColor(205,205,205), loadIcon("testfill.png"));
			p.begin(&pm);
			p.fillRect(0, 0, 128, 128, b);
			if (item->PicAvail)
			{
				QImage im2 = item->pixm.smoothScale(128, 128, QImage::ScaleMin);
				p.drawImage((128 - im2.width()) / 2, (128 - im2.height()) / 2, im2);
			}
			else
			{
				p.setBrush(Qt::NoBrush);
				p.setPen(QPen(red, 2, SolidLine, FlatCap, MiterJoin));
				p.drawLine(0, 0, 128, 128);
				p.drawLine(0, 128, 128, 0);
				p.setPen(QPen(black, 3, SolidLine, FlatCap, MiterJoin));
				p.drawRect(0, 0, 128, 128);
			}
			p.end();
			(void) new PicItem(imageViewArea, fi.fileName(), pm, item);
		}
	}
}

void PicStatus::imageSelected(QIconViewItem *ite)
{
	if (ite != NULL)
	{
		PicItem *item = (PicItem*)ite;
		currItem = item->PageItemObject;
		if (!currItem->OnMasterPage.isEmpty())
			displayPage->setText(currItem->OnMasterPage);
		else
			displayPage->setText(QString::number(currItem->OwnPage + 1));
		displayObjekt->setText(currItem->itemName());
		if (currItem->PicAvail)
		{
			QFileInfo fi = QFileInfo(currItem->Pfile);
			QString ext = fi.extension(false).lower();
			displayName->setText(fi.fileName());
			displayPath->setText(QDir::convertSeparators(fi.dirPath()));
			QString format = "";
			switch (currItem->pixm.imgInfo.type)
			{
				case 0:
					format = tr("JPG");
					break;
				case 1:
					format = tr("TIFF");
					break;
				case 2:
					format = tr("PSD");
					break;
				case 3:
					format = tr("EPS/PS");
					break;
				case 4:
					format = tr("PDF");
					break;
				case 5:
					format = tr("JPG2000");
					break;
				case 6:
					format = ext.upper();
					break;
				case 7:
					format = tr("emb. PSD");
					break;
			}
			displayFormat->setText(format);
			QString cSpace;
			if (((ext == "pdf") || (ext == "eps") || (ext == "epsi") || (ext == "ps")) && (currItem->pixm.imgInfo.type != 7))
				cSpace = tr("Unknown");
			else
			{
				switch (currItem->pixm.imgInfo.colorspace)
				{
					case 0:
						cSpace = tr("RGB");
						break;
					case 1:
						cSpace = tr("CMYK");
						break;
					case 2:
						cSpace = tr("Grayscale");
						break;
					case 3:
						cSpace = tr("Duotone");
						break;
				}
			}
			displayColorspace->setText(cSpace);
			displayDPI->setText(QString("%1 x %2").arg(qRound(currItem->pixm.imgInfo.xres)).arg(qRound(currItem->pixm.imgInfo.yres)));
			displayEffDPI->setText(QString("%1 x %2").arg(qRound(72.0 / currItem->imageXScale())).arg(qRound(72.0 / currItem->imageYScale())));
			displaySizePixel->setText(QString("%1 x %2").arg(currItem->OrigW).arg(currItem->OrigH));
			displayScale->setText(QString("%1 x %2 %").arg(currItem->imageXScale() * 100 / 72.0 * currItem->pixm.imgInfo.xres, 5, 'f', 1).arg(currItem->imageYScale() * 100 / 72.0 * currItem->pixm.imgInfo.yres, 5, 'f', 1));
			displayPrintSize->setText(QString("%1 x %2%3").arg(currItem->OrigW * currItem->imageXScale() * m_Doc->unitRatio(), 7, 'f', 2).arg(currItem->OrigH * currItem->imageXScale() * m_Doc->unitRatio(), 7, 'f', 2).arg(unitGetSuffixFromIndex(m_Doc->unitIndex())));
			isPrinting->setChecked(currItem->printEnabled());
			isVisible->setChecked(currItem->imageShown());
			buttonEdit->setEnabled(true);
			effectsButton->setEnabled(true);
			buttonLayers->setEnabled(true);
		}
		else
		{
			if (!currItem->Pfile.isEmpty())
			{
				QFileInfo fi = QFileInfo(currItem->Pfile);
				displayName->setText(fi.fileName());
				displayPath->setText(QDir::convertSeparators(fi.dirPath()));
			}
			else
			{
				displayName->setText( tr("n/a"));
				displayPath->setText( tr("n/a"));
			}
			displayFormat->setText( tr("n/a"));
			displayColorspace->setText( tr("n/a"));
			displayDPI->setText( tr("n/a"));
			displayEffDPI->setText( tr("n/a"));
			displaySizePixel->setText( tr("n/a"));
			displayScale->setText( tr("n/a"));
			displayPrintSize->setText( tr("n/a"));
			buttonEdit->setEnabled(false);
			effectsButton->setEnabled(false);
			buttonLayers->setEnabled(false);
		}
	}
	else
		currItem = NULL;
}

void PicStatus::PrintPic()
{
	if (currItem != NULL)
		currItem->setPrintEnabled(isPrinting->isChecked());
}

void PicStatus::visiblePic()
{
	if (currItem != NULL)
	{
		currItem->setImageShown(isVisible->isChecked());
		emit refreshItem(currItem);
	}
}

void PicStatus::GotoPic()
{
	if (currItem != NULL)
	{
		ScCore->primaryMainWindow()->closeActiveWindowMasterPageEditor();
		if (!currItem->OnMasterPage.isEmpty())
			emit selectMasterPage(currItem->OnMasterPage);
		else
			emit selectPage(currItem->OwnPage);
	}
}

void PicStatus::SelectPic()
{
	if (currItem != NULL)
	{
		ScCore->primaryMainWindow()->closeActiveWindowMasterPageEditor();
		if (currItem->Groups.count() == 0)
			emit selectElement(currItem->OwnPage, currItem->ItemNr, false);
		else
		{
			if (currItem->isGroupControl)
				emit selectElement(currItem->OwnPage, currItem->ItemNr, false);
			else
				emit selectElement(currItem->OwnPage, currItem->ItemNr, true);
		}
	}
}

bool PicStatus::loadPict(const QString & newFilePath)
{
	// Hack to fool the LoadPict function
	currItem->Pfile = newFilePath;
	m_Doc->LoadPict(newFilePath, currItem->ItemNr, true);
	return currItem->PicAvail;
}

void PicStatus::setSearchButton(bool toCancel, const FileSearch* searcher)
{
	if (toCancel)
	{
		searchButton->setText( tr("Cancel Search") );
		disconnect(searchButton, SIGNAL(clicked()), this, SLOT(SearchPic()));
		connect(searchButton, SIGNAL(clicked()), searcher, SLOT(cancel()));
	}
	else
	{
		searchButton->setText( tr("Search..."));
		disconnect(searchButton, SIGNAL(clicked()), searcher, SLOT(cancel()));
		connect(searchButton, SIGNAL(clicked()), SLOT(SearchPic()));
	}
}

void PicStatus::SearchPic()
{
	QString fileName = displayName->text();
	QString workDir;
#ifndef _WIN32
	workDir = QDir::homeDirPath();
#endif
	// Pictures may be located completely outside home or documents directory
	// so ask base search directory first
	QString searchBase;
	searchBase = QFileDialog::getExistingDirectory( workDir, NULL, NULL, tr("Select a base directory for search"));
	if( searchBase.isEmpty() || !QDir().exists(searchBase) )
		return;
	// Set up the search, then return to the event loop until it notifies us
	// that it's done.
	// Note: search will be deleted when this PicStatus is, so there's no
	// need to worry about cleanup.
	// case sensitive note: it has no meaning on windows

	FileSearch* search = new FileSearch(this, fileName, searchBase, -1, caseInsensitiveCheck->isChecked());
	Q_CHECK_PTR(search);
	connect(search, SIGNAL(searchComplete(const QStringList&, const QString&)), SLOT(SearchPicFinished(const QStringList&, const QString&)));
	connect(search, SIGNAL(aborted(bool)), SLOT(SearchPicAborted(bool)));
	// Set up the UI to let the user cancel the search, then start it
	setSearchButton(true, search);
	search->start();
}

void PicStatus::SearchPicAborted(bool userCancelled)
{
	const FileSearch* search = dynamic_cast<const FileSearch*>(sender());
	Q_ASSERT(search);
	setSearchButton(false, search);
	// and inform user if it it wasn't them who asked to stop it.
	if (!userCancelled)
		// A running search failed
		QMessageBox::warning(this, tr("Scribus - Image Search"), tr("The search failed: %1").arg(search->lastError()),
				QMessageBox::Ok|QMessageBox::Default|QMessageBox::Escape,
				QMessageBox::NoButton);
}

void PicStatus::SearchPicFinished(const QStringList & matches, const QString & fileName)
{
	const FileSearch* search = dynamic_cast<const FileSearch*>(sender());
	Q_ASSERT(search);
	// Restore the gui to "search"
	setSearchButton(false, search);
	// Then display a dialog for the user to select images from
	// if one or more were found
	if (matches.count() == 0)
	{
		QMessageBox::information(this, tr("Scribus - Image Search"), tr("No images named \"%1\" were found.").arg(fileName),
				QMessageBox::Ok|QMessageBox::Default|QMessageBox::Escape,
				QMessageBox::NoButton);
	}
	else
	{
		PicSearch *dia = new PicSearch(this, fileName, matches);
		if (dia->exec())
		{
			Q_ASSERT(!dia->currentImage.isEmpty());
			loadPict(dia->currentImage);
			refreshItem(currItem);
			QFileInfo fi = QFileInfo(currItem->Pfile);
			QPixmap pm(128, 128);
			QPainter p;
			QBrush b(QColor(205,205,205), loadIcon("testfill.png"));
			p.begin(&pm);
			p.fillRect(0, 0, 128, 128, b);
			if (currItem->PicAvail)
			{
				QImage im2 = currItem->pixm.smoothScale(128, 128, QImage::ScaleMin);
				p.drawImage((128 - im2.width()) / 2, (128 - im2.height()) / 2, im2);
			}
			else
			{
				p.setBrush(Qt::NoBrush);
				p.setPen(QPen(red, 2, SolidLine, FlatCap, MiterJoin));
				p.drawLine(0, 0, 128, 128);
				p.drawLine(0, 128, 128, 0);
				p.setPen(QPen(black, 3, SolidLine, FlatCap, MiterJoin));
				p.drawRect(0, 0, 128, 128);
			}
			p.end();
			imageViewArea->currentItem()->setText(fi.fileName());
			imageViewArea->currentItem()->setPixmap(pm);
			imageSelected(imageViewArea->currentItem());
		}
		delete dia;
	}
}

void PicStatus::doImageEffects()
{
	if (currItem != NULL)
	{
		EffectsDialog* dia = new EffectsDialog(this, currItem, m_Doc);
		if (dia->exec())
			m_Doc->itemSelection_ApplyImageEffects(dia->effectsList);
		delete dia;
	}
}

void PicStatus::doImageExtProp()
{
	if (currItem != NULL)
	{
		ExtImageProps* dia = new ExtImageProps(this, &currItem->pixm.imgInfo, currItem, m_Doc->view());
		dia->exec();
		delete dia;
	}
}

void PicStatus::doEditImage()
{
	if (currItem != NULL)
	{
		SelectPic();
		ScCore->primaryMainWindow()->callImageEditor();
	}
}

#if 0
const unsigned short PicStatus::COL_PREVIEW = 0;
const unsigned short PicStatus::COL_FILENAME = 1;
const unsigned short PicStatus::COL_PATH = 2;
const unsigned short PicStatus::COL_PAGE = 3;
const unsigned short PicStatus::COL_GOTO = 4;
const unsigned short PicStatus::COL_PRINT = 5;
const unsigned short PicStatus::COL_STATUS = 6;
const unsigned short PicStatus::COL_SEARCH = 7;

QString PicStatus::trOK = "";
QString PicStatus::trMissing = "";
QString PicStatus::trSearch = "";
QString PicStatus::trCancelSearch = "";
QString PicStatus::trGoto = "";

PicStatus::PicStatus(QWidget* parent, ScribusDoc *docu) : QDialog( parent, "PicStatus", true, 0 )
{
	languageChange();
	setCaption( tr( "Manage Pictures" ) );
	m_Doc = docu;
	ItemNrs.clear();
	FlagsPic.clear();
	QVBoxLayout* PicStatusLayout = new QVBoxLayout( this );
	PicStatusLayout->setSpacing( 6 );
	PicStatusLayout->setMargin( 11 );

	PicTable = new QTable( this, "PicTable" );
	PicTable->setLeftMargin(0);
	PicTable->verticalHeader()->hide();
	PicTable->setNumCols( 8 );
	Header = PicTable->horizontalHeader();
	QString tmpc[] = { "", tr("Name"),  tr("Path"),  tr("Page"), " ",  tr("Print"),  tr("Status"), " "};
	size_t ar = sizeof(tmpc) / sizeof(*tmpc);
	for (uint a = 0; a < ar; ++a)
		Header->setLabel(a, tmpc[a]);

	PicTable->setSorting(false);
	PicTable->setSelectionMode(QTable::MultiRow);
	PicTable->setColumnMovingEnabled(false);
	PicTable->setRowMovingEnabled(false);
	Header->setMovingEnabled(false);
	PicTable->setColumnReadOnly(COL_PREVIEW, true);
	PicTable->setColumnReadOnly(COL_FILENAME, true);
	PicTable->setColumnReadOnly(COL_PATH, true);
	PicTable->setColumnReadOnly(COL_PAGE, true);
	PicTable->setColumnReadOnly(COL_STATUS, true);
	PicStatusLayout->addWidget( PicTable );

	QHBoxLayout* Layout2 = new QHBoxLayout;
	Layout2->setSpacing( 3 );
	Layout2->setMargin( 0 );

	caseInsensitiveCheck = new QCheckBox( tr("Case insensitive search"), this, "caseInsensitiveCheck");
	caseInsensitiveCheck->setChecked(false);
	Layout2->addWidget(caseInsensitiveCheck);

	showThumbs = new QCheckBox( tr("Show thumbnails"), this, "showThumbs");
	showThumbs->setChecked(true);
	Layout2->addWidget(showThumbs);

#ifdef _WIN32
	caseInsensitiveCheck->setChecked(true);
	caseInsensitiveCheck->hide();
#endif
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout2->addItem(spacer);
	searchAllButton = new QPushButton( tr( "Search Directory" ), this, "searchAllButton" );
	Layout2->addWidget(searchAllButton);
	okButton = new QPushButton( tr( "Close" ), this, "okButton");
	Layout2->addWidget(okButton);
	PicStatusLayout->addLayout(Layout2);

	// setup
	fillTable();
	// signals and slots connections
	connect(searchAllButton, SIGNAL(clicked()), this, SLOT(searchAllPics()));
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(accept()));
	connect(showThumbs, SIGNAL(stateChanged(int)), this, SLOT(fillTable()));

	QToolTip::add( searchAllButton, "<qt>" + tr( "Set a new location for the selected items. Useful when you may have moved the document but not the images." ) + "</qt>");
	QToolTip::add(showThumbs, "<qt>" + tr("Show/hide image thumbnails") + "</qt>");
	QToolTip::add(caseInsensitiveCheck, "<qt>" + tr("The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows") + "</qt>");
}

void PicStatus::languageChange()
{
	PicStatus::trOK = tr("OK");
	PicStatus::trMissing = tr("Missing");
	PicStatus::trSearch = tr("Search");
	PicStatus::trCancelSearch = tr("Cancel Search");
	PicStatus::trGoto = tr("Goto");
}

void PicStatus::GotoPic()
{
	QString pageText(PicTable->text(QString(sender()->name()).toInt(), COL_PAGE));
	bool ok = false;
	int pageNum = pageText.toInt(&ok);
	ScCore->primaryMainWindow()->closeActiveWindowMasterPageEditor();
	if (!ok)
		emit selectMasterPage(pageText);
	else
		emit selectPage(pageNum-1);
}

void PicStatus::SearchPic()
{
	// FIXME: This is a pretty ugly hack IMO - carried over from the old
	// SearchPic. Table handling needs work.
	unsigned int row = QString(sender()->name()).toUInt();
	QString fileName = PicTable->text(row, COL_FILENAME);
	QString workDir;
#ifndef _WIN32
	workDir = QDir::homeDirPath();
#endif
	// Pictures may be located completely outside home or documents directory
	// so ask base search directory first
	QString searchBase;
	searchBase = QFileDialog::getExistingDirectory( workDir, NULL, NULL, tr("Select a base directory for search"));
	if( searchBase.isEmpty() || !QDir().exists(searchBase) )
		return;
	// Set up the search, then return to the event loop until it notifies us
	// that it's done.
	// Note: search will be deleted when this PicStatus is, so there's no
	// need to worry about cleanup.
	// case sensitive note: it has no meaning on windows

	FileSearch* search = new FileSearch(this, fileName, searchBase, -1, !caseInsensitiveCheck->isChecked());
	Q_CHECK_PTR(search);
	connect(search,
			SIGNAL(searchComplete(const QStringList&, const QString&)),
			SLOT(SearchPicFinished(const QStringList&, const QString&)));
	connect(search, SIGNAL(aborted(bool)), SLOT(SearchPicAborted(bool)));
	// Set up the UI to let the user cancel the search, then start it
	setSearchButton(row, true, search);
	search->start();
}

void PicStatus::SearchPicAborted(bool userCancelled)
{
	const FileSearch* search = dynamic_cast<const FileSearch*>(sender());
	Q_ASSERT(search);
	// Restore button to normal "search"
	unsigned int row = getRowByFileName(search->fileName());
	setSearchButton(row, false, search);
	// and inform user if it it wasn't them who asked to stop it.
	if (!userCancelled)
		// A running search failed
		QMessageBox::warning(this, tr("Scribus - Image Search"),
				tr("The search failed: %1").arg(search->lastError()),
				QMessageBox::Ok|QMessageBox::Default|QMessageBox::Escape,
				QMessageBox::NoButton);
}

void PicStatus::SearchPicFinished(const QStringList & matches, const QString & fileName)
{
	const FileSearch* search = dynamic_cast<const FileSearch*>(sender());
	Q_ASSERT(search);
	// First, find out what row the search result is about
	unsigned int row = getRowByFileName(fileName);
	// Restore the gui to "search"
	setSearchButton(row, false, search);
	// Then display a dialog for the user to select images from
	// if one or more were found
	if (matches.count() == 0)
	{
		QMessageBox::information(this, tr("Scribus - Image Search"),
				tr("No images named \"%1\" were found.").arg(fileName),
				QMessageBox::Ok|QMessageBox::Default|QMessageBox::Escape,
				QMessageBox::NoButton);
	}
	else
	{
		PicSearch *dia = new PicSearch(this, fileName, matches);
		if (dia->exec())
		{
			Q_ASSERT(!dia->currentImage.isEmpty());
			loadPictByRow(dia->currentImage, row);
			m_Doc->view()->DrawNew();
		}
		delete dia;
	}
}

bool PicStatus::loadPictByRow(const QString & newFilePath, unsigned int row)
{
	QFileInfo fi(newFilePath);
	unsigned int itemNumber = ItemNrs[row];
	// FIXME: error checking
	// WTF?
	bool isMaster = PicTable->cellWidget(row, COL_GOTO)->isEnabled();
	PageItem* item = isMaster ? m_Doc->DocItems.at(itemNumber) : m_Doc->MasterItems.at(itemNumber);
	// Hack to fool the LoadPict function
	item->Pfile = newFilePath;
	m_Doc->LoadPict(newFilePath, itemNumber, true);
	// Set missing flag again. Since we do no error checking of the load,
	// missing will generally mean "failed to load".
	PicTable->setText(row, COL_STATUS, item->PicAvail ? trOK : trMissing);
	PicTable->setText(row, COL_PATH, QDir::convertSeparators(fi.dirPath(true)));
	if (item->PicAvail)
	{
		QPixmap pm;
		pm.convertFromImage(item->pixm.smoothScale(64, 64, QImage::ScaleMin));
		PicTable->setPixmap(row, COL_PREVIEW, pm);
		PicTable->adjustRow(row);
	}
	// let's suppose we update all succesfully - file name is changed too - PV
	PicTable->setText(row, COL_FILENAME, fi.fileName());
	return item->PicAvail;
}

void PicStatus::setSearchButton(int row, bool toCancel, const FileSearch* searcher)
{
	QWidget* item = PicTable->cellWidget(row, COL_SEARCH);
	Q_ASSERT(item);
	QToolButton* tb = dynamic_cast<QToolButton*>(item);
	Q_ASSERT(tb);
	if (toCancel)
	{
		tb->setText( trCancelSearch );
		disconnect(tb, SIGNAL(clicked()), this, SLOT(SearchPic()));
		connect(tb, SIGNAL(clicked()), searcher, SLOT(cancel()));
	}
	else
	{
		tb->setText(trSearch);
		disconnect(tb, SIGNAL(clicked()), searcher, SLOT(cancel()));
		connect(tb, SIGNAL(clicked()), SLOT(SearchPic()));
	}
}

int PicStatus::getRowByFileName(const QString & fileName)
{
	bool found = false;
	unsigned int row;
	// This cast is OK since numRows must logically return >=0
	for (row = 0; row < static_cast<unsigned int>(PicTable->numRows()); ++row)
	{
		if ( PicTable->text(row, COL_FILENAME) == fileName )
		{
			found = true;
			break;
		}
	}
	Q_ASSERT(found);
	return row;
}

void PicStatus::PrintPic()
{
	uint ZNr = QString(sender()->name()).toUInt();
	uint ItNr = ItemNrs[ZNr];
//	uint PgNr = PicTable->text(ZNr, 2).toInt()-1;
	if (PicTable->cellWidget(ZNr, COL_PRINT)->isEnabled())
		m_Doc->DocItems.at(ItNr)->setPrintEnabled(FlagsPic.at(ZNr)->isChecked());
	else
		m_Doc->MasterItems.at(ItNr)->setPrintEnabled(FlagsPic.at(ZNr)->isChecked());
}

void PicStatus::searchAllPics( )
{
	QString workDir;
#ifndef _WIN32
	workDir = QDir::homeDirPath();
#endif
	QString searchBase = QFileDialog::getExistingDirectory( workDir, NULL, NULL, tr("Select a base directory for your selected rows"));
	if( searchBase.isEmpty() || !QDir().exists(searchBase) )
		return;
	uint updated=0;
	for (int i=0; i<PicTable->numRows(); ++i)
	{
		if (PicTable->isRowSelected(i))
		{
			QString newName=searchBase+PicTable->text(i, COL_FILENAME);
			if (QFile::exists(newName))
			{
				if (loadPictByRow(newName, i))
					++updated;
			}
		}
	}
	if (updated>0)
		PicTable->adjustColumn(COL_PREVIEW);
}

void PicStatus::fillTable()
{
	PageItem *item;
	uint i = 0;
	ItemNrs.clear();
	for (item = m_Doc->MasterItems.first(); item; item = m_Doc->MasterItems.next())
	{
		if (item->itemType() == PageItem::ImageFrame)
		{
			ItemNrs.append(i);
		}
		++i;
	}
	i = 0;
	for (item = m_Doc->Items->first(); item; item = m_Doc->Items->next())
	{
		if (item->itemType() == PageItem::ImageFrame)
		{
			ItemNrs.append(i);
		}
		++i;
	}

	i = 0;
	PicTable->setNumRows(0); // clear the table
	PicTable->setNumRows(ItemNrs.count());
	for (item = m_Doc->MasterItems.first(); item; item = m_Doc->MasterItems.next())
	{
		if (item->itemType() == PageItem::ImageFrame)
		{
			insertLine(item, i, true);
			++i;
		}
	}
	for (item = m_Doc->Items->first(); item; item = m_Doc->Items->next())
	{
		if (item->itemType() == PageItem::ImageFrame)
		{
			insertLine(item, i, false);
			++i;
		}
	}
	PicTable->adjustColumn(COL_PREVIEW);
	PicTable->adjustColumn(COL_FILENAME);
	PicTable->adjustColumn(COL_PATH);
	PicTable->adjustColumn(COL_PAGE);
	PicTable->adjustColumn(COL_PRINT);
	PicTable->adjustColumn(COL_STATUS);
	PicTable->adjustColumn(COL_SEARCH);
}

void PicStatus::insertLine(PageItem* item, uint row, bool isMaster)
{
	QString tmp;
	QFileInfo fi = QFileInfo(item->Pfile);

	PicTable->setText(row, COL_FILENAME, fi.fileName());
	PicTable->setText(row, COL_PATH, QDir::convertSeparators(fi.dirPath()));
	if (isMaster)
		PicTable->setText(row, COL_PAGE, item->OnMasterPage);
	else
	{
		tmp.setNum(item->OwnPage + 1);
		PicTable->setText(row, COL_PAGE, tmp);
	}
	QToolButton *tb2 = new QToolButton(this, tmp.setNum(row));
	tb2->setText( trGoto);
	tb2->setEraseColor(white);
	PicTable->setColumnWidth(COL_GOTO, tb2->fontMetrics().width( trGoto)+10);
	PicTable->setCellWidget(row, COL_GOTO, tb2);
	connect(tb2, SIGNAL(clicked()), this, SLOT(GotoPic()));
	QCheckBox *cp2 = new QCheckBox(this, tmp);
	cp2->setText(CommonStrings::trYes);
	cp2->setChecked(item->printEnabled());
	cp2->setEraseColor(white);
	FlagsPic.append(cp2);
	PicTable->setCellWidget(row, COL_PRINT, cp2);
	connect(cp2, SIGNAL(clicked()), this, SLOT(PrintPic()));
	if (item->PicAvail && showThumbs->isChecked())
	{
		QPixmap pm;
		pm.convertFromImage(item->pixm.smoothScale(64, 64, QImage::ScaleMin));
		PicTable->setPixmap(row, COL_PREVIEW, pm);
	}
	if (item->PicAvail)
		PicTable->setText(row, COL_STATUS, trOK);
	else
		PicTable->setText(row, COL_STATUS, trMissing);
	QToolButton *tb = new QToolButton(this, tmp);
	tb->setText( trSearch);
	PicTable->setColumnWidth(COL_SEARCH, tb->fontMetrics().width( trCancelSearch)+10);
	tb->setEraseColor(white);
	PicTable->setCellWidget(row, COL_SEARCH, tb);
	connect(tb, SIGNAL(clicked()), this, SLOT(SearchPic()));
	PicTable->adjustRow(row);
}
#endif
