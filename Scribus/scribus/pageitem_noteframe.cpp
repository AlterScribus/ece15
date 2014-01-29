#include <QMessageBox>
#include "pageitem_line.h"
#include "pageitem_noteframe.h"
#include "pageitem_textframe.h"
#include "pageitem.h"
#include "scpage.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "undomanager.h"
#include "util_text.h"
#include "util_math.h"

#include <cmath>

PageItem_NoteFrame::PageItem_NoteFrame(const NotesStyle* const nStyle, ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline)
	: PageItem_TextFrame(doc, x, y, w, h, w2, fill, outline)
{
	m_masterFrame = NULL;
	m_nstyle = const_cast<NotesStyle*>(nStyle);
	init();
}

PageItem_NoteFrame::PageItem_NoteFrame(ScribusDoc *doc, double x, double y, double w, double h, double w2, QString fill, QString outline)
	: PageItem_TextFrame(doc, x, y, w, h, w2, fill, outline)
{
	m_nstyle = NULL;
	m_masterFrame = NULL;
	textFlowModeVal = TextFlowUsesFrameShape;
	deleteIt = false;
	m_topLine = NULL;
	m_notesList.empty();
}

PageItem_NoteFrame::PageItem_NoteFrame(PageItem_TextFrame* inFrame, const NotesStyle* const nStyle) : PageItem_TextFrame(inFrame->doc(),inFrame->xPos(), inFrame->yPos(),inFrame->width(), inFrame->height(),inFrame->lineWidth(), inFrame->fillColor(), inFrame->lineColor())
{
	m_masterFrame = inFrame;
	m_nstyle = const_cast<NotesStyle*>(nStyle);
	init();
	
	double frameHeight = calculateLineSpacing(itemText.defaultStyle(), this);
	if (frameHeight == 0.0 && !m_nstyle->isAutoNotesHeight())
		frameHeight = itemText.defaultStyle().charStyle().fontSize()/10;
	m_height = oldHeight = frameHeight;
	oldWidth = m_width;
	oldRot = m_rotation;
	oldXpos = m_xPos;
	m_yPos = oldYpos =m_masterFrame->yPos() + m_masterFrame->height();
	
	if (m_nstyle->isAutoWeldNotesFrames() && (m_masterFrame != NULL))
	{
		addWelded(m_masterFrame);
		m_masterFrame->addWelded(this);
		m_masterFrame->setWeldPoint(0, m_masterFrame->height(), this);
		setWeldPoint(0,0, m_masterFrame);
	}
}

void PageItem_NoteFrame::init()
{
	itemText.clear();
	
	AnName = generateUniqueCopyName(m_nstyle->isEndNotes() ? tr("Endnote frame ") + m_nstyle->name() : tr("Footnote frame ") + m_nstyle->name(), false);
	AutoName = false; //endnotes frame will saved with name
	m_topLine = NULL;
	setUName(AnName);
	
	//set default style for note frame
	ParagraphStyle newStyle;
	if (m_nstyle->notesParStyle().isEmpty() || (m_nstyle->notesParStyle() == tr("No Style")))
	{
		if (m_nstyle->isEndNotes())
			//set default doc style
			newStyle.setParent(m_Doc->paragraphStyles()[0].name());
		else
		{
			//newStyle.setParent(m_masterFrame->itemText.defaultStyle().parent());
			newStyle.setStyle(m_masterFrame->itemText.defaultStyle());
		}
	}
	else
		newStyle.setParent(m_nstyle->notesParStyle());
	itemText.blockSignals(true);
	itemText.setDefaultStyle(newStyle);
	itemText.blockSignals(false);
	
	textFlowModeVal = TextFlowUsesFrameShape;
	setColumns(1);
	
	if (m_nstyle->isAutoNotesHeight())
		m_SizeVLocked = true;
	else
		m_SizeVLocked = false;
	if (m_nstyle->isAutoNotesWidth())
		m_SizeHLocked = true;
	else
		m_SizeHLocked = false;
	if (m_nstyle->isAutoNotesHeight() && m_nstyle->isAutoNotesWidth())
		m_SizeLocked = true;
	else
		m_SizeLocked = false;
	deleteIt = false;
	m_notesList.empty();
}

PageItem_NoteFrame::~PageItem_NoteFrame()
{
	Q_ASSERT(!m_masterFrame->notesFramesList().contains(this));
	if (m_topLine != NULL)
		delete m_topLine;
}

