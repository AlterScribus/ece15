#include "ui/testingbase.h"
#include <ctime>
#include "scribus.h"

TestingBase::TestingBase(QWidget *parent) :
	QDialog(parent)
{
	setupUi(this);
	runs = 10;
	spinBox->setValue(runs);
}

void TestingBase::on_spinBox_valueChanged(int arg1)
{
    runs = spinBox->value();
}

void TestingBase::on_runButton_clicked()
{
	runButton->setEnabled(false);
	int f_num = 1;
	foreach (wskaznik func, functionsList)
	{
		progressBar->setMaximum(runs);
		clock_t totalTime = 0;
		for (long long i = 0; i < runs; ++i)
		{
			clock_t start = clock();
			(m_ScMW->*func)();
			clock_t finish = clock();
			totalTime += finish - start;
			progressBar->setValue(i+1);
		}
		progressBar->reset();

		int newRow = tableWidget->rowCount();
		tableWidget->insertRow(newRow);

		QString str = QString::number(f_num);
		QTableWidgetItem *item1 = new QTableWidgetItem(str);
		item1->setText(str);
		tableWidget->setItem(newRow, 0, item1);

		str = QString::number(runs);
		QTableWidgetItem *item2 = new QTableWidgetItem(str);
		item2->setText(str);
		tableWidget->setItem(newRow, 1, item2);

		str = QString::number(((double)(totalTime))/CLOCKS_PER_SEC);
		QTableWidgetItem *item3 = new QTableWidgetItem(str);
		item3->setText(str);
		tableWidget->setItem(newRow, 2, item3);
		
		str = QString::number((double)(totalTime)/(double)runs,'f',2);
		QTableWidgetItem *item4 = new QTableWidgetItem(str);
		item4->setText(str);
		tableWidget->setItem(newRow, 3, item4);
		
		++f_num;
	}
	runButton->setEnabled(true);
}
