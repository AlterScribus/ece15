#include "muster.h"
#include "muster.moc"
#include "newtemp.h"
#include "mergedoc.h"
#include <qlayout.h>
#include <qlistbox.h>
#include <qpushbutton.h>
#include <qmessagebox.h>
#include <qcursor.h>
#include <qstring.h>
#include <qtooltip.h>
#include "scribusdoc.h"
#include "scribusview.h"
#include "util.h"

MasterPagesPalette::MasterPagesPalette( QWidget* parent, ScribusDoc *pCurrentDoc, ScribusView *pCurrentView, QString masterPageName)
		: QDialog( parent, "Muster", false, WDestructiveClose)
{
	setCaption( tr( "Edit Master Pages" ) );
	setIcon(loadIcon("AppIcon.png"));
	currentDoc = pCurrentDoc;
	currentView = pCurrentView;
	masterPagesLayout = new QVBoxLayout( this, 5, 5 );
	buttonLayout = new QHBoxLayout;
	buttonLayout->setSpacing( 5 );
	buttonLayout->setMargin( 0 );
	importButton = new QToolButton(this, "importButton" );
	importButton->setPixmap(loadIcon("fileopen.png"));
	newButton = new QToolButton(this, "newButton" );
	newButton->setPixmap(loadIcon("filenew.png"));
	duplicateButton = new QToolButton(this, "DublicateB" );
	duplicateButton->setPixmap(loadIcon("editcopy22.png"));
	deleteButton = new QToolButton(this, "deleteButton" );
	deleteButton->setPixmap(loadIcon("edittrash.png"));
	buttonLayout->addWidget( newButton );
	buttonLayout->addWidget( duplicateButton );
	buttonLayout->addWidget( importButton );
	buttonLayout->addWidget( deleteButton );
	masterPagesLayout->addLayout( buttonLayout );
	masterPageData = new QListBox( this, "masterPageData" );
	masterPageData->setMinimumSize( QSize( 100, 240 ) );
	masterPagesLayout->addWidget( masterPageData );


	if (masterPageName.isEmpty())
	{
		sMuster = "Normal";
		updateMasterPageList(sMuster);
		currentView->showMasterPage(0);
	}
	else
	{
		sMuster = masterPageName;
		updateMasterPageList(sMuster);
		currentView->showMasterPage(currentDoc->MasterNames[sMuster]);
	}

	setMaximumSize(sizeHint());

	QToolTip::add( duplicateButton, tr( "Duplicates the selected master page" ) );
	QToolTip::add( deleteButton, tr( "Deletes the selected master page" ) );
	QToolTip::add( newButton, tr( "Adds a new master page" ) );
	QToolTip::add( importButton, tr( "Imports master pages from another document" ) );
	// signals and slots connections
	connect(duplicateButton, SIGNAL(clicked()), this, SLOT(duplicateMasterPage()));
	connect(deleteButton, SIGNAL(clicked()), this, SLOT(deleteMasterPage()));
	connect(newButton, SIGNAL(clicked()), this, SLOT(newMasterPage()));
	connect(importButton, SIGNAL(clicked()), this, SLOT(appendPage()));
	connect(masterPageData, SIGNAL(highlighted(QListBoxItem*)), this, SLOT(selectMasterPage(QListBoxItem*)));
}

void MasterPagesPalette::reject()
{
	emit finished();
	QDialog::reject();
}

void MasterPagesPalette::closeEvent(QCloseEvent *closeEvent)
{
	emit finished();
	closeEvent->accept();
}

void MasterPagesPalette::deleteMasterPage()
{
	if (sMuster == "Normal")
		return;
	int exit=QMessageBox::warning(this,
	                              tr("Warning"),
	                              tr("Do you really want to delete this master page?"),
	                              tr("&No"),
	                              tr("&Yes"),
	                              0, QMessageBox::No, QMessageBox::Yes);
	if (exit == 1)
	{
		currentDoc->pageCount = currentDoc->Pages.count();
		emit removePage(currentDoc->MasterNames[sMuster]);
		currentDoc->MasterNames.clear();
		for (uint a = 0; a < currentDoc->Pages.count(); ++a)
			currentDoc->MasterNames[currentDoc->Pages.at(a)->PageNam] = currentDoc->Pages.at(a)->PageNr;
		for (uint b = 0; b < currentDoc->DocPages.count(); ++b)
		{
			if (currentDoc->DocPages.at(b)->MPageNam == sMuster)
				currentDoc->DocPages.at(b)->MPageNam = "Normal";
		}
		currentDoc->pageCount = 1;
		sMuster = "Normal";
		updateMasterPageList(sMuster);
		currentDoc->MasterPages = currentDoc->Pages;
		emit docAltered(currentDoc);
	}
}

