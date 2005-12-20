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
#ifndef HTMLREADER_H
#define HTMLREADER_H

#include "scconfig.h"

#ifdef HAVE_XML

#include <vector>

#include <libxml/HTMLparser.h>

#include <qstring.h>
#include <qxml.h>

#include <gtparagraphstyle.h>
#include <gtwriter.h>

/*! \brief Parse and import a HTML file.
Supported tags: P, CENTER, BR, A, UL, OL, LI, H1, H2, H3, H4,
B, STRONG, I, EM, CODE, BODY, PRE, IMG, SUB, SUP, DEL, INS, U,
DIV.
*/
class HTMLReader
{
private:
	QString currentDir;
	QString currentFile;
	QString defaultColor;
	QString defaultWeight;
	QString defaultSlant;
	QString templateCategory;
	QString href;
	QString extLinks;
	int extIndex;
	int listLevel;
	std::vector<gtParagraphStyle*> listStyles;
	std::vector<int> nextItemNumbers;
	gtWriter *writer;
	gtParagraphStyle *pstyle;
	gtParagraphStyle *pstylec;
	gtParagraphStyle *pstyleh1;
	gtParagraphStyle *pstyleh2;
	gtParagraphStyle *pstyleh3;
	gtParagraphStyle *pstyleh4;
	gtParagraphStyle *pstylecode;
	gtParagraphStyle *pstylep;
	gtParagraphStyle *pstylepre;
	bool inOL;
	bool wasInOL;
	bool inUL;
	bool wasInUL;
	bool inLI;
	bool addedLI;
	bool inH1;
	bool inH2;
	bool inH3;
	bool inH4;
	bool inA;
	bool inCenter;
	bool inCode;
	bool inBody;
	bool inPre;
	bool inP;
	bool lastCharWasSpace;
	bool noFormatting;
	void initPStyles();
	void toggleEffect(FontEffect e);
	void setItalicFont();
	void unsetItalicFont();
	void setBlueFont();
	void setDefaultColor();
	void setBoldFont();
	void unSetBoldFont();
	void createListStyle();
	static HTMLReader* hreader;
public:
	HTMLReader(gtParagraphStyle *ps, gtWriter *w, bool textOnly);
	~HTMLReader();
	void parse(QString filename);
	static void startElement(void *user_data, const xmlChar * fullname, const xmlChar ** atts);
	static void endElement(void *user_data, const xmlChar * name);
	static void characters(void *user_data, const xmlChar * ch, int len);
	bool startElement(const QString&, const QString&, const QString &name, const QXmlAttributes &attrs);
	bool endElement(const QString&, const QString&, const QString &name);
	bool characters(const QString &ch);
};

#endif // HAVE_XML

#endif
