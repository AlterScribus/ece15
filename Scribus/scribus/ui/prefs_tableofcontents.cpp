/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "ui/prefs_tableofcontents.h"
#include "pagestructs.h"
#include "prefsstructs.h"
#include "scpage.h"
#include "scribusdoc.h"
#include "commonstrings.h"
#include "util.h"

const int PNEnd = 0;
const int PNBeginning = 1;
const int PNNotShown = 2;

Prefs_TableOfContents::Prefs_TableOfContents(QWidget* parent, ScribusDoc* doc)
	: Prefs_Pane(parent),
	m_Doc(doc)
{
	setupUi(this);
	languageChange();
	itemDestFrameComboBox->setMaximumWidth(fontMetrics().width( "This is a very long Name" ));
	itemAttrComboBox->setMaximumWidth(fontMetrics().width( "This is a very long Name" ));
	itemNumberPlacementComboBox->setMaximumWidth(fontMetrics().width( "This is a very long Name" ));
	levelParagraphStyleComboBox->setMaximumWidth(fontMetrics().width( "This is a very long Name" ));

	limitSpin->setRange(1,999);
	limitSpin->setValue(1);
	limitSpin->setSuffix(" " + tr("char"));
	
	// signals and slots connections
	//do not connect( tocListBox, SIGNAL( currentRowChanged(int) ), this, SLOT( selectToC(int) ) );
	connect( tocAddButton, SIGNAL( clicked() ), this, SLOT( addToC() ) );
	connect( tocDeleteButton, SIGNAL( clicked() ), this, SLOT( deleteToC() ) );
	connect( itemAttrComboBox, SIGNAL( activated(const QString&) ), this, SLOT( itemAttributeSelected(const QString&) ) );
	connect( itemDestFrameComboBox, SIGNAL( activated(const QString&) ), this, SLOT( itemFrameSelected(const QString&) ) );
	connect( levelParagraphStyleComboBox, SIGNAL( activated(const QString&) ), this, SLOT( itemParagraphStyleSelected(const QString&) ) );
	connect( itemNumberPlacementComboBox, SIGNAL(activated(int)), this, SLOT( itemPageNumberPlacedSelected(const int) ) );
	connect( tocNameLineEdit, SIGNAL( textChanged(const QString&) ), this, SLOT( setToCName(const QString&) ) );
	connect( itemListNonPrintingCheckBox, SIGNAL( toggled(bool) ), this, SLOT( nonPrintingFramesSelected(bool) ) );
	setCurrentComboItem(itemNumberPlacementComboBox, trStrPNEnd);
}

Prefs_TableOfContents::~Prefs_TableOfContents()
{
}


void Prefs_TableOfContents::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
	}
	else
		QWidget::changeEvent(e);
}

void Prefs_TableOfContents::restoreDefaults(struct ApplicationPrefs *prefsData)
{
	localToCSetupVector=prefsData->tocPrefs.defaultToCSetups;
	generatePageItemList();
	bool enabled=(localToCSetupVector.count()>0);
	if (enabled)
	{
		updateToCListBox();
		updateParagraphStyleComboBox();
//		tocListBox->setCurrentItem(0);
//		selectToC(0);
	}
	else
		tocListBox->clear();
	enableGUIWidgets();
	connect( tocListBox, SIGNAL( currentRowChanged(int) ), this, SLOT( selectToC(int) ) );
}

void Prefs_TableOfContents::saveGuiToPrefs(struct ApplicationPrefs *prefsData) const
{
	prefsData->tocPrefs.defaultToCSetups = localToCSetupVector;
}

void Prefs_TableOfContents::languageChange()
{
	setBlockSignals(true);
	trStrPNBeginning=tr("Beginning");
	trStrPNEnd=tr("End");
	trStrPNNotShown=tr("Not Shown");
	limitLabel->setText(tr("Max Length:"));
	limitSpin->setSuffix(tr("chars"));
	limitSpin->setRange(1,999);
	limitSpin->setValue(1);
	rangeCombo->addItem(tr("Get whole paragraph"));	//0
	rangeCombo->addItem(tr("Get first sentence"));	//1
	rangeCombo->addItem(tr("Get first line"));		//2
	rangeCombo->addItem(tr("Exact length"));		//3
	rangeCombo->addItem(tr("Last space"));			//4
	rangeLabel->setText(tr("Max Length"));

	int i=itemNumberPlacementComboBox->currentIndex();
	itemNumberPlacementComboBox->clear();
	itemNumberPlacementComboBox->addItem(trStrPNEnd);
	itemNumberPlacementComboBox->addItem(trStrPNBeginning);
	itemNumberPlacementComboBox->addItem(trStrPNNotShown);
	itemNumberPlacementComboBox->setCurrentIndex(i);
	helpNote->setText(tr("TIP: in Paragraph Style mode if some text frame must be ignored during TOC generating\nthen set 'NO_TOC' attribute to it."));
	setBlockSignals(false);
}

