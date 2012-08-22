#include "smbulettwidget.h"

SMBulettWidget::SMBulettWidget(QWidget *parent) :
	QWidget(parent)
{
	setupUi(this);
}

void SMBulettWidget::changeEvent(QEvent *e)
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
