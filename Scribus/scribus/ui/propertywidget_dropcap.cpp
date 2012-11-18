/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "pageitem.h"
#include "pageitem_table.h"
#include "propertywidget_dropcap.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "selection.h"
#include "units.h"
#include "undomanager.h"
#include "undostate.h"
#include "util.h"
#include "util_icon.h"

PropertyWidget_DropCap::PropertyWidget_DropCap(QWidget *parent) : QFrame(parent), m_enhanced(NULL), m_item(NULL), m_ScMW(NULL)
{
	setupUi(this);
	setFrameStyle(QFrame::Box | QFrame::Plain);
	setLineWidth(1);
	layout()->setAlignment( Qt::AlignTop );

	languageChange();
	dropCapLines->setValue(2);

	if (m_doc)
		peCharStyleCombo->updateFormatList();
	fillBulletStrEditCombo();
	fillNumStyleCombo();
	enableParEffect(false);
	bulletCharTableButton_->setIcon(loadIcon("22/insert-table.png"));
	numStart->setMinimum(1);
	numStart->setMaximum(9999);
}

void PropertyWidget_DropCap::setMainWindow(ScribusMainWindow* mw)
{
	m_ScMW = mw;

	connect(m_ScMW, SIGNAL(AppModeChanged(int, int)), this, SLOT(handleAppModeChanged(int, int)));
	connect(m_ScMW, SIGNAL(UpdateRequest(int)), this  , SLOT(handleUpdateRequest(int)));
}

void PropertyWidget_DropCap::setDoc(ScribusDoc *doc)
{
	if(doc == (ScribusDoc*) m_doc)
		return;

	if (m_doc)
	{
		disconnect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
		disconnect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
	}

	m_doc = doc;
	peCharStyleCombo->setDoc(doc);

	if (m_doc.isNull())
	{
		disconnectSignals();
		return;
	}
	fillNumerationsCombo();

	m_unitRatio   = m_doc->unitRatio();
	m_unitIndex   = m_doc->unitIndex();
	peOffset_->setSuffix(unitGetSuffixFromIndex(0));

	connect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
	connect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
}

void PropertyWidget_DropCap::setCurrentItem(PageItem *item)
{
	if (item && m_doc.isNull())
		setDoc(item->doc());

	m_item = item;

	disconnectSignals();
	configureWidgets();

	if (!m_item) return;

	if (m_item->asTextFrame() || m_item->asPathText() || m_item->asTable())
	{
		ParagraphStyle parStyle =  m_item->itemText.defaultStyle();
		if (m_doc->appMode == modeEdit)
			m_item->currentTextProps(parStyle);
		else if (m_doc->appMode == modeEditTable)
			m_item->asTable()->activeCell().textFrame()->currentTextProps(parStyle);
		updateStyle(parStyle);

		connectSignals();
	}
}

void PropertyWidget_DropCap::unitChange()
{
	if (!m_doc)
		return;

	m_unitRatio = m_doc->unitRatio();
	m_unitIndex = m_doc->unitIndex();

	peOffset_->blockSignals(true);
	peOffset_->setNewUnit( m_unitIndex );
	peOffset_->blockSignals(false);
}

void PropertyWidget_DropCap::fillNumerationsCombo()
{
	QStringList numNames;
	for (int i = 0; i < m_doc->paragraphStyles().count(); ++i)
	{
		ParagraphStyle pStyle = m_doc->paragraphStyles()[i];
		if (pStyle.hasNum() && pStyle.numName() != "<local block>" && !numNames.contains(pStyle.numName()))
			numNames.append(pStyle.numName());
	}
	if (numNames.isEmpty())
		numNames.append("default");
	else if (numNames.count() > 1)
		numNames.sort();
	numNames.prepend("<local block>");
	numComboBox->clear();
	numComboBox->insertItems(0, numNames);
}

void PropertyWidget_DropCap::updateCharStyles()
{
	peCharStyleCombo->updateFormatList();
}

