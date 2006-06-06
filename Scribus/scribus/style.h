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


#ifndef STYLE_H
#define STYLE_H

#include <qstring.h>


/**
 *  This as a virtual base class for all style-like objects: CharStyles, 
 *  ParagraphStyles(indirectly), LineStyles, FrameStyles, CellStyles,
 *  FlowStyles,...
 *  It provides a name and an inheritance mechanism.
 */
class Style {
private:
	QString name_;
	const Style*  parent_;
public:
	Style(): name_(""),parent_(NULL) {}
    Style(QString n): name_(n), 
					  parent_(NULL)  {}
	QString name() const             { return name_; }
	void setName(QString n)          { name_ = n; }
	const Style* parent() const      { return parent_; }
	void setParent(const Style* p)   { parent_ = p; }
	virtual ~Style()                 {}
	// applyStyle(const SubStyle& other)
	// eraseStyle(const SubStyle& other)
	// assign(const SubStyle& other)
protected:
	Style& operator=(const Style& o) 
	{ //assert(typeinfo() == o.typeinfo()); 
		name_ = o.name_; parent_ = o.parent_; 
	}
	Style(const Style& o) : name_(o.name_), parent_(o.parent_) {} 
};




enum StyleFlag {
	ScStyle_Default       = 0,
    ScStyle_Superscript   = 1,
    ScStyle_Subscript     = 2,
    ScStyle_Outline       = 4,
    ScStyle_Underline     = 8,
    ScStyle_Strikethrough = 16,
    ScStyle_AllCaps       = 32,
    ScStyle_SmallCaps     = 64,
    ScStyle_HyphenationPossible=128, //Hyphenation possible here (Smart Hyphen)
    ScStyle_Shadowed      = 256,
    ScStyle_UnderlineWords= 512,
    ScStyle_Reserved01    = 1024, //free, not used in the moment
    ScStyle_DropCap       = 2048,
    ScStyle_SuppressSpace = 4096,//internal use in PageItem (Suppresses spaces when in Block alignment)
    ScStyle_SmartHyphenVisible=8192, //Smart Hyphen visible at line end
    ScStyle_StartOfLine   = 16384,
	ScStyle_UserStyles    = 2047, // 1919, // == 1024 + 512 + 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
	ScStyle_None          = 65535
};

StyleFlag& operator&= (StyleFlag& left, StyleFlag right);

StyleFlag& operator|= (StyleFlag& left, StyleFlag right);

StyleFlag operator& (StyleFlag left, StyleFlag right);

StyleFlag operator| (StyleFlag left, StyleFlag right);

StyleFlag operator^ (StyleFlag left, StyleFlag right);

StyleFlag operator~ (StyleFlag arg);




class SCRIBUS_API CharStyle : public virtual Style {
public:
	static const short NOVALUE = -16000;
	static const QString NOCOLOR;
	static const QString NOLANG;
	
    CharStyle() : Style() {
        csize = NOVALUE;
        cshade = NOVALUE;
        cshade2 = NOVALUE;
        cstyle = ScStyle_None;
        cscale = NOVALUE;
        cscalev = NOVALUE;
        cbase = NOVALUE;
        cshadowx = NOVALUE;
        cshadowy = NOVALUE;
        coutline = NOVALUE;
        cunderpos = NOVALUE;
        cunderwidth = NOVALUE;
        cstrikepos = NOVALUE;
        cstrikewidth = NOVALUE;
        cextra = NOVALUE;
		
        cfont = const_cast<Foi*>(&Foi::NONE); 
        ccolor = NOCOLOR;
        cstroke = NOCOLOR;
		language_ = NOLANG;
    };
	
    CharStyle(Foi * font, int size, StyleFlag style = ScStyle_Default) : Style() {
        csize = size;
        cshade = 1;
        cshade2 = 1;
        cstyle = style;
        cscale = 1000;
        cscalev = 1000;
        cbase = 0;
        cshadowx = 0;
        cshadowy = 0;
        coutline = 0;
        cunderpos = 0;
        cunderwidth = 0;
        cstrikepos = 0;
        cstrikewidth = 0;
        cextra = 0;
		
        cfont = font; 
        ccolor = "Black";
        cstroke = "Black";
		language_ = "";
    };
	
	CharStyle(const CharStyle & other);
	
	bool operator==(const CharStyle & other) const;
	bool operator!=(const CharStyle & other) const { return ! (*this==other); }
	CharStyle & operator=(const CharStyle & other);
	
