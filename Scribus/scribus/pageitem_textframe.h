/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          pageitem.h  -  description
                             -------------------
    copyright            : Scribus Team
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef PAGEITEMTEXTFRAME_H
#define PAGEITEMTEXTFRAME_H

#include <QMap>
#include <QRectF>
#include <QString>
#include <QKeyEvent>

#include "scribusapi.h"
#include "pageitem.h"
#include "marks.h"
#include "notesstyles.h"

class PageItem_NoteFrame;
class ScPainter;
class ScribusDoc;

typedef QMap<PageItem_NoteFrame*, QList<TextNote *> > NotesInFrameMap;


//cezaryece: I remove static statement and made it public as this function is used also by PageItem_NoteFrame
double calculateLineSpacing (const ParagraphStyle &style, PageItem *item);

class SCRIBUS_API PageItem_TextFrame : public PageItem
{
	Q_OBJECT

public:
	PageItem_TextFrame(ScribusDoc *pa, double x, double y, double w, double h, double w2, QString fill, QString outline);
	PageItem_TextFrame(const PageItem & p);
	~PageItem_TextFrame() {};

	virtual PageItem_TextFrame * asTextFrame() { return this; }
	virtual bool isTextFrame() const { return true; }
	
	virtual void clearContents();
	
	/**
	* \brief Handle keyboard interaction with the text frame while in edit mode
	* @param k key event
	* @param keyRepeat a reference to the keyRepeat property
	*/
	virtual void handleModeEditKey(QKeyEvent *k, bool& keyRepeat);
	void deleteSelectedTextFromFrame();
	void setNewPos(int oldPos, int len, int dir);
	void ExpandSel(int dir, int oldPos);
	void deselectAll();
	
	//for speed up updates when changed was only one frame from chain
	virtual void invalidateLayout(bool wholeChain);
	using PageItem::invalidateLayout;
	virtual void layout();
	//return true if all previouse frames from chain are valid (including that one)
	bool isValidChainFromBegin();
	//simplify conditions checking if frame is in chain
	//FIX: use it in other places
	bool isInChain() { return ((prevInChain() != NULL) || (nextInChain() != NULL)); }
	void setTextAnnotationOpen(bool open);

	double columnWidth(int colNr);

	//enable/disable marks inserting actions depending on editMode
	void togleEditModeActions();
	QRegion availableRegion() { return m_availableRegion; }

protected:
	QRegion calcAvailableRegion();
	QRegion m_availableRegion;
	virtual void DrawObj_Item(ScPainter *p, QRectF e);
	virtual void DrawObj_Post(ScPainter *p);
	virtual void DrawObj_Decoration(ScPainter *p);
	//void drawOverflowMarker(ScPainter *p);
	void drawUnderflowMarker(ScPainter *p);
	void drawColumnBorders(ScPainter *p);
	
	bool unicodeTextEditMode;
	int unicodeInputCount;
	QString unicodeInputString;

	void drawNoteIcon(ScPainter *p);
	virtual bool createInfoGroup(QFrame *, QGridLayout *);
	virtual void applicableActions(QStringList& actionList);
	virtual QString infoDescription();
	// Move incomplete lines from the previous frame if needed.
	bool moveLinesFromPreviousFrame ();
	bool adjustParagraphEndings(int &a, bool EndOfFrame = true);

private:
	bool cursorBiasBackward;
	// If the last paragraph had to be split, this is how many lines of the paragraph are in this frame.
	// Used for orphan/widow control
	int incompleteLines;
	// This holds the line splitting positions
	QList<int> incompletePositions;

	void setShadow();
	QString currentShadow;
	QMap<QString,StoryText> shadows;
	bool checkKeyIsShortcut(QKeyEvent *k);
	ScText * lastVisibleGlyph; //storing last visible glyph in text frame - if it not change then dont force invalidating next frame
	//saving columns Start/End char positions for validate orphan/widow
	//next this positions will be compared with start/end of paragraphs
	struct SEColumn
	{
		int start;
		int end;
	};
	QMap<int,SEColumn> SEColumnsMap; //contains start/end data for columns in frame
	bool setColumnSE(int col, int Cstart, int Cend); // sets start/end positions for column col in QMap startendColumn field
	bool isWarnedText(int pos);
	QRectF m_origAnnotPos;
	
private slots:
	void slotInvalidateLayout();

public:
	//for footnotes/endnotes
	bool hasNoteMark(const NotesStyle* const nStyle = NULL);
	bool hasNoteFrame(const NotesStyle* const nStyle, bool inChain = false);
	//return set of items in interaction with deleted noteframe
	QSet<PageItem_TextFrame *> delAllNoteFrames();
	void removeNoteFrame(PageItem_NoteFrame* nF) { m_notesFramesMap.remove(nF); }
	void notesFramesLayout();
	//removing all marsk from text, returns number of removed marks
	int removeMarksFromText(bool doUndo);
	//return note frame for given notes style if current text frame has notes marks with this style
	PageItem_NoteFrame* itemNoteFrame(const NotesStyle* const nStyle);
	//list all notes frames for current text frame /with endnotes frames if endnotes marks are in that frame/
	QList<PageItem_NoteFrame*> notesFramesList() { return m_notesFramesMap.keys(); }
	//list of notes inserted by current text frame into given noteframe
	QList<TextNote*> notesList(PageItem_NoteFrame* nF) { return m_notesFramesMap.value(nF); }
	//insert note frame to list with empty notes list
	void setNoteFrame(PageItem_NoteFrame* nF);
	void invalidateNotesFrames();

private:
	NotesInFrameMap m_notesFramesMap;
	void updateItemNotes(QMap<int, Mark*> &notesMarksPositions);
	NotesInFrameMap updateNotesFrames(QMap<int, Mark*> &noteMarksPosistions); //update notes frames content
	void updateNotesMarks(NotesInFrameMap &notesMap);
	Mark* selectedMark(bool onlySelection = true);
    TextNote* noteFromSelectedNoteMark(int& foundPos, bool onlySelection = true);
	TextNote* noteFromSelectedNoteMark(bool onlySelection = true);
protected:
	// set text frame height to last line of text
	long maxY;
	void setMaxY(long y);

public:
	ScText * firstVisibleGlyph; //storing last visible glyph in text frame - if it not change then dont force invalidating next frame
	
	int getColumnSE(int col, bool start); // return start or end position for column col from QMap startendColumn field, start default value is true
	void setTextFrameHeight();
	QList<QPair<int, int> > warnedList;
	void increaseHeightAndUpdate(double addValue);
};

#endif
