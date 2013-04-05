#ifndef SEARCHREPLACEDIALOG_H
#define SEARCHREPLACEDIALOG_H

#include "ui_searchreplacedialog.h"
#include "scribusapi.h"
class ScrSpinBox;
class FontCombo;
class StyleSelect;
class ShadeButton;
class PrefsContext;
class ColorCombo;
class ScribusDoc;
class PageItem;

class SCRIBUS_API SearchReplaceDialog : public QDialog, private Ui::SearchreplaceDialog
{
	Q_OBJECT
	
public:
	explicit SearchReplaceDialog(QWidget *parent, ScribusDoc *doc, PageItem* ite, bool mode = true );
	void languageChange();
	void unitChange(int unitIndex);
	
protected:
	void changeEvent(QEvent *e);
	virtual void slotDoSearch();
	virtual void slotDoReplace();
	PageItem* Item;
	ScribusDoc* Doc;
	uint ReplStart;
	PrefsContext* prefs;
	bool NotFound;
	bool SMode;

public slots:
	virtual void slotSearch();
	virtual void slotReplace();
	virtual void slotReplaceAll();
	virtual void enableTxSearch();
	virtual void enableStyleSearch();
	virtual void enableAlignSearch();
	virtual void enableFontSearch();
	virtual void enableSizeSearch();
	virtual void enableEffSearch();
	virtual void enableFillSearch();
	virtual void enableFillSSearch();
	virtual void enableStrokeSearch();
	virtual void enableStrokeSSearch();
	virtual void enableTxReplace();
	virtual void enableStyleReplace();
	virtual void enableAlignReplace();
	virtual void enableFontReplace();
	virtual void enableSizeReplace();
	virtual void enableEffReplace();
	virtual void enableFillReplace();
	virtual void enableFillSReplace();
	virtual void enableStrokeReplace();
	virtual void enableStrokeSReplace();
	virtual void writePrefs();
	virtual void clear();

signals:
	void NewFont(const QString&);
	void NewAbs(int);

protected:
	QVBoxLayout* SearchReplaceLayout;
	QHBoxLayout* SelLayout;
	QGridLayout* SearchLayout;
	QGridLayout* ReplaceLayout;
	QHBoxLayout* OptsLayout;
	QHBoxLayout* ButtonsLayout;
	virtual void readPrefs();

	/// Number of matches found thus far in a search
	int matchesFound;private slots:
};

#endif // SEARCHREPLACEDIALOG_H
