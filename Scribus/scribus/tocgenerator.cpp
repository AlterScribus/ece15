/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
    begin                : Jun 2005
    copyright            : (C) 2005 by Craig Bradney
    email                : cbradney@zip.com.au
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "tocgenerator.h"

#include <QMap>
#include <QString>

#include "gtframestyle.h"
#include "gtparagraphstyle.h"
#include "gtwriter.h"
#include "pageitem.h"
#include "pagestructs.h"
#include "scpage.h"
#include "scribusdoc.h"

TOCGenerator::TOCGenerator(QObject *parent, ScribusDoc *doc) : QObject(parent)
{
	currDoc=doc;
}


TOCGenerator::~TOCGenerator()
{
}

void TOCGenerator::setDoc(ScribusDoc *doc)
{
	currDoc=doc;
}

PageItem* TOCGenerator::findTargetFrame(const QString &targetFrameName)
{
	PageItem* targetFrame=NULL;
	if (currDoc!=NULL)
	{
		for (int d = 0; d < currDoc->DocItems.count(); ++d)
		{
			if (currDoc->DocItems.at(d) !=NULL )
			{
				if (currDoc->DocItems.at(d)->itemType()==PageItem::TextFrame && currDoc->DocItems.at(d)->itemName()==targetFrameName)
				{
					targetFrame=currDoc->DocItems.at(d);
					break;
				}
			}
		}
	}
	return targetFrame;
}

void TOCGenerator::generateDefault()
{
	if (currDoc==NULL)
		return;
	Q_ASSERT(!currDoc->masterPageMode());
	for(ToCSetupVector::Iterator tocSetupIt = currDoc->tocSetups().begin(); tocSetupIt != currDoc->tocSetups().end(); ++tocSetupIt )
	{
		PageItem* tocFrame = findTargetFrame(tocSetupIt->frameName);
		if (tocFrame == NULL)
			continue;

		PageItem *currentDocItem;
		QMap<QString, QString> tocMap;
		QList<int> tocLevels;

		uint *pageCounter = new uint[currDoc->DocPages.count()];
		if (pageCounter == NULL)
			return;
		uint pageNumberWidth = QString("%1").arg(currDoc->DocPages.count()).length();
		for (int i = 0; i < currDoc->DocPages.count(); ++i)
			pageCounter[i] = 0;

		for (int d = 0; d < currDoc->DocItems.count(); ++d)
		{
			currentDocItem = currDoc->DocItems.at(d);
			if (currentDocItem == NULL)
				continue;
			//Item not on a page, continue
			if (currentDocItem->OwnPage == -1)
				continue;
			QString pageID = QString("%1").arg(currentDocItem->OwnPage + currDoc->FirstPnum, pageNumberWidth);
			QString sectionID = currDoc->getSectionPageNumberForPageIndex(currentDocItem->OwnPage);
			for (int lv=0; lv < tocSetupIt->levels.count(); ++lv)
			{
				TOCLevelSetup level = tocSetupIt->levels.at(lv);
				//If we dont want to list non printing frames and this one is set to not print, continue
				if (!level.listNonPrintingFrames && !currentDocItem->printEnabled())
					continue;
				if (level.attributeMode)
				{
					ObjectAttribute objAttr;
					QList<ObjectAttribute> objAttrs = currentDocItem->getObjectAttributes(level.searchName);
					if (objAttrs.count() <= 0)
						continue;
					for (int i = 0; i < objAttrs.count(); ++i)
					{
						objAttr = objAttrs.at(i);
						if (objAttr.name.isNull())
							continue;
						
						//The key is generated to produce a sequence of numbers for the page numbers
						//First is the page of the item
						//Second is an incremented counter for the item so multiple per page works
						//Third is the section based page number which is actually used in the TOC.
						QString tocID = QString("%1").arg(pageCounter[currentDocItem->OwnPage]++, 3 , 10, QChar('0'));
						QString key   = QString("%1,%2,%3").arg(pageID).arg(tocID).arg(sectionID);
						tocMap.insert(key, objAttr.value);
						tocLevels.append(lv);
					}
				}
				//ParagraphStyle mode is only for items with text and without "No-TOC" attribute
				else if (currentDocItem->itemText.length() > 0 && currentDocItem->getObjectAttribute("NO_TOC").name.isNull())
				{
					int pos = currentDocItem->firstInFrame();
					if (pos > 0)
						pos = currentDocItem->itemText.findParagraphEnd(pos) +1;
					while (pos < currentDocItem->lastInFrame())
					{
						if (currentDocItem->itemText.paragraphStyle(pos).parent() == level.searchName)
						{
							QString result = currentDocItem->getTextFromParagraph(pos, level.textLimit, level.textRange).trimmed();
							if (!result.isEmpty())
							{
								QString tocID = QString("%1").arg(pageCounter[currentDocItem->OwnPage]++, 3 , 10, QChar('0'));
								QString key   = QString("%1,%2,%3").arg(pageID).arg(tocID).arg(sectionID);
								tocMap.insert(key, result);
								tocLevels.append(lv);
							}
						}
						pos = currentDocItem->itemText.nextParagraph(pos);
					}
				}
			}
		}
		tocFrame->itemText.clear();
		QString oldTocPage = QString::null;
		int lv = 0;
		for (QMap<QString, QString>::Iterator tocIt=tocMap.begin(); tocIt != tocMap.end();++tocIt)
		{
			TOCLevelSetup levelSetup = tocSetupIt->levels.at(tocLevels.at(lv));
			QString tocPage(tocIt.key().section( ',', 2, 2 ).trimmed());
			QString tocLine = QString();
			if (levelSetup.pageLocation == End || levelSetup.pageLocation == NotShown)
				tocLine.append(tocIt.value() + SpecialChars::TAB + tocPage);
			if (levelSetup.pageLocation == Beginning && oldTocPage != tocPage)
				tocLine.append(tocPage + SpecialChars::TAB + tocIt.value());
			tocLine.append(SpecialChars::PARSEP);
			int pos = tocFrame->itemText.length();
			tocFrame->itemText.insertChars(pos, tocLine);
			ParagraphStyle pstyle = currDoc->paragraphStyle(levelSetup.textStyle);
			tocFrame->itemText.applyStyle(pos, pstyle);
			++lv;
		}

		delete[] pageCounter;
	}
}
