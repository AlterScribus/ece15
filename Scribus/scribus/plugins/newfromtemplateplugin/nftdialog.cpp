/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Riku Leino, tsoots@gmail.com                                          *
 ***************************************************************************/
#include "nftdialog.h"
//#include "nftdialog.moc"
#include "scconfig.h"
#include "scribusapi.h"
#include "commonstrings.h"
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <Q3Frame>
#include <QPixmap>
#include <Q3PopupMenu>
#include <Q3VBoxLayout>

extern QPixmap SCRIBUS_API loadIcon(QString nam);

nftdialog::nftdialog(QWidget* parent, QString lang, QString templateDir) : QDialog(parent, "nftdialog", true)
{
	settings = new nftsettings(lang, templateDir);
	
	setCaption( tr("New From Template"));
	setIcon(loadIcon("AppIcon.png"));
	
	Q3BoxLayout* blo = new Q3VBoxLayout(this,0,5,"blo");
	QWidget* top = new QWidget(this);
	top->setMaximumHeight(5);
	top->setMinimumHeight(5);
	QWidget* middle = new QWidget(this);
	middle->setMinimumHeight(370);
	QWidget* bottom = new QWidget(this);
	bottom->setMinimumHeight(40);
	bottom->setMaximumHeight(40);
	blo->addWidget(top);
	blo->addWidget(middle);
	blo->addWidget(bottom);
	Q3BoxLayout* bottomlo = new Q3HBoxLayout(bottom,0,5,"bottomlo");
// 	settingsButton = new QPushButton(tr("Settings"),bottom,"settingsButton");
// 	bottomlo->insertSpacing(0,5);
// 	bottomlo->addWidget(settingsButton);
	bottomlo->addStretch(10);
	okButton = new QPushButton( CommonStrings::tr_OK,bottom,"okButton");
	okButton->setEnabled(false);
	bottomlo->addWidget(okButton);
	cancelButton = new QPushButton( CommonStrings::tr_Cancel,bottom,"cancelButton");
	bottomlo->addWidget(cancelButton);
	bottomlo->insertSpacing(-1,5);
	cancelButton->setDefault(true);
	
	mainlo = new Q3HBoxLayout(middle,0,5,"mainlo");
	QSplitter* splitter = new QSplitter(middle);
	mainlo->addWidget(splitter);
	
	categoryList = new Q3ListBox(splitter,"categoryList",0);
	categoryList->setMinimumWidth(130);
	categoryList->setMaximumWidth(200);
	
	tnailGrid = new Q3IconView(splitter,"tnailGrid",0);
	tnailGrid->setMinimumWidth(300);
	tnailGrid->setSpacing(5);
	tnailGrid->setItemsMovable(false);
	
	popUp = new Q3PopupMenu(tnailGrid, "popUp");
	popUp->insertItem( tr("&Remove"), this, SLOT(removeTemplate()));
	popUp->insertItem( tr("&Open"), this, SLOT(exitOK()));
	
	QWidget* dtTmp = new QWidget(splitter, "dtTmp", 0);
	dtTmp->setMinimumWidth(235);
	mainlo->insertSpacing(0,5);
	mainlo->insertSpacing(-1,5);
	
	detaillo = new Q3VBoxLayout(dtTmp,0,5);
	detailBar = new Q3Frame(dtTmp,"detailBar",0);
	detailBar->setMaximumHeight(32);
	detailBar->setMinimumHeight(32);
	detailBar->setMargin(5);
	detaillo->addWidget(detailBar);
	
	infoLabel = new Q3TextBrowser(dtTmp,"infoLabel");
	infoLabel->setFrameShape(Q3Frame::Panel);
	infoLabel->setFrameShadow(Q3Frame::Sunken);
	detaillo->addWidget(infoLabel);

	tmpSpacer = new QWidget(dtTmp,"tmpSpacer",0);
	detaillo->addWidget(tmpSpacer);
	tmpSpacer->setHidden(true);
	
	imgLabel = new Q3IconView(dtTmp,"imgLabel",0);
	imgLabel->setFrameShape(Q3Frame::Panel);
	imgLabel->setFrameShadow(Q3Frame::Sunken);
	imgLabel->setSelectionMode(Q3IconView::NoSelection);
	detaillo->addWidget(imgLabel);
	imgLabel->setHidden(true);
	
	aboutLabel = new Q3TextBrowser(dtTmp,"aboutLabel");
	aboutLabel->setFrameShape(Q3Frame::Panel);
	aboutLabel->setFrameShadow(Q3Frame::Sunken);
	detaillo->addWidget(aboutLabel);
	aboutLabel->setHidden(true);
	setupAbout();
	
	dtbarlo = new Q3HBoxLayout(detailBar,0,5);
	imgButton = new QToolButton(detailBar,"imgButton");
	QIcon imgSet(loadIcon("Bild.xpm"));
	imgButton->setIconSet(imgSet);
	imgButton->setToggleButton(true);
	imgButton->setMinimumWidth(30);
	imgButton->setMinimumHeight(30);
	imgButton->setMaximumWidth(30);
	imgButton->setMaximumHeight(30);
	dtbarlo->addWidget(imgButton);
	infoButton = new QToolButton(detailBar,"infoButton");
	QIcon imgSet2(loadIcon("nftinfo.xpm"));
	infoButton->setIconSet(imgSet2);
	infoButton->setToggleButton(true);
	infoButton->setMinimumWidth(30);
	infoButton->setMinimumHeight(30);
	infoButton->setMaximumWidth(30);
	infoButton->setMaximumHeight(30);
	infoButton->toggle();
	dtbarlo->addWidget(infoButton);
	dtbarlo->addStretch(10);
	dtbarlo->insertSpacing(0,5);
	aboutButton = new QToolButton(detailBar,"aboutButton");
	QIcon imgSet3(loadIcon("nftabout.xpm"));
	aboutButton->setIconSet(imgSet3);
	aboutButton->setToggleButton(true);
	aboutButton->setMinimumWidth(30);
	aboutButton->setMinimumHeight(30);
	aboutButton->setMaximumWidth(30);
	aboutButton->setMaximumHeight(30);
	dtbarlo->addWidget(aboutButton);
	
	// Signals and Slots Connections
	connect(categoryList, SIGNAL(selectionChanged()), this, SLOT(setTNails()));
	connect(infoButton, SIGNAL(toggled(bool)), this, SLOT(infoToggle()));
	connect(imgButton, SIGNAL(toggled(bool)), this, SLOT(imgToggle()));
	connect(aboutButton, SIGNAL(toggled(bool)), this, SLOT(aboutToggle()));
	connect(okButton, SIGNAL(clicked()), this, SLOT(exitOK()));
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(exitCancel()));
	connect(tnailGrid, SIGNAL(selectionChanged(Q3IconViewItem*)),this,SLOT(setInfo(Q3IconViewItem*)));
	connect(tnailGrid, SIGNAL(doubleClicked(Q3IconViewItem*)),this,SLOT(exitOK()));
	connect(tnailGrid, SIGNAL(rightButtonPressed(Q3IconViewItem*, const QPoint&)), 
	        this, SLOT(showPopup(Q3IconViewItem*, const QPoint&)));
	
	setupListItems();
	setupCategories();
}

