/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QEvent>

#include "numeration.h"
#include "styles/paragraphstyle.h"
#include "smpstylewidget.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "units.h"
#include "util.h"
#include "util_icon.h"
//#include "ui/charselectenhanced.h"

SMPStyleWidget::SMPStyleWidget(ScribusDoc* doc) : QWidget()
{
	m_Doc = doc;
	setupUi(this);
	//Not used yet
// 	optMarginCheckLeftProtruding->setVisible(false);
	lineSpacingLabel->setPixmap(loadIcon("linespacing2.png"));
	spaceAboveLabel->setPixmap( loadIcon("above.png") );
	spaceBelowLabel->setPixmap( loadIcon("below.png") );

	connect(lineSpacingMode, SIGNAL(highlighted(int)), this, SLOT(slotLineSpacingModeChanged(int)));

	lineSpacing->setSuffix(unitGetSuffixFromIndex(0));
	spaceAbove->setSuffix(unitGetSuffixFromIndex(0));
	spaceBelow->setSuffix(unitGetSuffixFromIndex(0));

//	optMarginCombo->addItem(tr("None"), ParagraphStyle::OM_None);
//	optMarginCombo->addItem(tr("Left Protruding"), ParagraphStyle::OM_LeftProtruding);
//	optMarginCombo->addItem(tr("Right Protruding"), ParagraphStyle::OM_RightProtruding);
//	optMarginCombo->addItem(tr("Left Hanging Punctuation"), ParagraphStyle::OM_LeftHangingPunct);
//	optMarginCombo->addItem(tr("Right Hanging Punctuation"), ParagraphStyle::OM_RightHangingPunct);
//	optMarginCombo->addItem(tr("Default"), ParagraphStyle::OM_Default);

	parEffectOffset->setSuffix(unitGetSuffixFromIndex(0));
	cpage->layout()->setMargin(0);

	parEffectOffset->setSuffix(unitGetSuffixFromIndex(0));

	QFont font1;
	if (font1.pointSize())
		font1.setPointSize(font1.pointSize() *2);
	else if (font1.pixelSize())
		font1.setPixelSize(font1.pixelSize() *2);
	((QComboBox*) bulletStrEdit)->setFont(font1);
	(bulletStrEdit->lineEdit())->setFont(font1);

	bulletCharTableButton->setIcon(loadIcon("22/insert-table.png"));
	fillNumFormatCombo();
	numStartSpin->setMinimum(1);
	numStartSpin->setMaximum(9999);
	numLevelSpin->setMinimum(1);
	numLevelSpin->setMaximum(1);
	fillNumRestartCombo();
	dropCapLines->setMinimum(2);
	dropCapLines->setMaximum(99);
	maxHyphensSpin->setMinimum(0);
	maxHyphensSpin->setMaximum(9);

	minSpaceSpin->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));
	minGlyphExtSpin->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));
	maxGlyphExtSpin->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));
	maxTrackingSpinBox->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));
	maxWordTrackingSpinBox->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));

	connect(optMarginDefaultButton, SIGNAL(clicked()), this, SLOT(slotDefaultOpticalMargins()));
	connect(advSetDefaultButton, SIGNAL(clicked()), this, SLOT(slotDefaultAdvancedSettings()));
	connect(owDefaultButton, SIGNAL(clicked()), this, SLOT(slotDefaultWidowsOrphans()));
	connect(peDefaultButton, SIGNAL(clicked()), this, SLOT(slotDefaultParEffects()));
	connect(coaDefaultButton, SIGNAL(clicked()), this, SLOT(slotDefaultClearOnApply()));
	if (m_Doc)
		connect(m_Doc->scMW(), SIGNAL(UpdateRequest(int)), this , SLOT(handleUpdateRequest(int)));
	m_enhanced = NULL;
}

void SMPStyleWidget::slotLineSpacingModeChanged(int i)
{
	lineSpacing->setEnabled(i == 0);
}

void SMPStyleWidget::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
	}
	else
		QWidget::changeEvent(e);
}

