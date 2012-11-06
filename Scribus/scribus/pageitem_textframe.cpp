/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          pageitem.cpp  -  description
                             -------------------
    begin                : Sat Apr 7 2001
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

#include <QDebug>
#include <QList>
#include <QMap>
#include <QTransform>
#include <QPalette>
#include <QPoint>
#include <QPolygon>
#include <QRegion>
#include <cassert>

#include "scconfig.h"

#include "canvas.h"
#include "commonstrings.h"
#include "hyphenator.h"
#include "marks.h"
#include "notesstyles.h"
#include "numeration.h"
#include "pageitem.h"
#include "pageitem_group.h"
#include "pageitem_textframe.h"
#include "pageitem_noteframe.h"
#include "prefsmanager.h"
#include "scpage.h"
#include "scpainter.h"
#include "scpaths.h"
#include "scraction.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusstructs.h"
#include "selection.h"
#include "text/nlsconfig.h"
#include "undomanager.h"
#include "undostate.h"
#include "util.h"
#include "util_math.h"

#include "ui/checkDocument.h"
#include "ui/guidemanager.h"
//don`t worry - message boxes are called only if GUI is enabled
#include "ui/scmessagebox.h"

#include <cairo.h>

using namespace std;

PageItem_TextFrame::PageItem_TextFrame(ScribusDoc *pa, double x, double y, double w, double h, double w2, QString fill, QString outline)
	: PageItem(pa, PageItem::TextFrame, x, y, w, h, w2, fill, outline)
{
	invalid = true;
	firstChar = 0;
	cursorBiasBackward = false;
	unicodeTextEditMode = false;
	unicodeInputCount = 0;
	unicodeInputString = "";
	warnedList.clear();
	
	connect(&itemText,SIGNAL(changed()), this, SLOT(slotInvalidateLayout()));
}

PageItem_TextFrame::PageItem_TextFrame(const PageItem & p) : PageItem(p)
{
	invalid = true;
	cursorBiasBackward = false;
	unicodeTextEditMode = false;
	unicodeInputCount = 0;
	unicodeInputString = "";
	m_notesFramesMap.clear();
	warnedList.clear();
	
	connect(&itemText,SIGNAL(changed()), this, SLOT(slotInvalidateLayout()));
}

static QRegion itemShape(PageItem* docItem, double xOffset, double yOffset)
{
	QRegion res;
	QTransform pp;
	if (docItem->Parent != NULL)
		pp.translate(docItem->gXpos, docItem->gYpos);
	else
		pp.translate(docItem->xPos() - xOffset, docItem->yPos() - yOffset);
	pp.rotate(docItem->rotation());
	if (docItem->textFlowUsesBoundingBox())
	{
		QRectF bb = docItem->getVisualBoundingRect();
		if (docItem->Parent != 0)
		{
			bb.translate(-docItem->xPos(), -docItem->yPos());
			bb.translate(docItem->gXpos, docItem->gYpos);
		}
		res = QRegion(bb.toRect());
	}
	else if ((docItem->textFlowUsesImageClipping()) && (docItem->imageClip.size() != 0))
	{
		QList<uint> Segs;
		QPolygon Clip2 = FlattenPath(docItem->imageClip, Segs);
		res = QRegion(pp.map(Clip2)).intersect(QRegion(pp.map(docItem->Clip)));
	}
	else if ((docItem->textFlowUsesContourLine()) && (docItem->ContourLine.size() != 0))
	{
		QList<uint> Segs;
		QPolygon Clip2 = FlattenPath(docItem->ContourLine, Segs);
		res = QRegion(pp.map(Clip2));
	}
	else
	{
		if (docItem->isSymbol() || docItem->isGroup())
		{
			if (docItem->imageFlippedH())
			{
				pp.translate(docItem->width(), 0);
				pp.scale(-1, 1);
			}
			if (docItem->imageFlippedV())
			{
				pp.translate(0, docItem->height());
				pp.scale(1, -1);
			}
		}
		if ((((docItem->lineColor() != CommonStrings::None) || (!docItem->patternStrokeVal.isEmpty()) || (docItem->GrTypeStroke > 0)) && (docItem->lineWidth() > 1)) || (!docItem->NamedLStyle.isEmpty()))
		{
			QVector<double> m_array;
			QPainterPath ppa;
			QPainterPath result;
			if (docItem->itemType() == PageItem::PolyLine)
				ppa = docItem->PoLine.toQPainterPath(false);
			else
				ppa = docItem->PoLine.toQPainterPath(true);
			if (docItem->NamedLStyle.isEmpty())
			{
				QPainterPathStroker stroke;
				stroke.setCapStyle(docItem->lineEnd());
				stroke.setJoinStyle(docItem->lineJoin());
				stroke.setDashPattern(Qt::SolidLine);
				stroke.setWidth(docItem->lineWidth());
				result = stroke.createStroke(ppa);
			}
			else
			{
				multiLine ml = docItem->doc()->MLineStyles[docItem->NamedLStyle];
				int ind = ml.size()-1;
				if ((ml[ind].Color != CommonStrings::None) && (ml[ind].Width != 0))
				{
					QPainterPathStroker stroke;
					stroke.setCapStyle(static_cast<Qt::PenCapStyle>(ml[ind].LineEnd));
					stroke.setJoinStyle(static_cast<Qt::PenJoinStyle>(ml[ind].LineJoin));
					stroke.setDashPattern(Qt::SolidLine);
					stroke.setWidth(ml[ind].Width);
					result = stroke.createStroke(ppa);
				}
			}
			res = QRegion(pp.map(docItem->Clip));
			QList<QPolygonF> pl = result.toSubpathPolygons();
			for (int b = 0; b < pl.count(); b++)
			{
				res = res.united(QRegion(pp.map(pl[b].toPolygon())));
			}
		}
		else
			res = QRegion(pp.map(docItem->Clip));
	}
	return  res;
}

QRegion PageItem_TextFrame::calcAvailableRegion()
{
	QRegion result(this->Clip);
	if ((!isEmbedded) || (Parent != NULL))
	{
		bool invertible(false);
		QTransform canvasToLocalMat;
		if (Parent != NULL)
			canvasToLocalMat.translate(gXpos, gYpos);
		else
			canvasToLocalMat.translate(Xpos, Ypos);
		canvasToLocalMat.rotate(Rot);
		canvasToLocalMat = canvasToLocalMat.inverted(&invertible);

		if (!invertible) return QRegion();

		int LayerLev = m_Doc->layerLevelFromID(LayerID);
		uint docItemsCount=m_Doc->Items->count();
		ScPage* Mp=0;
		ScPage* Dp=0;
		PageItem* docItem=0;
		int LayerLevItem;
		QList<PageItem*> thisList;
		if (!OnMasterPage.isEmpty())
		{
			if ((savedOwnPage == -1) || (savedOwnPage >= signed(m_Doc->Pages->count())))
				return result;
			Mp = m_Doc->MasterPages.at(m_Doc->MasterNames[OnMasterPage]);
			Dp = m_Doc->Pages->at(savedOwnPage);
			if (Parent != NULL)
				thisList = this->asGroupFrame()->groupItemList;
			else
				thisList = m_Doc->MasterItems;
			int thisid = thisList.indexOf(this);
			for (int a = 0; a < m_Doc->MasterItems.count(); ++a)
			{
				docItem = m_Doc->MasterItems.at(a);
				// #10642 : masterpage items interact only with items placed on same masterpage
				if (docItem->OnMasterPage != OnMasterPage)
					continue;
				int did = m_Doc->MasterItems.indexOf(docItem);
				LayerLevItem = m_Doc->layerLevelFromID(docItem->LayerID);
				if (((did > thisid) && (docItem->LayerID == LayerID)) || (LayerLevItem > LayerLev && m_Doc->layerFlow(docItem->LayerID)))
				{
					if (docItem->textFlowAroundObject())
					{
						QRegion itemRgn = itemShape(docItem, Mp->xOffset() - Dp->xOffset(), Mp->yOffset() - Dp->yOffset());
						result = result.subtracted( canvasToLocalMat.map(itemRgn) );
					}
				}
			} // for all masterItems
			// (JG) #6009 : disable possible interaction between master text frames and normal frames
			// which have the text flow option set
			/*if (!m_Doc->masterPageMode())
			{
				for (uint a = 0; a < docItemsCount; ++a)
				{
					docItem = m_Doc->Items->at(a);
					Mp = m_Doc->MasterPages.at(m_Doc->MasterNames[OnMasterPage]);
					Dp = m_Doc->Pages->at(OwnPage);
					if ((docItem->textFlowAroundObject()) && (docItem->OwnPage == OwnPage))
					{
						result = result.subtract(itemShape(docItem, m_Doc->view(), Mp->xOffset() - Dp->xOffset(), Mp->yOffset() - Dp->yOffset()));
					}
				} // for all docItems
			} // if (! masterPageMode) */
		} // if (!OnMasterPage.isEmpty())
		else
		{
			int thisid = 0;
			if (Parent != NULL)
			{
				thisid = Parent->asGroupFrame()->groupItemList.indexOf(this);
				docItemsCount = Parent->asGroupFrame()->groupItemList.count();
				for (uint a = 0; a < docItemsCount; ++a)
				{
					docItem = Parent->asGroupFrame()->groupItemList.at(a);
					int did = Parent->asGroupFrame()->groupItemList.indexOf(docItem);
					if (did > thisid)
					{
						if (docItem->textFlowAroundObject())
						{
							QRegion itemRgn = itemShape(docItem, 0, 0);
							result = result.subtracted( canvasToLocalMat.map(itemRgn) );
						}
					}
				}
			}
			else
			{
				thisid = m_Doc->Items->indexOf(this);
				for (uint a = 0; a < docItemsCount; ++a)
				{
					docItem = m_Doc->Items->at(a);
					int did = m_Doc->Items->indexOf(docItem);
					LayerLevItem = m_Doc->layerLevelFromID(docItem->LayerID);
					if (((did > thisid) && (docItem->LayerID == LayerID)) || (LayerLevItem > LayerLev && m_Doc->layerFlow(docItem->LayerID)))
					{
						if (docItem->textFlowAroundObject())
						{
							QRegion itemRgn = itemShape(docItem, 0, 0);
							result = result.subtracted( canvasToLocalMat.map(itemRgn) );
						}
					}
				}
			} // for all docItems
		} // if(OnMasterPage.isEmpty()		
	} // if(!Embedded)
	else
		qDebug() << "QRegion epmty";
	return result;
}

void PageItem_TextFrame::setShadow()
{
	if (OnMasterPage.isEmpty())
		return;
	
	QString newShadow = m_Doc->masterPageMode() ? OnMasterPage : QString::number(OwnPage);
	if (newShadow != currentShadow) {
		if (currentShadow == OnMasterPage) {
			// masterpage was edited, clear all shadows
			shadows.clear();
		}
		if (!shadows.contains(newShadow)) {
			if (!shadows.contains(OnMasterPage)) {
				shadows[OnMasterPage] = itemText;
//				const ParagraphStyle& pstyle(shadows[OnMasterPage].paragraphStyle(0));
//				qDebug() << QString("Pageitem_Textframe: style of master: %1 align=%2").arg(pstyle.parent()).arg(pstyle.alignment());
//				qDebug() << QString("Pageitem_Textframe: shadow itemText->%1").arg(OnMasterPage);
			}
			if (newShadow != OnMasterPage) {
				shadows[newShadow] = shadows[OnMasterPage].copy();
//				const ParagraphStyle& pstyle(shadows[newShadow].paragraphStyle(0));
//				qDebug() << QString("Pageitem_Textframe: style of shadow copy: %1 align=%2").arg(pstyle.parent()).arg(pstyle.alignment());
			}
//			qDebug() << QString("Pageitem_Textframe: shadow %1<-%2").arg(newShadow).arg(OnMasterPage);
		}
		itemText = shadows[newShadow];
//		const ParagraphStyle& pstyle(itemText.paragraphStyle(0));
//		qDebug() << QString("Pageitem_Textframe: style of shadow: %1 align=%2").arg(pstyle.parent()).arg(pstyle.alignment());
		invalid = true;
		currentShadow = newShadow;
	}
}

/*
static void debugLineLayout(const StoryText& itemText, const LineSpec& line)
{
	QFile debugFile(QDir::homePath() + "/Desktop/debug_line.csv");
	debugFile.open(QIODevice::WriteOnly);

	QTextStream stream(&debugFile);
	stream.setRealNumberNotation(QTextStream::FixedNotation);
	stream.setRealNumberPrecision(7);

	stream << "xoffset"  << "\t";
	stream << "yoffset"  << "\t";
	stream << "xadvance" << "\t";
	stream << "yadvance" << "\t";
	stream << "scaleH"   << "\t";
	stream << "scaleV"   << "\t";
	stream << "\n";

	for (int zc = line.firstItem; zc < line.lastItem; ++zc)
	{
		const ScText* item = itemText.item(zc);

		stream << item->glyph.xoffset  << "\t";
		stream << item->glyph.yoffset  << "\t";
		stream << item->glyph.xadvance << "\t";
		stream << item->glyph.yadvance << "\t";
		stream << item->glyph.scaleH   << "\t";
		stream << item->glyph.scaleV   << "\t";
		stream << "\n";
	}

	debugFile.close();
}

static void dumpIt(const ParagraphStyle& pstyle, QString indent = QString("->"))
{
	QString db = QString("%6%1/%2 @ %3: %4--%5 linespa%6: %7 align%8")
		   .arg(pstyle.name())
		   .arg(pstyle.parent())
		   .arg( (unsigned long int) &pstyle)
		   .arg(pstyle.leftMargin())
		   .arg(pstyle.rightMargin())
		   .arg(indent)
		   .arg(pstyle.lineSpacingMode())
		   .arg(pstyle.lineSpacing())
		   .arg(pstyle.alignment());
	qDebug() << db;
	static QString more("  ");
	if (pstyle.hasParent())
		dumpIt(*dynamic_cast<const ParagraphStyle*>(pstyle.parentStyle()), more + indent);
}
*/
static const bool legacy = true;

/*
static void layoutDropCap(GlyphLayout layout, double curX, double curY, double offsetX, double offsetY, double dropCapDrop) 
{	
}
*/

/**
 Clones the tab fill char as often as necssary after all distances are known
 */
static void fillInTabLeaders(StoryText & itemText, LineSpec & curLine)
{
	// fill in tab leaders
	double xPos = curLine.x;
	for (int ti= curLine.firstItem; ti <= curLine.lastItem; ++ti)
	{
		ScText * hl = itemText.item(ti);
		if (hl->ch == SpecialChars::TAB) 
		{
			GlyphLayout * tglyph = hl->glyph.more;
			
			if (!tglyph)
				continue;
			
			const CharStyle & charStyle(itemText.charStyle(ti));
			double wt   = charStyle.font().glyphWidth(tglyph->glyph, charStyle.fontSize() * tglyph->scaleV / 10.0);
			double len  = hl->glyph.xadvance;
			int count   = static_cast<int>(len / wt);
			double sPos = -len;
			tglyph->xoffset = sPos;
//			qDebug() << QString("tab leaders: %1 %2 width=%3 count=%4").arg(sPos).arg(curLine.y).arg(wt).arg(count);
			for (int cx = 1; cx < count; ++cx)
			{
				// clone fillchar
				tglyph->grow();
				*(tglyph->more) = *tglyph;
				tglyph->more->more = NULL;
				tglyph = tglyph->more;
				tglyph->xoffset =  sPos + wt * cx;
			}
		}
		xPos += hl->glyph.wide();
	}
}



enum TabStatus {
	TabNONE    = 0,
	TabLEFT    = TabNONE,
	TabRIGHT   = 1,
	TabPOINT   = 2,
	TabCOMMA   = 3,
	TabCENTER  = 4
};


/**
fields which describe what type of tab is currently active
 */
struct TabControl {
	bool   active;
	int    status;
	int    charIndex;
	double xPos;
	QChar  fillChar;
};

/**
fields which describe how the current line is placed into the frame
 */
struct LineControl {
	LineSpec line;
	int      itemsInLine;
	int      hyphenCount;
	double   colWidth;
	double   colGap;
	double   colLeft;
	double   colRight;
	int      column;
	bool     startOfCol;
	bool     hasDropCap;
	bool     afterOverflow;
	bool     addLine;
	bool     recalculateY;
	bool     lastInRowLine;
	bool     addLeftIndent;
	bool     wasFirstInRow;
	double   leftIndent;
	double   rightMargin;
	double   mustLineEnd;
	int      restartIndex;  //index of char where line computing should be restarted
	int      restartRowIndex;  //index of char where row of text is started
	double   restartX; //starting X position of line if must be restarted
	double   rowDesc;

	double   ascend;
	double   descend;
	double   width;
	double   xPos;
	double   yPos;
	int      breakIndex;
	double   breakXPos;

	double   maxShrink;
	double   maxStretch;
	
	
	/// remember frame dimensions and offsets
	void init(double w, double h, const MarginStruct& extra, double lCorr)
	{
		insets = extra;
		lineCorr = lCorr;
		frameWidth = w;
		frameHeight = h;
		hasDropCap = false;
	}
	
	/// start at column 0
	void initColumns(double width, double gap)
	{
		column = 0;
		colWidth = width;
		colGap = gap;
	}
	
	/// move position to next column
	void nextColumn(double asce = 0.0)
	{
		startOfCol = true;
		colLeft = (colWidth + colGap) * column + insets.Left + lineCorr;
		//now colRight is REAL column right edge
		colRight = colLeft + colWidth;
		if (legacy)
			colRight += lineCorr;
		xPos = colLeft;
		yPos = asce + insets.Top + lineCorr;
	}
	
	bool isEndOfCol(double morespace = 0)
	{
		return yPos + morespace + insets.Bottom + lineCorr > frameHeight;
	}

	/**
		init fields for a new line at current position
	 */
	void startLine(int first)
	{
		itemsInLine = 0;
		line.x = xPos;
		line.y = yPos;
		line.firstItem = first;
		line.lastItem = 0;
		line.ascent = 0.0;
		line.descent = 0.0;
		line.width = 0.0;
		line.naturalWidth = 0.0;
		line.colLeft = colLeft;
		breakIndex = -1;
		breakXPos = 0.0;
		maxShrink = 0.0;
		maxStretch = 0.0;
		width = 0.0;
		leftIndent = 0.0;
		rightMargin = 0.0;
		rowDesc = 0.0;
	}
	

	/// called when glyphs are placed on the line
	void rememberShrinkStretch(QChar ch, double wide, const ParagraphStyle& style)
	{
		if (SpecialChars::isExpandingSpace(ch))
			maxShrink += (1 - style.minWordTracking()) * wide;
		else
		{
			maxShrink += (1 - style.minGlyphExtension()) * wide;
		}
		maxStretch += (style.maxGlyphExtension() - 1) * wide;
	}

	/// called when a possible break is passed
	void rememberBreak(int index, double pos, double morespace = 0)
	{
		if (pos > colRight - morespace)
		{
			// only look for the first break behind the right edge
			//maxShrink = 0;
			
			// check if we already have a better break
			if (breakIndex >= 0)
			{
				double oldLooseness = qAbs(colRight - breakXPos);

				double newLooseness = pos - colRight;
				if (newLooseness >= oldLooseness)
					return;
			}
		}
		breakXPos = pos;
		breakIndex = index;
	}
	
	/// called when a mandatory break is found
	void breakLine(const StoryText& itemText, const ParagraphStyle& style, FirstLineOffsetPolicy offsetPolicy, int last)
	{
		breakIndex = last;
		breakXPos  = line.x;
		for (int j = line.firstItem; j <= last; ++j)
			if ( (itemText.item(j)->effects() & ScStyle_SuppressSpace) == 0)
				breakXPos += itemText.item(j)->glyph.wide();
		// #8194, #8717 : update line ascent and descent with sensible values
		// so that endOfLine() returns correct result
		updateHeightMetrics(itemText);
		// #9060 : update line offset too
	//	updateLineOffset(itemText, style, offsetPolicy);
	}

	/// use the last remembered break to set line width and itemrange
	void finishLine(double endX)
	{
		line.lastItem = breakIndex;
		line.naturalWidth = breakXPos - line.x;
		line.width = endX - line.x;
		maxShrink = maxStretch = 0;
	}

	int restartRow(bool recalcY)
	{
		if (recalcY)
			yPos++;
		recalculateY = recalcY;
		xPos = restartX = colLeft;
		startLine(restartRowIndex);
		addLeftIndent = true;
		afterOverflow = false;
		return restartRowIndex -1;
	}

	int restartLine(bool recalcY, bool add)
	{
		recalculateY = recalcY;
		addLine = add;
		xPos = restartX;
		startLine(restartIndex);
		afterOverflow = false;
		return restartIndex -1;
	}
	
	bool isEndOfLine(double moreSpace = 0)
	{
		bool res;
		if (legacy)
			res = ceil(xPos + lineCorr - maxShrink) + ceil(moreSpace) >= floor(colRight);
		else
			res = ceil(xPos - maxShrink)  + ceil(moreSpace) >= floor(colRight);
		return res;
	}
	
	/// Keep old endOfLine code for reference
	/*double endOfLine_old(const QRegion& shape, const QTransform& pf2, double morespace, int Yasc, int Ydesc)
	{
		// if we aren't restricted further, we'll end at this maxX:
		double maxX = colRight - morespace;
		if (legacy) maxX -= lineCorr;

		double StartX = floor(qMax(line.x, qMin(maxX,breakXPos-maxShrink-1))-1);
		int xPos  = static_cast<int>(ceil(maxX));

		QPoint  pt12 (xPos, Yasc);
		QPoint  pt22 (xPos, Ydesc);
		QRect   pt(pt12,pt22);
		QRegion region; 

		double EndX2 = StartX;
		double Interval = 0.25;
		do {
			int xP = static_cast<int>(ceil(EndX2 + morespace));
			pt.moveTopLeft(QPoint(xP, Yasc));
			region = QRegion(pf2.mapToPolygon(pt)).subtracted(shape);
			if (!region.isEmpty())
				break;
			EndX2 += Interval;
		} while ((EndX2 < maxX) && region.isEmpty());

		return qMin(EndX2, maxX);
	}*/

	/// find x position where this line must end
	double endOfLine(const QRegion& shape, double morespace, int yAsc, int yDesc)
	{
		// if we aren't restricted further, we'll end at this maxX:
		double maxX = colRight - morespace;
		if (legacy) maxX -= lineCorr;
		int maxX100 = static_cast<int>(maxX*100);

		int StartX = static_cast<int>(floor(qMax(line.x, qMin(maxX,breakXPos-maxShrink-1)) -1));
		int xPos  = static_cast<int>(ceil(maxX));

		QPoint  pt12 (xPos, yAsc);
		QPoint  pt22 (xPos, yDesc);

		QPolygon p;
		p.append (QPoint (StartX, yAsc));
		p.append (QPoint (StartX, yDesc));
		p.append (pt12);
		p.append (pt22);
		// check if something gets in the way
		QRegion lineI = shape.intersected (p.boundingRect());
		// if the intersection only has 1 rectangle, then nothing gets in the way
		StartX = static_cast<int>(ceil(StartX + morespace));
		if (lineI.numRects() == 1)
		{
			QRect cRect (QPoint(StartX, yAsc), QPoint(StartX, yDesc));
			if (QRegion(cRect).subtracted(shape).isEmpty())
				++StartX;
			//{
				//QRect rect = lineI.rects().at(0);
				//int  mx = qMax(rect.left(), rect.right()) /*- pf2.dx()*/; 
				//int steps  = static_cast<int>((mx - StartX - 2) / 0.25);
				//if (steps > 0)
				//{
				//	StartX += steps * 0.25;
				//}
			//}
		}

		QRect   pt(pt12, pt22);

//		double EndX2 = StartX;
//		double Interval = 0.25;
		do {
			//int xP = static_cast<int>(ceil(EndX2 + morespace));
			//pt.moveTopLeft(QPoint(xP, yAsc));
			pt.moveTopLeft(QPoint(StartX, yAsc));
			if (!regionContainsRect(shape, pt))
				break;
			//EndX2 += Interval;
			++StartX;
		//} while ((EndX2 < maxX) && regionContainsRect(shape, pt));
		} while ((StartX < maxX100) && regionContainsRect(shape, pt));

		return qMin((double) StartX, maxX);
	}
	
	double getLineAscent(const StoryText& itemText)
	{
		double result = 0;
		QChar firstChar = itemText.text (line.firstItem);
		if ((firstChar == SpecialChars::PAGENUMBER) || (firstChar == SpecialChars::PAGECOUNT))
			firstChar = '8';
		PageItem *obj = itemText.object (line.firstItem);
		const CharStyle& fcStyle(itemText.charStyle(line.firstItem));
		if ((firstChar == SpecialChars::PARSEP) || (firstChar == SpecialChars::LINEBREAK))
			result = fcStyle.font().ascent(fcStyle.fontSize() / 10.0);
		else if (obj)
			result = qMax(result, (obj->height() + obj->lineWidth()) * (fcStyle.scaleV() / 1000.0));
		else
			result = fcStyle.font().realCharAscent(firstChar, fcStyle.fontSize() / 10.0);
		QChar ch = QChar();
		double asce = 0.0;
		for (int zc = 0; zc < itemsInLine; ++zc)
		{
			ch = itemText.text(line.firstItem + zc);
			if ((ch == SpecialChars::PAGENUMBER) || (ch == SpecialChars::PAGECOUNT))
				ch = '8'; // should have highest ascender even in oldstyle
			const CharStyle& cStyle(itemText.charStyle(line.firstItem + zc));
			if ((ch == SpecialChars::TAB) || (ch == QChar(10))
				|| SpecialChars::isBreak (ch, true) || (ch == SpecialChars::NBHYPHEN) || (ch.isSpace()))
				continue;
			PageItem *obj = itemText.object (line.firstItem + zc);
			if (obj)
				asce = obj->height() + obj->lineWidth() * (cStyle.scaleV() / 1000.0);
			else
				asce = cStyle.font().realCharAscent(ch, cStyle.fontSize() / 10.0);
			//	qDebug() << QString("checking char 'x%2' with ascender %1 > %3").arg(asce).arg(ch.unicode()).arg(result);
			result = qMax(result, asce);
		}
		return result;
	}

	double getLineDescent(const StoryText& itemText)
	{
		double result = 0;
		QChar  firstChar = itemText.text(line.firstItem);
		if ((firstChar == SpecialChars::PAGENUMBER) || (firstChar == SpecialChars::PAGECOUNT))
			firstChar = '8';
		const CharStyle& fcStyle(itemText.charStyle(line.firstItem));
		if ((firstChar == SpecialChars::PARSEP) || (firstChar == SpecialChars::LINEBREAK))
			result = fcStyle.font().descent(fcStyle.fontSize() / 10.0);
		else if (itemText.object(line.firstItem))
			result = 0.0;
		else
			result = fcStyle.font().realCharDescent(firstChar, fcStyle.fontSize() / 10.0);
		for (int zc = 0; zc < itemsInLine; ++zc)
		{
			QChar ch = itemText.text(line.firstItem + zc);
			if ((ch == SpecialChars::PAGENUMBER) || (ch == SpecialChars::PAGECOUNT))
				ch = '8'; // should have highest ascender even in oldstyle
			const CharStyle& cStyle(itemText.charStyle(line.firstItem + zc));
			if ((ch == SpecialChars::TAB) || (ch == QChar(10))
				|| SpecialChars::isBreak (ch, true) || (ch == SpecialChars::NBHYPHEN) || (ch.isSpace()))
				continue;
			double desc;
			if (itemText.object(line.firstItem + zc))
				desc = 0.0;
			else
				desc = cStyle.font().realCharDescent(ch, cStyle.fontSize() / 10.0);
			//	qDebug() << QString("checking char 'x%2' with ascender %1 > %3").arg(asce).arg(ch.unicode()).arg(result);
			result = qMax(result, desc);
		}
		return result;
	}
	
