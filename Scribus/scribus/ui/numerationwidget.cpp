#include "numerationwidget.h"

NumerationWidget::NumerationWidget(QWidget *parent) :
	QWidget(parent)
{
	setupUi(this);
}

void NumerationWidget::changeEvent(QEvent *e)
{
	QWidget::changeEvent(e);
	switch (e->type()) {
		case QEvent::LanguageChange:
			retranslateUi(this);
			break;
		default:
			break;
	}
}
