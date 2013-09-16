/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "actionmanager.h"
#include "textvalidatorimpl.h"
#include "tvdialog.h"
#include "prefsfile.h"
#include "prefscontext.h"
#include "prefsmanager.h"
#include "scpaths.h"
#include "scribusdoc.h"
#include "scribus.h"
#include "scribusview.h"
#include "selection.h"
#include "plugins/short-words/parse.h"
#include <QObject>
#include <QtWidgets/QProgressBar>
#include <QString>
#include <QtWidgets/QMessageBox>

// Initialize members here, if any
TextValidatorImpl::TextValidatorImpl(ScribusDoc* doc) : QObject(0)
{
	m_Doc = doc;
	if (m_Doc == NULL)
		return;
	PrefsFile* prefsFile = PrefsManager::instance()->applicationPrefsFile();
	PrefsContext *tvPluginPrefs = prefsFile->getPluginContext("TextValidatorPlugin");
	runShortWords = tvPluginPrefs->getBool("runShortWords", false);
	runAutoQuotes = tvPluginPrefs->getBool("runAutoQuotes", false);
	autoQuotesLang = tvPluginPrefs->get("autoQuotesLang","en");
	setAutoQuotes();
	removeMultiSpaces = tvPluginPrefs->getBool("removeMultiSpaces", true);
	removeSpacesParaStart = tvPluginPrefs->getBool("removeSpacesParaStart", true);
	removeSpacesParaEnd = tvPluginPrefs->getBool("removeSpacesParaEnd", true);
	removeEmptyLines = tvPluginPrefs->getBool("removeEmptyLines", true);
	removeBreaks = tvPluginPrefs->getBool("removeBreaks", false);
	removeHyphenation = tvPluginPrefs->getBool("removeHyphenation", false);
	convertSpacesToNormal = tvPluginPrefs->getBool("convertSpacesToNormal", false);
	convertTabs = tvPluginPrefs->getBool("convertTabs", false);
	removeSpacesBeforeChars = tvPluginPrefs->get("removeSpacesBeforeChars", ",.:;)");
	removeSpacesAfterChars  = tvPluginPrefs->get("removeSpacesAfterChars", "(");
	removeSpacesBefore = tvPluginPrefs->getBool("removeSpacesBefore", true);
	removeSpacesAfter  = tvPluginPrefs->getBool("removeSpacesAfter", true);
	ensureSpacesBeforeChars = tvPluginPrefs->get("ensureSpacesBeforeChars", "(");
	ensureSpacesAfterChars  = tvPluginPrefs->get("ensureSpacesAfterChars", ")");
	ensureSpacesBefore = tvPluginPrefs->getBool("ensureSpacesBefore", true);
	ensureSpacesAfter  = tvPluginPrefs->getBool("ensureSpacesAfter", true);
	QString charsBeforeKeys = tvPluginPrefs->get("removeCharsBeforeKeys", "");
	if (!charsBeforeKeys.isEmpty())
	{
		for (int i = 0;  i < charsBeforeKeys.length(); ++i)
		{
			QChar ch = charsBeforeKeys.at(i);
			removeCharBefore.insert(ch, tvPluginPrefs->get("RCB_" + QString(ch), ""));
		}
	}
	QString charsAfterKeys = tvPluginPrefs->get("removeCharsAfterKeys", "");
	if (!charsAfterKeys.isEmpty())
	{
		for (int i = 0;  i < charsAfterKeys.length(); ++i)
		{
			QChar ch = charsAfterKeys.at(i);
			removeCharAfter.insert(ch, tvPluginPrefs->get("RCA_" + QString(ch), ""));
		}
	}
	for (int i = 0; i < 3; ++i)
	{
		if (tvPluginPrefs->getBool("replace" + QString::number(i), false))
		{
			QString source = tvPluginPrefs->get("replaceSource" + QString::number(i));
			if (!source.isEmpty())
			{
				QString target = tvPluginPrefs->get("replaceTarget" + QString::number(i));
				replaceStrings.insert(source, target);
			}
		}
	}
}

