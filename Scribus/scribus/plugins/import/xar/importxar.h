/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPORTXAR_H
#define IMPORTXAR_H


#include "pluginapi.h"
#include "commonstrings.h"
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
#include <QStack>

class MultiProgressDialog;
class ScribusDoc;
class Selection;
class TransactionSettings;

class XarStyle
{
public:
	XarStyle() :
		dashOffset(0),
		FontFamily(""),
		FontStyle("normal"),
		FontWeight("normal"),
		FontStretch("normal"),
		itemText(""),
		FontSize(12.0),
		LineHeight(15.0),
		LineWidth(0.0),
		TextAlignment(0),
		FillCol(CommonStrings::None),
		fillRule(true),
		FillGradient(VGradient::linear),
		StrokeGradient(VGradient::linear),
		MaskGradient(VGradient::linear),
		FillGradientType(0),
		StrokeGradientType(0),
		GradFillX1(0),
		GradFillX2(0),
		GradFillY1(0),
		GradFillY2(0),
		GrScale(1),
		GrSkew(0),
		GradStrokeX1(0),
		GradStrokeX2(0),
		GradStrokeY1(0),
		GradStrokeY2(0),
		GradMask(0),
		GradMaskX1(0),
		GradMaskX2(0),
		GradMaskY1(0),
		GradMaskY2(0),
		GradMaskScale(1),
		GradMaskSkew(0),
		LWidth(0.5),
		PLineArt(Qt::SolidLine),
		PLineEnd(Qt::FlatCap),
		PLineJoin(Qt::BevelJoin),
		StrokeCol("Black"),
		FillOpacity(0.0),
		FillBlend(0),
		StrokeOpacity(0.0),
		StrokeBlend(0),
		clipPath(),
		fillPattern(""),
		patternScaleX(1),
		patternScaleY(1),
		patternOffsetX(0),
		patternOffsetY(0),
		patternRotation(0),
		patternSkewX(0),
		patternSkewY(0),
		maskPattern(""),
		patternMaskScaleX(1),
		patternMaskScaleY(1),
		patternMaskOffsetX(0),
		patternMaskOffsetY(0),
		patternMaskRotation(0),
		patternMaskSkewX(0),
		patternMaskSkewY(0),
		Elements()
		{
		}
	QVector<double> dashArray;
	double dashOffset;
	QString FontFamily;
	QString FontStyle;
	QString FontWeight;
	QString FontStretch;
	QString itemText;
	double FontSize;
	double LineHeight;
	double LineWidth;
	int TextAlignment;
	QString FillCol;
	bool fillRule;
	VGradient FillGradient;
	VGradient StrokeGradient;
	VGradient MaskGradient;
	int    FillGradientType;
	int    StrokeGradientType;
	double GradFillX1;
	double GradFillX2;
	double GradFillY1;
	double GradFillY2;
	double GrScale;
	double GrSkew;
	double GradStrokeX1;
	double GradStrokeX2;
	double GradStrokeY1;
	double GradStrokeY2;
	int    GradMask;
	double GradMaskX1;
	double GradMaskX2;
	double GradMaskY1;
	double GradMaskY2;
	double GradMaskScale;
	double GradMaskSkew;
	double LWidth;
	Qt::PenStyle PLineArt;
	Qt::PenCapStyle PLineEnd;
	Qt::PenJoinStyle PLineJoin;
	QString StrokeCol;
	double FillOpacity;
	int    FillBlend;
	double StrokeOpacity;
	int    StrokeBlend;
	FPointArray clipPath;
	QString fillPattern;
	double patternScaleX;
	double patternScaleY;
	double patternOffsetX;
	double patternOffsetY;
	double patternRotation;
	double patternSkewX;
	double patternSkewY;
	QString maskPattern;
	double patternMaskScaleX;
	double patternMaskScaleY;
	double patternMaskOffsetX;
	double patternMaskOffsetY;
	double patternMaskRotation;
	double patternMaskSkewX;
	double patternMaskSkewY;
	QList<PageItem*> Elements;
};