void MasterPagesPalette::duplicateMasterPage()
{
	QString MasterPageName;
	int nr;
	bool atf;
	struct CopyPasteBuffer Buffer;
	NewTm *dia = new NewTm(this, tr("&Name:"), tr("New Master Page"), currentDoc);
	dia->Answer->setText( tr("Copy of %1").arg(sMuster));
	dia->Answer->selectAll();
	if (dia->exec())
	{
		MasterPageName = dia->Answer->text();
		while (currentDoc->MasterNames.contains(MasterPageName) || (MasterPageName == "Normal"))
		{
			if (!dia->exec())
			{
				delete dia;
				return;
			}
			MasterPageName = dia->Answer->text();
		}
		nr = currentDoc->Pages.count();
		currentDoc->MasterNames.insert(MasterPageName, nr);
		currentDoc->pageCount = 0;
		atf = currentDoc->PageAT;
		currentDoc->PageAT = false;
		emit createNew(nr);
		currentDoc->setLoading(true);
		if (currentDoc->currentPageLayout == doublePage)
			currentDoc->Pages.at(nr)->LeftPg = dia->Links->currentItem() == 0 ? true : false;
		int inde = currentDoc->MasterNames[sMuster];
		QMap<int,int> TableID;
		QPtrList<PageItem> TableItems;
		TableID.clear();
		TableItems.clear();
		if (currentDoc->Pages.at(inde)->YGuides.count() != 0)
		{
			currentDoc->currentPage->YGuides.clear();
			for (uint y = 0; y < currentDoc->Pages.at(inde)->YGuides.count(); ++y)
			{
				currentDoc->currentPage->YGuides.append(currentDoc->Pages.at(inde)->YGuides[y]);
			}
			qHeapSort(currentDoc->currentPage->YGuides);
		}
		if (currentDoc->Pages.at(inde)->XGuides.count() != 0)
		{
			for (uint x = 0; x < currentDoc->Pages.at(inde)->XGuides.count(); ++x)
			{
				currentDoc->currentPage->XGuides.append(currentDoc->Pages.at(inde)->XGuides[x]);
			}
			qHeapSort(currentDoc->currentPage->XGuides);
		}
		uint end = currentDoc->Items.count();
		for (uint a = 0; a < end; ++a)
		{
			if (currentDoc->Items.at(a)->OwnPage == inde)
			{
				//CopyPageItem(&Buffer, currentDoc->Items.at(a));
				currentDoc->Items.at(a)->copyToCopyPasteBuffer(&Buffer);
				currentView->PasteItem(&Buffer, true, true);
				PageItem* Neu = currentDoc->Items.at(currentDoc->Items.count()-1);
				if (Neu->isTableItem)
				{
					TableItems.append(Neu);
					TableID.insert(a, Neu->ItemNr);
				}
			}
		}
		if (TableItems.count() != 0)
		{
			for (uint ttc = 0; ttc < TableItems.count(); ++ttc)
			{
				PageItem* ta = TableItems.at(ttc);
				if (ta->TopLinkID != -1)
					ta->TopLink = currentDoc->Items.at(TableID[ta->TopLinkID]);
				else
					ta->TopLink = 0;
				if (ta->LeftLinkID != -1)
					ta->LeftLink = currentDoc->Items.at(TableID[ta->LeftLinkID]);
				else
					ta->LeftLink = 0;
				if (ta->RightLinkID != -1)
					ta->RightLink = currentDoc->Items.at(TableID[ta->RightLinkID]);
				else
					ta->RightLink = 0;
				if (ta->BottomLinkID != -1)
					ta->BottomLink = currentDoc->Items.at(TableID[ta->BottomLinkID]);
				else
					ta->BottomLink = 0;
			}
		}
		currentView->Deselect(true);
		currentView->DrawNew();
		currentDoc->Pages.at(nr)->setPageName(MasterPageName);
		currentDoc->Pages.at(nr)->MPageNam = "";
		updateMasterPageList(MasterPageName);
		currentDoc->PageAT = atf;
		currentDoc->MasterPages = currentDoc->Pages;
		currentDoc->setLoading(false);
		currentView->DrawNew();
		emit docAltered(currentDoc);
	}
	delete dia;
}