bool TextValidatorImpl::run()
{
	if (m_Doc==NULL)
		return false;
	TVDialog *dlg = new TVDialog();
	uint docSelectionCount = m_Doc->m_Selection->count();
	if (docSelectionCount == 0)
		dlg->frameRadio->setEnabled(false);
	if (dlg->exec() == QDialog::Accepted) {
//		m_Doc->view()->setUpdatesEnabled(false);
		m_Doc->blockSignals(true);
		QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
		m_Doc->scMW()->setStatusBarInfoText(QObject::tr("Text Validator processing. Wait please...", "text validator plugin"));
		int res = 0;
		switch (dlg->actionSelected()) {
			case 0: //selection
			{
				
				if (docSelectionCount != 0)
				{
					m_Doc->scMW()->mainWindowProgressBar->setMaximum(docSelectionCount);
					for (uint i=0; i < docSelectionCount; ++i)
					{
						PageItem * item = m_Doc->m_Selection->itemAt(i);
						m_Doc->scMW()->mainWindowProgressBar->setValue(i);
						res += validateItemText(item);
					}
					m_Doc->scMW()->mainWindowProgressBar->setValue(docSelectionCount);
				}
			}
			break;
			case 1: //page
			{
				int cnt = 0;
				int currpage = m_Doc->currentPage()->pageNr();
				//count items
				for (int i = 0; i < m_Doc->DocItems.count(); ++i)
				{
					if (m_Doc->Items->at(i)->OwnPage == currpage)
						++cnt;
				}
				m_Doc->scMW()->mainWindowProgressBar->setMaximum(cnt);
				for (int i = 0; i < m_Doc->DocItems.count(); ++i)
				{
					PageItem* item = m_Doc->Items->at(i);
					if (item->OwnPage == currpage)
					{
						m_Doc->scMW()->mainWindowProgressBar->setValue(i);
						res += validateItemText(item);
					}
				}
				m_Doc->scMW()->mainWindowProgressBar->setValue(cnt);
			}
			break;
			case 2: //all
			{
				m_Doc->scMW()->mainWindowProgressBar->setMaximum(m_Doc->DocItems.count());
				int i = 0;
				foreach (PageItem* item, m_Doc->DocItems)
				{
					m_Doc->scMW()->mainWindowProgressBar->setValue(++i);
					res += validateItemText(item);
				}
				m_Doc->scMW()->mainWindowProgressBar->setValue(m_Doc->DocItems.count());
			}
			break;
		}
		//revert selection back
		m_Doc->blockSignals(false);
		if (res > 0)
		{
			m_Doc->changed();
			m_Doc->view()->DrawNew();
		}
		QApplication::changeOverrideCursor(Qt::ArrowCursor);
		m_Doc->scMW()->setStatusBarInfoText(QObject::tr("Text Validator processing. Done.", "text validator plugin") + QString::number(res) + QObject::tr(" fixes was made" , "text validator plugin"));
		m_Doc->scMW()->mainWindowProgressBar->reset();
	} // action
	return true;
}

