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
	: QDialog( parent ), m_replStart(0), matchesFound(0), currItemIndex(0)
{
	setupUi(this);
	setWindowIcon(QIcon(loadIcon ( "AppIcon.png" )));
	ColorList::Iterator it;
	m_item = NULL;
	m_doc = doc;
	unitChange(m_doc->unitIndex());
	styleEditorMode = mode;
	languageChange();
	fillColorCombos();
	toolBox->setCurrentIndex(0);
	toolBox->setItemEnabled(PAGE_GRAPHICS, !styleEditorMode);
	m_notFound = false;
	STextVal->setEnabled(false);
	SStyleVal->setEditable(false);
	for (int x = 0; x < m_doc->paragraphStyles().count(); ++x)
		SStyleVal->addItem(m_doc->paragraphStyles()[x].name());
	QListView *tmpView = dynamic_cast<QListView*>(SStyleVal->view()); Q_ASSERT(tmpView);
	int tmpWidth = tmpView->sizeHintForColumn(0);
	if (tmpWidth > 0)
		tmpView->setMinimumWidth(tmpWidth + 24);
	SStyleVal->setCurrentIndex(findParagraphStyle(m_doc, m_doc->currentStyle));
	SStyleVal->setEnabled(false);
	SAlignVal->setEditable(false);
	SAlignVal->setEnabled(false);
	SFontVal->setMaximumSize(190, 30);
	setCurrentComboItem(SFontVal, m_doc->currentStyle.charStyle().font().scName());
	SFontVal->setEnabled(false);
	SSizeVal->setValue( m_doc->currentStyle.charStyle().fontSize() / 10.0 );
	SSizeVal->setEnabled(false);
	SEffVal->setStyle(0);
	SEffVal->setEnabled(false);
	SFillVal->setEditable(false);
	setCurrentComboItem(SFillVal, m_doc->currentStyle.charStyle().fillColor());
	SFillVal->setEnabled(false);
	SFillSVal->setEnabled(false);
	SStrokeVal->setEditable(false);
	setCurrentComboItem(SStrokeVal, m_doc->currentStyle.charStyle().strokeColor());
	SStrokeVal->setEnabled(false);
	SStrokeSVal->setEnabled(false);
	RTextVal->setEnabled(false);
	RStyleVal->setEditable(false);
	for (int x = 0; x < m_doc->paragraphStyles().count(); ++x)
		RStyleVal->addItem(m_doc->paragraphStyles()[x].name());
	tmpView = dynamic_cast<QListView*>(RStyleVal->view()); Q_ASSERT(tmpView);
	tmpWidth = tmpView->sizeHintForColumn(0);
	if (tmpWidth > 0)
		tmpView->setMinimumWidth(tmpWidth + 24);
	RStyleVal->setCurrentIndex(findParagraphStyle(m_doc, m_doc->currentStyle));
	RStyleVal->setEnabled(false);
	RAlignVal->setEditable(false);
	RAlignVal->setEnabled(false);
	RFontVal->setMaximumSize(190, 30);
	setCurrentComboItem(RFontVal, m_doc->currentStyle.charStyle().font().scName());
	RFontVal->setEnabled(false);
	RSizeVal->setValue( m_doc->currentStyle.charStyle().fontSize() / 10.0 );
	RSizeVal->setEnabled(false);
	REffVal->setStyle(0);
	REffVal->setEnabled(false);
	RFillVal->setEditable(false);
	setCurrentComboItem(RFillVal, m_doc->currentStyle.charStyle().fillColor());
	RFillVal->setEnabled(false);
	RFillSVal->setEnabled(false);
	RStrokeVal->setEditable(false);
	setCurrentComboItem(RStrokeVal, m_doc->currentStyle.charStyle().strokeColor());
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
	
	m_prefs = PrefsManager::instance()->prefsFile->getContext("SearchReplace");
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
			for (int i=currItemIndex; i < m_doc->DocItems.count(); ++i)
			{
				if (checkItem(m_doc->DocItems.at(i), onlyItems))
				{
					currItemIndex = i;
					wasFound = true;
					break;
				}
				m_replStart = 0;
			}
		break;
		case RANGE_PAGE:
			for (int i=currItemIndex; i < m_doc->DocItems.count(); ++i)
			{
				PageItem * item = m_doc->DocItems.at(i);
				if (item->OwnPage != m_doc->currentPageNumber())
					continue;
				if (checkItem(item, onlyItems))
				{
					currItemIndex = i;
					m_item = item;
					wasFound = true;
					break;
				}
				m_replStart = 0;
			}
		break;
		case RANGE_ITEMS:
			if (m_doc->appMode == modeEdit)
				wasFound = checkItem(m_doc->m_Selection->itemAt(0), onlyItems);
			else
			{
				for (int i = 0; i < m_doc->m_Selection->count(); ++i)
					if (checkItem(m_doc->m_Selection->itemAt(i), onlyItems))
					{
						currItemIndex = i;
						m_item = m_doc->m_Selection->itemAt(i);
						wasFound = true;
						break;
					}
				m_replStart = 0;
			}
		break;
		case RANGE_STORY:
			PageItem* item = m_doc->m_Selection->itemAt(0)->firstInChain();
			int i =0;
			while (item != NULL)
			{
				m_item = NULL;
				if (i == currItemIndex)
				{
					if (checkItem(item, onlyItems))
					{
						wasFound = true;
						m_item = item;
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
		m_doc->DoDrawing = true;
		DoReplace->setEnabled(false);
		AllReplace->setEnabled(false);
		m_notFound = false;
		QMessageBox::information(this, tr("Search/Replace"), tr("Search finished, found %1 matches").arg(matchesFound), CommonStrings::tr_OK);
		resetIndexes();
	}
	else
	{
		if (m_item != NULL)
			m_item->update();
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
	m_notFound = true;
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

		int start = m_replStart;
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
					|| (SStyle->isChecked() && (item->itemText.paragraphStyle(a).parent() != m_doc->paragraphStyles()[sStyle].name()))
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
				m_doc->scMW()->selectItemsFromOutlines(item, true);
			else
			{
				if (!item->isSelected())
					m_doc->scMW()->selectItemsFromOutlines(item, true);
				if (m_doc->appMode != modeEdit)
					m_doc->view()->requestMode(modeEdit);
				item->itemText.setCursorPosition(a);
				item->itemText.select(a, matchedLen, false);
				item->HasSel = true;
				m_replStart = a + matchedLen;
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
				m_replStart = 0;
				for (int xx = m_replStart; xx < a+1; ++xx)
					item->itemText.select(qMin(xx, maxChar), 1, false);
				item->HasSel = false;
			}
		}
	}
	else if (m_doc->scMW()->CurrStED != NULL)
	{
		found = false;
		SEditor* storyTextEdit = m_doc->scMW()->CurrStED->Editor;
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
						|| (SStyle->isChecked() && (parStyle.parent() != m_doc->paragraphStyles()[sStyle].name()))
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
				if (SStyle->isChecked() && (parStyle.parent() != m_doc->paragraphStyles()[sStyle].name()))
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
			m_notFound = false;
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
		m_item->update();
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
					m_item->itemText.replaceChar(m_replStart+cs, repl[cs]);
			}
			else
			{
				if (sear.length() < repl.length())
				{
					for (cs = 0; cs < sear.length(); ++cs)
						m_item->itemText.replaceChar(m_replStart+cs, repl[cs]);
					for (cx = cs; cx < repl.length(); ++cx)
						m_item->itemText.insertChars(m_replStart+cx, repl.mid(cx,1), true);
					// FIXME:NLS also replace styles!!
				}
				else
				{
					for (cs = 0; cs < repl.length(); ++cs)
						m_item->itemText.replaceChar(m_replStart+cs, repl[cs]);
					m_item->itemText.removeChars(m_replStart+cs, sear.length() - cs);
				}
			}
		}
		if (RStyle->isChecked())
		{
			int oldMode = m_doc->appMode;
			m_doc->appMode = modeEdit;
			m_doc->itemSelection_SetNamedParagraphStyle(m_doc->paragraphStyles()[RStyleVal->currentIndex()].name());
			m_doc->appMode = oldMode;
		}
		if (RAlign->isChecked())
		{
			int oldMode = m_doc->appMode;
			m_doc->appMode = modeEdit;
			m_doc->itemSelection_SetAlignment(RAlignVal->currentIndex());
			m_doc->appMode = oldMode;
		}
		if (RFill->isChecked())
			m_doc->itemSelection_SetFillColor(RFillVal->currentText());
		if (RFillS->isChecked())
			m_doc->itemSelection_SetFillShade(RFillSVal->getValue());
		if (RStroke->isChecked())
			m_doc->itemSelection_SetStrokeColor(RStrokeVal->currentText());
		if (RStrokeS->isChecked())
			m_doc->itemSelection_SetStrokeShade(RStrokeSVal->getValue());
		if (RFont->isChecked())
			m_doc->itemSelection_SetFont(RFontVal->currentText());
		if (RSize->isChecked())
			m_doc->itemSelection_SetFontSize(qRound(RSizeVal->value() * 10.0));
		if (REffect->isChecked())
		{
			int s = REffVal->getStyle();
			m_doc->currentStyle.charStyle().setFeatures(static_cast<StyleFlag>(s).featureList()); // ???
			for (int a = 0; a < m_item->itemText.length(); ++a)
			{
				if (m_item->itemText.selected(a))
				{
//					StyleFlag fl = m_item->itemText.item(a)->effects();
//					fl &= static_cast<StyleFlag>(~1919);
//					fl |= static_cast<StyleFlag>(s);
//					m_item->itemText.item(a)->setFeatures(fl.featureList());
					CharStyle newFeatures;
					newFeatures.setFeatures(static_cast<StyleFlag>(s).featureList());
					m_item->itemText.applyCharStyle(a, 1, newFeatures);
					
				}
			}
		}
		m_item->itemText.deselectAll();
	}
	else if (m_doc->scMW()->CurrStED != NULL)
	{
		StoryEditor* se=m_doc->scMW()->CurrStED;
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
			se->newStyle(m_doc->paragraphStyles()[RStyleVal->currentIndex()].name());
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
		m_doc->DoDrawing = false;
	}
	do
	{
		doReplace();
		//		slotDoSearch();
	}
	while (m_notFound);
	if (!styleEditorMode)
	{
		m_doc->DoDrawing = true;
		//		Doc->view()->slotDoCurs(true);
		m_item->update();
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
	int currentParaStyle = findParagraphStyle(m_doc, m_doc->currentStyle);
	SStyleVal->setCurrentIndex(currentParaStyle);
	RAlignVal->setCurrentIndex(m_doc->currentStyle.alignment());
	setCurrentComboItem(SFontVal, m_doc->currentStyle.charStyle().font().scName());
	setCurrentComboItem(SFillVal, m_doc->currentStyle.charStyle().fillColor());
	setCurrentComboItem(SStrokeVal, m_doc->currentStyle.charStyle().strokeColor());
	SSizeVal->setValue(m_doc->currentStyle.charStyle().fontSize() / 10.0);
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
	RAlignVal->setCurrentIndex(m_doc->currentStyle.alignment());
	setCurrentComboItem(RFontVal, m_doc->currentStyle.charStyle().font().scName());
	setCurrentComboItem(RFillVal, m_doc->currentStyle.charStyle().fillColor());
	setCurrentComboItem(RStrokeVal, m_doc->currentStyle.charStyle().strokeColor());
	RSizeVal->setValue(m_doc->currentStyle.charStyle().fontSize() / 10.0);
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
	m_replStart = 0;
	matchesFound = 0;
	rebuildRangeCombo();
}

