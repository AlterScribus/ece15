/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QEvent>

#include "numeration.h"
#include "smpstylewidget.h"
#include "units.h"
#include "util.h"
#include "util_icon.h"
#include "ui/charselectenhanced.h"

static bool isEqual(double a, double b)
{
	Q_ASSERT(a >  -21473 && b > -21473 && a < 21474 && b < 21474);
	long al = static_cast<long>(10000 * a);
	long bl = static_cast<long>(10000 * b);
    return al == bl;
}


SMPStyleWidget::SMPStyleWidget(ScribusDoc* doc) : QWidget()
{
	m_Doc = doc;
	setupUi(this);
	//Not used yet
// 	optMarginCheckLeftProtruding->setVisible(false);
	lineSpacingLabel->setPixmap(loadIcon("linespacing2.png"));
	spaceAboveLabel->setPixmap( loadIcon("above.png") );
	spaceBelowLabel->setPixmap( loadIcon("below.png") );

	lineSpacingMode_->addItem( tr("Fixed Linespacing"));
	lineSpacingMode_->addItem( tr("Automatic Linespacing"));
	lineSpacingMode_->addItem( tr("Align to Baseline Grid"));
	connect(lineSpacingMode_, SIGNAL(highlighted(int)), this, SLOT(slotLineSpacingModeChanged(int)));

	lineSpacing_->setSuffix(unitGetSuffixFromIndex(0));
	spaceAbove_->setSuffix(unitGetSuffixFromIndex(0));
	spaceBelow_->setSuffix(unitGetSuffixFromIndex(0));

//	optMarginCombo->addItem(tr("None"), ParagraphStyle::OM_None);
//	optMarginCombo->addItem(tr("Left Protruding"), ParagraphStyle::OM_LeftProtruding);
//	optMarginCombo->addItem(tr("Right Protruding"), ParagraphStyle::OM_RightProtruding);
//	optMarginCombo->addItem(tr("Left Hanging Punctuation"), ParagraphStyle::OM_LeftHangingPunct);
//	optMarginCombo->addItem(tr("Right Hanging Punctuation"), ParagraphStyle::OM_RightHangingPunct);
//	optMarginCombo->addItem(tr("Default"), ParagraphStyle::OM_Default);

	parEffectOffset_->setSuffix(unitGetSuffixFromIndex(0));
	
	fillBulletStrEditCombo();
	bulletCharTableButton->setIcon(loadIcon("22/insert-table.png"));
	fillNumStyleCombo();

	minSpaceSpin->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));
	minGlyphExtSpin->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));
	maxGlyphExtSpin->setSuffix(unitGetSuffixFromIndex(SC_PERCENT));

	connect(optMarginDefaultButton, SIGNAL(clicked()), this, SLOT(slotDefaultOpticalMargins()));
	m_enhanced = NULL;
}