void Prefs_TableOfContents::setBlockSignals(bool block)
{
	tocListBox->blockSignals(block);
	itemAttrComboBox->blockSignals(block);
	itemDestFrameComboBox->blockSignals(block);
	levelParagraphStyleComboBox->blockSignals(block);
	itemNumberPlacementComboBox->blockSignals(block);
	tocNameLineEdit->blockSignals(block);
	itemListNonPrintingCheckBox->blockSignals(block);
	itemAttrRadio->blockSignals(block);
	paraStyleRadio->blockSignals(block);
	levelSpin->blockSignals(block);
	rangeCombo->blockSignals(block);
	previewBrowser->blockSignals(block);
}

void Prefs_TableOfContents::destroy()
{

}

void Prefs_TableOfContents::generatePageItemList()
{
	itemDestFrameComboBox->clear();
	itemDestFrameComboBox->addItem(CommonStrings::tr_None);
	if (m_Doc!=NULL)
	{
		QList<PageItem*> allItems;
		for (int a = 0; a < m_Doc->DocItems.count(); ++a)
		{
			PageItem *currItem = m_Doc->DocItems.at(a);
			if (currItem->isGroup())
				allItems = currItem->getItemList();
			else
				allItems.append(currItem);
			for (int ii = 0; ii < allItems.count(); ii++)
			{
				currItem = allItems.at(ii);
				if (currItem->itemType() == PageItem::TextFrame)
					itemDestFrameComboBox->addItem(currItem->itemName());
			}
			allItems.clear();
		}
	}
	else
		itemDestFrameComboBox->setEnabled(false);
}

void Prefs_TableOfContents::setupItemAttrs( QStringList newNames )
{
	docAttributesList = newNames;
	itemAttrComboBox->blockSignals(true);
	itemAttrComboBox->clear();
	itemAttrComboBox->addItem(CommonStrings::tr_None);
	itemAttrComboBox->addItems(newNames);
	if (numSelected!=999 && numSelected!=-1)
	{
		if (localToCSetupVector[numSelected].levels.at(levelSelected).searchName == CommonStrings::None)
			setCurrentComboItem(itemAttrComboBox, CommonStrings::tr_None);
		else
			setCurrentComboItem(itemAttrComboBox, localToCSetupVector[numSelected].levels.at(levelSelected).searchName);
	}
	itemAttrLabel->setText(tr("Item Attribute Name:"));
	itemAttrComboBox->blockSignals(false);
}

void Prefs_TableOfContents::setupAttrComboForPStyleMode()
{
	itemAttrComboBox->blockSignals(true);
	itemAttrComboBox->clear();
	if(m_Doc!=NULL) // && m_Doc->docParagraphStyles.count()>5)
	{
		paragraphStyleList.clear();
		for (int i = 0; i < m_Doc->paragraphStyles().count(); ++i)
			paragraphStyleList.append(m_Doc->paragraphStyles()[i].name());
		paragraphStyleList.sort();
		itemAttrComboBox->addItems(paragraphStyleList);
	}
	itemAttrLabel->setText(tr("Search Paragraph Style:"));
	itemAttrComboBox->blockSignals(false);
}

void Prefs_TableOfContents::selectToC( int numberSelected )
{
	setBlockSignals(true);
	numSelected=numberSelected;
	if (numSelected < 0)
		return;
	if (localToCSetupVector.isEmpty())
		return;
	if (localToCSetupVector.count()<numSelected)
		numSelected=0;

	ToCSetup currTOC = localToCSetupVector[numSelected];
	levelSpin->setMaximum(currTOC.levels.count());
	if (currTOC.levels.count() == 1)
		levelDelButton->setEnabled(false);
	levelSelected = 0;
	showTOCLevel();
	if (m_Doc!=NULL)
	{
		if (currTOC.frameName==CommonStrings::None)
			setCurrentComboItem(itemDestFrameComboBox, CommonStrings::tr_None);
		else
			setCurrentComboItem(itemDestFrameComboBox, currTOC.frameName);

		if (levelParagraphStyleComboBox->count()>0)
		{
			if (!paragraphStyleList.contains(currTOC.levels.at(levelSelected).textStyle) || currTOC.levels.at(levelSelected).textStyle==CommonStrings::None)
				setCurrentComboItem(levelParagraphStyleComboBox, CommonStrings::tr_None);
			else
				setCurrentComboItem(levelParagraphStyleComboBox, currTOC.levels.at(levelSelected).textStyle);
		}
	}

	if (tocListBox->currentItem())
		tocNameLineEdit->setText(tocListBox->currentItem()->text());

	setBlockSignals(false);
}

