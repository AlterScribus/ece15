#include "propertywidget_columns.h"
#include "pageitem_textframe.h"
#include "pageitem_table.h"
#include "selection.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "ui/scrspinbox.h"
#include "ui/sctablewidget.h"

PropertyWidget_Columns::PropertyWidget_Columns(QWidget *parent) :
	QFrame(parent)
{
	setupUi(this);
	languageChange();
	columnsTableWidget->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
}

void PropertyWidget_Columns::configureWidgets()
{
	bool enabled = false;
	if (m_item && m_doc)
	{
		PageItem_TextFrame *textItem = m_item->asTextFrame();
		if (m_doc->appMode == modeEditTable)
			textItem = m_item->asTable()->activeCell().textFrame();
		
		enabled  = (textItem != NULL);
		enabled &= (m_doc->m_Selection->count() == 1);
	}
	if (enabled)
	{
		int numCols = m_item->Cols;
		bool enable = numCols >1 && !m_item->isAutoColumns();
		columnsTableWidget->setEnabled(enable);
		equalWidthsButton->setEnabled(enable);
		equalGapsButton->setEnabled(enable);
	}
	else
		m_item = NULL;
	setEnabled(enabled);
}

void PropertyWidget_Columns::setCurrentItem(PageItem *item)
{
	if (!m_ScMW || m_ScMW->scriptIsRunning())
		return;
	
	if (item && m_doc.isNull())
		setDoc(item->doc());
	
	m_item = item;
	
	configureWidgets();
	
	if (!m_item) return;
	
	bool signalsAreBlocked = signalsBlocked();
	blockSignalsWithChildrens(this, true);
	
	maxWidth = item->width() - (item->textToFrameDistLeft() + item->textToFrameDistRight() + item->getColumnsTotalGaps());
	if (item->lineColor() != CommonStrings::None)
		maxWidth -= item->m_lineWidth / 2.0;
	
	columnsSpinBox->setMaximum(qMax(qRound(maxWidth), 1));
	columnsSpinBox->setMinimum(1);
	columnsSpinBox->setValue(item->Cols);
	if (m_item->isAutoColumns())
	{
		proportionalBox->setChecked(true);
		gapSpinBox->setMaximum(maxWidth * m_unitRatio);
		gapSpinBox->setValue(m_item->ColGap);
		gapSpinBox->setEnabled(true);
		columnsTableWidget->setEnabled(false);
	}
	else
	{
		proportionalBox->setChecked(false);
		gapSpinBox->setValue(m_item->ColGap);
		gapSpinBox->setEnabled(false);
		columnsTableWidget->setEnabled(true);
		columnsTableWidget->clearContents();
		columnsTableWidget->setRowCount(item->Cols);
		for (int i=0; i < item->Cols; ++i)
		{
			//empty last columns
			QTableWidgetItem* emptyItem = new QTableWidgetItem();
			emptyItem->setFlags(emptyItem->flags() ^ Qt::ItemIsEditable);
			columnsTableWidget->setItem(i,3,emptyItem);
			
			Column col = item->columnsList.at(i);
			//column#
			QTableWidgetItem* numItem = new QTableWidgetItem();
			numItem->setFlags(numItem->flags() ^ Qt::ItemIsEditable);
			numItem->setData(Qt::UserRole, i);
			numItem->setText(QString::number(i+1));
			columnsTableWidget->setItem(i,0,numItem);
			
			//width
			ScrSpinBox* widthItem = new ScrSpinBox(NULL, m_unitIndex);
			widthItem->setRange(0.0, maxWidth * m_unitRatio);
			widthItem->setDecimals(2);
			widthItem->setSpecialValueText("auto");
			widthItem->setToolTip(widthToolTip);
			widthItem->setValue(col.autoWidth ? 0.0 : col.width);
			if (col.autoWidth)
				widthItem->setToolTip(widthToolTip + " [current width =" + QString::number(col.width) + "]");
			columnsTableWidget->setCellWidget(i,1,widthItem);
			connect(widthItem, SIGNAL(valueChanged(double)), this, SLOT(spinBoxChange(double)));
			
			//gap (not for last column)
			if (i < item->columnsList.count() -1)
			{
				ScrSpinBox* gapItem = new ScrSpinBox(NULL, m_unitIndex);
				gapItem->setRange(0.0, maxWidth * m_unitRatio);
				gapItem->setDecimals(2);
				gapItem->setValue(col.gap);
				columnsTableWidget->setCellWidget(i,2,gapItem);
				connect(gapItem, SIGNAL(valueChanged(double)), this, SLOT(spinBoxChange(double)));
			}
			else
			{
				emptyItem = new QTableWidgetItem();
				emptyItem->setFlags(emptyItem->flags() ^ Qt::ItemIsEditable);
				columnsTableWidget->setItem(i,2,emptyItem);
			}
		}
	}
	columnsTableWidget->resizeColumnsToContents();
	columnsTableWidget->resizeRowsToContents();
	columnsTableWidget->horizontalHeader()->resizeSections(QHeaderView::Stretch);
	blockSignalsWithChildrens(this, signalsAreBlocked);
}

void PropertyWidget_Columns::updateItem(bool recalculateColumns)
{
	PageItem *textItem = m_item;
	if (m_doc->appMode == modeEditTable)
		textItem = m_item->asTable()->activeCell().textFrame();
	if (!textItem)
		return;
	if (recalculateColumns)
		textItem->recalculateColumns();
	textItem->update();
	m_doc->regionsChanged()->update(QRect());
	setCurrentItem(m_item);
}

