/***************************************************************************
 *   Riku Leino, tsoots@welho.com                                          *
 ***************************************************************************/
#include "satdialog.h"
#include "satdialog.moc"

extern QPixmap loadIcon(QString nam);

satdialog::satdialog(QWidget* parent, QString tmplName, int pageW, int pageH) : QDialog(parent, "satdialog", TRUE)
{
	setCaption(tr("Save as Template"));
	setIcon(loadIcon("AppIcon.png"));
	readPrefs();

	QBoxLayout* blo = new QVBoxLayout(this,0,5,"blo");
	QWidget* top = new QWidget(this);
	top->setMaximumHeight(5);
	middle = new QWidget(this);
	middle->setMinimumWidth(250);
	QBoxLayout* middlelo = new QHBoxLayout(middle,0,5);
	QWidget* left = new QWidget(middle);
	center = new QWidget(middle);
	QWidget* right = new QWidget(middle);
	middlelo->addWidget(left);
	middlelo->addWidget(center);
	middlelo->addWidget(right);
	QWidget* bottom = new QWidget(this);
	bottom->setMinimumHeight(40);
	bottom->setMaximumHeight(40);
	blo->addWidget(top);
	blo->addWidget(middle);
	blo->addWidget(bottom);

	QBoxLayout* mlo = new QVBoxLayout(center,0,5);
	mlo->insertSpacing(0,5);
	nameLabel = new QLabel( tr("Name"),center);
	mlo->addWidget(nameLabel);
	nameEdit = new QLineEdit(center);
	nameEdit->setText(tmplName);
	mlo->addWidget(nameEdit);

	catsLabel = new QLabel( tr("Category"), center);
	mlo->addWidget(catsLabel);
	catsCombo = new QComboBox(center,"catsCombo");
	mlo->addWidget(catsCombo);
	setupCategories();

	psizeLabel = new QLabel( tr("Page Size"),center);
	mlo->addWidget(psizeLabel);
	psizeEdit = new QLineEdit(center);
	mlo->addWidget(psizeEdit);
	setupPageSize(pageW, pageH);

	colorsLabel = new QLabel( tr("Colors"),center);
	mlo->addWidget(colorsLabel);
	colorsEdit = new QLineEdit(center);
	mlo->addWidget(colorsEdit);

	descrLabel = new QLabel( tr("Description"),center);
	mlo->addWidget(descrLabel);
	descrEdit = new QTextEdit(center);
	mlo->addWidget(descrEdit);

	usageLabel = new QLabel( tr("Usage"),center);
	mlo->addWidget(usageLabel);
	usageEdit = new QTextEdit(center);
	mlo->addWidget(usageEdit);

	authorLabel = new QLabel( tr("Author"),center);
	mlo->addWidget(authorLabel);
	authorEdit = new QLineEdit(center);
	mlo->addWidget(authorEdit);
	authorEdit->setText(author);

	emailLabel = new QLabel( tr("Email"),center);
	mlo->addWidget(emailLabel);
	emailEdit = new QLineEdit(center);
	mlo->addWidget(emailEdit);
	emailEdit->setText(email);

	mlo->addStretch(10);
	mlo->insertSpacing(-1,5);

	QBoxLayout* tlo = new QHBoxLayout(bottom,0,5);
	detailButton = new QPushButton( tr("More Details"), bottom);
	tlo->addWidget(detailButton);
	tlo->addStretch(10);
	okButton = new QPushButton( tr("OK"),bottom);
	okButton->setDefault(true);
	tlo->addWidget(okButton);
	tlo->insertSpacing(0,5);
	tlo->insertSpacing(-1,5);

	if (isFullDetail)
		fullDetail();
	else
		minimumDetail();

	// Slots and signals connections
	connect(detailButton, SIGNAL(clicked()), this, SLOT(detailClicked()));
	connect(okButton, SIGNAL(clicked()), this, SLOT(accept()));

}

