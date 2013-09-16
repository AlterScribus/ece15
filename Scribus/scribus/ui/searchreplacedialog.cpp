#include "searchreplacedialog.h"

#include "colorcombo.h"
#include "colorlistbox.h"
#include "commonstrings.h"
#include "fontcombo.h"
#include "prefscontext.h"
#include "prefsfile.h"
#include "prefsmanager.h"
#include "scpage.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "scrspinbox.h"
#include "selection.h"
#include "shadebutton.h"
#include "styleselect.h"
#include "ui/storyeditor.h"
#include "util.h"
#include "util_icon.h"
#include "util_text.h"
#include "text/nlsconfig.h"

#include <QtWidgets/QMessageBox>

const int RANGE_ITEMS = 0;
const int RANGE_STORY = 1;
const int RANGE_PAGE = 2;
const int RANGE_DOCUMENT = 3;

const int PAGE_STRINGS = 0;
const int PAGE_STYLES = 1;
const int PAGE_GRAPHICS = 2;

SearchReplaceDialog::SearchReplaceDialog(QWidget *parent, ScribusDoc *doc, bool mode )
	: QDialog( parent ), ReplStart(0), matchesFound(0), currItemIndex(0)
{
	setupUi(this);
	setWindowIcon(QIcon(loadIcon ( "AppIcon.png" )));
	ColorList::Iterator it;
	Item = NULL;
	Doc = doc;
	unitChange(Doc->unitIndex());
	styleEditorMode = mode;
	languageChange();
	fillColorCombos();
	toolBox->setCurrentIndex(0);
	toolBox->setItemEnabled(PAGE_GRAPHICS, !styleEditorMode);
	NotFound = false;
	STextVal->setEnabled(false);
	SStyleVal->setEditable(false);
	for (int x = 0; x < Doc->paragraphStyles().count(); ++x)
		SStyleVal->addItem(Doc->paragraphStyles()[x].name());
	QListView *tmpView = dynamic_cast<QListView*>(SStyleVal->view()); Q_ASSERT(tmpView);
	int tmpWidth = tmpView->sizeHintForColumn(0);
	if (tmpWidth > 0)
		tmpView->setMinimumWidth(tmpWidth + 24);
	SStyleVal->setCurrentIndex(findParagraphStyle(Doc, Doc->currentStyle));
	SStyleVal->setEnabled(false);
	SAlignVal->setEditable(false);
	SAlignVal->setEnabled(false);
	SFontVal->setMaximumSize(190, 30);
	setCurrentComboItem(SFontVal, Doc->currentStyle.charStyle().font().scName());
	SFontVal->setEnabled(false);
	SSizeVal->setValue( Doc->currentStyle.charStyle().fontSize() / 10.0 );
	SSizeVal->setEnabled(false);
	SEffVal->setStyle(0);
	SEffVal->setEnabled(false);
	SFillVal->setEditable(false);
	setCurrentComboItem(SFillVal, Doc->currentStyle.charStyle().fillColor());
	SFillVal->setEnabled(false);
	SFillSVal->setEnabled(false);
	SStrokeVal->setEditable(false);
	setCurrentComboItem(SStrokeVal, Doc->currentStyle.charStyle().strokeColor());
	SStrokeVal->setEnabled(false);
	SStrokeSVal->setEnabled(false);
	RTextVal->setEnabled(false);
	RStyleVal->setEditable(false);
	for (int x = 0; x < Doc->paragraphStyles().count(); ++x)
		RStyleVal->addItem(Doc->paragraphStyles()[x].name());
	tmpView = dynamic_cast<QListView*>(RStyleVal->view()); Q_ASSERT(tmpView);
	tmpWidth = tmpView->sizeHintForColumn(0);
	if (tmpWidth > 0)
		tmpView->setMinimumWidth(tmpWidth + 24);
	RStyleVal->setCurrentIndex(findParagraphStyle(Doc, Doc->currentStyle));
	RStyleVal->setEnabled(false);
	RAlignVal->setEditable(false);
	RAlignVal->setEnabled(false);
	RFontVal->setMaximumSize(190, 30);
	setCurrentComboItem(RFontVal, Doc->currentStyle.charStyle().font().scName());
	RFontVal->setEnabled(false);
	RSizeVal->setValue( Doc->currentStyle.charStyle().fontSize() / 10.0 );
	RSizeVal->setEnabled(false);
	REffVal->setStyle(0);
	REffVal->setEnabled(false);
	RFillVal->setEditable(false);
	setCurrentComboItem(RFillVal, Doc->currentStyle.charStyle().fillColor());
	RFillVal->setEnabled(false);
	RFillSVal->setEnabled(false);
	RStrokeVal->setEditable(false);
	setCurrentComboItem(RStrokeVal, Doc->currentStyle.charStyle().strokeColor());
	RStrokeVal->setEnabled(false);
	RStrokeSVal->setEnabled(false);

	SItemTypeVal->setEnabled(false);
	SItemFillModeVal->setEnabled(false);
	SItemFillColorVal->setEnabled(false);
	SItemFillOpacityVal->setEnabled(false);
	SItemShadeVal->setEnabled(false);
	SItemStrokeVal->setEnabled(false);
	SItemStrokeColorVal->setEnabled(false);
	SItemStrokeModeVal->setEnabled(false);
	SItemStrokeSVal->setEnabled(false);
	RItemTypeVal->setEnabled(false);
	RItemFillModeVal->setEnabled(false);
	RItemFillColorVal->setEnabled(false);
	RItemFillOpacityVal->setEnabled(false);
	RItemShadeVal->setEnabled(false);
	RItemStrokeVal->setEnabled(false);
	RItemStrokeColorVal->setEnabled(false);
	RItemStrokeModeVal->setEnabled(false);
	RItemStrokeSVal->setEnabled(false);

	if (mode)
		Word->setEnabled(false);
	if (mode)
		CaseIgnore->setEnabled(false);
	DoSearch->setDefault( true );
	DoReplace->setEnabled(false);
	AllReplace->setEnabled(false);
	
	resize(minimumSizeHint());
	
	// signals and slots connections
	connect( Leave, SIGNAL( clicked() ), this, SLOT( writePrefs() ) );
	connect( DoSearch, SIGNAL( clicked() ), this, SLOT( slotSearch() ) );
	connect( DoReplace, SIGNAL( clicked() ), this, SLOT( slotReplace() ) );
	connect( AllReplace, SIGNAL( clicked() ), this, SLOT( slotReplaceAll() ) );
	connect( clearButton, SIGNAL(clicked()), this, SLOT(clear()));

	connect( SText, SIGNAL( clicked() ), this, SLOT( enableTxSearch() ) );
	connect( SStyle, SIGNAL( clicked() ), this, SLOT( enableStyleSearch() ) );
	connect( SAlign, SIGNAL( clicked() ), this, SLOT( enableAlignSearch() ) );
	connect( SFont, SIGNAL( clicked() ), this, SLOT( enableFontSearch() ) );
	connect( SSize, SIGNAL( clicked() ), this, SLOT( enableSizeSearch() ) );
	connect( SEffect, SIGNAL( clicked() ), this, SLOT( enableEffSearch() ) );
	connect( SFill, SIGNAL( clicked() ), this, SLOT( enableFillSearch() ) );
	connect( SFillS, SIGNAL( clicked() ), this, SLOT( enableFillSSearch() ) );
	connect( SStrokeS, SIGNAL( clicked() ), this, SLOT( enableStrokeSSearch() ) );
	connect( SStroke, SIGNAL( clicked() ), this, SLOT( enableStrokeSearch() ) );
	connect( RText, SIGNAL( clicked() ), this, SLOT( enableTxReplace() ) );
	connect( RStyle, SIGNAL( clicked() ), this, SLOT( enableStyleReplace() ) );
	connect( RAlign, SIGNAL( clicked() ), this, SLOT( enableAlignReplace() ) );
	connect( RFont, SIGNAL( clicked() ), this, SLOT( enableFontReplace() ) );
	connect( RSize, SIGNAL( clicked() ), this, SLOT( enableSizeReplace() ) );
	connect( REffect, SIGNAL( clicked() ), this, SLOT( enableEffReplace() ) );
	connect( RFill, SIGNAL( clicked() ), this, SLOT( enableFillReplace() ) );
	connect( RStroke, SIGNAL( clicked() ), this, SLOT( enableStrokeReplace() ) );
	connect( RFillS, SIGNAL( clicked() ), this, SLOT( enableFillSReplace() ) );
	connect( RStrokeS, SIGNAL( clicked() ), this, SLOT( enableStrokeSReplace() ) );
	
	connect( SItemType, SIGNAL( clicked() ), this, SLOT( enableItemTypeSearch() ) );
	connect( SItemFillMode, SIGNAL( clicked() ), this, SLOT( enableItemFillModeSearch() ) );
	connect( SItemFillColor, SIGNAL( clicked() ), this, SLOT( enableItemFillColorSearch() ) );
	connect( SItemFillOpacity, SIGNAL( clicked() ), this, SLOT( enableItemFillOpacitySearch() ) );
	connect( SItemShade, SIGNAL( clicked() ), this, SLOT( enableItemShadeSearch() ) );
	connect( SItemStroke, SIGNAL( clicked() ), this, SLOT( enableItemStrokeSearch() ) );
	connect( SItemStrokeMode, SIGNAL( clicked() ), this, SLOT( enableItemStrokeModeSearch() ) );
	connect( SItemStrokeColor, SIGNAL( clicked() ), this, SLOT( enableItemStrokeColorSearch() ) );
	connect( SItemStrokeS, SIGNAL( clicked() ), this, SLOT( enableItemStrokeSSearch() ) );

	connect( RItemType, SIGNAL( clicked() ), this, SLOT( enableItemTypeReplace() ) );
	connect( RItemFillMode, SIGNAL( clicked() ), this, SLOT( enableItemFillModeReplace() ) );
	connect( RItemFillColor, SIGNAL( clicked() ), this, SLOT( enableItemFillColorReplace() ) );
	connect( RItemFillOpacity, SIGNAL( clicked() ), this, SLOT( enableItemFillOpacityReplace() ) );
	connect( RItemShade, SIGNAL( clicked() ), this, SLOT( enableItemShadeReplace() ) );
	connect( RItemStroke, SIGNAL( clicked() ), this, SLOT( enableItemStrokeReplace() ) );
	connect( RItemStrokeMode, SIGNAL( clicked() ), this, SLOT( enableItemStrokeModeReplace() ) );
	connect( RItemStrokeColor, SIGNAL( clicked() ), this, SLOT( enableItemStrokeColorReplace() ) );
	connect( RItemStrokeS, SIGNAL( clicked() ), this, SLOT( enableItemStrokeSReplace() ) );


	// tab order
	setTabOrder( SText, SStyle );
	setTabOrder( SStyle, SFont );
	setTabOrder( SFont, SSize );
	setTabOrder( SSize, SEffect );
	setTabOrder( SEffect, SFill );
	setTabOrder( SFill, SStroke );
	setTabOrder( SStroke, STextVal );
	setTabOrder( STextVal, SStyleVal );
	setTabOrder( SStyleVal, SAlignVal );
	setTabOrder( SAlignVal, SFontVal );
	setTabOrder( SFontVal, SSizeVal );
	setTabOrder( SSizeVal, SEffVal );
	setTabOrder( SEffVal, SFillVal );
	setTabOrder( SFillVal, SStrokeVal );
	setTabOrder( SStrokeVal, RText );
	setTabOrder( RText, RStyle );
	setTabOrder( RStyle, RFont );
	setTabOrder( RFont, RSize );
	setTabOrder( RSize, REffect );
	setTabOrder( REffect, RFill );
	setTabOrder( RFill, RStroke );
	setTabOrder( RStroke, RTextVal );
	setTabOrder( RTextVal, RStyleVal );
	setTabOrder( RStyleVal, RAlignVal );
	setTabOrder( RAlignVal, RFontVal );
	setTabOrder( RFontVal, RSizeVal );
	setTabOrder( RSizeVal, REffVal );
	setTabOrder( REffVal, RFillVal );
	setTabOrder( RFillVal, RStrokeVal );
	setTabOrder( RStrokeVal, Word );
	setTabOrder( Word, CaseIgnore );
	setTabOrder( CaseIgnore, DoSearch );
	setTabOrder( DoSearch, DoReplace );
	setTabOrder( DoReplace, AllReplace );
	setTabOrder( AllReplace, Leave );
	
	prefs = PrefsManager::instance()->prefsFile->getContext("SearchReplace");
	readPrefs();
	connectIndexReset();
}