void PropertyWidget_DropCap::displayCharStyle(const QString& name)
{
	bool blocked = peCharStyleCombo->blockSignals(true);
	peCharStyleCombo->setFormat(name);
	peCharStyleCombo->blockSignals(blocked);
}

void PropertyWidget_DropCap::enableDropCap(bool enable)
{
	dropCapRadio_->setChecked(enable);
	dropCapLines->setEnabled(enable);
	if (enable)
	{
		enableBullet(false);
		enableNum(false);
	}
}
void PropertyWidget_DropCap::enableBullet(bool enable)
{
	bulletRadio_->setChecked(enable);
	bulletStrEdit_->setEnabled(enable);
	bulletCharTableButton_->setEnabled(enable);
	if (enable)
	{
		fillBulletStrEditCombo();
		enableDropCap(false);
		enableNum(false);
	}
}
void PropertyWidget_DropCap::enableNum(bool enable)
{
	numRadio_->setChecked(enable);
	numComboBox->setEnabled(enable);
	numLevelSpin->setEnabled(enable);
	numPrefix->setEnabled(enable);
	numSuffix->setEnabled(enable);
	numStyleCombo->setEnabled(enable);
	if (enable)
	{
		fillNumStyleCombo();
		enableBullet(false);
		enableDropCap(false);
	}
}
void PropertyWidget_DropCap::enableParEffect(bool enable)
{
	if (!enable && peOffRadio->isChecked())
		return;
	peOffRadio->setChecked(!enable);
	peOffset_->setEnabled(enable);
	peCharStyleCombo->setEnabled(enable);
	peIndent_->setEnabled(enable);
	if (!enable)
	{
		enableBullet(false);
		enableDropCap(false);
		enableNum(false);
	}
}

void PropertyWidget_DropCap::updateStyle(const ParagraphStyle& newPStyle)
{
	if (peOffRadio->isChecked() && !newPStyle.hasBullet() && !newPStyle.hasDropCap() && !newPStyle.hasNum())
		return;
	disconnectSignals ();

	if (newPStyle.hasDropCap())
	{
		if (!dropCapRadio_->isChecked())
			enableDropCap(true);
		dropCapLines->setValue(newPStyle.dropCapLines());
		setWidgetBoldFont(dropCapLinesLabel, !newPStyle.isInhDropCapLines());
	}
	else if (newPStyle.hasBullet())
	{
		if (!bulletRadio_->isChecked())
			enableBullet(true);
		bulletStrEdit_->setEditText(newPStyle.bulletStr());
		setWidgetBoldFont(bulletCharLabel, !newPStyle.isInhBulletStr());
	}
	else if (newPStyle.hasNum())
	{
		if (!numRadio_->isChecked())
			enableNum(true);
		QString numName = newPStyle.numName();
		numLevelSpin->setValue(newPStyle.numLevel());
		setWidgetBoldFont(numLevelLabel, !newPStyle.isInhNumLevel());
		NumStruct * numS = m_doc->numerations.value(newPStyle.numName());
		if (numS)
			numLevelSpin->setMaximum(numS->m_counters.count());
		else
		{
			numLevelSpin->setMaximum(3);
			if (numName.isEmpty())
				numName = "<local block>";
		}
		numComboBox->setCurrentItem(numComboBox->findText(numName), newPStyle.isInhNumName());
		numStyleCombo->setCurrentItem(newPStyle.numStyle(), newPStyle.isInhNumStyle());
		numPrefix->setText(newPStyle.numPrefix());
		setWidgetBoldFont(numPrefixLabel, !newPStyle.isInhNumPrefix());
		numSuffix->setText(newPStyle.numSuffix());
		setWidgetBoldFont(numSuffixLabel, !newPStyle.isInhNumSuffix());
		numStart->setValue(newPStyle.numStart());
		setWidgetBoldFont(numStartLabel, !newPStyle.isInhNumLevel());
	//	numRestartCombo->setCurrentItem(pstyle->numRestart(), pstyle->isInhNumRestart());
	//	numRestartCombo->setParentItem(parent->numRestart());
	//	numRestartOtherBox->setChecked(pstyle->numOther(), pstyle->isInhNumOther());
	//	numRestartOtherBox->setParentValue(parent->numOther());
	//	numRestartHigherBox->setChecked(pstyle->numHigher(), pstyle->isInhNumHigher());
	//	numRestartHigherBox->setParentValue(parent->numHigher());
		if (newPStyle.hasParent())
		{
			const ParagraphStyle *parent = dynamic_cast<const ParagraphStyle*>(newPStyle.parentStyle());
			if (parent)
			{
				if (!parent->numName().isEmpty())
					numComboBox->setParentItem(numComboBox->findText(parent->numName()));
				numStyleCombo->setParentItem(parent->numStyle());
			}
			else
				numComboBox->setParentItem(0);
		}
	}
	else
	{
		enableParEffect(false);
		connectSignals ();
		return;
	}
	enableParEffect(true);

	peOffset_->setValue(newPStyle.parEffectOffset() * m_unitRatio);
	setWidgetBoldFont(peOffsetLabel, !newPStyle.isInhParEffectOffset());
	peIndent_->setChecked(newPStyle.parEffectIndent(), newPStyle.isInhParEffectIndent());
	if (newPStyle.hasParent())
	{
		const ParagraphStyle *parent = dynamic_cast<const ParagraphStyle*>(newPStyle.parentStyle());
		if (parent)
			peIndent_->setParentValue(parent->parEffectIndent());
	}

	displayCharStyle(newPStyle.peCharStyleName());
	connectSignals ();
}