void satdialog::detailClicked()
{
	if (isFullDetail)
	{
		isFullDetail = false;
		minimumDetail();
	}
	else
	{
		isFullDetail = true;
		fullDetail();
	}
}

void satdialog::fullDetail()
{
	psizeLabel->setHidden(false);
//	psizeLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	catsLabel->setHidden(false);
//	catsLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	colorsLabel->setHidden(false);
//	colorsLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	descrLabel->setHidden(false);
//	descrLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	usageLabel->setHidden(false);
//	usageLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	authorLabel->setHidden(false);
//	authorLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	emailLabel->setHidden(false);
//	emailLabel->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	psizeEdit->setHidden(false);
//	psizeEdit->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	catsCombo->setHidden(false);
//	catsCombo->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Fixed));
	colorsEdit->setHidden(false);
//	colorsEdit->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	descrEdit->setHidden(false);
//	descrEdit->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	usageEdit->setHidden(false);
//	usageEdit->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	authorEdit->setHidden(false);
//	authorEdit->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	emailEdit->setHidden(false);
//	emailEdit->setSizePolicy(QSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred));
	detailButton->setText( tr("Less Details"));
	layout()->activate();
	adjustSize();
}

void satdialog::minimumDetail()
{
	catsLabel->setHidden(true);
//	catsLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	psizeLabel->setHidden(true);
//	psizeLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	colorsLabel->setHidden(true);
//	colorsLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	descrLabel->setHidden(true);
//	descrLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	usageLabel->setHidden(true);
//	usageLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	authorLabel->setHidden(true);
//	authorLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	emailLabel->setHidden(true);
//	emailLabel->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	catsCombo->setHidden(true);
//	catsCombo->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	psizeEdit->setHidden(true);
//	psizeEdit->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	colorsEdit->setHidden(true);
//	colorsEdit->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	descrEdit->setHidden(true);
//	descrEdit->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	usageEdit->setHidden(true);
//	usageEdit->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	authorEdit->setHidden(true);
//	authorEdit->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	emailEdit->setHidden(true);
//	emailEdit->setSizePolicy(QSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored));
	detailButton->setText( tr("More Details"));
	layout()->activate();
	adjustSize();
}

void satdialog::readPrefs()
{
	author = "";
	email = "";
	isFullDetail = false;
	QFile rc(QDir::convertSeparators(QDir::homeDirPath() + "/.scribus/sat.rc"));
	if (rc.exists())
	{
		if (rc.open(IO_ReadOnly))
		{
			QTextStream stream(&rc);
			QString line = stream.readLine();
			QString attribute;
			QString value;
			while (line != NULL)
			{
				line = line.stripWhiteSpace();
				attribute = line.left(line.find("="));
				value = line.right(line.length() - line.find("=") - 1);
				if ((line.left(1) != "#") &&
				        (line.find("=") != -1) &&
				        (line.right(1) != "="))
				{ // If not a comment and '='can be found and is not the last charcter on the line
					if (attribute == "author")
					{
						author = value;
					}
					else if (attribute == "email")
					{
						email = value;
					}
					else if (attribute = "max_detail")
					{
						if (value == "1")
							isFullDetail = true;
						else
							isFullDetail = false;
					}
				}
				line = stream.readLine();
			}
			rc.close();
		}
	}
}

void satdialog::writePrefs()
{
	QString text = "author=" + authorEdit->text();
	text += "\nemail=" + emailEdit->text();
	text += QString("\nmax_detail=%1").arg(isFullDetail);

	QFile rc(QDir::convertSeparators(QDir::homeDirPath() + "/.scribus/sat.rc"));
	if ( rc.open( IO_WriteOnly ) )
	{
		QTextStream stream(&rc);
		stream.setEncoding(QTextStream::UnicodeUTF8);
		stream << text;
		rc.close();
	}
}

