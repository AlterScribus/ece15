/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "prefs_typography.h"
#include "prefsstructs.h"
#include "scribusdoc.h"

Prefs_Typography::Prefs_Typography(QWidget* parent, ScribusDoc* doc)
	: Prefs_Pane(parent)
{
	setupUi(this);
	languageChange();

	connect(spacesTable, SIGNAL(cellChanged(int,int)), this, SLOT(tableItemChanged()));
	connect(addButton, SIGNAL(clicked()), this, SLOT(addEntry()));
	connect(deleteButton, SIGNAL(clicked()), this, SLOT(deleteEntry()));
	connect(clearButton, SIGNAL(clicked()), this, SLOT(clearEntries()));
}

Prefs_Typography::~Prefs_Typography()
{
}

void Prefs_Typography::languageChange()
{
	QString autoText=tr( "Auto" );
	underlineDisplacementSpinBox->setSpecialValueText(autoText);
	underlineLineWidthSpinBox->setSpecialValueText(autoText);
	strikeoutDisplacementSpinBox->setSpecialValueText(autoText);
	strikeoutLineWidthSpinBox->setSpecialValueText(autoText);

	subscriptDisplacementSpinBox->setToolTip( tr( "Displacement below the baseline of the normal font on a line" ) );
	subscriptScalingSpinBox->setToolTip( tr( "Relative size of the subscript compared to the normal font" ) );
	superscriptDisplacementSpinBox->setToolTip( tr( "Displacement above the baseline of the font on a line" ) );
	superscriptScalingSpinBox->setToolTip( tr( "Relative size of the superscript compared to the normal font" ) );
	underlineDisplacementSpinBox->setToolTip( tr( "Displacement below the baseline of the normal font expressed as a percentage of the fonts descender" ) );
	underlineLineWidthSpinBox->setToolTip( tr( "Line width expressed as a percentage of the font size" ) );
	strikeoutDisplacementSpinBox->setToolTip( tr( "Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender" ) );
	strikeoutLineWidthSpinBox->setToolTip( tr( "Line width expressed as a percentage of the font size" ) );
	smallcapsScalingSpinBox->setToolTip( tr( "Relative size of the small caps font compared to the normal font" ) );
	automaticLineSpacingSpinBox->setToolTip( tr( "Percentage increase over the font size for the line spacing" ) );
	spacesTable->setToolTip(tr("Add distances before/after chars as % of space char for current font"));
}

void Prefs_Typography::updateTable()
{
	disconnect(spacesTable, SIGNAL(cellChanged(int,int)), this, SLOT(tableItemChanged()));
	spacesTable->setRowCount(spacesMap.count());
	int row=0;
	foreach (QString chars, spacesMap.keys())
	{
		uint i=0;
		//Chars
		QTableWidgetItem *item1 = new QTableWidgetItem(chars);
		item1->setText(chars);
		spacesTable->setItem(row, i++, item1);
		//Add before
		QSpinBox *item2 = new QSpinBox();
		item2->setMinimum(0);
		item2->setMaximum(999);
		item2->setValue(spacesMap.value(chars).first);
		item2->setSuffix("%");
		connect(item2, SIGNAL(valueChanged(int)), this, SLOT(tableItemChanged()));
		spacesTable->setCellWidget(row, i++, item2);
		//Add after
		QSpinBox *item3 = new QSpinBox();
		item3->setMinimum(0);
		item3->setMaximum(999);
		item3->setValue(spacesMap.value(chars).second);
		item3->setSuffix("%");
		connect(item3, SIGNAL(valueChanged(int)), this, SLOT(tableItemChanged()));
		spacesTable->setCellWidget(row, i++, item3);

		QTableWidgetItem *t=spacesTable->verticalHeaderItem(row);
		if (t!=NULL)
			t->setText(QString("%1").arg(row));
		row++;
	}
	deleteButton->setEnabled(spacesMap.count()!=0);
	clearButton->setEnabled(spacesMap.count()!=0);
	connect(spacesTable, SIGNAL(cellChanged(int,int)), this, SLOT(tableItemChanged()));
}

