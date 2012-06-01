#include "marknote.h"
#include "scribus.h"

MarkNoteDlg::MarkNoteDlg(const QList<NotesSet*>& notessetList, QWidget *parent) :
	MarkInsertDlg(notessetList, parent)
{
	setupUi(this);

	for (int i = 0; i < notessetList.count(); i++)
		ItemList->addItem(notessetList.at(i)->name(), QVariant::fromValue((void*) notessetList.at(i)));
	setWindowTitle(tr("Insert Foot/Endnote"));
}

NotesSet* MarkNoteDlg::values()
{
	int index = ItemList->currentIndex();
	return (NotesSet*) ItemList->itemData(index).value<void*>();
}

void MarkNoteDlg::setValues(NotesSet* defaultSet)
{
	ItemList->setCurrentIndex(ItemList->findText(defaultSet->name()));
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