	double getLineHeight(const StoryText& itemText)
	{
		double result = 0;
		const CharStyle& firstStyle(itemText.charStyle(line.firstItem));
		PageItem *obj = itemText.object (line.firstItem);
		if (obj)
			result = qMax(result, (obj->height() + obj->lineWidth()) * (firstStyle.scaleV() / 1000.0));
		else
			result = firstStyle.font().height(firstStyle.fontSize() / 10.0);
		for (int zc = 0; zc < itemsInLine; ++zc)
		{
			QChar ch = itemText.text(line.firstItem+zc);
			if ((ch == SpecialChars::TAB) || (ch == QChar(10))
				|| SpecialChars::isBreak (ch, true) || (ch == SpecialChars::NBHYPHEN) || (ch.isSpace()))
				continue;
			const CharStyle& cStyle(itemText.charStyle(line.firstItem + zc));
			PageItem *obj = itemText.object (line.firstItem + zc);
			double asce;
			if (obj)
				asce = (obj->height() + obj->lineWidth()) * (cStyle.scaleV() / 1000.0);
			else
				asce = cStyle.font().height (cStyle.fontSize() / 10.0);
			//	qDebug() << QString("checking char 'x%2' with ascender %1 > %3").arg(asce).arg(ch.unicode()).arg(result);
			result = qMax(result, asce);
		}
		return result;
	}

	void updateHeightMetrics(const StoryText& itemText)
	{
		double asce, desc;
		QChar ch = QChar();
		line.ascent  = 0;
		line.descent = 0;
		for (int zc = 0; zc < itemsInLine; ++zc)
		{
			ch = itemText.text(line.firstItem+zc);
			if ((ch == SpecialChars::TAB) || (ch == QChar(10))
				|| SpecialChars::isBreak (ch, true) || (ch == SpecialChars::NBHYPHEN) || (ch.isSpace()))
				continue;
			const CharStyle& cStyle(itemText.charStyle(line.firstItem + zc));
			double scaleV = cStyle.scaleV() / 1000.0;
			double offset = (cStyle.fontSize() / 10) * (cStyle.baselineOffset() / 1000.0);

			if (itemText.object(line.firstItem+zc) != 0)
			{
				asce = (itemText.object(line.firstItem+zc)->height() + itemText.object(line.firstItem+zc)->lineWidth()) * scaleV + offset;
				desc = 0.0;
			}
			else //if (itemText.charStyle(current.line.firstItem+zc).effects() & ScStyle_DropCap == 0)
			{
				asce = cStyle.font().realCharAscent(ch, cStyle.fontSize() / 10.0) * scaleV + offset;
				desc = cStyle.font().realCharDescent(ch, cStyle.fontSize() / 10.0) * scaleV - offset;
			}
			//	qDebug() << QString("checking char 'x%2' with ascender %1 > %3").arg(asce).arg(ch.unicode()).arg(result);
			line.ascent  = qMax(line.ascent, asce);
			line.descent = qMax(line.descent, desc);
		}
	}

// yPos should not be changed when all line is already calculated - at new y position there can be overflow!!!
// edit: can't happen as it should only move upwards, and this is covered by the calculations done.
//void updateLineOffset(const StoryText& itemText, const ParagraphStyle& style, FirstLineOffsetPolicy offsetPolicy)
//{
//	if (itemsInLine <= 0)
//		return;
//	if ((!hasDropCap) && (startOfCol) && (style.lineSpacingMode() != ParagraphStyle::BaselineGridLineSpacing))
//	{
//		//FIXME: use glyphs, not chars
//		double firstasce = itemText.charStyle(line.firstItem).font().ascent(itemText.charStyle(line.firstItem).fontSize() / 10.0);
//		double adj (0.0);
//		double currasce (this->getLineAscent(itemText));
//		if( offsetPolicy == FLOPRealGlyphHeight )
//		{
//			adj = firstasce - currasce;
//		}
//		else if( offsetPolicy == FLOPFontAscent )
//		{
//			adj = 0.0;
//		}
//		else if( offsetPolicy == FLOPLineSpacing )
//		{
//			adj = firstasce - style.lineSpacing();
//		}
//		line.ascent = currasce;
//		line.y -= adj;
//		yPos -= adj;
//	}
//	else if ((!startOfCol) && (style.lineSpacingMode() == ParagraphStyle::AutomaticLineSpacing))
//	{
//		QChar ch = itemText.text(line.firstItem);
//		double firstasce = style.lineSpacing();
//		double currasce  = getLineHeight(itemText);
//		double adj = firstasce - currasce;
//		qDebug() << QString("move2 line %1.. down by %2").arg(current.line.firstItem).arg(-adj);
//		line.ascent = currasce;
//		line.y -= adj;
//		yPos -= adj;
//	}
//}

private:
	double frameWidth;
	double frameHeight;
	MarginStruct insets;
	double lineCorr;
};

static int checkCJK(QChar ch) {
	unsigned int code = ch.unicode();
	if (	(0x2E80 < code && code < 0x2EFF) ||   // CJK Radicals Supplement
		(0x3000 < code && code < 0x303F) ||   // CJK Symbols and Punctuation
		(0x31C0 < code && code < 0x31EF) ||   // CJK Strokes
		(0x3200 < code && code < 0x32FF) ||   // Enclosed CJK Letters and Months
		(0x3300 < code && code < 0x33FF) ||   // CJK Compatibility
		(0x3400 < code && code < 0x4DBF) ||   // CJK Unified Ideographs Extension A
		(0x4E00 < code && code < 0x9FFF) ||   // CJK Unified Ideographs
		(0xF900 < code && code < 0xFAFF) ||   // CJK Compatibility Ideographs
		(0xFE30 < code && code < 0xFE4F) ||   // CJK Compatibility Forms
		(0x20000 < code && code < 0x2A6DF) || // CJK Unified Ideographs Extension B
		(0x2A700 < code && code < 0x2B73F) || // CJK Unified Ideographs Extension C
		(0x2B740 < code && code < 0x2B81F) || // CJK Unified Ideographs Extension D
		(0x2F800 < code && code < 0x2FA1F) || // CJK Compatibility Ideographs Supplement
		(0xFF01 < code && code < 0xFF0F) ||
		(0xFF1A < code && code < 0xFF20) ||
		(0xFF58 < code && code < 0xFFDC) ||
		(code == 0x3000) ||
		(code == 0x3002) ||
		(code == 0x201C) ||
		(code == 0x201D))
		return 1;
	else
		return 0;
}

static int checkCJKBreakAfter(QChar ch) {
	unsigned int code[] = {0x201C, 0xFF08, 0xFF3B, 0xFF5B, 0xFF5F, 0xFF62, 0xFF0D, 0};
	for (int i = 0; code[i]; ++i)
		if (code[i] == ch.unicode())
			return 0;
	return 1;
}

static int checkCJKBreakBefore(QChar ch) {
	unsigned int code[] =
	 {0x201D, 0x3002, 0xFF01, 0xFF09, 0xFF0C, 0xFF0E, 0xFF1A,
	  0xFF1B, 0xFF1F, 0xFF3D, 0xFF5D, 0xFF60, 0xFF63, 0xFF64, 0};
	for (int i = 0; code[i]; ++i)
		if (code[i] == ch.unicode())
			return 0;
	return 1;
}

static int implicitSpace(ScText *f, ScText *s) {
	if (checkCJK(f->ch) && checkCJK(s->ch))
		return 1;
	else
		return 0;
}

static int implicitBreak(ScText *f, ScText *s) {
	if (checkCJK(f->ch) && checkCJK(s->ch)) {
		if (!checkCJKBreakAfter(f->ch)
		 || !checkCJKBreakBefore(s->ch))
			return 0;
		return 1;
	} else
		return 0;
}

/// called when line length is known and line is to be justified
static void justifyLine(StoryText& itemText, LineSpec& line)
{
	
	double glyphNatural = 0;
	double spaceNatural = 0;
	double glyphExtension;
	double spaceExtension;
	int spaceInsertion = 0;
	double imSpace = -1;

	const ParagraphStyle& style(itemText.paragraphStyle(line.firstItem));

	// measure natural widths for glyphs and spaces
	for (int sof = line.firstItem; sof <= line.lastItem; ++sof)
	{
		ScText* hl = itemText.item(sof);
		if (!SpecialChars::isExpandingSpace(hl->ch))
		{
			glyphNatural += hl->glyph.wide();
		}
		else if ( (hl->effects() & ScStyle_SuppressSpace) == 0)
		{
			spaceNatural += hl->glyph.wide();
			if (imSpace < 0.0 || imSpace > hl->glyph.wide())
				imSpace = hl->glyph.wide();
		}
		if (sof != line.firstItem && implicitSpace(itemText.item(sof - 1), hl)) {
			spaceInsertion += 1;
		}
	}

	imSpace /= 2;

	// decision: prio 1: stretch glyph;  prio 2: insert spaces;  prio 3: stretch spaces
	
	if (line.width < spaceNatural + glyphNatural * style.minGlyphExtension() && spaceNatural > 0)
	{
		glyphExtension = style.minGlyphExtension() - 1;
		spaceExtension = (line.width - glyphNatural * (1+glyphExtension) ) / spaceNatural  - 1;
		imSpace = 0;
	}
	else if (line.width < spaceNatural + glyphNatural * style.maxGlyphExtension() && glyphNatural > 0)
	{
		spaceExtension = 0;
		glyphExtension = (line.width - spaceNatural) / glyphNatural  - 1;
		imSpace = 0;
	}
	else
	{
		glyphExtension = style.maxGlyphExtension() - 1;
		if (spaceInsertion) {
			double remaining = line.width - glyphNatural * (1 + glyphExtension) - spaceNatural;
			if (imSpace > 0) {
				if (remaining / spaceInsertion < imSpace) {
					imSpace = remaining / spaceInsertion;
					spaceExtension = 0;
				} else {
					spaceExtension = (remaining + spaceNatural) / (spaceNatural + spaceInsertion * imSpace) - 1;
					imSpace *= spaceExtension + 1;
				}
			} else {
				imSpace = remaining / spaceInsertion;
				spaceExtension = 0;
			}
		} else {
			if (spaceNatural > 0)
				spaceExtension = (line.width - glyphNatural * (1+glyphExtension) ) / spaceNatural  - 1;
			else
				spaceExtension = 0;
		}
	}
	
	double glyphScale = 1 + glyphExtension;
	
/*
	qDebug() << QString("justify: line = %7 natural = %1 + %2 = %3 (%4); spaces + %5%%; min=%8; glyphs + %6%%; min=%9")
		   .arg(spaceNatural).arg(glyphNatural).arg(spaceNatural+glyphNatural).arg(line.naturalWidth)
		   .arg(spaceExtension).arg(glyphExtension).arg(line.width)
		   .arg(style.minWordTracking()).arg(style.minGlyphExtension());
	*/
	
	int startItem = line.firstItem;
	if (itemText.item(startItem)->effects() & ScStyle_DropCap)
		startItem++;
	// distribute whitespace on spaces and glyphs
	double wide = 0.0;
	GlyphLayout* glyph = NULL;
	for (int yof = startItem; yof <= line.lastItem; ++yof)
	{
		ScText* hl = itemText.item(yof);
		wide = hl->glyph.wide();
		if (!SpecialChars::isExpandingSpace(itemText.text(yof)))
		{
			hl->glyph.last()->xadvance += wide * glyphExtension;
			glyph = &(hl->glyph);
			while (glyph)
			{
				glyph->xoffset *= glyphScale;
				glyph->scaleH *= glyphScale;
				glyph = glyph->more;
			}
		}
		else if ((hl->effects() & ScStyle_SuppressSpace) == 0)
		{
			hl->glyph.last()->xadvance += wide * spaceExtension;
		}
		if (yof != line.firstItem && implicitSpace(itemText.item(yof - 1), hl)) {
			itemText.item(yof - 1)->glyph.last()->xadvance += imSpace;
		}
	}
}


/// called when linelength is known and line is not justified
static void indentLine(StoryText& itemText, LineSpec& line, double leftIndent)
{
	if (line.naturalWidth > line.width)
	{
		justifyLine(itemText, line);
	}
	if (leftIndent > 0)
	{
		line.x += leftIndent;
		line.width -= leftIndent;
	}
}

//defined but not used
///// calculate how much the first char should stick out to the left
//static double opticalLeftMargin(const StoryText& itemText, const LineSpec& line)
//{
//	int b = line.firstItem;
//	while (b < line.lastItem && (itemText.item(b)->effects() & ScStyle_SuppressSpace))
//		   ++b;
//	
//	double chs = itemText.charStyle(b).fontSize() * (itemText.charStyle(b).scaleH() / 1000.0);
//	QChar chr = itemText.text(b);
//	double leftCorr = itemText.charStyle(b).font().realCharWidth(chr, chs / 10.0);
//	if (QString("'´`").indexOf(chr) >= 0
//		|| chr == QChar(0x2018) // quote 6
//		|| chr == QChar(0x2019) // quote 9
//		|| chr == QChar(0x201a) // lower quote 9
//		|| chr == QChar(0x201b) // upper reversed 9 6
//		|| chr == QChar(0x2039) // single guillemet <
//		|| chr == QChar(0x203a) // single guillemet >
//		)
//		leftCorr *= -0.7;
//	else if (QString("\"").indexOf(chr) >= 0
//			 || chr == QChar(0x00ab) // guillemet <<
//			 || chr == QChar(0x00bb) // guillemet >>
//			 || chr == QChar(0x201c) // quote 66
//			 || chr == QChar(0x201d) // quote 99
//			 || chr == QChar(0x201e) // lower quote 99
//			 || chr == QChar(0x201f) // upper reversed 99
//			 ) 
//		leftCorr *= -0.5;
//	else {
//		leftCorr = itemText.charStyle(b).font().charWidth(QChar(' '), chs / 10.0, chr);
//		leftCorr -= itemText.charStyle(b).font().charWidth(QChar(' '), chs / 10.0);
////				double leftCorr2 = itemText.charStyle(a).font().charWidth(QChar('K'), chs / 10.0, chr);
////				leftCorr2 -= itemText.charStyle(a).font().charWidth(QChar('K'), chs / 10.0);
////				leftCorr = qMin(leftCorr, leftCorr2);
//	}
//	return leftCorr;
//}

/// calculate how much the last char should stick out to the right
static double opticalRightMargin(const StoryText& itemText, const LineSpec& line)
{
	int b = line.lastItem;
	while (b > line.firstItem && 
		   (SpecialChars::isBreakingSpace(itemText.text(b)) || SpecialChars::isBreak(itemText.text(b)))
		   )
		--b;
	if (b >= line.firstItem) 
	{
		const CharStyle& chStyle(itemText.charStyle(b));
		double chs = chStyle.fontSize() * (chStyle.scaleH() / 1000.0);
		QChar chr = (itemText.item(b)->effects() & ScStyle_SoftHyphenVisible) ? 
			QChar('-') : itemText.text(b);
		double rightCorr = chStyle.font().realCharWidth(chr, chs / 10.0);
		if (QString("-,.`´'~").indexOf(chr) >= 0
			|| chr == QChar(0x2018)
			|| chr == QChar(0x2019)
			|| chr == QChar(0x201a)
			|| chr == QChar(0x201b)
			|| chr == QChar(0x2039)
			|| chr == QChar(0x203a)
			|| chr == QChar(0x2032) // PRIME
			)
			rightCorr *= 0.5;
		else if (QString(";:\"").indexOf(chr) >= 0
				 || chr == QChar(0x00ab)
				 || chr == QChar(0x00bb)
				 || chr == QChar(0x201c)
				 || chr == QChar(0x201d)
				 || chr == QChar(0x201e)
				 || chr == QChar(0x201f)
				 || chr == QChar(0x2013) // EN DASH
				 || chr == QChar(0x2033) // double prime
				 )
			rightCorr *= 0.5;
		else {
			rightCorr = chStyle.font().charWidth(chr, chs / 10.0);
			rightCorr -= chStyle.font().charWidth(chr, chs / 10.0, QChar('.'));
		}
		return rightCorr;
	}
	return 0.0;
}

static double findRealOverflowEnd(const QRegion& shape, QRect pt, double maxX)
{
	int int_maxX = static_cast<int>(maxX);
	while (!regionContainsRect(shape, pt) && pt.right() < int_maxX)
		pt.translate(1, 0);
	if (pt.right() >= int_maxX)
		return maxX;
	return pt.left() + 0.5;
}

static double adjustToBaselineGrid (const LineControl &control, PageItem *item, int OwnPage)
{
	double by = item->yPos();
	if (OwnPage != -1)
		by = by - item->doc()->Pages->at(OwnPage)->yOffset();
	int ol1 = qRound((by + control.yPos - item->doc()->guidesPrefs().offsetBaselineGrid) * 10000.0);
	int ol2 = static_cast<int>(ol1 / item->doc()->guidesPrefs().valueBaselineGrid);
//						qDebug() << QString("baseline adjust: y=%1->%2").arg(current.yPos).arg(ceil(  ol2 / 10000.0 ) * item->doc()->typographicSettings.valueBaselineGrid + item->doc()->typographicSettings.offsetBaselineGrid - by);

	return ceil(ol2 / 10000.0) * item->doc()->guidesPrefs().valueBaselineGrid + item->doc()->guidesPrefs().offsetBaselineGrid - by;
}

static double nextAutoTab (const LineControl &current, PageItem *item)
{
	double dtw = item->doc()->itemToolPrefs().textTabWidth;
	if (current.xPos == current.colLeft)
		return current.colLeft + dtw;
	double res = current.colLeft + ceil ((current.xPos - current.colLeft) / dtw) * dtw;
	if (res == current.xPos) res += dtw;
	return res;
}

//cezaryece: I remove static statement as this function is used also by PageItem_NoteFrame
double calculateLineSpacing (const ParagraphStyle &style, PageItem *item)
{
	if (style.lineSpacingMode() == ParagraphStyle::AutomaticLineSpacing)
	{
		double autoLS = static_cast<double>(item->doc()->typographicPrefs().autoLineSpacing) / 100.0;
		return (style.charStyle().font().height(style.charStyle().fontSize() / 10.0) * autoLS);
	}
	if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing)
		return item->doc()->guidesPrefs().valueBaselineGrid;
	return style.lineSpacing();
}


// This assumes that layout() ran on the previous page and set the incomplete* vars
// It also clears the incomplete* vars, and changes the starting position for this frame
// The incomplete* vars are used to ensure that we don't run into an endless loop
// This setup won't cause any problems, as the only way for the starting position to change
// back is if the previous frame's layout() runs again, but if it does, it also sets the
// incomplete* vars for us
bool PageItem_TextFrame::moveLinesFromPreviousFrame ()
{
	PageItem_TextFrame* prev = dynamic_cast<PageItem_TextFrame*>(BackBox);
	if (!prev) return false;
	if (!prev->incompleteLines) return false;   // no incomplete lines - nothing to do
	int pos = itemText.lastInFrame();
	QChar lastChar = itemText.text (pos);
	// qDebug()<<"pos is"<<pos<<", length is"<<itemText.length()<<", incomplete is "<<prev->incompleteLines;
	if ((pos != itemText.length()-1) && (!SpecialChars::isBreak (lastChar, true)))
		return false;  // the paragraph isn't ending yet
	int lines = itemText.lines();  // lines added to the current frame

	ParagraphStyle style = itemText.paragraphStyle (pos);
	int need = style.keepLinesEnd () + 1;
	int prevneed = style.keepLinesStart () + 1;
	if (lines >= need) {
		prev->incompleteLines = 0;   // so that further paragraphs don't pull anything
		return false;   // we have enough lines
	}

	// too few lines - we need to pull some from the previous page
	int pull = need - lines;
	// if pulling the lines would lead to the original frame having too few, pull the whole paragraph
	if (prev->incompleteLines - pull < prevneed)
		pull = prev->incompleteLines;
	// qDebug()<<"pulling"<<pull<<"lines;
	// Okay, move the starting/ending character
	int startingPos = prev->incompletePositions[prev->incompleteLines - pull];
	for (int i = 0; i < pull; ++i)
		prev->itemText.removeLastLine();
	firstChar = prev->MaxChars = startingPos;
	// keep the remaining incomplete lines flagged as such
	// this ensures that if pulling one line won't be enough, the subsequent call to layout() will pull more
	prev->incompleteLines -= pull;

	return true;
}

// called at the end of a frame or column
bool PageItem_TextFrame::adjustParagraphEndings (int &a, bool EndOfFrame)
{
	// More text to go - let's apply paragraph flowing options - orphans/widows, etc
	int pos = a;
	if (EndOfFrame)
		pos = itemText.lastInFrame();
	if (pos >= itemText.length() - 1) return false;

	ParagraphStyle style = itemText.paragraphStyle (pos);
	int paragraphStart = itemText.prevParagraph (pos) + 1;
	QChar lastChar = itemText.text (pos);
	bool keepWithNext = style.keepWithNext() && (lastChar == SpecialChars::PARSEP);
	if (keepWithNext || (!SpecialChars::isBreak (lastChar, true))) {
		// paragraph continues in the next frame, or needs to be kept with the next one
		// check how many lines are in this frame
		int lineStart = itemText.startOfLine (pos);
		incompleteLines = 1;
		incompletePositions.prepend (lineStart);
		while (lineStart > paragraphStart) {
			lineStart = itemText.startOfLine (lineStart - 1);
			incompleteLines++;
			incompletePositions.prepend (lineStart);
		}
		int need = style.keepLinesStart () + 1;
		if (style.keepTogether()) need = incompleteLines;
		int pull = 0;
		if (style.keepTogether() || (incompleteLines < need)) pull = incompleteLines;
		// if we need to keep it with the next one, pull one line. Next frame layouting
		// will pull more from us if it proves necessary.
		if (keepWithNext && (!pull)) pull = 1;

		if (pull) {
			// push this paragraph to the next frame
			for (int i = 0; i < pull; ++i)
				itemText.removeLastLine();
			incompleteLines = 0;
			incompletePositions.clear();
			if (EndOfFrame)
				MaxChars = itemText.lastInFrame() + 1;
			a = itemText.lastInFrame();
			return true;
		}
	}
	return false;
}

