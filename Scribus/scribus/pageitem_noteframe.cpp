#include <QMessageBox>
#include "pageitem_noteframe.h"
#include "pageitem_textframe.h"
#include "pageitem.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "ui/scmessagebox.h"
#include "util_text.h"


PageItem_NoteFrame::PageItem_NoteFrame(NotesSet *nSet, ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline)
    : PageItem_TextFrame(doc, x, y, w, h, w2, fill, outline)
{
	m_nset = nSet;
	m_masterFrame = NULL;
	itemText.clear();

	AnName = generateUniqueCopyName(nSet->isEndNotes() ? tr("Endnote frame ") + m_nset->name() : tr("Footnote frame ") + m_nset->name(), false);
	AutoName = false; //endnotes frame will saved with name, so it can be stpred and connected with noteset while reading SLA
	
<<<<<<< HEAD
	//set default style for note frame
	ParagraphStyle newStyle;
	if (nSet->notesParStyle().isEmpty() || (nSet->notesParStyle() == tr("No Style")))
	{
		if (nSet->isEndNotes())
			//set default doc style
			newStyle.setParent(m_Doc->paragraphStyles()[0].name());
		else
		{
			newStyle.setParent(m_masterFrame->itemText.defaultStyle().parent());
			newStyle.applyStyle(m_masterFrame->currentStyle());
		}
	}
	else
		newStyle.setParent(nSet->notesParStyle());
	itemText.blockSignals(true);
	itemText.setDefaultStyle(newStyle);
=======
	//set default syle for note frame
	ParagraphStyle style(itemText.defaultStyle());
	if (!m_nset->notesParStyle().isEmpty() && m_nset->notesParStyle() != tr("No Style"))
	{
		//set named style from nset
		ParagraphStyle nstyle(itemText.defaultStyle());
		nstyle.setParent(m_nset->notesParStyle());
		style.setStyle(nstyle);
	}
	itemText.blockSignals(true);
	itemText.setDefaultStyle(style);
>>>>>>> 781f7a8050ec34a44b7a0d0cad699b0edfebea63
	itemText.blockSignals(false);

	textFlowModeVal = TextFlowUsesFrameShape;
	setColumns(1);

	if (m_nset->isAutoNotesHeight())
		m_SizeHLocked = true;
	else
		m_SizeLocked = false;
	if (m_nset->isAutoNotesWidth())
		m_SizeVLocked = true;
	else
		m_SizeVLocked = false;
	if (m_nset->isAutoNotesHeight() && m_nset->isAutoNotesWidth())
		m_SizeLocked = true;
	else
		m_SizeLocked = false;
	deleteIt = false;
	l_notes.empty();
}

PageItem_NoteFrame::PageItem_NoteFrame(ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline)
    : PageItem_TextFrame(doc, x, y, w, h, w2, fill, outline)
{
	m_nset = NULL;
	m_masterFrame = NULL;
	textFlowModeVal = TextFlowUsesFrameShape;
	deleteIt = false;
	l_notes.empty();
}

PageItem_NoteFrame::PageItem_NoteFrame(PageItem_TextFrame* inFrame, NotesSet *nSet) : PageItem_TextFrame(inFrame->doc(),inFrame->xPos(), inFrame->yPos(),inFrame->width(), inFrame->height(),inFrame->lineWidth(), inFrame->fillColor(), inFrame->lineColor())
{
	m_nset = nSet;
	m_masterFrame = inFrame;

	AnName = generateUniqueCopyName(nSet->isEndNotes() ? tr("Endnote frame ") + m_nset->name() : tr("Footnote frame ") + m_nset->name(), false);
	AutoName = false;

<<<<<<< HEAD
	//set default style for note frame
	ParagraphStyle newStyle;
	if (nSet->notesParStyle().isEmpty() || (nSet->notesParStyle() == tr("No Style")))
	{
		if (nSet->isEndNotes())
			//set default doc style
			newStyle.setParent(m_Doc->paragraphStyles()[0].name());
		else
		{
			newStyle.setParent(m_masterFrame->itemText.defaultStyle().parent());
			newStyle.applyStyle(m_masterFrame->currentStyle());
		}
	}
	else
		newStyle.setParent(nSet->notesParStyle());
	itemText.blockSignals(true);
	itemText.setDefaultStyle(newStyle);
	itemText.blockSignals(false);
	
	double frameHeight = calculateLineSpacing(newStyle, this);
=======
	//set default syle for note frame
	ParagraphStyle style(m_masterFrame->itemText.defaultStyle());
	if (!m_nset->notesParStyle().isEmpty() && m_nset->notesParStyle() != tr("No Style"))
	{
		//set named style from nset
		ParagraphStyle nstyle(itemText.defaultStyle());
		nstyle.setParent(m_nset->notesParStyle());
		style.setStyle(nstyle);
	}
	else
		style.applyStyle(m_masterFrame->currentStyle());
	
	itemText.blockSignals(true);
	itemText.setDefaultStyle(style);
	itemText.blockSignals(false);

	double frameHeight = calculateLineSpacing(style, this);
>>>>>>> 781f7a8050ec34a44b7a0d0cad699b0edfebea63
	Height = frameHeight;
	Ypos = m_masterFrame->yPos() + m_masterFrame->height();
	textFlowModeVal = TextFlowUsesFrameShape;
	setColumns(1);

	if (m_nset->isAutoWeldNotesFrames() && (m_masterFrame != NULL))
	{
		addWelded(m_masterFrame);
		m_masterFrame->addWelded(this);
		m_masterFrame->setWeldPoint(0, m_masterFrame->height(), this);
		setWeldPoint(0,0, m_masterFrame);
	}
	if (m_nset->isAutoNotesHeight())
		m_SizeHLocked = true;
	else
		m_SizeLocked = false;
	if (m_nset->isAutoNotesWidth())
		m_SizeVLocked = true;
	else
		m_SizeVLocked = false;
	if (m_nset->isAutoNotesHeight() && m_nset->isAutoNotesWidth())
		m_SizeLocked = true;
	else
		m_SizeLocked = false;
	deleteIt = false;
	l_notes.empty();
}

