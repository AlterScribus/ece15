/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPORTPS_H
#define IMPORTPS_H

#include "qglobal.h"
#include "qobject.h"
#include "qstring.h"
#include "qvaluelist.h"
#include "qptrlist.h"

#include "pluginapi.h"
#include "pageitem.h"
#include "sccolor.h"
#include "fpointarray.h"

class MultiProgressDialog;
class ScribusDoc;

//! \brief POSTSCRIPT importer plugin
class EPSPlug : public QObject
{
	Q_OBJECT

public:
	/*!
	\author Franz Schmid
	\date
	\brief Create the EPS importer window.
	\param fName QString
	\param flags combination of loadFlags
	\retval EPSPlug plugin
	*/
	EPSPlug( ScribusDoc* doc, QString fName, int flags, bool showProgress = true );
	~EPSPlug() {};

private:
	/*!
	\author Franz Schmid
	\date
	\brief Does the conversion.
	\param fn QString
	\param x X position
	\param y Y position
	\param b double
	\param h double
	\retval bool true if conversion was ok
	 */
	bool convert(QString fn, double x, double y, double b, double h);
	/*!
	\author Franz Schmid
	\date
	\brief Parses the Output Ghostscript has created.
	*/
	void parseOutput(QString fn, bool eps);
	/*!
	\author Franz Schmid
	\param i FPointArray *
	\param vals QString
	*/
	void LineTo(FPointArray *i, QString vals);
	/*!
	\author Franz Schmid
	\param i FPointArray *
	\param vals QString
	 */
	void Curve(FPointArray *i, QString vals);
	/*!
	\author Franz Schmid
	\date
	\brief Returns a Color Name, if the Color doesn't exist it's created
	\param vals QString
	\param model a color model
	\retval QString Color Name
	*/
	QString parseColor(QString vals, colorModel model = colorModelCMYK);
	bool Image(QString vals);
	
	QPtrList<PageItem> Elements;
	ColorList CustColors;
	double LineW, Opacity, DashOffset, baseX, baseY;
	QValueList<double> DashPattern;
	QString CurrColor;
	FPointArray Coords;
	FPointArray clipCoords;
	bool FirstM, WasM, ClosedPath;
	PenCapStyle CapStyle;
	PenJoinStyle JoinStyle;
	bool interactive;
	MultiProgressDialog * progressDialog;
	bool cancel;
	ScribusDoc* m_Doc;

public slots:
	void cancelRequested() { cancel = true; }
};

#endif
