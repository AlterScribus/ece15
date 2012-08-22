#ifndef SMBULETTWIDGET_H
#define SMBULETTWIDGET_H

#include "ui_smbulettwidget.h"

class SMBulettWidget : public QWidget, private Ui::SMBulettWidget
{
	Q_OBJECT
	
public:
	explicit SMBulettWidget(QWidget *parent = 0);
	
protected:
	void changeEvent(QEvent *e);
};

#endif // SMBULETTWIDGET_H
