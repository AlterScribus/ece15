#ifndef NUMERATIONWIDGET_H
#define NUMERATIONWIDGET_H

#include "ui_numerationwidget.h"

class NumerationWidget : public QWidget, private Ui::NumerationWidget
{
	Q_OBJECT
	
public:
	explicit NumerationWidget(QWidget *parent = 0);
	
protected:
	void changeEvent(QEvent *e);
};

#endif // NUMERATIONWIDGET_H
