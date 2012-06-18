/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "hunspellpluginimpl.h"
#include "hunspelldialog.h"
#include "langmgr.h"
#include "pageitem.h"
#include "pageitem_textframe.h"
#include "selection.h"
#include "scpaths.h"
#include "scribusdoc.h"
#include "scribus.h"
#include "ui/storyeditor.h"
#include "text/specialchars.h"
#include "util.h"

#include <QDebug>
#include <QDir>
#include <QFile>
#include <QMessageBox>

#ifdef Q_OS_WIN32
#include <windows.h>
#include <shlobj.h>
#endif


// Initialize members here, if any
HunspellPluginImpl::HunspellPluginImpl() : QObject(0)
{
	//hspellers=NULL;
<<<<<<< HEAD
<<<<<<< HEAD
	numDicts=0;
=======
//	numDicts=0;
>>>>>>> a78f1676d3bfe54774d2c739bf39fefd86135f16
=======
//	numDicts=0;
>>>>>>> bea5ac5c4844d7b78798edca794c0a7bf0155c96
	m_runningForSE=false;
	m_SE=NULL;
}

HunspellPluginImpl::~HunspellPluginImpl()
{
	foreach (Hunspell* h, hspellerMap)
	{
		delete h;
		h = NULL;
	}
	hspellerMap.clear();
<<<<<<< HEAD
<<<<<<< HEAD
	numDicts = 0;
=======
//	numDicts = 0;
>>>>>>> a78f1676d3bfe54774d2c739bf39fefd86135f16
=======
//	numDicts = 0;
>>>>>>> bea5ac5c4844d7b78798edca794c0a7bf0155c96
}

bool HunspellPluginImpl::run(const QString & target, ScribusDoc* doc)
{
	m_doc=doc;
	bool initOk=initHunspell();
	if (!initOk)
		return false;
	bool spellCheckOk=false;
	if (m_runningForSE)
		spellCheckOk=checkWithHunspellSE();
	else
		spellCheckOk=checkWithHunspell();
	return spellCheckOk;
}

<<<<<<< HEAD
<<<<<<< HEAD
bool HunspellPluginImpl::findDictionaries()
{
	dictionaryPaths=ScPaths::instance().spellDirs();
	if (dictionaryPaths.count()==0)
		return false;
	return true;
}

