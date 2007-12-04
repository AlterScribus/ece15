/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          util.cpp  -  description
                             -------------------
    begin                : Fri Sep 14 2001
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


#include <QBitmap>
#include <QByteArray>
#include <QCheckBox>
#include <QDomElement>
#include <QFile>
#include <QFileInfo>
#include <QImageReader>
#include <QList>
#include <QPixmap>
#include <QWidget>
#include <QDir>
#include <QCryptographicHash>

#include <cmath>
#include <algorithm>

#include "util.h"

#include "scpainter.h"
#include "scconfig.h"
#include "pageitem_textframe.h"

#if defined(_WIN32)
#if defined(_MSC_VER)
#define __STDC__ 1 // hack to get md5_buffer correctly identified
#endif
#include <valarray>
#include <windows.h>
#endif

// #include "md5.h"

#include "commonstrings.h"
#include "prefsmanager.h"
#include <QProcess>
#include "scmessagebox.h"
#include "scpixmapcache.h"
#include "scpaths.h"

extern "C"
{
#define XMD_H           // shut JPEGlib up
#if defined(Q_OS_UNIXWARE)
#  define HAVE_BOOLEAN  // libjpeg under Unixware seems to need this
#endif
#include <jpeglib.h>
#include <jerror.h>
#undef HAVE_STDLIB_H
#ifdef const
#  undef const          // remove crazy C hackery in jconfig.h
#endif
}

#include "pageitem.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include <zlib.h>


using namespace std;

void sDebug(QString message)
{
	qDebug("%s", message.toAscii().constData());
}

int System(const QString exename, const QStringList & args, const QString fileStdErr, const QString fileStdOut)
{
	QProcess proc;
	if (!fileStdOut.isEmpty())
		proc.setStandardOutputFile(fileStdOut);
	if (!fileStdErr.isEmpty())
		proc.setStandardErrorFile(fileStdErr);
	proc.start(exename, args);
	if (proc.waitForStarted(5000))
	{
		while (!proc.waitForFinished(5000))
		{
			qApp->processEvents();
		}
	}
	int ex = proc.exitCode();
	return ex;
}

// On Windows, return short path name, else return longPath;
QString getShortPathName(QString longPath)
{
	QString shortPath(longPath);
#if defined _WIN32
	QFileInfo fInfo(longPath);
	if (fInfo.exists())
	{
		WCHAR shortName[MAX_PATH + 1];
		// An error should not be blocking as ERROR_INVALID_PARAMETER can simply mean
		// that volume does not support 8.3 filenames, so return longPath in this case
		QString nativePath = QDir::convertSeparators(longPath);
		int ret = GetShortPathNameW((LPCWSTR) nativePath.utf16(), shortName, MAX_PATH);
		if (ret != ERROR_INVALID_PARAMETER && ret < MAX_PATH)
			shortPath = QString::fromUtf16((const ushort*) shortName);
	}
#endif
	return shortPath;
}

int copyFile(QString source, QString target)
{
	int bytesread;
	if ((source.isNull()) || (target.isNull()))
		return -1;
	if (source == target)
		return -1;
	QFile s(source);
	if (!s.exists())
		return -1;
	QFile t(target);
	QByteArray bb( 65536, ' ' );
	if (s.open(QIODevice::ReadOnly))
	{
		if (t.open(QIODevice::WriteOnly))
		{
			bytesread = s.read( bb.data(), bb.size() );
			while( bytesread > 0 )
			{
				t.write( bb.data(), bytesread );
				bytesread = s.read( bb.data(), bb.size() );
			}
			t.close();
		}
		s.close();
	}
	return 0;
}

int moveFile(QString source, QString target)
{
	if ((source.isNull()) || (target.isNull()))
		return -1;
	if (source == target)
		return -1;
	copyFile(source, target);
	QFile::remove(source);
	return 0;
}

QString GetAttr(QDomElement *el, QString at, QString def)
{
	return el->attribute(at, def);
}


