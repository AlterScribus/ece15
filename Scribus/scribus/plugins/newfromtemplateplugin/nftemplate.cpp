/***************************************************************************
 *   Riku Leino, tsoots@gmail.com                                          *
 ***************************************************************************/
#include "nftemplate.h"
#include "nftemplate.moc"
#include "nftdialog.h"
#include <qstring.h>
#include <qcursor.h>
#include <qdir.h>
#include <qwidget.h>
ScribusApp* Carrier;
QWidget* par;

QString Name()
{
    return QObject::tr("New &from Template...");
}

int Type()
{
    return 5;
}

int ID()
{
	return 3;
}

void InitPlug(QWidget *d, ScribusApp *plug)
{
	Carrier = plug;
	par = d;
	Nft = new MenuNFT(d);
	int id = plug->fileMenu->insertItem(QObject::tr("New &from Template..."), -1, plug->fileMenu->indexOf(plug->M_NewFile)+1);
	plug->fileMenu->connectItem(id, Nft, SLOT(RunNFTPlug()));
	plug->fileMenu->setItemEnabled(id, 1);
}

void CleanUpPlug()
{
}

void MenuNFT::RunNFTPlug()
{
	nftdialog* nftdia = new nftdialog(par, Carrier->getGuiLanguage(), Carrier->Prefs.TemplateDir);
	if (nftdia->exec())
	{
		qApp->setOverrideCursor(QCursor(Qt::WaitCursor), true);
		Carrier->LadeDoc(QDir::cleanDirPath(nftdia->currentTemplate->file));
		Carrier->doc->hasName = false;
		Carrier->doc->DocName = nftdia->currentTemplate->name;
		Carrier->ActWin->setCaption(QObject::tr("Template: ") + nftdia->currentTemplate->name);
		QDir::setCurrent(Carrier->Prefs.DocDir);
		Carrier->RemoveRecent(QDir::cleanDirPath(nftdia->currentTemplate->file));
		qApp->restoreOverrideCursor();
	}
	delete nftdia;
}