//! \brief Xar (Xara) importer plugin
class XarPlug : public QObject
{
	Q_OBJECT

public:
	/*!
	\author Franz Schmid
	\date
	\brief Create the Xar importer window.
	\param fName QString
	\param flags combination of loadFlags
	\param showProgress if progress must be displayed
	\retval EPSPlug plugin
	*/
	XarPlug( ScribusDoc* doc, int flags );
	~XarPlug();

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
	void parseHeader(QString fName, double &x, double &y, double &b, double &h);
	bool convert(QString fn);
	void parseXar(QDataStream &ts);
	void handleTags(quint32 tag, quint32 dataLen, QDataStream &ts);
	void handleTextFontSize(QDataStream &ts);
	void defineTextFontFace(QDataStream &ts, quint32 dataLen);
	void handleTextFont(QDataStream &ts);
	void handleTextString(QDataStream &ts, quint32 dataLen);
	void handleTextChar(QDataStream &ts);
	void handleLineInfo(QDataStream &ts);
	void handleTextAlignment(quint32 tag);
	void endTextLine();
	void startSimpleText(QDataStream &ts, quint32 dataLen);
	void startComplexText(QDataStream &ts, quint32 dataLen);
	void handleFillRule(QDataStream &ts);
	void handleLineEnd(QDataStream &ts);
	void handleLineJoin(QDataStream &ts);
	void handleQuickShapeSimple(QDataStream &ts, quint32 dataLen);
	void handleFlatFillTransparency(QDataStream &ts);
	void handleSimpleGradientTransparency(QDataStream &ts, quint32 dataLen, bool linear);
	void handleSimpleGradientTransparencySkewed(QDataStream &ts, quint32 dataLen);
	void handleEllipticalGradientTransparency(QDataStream &ts, quint32 dataLen);
	void handleBitmapTransparency(QDataStream &ts, quint32 dataLen);
	int  convertBlendMode(int val);
	void handleSimpleGradientElliptical(QDataStream &ts, quint32 dataLen);
	void handleMultiGradientElliptical(QDataStream &ts);
	void handleMultiGradientSkewed(QDataStream &ts);
	void handleMultiGradient(QDataStream &ts, bool linear);
	void handleSimpleGradientSkewed(QDataStream &ts, quint32 dataLen);
	void handleSimpleGradient(QDataStream &ts, quint32 dataLen, bool linear);
	void handleBitmapFill(QDataStream &ts, quint32 dataLen);
	void handleContoneBitmapFill(QDataStream &ts, quint32 dataLen);
	void handleBitmap(QDataStream &ts);
	void defineBitmap(QDataStream &ts, quint32 dataLen, quint32 tag);
	void handleLineColor(QDataStream &ts);
	void handleLineWidth(QDataStream &ts);
	void handleFlatLineTransparency(QDataStream &ts);
	void handleFlatFill(QDataStream &ts);
	void createRectangleItem(QDataStream &ts, bool ellipse = false);
	void createSimilarItem(QDataStream &ts);
	void createPolylineItem(int type);
	void createPolygonItem(int type);
	void createGroupItem();
	void createClipItem();
	void finishClip();
	void finishItem(int z);
	bool handlePathRel(QDataStream &ts, quint32 len);
	void handleLayerInfo(QDataStream &ts);
	void handleSpreadInfo(QDataStream &ts);
	void handleComplexColor(QDataStream &ts);
	void handleColorRGB(QDataStream &ts);
	double decodeColorComponent(quint32 data);
	double decodeFixed16(quint32 data);
	void readCoords(QDataStream &ts, double &x, double &y);
	void addToAtomic(quint32 dataLen, QDataStream &ts);
	void addGraphicContext();
	void popGraphicContext();
	
	int importerFlags;
	int recordCounter;
	int currentLayer;
	double baseX, baseY;
	double docWidth;
	double docHeight;
	double TextX;
	double TextY;
	bool firstLayer;
	bool interactive;
	bool cancel;
	QTransform textMatrix;
	struct XarColor
	{
		quint32 colorType;
		quint32 colorModel;
		quint32 colorRef;
		double component1;
		double component2;
		double component3;
		double component4;
		QString name;
	};
	struct XarGroup
	{
		int index;
		int gcStackDepth;
		bool clipping;
		PageItem* groupItem;
	};
	QByteArray imageData;
	QList<PageItem*> Elements;
	QList<quint32> atomicTags;
	QList<quint32> ignoreableTags;
	QMap<qint32, XarColor> XarColorMap;
	QMap<qint32, PageItem*> pathMap;
	QMap<QString, QString> patternMap;
	QMap<quint32, QString> patternRef;
	QMap<quint32, QString> fontRef;
	QStack<XarGroup> groupStack;
	QStack<XarStyle*>	m_gc;
	QString activeLayer;
	QStringList importedColors;
	FPointArray clipCoords;
	FPointArray Coords;
	MultiProgressDialog * progressDialog;
	ScribusDoc* m_Doc;
	Selection* tmpSel;

public slots:
	void cancelRequested() { cancel = true; }
};

#endif