<<<<<<< HEAD
void PageItem_NoteFrame::setNS(NotesSet *nSet, PageItem_TextFrame* master)
{
	m_nset = nSet;
	if (master != NULL)
		m_masterFrame = master;
=======
void PageItem_NoteFrame::setNS(NotesSet *NS, PageItem_TextFrame* master)
{
	m_nset = NS;
	m_masterFrame = master;
>>>>>>> 781f7a8050ec34a44b7a0d0cad699b0edfebea63
	itemText.clear();

	AnName = generateUniqueCopyName(m_nset->isEndNotes() ? "Endnote frame " + m_nset->name() : "Footnote frame " + m_nset->name(), false);
	
<<<<<<< HEAD
	//set default style for note frame
	ParagraphStyle newStyle;
	if (nSet->notesParStyle().isEmpty() || (nSet->notesParStyle() == tr("No Style")))
	{
		if (nSet->isEndNotes() || (m_masterFrame == NULL))
		{
			//set default doc style
			newStyle.setParent(m_Doc->paragraphStyles()[0].name());
		}
		else if (master != NULL)
		{
			newStyle.setParent(m_masterFrame->itemText.defaultStyle().parent());
			newStyle.applyStyle(m_masterFrame->currentStyle());
		}
	}
	else
		newStyle.setParent(nSet->notesParStyle());
	itemText.blockSignals(true);
	itemText.setDefaultStyle(newStyle);
=======
	//set default syle for note frame
	ParagraphStyle style(itemText.defaultStyle());
	if (!m_nset->notesParStyle().isEmpty() && m_nset->notesParStyle() != tr("No Style"))
	{
		//set named style from nset
		ParagraphStyle nstyle(itemText.defaultStyle());
		nstyle.setParent(m_nset->notesParStyle());
		style.applyStyle(nstyle);
	}
	itemText.blockSignals(true);
	itemText.setDefaultStyle(style);
>>>>>>> 781f7a8050ec34a44b7a0d0cad699b0edfebea63
	itemText.blockSignals(false);

	if (m_nset->isAutoNotesHeight())
		m_SizeHLocked = true;
	else
		m_SizeLocked = false;
	if (m_nset->isAutoNotesWidth())
		m_SizeVLocked = true;
	else
		m_SizeVLocked = false;
	if (m_nset->isAutoNotesHeight() && m_nset->isAutoNotesWidth())
		m_SizeLocked = true;
	else
		m_SizeLocked = false;
}

void PageItem_NoteFrame::layout()
{
	if (!invalid || deleteIt)
		return;
	if (!m_Doc->flag_layoutNotesFrames || m_Doc->isLoading())
		return;
	if (itemText.length() == 0)
		return;
	if ((masterFrame() != NULL) && masterFrame()->invalid)
		masterFrame()->layout();

	if (m_nset->isAutoNotesWidth() && (Width != m_masterFrame->width()))
	{
		Width = m_masterFrame->width();
		updateClip();
	}

	if ((m_Doc->appMode == modeEdit) && isSelected())
		updateNotesText();

	PageItem_TextFrame::layout();
	if (notesSet()->isAutoNotesHeight())
	{
		if (frameOverflows())
		{
			//increase height while text don`t fit in frame
			double maxH = m_Doc->currentPage()->height() - Xpos;
			while (frameOverflows())
			{
				Height += 8;
				updateClip(false);
				invalid = true;
				PageItem_TextFrame::layout();
				if (Height >= maxH)
					break;
			}
		}
		while ((!frameOverflows()))
		{
			--Height;
			updateClip(false);
			invalid = true;
			PageItem_TextFrame::layout();
		}
		++Height;
		updateClip();
		invalid = true;
		PageItem_TextFrame::layout();
	}
	m_Doc->regionsChanged()->update(getBoundingRect());
	invalid = false;
}

void PageItem_NoteFrame::insertNote(TextNote *note, int index)
{
	if (index < 0) return;
	Mark* mrk = note->noteMark();
	if (mrk == NULL)
	{
		mrk = new Mark();
		mrk->setType(MARKNoteFrameType);
		QString label = "NoteFrameMark_" + notesSet()->name();
		if (notesSet()->range() == NSRsection)
			label += " in section " + m_Doc->getSectionNameForPageIndex(note->masterMark()->OwnPage) + " page " + QString::number(note->masterMark()->OwnPage +1);
		else if (notesSet()->range() == NSRpage)
			label += " on page " + QString::number(note->masterMark()->OwnPage +1);
		else if (notesSet()->range() == NSRstory)
			label += " in " + note->masterMark()->getItemPtr()->firstInChain()->itemName();
		else if (notesSet()->range() == NSRframe)
			label += " in frame " + note->masterMark()->getItemName();
		mrk->label = label + "_" + note->numString();
		mrk->setNotePtr(note);
		getUniqueName(mrk->label, m_Doc->marksLabelsList(MARKNoteFrameType), "_");
		note->setNoteMark(mrk);
		m_Doc->m_docMarksList.append(mrk);
	}
	mrk->setItemPtr(this);

	mrk->setString(notesSet()->prefix() + note->numString() + note->notesSet()->suffix());

	//find position for inserting new note
	int len = itemText.length();
	if (index == 0)
	{
		itemText.insertMark(mrk,0);
		if (len > 0)
			itemText.insertChars(1, SpecialChars::PARSEP);
		if (!note->saxedText().isEmpty())
			itemText.insert(1, desaxeString(m_Doc, note->saxedText()));
	}
	else
	{
		int notesIndex = 0;
		int pos;
		for (pos=0; pos < len; ++pos)
		{
			ScText* hl = itemText.item(pos);
			//inside footnote frame are available endnotes marks, so we must check if mark`s noteset is same as noteset of note
			if (hl->hasMark() && hl->mark->isType(MARKNoteFrameType) && (hl->mark->getNotePtr()->notesSet() == note->notesSet()))
			{
				if (notesIndex == index)
				{
					itemText.insertMark(mrk,pos);
					itemText.insertChars(pos +1, SpecialChars::PARSEP);
					if (!note->saxedText().isEmpty())
						itemText.insert(pos+1,desaxeString(m_Doc, note->saxedText()));
					invalidateLayout();
					return;
				}
				++notesIndex;
			}
		}
		//inserting note at end of notes frame
		itemText.insertChars(itemText.length(), SpecialChars::PARSEP);
		itemText.insertMark(mrk, itemText.length());
		if (!note->saxedText().isEmpty())
			itemText.insert(itemText.length(), desaxeString(m_Doc, note->saxedText()));
	}
}

void PageItem_NoteFrame::updateNotes(QList<TextNote*> nList, bool clear)
{
	if (nList == l_notes)
		return;
	m_Doc->flag_notesChanged = true;
	itemText.blockSignals(true);

	if (clear)
	{
		clearContents();
		l_notes = nList;
		for (int a=0; a < l_notes.count(); ++a)
			insertNote(l_notes.at(a),a);
	}
	else
	{
		//just insert new notes into frame notes list
		int count = nList.count();
		if (count > 0)
		{
			for (int i=0; i< count; ++i)
			{
				TextNote* note = nList.at(i);
				if (!l_notes.contains(note))
				{
					l_notes.append(note);
					insertNote(note, note->num() -1);
				}
			}
		}
	}
	itemText.blockSignals(false);
	invalid = true;
}

void PageItem_NoteFrame::updateNotesText()
{
	//read texts from notes frame and copy it to note`s data
	if (itemText.length() ==0)
		return;

	int oldSelStart = itemText.startOfSelection();
	int oldSelLen = itemText.lengthOfSelection();

	int pos = 0;
	int startPos = 0;
	TextNote *note = NULL;
	Mark* prevMrk = NULL;
	while (pos < itemText.length())
	{
		ScText* hl = itemText.item(pos);
		if (hl->hasMark() && (hl->mark->getType() == MARKNoteFrameType))
		{
			if (prevMrk != NULL)
			{
				note = prevMrk->getNotePtr();
				if (note != NULL)
				{
					int offset = 0;
					if (itemText.text(pos-1) == SpecialChars::PARSEP)
						++offset;
					int len = pos - startPos -offset;
					if (len <= 0)
						note->setSaxedText("");
					else
						note->setSaxedText(getItemTextSaxed(startPos, len));
					itemText.deselectAll();
				}
			}
			prevMrk = hl->mark;
			startPos = pos +1;
		}
		++pos;
	}
	note = prevMrk->getNotePtr();
	if (startPos != pos && note != NULL)
		note->setSaxedText(getItemTextSaxed(startPos, pos - startPos));
	itemText.deselectAll();
	if (oldSelLen > 0)
		itemText.select(oldSelStart, oldSelLen);
}

int PageItem_NoteFrame::findNoteCpos(TextNote* note)
{
	//find position of note in note`s frame
	if (itemText.length() == 0)
		return -1;
	for (int pos=0; pos < itemText.length(); ++pos)
	{
		ScText* hl = itemText.item(pos);
		if (hl->hasMark() && (hl->mark->getType() == MARKNoteFrameType))
		{
			if (hl->mark->getNotePtr() == note)
				return (pos);
		}
	}
	return -1;
}
