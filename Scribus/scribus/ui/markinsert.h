#ifndef MARKINSERT_H
#define MARKINSERT_H

#include <QDialog>
#include <scribusapi.h>

class NotesStyle;
class Mark;
class PageItem;

class SCRIBUS_API MarkInsert : public QDialog
{
	Q_OBJECT

public:
	MarkInsert(const QList<Mark*>&, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsert(const Mark*, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsert(const QList<NotesStyle*>&, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsert(const QStringList&, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsert(QWidget *parent = 0) : QDialog(parent) {}
	~MarkInsert() {}

	virtual void values(QString&) {}
	virtual void values(QString&, PageItem* &item) {}
	virtual Mark* values(QString&, QString&) { return NULL; }
	virtual void values(QString&, Mark* &mrk) {}
	virtual NotesStyle* values() { return NULL; }
	virtual void values(QString&, int&, int&, int&) {}

	virtual void setValues(const QString) {}
	virtual void setValues(const QString, const QString) {}
	virtual void setValues(const QString, const PageItem*) {}
	virtual void setValues(const QString, const Mark*) {}
	virtual void setValues(const NotesStyle*) {}
	virtual void setValues(const QString, int, int, int) {}

signals:

public slots:

};

#endif // MARKINSERT_H