// Legacy implementation of LoadText with incorrect
// handling of unicode data. This should be retired.
// Use loadRawText instead.
// FIXME XXX
//
bool loadText(QString filename, QString *Buffer)
{
	QFile f(filename);
	QFileInfo fi(f);
	if (!fi.exists())
		return false;
	bool ret;
	QByteArray bb(f.size(), ' ');
	if (f.open(QIODevice::ReadOnly))
	{
		f.read(bb.data(), f.size());
		f.close();
		for (int posi = 0; posi < bb.size(); ++posi)
			*Buffer += QChar(bb[posi]);
		/*
		int len = bb.size();
		int oldLen = Buffer->length();
		Buffer->setLength( oldLen + len + 1);
		// digged into Qt 3.3 sources to find that. Might break in Qt 4 -- AV
		unsigned short * ucsString = const_cast<unsigned short *>(Buffer->ucs2()) + oldLen;
		char * data = bb.data();
		for (uint posi = 0; posi < len; ++posi)
		*ucsString++ = *data++;
		*ucsString = 0;
		*/
		ret = true;
	}
	else
		ret = false;
	return ret;
}

bool loadRawText(const QString & filename, QByteArray & buf)
{
	bool ret = false;
	QFile f(filename);
	QFileInfo fi(f);
	if (fi.exists())
	{
		QByteArray tempBuf(f.size() + 1, ' ');
		if (f.open(QIODevice::ReadOnly))
		{
			unsigned int bytesRead = f.read(tempBuf.data(), f.size());
			tempBuf[bytesRead] = '\0';
			ret = bytesRead == f.size();
			if (ret)
				buf = tempBuf; // sharing makes this efficient
		}
	}
	if (f.isOpen())
		f.close();
	return ret;
}

bool loadRawBytes(const QString & filename, QByteArray & buf)
{
	bool ret = false;
	QFile f(filename);
	QFileInfo fi(f);
	if (fi.exists())
	{
		QByteArray tempBuf(f.size(), ' ');
		if (f.open(QIODevice::ReadOnly))
		{
			unsigned int bytesRead = f.read(tempBuf.data(), f.size());
			ret = bytesRead == f.size();
			if (ret)
				buf = tempBuf; // sharing makes this efficient
		}
	}
	if (f.isOpen())
		f.close();
	return ret;
}


QString CompressStr(QString *in)
{
	QString out = "";
	QByteArray bb(in->length(), ' ');
	if (bb.size() == in->length())
	{
		for (int ax = 0; ax < in->length(); ++ax)
		{
			// bb.insert(ax, in->at(ax)); JG monstruously inefficient due to frequent memory reallocation
			bb[ax] = in->at(ax).cell();
			assert(in->at(ax).row() == 0);
		}
		uLong exlen = (uLong)(bb.size() * 0.001 + 16) + bb.size();
		QByteArray bc(exlen, ' ');
		if( bc.size() == static_cast<qint32>(exlen) )
		{
			int errcode = compress2((Byte *)bc.data(), &exlen, (Byte *)bb.data(), uLong(bb.size()), 9);
			if (errcode != Z_OK)
			{
				qDebug("compress2 failed with code %i", errcode);
				out = *in;
			}
			else {
				for (uint cl = 0; cl < exlen; ++cl)
					out += QChar(bc[cl]);
			}
		}
		else
		{
			qDebug("insufficient memory to allocate %i bytes", in->length());
			out = *in;
		}
	}
	else
	{
		qDebug("insufficient memory to allocate %i bytes", in->length());
		out = *in;
	}
	return out;
}

QByteArray CompressArray(QByteArray *in)
{
	QByteArray out;
	uLong exlen = uint(in->size() * 0.001 + 16) + in->size();
	QByteArray temp(exlen, ' ');
	int errcode = compress2((Byte *)temp.data(), &exlen, (Byte *)in->data(), uLong(in->size()), 9);
	if (errcode != Z_OK)
	{
		qDebug("compress2 failed with code %i", errcode);
		out = *in;
	}
	else {
		temp.resize(exlen);
		out = temp;
	}
	return out;
}

char *toAscii85( quint32 value, bool& allZero )
{
	int digit, i;
	static char asciiVal[6];
	allZero = true;
    for (i = 0; i < 5; ++i) 
	{
		digit = value % 85;
		if (digit != 0)
			allZero = false;
		asciiVal[4-i] = digit + 33;
		value = (value - digit) / 85;
    }
	asciiVal[5] = 0;
	return asciiVal;
}