void Prefs_Typography::tableItemChanged()
{
	spacesMap.clear();
	for (int row=0; row < spacesTable->rowCount(); ++row)
	{
		QString chars = spacesTable->item(row, 0)->text();
		QSpinBox* qspB=dynamic_cast<QSpinBox*>(spacesTable->cellWidget(row,1));
		QSpinBox* qspA=dynamic_cast<QSpinBox*>(spacesTable->cellWidget(row,2));
		if (qspB!=NULL && qspA!=NULL)
			spacesMap.insert(chars, qMakePair(qspB->value(), qspA->value()));
	}
}

void Prefs_Typography::addEntry()
{
	spacesMap.insert("<chars>", qMakePair(0,0));
	updateTable();
}

void Prefs_Typography::deleteEntry()
{
	int currRow=spacesTable->currentRow();
	bool found=false;
	int count=0;
	QMap<QString, QPair<int,int> >::Iterator it;
	for(it = spacesMap.begin(); it!= spacesMap.end(); ++it)
	{
		if(count==currRow)
		{
			found=true;
			break;
		}
		++count;
	}
	if (found)
	{
		spacesMap.erase(it);
		updateTable();
	}
}

void Prefs_Typography::clearEntries()
{
	spacesMap.clear();
	updateTable();
}

void Prefs_Typography::restoreDefaults(struct ApplicationPrefs *prefsData)
{
	subscriptDisplacementSpinBox->setValue(prefsData->typoPrefs.valueSubScript);
	subscriptScalingSpinBox->setValue(prefsData->typoPrefs.scalingSubScript);
	superscriptDisplacementSpinBox->setValue(prefsData->typoPrefs.valueSuperScript);
	superscriptScalingSpinBox->setValue(prefsData->typoPrefs.scalingSuperScript);
	underlineDisplacementSpinBox->setValue(prefsData->typoPrefs.valueUnderlinePos / 10.0);
	underlineLineWidthSpinBox->setValue(prefsData->typoPrefs.valueUnderlineWidth / 10.0);
	strikeoutDisplacementSpinBox->setValue(prefsData->typoPrefs.valueStrikeThruPos / 10.0);
	strikeoutLineWidthSpinBox->setValue(prefsData->typoPrefs.valueStrikeThruWidth / 10.0);
	smallcapsScalingSpinBox->setValue(prefsData->typoPrefs.valueSmallCaps);
	automaticLineSpacingSpinBox->setValue(prefsData->typoPrefs.autoLineSpacing);
	foreach(QString chars, prefsData->typoPrefs.addSpaceMap.keys())
		spacesMap.insert(chars, prefsData->typoPrefs.addSpaceMap.value(chars));
	updateTable();
}

void Prefs_Typography::saveGuiToPrefs(struct ApplicationPrefs *prefsData) const
{
	prefsData->typoPrefs.valueSubScript=subscriptDisplacementSpinBox->value();
	prefsData->typoPrefs.scalingSubScript=subscriptScalingSpinBox->value();
	prefsData->typoPrefs.valueSuperScript=superscriptDisplacementSpinBox->value();
	prefsData->typoPrefs.scalingSuperScript=superscriptScalingSpinBox->value();
	prefsData->typoPrefs.valueUnderlinePos=underlineDisplacementSpinBox->value() * 10.0;
	prefsData->typoPrefs.valueUnderlineWidth=underlineLineWidthSpinBox->value() * 10.0;
	prefsData->typoPrefs.valueStrikeThruPos=strikeoutDisplacementSpinBox->value() * 10.0;
	prefsData->typoPrefs.valueStrikeThruWidth=strikeoutLineWidthSpinBox->value() * 10.0;
	prefsData->typoPrefs.valueSmallCaps=smallcapsScalingSpinBox->value();
	prefsData->typoPrefs.autoLineSpacing=automaticLineSpacingSpinBox->value();

	prefsData->typoPrefs.addSpaceMap.clear();
	foreach (QString chars, spacesMap.keys())
		prefsData->typoPrefs.addSpaceMap.insert(chars, spacesMap.value(chars));
}

