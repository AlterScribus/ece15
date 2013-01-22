/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include <QImageWriter>

#include "api_document.h"
#include "selection.h"
#include "api_color.h"
#include "api_layer.h"
#include "api_imageexport.h"
#include "api_printer.h"
#include "api_textitem.h"
#include "api_imageitem.h"
#include "util.h"
#include "utils.h"
#include "pageitem_textframe.h"
#include "undomanager.h"

DocumentAPI::DocumentAPI() : QObject(COLLECTOR)
{
	qDebug() << "DocumentAPI loaded";
	setObjectName("document"); // XXX: support other documents later
}



DocumentAPI::~DocumentAPI()
{
	qDebug() << "DocumentAPI deleted";
}

/**
 * Scripter.activeDocument.name
 */
QString DocumentAPI::getName()
{
	if (!check()) return NULL;
	if (! ScCore->primaryMainWindow()->m_Doc->hasName)
	{
		return QString("");
	}
	return ScCore->primaryMainWindow()->m_Doc->DocName;
}


/**
 * Scripter.activeDocument.available
 * Property
 * bool value if a document is active
 */
bool DocumentAPI::available()
{
	if (ScCore->primaryMainWindow()->HaveDoc)
		return true;
	return false;
}


/**
 * Scripter.activeDocument.check
 * returns True if found else False and raises error
 */
bool DocumentAPI::check()
{
	if (!available())
	{
		RAISE("Method call requires an open document, none found.");
		return false;
	}
	return true;
}


/**
 * Scripter.activeDocument.modified
 * Property
 * boolean flag if document is modified
 *
 * If a document is modified you will be asked to save it
 * on close or quit.
 */
void DocumentAPI::setModified(bool flag)
{
	if (!check()) return;
	ScCore->primaryMainWindow()->m_Doc->setModified(flag);
}

bool DocumentAPI::modified()
{
	if (!check()) return NULL;
	return ScCore->primaryMainWindow()->m_Doc->isModified();
}

/**
 * Scripter.activeDocument.unit
 * Property
 * boolean flag current measurement unit of the document
 *
 * When starting a script you should query its current unit,
 * Use your preferred unit during the script life and don't forget
 * to set again the previous unit before finishing the script
 */
void DocumentAPI::setUnit(int value)
{
	if (!check()) return;
	ScCore->primaryMainWindow()->m_Doc->setUnitIndex(value);
}

int DocumentAPI::unit()
{
	if (!check()) return NULL;
	return ScCore->primaryMainWindow()->m_Doc->unitIndex();
}

/**
 * Scripter.activeDocument.close()
 *
 * closes the active document without asking save
 */
bool DocumentAPI::close()
{
	if (!check()) return NULL;
	setModified(false);
	bool ret = ScCore->primaryMainWindow()->slotFileClose();
	qApp->processEvents();
	return ret;
}

/**
 * Scripter.activeDocument.save()
 *
 * Saves the activeDocument
 */
bool DocumentAPI::save()
{
	if (!check()) return NULL;
	bool ret = ScCore->primaryMainWindow()->slotFileSave();
	qApp->processEvents();
	return ret;
}

/**
 * Scripter.activeDocument.saveAs(name)
 *
 * saves a document
 */
bool DocumentAPI::saveAs(QString name)
{
	if (!check()) return NULL;
	bool ret = ScCore->primaryMainWindow()->DoFileSave(name);
	if (!ret)
	{
		RAISE("Failed to save document.");
		return NULL;
	}
	return true;
}


/**
 * Scripter.activeDocument.pageCount()
 * returns number of pages in active document as int
 */
int DocumentAPI::pageCount()
{
	return ScCore->primaryMainWindow()->m_Doc->Pages->count();
}



/**
 * Scripter.activeDocument.activePage
 * Property
 * Page object of active page in active Document
 */
QObject *DocumentAPI::activePage()
{
	return new PageAPI(ScCore->primaryMainWindow()->m_Doc->currentPage());
}


/**
 * Scripter.activeDocument.activeItem
 * Property
 * Currently active page item
 */