void PageItem_TextFrame::layout() 
{
// 	qDebug()<<"==Layout==" << itemName() ;
// 	printBacktrace(24);
	if (BackBox != NULL && BackBox->invalid) {
//		qDebug("textframe: len=%d, going back", itemText.length());
		// Why that invalid = false here? Calling prevInChain->layout() does
		// not ensure that this box will be layouted
		// invalid = false;
		PageItem_TextFrame* frame = dynamic_cast<PageItem_TextFrame*>(BackBox);
		while (frame)
		{
			if (!frame->BackBox)
				break;
			frame = dynamic_cast<PageItem_TextFrame*>(frame->BackBox);
		}
		while (frame != this)
		{
			if (frame->invalid)
			{
				frame->layout();
				break;
			}
			frame = dynamic_cast<PageItem_TextFrame*>(frame->NextBox);
		}
		// #9592 : warning, BackBox->layout() may not layout BackBox next box
		if (!invalid)
			return;
	}
	else if (!invalid && OnMasterPage.isEmpty()) {
//		qDebug() << QString("textframe: len=%1, invalid=%2 OnMasterPage=%3: no relayout").arg(itemText.length()).arg(invalid).arg(OnMasterPage);
		return;
	}
	if (invalid && BackBox == NULL)
		firstChar = 0;
	
//	qDebug() << QString("textframe(%1,%2): len=%3, start relayout at %4").arg(Xpos).arg(Ypos).arg(itemText.length()).arg(firstInFrame());
	QPoint pt1, pt2;
	QRect pt;
	double chs, chsd = 0;
	double EndX, OFs, wide, kernVal;
	QString chstr;
	QString prefixStr;
	ScText *hl;
	ParagraphStyle style;
	int opticalMargins = ParagraphStyle::OM_None;
	
	bool outs = false;
	bool goNoRoom = false;
	bool goNextColumn = false;
	
	TabControl tabs;
	tabs.active    = false;     // RTab
	tabs.status    = TabNONE;   // TabCode
	tabs.charIndex = -1;        // StartRT
	tabs.xPos      = 0;         // RTabX

	QList<ParagraphStyle::TabRecord> tTabValues;
	tTabValues.clear();
	
	bool BulNumMode = false; //when bullet or counter should be inserted
	bool   DropCmode = false, FlopBaseline = false;
	double desc=0, asce=0, realAsce=0, realDesc = 0;
	double maxDY=0, maxDX=0;
	double DropCapDrop = 0;
	int    DropLines = 0;
	int    DropLinesCount = 0;
	
	itemText.clearLines();
	incompleteLines = 0;
	incompletePositions.clear();

	double lineCorr = 0;
	if (lineColor() != CommonStrings::None)
		lineCorr = m_lineWidth / 2.0;
	
	// TODO: refactor this into PageItem
	MarginStruct extra;
	extra.Top = TExtra;
	extra.Left = Extra;
	extra.Right = RExtra;
	extra.Bottom = BExtra;

	LineControl current;
	current.init(Width, Height, extra, lineCorr);
	current.initColumns(columnWidth(), ColGap);
	current.hyphenCount = 0;

	//hold Y position of last computed line of text (with glyphs descent)
	//for moving next line if glyphs are higher than that
	double lastLineY = 0;
	
	QMap<int, Mark*> noteMarksPosMap;  //maping notes marks and its position in text

	// dump styles
/*	
	for (int i=0; i < itemText.nrOfParagraphs(); ++i) {
		const ParagraphStyle& pstyle(itemText.paragraphStyle(itemText.endOfParagraph(i)));
		qDebug("par %d:", i);
		dumpIt(pstyle);
	}
	qDebug() << "default:";
	dumpIt(itemText.defaultStyle());
*/
	
	setShadow();
	SEColumnsMap.clear();
	int startColumn = 0;
	int itLen = itemText.length();
	//fast validate empty frames
	warnedList.clear();

	if (itLen == 0 || firstInFrame() == itLen)
	{
		PageItem* next = this;
		while (next != NULL)
		{
			next->invalid = false;
			next = next->nextInChain();
		}
		if (!isNoteFrame() && m_Doc->notesChanged() && !m_notesFramesMap.isEmpty())
		{ //if notes are used
			UndoManager::instance()->setUndoEnabled(false);
			QList<PageItem_NoteFrame*> delList;
			foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
			{
				if (nF->notesList().isEmpty() && !nF->isAutoNoteFrame())
					delList.append(nF);
			}
			while (!delList.isEmpty())
				m_Doc->delNoteFrame(delList.takeFirst(), false);
			UndoManager::instance()->setUndoEnabled(true);
		}
		return;
	}

	if ((itLen != 0)) // || (NextBox != 0))
	{
		// determine layout area
		m_availableRegion = calcAvailableRegion();
		if (m_availableRegion.isEmpty())
		{
			MaxChars = firstInFrame();
			goto NoRoom;
		}
		
		if (imageFlippedH() || imageFlippedV())
		{
			QTransform matrix;
			if (imageFlippedH())
			{
				matrix.translate(Width, 0);
				matrix.scale(-1, 1);
			}
			if (imageFlippedV())
			{
				matrix.translate(0, Height);
				matrix.scale(1, -1);
			}
			m_availableRegion = matrix.map(m_availableRegion);
		}
		
		current.nextColumn();
		lastLineY = extra.Top;

		//automatic line spacing factor (calculated once)
		double autoLS = static_cast<double>(m_Doc->typographicPrefs().autoLineSpacing) / 100.0;

		// find start of first line
		if (firstInFrame() < itLen)
		{
			hl = itemText.item(firstInFrame());
			style = itemText.paragraphStyle(firstInFrame());
			if (firstLineOffset() == FLOPBaselineGrid)
				style.setLineSpacingMode(ParagraphStyle::BaselineGridLineSpacing);
			style.setLineSpacing (calculateLineSpacing (style, this));

//			qDebug() << QString("style @0: %1 -- %2, %4/%5 char: %3").arg(style.leftMargin()).arg(style.rightMargin())
//				   .arg(style.charStyle().asString()).arg(style.name()).arg(style.parent()?style.parent()->name():"");
			if (style.hasDropCap())
			{
				chs = calculateLineSpacing (style, this) * style.dropCapLines() * 10;
			}
			else 
				chs = hl->fontSize();
			desc = -hl->font().descent(chs / 10.0);
			current.yPos = extra.Top + lineCorr;
//			qDebug() << QString("first line at y=%1").arg(current.yPos);
		}
		else // empty itemText:
		{
			desc = -itemText.defaultStyle().charStyle().font().descent(itemText.defaultStyle().charStyle().fontSize() / 10.0);
			current.yPos = itemText.defaultStyle().lineSpacing() + extra.Top + lineCorr - desc;
		}
		current.startLine(firstInFrame());

		outs = false;
		OFs = 0;
		MaxChars = 0;
		double realEnd = 0;
		current.restartIndex = current.restartRowIndex = firstInFrame();
		current.afterOverflow = false;
		current.addLine = false;
		current.recalculateY = true;
		current.lastInRowLine = false;
		current.addLeftIndent = true;
		current.wasFirstInRow = false;
		current.leftIndent = 0;
		current.rightMargin = 0.0;
		current.mustLineEnd = current.colRight;
		current.restartX = 0;
		int lastStat = 0, curStat = 0;
		bool disableHyph = false;

		//why emit invalidating signals each time text is changed by appling styles?
		//this speed up layouting in case of using notes marks and drop caps
		itemText.blockSignals(true);
		setMaxY(-1);
		int maxYAsc = 0, maxYDesc = 0;
		double offset = 0.0;
		double breakPos = 0.0;
		double overflowWidth = 0.0;
		double hyphWidth = 0.0;
		bool inOverflow = false;

		for (int a = firstInFrame(); a < itLen; ++a)
		{
			if (startColumn == 0)  //for widows/orphans checking
				startColumn = a;
			hl = itemText.item(a);
			bool HasObject = hl->hasObject(m_Doc);
			bool HasMark = hl->hasMark();
			if (HasMark)
			{
				//show control characters for marks
				hl->glyph.glyph = SpecialChars::OBJECT.unicode() + ScFace::CONTROL_GLYPHS;

				hl->mark->OwnPage = OwnPage;
				//itemPtr and itemName set to this frame only if mark type is different than MARK2ItemType
				if (!hl->mark->isType(MARK2ItemType))
				{
					hl->mark->setItemPtr(this);
					hl->mark->setItemName(itemName());
				}
				//anchors and indexes has no visible inserts in text
				if (hl->mark->isType(MARKAnchorType) || hl->mark->isType(MARKIndexType))
				{
					hl->glyph.shrink();
					continue;
				}
				//store mark pointer and position in text
				if (hl->mark->isType(MARKNoteMasterType))
					noteMarksPosMap.insert(a, hl->mark);
				//set note marker charstyle
				if (hl->mark->isNoteType())
				{
					TextNote* note = hl->mark->getNotePtr();
					if (note == NULL)
						continue;
					hl->mark->setItemPtr(this);
					NotesStyle* nStyle = note->notesStyle();
						Q_ASSERT(nStyle != NULL);
					QString chsName = nStyle->marksChStyle();
					CharStyle newStyle(itemText.charStyle(a));
					if ((chsName != "") && (chsName != tr("No Style")))
					{
						CharStyle marksStyle(m_Doc->charStyle(chsName));
						if (!newStyle.equiv(marksStyle))
						{
							newStyle.setParent(chsName);
							itemText.applyCharStyle(a, 1, marksStyle);
						}
					}
					else
						itemText.eraseCharStyle(a, 1, newStyle);
					if (hl->mark->isType(MARKNoteMasterType))
					{
						if (nStyle->isSuperscriptInMaster())
							hl->setEffects(hl->effects() | ScStyle_Superscript);
						else
							hl->setEffects(hl->effects() & ~ScStyle_Superscript);
					}
					else
					{
						if (nStyle->isSuperscriptInNote())
							hl->setEffects(hl->effects() | ScStyle_Superscript);
						else
							hl->setEffects(hl->effects() & ~ScStyle_Superscript);
					}
				}
			}
			chstr = ExpandToken(a);
			int chstrLen = chstr.length();
			if (chstr.isEmpty())
				chstr = SpecialChars::ZWNBSPACE;

			curStat = SpecialChars::getCJKAttr(hl->ch);
			if (a > 0 && itemText.text(a-1) == SpecialChars::PARSEP)
				style = itemText.paragraphStyle(a);
			if (current.itemsInLine == 0)
				opticalMargins = style.opticalMargins();
			CharStyle charStyle = (hl->ch != SpecialChars::PARSEP? itemText.charStyle(a) : style.charStyle());
			const ScFace* font = &charStyle.font();
			QString prefixStr = QString();
			BulNumMode = false;
			
			if ((a == 0 || itemText.text(a-1) == SpecialChars::PARSEP))
			{
				if (style.hasBullet() || style.hasNum())
				{
					BulNumMode = true;
					if (hl->prefix == NULL)
					{
						ScText clone;
						clone.applyCharStyle(charStyle);
						clone.setEffects(ScStyle_Default);
						hl->prefix = new ScText(clone);
						const StyleContext* cStyleContext = itemText.paragraphStyle(a).charStyleContext();
						hl->prefix->setContext(cStyleContext);
					}
					if (style.hasBullet())
						prefixStr = style.bulletStr();
					else if (style.hasNum())
					{
						if (hl->prefix->str.isEmpty())
						{
							prefixStr = "?";
							m_Doc->m_flagRenumber = true;
						}
						else
							prefixStr = hl->prefix->str;
					}
				}
			}
			if (!BulNumMode && hl->prefix)
			{
				hl->prefix->parstyle = NULL;
				delete hl->prefix;
				hl->prefix = NULL;
			}

			if (a == 0 || itemText.text(a-1) == SpecialChars::PARSEP)
			{
				if (style.hasDropCap() || style.hasBullet() || style.hasNum())
				{
					CharStyle peStyle(charStyle);
					if (style.peCharStyleName() != tr("No Style") && !style.peCharStyleName().isEmpty())
					{
						peStyle.setParent(style.peCharStyleName());
						if (style.hasDropCap())
						{
							charStyle.applyStyle(peStyle);
							itemText.setCharStyle(a, chstr.length(), charStyle);
						}
						else if (hl->prefix)
							hl->prefix->setStyle(peStyle);
					}
				}
			}
			double hlcsize10 = charStyle.fontSize() / 10.0;
			double scaleV = charStyle.scaleV() / 1000.0;
			double scaleH = charStyle.scaleH() / 1000.0;
			offset = hlcsize10 * (charStyle.baselineOffset() / 1000.0);
			if (current.startOfCol && firstLineOffset() == FLOPBaselineGrid)
				style.setLineSpacingMode(ParagraphStyle::BaselineGridLineSpacing);
			style.setLineSpacing (calculateLineSpacing (style, this));
			//avoid hyphenation for words with softhyphen at it beginning
			if (hl->ch == SpecialChars::SHYPHEN && !disableHyph)
			{
				if ((a == 0) || !itemText.item(a - 1)->ch.isLetterOrNumber())
					disableHyph = true;
			}
			else if (disableHyph && !hl->ch.isLetterOrNumber())
				disableHyph = false;
			FlopBaseline = (current.startOfCol && firstLineOffset() == FLOPBaselineGrid);

			// find out about par gap and dropcap
			if (a == firstInFrame())
			{
				if (a == 0 || itemText.text(a-1) == SpecialChars::PARSEP)
				{
					if (chstr[0] != SpecialChars::PARSEP)
					{
						DropCmode = style.hasDropCap();
						if (DropCmode)
							DropLines = style.dropCapLines();
					}
					else
						DropCmode = false;
				}
			}
			if ((a == 0 || itemText.text(a-1) == SpecialChars::PARSEP) && !isNoteFrame())
			{
				if (style.hasDropCap() || style.hasBullet() || style.hasNum())
				{
					if (style.peCharStyleName() == tr("No Style") || style.peCharStyleName().isEmpty())
					{
						const QString& curParent(style.hasParent() ? style.parent() : style.name());
						CharStyle newStyle;
						newStyle.setParent(m_Doc->paragraphStyle(curParent).charStyle().name());
						charStyle.setStyle(newStyle);
					}
					else if (charStyle.name() != style.peCharStyleName())
						charStyle.setStyle(m_Doc->charStyle(style.peCharStyleName()));
					if (hl->prefix)
						hl->prefix->setStyle(charStyle);
					else
						itemText.setCharStyle(a, chstrLen ,charStyle);
				}
				else if (style.peCharStyleName() != tr("No Style") && !style.peCharStyleName().isEmpty())
				//hasDropCap is cleared but is set dcCharStyleName = clear drop cap char style
				{
					const QString& curParent(style.hasParent() ? style.parent() : style.name());
					CharStyle newStyle;
					newStyle.setParent(m_Doc->paragraphStyle(curParent).charStyle().name());
					charStyle.setStyle(newStyle);
					itemText.setCharStyle(a, chstr.length(),charStyle);
				}
			}

			{  // local block for 'fl'
				StyleFlag fl = hl->effects();
				fl &= ~ScStyle_DropCap;
				fl &= ~ScStyle_SoftHyphenVisible;
				hl->setEffects(fl);
			}

			// No space at begin of line, 
			if (legacy)
			{
				// unless at begin of par (eeks)
				if ( (current.itemsInLine == 0) && (SpecialChars::isBreakingSpace(hl->ch))
					 && (a > 0 && ! SpecialChars::isBreak(itemText.text(a-1)))
					 && ! (a > 0 && SpecialChars::isBreakingSpace(itemText.text(a-1)) 
						   && (itemText.charStyle(a-1).effects() & ScStyle_SuppressSpace) != ScStyle_SuppressSpace))
				{
					hl->setEffects(hl->effects() | ScStyle_SuppressSpace);
					hl->glyph.xadvance = 0;
					continue;
				}
				else
					hl->setEffects(hl->effects() & ~ScStyle_SuppressSpace);
			}
			else // from 134 on use NBSPACE for this effect
			{
				if ( current.itemsInLine == 0 && (SpecialChars::isBreakingSpace(hl->ch) || hl->ch.isSpace()))
				{
					hl->setEffects(hl->effects() | ScStyle_SuppressSpace);
					hl->glyph.xadvance = 0;
					continue;
				}
				else
					hl->setEffects(hl->effects() & ~ScStyle_SuppressSpace);
			}
			if (current.itemsInLine == 0)
			{
 				if (style.rightMargin() == 0)
				{
					//addLine = true;
					current.rightMargin = 0.0;
				}
				else
				{
					if (current.lastInRowLine)
						current.rightMargin = style.rightMargin();
					else
						current.rightMargin = 0.0;
				}
				current.breakIndex = -1;
				if (current.startOfCol && !current.afterOverflow && current.recalculateY)
					current.yPos = qMax(current.yPos, extra.Top);
				// more about par gap and dropcaps
				if ((a > firstInFrame() && itemText.text(a-1) == SpecialChars::PARSEP) || (a == 0 && BackBox == 0 && current.startOfCol))
				{
					if (!current.afterOverflow && current.recalculateY && !current.startOfCol)
						current.yPos += style.gapBefore();
					DropCapDrop = 0;
					if (chstr[0] != SpecialChars::PARSEP)
						DropCmode = style.hasDropCap();
					else
						DropCmode = false;
					if (DropCmode && !current.afterOverflow)
					{
						DropLines = style.dropCapLines();
						DropCapDrop = calculateLineSpacing (style, this) * (DropLines - 1);
//						qDebug() << QString("dropcapdrop: y=%1+%2").arg(current.yPos).arg(DropCapDrop);
					}
				}
				if (isNoteFrame())
				{
					DropCmode = false;
					BulNumMode = false;
				}
			}
			// find charsize factors
			if (DropCmode)
			{
				//DropCapDrop = calculateLineSpacing (style, this) * (DropLines - 1);

				// FIXME : we should ensure that fonts are loaded before calls to layout()
				// ScFace::realCharHeight()/Ascent() ensure font is loaded thanks to an indirect call to char2CMap()
				// ScFace::ascent() can be called safely afterwards

				//text height, width, ascent and descent should be calculated for whole text provided by hl in current position
				//and that may be more than one char (variable text for example)
				double realCharHeight = 0.0, realCharAscent = 0.0;
				for (int i = 0; i < chstrLen; ++i)
				{
					realCharHeight = qMax(realCharHeight, font->realCharHeight(chstr[i], 1));
					realCharAscent = qMax(realCharAscent, font->realCharAscent(chstr[i], 1));
				}
				double fontAscent     = font->ascent(style.charStyle().fontSize() / 10.0);
				if (realCharHeight == 0.0)
					realCharHeight = font->height(style.charStyle().fontSize() / 10.0);
				if (realCharAscent == 0.0)
					realCharAscent = fontAscent;
				chsd = (10 * ((DropCapDrop + fontAscent) / realCharHeight));
				chs  = (10 * ((DropCapDrop + fontAscent) / realCharAscent));
				hl->setEffects(hl->effects() | ScStyle_DropCap);
				hl->glyph.yoffset -= DropCapDrop;
				if (HasObject)
				{
					chs = qRound((hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth()) * 10);
					chsd = qRound((hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth()) * 10);
				}
			}
			else // ! dropCapMode
			{
				if (HasObject)
					chs = qRound((hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth()) * 10);
				else
					chs = charStyle.fontSize();
			}
			// set StartOfLine (and find tracking?)
			if (current.itemsInLine == 0)
			{
				hl->setEffects(hl->effects() | ScStyle_StartOfLine);
				kernVal = 0;
			}
			else
			{
				kernVal = 0; // chs * charStyle.tracking() / 10000.0;
				hl->setEffects(hl->effects() & ~ScStyle_StartOfLine);
			}
			hl->glyph.yadvance = 0;
			layoutGlyphs(*hl, chstr, hl->glyph);
			if (BulNumMode && !prefixStr.isEmpty())
			{
				hl->prefix->glyph.yadvance = 0;
				hl->prefix->ch = prefixStr[0];
				layoutGlyphs(*(hl->prefix), prefixStr, hl->prefix->glyph);
				double xoff = hl->prefix->glyph.wide() + style.parEffectOffset();
				hl->prefix->glyph.xoffset -= xoff;
				GlyphLayout* moreGL = hl->prefix->glyph.more;
				while (moreGL)
				{
					moreGL->xoffset -= xoff;
					moreGL = moreGL->more;
				}
			}
			// find out width, ascent and descent of char
			if (HasObject)
			{
				wide = hl->getItem(m_Doc)->width() + hl->getItem(m_Doc)->lineWidth();
				hl->glyph.xadvance = wide * hl->glyph.scaleH;
			}
			else
			{
				wide = hl->glyph.wide();
				// apply kerning
				if (a+1 < itemText.length())
				{
					uint glyph2 = font->char2CMap(itemText.text(a+1));
					double kern= font->glyphKerning(hl->glyph.glyph, glyph2, chs / 10.0) * hl->glyph.scaleH;
					wide += kern;
					hl->glyph.xadvance += kern;
					// change xadvance, xoffset according to JIS X4051
					ScText *hl2 = itemText.item(a+1);
					int nextStat = SpecialChars::getCJKAttr(hl2->ch);
					int prevStat;
					if(curStat != 0)
					{	// current char is CJK
						if(nextStat == 0 && !SpecialChars::isBreakingSpace(hl2->ch)){
							switch(curStat & SpecialChars::CJK_CHAR_MASK){
							case SpecialChars::CJK_KANJI:
							case SpecialChars::CJK_KANA:
							case SpecialChars::CJK_NOTOP:
								kern = wide / 4;
								wide += kern;
								hl->glyph.xadvance += kern;
							}
						} else {	// next char is CJK, too
							switch(curStat & SpecialChars::CJK_CHAR_MASK){
							case SpecialChars::CJK_FENCE_END:
								switch(nextStat & SpecialChars::CJK_CHAR_MASK){
								case SpecialChars::CJK_FENCE_BEGIN:
								case SpecialChars::CJK_FENCE_END:
								case SpecialChars::CJK_COMMA:
								case SpecialChars::CJK_PERIOD:
								case SpecialChars::CJK_MIDPOINT:
									kern = -wide / 2;
									wide += kern;
									hl->glyph.xadvance += kern;
								}
								break;
							case SpecialChars::CJK_COMMA:
							case SpecialChars::CJK_PERIOD:
								switch(nextStat & SpecialChars::CJK_CHAR_MASK){
								case SpecialChars::CJK_FENCE_BEGIN:
								case SpecialChars::CJK_FENCE_END:
									kern = -wide / 2;
									wide += kern;
									hl->glyph.xadvance += kern;
								}
								break;
							case SpecialChars::CJK_MIDPOINT:
								switch(nextStat & SpecialChars::CJK_CHAR_MASK){
								case SpecialChars::CJK_FENCE_BEGIN:
									kern = -wide / 2;
									wide += kern;
									hl->glyph.xadvance += kern;
								}
								break;
							case SpecialChars::CJK_FENCE_BEGIN:
								if(a == current.line.firstItem){ // first char of the line
									prevStat = SpecialChars::CJK_FENCE_BEGIN;
								} else {
									hl2 = itemText.item(a-1);
									prevStat = SpecialChars::getCJKAttr(hl2->ch) & SpecialChars::CJK_CHAR_MASK;
								}
								if(prevStat == SpecialChars::CJK_FENCE_BEGIN){
									kern = -wide / 2;
									wide += kern;
									hl->glyph.xadvance += kern;
									hl->glyph.xoffset += kern;
								}
								break;
							}

						}
					} else {	// current char is not CJK
						if(nextStat != 0 && !SpecialChars::isBreakingSpace(hl->ch)){
							switch(nextStat & SpecialChars::CJK_CHAR_MASK){
							case SpecialChars::CJK_KANJI:
							case SpecialChars::CJK_KANA:
							case SpecialChars::CJK_NOTOP:
								kern = hl2->glyph.wide() / 4;
								wide += kern;
								hl->glyph.xadvance += kern;
							}
						}
					}
				}
			}
			if (DropCmode)
			{
				// drop caps are wider...
				if (HasObject)
				{
					double itemHeight = hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth();
					if (itemHeight == 0)
						itemHeight = font->height(style.charStyle().fontSize() / 10.0);
					wide = hl->getItem(m_Doc)->width() + hl->getItem(m_Doc)->lineWidth();
					asce = hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth();
					realAsce = calculateLineSpacing (style, this) * DropLines;
					hl->glyph.scaleH /= hl->glyph.scaleV;
					hl->glyph.scaleV = (realAsce / itemHeight);
					hl->glyph.scaleH *= hl->glyph.scaleV;
				}
				else
				{
					double realCharHeight = 0.0;
					wide = 0.0; realAsce = 0.0;
					//
					for (int i = 0; i < chstrLen; ++i)
					{
						realCharHeight = qMax(realCharHeight, font->realCharHeight(chstr[i], hlcsize10));
						realAsce = qMax(realAsce, font->realCharHeight(chstr[i], chsd / 10.0));
						wide += font->realCharWidth(chstr[i], chsd / 10.0);
					}
					wide = (wide* scaleH) + (1 - scaleH);
					realAsce = realAsce  * scaleV + offset;
					if (realCharHeight == 0)
						realCharHeight = font->height(style.charStyle().fontSize() / 10.0);
					asce = font->ascent(hlcsize10);
					// qDebug() QString("dropcaps pre: chsd=%1 realCharHeight = %2 chstr=%3").arg(chsd).arg(asce).arg(chstr2[0]);
					hl->glyph.scaleH /= hl->glyph.scaleV;
					hl->glyph.scaleV = (realAsce / realCharHeight);
					hl->glyph.scaleH *= hl->glyph.scaleV;
					hl->glyph.xoffset -= 0.5; //drop caps are always to far from column left edge
				}
				hl->glyph.xadvance = wide;
				desc = realDesc =0;
			}
			else // !DropCMode
			{
				if (SpecialChars::isExpandingSpace(hl->ch))
				{
					double wordtracking = charStyle.wordTracking();
					hl->glyph.xadvance *= wordtracking;
					wide *= wordtracking;
				}
				// find ascent / descent
				if (HasObject)
					desc = realDesc = 0;
				else
				{
					for (int i = 0; i < chstrLen; ++i)
					{
						if (chstr[i] == SpecialChars::OBJECT)
							continue;
						realDesc = qMax(realDesc, font->realCharDescent(chstr[i], hlcsize10));
						realAsce = font->realCharAscent(chstr[i], hlcsize10);
					}
					realDesc =  realDesc * scaleV - offset;
					desc = -font->descent(hlcsize10);
					current.rememberShrinkStretch(hl->ch, wide, style);
				}
				if (HasObject)
				{
					asce = hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth();
					realAsce = asce * scaleV + offset;
				}
				else
				{
					asce = font->ascent(hlcsize10);
					for (int i = 0; i < chstrLen; ++i)
						realAsce = qMax(realAsce, font->realCharAscent(chstr[i], hlcsize10));
					realAsce = realAsce  * scaleV + offset;
				}
				if (BulNumMode)
				{
					const ScFace* PEfont = &(*(hl->prefix)).font();
					double PEhlcsize10 = hl->prefix->fontSize() / 10.0;
					double PEscaleV = hl->prefix->scaleV() / 1000.0;
					double PEoffset = PEhlcsize10 * (hl->prefix->baselineOffset() / 1000.0);

					if (PEfont->descent(PEhlcsize10) > font->descent(hlcsize10))
						desc -= PEfont->descent(PEhlcsize10) - font->descent(hlcsize10);
					asce = qMax(asce, PEfont->ascent(PEhlcsize10));
					for (int i=0; i < prefixStr.length(); ++i)
					{
						realDesc = qMax(realDesc, PEfont->realCharDescent(prefixStr[i], PEhlcsize10) * PEscaleV - PEoffset);
						realAsce = qMax(realAsce, PEfont->realCharAscent(prefixStr[i], PEhlcsize10) * PEscaleV + PEoffset);
					}
				}
			}

			//check for Y position at beginning of line
			if (current.itemsInLine == 0 && !current.afterOverflow)
			{
				if (current.recalculateY)
				{
					//if top of column Y position depends on first line offset
					if (current.startOfCol)
					{
						lastLineY = qMax(lastLineY, extra.Top + lineCorr);
						//fix for proper rendering first empty line (only with PARSEP)
						if (chstr[0] == SpecialChars::PARSEP)
							current.yPos += style.lineSpacing();
						if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing || FlopBaseline)
						{
							if (current.yPos <= lastLineY)
								current.yPos = lastLineY +1;
							double by = Ypos;
							if (OwnPage != -1)
								by = Ypos - m_Doc->Pages->at(OwnPage)->yOffset();
							int ol1 = qRound((by + current.yPos - m_Doc->guidesPrefs().offsetBaselineGrid) * 10000.0);
							int ol2 = static_cast<int>(ol1 / m_Doc->guidesPrefs().valueBaselineGrid);
							current.yPos = ceil(  ol2 / 10000.0 ) * m_Doc->guidesPrefs().valueBaselineGrid + m_Doc->guidesPrefs().offsetBaselineGrid - by;
						}
						else if (style.lineSpacingMode() != ParagraphStyle::BaselineGridLineSpacing)
						{
							if (firstLineOffset() == FLOPRealGlyphHeight)
							{
								if (DropCmode)
									current.yPos += asce;
								else
									current.yPos += realAsce;
							}
							else if (firstLineOffset() == FLOPLineSpacing)
								current.yPos += style.lineSpacing();
							else
								current.yPos += asce;
						}
					}
					else
					{
						if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing)
						{
							current.yPos += m_Doc->guidesPrefs().valueBaselineGrid;
							double by = Ypos;
							if (OwnPage != -1)
								by = Ypos - m_Doc->Pages->at(OwnPage)->yOffset();
							int ol1 = qRound((by + current.yPos - m_Doc->guidesPrefs().offsetBaselineGrid) * 10000.0);
							int ol2 = static_cast<int>(ol1 / m_Doc->guidesPrefs().valueBaselineGrid);
							current.yPos = ceil(  ol2 / 10000.0 ) * m_Doc->guidesPrefs().valueBaselineGrid + m_Doc->guidesPrefs().offsetBaselineGrid - by;
						}
						else
							current.yPos += style.lineSpacing();
					}
					if (DropCmode)
						current.yPos += DropCapDrop;
				}
				//set left indentation
				current.leftIndent = 0.0;
				if (current.addLeftIndent && (maxDX == 0 || DropCmode || BulNumMode))
				{
					current.leftIndent = style.leftMargin();
//					if (current.hasDropCap)
//						current.leftIndent = 0;
					if (a==0 || (a > 0 && (itemText.text(a-1) == SpecialChars::PARSEP)))
					{
						current.leftIndent += style.firstIndent();
						if (BulNumMode)
						{
							if (!style.parEffectIndent())
								current.leftIndent += style.parEffectOffset() + hl->prefix->glyph.wide();
						}
					}
					current.addLeftIndent = false;
				}
			}
			current.recalculateY = true;
			maxYAsc = 0, maxYDesc = 0;
			if (current.startOfCol)
			{
				double addAsce;
				if (DropCmode)
					addAsce = qMax(realAsce, asce + offset);
				else
					addAsce = asce + offset;
				if ((style.lineSpacingMode() != ParagraphStyle::BaselineGridLineSpacing) && (firstLineOffset() != FLOPBaselineGrid))
				{
					if (firstLineOffset() == FLOPRealGlyphHeight)
						addAsce = realAsce;
					else if (firstLineOffset() == FLOPLineSpacing)
						addAsce = style.lineSpacing();
				}
				maxYAsc = (int) ((current.yPos - addAsce) * 100);
			}
			else
				maxYAsc = (int) ((current.yPos - realAsce) * 100);
			//fix for glyphs with negative realAsce value
			maxYAsc = qMax(maxYAsc, 0);
			maxYDesc = (int) ((current.yPos + realDesc) * 100);

			if (current.itemsInLine == 0 && !current.afterOverflow)
			{
				//start a new line
				goNoRoom = false;

				// find line`s start
				pt1 = QPoint(static_cast<int>(floor(current.xPos)), maxYAsc/100);
				pt2 = QPoint(static_cast<int>(floor(current.xPos + (style.minGlyphExtension() * wide))), (maxYDesc/100) -1);
				pt = QRect(pt1, pt2);
				realEnd = 0;
				//check if there is overflow at start of line, if so jump behind it and check again
				double Xpos, Xend;
				bool done = false;
				bool newColumn = false;
				
				//FIX ME - that should be paragraph style`s properties
				//if set then indent is add to possible line start point (after overflow)
				//if not then indent is calculated from column left edge
				//if you dont agree that adding indent to overflow should be default behaviour 
				//then change it to false
				bool addIndent2overflow = false; // should be addIndent2Overflow = style.addIndent2Overlow();
				bool addFirstIndent2overflow = true; // should be addFirstIndent2Overflow = style.addFirstIndent2Overlow();
				//if first line indent is negative and left indent should not be added to overflow
				//then dont add first line ident either
				if ((style.firstIndent() < 0) && !addIndent2overflow)
					addFirstIndent2overflow = false;

				while (!done)
				{
					Xpos = current.xPos + (addIndent2overflow ? 0 : current.leftIndent);
					Xend = current.xPos + current.leftIndent;
					//check if in indent any overflow occurs
					while (Xpos <= Xend && Xpos < current.colRight)
					{
						pt.moveTopLeft(QPoint(static_cast<int>(floor(Xpos)), maxYAsc/100));
						if (!regionContainsRect(m_availableRegion, pt))
						{
							Xpos = current.xPos = realEnd = findRealOverflowEnd(m_availableRegion, pt, current.colRight);
							Xend = current.xPos + (addIndent2overflow ? current.leftIndent : 0);
							//for first paragraph`s line - if first line offset should be added
							if ( addFirstIndent2overflow && (a==0 || (a > 0 && (itemText.text(a-1) == SpecialChars::PARSEP))))
								Xend += style.firstIndent();
						}
						else
							Xpos++;
					}
					current.xPos = Xend;
					done = true;
					if (current.isEndOfLine((style.minGlyphExtension() * wide) + current.rightMargin))
					{
						// new line
						current.xPos = qMax(current.colLeft, maxDX);
						if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing || FlopBaseline)
						{
							current.yPos++;
							double by = Ypos;
							if (OwnPage != -1)
								by = Ypos - m_Doc->Pages->at(OwnPage)->yOffset();
							int ol1 = qRound((by + current.yPos - m_Doc->guidesPrefs().offsetBaselineGrid) * 10000.0);
							int ol2 = static_cast<int>(ol1 / m_Doc->guidesPrefs().valueBaselineGrid);
							current.yPos = ceil(  ol2 / 10000.0 ) * m_Doc->guidesPrefs().valueBaselineGrid + m_Doc->guidesPrefs().offsetBaselineGrid - by;
						}
						else if (style.lineSpacingMode() == ParagraphStyle::FixedLineSpacing)
							current.yPos += (current.startOfCol ? 1 : style.lineSpacing());
						else
							current.yPos++;
						lastLineY = (double) maxYAsc / 100.0;
						if (current.startOfCol)
						{
							double addAsce;
							if (DropCmode)
								addAsce = qMax(realAsce, asce + offset);
							else
								addAsce = asce + offset;
							if ((style.lineSpacingMode() != ParagraphStyle::BaselineGridLineSpacing) && (firstLineOffset() != FLOPBaselineGrid))
							{
								if (firstLineOffset() == FLOPRealGlyphHeight)
									addAsce = realAsce;
								else if (firstLineOffset() == FLOPLineSpacing)
									addAsce = style.lineSpacing() + offset;
							}
							maxYAsc = (int) ((current.yPos - addAsce) *100);
						}
						else
							maxYAsc = (int) ((current.yPos - realAsce) * 100);
						maxYDesc = (int) ((current.yPos + realDesc) * 100);

						pt.moveTopLeft(QPoint(static_cast<int>(floor(current.xPos)), maxYAsc/100));
						done = false;
					}
					if (current.isEndOfCol(realDesc))
					{
						setColumnSE(current.column,startColumn,a); //for widows/orphans checking
						startColumn = 0;
						current.column++;
						if (current.column < Cols)
						{
							newColumn = true;
							break;
						}
						else
						{
							MaxChars = a;
							goto NoRoom;
						}
					}
				}
				if (newColumn)
				{
					current.nextColumn();
					current.mustLineEnd = current.colRight;
					current.restartX = current.xPos;
					lastLineY = current.yPos;
					current.rowDesc = 0;
					a--;
					current.recalculateY = true;
					current.addLeftIndent = true;
					if (adjustParagraphEndings (a, false))
						current.startLine(a + 1);
					continue;
				}
				current.line.x = current.restartX = current.xPos;
				current.line.y = current.yPos;
			}

			//check if line must start at new Y position due to current glyph height or previous line descent
			if (!SpecialChars::isBreak(hl->ch, true)
				&& !SpecialChars::isBreakingSpace(hl->ch)
				&& !SpecialChars::isExpandingSpace(hl->ch)
				&& hl->ch != SpecialChars::TAB)
			{
				double diff = 0;
				if (current.startOfCol || DropCmode)
					diff = realAsce - (current.yPos - lastLineY);
				else if (style.lineSpacingMode() != ParagraphStyle::FixedLineSpacing)
				{
					if (HasObject)
						diff = (hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth()) * scaleV + offset - (current.yPos - lastLineY);
					else
						diff = font->realCharAscent(QChar('l'), hlcsize10) * scaleV + offset - (current.yPos - lastLineY);
				}
				else
				{
					if (HasObject)
						diff = (hl->getItem(m_Doc)->height() + hl->getItem(m_Doc)->lineWidth()) * scaleV + offset - (current.yPos - lastLineY);
				}
				if (diff >= 1 || (!DropCmode && diff > 0))
				{
					if (current.hasDropCap && DropLinesCount == 0)
					{
						current.hasDropCap = false;
						current.yPos = maxDY;
						maxDX = 0;
					}
					int linesDrop = 0;
					if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing || FlopBaseline)
					{
						linesDrop = ceil(diff / m_Doc->guidesPrefs().valueBaselineGrid);
						current.yPos += m_Doc->guidesPrefs().valueBaselineGrid * linesDrop;
						maxDX = 0;
					}
					else /*if (current.startOfCol)*/
					{
						//FIX ME - that is ugly hack I must made, because simply expression
						//current.yPos += diff; stop working, dont know why (compiler bug?)
						float YPOS = (float) current.yPos + (float) diff + 0.01;
						current.yPos = (double) YPOS;
						if (current.hasDropCap && diff > DropCapDrop)
						{
							current.hasDropCap = false;
						}
					}
					if (current.hasDropCap && linesDrop > 0 && DropLinesCount > 1)
					{
						DropLinesCount += linesDrop;
						if (DropLinesCount >= DropLines)
						{
							current.hasDropCap = false;
							maxDX = 0;
							maxDY = 0;
						}
					}
					a = current.restartRow(false);
					continue;
				}
			}
			// right tab stuff
			if (tabs.active)
			{
				if (((hl->ch == '.') && (tabs.status == TabPOINT)) || ((hl->ch == ',') && (tabs.status == TabCOMMA)) || (hl->ch == SpecialChars::TAB))
				{
					tabs.active = false;
					tabs.status = TabNONE;
				}
			}
			// tab positioning
			if (hl->ch == SpecialChars::TAB)
			{
				wide = 1;
				if (tabs.active)
					tabs.active = false;
				else // ???
				{
					tabs.xPos = current.xPos;
					tTabValues = style.tabValues();
					if (tTabValues.isEmpty())
					{
						current.xPos = nextAutoTab (current, this);
						tabs.status = TabNONE;
						tabs.active = false;
					}
					else
					{
						double tCurX = current.xPos;
						double oCurX = current.xPos - current.colLeft + wide;
						for (int yg = static_cast<int>(tTabValues.count()-1); yg > -1; yg--)
						{
							if (oCurX < tTabValues.at(yg).tabPosition)
							{
								tabs.status = static_cast<int>(tTabValues.at(yg).tabType);
								tabs.fillChar = tTabValues.at(yg).tabFillChar;
								current.xPos = current.colLeft + tTabValues.at(yg).tabPosition;
							}
						}
						tabs.active = (tabs.status != TabLEFT);
						if (current.xPos == tCurX)  // no more tabs found
						{
							current.xPos = nextAutoTab (current, this);
							tabs.status = TabNONE;
							tabs.active = false;
							tabs.fillChar = QChar();
						}

						// remember fill char
						if (!tabs.fillChar.isNull()) {
							hl->glyph.growWithTabLayout();
							TabLayout * tglyph = dynamic_cast<TabLayout*>(hl->glyph.more);
							if (tglyph)
							{
								tglyph->fillChar = tabs.fillChar;
								tglyph->glyph    = font->char2CMap(tabs.fillChar);
								tglyph->yoffset  = hl->glyph.yoffset;
								tglyph->scaleV   = tglyph->scaleH = chs / charStyle.fontSize();
								tglyph->xadvance = 0;
							}
						}
					}
					current.xPos -= (legacy ? 1.0 : 0.0);
					hl->glyph.xadvance = current.xPos + wide + kernVal - tabs.xPos;
//					wide = current.xPos - RTabX;
					tabs.charIndex = a;
				}
			}
			
			// remember y pos
			if (DropCmode)
			{
				double yoffset = 0.0;
				for (int i = 0; i < chstrLen; ++i)
					yoffset = qMax(yoffset, font->realCharHeight(chstr[i], chsd / 10.0) - font->realCharAscent(chstr[i], chsd / 10.0));
				hl->glyph.yoffset -= yoffset;
			}
			// remember x pos
			breakPos = current.xPos;
			
			if (!tabs.active) // normal case
			{
				current.xPos += wide+kernVal;
			}
			else if (tabs.active && tabs.status == TabCENTER) 	// center tab
			{
				current.xPos += (wide+kernVal) / 2;
				current.xPos = qMax(current.xPos, current.colLeft);
			}
			else // other tabs.active			
			{
				current.xPos = qMax(current.xPos, current.colLeft);
			}		
			// remember possible break
			if ( (SpecialChars::isBreakingSpace(hl->ch) || hl->ch == SpecialChars::TAB))
			{
				if ( a == firstInFrame() || !SpecialChars::isBreakingSpace(itemText.text(a-1)) )
				{
					current.rememberBreak(a, breakPos, style.rightMargin());
				}
			}
			if  ((hl->ch == SpecialChars::OBJECT) && (hl->hasObject(m_Doc)))
				current.rememberBreak(a, breakPos, style.rightMargin());
			// CJK break
			if(a > current.line.firstItem)
			{ // not the first char
				if( (lastStat == 0) && (curStat == 0))
				{	// both non-CJK
					// do nothing
				} else {
					// non-CJK char does not have CJK_NOBREAK_AFTER/CJK_NOBREAK_BEFORE
					if((lastStat & SpecialChars::CJK_NOBREAK_AFTER) == 0 &&
							(curStat & SpecialChars::CJK_NOBREAK_BEFORE) == 0){
						current.rememberBreak(a-1, breakPos, style.rightMargin());
					}
				}

			}
			lastStat = curStat;
			//check against space before PARSEP
			/*if (SpecialChars::isBreakingSpace(hl->ch) && (a + 1 < itemText.length()) && (itemText.item(a+1)->ch == SpecialChars::PARSEP))
			{
				a++;
				hl = itemText.item(a);
			}*/

			overflowWidth = 0.0;
			inOverflow = false;

			// test if end of line reached
			if ((style.hyphenationMode() != ParagraphStyle::NoHyphenation) && ((hl->effects() & ScStyle_HyphenationPossible || hl->ch == SpecialChars::SHYPHEN) && !disableHyph))
				hyphWidth = charStyle.font().charWidth('-', hlcsize10) * scaleH;
			else
				hyphWidth = 0.0;
			int maxYAsc100 = maxYAsc/100;
			int maxYDesc100 = maxYDesc/100;
			inOverflow = false;
			if (hl->effects() & ScStyle_HyphenationPossible || hl->ch == SpecialChars::SHYPHEN)
				hyphWidth = font->charWidth('-', hlcsize10) * (charStyle.scaleH() / 1000.0);
			if ((current.isEndOfLine(style.rightMargin() + hyphWidth)) || current.isEndOfCol(realDesc) || SpecialChars::isBreak(hl->ch, Cols > 1) || (current.xPos - current.maxShrink + hyphWidth) >= current.mustLineEnd)
			{
				//end of row reached - right column, end of column, break char or line must end
				if (current.itemsInLine == 0 && !current.afterOverflow && !SpecialChars::isBreak(hl->ch, Cols > 1))
				{
					//no glyphs in line, so start new row
					if (SpecialChars::isBreak(hl->ch, Cols > 1))
						current.restartRowIndex = a +1;
					a = current.restartRow(true);
					inOverflow = false;
					outs = false;
					continue;
				}
				//there we have some glyphs
				if (current.breakIndex < 0)
 				{
 					//force break
					if (!SpecialChars::isBreak(hl->ch, Cols > 1))
					{
						//force line end at previouse glyph
						a--;
						current.mustLineEnd = current.line.x;
					}
					current.breakLine(itemText, style, firstLineOffset(),a);
 				}
				if (!current.addLine && !current.lastInRowLine && current.afterOverflow)
				{
					//we reach right edge of column
					//if we are after overflow area we have to go back and try to insert text before it
					//if we have some text here - insert text WITHOUT right margin
					//if there is no place for text - insert text WITH right margin and end line
					current.lastInRowLine = false;
					if (current.line.firstItem == current.restartIndex)
						current.lastInRowLine = true;
					if (current.hasDropCap && DropLinesCount == 0 && current.restartIndex == current.restartRowIndex)
					{
						current.hasDropCap = false;
						maxDX = 0;
						current.yPos = maxDY;
					}
					a = current.restartLine(false,true);
					outs = false;
					inOverflow = false;
					continue;
				}
				outs = true;
				current.addLine = true;
				current.lastInRowLine = true;
				current.rightMargin = style.rightMargin();
				if (current.isEndOfCol(realDesc))
					goNextColumn = true;
			}
			else
			{
				int charStart, charEnd;
				if (current.itemsInLine == 0)
				{
					charStart = static_cast<int>(floor(current.line.x));
					charEnd = static_cast<int>(ceil(current.xPos));
				}
				else
				{
					charStart = static_cast<int>(qMax(floor(current.xPos - current.maxShrink - (style.minGlyphExtension() * wide)),0.0));
					charEnd = static_cast<int>(ceil(current.xPos - current.maxShrink));
				}
				if (legacy
					&& !disableHyph
					&& ((hl->ch == '-')
						|| ((style.hyphenationMode() != ParagraphStyle::NoHyphenation)
							&& (( (hl->effects() & ScStyle_HyphenationPossible) && (current.hyphenCount < m_Doc->hyphConsecutiveLines() || m_Doc->hyphConsecutiveLines() == 0)) || hl->ch == SpecialChars::SHYPHEN))))
				{
					if (hl->effects() & ScStyle_HyphenationPossible || hl->ch == SpecialChars::SHYPHEN)
					{
						pt1 = QPoint(charStart,  maxYAsc100);
						pt2 = QPoint(static_cast<int>(charEnd + hyphWidth), maxYDesc100 -1);
					}
					else
					{
						pt1 = QPoint(charStart, maxYAsc100);
						pt2 = QPoint(charEnd, maxYDesc100 -1);
					}
				}
				else if (!legacy && SpecialChars::isBreakingSpace(hl->ch))
				{
					pt1 = QPoint(qMax(static_cast<int>(floor(breakPos - current.maxShrink - (style.minGlyphExtension() * wide))), 0), maxYAsc100);
					pt2 = QPoint(charEnd, maxYDesc100 -1);
				}
				else
				{
					pt1 = QPoint(charStart, maxYAsc100);
					pt2 = QPoint(charEnd, maxYDesc100-1);
				}
				pt = QRect(pt1, pt2);
				if (!regionContainsRect(m_availableRegion, pt))
				{
					realEnd = findRealOverflowEnd(m_availableRegion, pt, current.colRight);
					outs = true;
				}
				else if (style.rightMargin() > 0.0)
				{
					if (current.lastInRowLine || current.xPos - current.maxShrink + style.rightMargin() > current.colRight - style.rightMargin())
						//condition after || is for find overflows in right margin area
					{
						pt.translate(static_cast<int>(ceil(style.rightMargin())), 0);
						if (!regionContainsRect(m_availableRegion, pt))
						{
							realEnd = findRealOverflowEnd(m_availableRegion, pt, current.colRight);
							outs = true;
						}
					}
				}
				if (outs)
				{
					if (current.itemsInLine == 0)
					{
						current.line.x = current.xPos = realEnd;
						--a;
						current.startLine(a+1);
						if (!current.wasFirstInRow)
							current.addLeftIndent = true;
						if (current.hasDropCap && DropLinesCount == 0 && !current.afterOverflow)
						{
							current.hasDropCap = false;
							current.yPos = maxDY;
						}
						current.recalculateY = false;
						outs = false;
						continue;
					}
					if (current.breakIndex < 0)
					{
						--a;
						current.breakLine(itemText, style, firstLineOffset(), a);
					}
					//check if after overflow text can be placed
					overflowWidth = realEnd - (current.xPos - current.maxShrink);
					double newXAdd = overflowWidth - style.rightMargin() + style.minGlyphExtension() * wide + hyphWidth;
					if (current.isEndOfLine(newXAdd) || (current.xPos + newXAdd >= current.colRight) || (realEnd >= current.mustLineEnd))
					{
						if (!current.afterOverflow)
						{
							current.addLine = true;
							current.lastInRowLine = true;
						}
						//line must end before overflov
						if (!current.addLine && !current.lastInRowLine)
						{
							if (current.afterOverflow)
							{
								if (current.breakIndex < 0)
								{
									current.lastInRowLine = true;
									current.mustLineEnd = current.line.x;
								}
								else if (current.line.firstItem == current.restartIndex)
									current.lastInRowLine = true;
							}
							else
								current.lastInRowLine = true;
							if (current.hasDropCap && DropLinesCount == 0)
							{
								current.hasDropCap = false;
								maxDX = 0;
							}
							a = current.restartLine(false, true);
							inOverflow = false;
							outs = false;
							continue;
						}
						current.addLine = true;
						current.rightMargin = style.rightMargin();
						current.lastInRowLine = true;
					}
					else
						inOverflow = true;
				}
				else
					setMaxY(maxYDesc);
			}

			// hyphenation
			if (!disableHyph && (style.hyphenationMode() != ParagraphStyle::NoHyphenation) && (((hl->effects() & ScStyle_HyphenationPossible) || (hl->ch == '-') || hl->ch == SpecialChars::SHYPHEN) && (!outs) && !itemText.text(a-1).isSpace() ))
			{
				breakPos = current.xPos;
				if (hl->ch != '-')
				{
					breakPos += hyphWidth;
				}
				
				double rightHang = 0;
				if (opticalMargins & ParagraphStyle::OM_RightHangingPunct) {
					rightHang = 0.7 * hyphWidth;
				}
				
				if (legacy || (breakPos - rightHang < current.colRight - style.rightMargin()))
				{
					if (!disableHyph &&((current.hyphenCount < m_Doc->hyphConsecutiveLines()) || (m_Doc->hyphConsecutiveLines() == 0) || hl->ch == SpecialChars::SHYPHEN))
					{
						current.rememberBreak(a, breakPos, style.rightMargin() + hyphWidth);
					}
				}
			}
			
			if ((hl->ch == SpecialChars::FRAMEBREAK) && (a < itemText.length()-1))
				goNoRoom = true;
			if ((hl->ch == SpecialChars::COLBREAK) && (Cols > 1))
				goNextColumn = true;

			if (a != firstInFrame() && implicitBreak(itemText.item(a - 1), itemText.item(a)))
				current.rememberBreak(a - 1, breakPos);

			++current.itemsInLine;
			
			if (tabs.active)
			{
				double cen = 1;
				if (tabs.status == TabCENTER)
					cen = 2;
				
				double newTabAdvance = itemText.item(tabs.charIndex)->glyph.xadvance - (wide+kernVal) / cen;
				
				if (newTabAdvance >= 0) {
					itemText.item(tabs.charIndex)->glyph.xadvance = newTabAdvance;
				}
				else {
					tabs.active = false;
					tabs.status = TabNONE;
				}
			}
			if (DropCmode && !outs)
			{
				DropCmode = false;
				DropLinesCount = 0;
				maxDY = current.yPos;
				current.hasDropCap = true;
				current.xPos += style.parEffectOffset();
				hl->glyph.xadvance += style.parEffectOffset();
				maxDX = current.xPos;
				current.yPos -= calculateLineSpacing (style, this) * (DropLines-1);
				if ((style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing) || (firstLineOffset() == FLOPBaselineGrid))
					current.yPos = adjustToBaselineGrid (current, this, OwnPage);
				current.recalculateY = false;
			}
			// end of line
			if (outs)
			{
				tabs.active = false;
				tabs.status = TabNONE;
				double opticalRM = opticalRightMargin(itemText, current.line);
				if (SpecialChars::isBreak(hl->ch, Cols > 1))
				{
					// find end of line
					current.breakLine(itemText, style, firstLineOffset(), a);
					EndX = current.endOfLine(m_availableRegion, style.rightMargin(), maxYAsc100, maxYDesc100);
					current.finishLine(EndX);
					//addLine = true;
					assert(current.addLine);
					//current.startOfCol = false;
					//addLeftIndent = true;
					if (hl->ch == SpecialChars::PARSEP)
					{
						maxDX = 0;
						if (current.hasDropCap)
						{
							current.yPos = maxDY;
							maxDY = 0;
							current.hasDropCap = false;
						}
					}

//					if (style.alignment() != 0)
					{
						if (opticalMargins & ParagraphStyle::OM_RightHangingPunct)
							current.line.width += opticalRM;

						OFs = 0;
						if (style.alignment() == ParagraphStyle::Rightaligned)
							OFs = current.line.width - current.line.naturalWidth;
						if (style.alignment() == ParagraphStyle::Centered)
							OFs = (current.line.width - current.line.naturalWidth) / 2;
						if (style.alignment() == ParagraphStyle::Justified)
							OFs = 0;
						
						if (style.alignment() == ParagraphStyle::Extended
							|| (style.alignment() == ParagraphStyle::Justified 
								&&  (hl->ch == SpecialChars::LINEBREAK ||
									 hl->ch == SpecialChars::FRAMEBREAK ||
									 hl->ch == SpecialChars::COLBREAK)
								&&  !itemText.text(current.line.lastItem - 1).isSpace()))
						{
							justifyLine(itemText, current.line); 
						}
						else
						{
							if (opticalMargins & ParagraphStyle::OM_RightHangingPunct)
								current.line.naturalWidth += opticalRM;
							double optiWidth = current.colRight - style.rightMargin() - style.lineSpacing()/2.0 - current.line.x;
							if (current.line.naturalWidth > optiWidth)
								current.line.width = qMax(current.line.width - current.maxShrink, optiWidth);
							// simple offset
							indentLine(itemText, current.line, OFs);
						}
						current.xPos = current.colRight;
					}
				}
				else // outs -- last char went outside the columns (or into flow-around shape)
				{
					if (current.breakIndex >= 0)
						a = current.breakIndex;
					assert( a >= 0 );
					assert( a < itemText.length() );
					hl = itemText.item(a);
					current.itemsInLine = a - current.line.firstItem + 1;
					if (current.addLine)
					{
						// go back to last break position
						style = itemText.paragraphStyle(a);
						if (style.lineSpacingMode() == ParagraphStyle::AutomaticLineSpacing)
							style.setLineSpacing(font->height(hlcsize10) * autoLS);
						else if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing)
							style.setLineSpacing(m_Doc->guidesPrefs().valueBaselineGrid);
						
						if (hl->ch == ' ') {
							hl->setEffects(hl->effects() | ScStyle_SuppressSpace);
							hl->glyph.xadvance = 0;
						}
						
						current.updateHeightMetrics(itemText);
						//current.updateLineOffset(itemText, style, firstLineOffset());
						//current.xPos = current.breakXPos;
						EndX = current.endOfLine(m_availableRegion, current.rightMargin, maxYAsc100, maxYDesc100);
						current.finishLine(EndX);
						
						hyphWidth = 0.0;
						if (!disableHyph && (style.hyphenationMode() != ParagraphStyle::NoHyphenation) && ((hl->effects() & ScStyle_HyphenationPossible) || hl->ch == SpecialChars::SHYPHEN))
						{
							// insert hyphen
							if (current.lastInRowLine)
								//increase hyphen count only for hyphens a the end of text row, omit hyphens before overflow
								current.hyphenCount++;
							hl->setEffects(hl->effects() | ScStyle_SoftHyphenVisible);
							hl->glyph.grow();
							hl->glyph.more->glyph = font->char2CMap(QChar('-'));
							hl->glyph.more->xadvance = font->charWidth('-', itemText.charStyle(a).fontSize() / 10.0) * scaleH; //FIX ME - hyphen is not rendered with proper width - check yhis with large glyphs horizontal scaling eg. 20%
							hyphWidth = hl->glyph.more->xadvance;
						}
						else
						{
							if (hl->ch != '-')
								current.hyphenCount = 0;
							hl->setEffects(hl->effects() & ~ScStyle_SoftHyphenVisible);
							hl->glyph.shrink();
						}
						
						// Justification
						if (opticalMargins & ParagraphStyle::OM_RightHangingPunct)
							current.line.width += opticalRM;
						else
							current.line.naturalWidth += hyphWidth;
						
						OFs = 0;
						if (style.alignment() == ParagraphStyle::Rightaligned)
							OFs = current.line.width - current.line.naturalWidth;
						if (style.alignment() == ParagraphStyle::Centered)
							OFs = (current.line.width - current.line.naturalWidth) / 2;
						
						if ((style.alignment() == ParagraphStyle::Justified) || (style.alignment() == ParagraphStyle::Extended))
							justifyLine(itemText, current.line);
						else
						{
							if (opticalMargins & ParagraphStyle::OM_RightHangingPunct)
								current.line.naturalWidth += opticalRM;
							indentLine(itemText, current.line, OFs);
						}
						current.xPos = current.line.x + current.line.width;
					}
				}
				if (inOverflow)
					current.xPos = realEnd;

				//line break or end of column
				if (( hl->ch == SpecialChars::PARSEP || hl->ch == SpecialChars::LINEBREAK)
				    && current.hasDropCap)
				{
					current.hasDropCap = false;
					if (current.yPos < maxDY)
						current.yPos = maxDY;
					maxDX = 0;
				}
				if (current.isEndOfCol(desc))
				{
					//check if realy line extends bottom margin
					current.updateHeightMetrics(itemText);
					if (current.isEndOfCol(current.line.descent))
					{
						if (current.itemsInLine == 0 || current.column+1 == Cols)
						{
							goNoRoom = true;
							MaxChars = a + 1;
							break;
						}
						goNextColumn = true;
					}
					else
						setMaxY(maxYDesc);
				}
				else
					setMaxY(maxYDesc);
				if (current.line.firstItem <= current.line.lastItem && current.itemsInLine > 0)
				{
					if (current.addLine && current.breakIndex >= 0)
					{
						if (itemText.charStyle(current.line.firstItem).effects() & ScStyle_DropCap)
						{
							// put line back to top
							current.line.y -= DropCapDrop;
							itemText.item(current.line.firstItem)->glyph.yoffset += DropCapDrop;
						}
						fillInTabLeaders(itemText, current.line);
						//if right margin is set we temporally save line, not append it
						itemText.appendLine(current.line);
						setMaxY(maxYDesc);
						current.restartIndex = current.line.lastItem +1;
						a = current.restartIndex -1;
						current.rowDesc = qMax(current.rowDesc,current.yPos + current.line.descent);
						if (!current.lastInRowLine)
						{
							current.restartX = current.xPos;
							if (current.addLeftIndent)
							{
								current.addLeftIndent = false;
								current.wasFirstInRow = true;
							}
						}
					}
					else if (!inOverflow && !current.afterOverflow && current.lastInRowLine)
					{
						current.yPos++;
						a = current.restartLine(true, true);
						inOverflow = false;
						outs = false;
						current.mustLineEnd = current.colRight;
						continue;
					}
				}
				if (current.addLine && current.lastInRowLine)
				{
					current.recalculateY = true;
					current.wasFirstInRow = false;
					current.addLeftIndent = true;
					inOverflow = false;
					outs = false;
					current.startOfCol = false;
					current.restartX = current.xPos = qMax(maxDX, current.colLeft);
					lastLineY = current.rowDesc;
					if (current.hasDropCap)
					{
						++DropLinesCount;
						if (DropLinesCount >= DropLines)
						{
							current.hasDropCap = false;
							current.restartX = current.xPos = current.colLeft;
							maxDX = 0;
						}
					}
					lastLineY = current.rowDesc;
					current.mustLineEnd = current.colRight;
					current.restartRowIndex = current.restartIndex;
				}
				if ( SpecialChars::isBreak(hl->ch) )
				{
					if (hl->ch == SpecialChars::PARSEP)
						current.yPos += style.gapAfter();
					current.hyphenCount = 0;
				}
				if (inOverflow)
				{
					current.afterOverflow = true;
					inOverflow = false;
					current.addLeftIndent = false;
					current.recalculateY = false;
				}
				else
				{
					current.afterOverflow = false;
				}
				outs = false;
				current.addLine = false;
				current.lastInRowLine = false;
				current.startLine(a+1);
				if (goNoRoom)
				{
					goNoRoom = false;
					MaxChars = a+1;
					goto NoRoom;
				}
				if (goNextColumn)
				{
					goNextColumn = false;
					setColumnSE(current.column,startColumn,a); //for widows/orphans checking
					startColumn = 0;
					current.column++;
					if (current.column < Cols)
					{
						adjustParagraphEndings (a, false);
						if (firstLineOffset() == FLOPRealGlyphHeight)
							asce = 0;
						current.nextColumn();
						current.mustLineEnd = current.colRight;
						current.addLeftIndent = true;
						lastLineY = extra.Top;
						current.rowDesc = 0;
						current.recalculateY = true;
					}
					else
					{
						MaxChars = a;
						goto NoRoom;
					}
				}
			}
			if (a == itemText.length() -1)
			{
				if (!current.afterOverflow || current.addLine)
				{
					current.addLine = true;
					current.lastInRowLine = true;
					current.breakLine(itemText, style, firstLineOffset(),a);
				}
				if (current.afterOverflow && !current.addLine)
				{
					if (current.restartIndex < current.line.firstItem)
					{
						a = current.restartLine(false,true);
						continue;
					}
					else
						current.breakLine(itemText, style, firstLineOffset(),a);
				}
			}
		}
		if (goNoRoom)
		{
			goNoRoom = false;
			goto NoRoom;
		}
