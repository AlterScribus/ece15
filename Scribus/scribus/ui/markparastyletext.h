#ifndef MARKPARASTYLETEXT_H
#define MARKPARASTYLETEXT_H

#include "scribusapi.h"
#include "markinsert.h"
#include "ui_markparastyletext.h"

class SCRIBUS_API MarkParaStyleText : public MarkInsert, private Ui::MarkParaStyleText
{
	Q_OBJECT
	
public:
	explicit MarkParaStyleText(const QStringList&, QWidget *parent = 0);
	explicit MarkParaStyleText(const Mark*, const QStringList&, QWidget *parent = 0);
	virtual void values(QString&, int&, int&, int&);
	virtual void setValues(const QString, int, int, int);

protected:
	void changeEvent(QEvent *e);
	void setUiContent(const QStringList);
private slots:
	void on_limitSpin_valueChanged(int arg1);
	void on_endCombo_currentIndexChanged(int index);
};

#endif // MARKPARASTYLETEXT_H
