#ifndef NOTESSET_H
#define NOTESSET_H

#include <QDebug>
#include <QObject>
#include <QString>
#include <QList>
#include "pagestructs.h"
#include "scpage.h"
#include "styles/charstyle.h"
#include "styles/paragraphstyle.h"
#include "text/storytext.h"
#include "util.h"

class ScribusDoc;
class PageItem_NoteFrame;
class PageItem_TextFrame;

class Numeration
{
public:
	Numeration() : numType(Type_1_2_3) {}
	void setType(NumerationType type) { numType = type; }
	const NumerationType type() { return numType; }
	const QString numString(const int num) { return getStringFromSequence(numType, num); }
private:
	NumerationType numType;
};

typedef enum {
	NSRdocument,
	NSRsection,
	NSRstory,
	NSRpage,
	NSRframe
} NumerationRange;

//used for map with endnotes frames maped with range item
typedef union
{
	void* P;
	int sectionIndex;
	ScPage* page;
	PageItem_TextFrame* firstStoryFrame;
} rangeItem;

class SCRIBUS_API NotesSet
{
public:
	//NotesSet(QString nameStr, NumerationType numType, int start, NumerationRange limit, void *itemPtr, bool setendnote = false);
	NotesSet();
	//NotesSet& operator=(const NotesSet& other);
	~NotesSet();
	bool operator!=(const NotesSet& n2);

	const QString name() { return nameStr; }
	void setName(const QString s) { nameStr = s; }
	const int start() { return startNum; }
	void setStart(const int i) { startNum = i; }
	void setRange(NumerationRange ns) { numRange = ns; }
	const NumerationRange range() { return numRange; }
	const QString prefix() { return prefixStr; }
	void setPrefix (const QString str) { prefixStr = str; }
	const QString suffix() { return suffixStr; }
	void setSuffix (const QString str) { suffixStr = str; }

	const QString numString(const int num) { return numeration.numString(num); }
	void setType(const NumerationType type) { numeration.setType(type); }
	const NumerationType getType() { return numeration.type(); }

	bool isEndNotes() { return m_endNotesSet; }
	bool isAutoNotesHeight() { return autoNotesHeight; }
	void setAutoNotesHeight(const bool set) { autoNotesHeight = set; }
	bool isAutoNotesWidth() { return autoNotesWidth; }
	void setAutoNotesWidth(const bool set) { autoNotesWidth = set; }
	bool isAutoRemoveEmptyNotesFrames() { return autoRemoveEmptyNotesFrames; }
	void setAutoRemoveEmptyNotesFrames(const bool set) { autoRemoveEmptyNotesFrames = set; }
	bool isAutoWeldNotesFrames() { return autoWeldNotesFrames; }
	void setAutoWeldNotesFrames(const bool set) { autoWeldNotesFrames = set; }
	bool isSuperscriptInNote() { return superscriptInNote; }
	void setSuperscriptInNote(const bool set) { superscriptInNote = set; }
	bool isSuperscriptInMaster() { return superscriptInMaster; }
	void setSuperscriptInMaster(const bool set) { superscriptInMaster = set; }
	const QString marksChStyle() { return marksCharStyle; }
	void setMarksCharStyle(const QString styleName) { marksCharStyle = styleName; }
	const QString notesParStyle() { return notesStyle; }
	void setNotesParStyle(const QString styleName) { notesStyle = styleName; }
	
	void deleteAll();
	void setEndNotes(bool);

private:
	QString nameStr;		//unique name of notes set
	int startNum;			//numeration starts with that number

	bool m_endNotesSet;		//if not true this is set of footnotes
	Numeration numeration;
	NumerationRange numRange;	//range of numeration for current set
	QString prefixStr;
	QString suffixStr;
	bool autoNotesHeight;				//change height of notes frames to its content automaticaly?
	bool autoNotesWidth;				//change width of notes frames automaticaly if width of master frame changes?
	bool autoRemoveEmptyNotesFrames;
	bool autoWeldNotesFrames;
	bool superscriptInNote;
	bool superscriptInMaster;
	QString marksCharStyle;
	QString notesStyle;
};

class SCRIBUS_API TextNote : public QObject
{
    Q_OBJECT
	friend class ScribusDoc;
private:
	//only ScribusDoc can create and delete notes
	TextNote(NotesSet *nSet) : notesset(nSet), noteSaxedText(""), noteMasterMark(NULL), noteFrameMark(NULL), number(0) { }
	~TextNote();
public:
	void setNotesSet (NotesSet* NS) { notesset = NS; }
	NotesSet* notesSet() { return notesset; }
	const int num() { return number; }
	void setNum(const int x) { number = x; }
	const QString numString() { return notesSet()->numString(number); }
	Mark* masterMark() { return noteMasterMark; }
	void setMasterMark(Mark* MRK) { noteMasterMark = MRK; }
	Mark* noteMark() { return noteFrameMark; }
	void setNoteMark(Mark* MRK) { noteFrameMark = MRK; }
	const QString saxedText() { return noteSaxedText; }
	void setSaxedText(const QString string) { noteSaxedText = string; }
	bool isEndNote() { return notesset->isEndNotes(); }
	int textLen;

protected:
	NotesSet *notesset;
	QString noteSaxedText;
	Mark *noteMasterMark;
	Mark *noteFrameMark;
	int number;
};

#endif // NOTESSET_H
