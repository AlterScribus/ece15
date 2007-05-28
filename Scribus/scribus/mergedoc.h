/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef MERGEDOC_H
#define MERGEDOC_H

#include <qdialog.h>
//Added by qt3to4:
#include <Q3VBoxLayout>
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <QLabel>
#include "scribusapi.h"
class QPushButton;
class QLabel;
class QLineEdit;
class QSpinBox;
class QString;
class QLayout;
class QToolTip;
class QComboBox;
class QCheckBox;
class QTooltip;
class Q3VBoxLayout;
class Q3HBoxLayout;
class Q3GridLayout;


class SCRIBUS_API MergeDoc : public QDialog
{
	Q_OBJECT

public:
	MergeDoc( QWidget* parent, bool importMasterPages, int targetDocPageCount = -1, int currentPage = 1 );
	~MergeDoc();

	const QString getFromDoc();
	const int getMasterPageNameItem();
	const QString getMasterPageNameText();
	const int getImportWhere();
	const int getImportWherePage();
	const bool getCreatePageChecked();
	const QString getPageNumbers();
	const int getPageCounter();

private:
	QLabel* fromDocLabel;
	QLabel* importPageLabel;
	QLabel* fromLabel;
	QLineEdit* pageNumberData;
	QLineEdit* fromDocData;
	QPushButton* importButton;
	QPushButton* cancelButton;
	QPushButton* changeButton;
	QCheckBox* createPageData;
	QComboBox* masterPageNameData;
	QComboBox* importWhereData;
	QSpinBox* importWherePageData;
	Q3VBoxLayout* dialogLayout;
	Q3GridLayout* fromInfoLayout;
	Q3HBoxLayout* importCancelLayout;
	int count;
	bool masterPages;

private slots:
	void changeFile();
	void checkDestPageStatus( int positionComboSelection );
	void enableCreateWidgets();

};

#endif // MERGEDOC_H