void SearchReplaceDialog::languageChange()
{
	setWindowTitle( tr( "Search/Replace" ) );
	toolBox->setItemText(PAGE_STRINGS, tr("Text Strings"));
	toolBox->setItemText(PAGE_STYLES, tr("Text Style Attributes"));
	toolBox->setItemText(PAGE_GRAPHICS, tr("Items Properties"));
	SText->setText( tr( "Search Text" ) );
	SStyle->setText( tr( "Style" ) );
	SAlign->setText( tr( "Alignment" ) );
	SFont->setText( tr( "Font" ) );
	SSize->setText( tr( "Font Size" ) );
	SEffect->setText( tr( "Font Effects" ) );
	SFill->setText( tr( "Fill Color" ) );
	SFillS->setText( tr( "Fill Shade" ) );
	SStroke->setText( tr( "Stroke Color" ) );
	SStrokeS->setText( tr( "Stroke Shade" ) );
	QString tmp_sty[] = { tr("Left"), tr("Center"), tr("Right"), tr("Block"), tr("Forced")};
	size_t ar_sty = sizeof(tmp_sty) / sizeof(*tmp_sty);
	for (uint a = 0; a < ar_sty; ++a)
		SAlignVal->addItem( tmp_sty[a] );
	QListView * tmpView = dynamic_cast<QListView*>(SAlignVal->view()); Q_ASSERT(tmpView);
	int tmpWidth = tmpView->sizeHintForColumn(0);
	if (tmpWidth > 0)
		tmpView->setMinimumWidth(tmpWidth + 24);
	for (uint a = 0; a < ar_sty; ++a)
		RAlignVal->addItem(tmp_sty[a]);
	tmpView = dynamic_cast<QListView*>(RAlignVal->view()); Q_ASSERT(tmpView);
	tmpWidth = tmpView->sizeHintForColumn(0);
	if (tmpWidth > 0)
		tmpView->setMinimumWidth(tmpWidth + 24);
	RText->setText( tr( "Replace with Text" ) );
	RStyle->setText( tr( "Style" ) );
	RAlign->setText( tr( "Alignment" ) );
	RFont->setText( tr( "Font" ) );
	RSize->setText( tr( "Font Size" ) );
	REffect->setText( tr( "Font Effects" ) );
	RFill->setText( tr( "Fill Color" ) );
	RFillS->setText( tr( "Fill Shade" ) );
	RStroke->setText( tr( "Stroke Color" ) );
	RStrokeS->setText( tr( "Stroke Shade" ) );
	//tooltips
	DoSearch->setToolTip( tr( "Search for text or formatting in the current text" ) );
	DoReplace->setToolTip( tr( "Replace the searched for formatting with the replacement values" ) );
	AllReplace->setToolTip( tr( "Replace all found instances" ) );
	clearButton->setToolTip( tr( "Clear all search and replace options" ) );
	Leave->setToolTip( tr( "Close search and replace" ) );
	rebuildRangeCombo();

	SItemTypeVal->clear();
	SItemTypeVal->addItem(tr("Text Frame"));
	if (onlyItemsSearch())
		SItemTypeVal->addItems(QStringList() << tr("Image Frame") << tr("Latex Frame") << tr("Line"));
}