void Prefs_TableOfContents::showTOCLevel()
{
	blockSignals(true);
	ToCSetup currTOC = localToCSetupVector[numSelected];
	TOCLevelSetup currLevel = currTOC.levels.at(levelSelected);
	if (currLevel.attributeMode)
	{
		setupItemAttrs(docAttributesList);
		itemAttrRadio->setChecked(true);
		paraStyleRadio->setChecked(false);
		rangeCombo->setEnabled(false);
		limitSpin->setEnabled(false);
	}
	else
	{
		setupAttrComboForPStyleMode();
		rangeCombo->setEnabled(true);
		rangeCombo->setCurrentIndex(currLevel.textRange);
		limitSpin->setEnabled(currLevel.textRange >= EXACT_LENGTH);
		limitSpin->setValue(currLevel.textLimit);
		itemAttrRadio->setChecked(false);
		paraStyleRadio->setChecked(true);
	}
	if (currLevel.searchName==CommonStrings::None)
		setCurrentComboItem(itemAttrComboBox, CommonStrings::tr_None);
	else
		setCurrentComboItem(itemAttrComboBox, currLevel.searchName);
	if (currLevel.pageLocation==NotShown)
		setCurrentComboItem(itemNumberPlacementComboBox, trStrPNNotShown);
	else if (currLevel.pageLocation==Beginning)
		setCurrentComboItem(itemNumberPlacementComboBox, trStrPNBeginning);
	else
		setCurrentComboItem(itemNumberPlacementComboBox, trStrPNEnd);
	itemListNonPrintingCheckBox->setChecked(currLevel.listNonPrintingFrames);
	levelSpin->setValue(levelSelected +1);
	blockSignals(false);
}

void Prefs_TableOfContents::addToC()
{
	blockSignals(true);
	bool found=false;
	QString newName=tocNameLineEdit->text();
	for(ToCSetupVector::Iterator it = localToCSetupVector.begin(); it!= localToCSetupVector.end(); ++it)
	{
		if ((*it).name==newName)
			found=true;
	}
	if (found || newName.isEmpty())
		newName=tr("Table of Contents %1").arg(localToCSetupVector.count()+1);
	ToCSetup newToCEntry;
	newToCEntry.name=newName;
	newToCEntry.frameName=CommonStrings::None;
	TOCLevelSetup level;
	level.searchName=CommonStrings::None;
	level.attributeMode = true;
	level.textStyle=CommonStrings::None;
	level.pageLocation=End;
	level.listNonPrintingFrames=false;
	newToCEntry.levels.append(level);
	levelSpin->setMaximum(1);
	levelDelButton->setEnabled(false);
	localToCSetupVector.append(newToCEntry);
	disconnect( tocListBox, SIGNAL( currentRowChanged(int) ), this, SLOT( selectToC(int) ) );
	updateToCListBox();
	if (localToCSetupVector.count()==1) //reinit parastyles if we are adding the first TOC
		updateParagraphStyleComboBox();
	tocListBox->setCurrentRow(localToCSetupVector.count()-1);
	selectToC(localToCSetupVector.count()-1);
	enableGUIWidgets();
	connect( tocListBox, SIGNAL( currentRowChanged(int) ), this, SLOT( selectToC(int) ) );
	blockSignals(false);
}


void Prefs_TableOfContents::updateToCListBox()
{
	tocListBox->clear();
	QStringList sl;
	for(ToCSetupVector::Iterator it = localToCSetupVector.begin(); it!= localToCSetupVector.end(); ++it)
		sl << (*it).name;
	tocListBox->insertItems(0, sl);
}

void Prefs_TableOfContents::updateParagraphStyleComboBox()
{
	paragraphStyleList.clear();
	paragraphStyleList.append(CommonStrings::tr_None);

	if(m_Doc!=NULL) // && m_Doc->docParagraphStyles.count()>5)
	{
		for (int i = 0; i < m_Doc->paragraphStyles().count(); ++i)
			paragraphStyleList.append(m_Doc->paragraphStyles()[i].name());
	}
	levelParagraphStyleComboBox->clear();
	levelParagraphStyleComboBox->addItems(paragraphStyleList);
}


