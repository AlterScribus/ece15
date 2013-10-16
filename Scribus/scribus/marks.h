#ifndef MARKS_H
#define MARKS_H

#include "QString"
#include "scribusapi.h"
//#include "desaxe/saxiohelper.h"
//#include "desaxe/simple_actions.h"

class Mark;
class PageItem;
class TextNote;

enum MarkType
{
	MARKNoType = -1, //undefinied mark type (wrong situation!)
	MARKAnchorType = 0, //empty anchor mark, useful for creating references to it
	MARK2ItemType = 1, //reference to page item ID
	MARK2MarkType = 2, //reference other mark
	MARKVariableTextType = 3,//mark contain dynamic text
	MARKNoteMasterType = 4,  //mark contain footnote reference
	MARKNoteFrameType = 5,  //mark used internally in note frame at beginning of note`s text
	MARKIndexType = 6, // index entry
	MARKBullNumType = 7,
	MARKStyleVariableType = 8 //insert text from last occurence of selected style
};

struct MarkData
{
	QString strtxt;
	PageItem* itemPtr;
	QString destmarkName;
	MarkType destmarkType;
	TextNote* notePtr;
	//fields used for resolving to pointers for load and copy
	QString itemName;
	MarkType markTyp;
	
	MarkData() : strtxt(""), itemPtr(NULL), destmarkName(""), destmarkType(MARKNoType), notePtr(NULL), itemName(""), markTyp(MARKNoType) {}
};

//searchingDirection
const int SEARCH_BACKWARD = 0;
const int SEARCH_FORWARD = 1;
const int FIRST_ON_PAGE = 2;
const int LAST_ON_PAGE = 3;

class SCRIBUS_API Mark
{
	friend class ScribusDoc;
	friend class ScribusMainWindow;
	friend class BulNumMark;
	friend class StyleVariableMark;
	

	//URGENT for anyone want to edit this class!!!
	//only ScribusDoc && ScribusMainWindow can create and delete marks
	//ScribusDoc is owner of MARK pointers created in document
	//ScribusMainWindow create temporary MARK instance (not a pointer) only for undo purposes on case of editing mark
private:
	Mark() : label(""), OwnPage(-1), typ(MARKNoType), data() {}
	Mark(const Mark& other) : label(other.label), OwnPage(other.OwnPage), typ(other.typ), data(other.data) {}
	virtual ~Mark() {}
public:
	QString label;
	int OwnPage;

	void setValues(QString l, int p, MarkType t, MarkData d) { label = l; OwnPage = p; typ = t; data = d; }
	const MarkType getType() { return typ; }
	void setType(MarkType t) { typ = t; }
	const MarkData getData() { return data; }
	void setData(const MarkData d) { data = d; }
	PageItem* getItemPtr() const { return data.itemPtr; }
	void setItemPtr( PageItem* ptr ) { data.itemPtr = ptr; }
	const QString getItemName() { return data.itemName; }
	void setItemName( const QString name ) { data.itemName = name; }

	//for marks to marks - return label and type of target mark by reference
	const void getMark(QString &l, MarkType &t) { l = data.destmarkName; t = data.destmarkType; }
	//for marks to marks - set label and type of target mark from mark pointer
	void setMark(Mark* mP)
	{
		if (mP == NULL)
		{
			data.destmarkName = "";
			data.destmarkType = MARKNoType;
		}
		else
		{
			data.destmarkName = mP->label;
			data.destmarkType = mP->getType();
		}
	}
	void setMark(QString l, MarkType t) { data.destmarkName = l; data.destmarkType = t; }
	const MarkType getMarkType() { return data.markTyp; }
	void setMarkType(MarkType t) { data.markTyp = t; }
	const QString getString() { return data.strtxt; }
	void setString( const QString str ) { data.strtxt = str; }
	TextNote* getNotePtr() const { return data.notePtr; }
	void setNotePtr(TextNote *note) { data.notePtr = note; }

	bool hasItemPtr() { return data.itemPtr != NULL; }
	bool hasString() { return !data.strtxt.isEmpty(); }
	bool hasMark() { return data.destmarkName != ""; }
	bool isUnique() { return ((typ != MARKVariableTextType) && (typ != MARKIndexType) && (typ != MARKBullNumType)); }
	bool isNoteType() { return ((typ == MARKNoteMasterType) || (typ==MARKNoteFrameType)); }
	bool isType(const MarkType t) { return t==typ; }
//No avox - this cannot be public because
//marks should be deleted only by friend classes
//except is BulNumMark as that one is not maintained by ScribusDoc
//    virtual ~Mark() {}

protected:
	MarkType typ;
	MarkData data;
};

class SCRIBUS_API BulNumMark : public Mark
{
public:
	BulNumMark() : Mark() { label = "BullNumMark"; typ = MARKBullNumType; }
	~BulNumMark() {}
};

class SCRIBUS_API StyleVariableMark : public Mark
{
public:
	StyleVariableMark() : Mark(), pStyleName(QString()), searchDirection(0), textLimit(0), range(0)
		{ label = "VariableStyleText"; typ = MARKStyleVariableType; }
	StyleVariableMark(const Mark& other) : Mark(other)
	{
		pStyleName = ((StyleVariableMark) other).pStyleName;
		searchDirection = ((StyleVariableMark) other).searchDirection;
		textLimit = ((StyleVariableMark) other).textLimit;
		range = ((StyleVariableMark) other).range;
		label = other.label + "_";
	}
private:
	~StyleVariableMark() {}
public:
	QString pStyleName;
	int searchDirection;
	int textLimit;
	int range;
};

#endif // MARKS_H