char *toHex( uchar u )
{
	static char hexVal[3];
	int i = 1;
	while ( i >= 0 )
	{
		ushort hex = (u & 0x000f);
		if ( hex < 0x0a )
			hexVal[i] = '0'+hex;
		else
			hexVal[i] = 'A'+(hex-0x0a);
		u = u >> 4;
		i--;
	}
	hexVal[2] = '\0';
	return hexVal;
}

QString String2Hex(QString *in, bool lang)
{
	int i = 0;
	QString out("");
	for( int xi = 0; xi < in->length(); ++xi )
	{
		// Qt4 .cell() added ???
		out += toHex(QChar(in->at(xi)).cell());
		++i;
		if ((i>40) && (lang))
		{
			out += '\n';
			i=0;
		}
	}
	return out;
}

QByteArray ComputeMD5Sum(QByteArray *in)
{
	return QCryptographicHash::hash(*in, QCryptographicHash::Md5);
//	QByteArray MDsum(16, ' ');
//	md5_buffer (in->data(), in->size(), reinterpret_cast<void*>(MDsum.data()));
//	return MDsum;
}

QString Path2Relative(QString Path, const QString& baseDir)
{
	QDir d(baseDir);
	return d.relativeFilePath(Path);
}

QString Relative2Path(QString File, const QString& baseDir)
{
	QString   absPath;
	QFileInfo fi(File);
	if (File.isEmpty())
		absPath = File;
	else if (fi.isRelative())
	{
		QDir d(baseDir);
		absPath = d.absoluteFilePath(File);
		absPath = QDir::cleanPath(absPath);
	}
	else
		absPath = File;
	return absPath;
}

/***************************************************************************
    begin                : Wed Oct 29 2003
    copyright            : (C) 2003 The Scribus Team
    email                : paul@all-the-johnsons.co.uk
 ***************************************************************************/
// check if the file exists, if it does, ask if they're sure
// return true if they're sure, else return false;

bool overwrite(QWidget *parent, QString filename)
{
	bool retval = true;
	QFileInfo fi(filename);
	if (fi.exists())
	{
		QString fn = QDir::convertSeparators(filename);
		int t = QMessageBox::warning(parent, QObject::tr("File exists"),
									 "<qt>"+ QObject::tr("A file named '%1' already exists.<br/>Do you want to replace it with the file you are saving?").arg(fn) +"</qt>",
											 QMessageBox::Ok | QMessageBox::Cancel, QMessageBox::Cancel);
		if (t == QMessageBox::Cancel)
			retval = false;
	}
	return retval;
}

void WordAndPara(PageItem* currItem, int *w, int *p, int *c, int *wN, int *pN, int *cN)
{
	QChar Dat = QChar(32);
	int para = 0;
	int ww = 0;
	int cc = 0;
	int paraN = 0;
	int wwN = 0;
	int ccN = 0;
	bool first = true;
	PageItem *nextItem = currItem;
	PageItem *nbl = currItem;
	while (nextItem != 0)
	{
		if (nextItem->prevInChain() != 0)
			nextItem = nextItem->prevInChain();
		else
			break;
	}
	while (nextItem != 0)
	{
		for (int a = qMax(nextItem->firstInFrame(),0); a <= nextItem->lastInFrame() && a < nextItem->itemText.length(); ++a)
		{
			QChar b = nextItem->itemText.text(a);
			if (b == SpecialChars::PARSEP)
			{
				para++;
			}
			if ((!b.isLetterOrNumber()) && (Dat.isLetterOrNumber()) && (!first))
			{
				ww++;
			}
			cc++;
			Dat = b;
			first = false;
		}
		nbl = nextItem;
		nextItem = nextItem->nextInChain();
	}
	if (nbl->frameOverflows()) {
		paraN++;
		for (int a = nbl->lastInFrame()+1; a < nbl->itemText.length(); ++a)
		{
			QChar b = nbl->itemText.text(a);
			if (b == SpecialChars::PARSEP)
			{
				paraN++;
			}
			if ((!b.isLetterOrNumber()) && (Dat.isLetterOrNumber()) && (!first))
			{
				wwN++;
			}
			ccN++;
			Dat = b;
			first = false;
		}
	}		
	else {
		para++;
	}
	if (Dat.isLetterOrNumber())
	{
		if (nbl->frameOverflows())
			wwN++;
		else
			ww++;
	}
	*w = ww;
	*p = para;
	*c = cc;
	*wN = wwN;
	*pN = paraN;
	*cN = ccN;
}

