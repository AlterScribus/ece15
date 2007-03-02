/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          serializer.cpp  -  description
                             -------------------
    begin                : Sat May 5 2001
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

#include "serializer.h"
#include "scribusdoc.h"
#include "pageitem.h"
#include <qfile.h>
#include <qtextstream.h>
#include <qtextcodec.h>
#include "sccolor.h"
#include "util.h"
#include "desaxe/simple_actions.h"
#include "desaxe/saxXML.h"
#include "desaxe/uniqueid.h"


using namespace desaxe;


struct Collection
{
	QPtrList<PageItem> items;
	ColorList colors;
	StyleSet<ParagraphStyle> pstyles;
	StyleSet<CharStyle> cstyles;
	QValueList<QString> fonts;
	QValueList<QString> patterns;

	void collectItem(PageItem* p)              { items.append(p); }
	void collectColor(QString name, ScColor c) { colors[name] = c; }
	void collectStyle(ParagraphStyle* style)   { if (!style->name().isEmpty()) pstyles.append(style); }
	void collectCharStyle(CharStyle* style)    { if (!style->name().isEmpty()) cstyles.append(style); }
	void collectFont(QString name)             { fonts.append(name); }
	void collectPattern(QString name)          { patterns.append(name); }
};


class CollectColor_body : public Action_body
{
	void begin (const Xml_string tagname, Xml_attr attr)
	{
		m_name = attr["name"];
	}
	
	void end (const Xml_string tagname)
	{
		Collection* coll = this->dig->top<Collection>(1);
		ScColor* color = this->dig->top<ScColor>();
		coll->collectColor(m_name, *color);
	}
private:
	QString m_name;
};

class CollectColor : public MakeAction<CollectColor_body>
{};


Serializer::Serializer(ScribusDoc& doc) : Digester(), m_Doc(doc)
{
	// register desaxe rules for styles, colors and elems
	addRule("/SCRIBUSFRAGMENT", Factory<Collection>());
	addRule("/SCRIBUSFRAGMENT", Store<Collection>("<collection>"));
	
	addRule("/SCRIBUSFRAGMENT/color", Factory<ScColor>());
	addRule("/SCRIBUSFRAGMENT/color", SetAttribute<ScColor, QString>( &ScColor::setNamedColor, "RGB" ));
	addRule("/SCRIBUSFRAGMENT/color", SetAttribute<ScColor, QString>( &ScColor::setNamedColor, "CMYK" ));
	addRule("/SCRIBUSFRAGMENT/color", SetAttributeWithConversion<ScColor, bool>( &ScColor::setSpotColor, "Spot", &parseBool ));
	addRule("/SCRIBUSFRAGMENT/color", SetAttributeWithConversion<ScColor, bool>( &ScColor::setRegistrationColor, "Register", &parseBool ));
	addRule("/SCRIBUSFRAGMENT/color", CollectColor());

	CharStyle::desaxeRules("/SCRIBUSFRAGMENT/", *this);
	addRule("/SCRIBUSFRAGMENT/charstyle", SetterP<Collection, CharStyle>( & Collection::collectCharStyle ));
	
	ParagraphStyle::desaxeRules("/SCRIBUSFRAGMENT/", *this);
	addRule("/SCRIBUSFRAGMENT/style", SetterP<Collection, ParagraphStyle>( & Collection::collectStyle ));

	addRule("/SCRIBUSFRAGMENT/font", SetAttribute<Collection, QString>( & Collection::collectFont, "name"));

	PageItem::desaxeRules("", *this, "item");
	addRule("/SCRIBUSFRAGMENT/item", SetterP<Collection,PageItem>( & Collection::collectItem ));
}


void Serializer::serializeObjects(const Selection& selection, SaxHandler& outputhandler)
{
	Xml_attr attr;
	UniqueID handler( & outputhandler );
	handler.beginDoc();
	handler.begin("SCRIBUSFRAGMENT", attr);
	ScribusDoc* doc = selection.itemAt(0)->doc();
	
	
	QMap<QString,int>::Iterator itf;
	for (itf = doc->UsedFonts.begin(); itf != doc->UsedFonts.end(); ++itf)
	{
		attr["name"] = itf.key();
		handler.beginEnd("font", attr);
	}
	
	ColorList usedColors;
	doc->getUsedColors(usedColors, false);
	ColorList::Iterator itc;
	for (itc = usedColors.begin(); itc != usedColors.end(); ++itc)
	{
		Xml_attr cattr;
		cattr["name"] = itc.key();
		if (doc->PageColors[itc.key()].getColorModel() == colorModelRGB)
			cattr["RGB"] = doc->PageColors[itc.key()].nameRGB();
		else
			cattr["CMYK"] = doc->PageColors[itc.key()].nameCMYK();
		cattr["Spot"] = toXMLString(doc->PageColors[itc.key()].isSpotColor());
		cattr["Register"] = toXMLString(doc->PageColors[itc.key()].isRegistrationColor());
		handler.beginEnd("color", cattr);
	}
	
	for (uint i=0; i < doc->Items->count(); ++i)
	{
		int k = selection.findItem(doc->Items->at(i));
		if (k >=0)
			doc->Items->at(i)->saxx(handler);
	}

	handler.end("SCRIBUSFRAGMENT");
	handler.endDoc();
}


Selection Serializer::deserializeObjects(const QCString & xml)
{
	store<ScribusDoc>("<scribusdoc>", &m_Doc);

	parseMemory(xml, xml.length());

	return importCollection();
}

Selection Serializer::deserializeObjects(const QFile & file)
{
	store<ScribusDoc>("<scribusdoc>", &m_Doc);

	QFileInfo fi(file);
	parseFile(fi.filePath());

	return importCollection();
}


Selection Serializer::importCollection()
{	
	Collection* coll = lookup<Collection>("<collection>");
	QPtrList<PageItem>* objects = &(coll->items);
	
	Selection result( &m_Doc, false);
	
	for (uint i=0; i < objects->count(); ++i)
	{
//		qDebug(QString("deserialized item: %1,%2").arg(objects->at(i)->xPos()).arg(objects->at(i)->yPos()));
		PageItem* currItem = objects->at(i);
		currItem->Clip = FlattenPath(currItem->PoLine, currItem->Segments);
		result.addItem(currItem);
	}
	
	m_Doc.PageColors.addColors(coll->colors, false);
	
	
	delete coll;
	return result;
}


bool Serializer::writeWithEncoding(const QString& filename, const QString& encoding, 
								   const QString& txt)
{
	QTextCodec *codec;
	if (encoding.isEmpty())
		codec = QTextCodec::codecForLocale();
	else
		codec = QTextCodec::codecForName(encoding);
	QCString dec = codec->fromUnicode( txt );
	QFile f(filename);
	if (f.open(IO_WriteOnly))
	{
		f.writeBlock(dec, dec.length());
		f.close();
		return true;
	}
	return false;
}


bool Serializer::readWithEncoding(const QString& filename, const QString& encoding, 
								  QString &txt)
{
	QCString file;
	QTextCodec *codec;
	if (encoding.isEmpty())
		codec = QTextCodec::codecForLocale();
	else
		codec = QTextCodec::codecForName(encoding);
	if (loadRawText(filename, file))
	{
		txt = codec->toUnicode( file.data() );
		return true;
	}
	return false;
}