// end of itemText
		if (current.itemsInLine > 0 )
		{
			int a = itemText.length()-1;
			hl = (a >= 0) ? itemText.item(a) : NULL;
			current.breakLine(itemText, style, firstLineOffset(), a);

			if (current.startOfCol)
			{
				double addAsce;
				if (DropCmode)
					addAsce = qMax(realAsce, asce + offset);
				else
					addAsce = asce + offset;
				if (style.lineSpacingMode() != ParagraphStyle::BaselineGridLineSpacing)
				{
					if (firstLineOffset() == FLOPRealGlyphHeight)
						addAsce = realAsce;
					else if (firstLineOffset() == FLOPLineSpacing)
						addAsce = style.lineSpacing() + offset;
				}
				maxYAsc = (int) (current.yPos - addAsce);
			}
			else
				maxYAsc = (int) (current.yPos - realAsce);
			maxYAsc = qMax(maxYAsc, 0);
			maxYDesc = (int) (current.yPos + realDesc);

			EndX = current.endOfLine(m_availableRegion, style.rightMargin(), maxYAsc/100, maxYDesc/100);
			current.finishLine(EndX);

			if (opticalMargins & ParagraphStyle::OM_RightHangingPunct)
				current.line.width += opticalRightMargin(itemText, current.line);
			
			OFs = 0;
			if (style.alignment() == ParagraphStyle::Rightaligned)
				OFs = current.line.width - current.line.naturalWidth;
			if (style.alignment() == ParagraphStyle::Centered)
				OFs = (current.line.width - current.line.naturalWidth) / 2;
			if (style.alignment() == ParagraphStyle::Justified)
				OFs = 0;
			if (style.alignment() == ParagraphStyle::Extended
				|| (style.alignment() == ParagraphStyle::Justified 
					&&  (hl->ch == SpecialChars::LINEBREAK ||
						 hl->ch == SpecialChars::FRAMEBREAK ||
						 hl->ch == SpecialChars::COLBREAK)
					&&  !itemText.text(current.line.firstItem + current.itemsInLine-1).isSpace()))
			{
				justifyLine(itemText, current.line);
			}
			else
			{
				if (opticalMargins & ParagraphStyle::OM_RightHangingPunct)
					current.line.naturalWidth += opticalRightMargin(itemText, current.line);
				indentLine(itemText, current.line, OFs);
			}
			if ( itemText.charStyle(current.line.firstItem).effects() & ScStyle_DropCap )
			{
				// put line back to top
				current.line.y -= DropCapDrop;
				itemText.item(current.line.firstItem)->glyph.yoffset += DropCapDrop;
			}
			fillInTabLeaders(itemText, current.line);
			current.startOfCol = false;
			goNextColumn = false;

			itemText.appendLine(current.line);
			setMaxY(maxYDesc);
			current.startOfCol = false;

			if (moveLinesFromPreviousFrame ()) {
				layout ();  // line moving ensures that this won't be an endless loop
				itemText.blockSignals(false);
				return;
			}
		}
	}
	MaxChars = itemText.length();