	void applyCharStyle(const CharStyle & other);
	void eraseCharStyle(const CharStyle & other);
	
	QString asString() const;
	
	int fontSize() const { return csize==NOVALUE && parent()? inh().fontSize() : csize; }
	int fillShade() const { return cshade==NOVALUE && parent()? inh().fillShade() : cshade; }
	int strokeShade() const { return cshade2==NOVALUE && parent()? inh().strokeShade() : cshade2; }
	StyleFlag effects() const { return cstyle==NOVALUE && parent()? inh().effects() : cstyle; }
	int scaleH() const { return cscale==NOVALUE && parent()? inh().scaleH() : cscale; }
	int scaleV() const { return cscalev==NOVALUE && parent()? inh().scaleV() : cscalev; }
	int baselineOffset() const { return cbase==NOVALUE && parent()? inh().baselineOffset() : cbase; }
	int shadowXOffset() const { return cshadowx==NOVALUE && parent()? inh().shadowXOffset() : cshadowx; }
	int shadowYOffset() const { return cshadowy==NOVALUE && parent()? inh().shadowYOffset() : cshadowy; }
	int outlineWidth() const { return coutline==NOVALUE && parent()? inh().outlineWidth() : coutline; }
	int underlineOffset() const { return cunderpos==NOVALUE && parent()? inh().underlineOffset() : cunderpos; }
	int underlineWidth() const { return cunderwidth==NOVALUE && parent()? inh().underlineWidth() : cunderwidth; }
	int strikethruOffset() const { return cstrikepos==NOVALUE && parent()? inh().strikethruOffset() : cstrikepos; }
	int strikethruWidth() const { return cstrikewidth==NOVALUE && parent()? inh().strikethruWidth() : cstrikewidth; }
	int tracking() const { return cextra==NOVALUE && parent()? inh().tracking() : cextra; }
	
	QString fillColor() const { return ccolor==NOCOLOR && parent()? inh().fillColor() : ccolor; }
	QString strokeColor() const { return cstroke==NOCOLOR && parent()? inh().strokeColor() : cstroke; }
	QString language() const { return language_==NOLANG && parent()? inh().language() : language_; }
	
	Foi* font() const { return cfont==&Foi::NONE && parent()? inh().font() : cfont; } 
	
	void setFontSize(int s) { csize = s; }
	void setFillShade(int s) { cshade = s; }
	void setStrokeShade(int s) { cshade2 = s; }
	void setEffects(StyleFlag e) { cstyle = e; }
	void setScaleH(int s) { cscale = s; }
	void setScaleV(int s) { cscalev = s; }
	void setBaselineOffset(int o) { cbase = o; }
	void setShadowXOffset(int o) { cshadowx = o; }
	void setShadowYOffset(int o) { cshadowy = o; }
	void setOutlineWidth(int w) { coutline = w; }
	void setUnderlineOffset(int o) { cunderpos = o; }
	void setUnderlineWidth(int w) { cunderwidth = w; }
	void setStrikethruOffset(int o) { cstrikepos = o; }
	void setStrikethruWidth(int w) { cstrikewidth = w; }
	void setTracking(int t) { cextra = t; }
	
	void setFillColor(QString c) { ccolor = c; }
	void setStrokeColor(QString c) { cstroke = c; }
	void setLanguage(QString l) { language_ = l; }
	
	void setFont(Foi* f) { cfont = f; } 
	
	
	
private:
		// shorthand:
		const CharStyle& inh() const { return *dynamic_cast<CharStyle*>(parent()); };
    int csize;
    short cshade;
    short cshade2;
    StyleFlag cstyle;
    short cscale;
    short cscalev;
    short cbase;
    short cshadowx;
    short cshadowy;
    short coutline;
    short cunderpos;
    short cunderwidth;
    short cstrikepos;
    short cstrikewidth;
    short cextra;
	
    Foi* cfont;
    QString ccolor;
    QString cstroke;
    QString language_;
	
};

inline bool CharStyle::operator==(const CharStyle & other) const
{
	return  (csize == other.csize &&
			 cshade == other.cshade &&
			 cshade2 == other.cshade2 &&
			 cstyle == other.cstyle &&
			 cscale == other.cscale &&
			 cscalev == other.cscalev &&
			 cbase == other.cbase &&
			 cshadowx == other.cshadowx &&
			 cshadowy == other.cshadowy &&
			 coutline == other.coutline &&
			 cunderpos == other.cunderpos &&
			 cunderwidth == other.cunderwidth &&
			 cstrikepos == other.cstrikepos &&
			 cstrikewidth == other.cstrikewidth &&
			 cextra == other.cextra &&
			 cfont == other.cfont &&
			 ccolor == other.ccolor &&
			 cstroke == other.cstroke &&	
			 language_ == other.language_ );	
}