bool HunspellPluginImpl::initHunspell()
{
	bool dictPathFound=findDictionaries();
=======
bool HunspellPluginImpl::initHunspell()
{
	bool dictPathFound=LanguageManager::instance()->findDictionaries(dictionaryPaths);
>>>>>>> a78f1676d3bfe54774d2c739bf39fefd86135f16
=======
bool HunspellPluginImpl::initHunspell()
{
	bool dictPathFound=LanguageManager::instance()->findDictionaries(dictionaryPaths);
>>>>>>> bea5ac5c4844d7b78798edca794c0a7bf0155c96
	if (!dictPathFound)
	{
		qDebug()<<"No preinstalled dictonary paths found";
		return false;
	}
<<<<<<< HEAD
<<<<<<< HEAD
	for (int i=0; i<dictionaryPaths.count(); ++i)
	{
		// Find the dic and aff files in the location
		QDir dictLocation(dictionaryPaths.at(i));
		QStringList dictFilters("*.dic");
		QStringList dictList(dictLocation.entryList(dictFilters, QDir::Files, QDir::Name));
		dictList.replaceInStrings(".dic","");

		//Ensure we have aff+dic file pairs, remove any hyphenation dictionaries from the list
		QString dictName;
		foreach(dictName, dictList)
		{
			if (!QFile::exists(dictionaryPaths.at(i)+dictName+".aff"))
				dictList.removeAll(dictName);
			else
			{
				if (!dictionaryMap.contains(dictName))
					dictionaryMap.insert(dictName, dictionaryPaths.at(i)+dictName);
			}
		}
		qDebug()<<"Number of dictionaries/AFFs found in"<<dictionaryPaths.at(i)<<":"<<dictList.count();
	}
	numDicts=dictionaryMap.count();
=======
	dictionaryMap.clear();
	LanguageManager::instance()->findDictionarySets(dictionaryPaths, dictionaryMap);
//	numDicts=dictionaryMap.count();
>>>>>>> a78f1676d3bfe54774d2c739bf39fefd86135f16
=======
	dictionaryMap.clear();
	LanguageManager::instance()->findDictionarySets(dictionaryPaths, dictionaryMap);
//	numDicts=dictionaryMap.count();
>>>>>>> bea5ac5c4844d7b78798edca794c0a7bf0155c96
	if (dictionaryMap.count()==0)
		return false;

	//Initialise one hunspeller for each dictionary found
	QMap<QString, QString>::iterator it = dictionaryMap.begin();
	while (it != dictionaryMap.end())
	{
		hspellerMap.insert(it.key(), new Hunspell((it.value()+".aff").toLocal8Bit().constData(),
											 (it.value()+".dic").toLocal8Bit().constData()));
		++it;
	}
	return true;
}

bool HunspellPluginImpl::checkWithHunspell()
{
	PageItem *frameToCheck;

	for( int i = 0; i < m_doc->m_Selection->count(); ++i )
	{
		frameToCheck = m_doc->m_Selection->itemAt(i);
		StoryText *iText=&frameToCheck->itemText;
		parseTextFrame(iText);
		openGUIForTextFrame(iText);
		m_doc->view()->DrawNew();
	}
	return true;
}

bool HunspellPluginImpl::checkWithHunspellSE()
{
	StoryText *iText=&(m_SE->Editor->StyledText);
	parseTextFrame(iText);
	openGUIForStoryEditor(iText);
	m_SE->Editor->updateAll();
	return true;
}

bool HunspellPluginImpl::parseTextFrame(StoryText *iText)
{
	int len=iText->length();
	int currPos=0, wordStart=0;
	while (currPos<len)
	{
		wordStart=iText->nextWord(currPos);
		int wordEnd=iText->endOfWord(wordStart);
		currPos=wordStart;
		QString word=iText->text(wordStart,wordEnd-wordStart);
		QString wordLang=iText->charStyle(wordStart).language();
<<<<<<< HEAD
<<<<<<< HEAD
		//qDebug()<<word<<wordLang;
=======
>>>>>>> a78f1676d3bfe54774d2c739bf39fefd86135f16
=======
>>>>>>> bea5ac5c4844d7b78798edca794c0a7bf0155c96
		wordLang=LanguageManager::instance()->getAbbrevFromLang(wordLang, true, false);
		//A little hack as for some reason our en dictionary from the aspell plugin was not called en_GB or en_US but en, content was en_GB though. Meh.
		if (wordLang=="en")
			wordLang="en_GB";
		int spellerIndex=0;
		if (!dictionaryMap.contains(wordLang))
			qDebug()<<"Spelling language to match style language not installed ("<<wordLang<<")";
		else
		{
			int i=0;
			QMap<QString, QString>::iterator it = dictionaryMap.begin();
			while (it != dictionaryMap.end())
			{
				if (it.key()==wordLang)
					break;
				++i;
				++it;
			}
			spellerIndex=i;
		}
		if (hspellerMap.contains(wordLang) && hspellerMap[wordLang]->spell(word.toUtf8().constData())==0)
		{
			struct WordsFound wf;
			wf.start=currPos;
			wf.end=wordEnd;
			wf.w=word;
			wf.changed=false;
			wf.ignore=false;
			wf.changeOffset=0;
			wf.lang=wordLang;
			wf.replacements.clear();
			char **sugglist = NULL;
			int suggCount=hspellerMap[wordLang]->suggest(&sugglist, word.toUtf8().constData());
			for (int j=0; j < suggCount; ++j)
				wf.replacements << QString::fromUtf8(sugglist[j]);
			hspellerMap[wordLang]->free_list(&sugglist, suggCount);
			wordsToCorrect.append(wf);
		}
	}
	return true;
}

bool HunspellPluginImpl::openGUIForTextFrame(StoryText *iText)
{
	HunspellDialog hsDialog(m_doc->scMW(), m_doc, iText);
	hsDialog.set(&dictionaryMap, &hspellerMap, &wordsToCorrect);
	hsDialog.exec();
	if (hsDialog.docChanged())
		m_doc->changed();
	return true;
}

bool HunspellPluginImpl::openGUIForStoryEditor(StoryText *iText)
{
	m_SE->setSpellActive(true);
	HunspellDialog hsDialog(m_SE, m_doc, iText);
	hsDialog.set(&dictionaryMap, &hspellerMap, &wordsToCorrect);
	hsDialog.exec();
	m_SE->setSpellActive(false);
	return true;
}

void HunspellPluginImpl::setRunningForSE(bool rfSE, StoryEditor *sE)
{
	m_runningForSE=rfSE;
	m_SE=sE;
}

