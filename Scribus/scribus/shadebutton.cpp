/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "shadebutton.h"
#include "query.h"


ShadeButton::ShadeButton(QWidget* parent) : QToolButton(parent)
{
	QString tmp[] = {"0 %", "10 %", "20 %", "30 %", "40 %", "50 %", "60 %", "70 %", "80 %", "90 %", "100 %"};
	size_t array = sizeof(tmp) / sizeof(*tmp);
	FillSh = new QMenu();
	FillSh->addAction( tr("Other..."));
	for (uint a = 0; a < array; ++a)
		FillSh->addAction(tmp[a]);
//	setBackgroundMode(Qt::PaletteBackground);
	setMenu(FillSh);
	setPopupMode(QToolButton::InstantPopup);
	setText("100 %");
	FillSh->actions()[11]->setChecked(true);
// 	setAutoRaise(true);
	connect( FillSh, SIGNAL(activated(int)), this, SLOT(setShade(int)));
}

void ShadeButton::setShade(int id)
{
	bool ok = false;
	int a;
	int c;
	int b = 100;
	for (a = 0; a < FillSh->actions().count(); ++a)
	{
		FillSh->actions()[a]->setChecked(false);
	}
	c = id; // FillSh->indexOf(id);
	if (c < 0)
		return;
	FillSh->actions()[id]->setChecked(true);
	if (c > 0)
		b = (c-1) * 10;

	if (b > 100)
		return; // no need for > 100%, fix needed by SM, Riku
	
	if (c == 0)
	{
		Query* dia = new Query(this, "New", 1, 0, tr("&Shade:"), tr("Shade"));
		if (dia->exec())
    	{
			c = dia->getEditText().toInt(&ok);
			if (ok)
				b = qMax(qMin(c, 100),0);
			else
				b = 100;
			delete dia;
		}
		else
		{
			delete dia;
			return;
		}
	}
	setText(QString::number(b)+" %");
	emit clicked();
}

int ShadeButton::getValue()
{
	int l = text().length();
	QString tx = text().remove(l-2,2);
	return tx.toInt();
}

void ShadeButton::setValue(int val)
{
	for (int a = 0; a < FillSh->actions().count(); ++a)
	{
		FillSh->actions()[a]->setChecked(false);
	}
	if ((val % 10) == 0)
		FillSh->actions()[val/10+1]->setChecked(true);
	else
		FillSh->actions()[0]->setChecked(true);
	setText(QString::number(val)+" %");
}


