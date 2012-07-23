#include "marknote.h"
#include "scribus.h"

MarkNoteDlg::MarkNoteDlg(const QList<NotesStyle*>& notesStylesList, QWidget *parent) :
	MarkInsertDlg(notesStylesList, parent)
{
	setupUi(this);

	for (int i = 0; i < notesStylesList.count(); i++)
		ItemList->addItem(notesStylesList.at(i)->name(), QVariant::fromValue((void*) notesStylesList.at(i)));
	setWindowTitle(tr("Insert Foot/Endnote"));
}

NotesStyle* MarkNoteDlg::values()
{
	int index = ItemList->currentIndex();
	return (NotesStyle*) ItemList->itemData(index).value<void*>();
}

void MarkNoteDlg::setValues(NotesStyle* defaultStyle)
{
	ItemList->setCurrentIndex(ItemList->findText(defaultStyle->name()));
}

void MarkNoteDlg::changeEvent(QEvent *e)
{
	QDialog::changeEvent(e);
	switch (e->type()) {
		case QEvent::LanguageChange:
			retranslateUi(this);
			break;
		default:
			break;
	}
}

void MarkNoteDlg::on_buttonBox_accepted()
{
    
}
