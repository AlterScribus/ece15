/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@welho.com                                                      *
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

#include "htmlim.h"
#include <qstring.h>
#include <qstringlist.h>

#ifdef HAVE_XML

#include <gtparagraphstyle.h> // Style for paragraph based formatting.
#include <gtframestyle.h>

QString FileFormatName()
{
    return QObject::tr("HTML Files");
}

QStringList FileExtensions()
{
    QStringList endings(QObject::tr("html"));
	endings << QString("htm");
	return endings;
}

void GetText(QString filename, QString encoding, bool textOnly, gtWriter *writer)
{
	HTMLIm* him = new HTMLIm(filename, encoding, writer, textOnly);
	delete him;
}

/******** Class HTMLIm ************************************/

HTMLIm::HTMLIm(QString fname, QString coding, gtWriter *w, bool textOnly)
{
	filename = fname;
	encoding = coding;
	writer = w;
	gtFrameStyle *fstyle = writer->getDefaultStyle();
	pstyle = new gtParagraphStyle(*fstyle);
	pstyle->setName("HTML_default");
// 	defaultFontSize = pstyle->getFont()->getSize();
	importText(textOnly);
	delete pstyle;
}

void HTMLIm::importText(bool textOnly)
{
	HTMLReader* handler = new HTMLReader(pstyle, writer, textOnly);
	handler->parse(filename);
	delete handler;
}

HTMLIm::~HTMLIm()
{

}

#endif // HAVE_XML
