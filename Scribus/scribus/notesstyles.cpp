#include "notesstyles.h"
#include "marks.h"

NotesStyle::NotesStyle()
{
	//TODO read values from doc prefs
	nameStr = "default";
	m_endNotesStyle = false;
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
	notesParaStyle = "";
}

NotesStyle::~NotesStyle()
{
	
}

void NotesStyle::deleteAll()
{
	//nList->clear();
}

void NotesStyle::setEndNotes(bool setendnotes)
{
	if (m_endNotesStyle != setendnotes)
	{
		m_endNotesStyle = setendnotes;
	}
}

bool NotesStyle::operator!=(const NotesStyle& n2)
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