QObject *DocumentAPI::activeItem()
{
	if (ScCore->primaryMainWindow()->m_Doc->m_Selection->count() == 0)
		return NULL;
	else
	{
		PageItem* item = ScCore->primaryMainWindow()->m_Doc->m_Selection->itemAt(0);
		if(item->asTextFrame())
		{
			TextAPI *textItem = new TextAPI(item->asTextFrame());
			return textItem;
		}
		else if(item->asImageFrame())
		{
			ImageAPI *imageItem = new ImageAPI(item->asImageFrame());
			return imageItem;
		}
		else
		{
			ItemAPI *otherItem = new ItemAPI(item);
			return otherItem;
		}
	}
}

int DocumentAPI::selectionCount()
{
	if(!check())
		RAISE("No document open.");
	return ScCore->primaryMainWindow()->m_Doc->m_Selection->count();
}


/**
 * Scripter.activeDocument.selection
 * Property
 * List of selected Item objects on active document
 */
QList<QVariant> DocumentAPI::selection()
{
	QList<QVariant> l;
	Selection *sel = ScCore->primaryMainWindow()->m_Doc->m_Selection;
	for (int i=0; i < sel->count(); i++)
	{
		/**
		 * Checking whether it is a textframe. If yes, we are trying to cast 
		 * it onto TextWrapper class, which can effectively perform all 
		 * the text operations
		 */
		PageItem *item = sel->itemAt(i);
		if (item->asTextFrame())
		{
			TextAPI *textItem = new TextAPI(item->asTextFrame());
			l.append(qVariantFromValue((QObject *)(textItem)));
		}
		else if(item->asImageFrame())
		{
			ImageAPI *imageItem = new ImageAPI(item->asImageFrame());
			l.append(qVariantFromValue((QObject *)(imageItem)));
		}
		else
		{
			ItemAPI *otherItem = new ItemAPI(item);
			l.append(qVariantFromValue(
			             (QObject *)(otherItem)
			         ));
		}
	}
	return l;
}


/**
 * Scripter.activeDocument.dimensions
 * Property
 * Dimensions object of active page
 */
QObject *DocumentAPI::dimensions()
{
	return new Dimensions(this);
}

/**
 * Scripter.activeDocument.items
 * Property
 * List of all Item objects of active document
 */
QList<QVariant> DocumentAPI::items()
{
	QList<QVariant> l;
	for (int i = 0; i<ScCore->primaryMainWindow()->m_Doc->Items->count(); ++i)
	{
		PageItem *item = ScCore->primaryMainWindow()->m_Doc->Items->at(i);
		if (item->asTextFrame())
		{
			TextAPI *textItem = new TextAPI(item->asTextFrame());
			l.append(qVariantFromValue((QObject *)(textItem)));
		}
		else if(item->asImageFrame())
		{
			ImageAPI *imageItem = new ImageAPI(item->asImageFrame());
			l.append(qVariantFromValue((QObject *)(imageItem)));
		}
		else
		{
			ItemAPI *otherItem = new ItemAPI(item);
			l.append(qVariantFromValue(
			             (QObject *)(otherItem)
			         ));
		}
	}
	return l;
}
//FIXME is there a need to make these informations separate properties?
//jainbasil


void DocumentAPI::setInformation(QString author, QString title, QString desc)
{
	if (!check())
		return;
	ScCore->primaryMainWindow()->m_Doc->documentInfo().setAuthor(author);
	ScCore->primaryMainWindow()->m_Doc->documentInfo().setTitle(title);
	ScCore->primaryMainWindow()->m_Doc->documentInfo().setComments(desc);
	ScCore->primaryMainWindow()->slotDocCh();
}


QList<QVariant> DocumentAPI::layers()
{
	QList<QVariant> l;
	for (int i = 0; i<ScCore->primaryMainWindow()->m_Doc->Layers.count() ; ++i)
	{
		ScLayer *L = &(ScCore->primaryMainWindow()->m_Doc->Layers[i]);
		LayerAPI *layer = new LayerAPI(L);
		l.append(qVariantFromValue((QObject *)(layer)));
	}
	return l;
}