void PropertyWidget_Columns::connectSignals()
{
}

void PropertyWidget_Columns::disconnectSignals()
{
}

void PropertyWidget_Columns::changeEvent(QEvent *e)
{
	QFrame::changeEvent(e);
	switch (e->type()) {
		case QEvent::LanguageChange:
			retranslateUi(this);
		break;
		default:
		break;
	}
}

void PropertyWidget_Columns::setMainWindow(ScribusMainWindow *mw)
{
	m_ScMW = mw;
	
	connect(m_ScMW, SIGNAL(AppModeChanged(int, int)), this, SLOT(handleAppModeChanged(int, int)));
	connect(m_ScMW, SIGNAL(UpdateRequest(int))      , this, SLOT(handleUpdateRequest(int)));
}

void PropertyWidget_Columns::setDoc(ScribusDoc *d)
{
	if(d == (ScribusDoc*) m_doc)
		return;
	
	if (m_doc)
	{
		disconnect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
		disconnect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
	}
	
	m_doc  = d;
	m_item = NULL;
	
	if (m_doc.isNull())
	{
		setEnabled(false);
		return;
	}
	
	m_unitRatio   = m_doc->unitRatio();
	m_unitIndex   = m_doc->unitIndex();
	
	connect(m_doc->m_Selection, SIGNAL(selectionChanged()), this, SLOT(handleSelectionChanged()));
	connect(m_doc             , SIGNAL(docChanged())      , this, SLOT(handleSelectionChanged()));
}

void PropertyWidget_Columns::handleAppModeChanged(int oldMode, int mode)
{
	if (oldMode == modeEditTable || mode == modeEditTable)
	{
		setCurrentItem(m_item);
	}
}

void PropertyWidget_Columns::handleSelectionChanged()
{
	if (!m_doc || !m_ScMW || m_ScMW->scriptIsRunning())
		return;
	if (m_doc->m_Selection->count() != 1)
	{
		m_item = NULL;
		setEnabled(false);
	}
	else
	{
		PageItem* currItem = currentItemFromSelection();
		setCurrentItem(currItem);
	}
	updateGeometry();
	repaint();
}

void PropertyWidget_Columns::handleUpdateRequest(int)
{
	//nothing to do
}

void PropertyWidget_Columns::languageChange()
{
	columnsLabel->setText(tr("Columns"));
	
	QStringList labels;
	labels << tr("Column") << tr("Width") << tr("Gap");
	columnsTableWidget->setHorizontalHeaderLabels(labels);
	widthToolTip = tr("Set to 0 for automatic calculated column width");
}

void PropertyWidget_Columns::unitChange()
{
	if (!m_doc)
		return;
	
	m_unitRatio = m_doc->unitRatio();
	m_unitIndex = m_doc->unitIndex();
	
	if (columnsTableWidget->isEnabled())
	{
		blockSignalsWithChildrens(this, true);
		for (int col = 0; col < columnsSpinBox->value(); ++col)
		{
			dynamic_cast<ScrSpinBox*>(columnsTableWidget->cellWidget(col,1))->setNewUnit(m_unitIndex);
			dynamic_cast<ScrSpinBox*>(columnsTableWidget->cellWidget(col,2))->setNewUnit(m_unitIndex);
		}
		blockSignalsWithChildrens(this,false);
	}
}

void PropertyWidget_Columns::spinBoxChange(double val)
{
	ScrSpinBox* spin = dynamic_cast<ScrSpinBox*>(QObject::sender());
	QPair<int,int> rc = columnsTableWidget->getRCWidget(spin);
	int row = rc.first;
	int col = rc.second;
	if (row ==-1 || col ==-1)
	{
		qDebug() << "rc not found";
		return;
	}
	if (col == 1)
	{
		m_item->setColumnWidth(row, spin->value());
		updateItem(false);
	}
	else
	{
		m_item->setColumnGap(row, spin->value());
		updateItem();
	}
}

void PropertyWidget_Columns::on_columnsSpinBox_valueChanged(int arg1)
{
	m_item->setColumns(arg1);
	updateItem(false);
}

void PropertyWidget_Columns::on_gapSpinBox_valueChanged(double arg1)
{
	m_item->setColumnsGap(arg1);
	m_item->setAutoColumns();
	updateItem(false);
}

void PropertyWidget_Columns::on_proportionalBox_toggled(bool checked)
{
	if (checked)
	{
		m_item->setColumnsGap(gapSpinBox->value());
		m_item->Cols = columnsSpinBox->value();
		m_item->setAutoColumns(true);
	}
	else
		m_item->setAutoColumns(false);
	updateItem(false);
}

void PropertyWidget_Columns::on_equalWidthsButton_clicked()
{
	double colWidth = (maxWidth - m_item->getColumnsTotalGaps()) / m_item->Cols;
	for (int col = 0; col < columnsSpinBox->value(); ++col)
		m_item->setColumnWidth(col, colWidth);
	updateItem();
}

void PropertyWidget_Columns::on_equalGapsButton_clicked()
{
	//get gap value from first column
	double gap = dynamic_cast<ScrSpinBox*>(columnsTableWidget->cellWidget(0,2))->value();
	m_item->setColumnsGap(gap);
	updateItem();
}