void SMPStyleWidget::languageChange()
{
	fillNumRestartCombo();
	fillHyphModeCombo();
	fillLineSpacingCombo();
/***********************************/
/*      Begin Tooltips             */
/***********************************/
// These are for the paragraph style
	parentCombo->setToolTip(      tr("Parent Style"));
	hyphModeCombo->setToolTip(  tr("Hyphenation Mode"));

	lineSpacingMode->setToolTip( tr("Line Spacing Mode"));
	lineSpacing->setToolTip(     tr("Line Spacing"));
	spaceAbove->setToolTip(      tr("Space Above"));
	spaceBelow->setToolTip(      tr("Space Below"));
	lineSpacingLabel->setToolTip(lineSpacing->toolTip());
	spaceAboveLabel->setToolTip(spaceAbove->toolTip());
	spaceBelowLabel->setToolTip(spaceBelow->toolTip());
//	optMarginCombo->setToolTip(tr("Activate an optical margins layout"));
//	optMarginLabel->setToolTip(optMarginCombo->toolTip());
	//CB Unneeded, gets in the way of single widget tooltips
	//dropCapsBox->setToolTip(      tr("Enable or disable drop cap"));
	dropCapLines->setToolTip(    tr("Drop Cap Lines"));
	bulletCharTableButton->setToolTip(tr("Enhanced Char Table for inserting customs chars as bullets"));
	parEffectOffset->setToolTip(   tr("Paragraph Effects Chars Offset"));
	parEffectIndentBox->setToolTip(   tr("Hang Paragraph Effect before paragraph indent"));
	parEffectCharStyleCombo->setToolTip("<qt>" + tr("Choose chracter style or leave blank for use default paragraph style"));
	alignement->setToolTip(      tr("Alignment"));
	tabList->first_->setToolTip( tr("First Line Indent"));
	tabList->left_->setToolTip(  tr("Left Indent"));
	tabList->right_->setToolTip( tr("Right Indent"));
	//CB Unneeded, gets in the way of single widget tooltips
	//tabList->setToolTip(         tr("Tabulators"));
	
	minSpaceSpin->setToolTip(tr("Maximum white space compression allowed.\nExpressed as a percentage of the current white space value."));
	minSpaceLabel->setToolTip(minSpaceSpin->toolTip());
	minGlyphExtSpin->setToolTip(tr("Maximum compression of glyphs"));
	minGlyphExtLabel->setToolTip(minGlyphExtSpin->toolTip());
	maxGlyphExtSpin->setToolTip(tr("Maximum extension of glyphs"));
	maxGlyphExtLabel->setToolTip(maxGlyphExtSpin->toolTip());
	maxTrackingSpinBox->setToolTip(tr("Char spacing can grow to this value which is equivalent of tracking value (kerning)"));
	maxTrackingLabel->setToolTip(maxTrackingSpinBox->toolTip());
	maxWordTrackingSpinBox->setToolTip(tr("Char spacing will grow if word spaces will be wider than this value of normal space width"));
	maxTrackingLabel->setToolTip(maxTrackingSpinBox->toolTip());

	keepLinesStart->setToolTip ("<qt>" + tr ("Ensure that first lines of a paragraph won't end up separated from the rest (known as widow/orphan control)") + "</qt>");
	keepLinesEnd->setToolTip ("<qt>" + tr ("Ensure that last lines of a paragraph won't end up separated from the rest (known as widow/orphan control)") + "</qt>");
	keepLabelStart->setToolTip (keepLinesStart->toolTip());
	keepLabelEnd->setToolTip (keepLinesEnd->toolTip());
	keepTogether->setToolTip ("<qt>" + tr ("If checked, ensures that the paragraph won't be split across multiple pages or columns") + "</qt>");
	keepWithNext->setToolTip ("<qt>" + tr ("If checked, automatically moves the paragraph to the next column or page if the next paragraph isn't on the same page or column") + "</qt>");

/***********************************/
/*      End Tooltips               */
/***********************************/

	lineSpacing->setSuffix(unitGetSuffixFromIndex(0));
	spaceAbove->setSuffix(unitGetSuffixFromIndex(0));
	spaceBelow->setSuffix(unitGetSuffixFromIndex(0));
	parentLabel->setText( tr("Based On:"));
	distancesBox->setTitle( tr("Distances and Alignment"));

	dropCapsBox->setTitle( tr("Drop Caps"));
	bulletBox->setTitle(tr("Bullets"));
	numBox->setTitle(tr("Numeration"));
	dropCapsLineLabel->setText( tr("Lines:"));
	bulletCharLabel->setText(tr("Bullet Char/String"));
	bulletCharTableButton->setText(tr("Char Table"));
	numFormatLabel->setText(tr("Numbering Style"));
	numLevelLabel->setText(tr("Level"));
	numPrefixLabel->setText(tr("Prefix"));
	numSuffixLabel->setText(tr("Suffix"));

	parEffectCharStyleComboLabel->setText(tr("Character Style for Effect:"));
	distFromTextLabel->setText(tr("Distance from Text:"));
	numStartLabel->setText(tr("Start with"));
	numRestartOtherBox->setText(tr("Restart after other format"));
	numRestartHigherBox->setText(tr("Restart after higher level"));

	parEffectCharStyleComboLabel->setText(tr("Character Style for Effect:"));
	distFromTextLabel->setText(tr("Distance from Text:"));
	peParentButton->setText(tr("Use Parent`s Values"));
	
	QFont font1;
	if (font1.pointSize())
		font1.setPointSize(font1.pointSize() *2);
	else if (font1.pixelSize())
		font1.setPixelSize(font1.pixelSize() *2);
	((QComboBox*) bulletStrEdit)->setFont(font1);
	(bulletStrEdit->lineEdit())->setFont(font1);

	tabsBox->setTitle( tr("Tabulators and Indentation"));
	tabWidget->setTabText(0, tr("Properties"));
	tabWidget->setTabText(1, tr("Character Style"));
	tabWidget->setTabText(2, tr("Advances Settings"));
	tabWidget->setTabText(3, tr("Paragraph Effects"));
	
	minSpaceLabel->setText( tr("Min. Space Width:"));
	minGlyphExtLabel->setText( tr("Min:", "Glyph Extension"));
	maxGlyphExtLabel->setText (tr("Max:", "Glyph Extension"));
	maxTrackingLabel->setText(tr("Max Char Spacing"));
	maxWordTrackingLabel->setText(tr("Max. Word Spacing"));

	hyphBox->setTitle(tr("Hypehantion Settings"));
	fillHyphModeCombo();
	maxHyphensLabel->setText(tr("Max Hyphens"));

	opticalMarginsGroupBox->setTitle( tr("Optical Margins"));
	optMarginRadioNone->setText( tr("None","optical margins") );
	optMarginRadioBoth->setText( tr("Both Sides","optical margins") );
	optMarginRadioLeft->setText( tr("Left Only","optical margins") );
	optMarginRadioRight->setText( tr("Right Only","optical margins") );

	optMarginDefaultButton->setText( tr("Reset to Default") );
	optMarginParentButton->setText( tr("Use Parent Value") );
	peDefaultButton->setText( tr("Reset to Default") );
	peParentButton->setText( tr("Use Parent Value") );
	advSetDefaultButton->setText( tr("Reset to Default") );
	advSetParentButton->setText( tr("Use Parent Value") );
	owDefaultButton->setText( tr("Reset to Default") );
	owParentButton->setText( tr("Use Parent Value") );
	coaDefaultButton->setText( tr("Reset to Default") );
	coaParentButton->setText( tr("Use Parent Value") );
}

void SMPStyleWidget::unitChange(double oldRatio, double newRatio, int unitIndex)
{
	parEffectOffset->setNewUnit(unitIndex);
	tabList->unitChange(unitIndex);
}

void SMPStyleWidget::setDoc(ScribusDoc *doc)
{
	if (m_Doc)
		disconnect(m_Doc->scMW(), SIGNAL(UpdateRequest(int)), this , SLOT(handleUpdateRequest(int)));
	m_Doc = doc;
	if (m_Doc)
	{
		connect(m_Doc->scMW(), SIGNAL(UpdateRequest(int)), this , SLOT(handleUpdateRequest(int)));
		fillNumerationsCombo();
		parEffectCharStyleCombo->setDoc(m_Doc);
	}
}

void SMPStyleWidget::fillBulletStrEditCombo()
{
	bulletStrEdit->clear();
	bulletStrEdit->addItem(QChar(0x2022));
	bulletStrEdit->addItem("*");
	bulletStrEdit->addItem(QChar(0x2013));
	bulletStrEdit->setMinimumWidth(50);
	if (bulletStrEdit->currentText().isEmpty())
		bulletStrEdit->setEditText(QChar(0x2022));
}

void SMPStyleWidget::fillNumFormatCombo()
{
	numFormatCombo->clear();
	numFormatCombo->addItems(getFormatList());
}

void SMPStyleWidget::fillNumerationsCombo()
{
	QStringList numNames;
	foreach (QString numName, m_Doc->numerations.keys())
		numNames.append(numName);
	numNames.sort();
	numComboBox->clear();
	numComboBox->insertItems(0, numNames);
	numComboBox->setCurrentItem(0);
}

void SMPStyleWidget::fillNumRestartCombo()
{
	numRestartCombo->clear();
	numRestartCombo->addItem(tr("Document"));
	numRestartCombo->addItem(tr("Section"));
	numRestartCombo->addItem(tr("Story"));
	numRestartCombo->addItem(tr("Page"));
	numRestartCombo->addItem(tr("Frame"));
}

void SMPStyleWidget::fillHyphModeCombo()
{
	hyphModeCombo->clear();
	hyphModeCombo->addItem(tr("No Hyphenation"));
	hyphModeCombo->addItem(tr("Manual Hyphenation"));
	hyphModeCombo->addItem(tr("Automatic Hyphenation"));
}

void SMPStyleWidget::fillLineSpacingCombo()
{
	lineSpacingMode->clear();
	lineSpacingMode->addItem( tr("Fixed Linespacing"));
	lineSpacingMode->addItem( tr("Automatic Linespacing"));
	lineSpacingMode->addItem( tr("Align to Baseline Grid"));
}

void SMPStyleWidget::checkParEffectState()
{
	bool enable = false;
	if (dropCapsBox->isChecked() || bulletBox->isChecked() || numBox->isChecked())
		enable = true;

	parEffectCharStyleCombo->setEnabled(enable);
	parEffectOffset->setEnabled(enable);
	parEffectIndentBox->setEnabled(enable);
}

