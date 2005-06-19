#include "qpainter.h"
#include "qcolor.h"
#include "qwmatrix.h"
#include "qpixmap.h"
#include "qstringlist.h"
#include "qmap.h"

#include "scfontmetrics.h"
#include "scfonts.h"
#include "scpainter.h"
#include "fpoint.h"
#include "fpointarray.h"
#include "util.h"

// this code contains a set of font related functions
// that don't really fit within ScFonts.

static FPoint firstP;
static bool FirstM;
static QMap<FT_ULong, QString> adobeGlyphNames;
static const char* table[] = {
//#include "glyphnames.txt.q"
					NULL};

// private functions
static void readAdobeGlyphNames();
static QString adobeGlyphName(FT_ULong charcode);
static int traceMoveto( FT_Vector *to, FPointArray *composite );
static int traceLineto( FT_Vector *to, FPointArray *composite );
static int traceQuadraticBezier( FT_Vector *control, FT_Vector *to, FPointArray *composite );
static int traceCubicBezier( FT_Vector *p, FT_Vector *q, FT_Vector *to, FPointArray *composite );

FT_Outline_Funcs OutlineMethods =
    {
        (FT_Outline_MoveTo_Func) traceMoveto,
        (FT_Outline_LineTo_Func) traceLineto,
        (FT_Outline_ConicTo_Func) traceQuadraticBezier,
        (FT_Outline_CubicTo_Func) traceCubicBezier,
        0,
        0
    };

int setBestEncoding(FT_Face face)
{
	FT_ULong  charcode;
	FT_UInt   gindex;
	bool foundEncoding = false;
	int countUniCode = 0;
	int chmapUniCode = 0;
	int chmapCustom = 0;
	int retVal = 0;
	FT_CharMap defaultEncoding = face->charmap;
	for(int u = 0; u < face->num_charmaps; u++)
	{
		if (face->charmaps[u]->encoding == FT_ENCODING_UNICODE )
		{
			FT_Set_Charmap(face, face->charmaps[u]);
			chmapUniCode = u;
			gindex = 0;
			charcode = FT_Get_First_Char( face, &gindex );
			while ( gindex != 0 )
			{
				countUniCode++;
				charcode = FT_Get_Next_Char( face, charcode, &gindex );
			}
		}
		if (face->charmaps[u]->encoding == FT_ENCODING_ADOBE_CUSTOM)
		{
			chmapCustom = u;
			foundEncoding = true;
			retVal = 1;
			break;
		}
		else if (face->charmaps[u]->encoding == FT_ENCODING_MS_SYMBOL)
		{
			chmapCustom = u;
			foundEncoding = true;
			retVal = 2;
			break;
		}
	}
	if (countUniCode >= face->num_glyphs-1)
	{
		FT_Set_Charmap(face, face->charmaps[chmapUniCode]);
		retVal = 0;
	}
	else if (foundEncoding)
		FT_Set_Charmap(face, face->charmaps[chmapCustom]);
	else
	{
		FT_Set_Charmap(face, defaultEncoding);
		retVal = 0;
	}
	return retVal;
}

FPointArray traceChar(FT_Face face, uint chr, int chs, double *x, double *y, bool *err)
{
	bool error = false;
	FT_UInt glyphIndex;
	//AV: not threadsave, but tracechar is only used in ReadMetrics() and fontSample()
	static FPointArray pts; 
	FPointArray pts2;
	pts.resize(0);
	pts2.resize(0);
	firstP = FPoint(0,0);
	FirstM = true;
	error = FT_Set_Char_Size( face, 0, chs*64, 72, 72 );
	if (error)
	{
		*err = error;
		return pts2;
	}
	glyphIndex = FT_Get_Char_Index(face, chr);
	if (glyphIndex == 0)
	{
		*err = true;
		return pts2;
	}
	error = FT_Load_Glyph( face, glyphIndex, FT_LOAD_NO_HINTING | FT_LOAD_NO_BITMAP );
	if (error)
	{
		*err = error;
		return pts2;
	}
	error = FT_Outline_Decompose(&face->glyph->outline, &OutlineMethods, reinterpret_cast<void*>(&pts));
	if (error)
	{
		*err = error;
		return pts2;
	}
	*x = face->glyph->metrics.horiBearingX / 64.0;
	*y = face->glyph->metrics.horiBearingY / 64.0;
	QWMatrix ma;
	ma.scale(1, -1);
	pts.map(ma);
	pts.translate(0, chs);
	pts2.putPoints(0, pts.size()-2, pts, 0);

	return pts2;
}