void ReOrderText(ScribusDoc *currentDoc, ScribusView *view)
{
	double savScale = view->scale();
	view->setScale(1.0);
	currentDoc->RePos = true;
	QImage pgPix(10, 10, QImage::Format_ARGB32);
	QRect rd; // = QRect(0,0,9,9);
	ScPainter *painter = new ScPainter(&pgPix, pgPix.width(), pgPix.height());
	for (int azz=0; azz<currentDoc->MasterItems.count(); ++azz)
	{
		PageItem *currItem = currentDoc->MasterItems.at(azz);
		if (currItem->itemType() == PageItem::PathText)
			currItem->DrawObj(painter, rd);
	}
	for (int azz=0; azz<currentDoc->Items->count(); ++azz)
	{
		PageItem *currItem = currentDoc->Items->at(azz);
		if (currItem->itemType() == PageItem::TextFrame)
			currItem->asTextFrame()->layout();
		else if (currItem->itemType() == PageItem::PathText)
			currItem->DrawObj(painter, rd);
	}
	currentDoc->RePos = false;
	view->setScale(savScale);
	delete painter;
}

/*! \brief Helper function for sorting in sortQStringList.
\author 10/06/2004 - pv
\param s1 first string
\param s2 second string
\retval bool t/f related s1>s2
 */
bool compareQStrings(QString s1, QString s2)
{
	if (QString::localeAwareCompare(s1, s2) >= 0)
		return false;
	return true;
}

QStringList sortQStringList(QStringList aList)
{
	std::vector<QString> sortList;
	QStringList retList;
	QStringList::Iterator it;
	for (it = aList.begin(); it != aList.end(); ++it)
		sortList.push_back(*it);
	std::sort(sortList.begin(), sortList.end(), compareQStrings);
	for(uint i = 0; i < sortList.size(); i++)
		retList.append(sortList[i]);
	return retList;
}

QString checkFileExtension(const QString &currName, const QString &extension)
{
	QString newName(currName);
	//If filename ends with a period, just add the extension
	if (newName.right(1)==".")
	{
		newName+=extension.toLower();
		return newName;
	}
	//If filename doesnt end with the period+extension, add it on
	QString dotExt("." + extension.toLower());
	if (!newName.endsWith(dotExt, Qt::CaseInsensitive))
		newName+=dotExt;
	return newName;
}

QString getFileNameByPage(ScribusDoc* currDoc, uint pageNo, QString extension)
{
	uint number = pageNo + currDoc->FirstPnum;
	QString defaultName = currDoc->DocName;
	if (defaultName.isNull())
		defaultName = "export";
	else
	{
		QFileInfo fi(defaultName);
		defaultName = fi.completeBaseName();
	}
	return QString("%1-%2%3.%4").arg(defaultName).arg(QObject::tr("page", "page export")).arg(number, 3, 10, QChar('0')).arg(extension);
}

const QString getStringFromSequence(DocumentSectionType type, uint position)
{
	QString retVal("");
	switch( type )
	{
		case Type_1_2_3:
			retVal=QString::number(position);
			break;
		case Type_A_B_C:
			retVal=numberToLetterSequence(position).toUpper();
			break;
		case Type_a_b_c:
			retVal=numberToLetterSequence(position);
			break;
		case Type_I_II_III:
			retVal=arabicToRoman(position);
			break;
		case Type_i_ii_iii:
			//well, for lower case people will want that, even if its "wrong"
			//ie, X=10, x=10000
			retVal=arabicToRoman(position).toLower();
			break;
		case Type_None:
			break;
		default:
			break;
	}
	return retVal;
}