QObject *DocumentAPI::newLayer(QString name)
{
	LayerAPI *l = new LayerAPI(ScCore->primaryMainWindow()->m_Doc->Layers.newLayer(name));
	return (QObject *)(l);
}

void DocumentAPI::removeLayer(QString name)
{
	if (ScCore->primaryMainWindow()->m_Doc->Layers.count() == 1)
	{
		RAISE("Cannot remove the last layer.");
	}
	bool found = false;
	for (int lam=0; lam < ScCore->primaryMainWindow()->m_Doc->Layers.count(); ++lam)
	{
		if (ScCore->primaryMainWindow()->m_Doc->Layers[lam].Name == name)
		{
			ScLayer it2 = ScCore->primaryMainWindow()->m_Doc->Layers.at(lam);
			int num2 = it2.ID;
			if (!num2)
			{
				return;
			}
			ScCore->primaryMainWindow()->m_Doc->removeLayer(num2);
			ScCore->primaryMainWindow()->m_Doc->Layers.removeLayerByID(num2);
			ScCore->primaryMainWindow()->m_Doc->setActiveLayer(0);
			ScCore->primaryMainWindow()->changeLayer(0);
			found = true;
			break;
		}
	}
	if (!found)
	{
		RAISE("Layer not found.");
	}
}

QObject *DocumentAPI::getActiveLayer()
{
	for (int i = 0; i<ScCore->primaryMainWindow()->m_Doc->Layers.count(); ++i)
	{
		if (ScCore->primaryMainWindow()->m_Doc->Layers[i].Name == ScCore->primaryMainWindow()->m_Doc->activeLayerName())
		{
			ScLayer *L = &(ScCore->primaryMainWindow()->m_Doc->Layers[i]);
			return new LayerAPI(L);
		}
	}
	return NULL;
}

QString DocumentAPI::getActiveLayerName()
{
	return ScCore->primaryMainWindow()->m_Doc->activeLayerName();
}

void DocumentAPI::setActiveLayer(QString name)
{
	bool found = ScCore->primaryMainWindow()->m_Doc->setActiveLayer(name);
	if (found)
		ScCore->primaryMainWindow()->changeLayer(ScCore->primaryMainWindow()->m_Doc->activeLayer());
	else
		RAISE("Layer not found.");
}

/**
 * Scripter.activeDocument.colors
 * Property
 * Colors of activeDocument
 */
QList<QVariant> DocumentAPI::colors()
{
	QList<QVariant> l;

	ColorList names = ScCore->primaryMainWindow()->m_Doc->PageColors;
	ColorList::Iterator it;
	for (it = names.begin(); it != names.end(); ++it)
	{
		ScColor *value = &(names[it.key()]);
		ColorAPI *color = new ColorAPI(value, it.key());
		l.append(qVariantFromValue((QObject *)(color)));
	}
	return l;
}

QObject *DocumentAPI::getColor(QString name)
{
	return new ColorAPI(&(ScCore->primaryMainWindow()->m_Doc->PageColors[name]), name);
}

QObject *DocumentAPI::newColorCMYK(QString name, int c, int m, int y, int k)
{
	if (name.isEmpty())
	{
		RAISE("Cannot create a color with an empty name");
	}
	if (ScCore->primaryMainWindow()->m_Doc->PageColors.contains(name))
	{
		ScCore->primaryMainWindow()->m_Doc->PageColors.insert(name, ScColor(c, m, y, k));
	}
	else
	{
		ScCore->primaryMainWindow()->m_Doc->PageColors[name].setColor(c, m, y, k);
	}
	return getColor(name);
}

QObject *DocumentAPI::newColorRGB(QString name, int r, int g, int b)
{
	if (name.isEmpty())
	{
		RAISE("Cannot create a color with an empty name");
	}
	if (ScCore->primaryMainWindow()->m_Doc->PageColors.contains(name))
	{
		ScCore->primaryMainWindow()->m_Doc->PageColors.insert(name, ScColor(r, g, b));
	}
	else
	{
		ScCore->primaryMainWindow()->m_Doc->PageColors[name].setColorRGB(r, g, b);
	}
	return getColor(name);
}