void SMPStyleWidget::show(ParagraphStyle *pstyle, QList<ParagraphStyle> &pstyles, QList<CharStyle> &cstyles, int unitIndex, const QString &defLang)
{
	currPStyle = pstyle;
	double unitRatio = unitGetRatioFromIndex(unitIndex);
	parentCombo->setEnabled(!pstyle->isDefaultStyle());
	const ParagraphStyle *parent = dynamic_cast<const ParagraphStyle*>(pstyle->parentStyle());
	hasParent_ = pstyle->hasParent() && parent != NULL && parent->hasName() && pstyle->parent() != "";

	// One could think it’s too much (aesthetic) or not enough (freedom)!
	minSpaceSpin->setRange(1.0,100.0);
	minGlyphExtSpin->setRange(90.0,100.0);
	maxGlyphExtSpin->setRange(100.0,120.0);
	maxTrackingSpinBox->setRange(-99,99);
	maxWordTrackingSpinBox->setRange(1,99999);
	
	if (hasParent_)
	{
		lineSpacingMode->setCurrentItem(pstyle->lineSpacingMode(), pstyle->isInhLineSpacingMode());
		lineSpacingMode->setParentItem(parent->lineSpacingMode());
		
//		optMarginCombo->setCurrentItemByData( pstyle->opticalMargins(),  pstyle->isInhOpticalMargins() );
//		optMarginCombo->setParentItem(optMarginCombo->getItemIndexForData( parent->opticalMargins()));
		setOpticalMargins(pstyle->opticalMargins(), pstyle->isInhOpticalMargins(), parent);
		connect(optMarginParentButton, SIGNAL(clicked()), this, SLOT(slotParentOpticalMargins()));
		
		minSpaceSpin->setValue(pstyle->minWordTracking() * 100.0,  pstyle->isInhMinWordTracking());
		minSpaceSpin->setParentValue(parent->minWordTracking());
		minGlyphExtSpin->setValue(pstyle->minGlyphExtension() * 100.0,  pstyle->isInhMinGlyphExtension());
		minGlyphExtSpin->setParentValue(parent->minGlyphExtension());
		maxGlyphExtSpin->setValue(pstyle->maxGlyphExtension() * 100.0,  pstyle->isInhMaxGlyphExtension());
		maxGlyphExtSpin->setParentValue(parent->maxGlyphExtension());
		advSetParentButton->setVisible(!(pstyle->isInhMinWordTracking() && pstyle->isInhMinGlyphExtension() && pstyle->isInhMaxGlyphExtension()));
		connect(advSetParentButton, SIGNAL(clicked()), this, SLOT(slotParentAdvancedSettings()));

		lineSpacing->setValue(pstyle->lineSpacing(), pstyle->isInhLineSpacing());
		lineSpacing->setParentValue(parent->lineSpacing());

		spaceAbove->setValue(pstyle->gapBefore(), pstyle->isInhGapBefore());
		spaceAbove->setParentValue(parent->gapBefore());

		spaceBelow->setValue(pstyle->gapAfter(), pstyle->isInhGapAfter());
		spaceBelow->setParentValue(parent->gapAfter());


		alignement->setStyle(pstyle->alignment(), pstyle->isInhAlignment());
		alignement->setParentItem(parent->alignment());

		bool hasParentTabs = pstyle->isInhTabValues();
		QList<ParagraphStyle::TabRecord> tabs;
		if (hasParentTabs)
			tabs = QList<ParagraphStyle::TabRecord>(parent->tabValues());
		else
			tabs = pstyle->tabValues();

		tabList->setTabs(tabs, unitIndex, hasParentTabs);
		tabList->setParentTabs(parent->tabValues());

		tabList->setLeftIndentValue(pstyle->leftMargin() * unitRatio,pstyle->isInhLeftMargin());
		tabList->setParentLeftIndent(parent->leftMargin() * unitRatio);

		tabList->setFirstLineValue(pstyle->firstIndent() * unitRatio, pstyle->isInhFirstIndent());
		tabList->setParentFirstLine(parent->firstIndent() * unitRatio);

		tabList->setRightIndentValue(pstyle->rightMargin() * unitRatio, pstyle->isInhRightMargin());
		tabList->setParentRightIndent(parent->rightMargin() * unitRatio);

		keepLinesStart->setValue (pstyle->keepLinesStart(), pstyle->isInhKeepLinesStart());
		keepLinesEnd->setValue (pstyle->keepLinesEnd(), pstyle->isInhKeepLinesEnd());
		keepTogether->setChecked (pstyle->keepTogether(), pstyle->isInhKeepTogether());
		keepWithNext->setChecked (pstyle->keepWithNext(), pstyle->isInhKeepWithNext());
		keepLinesStart->setParentValue (parent->keepLinesStart());
		keepLinesEnd->setParentValue (parent->keepLinesEnd());
		keepTogether->setParentValue (parent->keepTogether());
		keepWithNext->setParentValue (parent->keepWithNext());
		owParentButton->setVisible(!(pstyle->isInhKeepLinesStart() && pstyle->isInhKeepLinesEnd() && pstyle->isInhKeepTogether() && pstyle->isInhKeepWithNext()));
		connect(owParentButton, SIGNAL(clicked()), this, SLOT(slotParentWidowsOrphans()));
		
		int hm = pstyle->hyphenationMode();
		hyphModeCombo->setCurrentItem(hm, pstyle->isInhHyphenationMode());
		maxHyphensSpin->setValue(pstyle->maxHyphens(), pstyle->isInhMaxHyphens());
		maxHyphensSpin->setParentValue(parent->maxHyphens());
		if (hm == ParagraphStyle::NoHyphenation)
			maxHyphensSpin->setEnabled(false);
		else
			maxHyphensSpin->setEnabled(true);

		ClearOnApplyBox->setChecked(pstyle->clearOnApply(), pstyle->isInhClearOnApply());
		ClearOnApplyBox->setParentValue(parent->clearOnApply());
		coaParentButton->setVisible(!pstyle->isInhClearOnApply());
		connect(coaParentButton, SIGNAL(clicked()), this, SLOT(slotParentClearOnApply()));
		if (pstyle->isInhHasDropCap() && pstyle->isInhHasBullet() && pstyle->isInhHasNum())
		{
			peParentButton->hide();
			disconnect(peParentButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));
		}
		else
		{
			peParentButton->show();
			QFont f(font());
			f.setBold(true);
			peParentButton->setFont(f);
		}
		connect(peParentButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));