void SearchReplaceDialog::unitChange(int unitIndex)
{
	SItemStrokeVal->setNewUnit(unitIndex);
	RItemStrokeVal->setNewUnit(unitIndex);
}

void SearchReplaceDialog::slotSearch()
{
	//	if (SMode)
	//		Doc->view()->slotDoCurs(false);
	bool wasFound = false;
	bool onlyItems = onlyItemsSearch();
	switch (rangeCombo->itemData(rangeCombo->currentIndex()).toInt())
	{
		case RANGE_DOCUMENT:
			for (int i=currItemIndex; i < Doc->DocItems.count(); ++i)
			{
				if (checkItem(Doc->DocItems.at(i), onlyItems))
				{
					currItemIndex = i;
					wasFound = true;
					break;
				}
				ReplStart = 0;
			}
		break;
		case RANGE_PAGE:
			for (int i=currItemIndex; i < Doc->DocItems.count(); ++i)
			{
				PageItem * item = Doc->DocItems.at(i);
				if (item->OwnPage != Doc->currentPageNumber())
					continue;
				if (checkItem(item, onlyItems))
				{
					currItemIndex = i;
					Item = item;
					wasFound = true;
					break;
				}
				ReplStart = 0;
			}
		break;
		case RANGE_ITEMS:
			if (Doc->appMode == modeEdit)
				wasFound = checkItem(Doc->m_Selection->itemAt(0), onlyItems);
			else
			{
				for (int i = 0; i < Doc->m_Selection->count(); ++i)
					if (checkItem(Doc->m_Selection->itemAt(i), onlyItems))
					{
						currItemIndex = i;
						Item = Doc->m_Selection->itemAt(i);
						wasFound = true;
						break;
					}
				ReplStart = 0;
			}
		break;
		case RANGE_STORY:
			PageItem* item = Doc->m_Selection->itemAt(0)->firstInChain();
			int i =0;
			while (item != NULL)
			{
				Item = NULL;
				if (i == currItemIndex)
				{
					if (checkItem(item, onlyItems))
					{
						wasFound = true;
						Item = item;
						break;
					}
					++currItemIndex;
				}
				item = item->nextInChain();
				++i;
			}
		break;
	}
	if (!wasFound)
	{
		Doc->DoDrawing = true;
		DoReplace->setEnabled(false);
		AllReplace->setEnabled(false);
		NotFound = false;
		QMessageBox::information(this, tr("Search/Replace"), tr("Search finished, found %1 matches").arg(matchesFound), CommonStrings::tr_OK);
		resetIndexes();
	}
	else
	{
		if (Item != NULL)
			Item->update();
	}
}

