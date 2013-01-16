/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef API_DOCUMENT_H_
#define API_DOCUMENT_H_

#include <QObject>
#include <QtDebug>
#include <QApplication>

#include "scripterimpl.h"

class DocumentAPI : public QObject
{
		Q_OBJECT
		Q_PROPERTY(QString name READ getName)
		Q_PROPERTY(bool available READ available)
		Q_PROPERTY(QObject* margins READ margins)
		Q_PROPERTY(bool modified READ modified WRITE setModified)
		Q_PROPERTY(QObject* activePage READ activePage)
		Q_PROPERTY(int pageCount READ pageCount)
		Q_PROPERTY(QObject* activeItem READ activeItem)
		Q_PROPERTY(QObject* dimensions READ dimensions)
		Q_PROPERTY(QList<QVariant> items READ items)
		Q_PROPERTY(QList<QVariant> selection READ selection)
		Q_PROPERTY(int selectionCount READ selectionCount)
		Q_PROPERTY(QList<QVariant> colors READ colors)
		Q_PROPERTY(QList<QVariant> layers READ layers)
		Q_PROPERTY(QList<QVariant> masterPages READ masterPages)
		Q_PROPERTY(QList<QVariant> styles READ styles)
		Q_PROPERTY(QList<QVariant> pages READ pages)
		Q_PROPERTY(int unit READ unit WRITE setUnit)

	public:
		DocumentAPI();
		virtual ~DocumentAPI();
		
	public slots:
		bool check();
		bool close();
		bool save();
		bool saveAs(QString name);
		void setInformation(QString author, QString title, QString desc);

		QObject *newLayer(QString name);
		void removeLayer(QString name);
		QObject *getActiveLayer();
		QString getActiveLayerName();
		void setActiveLayer(QString name);

		QObject *newColorCMYK(QString name, int c, int m, int y, int k);
		QObject *newColorRGB(QString name, int r, int g, int b);
		QObject *getColor(QString name);

		QList<QVariant> supportedImageTypes();
		bool exportAsImages(QString dirName, QString type, double scale, double quality, double dpi, bool overwrite);

		QObject* Printer();

		QList<QVariant> masterPages();
		void createMasterPage(QString name);
		void deleteMasterPage(QString name);
		void closeMasterPage(QString name);
		void editMasterPage(QString name);

		QList<QVariant> pages();
		void setActivePage(int pageNumber);

		void loadStylesFromFile(QString name);

		void moveSelectionToFront()
		{
			ScCore->primaryMainWindow()->doc->bringItemSelectionToFront();
		}

		void moveSelectionToBack()
		{
			ScCore->primaryMainWindow()->doc->sendItemSelectionToBack();
		}

		QObject* selectItem(QString name);
		void deleteItem(QString name);
		bool itemExists(QString name);
		void deselectItems();

		QString groupItems(QList<QVariant> list);
		void unGroupItems(QString name);
		void scaleGroup(double factor, QString name);

	private:
		QObject *margins();
		QString getName();
		bool available();
		bool modified();
		void setModified(bool flag);
		int unit();
		void setUnit(int value);
		QObject *activePage();
		int pageCount();
		QList<QVariant> selection();
		int selectionCount();
		QObject *activeItem();
		QObject *dimensions();
		QList<QVariant> colors();
		QList<QVariant> styles();
		QList<QVariant> items();
		QList<QVariant> layers();
};


class Margins : public QObject
{
		Q_OBJECT
		Q_PROPERTY(double top READ top WRITE setTop)
		Q_PROPERTY(double left READ left WRITE setLeft)
		Q_PROPERTY(double right READ right WRITE setRight)
		Q_PROPERTY(double bottom READ bottom WRITE setBottom)

	public:
		Margins(QObject *parent);
		virtual ~Margins()
		{
			qDebug() << "Margins deleted";
		}

	public slots:
		void set(double lr, double tpr, double btr, double rr);

	private:
		double top();
		void setTop(double value);
		double left();
		void setLeft(double value);
		double right();
		void setRight(double value);
		double bottom();
		void setBottom(double value);

};



class Dimensions : public QObject
{
		Q_OBJECT
		Q_PROPERTY(double width READ width)
		Q_PROPERTY(double height READ height)

	public:
		Dimensions(QObject *parent);

		virtual ~Dimensions()
		{
			qDebug() << "Dimensions deleted";
		}

	private:
		double width();
		double height();
		QList<QVariant> items;
};


#endif /*API_DOCUMENT_H_*/
