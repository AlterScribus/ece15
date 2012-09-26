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
#include "selection.h"
#include "units.h"
#include "util.h"

PropertyWidget_DropCap::PropertyWidget_DropCap(QWidget *parent) : QFrame(parent)
{
	m_item = 0;
	m_ScMW = 0;

    setupUi(this);
	setFrameStyle(QFrame::Box | QFrame::Plain);
	setLineWidth(1);
	layout()->setAlignment( Qt::AlignTop );

	languageChange();
	dropCapLines->setDecimals(0);

	if (!m_doc) return;
	peCharStyleCombo->updateFormatList();
	fillBulletStrEditCombo();
	fillNumStyleCombo();
	peOffRadio->setChecked(true);
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
			m_item->currentTextProps(parStyle, false);
		else if (m_doc->appMode == modeEditTable)
			m_item->asTable()->activeCell().textFrame()->currentTextProps(parStyle, false);
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
	if (!enable)
	{
		enableBullet(false);
		enableDropCap(false);
		enableNum(false);
	}
}

void PropertyWidget_DropCap::updateStyle(const ParagraphStyle& newCurrent)
{
	if (peOffRadio->isChecked() && !newCurrent.hasBullet() && !newCurrent.hasDropCap() && !newCurrent.hasNum())
		return;
	disconnectSignals ();
	if (newCurrent.hasDropCap())
	{
		if (!dropCapRadio_->isChecked())
			enableDropCap(true);
		dropCapLines->setValue(newCurrent.dropCapLines());
	}
	else if (newCurrent.hasBullet())
	{
		if (!bulletRadio_->isChecked())
			enableBullet(true);
		bulletStrEdit_->setEditText(newCurrent.bulletStr());
	}
	else if (newCurrent.hasNum())
	{
		if (!numRadio_->isChecked())
			enableNum(true);
		numStyleCombo->setCurrentIndex(newCurrent.numStyle());
		numPrefix->setText(newCurrent.numPrefix());
		numSuffix->setText(newCurrent.numSuffix());
		numLevelSpin->setValue(newCurrent.numLevel());
	}
	else
	{
		enableParEffect(false);
		connectSignals ();
		return;
	}
	enableParEffect(true);
	peOffset_->setValue(newCurrent.parEffectOffset() * m_unitRatio);
	displayCharStyle(newCurrent.peCharStyleName());
	connectSignals ();
}

void PropertyWidget_DropCap::connectSignals()
{
	connect(peOffRadio, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(dropCapRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(bulletRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(numRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()), Qt::UniqueConnection);
	connect(dropCapLines, SIGNAL(valueChanged(double)), this, SLOT(handleDropCapLines()), Qt::UniqueConnection);
	connect(bulletStrEdit_, SIGNAL(editTextChanged(QString)), this, SLOT(handleBulletStr(QString)), Qt::UniqueConnection);
	connect(numLevelSpin, SIGNAL(valueChanged(int)), this, SLOT(handleNumLevel(int)), Qt::UniqueConnection);
	connect(numStyleCombo, SIGNAL(activated(int)), this, SLOT(handleNumStyle(int)), Qt::UniqueConnection);
	connect(peOffset_, SIGNAL(valueChanged(double)), this, SLOT(handlePEOffset()), Qt::UniqueConnection);
	connect(peCharStyleCombo, SIGNAL(activated(int)), this, SLOT(handlePECharStyle()), Qt::UniqueConnection);
}

void PropertyWidget_DropCap::disconnectSignals()
{
	disconnect(peOffRadio, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(dropCapRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(bulletRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(numRadio_, SIGNAL(clicked()), this, SLOT(handleParEffectUse()));
	disconnect(dropCapLines, SIGNAL(valueChanged(double)), this, SLOT(handleDropCapLines()));
	disconnect(bulletStrEdit_, SIGNAL(editTextChanged(QString)), this, SLOT(handleBulletStr(QString)));
	disconnect(numLevelSpin, SIGNAL(valueChanged(int)), this, SLOT(handleNumLevel(int)));
	disconnect(numStyleCombo, SIGNAL(activated(int)), this, SLOT(handleNumStyle(int)));
	disconnect(peOffset_, SIGNAL(valueChanged(double)), this, SLOT(handlePEOffset()));
	disconnect(peCharStyleCombo, SIGNAL(activated(int)), this, SLOT(handlePECharStyle()));
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
	}
	else
	{
		newStyle.setHasDropCap(false);
		newStyle.setHasBullet(false);
		newStyle.setHasNum(false);
	}
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
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleDropCapLines()
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setDropCapLines(static_cast<int>(dropCapLines->value()));
	PageItem *item = m_doc->m_Selection->itemAt(0);
	if (m_doc->appMode == modeEditTable)
		item = item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->itemSelection_ApplyParagraphStyle(newStyle, &tempSelection);
	}
}

void PropertyWidget_DropCap::handleNumStyle(int)
{
}

void PropertyWidget_DropCap::handleNumLevel(int)
{
}

void PropertyWidget_DropCap::handlePEOffset()
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	newStyle.setParEffectOffset(peOffset_->value());
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

void PropertyWidget_DropCap::handlePECharStyle()
{
	if (!m_doc || !m_item)
		return;
	ParagraphStyle newStyle;
	QString name = peCharStyleCombo->currentText();
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
	peOffsetLabel->setText(tr("Drop Caps offset"));
	peCharStyleLabel->setText(tr("Drop Cap use character style..."));
	peCharStyleCombo->setToolTip("<qt>" + tr("Choose chracter style or leave blank for use default paragraph style"));
}