int TextValidatorImpl::validateItemText(PageItem* item, bool force)
{
	if (item == NULL || item->itemText.length() == 0 || (item->invalid && !force))
		return 0;

	int count = 0;
	bool firstInPara = true;
	
	for (int i=0; i < item->itemText.length(); )
	{
		//omit marks and embeded items
		ScText* hl = item->itemText.item(i);
		if (hl->hasMark() || hl->hasObject(m_Doc))
		{
			++i;
			continue;
		}
		QChar ch = item->itemText.text(i);
		
		QChar prev(0);
		QChar next(0);
		if (i >0)
		{
			prev = item->itemText.text(i-1);
			//check if next char is first in para
			firstInPara = SpecialChars::isBreak(prev);
		}
		if (i < item->itemText.length() -1)
			next = item->itemText.text(i+1);
		if (convertTabs && ch == SpecialChars::TAB)
		{
			item->itemText.replaceChar(i, ' ');
			++count;
			ch = ' ';
		}
		if (!replaceStrings.isEmpty())
		{
			foreach(QString source, replaceStrings.keys())
			{
				if (ch == source.at(0))
				{
					bool doReplace = true;
					int len = source.length();
					if (i + len >= item->itemText.length())
						break;
					if (len > 1)
					{
						for (int j = 1; j < len; ++j)
						{
							if (item->itemText.text(j+i) != source.at(j))
							{
								doReplace = false;
								break;
							}
						}
					}
					if (doReplace)
					{
						item->itemText.removeChars(i, len);
						item->itemText.insertChars(i, replaceStrings.value(source), true);
						++count;
						break;
					}
				}
			}
		}
		if (SpecialChars::isRealSpace(ch))
		{
			//spaces at start of paragraph
			if (removeSpacesParaStart && firstInPara)
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
			//remove spaces after some chars
			if (removeSpacesAfter && removeSpacesAfterChars.contains(prev))
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
			//if not last character
			if (next != QChar(0))
			{
				if (removeMultiSpaces && SpecialChars::isRealSpace(next))
				{
					item->itemText.removeChars(i,1);
					++count;
					continue;
				}
				//spaces at end of paragraph
				if (removeSpacesParaEnd && next == SpecialChars::PARSEP)
				{
					item->itemText.removeChars(i,1);
					++count;
					continue;
				}
				//remove spaces before some chars
				if (removeSpacesBefore && removeSpacesBeforeChars.contains(next))
				{
					item->itemText.removeChars(i,1);
					++count;
					continue;
				}
			}
			//last in paragraph
			else if (removeSpacesParaEnd)
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
			//converting to normal space
			if (convertSpacesToNormal && ch != ' ')
			{
				item->itemText.replaceChar(i, ' ');
				++count;
				continue;
			}
		}
		//remove line breaks
		else if (removeBreaks && (ch == SpecialChars::LINEBREAK))
		{
			if (removeMultiSpaces && SpecialChars::isRealSpace(prev))
				item->itemText.removeChars(i,1);
			else
				item->itemText.replaceChar(i, ' ');
			++count;
			continue;
		}
		//remove hyphenation
		else if (removeHyphenation && (ch == SpecialChars::SHYPHEN))
		{
			item->itemText.removeChars(i,1);
			++count;
			continue;
		}
		//remove empty lines (and last PARSEP at end of text)
		else if (removeEmptyLines && SpecialChars::isBreak(ch))
		{
			if (!next.isNull() && SpecialChars::isBreak(next))
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
		}
		else //normal char
		{
			if (runAutoQuotes && (ch == QChar(34) || ch == QChar(39)))
			{
				bool change2lead = false;
				bool change2follow = false;
				if (ch == QChar(34))
				{
					if (firstInPara)
						change2lead = true;
					else
					{
						if (prev=='.' || prev==',' || prev=='?' || prev=='!')
							change2follow = true;
						else if (prev==QChar(39) && !next.isSpace() && next!=',' && next!='.')
							change2lead = true;
						else if (next=='.' || next==',')
							change2follow = true;
						else if (prev.isSpace() || (!next.isSpace() && next!=QChar(39)))
							change2lead = true;
						else
							change2follow = true;
					}
					if (change2lead)
					{
						item->itemText.replaceChar(i,lead_double);
						++count;
					}
					else if (change2follow)
					{
						item->itemText.replaceChar(i,follow_double);
						++count;
					}
				}
				else if (ch == QChar(39))
				{
					if (firstInPara)
						change2lead = true;
					else
					{
						if (prev=='.' || prev==',' || prev=='?' || prev=='!')
							change2follow = true;
						else if (prev==QChar(34) && !next.isSpace() && next!=',' && next!='.')
							change2lead = true;
						else if (next=='.' || next==',')
							change2follow = true;
						else if (prev.isSpace() || (!next.isSpace() && next!=QChar(34)))
							change2lead = true;
						else
							change2follow = true;
					}
					if (change2lead)
					{
						item->itemText.replaceChar(i,lead_single);
						++count;
					}
					else if (change2follow)
					{
						item->itemText.replaceChar(i,follow_single);
						++count;
					}
				}
			}
			//remove chars before some chars
			if (removeCharBefore.contains(ch) && removeCharBefore.value(ch).contains(next))
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
			//remove chars after some chars
			if (removeCharAfter.contains(prev) && removeCharAfter.value(prev).contains(ch))
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
			if (ensureSpacesBefore && ensureSpacesBeforeChars.contains(ch) && !(prev.isSpace() || SpecialChars::isBreak(prev) || removeSpacesAfterChars.contains(prev)))
			{
				item->itemText.insertChars(i, " ", true);
				++count;
				i = i + 1;
				continue;
			}
			if (ensureSpacesAfter && ensureSpacesAfterChars.contains(ch) && !(next.isSpace() || SpecialChars::isBreak(next) || removeSpacesBeforeChars.contains(next)))
			{
				//hack for omit some insertions with numbers or dates
				if ((ch == '.' || ch == ',' || ch == ':' || ch == '-')
						&& next.isDigit())
				{
					++i;
					continue;
				}
				item->itemText.insertChars(i+1, " ", true);
				++count;
				i = i + 1;
				continue;
			}
		}
		//if not was removed go to next char
		++i;
	}
	if (runShortWords)
	{
		SWParse *parse = new SWParse();
		parse->lang = ""; // get it from style
		parse->parseItem(item, true);
		count += parse->modify;
		delete parse;
	}
	//invalidate item or whole text chain
	if (item->isTextFrame())
		item->asTextFrame()->invalidateLayout(true);
	else
		item->invalid = true;
	return count;
}