bool SearchReplaceDialog::checkItem(PageItem *item, bool onlyItemsSearch)
{
	int maxChar = item->itemText.length() - 1;
	DoReplace->setEnabled(false);
	AllReplace->setEnabled(false);
	if (!styleEditorMode)
	{
		item->itemText.deselectAll();
		item->HasSel = false;
	}
	QString fCol = "";
	QString sCol = "";
	QString sFont = "";
	QString sText = "";
	NotFound = true;
	int sStyle = 0;
	int sAlign = 0;
	int sSize = 0;
	int sEff = 0;
	int sFillSh = 100;
	int sStrokeSh = 100;
	bool rep = false;
	bool found = true;
	if ((RFill->isChecked()) || (RStroke->isChecked()) || (RStyle->isChecked()) || (RFont->isChecked())
		|| (RStrokeS->isChecked()) || (RFillS->isChecked()) || (RSize->isChecked()) || (RText->isChecked())
		|| (REffect->isChecked()))
		rep = true;
	if (SText->isChecked())
		sText = STextVal->text();
	if (CaseIgnore->isChecked())
		sText = sText.toLower();
	if (SEffect->isChecked())
		sEff = SEffVal->getStyle();
	if (SFill->isChecked())
		fCol = SFillVal->currentText();
	if (SFillS->isChecked())
		sFillSh = SFillSVal->getValue();
	if (SStroke->isChecked())
		sCol = SStrokeVal->currentText();
	if (SStrokeS->isChecked())
		sStrokeSh = SStrokeSVal->getValue();
	if (SFont->isChecked())
		sFont = SFontVal->currentText();
	if (SStyle->isChecked())
		sStyle = SStyleVal->currentIndex();
	if (SAlign->isChecked())
		sAlign = SAlignVal->currentIndex();
	if (SSize->isChecked())
		sSize = qRound(SSizeVal->value() * 10);
	if (sText.length() > 0)
		found = false;
	
	int a;
	if (!styleEditorMode)
	{
		Qt::CaseSensitivity cs = Qt::CaseSensitive;
		if (CaseIgnore->isChecked())
			cs = Qt::CaseInsensitive;

		int start = ReplStart;
		if (start == 0)
			start = item->itemText.firstInFrame();
		int stop = item->itemText.lastInFrame();

		int matchedLen = 0;
		if (!onlyItemsSearch)
		{
			for (a = start; a < stop; ++a)
			{
				found = false;
				if (SText->isChecked())
				{
					QRegExp reg = QRegExp(sText,cs, (RegEx->isChecked())? QRegExp::RegExp : QRegExp::Wildcard);
					int pos = item->itemText.plainText().indexOf(reg,a);
					matchedLen = reg.matchedLength();
					if (pos < 0)
						continue;
					a = pos;
					if (Word->isChecked() && (a > 0) && !item->itemText.text(a - 1).isSpace())
						continue;
					if (Word->isChecked())
					{
						int lastChar = qMin(a + matchedLen, maxChar);
						if ((lastChar != maxChar) && !item->itemText.text(lastChar).isSpace())
							continue;
					}
					found = true;
				}
				if ((SSize->isChecked() && (item->itemText.charStyle(a).fontSize() != sSize))
					|| (SFont->isChecked() && (item->itemText.charStyle(a).font().scName() != sFont))
					|| (SStyle->isChecked() && (item->itemText.paragraphStyle(a).parent() != Doc->paragraphStyles()[sStyle].name()))
					|| (SAlign->isChecked() && (item->itemText.paragraphStyle(a).alignment() != sAlign))
					|| (SStroke->isChecked() && (item->itemText.charStyle(a).strokeColor() != sCol))
					|| (SStrokeS->isChecked() && (item->itemText.charStyle(a).strokeShade() != sStrokeSh))
					|| (SFillS->isChecked() && (item->itemText.charStyle(a).fillShade() != sFillSh))
					|| (SEffect->isChecked() && ((item->itemText.charStyle(a).effects() & 1919) != sEff))
					|| (SFill->isChecked() && (item->itemText.charStyle(a).fillColor() != fCol)))
					found = false;
				if (found)
					break;
			}
		}
		if (found)
		{
			if (onlyItemsSearch)
				Doc->scMW()->selectItemsFromOutlines(item, true);
			else
			{
				if (!item->isSelected())
					Doc->scMW()->selectItemsFromOutlines(item, true);
				if (Doc->appMode != modeEdit)
					Doc->view()->requestMode(modeEdit);
				item->itemText.setCursorPosition(a);
				item->itemText.select(a, matchedLen, false);
				item->HasSel = true;
				ReplStart = a + matchedLen;
			}
			if (rep)
			{
				DoReplace->setEnabled(true);
				AllReplace->setEnabled(true);
			}
			matchesFound++;
		}
		else
		{
			if (!onlyItemsSearch)
			{
				ReplStart = 0;
				for (int xx = ReplStart; xx < a+1; ++xx)
					item->itemText.select(qMin(xx, maxChar), 1, false);
				item->HasSel = false;
			}
		}
	}
	else if (Doc->scMW()->CurrStED != NULL)
	{
		found = false;
		SEditor* storyTextEdit = Doc->scMW()->CurrStED->Editor;
		if (storyTextEdit->StyledText.length() == 0)
			return false;
		
		if (SText->isChecked())
		{
			QTextDocument::FindFlags flags;
			if (!CaseIgnore->isChecked())
				flags |= QTextDocument::FindCaseSensitively;
			if (Word->isChecked())
				flags |= QTextDocument::FindWholeWords;
			do
			{
				found = storyTextEdit->find(sText, flags);
				if (!found) break;
				QTextCursor cursor = storyTextEdit->textCursor();
				int selStart = cursor.selectionStart();
				for (int ap = 0; ap < sText.length(); ++ap)
				{
					const ParagraphStyle& parStyle = storyTextEdit->StyledText.paragraphStyle(selStart + ap);
					const CharStyle& charStyle = storyTextEdit->StyledText.charStyle(selStart + ap);
					if ((SSize->isChecked() && (charStyle.fontSize() != sSize))
						|| (SFont->isChecked() && (charStyle.font().scName() != sFont))
						|| (SStyle->isChecked() && (parStyle.parent() != Doc->paragraphStyles()[sStyle].name()))
						|| (SAlign->isChecked() && (parStyle.alignment() != sAlign))
						|| (SFill->isChecked() && (charStyle.fillColor() != fCol))
						|| (SStroke->isChecked() && (charStyle.strokeColor() != sCol))
						|| (SStrokeS->isChecked() && (charStyle.strokeShade() != sStrokeSh))
						|| (SFillS->isChecked() && (charStyle.fillShade() != sFillSh))
						|| (SEffect->isChecked() && ((charStyle.effects() & 1919) != sEff)))
						found = false;
				}
			} while(!found);
		}
		else
		{
			QTextCursor cursor = storyTextEdit->textCursor();
			int position  = cursor.position();
			StoryText& styledText = storyTextEdit->StyledText;
			int firstChar = -1, lastChar = styledText.length();
			for (int i = position; i < styledText.length(); ++i)
			{
				found = true;
				const ParagraphStyle& parStyle = storyTextEdit->StyledText.paragraphStyle(i);
				const CharStyle& charStyle = styledText.charStyle(i);
				if (SSize->isChecked() && (charStyle.fontSize() != sSize))
					found = false;
				if (SFont->isChecked() && (charStyle.font().scName() != sFont))
					found = false;
				if (SStyle->isChecked() && (parStyle.parent() != Doc->paragraphStyles()[sStyle].name()))
					found = false;
				if (SAlign->isChecked() && (parStyle.alignment() != sAlign))
					found = false;
				if (SFill->isChecked() && (charStyle.fillColor() != fCol))
					found = false;
				if (SFillS->isChecked() && (charStyle.fillShade() != sFillSh))
					found = false;
				if (SStroke->isChecked() && (charStyle.strokeColor() != sCol))
					found = false;
				if (SStrokeS->isChecked() && (charStyle.strokeShade() != sStrokeSh))
					found = false;
				if (SEffect->isChecked() && ((charStyle.effects() & 1919) != sEff))
					found = false;
				if (found && (firstChar < 0))
					firstChar = i;
				else if ((firstChar >= 0) && !found)
				{
					lastChar = i;
					break;
				}
				// When searching paragraph styles break at the end of each found paragraph
				if (SStyle->isChecked() && (firstChar >= 0) && styledText.text(i) == SpecialChars::PARSEP)
				{
					lastChar = i;
					break;
				}
			}
			
			found = (firstChar >= 0);
			if (found)
			{
				cursor.setPosition(firstChar);
				cursor.setPosition(lastChar, QTextCursor::KeepAnchor);
				storyTextEdit->setTextCursor(cursor);
			}
		}
		if (found)
		{
			// Doc->scMW()->CurrStED->updateProps(); FIXME
			if (rep)
			{
				DoReplace->setEnabled(true);
				AllReplace->setEnabled(true);
			}
			matchesFound++;
		}
		else
		{
			matchesFound = 0;
			NotFound = false;
			QTextCursor cursor = storyTextEdit->textCursor();
			cursor.clearSelection();
			cursor.movePosition(QTextCursor::Start, QTextCursor::MoveAnchor);
			storyTextEdit->setTextCursor(cursor);
		}
	}
	return found;
}