QList<QVariant> DocumentAPI::supportedImageTypes()
{
	QList<QVariant> l;
	QList<QByteArray> list = QImageWriter::supportedImageFormats();
	for (QList<QByteArray>::Iterator it = list.begin(); it != list.end(); ++it)
	{
		l.append(QString((*it)).toLatin1().constData());
	}
	return l;
}

bool DocumentAPI::exportAsImages(QString dirName, QString type, double scale, double quality, double dpi, bool overwrite)
{
	std::vector<int> pageNs;
	ImageExport *ie = new ImageExport(dirName, type, scale, quality, dpi, overwrite);
	parsePagesString("*", &pageNs, ScCore->primaryMainWindow()->m_Doc->DocPages.count());
	bool result = ie->exportInterval(ScCore->primaryMainWindow()->m_Doc, pageNs);
	return result;
}

QObject* DocumentAPI::Printer()
{
	return new PrinterAPI();
}

QList<QVariant> DocumentAPI::masterPages()
{
	QList<QVariant> names;
	if (!check())
		return names;
	QMap<QString,int>::const_iterator it(ScCore->primaryMainWindow()->m_Doc->MasterNames.constBegin());
	QMap<QString,int>::const_iterator itEnd(ScCore->primaryMainWindow()->m_Doc->MasterNames.constEnd());
	for (; it != itEnd; ++it)
	{
		names.append(it.key());
	}
	return names;
}

/**
 * Scripter.activeDocument.createMasterPage(name)
 */
void DocumentAPI::createMasterPage(QString name)
{
	if (!check()) return;
	if (ScCore->primaryMainWindow()->m_Doc->MasterNames.contains(name))
	{
		RAISE("Master page already exists");
		return;
	}
	ScCore->primaryMainWindow()->m_Doc->addMasterPage(ScCore->primaryMainWindow()->m_Doc->MasterPages.count(), name);
}

/**
 * Scripter.activeDocument.deleteMasterPage(name)
 */
void DocumentAPI::deleteMasterPage(QString name)
{
	if (!check()) return;

	if (!ScCore->primaryMainWindow()->m_Doc->MasterNames.contains(name))
	{
		RAISE("Master page does not exist");
		return;
	}
	if (name == "Normal")
	{
		RAISE("Can not delete the Normal master page");
		return;
	}
	bool oldMode = ScCore->primaryMainWindow()->m_Doc->masterPageMode();
	ScCore->primaryMainWindow()->m_Doc->setMasterPageMode(true);
	ScCore->primaryMainWindow()->deletePage2(ScCore->primaryMainWindow()->m_Doc->MasterNames[name]);
	ScCore->primaryMainWindow()->m_Doc->setMasterPageMode(oldMode);
}

void DocumentAPI::closeMasterPage(QString name)
{
	if (!check())
		return;
	ScCore->primaryMainWindow()->view->hideMasterPage();
}

void DocumentAPI::editMasterPage(QString name)
{
	if (!check())
		return;
	const QMap<QString,int>& masterNames(ScCore->primaryMainWindow()->m_Doc->MasterNames);
	const QMap<QString,int>::const_iterator it(masterNames.find(name));
	if (it == masterNames.constEnd())
	{
		RAISE("Master page not found");
		return;
	}
	ScCore->primaryMainWindow()->view->showMasterPage(*it);
}

QList< QVariant > DocumentAPI::pages()
{
	QList<QVariant> pages;
	if (!check())
		return pages;
	QList<ScPage*> *allPages = ScCore->primaryMainWindow()->m_Doc->Pages;
	for(int i=0; i< allPages->count(); i++) {
	  pages.append(qVariantFromValue((QObject *)(new PageAPI(allPages->at(i)))));
	}
	return pages;
}