void SMPStyleWidget::slotLineSpacingModeChanged(int i)
{
	lineSpacing_->setEnabled(i == 0);
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
/***********************************/
/*      Begin Tooltips             */
/***********************************/
// These are for the paragraph style

	parentCombo->setToolTip(      tr("Parent Style"));
	lineSpacingMode_->setToolTip( tr("Line Spacing Mode"));
	lineSpacing_->setToolTip(     tr("Line Spacing"));
	spaceAbove_->setToolTip(      tr("Space Above"));
	spaceBelow_->setToolTip(      tr("Space Below"));
	lineSpacingLabel->setToolTip(lineSpacing_->toolTip());
	spaceAboveLabel->setToolTip(spaceAbove_->toolTip());
	spaceBelowLabel->setToolTip(spaceBelow_->toolTip());
//	optMarginCombo->setToolTip(tr("Activate an optical margins layout"));
//	optMarginLabel->setToolTip(optMarginCombo->toolTip());
	//CB Unneeded, gets in the way of single widget tooltips
	//dropCapsBox->setToolTip(      tr("Enable or disable drop cap"));
	dropCapLines_->setToolTip(    tr("Drop Cap Lines"));
	bulletCharTableButton->setToolTip(tr("Enhanced Char Table for inserting customs chars as bullets"));
	parEffectOffset_->setToolTip(   tr("Paragraph Effects Chars Offset"));
	parEffectCharStyleCombo->setToolTip("<qt>" + tr("Choose chracter style or leave blank for use default paragraph style"));
	alignement_->setToolTip(      tr("Alignment"));
	tabList_->first_->setToolTip( tr("First Line Indent"));
	tabList_->left_->setToolTip(  tr("Left Indent"));
	tabList_->right_->setToolTip( tr("Right Indent"));
	//CB Unneeded, gets in the way of single widget tooltips
	//tabList_->setToolTip(         tr("Tabulators"));
	
	minSpaceSpin->setToolTip(tr("Maximum white space compression allowed.\nExpressed as a percentage of the current white space value."));
	minSpaceLabel->setToolTip(minSpaceSpin->toolTip());
	minGlyphExtSpin->setToolTip(tr("Maximum compression of glyphs"));
	minGlyphExtLabel->setToolTip(minGlyphExtSpin->toolTip());
	maxGlyphExtSpin->setToolTip(tr("Maximum extension of glyphs"));
	maxGlyphExtLabel->setToolTip(maxGlyphExtSpin->toolTip());

	keepLinesStart->setToolTip ("<qt>" + tr ("Ensure that first lines of a paragraph won't end up separated from the rest (known as widow/orphan control)") + "</qt>");
	keepLinesEnd->setToolTip ("<qt>" + tr ("Ensure that last lines of a paragraph won't end up separated from the rest (known as widow/orphan control)") + "</qt>");
	keepLabelStart->setToolTip (keepLinesStart->toolTip());
	keepLabelEnd->setToolTip (keepLinesEnd->toolTip());
	keepTogether->setToolTip ("<qt>" + tr ("If checked, ensures that the paragraph won't be split across multiple pages or columns") + "</qt>");
	keepWithNext->setToolTip ("<qt>" + tr ("If checked, automatically moves the paragraph to the next column or page if the next paragraph isn't on the same page or column") + "</qt>");

/***********************************/
/*      End Tooltips               */
/***********************************/

	lineSpacingMode_->clear();
	lineSpacingMode_->addItem( tr("Fixed Linespacing"));
	lineSpacingMode_->addItem( tr("Automatic Linespacing"));
	lineSpacingMode_->addItem( tr("Align to Baseline Grid"));
	
//	optMarginCombo->clear();
//	optMarginCombo->addItem(tr("None"), ParagraphStyle::OM_None);
//	optMarginCombo->addItem(tr("Left Protruding"), ParagraphStyle::OM_LeftProtruding);
//	optMarginCombo->addItem(tr("Right Protruding"), ParagraphStyle::OM_RightProtruding);
//	optMarginCombo->addItem(tr("Left Hanging Punctuation"), ParagraphStyle::OM_LeftHangingPunct);
//	optMarginCombo->addItem(tr("Right Hanging Punctuation"), ParagraphStyle::OM_RightHangingPunct);
//	optMarginCombo->addItem(tr("Default"), ParagraphStyle::OM_Default);
//
//	optMarginLabel->setText(tr("Optical Margins:"));

	lineSpacing_->setSuffix(unitGetSuffixFromIndex(0));
	spaceAbove_->setSuffix(unitGetSuffixFromIndex(0));
	spaceBelow_->setSuffix(unitGetSuffixFromIndex(0));
	parentLabel->setText( tr("Based On:"));
	distancesBox->setTitle( tr("Distances and Alignment"));

	parEffectsBox->setTitle(tr("Paragraph Effects"));
	dropCapsBox->setTitle( tr("Drop Caps"));
	bulletBox->setTitle(tr("Bullets"));
	numBox->setTitle(tr("Numeration"));
	dropCapsLineLabel->setText( tr("Lines:"));
	bulletCharLabel->setText(tr("Bullet Char/String"));
	bulletCharTableButton->setText(tr("Char Table"));
	numStyleLabel->setText(tr("Numbering Style"));
	numLevelLabel->setText(tr("Level"));
	numPrefixLabel->setText(tr("Prefix"));
	numSuffixLabel->setText(tr("Suffix"));

	parEffectCharStyleComboLabel->setText(tr("Character Style for Effect:"));
	distFromTextLabel->setText(tr("Distance from Text:"));
	parentParEffectsButton->setText(tr("Use Parent`s Values"));
	
	QFont font1;
	font1.setPointSize(13);
	((QComboBox*) bulletStrEdit)->setFont(font1);

	tabsBox->setTitle( tr("Tabulators and Indentation"));
	tabWidget->setTabText(0, tr("Properties"));
	tabWidget->setTabText(1, tr("Character Style"));
	
	advSettingsGroupBox->setTitle( tr("Advanced Settings"));
	minSpaceLabel->setText( tr("Min. Space Width:"));
	glyphExtensionLabel->setText( tr("Glyph Extension"));
	minGlyphExtLabel->setText( tr("Min:", "Glyph Extension"));
	maxGlyphExtLabel->setText (tr("Max:", "Glyph Extension"));

	opticalMarginsGroupBox->setTitle( tr("Optical Margins"));
	optMarginRadioNone->setText( tr("None","optical margins") );
	optMarginRadioBoth->setText( tr("Both Sides","optical margins") );
	optMarginRadioLeft->setText( tr("Left Only","optical margins") );
	optMarginRadioRight->setText( tr("Right Only","optical margins") );

	optMarginDefaultButton->setText( tr("Reset to Default") );
	optMarginParentButton->setText( tr("Use Parent Value") );
}

