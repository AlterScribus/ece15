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

#ifndef GTWRITER_H
#define GTWRITER_H

#include "gtaction.h"
#include "gtfont.h"
#include "gtframestyle.h"
#include "gtparagraphstyle.h"
#include "gtstyle.h"

/*
	gtWriter handles the writing to the scribus text frame.
*/
class gtWriter 
{
public:
	gtWriter(bool append);
	~gtWriter();
	gtFrameStyle* getDefaultStyle();
	void setFrameStyle(gtFrameStyle *fStyle);
	void setParagraphStyle(gtParagraphStyle *pStyle);
	void setCharacterStyle(gtStyle *cStyle);
	void unSetFrameStyle();
	void unSetParagraphStyle();
	void unSetCharacterStyle();
	void append(QString text); // Use the styles set beforehand
	void append(QString text, gtStyle *style); // Use the style provided as a parameter
private:
	gtAction *action;
	gtFrameStyle* defaultStyle;
	gtStyle* currentStyle;

/* 
   Frame style is the default style for text. Styles will be used in order so
   that if no character style is found then it will try to use paragraph
   style if no paragraph style is found frame style will be used. Last set 
   frame style will be left to the default style for the text frame.
*/
	gtFrameStyle* frameStyle;
	gtStyle* paragraphStyle;
	gtStyle* characterStyle;
	bool errorSet;
	bool shouldAppend;
	void setDefaultStyle();
};

#endif // WRITER_H