//Effects Gropup Box
		parentDC_ = parent->hasDropCap();
		parentBul_ = parent->hasBullet();
		parentNum_ = parent->hasNum();
		//parentParEffects_ = (parentDC_ || parentBul_ || parentNum_);
		peParentButton->setVisible(!(pstyle->isInhHasDropCap() && pstyle->isInhHasBullet() && pstyle->isInhHasNum()));
		connect(peParentButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));

		setWidgetBoldFont(parEffectCharStyleComboLabel, !pstyle->isInhPeCharStyleName());
		parEffectOffset->setValue(pstyle->parEffectOffset() * unitRatio, pstyle->isInhParEffectOffset());
		parEffectOffset->setParentValue(parent->parEffectOffset() * unitRatio);
		parEffectIndentBox->setChecked(pstyle->parEffectIndent(),pstyle->isInhParEffectIndent());
		parEffectIndentBox->setParentValue(parent->parEffectIndent());


		bulletBox->setChecked(pstyle->hasBullet());
		setWidgetBoldFont(bulletStrEdit, !pstyle->isInhHasBullet());
		bulletStrEdit->setEditText(pstyle->bulletStr());
		setWidgetBoldFont(bulletStrEdit, !pstyle->isInhBulletStr());
		setWidgetBoldFont(bulletCharLabel, !pstyle->isInhBulletStr());

		dropCapsBox->setChecked(pstyle->hasDropCap());
		setWidgetBoldFont(dropCapsBox, !pstyle->isInhHasDropCap());
		dropCapLines->setValue(pstyle->dropCapLines(), pstyle->isInhDropCapLines());
		dropCapLines->setParentValue(parent->dropCapLines());
		setWidgetBoldFont(dropCapsLineLabel,(!pstyle->isInhDropCapLines() || (parent->hasDropCap() != pstyle->hasDropCap())));

		numBox->setChecked(pstyle->hasNum());
		setWidgetBoldFont(numBox, !pstyle->isInhHasNum());
		QString numName = pstyle->numName();
		if (numName.isEmpty())
			numName = "default";
		numComboBox->setCurrentItem(numComboBox->findText(numName), pstyle->isInhNumName());
		if (!parent->numName().isEmpty())
			numComboBox->setParentItem(numComboBox->findText(parent->numName()));
		else
			numComboBox->setParentItem(0);
		numFormatCombo->setCurrentItem(pstyle->numFormat());
		numFormatCombo->setParentItem(parent->numFormat());
		numLevelSpin->setValue(pstyle->numLevel() +1, pstyle->isInhNumLevel());
		numLevelSpin->setParentValue(parent->numLevel()+1);
		numPrefix->setText(pstyle->numPrefix());
		setWidgetBoldFont(numPrefixLabel, !pstyle->isInhNumPrefix());
		numSuffix->setText(pstyle->numSuffix());
		setWidgetBoldFont(numSuffixLabel, !pstyle->isInhNumSuffix());
		numStartSpin->setValue(pstyle->numStart(), pstyle->isInhNumStart());
		numStartSpin->setParentValue(parent->numStart());
		numRestartCombo->setCurrentItem(pstyle->numRestart(), pstyle->isInhNumRestart());
		numRestartCombo->setParentItem(parent->numRestart());
		numRestartOtherBox->setChecked(pstyle->numOther(), pstyle->isInhNumOther());
		numRestartOtherBox->setParentValue(parent->numOther());
		numRestartHigherBox->setChecked(pstyle->numHigher(), pstyle->isInhNumHigher());
		numRestartHigherBox->setParentValue(parent->numHigher());

		maxTrackingSpinBox->setValue(pstyle->maxTracking() / 10.0, pstyle->isInhMaxTracking());
		maxWordTrackingSpinBox->setValue(pstyle->maxWordTracking() *100.0, pstyle->isInhMaxWordTracking());
	}
	else
	{
		lineSpacingMode->setCurrentIndex(pstyle->lineSpacingMode());
		lineSpacing->setValue(pstyle->lineSpacing());
		spaceAbove->setValue(pstyle->gapBefore());
		spaceBelow->setValue(pstyle->gapAfter());
//		optMarginCombo->setCurrentItemByData( pstyle->opticalMargins() );
		setOpticalMargins(pstyle->opticalMargins());
		optMarginParentButton->hide();
		minSpaceSpin->setValue(pstyle->minWordTracking() * 100.0);
		minGlyphExtSpin->setValue(pstyle->minGlyphExtension() * 100.0);
		maxGlyphExtSpin->setValue(pstyle->maxGlyphExtension() * 100.0);
		advSetParentButton->hide();

		peParentButton->hide();
		disconnect(peParentButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));

		setWidgetBoldFont(parEffectCharStyleComboLabel, false);
		parEffectOffset->setValue(pstyle->parEffectOffset() * unitRatio);
		parEffectIndentBox->setChecked(pstyle->parEffectIndent());
		setWidgetBoldFont(parEffectIndentBox, false);

		dropCapsBox->setChecked(pstyle->hasDropCap());
		setWidgetBoldFont(dropCapsBox, false);
		dropCapLines->setValue(pstyle->dropCapLines());
		setWidgetBoldFont(dropCapLines, false);

		bulletBox->setChecked(pstyle->hasBullet());
		setWidgetBoldFont(bulletBox, false);
		bulletStrEdit->setEditText(pstyle->bulletStr());
		setWidgetBoldFont(bulletStrEdit, false);
		setWidgetBoldFont(bulletCharLabel, false);

		numBox->setChecked(pstyle->hasNum());
		setWidgetBoldFont(numBox, false);

		QString numName = pstyle->numName();
		if (numName.isEmpty())
			numName = "default";
		numComboBox->setCurrentItem(numComboBox->findText(numName));
		numNewLineEdit->clear();
		numFormatCombo->setCurrentIndex(pstyle->numFormat());
		numLevelSpin->setValue(pstyle->numLevel()+1);
		numPrefix->setText(pstyle->numPrefix());
		setWidgetBoldFont(numPrefixLabel, false);
		numSuffix->setText(pstyle->numSuffix());
		setWidgetBoldFont(numSuffixLabel, false);
		numStartSpin->setValue(pstyle->numStart());
		numRestartCombo->setCurrentItem(pstyle->numRestart());
		numRestartOtherBox->setChecked(pstyle->numOther());
		numRestartHigherBox->setChecked(pstyle->numHigher());

		alignement->setStyle(pstyle->alignment());
		tabList->setTabs(pstyle->tabValues(), unitIndex);
		tabList->setLeftIndentValue(pstyle->leftMargin() * unitRatio);
		tabList->setFirstLineValue(pstyle->firstIndent() * unitRatio);
		tabList->setRightIndentValue(pstyle->rightMargin() * unitRatio);

		keepLinesStart->setValue (pstyle->keepLinesStart());
		keepLinesEnd->setValue (pstyle->keepLinesEnd());
		keepTogether->setChecked (pstyle->keepTogether());
		keepWithNext->setChecked (pstyle->keepWithNext());
		owParentButton->hide();

		int hm = pstyle->hyphenationMode();
		hyphModeCombo->setCurrentItem(hm);
		setMaxHyphensSpin(hm, pstyle->maxHyphens());
		maxTrackingSpinBox->setValue(pstyle->maxTracking() / 10.0);
		maxWordTrackingSpinBox->setValue(pstyle->maxWordTracking() * 100);
		ClearOnApplyBox->setChecked(pstyle->clearOnApply());
		coaParentButton->hide();
	}

	lineSpacing->setEnabled(pstyle->lineSpacingMode() == ParagraphStyle::FixedLineSpacing);
	dropCapLines->setEnabled(pstyle->hasDropCap());
	bulletCharTableButton->setEnabled(bulletBox->isChecked());

	checkParEffectState();
	parEffectCharStyleCombo->updateFormatList();
	parEffectCharStyleCombo->setFormat(pstyle->peCharStyleName());

	NumStruct * numS = m_Doc->numerations.value(pstyle->numName());
	if (numS)
		numLevelSpin->setMaximum(numS->m_counters.count()+1);
	else
		numLevelSpin->setMaximum(1);

	cpage->parentLabel->setText( tr("Based On:"));
	cpage->show(&pstyle->charStyle(), cstyles, defLang, unitIndex);

	parentCombo->clear();
	parentCombo->addItem( pstyle->isDefaultStyle()? tr("A default style cannot be assigned a parent style") : "");
	if (!pstyle->isDefaultStyle())
	{
		for (int i = 0; i < pstyles.count(); ++i)
		{
			if (pstyles[i].hasName() && pstyles[i].name() != pstyle->name())
				parentCombo->addItem(pstyles[i].name());
		}
	}
	if (pstyle->isDefaultStyle() || !hasParent_)
		parentCombo->setCurrentIndex(0);
	else
	{
		int index = 0;
		for (int i = 0; i < parentCombo->count(); ++i)
		{
			if (parentCombo->itemText(i) == parent->name())
			{
				index = i;
				break;
			}
		}
		parentCombo->setCurrentIndex(index);
	}

	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	connect(bulletBox, SIGNAL(toggled(bool)), this, SLOT(slotBullets(bool)));
	connect(numBox, SIGNAL(toggled(bool)), this, SLOT(slotNumbering(bool)));
	
	if (pstyle->opticalMargins() != ParagraphStyle::OM_None)
		optMarginDefaultButton->show();
	else
		optMarginDefaultButton->hide();
	if (minGlyphExtSpin->value() != 100.0 || maxGlyphExtSpin->value() != 100.0 || minSpaceSpin->value() != 100.0)
		advSetDefaultButton->show();
	else
		advSetDefaultButton->hide();
	if (keepLinesStart->value() != 0 || keepLinesEnd->value() != 0 || keepTogether->isChecked() || keepWithNext->isChecked())
		owDefaultButton->show();
	else
		owDefaultButton->hide();
	if (bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked())
		peDefaultButton->show();
	else
		peDefaultButton->hide();
	if (ClearOnApplyBox->isChecked())
		coaDefaultButton->show();
	else
		coaDefaultButton->hide();
}