void DocumentAPI::setActivePage(int pageNumber)
{
	if(!check())
	    return;
	pageNumber--;
	if ((pageNumber < 0) || (pageNumber > static_cast<int>(ScCore->primaryMainWindow()->m_Doc->Pages->count())-1))
	{
		RAISE("Page number out of range.");
		return;
	}
	ScCore->primaryMainWindow()->view->GotoPage(pageNumber);
}


void DocumentAPI::loadStylesFromFile(QString name)
{
	if (!check())
		return;
	ScCore->primaryMainWindow()->m_Doc->loadStylesFromFile(name);
}

QObject* DocumentAPI::selectItem(QString name)
{
	if (!check())
		RAISE("No document open");
	PageItem *i = GetUniqueItem(name);
	if (i == NULL)
	{
		RAISE("No item with this name");
	}
	ScCore->primaryMainWindow()->view->SelectItem(i);
	return activeItem();
}

void DocumentAPI::deleteItem(QString name)
{
	if (name.isEmpty())
	{
		RAISE("name cannot be empty.");
		return;
	}
	if (!check())
		return;
	PageItem *i = GetUniqueItem(name);
	if (i == NULL)
	{
		RAISE("Unable to find the item.");
		return;
	}
	ScCore->primaryMainWindow()->m_Doc->m_Selection->clear();
	ScCore->primaryMainWindow()->m_Doc->m_Selection->addItem(i);
	ScCore->primaryMainWindow()->m_Doc->itemSelection_DeleteItem();
}

bool DocumentAPI::itemExists(QString name)
{
	if (name.isEmpty())
	{
		RAISE("Name cannot be empty");
		return false;
	}
	if (!check())
	{
		RAISE("No active document");
	}
	if (ItemExists(name))
		return true;
	return false;
}

QList< QVariant > DocumentAPI::styles()
{
	QList<QVariant> styleList;
	if (!check())
		RAISE("No active document.");
	for (int i=0; i < ScCore->primaryMainWindow()->m_Doc->paragraphStyles().count(); ++i)
	{
		styleList.append(ScCore->primaryMainWindow()->m_Doc->paragraphStyles()[i].name());
	}
	return styleList;
}

void DocumentAPI::deselectItems()
{
	if (!check())
		return;
	ScCore->primaryMainWindow()->view->Deselect();
}

QString DocumentAPI::groupItems(QList< QVariant > list)
{
	QString name;
	if (!check())
		RAISE("No document open");
	if (list.isEmpty() && ScCore->primaryMainWindow()->m_Doc->m_Selection->count() < 2)
	{
		RAISE("Need selection or argument list of items to group");
	}
	Selection *tempSelection=0;
	Selection *finalSelection=0;
	//uint ap = ScCore->primaryMainWindow()->doc->currentPage()->pageNr();
	// If we were passed a list of items to group...
	if (!list.isEmpty())
	{
		int len = list.length();
		tempSelection = new Selection(ScCore->primaryMainWindow(), false);
		for (int i = 0; i < len; i++)
		{
			// FIXME: We might need to explicitly get this string as utf8
			// but as sysdefaultencoding is utf8 it should be a no-op to do
			// so anyway.
			name = list[i].toString();
			PageItem *ic = GetUniqueItem(name);
			if (ic == NULL)
			{
				delete tempSelection;
				return NULL;
			}
			tempSelection->addItem(ic, true);
		}
		finalSelection=tempSelection;
	}
	else
		finalSelection=ScCore->primaryMainWindow()->m_Doc->m_Selection;
	if (finalSelection->count() < 2)
	{
		// We can't very well group only one item
		RAISE("Cannot group less than two items");
		finalSelection=0;
		delete tempSelection;
		return NULL;
	}

	const PageItem* group = ScCore->primaryMainWindow()->m_Doc->itemSelection_GroupObjects(false, false, finalSelection);
	finalSelection=0;
	delete tempSelection;

	return (group ? group->itemName() : NULL);
}