bool SearchReplaceDialog::onlyItemsSearch()
{
	return ! (SText->isChecked() || SSize->isChecked() || SFont->isChecked()
			  || SStyle->isChecked() || SAlign->isChecked() || SStroke->isChecked()
			  || SStrokeS->isChecked() || SFillS->isChecked() || SEffect->isChecked()
			  || SFill->isChecked()
			  );
}

void SearchReplaceDialog::slotReplace()
{
	//	if (SMode)
	//		Doc->view()->slotDoCurs(false);
	doReplace();
	if (!styleEditorMode)
	{
		//		Doc->view()->slotDoCurs(true);
		Item->update();
	}
}

void SearchReplaceDialog::doReplace()
{
	if (!styleEditorMode)
	{
		QString repl, sear;
		int cs, cx;
		// 		ScText *hg;
		if (RText->isChecked())
		{
			repl = RTextVal->text();
			sear = STextVal->text();
			if (sear.length() == repl.length())
			{
				for (cs = 0; cs < sear.length(); ++cs)
					Item->itemText.replaceChar(ReplStart+cs, repl[cs]);
			}
			else
			{
				if (sear.length() < repl.length())
				{
					for (cs = 0; cs < sear.length(); ++cs)
						Item->itemText.replaceChar(ReplStart+cs, repl[cs]);
					for (cx = cs; cx < repl.length(); ++cx)
						Item->itemText.insertChars(ReplStart+cx, repl.mid(cx,1), true);
					// FIXME:NLS also replace styles!!
				}
				else
				{
					for (cs = 0; cs < repl.length(); ++cs)
						Item->itemText.replaceChar(ReplStart+cs, repl[cs]);
					Item->itemText.removeChars(ReplStart+cs, sear.length() - cs);
				}
			}
		}
		if (RStyle->isChecked())
		{
			int oldMode = Doc->appMode;
			Doc->appMode = modeEdit;
			Doc->itemSelection_SetNamedParagraphStyle(Doc->paragraphStyles()[RStyleVal->currentIndex()].name());
			Doc->appMode = oldMode;
		}
		if (RAlign->isChecked())
		{
			int oldMode = Doc->appMode;
			Doc->appMode = modeEdit;
			Doc->itemSelection_SetAlignment(RAlignVal->currentIndex());
			Doc->appMode = oldMode;
		}
		if (RFill->isChecked())
			Doc->itemSelection_SetFillColor(RFillVal->currentText());
		if (RFillS->isChecked())
			Doc->itemSelection_SetFillShade(RFillSVal->getValue());
		if (RStroke->isChecked())
			Doc->itemSelection_SetStrokeColor(RStrokeVal->currentText());
		if (RStrokeS->isChecked())
			Doc->itemSelection_SetStrokeShade(RStrokeSVal->getValue());
		if (RFont->isChecked())
			Doc->itemSelection_SetFont(RFontVal->currentText());
		if (RSize->isChecked())
			Doc->itemSelection_SetFontSize(qRound(RSizeVal->value() * 10.0));
		if (REffect->isChecked())
		{
#ifndef NLS_PROTO
			int s = REffVal->getStyle();
			Doc->currentStyle.charStyle().setFeatures(static_cast<StyleFlag>(s).featureList()); // ???
			for (int a = 0; a < Item->itemText.length(); ++a)
			{
				if (Item->itemText.selected(a))
				{
					StyleFlag fl = Item->itemText.item(a)->effects();
					fl &= static_cast<StyleFlag>(~1919);
					fl |= static_cast<StyleFlag>(s);
					Item->itemText.item(a)->setFeatures(fl.featureList());
				}
			}
#endif
		}
		Item->itemText.deselectAll();
	}
	else if (Doc->scMW()->CurrStED != NULL)
	{
		StoryEditor* se=Doc->scMW()->CurrStED;
		if (RText->isChecked())
		{
			disconnect(se->Editor, SIGNAL(cursorPositionChanged()), se, SLOT(updateProps()));
			int SelStart = se->Editor->textCursor().selectionStart();
			int SelEnd = se->Editor->textCursor().selectionEnd();
			//			se->Editor->insChars(RTextVal->text());
			se->Editor->textCursor().setPosition(SelStart);
			se->Editor->textCursor().setPosition(SelEnd, QTextCursor::KeepAnchor);
			se->Editor->textCursor().removeSelectedText();
			//FIXME		se->Editor->setEffects(se->Editor->CurrentEffects);
			QString newText = RTextVal->text();
			se->Editor->insertPlainText(newText);
			if (newText.length() > 0)
			{
				QTextCursor textCursor = se->Editor->textCursor();
				textCursor.setPosition(SelStart);
				textCursor.setPosition(SelStart + newText.length(), QTextCursor::KeepAnchor);
				se->Editor->setTextCursor(textCursor);
			}
			connect(se->Editor, SIGNAL(cursorPositionChanged()), se, SLOT(updateProps()));
			//			se->newAlign(se->Editor->currentParaStyle);
		}
		if (RStyle->isChecked())
			se->newStyle(Doc->paragraphStyles()[RStyleVal->currentIndex()].name());
		if (RAlign->isChecked())
			se->newAlign(RAlignVal->currentIndex());
		if (RFill->isChecked())
			se->newTxFill(RFillVal->currentIndex(), -1);
		if (RFillS->isChecked())
			se->newTxFill(-1, RFillSVal->getValue());
		if (RStroke->isChecked())
			se->newTxStroke(RStrokeVal->currentIndex(), -1);
		if (RStrokeS->isChecked())
			se->newTxStroke(-1, RStrokeSVal->getValue());
		if (RFont->isChecked())
			se->newTxFont(RFontVal->currentText());
		if (RSize->isChecked())
			se->newTxSize(RSizeVal->value());
		if (REffect->isChecked())
			se->newTxStyle(REffVal->getStyle());
		
		QTextCursor textCursor = se->Editor->textCursor();
		int selStart = textCursor.selectionStart();
		int selEnd   = textCursor.selectionEnd();
		int selPos   = qMax(selStart, selEnd);
		textCursor.setPosition(selPos);
		se->Editor->setTextCursor(textCursor);
	}
	DoReplace->setEnabled(false);
	AllReplace->setEnabled(false);
	slotSearch();
}

