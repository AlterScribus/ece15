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
#include <QMap>
class PageItem;
class QString;
class ScribusDoc;

class TextValidatorImpl : public QObject
{
	Q_OBJECT
public:
	TextValidatorImpl(ScribusDoc* doc);
	~TextValidatorImpl() {}
	bool run();
	
	void setAutoQuotes();
	int validateItemText(PageItem* item, bool force= false); //validate text and retruns number of changes

private:
	ScribusDoc* m_Doc;
	bool removeMultiSpaces;
	bool runShortWords;
	bool runAutoQuotes;
	bool removeSpacesParaStart;
	bool removeSpacesParaEnd;
	bool removeEmptyLines;
	bool removeBreaks;
	bool removeHyphenation;
	bool convertSpacesToNormal;
	bool convertTabs;
	QString removeSpacesBeforeChars;
	QString removeSpacesAfterChars;
	bool removeSpacesBefore;
	bool removeSpacesAfter;
	QString ensureSpacesBeforeChars;
	QString ensureSpacesAfterChars;
	bool ensureSpacesBefore;
	bool ensureSpacesAfter;
	QMap<QChar, QString> removeCharBefore;
	QMap<QChar, QString> removeCharAfter;
	QMap<QString, QString> replaceStrings;
	QString autoQuotesLang;
	QChar lead_double, follow_double, lead_single, follow_single;
};

#endif