void MasterPagesPalette::newMasterPage()
{
	QString MasterPageName;
	int nr;
	bool atf;
	NewTm *dia = new NewTm(this, tr("Name:"), tr("New MasterPage"), currentDoc);
	dia->Answer->setText( tr("New Master Page"));
	dia->Answer->selectAll();
	if (dia->exec())
	{
		MasterPageName = dia->Answer->text();
		while (currentDoc->MasterNames.contains(MasterPageName) || (MasterPageName == "Normal"))
		{
			if (!dia->exec())
			{
				delete dia;
				return;
			}
			MasterPageName = dia->Answer->text();
		}
		nr = currentDoc->Pages.count();
		currentDoc->MasterNames.insert(MasterPageName, nr);
		currentDoc->pageCount = 0;
		atf = currentDoc->PageAT;
		currentDoc->PageAT = false;
		emit createNew(nr);
		if (currentDoc->currentPageLayout == doublePage)
			currentDoc->Pages.at(nr)->LeftPg = dia->Links->currentItem() == 0 ? true : false;
		currentDoc->Pages.at(nr)->setPageName(MasterPageName);
		currentDoc->Pages.at(nr)->MPageNam = "";
		updateMasterPageList(MasterPageName);
		currentDoc->PageAT = atf;
		currentView->showMasterPage(currentDoc->MasterNames[MasterPageName]);
		currentDoc->MasterPages = currentDoc->Pages;
		emit docAltered(currentDoc);
	}
	delete dia;
}

void MasterPagesPalette::appendPage()
{
	QString MasterPageName, MasterPageName2;
	int nr;
	bool atf;
	MergeDoc *dia = new MergeDoc(this, true);
	if (dia->exec())
	{
		qApp->setOverrideCursor(QCursor(waitCursor), true);
		nr = currentDoc->Pages.count();
		currentDoc->pageCount = 0;
		atf = currentDoc->PageAT;
		currentDoc->PageAT = false;
		emit createNew(nr);
		qApp->processEvents();
		emit loadPage(dia->getFromDoc(), dia->getMasterPageNameItem(), true);
		qApp->processEvents();
		MasterPageName = currentDoc->Pages.at(nr)->PageNam;
		MasterPageName2 = MasterPageName;
		int copyC = 1;
		while (currentDoc->MasterNames.contains(MasterPageName2))
		{
			MasterPageName2 = tr("Copy #%1 of ").arg(copyC)+MasterPageName;
			copyC++;
		}
		currentDoc->MasterNames.insert(MasterPageName2, nr);
		currentDoc->Pages.at(nr)->setPageName(MasterPageName2);
		currentDoc->Pages.at(nr)->MPageNam = "";
		updateMasterPageList(MasterPageName2);
		currentDoc->PageAT = atf;
		currentView->showMasterPage(currentDoc->MasterNames[MasterPageName2]);
		qApp->setOverrideCursor(QCursor(arrowCursor), true);
		currentDoc->MasterPages = currentDoc->Pages;
		emit docAltered(currentDoc);
	}
	delete dia;
}

void MasterPagesPalette::selectMasterPage(QListBoxItem *item)
{
	sMuster = item->text();
	deleteButton->setEnabled(currentDoc->MasterNames.count() == 1 ? false : true);
	if (sMuster == tr("Normal"))
	{
		sMuster = "Normal";
		deleteButton->setEnabled(false);
	}
	else
		deleteButton->setEnabled(true);
	currentView->showMasterPage(currentDoc->MasterNames[sMuster]);
}

void MasterPagesPalette::selectMasterPage(QString name)
{
	sMuster = name;
	deleteButton->setEnabled(currentDoc->MasterNames.count() == 1 ? false : true);
	if (sMuster == tr("Normal"))
	{
		sMuster = "Normal";
		deleteButton->setEnabled(false);
	}
	else
		deleteButton->setEnabled(true);
	currentView->showMasterPage(currentDoc->MasterNames[sMuster]);
}

void MasterPagesPalette::updateMasterPageList(QString MasterPageName)
{
	masterPageData->clear();
	for (QMap<QString,int>::Iterator it = currentDoc->MasterNames.begin(); it != currentDoc->MasterNames.end(); ++it)
		masterPageData->insertItem(it.key() == "Normal" ? tr("Normal") : it.key());
	deleteButton->setEnabled(currentDoc->MasterNames.count() == 1 ? false : true);
	if (MasterPageName == "Normal")
	{
		MasterPageName = tr("Normal");
		deleteButton->setEnabled(false);
	}
	masterPageData->setSelected(masterPageData->index(masterPageData->findItem(MasterPageName)), true);
}

