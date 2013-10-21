#include "notesstyles.h"
#include "marks.h"
#include "util_text.h"

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
			(getFormat() != static_cast<NotesStyle>(n2).getFormat()) || (numRange != n2.numRange) ||
			(prefixStr != n2.prefixStr) || (suffixStr != n2.suffixStr) ||
			(autoNotesHeight != n2.autoNotesHeight) || (autoNotesWidth != n2.autoNotesWidth) ||
			(autoRemoveEmptyNotesFrames != n2.autoRemoveEmptyNotesFrames) || (autoWeldNotesFrames != n2.autoWeldNotesFrames) ||
			(superscriptInMaster != n2.superscriptInMaster) || (superscriptInNote != n2.superscriptInNote) ||
			(marksCharStyle != n2.marksCharStyle) || (notesParaStyle != n2.notesParaStyle)
			|| (m_topLineStyle != n2.m_topLineStyle) || (m_topLineWidth != n2.m_topLineWidth)
			);
}

CharStyle TextNote::getCharStyleNoteMark() const
{
	return charStyleNoteMark;
}

void TextNote::setCharStyleNoteMark(const CharStyle &value)
{
	charStyleNoteMark = value;
}
CharStyle TextNote::getCharStyleMasterMark() const
{
	return charStyleMasterMark;
}

void TextNote::setCharStyleMasterMark(const CharStyle &value)
{
	charStyleMasterMark = value;
}

