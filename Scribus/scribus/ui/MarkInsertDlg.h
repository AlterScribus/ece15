#ifndef MARKINSERTDLG_H
#define MARKINSERTDLG_H

#include <QDialog>
#include <scribusapi.h>

class NotesSet;
class Mark;
class PageItem;

class SCRIBUS_API MarkInsertDlg : public QDialog
{
	Q_OBJECT

public:
	MarkInsertDlg(const QList<Mark*>&, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsertDlg(const Mark*, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsertDlg(const QList<NotesSet*>&, QWidget *parent = 0) : QDialog(parent) {}
	MarkInsertDlg(QWidget *parent = 0) : QDialog(parent) {}
	~MarkInsertDlg() {}

	virtual void values(QString &label) {}
	virtual void values(QString &label, PageItem* &item) {}
	virtual Mark* values(QString& label, QString& text) { return NULL; }
	virtual void values(QString& label, Mark* &mrk) {}
	virtual NotesSet* values() { return NULL; }

	virtual void setValues(const QString label) {}
	virtual void setValues(const QString label, const QString text) {}
	virtual void setValues(const QString label, const PageItem* ptr) {}
	virtual void setValues(const QString label, const Mark* ptr) {}
	virtual void setValues(const NotesSet* defaultSet) {}
	
signals:

public slots:

};

#endif // MARKINSERTDLG_H