void SMPStyleWidget::show(QList<ParagraphStyle*> &pstyles, QList<ParagraphStyle> &pstylesAll, QList<CharStyle> &cstyles, int unitIndex, const QString &defLang)
{
	if (pstyles.count() == 1)
		show(pstyles[0], pstylesAll, cstyles, unitIndex, defLang);
	else if (pstyles.count() > 1)
	{
		currPStyle = pstyles[0];
		showLineSpacing(pstyles);
		showSpaceAB(pstyles, unitIndex);
		showDropCap(pstyles, cstyles, unitIndex);
		showBullet(pstyles, cstyles, unitIndex);
		showNumeration(pstyles, cstyles, unitIndex);
		showHyphenation(pstyles);
		showMTracking(pstyles);
		showAlignment(pstyles);
		showOpticalMargin(pstyles);
		showMinSpace(pstyles);
		showMinGlyphExt(pstyles);
		showMaxGlyphExt(pstyles);
		showTabs(pstyles, unitIndex);
		showCStyle(pstyles, cstyles, defLang, unitIndex);
		showParent(pstyles);
		checkParEffectState();
	}
}

void SMPStyleWidget::showLineSpacing(QList<ParagraphStyle*> &pstyles)
{
	int tmpLP = -1;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpLP != -1 && pstyles[i]->lineSpacingMode() != tmpLP)
		{
			tmpLP = -1;
			break;
		}
		else
			tmpLP = pstyles[i]->lineSpacingMode();
	}

	if (tmpLP == -1)
	{
		if (lineSpacingMode->itemText(lineSpacingMode->count() - 1) != "")
			lineSpacingMode->addItem("");
		lineSpacingMode->setCurrentIndex(lineSpacingMode->count() - 1);
	}
	if (hasParent_)
		lineSpacingMode->setCurrentItem(tmpLP, pstyles[0]->isInhLineSpacingMode());
	else
		lineSpacingMode->setCurrentIndex(tmpLP);

	double tmpLS = -1.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpLS > 0 && !compareDouble(pstyles[i]->lineSpacing(), tmpLS))
		{
			tmpLS = -1.0;
			break;
		}
		else
			tmpLS = pstyles[i]->lineSpacing();
	}
	lineSpacing->setEnabled(true);
	if (tmpLS < 0)
		lineSpacing->clear();
	else
		lineSpacing->setValue(tmpLS);
}

void SMPStyleWidget::showSpaceAB(QList<ParagraphStyle*> &pstyles, int unitIndex)
{
// 	double unitRatio = unitGetRatioFromIndex(unitIndex);
	double tmpA = -1.2;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpA > -1.0 && !compareDouble(pstyles[i]->gapBefore(), tmpA))
		{
			tmpA = -1.2;
			break;
		}
		else
			tmpA = pstyles[i]->gapBefore();
	}

	if (tmpA < 0)
		spaceAbove->clear();
	else
		spaceAbove->setValue(tmpA);

	tmpA = -1.2;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpA > -1.0 && !compareDouble(pstyles[i]->gapAfter(), tmpA))
		{
			tmpA = -1.2;
			break;
		}
	}

	if (tmpA < 0)
		spaceBelow->clear();
	else
		spaceBelow->setValue(tmpA);
}

void SMPStyleWidget::showDropCap(QList<ParagraphStyle*> &pstyles, QList<CharStyle> &cstyles, int unitIndex)
{
	disconnectPESignals();
	bool dc = pstyles[0]->hasDropCap();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (dc != pstyles[i]->hasDropCap())
		{
			dc = false;
			break;
		}
	}
	dropCapsBox->setChecked(dc);
	setWidgetBoldFont(dropCapsBox, (hasParent_ && !pstyles[0]->isInhHasDropCap()));
	if (dc)
	{
		setWidgetBoldFont(dropCapLines, (hasParent_ && !pstyles[0]->isInhDropCapLines()));
		setWidgetBoldFont(parEffectCharStyleComboLabel, (hasParent_ && !pstyles[0]->isInhPeCharStyleName()));
		setWidgetBoldFont(parEffectOffset, (hasParent_ && !pstyles[0]->isInhParEffectOffset()));
	}
	
	int lines = -1;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (lines > -1 && pstyles[i]->dropCapLines() != lines)
		{
			lines = -1;
			break;
		}
		else
			lines = pstyles[i]->dropCapLines();
	}
	if (lines == -1)
		dropCapLines->clear();
	else
		dropCapLines->setValue(lines);

	dropCapsBox->setEnabled(true);
	dropCapLines->setEnabled(true);
	connectPESignals();
}

void SMPStyleWidget::showBullet(QList<ParagraphStyle *> &pstyles, QList<CharStyle> &cstyles, int unitIndex)
{
//	double unitRatio = unitGetRatioFromIndex(unitIndex);

	disconnectPESignals();
	bool hb = pstyles[0]->hasBullet();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (hb != pstyles[i]->hasBullet())
		{
			hb = false;
			break;
		}
	}
	bulletBox->setChecked(hb);
	setWidgetBoldFont(bulletBox, (hasParent_ && !pstyles[0]->isInhHasBullet()));
	if (hb)
	{
		setWidgetBoldFont(bulletStrEdit, (hasParent_ && !pstyles[0]->isInhBulletStr()));
		setWidgetBoldFont(parEffectCharStyleComboLabel, (hasParent_ && !pstyles[0]->isInhPeCharStyleName()));
		setWidgetBoldFont(parEffectOffset, (hasParent_ && !pstyles[0]->isInhParEffectOffset()));
	}
	
	QString chStr = pstyles[0]->bulletStr();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (chStr != pstyles[i]->bulletStr())
		{
			chStr.clear();
			break;
		}
		else
			chStr = pstyles[i]->bulletStr();
	}
	bulletStrEdit->setEditText(chStr);
	setWidgetBoldFont(bulletCharLabel, (hasParent_ && !pstyles[0]->isInhBulletStr()));

	connectPESignals();
	bulletCharTableButton->setEnabled(true);
}

