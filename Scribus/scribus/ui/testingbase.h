#ifndef TESTINGBASE_H
#define TESTINGBASE_H

#include "ui_testingbase.h"
class ScribusMainWindow;

typedef void (ScribusMainWindow::*wskaznik)(void);

class TestingBase : public QDialog, private Ui::testingBase
{
	Q_OBJECT
	
public:
	explicit TestingBase(QWidget *parent = 0);
	QList<wskaznik> functionsList;
	ScribusMainWindow* m_ScMW;
private slots:
	void on_spinBox_valueChanged(int arg1);
	void on_runButton_clicked();

private:
	long runs;
};

#endif // TESTINGBASE_H
