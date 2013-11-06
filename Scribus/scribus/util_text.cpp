/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <sstream>
#include "desaxe/saxXML.h"
#include "scribusdoc.h"
#include "util_text.h"
#include "serializer.h"

int findParagraphStyle(ScribusDoc* doc, const ParagraphStyle& parStyle)
{
	bool named = !parStyle.name().isEmpty();
	//qDebug() << QString("looking up %1/ %2").arg(parStyle.name()).arg(parStyle.alignment()); 
	if (named) {
		for (int i=0; i < doc->paragraphStyles().count(); ++i)
		{
			//qDebug() << QString("%1 %2").arg(i).arg(doc->paragraphStyles()[i].name());
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

StoryText desaxeStoryFromString(ScribusDoc* doc, const QString &saxedString)
{
	assert(!saxedString.isEmpty());

	Serializer* dig = doc->textSerializer();
	dig->reset();
	dig->store<ScribusDoc>("<scribusdoc>", doc);
	

	dig->parseMemory(saxedString.toUtf8(), saxedString.toUtf8().length());
	StoryText * story = dig->result<StoryText>();
	if (story == NULL)
	{
		qWarning() << "Error on desaxing story from string: " << saxedString;
		return StoryText(doc);
	}

	StoryText res(doc);
	res.insert(*story);
	delete story;
	return res;
}

QString saxedTextFromStory(StoryText const &story)
{
	std::ostringstream xmlString;
	SaxXML xmlStream(xmlString);
	xmlStream.beginDoc();
	story.saxx(xmlStream, "SCRIBUSTEXT");
	xmlStream.endDoc();
	std::string xml(xmlString.str());
	return QString(xml.c_str());
}