inline CharStyle & CharStyle::operator=(const CharStyle & other)
{
	csize = other.csize;
	cshade = other.cshade;
	cshade2 = other.cshade2;
	cstyle = other.cstyle;
	cscale = other.cscale;
	cscalev = other.cscalev;
	cbase = other.cbase;
	cshadowx = other.cshadowx;
	cshadowy = other.cshadowy;
	coutline = other.coutline;
	cunderpos = other.cunderpos;
	cunderwidth = other.cunderwidth;
	cstrikepos = other.cstrikepos;
	cstrikewidth = other.cstrikewidth;
	cextra = other.cextra;
	cfont = other.cfont;
	ccolor = other.ccolor;
	cstroke = other.cstroke;
	language_ = other.language_;
	return *this;
}

inline CharStyle::CharStyle(const CharStyle & other)
{
	csize = other.csize;
	cshade = other.cshade;
	cshade2 = other.cshade2;
	cstyle = other.cstyle;
	cscale = other.cscale;
	cscalev = other.cscalev;
	cbase = other.cbase;
	cshadowx = other.cshadowx;
	cshadowy = other.cshadowy;
	coutline = other.coutline;
	cunderpos = other.cunderpos;
	cunderwidth = other.cunderwidth;
	cstrikepos = other.cstrikepos;
	cstrikewidth = other.cstrikewidth;
	cextra = other.cextra;
	cfont = other.cfont;
	ccolor = other.ccolor;
	cstroke = other.cstroke;
	language_ = other.language_;
}


inline void CharStyle::applyCharStyle(const CharStyle & other)
{
	if (other.csize != NOVALUE)
		csize = other.csize;
	if (other.cshade != NOVALUE)
		cshade = other.cshade;
	if (other.cshade2 != NOVALUE)
		cshade2 = other.cshade2;
	if (other.cstyle != ScStyle_None)
		cstyle = static_cast<StyleFlag>((cstyle & ~ScStyle_UserStyles) | (other.cstyle & ScStyle_UserStyles));
	if (other.cscale != NOVALUE)
		cscale = other.cscale;
	if (other.cscalev != NOVALUE)
		cscalev = other.cscalev;
	if (other.cbase != NOVALUE)
		cbase = other.cbase;
	if (other.cshadowx != NOVALUE)
		cshadowx = other.cshadowx;
	if (other.cshadowy != NOVALUE)
		cshadowy = other.cshadowy;
	if (other.coutline != NOVALUE)
		coutline = other.coutline;
	if (other.cunderpos != NOVALUE)
		cunderpos = other.cunderpos;
	if (other.cunderwidth != NOVALUE)
		cunderwidth = other.cunderwidth;
	if (other.cstrikepos != NOVALUE)
		cstrikepos = other.cstrikepos;
	if (other.cstrikewidth != NOVALUE)
		cstrikewidth = other.cstrikewidth;
	if (other.cextra != NOVALUE)
		cextra = other.cextra;
	if (other.cfont != &Foi::NONE)
		cfont = other.cfont;
	if (other.ccolor != NOCOLOR)
		ccolor = other.ccolor;
	if (other.cstroke != NOCOLOR)
		cstroke = other.cstroke;
	if (other.language_ != NOLANG)
		language_ = other.language_;
}

inline void CharStyle::eraseCharStyle(const CharStyle & other)
{
	if (other.csize == csize)
		csize = NOVALUE;
	if (other.cshade == cshade)
		cshade = NOVALUE;
	if (other.cshade2 == cshade2)
		cshade2 = NOVALUE;
	if ((other.cstyle  & ScStyle_UserStyles) == (cstyle & ScStyle_UserStyles))
		cstyle = ScStyle_None;
	if (other.cscale == cscale)
		cscale = NOVALUE;
	if (other.cscalev == cscalev)
		cscalev = NOVALUE;
	if (other.cbase == cbase)
		cbase = NOVALUE;
	if (other.cshadowx == cshadowx)
		cshadowx = NOVALUE;
	if (other.cshadowy == cshadowy)
		cshadowy = NOVALUE;
	if (other.coutline == coutline)
		coutline = NOVALUE;
	if (other.cunderpos == cunderpos)
		cunderpos = NOVALUE;
	if (other.cunderwidth == cunderwidth)
		cunderwidth = NOVALUE;
	if (other.cstrikepos == cstrikepos)
		cstrikepos = NOVALUE;
	if (other.cstrikewidth == cstrikewidth)
		cstrikewidth = NOVALUE;
	if (other.cextra == cextra)
		cextra = NOVALUE;
	if (other.cfont == cfont)
		cfont = const_cast<Foi*>(&Foi::NONE);
	if (other.ccolor == ccolor)
		ccolor = NOCOLOR;
	if (other.cstroke == cstroke)
		cstroke = NOCOLOR;
	if (other.language_ == language_)
		language_ = NOLANG;
}