void SMPStyleWidget::showNumeration(QList<ParagraphStyle *> &pstyles, QList<CharStyle> &cstyles, int unitIndex)
{

	disconnectPESignals();
	bool hn = pstyles[0]->hasNum();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (hn != pstyles[i]->hasNum())
		{
			hn = false;
			break;
		}
	}
	numBox->setChecked(hn);
	setWidgetBoldFont(numBox, (hasParent_ && !pstyles[0]->isInhHasNum()));
	if (hn)
	{
		setWidgetBoldFont(numFormatCombo, !pstyles[0]->isInhNumFormat());
		setWidgetBoldFont(numLevelSpin, !pstyles[0]->isInhNumLevel());
		setWidgetBoldFont(numPrefix, !pstyles[0]->isInhNumPrefix());
		setWidgetBoldFont(numSuffix, !pstyles[0]->isInhNumSuffix());
		setWidgetBoldFont(parEffectCharStyleComboLabel, !pstyles[0]->isInhPeCharStyleName());
		setWidgetBoldFont(parEffectOffset, !pstyles[0]->isInhParEffectOffset());
	}

	QString prefix = pstyles[0]->numPrefix();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (prefix != pstyles[i]->numPrefix())
		{
			prefix.clear();
			break;
		}
		else
			prefix = pstyles[i]->numPrefix();
	}
	numPrefix->setText(prefix);
	setWidgetBoldFont(numPrefix, (hasParent_ && !pstyles[0]->isInhNumPrefix()));
	
	QString suffix = pstyles[0]->numSuffix();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (suffix != pstyles[i]->numSuffix())
		{
			suffix.clear();
			break;
		}
		else
			suffix = pstyles[i]->numSuffix();
	}
	numSuffix->setText(suffix);
	setWidgetBoldFont(numSuffix, (hasParent_ && !pstyles[0]->isInhNumSuffix()));

	numFormatCombo->setEnabled(true);
	numLevelSpin->setEnabled(true);
	connectPESignals();
}

void SMPStyleWidget::showHyphenation(QList<ParagraphStyle *> &pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showMaxGlyphExt called with an empty list of styles";
		return;
	}
	int hm = pstyles[0]->hyphenationMode();
	int mh = pstyles[0]->maxHyphens();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if ((hm != pstyles[i]->hyphenationMode()) || (hm !=ParagraphStyle::NoHyphenation && mh != pstyles[i]->maxHyphens()))
		{
			hyphModeCombo->setCurrentItem(pstyles[i]->hyphenationMode());
			setMaxHyphensSpin(pstyles[i]->hyphenationMode(),pstyles[i]->maxHyphens());
			return;
		}
		
	}
	hyphModeCombo->setCurrentItem(hm);
	setMaxHyphensSpin(hm, mh);
}

void SMPStyleWidget::setMaxHyphensSpin(int hm, int mh)
{
	if (hm == ParagraphStyle::NoHyphenation)
	{
		maxHyphensSpin->setEnabled(false);
	}
	else
	{
		maxHyphensSpin->setValue(mh);
		maxHyphensSpin->setEnabled(true);
	}
}

void SMPStyleWidget::showMTracking(QList<ParagraphStyle *> &pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showMtracking called with an empty list of styles";
		return;
	}
	int mT = pstyles[0]->maxTracking();
	int mWT = pstyles[0]->maxWordTracking();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if ((mT != pstyles[i]->maxTracking()) || mWT != pstyles[i]->maxWordTracking())
		{
			maxTrackingSpinBox->setValue(pstyles[i]->maxTracking() /10.0);
			maxWordTrackingSpinBox->setValue(pstyles[i]->maxWordTracking() * 100);
			return;
		}
		
	}
	maxTrackingSpinBox->setValue(mT / 10.0);
	maxWordTrackingSpinBox->setValue(mWT * 100);
}

void SMPStyleWidget::showAlignment(QList<ParagraphStyle*> &pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showAlignment called with an empty list of styles";
		return;
	}
	ParagraphStyle::AlignmentType a = pstyles[0]->alignment();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (a != pstyles[i]->alignment())
		{
			if (alignement->selectedId() > -1 && alignement->selectedId() < 5)
			{
				alignement->buttonGroup->setExclusive(false);
				alignement->buttonGroup->button(alignement->selectedId())->toggle();
				alignement->buttonGroup->setExclusive(true);
			}
			return;
		}
	}
	alignement->setStyle(a);
}

void SMPStyleWidget::showOpticalMargin(QList< ParagraphStyle * > & pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showOpticalMargin called with an empty list of styles";
		return;
	}
	setOpticalMargins(pstyles[0]->opticalMargins(), (hasParent_ && pstyles[0]->isInhOpticalMargins()), dynamic_cast<const ParagraphStyle*>(pstyles[0]->parentStyle()));
}

void SMPStyleWidget::showMinSpace(QList< ParagraphStyle * > & pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showMinSpace called with an empty list of styles";
		return;
	}
	
	double ms(pstyles[0]->minWordTracking());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (!compareDouble(ms, pstyles[i]->minWordTracking()))
		{
			ms = 100.0;
			break;
		}
	}
	minSpaceSpin->setValue(ms * 100.0, (hasParent_ && pstyles[0]->isInhMinWordTracking()));
}

void SMPStyleWidget::showMinGlyphExt(QList< ParagraphStyle * > & pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showMinGlyphExt called with an empty list of styles";
		return;
	}
	
	double mge(pstyles[0]->minGlyphExtension());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (!compareDouble(mge, pstyles[i]->minGlyphExtension()))
		{
			mge = 100.0;
			break;
		}
	}
	minGlyphExtSpin->setValue(mge * 100.0, (hasParent_ && pstyles[0]->isInhMinGlyphExtension()));
}

void SMPStyleWidget::showMaxGlyphExt(QList< ParagraphStyle * > & pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showMaxGlyphExt called with an empty list of styles";
		return;
	}
	
	double mge(pstyles[0]->maxGlyphExtension());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (!compareDouble(mge, pstyles[i]->maxGlyphExtension()))
		{
			mge = 100.0;
			break;
		}
	}
	maxGlyphExtSpin->setValue(mge * 100.0, (hasParent_ && pstyles[0]->isInhMaxGlyphExtension()));
}


