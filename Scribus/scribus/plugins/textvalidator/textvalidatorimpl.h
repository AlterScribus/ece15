/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/* This is the Scribus Text Validator Implementation class specification.
2013 Cezary Grabski <cezaryece@scribus-ece.info>
This program is free software - see LICENSE file in the distribution
or documentation
*/
#ifndef TEXTVALIDATORIMPL_H
#define TEXTVALIDATORIMPL_H

#include <QObject>
#include "pageitem.h"

class QString;
class ScribusDoc;

class TextValidatorImpl : public QObject
{
	Q_OBJECT
	public:
		TextValidatorImpl(ScribusDoc* doc);
		~TextValidatorImpl() {}
		bool run();
		
	private:
		ScribusDoc* m_Doc;
		int validateItemText(PageItem* item); //validate text and retruns number of changes
		bool removeMultiSpaces;
//		bool runShortWords;
		bool removeSpacesParaStart;
		bool removeSpacesParaEnd;
		bool removeEmptyLines;
		bool removeBreaks;
		bool removeHyphenation;
		bool convertSpacesToNormal;
		QString removeSpaceBefore;
		QString removeSpaceAfter;
		QMap<QChar, QString> removeCharBefore;
		QMap<QChar, QString> removeCharAfter;
};

#endif