NoRoom:
	invalid = false;
	int pos = itemText.lastInFrame();
	if (pos < itemText.length());
		adjustParagraphEndings (pos, true);

	setColumnSE(Cols-1, startColumn, MaxChars -1);

	if (!isNoteFrame() && (!m_Doc->notesList().isEmpty() || m_Doc->notesChanged()))
	{
		UndoManager::instance()->setUndoEnabled(false);
		NotesInFrameMap notesMap = updateNotesFrames(noteMarksPosMap);
		if (notesMap != m_notesFramesMap)
		{
			updateNotesMarks(notesMap);
			notesFramesLayout();
		}
		UndoManager::instance()->setUndoEnabled(true);
	}
	if (itemText.length() == 0)
	{
			itemText.blockSignals(false);
			return;
	}
	if (NextBox != NULL) 
	{
		PageItem_TextFrame * nextFrame = dynamic_cast<PageItem_TextFrame*>(NextBox);
		nextFrame->invalid = true;
		nextFrame->firstChar = MaxChars;
	}
	//Prefligth warnings
	if (m_Doc->guidesPrefs().showPreflight)
	{
		if (Cols > 1 || prevInChain() != NULL || nextInChain() != NULL)
		{
			uint nrPar;
			int pos;
			for (int i = 0; i < Cols; i++)
			{
				//get start of column for orphans check
				pos = getColumnSE(i, true);
				if ( pos < 0 ) //probably empty column
					break;
				nrPar = itemText.nrOfParagraph(pos);
				if ( (itemText.endOfLine(pos) == itemText.endOfParagraph(nrPar))
					 && (itemText.startOfLine(pos) != itemText.startOfParagraph(nrPar))
					 && (itemText.startOfLine(pos) != itemText.endOfLine(pos)) )
					warnedList.append(qMakePair(itemText.startOfLine(pos), itemText.endOfLine(pos)));
				//get end of column for widows check
				pos = getColumnSE(i, false)-1;
				nrPar = itemText.nrOfParagraph(pos);
				if ( (itemText.startOfLine(pos) == itemText.startOfParagraph(nrPar))
					 && (itemText.endOfLine(pos) != itemText.endOfParagraph(nrPar))
					 && (itemText.startOfLine(pos) != itemText.endOfLine(pos)) )
					warnedList.append(qMakePair(itemText.startOfLine(pos), itemText.endOfLine(pos)));
			}
		}
		
		//check for RGB text
		int startRGB = -1;
		int endRGB = -1;
		for (int e = firstInFrame(); e <= lastInFrame(); e++)
		{
			if (!itemText.paragraphStyle(e).isDefaultStyle())
			{
				ScColor col = m_Doc->PageColors.value(itemText.charStyle(e).fillColor());
				if (col.getColorModel() == colorModelRGB || col.isRegistrationColor())
				{
					if (startRGB == -1)
						startRGB = e;
				}
				else if (startRGB > -1)
					endRGB = e;
			}
			if (startRGB < endRGB)
			{
				warnedList.append(qMakePair(startRGB, endRGB -1));
				startRGB = -1;
				endRGB = -1;
			}
		}
	}
	PageItem_TextFrame* nextFrame = dynamic_cast<PageItem_TextFrame*>(NextBox);
	if (nextFrame != NULL)
	{
		//check if last visible glyph in frame change
		//if not then do not force invalidation of next frame
		ScText * lastGlyph = NULL;
		ScText * nextFirstGlyph = NULL;
		if (MaxChars > 0)
		{
			uint pos = MaxChars-1;
			lastGlyph = itemText.item(pos);
			while (!lastGlyph->isVisible(m_Doc))
				lastGlyph = itemText.item(--pos);
			if ((int) MaxChars < itemText.length())
				nextFirstGlyph = itemText.item(MaxChars);
		}
		if ((lastGlyph != lastVisibleGlyph) && (nextFrame->firstVisibleGlyph != nextFirstGlyph))
		{
			//force invalidating next frame
			nextFrame->invalid = true;
			nextFrame->firstChar = MaxChars;
			lastVisibleGlyph = lastGlyph;
			nextFrame->firstVisibleGlyph = nextFirstGlyph;
			nextFrame->layout();
		}
		else if (nextFrame->firstChar != MaxChars)
			nextFrame->invalid = true;
		if (itemText.cursorPosition() > signed(MaxChars))
		{
			int nCP = itemText.cursorPosition();
			if (m_Doc->appMode == modeEdit)
				nextFrame->itemText.setCursorPosition( qMax(nCP, signed(MaxChars)) );
		}
	}
//	qDebug("textframe: len=%d, done relayout (no room %d)", itemText.length(), MaxChars);
	itemText.blockSignals(false);
}

void PageItem_TextFrame::invalidateLayout(bool wholeChain)
{
	//const bool wholeChain = true;
	invalid = true;
	if (wholeChain)
	{
		PageItem *prevFrame = this->prevInChain();
		while (prevFrame != 0)
		{
			prevFrame->invalid = true;
			prevFrame = prevFrame->prevInChain();
		}
		PageItem *nextFrame = this->nextInChain();
		while (nextFrame != 0)
		{
			nextFrame->invalid = true;
			nextFrame = nextFrame->nextInChain();
		}
	}
}

void PageItem_TextFrame::slotInvalidateLayout()
{
	invalidateLayout(true);
}

bool PageItem_TextFrame::isValidChainFromBegin()
{
	if (invalid)
		return false;
	if (BackBox == NULL)
		return !invalid;

	PageItem* prev = prevInChain();
	while (prev != NULL)
	{
		if (prev->invalid)
			return false;
		prev = prev->prevInChain();
	}
	return true;
}