const QString numberToLetterSequence(uint i)
{
	QString retVal("");
	unsigned digits = 1;
	unsigned offset = 0;
	uint column=i;
	--column;

	if( column > 4058115285U ) return  QString("@");

	for( unsigned limit = 26; column >= limit+offset; limit *= 26, digits++ )
		offset += limit;

	for( unsigned c = column - offset; digits; --digits, c/=26 )
		retVal.prepend( QChar( 'a' + (c%26) ) );
	return retVal;
}

const QString arabicToRoman(uint i)
{
	QString roman("");
	int arabic = i;
	while (arabic - 1000000 >= 0){
		roman += "m";
		arabic -= 1000000;
	}
	while (arabic - 900000 >= 0){
		roman += "cm";
		arabic -= 900000;
	}
	while (arabic - 500000 >= 0){
		roman += "d";
		arabic -= 500000;
	}
	while (arabic - 400000 >= 0){
		roman += "cd";
		arabic -= 400000;
	}
	while (arabic - 100000 >= 0){
		roman += "c";
		arabic -= 100000;
	}
	while (arabic - 90000 >= 0){
		roman += "xc";
		arabic -= 90000;
	}
	while (arabic - 50000 >= 0){
		roman += "l";
		arabic -= 50000;
	}
	while (arabic - 40000 >= 0){
		roman += "xl";
		arabic -= 40000;
	}
	while (arabic - 10000 >= 0){
		roman += "x";
		arabic -= 10000;
	}
	while (arabic - 9000 >= 0){
		roman += "Mx";
		arabic -= 9000;
	}
	while (arabic - 5000 >= 0){
		roman += "v";
		arabic -= 5000;
	}
	while (arabic - 4000 >= 0){
		roman += "Mv";
		arabic -= 4000;
	}
	while (arabic - 1000 >= 0){
		roman += "M";
		arabic -= 1000;
	}
	while (arabic - 900 >= 0){
		roman += "CM";
		arabic -= 900;
	}
	while (arabic - 500 >= 0){
		roman += "D";
		arabic -= 500;
	}
	while (arabic - 400 >= 0){
		roman += "CD";
		arabic -= 400;
	}
	while (arabic - 100 >= 0){
		roman += "C";
		arabic -= 100;
	}
	while (arabic - 90 >= 0){
		roman += "XC";
		arabic -= 90;
	}
	while (arabic - 50 >= 0){
		roman += "L";
		arabic -= 50;
	}
	while (arabic - 40 >= 0){
		roman += "XL";
		arabic -= 40;
	}
	while (arabic - 10 >= 0){
		roman += "X";
		arabic -= 10;
	}
	while (arabic - 9 >= 0){
		roman += "IX";
		arabic -= 9;
	}
	while (arabic - 5 >= 0){
		roman += "V";
		arabic -= 5;
	}
	while (arabic - 4 >= 0){
		roman += "IV";
		arabic -= 4;
	}
	while (arabic - 1 >= 0){
		roman += "I";
		arabic -= 1;
	}
	return roman;
}

//CB Moved from scribus.cpp
void parsePagesString(QString pages, std::vector<int>* pageNs, int sourcePageCount)
{
	QString tmp(pages);
	QString token;
	int from, to, pageNr;
	do
	{
		if (tmp.indexOf(",") == -1)
		{
			token = tmp;
			tmp = "";
		}
		else
		{
			token = tmp.left(tmp.indexOf(","));
			tmp = tmp.right(tmp.length() - tmp.indexOf(",") - 1);
		}

		token = token.trimmed();
		if (token == "*") // Import all source doc pages
		{
			for (int i = 1; i <= sourcePageCount; ++i)
				pageNs->push_back(i);
		}
		else if (token.indexOf("-") != -1) // import a range of source doc pages
		{
			from = QString(token.left(token.indexOf("-"))).toInt();
			to = QString(token.right(token.length() - token.indexOf("-") - 1)).toInt();
			if ((from != 0) && (to != 0))
			{
				if (from > sourcePageCount)
					from = sourcePageCount;
				if (to > sourcePageCount)
					to = sourcePageCount;
				if (from == to)
					pageNs->push_back(to);
				else if (from < to)
				{
					for (int i = from; i <= to; ++i)
						pageNs->push_back(i);
				}
				else
				{
					for (int i = from; i >= to; --i)
						pageNs->push_back(i);
				}
			}
		}
		else // import single source doc page
		{
			pageNr = token.toInt();
			if ((pageNr > 0) && (pageNr <= sourcePageCount))
				pageNs->push_back(pageNr);
		}
	} while (!tmp.isEmpty());
}