void SMPStyleWidget::unitChange(double oldRatio, double newRatio, int unitIndex)
{
	parEffectOffset_->setNewUnit(unitIndex);
	tabList_->unitChange(unitIndex);
}

void SMPStyleWidget::fillBulletStrEditCombo()
{
	bulletStrEdit->clear();
	bulletStrEdit->addItem(QChar(0x2022));
	bulletStrEdit->addItem(QChar(0x2023));
	bulletStrEdit->addItem(QChar(0x25E6));
	bulletStrEdit->addItem("*");
	bulletStrEdit->addItem("<");
	bulletStrEdit->addItem(">");
	bulletStrEdit->addItem("-");
	bulletStrEdit->addItem("");
	bulletStrEdit->addItem(QChar(0x261A));
	bulletStrEdit->addItem(QChar(0x261B));
	bulletStrEdit->addItem(QChar(0x261C));
	bulletStrEdit->addItem(QChar(0x261D));
	bulletStrEdit->setMinimumWidth(50);
}

void SMPStyleWidget::fillNumStyleCombo()
{
	numStyleCombo->clear();
	numStyleCombo->addItem("1_2_3");
	numStyleCombo->addItem("i_ii_iii");
	numStyleCombo->addItem("I_II_III");
	numStyleCombo->addItem("a_b_c");
	numStyleCombo->addItem("i_ii_iii");
	numStyleCombo->addItem("A_B_C");
	numStyleCombo->addItem("*");
}

