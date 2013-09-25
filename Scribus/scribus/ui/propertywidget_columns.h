#ifndef PROPERTYWIDGET_COLUMNS_H
#define PROPERTYWIDGET_COLUMNS_H

#include "ui_propertywidget_columns.h"
#include "propertywidgetbase.h"
#include "scribusapi.h"

class ScribusDoc;
class ScribusMainWindow;


class SCRIBUS_API PropertyWidget_Columns : public QFrame, public Ui::PropertyWidget_Columns, public PropertyWidgetBase
{
	Q_OBJECT
	
public:
	explicit PropertyWidget_Columns(QWidget *parent);
	void connectSignals();
	void disconnectSignals();
	
protected:
	PageItem *         m_item;
	ScribusMainWindow* m_ScMW;

	double m_unitRatio;
	int    m_unitIndex;
	double maxWidth;
	
	QString widthToolTip;
	QString gapToolTip;

	void configureWidgets();
	void setCurrentItem(PageItem *item);
	void updateItem(bool recalculateColumns=true);

	virtual void changeEvent(QEvent *e);
public slots:
	void setMainWindow(ScribusMainWindow *mw);
	void setDoc(ScribusDoc *d);

	void handleAppModeChanged(int oldMode, int mode);
	void handleSelectionChanged();
	void handleUpdateRequest(int);

	void languageChange();
	void unitChange();

private slots:
	void spinBoxChange(double);
	void on_columnsSpinBox_valueChanged(int arg1);
	void on_proportionalBox_toggled(bool checked);
	void on_gapSpinBox_valueChanged(double arg1);
	void on_equalWidthsButton_clicked();
	void on_equalGapsButton_clicked();
};

#endif // PROPERTYWIDGET_COLUMNS_H
