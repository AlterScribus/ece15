/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef PREFS_TABLEOFCONTENTS_H
#define PREFS_TABLEOFCONTENTS_H

#include <QStringList>

#include "ui_prefs_tableofcontentsbase.h"
//#include "page.h"
#include "pagestructs.h"
#include "prefs_pane.h"
#include "prefsstructs.h"
#include "scribusapi.h"

class ScribusDoc;

class SCRIBUS_API Prefs_TableOfContents : public Prefs_Pane, Ui::Prefs_TableOfContents
{
	Q_OBJECT
	
public:
	Prefs_TableOfContents(QWidget* parent, ScribusDoc* doc=NULL);
	~Prefs_TableOfContents();
	virtual void restoreDefaults(struct ApplicationPrefs *prefsData);
	virtual void saveGuiToPrefs(struct ApplicationPrefs *prefsData) const;
	virtual void changeEvent(QEvent *e);
	virtual void enableGUIWidgets();
public slots:
	void languageChange();
	virtual void generatePageItemList();
	virtual void setupItemAttrs( QStringList newNames );
	virtual void selectToC( int numberSelected );
	virtual void addToC();
	virtual void updateToCListBox();
	virtual void updateParagraphStyleComboBox();
	virtual void deleteToC();
	virtual void itemAttributeSelected( const QString & itemAttributeName );
	virtual void itemFrameSelected( const QString & frameName );
	virtual void itemPageNumberPlacedSelected( const int pageLocation );
	virtual void itemParagraphStyleSelected( const QString & itemStyle );
	virtual void setToCName( const QString & newName );
	virtual void nonPrintingFramesSelected( bool showNonPrinting );
	
protected:
	ScribusDoc* m_Doc;
	int numSelected;
	int levelSelected;
	QString trStrPNNotShown;
	QString trStrPNEnd;
	QString trStrPNBeginning;
	ToCSetupVector localToCSetupVector;
	QString selectedTOCAttrName;
	QStringList paragraphStyleList;
	QStringList docAttributesList;
	
private slots:
	void on_itemAttrRadio_clicked();
	void on_paraStyleRadio_clicked();
	void on_levelAddButton_clicked();
	void on_levelDelButton_clicked();
	void on_levelSpin_valueChanged(int arg1);
	void on_rangeCombo_currentIndexChanged(int index);
	void on_limitSpin_valueChanged(int arg1);
	
private:
	void destroy();
	void toglePStyle_ItemAttr(bool itemMode);
	void setBlockSignals(bool block);
	void setupAttrComboForPStyleMode();
	void showTOCLevel();
};

#endif // PREFS_TABLEOFCONTENTS_H
