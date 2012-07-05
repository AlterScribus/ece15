/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          mesh.cpp  -  description
                             -------------------
    begin                : Mit Apr 21 2010
    copyright            : (C) 2010 by Franz Schmid
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
#include "mesh.h"
#include "fpointarray.h"

meshPoint::meshPoint():
undoManager(UndoManager::instance())
{
}

void meshPoint::moveRel(double dx, double dy)
{
	gridPoint += FPoint(dx, dy);
	controlTop += FPoint(dx, dy);
	controlBottom += FPoint(dx, dy);
	controlLeft += FPoint(dx, dy);
	controlRight += FPoint(dx, dy);
	controlColor += FPoint(dx, dy);
}

void meshPoint::moveAbs(double x, double y)
{
	FPoint delta = gridPoint - FPoint(x, y);
	gridPoint = FPoint(x, y);
	controlTop -= delta;
	controlBottom -= delta;
	controlLeft -= delta;
	controlRight -= delta;
	controlColor -= delta;
}

void meshPoint::transform(QTransform t)
{
	FPointArray gr;
	gr.addPoint(gridPoint);
	gr.addPoint(controlTop);
	gr.addPoint(controlBottom);
	gr.addPoint(controlLeft);
	gr.addPoint(controlRight);
	gr.addPoint(controlColor);
	gr.map(t);
	gridPoint = gr.point(0);
	controlTop = gr.point(1);
	controlBottom = gr.point(2);
	controlLeft = gr.point(3);
	controlRight = gr.point(4);
	controlColor = gr.point(5);
}

void meshPoint::resetTo(FPoint p)
{
	gridPoint = p;
	controlLeft = gridPoint;
	controlRight = gridPoint;
	controlTop = gridPoint;
	controlBottom = gridPoint;
	controlColor = gridPoint;
}

void meshPoint::restore(UndoState *state, bool isUndo)
{
	SimpleState *ss = dynamic_cast<SimpleState*>(state);
	if (ss)
	{
		if (ss->contains("TRANSPARENCY"))
			restoreTransparency(ss, isUndo);
		else if (ss->contains("SHADE"))
			restoreShade(ss, isUndo);
		else if (ss->contains("COLOR_NAME"))
			restoreColorName(ss, isUndo);
		else if (ss->contains("COLOR"))
			restoreColor(ss, isUndo);
	}
}

void meshPoint::restoreTransparency(SimpleState *state, bool isUndo)
{
	if(isUndo)
		transparency = state->getDouble("OLD");
	else
		transparency = state->getDouble("NEW");
}

void meshPoint::restoreShade(SimpleState *state, bool isUndo)
{
	if(isUndo)
		shade = state->getInt("OLD");
	else
		shade = state->getInt("NEW");
}

void meshPoint::restoreColorName(SimpleState *state, bool isUndo)
{
	if(isUndo)
		colorName = state->get("OLD");
	else
		colorName = state->get("NEW");
}

void meshPoint::restoreColor(SimpleState *ss, bool isUndo)
{
	ScItemState<QPair<QColor,QColor> > *state = dynamic_cast<ScItemState<QPair<QColor,QColor> > *>(ss);
	if(isUndo)
		color = state->getItem().first;
	else
		color = state->getItem().second;
}

void meshPoint::setShade(int x)
{
	if(shade == x)
		return;
	SimpleState *ss = new SimpleState(Um::GradVal,"",Um::IFill);
	ss->set("SHADE","shade");
	ss->set("OLD",shade);
	ss->set("NEW",x);
	undoManager->action(this,ss);
	shade = x;
}

void meshPoint::setColorName(QString x)
{
	if(colorName == x)
		return;
	SimpleState *ss = new SimpleState(Um::Rename,"",Um::IFont);
	ss->set("COLOR_NAME","color_name");
	ss->set("OLD",colorName);
	ss->set("NEW",x);
	undoManager->action(this,ss);
	colorName = x;
}

void meshPoint::setColor(QColor x)
{
	if(color == x)
		return;
	ScItemState<QPair<QColor,QColor> > *ss = new ScItemState<QPair<QColor,QColor> >(Um::GradVal,"",Um::IFill);
	ss->set("COLOR","color");
	ss->setItem(qMakePair(color,x));
	undoManager->action(this,ss);
	color = x;
}
