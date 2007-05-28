/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

#include <qstring.h>
#include <qobject.h>

#include "gtmeasure.h"

double gtMeasure::ratio = 1.0;

void gtMeasure::init(scUnit u)
{
	ratio=unitGetRatioFromIndex((int)u);
}

double gtMeasure::convert(double value)
{
	return value / ratio;
}

double gtMeasure::convert(int value)
{
	return value / ratio;
}

double gtMeasure::convert2(double value)
{
	return value * ratio;
}

double gtMeasure::convert2(int value)
{
	return value * ratio;
}

double gtMeasure::parse(const QString& value)
{
	init(unitIndexFromString(value));
	return unitValueFromString(value);
}

double gtMeasure::convert(double value, scUnit from, scUnit to)
{
	return d2d(value, from, to);
}

double gtMeasure::convert(int value, scUnit from, scUnit to)
{
	return i2d(value, from, to);
}

double gtMeasure::d2d(double value, scUnit from, scUnit to)
{
	init(from);
	double tmp = convert(value);
	init(to);
	return convert2(tmp);
}


double gtMeasure::i2d(int value, scUnit from, scUnit to)
{
	init(from);
	double tmp = convert(value);
	init(to);
	return convert2(tmp);
}

double gtMeasure::qs2d(const QString& value, scUnit to)
{
	double tmp = convert(parse(value));
	init(to);
	return convert2(tmp);
}