int findParagraphStyle(ScribusDoc* doc, const ParagraphStyle& parStyle)
{
	bool named = !parStyle.name().isEmpty();
//qDebug(QString("looking up %1/ %2").arg(parStyle.name()).arg(parStyle.alignment())); 
	if (named) {
		for (int i=0; i < doc->paragraphStyles().count(); ++i)
		{
//qDebug(QString("%1 %2").arg(i).arg(doc->paragraphStyles()[i].name()));
			if (parStyle.name() == doc->paragraphStyles()[i].name()) {
				return i;
			}
		}
		assert(false);
		return -1;
	}
	else {
		return -1;
	}
}

int findParagraphStyle(ScribusDoc* doc, const QString &name)
{
	for (int i=0; i < doc->paragraphStyles().count(); ++i)
	{
		if (name == doc->paragraphStyles()[i].name()) {
			return i;
		}
	}
	assert(false);
	return -1;
}

// FIXME: to be removed in full Qt4 port!
QPixmap getQCheckBoxPixmap(const bool checked, const QColor background)
{
	QCheckBox *tmpItem = new QCheckBox("", 0);
	tmpItem->setMaximumSize(QSize(30, 30));
	tmpItem->setMinimumSize(QSize(30, 30));
	QPalette pal;
	pal.setBrush(QPalette::Window, background);
	tmpItem->setPalette(pal);
	tmpItem->setChecked(checked);
	QPixmap pm = QPixmap::grabWidget(tmpItem);
	pm.setMask(pm.createHeuristicMask());
	delete tmpItem;
	return pm;
}


void tDebug(QString message)
{
	QDateTime debugTime;
	qDebug("%s", QString("%1\t%2").arg(debugTime.currentDateTime().toString("hh:mm:ss:zzz")).arg(message).toAscii().constData());
}


QString readLinefromDataStream(QDataStream &s)
{
	QString ret = "";
	uchar charData;
	while (!s.atEnd())
	{
		s >> charData;
		if (charData == '\x0A')
			break;
		if (charData == '\x0D')
		{
			quint64 oldPos = s.device()->pos();
			s >> charData;
			if (charData != '\x0A')
				s.device()->seek(oldPos);
			break;
		}
		ret += QChar(charData);
	}
	return ret.trimmed();
}

void setCurrentComboItem(QComboBox *box, QString text)
{
	box->blockSignals(true);
	int ind = box->findText(text);
	if (ind > -1)
		box->setCurrentIndex(ind);
	box->blockSignals(false);
}