void satdialog::setupCategories()
{
	// en will be used in template.xml and it will be then replaced with the lang when used for users
	// to get the categories in their language.
	QString* en = new QString("Newsletters"); QString* lang = new QString(QObject::tr("Newsletters"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Brochures"); lang = new QString(QObject::tr("Brochures"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Catalogs"); lang = new QString(QObject::tr("Catalogs"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Flyers"); lang = new QString(QObject::tr("Flyers"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Signs"); lang = new QString(QObject::tr("Signs"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Cards"); lang = new QString(QObject::tr("Cards"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Letterheads"); lang = new QString(QObject::tr("Letterheads"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Envelopes"); lang = new QString(QObject::tr("Envelopes"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Business Cards"); lang = new QString(QObject::tr("Business Cards"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Calendars"); lang = new QString(QObject::tr("Calendars"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Advertisements"); lang = new QString(QObject::tr("Advertisements"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Labels"); lang = new QString(QObject::tr("Labels"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Menus"); lang = new QString(QObject::tr("Menus"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Programs"); lang = new QString(QObject::tr("Programs"));
	cats.push_back(new Pair(en,lang));
	en = new QString("PDF Forms"); lang = new QString(QObject::tr("PDF Forms"));
	cats.push_back(new Pair(en,lang));
	en = new QString("PDF Presentations"); lang = new QString(QObject::tr("PDF Presentations"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Magazines"); lang = new QString(QObject::tr("Magazines"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Posters"); lang = new QString(QObject::tr("Posters"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Announcements"); lang = new QString(QObject::tr("Announcements"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Text Documents"); lang = new QString(QObject::tr("Text Documents"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Folds"); lang = new QString(QObject::tr("Folds"));
	cats.push_back(new Pair(en,lang));
	en = new QString("Own Templates"); lang = new QString(QObject::tr("Own Templates"));
	cats.push_back(new Pair(en,lang));

	QStringList* list = new QStringList();
	for (uint i = 0; i < cats.size(); i++)
	{
		list->append(*cats[i]->second);
	}
	list->sort();
	QStringList list2 = *list;
	catsCombo->insertStringList(list2);
	catsCombo->insertItem("",0);
	catsCombo->setEditable(true);
}

void satdialog::setupPageSize(int w, int h)
{
	QString sizes[] = {"2380x3368", "1684x2380", "1190x1684", "842x1190", "595x842",
	                   "421x595", "297x421", "210x297", "148x210",
	                   "105x148", "2836x4008", "2004x2836", "1418x2004", "1002x1418", "709x1002", "501x709",
	                   "355x501", "250x355", "178x250", "125x178", "89x125", "462x649", "298x683", "312x624",
	                   "542x720", "595x935", "1224x792", "612x1008", "612x792", "792x1225"};
	QString sizelist[] =
	    {"A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "B0", "B1", "B2", "B3", "B4",
	     "B5", "B6", "B7", "B8", "B9", "B10", "C5E", "Comm10E", "DLE", "Executive", "Folio",
	     "Ledger", tr("Legal"), tr("Letter"), tr("Tabloid")};

	QString orient, search, psize;
	QString wString = QString("%1").arg(w);
	QString hString = QString("%1").arg(h);
	if (w > h)
	{
		orient = ", landscape";
		search = hString+"x"+wString;
	}
	else if (w < h)
	{
		orient = ", portrait";
		search = wString+"x"+hString;
	}
	int index = -1;
	for (int i = 0; i < 30; i++)
	{
		if (sizes[i] == search)
		{
			index = i;
			psize = sizelist[i];
			break;
		}
	}

	if (index == -1)
	{
		psize = "custom, "+wString+"x"+hString;
		orient = "";
	}

	psizeEdit->setText(psize + orient);

}

satdialog::~satdialog()
{
	writePrefs();
	for(uint i = 0; i < cats.size(); i++)
	{
		delete cats[i];
	}
}