void PropertyWidget_DropCap::connectSignals()
{
	connect(peOffRadio, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(dropCapRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(bulletRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(numRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(dropCapLines, SIGNAL(valueChanged(int)), this, SLOT(handleDropCapLines(int)), Qt::UniqueConnection);
	connect(bulletStrEdit_, SIGNAL(editTextChanged(QString)), this, SLOT(handleBulletStr(QString)), Qt::UniqueConnection);
	connect(numComboBox, SIGNAL(activated(QString)), this, SLOT(handleNumName(QString)), Qt::UniqueConnection);
	connect(numLevelSpin, SIGNAL(valueChanged(int)), this, SLOT(handleNumLevel(int)), Qt::UniqueConnection);
	connect(numStyleCombo, SIGNAL(activated(int)), this, SLOT(handleNumStyle(int)), Qt::UniqueConnection);
	connect(numPrefix, SIGNAL(textChanged(QString)), this, SLOT(handleNumPrefix(QString)), Qt::UniqueConnection);
	connect(numSuffix, SIGNAL(textChanged(QString)), this, SLOT(handleNumSuffix(QString)), Qt::UniqueConnection);
	connect(numStart, SIGNAL(valueChanged(int)), this, SLOT(handleNumStart(int)), Qt::UniqueConnection);
	connect(peOffset_, SIGNAL(valueChanged(double)), this, SLOT(handlePEOffset(double)), Qt::UniqueConnection);
	connect(peIndent_, SIGNAL(toggled(bool)), this, SLOT(handlePEIndent(bool)), Qt::UniqueConnection);
	connect(peCharStyleCombo, SIGNAL(activated(QString)), this, SLOT(handlePECharStyle(QString)), Qt::UniqueConnection);
}

void PropertyWidget_DropCap::disconnectSignals()
{
	disconnect(peOffRadio, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(dropCapRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(bulletRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(numRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(dropCapLines, SIGNAL(valueChanged(int)), this, SLOT(handleDropCapLines(int)));
	disconnect(bulletStrEdit_, SIGNAL(editTextChanged(QString)), this, SLOT(handleBulletStr(QString)));
	disconnect(numComboBox, SIGNAL(activated(QString)), this, SLOT(handleNumName(QString)));
	disconnect(numLevelSpin, SIGNAL(valueChanged(int)), this, SLOT(handleNumLevel(int)));
	disconnect(numStyleCombo, SIGNAL(activated(int)), this, SLOT(handleNumStyle(int)));
	disconnect(numPrefix, SIGNAL(textChanged(QString)), this, SLOT(handleNumPrefix(QString)));
	disconnect(numSuffix, SIGNAL(textChanged(QString)), this, SLOT(handleNumSuffix(QString)));
	disconnect(numStart, SIGNAL(valueChanged(int)), this, SLOT(handleNumStart(int)));
	disconnect(peOffset_, SIGNAL(valueChanged(double)), this, SLOT(handlePEOffset(double)));
	disconnect(peIndent_, SIGNAL(toggled(bool)), this, SLOT(handlePEIndent(bool)));
	disconnect(peCharStyleCombo, SIGNAL(activated(QString)), this, SLOT(handlePECharStyle(QString)));
}

void PropertyWidget_DropCap::configureWidgets(void)
{
	bool enabled = false;
	if (m_item && m_doc)
	{
		PageItem_TextFrame *textItem = m_item->asTextFrame();
		if (m_doc->appMode == modeEditTable)
			textItem = m_item->asTable()->activeCell().textFrame();
		if (textItem || m_item->asPathText())
			enabled = true;
	}
	setEnabled(enabled);
}

void PropertyWidget_DropCap::handleAppModeChanged(int oldMode, int mode)
{
	if (oldMode == modeEditTable || mode == modeEditTable)
	{
		setCurrentItem(m_item);
	}
}

void PropertyWidget_DropCap::handleSelectionChanged()
{
	if (!m_doc || !m_ScMW || m_ScMW->scriptIsRunning())
		return;

	PageItem* currItem = currentItemFromSelection();
	setCurrentItem(currItem);
	updateGeometry();
	repaint();
}

void PropertyWidget_DropCap::handleUpdateRequest(int updateFlags)
{
	if (updateFlags & reqCharStylesUpdate)
		updateCharStyles();
	if (updateFlags & reqStyleComboDocUpdate)
		setDoc(m_doc ? m_doc : 0);
	if (updateFlags & reqNumUpdate)
		fillNumerationsCombo();
}

void PropertyWidget_DropCap::handleParEffectUse()
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	enableParEffect(!peOffRadio->isChecked());
	if (dropCapRadio_->isChecked())
	{
		enableDropCap(true);
		newStyle.setDropCapLines(dropCapLines->value());
		newStyle.setHasDropCap(true);
		newStyle.setHasBullet(false);
		newStyle.setHasNum(false);
	}
	else if (bulletRadio_->isChecked())
	{
		enableBullet(true);
		newStyle.setHasBullet(true);
		QString bStr = bulletStrEdit_->currentText();
		if (bStr.isEmpty())
			bStr = QChar(0x2022);
		newStyle.setBulletStr(bStr);
		newStyle.setHasNum(false);
		newStyle.setHasDropCap(false);
	}
	else if (numRadio_->isChecked())
	{
		enableNum(true);
		newStyle.setHasDropCap(false);
		newStyle.setHasBullet(false);
		newStyle.setHasNum(true);
		newStyle.setNumName(numComboBox->currentText());
		newStyle.setNumStyle(numStyleCombo->currentIndex());
		newStyle.setNumLevel(numLevelSpin->value());
		newStyle.setNumStart(numStart->value());
		newStyle.setNumPrefix(numPrefix->text());
		newStyle.setNumSuffix(numSuffix->text());
		if (newStyle.numName() == "<local block>")
		{
			newStyle.setNumOther(true);
			newStyle.setNumHigher(true);
		}
	}
	else
	{
		newStyle.setHasDropCap(false);
		newStyle.setHasBullet(false);
		newStyle.setHasNum(false);
	}
	newStyle.setParEffectOffset(peOffset_->value());
	newStyle.setParEffectIndent(peIndent_->isChecked());
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleBulletStr(QString bulStr)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	if (bulStr.isEmpty())
		bulStr = QChar(0x2022);
	newStyle.setBulletStr(bulStr);
	PageItem *item = m_doc->m_Selection->itemAt(0);
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleDropCapLines(int dcLines)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setDropCapLines(dcLines);
	PageItem *item = m_doc->m_Selection->itemAt(0);
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumName(QString numName)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	if (numName == "<local block>")
	{
		newStyle.setNumOther(true);
		newStyle.setNumHigher(true);
		newStyle.setNumRestart(NSRstory);
		newStyle.setNumPrefix(numPrefix->text());
		newStyle.setNumSuffix(numSuffix->text());
		newStyle.setNumStyle((NumFormat) numStyleCombo->currentIndex());
	}
	newStyle.setNumName(numName);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumStyle(int style)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumStyle(style);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumLevel(int level)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumLevel(level);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumPrefix(QString prefix)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumPrefix(prefix);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumSuffix(QString suffix)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumSuffix(suffix);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumStart(int start)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumStart(start);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handlePEOffset(double offset)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setParEffectOffset(offset);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handlePEIndent(bool indent)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setParEffectIndent(indent);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handlePECharStyle(QString name)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	if (!name.isEmpty())
		newStyle.setPeCharStyleName(name);
	PageItem *item = m_item;
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
		return;
	}
	QWidget::changeEvent(e);
}

void PropertyWidget_DropCap::languageChange()
{
	peOffRadio->setText(tr("No Paragraph Effects"));
	dropCapRadio_->setText(tr("Use Drop Caps"));
	dropCapLinesLabel->setText(tr("Drop Caps lines"));
	peOffsetLabel->setText(tr("Paragraph Effect offset"));
	peCharStyleLabel->setText(tr("Pargraph Effect style..."));
	peCharStyleCombo->setToolTip("<qt>" + tr("Choose chracter style or leave blank for use default paragraph style"));
	bulletCharTableButton_->setToolTip(tr("Enhanced Char Table for inserting customs chars as bullets"));
	bulletCharTableButton_->setText(tr("Char Table"));
}

void PropertyWidget_DropCap::openEnhanced()
{
	if (m_enhanced)
		return;

	QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
	m_enhanced = new CharSelectEnhanced(this);
	m_enhanced->setModal(true);
	connect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(insertSpecialChars(const QString &)));
	connect(m_enhanced, SIGNAL(paletteShown(bool)), bulletCharTableButton_, SLOT(setChecked(bool)));
	m_enhanced->setDoc(m_doc);
	m_enhanced->setEnabled(true);
	QString styleName = peCharStyleCombo->currentText();
	setCurrentComboItem(m_enhanced->fontSelector, m_item->currentStyle().charStyle().font().scName());
	m_enhanced->newFont(m_enhanced->fontSelector->currentIndex());
	m_enhanced->show();
	QApplication::changeOverrideCursor(Qt::ArrowCursor);
}

void PropertyWidget_DropCap::closeEnhanced(bool show)
{
	if (!m_enhanced || show)
		return;
	disconnect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(insertSpecialChars(const QString &)));
	disconnect(m_enhanced, SIGNAL(paletteShown(bool)), bulletCharTableButton_, SLOT(setChecked(bool)));
	m_enhanced->close();
	delete m_enhanced;
	m_enhanced = NULL;
}

void PropertyWidget_DropCap::on_bulletCharTableButton__toggled(bool checked)
{
	if (m_enhanced && !checked)
		closeEnhanced();
	else if (!m_enhanced && checked)
		openEnhanced();
}
void PropertyWidget_DropCap::insertSpecialChars(const QString &chars)
{
	bulletStrEdit_->lineEdit()->insert(chars);
}