void SMPStyleWidget::showTabs(QList<ParagraphStyle*> &pstyles, int unitIndex)
{
	double unitRatio = unitGetRatioFromIndex(unitIndex);
	QList<ParagraphStyle::TabRecord> t = pstyles[0]->tabValues();
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (t != pstyles[i]->tabValues())
		{
			t = QList<ParagraphStyle::TabRecord>();
			break;
		}
	}
	tabList->setTabs(t, unitIndex);

	double l = -4000.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !compareDouble(pstyles[i]->leftMargin(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->leftMargin();
	}
	if (l < -3800.0)
	{
		tabList->setLeftIndentValue(0.0);
		tabList->left_->clear();
	}
	else
		tabList->setLeftIndentValue(l * unitRatio);

	l = -4000.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !compareDouble(pstyles[i]->firstIndent(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->firstIndent();
	}
	if (l < -3800.0)
	{
		tabList->setFirstLineValue(0.0);
		tabList->first_->clear();
	}
	else
		tabList->setFirstLineValue(l * unitRatio);

	l = -4000.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !compareDouble(pstyles[i]->rightMargin(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->rightMargin();
	}
	if (l < -3800.0)
	{
		tabList->setRightIndentData(0.0);
		tabList->right_->clear();
	}
	else
		tabList->setRightIndentValue(l * unitRatio);
}

void SMPStyleWidget::showCStyle(QList<ParagraphStyle*> &pstyles, QList<CharStyle> &cstyles, const QString &defLang, int unitIndex)
{
	cpage->parentLabel->setText( tr("Based On:"));

	QList<CharStyle*> cstyle;
	for (int i = 0; i < pstyles.count(); ++i)
		cstyle << &pstyles[i]->charStyle();

	cpage->show(cstyle, cstyles, defLang, unitIndex);
}

void SMPStyleWidget::showParent(QList<ParagraphStyle*> &pstyles)
{
	parentCombo->setEnabled(false);
}

void SMPStyleWidget::setOpticalMargins(int o, bool inhO, const ParagraphStyle *parent)
{
	ParagraphStyle::OpticalMarginType om( static_cast<ParagraphStyle::OpticalMarginType>(o) );

	if (parent==NULL)
	{
		optMarginRadioBoth->setChecked(om == ParagraphStyle::OM_Default);
		optMarginRadioLeft->setChecked(om == ParagraphStyle::OM_LeftHangingPunct);
		optMarginRadioRight->setChecked(om == ParagraphStyle::OM_RightHangingPunct);
		optMarginRadioNone->setChecked(om == ParagraphStyle::OM_None);
	}
	else
	{
		optMarginParentButton->setVisible(!inhO);

		bool diffParent = parent->opticalMargins() != om;
		optMarginRadioBoth->setChecked(om == ParagraphStyle::OM_Default, om != ParagraphStyle::OM_Default || !diffParent);
		optMarginRadioLeft->setChecked(om == ParagraphStyle::OM_LeftHangingPunct, om != ParagraphStyle::OM_LeftHangingPunct || !diffParent);
		optMarginRadioRight->setChecked(om == ParagraphStyle::OM_RightHangingPunct, om != ParagraphStyle::OM_RightHangingPunct || !diffParent);
		optMarginRadioNone->setChecked(om == ParagraphStyle::OM_None, om != ParagraphStyle::OM_None || !diffParent);
		
		optMarginRadioBoth->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_Default);
		optMarginRadioLeft->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_LeftHangingPunct);
		optMarginRadioRight->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_RightHangingPunct);
		optMarginRadioNone->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_None);
	}
	if (om == ParagraphStyle::OM_None)
		optMarginDefaultButton->hide();
	else
		optMarginDefaultButton->show();
}


void SMPStyleWidget::slotDefaultOpticalMargins()
{
	optMarginRadioNone->setChecked(true);
	if (hasParent_)
		optMarginParentButton->show();
}

void SMPStyleWidget::slotParentOpticalMargins()
{
	disconnect(optMarginParentButton, SIGNAL(clicked()), this, SLOT(slotParentOpticalMargins()));
	optMarginParentButton->hide();
	emit useParentOptMargins();
	connect(optMarginParentButton, SIGNAL(clicked()), this, SLOT(slotParentOpticalMargins()));
}

void SMPStyleWidget::slotDefaultAdvancedSettings()
{
	minSpaceSpin->setValue(0.0);
	minGlyphExtSpin->setValue(100.0);
	maxGlyphExtSpin->setValue(100.0);
	if (hasParent_)
		advSetParentButton->show();
}

void SMPStyleWidget::slotParentAdvancedSettings()
{
	disconnect(advSetParentButton, SIGNAL(clicked()), this, SLOT(slotParentAdvancedSettings()));
	advSetParentButton->hide();
	emit(useParentAdvancedSettings());
	connect(advSetParentButton, SIGNAL(clicked()), this, SLOT(slotParentAdvancedSettings()));
}

void SMPStyleWidget::slotDefaultWidowsOrphans()
{
	keepLinesStart->setValue(0);
	keepLinesEnd->setValue(0);
	keepTogether->setChecked(false);
	keepWithNext->setChecked(false);
	if (hasParent_)
		owParentButton->show();
}

void SMPStyleWidget::slotParentWidowsOrphans()
{
	disconnect(owParentButton, SIGNAL(clicked()), this, SLOT(slotParentWidowsOrphans()));
	owParentButton->hide();
	emit(useParentWidowsOrphans());
	connect(owParentButton, SIGNAL(clicked()), this, SLOT(slotParentWidowsOrphans()));
}

void SMPStyleWidget::slotDefaultClearOnApply()
{
	ClearOnApplyBox->setChecked(false);
	if (hasParent_)
		coaParentButton->show();
}

void SMPStyleWidget::slotParentClearOnApply()
{
	disconnect(coaParentButton, SIGNAL(clicked()), this, SLOT(slotParentClearOnApply()));
	coaParentButton->hide();
	emit(useParentClearOnApply());
	connect(coaParentButton, SIGNAL(clicked()), this, SLOT(slotParentClearOnApply()));
}

void SMPStyleWidget::clearAll()
{

}

void SMPStyleWidget::slotDropCap(bool isOn)
{
	disconnectPESignals();
	if (isOn)
	{
		dropCapLines->setEnabled(true);

		bulletBox->setChecked(false);
		bulletStrEdit->setEnabled(false);
		bulletCharTableButton->setEnabled(false);

		numBox->setChecked(false);
		numFormatCombo->setEnabled(false);
		numLevelSpin->setEnabled(false);
		numComboBox->setEnabled(false);
		numRestartCombo->setEnabled(false);
		numNewLineEdit->setEnabled(false);
	}
	else
		dropCapLines->setEnabled(false);
	if (hasParent_)
		peParentButton->show();
	checkParEffectState();
	connectPESignals();
}

void SMPStyleWidget::slotBullets(bool isOn)
{
	disconnectPESignals();
	if (isOn)
	{
		bulletStrEdit->setEnabled(true);
		if (bulletStrEdit->currentText().isEmpty())
			bulletStrEdit->setEditText(bulletStrEdit->itemText(0));
		bulletCharTableButton->setEnabled(true);

		numBox->setChecked(false);
		numFormatCombo->setEnabled(false);
		numLevelSpin->setEnabled(false);
		numComboBox->setEnabled(false);
		numRestartCombo->setEnabled(false);
		numNewLineEdit->setEnabled(false);

		dropCapsBox->setChecked(false);
		dropCapLines->setEnabled(false);
	}
	else
	{
		bulletStrEdit->setEnabled(false);
		bulletCharTableButton->setEnabled(false);
	}
	if (hasParent_)
		peParentButton->show();
	checkParEffectState();
	connectPESignals();
}

void SMPStyleWidget::insertSpecialChars(const QString &chars)
{
	bulletStrEdit->lineEdit()->setText(chars);
}