void SMPStyleWidget::show(ParagraphStyle *pstyle, QList<ParagraphStyle> &pstyles, QList<CharStyle> &cstyles, int unitIndex, const QString &defLang)
{
	currPStyle = pstyle;
	double unitRatio = unitGetRatioFromIndex(unitIndex);
	parentCombo->setEnabled(!pstyle->isDefaultStyle());
	const ParagraphStyle *parent = dynamic_cast<const ParagraphStyle*>(pstyle->parentStyle());
	hasParent_ = pstyle->hasParent() && parent != NULL && parent->hasName() && pstyle->parent() != "";

	lineSpacingMode_->clear();
	lineSpacingMode_->addItem( tr("Fixed Linespacing"));
	lineSpacingMode_->addItem( tr("Automatic Linespacing"));
	lineSpacingMode_->addItem( tr("Align to Baseline Grid"));
	
//	optMarginCombo->clear();
//	optMarginCombo->addItem(tr("None"), ParagraphStyle::OM_None);
//	optMarginCombo->addItem(tr("Left Protruding"), ParagraphStyle::OM_LeftProtruding);
//	optMarginCombo->addItem(tr("Right Protruding"), ParagraphStyle::OM_RightProtruding);
//	optMarginCombo->addItem(tr("Left Hanging Punctuation"), ParagraphStyle::OM_LeftHangingPunct);
//	optMarginCombo->addItem(tr("Right Hanging Punctuation"), ParagraphStyle::OM_RightHangingPunct);
//	optMarginCombo->addItem(tr("Default"), ParagraphStyle::OM_Default);
	
	// One could think it’s too much (aesthetic) or not enough (freedom)!
	minSpaceSpin->setRange(1.0,100.0);
	minGlyphExtSpin->setRange(90.0,100.0);
	maxGlyphExtSpin->setRange(100.0,110.0);
	
	fillBulletStrEditCombo();
	fillNumStyleCombo();

	if (hasParent_)
	{
		lineSpacingMode_->setCurrentItem(pstyle->lineSpacingMode(), pstyle->isInhLineSpacingMode());
		lineSpacingMode_->setParentItem(parent->lineSpacingMode());
		
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

		lineSpacing_->setValue(pstyle->lineSpacing(), pstyle->isInhLineSpacing());
		lineSpacing_->setParentValue(parent->lineSpacing());

		spaceAbove_->setValue(pstyle->gapBefore(), pstyle->isInhGapBefore());
		spaceAbove_->setParentValue(parent->gapBefore());

		spaceBelow_->setValue(pstyle->gapAfter(), pstyle->isInhGapAfter());
		spaceBelow_->setParentValue(parent->gapAfter());


		alignement_->setStyle(pstyle->alignment(), pstyle->isInhAlignment());
		alignement_->setParentItem(parent->alignment());

		bool hasParentTabs = pstyle->isInhTabValues();
		QList<ParagraphStyle::TabRecord> tabs;
		if (hasParentTabs)
			tabs = QList<ParagraphStyle::TabRecord>(parent->tabValues());
		else
			tabs = pstyle->tabValues();

		tabList_->setTabs(tabs, unitIndex, hasParentTabs);
		tabList_->setParentTabs(parent->tabValues());

		tabList_->setLeftIndentValue(pstyle->leftMargin() * unitRatio,pstyle->isInhLeftMargin());
		tabList_->setParentLeftIndent(parent->leftMargin() * unitRatio);

		tabList_->setFirstLineValue(pstyle->firstIndent() * unitRatio, pstyle->isInhFirstIndent());
		tabList_->setParentFirstLine(parent->firstIndent() * unitRatio);

		tabList_->setRightIndentValue(pstyle->rightMargin() * unitRatio, pstyle->isInhRightMargin());
		tabList_->setParentRightIndent(parent->rightMargin() * unitRatio);

		keepLinesStart->setValue (pstyle->keepLinesStart(), pstyle->isInhKeepLinesStart());
		keepLinesEnd->setValue (pstyle->keepLinesEnd(), pstyle->isInhKeepLinesEnd());
		keepTogether->setChecked (pstyle->keepTogether(), pstyle->isInhKeepTogether());
		keepWithNext->setChecked (pstyle->keepWithNext(), pstyle->isInhKeepWithNext());
		keepLinesStart->setParentValue (parent->keepLinesStart());
		keepLinesEnd->setParentValue (parent->keepLinesEnd());
		keepTogether->setParentValue (parent->keepTogether());
		keepWithNext->setParentValue (parent->keepWithNext());
		
//Effects Gropup Box
		parentDC_ = parent->hasDropCap();
		parentBul_ = parent->hasBullet();
		parentNum_ = parent->hasNum();
		//parentParEffects_ = (parentDC_ || parentBul_ || parentNum_);
		if (pstyle->isInhHasDropCap() && pstyle->isInhHasBullet() && pstyle->isInhHasNum())
			parentParEffectsButton->hide();
		else
		{
			parentParEffectsButton->show();
			QFont f(font());
			f.setBold(true);
			parentParEffectsButton->setFont(f);
		}
		connect(parentParEffectsButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));

		dropCapsBox->setChecked(pstyle->hasDropCap());;
		dropCapLines_->setValue(pstyle->dropCapLines(), pstyle->isInhDropCapLines());
		dropCapLines_->setParentValue(parent->dropCapLines());

		parEffectOffset_->setValue(pstyle->parEffectOffset() * unitRatio, pstyle->isInhParEffectOffset());
		parEffectOffset_->setParentValue(parent->parEffectOffset() * unitRatio);

		bulletBox->setChecked(pstyle->hasBullet());
		bulletStrEdit->setEditText(pstyle->bulletStr());
		bulletStrEdit->setCurrentItem(0, pstyle->isInhBulletStr());
		//setWidgetBoldFont(bulletStrEdit, pstyle->isInhBulletStr());

		numBox->setChecked(pstyle->hasNum());
		setWidgetBoldFont(numBox, pstyle->isInhHasNum());
	}
	else
	{
		lineSpacingMode_->setCurrentIndex(pstyle->lineSpacingMode());
		lineSpacing_->setValue(pstyle->lineSpacing());
		spaceAbove_->setValue(pstyle->gapBefore());
		spaceBelow_->setValue(pstyle->gapAfter());
//		optMarginCombo->setCurrentItemByData( pstyle->opticalMargins() );
		setOpticalMargins(pstyle->opticalMargins());
		optMarginParentButton->hide();
		minSpaceSpin->setValue(pstyle->minWordTracking() * 100.0);
		minGlyphExtSpin->setValue(pstyle->minGlyphExtension() * 100.0);
		maxGlyphExtSpin->setValue(pstyle->maxGlyphExtension() * 100.0);
		dropCapsBox->setChecked(pstyle->hasDropCap());
		parentParEffectsButton->hide();
		disconnect(parentParEffectsButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));
		dropCapLines_->setValue(pstyle->dropCapLines());
		bulletBox->setChecked(pstyle->hasBullet());
		bulletStrEdit->setEditText(pstyle->bulletStr());
		numBox->setChecked(pstyle->hasNum());
		parEffectOffset_->setValue(pstyle->parEffectOffset() * unitRatio);
		alignement_->setStyle(pstyle->alignment());
		tabList_->setTabs(pstyle->tabValues(), unitIndex);
		tabList_->setLeftIndentValue(pstyle->leftMargin() * unitRatio);
		tabList_->setFirstLineValue(pstyle->firstIndent() * unitRatio);
		tabList_->setRightIndentValue(pstyle->rightMargin() * unitRatio);

		keepLinesStart->setValue (pstyle->keepLinesStart());
		keepLinesEnd->setValue (pstyle->keepLinesEnd());
		keepTogether->setChecked (pstyle->keepTogether());
		keepWithNext->setChecked (pstyle->keepWithNext());
	}

	lineSpacing_->setEnabled(pstyle->lineSpacingMode() == ParagraphStyle::FixedLineSpacing);
	dropCapLines_->setEnabled(pstyle->hasDropCap());

	parEffectOffset_->setEnabled(pstyle->hasDropCap() || pstyle->hasBullet() || pstyle->hasNum());
	parEffectCharStyleCombo->setEnabled(pstyle->hasDropCap() || pstyle->hasBullet() || pstyle->hasNum());
	parEffectCharStyleCombo->clear();
	parEffectCharStyleCombo->addItem(tr("No Style"));
	for (int i =0; i < cstyles.count(); i++)
		parEffectCharStyleCombo->addItem(cstyles.at(i).name());
	setCurrentComboItem(parEffectCharStyleCombo, pstyle->peCharStyleName().isEmpty() ? tr("No Style") : pstyle->peCharStyleName());

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
		showAlignment(pstyles);
		showOpticalMargin(pstyles);
		showMinSpace(pstyles);
		showMinGlyphExt(pstyles);
		showMaxGlyphExt(pstyles);
		showTabs(pstyles, unitIndex);
		showCStyle(pstyles, cstyles, defLang, unitIndex);
		showParent(pstyles);
	}
}

