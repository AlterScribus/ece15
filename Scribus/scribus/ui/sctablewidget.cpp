/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "sctablewidget.h"

//Widgets supported
#include <QComboBox>
#include <QCheckBox>
#include <QDebug>
//Other includes
#include "ui/scrspinbox.h"

ScTableWidget::ScTableWidget(QWidget *parent) : QTableWidget(parent)
{
}

ScTableWidget::ScTableWidget( int rows, int columns, QWidget *parent) : QTableWidget(rows, columns, parent)
{
}

ScTableWidget::~ScTableWidget()
{
}

bool ScTableWidget::eventFilter(QObject *obj, QEvent *event)
{
	if (obj->isWidgetType())
	{
		int r=-1, c=-1;
		if (event->type() == QEvent::FocusIn)
		{
			QWidget* widget = qobject_cast<QWidget*>(obj);
			if (widget)
			{
				QPair<int,int> rc = getRCWidget(widget);
				r=rc.first;
				c=rc.second;
				setCurrentCell(r, c);
			}
		}
		//emulation of cellChanged event from QTableWidget
		if (event->type() == QEvent::FocusOut)
		{
			QWidget* widget = qobject_cast<QWidget*>(obj);
			if (widget)
			{
				QPair<int,int> rc = getRCWidget(widget);
				r=rc.first;
				c=rc.second;
			}
			if (r!=-1 && c!=-1)
				emit cellChanged(r,c);
		}
	}
	return QTableWidget::eventFilter(obj, event);
}

void ScTableWidget::setCellWidget(int row, int column, QWidget * widget)
{
	widget->installEventFilter(this);
	QTableWidget::setCellWidget(row, column, widget);
	widgetPositions.insert(widget, QPair<int, int>(row, column));
}

void ScTableWidget::removeCellWidget ( int row, int column )
{
	QTableWidget::removeCellWidget(row, column);
	QHash<QWidget*, QPair<int, int> >::const_iterator i = widgetPositions.constBegin();
	QWidget* t=NULL;
	while (i != widgetPositions.constEnd())
	{
		if (i.value().first==row && i.value().second==column)
		{
			t=i.key();
			break;
		}
		++i;
	}
	if (t!=NULL)
		widgetPositions.remove(t);
}

QPair<int, int> ScTableWidget::getRCWidget(QWidget *widget)
{
	int r=-1, c=-1;
	if (widgetPositions.contains(widget))
	{
		r=widgetPositions.value(widget).first;
		c=widgetPositions.value(widget).second;
	}
	return qMakePair(r,c);
}

void ScTableWidget::clearContents()
{
	widgetPositions.clear();
	QTableWidget::clearContents();
}

void ScTableWidget::clear()
{
	widgetPositions.clear();
	QTableWidget::clear();
}