void Prefs_TableOfContents::enableGUIWidgets()
{
	bool enabled=(localToCSetupVector.count()>0);
	levelSpin->setEnabled(enabled);
	tocListBox->setEnabled(enabled);
	tocDeleteButton->setEnabled(enabled);
	itemAttrComboBox->setEnabled(enabled);
	itemNumberPlacementComboBox->setEnabled(enabled);
	itemAttrRadio->setEnabled(enabled);
	paraStyleRadio->setEnabled(enabled);
	rangeCombo->setEnabled(enabled && localToCSetupVector[numSelected].levels.at(levelSelected).textRange >= EXACT_LENGTH);
	limitSpin->setEnabled(enabled && localToCSetupVector[numSelected].levels.at(levelSelected).textRange >= EXACT_LENGTH);
	levelAddButton->setEnabled(enabled);
	levelDelButton->setEnabled(enabled && localToCSetupVector[numSelected].levels.count() > 1);
	bool haveDoc=enabled && m_Doc!=NULL;
	itemDestFrameComboBox->setEnabled(haveDoc);
	levelParagraphStyleComboBox->setEnabled(haveDoc);
}

void Prefs_TableOfContents::deleteToC()
{
	int numberSelected=tocListBox->currentRow();
	if (numberSelected>=0)
	{
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numberSelected)
		{
			++it;
			++i;
		}
		localToCSetupVector.erase(it);
		updateToCListBox();
		if (numSelected > 0)
			--numSelected;
		selectToC(numSelected);
		enableGUIWidgets();
	}
}

void Prefs_TableOfContents::itemAttributeSelected( const QString& searchForName )
{
	int numberSelected=tocListBox->currentRow();
	if (numberSelected>=0)
	{
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numberSelected)
		{
			++it;
			++i;
		}
		TOCLevelSetup level = (*it).levels.at(levelSelected);
		if (searchForName == CommonStrings::tr_None)
			level.searchName = CommonStrings::None;
		else
			level.searchName = searchForName;
		(*it).levels.replace(levelSelected, level);
	}
}

void Prefs_TableOfContents::itemFrameSelected( const QString& frameName )
{
	int numberSelected=tocListBox->currentRow();
	if (numberSelected>=0)
	{
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numberSelected)
		{
			++it;
			++i;
		}
		if (frameName==CommonStrings::tr_None)
			(*it).frameName=CommonStrings::None;
		else
			(*it).frameName=frameName;
	}

}

void Prefs_TableOfContents::itemPageNumberPlacedSelected( const int pageLocation )
{
	int numberSelected=tocListBox->currentRow();
	if (numberSelected>=0)
	{
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numberSelected)
		{
			++it;
			++i;
		}
		TOCLevelSetup level = (*it).levels.at(levelSelected);
		if (pageLocation==PNBeginning)
			level.pageLocation=Beginning;
		else if (pageLocation==PNEnd)
			level.pageLocation=End;
		else
			level.pageLocation=NotShown;
		(*it).levels.replace(levelSelected, level);
	}
}

void Prefs_TableOfContents::itemParagraphStyleSelected( const QString& itemStyle )
{
//	int numberSelected=tocListBox->currentRow();
	if (numSelected>=0)
	{
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numSelected)
		{
			++it;
			++i;
		}
		TOCLevelSetup level = (*it).levels.at(levelSelected);
		if (itemStyle==CommonStrings::tr_None)
			level.textStyle=CommonStrings::None;
		else
			level.textStyle=itemStyle;
		(*it).levels.replace(levelSelected, level);
	}
}

void Prefs_TableOfContents::setToCName( const QString &newName )
{
	int numberSelected=tocListBox->currentRow();
	if (numberSelected!=-1)
	{
		tocListBox->item(numberSelected)->setText(newName);
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numberSelected)
		{
			++it;
			++i;
		}
		(*it).name=newName;
	}
}

void Prefs_TableOfContents::nonPrintingFramesSelected( bool showNonPrinting )
{
	int numberSelected=tocListBox->currentRow();
	if (numberSelected>=0)
	{
		int i=0;
		ToCSetupVector::Iterator it=localToCSetupVector.begin();
		while (it!= localToCSetupVector.end() && i<numberSelected)
		{
			++it;
			++i;
		}
		TOCLevelSetup level = (*it).levels.at(levelSelected);
		level.listNonPrintingFrames=showNonPrinting;
		(*it).levels.replace(levelSelected, level);
	}
}

