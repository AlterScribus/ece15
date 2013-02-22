/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "textvalidatorimpl.h"
#include "tvdialog.h"
#include <prefsfile.h>
#include <prefscontext.h>
#include <prefsmanager.h>
#include "scribusdoc.h"
#include "scribus.h"
#include "selection.h"

#include <QObject>
#include <QProgressBar>
#include <QString>
#include <QMessageBox>

// Initialize members here, if any
TextValidatorImpl::TextValidatorImpl(ScribusDoc* doc) : QObject(0)
{
	m_Doc = doc;
	if (m_Doc == NULL)
		return;
	PrefsFile* prefsFile = PrefsManager::instance()->applicationPrefsFile();
	PrefsContext *tvPluginPrefs = prefsFile->getPluginContext("TextValidatorPlugin");
	//	runShortWords = tvPluginPrefs->getBool("runShortWords", false);
	removeMultiSpaces = tvPluginPrefs->getBool("removeMultiSpaces", true);
	removeSpacesParaStart = tvPluginPrefs->getBool("removeSpacesParaStart", true);
	removeSpacesParaEnd = tvPluginPrefs->getBool("removeSpacesParaEnd", true);
	removeEmptyLines = tvPluginPrefs->getBool("removeEmptyLines", true);
	removeBreaks = tvPluginPrefs->getBool("removeBreaks", true);
	removeHyphenation = tvPluginPrefs->getBool("removeHyphenation", false);
	convertSpacesToNormal = tvPluginPrefs->getBool("convertSpacesToNormal", false);
	removeSpaceBefore = tvPluginPrefs->get("removeSpaceBefore", ",.:;)");
	removeSpaceAfter  = tvPluginPrefs->get("removeSpaceAfter", "(");
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
	//	TextValidatorPrefs vpref = PrefsManager::instance()->appPrefs.textValidatorPrefs;
}

bool TextValidatorImpl::run()
{
	if (m_Doc==NULL)
		return false;
	TVDialog *dlg = new TVDialog();
	if (dlg->exec() == QDialog::Accepted) {
		QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
		m_Doc->scMW()->setStatusBarInfoText(QObject::tr("Text Validator processing. Wait please...", "text validator plugin"));
		int res = 0;
		switch (dlg->actionSelected()) {
		case 0: //selection
		{
			uint docSelectionCount = m_Doc->m_Selection->count();
			if (docSelectionCount != 0)
			{
				m_Doc->scMW()->mainWindowProgressBar->setMaximum(docSelectionCount);
				for (uint i=0; i < docSelectionCount; ++i)
				{
					m_Doc->scMW()->mainWindowProgressBar->setValue(i);
					res += validateItemText(m_Doc->m_Selection->itemAt(i));
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
			for (uint i = 0; i < m_Doc->DocItems.count(); ++i)
			{
				if (m_Doc->Items->at(i)->OwnPage == currpage)
					++cnt;
			}
			m_Doc->scMW()->mainWindowProgressBar->setMaximum(cnt);
			for (uint i = 0; i < i < m_Doc->DocItems.count(); ++i)
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

int TextValidatorImpl::validateItemText(PageItem* item)
{
	if (item == NULL || item->itemText.length() == 0)
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
		if (ch.isSpace() && ch != SpecialChars::TAB)
		{
			//spaces at start of paragraph
			if (removeSpacesParaStart && firstInPara)
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
			//remove spaces after some chars
			if (i > 0)
			{
				QChar prev = item->itemText.text(i-1);
				if (removeSpaceAfter.contains(prev))
				{
					item->itemText.removeChars(i,1);
					++count;
					continue;
				}
			}
			//if not last character
			if (i+1 < item->itemText.length())
			{
				QChar next = item->itemText.text(i+1);
				//multiple spaces
				if ((next.isSpace() && next != SpecialChars::TAB) && removeMultiSpaces)
				{
					item->itemText.removeChars(i,1);
					++count;
					continue;
				}
				//spaces at end of paragraph
				if (next == SpecialChars::PARSEP && removeSpacesParaEnd)
				{
					item->itemText.removeChars(i,1);
					++count;
					continue;
				}
				//remove spaces before some chars
				if (removeSpaceBefore.contains(next))
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
		//remove breaks
		else if (removeBreaks && (ch == SpecialChars::LINEBREAK))
		{
			if ((i > 0) && item->itemText.text(i-1).isSpace() && removeMultiSpaces)
				item->itemText.removeChars(i,1);
			else
				item->itemText.replaceChar(i, ' ');
			++count;
			continue;
		}
		//remove hyphenation
		else if (removeHyphenation && ch == SpecialChars::SHYPHEN)
		{
			item->itemText.removeChars(i,1);
			++count;
			continue;
		}
		//remove empty lines (and last PARSEP at end of text
		if (ch == SpecialChars::PARSEP && removeEmptyLines)
		{
			if ((i+1 == item->itemText.length()) || (item->itemText.text(i+1) == SpecialChars::PARSEP))
			{
				item->itemText.removeChars(i,1);
				++count;
				continue;
			}
		}
		//remove chars before some chars
		if ((i + 1 < item->itemText.length()) && removeCharBefore.contains(ch) && removeCharBefore.value(ch).contains(item->itemText.text(i+1)))
		{
			item->itemText.removeChars(i,1);
			++count;
			continue;
		}
		//remove chars after some chars
		if (i>0 && removeCharAfter.contains(item->itemText.text(i-1)) && removeCharAfter.value(item->itemText.text(i-1)).contains(ch))
		{
			item->itemText.removeChars(i,1);
			++count;
			continue;
		}
		//check if next char is first in para
		firstInPara = (ch == SpecialChars::PARSEP);
		//if not was removed go to next char
		++i;
	}
	return count;
}