void nftdialog::setupCategories() 
{
	QString categories("");
	categoryList->clear();
	for (uint i = 0; i < settings->templates.size(); i++)
	{
		if ((categories.find(settings->templates[i]->templateCategory) == -1) &&
		    (!settings->templates[i]->isDeleted))
		{
			categoryList->insertItem(settings->templates[i]->templateCategory);
			categories += settings->templates[i]->templateCategory;
		}
	}
	categoryList->sort();
	categoryList->insertItem(QString( tr("All")), 0 );
	categoryList->setCurrentItem(0);
}

void nftdialog::setupListItems()
{
	iconItems.clear();
	for (uint i = 0; i < settings->templates.size(); ++i)
	{
		if (!settings->templates[i]->isDeleted)
		{
			ListItem* tmp = new ListItem(settings->templates[i], NULL);
			iconItems.push_back(tmp);
		}
	}
}

void nftdialog::setTNails()
{
	if (categoryList->currentItem() == 0)
	{
		tnailGrid->clear();
		for (uint i = 0; i < iconItems.size(); ++i) 
		{
			Q3IconViewItem* tmpQIVI = new Q3IconViewItem(tnailGrid,
			                                           iconItems[i]->first->name, 
			                                           QPixmap(iconItems[i]->first->tnail));
			iconItems[i]->second = tmpQIVI;
		}
		tnailGrid->sort();
		return;
	}
	
	QString curtype = categoryList->text(categoryList->currentItem());
	if (curtype != QString::null)
	{
		tnailGrid->clear();
		for (uint i = 0; i < iconItems.size(); ++i)
		{
			if (curtype.find(iconItems[i]->first->templateCategory) != -1)
			{
				Q3IconViewItem* tmpQIVI = new Q3IconViewItem(tnailGrid,
			                                              iconItems[i]->first->name, 
			                                              QPixmap(iconItems[i]->first->tnail));
				iconItems[i]->second = tmpQIVI;
			} 
			else
				iconItems[i]->second = NULL;
		}
		tnailGrid->sort();
	}
}

