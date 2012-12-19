/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "pageitem.h"
#include "pageitem_table.h"
#include "propertywidget_pareffect.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "selection.h"
#include "units.h"
#include "util.h"
#include "util_icon.h"

PropertyWidget_ParEffect::PropertyWidget_ParEffect(QWidget *parent) : QFrame(parent), m_enhanced(NULL), m_item(NULL), m_ScMW(NULL)
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
	fillNumFormatCombo();
	enableParEffect(false);
	bulletCharTableButton_->setIcon(loadIcon("22/insert-table.png"));
	numStart->setMinimum(1);
	numStart->setMaximum(9999);
	numLevelSpin->setMinimum(1);
	numLevelSpin->setMaximum(3);
	dropCapLines->setMinimum(2);
	dropCapLines->setMaximum(99);
}

void PropertyWidget_ParEffect::setMainWindow(ScribusMainWindow* mw)
{
	m_ScMW = mw;

	connect(m_ScMW, SIGNAL(AppModeChanged(int, int)), this, SLOT(handleAppModeChanged(int, int)));
	connect(m_ScMW, SIGNAL(UpdateRequest(int)), this  , SLOT(handleUpdateRequest(int)));
}

void PropertyWidget_ParEffect::setDoc(ScribusDoc *doc)
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
	connectSignals();
}

void PropertyWidget_ParEffect::setCurrentItem(PageItem *item)
{
	if (item && m_doc.isNull())
		setDoc(item->doc());

	m_item = item;

	if (!m_item) return;

	if (m_item->asTextFrame() || m_item->asPathText() || m_item->asTable())
	{
		configureWidgets();
		ParagraphStyle parStyle =  m_item->itemText.defaultStyle();
		if (m_doc->appMode == modeEdit)
			m_item->currentTextProps(parStyle);
		else if (m_doc->appMode == modeEditTable)
			m_item->asTable()->activeCell().textFrame()->currentTextProps(parStyle);
		updateStyle(parStyle);
	}
}

void PropertyWidget_ParEffect::unitChange()
{
	if (!m_doc)
		return;

	m_unitRatio = m_doc->unitRatio();
	m_unitIndex = m_doc->unitIndex();

	peOffset_->blockSignals(true);
	peOffset_->setNewUnit( m_unitIndex );
	peOffset_->blockSignals(false);
}

void PropertyWidget_ParEffect::fillNumerationsCombo()
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

void PropertyWidget_ParEffect::updateCharStyles()
{
	peCharStyleCombo->updateFormatList();
}

void PropertyWidget_ParEffect::displayCharStyle(const QString& name)
{
	bool blocked = peCharStyleCombo->blockSignals(true);
	peCharStyleCombo->setFormat(name);
	peCharStyleCombo->blockSignals(blocked);
}

