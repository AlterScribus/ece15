#ifndef MARKPARASTYLETEXT_H
#define MARKPARASTYLETEXT_H

#include "scribusapi.h"
#include "markinsert.h"
#include "ui_markparastyletext.h"

const int WHOLE_PARAGRAPH = 0;
const int FIRST_SENTENCE = 1;
const int FIRST_LINE = 2;
const int EXACT_LENGHT = 3;
const int LAST_SPACE = 4;

const int SEARCH_BACKWARD = 0;
const int SEARCH_FORWARD = 1;
const int FIRST_ON_PAGE = 2;
const int LAST_ON_PAGE = 3;

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