void DocumentAPI::unGroupItems(QString name)
{
	if (!check())
		RAISE("No document open");
	PageItem *i = GetUniqueItem(name);
	if (i == NULL)
		RAISE("Item not found.");
	ScCore->primaryMainWindow()->view->Deselect();
	ScCore->primaryMainWindow()->view->SelectItem(i);
	ScCore->primaryMainWindow()->UnGroupObj();
}

void DocumentAPI::scaleGroup(double factor, QString name)
{
	if (!check())
		RAISE("No document open");
	if (factor == 0.0)
	{
		RAISE("Cannot scale by 0%.");
		return;
	}
	PageItem *i = GetUniqueItem(name);
	if (i == NULL)
		return;
	ScCore->primaryMainWindow()->view->Deselect();
	ScCore->primaryMainWindow()->view->SelectItem(i);
//	int h = ScCore->primaryMainWindow()->view->frameResizeHandle;
//	ScCore->primaryMainWindow()->view->frameResizeHandle = 1;
	ScCore->primaryMainWindow()->view->startGroupTransaction(Um::Resize, "", Um::IResize);
	ScCore->primaryMainWindow()->m_Doc->scaleGroup(factor, factor);
	ScCore->primaryMainWindow()->view->endGroupTransaction();
}

Dimensions::Dimensions(QObject *parent) : QObject(COLLECTOR)
{
	qDebug() << "Dimensions created";
}

/**
 * Scripter.activeDocument.dimensions.width
 * Property
 * width of active document in points as double (read-only, for now)
 */
double Dimensions::width()
{
	return ScCore->primaryMainWindow()->m_Doc->pageWidth();
}

/**
 * Scripter.activeDocument.dimensions.height
 * Property
 * height of active document in points as double (read-only, for now)
 */
double Dimensions::height()
{
	return ScCore->primaryMainWindow()->m_Doc->pageHeight();
}

/**
 * Scripter.activeDocument.margins
 * Property
 * Margins object of active document
 */
QObject *DocumentAPI::margins()
{
	return new Margins(this);
}

Margins::Margins(QObject *parent) : QObject(COLLECTOR)
{
	qDebug() << "Margins created";
}

/**
 * Scripter.activeDocument.margins.top
 * Property
 * top-margin of active document as double
 */
double Margins::top()
{
	return ScCore->primaryMainWindow()->m_Doc->margins()->Top;
}



/**
 * Scripter.activeDocument.margins.top
 * Property
 * left-margin of active document as double
 */
double Margins::left()
{
	return ScCore->primaryMainWindow()->m_Doc->margins()->Left;
}



/**
 * Scripter.activeDocument.margins.top
 * Property
 * right-margin of active document as double
 */
double Margins::right()
{
	return ScCore->primaryMainWindow()->m_Doc->margins()->Right;
}



/**
 * Scripter.activeDocument.margins.top
 * Property
 * top-margin of active document as double
 */
double Margins::bottom()
{
	return ScCore->primaryMainWindow()->m_Doc->margins()->Bottom;
}


/**
 * Scripter.activeDocument.margins.set(lr, tpr, btr, rr)
 * args are double
 *
 * Use this method if you want to change more than one margin
 * at a time
 */

void Margins::set(double lr, double tpr, double btr, double rr)
{
	MarginStruct margins(tpr, lr, btr, rr);
	ScCore->primaryMainWindow()->m_Doc->resetPage(ScCore->primaryMainWindow()->m_Doc->pagePositioning(), &margins);
	ScCore->primaryMainWindow()->view->reformPages();
	ScCore->primaryMainWindow()->m_Doc->setModified(true);
	ScCore->primaryMainWindow()->view->GotoPage(ScCore->primaryMainWindow()->m_Doc->currentPageNumber());
	ScCore->primaryMainWindow()->view->DrawNew();
}



void Margins::setTop(double value)
{
	set(left(), value, bottom(), right());
}



void Margins::setLeft(double value)
{
	set(value, top(), bottom(), right());
}



void Margins::setRight(double value)
{
	set(left(), top(), bottom(), value);
}



void Margins::setBottom(double value)
{
	set(left(), top(), value, right());
}
