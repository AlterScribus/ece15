/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          mesh.h  -  description
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

#ifndef MESH_H
#define MESH_H

#include <QString>
#include <QColor>
#include <QTransform>
#include "fpoint.h"
#include "scribusapi.h"
#include "undoobject.h"
#include "undomanager.h"

class SCRIBUS_API meshPoint: public UndoObject
{
public:
	meshPoint();

	void moveRel(double dx, double dy);
	void moveAbs(double x, double y);
	void transform(QTransform t);
	void resetTo(FPoint p);
	void restore(UndoState *state, bool isUndo);

	//point
	FPoint gridPoint;
	FPoint controlTop;
	FPoint controlBottom;
	FPoint controlLeft;
	FPoint controlRight;
	FPoint controlColor;
	double transparency;
	int    shade;
	QString colorName;
	QColor  color;

	UndoManager *undoManager;

	//setter
	void setTransparency(double x);
	void setShade(int x);
	void setColorName(QString name);
	void setColor(QColor co);

	//restore
	void restoreTransparency(SimpleState *state, bool isUndo);
	void restoreShade(SimpleState *state, bool isUndo);
	void restoreColorName(SimpleState *state, bool isUndo);
	void restoreColor(SimpleState *state, bool isUndo);
};

struct meshGradientPatch
{
	meshPoint TL;
	meshPoint TR;
	meshPoint BL;
	meshPoint BR;
};

#endif