void TextValidatorImpl::setAutoQuotes()
{
	if (autoQuotesLang == "en")
	{
		lead_double = QChar(0x201c);
		follow_double = QChar(0x201d);
		lead_single = QChar(0x2018);
		follow_single = QChar(0x2019);
	}
	else if (autoQuotesLang == "de")
	{
		lead_double = QChar(0x201e);
		follow_double = QChar(0x201c);
		lead_single = QChar(0x2019);
		follow_single = QChar(0x201a);
	}
	else if (autoQuotesLang == "fr")
	{
		lead_double = QChar(0x00ab);
		follow_double = QChar(0x00bb);
		lead_single = QChar(0x2018);
		follow_single = QChar(0x2019);
	}
	else if (autoQuotesLang == "pl")
	{
		lead_double = QChar(0x201e);
		follow_double = QChar(0x201d);
		lead_single = QChar(0x201a);
		follow_single = QChar(0x2019);
	}
	else if (autoQuotesLang == "se" || autoQuotesLang == "fi" )
	{
		lead_double = QChar(0x201d);
		follow_double = QChar(0x201d);
		lead_single = QChar(0x2019);
		follow_single = QChar(0x2019);
	}
	else if (autoQuotesLang == "af")
	{
		lead_double = QChar(0x201c);
		follow_double = QChar(0x201d);
		lead_single = QChar(0x2018);
		follow_single = QChar(0x2019);
	}
	else if (autoQuotesLang == "sq")
	{
		lead_double = QChar(0x201e);
		follow_double = QChar(0x201c);
		lead_single = QChar(0x2018);
		follow_single = QChar(0x2019);
	}
	else if (autoQuotesLang == "be" || autoQuotesLang == "ch"  || autoQuotesLang == "uk" || autoQuotesLang == "ru")
	{
		lead_double = QChar(0x00ab);
		follow_double = QChar(0x00bb);
		lead_single = QChar(0x2039);
		follow_single = QChar(0x203a);
	}
	else if (autoQuotesLang == "es")
	{
		lead_double = QChar(0x00ab);
		follow_double = QChar(0x00bb);
		lead_single = QChar(0x201d);
		follow_single = QChar(0x2018);
	}
	else if (autoQuotesLang == "hu" || autoQuotesLang == "nl" )
	{
		lead_double = QChar(0x201e);
		follow_double = QChar(0x201d);
		lead_single = QChar(0x00bb);
		follow_single = QChar(0x200ab);
	}
	else if (autoQuotesLang == "lt" || autoQuotesLang == "mk"  || autoQuotesLang == "is" || autoQuotesLang == "sk"
			 || autoQuotesLang == "sl" || autoQuotesLang == "cs" || autoQuotesLang == "et")
	{
		lead_double = QChar(0x201e);
		follow_double = QChar(0x201c);
		lead_single = QChar(0x2019);
		follow_single = QChar(0x201a);
	}
}
