#include "propertywidget_textmargins.h"
#include "pageitem_textframe.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "selection.h"
//#include "tabmanager.h"
#include "units.h"
//#include "util_icon.h"

PropertyWidget_TextMargins::PropertyWidget_TextMargins(QWidget *parent) : QFrame(parent)
{
	m_item = 0;
	m_ScMW = 0;

	setupUi(this);

	setFrameStyle(QFrame::Box | QFrame::Plain);
	setLineWidth(1);

	layout()->setAlignment( Qt::AlignTop );
	firstLabel->setBuddy(firstLine);
	firstLine->setValues(-9999,9999,2,0);
	leftLabel->setBuddy(leftIndent);
	leftIndent->setValues(0,9999,2,0);
	rightLabel->setBuddy(rightIndent);
	rightIndent->setValues(-9999,9999,2,0);
	aboveLabel->setBuddy(spaceAbove);
	spaceAbove->setValues(-9999,9999,2,0);
	belowLabel->setBuddy(spaceBelow);
	spaceBelow->setValues(-9999,9999,2,0);

	languageChange();
}

void PropertyWidget_TextMargins::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
		return;
	}
	QWidget::changeEvent(e);
}

void PropertyWidget_TextMargins::setMainWindow(ScribusMainWindow *mw)
{
	m_ScMW = mw;

	connect(m_ScMW, SIGNAL(AppModeChanged(int, int)), this, SLOT(handleAppModeChanged(int, int)));
	connect(m_ScMW, SIGNAL(UpdateRequest(int))      , this, SLOT(handleUpdateRequest(int)));
}

void PropertyWidget_TextMargins::setDoc(ScribusDoc *d)
{
	if(d == (ScribusDoc*) m_doc)
		return;

	if (m_doc)
	{
		disconnect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
//		disconnect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
	}

	m_doc  = d;
	m_item = NULL;

	if (m_doc.isNull())
	{
		disconnectSignals();
		return;
	}

	m_unitRatio   = m_doc->unitRatio();
	m_unitIndex   = m_doc->unitIndex();

	firstLine->setDecimals(2);
	leftIndent->setDecimals(2);
	rightIndent->setDecimals(2);
	spaceAbove->setDecimals(2);
	spaceBelow->setDecimals(2);

	connect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
//	connect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
}

void PropertyWidget_TextMargins::handleAppModeChanged(int oldMode, int mode)
{
	if (oldMode == modeEditTable || mode == modeEditTable)
	{
		setCurrentItem(m_item);
	}
}

void PropertyWidget_TextMargins::handleSelectionChanged()
{
	if (!m_doc || !m_ScMW || m_ScMW->scriptIsRunning())
		return;

	PageItem* currItem = currentItemFromSelection();
	setCurrentItem(currItem);
	updateGeometry();
	repaint();
}

void PropertyWidget_TextMargins::handleUpdateRequest(int)
{
}

void PropertyWidget_TextMargins::languageChange()
{
	firstLabel->setText( tr("First Line Indent") );
	leftLabel->setText( tr("Left Indent") );
	rightLabel->setText( tr("Right Indent") );
	aboveLabel->setText( tr("Space Above") );
	belowLabel->setText( tr("Space Below") );
	resetButton->setText( tr("Reset") );
}

void PropertyWidget_TextMargins::unitChange()
{
	if (!m_doc)
		return;

	m_unitRatio = m_doc->unitRatio();
	m_unitIndex = m_doc->unitIndex();

	firstLine->blockSignals(true);
	leftIndent->blockSignals(true);
	rightIndent->blockSignals(true);
	spaceAbove->blockSignals(true);
	spaceBelow->blockSignals(true);

	firstLine->setNewUnit( m_unitIndex );
	leftIndent->setNewUnit( m_unitIndex );
	rightIndent->setNewUnit( m_unitIndex );
	spaceAbove->setNewUnit( m_unitIndex );
	spaceBelow->setNewUnit( m_unitIndex );

	firstLine->blockSignals(false);
	leftIndent->blockSignals(false);
	rightIndent->blockSignals(false);
	spaceAbove->blockSignals(false);
	spaceBelow->blockSignals(false);
}

