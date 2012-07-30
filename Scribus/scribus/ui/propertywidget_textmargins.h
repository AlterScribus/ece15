#ifndef PROPERTYWIDGET_TEXTMARGINS_H
#define PROPERTYWIDGET_TEXTMARGINS_H

#include "ui_propertywidget_textmarginsbase.h"
#include "propertywidgetbase.h"

class PageItem;
class ParagraphStyle;
class ScribusMainWindow;

class PropertyWidget_TextMargins : public QFrame, private Ui::PropertyWidget_TextMarginsBase, public PropertyWidgetBase
{
	Q_OBJECT
	
public:
	explicit PropertyWidget_TextMargins(QWidget *parent = 0);
	~PropertyWidget_TextMargins() {}
	
	void updateStyle(const ParagraphStyle &newCurrent) { displayMargins(newCurrent); }

protected:
	PageItem *         m_item;
	ScribusMainWindow* m_ScMW;
	double m_unitRatio;
	int    m_unitIndex;

	void connectSignals();
	void disconnectSignals();

	void configureWidgets(void);
	void setCurrentItem(PageItem *item);

	virtual void changeEvent(QEvent *e);

public slots:
	void setMainWindow(ScribusMainWindow *mw);
	void setDoc(ScribusDoc *d);

	void handleAppModeChanged(int oldMode, int mode);
	void handleSelectionChanged();
	void handleUpdateRequest(int);

	void languageChange();
	void unitChange();

	void displayMargins(const ParagraphStyle& pStyle);

private slots:
	void handleMargins();
	void resetMargins();
};

#endif // PROPERTYWIDGET_TEXTMARGINS_H