void SearchReplaceDialog::slotReplaceAll()
{
	if (!styleEditorMode)
	{
		//		Doc->view()->slotDoCurs(false);
		Doc->DoDrawing = false;
	}
	do
	{
		doReplace();
		//		slotDoSearch();
	}
	while (NotFound);
	if (!styleEditorMode)
	{
		Doc->DoDrawing = true;
		//		Doc->view()->slotDoCurs(true);
		Item->update();
	}
}

void SearchReplaceDialog::enableTxSearch()
{
	bool setter = SText->isChecked();
	STextVal->setEnabled(setter);
	RegEx->setEnabled(setter);
	Word->setEnabled(setter);
	CaseIgnore->setEnabled(setter);
	RText->setEnabled(setter);
	if (setter)
		STextVal->setFocus();
}

void SearchReplaceDialog::enableStyleSearch()
{
	SStyleVal->setEnabled(SStyleVal->count() ? SStyle->isChecked() : false);
}

void SearchReplaceDialog::enableAlignSearch()
{
	SAlignVal->setEnabled(SAlign->isChecked());
}

void SearchReplaceDialog::enableFontSearch()
{
	SFontVal->setEnabled(SFont->isChecked());
}

void SearchReplaceDialog::enableSizeSearch()
{
	SSizeVal->setEnabled(SSize->isChecked());
}

void SearchReplaceDialog::enableEffSearch()
{
	SEffVal->setEnabled(SEffect->isChecked());
}

void SearchReplaceDialog::enableFillSearch()
{
	SFillVal->setEnabled(SFill->isChecked());
}

void SearchReplaceDialog::enableFillSSearch()
{
	SFillSVal->setEnabled(SFillS->isChecked());
}

void SearchReplaceDialog::enableStrokeSearch()
{
	SStrokeVal->setEnabled(SStroke->isChecked());
}

void SearchReplaceDialog::enableStrokeSSearch()
{
	SStrokeSVal->setEnabled(SStrokeS->isChecked());
}

void SearchReplaceDialog::enableLanguageSearch()
{
}

void SearchReplaceDialog::enableTxReplace()
{
	RTextVal->setEnabled(RText->isChecked());
	if (RText->isChecked())
		RTextVal->setFocus();
}

void SearchReplaceDialog::enableStyleReplace()
{
	RStyleVal->setEnabled(RStyle->isChecked());
}

void SearchReplaceDialog::enableAlignReplace()
{
	RAlignVal->setEnabled(RAlign->isChecked());
}

void SearchReplaceDialog::enableFontReplace()
{
	RFontVal->setEnabled(RFont->isChecked());
}

void SearchReplaceDialog::enableSizeReplace()
{
	RSizeVal->setEnabled(RSize->isChecked());
}

void SearchReplaceDialog::enableEffReplace()
{
	REffVal->setEnabled(REffect->isChecked());
}

void SearchReplaceDialog::enableFillReplace()
{
	RFillVal->setEnabled(RFill->isChecked());
}

void SearchReplaceDialog::enableFillSReplace()
{
	RFillSVal->setEnabled(RFillS->isChecked());
}

void SearchReplaceDialog::enableStrokeReplace()
{
	RStrokeVal->setEnabled(RStroke->isChecked());
}

void SearchReplaceDialog::enableStrokeSReplace()
{
	RStrokeSVal->setEnabled(RStrokeS->isChecked());
}

void SearchReplaceDialog::enableLanguageReplace()
{
	RLangVal->setEnabled(RLang->isChecked());
}

void SearchReplaceDialog::enableItemTypeSearch()
{
	SItemTypeVal->setEnabled(SItemType->isChecked());
}

void SearchReplaceDialog::enableItemFillModeSearch()
{
	SItemFillModeVal->setEnabled(SItemFillMode->isChecked());
}

void SearchReplaceDialog::enableItemFillColorSearch()
{
	SItemFillColorVal->setEnabled(SItemFillColor->isChecked());
}

void SearchReplaceDialog::enableItemFillOpacitySearch()
{
	SItemFillOpacityVal->setEnabled(SItemFillOpacity->isChecked());
}

void SearchReplaceDialog::enableItemShadeSearch()
{
	SItemShadeVal->setEnabled(SItemShade->isChecked());
}

void SearchReplaceDialog::enableItemStrokeSearch()
{
	SItemStrokeVal->setEnabled(SItemStroke->isChecked());
}

void SearchReplaceDialog::enableItemStrokeModeSearch()
{
	SItemStrokeModeVal->setEnabled(SItemStrokeMode->isChecked());
}

void SearchReplaceDialog::enableItemsStrokeColorSearch()
{
	SItemStrokeColorVal->setEnabled(SItemStrokeColor->isChecked());
}

void SearchReplaceDialog::enableItemStrokeSSearch()
{
	SItemStrokeSVal->setEnabled(SItemStrokeS->isChecked());
}

void SearchReplaceDialog::enableItemTypeReplace()
{
}

void SearchReplaceDialog::enableItemFillModeReplace()
{
}

void SearchReplaceDialog::enableItemFillColorReplace()
{
}

void SearchReplaceDialog::enableItemOReplace()
{
}

void SearchReplaceDialog::enableItemSReplace()
{
}

void SearchReplaceDialog::enableItemStrokeReplace()
{
}

void SearchReplaceDialog::enableItemStrokeModeReplace()
{
}

void SearchReplaceDialog::enableItemsStrokeColorReplace()
{
}

void SearchReplaceDialog::enableItemStrokeSReplace()
{
}

