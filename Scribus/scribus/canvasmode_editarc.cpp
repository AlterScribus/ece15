/*
 For general Scribus (>=1.3.2) copyright and licensing information please refer
 to the COPYING file provided with the program. Following this notice may exist
 a copyright and/or license notice that predates the release of Scribus 1.3.2
 for which a new license (GPL+exception) is in place.
 */
/***************************************************************************
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/
/***************************************************************************
                 canvasmode_editarc.cpp  -  description
                             -------------------
    begin                : Tue Jan 4 2011
    copyright            : (C) 2011 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/


#include "canvasmode_editarc.h"

#include <QApplication>
#include <QButtonGroup>
#include <QCheckBox>
#include <QCursor>
#include <QEvent>
#include <QMessageBox>
#include <QMouseEvent>
#include <QPainterPath>
#include <QPoint>
#include <QRect>
#include <QTimer>
#include <QWidgetAction>
#include <QDebug>

#include "appmodes.h"
#include "canvas.h"
#include "fpoint.h"
#include "fpointarray.h"
#include "hyphenator.h"
#include "pageitem_arc.h"
#include "prefscontext.h"
#include "prefsfile.h"
#include "prefsmanager.h"
#include "scribus.h"
#include "scribusXml.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "selection.h"
#include "ui/aligndistribute.h"
#include "ui/contextmenu.h"
#include "ui/pageselector.h"
#include "ui/propertiespalette.h"
#include "undomanager.h"
#include "units.h"
#include "util.h"
#include "util_icon.h"
#include "util_math.h"

CanvasMode_EditArc::CanvasMode_EditArc(ScribusView* view) : CanvasMode(view), m_ScMW(view->m_ScMW) 
{
	Mxp = Myp = -1;
	m_blockUpdateFromItem = 0;
	m_arcPoint = noPointDefined;
}

inline bool CanvasMode_EditArc::GetItem(PageItem** pi)
{ 
	*pi = m_doc->m_Selection->itemAt(0);
	return (*pi) != NULL;
}

void CanvasMode_EditArc::drawControls(QPainter* p)
{
	p->save();
	if (m_canvas->m_viewMode.operItemMoving)
	{
		drawOutline(p);
	}
	else
	{
		drawSelection(p, false);
	}
	if (m_doc->appMode == modeEditArc)
	{
		drawControlsArc(p, m_doc->m_Selection->itemAt(0));
	}
	p->restore();
}

void CanvasMode_EditArc::drawControlsArc(QPainter* psx, PageItem* currItem)
{
	QPen p1b = QPen(Qt::blue, 1.0 / m_canvas->m_viewMode.scale, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
	QPen p1bd = QPen(Qt::blue, 1.0 / m_canvas->m_viewMode.scale, Qt::DotLine, Qt::FlatCap, Qt::MiterJoin);
	QPen p8b = QPen(Qt::blue, 8.0 / m_canvas->m_viewMode.scale, Qt::SolidLine, Qt::RoundCap, Qt::MiterJoin);
	QPen p8r = QPen(Qt::red, 8.0 / m_canvas->m_viewMode.scale, Qt::SolidLine, Qt::RoundCap, Qt::MiterJoin);
	psx->setTransform(currItem->getTransform(), true);
	psx->setPen(p1b);
	psx->setBrush(Qt::NoBrush);
	QPainterPath pp;
	PageItem_Arc* item = currItem->asArc();
	QPointF mPoint = item->PoLine.pointQF(0);
	double nWidth = mPoint.x() - widthPoint.x();
	double nHeight = mPoint.y() - heightPoint.y();
	double nSweep = endAngle - startAngle;
	if (nSweep < 0)
		nSweep += 360;
	pp.moveTo(mPoint);
	pp.arcTo(QRectF(mPoint.x() - nWidth, mPoint.y() - nHeight, nWidth * 2, nHeight * 2), startAngle, nSweep);
	pp.closeSubpath();
	psx->drawPath(pp);
	psx->setPen(p1bd);
	psx->drawLine(mPoint, widthPoint);
	psx->drawLine(mPoint, heightPoint);
	psx->setPen(p8b);
	if (m_arcPoint == useControlStart)
		psx->setPen(p8r);
	else
		psx->setPen(p8b);
	psx->drawPoint(startPoint);
	if (m_arcPoint == useControlSweep)
		psx->setPen(p8r);
	else
		psx->setPen(p8b);
	psx->drawPoint(endPoint);
	if (m_arcPoint == useControlWidth)
		psx->setPen(p8r);
	else
		psx->setPen(p8b);
	psx->drawPoint(widthPoint);
	if (m_arcPoint == useControlHeight)
		psx->setPen(p8r);
	else
		psx->setPen(p8b);
	psx->drawPoint(heightPoint);
}

void CanvasMode_EditArc::enterEvent(QEvent *)
{
	if (!m_canvas->m_viewMode.m_MouseButtonPressed)
	{
		setModeCursor();
	}
}

void CanvasMode_EditArc::leaveEvent(QEvent *e)
{
}


void CanvasMode_EditArc::activate(bool fromGesture)
{
	VectorDialog = new ArcVectorDialog(m_ScMW);
	m_canvas->m_viewMode.m_MouseButtonPressed = false;
	m_canvas->resetRenderMode();
	m_doc->DragP = false;
	m_doc->leaveDrag = false;
	m_canvas->m_viewMode.operItemMoving = false;
	m_canvas->m_viewMode.operItemResizing = false;
	m_view->MidButt = false;
	Mxp = Myp = -1;
	PageItem *currItem = m_doc->m_Selection->itemAt(0);
	PageItem_Arc* item = currItem->asArc();
	centerPoint = currItem->PoLine.pointQF(0);
	startPoint = currItem->PoLine.pointQF(3);
	endPoint = currItem->PoLine.pointQF(currItem->PoLine.size() - 4);
	widthPoint = QPointF(centerPoint.x() - item->arcWidth / 2.0, centerPoint.y());
	heightPoint = QPointF(centerPoint.x(), centerPoint.y() - item->arcHeight / 2.0);
	startAngle = item->arcStartAngle;
	endAngle = startAngle + item->arcSweepAngle;
	QLineF res = QLineF(centerPoint, startPoint);
	QLineF swe = QLineF(centerPoint, endPoint);
	VectorDialog->setValues(res.angle(), swe.angle(), item->arcHeight, item->arcWidth);
	VectorDialog->show();
	setModeCursor();
	if (fromGesture)
	{
		m_view->update();
	}
	connect(VectorDialog, SIGNAL(NewVectors(double, double, double, double)), this, SLOT(applyValues(double, double, double, double)));
	connect(VectorDialog, SIGNAL(endEdit()), this, SLOT(endEditing()));
	connect(VectorDialog, SIGNAL(paletteShown(bool)), this, SLOT(endEditing(bool)));
	connect(m_doc, SIGNAL(docChanged()), this, SLOT(updateFromItem()));
}

void CanvasMode_EditArc::updateFromItem()
{
	if (updateFromItemBlocked())
		return;
	PageItem *currItem = m_doc->m_Selection->itemAt(0);
	PageItem_Arc* item = currItem->asArc();
	centerPoint = currItem->PoLine.pointQF(0);
	startPoint = currItem->PoLine.pointQF(3);
	endPoint = currItem->PoLine.pointQF(currItem->PoLine.size() - 4);
	widthPoint = QPointF(centerPoint.x() - item->arcWidth / 2.0, centerPoint.y());
	heightPoint = QPointF(centerPoint.x(), centerPoint.y() - item->arcHeight / 2.0);
	startAngle = item->arcStartAngle;
	endAngle = startAngle + item->arcSweepAngle;
	QLineF res = QLineF(centerPoint, startPoint);
	QLineF swe = QLineF(centerPoint, endPoint);
	VectorDialog->setValues(res.angle(), swe.angle(), item->arcHeight, item->arcWidth);
	m_view->update();
}

void CanvasMode_EditArc::endEditing(bool active)
{
	if (!active)
		endEditing();
}

void CanvasMode_EditArc::endEditing()
{
	m_view->requestMode(modeNormal);
}

void CanvasMode_EditArc::applyValues(double start, double end, double height, double width)
{
	PageItem *currItem = m_doc->m_Selection->itemAt(0);
	PageItem_Arc *item = currItem->asArc();
	QTransform bb;
	bb.scale(height / width, 1.0);
	QLineF inp = QLineF(QPointF(width / 2.0, height / 2.0), QPointF(width, height / 2.0));
	inp.setAngle(start);
	QLineF res = bb.map(inp);
	inp.setAngle(end);
	QLineF ena = bb.map(inp);
	startAngle = res.angle();
	endAngle = ena.angle();
	double nSweep = endAngle - startAngle;
	if (nSweep < 0)
		nSweep += 360;
	double oldX = currItem->xPos();
	double oldY = currItem->yPos();
	FPointArray old = item->PoLine;
	QPainterPath ppr;
	ppr.moveTo(centerPoint.x() - width / 2.0, centerPoint.y() - height / 2.0);
	ppr.lineTo(centerPoint.x() + width / 2.0, centerPoint.y() - height / 2.0);
	ppr.lineTo(centerPoint.x() + width / 2.0, centerPoint.y() + height / 2.0);
	ppr.lineTo(centerPoint.x() - width / 2.0, centerPoint.y() + height / 2.0);
	ppr.closeSubpath();
	currItem->PoLine.fromQPainterPath(ppr, true);
	FPoint wh = getMaxClipF(&currItem->PoLine);
	currItem->setWidthHeight(wh.x(),wh.y());
	m_doc->AdjustItemSize(currItem);
	currItem->OldB2 = currItem->width();
	currItem->OldH2 = currItem->height();
	QPainterPath pp;
	pp.moveTo(width / 2.0, height / 2.0);
	pp.arcTo(QRectF(0, 0, width, height), startAngle, nSweep);
	pp.closeSubpath();
	currItem->PoLine.fromQPainterPath(pp, true);
	if(UndoManager::undoEnabled())
	{
		ScItemState<QPair<FPointArray, FPointArray> > *ss = new ScItemState<QPair<FPointArray, FPointArray> >(Um::EditArc,"",Um::IPolygon);
		ss->set("ARC","arc");
		ss->set("OLD_WIDTH",item->arcWidth);
		ss->set("NEW_WIDTH",width);
		ss->set("OLD_XPOS",oldX);
		ss->set("OLD_YPOS",oldY);
		ss->set("OLD_HEIGHT",item->arcHeight);
		ss->set("NEW_HEIGHT",height);
		ss->set("OLD_START",item->arcStartAngle);
		ss->set("NEW_START",startAngle);
		ss->set("OLD_SWEEP",item->arcSweepAngle);
		ss->set("NEW_SWEEP",nSweep);
		ss->setItem(qMakePair(old,item->PoLine));
		ss->set("NEW_XPOS",item->xPos());
		ss->set("NEW_YPOS",item->yPos());
		undoManager->action(currItem,ss);
	}
	item->arcStartAngle = startAngle;
	item->arcSweepAngle = nSweep;
	item->arcWidth = width;
	item->arcHeight = height;
	startPoint = currItem->PoLine.pointQF(2);
	endPoint = currItem->PoLine.pointQF(currItem->PoLine.size() - 4);
	centerPoint = currItem->PoLine.pointQF(0);
	widthPoint = QPointF(centerPoint.x() - item->arcWidth / 2.0, centerPoint.y());
	heightPoint = QPointF(centerPoint.x(), centerPoint.y() - item->arcHeight / 2.0);
	QTransform itemMatrix = currItem->getTransform();
	m_doc->regionsChanged()->update(itemMatrix.mapRect(QRectF(0, 0, currItem->width(), currItem->height())).adjusted(-currItem->width() / 2.0, -currItem->height() / 2.0, currItem->width(), currItem->height()));
}

void CanvasMode_EditArc::deactivate(bool forGesture)
{
	disconnect(VectorDialog, SIGNAL(paletteShown(bool)), this, SLOT(endEditing(bool)));
	VectorDialog->close();
	delete VectorDialog;
	m_view->setRedrawMarkerShown(false);
	m_arcPoint = noPointDefined;
	disconnect(m_doc, SIGNAL(docChanged()), this, SLOT(updateFromItem()));
}

void CanvasMode_EditArc::mouseDoubleClickEvent(QMouseEvent *m)
{
	m->accept();
	m_canvas->m_viewMode.m_MouseButtonPressed = false;
	m_canvas->resetRenderMode();
	m_view->requestMode(modeNormal);
}


void CanvasMode_EditArc::mouseMoveEvent(QMouseEvent *m)
{
	const FPoint mousePointDoc = m_canvas->globalToCanvas(m->globalPos());
	m->accept();
	double newX = mousePointDoc.x();
	double newY = mousePointDoc.y();
	if (m_canvas->m_viewMode.m_MouseButtonPressed && m_view->moveTimerElapsed())
	{
		PageItem *currItem = m_doc->m_Selection->itemAt(0);
		QTransform itemMatrix = currItem->getTransform();
		QPointF sPoint = currItem->PoLine.pointQF(0);
		QPointF smPoint = itemMatrix.map(sPoint);
		QLineF stLinA = QLineF(smPoint, QPointF(Mxp, Myp));
		QLineF stLinM = QLineF(smPoint, QPointF(newX, newY));
		double deltaAngle = stLinM.angle() - stLinA.angle();
		QPainterPath pp;
		if (m_arcPoint == useControlStart)
			startAngle += deltaAngle;
		else if (m_arcPoint == useControlSweep)
			endAngle += deltaAngle;
		else if (m_arcPoint == useControlHeight)
			heightPoint = QPointF(heightPoint.x(), heightPoint.y() + (newY - Myp));
		else if (m_arcPoint == useControlWidth)
			widthPoint = QPointF(widthPoint.x() + (newX - Mxp), widthPoint.y());
		double nSweep = endAngle - startAngle;
		if (nSweep < 0)
			nSweep += 360;
		double nWidth = sPoint.x() - widthPoint.x();
		double nHeight = sPoint.y() - heightPoint.y();
		if ((nWidth > 0) && (nHeight > 0))
		{
			pp.moveTo(sPoint);
			pp.arcTo(QRectF(sPoint.x() - nWidth, sPoint.y() - nHeight, nWidth * 2, nHeight * 2), startAngle, nSweep);
			pp.closeSubpath();
			FPointArray ar;
			ar.fromQPainterPath(pp);
			if (m_arcPoint == useControlStart)
			{
				startPoint = ar.pointQF(2);
				QLineF stLinA = QLineF(smPoint, itemMatrix.map(startPoint));
				m_canvas->displayRotHUD(m->globalPos(), 360.0 - stLinA.angle());
			}
			else if (m_arcPoint == useControlSweep)
			{
				endPoint = ar.pointQF(ar.size() - 4);
				QLineF stLinA = QLineF(smPoint, itemMatrix.map(endPoint));
				m_canvas->displayRotHUD(m->globalPos(), 360.0 - stLinA.angle());
			}
			QLineF res = QLineF(centerPoint, startPoint);
			QLineF swe = QLineF(centerPoint, endPoint);
			VectorDialog->setValues(res.angle(), swe.angle(), nHeight * 2, nWidth * 2);
			blockUpdateFromItem(true);
			currItem->update();
			blockUpdateFromItem(false);
			m_doc->regionsChanged()->update(itemMatrix.mapRect(QRectF(0, 0, currItem->width(), currItem->height())).adjusted(-currItem->width() / 2.0, -currItem->height() / 2.0, currItem->width(), currItem->height()));
		}
	}
	Mxp = newX;
	Myp = newY;
}

void CanvasMode_EditArc::mousePressEvent(QMouseEvent *m)
{
	const FPoint mousePointDoc = m_canvas->globalToCanvas(m->globalPos());

	m_canvas->PaintSizeRect(QRect());
	m_canvas->m_viewMode.m_MouseButtonPressed = true;
	m_canvas->m_viewMode.operItemMoving = false;
	m_view->HaveSelRect = false;
	m_doc->DragP = false;
	m_doc->leaveDrag = false;
	m->accept();
	m_view->registerMousePress(m->globalPos());
	Mxp = mousePointDoc.x(); //m->x();
	Myp = mousePointDoc.y(); //m->y();
	if (m->button() == Qt::MidButton)
	{
		m_view->MidButt = true;
		if (m->modifiers() & Qt::ControlModifier)
			m_view->DrawNew();
		return;
	}
	PageItem *currItem = m_doc->m_Selection->itemAt(0);
	QTransform itemMatrix = currItem->getTransform();
	QPointF stPoint = startPoint;
	stPoint = itemMatrix.map(stPoint);
	QPointF swPoint = endPoint;
	swPoint = itemMatrix.map(swPoint);
	QPointF shPoint = heightPoint;
	shPoint = itemMatrix.map(shPoint);
	QPointF sPoint = widthPoint;
	sPoint = itemMatrix.map(sPoint);
	if (m_canvas->hitsCanvasPoint(m->globalPos(), stPoint))
		m_arcPoint = useControlStart;
	else if (m_canvas->hitsCanvasPoint(m->globalPos(), swPoint))
		m_arcPoint = useControlSweep;
	else if (m_canvas->hitsCanvasPoint(m->globalPos(), shPoint))
		m_arcPoint = useControlHeight;
	else if (m_canvas->hitsCanvasPoint(m->globalPos(), sPoint))
		m_arcPoint = useControlWidth;
	else
		m_arcPoint = noPointDefined;
	m_canvas->m_viewMode.m_MouseButtonPressed = true;
	m_view->setCursor(QCursor(Qt::CrossCursor));
	m_doc->regionsChanged()->update(itemMatrix.mapRect(QRectF(0, 0, currItem->width(), currItem->height())).adjusted(-currItem->width() / 2.0, -currItem->height() / 2.0, currItem->width(), currItem->height()));
}

void CanvasMode_EditArc::mouseReleaseEvent(QMouseEvent *m)
{
	m_canvas->m_viewMode.m_MouseButtonPressed = false;
	m_canvas->resetRenderMode();
	m->accept();
	PageItem *currItem = m_doc->m_Selection->itemAt(0);
	PageItem_Arc* item = currItem->asArc();
	QPointF mPoint = item->PoLine.pointQF(0);
	if ((m_arcPoint == useControlStart) || (m_arcPoint == useControlSweep) || (m_arcPoint == useControlHeight) || (m_arcPoint == useControlWidth))
	{
		QTransform bb;
		bb.scale(item->arcHeight / item->arcWidth, 1.0);
		QLineF inp = QLineF(QPointF(item->arcWidth / 2.0, item->arcHeight / 2.0), QPointF(item->arcWidth, item->arcHeight / 2.0));
		double start = inp.angleTo(QLineF(QPointF(item->arcWidth / 2.0, item->arcHeight / 2.0),startPoint));
		inp.setAngle(start);
		double end = inp.angleTo(QLineF(QPointF(item->arcWidth / 2.0, item->arcHeight / 2.0),endPoint));
		double nWidth = mPoint.x() - widthPoint.x();
		double nHeight = mPoint.y() - heightPoint.y();
		applyValues(start,end + start, 2.0 * nHeight, 2.0 * nWidth);
	}
	QTransform itemMatrix = currItem->getTransform();
	m_doc->regionsChanged()->update(itemMatrix.mapRect(QRectF(0, 0, currItem->width(), currItem->height())).adjusted(-currItem->width() / 2.0, -currItem->height() / 2.0, currItem->width(), currItem->height()));
}
