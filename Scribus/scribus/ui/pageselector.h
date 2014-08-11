/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef PAGESELECTOR_H
#define PAGESELECTOR_H

#include <QWidget>

class QEvent;
class QHBoxLayout;
class QLabel;
class QLineEdit;
class QPushButton;
class QToolButton;
class QIntValidator;

#include "scribusapi.h"
#include "styleoptions.h"

class ScComboBox;

class SCRIBUS_API PageSelector : public QWidget
{
	Q_OBJECT

public:
	PageSelector( QWidget* parent, int maxPg = 0 );
	~PageSelector() {};
	
	virtual void changeEvent(QEvent *e);
	
	bool hasFocus();
	void focusPolicy(Qt::FocusPolicy policy);
	void setFont ( const QFont & );
	int getCurrentPage();

#if OPTION_USE_QTOOLBUTTON
	QToolButton* startButton;
	QToolButton* backButton;
	QToolButton* forwardButton;
	QToolButton* lastButton;
#else
	QPushButton* startButton;
	QPushButton* backButton;
	QPushButton* forwardButton;
	QPushButton* lastButton;
#endif



public slots:
	virtual void setGUIForPage(int i);
	virtual void setMaximum(int i);
	void languageChange();
	void clearFocus();

private slots:
	virtual void GotoPgE(int);
	virtual void GotoPage();
	virtual void goToStart();
	virtual void goToEnd();
	virtual void goBackward();
	virtual void goForward();

protected:
	QHBoxLayout *PageSelectorLayout;
	QLabel *pageCountLabel;
	QString PageCountString;
	int m_lastPage;
	int m_currentPage;

	ScComboBox *m_pageCombo;
	QIntValidator *m_validator;

signals:
	void GotoPage(int);

};

#endif // PAGESELECTOR_H