void SearchReplaceDialog::clear()
{
	SText->setChecked(false);
	STextVal->setText("");
	SAlign->setChecked(false);
	SStroke->setChecked(false);
	SFill->setChecked(false);
	SStrokeS->setChecked(false);
	SFillS->setChecked(false);
	SSize->setChecked(false);
	SFont->setChecked(false);
	SStyle->setChecked(false);
	SEffect->setChecked(false);
	REffect->setChecked(false);
	int currentParaStyle = findParagraphStyle(Doc, Doc->currentStyle);
	SStyleVal->setCurrentIndex(currentParaStyle);
	RAlignVal->setCurrentIndex(Doc->currentStyle.alignment());
	setCurrentComboItem(SFontVal, Doc->currentStyle.charStyle().font().scName());
	setCurrentComboItem(SFillVal, Doc->currentStyle.charStyle().fillColor());
	setCurrentComboItem(SStrokeVal, Doc->currentStyle.charStyle().strokeColor());
	SSizeVal->setValue(Doc->currentStyle.charStyle().fontSize() / 10.0);
	RStroke->setChecked(false);
	RStrokeS->setChecked(false);
	RFill->setChecked(false);
	RFillS->setChecked(false);
	RSize->setChecked(false);
	RFont->setChecked(false);
	RStyle->setChecked(false);
	RText->setChecked(false);
	RTextVal->setText("");
	RStyleVal->setCurrentIndex(currentParaStyle);
	RAlignVal->setCurrentIndex(Doc->currentStyle.alignment());
	setCurrentComboItem(RFontVal, Doc->currentStyle.charStyle().font().scName());
	setCurrentComboItem(RFillVal, Doc->currentStyle.charStyle().fillColor());
	setCurrentComboItem(RStrokeVal, Doc->currentStyle.charStyle().strokeColor());
	RSizeVal->setValue(Doc->currentStyle.charStyle().fontSize() / 10.0);
	rangeCombo->setCurrentIndex(rangeCombo->findData(RANGE_DOCUMENT));
	Word->setChecked(false);
	CaseIgnore->setChecked(false);
	RegEx->setChecked(false);
	enableTxSearch();
	enableStyleSearch();
	enableFontSearch();
	enableSizeSearch();
	enableEffSearch();
	enableFillSearch();
	enableFillSSearch();
	enableStrokeSearch();
	enableStrokeSSearch();
	enableTxReplace();
	enableStyleReplace();
	enableFontReplace();
	enableSizeReplace();
	enableEffReplace();
	enableFillReplace();
	enableFillSReplace();
	enableStrokeReplace();
	enableStrokeSReplace();
}

void SearchReplaceDialog::resetIndexes()
{
	currItemIndex = 0;
	ReplStart = 0;
	matchesFound = 0;
	rebuildRangeCombo();
}

void SearchReplaceDialog::readPrefs()
{
	toolBox->setCurrentIndex(prefs->getInt("CurrPage",0));

	SText->setChecked(prefs->getBool("SText", false));
	STextVal->setText(prefs->get("STextVal", ""));
	SStroke->setChecked(prefs->getBool("SStroke", false));
	SFill->setChecked(prefs->getBool("SFill", false));
	SStrokeS->setChecked(prefs->getBool("SStrokeS", false));
	SFillS->setChecked(prefs->getBool("SFillS", false));
	SSize->setChecked(prefs->getBool("SSize", false));
	SFont->setChecked(prefs->getBool("SFont", false));
	SStyle->setChecked(prefs->getBool("SStyle", false));
	SAlign->setChecked(prefs->getBool("SAlign", false));
	SEffect->setChecked(prefs->getBool("SEffect", false));
	int tmp = prefs->getInt("SStyleVal", findParagraphStyle(Doc, Doc->currentStyle));
	if (tmp < 0 || tmp >= SStyleVal->count())
		tmp = 0;
	SStyleVal->setCurrentIndex(tmp);
	tmp = prefs->getInt("SAlignVal", Doc->currentStyle.alignment());
	if (tmp < 0 || tmp >= SAlignVal->count())
		tmp = 0;
	SAlignVal->setCurrentIndex(tmp);
	setCurrentComboItem(SFontVal, prefs->get("SFontVal", Doc->currentStyle.charStyle().font().scName()));
	setCurrentComboItem(SFillVal, prefs->get("SFillVal", Doc->currentStyle.charStyle().fillColor()));
	setCurrentComboItem(SStrokeVal, prefs->get("SStrokeVal", Doc->currentStyle.charStyle().strokeColor()));
	SSizeVal->setValue(prefs->getDouble("SSizeVal", Doc->currentStyle.charStyle().fontSize() / 10.0));

	RText->setChecked(prefs->getBool("RText", false));
	RTextVal->setText(prefs->get("RTextVal", ""));
	RStroke->setChecked(prefs->getBool("RStroke", false));
	RStrokeS->setChecked(prefs->getBool("RStrokeS", false));
	RFill->setChecked(prefs->getBool("RFill", false));
	RFillS->setChecked(prefs->getBool("RFillS", false));
	RSize->setChecked(prefs->getBool("RSize", false));
	RFont->setChecked(prefs->getBool("RFont", false));
	RStyle->setChecked(prefs->getBool("RStyle", false));
	RAlign->setChecked(prefs->getBool("RAlign", false));
	REffect->setChecked(prefs->getBool("REffect", false));
	tmp = prefs->getInt("RStyleVal", findParagraphStyle(Doc, Doc->currentStyle));
	if (tmp < 0 || tmp >= RStyleVal->count())
		tmp = 0;
	RStyleVal->setCurrentIndex(tmp);
	tmp = prefs->getInt("RAlignVal", Doc->currentStyle.alignment());
	if (tmp < 0 || tmp >= RAlignVal->count())
		tmp = 0;
	RAlignVal->setCurrentIndex(tmp);
	setCurrentComboItem(RFontVal, prefs->get("RFontVal", Doc->currentStyle.charStyle().font().scName()));
	setCurrentComboItem(RFillVal, prefs->get("RFillVal", Doc->currentStyle.charStyle().fillColor()));
	setCurrentComboItem(RStrokeVal, prefs->get("RStrokeVal", Doc->currentStyle.charStyle().strokeColor()));
	RSizeVal->setValue(prefs->getDouble("RSizeVal", Doc->currentStyle.charStyle().fontSize() / 10.0));

	RegEx->setChecked(prefs->getBool("RegEx", false));
	Word->setChecked(prefs->getBool("Word", false));
	CaseIgnore->setChecked(prefs->getBool("CaseIgnore", false));
	rebuildRangeCombo();
	int index = rangeCombo->findData(prefs->getInt("Range",RANGE_DOCUMENT));
	if (index < 0)
		index = rangeCombo->findData(RANGE_DOCUMENT);
	rangeCombo->setCurrentIndex(index);

	enableTxSearch();
	enableStyleSearch();
	enableAlignSearch();
	enableFontSearch();
	enableSizeSearch();
	enableEffSearch();
	enableFillSearch();
	enableFillSSearch();
	enableStrokeSearch();
	enableStrokeSSearch();
	enableTxReplace();
	enableStyleReplace();
	enableAlignReplace();
	enableFontReplace();
	enableSizeReplace();
	enableEffReplace();
	enableFillReplace();
	enableFillSReplace();
	enableStrokeReplace();
	enableStrokeSReplace();
}