void SearchReplaceDialog::readPrefs()
{
	toolBox->setCurrentIndex(m_prefs->getInt("CurrPage",0));

	SText->setChecked(m_prefs->getBool("SText", false));
	STextVal->setText(m_prefs->get("STextVal", ""));
	SStroke->setChecked(m_prefs->getBool("SStroke", false));
	SFill->setChecked(m_prefs->getBool("SFill", false));
	SStrokeS->setChecked(m_prefs->getBool("SStrokeS", false));
	SFillS->setChecked(m_prefs->getBool("SFillS", false));
	SSize->setChecked(m_prefs->getBool("SSize", false));
	SFont->setChecked(m_prefs->getBool("SFont", false));
	SStyle->setChecked(m_prefs->getBool("SStyle", false));
	SAlign->setChecked(m_prefs->getBool("SAlign", false));
	SEffect->setChecked(m_prefs->getBool("SEffect", false));
	int tmp = m_prefs->getInt("SStyleVal", findParagraphStyle(m_doc, m_doc->currentStyle));
	if (tmp < 0 || tmp >= SStyleVal->count())
		tmp = 0;
	SStyleVal->setCurrentIndex(tmp);
	tmp = m_prefs->getInt("SAlignVal", m_doc->currentStyle.alignment());
	if (tmp < 0 || tmp >= SAlignVal->count())
		tmp = 0;
	SAlignVal->setCurrentIndex(tmp);
	setCurrentComboItem(SFontVal, m_prefs->get("SFontVal", m_doc->currentStyle.charStyle().font().scName()));
	setCurrentComboItem(SFillVal, m_prefs->get("SFillVal", m_doc->currentStyle.charStyle().fillColor()));
	setCurrentComboItem(SStrokeVal, m_prefs->get("SStrokeVal", m_doc->currentStyle.charStyle().strokeColor()));
	SSizeVal->setValue(m_prefs->getDouble("SSizeVal", m_doc->currentStyle.charStyle().fontSize() / 10.0));

	RText->setChecked(m_prefs->getBool("RText", false));
	RTextVal->setText(m_prefs->get("RTextVal", ""));
	RStroke->setChecked(m_prefs->getBool("RStroke", false));
	RStrokeS->setChecked(m_prefs->getBool("RStrokeS", false));
	RFill->setChecked(m_prefs->getBool("RFill", false));
	RFillS->setChecked(m_prefs->getBool("RFillS", false));
	RSize->setChecked(m_prefs->getBool("RSize", false));
	RFont->setChecked(m_prefs->getBool("RFont", false));
	RStyle->setChecked(m_prefs->getBool("RStyle", false));
	RAlign->setChecked(m_prefs->getBool("RAlign", false));
	REffect->setChecked(m_prefs->getBool("REffect", false));
	tmp = m_prefs->getInt("RStyleVal", findParagraphStyle(m_doc, m_doc->currentStyle));
	if (tmp < 0 || tmp >= RStyleVal->count())
		tmp = 0;
	RStyleVal->setCurrentIndex(tmp);
	tmp = m_prefs->getInt("RAlignVal", m_doc->currentStyle.alignment());
	if (tmp < 0 || tmp >= RAlignVal->count())
		tmp = 0;
	RAlignVal->setCurrentIndex(tmp);
	setCurrentComboItem(RFontVal, m_prefs->get("RFontVal", m_doc->currentStyle.charStyle().font().scName()));
	setCurrentComboItem(RFillVal, m_prefs->get("RFillVal", m_doc->currentStyle.charStyle().fillColor()));
	setCurrentComboItem(RStrokeVal, m_prefs->get("RStrokeVal", m_doc->currentStyle.charStyle().strokeColor()));
	RSizeVal->setValue(m_prefs->getDouble("RSizeVal", m_doc->currentStyle.charStyle().fontSize() / 10.0));

	RegEx->setChecked(m_prefs->getBool("RegEx", false));
	Word->setChecked(m_prefs->getBool("Word", false));
	CaseIgnore->setChecked(m_prefs->getBool("CaseIgnore", false));
	rebuildRangeCombo();
	int index = rangeCombo->findData(m_prefs->getInt("Range",RANGE_DOCUMENT));
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
	m_prefs->set("CurrPage", toolBox->currentIndex());
	m_prefs->set("SStroke", SStroke->isChecked());
	m_prefs->set("SFill", SFill->isChecked());
	m_prefs->set("SStrokeS", SStrokeS->isChecked());
	m_prefs->set("SFillS", SFillS->isChecked());
	m_prefs->set("SSize", SSize->isChecked());
	m_prefs->set("SFont", SFont->isChecked());
	m_prefs->set("SStyle", SStyle->isChecked());
	m_prefs->set("SAlign", SAlign->isChecked());
	m_prefs->set("SText", SText->isChecked());
	m_prefs->set("SEffect", SEffect->isChecked());
	m_prefs->set("REffect", REffect->isChecked());
	m_prefs->set("STextVal", STextVal->text());
	m_prefs->set("SStyleVal", SStyleVal->currentIndex());
	m_prefs->set("SAlignVal", SAlignVal->currentIndex());
	m_prefs->set("SFontVal", SFontVal->currentText());
	m_prefs->set("SSizeVal", SSizeVal->value());
	m_prefs->set("SFillVal", SFillVal->currentText());
	m_prefs->set("SStrokeVal", SStrokeVal->currentText());
	m_prefs->set("RStroke", RStroke->isChecked());
	m_prefs->set("RStrokeS", RStrokeS->isChecked());
	m_prefs->set("RFill", RFill->isChecked());
	m_prefs->set("RFillS", RFillS->isChecked());
	m_prefs->set("RSize", RSize->isChecked());
	m_prefs->set("RFont", RFont->isChecked());
	m_prefs->set("RStyle", RStyle->isChecked());
	m_prefs->set("RAlign", RAlign->isChecked());
	m_prefs->set("RText", RText->isChecked());
	m_prefs->set("RTextVal", RTextVal->text());
	m_prefs->set("RStyleVal", RStyleVal->currentText());
	m_prefs->set("RAlignVal", RAlignVal->currentIndex());
	m_prefs->set("RFontVal", RFontVal->currentText());
	m_prefs->set("RSizeVal", RSizeVal->value());
	m_prefs->set("RFillVal", RFillVal->currentText());
	m_prefs->set("RStrokeVal", RStrokeVal->currentText());
	m_prefs->set("Word", Word->isChecked());
	m_prefs->set("CaseIgnore", CaseIgnore->isChecked());
	m_prefs->set("RegEx", RegEx->isChecked());
	m_prefs->set("Range", rangeCombo->itemData(rangeCombo->currentIndex()).toInt());
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
		if (m_doc->m_Selection->isEmpty())
		{
			rangeCombo->removeItem(rangeCombo->findData(RANGE_ITEMS));
			rangeCombo->removeItem(rangeCombo->findData(RANGE_STORY));
		}
		else if (m_doc->m_Selection->count() == 1)
		{
			if (!m_doc->m_Selection->itemAt(0)->isTextFrame())
				rangeCombo->removeItem(rangeCombo->findData(RANGE_STORY));
		}
		else
		{
			int i;
			for (i=0; i < m_doc->m_Selection->count(); ++i)
				if (m_doc->m_Selection->itemAt(i)->isTextFrame())
					break;
			if (i == m_doc->m_Selection->count())
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
			((ColorCombo *) w)->updateBox(m_doc->PageColors, ColorCombo::fancyPixmaps, true);
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