QPixmap FontSample(Foi * fnt, int s, QString ts, QColor back, bool force)
{
	FT_Face face;
	FT_Library library;
	double x, y, ymax;
	bool error;
	int  pen_x;
	FPoint gp;
	error = FT_Init_FreeType( &library );
	error = FT_New_Face( library, fnt->Datei, fnt->faceIndex, &face );
	int encode = setBestEncoding(face);
	double uniEM = static_cast<double>(face->units_per_EM);
	int h = qRound(face->height / uniEM) * s + 1;
	double a = static_cast<double>(face->descender) / uniEM * s + 1;
	int w = qRound((face->bbox.xMax - face->bbox.xMin) / uniEM) * s * (ts.length()+1);
	if (w < 1)
		w = s * (ts.length()+1);
	if (h < 1)
		h = s;
	QPixmap pm(w, h);
	pm.fill();
	pen_x = 0;
	ymax = 0.0;
	ScPainter *p = new ScPainter(&pm, pm.width(), pm.height());
	p->setFillMode(1);
	p->setLineWidth(0.0);
	p->setBrush(back);
	p->drawRect(0.0, 0.0, static_cast<double>(w), static_cast<double>(h));
	p->setBrush(Qt::black);
	FPointArray gly;
	uint dv;
	dv = ts[0].unicode();
	error = false;
	gly = traceChar(face, dv, s, &x, &y, &error);
	if (((encode != 0) || (error)) && (!force))
	{
		error = false;
		FT_ULong  charcode;
		FT_UInt gindex;
		gindex = 0;
		charcode = FT_Get_First_Char(face, &gindex );
		for (uint n = 0; n < ts.length(); ++n)
		{
			gly = traceChar(face, charcode, s, &x, &y, &error);
			if (error)
				break;
			if (gly.size() > 3)
			{
				gly.translate(static_cast<double>(pen_x) / 64.0, a);
				gp = getMaxClipF(&gly);
				ymax = QMAX(ymax, gp.y());
				p->setupPolygon(&gly);
				p->fillPath();
			}
			pen_x += face->glyph->advance.x;
			charcode = FT_Get_Next_Char(face, charcode, &gindex );
			if (gindex == 0)
				break;
		}
	}
	else
	{
		for (uint n = 0; n < ts.length(); ++n)
		{
			dv = ts[n].unicode();
			error = false;
			gly = traceChar(face, dv, s, &x, &y, &error);
			if (gly.size() > 3)
			{
				gly.translate(static_cast<double>(pen_x) / 64.0, a);
				gp = getMaxClipF(&gly);
				ymax = QMAX(ymax, gp.y());
				p->setupPolygon(&gly);
				p->fillPath();
			}
			pen_x += face->glyph->advance.x;
		}
	}
	p->end();
	pm.resize(QMIN(qRound(gp.x()), w), QMIN(qRound(ymax), h));
	delete p;
	FT_Done_FreeType( library );
	return pm;
}

/** Same as FontSample() with \n strings support added.
09/26/2004 petr vanek
*/
QPixmap fontSamples(Foi * fnt, int s, QString ts, QColor back)
{
	QStringList lines = QStringList::split("\n", ts);
	QPixmap ret(640, 480);
	QPixmap sample;
	QPainter *painter = new QPainter(&ret);
	int y = 0;
	int x = 0;
	ret.fill(back);
	for ( QStringList::Iterator it = lines.begin(); it != lines.end(); ++it )
	{
		sample = FontSample(fnt, s, *it, back);
		if (!sample.isNull())
			painter->drawPixmap(0, y, sample, 0, 0);
		y = y + sample.height();
		if (x < sample.width())
			x = sample.width();
	} // for
	delete(painter);
	QPixmap final(x, y);
	if ((x != 0) && (y != 0))
	{
		QPainter *fpainter = new QPainter(&final);
		fpainter->drawPixmap(0, 0, ret, 0, 0, x, y);
		delete(fpainter);
	}
	return final;
}

bool GlyNames(Foi * fnt, QMap<uint, QString> *GList)
{
	bool error;
	char buf[50];
	FT_Library library;
	FT_Face face;
	FT_ULong  charcode;
	FT_UInt gindex;
	error = FT_Init_FreeType(&library);
	error = FT_New_Face(library, fnt->Datei, fnt->faceIndex, &face);
	setBestEncoding(face);
	gindex = 0;
	charcode = FT_Get_First_Char(face, &gindex );
	const bool hasPSNames = FT_HAS_GLYPH_NAMES(face);
	if (adobeGlyphNames.empty())
		readAdobeGlyphNames();
	while (gindex != 0)
	{
		bool notfound = true;
		if (hasPSNames)
			notfound = FT_Get_Glyph_Name(face, gindex, &buf, 50);

		// just in case FT gives empty string or ".notdef"
		// no valid glyphname except ".notdef" starts with '.'		
		if (notfound || buf[0] == '\0' || buf[0] == '.')
			GList->insert(charcode, adobeGlyphName(charcode));
		else
			GList->insert(charcode, QString(reinterpret_cast<char*>(buf)));
			
		charcode = FT_Get_Next_Char(face, charcode, &gindex );
	}
	FT_Done_FreeType( library );
	return true;
}