class SCRIBUS_API ParagraphStyle : public virtual Style, private CharStyle
{
public:
	enum LineSpacingMode { 
		FixedLineSpacing        = 0, 
		AutomaticLineSpacing    = 1,
		BaselineGridLineSpacing = 2
	};
	struct TabRecord
	{
		double tabPosition;
		int tabType;
		QChar tabFillChar;
	};
	
private:
		// shorthand
		const ParagraphStyle& inh() const { return *dynamic_cast<ParagraphStyle*>(parent()); }
	LineSpacingMode LineSpaMode;
	double LineSpa;
	int textAlignment;
	double Indent;
	double rightMargin_;
	double First;
	double gapBefore_;
	double gapAfter_;
	QValueList<TabRecord> TabValues;
	bool haveTabs;
	int Drop;
	int DropLin;
	double DropDist;
	int BaseAdj;
	
public:
	ParagraphStyle();
	int lineSpacingMode() const { return LineSpaMode==NOVALUE && parent()? inh().lineSpacingMode() : LineSpaMode; }
	double lineSpacing() const { return LineSpa<=NOVALUE && parent()? inh().lineSpacing() : LineSpa; }
	int alignment() const { return textAlignment==NOVALUE && parent()? inh().alignment() : textAlignment; }
	double firstIndent() const { return First<=NOVALUE && parent()? inh().firstIndent() : First; }
	double leftMargin() const { return Indent<=NOVALUE && parent()? inh().leftMargin() : Indent; }
	double rightMargin() const { return rightMargin_<=NOVALUE && parent()? inh().rightMargin() : rightMargin_; }
	double gapBefore() const { return gapBefore_<=NOVALUE && parent()? inh().gapBefore() : gapBefore_; }
	double gapAfter() const { return gapAfter_<=NOVALUE && parent()? inh().gapAfter() : gapAfter_; }
	bool hasDropCap() const { return Drop==NOVALUE && parent()? inh().hasDropCap() : Drop > 0; }
	int dropCapLines() const { return DropLin==NOVALUE && parent()? inh().dropCapLines() : DropLin; }
	double dropCapOffset() const { return DropDist<=NOVALUE && parent()? inh().dropCapOffset() : DropDist; }
	bool useBaselineGrid() const { return BaseAdj==NOVALUE && parent()? inh().useBaselineGrid : BaseAdj > 0; }
	
	void setLineSpacingMode(LineSpacingMode p) { 
		LineSpaMode = p; 
	}
	void setLineSpacing(double p) { 
		LineSpa = p; 
	}
	void setAlignment(int p) { 
		textAlignment = p; 
	}
	void setFirstIndent(double p) { 
		First = p; 
	}
	void setLeftMargin(double p) { 
		Indent = p; 
	}
	void setRightMargin(double p) { 
		rightMargin_ = p; 
	}
	void setGapBefore(double p) {
		gapBefore_ = p;
	}
	void setGapAfter(double p) {
		gapAfter_ = p;
	}
	void setHasDropCap(bool p) { 
		Drop = p? 1 : 0; 
	}
	void setDropCapLines(int p) { 
		DropLin = p; 
	}
	void setDropCapOffset(double p) { 
		DropDist = p; 
	}
	
	void setUseBaselineGrid(bool p) { 
		BaseAdj = p? 1 : 0; 
	}
	
	// these return writeable references for now:
	QValueList<TabRecord> & tabValues() { haveTabs = true; return TabValues; }
	const QValueList<TabRecord> & tabValues() const { return haveTabs? TabValues : inh().tabValues(); }
	CharStyle & charStyle() { return *this; }
	const CharStyle& charStyle() const { return *this; }
	bool equiv(const ParagraphStyle& other) const;
	bool operator==(const ParagraphStyle& other) const
	{ 
		return name()==other.name() && equiv(other);
	}
};


#endif