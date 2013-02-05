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
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.             *
 ***************************************************************************/

#include "odtim.h"

#ifndef HAVE_XML
#error The odtim plugin requires libxml to build
#endif

#include <QStringList>

#include <scribusstructs.h>
#include "prefsmanager.h"
#include <prefsfile.h>
#include <prefscontext.h>
#include <prefstable.h>
#include "fileunzip.h"
#include "stylereader.h"
#include "contentreader.h"
#include "odtdia.h"

QString FileFormatName()
{
    return QObject::tr("OpenDocument Text Documents");
}

QStringList FileExtensions()
{
	return QStringList("odt");
}

void GetText(QString filename, QString encoding, bool textOnly, gtWriter *writer)
{
	OdtIm* sim = new OdtIm(filename, encoding, writer, textOnly);
	delete sim;
}

/********** Class OdtIm ************************************************************/

OdtIm::OdtIm(QString fileName, QString enc, gtWriter* w, bool textOnly)
{
	PrefsContext* prefs = PrefsManager::instance()->prefsFile->getPluginContext("OdtIm");
	bool update = prefs->getBool("update", true);
	bool prefix = prefs->getBool("prefix", true);
	bool ask = prefs->getBool("askAgain", true) || w->showImpSettings;
	bool pack = prefs->getBool("pack", true);
	bool omitPS = prefs->getBool("omitPS", false);
	encoding = enc;
	if (!textOnly)
	{
		if (ask)
		{
			OdtDialog* sxwdia = new OdtDialog(update, prefix, pack, omitPS);
			if (sxwdia->exec()) {
				omitPS = sxwdia->omitPStyles();
				update = sxwdia->shouldUpdate();
				prefix = sxwdia->usePrefix();
				pack = sxwdia->packStyles();
				prefs->set("omitPS", omitPS);
				prefs->set("update", update);
				prefs->set("prefix", sxwdia->usePrefix());
				prefs->set("askAgain", sxwdia->askAgain());
				w->showImpSettings = sxwdia->askAgain();
				prefs->set("pack", sxwdia->packStyles());
				delete sxwdia;
			} else {
				delete sxwdia;
				return;
			}
		}
	}
	filename = fileName;
	writer = w;
	writer->setUpdateParagraphStyles(update);
	writer->setOmitParagraphStyles(omitPS);
	FileUnzip* fun = new FileUnzip(fileName);
	stylePath   = fun->getFile(STYLE);
	contentPath = fun->getFile(CONTENT);
	// Qt4 NULL -> isNull()
	if ((!stylePath.isNull()) && (!contentPath.isNull()))
	{
		QString docname = filename.right(filename.length() - filename.lastIndexOf("/") - 1);
		docname = docname.left(docname.lastIndexOf("."));
		StyleReader *sreader = new StyleReader(docname, writer, textOnly, prefix, pack, omitPS);
		sreader->parse(stylePath);
		ContentReader *creader = new ContentReader(docname, sreader, writer, textOnly, omitPS);
		creader->parse(contentPath);
		delete sreader;
		delete creader;
	}
	delete fun;
}

OdtIm::~OdtIm()
{

}
