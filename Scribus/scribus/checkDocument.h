/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef CHECKDOCUMENT_H
#define CHECKDOCUMENT_H

#include <qvariant.h>
#include <qpixmap.h>
#include <qpushbutton.h>
#include <qdialog.h>
//Added by qt3to4:
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <QLabel>

#include "scribusapi.h"
#include "scrpalettebase.h"

class Q3VBoxLayout;
class Q3HBoxLayout;
class Q3GridLayout;
class QSpacerItem;
class Q3ListView;
class Q3ListViewItem;
class QComboBox;
class QLabel;
class QPushButton;
class ScribusDoc;


/*! \brief Preflight Verifier GUI (P.V.)
A tool to check document for errors (in P.V. profiles)
which can be set up in Preferences dialog.
*/
class SCRIBUS_API CheckDocument : public ScrPaletteBase
{
	Q_OBJECT

public:
	CheckDocument( QWidget* parent, bool modal );
	~CheckDocument() {};

	/*! \brief State of the P.V. */
	enum CheckMode { checkNULL, checkPDF, checkEPS, checkPrint, checkPrintPreview };

	/*! \brief Clean the list view tree and reset the P.V. attributes. */
	void clearErrorList();
	/*! \brief Get all possible errors for given document
	\param doc a reference to the ScribusDoc */
	void buildErrorList(ScribusDoc *doc);
	/*! \brief Enable/disable "ignore" button and noButton property
	\param state true to enable the button */
	void setIgnoreEnabled(bool state);
	/*! \brief Get the state of the "ignore" button
	\retval true on button is visible */
	bool isIgnoreEnabled();

	//! \brief Current state of P.V.
	CheckMode checkMode;

public slots:
	/*! \brief Called when is selected a new item in error list.
	\param ite and item */
	void slotSelect(Q3ListViewItem* ite);
	/*!\brief Do a manual rechecking. */
	void doReScan();
	/*! \brief Process error checking itself.
	\param name a QString with P.V. profile name */
	void newScan(const QString& name);

signals:
	//void rescan();
	//! \brief Signal emitted when user selects any page item in error list.
	void selectElement(int, int);
	//! \brief Signal emitted when user selects any page in error list.
	void selectPage(int);
	//! \brief Signal emitted when user selects any master page in error list.
	void selectMasterPage(QString);
	//! \brief Signal emitted when user selects any master page item in error list.
	void selectMasterPageElement(QString, int);
	//void selectNormal();
	//! \brief Signal emitted when user press the "ignore errors" button.
	void ignoreAllErrors();

protected:
	Q3VBoxLayout* checkDocumentLayout;
	Q3HBoxLayout* layout1;
	Q3HBoxLayout* layout2;

protected slots:
	virtual void languageChange();

private:
	//! \brief Mappping Page Item - item nr.
	QMap<Q3ListViewItem*, int> itemMap;
	//! \brief Mappping Page - page nr.
	QMap<Q3ListViewItem*, int> pageMap;
	//! \brief Mappping Master Page - MP nr.
	QMap<Q3ListViewItem*, QString> masterPageMap;
	//! \brief Mappping MP Item - MP item nr.
	QMap<Q3ListViewItem*, int> masterPageItemMap;

	//! \brief a reference to the current document
	ScribusDoc* m_Doc;
	//! \brief Icon for fatal error
	QPixmap graveError;
	//! \brief Icon for warning
	QPixmap onlyWarning;
	//! \brief Icon for OK
	QPixmap noErrors;

	//! \brief Strings for common texts in GUI dialog tree
	QString missingGlyph;
	QString textOverflow;
	QString notOnPage;
	QString missingImg;
	QString lowDPI;
	QString highDPI;
	QString transpar;
	QString annot;
	QString rasterPDF;
	QString isGIF;
	QString isGIFtoolTip;
	QString WrongFont;

	//! \brief Flag if is ignore button shown. true = hidden, false = shown.
	bool noButton;
	QComboBox* curCheckProfile;
	QLabel* textLabel1;
	Q3ListView* reportDisplay;
	QPushButton* ignoreErrors;
	QPushButton* reScan;
};

#endif // CHECKDOCUMENT_H