void SMPStyleWidget::showLineSpacing(QList<ParagraphStyle*> &pstyles)
{
	lineSpacingMode_->clear();
	lineSpacingMode_->addItem( tr("Fixed Linespacing"));
	lineSpacingMode_->addItem( tr("Automatic Linespacing"));
	lineSpacingMode_->addItem( tr("Align to Baseline Grid"));

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
		if (lineSpacingMode_->itemText(lineSpacingMode_->count() - 1) != "")
			lineSpacingMode_->addItem("");
		lineSpacingMode_->setCurrentIndex(lineSpacingMode_->count() - 1);
	}
	else
		lineSpacingMode_->setCurrentIndex(tmpLP);

	double tmpLS = -1.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpLS > 0 && !isEqual(pstyles[i]->lineSpacing(), tmpLS))
		{
			tmpLS = -1.0;
			break;
		}
		else
			tmpLS = pstyles[i]->lineSpacing();
	}
	lineSpacing_->setEnabled(true);
	if (tmpLS < 0)
		lineSpacing_->clear();
	else
		lineSpacing_->setValue(tmpLS);
}

void SMPStyleWidget::showSpaceAB(QList<ParagraphStyle*> &pstyles, int unitIndex)
{
// 	double unitRatio = unitGetRatioFromIndex(unitIndex);
	double tmpA = -1.2;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpA > -1.0 && !isEqual(pstyles[i]->gapBefore(), tmpA))
		{
			tmpA = -1.2;
			break;
		}
		else
			tmpA = pstyles[i]->gapBefore();
	}

	if (tmpA < 0)
		spaceAbove_->clear();
	else
		spaceAbove_->setValue(tmpA);

	tmpA = -1.2;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (tmpA > -1.0 && !isEqual(pstyles[i]->gapAfter(), tmpA))
		{
			tmpA = -1.2;
			break;
		}
	}

	if (tmpA < 0)
		spaceBelow_->clear();
	else
		spaceBelow_->setValue(tmpA);
}