void PropertyWidget_ParEffect::enableDropCap(bool enable)
{
	dropCapRadio_->setChecked(enable);
	dropCapLines->setEnabled(enable);
	if (enable)
	{
		enableBullet(false);
		enableNum(false);
	}
}
void PropertyWidget_ParEffect::enableBullet(bool enable)
{
	bulletRadio_->setChecked(enable);
	bulletStrEdit_->setEnabled(enable);
	bulletCharTableButton_->setEnabled(enable);
	if (enable)
	{
		enableDropCap(false);
		enableNum(false);
	}
}
void PropertyWidget_ParEffect::enableNum(bool enable)
{
	numRadio_->setChecked(enable);
	numComboBox->setEnabled(enable);
	numLevelSpin->setEnabled(enable);
	numStart->setEnabled(enable);
	numPrefix->setEnabled(enable);
	numSuffix->setEnabled(enable);
	numFormatCombo->setEnabled(enable);
	if (enable)
	{
		enableBullet(false);
		enableDropCap(false);
	}
}
void PropertyWidget_ParEffect::enableParEffect(bool enable)
{
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

void PropertyWidget_ParEffect::updateStyle(const ParagraphStyle& newPStyle)
{
	if (peOffRadio->isChecked() && !newPStyle.hasBullet() && !newPStyle.hasDropCap() && !newPStyle.hasNum())
		return;
	disconnectSignals ();

	bool enablePE = true;
	if (newPStyle.hasDropCap())
		enableDropCap(true);
	else if (newPStyle.hasBullet())
		enableBullet(true);
	else if (newPStyle.hasNum())
		enableNum(true);
	else
		enablePE = false;

	QString numName = numComboBox->currentText();
	int nFormat = 0;
	dropCapLines->setValue(newPStyle.dropCapLines());
	bulletStrEdit_->setEditText(newPStyle.bulletStr());
	numName = newPStyle.numName();
	nFormat = newPStyle.numFormat();
	NumStruct * numS = m_doc->numerations.value(numName);
	if (numS)
		numLevelSpin->setMaximum(numS->m_counters.count()+1);
	else
		numLevelSpin->setMaximum(3);
	numLevelSpin->setValue(newPStyle.numLevel() +1);
	numPrefix->setText(newPStyle.numPrefix());
	numSuffix->setText(newPStyle.numSuffix());
	numStart->setValue(newPStyle.numStart());

	numComboBox->setCurrentIndex(numComboBox->findText(numName));
	numFormatCombo->setCurrentIndex(nFormat);
	peOffset_->setValue(newPStyle.parEffectOffset() * m_unitRatio);
	peIndent_->setChecked(newPStyle.parEffectIndent());
	displayCharStyle(newPStyle.peCharStyleName());

	enableParEffect(enablePE);
	connectSignals ();
}

void PropertyWidget_ParEffect::connectSignals()
{
	connect(peOffRadio, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(dropCapRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(bulletRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(numRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(dropCapLines, SIGNAL(valueChanged(int)), this, SLOT(handleDropCapLines(int)), Qt::UniqueConnection);
	connect(bulletStrEdit_, SIGNAL(editTextChanged(QString)), this, SLOT(handleBulletStr(QString)), Qt::UniqueConnection);
	connect(numComboBox, SIGNAL(activated(QString)), this, SLOT(handleNumName(QString)), Qt::UniqueConnection);
	connect(numLevelSpin, SIGNAL(valueChanged(int)), this, SLOT(handleNumLevel(int)), Qt::UniqueConnection);
	connect(numFormatCombo, SIGNAL(activated(int)), this, SLOT(handleNumFormat(int)), Qt::UniqueConnection);
	connect(numPrefix, SIGNAL(textChanged(QString)), this, SLOT(handleNumPrefix(QString)), Qt::UniqueConnection);
	connect(numSuffix, SIGNAL(textChanged(QString)), this, SLOT(handleNumSuffix(QString)), Qt::UniqueConnection);
	connect(numStart, SIGNAL(valueChanged(int)), this, SLOT(handleNumStart(int)), Qt::UniqueConnection);
	connect(peOffset_, SIGNAL(valueChanged(double)), this, SLOT(handlePEOffset(double)), Qt::UniqueConnection);
	connect(peIndent_, SIGNAL(toggled(bool)), this, SLOT(handlePEIndent(bool)), Qt::UniqueConnection);
	connect(peCharStyleCombo, SIGNAL(activated(QString)), this, SLOT(handlePECharStyle(QString)), Qt::UniqueConnection);
}

void PropertyWidget_ParEffect::disconnectSignals()
{
	disconnect(peOffRadio, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(dropCapRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(bulletRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(numRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(dropCapLines, SIGNAL(valueChanged(int)), this, SLOT(handleDropCapLines(int)));
	disconnect(bulletStrEdit_, SIGNAL(editTextChanged(QString)), this, SLOT(handleBulletStr(QString)));
	disconnect(numComboBox, SIGNAL(activated(QString)), this, SLOT(handleNumName(QString)));
	disconnect(numLevelSpin, SIGNAL(valueChanged(int)), this, SLOT(handleNumLevel(int)));
	disconnect(numFormatCombo, SIGNAL(activated(int)), this, SLOT(handleNumFormat(int)));
	disconnect(numPrefix, SIGNAL(textChanged(QString)), this, SLOT(handleNumPrefix(QString)));
	disconnect(numSuffix, SIGNAL(textChanged(QString)), this, SLOT(handleNumSuffix(QString)));
	disconnect(numStart, SIGNAL(valueChanged(int)), this, SLOT(handleNumStart(int)));
	disconnect(peOffset_, SIGNAL(valueChanged(double)), this, SLOT(handlePEOffset(double)));
	disconnect(peIndent_, SIGNAL(toggled(bool)), this, SLOT(handlePEIndent(bool)));
	disconnect(peCharStyleCombo, SIGNAL(activated(QString)), this, SLOT(handlePECharStyle(QString)));
}

void PropertyWidget_ParEffect::configureWidgets(void)
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

void PropertyWidget_ParEffect::handleAppModeChanged(int oldMode, int mode)
{
	if (oldMode == modeEditTable || mode == modeEditTable)
	{
		setCurrentItem(m_item);
	}
}

void PropertyWidget_ParEffect::handleSelectionChanged()
{
	if (!m_doc || !m_ScMW || m_ScMW->scriptIsRunning())
		return;

	PageItem* currItem = currentItemFromSelection();
	setCurrentItem(currItem);
	updateGeometry();
	repaint();
}

void PropertyWidget_ParEffect::handleUpdateRequest(int updateFlags)
{
	if (updateFlags & reqCharStylesUpdate)
		updateCharStyles();
	if (updateFlags & reqStyleComboDocUpdate)
		setDoc(m_doc ? m_doc : 0);
	if (updateFlags & reqNumUpdate)
		fillNumerationsCombo();
}

void PropertyWidget_ParEffect::handleParEffectUse()
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
		newStyle.setNumFormat(numFormatCombo->currentIndex());
		newStyle.setNumLevel(numLevelSpin->value() -1);
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
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleBulletStr(QString bulStr)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	if (bulStr.isEmpty())
		bulStr = QChar(0x2022);
	newStyle.setBulletStr(bulStr);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleDropCapLines(int dcLines)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setDropCapLines(dcLines);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleNumName(QString numName)
{
	if (!m_doc || !m_item)
		return;
	disconnectSignals();
	ParagraphStyle newStyle;
	if (numName == "<local block>")
	{
		newStyle.setNumOther(true);
		newStyle.setNumHigher(true);
		newStyle.setNumRestart(NSRstory);
	}
	else
	{
		NumStruct * numS = m_doc->numerations.value(numName);
		Q_ASSERT(numS);
		int level = qMin(numLevelSpin->value(), numS->m_counters.count()) -1;
		numLevelSpin->setValue(level +1);
		newStyle.setNumLevel(level);
		Numeration num = numS->m_nums[level];
		numFormatCombo->setCurrentIndex((int) num.numFormat);
		numStart->setValue(num.start);
		numPrefix->setText(num.prefix);
		numSuffix->setText(num.suffix);
	}
	newStyle.setNumPrefix(numPrefix->text());
	newStyle.setNumSuffix(numSuffix->text());
	newStyle.setNumName(numName);
	newStyle.setNumFormat((NumFormat) numFormatCombo->currentIndex());
	handleChanges(m_item, newStyle);
	connectSignals();
}

void PropertyWidget_ParEffect::handleNumFormat(int style)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumFormat(style);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleNumLevel(int level)
{
	if (!m_doc || !m_item)
		return;
	if ((numComboBox->currentText() != "<local block>") && level == numLevelSpin->maximum())
	{
		NumStruct * numS = m_doc->numerations.value(numComboBox->currentText());
		Q_ASSERT(numS);
		while (level > numS->m_counters.count())
		{
			numS->m_counters.append(0);
			Numeration num;
			num.numFormat = (NumFormat) numFormatCombo->currentIndex();
			num.prefix = numPrefix->text();
			num.suffix = numSuffix->text();
			num.start = numStart->value();
			numS->m_nums.append(num);
		}
	}
	ParagraphStyle newStyle;
	newStyle.setNumLevel(level -1);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleNumPrefix(QString prefix)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumPrefix(prefix);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleNumSuffix(QString suffix)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumSuffix(suffix);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handleNumStart(int start)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setNumStart(start);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handlePEOffset(double offset)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setParEffectOffset(offset);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handlePEIndent(bool indent)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setParEffectIndent(indent);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::handlePECharStyle(QString name)
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	if (!name.isEmpty())
		newStyle.setPeCharStyleName(name);
	handleChanges(m_item, newStyle);
}

void PropertyWidget_ParEffect::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
		return;
	}
	QWidget::changeEvent(e);
}

void PropertyWidget_ParEffect::handleChanges(PageItem *item, ParagraphStyle &newStyle)
{
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->flag_Renumber = true;
		disconnect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
		disconnect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));

		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);

		connect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
		connect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
	}
}

void PropertyWidget_ParEffect::languageChange()
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

void PropertyWidget_ParEffect::openEnhanced()
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

void PropertyWidget_ParEffect::closeEnhanced(bool show)
{
	if (!m_enhanced || show)
		return;
	disconnect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(insertSpecialChars(const QString &)));
	disconnect(m_enhanced, SIGNAL(paletteShown(bool)), bulletCharTableButton_, SLOT(setChecked(bool)));
	m_enhanced->close();
	delete m_enhanced;
	m_enhanced = NULL;
}

void PropertyWidget_ParEffect::on_bulletCharTableButton__toggled(bool checked)
{
	if (m_enhanced && !checked)
		closeEnhanced();
	else if (!m_enhanced && checked)
		openEnhanced();
}
void PropertyWidget_ParEffect::insertSpecialChars(const QString &chars)
{
	if (bulletStrEdit_->lineEdit()->hasSelectedText())
		bulletStrEdit_->lineEdit()->del();
	bulletStrEdit_->lineEdit()->insert(chars);
}
