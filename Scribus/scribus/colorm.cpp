/****************************************************************************
** Form implementation generated from reading ui file 'Color.ui'
**
** Created: Mon Apr 23 19:09:31 2001
**      by:  The User Interface Compiler (uic)
**
** WARNING! All changes made in this file will be lost!
****************************************************************************/
#include "colorm.h"
#include "colorm.moc"
#include <qvariant.h>
#include <qtooltip.h>
#include <qpixmap.h>
#include <cstdlib>
#include <qcolordialog.h>
#include "customfdialog.h"
#include "dcolor.h"
#include "scribusXml.h"
#include "cmykfw.h"
#include "query.h"
#include "scribus.h"

#if (_MSC_VER >= 1200)
 #include "win-config.h"
#else
 #include "config.h"
#endif

extern QPixmap loadIcon(QString nam);
extern ScribusApp* ScApp;

Farbmanager::Farbmanager( QWidget* parent, CListe doco, bool HDoc, QString DcolSet, QStringList Cust )
    : QDialog( parent, "dd", true, 0 )
{
	setName( "Farbmanager" );
/*	DontChange.clear();
	DontChange += "White";
	DontChange += "Black";
	DontChange += "Cyan";
	DontChange += "Magenta";
	DontChange += "Yellow"; */
	HaveDoc = HDoc;
	CColSet = Cust;
	 setSizePolicy(QSizePolicy((QSizePolicy::SizeType)1, (QSizePolicy::SizeType)1, 
						sizePolicy().hasHeightForWidth() ) );
	setSizeGripEnabled(true);
	setCaption( tr( "Colors" ) );
	setIcon(loadIcon("AppIcon.png"));
	Layout2 = new QVBoxLayout( this );
	Layout2->setSpacing( 6 );
	Layout2->setMargin( 11 );

	layout5 = new QHBoxLayout( 0, 0, 6, "layout5");
	ListBox1 = new QListBox( this, "ListBox1" );
	ListBox1->setSizePolicy( QSizePolicy( (QSizePolicy::SizeType)3, (QSizePolicy::SizeType)3,
						 ListBox1->sizePolicy().hasHeightForWidth() ) );
	ListBox1->setMinimumSize( QSize( 164, 228 ) );
	ListBox1->setColumnMode( QListBox::FixedNumber );
	layout5->addWidget( ListBox1 );

	ColorsGroup = new QGroupBox( this, "ColorsGroup" );
	ColorsGroup->setTitle( tr( "Colors" ) );
	ColorsGroup->setColumnLayout(0, Qt::Vertical );
	ColorsGroup->layout()->setSpacing( 6 );
	ColorsGroup->layout()->setMargin( 11 );
	Layout1 = new QVBoxLayout( ColorsGroup->layout() );
	Layout1->setAlignment( Qt::AlignTop );
	LoadF = new QPushButton( ColorsGroup, "LoadF" );
	LoadF->setText( tr( "Append" ) );
	Layout1->addWidget( LoadF );
	NewF = new QPushButton( ColorsGroup, "NewF" );
	NewF->setText( tr( "New" ) );
	Layout1->addWidget( NewF );
	EditF = new QPushButton( ColorsGroup, "EditF" );
	EditF->setEnabled( false );
	EditF->setText( tr( "Edit" ) );
	EditF->setDefault( true );
	Layout1->addWidget( EditF );
	DupF = new QPushButton( ColorsGroup, "DupF" );
	DupF->setEnabled( false );
	DupF->setText( tr( "Duplicate" ) );
	Layout1->addWidget( DupF );
	DelF = new QPushButton( ColorsGroup, "DelF" );
	DelF->setEnabled( false );
	DelF->setText( tr( "Delete" ) );
	Layout1->addWidget( DelF );
	layout5->addWidget( ColorsGroup );
	Layout2->addLayout( layout5 );

	layout4 = new QHBoxLayout( 0, 0, 6, "layout4");

	layout3 = new QVBoxLayout( 0, 0, 6, "layout3");
	SaveF = new QPushButton( this, "SaveF" );
	SaveF->setText( tr( "Save" ) );
	layout3->addWidget( SaveF );
	CancF = new QPushButton( this, "CancF" );
	CancF->setText( tr( "Cancel" ) );
	CancF->setDefault( true );
	layout3->addWidget( CancF );
	layout4->addLayout( layout3 ); 
	if (HaveDoc)
	{
		layout7 = new QVBoxLayout( 0, 0, 6, "layout3");
		DelU = new QPushButton( this, "DelU" );
		DelU->setText( tr( "Remove Unused" ) );
		layout7->addWidget( DelU );
		QSpacerItem* spacer = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
		layout7->addItem( spacer );
		layout4->addLayout( layout7 );
	}
	else
	{
		ColsSetGroup = new QGroupBox( this, "ColsSetGroup" );
		ColsSetGroup->setTitle( tr( "Color Sets" ) );
		ColsSetGroup->setColumnLayout(0, Qt::Vertical );
		ColsSetGroup->layout()->setSpacing( 6 );
		ColsSetGroup->layout()->setMargin( 11 );
		ColsSetGroupLayout = new QVBoxLayout( ColsSetGroup->layout() );
		ColsSetGroupLayout->setAlignment( Qt::AlignTop );
		textLabel1 = new QLabel( ColsSetGroup, "textLabel1" );
		textLabel1->setText( tr( "Current Color Set:" ) );
		ColsSetGroupLayout->addWidget( textLabel1 );
		CSets = new QPopupMenu();
		CSets->insertItem("Scribus Small");
		CSets->insertItem("X11 RGB-Set");
		CSets->insertItem("X11 Grey-Set");
		CSets->insertItem("Gnome-Set");
		CSets->insertItem("SVG-Set");
		if (Cust.count() != 0)
		{
			QStringList realEx;
			realEx.clear();
			for (uint m = 0; m < Cust.count(); ++m)
			{
				QString Cpfad = QString(getenv("HOME"))+"/.scribus/"+Cust[m];
				QFileInfo cfi(Cpfad);
				if (cfi.exists())
				{
					CSets->insertItem(Cust[m]);
					realEx.append(Cust[m]);
				}
			}
			CColSet = realEx;
		}
		LoadColSet = new QToolButton( ColsSetGroup, "LoadColSet" );
		LoadColSet->setPopup(CSets);
		LoadColSet->setPopupDelay(0);
		LoadColSet->setText(DcolSet);
		ColsSetGroupLayout->addWidget( LoadColSet );
		SaveColSet = new QPushButton( ColsSetGroup, "SaveColSet" );
		SaveColSet->setText( tr( "Save Color Set" ) );
		ColsSetGroupLayout->addWidget( SaveColSet );
		layout4->addWidget( ColsSetGroup );
	}
	Layout2->addLayout( layout4 );
    Ersatzliste.clear();
	EditColors = doco;
	updateCList();
// signals and slots connections
	if (!HaveDoc)
	{
		connect(CSets, SIGNAL(activated(int)), this, SLOT(loadDefaults(int)));
		connect(SaveColSet, SIGNAL( clicked() ), this, SLOT( saveDefaults() ) );
		QToolTip::add( LoadColSet, tr( "Choose a color set to load" ) );
		QToolTip::add( SaveColSet, tr( "Save the current color set" ) );
	}
	else
	{
		connect(DelU, SIGNAL( clicked() ), this, SLOT( delUnused() ) );
		QToolTip::add( DelU, tr( "Remove unused colors from current document's color set" ) );
	}
	QToolTip::add( LoadF, tr( "Append colors to the current set from an existing document" ) );
	QToolTip::add( NewF, tr( "Create a new color within the current set" ) );
	QToolTip::add( EditF, tr( "Edit the currently selected color" ) );
	QToolTip::add( DupF, tr( "Make a copy of the currently selected color" ) );
	QToolTip::add( DelF, tr( "Delete the currently selected color" ) );
	QToolTip::add( SaveF, tr( "Make the current colorset the default color set" ) );
	connect( SaveF, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( CancF, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect( NewF, SIGNAL( clicked() ), this, SLOT( neueFarbe() ) );
	connect( EditF, SIGNAL( clicked() ), this, SLOT( editFarbe() ) );
	connect( DupF, SIGNAL( clicked() ), this, SLOT( duplFarbe() ) );
	connect( DelF, SIGNAL( clicked() ), this, SLOT( delFarbe() ) );
	connect( LoadF, SIGNAL( clicked() ), this, SLOT( loadFarben() ) );
	connect( ListBox1, SIGNAL( highlighted(QListBoxItem*) ), this, SLOT( selFarbe(QListBoxItem*) ) );
}

void Farbmanager::saveDefaults()
{
	QString Cpfad = QString(getenv("HOME"))+"/.scribus/";
	QString Name = LoadColSet->text();
	Query* dia = new Query(this, "Name", 1, 0, tr("Name:"), tr("Choose a Name"));
	if ((Name == "Scribus Small") || (Name == "X11 RGB-Set")
		|| (Name == "X11 Grey-Set") || (Name == "Gnome-Set") || (Name == "SVG-Set"))
		dia->Answer->setText("");
	else
		dia->Answer->setText(Name);
	if (dia->exec())
	{
	  	QString Fname = Cpfad+dia->Answer->text();
		LoadColSet->setText(dia->Answer->text());
		QFile fx(Fname);
		if (fx.open(IO_WriteOnly))
		{
			QTextStream tsx(&fx);
			QString tmp;
			CListe::Iterator itc;
			tsx << "Color Set:"+dia->Answer->text()+"\n";
			int cp, mp, yp, kp;
			for (itc = EditColors.begin(); itc != EditColors.end(); ++itc)
			{
				EditColors[itc.key()].getCMYK(&cp, &mp, &yp, &kp);
				tsx << tmp.setNum(cp) << "\t" ;
				tsx << tmp.setNum(mp) << "\t" ;
				tsx << tmp.setNum(yp) << "\t" ;
				tsx << tmp.setNum(kp) << "\t" ;
				tsx << itc.key() << "\n" ;
			}
			fx.close();
			if (dia->Answer->text() != Name)
			{
				CColSet.append(dia->Answer->text());
				CSets->insertItem(dia->Answer->text());
			}
		}
	}
	delete dia;
}

void Farbmanager::loadDefaults(int id)
{
	int c = CSets->indexOf(id);
	bool cus = false;
	LoadColSet->setText(CSets->text(id));
	EditColors.clear();
	QString Cpfad = QString(getenv("HOME"))+"/.scribus/"+CSets->text(id);
	QString pfadC = PREL;
	QString pfadC2 = pfadC + "/lib/scribus/rgbscribus.txt";
	switch (c)
	{
		case 0:
			LoadColSet->setText("Scribus Small");
	 		EditColors.insert("White", CMYKColor(0, 0, 0, 0));
  			EditColors.insert("Black", CMYKColor(0, 0, 0, 255));
			EditColors.insert("Blue", CMYKColor(255, 255, 0, 0));
			EditColors.insert("Cyan", CMYKColor(255, 0, 0, 0));
			EditColors.insert("Green", CMYKColor(255, 0, 255, 0));
			EditColors.insert("Red", CMYKColor(0, 255, 255, 0));
			EditColors.insert("Yellow", CMYKColor(0, 0, 255, 0));
			EditColors.insert("Magenta", CMYKColor(0, 255, 0, 0));
			break;
		case 1:
			pfadC2 = pfadC + "/lib/scribus/rgbscribus.txt";
			break;
		case 2:
			pfadC2 = pfadC + "/lib/scribus/rgbscribusgreys.txt";
			break;
		case 3:
			pfadC2 = pfadC + "/lib/scribus/rgbscribusgnome.txt";
			break;
		case 4:
			pfadC2 = pfadC + "/lib/scribus/rgbsvg.txt";
			break;
		default:
			pfadC2 = Cpfad;
			cus = true;
			break;
		}
	if (c != 0)
	{
		QFile fiC(pfadC2);
		if (fiC.open(IO_ReadOnly))
		{
			QString ColorEn, Cname;
			int Rval, Gval, Bval, Kval;
			QTextStream tsC(&fiC);
			ColorEn = tsC.readLine();
			while (!tsC.atEnd())
			{
				CMYKColor tmp;
				ColorEn = tsC.readLine();
				QTextStream CoE(&ColorEn, IO_ReadOnly);
				CoE >> Rval;
				CoE >> Gval;
				CoE >> Bval;
				if (cus)
				{
					CoE >> Kval;
					Cname = CoE.read().stripWhiteSpace();
					tmp.setColor(Rval, Gval, Bval, Kval);
				}
				else
				{
					Cname = CoE.read().stripWhiteSpace();
					tmp.setColorRGB(Rval, Gval, Bval);
				}
				EditColors.insert(Cname, tmp);
			}
			fiC.close();
//			DontChange.clear();
		}
		else
		{
			LoadColSet->setText("Scribus Small");
			EditColors.insert("White", CMYKColor(0, 0, 0, 0));
  			EditColors.insert("Black", CMYKColor(0, 0, 0, 255));
			EditColors.insert("Blue", CMYKColor(255, 255, 0, 0));
			EditColors.insert("Cyan", CMYKColor(255, 0, 0, 0));
			EditColors.insert("Green", CMYKColor(255, 0, 255, 0));
			EditColors.insert("Red", CMYKColor(0, 255, 255, 0));
			EditColors.insert("Yellow", CMYKColor(0, 0, 255, 0));
			EditColors.insert("Magenta", CMYKColor(0, 255, 0, 0));
		}
	}
	updateCList();
}

void Farbmanager::loadFarben()
{
	QString fileName;
#ifdef HAVE_LIBZ
	CustomFDialog dia(this, tr("Open"), tr("Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)"));
#else
	CustomFDialog dia(this, tr("Open"), tr("Documents (*.sla *.scd);;All Files (*)"));
#endif
	if (dia.exec() == QDialog::Accepted)
		fileName = dia.selectedFile();
	else
		return;
	if (!fileName.isEmpty())
  	{
  		ScriXmlDoc *ss = new ScriXmlDoc();
  		if (ss->ReadColors(fileName))
  		{
  			CListe LColors = ss->Farben;
			CListe::Iterator it;
			for (it = LColors.begin(); it != LColors.end(); ++it)
			{
				if (!EditColors.contains(it.key()))
    				EditColors.insert(it.key(), it.data());
			}
    	updateCList();
  		}
		delete ss;
  	}
}

void Farbmanager::delFarbe()
{
//	if (DontChange.contains(sFarbe))
//		return;
	DelColor *dia = new DelColor(this, EditColors, sFarbe, HaveDoc);
	if (dia->exec())
	{
		Ersatzliste.insert(sFarbe, dia->EFarbe);
		EditColors.remove(sFarbe);
		updateCList();
	}
	delete dia;
}

void Farbmanager::delUnused()
{
	PageItem* ite;
	bool found;
	UsedC.clear();
	CListe::Iterator it;
	for (it = EditColors.begin(); it != EditColors.end(); ++it)
	{
		found = false;
/*		if (DontChange.contains(it.key()))
		{
			UsedC.insert(it.key(), it.data());
			continue;
		} */
		if ((it.key() == ScApp->doc->Dbrush) || (it.key() == ScApp->doc->Dpen) || 
			(it.key() == ScApp->doc->DbrushPict)
			 || (it.key() == ScApp->doc->DpenLine) || (it.key() == ScApp->doc->DpenText))
		{
			UsedC.insert(it.key(), it.data());
			continue;
		}
		for (uint b = 0; b < ScApp->view->MasterPages.count(); ++b)
		{
			for (uint c = 0; c < ScApp->view->MasterPages.at(b)->Items.count(); ++c)
			{
				ite = ScApp->view->MasterPages.at(b)->Items.at(c);
				if ((ite->PType == 4) || (ite->PType == 8))
				{
					for (uint d=0; d<ite->Ptext.count(); ++d)
					{
						if (it.key() == ite->Ptext.at(d)->ccolor)
							found = true;
						if (it.key() == ite->Ptext.at(d)->cstroke)
							found = true;
						if (found)
							break;
					}
				}
				/* PFJ - 29.02.04 - merged if's to one line */
				if ((it.key() == ite->Pcolor) || (it.key() == ite->Pcolor2) ||
					(it.key() == ite->GrColor) || (it.key() == ite->GrColor2))
					found = true;
				if (found)
					break;
			}
			if (found)
				break;
		}
		if (found)
		{
			UsedC.insert(it.key(), it.data());
			continue;
		}
		for (uint b = 0; b < ScApp->view->DocPages.count(); ++b)
		{
			for (uint c = 0; c < ScApp->view->DocPages.at(b)->Items.count(); ++c)
			{
				ite = ScApp->view->DocPages.at(b)->Items.at(c);
				if ((ite->PType == 4) || (ite->PType == 8))
				{
					for (uint d=0; d<ite->Ptext.count(); ++d)
					{
						/* PFJ - 29.02.04 - Merged if's */
						if ((it.key() == ite->Ptext.at(d)->ccolor) ||
							(it.key() == ite->Ptext.at(d)->cstroke))
							found = true;
						if (found)
							break;
					}
				}
				/* PFJ - 29.02.04 - Merged if's */
				if ((it.key() == ite->Pcolor) || (it.key() == ite->Pcolor2) ||
					(it.key() == ite->GrColor) || (it.key() == ite->GrColor2))
					found = true;
				if (found)
					break;
			}
			if (found)
				break;
		}
		/* PFJ - 29.02.04 - Merged if's */
		if ((it.key() == ScApp->doc->CurrTextFill) || 
			(it.key() == ScApp->doc->CurrTextStroke))
			found = true;
		if (found)
		{
			UsedC.insert(it.key(), it.data());
			continue;
		}
	}
	EditColors = UsedC;
	if (EditColors.count() == 0)
	{
		EditColors.insert("White", CMYKColor(0, 0, 0, 0));
  		EditColors.insert("Black", CMYKColor(0, 0, 0, 255));
	}
	updateCList();
}

void Farbmanager::duplFarbe()
{
    QString nam;
    Query *dia = new Query(this, "tt", 1, 0, tr("New Color:"), tr("New Color"));
    dia->Answer->setText( tr("Copy of %1").arg(sFarbe));
    if (dia->exec())
    {
    	nam = dia->Answer->text();
    	while (EditColors.contains(nam))
   		{
    		if (!dia->exec())
   			{
    			delete dia;
    			return;
   			}
    		nam = dia->Answer->text();
   		}
    	EditColors.insert(nam, EditColors[sFarbe]);
		updateCList();
   	}
    delete dia;
}

void Farbmanager::neueFarbe()
{
    QString nam;
    Query *dia = new Query(this, "tt", 1, 0, tr("New Color:"), tr("New Color"));
    dia->Answer->setText(sFarbe);
    if (dia->exec())
   	{
    	nam = dia->Answer->text();
    	while (EditColors.contains(nam) || (nam == "None"))
   		{
    		if (!dia->exec())
    		{
    			delete dia;
    			return;
    		}
    		nam = dia->Answer->text();
    	}
		CMYKColor tmpFarbe = CMYKColor(0, 0, 0, 0);
		CMYKChoose* dia2 = new CMYKChoose(this, tmpFarbe, nam);
		if (!dia2->exec())
		{
    		delete dia;
    		delete dia2;
    		return;
    	}
		tmpFarbe = dia2->Farbe;
		delete dia2;
    	EditColors.insert(nam, tmpFarbe);
		updateCList();
    }
    delete dia;
}

void Farbmanager::editFarbe()
{
//	if (DontChange.contains(sFarbe))
//		return;
	CMYKColor tmpFarbe = CMYKColor();
	CMYKChoose* dia = new CMYKChoose(this, EditColors[sFarbe], sFarbe);
	if (!dia->exec())
	{
    	delete dia;
    	return;
    }
	tmpFarbe = dia->Farbe;
	delete dia;
	EditColors[sFarbe] = tmpFarbe;
	Ersatzliste.insert(sFarbe, sFarbe);
	updateCList();
}

void Farbmanager::selFarbe(QListBoxItem *c)
{
	sFarbe = c->text();
	EditF->setEnabled(true);
	DupF->setEnabled(true);
	DelF->setEnabled(EditColors.count() == 1 ? false : true);
/*	if (DontChange.contains(sFarbe))
	{
   		EditF->setEnabled(false);
   		DelF->setEnabled(false);
	} */
}

void Farbmanager::updateCList()
{
	ListBox1->clear();
	CListe::Iterator it;
	QPixmap pm = QPixmap(30, 15);
	for (it = EditColors.begin(); it != EditColors.end(); ++it)
	{
		pm.fill(EditColors[it.key()].getRGBColor());
		ListBox1->insertItem(pm, it.key());
	}
	DelF->setEnabled(EditColors.count() == 1 ? false : true);
	if (ListBox1->currentItem() == -1)
   	{
   		DupF->setEnabled(false);
   		EditF->setEnabled(false);
    	DelF->setEnabled(false);
   	}
	ListBox1->setSelected(ListBox1->currentItem(), false);	
}