void SMPStyleWidget::showDropCap(QList<ParagraphStyle*> &pstyles, QList<CharStyle> &cstyles, int unitIndex)
{
//	double unitRatio = unitGetRatioFromIndex(unitIndex);

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
		dropCapLines_->clear();
	else
		dropCapLines_->setValue(lines);

//	double dco = -4000.0;
//	for (int i = 0; i < pstyles.count(); ++i)
//	{
//		if (dco > -3980.0 && !isEqual(pstyles[i]->parEffectOffset(), dco))
//		{
//			dco = -4000.0;
//			break;
//		}
//		else
//			dco = pstyles[i]->parEffectOffset();
//	}

//	if (dco < -3800.0)
//		parEffectOffset_->clear();
//	else
//		parEffectOffset_->setValue(dco * unitRatio);

//	parEffectCharStyleCombo->clear();
//	parEffectCharStyleCombo->addItem(tr("No Style"));
//	for (int i=0; i < cstyles.count(); i++)
//		parEffectCharStyleCombo->addItem(cstyles.at(i).name());

	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	dropCapsBox->setEnabled(true);
	dropCapLines_->setEnabled(true);
//	parEffectOffset_->setEnabled(true);
//	parEffectCharStyleCombo->setEnabled(true);
}

void SMPStyleWidget::showBullet(QList<ParagraphStyle *> &pstyles, QList<CharStyle> &cstyles, int unitIndex)
{
//	double unitRatio = unitGetRatioFromIndex(unitIndex);

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

	connect(bulletBox, SIGNAL(toggled(bool)), this, SLOT(slotBullets(bool)));
	bulletCharTableButton->setEnabled(true);
}

void SMPStyleWidget::showNumeration(QList<ParagraphStyle *> &pstyles, QList<CharStyle> &cstyles, int unitIndex)
{

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

	connect(numBox, SIGNAL(toggled(bool)), this, SLOT(slotNumbering(bool)));
	numStyleCombo->setEnabled(true);
	numLevelSpin->setEnabled(true);
//	numFirstSpin->setEnabled(true);
//	numIndentSpin->setEnabled(true);
//	numTabSpin->setEnabled(true);
//	numChStyleCombo->setEnabled(true);
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
			if (alignement_->selectedId() > -1 && alignement_->selectedId() < 5)
			{
				alignement_->buttonGroup->setExclusive(false);
				alignement_->buttonGroup->button(alignement_->selectedId())->toggle();
				alignement_->buttonGroup->setExclusive(true);
			}
			return;
		}
	}
	alignement_->setStyle(a);
}

