#ifndef MARKNOTE_H
#define MARKNOTE_H

#include "MarkInsertDlg.h"
#include "notesset.h"
#include "ui_marknote.h"

class SCRIBUS_API MarkNoteDlg : public MarkInsertDlg, private Ui::MarkNoteDlg
{
	Q_OBJECT
	
public:
	explicit MarkNoteDlg(const QList<NotesSet*>& notessetList, QWidget *parent = NULL);
	virtual NotesSet* values();
	virtual void setValues(NotesSet* defaultSet);
protected:
	void changeEvent(QEvent *e);
private slots:
	void on_buttonBox_accepted();
};

#endif // MARKNOTE_H