void PageItem_TextFrame::DrawObj_Item(ScPainter *p, QRectF cullingArea)
{
	if (invalid)
	{
		if (isNoteFrame() && asNoteFrame()->deleteIt)
		//do not layout notes frames which should be deleted
			return;
		layout();
	}
	QTransform pf2;
	QString cachedStroke = "";
	QString cachedFill = "";
	double cachedFillShade = -1;
	double cachedStrokeShade = -1;
	QString actStroke = "";
	QString actFill = "";
	double actFillShade = -1;
	double actStrokeShade = -1;
	QColor cachedFillQ;
	QColor cachedStrokeQ;
	//	QValueList<ParagraphStyle::TabRecord> tTabValues;
	double desc, asce, wide;
	//	tTabValues.clear();
	p->save(); //SA1
	//	QRect e2;
	if (isEmbedded)
	{
	//	e2 = cullingArea;
	}
	else
	{
	//	e2 = QRect(qRound(cullingArea.x()  / sc + m_Doc->minCanvasCoordinate.x()), qRound(cullingArea.y()  / sc + m_Doc->minCanvasCoordinate.y()),
	//			   qRound(cullingArea.width() / sc), qRound(cullingArea.height() / sc));
		pf2.translate(Xpos, Ypos);
	}
	
	pf2.rotate(Rot);
	if (!m_Doc->layerOutline(LayerID))
	{
		if ((fillColor() != CommonStrings::None) || (GrType != 0))
		{
			p->setupPolygon(&PoLine);
			p->fillPath();
		}
	}
	if (isAnnotation() && !((m_Doc->appMode == modeEdit) && (m_Doc->m_Selection->findItem(this) != -1)) && ((annotation().Type() > 1) && (annotation().Type() < 7)))
	{
		QColor fontColor;
		SetQColor(&fontColor, itemText.defaultStyle().charStyle().fillColor(), itemText.defaultStyle().charStyle().fillShade());
		double fontSize = itemText.defaultStyle().charStyle().fontSize() / 10.0;
		QString fontName = itemText.defaultStyle().charStyle().font().family();
		QString bmUtf16("");
		QString cc;
		if (!((itemText.length() == 1) && (itemText.text(0, 1) == QChar(13))))
		{
			for (uint d = 0; d < static_cast<uint>(itemText.length()); ++d)
			{
				if (d == 0)
				{
					const CharStyle& charStyle(itemText.charStyle(d));
					SetQColor(&fontColor, charStyle.fillColor(), charStyle.fillShade());
					fontSize = charStyle.fontSize() / 10.0;
					fontName = charStyle.font().family();
				}
				cc = itemText.text(d, 1);
				bmUtf16 += (cc == QChar(13) ? QChar(10) : cc);
			}
		}
		p->save();
		if ((annotation().Bwid() > 0) && (annotation().borderColor() != CommonStrings::None))
		{
			QColor tmp;
			SetQColor(&tmp, annotation().borderColor(), 100);
			QPalette pal = QPalette(tmp);
			if (annotation().Bsty() == 3)
				p->drawShadePanel(QRect(0, 0, Width, Height), pal, false, annotation().Bwid());
			else if (annotation().Bsty() == 4)
				p->drawShadePanel(QRect(0, 0, Width, Height), pal, true, annotation().Bwid());
			else
			{
				p->setPen(tmp, annotation().Bwid(), annotation().Bsty() == 0 ? Qt::SolidLine : Qt::DashLine, Qt::FlatCap, Qt::MiterJoin);
				p->setStrokeMode(ScPainter::Solid);
				p->drawRect(0, 0, Width, Height);
			}
		}
		if (annotation().Type() == 2)
		{
			int wdt = annotation().Bwid();
			QPainterPath clp;
			clp.addRect(QRectF(wdt, wdt, Width - (2 * wdt), Height - (2 * wdt)));
			FPointArray clpArr;
			clpArr.fromQPainterPath(clp);
			p->setupPolygon(&clpArr);
			p->setClipPath();
			if (!bmUtf16.isEmpty())
			{
				p->setPen(fontColor);
				p->setFont(QFont(fontName, fontSize));
				p->drawText(QRectF(wdt, wdt, Width - (2 * wdt), Height - (2 * wdt)), bmUtf16, false);
			}
			if ((!Pfile.isEmpty()) && (PictureIsAvailable) && (PicArt) && (annotation().UseIcons()))
			{
				p->save();//SA2
				p->setupPolygon(&PoLine);
				p->setClipPath();
				p->scale(LocalScX, LocalScY);
				p->translate(LocalX*LocalScX, LocalY*LocalScY);
				p->rotate(LocalRot);
				if (pixm.width() > 0 && pixm.height() > 0)
					p->drawImage(pixm.qImagePtr());
				p->restore();//RE2
			}
			p->restore();
			p->restore();
			return;
		}
		else if (annotation().Type() == 3)
		{
			int wdt = annotation().Bwid();
			TExtra = wdt;
			Extra = wdt;
			RExtra = wdt;
			BExtra = wdt;
			invalid = true;
			layout();
		}
		else if (annotation().Type() == 4)
		{
			if (annotation().IsChk())
			{
				p->setBrush(fontColor);
				p->setFillMode(ScPainter::Solid);
				p->setStrokeMode(ScPainter::None);
				QPainterPath chkPath;
				if (annotation().ChkStil() == 0)
				{
					chkPath.moveTo(6.60156, 0);
					chkPath.lineTo(6.7725, 0.244063);
					chkPath.cubicTo(6.7725, 0.244063, 5.7275, 1.03031, 4.44813, 2.66609);
					chkPath.cubicTo(4.44813, 2.66609, 3.16891, 4.30172, 2.49516, 5.72266);
					chkPath.lineTo(2.13375, 5.96672);
					chkPath.cubicTo(2.13375, 5.96672, 1.68453, 6.27922, 1.52344, 6.43062);
					chkPath.cubicTo(1.52344, 6.43062, 1.46, 6.20109, 1.24516, 5.67875);
					chkPath.lineTo(1.10844, 5.36125);
					chkPath.cubicTo(1.10844, 5.36125, 0.815469, 4.67766, 0.563906, 4.35062);
					chkPath.cubicTo(0.563906, 4.35062, 0.3125, 4.02344, 0, 3.91594);
					chkPath.cubicTo(0, 3.91594, 0.527344, 3.35938, 0.966875, 3.35938);
					chkPath.cubicTo(0.966875, 3.35938, 1.34281, 3.35938, 1.80172, 4.37984);
					chkPath.lineTo(1.95312, 4.72172);
					chkPath.cubicTo(1.95312, 4.72172, 2.77828, 3.33, 4.07219, 2.01656);
					chkPath.cubicTo(4.07219, 2.01656, 5.36625, 0.703125, 6.60156, 0);
					chkPath.closeSubpath();
				}
				else if (annotation().ChkStil() == 1)
				{
					chkPath.moveTo(2.42672, 3.30078);
					chkPath.lineTo(2.35359, 3.40328);
					chkPath.cubicTo(2.35359, 3.40328, 1.59187, 4.55563, 1.10359, 4.55563);
					chkPath.cubicTo(1.10359, 4.55563, 0.542031, 4.55563, 0, 3.64266);
					chkPath.cubicTo(0, 3.64266, 0.0732812, 3.6475, 0.1075, 3.6475);
					chkPath.cubicTo(0.1075, 3.6475, 0.747031, 3.6475, 1.53328, 2.67094);
					chkPath.lineTo(1.665, 2.50484);
					chkPath.lineTo(1.49422, 2.31937);
					chkPath.cubicTo(1.49422, 2.31937, 0.776406, 1.55766, 0.776406, 1.02547);
					chkPath.cubicTo(0.776406, 1.02547, 0.776406, 0.590781, 1.5625, 0);
					chkPath.cubicTo(1.5625, 0, 1.67484, 0.756875, 2.23141, 1.47469);
					chkPath.lineTo(2.37797, 1.66016);
					chkPath.lineTo(2.49516, 1.50875);
					chkPath.cubicTo(2.49516, 1.50875, 3.31062, 0.46875, 3.97469, 0.46875);
					chkPath.cubicTo(3.97469, 0.46875, 4.49219, 0.46875, 4.76078, 1.25484);
					chkPath.cubicTo(4.76078, 1.25484, 4.68266, 1.24516, 4.64844, 1.24516);
					chkPath.cubicTo(4.64844, 1.24516, 4.41406, 1.24516, 3.98922, 1.56016);
					chkPath.cubicTo(3.98922, 1.56016, 3.56453, 1.875, 3.27156, 2.27047);
					chkPath.lineTo(3.125, 2.47078);
					chkPath.lineTo(3.26656, 2.6075);
					chkPath.cubicTo(3.26656, 2.6075, 4.05281, 3.36922, 4.90719, 3.36922);
					chkPath.cubicTo(4.90719, 3.36922, 4.44828, 4.29687, 3.95016, 4.29687);
					chkPath.cubicTo(3.95016, 4.29687, 3.50094, 4.29687, 2.65141, 3.50594);
					chkPath.lineTo(2.42672, 3.30078);
					chkPath.closeSubpath();
				}
				else if (annotation().ChkStil() == 2)
				{
					chkPath.moveTo(0, 4.09187);
					chkPath.lineTo(2.89062, 0);
					chkPath.lineTo(5.78125, 4.09187);
					chkPath.lineTo(2.89062, 8.17875);
					chkPath.closeSubpath();
				}
				else if (annotation().ChkStil() == 3)
				{
					chkPath.moveTo(0, 2.89062);
					chkPath.cubicTo(0, 2.89062, 0, 1.69437, 0.847187, 0.847187);
					chkPath.cubicTo(0.847187, 0.847187, 1.69437, 0, 2.89062, 0);
					chkPath.cubicTo(2.89062, 0, 4.08703, 0, 4.93656, 0.847187);
					chkPath.cubicTo(4.93656, 0.847187, 5.78625, 1.69437, 5.78625, 2.89062);
					chkPath.cubicTo(5.78625, 2.89062, 5.78625, 4.08688, 4.93656, 4.93406);
					chkPath.cubicTo(4.93656, 4.93406, 4.08703, 5.78125, 2.89062, 5.78125);
					chkPath.cubicTo(2.89062, 5.78125, 1.69437, 5.78125, 0.847187, 4.93406);
					chkPath.cubicTo(0.847187, 4.93406, 0, 4.08688, 0, 2.89062);
					chkPath.closeSubpath();
				}
				else if (annotation().ChkStil() == 4)
				{
					chkPath.moveTo(0, 2.49516);
					chkPath.lineTo(2.62219, 2.49516);
					chkPath.lineTo(3.43266, 0);
					chkPath.lineTo(4.24328, 2.49516);
					chkPath.lineTo(6.86531, 2.49516);
					chkPath.lineTo(4.74609, 4.03812);
					chkPath.lineTo(5.55672, 6.53313);
					chkPath.lineTo(3.43266, 4.99016);
					chkPath.lineTo(1.30859, 6.53313);
					chkPath.lineTo(2.11922, 4.03812);
					chkPath.closeSubpath();
				}
				else if (annotation().ChkStil() == 5)
				{
					chkPath.moveTo(0, 5.78125);
					chkPath.lineTo(0, 0);
					chkPath.lineTo(5.78125, 0);
					chkPath.lineTo(5.78125, 5.78125);
					chkPath.closeSubpath();
				}
				if (!chkPath.isEmpty())
				{
					QTransform mm;
					mm.scale(fontSize / 10.0, fontSize / 10.0);
					chkPath = mm.map(chkPath);
					QRectF bb = chkPath.boundingRect();
					QRectF bi = QRectF(0.0, 0.0, Width, Height);
					double dx = bi.center().x() - (bb.width() / 2.0);
					double dy = bi.center().y() - (bb.height() / 2.0);
					p->translate(dx, dy);
					FPointArray chArr;
					chArr.fromQPainterPath(chkPath);
					p->setupPolygon(&chArr);
					p->fillPath();
				}
				p->restore();
				p->restore();
				return;
			}
		}
		else if (annotation().Type() == 5)
		{
			int wdt = annotation().Bwid();
			if (Width > 2 * wdt + 15)
			{
				if (!bmUtf16.isEmpty())
				{
					p->save();
					QPainterPath clp;
					clp.addRect(QRectF(wdt + 1, wdt + 1, Width - (2 * wdt) - 17, Height - (2 * wdt) - 2));
					FPointArray clpArr;
					clpArr.fromQPainterPath(clp);
					p->setupPolygon(&clpArr);
					p->setClipPath();
					p->setPen(fontColor);
					p->setFont(QFont(fontName, fontSize));
					QStringList textList = bmUtf16.split("\n");
					p->drawText(QRectF(wdt + 1, wdt + 1, Width - (2 * wdt) - 17, Height - (2 * wdt) - 2), textList[0], false, 1);
					p->restore();
				}
				p->setFillMode(ScPainter::Solid);
				p->setStrokeMode(ScPainter::None);
				p->setBrush(QColor(200, 200, 200));
				QRectF bi;
				if ((annotation().Bsty() == 3) || (annotation().Bsty() == 4))
					bi = QRectF(Width - wdt - 15, wdt, 15, Height - (2 * wdt));
				else
					bi = QRectF(Width - (wdt / 2.0) - 15, wdt / 2.0, 15, Height - wdt);
				p->drawRect(bi.x(), bi.y(), bi.width(), bi.height());
				QPainterPath chkPath;
				chkPath.moveTo(bi.center().x() - 3, bi.center().y());
				chkPath.lineTo(bi.center().x() + 3, bi.center().y());
				chkPath.lineTo(bi.center().x(), bi.center().y() + 4);
				chkPath.closeSubpath();
				FPointArray chArr;
				chArr.fromQPainterPath(chkPath);
				p->setupPolygon(&chArr);
				p->setBrush(QColor(0, 0, 0));
				p->fillPath();
				p->restore();
				p->restore();
				return;
			}
		}
		else if (annotation().Type() == 6)
		{
			int wdt = annotation().Bwid();
			if (Width > 2 * wdt + 15)
			{
				if (!bmUtf16.isEmpty())
				{
					p->save();
					QPainterPath clp;
					clp.addRect(QRectF(wdt + 1, wdt + 1, Width - (2 * wdt) - 17, Height - (2 * wdt) - 2));
					FPointArray clpArr;
					clpArr.fromQPainterPath(clp);
					p->setupPolygon(&clpArr);
					p->setClipPath();
					p->setPen(fontColor);
					p->setFont(QFont(fontName, fontSize));
					p->drawText(QRectF(wdt + 1, wdt + 1, Width - (2 * wdt) - 17, Height - (2 * wdt) - 2), bmUtf16, false, 2);
					p->restore();
				}
				p->restore();
				p->restore();
				return;
			}
		}
		p->restore();
	}
	/* Experimental Addition to display an Image as Background */
	/*
	else if ((!Pfile.isEmpty()) && (PictureIsAvailable) && (PicArt))
	{
		p->save();
		if (imageClip.size() != 0)
		{
			p->setupPolygon(&imageClip);
			p->setClipPath();
		}
		p->setupPolygon(&PoLine);
		p->setClipPath();
		if (imageFlippedH())
		{
			p->translate(Width, 0);
			p->scale(-1, 1);
		}
		if (imageFlippedV())
		{
			p->translate(0, Height);
			p->scale(1, -1);
		}
		p->translate(LocalX*LocalScX, LocalY*LocalScY);
		p->scale(LocalScX, LocalScY);
		if (pixm.imgInfo.lowResType != 0)
			p->scale(pixm.imgInfo.lowResScale, pixm.imgInfo.lowResScale);
		p->drawImage(pixm.qImagePtr());
		p->restore();
	}
*/
	
	if (itemText.length() != 0)
	{
		//		qDebug("drawing textframe: len=%d", itemText.length());
		if (imageFlippedH())
		{
			p->translate(Width, 0);
			p->scale(-1, 1);
			pf2.translate(Width, 0);
			pf2.scale(-1, 1);
		}
		if (imageFlippedV())
		{
			p->translate(0, Height);
			p->scale(1, -1);
			pf2.translate(0, Height);
			pf2.scale(1, -1);
		}
		assert( firstInFrame() >= 0 );
		assert( lastInFrame() < itemText.length() );
		LineSpec ls;
		double CurX;
		bool previousWasObject;
		QRectF selectedFrame;
		QList<QRectF> sFList;
		QRectF warnFrame;
		QList<QRectF> wFList;
		double selX;
		ScText *hls;
		int last;
		bool selecteds;
		bool HasObject;
		for (uint ll=0; ll < itemText.lines(); ++ll)
		{
			ls = itemText.line(ll);
			CurX = ls.x;

			// Draw text selection rectangles
			previousWasObject = false;
			selX = ls.x;
			hls = 0;
			last = qMin(ls.lastItem, itemText.length() - 1);
			for (int as = ls.firstItem; as <= last; ++as)
			{
				selecteds = itemText.selected(as);
				hls = itemText.item(as);
				HasObject = hls->hasObject(m_Doc);
				if (hls->mark != NULL && (hls->mark->isType(MARKAnchorType) || hls->mark->isType(MARKIndexType)))
					continue;
				const CharStyle& charStyleS(itemText.charStyle(as));
				if(selecteds)
				{
					if(((as > ls.firstItem) && (charStyleS != itemText.charStyle(as-1)))
						|| ((!selectedFrame.isNull()) && HasObject)
					    || previousWasObject)
					{
						sFList << selectedFrame;
						selectedFrame = QRectF();
						previousWasObject = false;
					}
					if (!m_Doc->RePos)
					{
						if (((selecteds && Select) || ((NextBox != 0 || BackBox != 0) && selecteds))
							&& (m_Doc->appMode == modeEdit || m_Doc->appMode == modeEditTable))
						{
							double xcoZli = selX + hls->glyph.xoffset;
							// ugly hack to make selection correct, as xoffset is used to
							// remove left-half of CJK lparen , which is blank.
							if(hls->glyph.xoffset)
							{
								int attr = SpecialChars::getCJKAttr(hls->ch) & SpecialChars::CJK_CHAR_MASK;
								if( attr == SpecialChars::CJK_FENCE_BEGIN)
								{
									xcoZli -= hls->glyph.xoffset;
								}
							}
							if (hls->prefix)
								xcoZli += hls->prefix->glyph.xoffset;
							const ScFace* font = &charStyleS.font();
							double fontSize = charStyleS.fontSize() / 10.0;
							desc = - font->descent(fontSize);
							asce = font->ascent(fontSize);
							wide = hls->glyph.wide();
							if (hls->prefix)
								wide += hls->prefix->glyph.wide();
							QRectF scr;
							if (HasObject)
							{
								double ww = (hls->getItem(m_Doc)->width() + hls->getItem(m_Doc)->lineWidth()) * hls->glyph.scaleH;
								double hh = (hls->getItem(m_Doc)->height() + hls->getItem(m_Doc)->lineWidth()) * hls->glyph.scaleV;
								scr = QRectF(xcoZli, ls.y - hh, ww , hh);
								previousWasObject = true;
							}
							else
							{
								const ScFace font = charStyleS.font();
								double fontSize = charStyleS.fontSize() / 10.0;
								desc = - font.descent(fontSize);
								asce = font.ascent(fontSize);
								scr = QRectF(xcoZli, ls.y + hls->glyph.yoffset - asce * hls->glyph.scaleV, hls->glyph.wide(), (asce+desc) * (hls->glyph.scaleV));
							}
							selectedFrame |=  scr;
						}
					}
				}
				if (m_Doc->guidesPrefs().showPreflight && isWarnedText(as))
				{
					if(((as > ls.firstItem) && (charStyleS != itemText.charStyle(as-1)))
						|| ((!warnFrame.isNull()) && (HasObject))
					    || previousWasObject)
					{
						wFList << warnFrame;
						warnFrame = QRectF();
						previousWasObject = false;
					}
					if (!m_Doc->RePos)
					{
						double xcoZli = selX + hls->glyph.xoffset;
						// ugly hack to make selection correct, as xoffset is used to
						// remove left-half of CJK lparen , which is blank.
						if(hls->glyph.xoffset)
						{
							int attr = SpecialChars::getCJKAttr(hls->ch) & SpecialChars::CJK_CHAR_MASK;
							if( attr == SpecialChars::CJK_FENCE_BEGIN)
							{
								xcoZli -= hls->glyph.xoffset;
							}
						}
						QRectF scr;
						if ((hls->ch == SpecialChars::OBJECT)  && (hls->hasObject(m_Doc)))
						{
							double ww = (hls->getItem(m_Doc)->width() + hls->getItem(m_Doc)->lineWidth()) * hls->glyph.scaleH;
							double hh = (hls->getItem(m_Doc)->height() + hls->getItem(m_Doc)->lineWidth()) * hls->glyph.scaleV;
							scr = QRectF(xcoZli, ls.y - hh, ww , hh);
							previousWasObject = true;
						}
						else
						{
							const ScFace font = charStyleS.font();
							double fontSize = charStyleS.fontSize() / 10.0;
							desc = - font.descent(fontSize);
							asce = font.ascent(fontSize);
							scr = QRectF(xcoZli, ls.y + hls->glyph.yoffset - asce * hls->glyph.scaleV, hls->glyph.wide(), (asce+desc) * (hls->glyph.scaleV));
						}
						warnFrame |=  scr;
					}
				}
				// Unneeded now that glyph xadvance is set appropriately for inline objects by layout() - JG
				/*if ((hls->ch == SpecialChars::OBJECT) && (hls->embedded.hasItem()))
					selX += (hls->embedded.getItem()->gWidth + hls->embedded.getItem()->lineWidth()) * hls->glyph.scaleH;
				else*/
				selX += hls->glyph.wide();
			}
			if(!selectedFrame.isNull())
				sFList << selectedFrame;
			if (!sFList.isEmpty())
			{
				double brushOpacity = p->getBrushOpacity();
				double penOpacity = p->getPenOpacity();
				p->save();//SA3
				p->setFillMode(1);
				p->setBrush(qApp->palette().color(QPalette::Active, QPalette::Highlight));
				p->setOpacity(1.0);
				p->setLineWidth(0);
				p->setPen(qApp->palette().color(QPalette::Active, QPalette::Highlight));
				for(int sfc(0);sfc < sFList.count();++sfc)
					p->drawRect(sFList[sfc].x(), sFList[sfc].y(), sFList[sfc].width(), sFList[sfc].height());
				p->restore();//RE3
				p->setBrushOpacity(brushOpacity);
				p->setPenOpacity(penOpacity);
			}
			//	End of selection

			//Spreflight warnings
			if(!warnFrame.isNull())
				wFList << warnFrame;
			if (!wFList.isEmpty())
			{
				double brushOpacity = p->getBrushOpacity();
				double penOpacity = p->getPenOpacity();
				p->save();//SA3
				p->setFillMode(1);
				p->setBrush(m_Doc->guidesPrefs().preflightColor);
				p->setOpacity(m_Doc->guidesPrefs().preflightColor.alphaF());
				p->setPen(m_Doc->guidesPrefs().preflightColor);
				p->setLineWidth(0);
				for(int sfc(0);sfc < wFList.count();++sfc)
					p->drawRect(wFList[sfc].x(), wFList[sfc].y(), wFList[sfc].width(), wFList[sfc].height());
				p->restore();//RE3
				p->setBrushOpacity(brushOpacity);
				p->setPenOpacity(penOpacity);
			}
			//	End of preflight warnings

			QColor tmp;
			ScText *hl = 0;
			for (int a = ls.firstItem; a <= last; ++a)
			{
				hl = itemText.item(a);
				const CharStyle& charStyle(itemText.charStyle(a));
				selecteds = itemText.selected(a);

				actFill = charStyle.fillColor();
				actFillShade = charStyle.fillShade();
				if (actFill != CommonStrings::None)
				{
					p->setFillMode(ScPainter::Solid);
					if ((cachedFillShade != actFillShade) || (cachedFill != actFill))
					{
						SetQColor(&tmp, actFill, actFillShade);
						p->setBrush(tmp);
						cachedFillQ = tmp;
						cachedFill = actFill;
						cachedFillShade = actFillShade;
					}
					else
						p->setBrush(cachedFillQ);
				}
				else
					p->setFillMode(ScPainter::None);

				if (!m_Doc->RePos)
				{
					const ScFace* font = &charStyle.font();
					double fontSize = charStyle.fontSize() / 10.0;
					desc = - font->descent(fontSize);
					asce = font->ascent(fontSize);
					if (((selecteds && Select) || ((NextBox != 0 || BackBox != 0) && selecteds)) && (m_Doc->appMode == modeEdit || m_Doc->appMode == modeEditTable))
					{
						// set text color to highlight if its selected
						p->setBrush(qApp->palette().color(QPalette::Active, QPalette::HighlightedText));
					}

					actStroke = charStyle.strokeColor();
					actStrokeShade = charStyle.strokeShade();
					if (actStroke != CommonStrings::None)
					{
						if ((cachedStrokeShade != actStrokeShade) || (cachedStroke != actStroke))
						{
							SetQColor(&tmp, actStroke, actStrokeShade);
							p->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
							cachedStrokeQ = tmp;
							cachedStroke = actStroke;
							cachedStrokeShade = actStrokeShade;
						}
						else
							p->setPen(cachedStrokeQ, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
					}
					// paint glyphs
					if (isEmbedded || cullingArea.intersects(pf2.mapRect(QRect(qRound(CurX + hl->glyph.xoffset),qRound(ls.y + hl->glyph.yoffset-asce), qRound(hl->glyph.xadvance+1), qRound(asce+desc)))))
					{
						p->save();//SA4
						p->translate(CurX, ls.y);
						if (hl->hasObject(m_Doc))
							DrawObj_Embedded(p, cullingArea, charStyle, hl->getItem(m_Doc));
						else
						{
							//control chars for marks
							if (m_Doc->guidesPrefs().showControls && hl->hasMark() && (hl->glyph.glyph != SpecialChars::OBJECT))
							{
								GlyphLayout markGlyph;
								layoutGlyphs(charStyle,SpecialChars::OBJECT, markGlyph);
								drawGlyphs(p, charStyle, markGlyph);
							}
							drawGlyphs(p, charStyle, hl->glyph);
						}
						p->restore();//RE4
					}
				}
				if (hl->prefix)
				{
					Q_ASSERT(!isNoteFrame());
					const CharStyle& prefCharStyle(dynamic_cast<const CharStyle&>(*hl->prefix));
					actFill = prefCharStyle.fillColor();
					actFillShade = prefCharStyle.fillShade();
					if (actFill != CommonStrings::None)
					{
						p->setFillMode(ScPainter::Solid);
						if ((cachedFillShade != actFillShade) || (cachedFill != actFill))
						{
							SetQColor(&tmp, actFill, actFillShade);
							p->setBrush(tmp);
							cachedFillQ = tmp;
							cachedFill = actFill;
							cachedFillShade = actFillShade;
						}
						else
							p->setBrush(cachedFillQ);
					}
					else
						p->setFillMode(ScPainter::None);
	
					if (!m_Doc->RePos)
					{
						const ScFace* font = &prefCharStyle.font();
						double fontSize = prefCharStyle.fontSize() / 10.0;
						desc = - font->descent(fontSize);
						asce = font->ascent(fontSize);
						if (((selecteds && Select) || ((NextBox != 0 || BackBox != 0) && selecteds)) && (m_Doc->appMode == modeEdit || m_Doc->appMode == modeEditTable))
						{
							// set text color to highlight if its selected
							p->setBrush(qApp->palette().color(QPalette::Active, QPalette::HighlightedText));
						}
	
						actStroke = prefCharStyle.strokeColor();
						actStrokeShade = prefCharStyle.strokeShade();
						if (actStroke != CommonStrings::None)
						{
							if ((cachedStrokeShade != actStrokeShade) || (cachedStroke != actStroke))
							{
								SetQColor(&tmp, actStroke, actStrokeShade);
								p->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
								cachedStrokeQ = tmp;
								cachedStroke = actStroke;
								cachedStrokeShade = actStrokeShade;
							}
							else
								p->setPen(cachedStrokeQ, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
						}
						// paint glyphs
						if (cullingArea.intersects(pf2.mapRect(QRect(qRound(CurX + hl->prefix->glyph.xoffset),qRound(ls.y + hl->prefix->glyph.yoffset-asce), qRound(hl->prefix->glyph.xadvance+1), qRound(asce+desc)))))
						{
							p->save();//SA4
							p->translate(CurX, ls.y);
							drawGlyphs(p, prefCharStyle, hl->prefix->glyph);
							p->restore();//RE4
						}
					}
				}
				CurX += hl->glyph.wide();
			}
		}
	//	else {
	//		//		qDebug("skipping textframe: len=%d", itemText.count());
	//	}
		//	pf2.end();
	}
	p->restore();//RE1
}

void PageItem_TextFrame::DrawObj_Post(ScPainter *p)
{
	if (m_Doc->layerOutline(LayerID))
	{
		p->setPen(m_Doc->layerMarker(LayerID), 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
		p->setFillMode(ScPainter::None);
		p->setBrushOpacity(1.0);
		p->setPenOpacity(1.0);
		p->setupPolygon(&PoLine);
		p->strokePath();
	}
	else
	{
#if (CAIRO_VERSION < CAIRO_VERSION_ENCODE(1, 9, 4))
		if (fillBlendmode() != 0)
			p->endLayer();
#else
		if (fillBlendmode() != 0)
			p->setBlendModeFill(0);
#endif
		p->setMaskMode(0);
		if (!m_Doc->RePos)
		{
			if (!isAnnotation() || (isAnnotation() && ((annotation().Type() == 0) || (annotation().Type() > 6))))
			{
#if (CAIRO_VERSION >= CAIRO_VERSION_ENCODE(1, 9, 4))
				p->setBlendModeStroke(lineBlendmode());
				p->setPenOpacity(1.0 - lineTransparency());
#else
				if (lineBlendmode() != 0)
					p->beginLayer(1.0 - lineTransparency(), lineBlendmode());
#endif
				p->setupPolygon(&PoLine);
				if (NamedLStyle.isEmpty())
				{
					if ((lineColor() != CommonStrings::None) || (!patternStrokeVal.isEmpty()) || (GrTypeStroke > 0))
					{
						p->setPen(strokeQColor, m_lineWidth, PLineArt, PLineEnd, PLineJoin);
						if (DashValues.count() != 0)
							p->setDash(DashValues, DashOffset);
					}
					if ((!patternStrokeVal.isEmpty()) && (m_Doc->docPatterns.contains(patternStrokeVal)))
					{
						if (patternStrokePath)
						{
							QPainterPath guidePath = PoLine.toQPainterPath(false);
							DrawStrokePattern(p, guidePath);
						}
						else
						{
							p->setPattern(&m_Doc->docPatterns[patternStrokeVal], patternStrokeScaleX, patternStrokeScaleY, patternStrokeOffsetX, patternStrokeOffsetY, patternStrokeRotation, patternStrokeSkewX, patternStrokeSkewY, patternStrokeMirrorX, patternStrokeMirrorY);
							p->setStrokeMode(ScPainter::Pattern);
							p->strokePath();
						}
					}
					else if (GrTypeStroke > 0)
					{
						if ((!gradientStrokeVal.isEmpty()) && (!m_Doc->docGradients.contains(gradientStrokeVal)))
							gradientStrokeVal = "";
						if (!(gradientStrokeVal.isEmpty()) && (m_Doc->docGradients.contains(gradientStrokeVal)))
							stroke_gradient = m_Doc->docGradients[gradientStrokeVal];
						if (stroke_gradient.Stops() < 2) // fall back to solid stroking if there are not enough colorstops in the gradient.
						{
							if (lineColor() != CommonStrings::None)
							{
								p->setBrush(strokeQColor);
								p->setStrokeMode(ScPainter::Solid);
							}
							else
							{
								no_stroke = true;
								p->setStrokeMode(ScPainter::None);
							}
						}
						else
						{
							p->setStrokeMode(ScPainter::Gradient);
							p->stroke_gradient = stroke_gradient;
							if (GrTypeStroke == 6)
								p->setGradient(VGradient::linear, FPoint(GrStrokeStartX, GrStrokeStartY), FPoint(GrStrokeEndX, GrStrokeEndY), FPoint(GrStrokeStartX, GrStrokeStartY), GrStrokeScale, GrStrokeSkew);
							else
								p->setGradient(VGradient::radial, FPoint(GrStrokeStartX, GrStrokeStartY), FPoint(GrStrokeEndX, GrStrokeEndY), FPoint(GrStrokeFocalX, GrStrokeFocalY), GrStrokeScale, GrStrokeSkew);
						}
						p->strokePath();
					}
					else if (lineColor() != CommonStrings::None)
					{
						p->setStrokeMode(ScPainter::Solid);
						p->setPen(strokeQColor, m_lineWidth, PLineArt, PLineEnd, PLineJoin);
						if (DashValues.count() != 0)
							p->setDash(DashValues, DashOffset);
						p->strokePath();
					}
					else
						no_stroke = true;
				}
				else
				{
					p->setStrokeMode(ScPainter::Solid);
					multiLine ml = m_Doc->MLineStyles[NamedLStyle];
					QColor tmp;
					for (int it = ml.size()-1; it > -1; it--)
					{
						SetQColor(&tmp, ml[it].Color, ml[it].Shade);
						p->setPen(tmp, ml[it].Width,
								  static_cast<Qt::PenStyle>(ml[it].Dash),
								  static_cast<Qt::PenCapStyle>(ml[it].LineEnd),
								  static_cast<Qt::PenJoinStyle>(ml[it].LineJoin));
						p->strokePath();
					}
				}
#if (CAIRO_VERSION < CAIRO_VERSION_ENCODE(1, 9, 4))
				if (lineBlendmode() != 0)
					p->endLayer();
#else
				if (lineBlendmode() != 0)
					p->setBlendModeStroke(0);
#endif
			}
		}
	}
	p->setFillMode(ScPainter::Solid);
	p->setStrokeMode(ScPainter::Solid);
	p->restore();
}

void PageItem_TextFrame::DrawObj_Decoration(ScPainter *p)
{
	if (isAnnotation() && ((annotation().Type() > 1) && (annotation().Type() < 7)) && (annotation().Bwid() > 0))
		return;
	p->save();
	if (!isEmbedded)
		p->translate(Xpos, Ypos);
	p->rotate(Rot);
	if ((!isEmbedded) && (!m_Doc->RePos))
	{
		double scpInv = 0.0;
		if ((Frame) && (m_Doc->guidesPrefs().framesShown) && (no_stroke))
		{
			p->setPen(PrefsManager::instance()->appPrefs.displayPrefs.frameNormColor, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			if ((isBookmark) || (m_isAnnotation))
				p->setPen(PrefsManager::instance()->appPrefs.displayPrefs.frameAnnotationColor, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			if ((BackBox != 0) || (NextBox != 0))
				p->setPen(PrefsManager::instance()->appPrefs.displayPrefs.frameLinkColor, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			if (m_Locked)
				p->setPen(PrefsManager::instance()->appPrefs.displayPrefs.frameLockColor, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);

			p->setFillMode(0);
// Ugly Hack to fix rendering problems with cairo >=1.5.10 && <1.8.0 follows
	#if ((CAIRO_VERSION >= CAIRO_VERSION_ENCODE(1, 5, 10)) && (CAIRO_VERSION < CAIRO_VERSION_ENCODE(1, 8, 0)))
			p->setupSharpPolygon(&PoLine, false);
	#else
			p->setupSharpPolygon(&PoLine);
	#endif
			p->strokePath();
		}
		if ((m_Doc->guidesPrefs().framesShown) && textFlowUsesContourLine() && (ContourLine.size() != 0))
		{
			p->setPen(Qt::lightGray, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
// Ugly Hack to fix rendering problems with cairo >=1.5.10 && <1.8.0 follows
	#if ((CAIRO_VERSION >= CAIRO_VERSION_ENCODE(1, 5, 10)) && (CAIRO_VERSION < CAIRO_VERSION_ENCODE(1, 8, 0)))
			p->setupSharpPolygon(&ContourLine, false);
	#else
			p->setupSharpPolygon(&ContourLine);
	#endif
			p->strokePath();
		}

		//Draw the overflow icon
		if (frameOverflows())
		{
			if (!m_Doc->drawAsPreview)
				drawOverflowMarker(p);
		}
		if ((m_Doc->guidesPrefs().colBordersShown) && (!m_Doc->drawAsPreview))
			drawColumnBorders(p);
		if ((m_Doc->guidesPrefs().layerMarkersShown) && (m_Doc->layerCount() > 1) && (!m_Doc->layerOutline(LayerID)) && (!m_Doc->drawAsPreview))
		{
			p->setPen(Qt::black, 0, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			p->setPenOpacity(1.0);
			p->setBrush(m_Doc->layerMarker(LayerID));
			p->setBrushOpacity(1.0);
			p->setFillMode(ScPainter::Solid);
			double ofwh = 10.0;
			double ofx = Width - ofwh/2;
			double ofy = Height - ofwh*3;
			p->drawSharpRect(ofx, ofy, ofwh, ofwh);
		}
		if (no_fill && no_stroke && m_Doc->guidesPrefs().framesShown)
		{
			p->setPen(PrefsManager::instance()->appPrefs.displayPrefs.frameNormColor, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			if (m_Locked)
				p->setPen(PrefsManager::instance()->appPrefs.displayPrefs.frameLockColor, scpInv, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			p->setFillMode(ScPainter::None);
			p->drawSharpRect(0, 0, Width, Height);
			no_fill = false;
			no_stroke = false;
		}
		//if (m_Doc->selection->findItem(this)!=-1)
		//	drawLockedMarker(p);
	}
//	Tinput = false;
	FrameOnly = false;
	p->restore();
}


void PageItem_TextFrame::clearContents()
{
	PageItem *nextItem = this;
	while (nextItem->prevInChain() != 0)
		nextItem = nextItem->prevInChain();

	ParagraphStyle defaultStyle = nextItem->itemText.defaultStyle();
	nextItem->itemText.selectAll();
	nextItem->asTextFrame()->deleteSelectedTextFromFrame();
	if (!isNoteFrame())
	{
	if(UndoManager::undoEnabled())
		undoManager->getLastUndo()->setName(Um::ClearText);
	nextItem->itemText.setDefaultStyle(defaultStyle);
	}

	while (nextItem != 0)
	{
		nextItem->invalid = true;
		nextItem = nextItem->nextInChain();
	}
}

void PageItem_TextFrame::handleModeEditKey(QKeyEvent *k, bool& keyRepeat)
{
	if (frameUnderflows())
	{
		itemText.setCursorPosition( itemText.length() );
		PageItem * jumpFrame = frameTextEnd();
		if (jumpFrame)
		{
			m_Doc->view()->Deselect(true);
			m_Doc->scMW()->selectItemsFromOutlines(jumpFrame);
			m_Doc->scMW()->setTBvals(jumpFrame);
			jumpFrame->update();
			update();
			switch (k->key())
			{
			case Qt::Key_PageDown:
			case Qt::Key_PageUp:
			case Qt::Key_End:
			case Qt::Key_Home:
			case Qt::Key_Right:
			case Qt::Key_Left:
			case Qt::Key_Up:
			case Qt::Key_Down:
			case Qt::Key_Delete:
			case Qt::Key_Backspace:
				break;
			default:
				jumpFrame->handleModeEditKey(k, keyRepeat);
				jumpFrame->layout();
				break;
				}
			return;
		}
	}
	int oldPos = itemText.cursorPosition(); // 15-mar-2004 jjsa for cursor movement with Shift + Arrow key
	int kk = k->key();
	int as = k->text()[0].unicode();
	QString uc = k->text();
	QString cr, Tcha, Twort;
	uint Tcoun;
	int len, pos;
	int keyModifiers=0;
	Qt::KeyboardModifiers buttonModifiers = k->modifiers();
	if (k->modifiers() & Qt::ShiftModifier)
		keyModifiers |= Qt::SHIFT;
	if (k->modifiers() & Qt::ControlModifier)
		keyModifiers |= Qt::CTRL;
	if (k->modifiers() & Qt::AltModifier)
		keyModifiers |= Qt::ALT;

	//<< ISO 14755
	//Check if we are trying to enter Unicode sequence mode first
	QKeySequence currKeySeq = QKeySequence(k->key() | keyModifiers);
	if(currKeySeq.matches(doc()->scMW()->scrActions["specialUnicodeSequenceBegin"]->shortcut())==QKeySequence::ExactMatch)
	{
		unicodeTextEditMode = true;
		unicodeInputCount = 0;
		unicodeInputString = "";
		keyRepeat = false;
		return;
	}
	//>>
	
	ScribusView* view = m_Doc->view();	
	switch (kk)
	{
	case Qt::Key_PageDown:
	case Qt::Key_PageUp:
	case Qt::Key_End:
	case Qt::Key_Home:
	case Qt::Key_Right:
	case Qt::Key_Left:
	case Qt::Key_Up:
	case Qt::Key_Down:
		if ( (buttonModifiers & Qt::ShiftModifier) == 0 )
			deselectAll();
		if (UndoManager::undoEnabled())
		{
			SimpleState *ss = dynamic_cast<SimpleState*>(undoManager->getLastUndo());
			if(ss)
				ss->set("ETEA",QString(""));
			else
			{
				TransactionState *ts = dynamic_cast<TransactionState*>(undoManager->getLastUndo());
				if(ts)
					ss = dynamic_cast<SimpleState*>(ts->at(0));
				if(ss)
					ss->set("ETEA",QString(""));
			}
		}
	}

	if (unicodeTextEditMode)
	{
		int conv = 0;
		bool ok = false;
		unicodeInputString += uc;
		conv = unicodeInputString.toInt(&ok, 16);
		if (!ok)
		{
			unicodeTextEditMode = false;
			unicodeInputCount = 0;
			unicodeInputString = "";
			keyRepeat = false;
			return;
		}
		unicodeInputCount++;
		if (unicodeInputCount == 4)
		{
			unicodeTextEditMode = false;
			unicodeInputCount = 0;
			unicodeInputString = "";
			if (ok)
			{
				UndoTransaction *trans = NULL;
				if(UndoManager::undoEnabled())
					trans = new UndoTransaction(undoManager->beginTransaction(Um::Selection,Um::ITextFrame,Um::InsertText,"",Um::IDelete));
				if (itemText.lengthOfSelection() > 0)
					deleteSelectedTextFromFrame();
				if (conv < 31)
					conv = 32;
				if (UndoManager::undoEnabled())
				{
					SimpleState *ss = dynamic_cast<SimpleState*>(undoManager->getLastUndo());
					if(ss && ss->get("ETEA") == "insert_frametext")
						ss->set("TEXT_STR",ss->get("TEXT_STR") + QString(QChar(conv)));
					else {
						ss = new SimpleState(Um::InsertText,"",Um::ICreate);
						ss->set("INSERT_FRAMETEXT", "insert_frametext");
						ss->set("ETEA", QString("insert_frametext"));
						ss->set("TEXT_STR", QString(QChar(conv)));
						ss->set("START", itemText.cursorPosition());
						undoManager->action(this, ss);
					}
				}
				itemText.insertChars(QString(QChar(conv)), true);
				if(trans)
				{
					trans->commit();
					delete trans;
					trans = NULL;
				}
//				Tinput = true;
				m_Doc->scMW()->setTBvals(this);
				if (isAutoNoteFrame() && m_Doc->notesChanged())
				{
					Q_ASSERT(asNoteFrame()->masterFrame());
					asNoteFrame()->masterFrame()->invalid = true;
				}
				else
				update();
				keyRepeat = false;
				return;
			}
		}
		else
		{
			keyRepeat = false;
			return;
		}
	}

	// #7430 hack : inverted selection with RTL writing enabled
	if (reversed())
	{  //inverting left and rigt keys
		if (kk == Qt::Key_Left) 
			kk = Qt::Key_Right;
		else if (kk == Qt::Key_Right) 
			kk = Qt::Key_Left;
	}

	int oldLast = lastInFrame();
	switch (kk)
	{
	case Qt::Key_Home:
		// go to begin of line
		if ( (pos = itemText.cursorPosition()) == firstInFrame() )
			break; // at begin of frame
		len = lastInFrame();
		if ( pos >= len )
			pos = len-1;
		if ( (buttonModifiers & Qt::ControlModifier) == 0 )
		{
			pos = itemText.startOfLine(pos);
		}
		else
		{
			//Control Home for start of frame text
			pos = itemText.startOfFrame(pos);
		}
		itemText.setCursorPosition(pos);
		if ( buttonModifiers & Qt::ShiftModifier )
			ExpandSel(-1, oldPos);
//		if ( this->itemText.lengthOfSelection() > 0 )
//			view->RefreshItem(this);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_End:
		// go to end of line
		len = lastInFrame();
		if ( itemText.cursorPosition() >= (len + 1))
			break; // at end of frame
		if ( (buttonModifiers & Qt::ControlModifier) == 0 )
		{
			itemText.setCursorPosition( itemText.endOfLine(itemText.cursorPosition()) );
		}
		else
		{
			//Control End for end of frame text
			itemText.setCursorPosition( itemText.endOfFrame(itemText.cursorPosition()) );
		}
		if ( buttonModifiers & Qt::ShiftModifier )
			ExpandSel(1, oldPos);
//		if ( this->itemText.lengthOfSelection() > 0 )
//			view->RefreshItem(this);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_Down:
		if (buttonModifiers & Qt::ControlModifier)
		{
			// go to end of paragraph
			len = itemText.length();
			itemText.setCursorPosition(itemText.nextParagraph(itemText.cursorPosition()));
			if ( buttonModifiers & Qt::ShiftModifier )
				ExpandSel(1, oldPos);
		}
		else
		{
			if (itemText.cursorPosition() <= lastInFrame())
			{
				itemText.setCursorPosition( itemText.nextLine(itemText.cursorPosition()) );
				if ( buttonModifiers & Qt::ShiftModifier )
				{
					if ( buttonModifiers & Qt::AltModifier )
						itemText.setCursorPosition (lastInFrame()+1);
					ExpandSel(1, oldPos);
				}
				else 
					if ((itemText.lines() > 0) && (oldPos >= itemText.line(itemText.lines()-1).firstItem) && (itemText.cursorPosition() >= lastInFrame()) && (NextBox != 0))
					{
						if (NextBox->frameDisplays(itemText.cursorPosition()))
						{
							view->Deselect(true);
							// we position the cursor at the beginning of the next frame
							// TODO position at the right place in next frame
							m_Doc->scMW()->selectItemsFromOutlines(NextBox);
						}
					}
			}
			else
			{
				if (NextBox != 0)
				{
					if (NextBox->frameDisplays(lastInFrame()+1))
					{
						view->Deselect(true);
						m_Doc->scMW()->selectItemsFromOutlines(NextBox);
					}
				}
			}
		}
//		if ( this->itemText.lengthOfSelection() > 0 )
//			view->RefreshItem(this);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_Up:
		if (buttonModifiers & Qt::ControlModifier)
		{
			if ( (pos = itemText.cursorPosition()) == firstInFrame() )
				break; // at begin of frame
			len = itemText.length();
			itemText.setCursorPosition( itemText.prevParagraph(itemText.cursorPosition()) );
			if ( buttonModifiers & Qt::ShiftModifier )
				ExpandSel(-1, oldPos);
		}
		else
		{
			if (itemText.cursorPosition() > firstInFrame())
			{
				if (itemText.cursorPosition() > lastInFrame() || itemText.cursorPosition() > itemText.length())
					itemText.setCursorPosition(lastInFrame());
				itemText.setCursorPosition( itemText.prevLine(itemText.cursorPosition()) );
				if ( buttonModifiers & Qt::ShiftModifier )
				{
					if ( buttonModifiers & Qt::AltModifier )
						itemText.setCursorPosition( firstInFrame() );
					ExpandSel(-1, oldPos);
				}
				else
					if ((itemText.lines() > 0) && (oldPos <= itemText.line(0).lastItem) && (itemText.cursorPosition()  == firstInFrame()) && (BackBox != 0))
					{
						view->Deselect(true);
						// TODO position at the right place in previous frame
						BackBox->itemText.setCursorPosition( BackBox->lastInFrame() );
						m_Doc->scMW()->selectItemsFromOutlines(BackBox);
					}
			}
			else
			{
				itemText.setCursorPosition( firstInFrame() );
				if (BackBox != 0)
				{
					view->Deselect(true);
					BackBox->itemText.setCursorPosition( BackBox->lastInFrame() );
					m_Doc->scMW()->selectItemsFromOutlines(BackBox);
				}
			}
		}
//		if ( this->itemText.lengthOfSelection() > 0 )
//			view->RefreshItem(this);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_PageUp:
		if (itemText.cursorPosition() == firstInFrame() && BackBox != 0)
		{
			view->Deselect(true);
			BackBox->itemText.setCursorPosition( BackBox->firstInFrame() );
			m_Doc->scMW()->selectItemsFromOutlines(BackBox);
			//currItem = currItem->BackBox;
		}
		else
			itemText.setCursorPosition( itemText.startOfFrame(itemText.cursorPosition()) );
		if ( buttonModifiers & Qt::ShiftModifier )
			ExpandSel(-1, oldPos);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_PageDown:
		if (!frameDisplays(itemText.length()-1) && itemText.cursorPosition() >= lastInFrame() && NextBox != 0)
		{
			view->Deselect(true);
			itemText.setCursorPosition( NextBox->lastInFrame() );
			m_Doc->scMW()->selectItemsFromOutlines(NextBox);
			//currItem = currItem->BackBox;
		}
		else
			itemText.setCursorPosition( itemText.endOfFrame(itemText.cursorPosition()) );
		if ( buttonModifiers & Qt::ShiftModifier )
			ExpandSel(1, oldPos);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_Left:
		if ( buttonModifiers & Qt::ControlModifier )
		{
			setNewPos(oldPos, itemText.length(), -1);
			if ( buttonModifiers & Qt::ShiftModifier )
				ExpandSel(-1, oldPos);
		}
		else if ( buttonModifiers & Qt::ShiftModifier )
		{
			int pos = itemText.cursorPosition();
			itemText.setCursorPosition(-1, true);
			if ( pos > 0 )
				ExpandSel(-1, oldPos);
		}
		else
		{
			itemText.setCursorPosition(-1, true);
			if (itemText.cursorPosition() < firstInFrame())
			{
				itemText.setCursorPosition( firstInFrame() );
				if (BackBox != 0)
				{
					view->Deselect(true);
					BackBox->itemText.setCursorPosition( BackBox->lastInFrame() );
					m_Doc->scMW()->selectItemsFromOutlines(BackBox);
					//currItem = currItem->BackBox;
				}
			}
		}
		if ((itemText.cursorPosition() > 0) && (itemText.cursorPosition() >= lastInFrame())) // I do not see how its possible, may be dead code - pm
		{
			itemText.setCursorPosition( lastInFrame() );
//			if (itemText.charStyle(CPos-1).effects() & ScStyle_SuppressSpace)
//			{
//				--CPos;
				while ((itemText.cursorPosition() > 1) && (itemText.charStyle().effects() & ScStyle_SuppressSpace) && (itemText.charStyle(itemText.cursorPosition() - 1).effects() & ScStyle_SuppressSpace))
				{
					itemText.setCursorPosition(-1, true);
					if (itemText.cursorPosition() == 0)
						break;
				}
//			}
		}
		else
		{
			while ((itemText.cursorPosition() > 1) && (itemText.charStyle().effects() & ScStyle_SuppressSpace) && (itemText.charStyle(itemText.cursorPosition() - 1).effects() & ScStyle_SuppressSpace))
			{
				itemText.setCursorPosition(-1, true);
				if (itemText.cursorPosition() == 0)
					break;
			}
		}
//		if ( itemText.lengthOfSelection() > 0 )
//			view->RefreshItem(this);
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_Right:
		if ( buttonModifiers & Qt::ControlModifier )
		{
			setNewPos(oldPos, itemText.length(), 1);
			if ( buttonModifiers & Qt::ShiftModifier )
				ExpandSel(1, oldPos);
		}
		else if ( buttonModifiers & Qt::ShiftModifier )
		{
			int pos = itemText.cursorPosition();
			itemText.setCursorPosition(1, true);
			if ( pos < itemText.length() )
				ExpandSel(1, oldPos);
		}
		else
		{
			itemText.setCursorPosition(1, true); // new position within text ?
			if (itemText.cursorPosition() > lastInFrame())
			{
//				--CPos;
				itemText.setCursorPosition(lastInFrame() + 1);
				if (NextBox != 0)
				{
					if (NextBox->frameDisplays(itemText.cursorPosition()))
					{
						view->Deselect(true);
						m_Doc->scMW()->selectItemsFromOutlines(NextBox);
						//currItem = currItem->NextBox;
					}
				}
			}
		}
// 		if ( itemText.lengthOfSelection() > 0 )
// 			update();
		m_Doc->scMW()->setTBvals(this);
		break;
	case Qt::Key_Delete:
		if (itemText.cursorPosition() == itemText.length())
		{
			if (itemText.lengthOfSelection() > 0)
			{
				deleteSelectedTextFromFrame();
				m_Doc->scMW()->setTBvals(this);
				if (isAutoNoteFrame() && asNoteFrame()->notesList().isEmpty())
				{
					if (!asNoteFrame()->isEndNotesFrame())
					{
						Q_ASSERT(asNoteFrame()->masterFrame());
						asNoteFrame()->masterFrame()->invalid = true;
					}
				}
				else
				update();
//				view->RefreshItem(this);
			}
			keyRepeat = false;
			return;
		}
		if (itemText.length() == 0)
		{
			keyRepeat = false;
			return;
		}
		cr = itemText.text();
		if (itemText.lengthOfSelection() == 0)
			itemText.select(itemText.cursorPosition(), 1, true);
		deleteSelectedTextFromFrame();
		if (isAutoNoteFrame() && asNoteFrame()->notesList().isEmpty())
		{
			if (!asNoteFrame()->isEndNotesFrame())
			{
				Q_ASSERT(asNoteFrame()->masterFrame());
				asNoteFrame()->masterFrame()->invalid = true;
			}
		}
		else
		{
			layout();
		if (oldLast != lastInFrame() && NextBox != 0 && NextBox->invalid)
			NextBox->updateLayout();
		}
//		Tinput = false;
//		if ((cr == QChar(13)) && (itemText.length() != 0))
//		{
//			m_Doc->chAbStyle(this, findParagraphStyle(m_Doc, itemText.paragraphStyle(qMax(itemText.cursorPosition()-1,0))));
//			Tinput = false;
//		}
		m_Doc->scMW()->setTBvals(this);
//		view->RefreshItem(this);
		break;
	case Qt::Key_Backspace:
		if (itemText.cursorPosition() == 0)
		{
			if (itemText.lengthOfSelection() > 0)
			{
				deleteSelectedTextFromFrame();
				m_Doc->scMW()->setTBvals(this);
				if (isAutoNoteFrame() && asNoteFrame()->notesList().isEmpty())
				{
					if (!asNoteFrame()->isEndNotesFrame())
					{
						Q_ASSERT(asNoteFrame()->masterFrame());
						asNoteFrame()->masterFrame()->invalid = true;
					}
				}
				else
				update();
			}
			break;
		}
		if (itemText.length() == 0)
			break;
		cr = itemText.text(qMax((int) itemText.cursorPosition() - 1, 0), 1);
		if (itemText.lengthOfSelection() == 0)
		{
			itemText.setCursorPosition(-1, true);
			itemText.select(itemText.cursorPosition(), 1, true);
		}
		deleteSelectedTextFromFrame();
//		Tinput = false;
//		if ((cr == QChar(13)) && (itemText.length() != 0))
//		{
//			m_Doc->chAbStyle(this, findParagraphStyle(m_Doc, itemText.paragraphStyle(qMax(CPos-1,0))));
//			Tinput = false;
//		}
		if (isAutoNoteFrame() && asNoteFrame()->notesList().isEmpty())
		{
			if (!asNoteFrame()->isEndNotesFrame())
			{
				Q_ASSERT(asNoteFrame()->masterFrame());
				asNoteFrame()->masterFrame()->invalid = true;
			}
		}
		else
		{
			layout();
		if (oldLast != lastInFrame() && NextBox != 0 && NextBox->invalid)
			NextBox->updateLayout();
		}
		if (itemText.cursorPosition() < firstInFrame())
		{
			itemText.setCursorPosition( firstInFrame() );
			if (BackBox != 0)
			{
				view->Deselect(true);
				if (BackBox->invalid)
					BackBox->updateLayout();
				itemText.setCursorPosition( BackBox->lastInFrame() );
				m_Doc->scMW()->selectItemsFromOutlines(BackBox);
				//currItem = currItem->BackBox;
			}
		}
		m_Doc->scMW()->setTBvals(this);
//		update();
//		view->RefreshItem(this);
		break;
	default:
		if (isNoteFrame() && itemText.cursorPosition() == 0)
			break; //avoid inserting chars before first note mark
		bool doUpdate = false;
		UndoTransaction* activeTransaction = NULL;
		if (itemText.lengthOfSelection() > 0) //(kk < 0x1000)
		{
			bool x11Hack=false;
			bool controlCharHack=false;
			if ((k->text().size() == 1))
			{
				ushort uni = k->text().at(0).unicode();
				controlCharHack = ((uni < 32) && (uni != SpecialChars::TAB.unicode()));
			}
#if defined (Q_WS_X11)
			if ((k->text().size()==1) && (k->modifiers() & Qt::ShiftModifier) && (k->modifiers() & Qt::ControlModifier) && (k->nativeVirtualKey() < 1000))
				x11Hack=true;
#endif
			if (!controlCharHack && !x11Hack && !k->text().isEmpty())
			{
				if (UndoManager::undoEnabled())
					activeTransaction = new UndoTransaction(undoManager->beginTransaction(Um::Selection, Um::IGroup, Um::ReplaceText, "", Um::IDelete));

				deleteSelectedTextFromFrame();
				doUpdate = true;
			}
			/*
			qDebug()<<"Key:"<<k->key();
			qDebug()<<"Text:"<<k->text();
			qDebug()<<"Size:"<<k->text().size();
			qDebug()<<"Modifiers:"<<k->modifiers();
			qDebug()<<"Native Modifiers:"<<k->nativeModifiers();
			qDebug()<<"Native Scan Code:"<<k->nativeScanCode();
			qDebug()<<"Native Virtual Key:"<<k->nativeVirtualKey();
			*/
		}
		//if ((kk == Qt::Key_Tab) || ((kk == Qt::Key_Return) && (buttonState & Qt::ShiftButton)))
		if (kk == Qt::Key_Tab)
		{
			if (UndoManager::undoEnabled())
			{
				SimpleState *ss = dynamic_cast<SimpleState*>(undoManager->getLastUndo());
				if(ss && ss->get("ETEA") == "insert_frametext")
						ss->set("TEXT_STR",ss->get("TEXT_STR") + QString(SpecialChars::TAB));
				else {
					ss = new SimpleState(Um::InsertText,"",Um::ICreate);
					ss->set("INSERT_FRAMETEXT", "insert_frametext");
					ss->set("ETEA", QString("insert_frametext"));
					ss->set("TEXT_STR", QString(SpecialChars::TAB));
					ss->set("START", itemText.cursorPosition());
					UndoObject * undoTarget = this;
					if (isNoteFrame())
					{
						undoTarget = m_Doc;
						ss->set("noteframeName", getUName());
					}
					undoManager->action(undoTarget, ss);
				}
			}
			itemText.insertChars(QString(SpecialChars::TAB), true);
//			Tinput = true;
//			view->RefreshItem(this);
			doUpdate = true;
		}
		else if ((uc[0] > QChar(31) && m_Doc->currentStyle.charStyle().font().canRender(uc[0])) || (as == 13) || (as == 30))
		{
			if (UndoManager::undoEnabled())
			{
				SimpleState *ss = dynamic_cast<SimpleState*>(undoManager->getLastUndo());
				if(ss && ss->get("ETEA") == "insert_frametext")
						ss->set("TEXT_STR",ss->get("TEXT_STR") + uc);
				else {
					ss = new SimpleState(Um::InsertText,"",Um::ICreate);
					ss->set("INSERT_FRAMETEXT", "insert_frametext");
					ss->set("ETEA", QString("insert_frametext"));
					ss->set("TEXT_STR",uc);
					ss->set("START", itemText.cursorPosition());
					UndoObject * undoTarget = this;
					if (isNoteFrame())
					{						undoTarget = m_Doc;
						ss->set("noteframeName", getUName());
					}
					undoManager->action(undoTarget, ss);
				}
			}
			itemText.insertChars(uc, true);
			if ((m_Doc->docHyphenator->AutoCheck) && (itemText.cursorPosition() > 1))
			{
				Twort = "";
				Tcoun = 0;
				for (int hych = itemText.cursorPosition()-1; hych > -1; hych--)
				{
					Tcha = itemText.text(hych,1);
					if (Tcha[0] == ' ')
					{
						Tcoun = hych+1;
						break;
					}
					Twort.prepend(Tcha);
				}
				if (!Twort.isEmpty())
				{
					m_Doc->docHyphenator->slotHyphenateWord(this, Twort, Tcoun);
				}
			}
			invalid = true;
//			Tinput = true;
//			view->RefreshItem(this);
			doUpdate = true;
		}
		if (doUpdate)
		{
			if (activeTransaction)
			{
				activeTransaction->commit();
				delete activeTransaction;
				activeTransaction = NULL;
			}
			// update layout immediately, we need MaxChars to be correct to detect 
			// if we need to move to next frame or not
			if (isAutoNoteFrame() && asNoteFrame()->notesList().isEmpty())
			{
				if (!asNoteFrame()->isEndNotesFrame())
				{
					Q_ASSERT(asNoteFrame()->masterFrame());
					asNoteFrame()->masterFrame()->invalid = true;
				}
			}
			else
				update();
			if (oldLast != lastInFrame() && NextBox != 0 && NextBox->invalid)
				NextBox->updateLayout();
		}
		//check if cursor need to jump to next linked frame
		//but not for notes frames can`t be updated as may disapper during update
		if ((itemText.cursorPosition() > lastInFrame() + 1) && (lastInFrame() < (itemText.length() - 2)) && NextBox != 0)
		{
			view->Deselect(true);
			NextBox->update();
			m_Doc->scMW()->selectItemsFromOutlines(NextBox);
		}
		else
			doc()->changed();
		break;
	}
// 	update();
//	view->slotDoCurs(true);
	if ((kk == Qt::Key_Left) || (kk == Qt::Key_Right) || (kk == Qt::Key_Up) || (kk == Qt::Key_Down))
		keyRepeat = false;
}

void PageItem_TextFrame::deleteSelectedTextFromFrame(/*bool findNotes*/)
{
	if (itemText.lengthOfSelection() == 0)
	{
		itemText.select(itemText.cursorPosition(),1);
		HasSel = true;
	}
			int start = itemText.startOfSelection();
			int stop = itemText.endOfSelection();
	int marksNum = 0;
	if(UndoManager::undoEnabled()) {
			int lastPos = start;
			CharStyle lastParent = itemText.charStyle(start);
			UndoState* state = undoManager->getLastUndo();
			ScItemState<CharStyle> *is = NULL;
			TransactionState *ts = NULL;
			bool added = false;
			bool lastIsDelete = false;
			while(state && state->isTransaction()){
				ts = dynamic_cast<TransactionState*>(state);
				is = dynamic_cast<ScItemState<CharStyle>*>(ts->at(ts->sizet()-1));
				state = ts->at(0);
			}
		UndoTransaction* trans = new UndoTransaction(undoManager->beginTransaction(Um::Selection,Um::IDelete,Um::Delete,"",Um::IDelete));

		//find and delete notes and marks in selected text
		QList<QPair<TextNote*, int> > notes2DEL;
		if (isNoteFrame()/* && findNotes*/)
		{
			//find and delete notes
			//if marks are in notes then they will be deleted further while note is physicaly deleted
			for (int i=start; i < stop; ++i)
			{
				if (i == itemText.length())
					break;
				ScText* hl = itemText.item(i);
				if (hl->hasMark() && hl->mark->isType(MARKNoteFrameType))
//					notes2DEL.append(QPair<TextNote*, int>(hl->mark->getNotePtr(), i));
					notes2DEL.append(qMakePair(hl->mark->getNotePtr(), i));
			}
		}
		else
		{
			//delete marks from selected text (with undo)
			marksNum = removeMarksFromText(true);
			stop -= marksNum;
		}
		//delete text
			for (int i=start; i <= stop; ++i)
			{
			ScText* hl = NULL;
			if (i < itemText.length())
				hl = itemText.item(i);
			const CharStyle& curParent = itemText.charStyle(i);
			if (i==stop || !curParent.equiv(lastParent) || (hl!=NULL && hl->hasMark() && hl->mark->isType(MARKNoteFrameType)))
			{
				added = false;
				lastIsDelete = false;
				if (is && ts && dynamic_cast<ScItemState<CharStyle>*>(ts->at(0))->get("ETEA") == "delete_frametext" && lastPos<is->getInt("START"))
				{
					if (is->getItem().equiv(lastParent))
					{
						is->set("START",start);
						is->set("TEXT_STR",itemText.text(lastPos,i - lastPos) + is->get("TEXT_STR"));
						added = true;
					}
					lastIsDelete = true;
				}
				else if (is && ts && dynamic_cast<ScItemState<CharStyle>*>(ts->at(0))->get("ETEA") == "delete_frametext"  && lastPos>=is->getInt("START"))
				{
					if (is->getItem().equiv(lastParent)){
						is->set("TEXT_STR",is->get("TEXT_STR") + itemText.text(lastPos,i - lastPos));
						added = true;
					}
					lastIsDelete = true;
				}
				if(!added)
				{
					UndoObject * undoTarget = this;
					is = NULL;
					if (i - lastPos > 0)
					{
					is = new ScItemState<CharStyle>(Um::DeleteText,"",Um::IDelete);
					is->set("DELETE_FRAMETEXT", "delete_frametext");
					is->set("ETEA", QString("delete_frametext"));
					is->set("TEXT_STR",itemText.text(lastPos,i - lastPos));
					is->set("START", start);
					is->setItem(lastParent);
					}
					//delete selected notes from notes frame
					if (isNoteFrame())
					{
						undoTarget = m_Doc; //undo target is doc for notes as after deleting last note notesframe can be deleted
						if (is)
							is->set("noteframeName", getUName());
						//remove marks from notes
						for (int ii = notes2DEL.count() -1; ii >= 0; --ii)
						{
							TextNote* note = notes2DEL.at(ii).first;
							Q_ASSERT(note != NULL);
							if (note->textLen > 0)
							{
								itemText.deselectAll();
								itemText.select(notes2DEL.at(ii).second + 1, note->textLen);
								removeMarksFromText(true);
							}
						}
						asNoteFrame()->updateNotesText();
						for (int ii = notes2DEL.count() -1; ii >= 0; --ii)
						{
							TextNote* note = notes2DEL.at(ii).first;
							Q_ASSERT(note != NULL);
							m_Doc->setUndoDelNote(note);
							if (note->isEndNote())
								m_Doc->flag_updateEndNotes = true;
							m_Doc->deleteNote(note);
						}
						if(is)
						{
							if (!ts || !lastIsDelete){
								undoManager->action(undoTarget, is);
								ts = NULL;
							}
							else
								ts->pushBack(undoTarget,is);
						}
						break;
					}
					if (is)
					{
					if(!ts || !lastIsDelete){
							undoManager->action(undoTarget, is);
						ts = NULL;
					}
					else
							ts->pushBack(undoTarget,is);
					}
				}
				lastPos = i;
				lastParent = curParent;
			}
		}
		if (trans)
		{
			trans->commit();
			delete trans;
			trans = NULL;
		}
	}
	else //remove marks without undo
		marksNum =removeMarksFromText(false);
	itemText.setCursorPosition( start );
	//for sure text is still selected
	itemText.select(start, stop - start - marksNum);
		itemText.removeSelection();
		HasSel = false;
//	m_Doc->updateFrameItems();
	m_Doc->scMW()->DisableTxEdit();
}


//CB Rewrote JJSA code, March 06
// jjsa added on 15-mar-2004
// calculate the end position while ctrl + arrow pressed

void PageItem_TextFrame::setNewPos(int oldPos, int len, int dir)
{
	
	bool isSpace, wasSpace;
	if ( dir > 0 && oldPos < len )
	{
		wasSpace = itemText.text(oldPos).isSpace();
		itemText.setCursorPosition(oldPos + 1);
		while (itemText.cursorPosition() < len)
		{
			isSpace = itemText.text().isSpace();
			if (wasSpace && !isSpace)
				break;
			itemText.setCursorPosition(1, true);
			wasSpace=isSpace;
			
		}
		/*
		isSpace = itemText.at(oldPos)->ch.at(0).isSpace();
		CPos = oldPos +1;
		for (int i=oldPos+1; i < len; i++)
		{
			if ( itemText.at(i)->ch.at(0).isSpace() != isSpace )
				break;
			CPos++;
		}
		*/
	}
	else if ( dir < 0 && oldPos > 0 )
	{
		itemText.setCursorPosition(oldPos - 1);
		wasSpace = itemText.text().isSpace();
		while (itemText.cursorPosition() > 0)
		{
			isSpace = itemText.text().isSpace();
			if (!wasSpace && isSpace)
			{
				itemText.setCursorPosition(1, true);
				break;
			}
			itemText.setCursorPosition(-1, true);
			wasSpace=isSpace;
		}
		/*
		oldPos--;
		isSpace = itemText.at(oldPos)->ch.at(0).isSpace();
		for (int i=oldPos; i >= 0; i--)
		{
			if (  itemText.at(i)->ch.at(0).isSpace() != isSpace )
				break;
			CPos--;
		}
		*/
	}
	cursorBiasBackward = (dir < 0);
}

bool PageItem_TextFrame::checkKeyIsShortcut(QKeyEvent *k)
{
	QMap<QString, Keys> keyMap=PrefsManager::instance()->appPrefs.keyShortcutPrefs.KeyActions;

	bool ret = false;
	int keyCode =0;
	if (k->modifiers() & Qt::ShiftModifier)
		keyCode |= Qt::SHIFT;
	if (k->modifiers() & Qt::ControlModifier)
		keyCode |= Qt::CTRL;
	if (k->modifiers() & Qt::AltModifier)
		keyCode |= Qt::ALT;
	keyCode|=k->key();

	QKeySequence key = QKeySequence(keyCode);
	for (QMap<QString,Keys>::Iterator it=keyMap.begin(); it!=keyMap.end(); ++it)
	{
		if (key.matches(it.value().keySequence) != QKeySequence::NoMatch)
		{
			ret = true;
			break;
		}
	}
	return ret;

}


// jjsa added on 15-mar-2004 expand / decrease selection

// jjsa added on 14-mar-2004 text selection with pressed
// shift button and <-, -> cursor keys
// Parameters
//   PageItem *currItem text item to be processed
//   inc < 0 for left key > 0 for right key
//  if value is +/-1 work on slection
//  if value is +/-2 refresh if text under cursor is selected -- not used

void PageItem_TextFrame::ExpandSel(int dir, int oldPos)
{
	int start = itemText.startOfSelection();
	// itemText.endOfSelection can return -1 in some case, which results in a crash
	// when calling itemText.select(end, CPos - end).
	// as I do not know where it is checked for negative value, just work around by
	// preventing it to be less than 0 here.
	int end = qMax(0,itemText.endOfSelection());
	
	if (oldPos >= end && itemText.cursorPosition() < start)
	{
		itemText.deselectAll();
		itemText.select(itemText.cursorPosition(), start - itemText.cursorPosition());
	}
	else if (oldPos <= start && itemText.cursorPosition() > end)
	{
		itemText.deselectAll();
		itemText.select(end, itemText.cursorPosition() - end);
	}
	else
	{
		itemText.extendSelection(oldPos, itemText.cursorPosition());
	}
	HasSel = (itemText.lengthOfSelection() > 0);
	if (HasSel)
	{
		//CB Replace with direct call for now //emit HasTextSel();
		m_Doc->scMW()->EnableTxEdit();
		
	}
	else
	{
		//CB Replace with direct call for now //emit  HasNoTextSel();
		m_Doc->scMW()->DisableTxEdit();
	}
	cursorBiasBackward = (oldPos > itemText.cursorPosition());

// 	layoutWeakLock = true;
// 	update();
	m_Doc->regionsChanged()->update(getBoundingRect());
}

void PageItem_TextFrame::deselectAll()
{
	if ( itemText.lengthOfSelection() > 0 )
	{
		itemText.deselectAll();
		PageItem *item = this;
		while( item->prevInChain() )
			item=item->prevInChain();

		while ( item )
		{
			item->HasSel = false;
			item = item->nextInChain();
		}
// 		update();
		m_Doc->regionsChanged()->update(getBoundingRect());
	}
	//CB Replace with direct call for now //emit HasNoTextSel();
	m_Doc->scMW()->DisableTxEdit();
}

double PageItem_TextFrame::columnWidth()
{
	double lineCorr;
	if (lineColor() != CommonStrings::None)
		lineCorr = m_lineWidth / 2.0;
	else
		lineCorr = 0;
	return (Width - (ColGap * (Cols - 1)) - Extra - RExtra - 2 * lineCorr) / Cols;
//	return (Width - (ColGap * (Cols - 1)) - Extra - RExtra - lineCorr) / Cols;
}

/*
void PageItem_TextFrame::drawOverflowMarker(ScPainter *p)
{
	qreal sideLength = 10 / qMax(p->zoomFactor(), 1.0);
	qreal left  = Width  - sideLength;// / 2;
	qreal right = left   + sideLength;
	qreal top   = Height - sideLength;// * 1.5;
	qreal bottom = top   + sideLength;

	QColor color(PrefsManager::instance()->appPrefs.displayPrefs.frameNormColor);
	if ((isBookmark) || (m_isAnnotation))
		color = PrefsManager::instance()->appPrefs.displayPrefs.frameAnnotationColor;
	if ((BackBox != 0) || (NextBox != 0))
		color = PrefsManager::instance()->appPrefs.displayPrefs.frameLinkColor;
	if (m_Locked)
		color = PrefsManager::instance()->appPrefs.displayPrefs.frameLockColor;
	if (m_Doc->m_Selection->containsItem(this))
		color = Qt::red;

	p->setPen(color, 0.5 / p->zoomFactor(), Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
	p->setPenOpacity(1.0);
	p->setBrush(Qt::white);
	p->setBrushOpacity(1.0);
	p->setFillMode(ScPainter::Solid);
	p->drawRect(left, top, sideLength, sideLength);
	p->drawLine(FPoint(left, top), FPoint(right, bottom));
	p->drawLine(FPoint(left, bottom), FPoint(right, top));
}
*/

void PageItem_TextFrame::drawColumnBorders(ScPainter *p)
{
	p->setPen(Qt::black, 0, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
	p->setPenOpacity(1.0);
	p->setBrush(Qt::white);
	p->setBrushOpacity(1.0);
	p->setFillMode(ScPainter::Solid);
	p->setupPolygon(&PoLine);
	p->setClipPath();
	double colWidth = columnWidth();
	double colLeft=0;
	int curCol=0;
	double lineCorr=0;
	if (lineColor() != CommonStrings::None)
		lineCorr = m_lineWidth / 2.0;
	if (TExtra + lineCorr!=0.0)
		p->drawSharpLine(FPoint(0, TExtra + lineCorr), FPoint(Width, TExtra + lineCorr));
	if (BExtra + lineCorr!=0.0)
		p->drawSharpLine(FPoint(0, Height - BExtra - lineCorr), FPoint(Width, Height - BExtra - lineCorr));
	while(curCol < Cols)
	{
		colLeft=(colWidth + ColGap) * curCol + Extra + lineCorr;
		if (colLeft != 0.0)
			p->drawSharpLine(FPoint(colLeft, 0), FPoint(colLeft, 0+Height));
		if (colLeft + colWidth != Width)
			p->drawSharpLine(FPoint(colLeft+colWidth, 0), FPoint(colLeft+colWidth, 0+Height));
		++curCol;
	}
	
}

bool PageItem_TextFrame::createInfoGroup(QFrame *infoGroup, QGridLayout *infoGroupLayout)
{
	int Parag = 0;
	int Words = 0;
	int Chara = 0;
	int ParagN = 0;
	int WordsN = 0;
	int CharaN = 0;
	
	QLabel *infoCT = new QLabel(infoGroup);
	QLabel *linesCT = new QLabel(infoGroup);
	QLabel *linesT = new QLabel(infoGroup);
	QLabel *parCT = new QLabel(infoGroup);
	QLabel *parT = new QLabel(infoGroup);
	QLabel *wordCT = new QLabel(infoGroup);
	QLabel *wordT = new QLabel(infoGroup);
	QLabel *charCT = new QLabel(infoGroup);
	QLabel *charT = new QLabel(infoGroup);
	
	if ((nextInChain() != 0) || (prevInChain() != 0))
		infoCT->setText(tr("Linked Text"));
	else
		infoCT->setText(tr("Text Frame"));
	infoGroupLayout->addWidget( infoCT, 0, 0, 1, 2, Qt::AlignCenter );
	
	WordAndPara(this, &Words, &Parag, &Chara, &WordsN, &ParagN, &CharaN);
	parCT->setText(tr("Paragraphs: "));
	infoGroupLayout->addWidget( parCT, 1, 0, Qt::AlignRight );
	if (ParagN != 0)
		parT->setText(QString::number(Parag+ParagN)+" ("+QString::number(ParagN)+")");
	else
		parT->setText(QString::number(Parag));
	infoGroupLayout->addWidget( parT, 1, 1 );
	
	linesCT->setText(tr("Lines: "));
	infoGroupLayout->addWidget( linesCT, 2, 0, Qt::AlignRight );
	linesT->setText(QString::number(itemText.lines()));
	infoGroupLayout->addWidget( linesT, 2, 1 );
	
	
	wordCT->setText(tr("Words: "));
	infoGroupLayout->addWidget( wordCT, 3, 0, Qt::AlignRight );
	if (WordsN != 0)
		wordT->setText(QString::number(Words+WordsN)+" ("+QString::number(WordsN)+")");
	else
		wordT->setText(QString::number(Words));
	infoGroupLayout->addWidget( wordT, 3, 1 );
	
	charCT->setText(tr("Chars: "));
	infoGroupLayout->addWidget(charCT, 4, 0, Qt::AlignRight );
	if (CharaN != 0)
		charT->setText(QString::number(Chara+CharaN)+" ("+QString::number(CharaN)+")");
	else
		charT->setText(QString::number(Chara));
	infoGroupLayout->addWidget( charT, 4, 1 );
	return true;
}

void PageItem_TextFrame::togleEditModeActions()
{
	bool editMode = (m_Doc->appMode == modeEdit);
	bool masterMode = m_Doc->masterPageMode();
	m_Doc->scMW()->scrActions["insertMarkVariableText"]->setEnabled(editMode);
	m_Doc->scMW()->scrActions["insertMarkAnchor"]->setEnabled(editMode && !masterMode);
	m_Doc->scMW()->scrActions["insertMarkItem"]->setEnabled(editMode && !masterMode);
	m_Doc->scMW()->scrActions["insertMark2Mark"]->setEnabled(editMode && !masterMode);
	m_Doc->scMW()->scrActions["insertMarkNote"]->setEnabled(editMode && !masterMode && !isNoteFrame());
	//	scrActions["insertMarkIndex"]->setEnabled(editMode && !masterMode);
	bool enableEditMark = false;
	if (editMode && (itemText.cursorPosition() < itemText.length()))
	{
		ScText *hl = itemText.item(itemText.cursorPosition());
		if (hl->hasMark())
		{
			Mark* mrk = hl->mark;
			//notes marks in note frames are not editable
			if (!mrk->isType(MARKNoteFrameType))
				enableEditMark = true;
		}
	}
	m_Doc->scMW()->scrActions["editMark"]->setEnabled(enableEditMark);
}

void PageItem_TextFrame::applicableActions(QStringList & actionList)
{
	actionList << "insertMarkVariableText";
	if (!m_Doc->masterPageMode())
		actionList << "insertMarkAnchor";
	//notes frames are not simply text frames
	if (isNoteFrame())
		return;
	actionList << "fileImportText";
	actionList << "fileImportAppendText";
	actionList << "toolsEditWithStoryEditor";
	actionList << "insertSampleText";
	actionList << "itemPDFIsAnnotation";
	actionList << "itemClearPStyle";
	if (doc()->currentPage()->pageName().isEmpty())
		actionList << "itemPDFIsBookmark";
	if (isAnnotation())
	{
		if ((annotation().Type() == 0) || (annotation().Type() == 1) || (annotation().Type() > 9))
			actionList << "itemPDFAnnotationProps";
		else
			actionList << "itemPDFFieldProps";
	}
	if ((prevInChain() == 0) && (nextInChain() == 0))
	{
		actionList << "itemConvertToImageFrame";
		actionList << "itemConvertToPolygon";
	}
	actionList << "itemConvertToOutlines";
	if (itemText.lines() != 0)
	{
		actionList << "editClearContents";
		actionList << "itemAdjustFrameHeightToText";
		actionList << "itemClearPStyle";
	}
}

QString PageItem_TextFrame::infoDescription()
{
	return QString();
}

bool PageItem_TextFrame::hasMark(NotesStyle *NS)
{
	if (isNoteFrame())
		return (asNoteFrame()->notesStyle() == NS);

	if (NS == NULL)
	{
		//find any mark
		if (!m_notesFramesMap.isEmpty())
			return true;
		for (int i=firstInFrame(); i <= lastInFrame(); ++i)
			if (itemText.item(i)->hasMark())
				return true;
	}
	else
	{
		for (int pos = firstInFrame(); pos <= lastInFrame(); ++pos)
		{
			ScText* hl = itemText.item(pos);
			if (hl->hasMark())
			{
				TextNote* note = hl->mark->getNotePtr();
				if (note != NULL && (note->notesStyle() == NS))
					return true;
			}
		}
	}
	return false;
}

bool PageItem_TextFrame::hasNoteFrame(NotesStyle *NS, bool inChain)
{
	if (isNoteFrame())
		return false;
	if (m_notesFramesMap.isEmpty())
		return false;
	if (NS == NULL)
	{ //check if any notes are in frame or whole chain
		if (!inChain)
			return !m_notesFramesMap.isEmpty();
		else
		{
			PageItem* item = this;
			item = firstInChain();
			while (item != NULL)
			{
				if (item->asTextFrame()->hasNoteFrame(NULL, false))
					return true;
				item = item->nextInChain();
			}
			return false;
		}
	}
	PageItem* item = this;
	if (inChain)
		item = firstInChain();
	while (item != NULL)
	{
		QMap<PageItem_NoteFrame*, QList<TextNote*> >::iterator it = m_notesFramesMap.begin();
		QMap<PageItem_NoteFrame*, QList<TextNote*> >::iterator end = m_notesFramesMap.end();
		while (it != end)
		{
			if (it.key()->notesStyle() == NS)
				return true;
			++it;
		}
		if (!inChain)
			break;
		item = item->nextInChain();
	}
	return false;
}

void PageItem_TextFrame::delAllNoteFrames(bool doUpdate)
{
	int oldItemsCount = m_Doc->Items->count();

	QList<PageItem_NoteFrame*> delList;
	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
	{
		if (nF->notesList().isEmpty() && !nF->isAutoNoteFrame())
			delList.append(nF);
	}
	while (!delList.isEmpty())
	{
		PageItem_NoteFrame* nF = delList.takeFirst();
		m_Doc->delNoteFrame(nF);
	}

	//check if doc need update
	if (doUpdate && (oldItemsCount != m_Doc->Items->count()))
	{
		m_Doc->changed();
		m_Doc->regionsChanged()->update(QRectF());
	}
	m_Doc->setNotesChanged(true);
}

Mark* PageItem_TextFrame::selectedMark(bool onlySelection)
{ //return pointer to first mark in selected (or whole) text
	
	bool omitNotes = true; //do not return notes marks (for searching notes use selectedNotesMark()
	int start = 0;
	int stop = 0;
	if (onlySelection)
	{
		if (itemText.lengthOfSelection() > 0)
		{
			//only selection
			start = itemText.startOfSelection();
			stop = start + itemText.lengthOfSelection();
		}
		else //in edit mode only one char in cursor position
		{
			if (m_Doc->appMode == modeEdit)
			{
				//only char after cursor
				start = itemText.cursorPosition();
				stop = start + 1;
				if (stop > itemText.length())
					return NULL;
			}
			else
			{
				//only frame
				start = firstInFrame();
				stop = lastInFrame();
				if (start == stop)
					return NULL;
			}
		}
		
	}
	else //in whole text
		stop = itemText.length();
	
	for (int pos = start; pos < stop; ++pos)
	{
		ScText* hl = itemText.item(pos);
		if (hl->hasMark())
		{
			if (omitNotes && (hl->mark->isType(MARKNoteMasterType) || hl->mark->isType(MARKNoteFrameType)))
				continue;
			return hl->mark;
		}
	}
	return NULL;
}

TextNote* PageItem_TextFrame::selectedNoteMark(ScText* &hl, bool onlySelection)
{
	//return pointer to note from first mark found in text
	int start = 0;
	int stop = itemText.length();
	if (onlySelection)
	{
		if (itemText.lengthOfSelection() > 0)
		{
			start = itemText.startOfSelection();
			stop = start + itemText.lengthOfSelection();
		}
		else
			return NULL;
	}
	MarkType typ = isNoteFrame()? MARKNoteFrameType : MARKNoteMasterType;
	for (int pos = start; pos < stop; ++pos)
	{
		ScText* hl = itemText.item(pos);
		if (hl->hasMark() && hl->mark->isType(typ))
			return hl->mark->getNotePtr();
	}
	return NULL;
}

TextNote* PageItem_TextFrame::selectedNoteMark(bool onlySelection)
{
	ScText* hl = NULL;
	return selectedNoteMark(hl, onlySelection);
}

NotesInFrameMap PageItem_TextFrame::updateNotesFrames(QMap<int, Mark*> noteMarksPosMap)
{
	NotesInFrameMap notesMap; //= m_notesFramesMap;
	QMap<int, Mark*>::Iterator it = noteMarksPosMap.begin();
	QMap<int, Mark*>::Iterator end = noteMarksPosMap.end();
	PageItem* lastItem = this;
	while (it != end)
	{
		if (it.key() <= lastInFrame())
		{
			Mark* mark = it.value();
			mark->setItemPtr(this);
			mark->setItemName(itemName());

			TextNote* note = mark->getNotePtr();
			Q_ASSERT(note != NULL);
			if (note == NULL)
			{
				qWarning() << "note mark without valid note pointer";
				note = m_Doc->newNote(m_Doc->m_docNotesStylesList.at(0));
				note->setMasterMark(mark);
				mark->setNotePtr(note);
			}
			NotesStyle* NS = note->notesStyle();
			PageItem_NoteFrame* nF = NULL;
			if (NS->isEndNotes())
				nF = m_Doc->endNoteFrame(NS, this);
			else
				nF = itemNoteFrame(NS);
			if (nF == NULL)
			{
				//creating new noteframe
				if (NS->isEndNotes())
				{
					//create new endnotes frame
					double x,y,w,h;
					const ScPage* scP = m_Doc->page4EndNotes(NS, this);
					x = scP->Margins.Left + m_Doc->rulerXoffset + scP->xOffset();
					y = scP->Margins.Top + m_Doc->rulerYoffset + scP->yOffset();
					w = scP->width() - scP->Margins.Left - scP->Margins.Right;
					h = calculateLineSpacing(itemText.defaultStyle(), this);
					nF = m_Doc->createNoteFrame(note->notesStyle(), x, y, w, h, m_Doc->itemToolPrefs().shapeLineWidth, CommonStrings::None, m_Doc->itemToolPrefs().textFont);
					switch (NS->range())
					{ //insert pointer to endnoteframe into m_Doc->m_endNotesFramesMap
						case NSRdocument:
							m_Doc->setEndNoteFrame(nF, (void*) NULL);
							break;
						case NSRsection:
							m_Doc->setEndNoteFrame(nF, m_Doc->getSectionKeyForPageIndex(OwnPage));
						case NSRstory:
							m_Doc->setEndNoteFrame(nF, (void*) firstInChain());
							break;
						case NSRpage:
							m_Doc->setEndNoteFrame(nF, (void*) m_Doc->DocPages.at(OwnPage));
							break;
						case NSRframe:
							qDebug() << "Frame range is prohibited for end-notes";
							Q_ASSERT(false);
							break;
					}
				}
				else
					//create new footnotes frame for that text frame
					nF = m_Doc->createNoteFrame(this, note->notesStyle(), m_Doc->DocItems.indexOf(lastItem));
				//insert in map noteframe with empty list of notes
				m_notesFramesMap.insert(nF, QList<TextNote*>());
				m_Doc->setNotesChanged(true);
			}
			else if (NS->isEndNotes())
			{//check endnotes frame proper page
				const ScPage* scP = m_Doc->page4EndNotes(NS, this);
				if (scP->pageNr() != nF->OwnPage)
				{
					double x,y;
					x = scP->Margins.Left + m_Doc->rulerXoffset + scP->xOffset();
					y = scP->Margins.Top + m_Doc->rulerYoffset + scP->yOffset();
					if ((scP->pageNr() != nF->OwnPage) || (nF->xPos() > (x + scP->width())) || nF->yPos() > (y + scP->height()))
					{
						undoManager->setUndoEnabled(false);
						nF->setXYPos(x,y);
						undoManager->setUndoEnabled(true);
					}
				}
			}
			QList<TextNote*> nList;//list of notes in current noteFrame
			nList = notesMap.value(nF);
			if (!nList.contains(note))
			{
				nList.append(note);
				notesMap.insert(nF, nList);
			}
			if (!nF->isEndNotesFrame())
				lastItem = nF;
		}
		else
			break;
		++it;
	}
	return notesMap;
}

void PageItem_TextFrame::updateNotesMarks(NotesInFrameMap notesMap)
{
	bool docWasChanged = false;

//	QList<PageItem_NoteFrame*> curr_footNotesList;
//	QList<PageItem_NoteFrame*> old_footNotesList;
//	QList<PageItem_NoteFrame*> curr_endNotesList;
//	QList<PageItem_NoteFrame*> old_endNotesList;

	
//	foreach(PageItem_NoteFrame* nF, notesMap.keys())
//	{
//		if (nF->isEndNotesFrame())
//			curr_endNotesList.append(nF);
//		else if (!notesMap.value(nF).isEmpty())
//			curr_footNotesList.append(nF);
//	}
//	foreach(PageItem_NoteFrame* nF, m_notesFramesMap.keys())
//	{
//		if (nF->isEndNotesFrame())
//			old_endNotesList.append(nF);
//		else
//			old_footNotesList.append(nF);
//	}
//	//check for endnotes marks change in current frame
//	foreach (PageItem_NoteFrame* nF, old_endNotesList)
//	{
//		if (nF->deleteIt)
//		{
//			m_Doc->delNoteFrame(nF,true);
//			docWasChanged = true;
//		}
//		else if (!notesMap.contains(nF) || (m_notesFramesMap.value(nF) != notesMap.value(nF)))
//		{
//			m_Doc->endNoteFrameChanged(nF);
//			docWasChanged = true;
//		}
//	}
	//check if some notes frames are not used anymore
	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
	{
		if (nF->deleteIt || (nF->isAutoNoteFrame() && !notesMap.keys().contains(nF)))
		{
			m_Doc->delNoteFrame(nF,true);
			docWasChanged = true;
		}
		else
		{
			QList<TextNote*> nList = notesMap.value(nF);
			if (nList != nF->notesList() || m_Doc->notesChanged())
			{
				nF->updateNotes(nList, (!nF->isEndNotesFrame() && !nF->notesList().isEmpty()));
				docWasChanged = true;
			}
		}
	}
	if (m_notesFramesMap != notesMap)
	{
		docWasChanged = true;
		foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
		{
			if (notesMap.contains(nF))
			{
				m_notesFramesMap.insert(nF, notesMap.value(nF));
				notesMap.remove(nF);
			}
			else if (nF->isAutoNoteFrame() || nF->isEndNotesFrame())
				m_notesFramesMap.remove(nF);
		}
		m_notesFramesMap.unite(notesMap);
	}
	if (docWasChanged)
	{
		m_Doc->flag_restartMarksRenumbering = true;
		m_Doc->setNotesChanged(true);
	}
}

void PageItem_TextFrame::notesFramesLayout()
{
	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
	{
		if (nF == NULL)
			continue;
		if (nF->deleteIt)
			continue;
		if (nF->isEndNotesFrame() && m_Doc->flag_updateEndNotes)
			m_Doc->updateEndNotesFrameContent(nF);
		nF->invalid = true;
		nF->layout();
	}
}

int PageItem_TextFrame::removeMarksFromText(bool doUndo)
{
	int num = 0;
	if (!isNoteFrame())
	{
		TextNote* note = selectedNoteMark(true);
		while (note != NULL)
		{
			if (doUndo && UndoManager::undoEnabled())
				m_Doc->setUndoDelNote(note);
			if (note->isEndNote())
				m_Doc->flag_updateEndNotes = true;
			m_Doc->deleteNote(note);
			note = selectedNoteMark(true);
			++num;
		}
	}
	
	Mark* mrk = selectedMark(true);
	while (mrk != NULL)
	{
		Q_ASSERT(!mrk->isNoteType());
		if (doUndo)
			m_Doc->setUndoDelMark(mrk);
		m_Doc->eraseMark(mrk, true, this);
		mrk = selectedMark(true);
		++num;
	}
	return num;
}

PageItem_NoteFrame *PageItem_TextFrame::itemNoteFrame(NotesStyle *nStyle)
{
	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
		if (nF->notesStyle() == nStyle)
			return nF;
	return NULL;
}

void PageItem_TextFrame::setNoteFrame(PageItem_NoteFrame *nF)
{
	 m_notesFramesMap.insert(nF, nF->notesList());
}

//TextNote* PageItem_TextFrame::selectedNoteMark(bool onlySelection)
//{
//	ScText* hl = NULL;
//	return selectedNoteMark(hl, onlySelection);
//}

//NotesInFrameMap PageItem_TextFrame::updateNotesFrames(QMap<int, Mark*> noteMarksPosMap)
//{
//	NotesInFrameMap notesMap; //= m_notesFramesMap;
//	QMap<int, Mark*>::Iterator it = noteMarksPosMap.begin();
//	QMap<int, Mark*>::Iterator end = noteMarksPosMap.end();
//	PageItem* lastItem = this;
//	while (it != end)
//	{
//		if (it.key() <= lastInFrame())
//		{
//			Mark* mark = it.value();
//			mark->setItemPtr(this);
//			mark->setItemName(itemName());

//			TextNote* note = mark->getNotePtr();
//			Q_ASSERT(note != NULL);
//			if (note == NULL)
//			{
//				qWarning() << "note mark without valid note pointer";
//				note = m_Doc->newNote(m_Doc->m_docNotesStylesList.at(0));
//				note->setMasterMark(mark);
//				mark->setNotePtr(note);
//			}
//			NotesStyle* NS = note->notesStyle();
//			PageItem_NoteFrame* nF = NULL;
//			if (NS->isEndNotes())
//				nF = m_Doc->endNoteFrame(NS, this);
//			else
//				nF = itemNoteFrame(NS);
//			if (nF == NULL)
//			{
//				//creating new noteframe
//				if (NS->isEndNotes())
//				{
//					//create new endnotes frame
//					double x,y,w,h;
//					const ScPage* scP = m_Doc->page4EndNotes(NS, this);
//					x = scP->Margins.Left + m_Doc->rulerXoffset + scP->xOffset();
//					y = scP->Margins.Top + m_Doc->rulerYoffset + scP->yOffset();
//					w = scP->width() - scP->Margins.Left - scP->Margins.Right;
//					h = calculateLineSpacing(itemText.defaultStyle(), this);
//					nF = m_Doc->createNoteFrame(note->notesStyle(), x, y, w, h, m_Doc->itemToolPrefs().shapeLineWidth, CommonStrings::None, m_Doc->itemToolPrefs().textFont);
//					switch (NS->range())
//					{ //insert pointer to endnoteframe into m_Doc->m_endNotesFramesMap
//						case NSRdocument:
//							m_Doc->setEndNoteFrame(nF, (void*) NULL);
//							break;
//						case NSRsection:
//							m_Doc->setEndNoteFrame(nF, m_Doc->getSectionKeyForPageIndex(OwnPage));
//						case NSRstory:
//							m_Doc->setEndNoteFrame(nF, (void*) firstInChain());
//							break;
//						case NSRpage:
//							m_Doc->setEndNoteFrame(nF, (void*) m_Doc->DocPages.at(OwnPage));
//							break;
//						case NSRframe:
//							qDebug() << "Frame range is prohibited for end-notes";
//							Q_ASSERT(false);
//							break;
//					}
//				}
//				else
//					//create new footnotes frame for that text frame
//					nF = m_Doc->createNoteFrame(this, note->notesStyle(), m_Doc->DocItems.indexOf(lastItem));
//				//insert in map noteframe with empty list of notes
//				m_notesFramesMap.insert(nF, QList<TextNote*>());
//				m_Doc->setNotesChanged(true);
//			}
//			else if (NS->isEndNotes())
//			{//check endnotes frame proper page
//				const ScPage* scP = m_Doc->page4EndNotes(NS, this);
//				if (scP->pageNr() != nF->OwnPage)
//				{
//					double x,y;
//					x = scP->Margins.Left + m_Doc->rulerXoffset + scP->xOffset();
//					y = scP->Margins.Top + m_Doc->rulerYoffset + scP->yOffset();
//					if ((scP->pageNr() != nF->OwnPage) || (nF->xPos() > (x + scP->width())) || nF->yPos() > (y + scP->height()))
//					{
//						undoManager->setUndoEnabled(false);
//						nF->setXYPos(x,y);
//						undoManager->setUndoEnabled(true);
//					}
//				}
//			}
//			QList<TextNote*> nList;//list of notes in current noteFrame
//			nList = notesMap.value(nF);
//			if (!nList.contains(note))
//			{
//				nList.append(note);
//				notesMap.insert(nF, nList);
//			}
//			if (!nF->isEndNotesFrame())
//				lastItem = nF;
//		}
//		else
//			break;
//		++it;
//	}
//	return notesMap;
//}

//void PageItem_TextFrame::updateNotesMarks(NotesInFrameMap notesMap)
//{
//	bool docWasChanged = false;

////	QList<PageItem_NoteFrame*> curr_footNotesList;
////	QList<PageItem_NoteFrame*> old_footNotesList;
////	QList<PageItem_NoteFrame*> curr_endNotesList;
////	QList<PageItem_NoteFrame*> old_endNotesList;

	
////	foreach(PageItem_NoteFrame* nF, notesMap.keys())
////	{
////		if (nF->isEndNotesFrame())
////			curr_endNotesList.append(nF);
////		else if (!notesMap.value(nF).isEmpty())
////			curr_footNotesList.append(nF);
////	}
////	foreach(PageItem_NoteFrame* nF, m_notesFramesMap.keys())
////	{
////		if (nF->isEndNotesFrame())
////			old_endNotesList.append(nF);
////		else
////			old_footNotesList.append(nF);
////	}
////	//check for endnotes marks change in current frame
////	foreach (PageItem_NoteFrame* nF, old_endNotesList)
////	{
////		if (nF->deleteIt)
////		{
////			m_Doc->delNoteFrame(nF,true);
////			docWasChanged = true;
////		}
////		else if (!notesMap.contains(nF) || (m_notesFramesMap.value(nF) != notesMap.value(nF)))
////		{
////			m_Doc->endNoteFrameChanged(nF);
////			docWasChanged = true;
////		}
////	}
//	//check if some notes frames are not used anymore
//	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
//	{
//		if (nF->deleteIt || (nF->isAutoNoteFrame() && !notesMap.keys().contains(nF)))
//		{
//			m_Doc->delNoteFrame(nF,true);
//			docWasChanged = true;
//		}
//		else
//		{
//			QList<TextNote*> nList = notesMap.value(nF);
//			if (nList != nF->notesList() || m_Doc->notesChanged())
//			{
//				nF->updateNotes(nList, (!nF->isEndNotesFrame() && !nF->notesList().isEmpty()));
//				docWasChanged = true;
//			}
//		}
//	}
//	if (m_notesFramesMap != notesMap)
//	{
//		docWasChanged = true;
//		foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
//		{
//			if (notesMap.contains(nF))
//			{
//				m_notesFramesMap.insert(nF, notesMap.value(nF));
//				notesMap.remove(nF);
//			}
//			else if (nF->isAutoNoteFrame() || nF->isEndNotesFrame())
//				m_notesFramesMap.remove(nF);
//		}
//		m_notesFramesMap.unite(notesMap);
//	}
//	if (docWasChanged)
//	{
//		m_Doc->flag_restartMarksRenumbering = true;
//		m_Doc->setNotesChanged(true);
//	}
//}

//void PageItem_TextFrame::notesFramesLayout()
//{
//	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
//	{
//		if (nF == NULL)
//			continue;
//		if (nF->deleteIt)
//			continue;
//		if (nF->isEndNotesFrame() && m_Doc->flag_updateEndNotes)
//			m_Doc->updateEndNotesFrameContent(nF);
//		nF->invalid = true;
//		nF->layout();
//	}
//}

//int PageItem_TextFrame::removeMarksFromText(bool doUndo)
//{
//	int num = 0;
//	if (!isNoteFrame())
//	{
//		TextNote* note = selectedNoteMark(true);
//		while (note != NULL)
//		{
//			if (doUndo && UndoManager::undoEnabled())
//				m_Doc->setUndoDelNote(note);
//			if (note->isEndNote())
//				m_Doc->flag_updateEndNotes = true;
//			m_Doc->deleteNote(note);
//			note = selectedNoteMark(true);
//			++num;
//		}
//	}
	
//	Mark* mrk = selectedMark(true);
//	while (mrk != NULL)
//	{
//		Q_ASSERT(!mrk->isNoteType());
//		if (doUndo)
//			m_Doc->setUndoDelMark(mrk);
//		m_Doc->eraseMark(mrk, true, this);
//		mrk = selectedMark(true);
//		++num;
//	}
//	return num;
//}

//PageItem_NoteFrame *PageItem_TextFrame::itemNoteFrame(NotesStyle *nStyle)
//{
//	foreach (PageItem_NoteFrame* nF, m_notesFramesMap.keys())
//		if (nF->notesStyle() == nStyle)
//			return nF;
//	return NULL;
//}

//void PageItem_TextFrame::setNoteFrame(PageItem_NoteFrame *nF)
//{
//	 m_notesFramesMap.insert(nF, nF->notesList());
//}

void PageItem_TextFrame::setMaxY(long long y)
{
	if (y == -1)
		maxY = 0;
	else
		maxY = qMax(y, maxY);
}

void PageItem_TextFrame::setTextFrameHeight()
{
	//ugly hack increasing min frame`s haeight against strange glyph painting if it is too close of bottom
	int hackValue = 50;

	setHeight(double(maxY + hackValue)/100.0 + BExtra);
	updateClip();
	checkChanges(true);
	invalid = true;
	m_Doc->changed();
	m_Doc->regionsChanged()->update(QRect());
}

bool PageItem_TextFrame::isWarnedText(int pos)
{
	if (warnedList.isEmpty())
		return false;
	
	QPair<int, int> range;
	for (int i=0; i < warnedList.count(); ++i)
	{
		range = warnedList[i];
		if (pos >= range.first && pos <= range.second)
			return true;
	}
	return false;
}

int PageItem_TextFrame::getColumnSE(int col, bool start=true)
{
	if (col > this->Cols)
	{
		return -2;
	}
	if (SEColumnsMap.contains(col))
	{
		if (start)
			return SEColumnsMap.value(col).start;
		else
			return SEColumnsMap.value(col).end;
	}
	return -1;
}

bool PageItem_TextFrame::setColumnSE(int col, int Cstart, int Cend)
{
	SEColumn seCol;
	seCol.start = Cstart;
	seCol.end = Cend;
	if (SEColumnsMap.contains(col))
		return false;
	SEColumnsMap.insert(col,seCol);
	return true;
}