void nftdialog::setInfo(Q3IconViewItem* item) 
{
	getCurrentDocumentTemplate(item);
	QString infoText = "<b>"+ tr("Name")+"</b><br>";
	infoText += currentDocumentTemplate->name + "<br>";
	infoText += "<b>"+ tr("Page Size")+"</b><br>";
	infoText += currentDocumentTemplate->psize + "<br>";
	infoText += "<b>"+ tr("Colors")+"</b><br>";
	infoText += currentDocumentTemplate->color + "<br>";
	infoText += "<b>"+ tr("Description")+"</b><br>";
	infoText += currentDocumentTemplate->descr + "<br>";
	infoText += "<b>"+ tr("Usage")+"</b><br>";
	infoText += currentDocumentTemplate->usage + "<br>";
	infoText += "<b>"+ tr("Created with")+"</b><br>";
	infoText += "Scribus " + currentDocumentTemplate->scribusVersion + "<br>";
	infoText += "<b>"+ tr("Date")+"</b><br>";
	infoText += currentDocumentTemplate->date + "<br>";
	infoText += "<b>"+ tr("Author")+"</b><br>";
	infoText += currentDocumentTemplate->author + "<br>";
	infoText += currentDocumentTemplate->email + "<br>";
	infoLabel->setText(infoText);
	imgLabel->clear();
	QPixmap tmplImg(currentDocumentTemplate->img);
	Q3IconViewItem* qvi = new Q3IconViewItem(imgLabel,currentDocumentTemplate->name,tmplImg);
	qvi->setRenameEnabled(false);
	qvi->setDragEnabled(false);
	qvi->setDropEnabled(false);
	
	if (!okButton->isEnabled())
	{
		okButton->setEnabled(true);
		okButton->setDefault(true);
	}

}

void nftdialog::infoToggle()
{
	if (infoButton->isDown())
	{
		tmpSpacer->setHidden(true);
		infoLabel->setHidden(false);
		if (imgButton->isDown())
			imgButton->toggle();
		if (aboutButton->isDown())
			aboutButton->toggle();
	} 
	else
	{
		if (imgButton->isDown() == false)
			tmpSpacer->setHidden(false);
		infoLabel->setHidden(true);
	}
	
}

void nftdialog::imgToggle()
{	
	if (imgButton->isDown())
	{
		tmpSpacer->setHidden(true);
		imgLabel->setHidden(false);
		if (infoButton->isDown()) 
			infoButton->toggle();
		if (aboutButton->isDown()) 
			aboutButton->toggle();
	}
	else
	{
		if (infoButton->isDown() == false)
			tmpSpacer->setHidden(false);
		imgLabel->setHidden(true);
	}
}

void nftdialog::aboutToggle()
{
	if (aboutButton->isDown())
	{
		tmpSpacer->setHidden(true);
		aboutLabel->setHidden(false);
		if (imgButton->isDown()) 
			imgButton->toggle();
		if (infoButton->isDown())
			infoButton->toggle();
	}
	else
	{
		if (aboutButton->isDown() == false)
			tmpSpacer->setHidden(false);
		aboutLabel->setHidden(true);
	}
}

void nftdialog::exitCancel() 
{
	reject();
}

void nftdialog::exitOK() 
{
	if (currentDocumentTemplate == NULL)
		reject();
	else
		accept();
}

void nftdialog::setupAbout() 
{
	QString text = "New From Template - 0.0.7<br><br>";
	text += "<b>";
	text += tr("Downloading Templates");
	text += "</b><br>";
	text += tr("Document templates can be found at "
	           "http://www.scribus.net/ in the Downloads section.");
	text += "<br><br>";
	text += "<b>";
	text +=  tr("Installing Templates");
	text +=  "</b><br>";
	text += tr("Extract the package to the template directory " 
	           "~/.scribus/templates "
	           "for the current user or "
	           "PREFIX/share/scribus/templates "
	           "for all users in the system.");
	text +=  "<br><br>";
	text += "<b>";
	text +=  tr("Preparing a template");
	text +=  "</b><br>";
	text +=  tr("Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.");
	text += tr("The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.");
	text +=  "<br><br><b>";
	text +=  tr("Removing a template");
	text +=  "</b><br>";
	text += tr("Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.");
	text +=  "<br><br>";
	text += "<b>";
	text +=  tr("Translating template.xml");
	text +=  "</b><br>";
	text += tr("Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.");
	aboutLabel->setText(text);
}

void nftdialog::showPopup(Q3IconViewItem* item, const QPoint& point)
{
	if (item != NULL) 
	{
		getCurrentDocumentTemplate(item);
		if (currentDocumentTemplate->canWrite())
			popUp->popup(point);
	}
}

void nftdialog::removeTemplate()
{
	currentDocumentTemplate->isDeleted = true;
	infoLabel->clear();
	imgLabel->clear();
	currentDocumentTemplate = NULL;
	okButton->setEnabled(false);
	setupListItems();
	setupCategories();
}

void nftdialog::getCurrentDocumentTemplate(Q3IconViewItem* item)
{
	for (uint i = 0; i < iconItems.size(); ++i)
	{
		if (iconItems[i]->second == item)
		{
			currentDocumentTemplate = iconItems[i]->first;
			break;
		}
	}
}

nftdialog::~nftdialog()
{
	// TODO Get the window size and position information and save with settings
	delete settings;
	for (uint i = 0; i < iconItems.size(); i++)
	{
		if (iconItems[i] != NULL)
			delete iconItems[i];
	}
}