QString getDashString(int dashtype, double linewidth)
{
	QString Dt = QString::number(qMax(1.0*linewidth, 0.1));
	QString Sp = QString::number(qMax(2.0*linewidth, 0.1));
	QString Da = QString::number(qMax(4.0*linewidth, 0.1));
	QString tmp = "";
	switch (dashtype)
	{
		case 1:
			break;
		case 2:
			tmp += Da+" "+Sp;
			break;
		case 3:
			tmp += Dt+" "+Sp;
			break;
		case 4:
			tmp += Da+" "+Sp+" "+Dt+" "+Sp;
			break;
		case 5:
			tmp += Da+" "+Sp+" "+Dt+" "+Sp+" "+Dt+" "+Sp;
			break;
// Additional line styles taken from Inkscape
		case 6:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 7:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(3.0 * linewidth, 0.01));
			break;
		case 8:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(4.0 * linewidth, 0.01));
			break;
		case 9:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(6.0 * linewidth, 0.01));
			break;
		case 10:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(8.0 * linewidth, 0.01));
			break;
		case 11:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(12.0 * linewidth, 0.01));
			break;
		case 12:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(24.0 * linewidth, 0.01));
			break;
		case 13:
			tmp += QString("%1 %2").arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(48.0 * linewidth, 0.01));
			break;
		case 14:
			tmp += QString("%1 %2").arg(qMax(2.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 15:
			tmp += QString("%1 %2").arg(qMax(3.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 16:
			tmp += QString("%1 %2").arg(qMax(4.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 17:
			tmp += QString("%1 %2").arg(qMax(6.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 18:
			tmp += QString("%1 %2").arg(qMax(8.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 19:
			tmp += QString("%1 %2").arg(qMax(12.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 20:
			tmp += QString("%1 %2").arg(qMax(24.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 21:
			tmp += QString("%1 %2").arg(qMax(2.0 * linewidth, 0.01)).arg(qMax(2.0 * linewidth, 0.01));
			break;
		case 22:
			tmp += QString("%1 %2").arg(qMax(3.0 * linewidth, 0.01)).arg(qMax(3.0 * linewidth, 0.01));
			break;
		case 23:
			tmp += QString("%1 %2").arg(qMax(4.0 * linewidth, 0.01)).arg(qMax(4.0 * linewidth, 0.01));
			break;
		case 24:
			tmp += QString("%1 %2").arg(qMax(6.0 * linewidth, 0.01)).arg(qMax(6.0 * linewidth, 0.01));
			break;
		case 25:
			tmp += QString("%1 %2").arg(qMax(8.0 * linewidth, 0.01)).arg(qMax(8.0 * linewidth, 0.01));
			break;
		case 26:
			tmp += QString("%1 %2").arg(qMax(12.0 * linewidth, 0.01)).arg(qMax(12.0 * linewidth, 0.01));
			break;
		case 27:
			tmp += QString("%1 %2").arg(qMax(24.0 * linewidth, 0.01)).arg(qMax(24.0 * linewidth, 0.01));
			break;
		case 28:
			tmp += QString("%1 %2").arg(qMax(2.0 * linewidth, 0.01)).arg(qMax(4.0 * linewidth, 0.01));
			break;
		case 29:
			tmp += QString("%1 %2").arg(qMax(2.0 * linewidth, 0.01)).arg(qMax(6.0 * linewidth, 0.01));
			break;
		case 30:
			tmp += QString("%1 %2").arg(qMax(6.0 * linewidth, 0.01)).arg(qMax(2.0 * linewidth, 0.01));
			break;
		case 31:
			tmp += QString("%1 %2").arg(qMax(4.0 * linewidth, 0.01)).arg(qMax(8.0 * linewidth, 0.01));
			break;
		case 32:
			tmp += QString("%1 %2").arg(qMax(8.0 * linewidth, 0.01)).arg(qMax(4.0 * linewidth, 0.01));
			break;
		case 33:
			tmp += QString("%1 %2 %3 %4").arg(qMax(2.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(0.5 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01));
			break;
		case 34:
			tmp += QString("%1 %2 %3 %4").arg(qMax(8.0 * linewidth, 0.01)).arg(qMax(2.0 * linewidth, 0.01)).arg(qMax(1.0 * linewidth, 0.01)).arg(qMax(2.0 * linewidth, 0.01));
			break;
		case 35:
			tmp += QString("%1 %2").arg(qMax(0.5 * linewidth, 0.01)).arg(qMax(0.5 * linewidth, 0.01));
			break;
		case 36:
			tmp += QString("%1 %2").arg(qMax(0.25 * linewidth, 0.01)).arg(qMax(0.25 * linewidth, 0.01));
			break;
		case 37:
			tmp += QString("%1 %2").arg(qMax(0.1 * linewidth, 0.01)).arg(qMax(0.1 * linewidth, 0.01));
			break;
		default:
			break;
	}
	return tmp;
}

void getDashArray(int dashtype, double linewidth, QList<double> &m_array)
{
	m_array.clear();
	if (dashtype == 1)
		return;
	QString tmp = getDashString(dashtype, linewidth);
	QStringList dashes = tmp.split(" ");
	for (int a = 0; a < dashes.size(); a++)
	{
		m_array.append(dashes[a].toDouble());
	}
}