void SMPStyleWidget::showOpticalMargin(QList< ParagraphStyle * > & pstyles)
{
	if(pstyles.isEmpty())
	{
		qDebug()<<"Warning showOpticalMargin called with an empty list of styles";
		return;
	}
	
//	optMarginCombo->clear();
//	optMarginCombo->addItem(tr("None"), ParagraphStyle::OM_None);
//	optMarginCombo->addItem(tr("Left Protruding"), ParagraphStyle::OM_LeftProtruding);
//	optMarginCombo->addItem(tr("Right Protruding"), ParagraphStyle::OM_RightProtruding);
//	optMarginCombo->addItem(tr("Left Hanging Punctuation"), ParagraphStyle::OM_LeftHangingPunct);
//	optMarginCombo->addItem(tr("Right Hanging Punctuation"), ParagraphStyle::OM_RightHangingPunct);
//	optMarginCombo->addItem(tr("Default"), ParagraphStyle::OM_Default);
//
//	// the static cast should not be required if opticalMargins() would return OpticalMarginType. Why it does not? mystery
//	ParagraphStyle::OpticalMarginType o( static_cast<ParagraphStyle::OpticalMarginType>(pstyles[0]->opticalMargins()) );
//	for (int i = 0; i < pstyles.count(); ++i)
//	{
//		if (o != pstyles[i]->opticalMargins())
//		{
//			optMarginCombo->setCurrentItem(0);
//			return;
//		}
//	}
//	optMarginCombo->setCurrentItemByData(o);
	setOpticalMargins(pstyles[0]->opticalMargins());
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
		if (ms != pstyles[i]->minWordTracking())
		{
			minSpaceSpin->setValue(100.0);
			return;
		}
	}
	minSpaceSpin->setValue(ms * 100.0);
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
		if (mge != pstyles[i]->minGlyphExtension())
		{
			minGlyphExtSpin->setValue(100.0);
			return;
		}
	}
	minGlyphExtSpin->setValue(mge * 100.0);
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
		if (mge != pstyles[i]->maxGlyphExtension())
		{
			maxGlyphExtSpin->setValue(100.0);
			return;
		}
	}
	maxGlyphExtSpin->setValue(mge * 100.0);
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
	tabList_->setTabs(t, unitIndex);

	double l = -4000.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !isEqual(pstyles[i]->leftMargin(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->leftMargin();
	}
	if (l < -3800.0)
	{
		tabList_->setLeftIndentValue(0.0);
		tabList_->left_->clear();
	}
	else
		tabList_->setLeftIndentValue(l * unitRatio);

	l = -4000.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !isEqual(pstyles[i]->firstIndent(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->firstIndent();
	}
	if (l < -3800.0)
	{
		tabList_->setFirstLineValue(0.0);
		tabList_->first_->clear();
	}
	else
		tabList_->setFirstLineValue(l * unitRatio);

	l = -4000.0;
	for (int i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !isEqual(pstyles[i]->rightMargin(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->rightMargin();
	}
	if (l < -3800.0)
	{
		tabList_->setRightIndentData(0.0);
		tabList_->right_->clear();
	}
	else
		tabList_->setRightIndentValue(l * unitRatio);

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

// 	parentCombo->clear();
// 	parentCombo->insertItem("");
// 	for (uint i = 0; i < pstyles.count(); ++i)
// 	{
// 		if (pstyles[i].hasName() && pstyles[i].name() != pstyle->name())
// 			parentCombo->insertItem(pstyles[i].name());
// 	}
// 
// 	if (hasParent_)
// 	{
// 		int index = 0;
// 		for (int i = 0; i < parentCombo->count(); ++i)
// 		{
// 			if (parentCombo->text(i) == parent->name())
// 			{
// 				index = i;
// 				break;
// 			}
// 		}
// 		parentCombo->setCurrentItem(index);
// 	}
// 	else
// 		parentCombo->setCurrentItem(0);
}

void SMPStyleWidget::setOpticalMargins(int o, bool inhO, const ParagraphStyle *parent)
{
	ParagraphStyle::OpticalMarginType om( static_cast<ParagraphStyle::OpticalMarginType>(o) );

	if (parent==NULL)
	{
		if(om == ParagraphStyle::OM_Default)
			optMarginRadioBoth->setChecked(true);
		else if(om == ParagraphStyle::OM_LeftHangingPunct)
			optMarginRadioLeft->setChecked(true);
		else if(om == ParagraphStyle::OM_RightHangingPunct)
			optMarginRadioRight->setChecked(true);
		else
			optMarginRadioNone->setChecked(true);
	}
	else
	{
		optMarginParentButton->setShown(!inhO);

		if(om == ParagraphStyle::OM_Default)
			optMarginRadioBoth->setChecked(true,
				(parent->opticalMargins() == ParagraphStyle::OM_Default));
		else if(om == ParagraphStyle::OM_LeftHangingPunct)
			optMarginRadioLeft->setChecked(true,
				(parent->opticalMargins() == ParagraphStyle::OM_LeftHangingPunct));
		else if(om == ParagraphStyle::OM_RightHangingPunct)
			optMarginRadioRight->setChecked(true,
				(parent->opticalMargins() == ParagraphStyle::OM_RightHangingPunct));
		else
			optMarginRadioNone->setChecked(true,
				(parent->opticalMargins() == ParagraphStyle::OM_None));
		
		optMarginRadioBoth->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_Default);
		optMarginRadioLeft->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_LeftHangingPunct);
		optMarginRadioRight->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_RightHangingPunct);
		optMarginRadioNone->setParentValue(parent->opticalMargins() ==  ParagraphStyle::OM_None);
	}
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

void SMPStyleWidget::clearAll()
{

}

void SMPStyleWidget::slotDropCap(bool isOn)
{
	if (isOn)
	{
		dropCapLines_->setEnabled(true);

		bulletBox->setChecked(false);
		bulletStrEdit->setEnabled(false);
		bulletCharTableButton->setEnabled(false);

		numBox->setChecked(false);
		numStyleCombo->setEnabled(false);
		numLevelSpin->setEnabled(false);
	}
	else
		dropCapLines_->setEnabled(false);
	if (hasParent_)
		parentParEffectsButton->show();
	parEffectOffset_->setEnabled(bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked());
	parEffectCharStyleCombo->setEnabled(bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked());
}

void SMPStyleWidget::slotBullets(bool isOn)
{
	if (isOn)
	{
		bulletStrEdit->setEnabled(true);
		bulletCharTableButton->setEnabled(true);

		numBox->setChecked(false);
		numStyleCombo->setEnabled(false);
		numLevelSpin->setEnabled(false);

		dropCapsBox->setChecked(false);
		dropCapLines_->setEnabled(false);
	}
	else
	{
		bulletStrEdit->setEnabled(false);
		bulletCharTableButton->setEnabled(false);
	}
	if (hasParent_)
		parentParEffectsButton->show();
	parEffectOffset_->setEnabled(bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked());
	parEffectCharStyleCombo->setEnabled(bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked());
}

void SMPStyleWidget::insertSpecialChars(const QString &chars)
{
	bulletStrEdit->lineEdit()->insert(chars);
}

void SMPStyleWidget::slotNumbering(bool isOn)
{
	if (isOn)
	{
		numStyleCombo->setEnabled(true);
		numLevelSpin->setEnabled(true);

		bulletBox->setChecked(false);
		bulletStrEdit->setEnabled(false);
		bulletCharTableButton->setEnabled(false);

		dropCapsBox->setChecked(false);
		dropCapLines_->setEnabled(false);
	}
	else
	{
		numStyleCombo->setEnabled(false);
		numLevelSpin->setEnabled(false);
	}
	if (hasParent_)
		parentParEffectsButton->show();
	parEffectOffset_->setEnabled(bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked());
	parEffectCharStyleCombo->setEnabled(bulletBox->isChecked() || numBox->isChecked() || dropCapsBox->isChecked());
}

void SMPStyleWidget::slotParentParEffects()
{
	disconnect(parentParEffectsButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));
	disconnect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	disconnect(bulletBox, SIGNAL(toggled(bool)), this, SLOT(slotBullets(bool)));
	disconnect(numBox, SIGNAL(toggled(bool)), this, SLOT(slotNumbering(bool)));
	parentParEffectsButton->hide();
	dropCapsBox->setChecked(parentDC_);
	bulletBox->setChecked(parentBul_);
	numBox->setChecked(parentNum_);
	emit useParentParaEffects();
	connect(parentParEffectsButton, SIGNAL(clicked()), this, SLOT(slotParentParEffects()));
	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	connect(bulletBox, SIGNAL(toggled(bool)), this, SLOT(slotBullets(bool)));
	connect(numBox, SIGNAL(toggled(bool)), this, SLOT(slotNumbering(bool)));
}

SMPStyleWidget::~SMPStyleWidget()
{
	
}

//void SMPStyleWidget::on_bulletCharTableButton_clicked()
//{
//	if (m_enhanced)
//		closeEnhanced();
//	else
//		openEnhanced();
//}

void SMPStyleWidget::openEnhanced()
{
	if (m_enhanced)
		return;

	QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
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
	m_enhanced->show();
	QApplication::changeOverrideCursor(Qt::ArrowCursor);
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

void SMPStyleWidget::on_bulletCharTableButton_toggled(bool checked)
{
	if (m_enhanced && !checked)
		closeEnhanced();
	else if (!m_enhanced && checked)
		openEnhanced();
}