bool GlyIndex(Foi * fnt, QMap<uint, PDFlib::GlNamInd> *GListInd)
{
	struct PDFlib::GlNamInd gln;
	bool error;
	char buf[50];
	FT_Library library;
	FT_Face face;
	FT_ULong  charcode;
	FT_UInt   gindex;
	uint counter1 = 32;
	uint counter2 = 0;
	error = FT_Init_FreeType(&library);
	error = FT_New_Face(library, fnt->Datei, fnt->faceIndex, &face);
	setBestEncoding(face);
	gindex = 0;
	charcode = FT_Get_First_Char(face, &gindex );
	const bool hasPSNames = FT_HAS_GLYPH_NAMES(face);
	if (adobeGlyphNames.empty())
		readAdobeGlyphNames();
	while (gindex != 0)
	{
		bool notfound = true;
		if (hasPSNames)
			notfound = FT_Get_Glyph_Name(face, gindex, buf, 50);

		// just in case FT gives empty string or ".notdef"
		// no valid glyphname except ".notdef" starts with '.'		
		if (notfound || buf[0] == '\0' || buf[0] == '.')
			gln.Name = "/" + adobeGlyphName(charcode);
		else
			gln.Name = "/" + QString(buf);

		gln.Code = counter1 + counter2;
		GListInd->insert(charcode, gln);
		charcode = FT_Get_Next_Char(face, charcode, &gindex );
		counter1++;
		if (counter1 > 255)
		{
			counter1 = 32;
			counter2 += 0x100;
		}
	}
	FT_Done_FreeType( library );
	return true;
}

static int traceMoveto( FT_Vector *to, FPointArray *composite )
{
	double tox = ( to->x / 64.0 );
	double toy = ( to->y / 64.0 );
	if (!FirstM)
	{
		composite->addPoint(firstP);
		composite->addPoint(firstP);
		composite->setMarker();
	}
	else
		FirstM = false;
	composite->addPoint(tox, toy);
	composite->addPoint(tox, toy);
	firstP.setXY(tox, toy);
	return 0;
}

static int traceLineto( FT_Vector *to, FPointArray *composite )
{
	double tox = ( to->x / 64.0 );
	double toy = ( to->y / 64.0 );
	if ( !composite->hasLastQuadPoint(tox, toy, tox, toy, tox, toy, tox, toy))
		composite->addQuadPoint(tox, toy, tox, toy, tox, toy, tox, toy);
	return 0;
}

static int traceQuadraticBezier( FT_Vector *control, FT_Vector *to, FPointArray *composite )
{
	double x1 = ( control->x / 64.0 );
	double y1 = ( control->y / 64.0 );
	double x2 = ( to->x / 64.0 );
	double y2 = ( to->y / 64.0 );
	if ( !composite->hasLastQuadPoint(x2, y2, x1, y1, x2, y2, x2, y2))
		composite->addQuadPoint(x2, y2, x1, y1, x2, y2, x2, y2);
	return 0;
}

static int traceCubicBezier( FT_Vector *p, FT_Vector *q, FT_Vector *to, FPointArray *composite )
{
	double x1 = ( p->x / 64.0 );
	double y1 = ( p->y / 64.0 );
	double x2 = ( q->x / 64.0 );
	double y2 = ( q->y / 64.0 );
	double x3 = ( to->x / 64.0 );
	double y3 = ( to->y / 64.0 );
	if ( !composite->hasLastQuadPoint(x3, y3, x2, y2, x3, y3, x3, y3) )
	{
		composite->setPoint(composite->size()-1, FPoint(x1, y1));
		composite->addQuadPoint(x3, y3, x2, y2, x3, y3, x3, y3);
	}
	return 0;
}

/// init the Adobe Glyph List
void readAdobeGlyphNames() {
	adobeGlyphNames.clear();
	QRegExp pattern("(\\w*);([0-9A-Fa-f]{4})");
	for (uint i=0; table[i]; ++i) {
		if (pattern.search(table[i]) >= 0) {
			FT_ULong unicode = pattern.cap(2).toULong(0, 16);
			qDebug("%s", QString("reading glyph name %1 fo unicode %2(%3)").arg(pattern.cap(1)).arg(unicode).arg(pattern.cap(2)).ascii());
			adobeGlyphNames[unicode] = pattern.cap(1);
		}
	}
}


/// if in AGL, use that name, else use "uni1234" or "u12345"
QString adobeGlyphName(FT_ULong charcode) {
	static const char HEX[] = "0123456789ABCDEF";
	QString result = adobeGlyphNames[charcode];
	if (result.length() == 0 && charcode < 0x10000) {
		result = QString("uni") + HEX[charcode>>12 & 0xF] 
		                        + HEX[charcode>> 8 & 0xF] 
		                        + HEX[charcode>> 4 & 0xF] 
		                        + HEX[charcode     & 0xF];
	}
	else if (result.length() == 0) {
		result = QString("u");
		for (int i= 28; i >= 0; i-=4) {
			if (charcode & (0xF << i))
				result += HEX[charcode >> i & 0xF];
		}
	}
	return result;
}

