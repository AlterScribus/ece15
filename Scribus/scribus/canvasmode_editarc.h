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
                 canvasmode_editarc.h  -  description
                             -------------------
    begin                : Tue Jan 4 2011
    copyright            : (C) 2011 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

#ifndef CANVAS_MODE_EDITARC_H
#define CANVAS_MODE_EDITARC_H

#include <QObject>
#include <QTime>

#include "canvasmode.h"
#include "fpointarray.h"

class PageItem;
class ScribusMainWindow;
class ScribusView;


// This class encapsulate the old code for mouse interaction from scribusview.cpp

class CanvasMode_EditArc :  public CanvasMode
{	
public:
	CanvasMode_EditArc(ScribusView* view);

	virtual void enterEvent(QEvent *);
	virtual void leaveEvent(QEvent *);
	
	virtual void activate(bool);
	virtual void deactivate(bool);
	virtual void mouseDoubleClickEvent(QMouseEvent *m);
	virtual void mouseReleaseEvent(QMouseEvent *m);
	virtual void mouseMoveEvent(QMouseEvent *m);
	virtual void mousePressEvent(QMouseEvent *m);
	virtual void drawControls(QPainter* p);
	void drawControlsArc(QPainter* pp, PageItem* currItem);

private:

	typedef enum 
	{
		noPointDefined,
		useControlStart,
		useControlSweep,
		useControlHeight,
		useControlWidth
	} eArcPoint;

	inline bool GetItem(PageItem** pi);

	double Mxp, Myp;
	ScribusMainWindow* m_ScMW;
	bool m_cursorVisible;
	bool m_lastPosWasOverGuide;
	QPointF startPoint;
	QPointF endPoint;
	QPointF centerPoint;
	QPointF widthPoint;
	QPointF heightPoint;
	double startAngle;
	double endAngle;
	eArcPoint m_arcPoint;
};


#endif
