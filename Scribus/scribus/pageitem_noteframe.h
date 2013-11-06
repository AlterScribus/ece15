#ifndef PAGEITEM_NOTEFRAME_H
#define PAGEITEM_NOTEFRAME_H

#include "pageitem_textframe.h"
#include "notesstyles.h"
#include "undostate.h"

class SCRIBUS_API PageItem_NoteFrame : public PageItem_TextFrame
{
	Q_OBJECT
	friend class ScribusDoc;

private:
	PageItem_NoteFrame(const NotesStyle* const nStyle, ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline);
	PageItem_NoteFrame(ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline);
	PageItem_NoteFrame(PageItem_TextFrame* inFrame, const NotesStyle* const nStyle);
	~PageItem_NoteFrame() { }
public:
	virtual PageItem_NoteFrame * asNoteFrame() { return this; }
	virtual bool isNoteFrame() const { return true; }
	virtual bool isAutoNoteFrame() const { return m_nstyle->isAutoRemoveEmptyNotesFrames(); }

	//overloaded text frame layouting
	void layout();

	//indicate if noteframe should be deleted
	bool deleteIt;

	//used while reading SLA file
	void setNotesStyle(const NotesStyle* const nStyle, PageItem_TextFrame* master = NULL);
	//returns Notes Style
	NotesStyle* getNotesStyle() const { return m_nstyle; }

	//upadate noteframe witn new notes list
	void updateNotes(QList<TextNote*> &nList);
	//clear notesList and update
	void updateNotes();
	//read notes text from notesframe itemText and store it in notes`s saxed text field
	void updateNotesText();

	PageItem_TextFrame* masterFrame() const { return m_masterFrame; }
	void setMaster(PageItem* frame) { m_masterFrame = frame->asTextFrame(); }
	bool isEndNotesFrame() { return m_nstyle->isEndNotes(); }
	bool isAutoWelded() { return m_nstyle->isAutoWeldNotesFrames(); }
	bool isAutoHeight() { return m_nstyle->isAutoNotesHeight(); }
	bool isAutoWidth() { return m_nstyle->isAutoNotesWidth(); }

	//return list of notes in noteframe
	const QList<TextNote*> notesList() { return m_notesList; }
	//remove note from list
	void removeNoteFromList(TextNote* const note) { m_notesList.removeOne(note); }

	void restoreDeleteNoteText(SimpleState *state, bool isUndo);
	void restoreInsertNoteText(SimpleState *state, bool isUndo);
	//overloaded PageItem::unWeld()
	void unWeld(bool doUndo=true);
	
private:
	QList<TextNote*> m_notesList;
	NotesStyle* m_nstyle;
	PageItem_TextFrame *m_masterFrame;

	//insert note at end of text in noteframe
	void insertNote(const TextNote* const note);

//not used???
	//find position of note marker in text
	int findNoteCpos(const TextNote* const note) const;
	
};

#endif // PAGEITEM_NOTEFRAME_H
