#ifndef MARKS_H
#define MARKS_H

#include "QString"
#include "scribusapi.h"
#include "desaxe/saxiohelper.h"
#include "desaxe/simple_actions.h"

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
	MARKListType = 7
};

struct MarkData
{
	QString strtxt;
	PageItem* destItemPtr;
	QString destmarkName;
	MarkType destmarkType;
	TextNote* notePtr;
	//fields used for resolving to pointers for load and copy
	QString holderName;
	MarkType markTyp;
	
	MarkData() : strtxt(""), destItemPtr(NULL), destmarkName(""), destmarkType(MARKNoType), notePtr(NULL), holderName(""), markTyp(MARKNoType) {}
};

class SCRIBUS_API Mark
{
	friend class ScribusDoc;
	friend class ScribusMainWindow;
	friend class ListMark;

	//URGENT for anyone who want to edit this class!!!
	//only ScribusDoc && ScribusMainWindow can create and delete marks
	//ScribusDoc is owner of MARK pointers created in document
	//ScribusMainWindow create temporary MARK instance (not a pointer) only for undo purposes on case of editing mark
private:
	Mark() : label(""), OwnPage(-1), cPos(-1), typ(MARKNoType), data() {}
	Mark(const Mark& other) : label(other.label), OwnPage(other.OwnPage), cPos(other.cPos), typ(other.typ), data(other.data) {}
	virtual ~Mark() {}
public:
	void setValues(const QString &l, const int p, const MarkType t, const MarkData d) { label = l; OwnPage = p; typ = t; data = d; }
	const MarkType getType() const { return typ; }
	void setType(const MarkType t) { typ = t; }
	const MarkData getData() const { return data; }
	void setData(const MarkData d) { data = d; }
	PageItem* getTargetPtr() const { return data.destItemPtr; }
	void setTargetPtr(PageItem* const ptr ) { data.destItemPtr = ptr; }
	const QString getHolderName() const { return data.holderName; }
	void setHolderName( const QString &name ) { data.holderName = name; }

	//for marks to marks - return label and type of target mark by reference
	const void getTargetMark(QString &l, MarkType &t) const { l = data.destmarkName; t = data.destmarkType; }
	//for marks to marks - set label and type of target mark from mark pointer
	void setTargetMark(Mark* mP)
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
	void setTargetMark(const QString l, const MarkType t) { data.destmarkName = l; data.destmarkType = t; }
	const MarkType getMarkType() const { return data.markTyp; }
	void setMarkType(const MarkType t) { data.markTyp = t; }
	const QString getString() const { return data.strtxt; }
	void setString( const QString &str ) { data.strtxt = str; }
	TextNote* getNotePtr() const { return data.notePtr; }
	void setNotePtr(TextNote * const note) { data.notePtr = note; }

	bool hasItemPtr() const { return data.destItemPtr != NULL; }
	bool hasString() const { return !data.strtxt.isEmpty(); }
	bool hasMark() const { return data.destmarkName != ""; }
	bool isUnique() const { return ((typ != MARKVariableTextType) && (typ != MARKIndexType) && (typ != MARKListType)); }
	bool isNoteType() const { return ((typ == MARKNoteMasterType) || (typ==MARKNoteFrameType)); }
	bool isType(const MarkType t) const { return t==typ; }
//No avox - this cannot be public because
//marks should be deleted only by friend classes
//except is BulNumMark as that one is not maintained by ScribusDoc
//    virtual ~Mark() {}

	int getCPos() const { return cPos; }
	void setCPos(int value) { cPos = value; }
	
	QString getLabel() const { return label; }
	void setLabel(const QString &value) { label = value; }
	
	int getOwnPage() const { return OwnPage; }
	void setOwnPage(int value) { OwnPage = value; }
	
protected:
	QString label;
	int OwnPage;
	int cPos;
	MarkType typ;
	MarkData data;
};

class SCRIBUS_API ListMark : public Mark
{
public:
	ListMark() : Mark() { label = "BulNumMark"; typ = MARKListType; }
	~ListMark() {}
};

#endif // MARKS_H
