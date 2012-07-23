#ifndef NOTESSTYLES_H
#define NOTESSTYLES_H

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

class SCRIBUS_API NotesStyle
{
public:
	NotesStyle();
	~NotesStyle();
	bool operator!=(const NotesStyle& n2);

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

	bool isEndNotes() { return m_endNotesStyle; }
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
	const QString notesParStyle() { return notesParaStyle; }
	void setNotesParStyle(const QString styleName) { notesParaStyle = styleName; }
	
	void deleteAll();
	void setEndNotes(bool);

private:
	QString nameStr;		//unique name of notes style
	int startNum;			//numeration starts with that number

	bool m_endNotesStyle;		//if not true this is set of footnotes
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
	QString notesParaStyle;
};

class SCRIBUS_API TextNote : public QObject
{
    Q_OBJECT
	friend class ScribusDoc;
private:
	//only ScribusDoc can create and delete notes
	TextNote(NotesStyle *nSet) : _notesStyle(nSet), _noteSaxedText(""), _noteMasterMark(NULL), _noteFrameMark(NULL), _number(0) { }
	~TextNote();
public:
	void setNotesStyle (NotesStyle* NS) { _notesStyle = NS; }
	NotesStyle* notesStyle() { return _notesStyle; }
	const int num() { return _number; }
	void setNum(const int x) { _number = x; }
	const QString numString() { return notesStyle()->numString(_number); }
	Mark* masterMark() { return _noteMasterMark; }
	void setMasterMark(Mark* MRK) { _noteMasterMark = MRK; }
	Mark* noteMark() { return _noteFrameMark; }
	void setNoteMark(Mark* MRK) { _noteFrameMark = MRK; }
	const QString saxedText() { return _noteSaxedText; }
	void setSaxedText(const QString string) { _noteSaxedText = string; }
	bool isEndNote() { return _notesStyle->isEndNotes(); }
	int textLen;

protected:
	NotesStyle *_notesStyle;
	QString _noteSaxedText;
	Mark *_noteMasterMark;
	Mark *_noteFrameMark;
	int _number;
};

#endif // NOTESSTYLES_H