void PageItem_NoteFrame::setNotesStyle(const NotesStyle* const nStyle, PageItem_TextFrame* master)
{
	m_nstyle = const_cast<NotesStyle*>(nStyle);
	if (master != NULL)
		m_masterFrame = master;
	itemText.clear();
	
	AnName = generateUniqueCopyName(m_nstyle->isEndNotes() ? "Endnote frame " + m_nstyle->name() : "Footnote frame " + m_nstyle->name(), false);
	setUName(AnName);
	
	//set default style for note frame
	ParagraphStyle newStyle;
	if (nStyle->notesParStyle().isEmpty() || (nStyle->notesParStyle() == tr("No Style")))
	{
		if (nStyle->isEndNotes() || (m_masterFrame == NULL))
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
		newStyle.setParent(nStyle->notesParStyle());
	itemText.blockSignals(true);
	itemText.setDefaultStyle(newStyle);
	itemText.blockSignals(false);
	
	if (m_nstyle->isAutoNotesHeight())
		m_SizeVLocked = true;
	else
		m_SizeVLocked = false;
	if (m_nstyle->isAutoNotesWidth())
		m_SizeHLocked = true;
	else
		m_SizeHLocked = false;
	if (m_nstyle->isAutoNotesHeight() && m_nstyle->isAutoNotesWidth())
		m_SizeLocked = true;
	else
		m_SizeLocked = false;
}

void PageItem_NoteFrame::layout()
{
	if (deleteIt)
		return;
	if (m_Doc->flag_layoutNotesFrames)
		invalid = true;
	if (!invalid || m_notesList.isEmpty())
		return;
	if (itemText.length() == 0)
		return;
	if ((masterFrame() != NULL) && masterFrame()->invalid)
		return;
	
	//while layouting notes frames undo should be disabled
	UndoManager::instance()->setUndoEnabled(false);

	updateTopLine();
	if (m_nstyle->isAutoNotesWidth() && (m_width != m_masterFrame->width()))
	{
		oldWidth = m_width = m_masterFrame->width();
		updateClip();
	}
	
	if ((m_Doc->appMode == modeEdit) && isSelected())
		updateNotesText();

	PageItem_TextFrame::layout();
	int oldH = m_height;
	QRectF oldBox = getBoundingRect();
	if (getNotesStyle()->isAutoNotesHeight())
		setTextFrameHeight();
	if (oldH != height() && masterFrame() != NULL)
	{
		foreach(PageItem_NoteFrame* nF, masterFrame()->notesFramesList())
			nF->invalid = true;
		if (frameOverflows())
		{
			//increase height while text don`t fit in frame
			double maxH = m_Doc->currentPage()->height() - m_xPos;
			while (frameOverflows())
			{
				oldHeight = m_height += 8;
				updateClip(false);
				invalid = true;
				PageItem_TextFrame::layout();
				if (m_height >= maxH)
					break;
			}
		}
		double hackValue = 1;
		oldHeight = m_height = ceil(maxY) + m_textDistanceMargins.Bottom + hackValue;
		updateConstants();
		updateClip();
		invalid = true;
		PageItem_TextFrame::layout();
	}
	if (oldH != height())
	{
		if (masterFrame() != NULL)
		{
			foreach(PageItem_NoteFrame* nF, masterFrame()->notesFramesList())
				nF->invalid = true;
		}
	}
	invalid = false;
	m_Doc->regionsChanged()->update(getBoundingRect().united(oldBox));
	UndoManager::instance()->setUndoEnabled(true);
}

void PageItem_NoteFrame::insertNote(const TextNote * const note)
{
	Mark* mrk = note->noteMark();
	if (mrk == NULL)
	{
		mrk = m_Doc->newMark();
		mrk->setType(MARKNoteFrameType);
		Q_ASSERT(note->masterMark());
		QString label = note->masterMark()->getLabel().replace("NoteMark", "NoteFrameMark");
		mrk->setLabel(label);
		mrk->setNotePtr(const_cast<TextNote*>(note));
		const_cast<TextNote*>(note)->setNoteMark(mrk);
	}
	mrk->setOwnPage(OwnPage);
	mrk->setHolderName(AnName);
	mrk->setString(getNotesStyle()->prefix() + note->numString() + note->notesStyle()->suffix());
	
	StoryText* story = new StoryText(m_Doc);
	story->setDefaultStyle(itemText.defaultStyle());
	if (!note->saxedText().isEmpty())
		story->insert(desaxeStoryFromString(m_Doc, note->saxedText()));
	story->insertMark(mrk, 0);
	story->applyCharStyle(0,1,note->getCharStyleNoteMark());
	//	story.applyCharStyle(0, story.length(), itemText.charStyle());
	if (itemText.length() > 0)
		itemText.insertChars(itemText.length(), SpecialChars::PARSEP);
	mrk->setCPos(itemText.length());
	itemText.insert(itemText.length(), *story);
	delete story;
}

void PageItem_NoteFrame::updateTopLine()
{
	UndoManager::instance()->setUndoEnabled(false);
	if (isequiv(m_nstyle->topLineWidth(),0.0))
	{
		if (m_topLine)
			delete m_topLine;
	}
	else
	{
		if (m_topLine == NULL)
		{
			m_topLine = new PageItem_Line(m_Doc, xPos(), yPos(), width() * (getNotesStyle()->topLineWidth()), 0, m_Doc->itemToolPrefs().lineWidth, CommonStrings::None, m_Doc->itemToolPrefs().lineColor);
			m_topLine->setLocked(true);
		}
		else
			m_topLine->setXYPos(xPos(), yPos());
		m_topLine->setWidth(width() * (getNotesStyle()->topLineWidth()));
		m_topLine->setFillColor(CommonStrings::None);
		if (getNotesStyle()->topLineStyle() != "" && getNotesStyle()->topLineStyle() != tr("No Style"))
		{
			m_topLine->setCustomLineStyle(getNotesStyle()->topLineStyle());

			multiLine ml = m_Doc->MLineStyles[getNotesStyle()->topLineStyle()];
			m_topLine->setHeight(ml.at(0).Width);
		}
	}
	UndoManager::instance()->setUndoEnabled(true);
}

void PageItem_NoteFrame::updateNotes(QList<TextNote*> &nList)
{
	if (nList == m_notesList)
		return;
	m_Doc->setNotesChanged(true);
	m_notesList = nList;
	updateNotes();
}

void PageItem_NoteFrame::updateNotes()
{
	UndoManager::instance()->setUndoEnabled(false);
	if (itemText.length() > 0)
	{
		itemText.selectAll();
		itemText.removeSelection();
	}
	for (int a=0; a < m_notesList.count(); ++a)
		insertNote(m_notesList.at(a));
	UndoManager::instance()->setUndoEnabled(true);
	invalid = true;
}

void PageItem_NoteFrame::updateNotesText()
{
	//read texts from notes frame and copy it to note`s data
	if (m_notesList.isEmpty() || (itemText.length() == 0))
		return;
	
	int oldSelStart = itemText.startOfSelection();
	int oldSelLen = itemText.lengthOfSelection();
	int pos = 0;
	int startPos = 0;
	TextNote *note = NULL;
	Mark* prevMrk = NULL;
	while (pos < itemText.length())
	{
		if (itemText.hasMarkType(pos, MARKNoteFrameType))
		{
			Mark* mark = itemText.mark(pos);
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
			prevMrk = mark;
			startPos = pos +1;
		}
		++pos;
	}
	if (prevMrk != NULL)
	{
		note = prevMrk->getNotePtr();
		Q_ASSERT(note != NULL);
		if (startPos != pos)
			note->setSaxedText(getItemTextSaxed(startPos, pos - startPos));
		else //empty note text (only note marker)
			note->setSaxedText("");
//		note->setCharStyleNoteMark(lastNoteMarkCharStyle);
	}
	if (oldSelLen > 0)
		itemText.select(oldSelStart, oldSelLen, false);
	else
		itemText.deselectAll();
}

void PageItem_NoteFrame::deleteAllNotes()
{
	if (itemText.length() == 0)
		return;

	UndoTransaction* trans = new UndoTransaction(undoManager->beginTransaction(Um::Selection,Um::IDelete,Um::Delete,"",Um::IDelete));

	updateNotesText();
	for (int i= itemText.length() -1; i >= 0; --i)
	{
		if (itemText.hasMark(i))
		{
			if (TextNote* note = itemText.mark(i)->getNotePtr())
			{
				m_Doc->setUndoDelNote(note);
				itemText.deselectAll();
				itemText.select(note->noteMark()->getCPos() + 1, desaxeStoryFromString(m_Doc,note->saxedText()).length());
				removeMarksFromText(false);
				itemText.removeSelection();
				m_Doc->deleteNote(note);
				i = qMin(i, itemText.length());
			}
		}
	}
	trans->commit();
	delete trans;
	m_Doc->updateListNumbers();
	m_Doc->updateMarks();
}

void PageItem_NoteFrame::restoreDeleteNoteText(SimpleState *state, bool isUndo)
{
	PageItem::restoreDeleteFrameText(state, isUndo);
	updateNotesText();
}

void PageItem_NoteFrame::restoreInsertNoteText(SimpleState *state, bool isUndo)
{
	PageItem::restoreInsertFrameText(state, isUndo);
	updateNotesText();
}

void PageItem_NoteFrame::unWeld(bool doUndo)
{
	if (doUndo)
		PageItem::unWeld();
	else
	{
		for (int a = 0 ; a < weldList.count(); a++)
		{
			weldingInfo wInf = weldList.at(a);
			PageItem *pIt = wInf.weldItem;
			for (int b = 0 ; b < pIt->weldList.count(); b++)
			{
				weldingInfo wInf2 = pIt->weldList.at(b);
				PageItem *pIt2 = wInf2.weldItem;
				if (pIt2 == this)
				{
					pIt->weldList.removeAt(b);
					break;
				}
			}
		}
		weldList.clear();
	}
}

void PageItem_NoteFrame::setMarkedForDelete(bool value)
{
	deleteIt = value && isAutoNoteFrame();
	m_notesList.clear();
	itemText.clear();
}


int PageItem_NoteFrame::findNoteCpos(const TextNote* const note) const
{
    //find position of note in note`s frame
    if (itemText.length() == 0)
		return -1;
	for (int pos=0; pos < itemText.length(); ++pos)
	{
		Mark* mark = itemText.mark(pos);
		if (itemText.hasMarkType(pos,MARKNoteFrameType))
		{
			if (mark->getNotePtr() == note)
				return (pos);
		}
	}
	return -1;
}

void PageItem_NoteFrame::DrawObj_Item(ScPainter *p, QRectF e)
{
	PageItem_TextFrame::DrawObj_Item(p,e);
	if (m_topLine)
		m_topLine->DrawObj_Item(p,e);
}
