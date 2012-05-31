#include "notesset.h"
#include "marks.h"

NotesSet::NotesSet()
{
	//TODO read values from doc prefs
	nameStr = "default";
	m_endNotesSet = false;
	numeration.setType(Type_1_2_3);
	startNum = 1;
	numRange = NSRdocument;
	prefixStr = "";
	suffixStr = ")";
	autoNotesHeight = true;
	autoNotesWidth = true;
	autoRemoveEmptyNotesFrames = true;
	autoWeldNotesFrames = true;
	superscriptInNote = true;
	superscriptInMaster = true;
	marksCharStyle = "";
	notesStyle = "";
}

NotesSet::~NotesSet()
{
	
}

void NotesSet::deleteAll()
{
	//nList->clear();
}

void NotesSet::setEndNotes(bool setendnotes)
{
	if (m_endNotesSet != setendnotes)
	{
		m_endNotesSet = setendnotes;
	}
}

bool NotesSet::operator!=(const NotesSet& n2)
{
	return ((nameStr != n2.nameStr) || (startNum != n2.startNum) || (m_endNotesSet != n2.m_endNotesSet) ||
			(getType() != static_cast<NotesSet>(n2).getType()) || (numRange != n2.numRange) ||
			(prefixStr != n2.prefixStr) || (suffixStr != n2.suffixStr) ||
			(autoNotesHeight != n2.autoNotesHeight) || (autoNotesWidth != n2.autoNotesWidth) ||
			(autoRemoveEmptyNotesFrames != n2.autoRemoveEmptyNotesFrames) || (autoWeldNotesFrames != n2.autoWeldNotesFrames) ||
			(superscriptInMaster != n2.superscriptInMaster) || (superscriptInNote != n2.superscriptInNote) ||
			(marksCharStyle != n2.marksCharStyle) || (notesStyle != n2.notesStyle)
			);
}

TextNote::~TextNote()
{
	if (masterMark() != NULL)
	{
		masterMark()->setNotePtr(NULL);
	}
	if (noteMark() != NULL)
	{
		noteMark()->setNotePtr(NULL);
	}
}
