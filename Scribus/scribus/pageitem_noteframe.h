#ifndef PAGEITEM_NOTEFRAME_H
#define PAGEITEM_NOTEFRAME_H

#include "pageitem_textframe.h"
#include "notesset.h"
#include "undostate.h"

class PageItem_NoteFrame : public PageItem_TextFrame
{
		Q_OBJECT

public:
	PageItem_NoteFrame(NotesSet *nSet, ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline);
	PageItem_NoteFrame(ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline);
	PageItem_NoteFrame(PageItem_TextFrame* inFrame, NotesSet *nSet);
	~PageItem_NoteFrame() {}

	virtual PageItem_NoteFrame * asNoteFrame() { return this; }
	virtual bool isNoteFrame() const { return true; }

	//overloaded text frame layouting
	void layout();

	//indicate if noteframe should be deleted
	bool deleteIt;

	//used while reading SLA file
	void setNS(NotesSet* NS, PageItem_TextFrame* master = NULL);
	//return Notes Set
	NotesSet* notesSet() { return m_nset; }

	//insert notes content into notesframe
	void updateNotes(QList<TextNote*> nList, bool clear = true);
	//read notes text from notesframe itemText and store it in notes`s saxed text field
	void updateNotesText();

	PageItem_TextFrame* masterFrame() { return m_masterFrame; }
	void setMaster(PageItem* frame) { m_masterFrame = frame->asTextFrame(); }
	bool isEndNotesFrame() { return m_nset->isEndNotes(); }
	bool isAutoRemove() { return m_nset->isAutoRemoveEmptyNotesFrames(); }

	//return list of notes in noteframe
	QList<TextNote*> notesList() { return l_notes; }
	//remove note from list
	void removeNote(TextNote* note) { l_notes.removeOne(note); }

private:
	QList<TextNote*> l_notes;
	NotesSet* m_nset;
	PageItem_TextFrame *m_masterFrame;

	//insert note at `index` position in noteframe
	void insertNote(TextNote* note, int index = 0);

//not used???
	//find position of note marker in text
	int findNoteCpos(TextNote* note);
	
};

#endif // PAGEITEM_NOTEFRAME_H