void SMPStyleWidget::slotNumbering(bool isOn)
{
	disconnectPESignals();
	if (isOn)
	{
		numFormatCombo->setEnabled(true);
		numLevelSpin->setEnabled(true);
		numComboBox->setEnabled(true);
		if (numComboBox->currentIndex() < 0)
			numComboBox->setCurrentIndex(0);
		numRestartCombo->setEnabled(true);
		numNewLineEdit->setEnabled(true);

		bulletBox->setChecked(false);
		bulletStrEdit->setEnabled(false);
		bulletCharTableButton->setEnabled(false);

		dropCapsBox->setChecked(false);
		dropCapLines->setEnabled(false);
	}
	else
	{
		numFormatCombo->setEnabled(false);
		numLevelSpin->setEnabled(false);
	}
	if (hasParent_)
		peParentButton->show();
	checkParEffectState();
	connectPESignals();
}

void SMPStyleWidget::slotParentParEffects()
{
	disconnectPESignals();
	peParentButton->hide();
	dropCapsBox->setChecked(parentDC_);
	bulletBox->setChecked(parentBul_);
	numBox->setChecked(parentNum_);
	emit useParentParaEffects();
	connectPESignals();
}

void SMPStyleWidget::slotDefaultParEffects()
{
	disconnectPESignals();
	dropCapsBox->setChecked(false);
	bulletBox->setChecked(false);
	numBox->setChecked(false);
	emit useParentParaEffects();
	connectPESignals();
}

SMPStyleWidget::~SMPStyleWidget()
{
	
}

void SMPStyleWidget::openEnhanced()
{
	if (m_enhanced)
		return;

	QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
	m_enhanced = new CharSelectEnhanced(this);
	m_enhanced->setModal(true);
	connect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(insertSpecialChars(const QString &)));
	connect(m_enhanced, SIGNAL(paletteShown(bool)), bulletCharTableButton, SLOT(setChecked(bool)));
	m_enhanced->setDoc(m_Doc);
	m_enhanced->setEnabled(true);
	QString styleName = parEffectCharStyleCombo->currentText();
	if (styleName != tr("No Style") && !styleName.isEmpty())
	{
		CharStyle chStyle = m_Doc->charStyle(styleName);
		setCurrentComboItem(m_enhanced->fontSelector, chStyle.font().scName());
	}
	else if (currPStyle)
		setCurrentComboItem(m_enhanced->fontSelector, currPStyle->charStyle().font().scName());
	m_enhanced->newFont(m_enhanced->fontSelector->currentIndex());
	m_enhanced->show();
	QApplication::restoreOverrideCursor();
}

void SMPStyleWidget::closeEnhanced(bool show)
{
	if (!m_enhanced || show)
		return;
	disconnect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(insertSpecialChars(const QString &)));
	disconnect(m_enhanced, SIGNAL(paletteShown(bool)), bulletCharTableButton, SLOT(setChecked(bool)));
	m_enhanced->close();
	delete m_enhanced;
	m_enhanced = NULL;
}

void SMPStyleWidget::showHyphenationMode(QList<ParagraphStyle*> &pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showhyphModeCombo called with an empty list of styles";
		return;
	}
	int hm = (pstyles[0]->hyphenationMode());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (hm != (pstyles[i]->hyphenationMode()))
		{
			hyphModeCombo->setCurrentItem(pstyles[i]->hyphenationMode(), (hasParent_ && pstyles[i]->isInhHyphenationMode()));
			return;
		}
	}
	hyphModeCombo->setCurrentItem(hm, (hasParent_ && pstyles[0]->isInhHyphenationMode()));
}

void SMPStyleWidget::showClearOnApply(QList<ParagraphStyle *> &pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showhyphModeCombo called with an empty list of styles";
		return;
	}
	bool coa = (pstyles[0]->clearOnApply());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (coa != (pstyles[i]->clearOnApply()))
		{
			ClearOnApplyBox->setChecked(pstyles[i]->clearOnApply(), (hasParent_ && pstyles[i]->isInhClearOnApply()));
			return;
		}
	}
	bool isDefaultVal = false;
	if (hasParent_)
		isDefaultVal = pstyles[0]->isInhClearOnApply();
	else
		isDefaultVal = (coa == pstyles[0]->clearOnApply());
	ClearOnApplyBox->setChecked(coa, !isDefaultVal);
}

void SMPStyleWidget::showWidowsOrphans(QList<ParagraphStyle *> &pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showhyphModeCombo called with an empty list of styles";
		return;
	}

	bool kt = (pstyles[0]->keepTogether());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (kt != (pstyles[i]->keepTogether()))
		{
			keepTogether->setChecked(pstyles[i]->keepTogether(), (hasParent_ && pstyles[i]->isInhKeepTogether()));
			return;
		}
	}
	bool isDefaultVal = false;
	if (hasParent_)
		isDefaultVal = pstyles[0]->isInhKeepTogether();
	else
		isDefaultVal = (kt == pstyles[0]->keepTogether());
	keepTogether->setChecked(kt, !isDefaultVal);

	bool kwn = (pstyles[0]->keepWithNext());
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (kwn != (pstyles[i]->keepWithNext()))
		{
			keepWithNext->setChecked(pstyles[i]->keepWithNext(), (hasParent_ && pstyles[i]->isInhKeepWithNext()));
			return;
		}
	}
	if (hasParent_)
		isDefaultVal = pstyles[0]->isInhKeepWithNext();
	else
		isDefaultVal = (kwn != pstyles[0]->keepWithNext());
	keepWithNext->setChecked(kwn, !isDefaultVal);

	int lines = -1;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (lines > -1 && pstyles[i]->keepLinesStart() != lines)
		{
			lines = -1;
			break;
		}
		else
			lines = pstyles[i]->keepLinesStart();
	}
	if (lines == -1)
		keepLinesStart->clear();
	else
		keepLinesStart->setValue(lines);

	if (hasParent_)
		isDefaultVal = pstyles[0]->isInhKeepLinesStart();
	else
		isDefaultVal = (lines == pstyles[0]->keepLinesStart());
	setWidgetBoldFont(keepLabelStart, !isDefaultVal);

	lines = -1;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (lines > -1 && pstyles[i]->keepLinesEnd() != lines)
		{
			lines = -1;
			break;
		}
		else
			lines = pstyles[i]->keepLinesEnd();
	}
	if (lines == -1)
		keepLinesEnd->clear();
	else
		keepLinesEnd->setValue(lines);

	if (hasParent_)
		isDefaultVal = pstyles[0]->isInhKeepLinesEnd();
	else
		isDefaultVal = (lines == pstyles[0]->keepLinesEnd());
	setWidgetBoldFont(keepLabelEnd, !isDefaultVal);
}

void SMPStyleWidget::connectPESignals()
{
	connect(peParentButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));
	connect(bulletBox, SIGNAL(toggled(bool)), this, SLOT(slotBullets(bool)));
	connect(numBox, SIGNAL(toggled(bool)), this, SLOT(slotNumbering(bool)));
	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
}

void SMPStyleWidget::disconnectPESignals()
{
	disconnect(peParentButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));
	disconnect(bulletBox, SIGNAL(toggled(bool)), this, SLOT(slotBullets(bool)));
	disconnect(numBox, SIGNAL(toggled(bool)), this, SLOT(slotNumbering(bool)));
	disconnect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
}

void SMPStyleWidget::on_bulletCharTableButton_toggled(bool checked)
{
	if (m_enhanced && !checked)
		closeEnhanced();
	else if (!m_enhanced && checked)
		openEnhanced();
}

void SMPStyleWidget::handleUpdateRequest(int updateFlags)
{
	if (updateFlags & reqNumListViewUpdate)
		fillNumerationsCombo();
}
