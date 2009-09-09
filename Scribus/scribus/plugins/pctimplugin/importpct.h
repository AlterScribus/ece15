/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPORTCVG_H
#define IMPORTCVG_H


#include "pluginapi.h"
#include "pageitem.h"
#include "sccolor.h"
#include "fpointarray.h"
#include <QList>
#include <QTransform>
#include <QMultiMap>
#include <QtGlobal>
#include <QObject>
#include <QString>
#include <QRect>

class MultiProgressDialog;
class ScribusDoc;
class Selection;
class TransactionSettings;

//! \brief Pct (Mac Pict) importer plugin
class PctPlug : public QObject
{
	Q_OBJECT

public:
	/*!
	\author Franz Schmid
	\date
	\brief Create the Pct importer window.
	\param fName QString
	\param flags combination of loadFlags
	\param showProgress if progress must be displayed
	\retval EPSPlug plugin
	*/
	PctPlug( ScribusDoc* doc, int flags );
	~PctPlug();

	/*!
	\author Franz Schmid
	\date
	\brief Perform import.
	\param fn QString
	\param trSettings undo transaction settings
	\param flags combination of loadFlags
	\param showProgress if progress must be displayed
	\retval bool true if import was ok
	 */
	bool import(QString fn, const TransactionSettings& trSettings, int flags, bool showProgress = true);

private:
	void parseHeader(QString fName, double &b, double &h);
	bool convert(QString fn);
	void parsePictVersion1(QDataStream &ts);
	void parsePictVersion2(QDataStream &ts);
	void alignStreamToWord(QDataStream &ts, uint len);
	void handleColorRGB(QDataStream &ts, bool back);
	void handlePolygon(QDataStream &ts, quint16 opCode);
	void handlePenSize(QDataStream &ts);
	void handleShortLine(QDataStream &ts);
	void handleShortLineFrom(QDataStream &ts);
	void handleLine(QDataStream &ts);
	void handleLineFrom(QDataStream &ts);
	void handleLineModeEnd();
	void finishItem(PageItem* ite);
	
	QList<PageItem*> Elements;
	int currentItemNr;
	QStack<QList<PageItem*> > groupStack;
	ColorList CustColors;
	double baseX, baseY;
	double docWidth;
	double docHeight;

	double LineW;
	QString CurrColorFill;
	QString CurrColorStroke;
	double CurrStrokeShade;
	double CurrFillShade;
	QRect currRect;
	QStringList importedColors;

	FPointArray Coords;
	QPoint currentPoint;
	bool lineMode;
	bool interactive;
	MultiProgressDialog * progressDialog;
	bool cancel;
	ScribusDoc* m_Doc;
	Selection* tmpSel;
	int importerFlags;
	int oldDocItemCount;
	QString baseFile;
	int pctVersion;

public slots:
	void cancelRequested() { cancel = true; }
};

#endif