void SearchReplaceDialog::writePrefs()
{
	prefs->set("CurrPage", toolBox->currentIndex());
	prefs->set("SStroke", SStroke->isChecked());
	prefs->set("SFill", SFill->isChecked());
	prefs->set("SStrokeS", SStrokeS->isChecked());
	prefs->set("SFillS", SFillS->isChecked());
	prefs->set("SSize", SSize->isChecked());
	prefs->set("SFont", SFont->isChecked());
	prefs->set("SStyle", SStyle->isChecked());
	prefs->set("SAlign", SAlign->isChecked());
	prefs->set("SText", SText->isChecked());
	prefs->set("SEffect", SEffect->isChecked());
	prefs->set("REffect", REffect->isChecked());
	prefs->set("STextVal", STextVal->text());
	prefs->set("SStyleVal", SStyleVal->currentIndex());
	prefs->set("SAlignVal", SAlignVal->currentIndex());
	prefs->set("SFontVal", SFontVal->currentText());
	prefs->set("SSizeVal", SSizeVal->value());
	prefs->set("SFillVal", SFillVal->currentText());
	prefs->set("SStrokeVal", SStrokeVal->currentText());
	prefs->set("RStroke", RStroke->isChecked());
	prefs->set("RStrokeS", RStrokeS->isChecked());
	prefs->set("RFill", RFill->isChecked());
	prefs->set("RFillS", RFillS->isChecked());
	prefs->set("RSize", RSize->isChecked());
	prefs->set("RFont", RFont->isChecked());
	prefs->set("RStyle", RStyle->isChecked());
	prefs->set("RAlign", RAlign->isChecked());
	prefs->set("RText", RText->isChecked());
	prefs->set("RTextVal", RTextVal->text());
	prefs->set("RStyleVal", RStyleVal->currentText());
	prefs->set("RAlignVal", RAlignVal->currentIndex());
	prefs->set("RFontVal", RFontVal->currentText());
	prefs->set("RSizeVal", RSizeVal->value());
	prefs->set("RFillVal", RFillVal->currentText());
	prefs->set("RStrokeVal", RStrokeVal->currentText());
	prefs->set("Word", Word->isChecked());
	prefs->set("CaseIgnore", CaseIgnore->isChecked());
	prefs->set("RegEx", RegEx->isChecked());
	prefs->set("Range", rangeCombo->itemData(rangeCombo->currentIndex()).toInt());
	accept();
}

void SearchReplaceDialog::connectIndexReset(QObject * child)
{
	if (child == NULL)
		child = this;
	foreach (QObject* w, child->children())
	{
		if (!w->children().isEmpty())
			connectIndexReset(w);
		QString wClass = QString(w->metaObject()->className());
		if ( wClass == "QCheckBox")
			connect((QCheckBox*)(w), SIGNAL(stateChanged(int)), this, SLOT(resetIndexes()));
		else if (wClass == "QLineEdit")
			connect((QLineEdit*)(w), SIGNAL(textEdited(QString)), this, SLOT(resetIndexes()));
		else if (wClass == "QComboBox" || wClass == "FontCombo" || wClass == "ColorCombo")
			connect((QComboBox*)(w), SIGNAL(currentIndexChanged(int)), this, SLOT(resetIndexes()));
		else if (wClass == "QSpinBox" || wClass == "ScrSpinBox")
			connect((QSpinBox*)(w), SIGNAL(valueChanged(int)), this, SLOT(resetIndexes()));
		else if (wClass == "QDoubleSpinBox" || wClass == "ScrSpinBox")
			connect((QDoubleSpinBox*)(w), SIGNAL(valueChanged(int)), this, SLOT(resetIndexes()));
		else if (wClass == "ShadeButton")
			connect((ShadeButton*)(w), SIGNAL(triggered(QAction*)), this, SLOT(resetIndexes()));
	}
}

void SearchReplaceDialog::rebuildRangeCombo()
{
	rangeCombo->blockSignals(true);
	int currentData = RANGE_DOCUMENT;
	QVariant v = rangeCombo->itemData(rangeCombo->currentIndex());
	if (v.isValid())
		currentData = v.toInt();
	rangeCombo->clear();
	rangeCombo->addItem(tr("Selected Items"), RANGE_ITEMS);
	rangeCombo->addItem(tr("Current Story"), RANGE_STORY);
	rangeCombo->addItem(tr("Current Page"), RANGE_PAGE);
	rangeCombo->addItem(tr("Whole Document"), RANGE_DOCUMENT);
	if (styleEditorMode)
	{
		rangeCombo->removeItem(rangeCombo->findData(RANGE_DOCUMENT));
		rangeCombo->removeItem(rangeCombo->findData(RANGE_PAGE));
		rangeCombo->setCurrentIndex(rangeCombo->findData(RANGE_STORY));
	}
	else
	{
		if (Doc->m_Selection->isEmpty())
		{
			rangeCombo->removeItem(rangeCombo->findData(RANGE_ITEMS));
			rangeCombo->removeItem(rangeCombo->findData(RANGE_STORY));
		}
		else if (Doc->m_Selection->count() == 1)
		{
			if (!Doc->m_Selection->itemAt(0)->isTextFrame())
				rangeCombo->removeItem(rangeCombo->findData(RANGE_STORY));
		}
		else
		{
			int i;
			for (i=0; i < Doc->m_Selection->count(); ++i)
				if (Doc->m_Selection->itemAt(i)->isTextFrame())
					break;
			if (i == Doc->m_Selection->count())
				rangeCombo->removeItem(rangeCombo->findData(RANGE_STORY));
		}
	}
	int index = rangeCombo->findData(currentData);
	if (index < 0)
		rangeCombo->setCurrentIndex(rangeCombo->findData(RANGE_DOCUMENT));
	else
		rangeCombo->setCurrentIndex(index);
	rangeCombo->update();
	rangeCombo->blockSignals(false);
}

void SearchReplaceDialog::fillColorCombos(QObject * child)
{
	if (child == NULL)
		child = this;
	foreach (QObject* w, child->children())
	{
		if (!w->children().isEmpty())
			connectIndexReset(w);
		QString wClass = QString(w->metaObject()->className());
		if ( wClass == "ColorCombo")
		{
			((ColorCombo *) w)->updateBox(Doc->PageColors, ColorCombo::fancyPixmaps, true);
			((ColorCombo *) w)->setMinimumWidth(SFillVal->view()->maximumViewportSize().width() + 24);
		}
	}
}

void SearchReplaceDialog::changeEvent(QEvent *e)
{
	QDialog::changeEvent(e);
	switch (e->type()) {
		case QEvent::LanguageChange:
			retranslateUi(this);
		break;
		default:
		break;
	}
}