void Prefs_TableOfContents::on_itemAttrRadio_clicked()
{
	toglePStyle_ItemAttr(itemAttrRadio->isChecked());
}

void Prefs_TableOfContents::on_paraStyleRadio_clicked()
{
	toglePStyle_ItemAttr(!paraStyleRadio->isChecked());
}

void Prefs_TableOfContents::toglePStyle_ItemAttr(bool itemMode)
{
	itemAttrRadio->blockSignals(true);
	paraStyleRadio->blockSignals(true);
	itemAttrRadio->setChecked(itemMode);
	paraStyleRadio->setChecked(!itemMode);
	ToCSetupVector::Iterator it=localToCSetupVector.begin();
	int i = 0;
	while (it!= localToCSetupVector.end() && i<numSelected)
	{
		++it;
		++i;
	}
	TOCLevelSetup level = (*it).levels.at(levelSelected);
	level.attributeMode = itemMode;
	if (itemMode)
	{
		setupItemAttrs(docAttributesList);
		itemAttrRadio->setChecked(true);
		paraStyleRadio->setChecked(false);
		rangeCombo->setEnabled(false);
		limitSpin->setEnabled(false);
	}
	else
	{
		setupAttrComboForPStyleMode();
		rangeCombo->setEnabled(true);
		rangeCombo->setCurrentIndex(level.textRange);
		limitSpin->setEnabled(level.textRange >= EXACT_LENGTH);
		limitSpin->setValue(level.textLimit);
		itemAttrRadio->setChecked(false);
		paraStyleRadio->setChecked(true);
	}
	level.searchName = itemAttrComboBox->currentText();
	(*it).levels.replace(levelSelected, level);
	itemAttrRadio->blockSignals(false);
	paraStyleRadio->blockSignals(false);
}

void Prefs_TableOfContents::on_levelAddButton_clicked()
{
	TOCLevelSetup level;
	level.searchName=CommonStrings::None;
	level.attributeMode = true;
	level.textStyle=CommonStrings::None;
	level.pageLocation=End;
	level.listNonPrintingFrames=false;
	
	int i=0;
	ToCSetupVector::Iterator it=localToCSetupVector.begin();
	while (it!= localToCSetupVector.end() && i<numSelected)
	{
		++it;
		++i;
	}
	(*it).levels.append(level);
	levelDelButton->setEnabled(true);
	levelSpin->setMaximum((*it).levels.count());
	levelSelected = (*it).levels.count() -1;
	showTOCLevel();
}

void Prefs_TableOfContents::on_levelDelButton_clicked()
{
	int i=0;
	ToCSetupVector::Iterator it=localToCSetupVector.begin();
	while (it!= localToCSetupVector.end() && i<numSelected)
	{
		++it;
		++i;
	}
	(*it).levels.removeAt(levelSelected);
	if ((*it).levels.count() == 1)
	{
		levelDelButton->setEnabled(false);
		levelSelected = 0;
	}
	else if (levelSelected > 0)
		--levelSelected;
	levelSpin->setMaximum((*it).levels.count());
	showTOCLevel();
}

void Prefs_TableOfContents::on_levelSpin_valueChanged(int arg1)
{
	levelSelected = arg1 -1;
	showTOCLevel();
}

void Prefs_TableOfContents::on_rangeCombo_currentIndexChanged(int index)
{
	limitLabel->setEnabled(index >= EXACT_LENGTH);
	limitSpin->setEnabled(index >= EXACT_LENGTH);
	ToCSetupVector::Iterator it=localToCSetupVector.begin();
	int i = 0;
	while (it!= localToCSetupVector.end() && i<numSelected)
	{
		++it;
		++i;
	}
	TOCLevelSetup level = (*it).levels.at(levelSelected);
	level.textRange = index;
	(*it).levels.replace(levelSelected, level);
}

void Prefs_TableOfContents::on_limitSpin_valueChanged(int arg1)
{
	if (arg1 == 1)
		limitSpin->setSuffix(tr("char"));
	else
		limitSpin->setSuffix(tr("chars"));
	ToCSetupVector::Iterator it=localToCSetupVector.begin();
	int i = 0;
	while (it!= localToCSetupVector.end() && i<numSelected)
	{
		++it;
		++i;
	}
	TOCLevelSetup level = (*it).levels.at(levelSelected);
	level.textLimit = arg1;
	(*it).levels.replace(levelSelected, level);
}