void PropertyWidget_TextMargins::displayMargins(const ParagraphStyle &pStyle)
{
	bool blocked = firstLine->blockSignals(true);
	leftIndent->blockSignals(true);
	rightIndent->blockSignals(true);
	spaceAbove->blockSignals(true);
	spaceBelow->blockSignals(true);

	firstLine->setValue(pStyle.firstIndent());
	leftIndent->setValue(pStyle.leftMargin());
	rightIndent->setValue(pStyle.rightMargin());
	spaceAbove->setValue(pStyle.gapBefore());
	spaceBelow->setValue(pStyle.gapAfter());

	firstLine->blockSignals(blocked);
	leftIndent->blockSignals(blocked);
	rightIndent->blockSignals(blocked);
	spaceAbove->blockSignals(blocked);
	spaceBelow->blockSignals(blocked);
}

void PropertyWidget_TextMargins::handleMargins()
{
	if (!m_doc || !m_item || !m_ScMW || m_ScMW->scriptIsRunning())
		return;
	PageItem *item = m_item;
//	if (m_doc->appMode == modeEditTable)
//		item = m_item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->itemSelection_SetIndentsMargins(firstLine->value(), leftIndent->value(), rightIndent->value(), spaceAbove->value(), spaceBelow->value(), &tempSelection);
	}
}

void PropertyWidget_TextMargins::resetMargins()
{
	if (!m_doc || !m_item || !m_ScMW || m_ScMW->scriptIsRunning())
		return;
	PageItem *item = m_item;
//	if (m_doc->appMode == modeEditTable)
//		item = m_item->asTable()->activeCell().textFrame();
	if (item != NULL)
	{
		Selection tempSelection(this, false);
		tempSelection.addItem(item, true);
		m_doc->itemSelection_resetIndentsMargins(&tempSelection);
		setCurrentItem(item);
	}
}

void PropertyWidget_TextMargins::connectSignals()
{
	connect(firstLine, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()), Qt::UniqueConnection);
	connect(leftIndent, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()), Qt::UniqueConnection);
	connect(rightIndent, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()), Qt::UniqueConnection);
	connect(spaceAbove, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()), Qt::UniqueConnection);
	connect(spaceBelow, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()), Qt::UniqueConnection);
	connect(resetButton, SIGNAL(clicked()), this, SLOT(resetMargins()) );
}

void PropertyWidget_TextMargins::disconnectSignals()
{
	disconnect(firstLine, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()));
	disconnect(leftIndent, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()));
	disconnect(rightIndent, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()));
	disconnect(spaceAbove, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()));
	disconnect(spaceBelow, SIGNAL(valueChanged(double)), this, SLOT(handleMargins()));
	disconnect(resetButton, SIGNAL(clicked()), this, SLOT(resetMargins()) );
}

void PropertyWidget_TextMargins::configureWidgets()
{
	bool enabled = false;
	if (m_item && m_doc)
	{
		PageItem_TextFrame* textItem = m_item->asTextFrame();
//		if (m_doc->appMode == modeEditTable)
//			textItem = m_item->asTable()->activeCell().textFrame();

		enabled  = (m_item->isPathText() || (textItem != NULL));
		enabled &= (m_doc->m_Selection->count() == 1);
	}
	setEnabled(enabled);
}

void PropertyWidget_TextMargins::setCurrentItem(PageItem *item)
{
	if (!m_ScMW || m_ScMW->scriptIsRunning())
		return;
	if (item && m_doc.isNull())
		setDoc(item->doc());

	m_item = item;

	disconnectSignals();
	configureWidgets();

	if (m_item)
	{
		if (m_item->asTextFrame() || m_item->asPathText())
		{
			ParagraphStyle parStyle =  m_item->itemText.defaultStyle();
			if (m_doc->appMode == modeEdit)
				m_item->currentTextProps(parStyle);
			displayMargins(parStyle);
		}

		connectSignals();
	}
}
