#ifndef NOTESSTYLES_H
#define NOTESSTYLES_H

#include <QDebug>
#include <QObject>
#include <QString>
#include <QList>
#include "numeration.h"
#include "pagestructs.h"
#include "scpage.h"
#include "styles/charstyle.h"
#include "styles/paragraphstyle.h"
#include "text/storytext.h"
#include "util.h"

class ScribusDoc;
class PageItem_NoteFrame;
class PageItem_TextFrame;

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
	NotesStyle() : nameStr ("Default"), startNum(1), m_endNotesStyle(false), numeration(), numRange(NSRdocument), prefixStr(""), suffixStr(")"),
		autoNotesHeight(true), autoNotesWidth(true), autoRemoveEmptyNotesFrames(true), autoWeldNotesFrames(true),
		superscriptInNote(true), superscriptInMaster(true), marksCharStyle(""), notesParaStyle("") {}
	~NotesStyle() {}

	const QString name() const { return nameStr; }
	void setName(const QString &str) { nameStr = str; }
	const int start() const { return startNum; }
	void setStart(const int i) { startNum = i; }
	void setRange(NumerationRange ns) { numRange = ns; }
	const NumerationRange range() const { return numRange; }
	const QString prefix() const { return prefixStr; }
	void setPrefix (const QString &str) { prefixStr = str; }
	const QString suffix() const { return suffixStr; }
	void setSuffix (const QString &str) { suffixStr = str; }

	const QString numString(const int num) const { return numeration.numString(num); }
	void setType(const NumFormat type) { numeration.numFormat = type; }
	const NumFormat getType() const { return numeration.numFormat; }

	bool isEndNotes() const { return m_endNotesStyle; }
	bool isAutoNotesHeight() const { return autoNotesHeight; }
	void setAutoNotesHeight(const bool set) { autoNotesHeight = set; }
	bool isAutoNotesWidth() const { return autoNotesWidth; }
	void setAutoNotesWidth(const bool set) { autoNotesWidth = set; }
	bool isAutoRemoveEmptyNotesFrames() const { return autoRemoveEmptyNotesFrames; }
	void setAutoRemoveEmptyNotesFrames(const bool set) { autoRemoveEmptyNotesFrames = set; }
	bool isAutoWeldNotesFrames() const { return autoWeldNotesFrames; }
	void setAutoWeldNotesFrames(const bool set) { autoWeldNotesFrames = set; }
	bool isSuperscriptInNote() const { return superscriptInNote; }
	void setSuperscriptInNote(const bool set) { superscriptInNote = set; }
	bool isSuperscriptInMaster() const { return superscriptInMaster; }
	void setSuperscriptInMaster(const bool set) { superscriptInMaster = set; }
	const QString marksChStyle() const { return marksCharStyle; }
	void setMarksCharStyle(const QString &styleName) { marksCharStyle = styleName; }
	const QString notesParStyle() const { return notesParaStyle; }
	void setNotesParStyle(const QString &styleName) { notesParaStyle = styleName; }
	void setEndNotes(bool setendnotes) { m_endNotesStyle = setendnotes; }
	bool operator !=(const NotesStyle &n2)
	{
		return ((nameStr != n2.nameStr) || (startNum != n2.startNum) || (m_endNotesStyle != n2.m_endNotesStyle) ||
				(getType() != static_cast<NotesStyle>(n2).getType()) || (numRange != n2.numRange) ||
				(prefixStr != n2.prefixStr) || (suffixStr != n2.suffixStr) ||
				(autoNotesHeight != n2.autoNotesHeight) || (autoNotesWidth != n2.autoNotesWidth) ||
				(autoRemoveEmptyNotesFrames != n2.autoRemoveEmptyNotesFrames) || (autoWeldNotesFrames != n2.autoWeldNotesFrames) ||
				(superscriptInMaster != n2.superscriptInMaster) || (superscriptInNote != n2.superscriptInNote) ||
				(marksCharStyle != n2.marksCharStyle) || (notesParaStyle != n2.notesParaStyle)
				);
	}
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
	TextNote(NotesStyle * nStyle) : m_notesStyle(nStyle), m_noteSaxedText(""), m_noteMasterMark(NULL), m_noteFrameMark(NULL), m_number(0) { }
	~TextNote() {}
public:
	void setNotesStyle (NotesStyle* nStyle) { m_notesStyle = nStyle; }
	NotesStyle* notesStyle() const { return m_notesStyle; }
	const int num() const { return  m_number; }
	void setNum(const int i) { m_number = i; }
	const QString numString() const { return notesStyle()->numString(m_number); }
	Mark* masterMark() const { return m_noteMasterMark; }
	void setMasterMark(Mark* m) { Q_ASSERT(m); m_noteMasterMark = m; }
	void clearMasterMark() { m_noteMasterMark = NULL; }
	Mark* noteMark() const { return m_noteFrameMark; }
	void setNoteMark(Mark* m) { Q_ASSERT(m); m_noteFrameMark = m; }
	void clearNoteMark() { m_noteFrameMark = NULL; }
	const QString saxedText() const { return m_noteSaxedText; }
	void setSaxedText(const QString &string) { m_noteSaxedText = string; }
	bool isEndNote() const { return m_notesStyle->isEndNotes(); }

	CharStyle getCharStyleNoteMark() const { return charStyleNoteMark; }
	void setCharStyleNoteMark(const CharStyle &value) { charStyleNoteMark = value; }
	CharStyle getCharStyleMasterMark() const { return charStyleMasterMark; }
	void setCharStyleMasterMark(const CharStyle &value) { charStyleMasterMark = value; }
	
protected:
	NotesStyle *m_notesStyle;
	QString m_noteSaxedText;
	Mark *m_noteMasterMark;
	Mark *m_noteFrameMark;
	int m_number;
	CharStyle charStyleNoteMark;
	CharStyle charStyleMasterMark;
};

#endif // NOTESSTYLES_H
