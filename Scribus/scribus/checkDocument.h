#ifndef CHECKDOCUMENT_H
#define CHECKDOCUMENT_H

#include <qvariant.h>
#include <qpixmap.h>
#include <qdialog.h>

#include "scrpalettebase.h"

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QSpacerItem;
class QListView;
class QListViewItem;
class QComboBox;
class QLabel;
class ScribusDoc;

class CheckDocument : public ScrPaletteBase
{
	Q_OBJECT

public:
	CheckDocument( QWidget* parent, bool modal );
	~CheckDocument() {};
	void clearErrorList();
	void buildErrorList(ScribusDoc *doc);
	/*
	void closeEvent(QCloseEvent *ce);
	void keyPressEvent(QKeyEvent *ke);
	*/
	QComboBox* curCheckProfile;
	QLabel* textLabel1;
	QListView* reportDisplay;
	QMap<QListViewItem*, int> itemMap;
	QMap<QListViewItem*, int> pageMap;
	QMap<QListViewItem*, QString> templatePageMap;
	QMap<QListViewItem*, int> templateItemMap;

public slots:
	void slotSelect(QListViewItem* ite);
	void newScan(const QString&);

signals:
	void rescan();
	//void closePal(bool);
	void selectElement(int, int);
	void selectPage(int);
	void selectTemplatePage(QString);
	void selectTemplateElement(QString, int);
	void selectNormal();

protected:
	QVBoxLayout* checkDocumentLayout;
	QHBoxLayout* layout1;

protected slots:
	virtual void languageChange();

private:
	ScribusDoc* document;
	QPixmap graveError;
	QPixmap onlyWarning;
	QPixmap noErrors;

};

#endif // CHECKDOCUMENT_H
