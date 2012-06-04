#include <QMessageBox>

#include "notessetmanager.h"
#include "pageitem_noteframe.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "scribus.h"
#include "scmessagebox.h"

NotesSetsManager::NotesSetsManager(QWidget *parent, const char *name)
	: ScrPaletteBase(parent, name), m_doc(NULL)
{
	setupUi(this);
	QString pname(name);
	if (pname.isEmpty())
		pname = "notessetsManager";
	m_prefs = PrefsManager::instance()->prefsFile->getContext(pname);

	setBlockSignals(true);
	
	setDoc(0);
	languageChange();
	NSlistBox->setInsertPolicy(QComboBox::InsertAlphabetically);

	NumberingBox->addItem("1 2 3");
	NumberingBox->addItem("i ii iii");
	NumberingBox->addItem("I II III");
	NumberingBox->addItem("a b c");
	NumberingBox->addItem("A B C");
	NumberingBox->addItem("*");

	RangeBox->addItem(tr("Document"));
	RangeBox->addItem(tr("Section"));
	RangeBox->addItem(tr("Story"));
	RangeBox->addItem(tr("Page"));
	RangeBox->addItem(tr("Frame"));

	StartSpinBox->setMinimum(1);
	StartSpinBox->setMaximum(99999);
	changesMap.clear();
	addNewNsMode = false;

	setBlockSignals(isVisible());
}

NotesSetsManager::~NotesSetsManager()
{
	storeVisibility(this->isVisible());
	storePosition();
	storeSize();
}

void NotesSetsManager::languageChange()
{
	bool wasSignalsBlocked = signalsBlocked();
	setBlockSignals(true);
	
	if (addNewNsMode)
	{
		OKButton->setText(tr("Cancel"));
		OKButton->setToolTip(tr("Dialog is in adding new notes set mode. After pressing Cancel button dialog will be switched into normal notes sets edit mode."));
	}
	else
	{
		OKButton->setText("OK");
		OKButton->setToolTip("");
	}
	NewButton->setText(tr("Add New Set"));
	NewButton->setToolTip(tr("New notes set will be add to document only after wpressing Apply butoton.\nYou cannot switch to different notes set before you apply that new one or press Cancel button and exit from adding mode."));

	setBlockSignals(wasSignalsBlocked);
}

void NotesSetsManager::setDoc(ScribusDoc *doc)
{
	bool wasSignalsBlocked = signalsBlocked();
	setBlockSignals(true);
	if (m_doc != NULL)
		disconnect(m_doc->scMW(), SIGNAL(UpdateRequest(int)), this , SLOT(handleUpdateRequest(int)));
	m_doc = doc;
	paraStyleCombo->setDoc(m_doc);
	charStyleCombo->setDoc(m_doc);
	if (m_doc != NULL)
	{
		updateNSList();
		NSlistBox->setCurrentIndex(0);
		readNSet(NSlistBox->currentText());
		setEnabled(true);
		ApplyButton->setEnabled(false);
		connect(m_doc->scMW(), SIGNAL(UpdateRequest(int)), this , SLOT(handleUpdateRequest(int)));
	}
	else
	{
		changesMap.clear();
		NewNameEdit->clear();
		setEnabled(false);
	}
	setBlockSignals(wasSignalsBlocked);
}

void NotesSetsManager::handleUpdateRequest(int updateFlags)
{
	bool wasSignalsBlocked = signalsBlocked();
	setBlockSignals(true);
	if ((updateFlags & reqCharStylesUpdate) || (updateFlags & reqTextStylesUpdate))
		charStyleCombo->updateFormatList();
	if ((updateFlags & reqParaStylesUpdate) || (updateFlags & reqTextStylesUpdate))
		paraStyleCombo->updateFormatList();
	readNSet(NSlistBox->currentText());
	setBlockSignals(wasSignalsBlocked);
}

void NotesSetsManager::updateNSList()
{
	bool wasSignalsBlocked = signalsBlocked();
	NSlistBox->blockSignals(true);
	if (m_doc == NULL)
		NSlistBox->setEnabled(false);
	else
	{
		NSlistBox->clear();
		changesMap.clear();
		for (int a = 0; a < m_doc->m_docNotesSetsList.count(); ++a)
		{
			NSlistBox->addItem(m_doc->m_docNotesSetsList.at(a)->name());
			changesMap.insert(m_doc->m_docNotesSetsList.at(a)->name(), *(m_doc->m_docNotesSetsList.at(a)));
		}
		NSlistBox->setEnabled(true);
		if (NSlistBox->currentText() != tr("default"))
			DeleteButton->setEnabled(true);
		else
			DeleteButton->setEnabled(false);
	}
	NSlistBox->blockSignals(wasSignalsBlocked);
	
	DeleteButton->setEnabled(NSlistBox->currentText() != tr("default"));
}

void NotesSetsManager::setBlockSignals(bool block)
{
	foreach (QWidget* obj, findChildren<QWidget *>())
	{
		obj->blockSignals(block);
	}
	paraStyleCombo->blockSignals(block);
	charStyleCombo->blockSignals(block);
}

void NotesSetsManager::setNSet(NotesSet * NS)
{
	if (NS == NULL)
		return;
	bool wasSignalsBlocked = signalsBlocked();
	setBlockSignals(true);
	NSlistBox->setCurrentIndex(NSlistBox->findText(NS->name()));
	NewNameEdit->setText(NS->name());
	if (NS->name() == tr("default"))
		NewNameEdit->setEnabled(false);
	else
		NewNameEdit->setEnabled(true);
	FootRadio->setChecked(!NS->isEndNotes());
	if (NS->range() == NSRframe)
		EndRadio->setEnabled(false);
	else
		EndRadio->setEnabled(true);
	EndRadio->setChecked(NS->isEndNotes());
	NumberingBox->setCurrentIndex((int) NS->getType());
	RangeBox->setCurrentIndex((int) NS->range());
	StartSpinBox->setValue(NS->start());
	PrefixEdit->setText(NS->prefix());
	SuffixEdit->setText(NS->suffix());
	SuperMasterCheck->setChecked(NS->isSuperscriptInMaster());
	SuperNoteCheck->setChecked(NS->isSuperscriptInNote());
	if (!NS->notesParStyle().isEmpty() && (NS->notesParStyle() != tr("No Style")))
		paraStyleCombo->setCurrentIndex(paraStyleCombo->findText(NS->notesParStyle()));
	if (!NS->marksChStyle().isEmpty() && (NS->marksChStyle() != tr("No Style")))
		charStyleCombo->setCurrentIndex(charStyleCombo->findText(NS->marksChStyle()));
	AutoH->setChecked(NS->isAutoNotesHeight());
	AutoW->setChecked(NS->isAutoNotesWidth());
	AutoWeld->setChecked(NS->isAutoWeldNotesFrames());
	//for endnotes remove FRAME range (same effect as footnotes for frame)
	//and disable autofixing size of notes frames
	int rangeFrameIndex = RangeBox->findText(tr("Frame"));
	if (NS->isEndNotes())
	{
		AutoW->setEnabled(false);
		AutoWeld->setEnabled(false);
		if (rangeFrameIndex >= 0)
			RangeBox->removeItem(rangeFrameIndex);
	}
	else
	{
		AutoW->setEnabled(true);
		AutoWeld->setEnabled(true);
		if (rangeFrameIndex == -1)
			RangeBox->addItem(tr("Frame"));
	}
	AutoRemove->setChecked(NS->isAutoRemoveEmptyNotesFrames());

	ApplyButton->setEnabled(false);
	setBlockSignals(wasSignalsBlocked);
}

void NotesSetsManager::readNSet(QString nsName)
{
	NotesSet * NS = m_doc->getNS(nsName);
	setNSet(NS);
}

void NotesSetsManager::on_NSlistBox_currentIndexChanged(const QString &arg1)
{
	if (arg1 != tr("default"))
		DeleteButton->setEnabled(true);
	else
		DeleteButton->setEnabled(false);
	readNSet(arg1);
}

void NotesSetsManager::on_ApplyButton_clicked()
{
	if (addNewNsMode)
	{
		QString newName = NSlistBox->currentText();
		NotesSet newNS = changesMap.value(newName);
		if (m_doc->validateNSet(newNS))
		{
			addNewNsMode = false;
			OKButton->setText("OK");
			ApplyButton->setText(tr("Apply"));
			m_doc->newNotesSet(newNS);
			updateNSList();
			NSlistBox->setCurrentIndex(NSlistBox->findText(newNS.name()));
		}
		else
			return;
	}
	else
	{
		bool updateNS = false;
		//remeber current NSet
		QString currNS = NSlistBox->currentText();
		NotesSet* NS = NULL;
		
		foreach (const QString &nsName, changesMap.keys())
		{
			NotesSet n = changesMap.value(nsName);

			if (nsName != n.name())
			{
				//new name for existing set
				QString newName = n.name();
				getUniqueName(newName, changesMap.keys(),"=");
				n.setName(newName);
				NewNameEdit->setText(newName);
				//current NSet name change
				if (currNS == nsName)
					currNS = newName;
				NS = m_doc->getNS(nsName);
				m_doc->renameNotesSet(NS, newName);
				updateNS = true;
			}

			//validate settings
			if (!m_doc->validateNSet(n))
			{
				NSlistBox->setCurrentIndex(NSlistBox->findText(n.name()));
				break;
			}

			//change settings and update marks
			if (NS == NULL)
				NS = m_doc->getNS(n.name());
			if (*NS != n)
			{
				//converting foot <--> end notes or changing footnotes range
				if ((NS->isEndNotes() != n.isEndNotes()) || (NS->isEndNotes() && n.isEndNotes() && NS->range() != n.range()))
				{
					foreach (PageItem_NoteFrame* nF, m_doc->listNotesFrames(NS))
						m_doc->delNoteFrame(nF, true);
					if (n.isEndNotes())
						m_doc->flag_updateEndNotes = true;
				}
				//after changing automation features for notes set notes frames must must be updated
				if (NS->isAutoWeldNotesFrames() != n.isAutoWeldNotesFrames())
					m_doc->flag_notesChanged = true; //notesframes welding must be updated
				else if (NS->isAutoNotesWidth() != n.isAutoNotesWidth() && n.isAutoNotesWidth())
					m_doc->flag_notesChanged = true; //notesframes height must be updated
				else if (NS->isAutoNotesHeight() != n.isAutoNotesHeight() && n.isAutoNotesHeight())
					m_doc->flag_notesChanged = true; //notesframes width must be updated
				*NS = n; 
				updateNS = true;
				//invalidate all text frames with marks from current changed notes set
				foreach (PageItem* item, m_doc->DocItems)
				{
					if (item->isTextFrame() && !item->isNoteFrame() && item->asTextFrame()->hasMark(NS))
						item->invalid = true;
				}
				m_doc->updateNotesNums(NS);
				if (m_doc->flag_updateEndNotes)
					m_doc->updateEndnotesFrames(NS);
				m_doc->updateNotesFramesStyles(NS);
				if (m_doc->flag_notesChanged)
					m_doc->updateNotesFramesSettings(NS);
			}
		}
		if (updateNS)
		{
			updateNSList();
			m_doc->flag_updateNotesLabels = true;
			//m_doc->notesFramesUpdate();
			m_doc->changed();
			m_doc->regionsChanged()->update(QRectF());
		}
		//restore NSet index
		readNSet(currNS);
	}

	ApplyButton->setEnabled(false);
	NSlistBox->setEnabled(true);
	NewButton->setEnabled(true);
}

void NotesSetsManager::on_DeleteButton_clicked()
{
	QString nsName = NSlistBox->currentText();
	int t = ScMessageBox::warning(m_doc->scMW(), QObject::tr("Attention! Deleting Notes Set"), "<qt>" +
								 QObject::tr("You are going to delete notes set %1, but you must to know, that it deletes all notes inputs in notes frames and notes marks in text with that notes set.").arg(nsName) + "</qt>",
								 QMessageBox::Ok, QMessageBox::Abort | QMessageBox::Default);
	if (t == QMessageBox::Ok)
	{
		m_doc->deleteNoteSet(nsName);
		m_doc->changed();
		setDoc(m_doc);
	}
}

void NotesSetsManager::on_NewButton_clicked()
{
	QString oldName = NSlistBox->currentText();
	NotesSet newNS = changesMap.value(oldName);
	QString newName = oldName;
	getUniqueName(newName, changesMap.keys(), "_");
	newNS.setName(newName);
	changesMap.insert(newName, newNS);
	setNSet(&newNS);
	
	NewNameEdit->setEnabled(true);
	NSlistBox->addItem(newName);
	NSlistBox->setCurrentIndex(NSlistBox->findText(newName));
	NSlistBox->setEnabled(false);
	ApplyButton->setText(tr("Add Set"));
	ApplyButton->setEnabled(true);
	DeleteButton->setEnabled(false);
	NewButton->setEnabled(false);
	addNewNsMode = true;
	OKButton->setText(tr("Cancel Adding"));
	OKButton->setToolTip(tr("Notes Set Manager is in adding new notes set mode. After pressing Cancel button Notes Sets Manager switch into normal notes sets edit mode."));
}

void NotesSetsManager::on_OKButton_clicked()
{
	if (OKButton->text() != "OK")
	{
		//in adding new set mode go back to normal editing mode
		OKButton->setText("OK");
		NewButton->setEnabled(true);
		addNewNsMode = false;
		QString newName = NSlistBox->currentText();
		changesMap.remove(newName);
		int index = NSlistBox->findText(newName);
		NSlistBox->removeItem(index);
		NSlistBox->setCurrentIndex(index-1);
		on_NSlistBox_currentIndexChanged(NSlistBox->currentText());
	}
	else
	{
		if (ApplyButton->isEnabled())
			//apply changes
			on_ApplyButton_clicked();

		//in normal mode close Notes Sets Manager
		close();
	}
}

void NotesSetsManager::on_NewNameEdit_textChanged(const QString &arg1)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setName(arg1);
	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_FootRadio_toggled(bool checked)
{
	bool wasSignalsBlocked = signalsBlocked();
	setBlockSignals(true);

	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setEndNotes(!checked);
	changesMap.insert(NSlistBox->currentText(), ns);
	EndRadio->setChecked(!checked);
	if (checked)
	{
		ns.setAutoNotesWidth(true);
		AutoW->setEnabled(true);
		AutoW->setChecked(true);
		ns.setAutoWeldNotesFrames(true);
		AutoWeld->setEnabled(true);
		AutoWeld->setChecked(true);
	}
	
	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
	setBlockSignals(wasSignalsBlocked);
}

void NotesSetsManager::on_EndRadio_toggled(bool checked)
{
	bool wasSignalsBlocked = signalsBlocked();
	setBlockSignals(true);

	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setEndNotes(checked);
	FootRadio->setChecked(!checked);
	if (checked)
	{
		ns.setAutoNotesWidth(false);
		AutoW->setChecked(false);
		AutoW->setEnabled(false);
		ns.setAutoWeldNotesFrames(false);
		AutoWeld->setChecked(false);
		AutoWeld->setEnabled(false);
	}
	
	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
	setBlockSignals(wasSignalsBlocked);
}

void NotesSetsManager::on_NumberingBox_currentIndexChanged(int index)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setType((NumerationType) index);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_RangeBox_currentIndexChanged(int index)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setRange((NumerationRange) index);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_StartSpinBox_valueChanged(int arg1)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setStart(arg1);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_PrefixEdit_textChanged(const QString &arg1)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setPrefix(arg1);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_SuffixEdit_textChanged(const QString &arg1)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setSuffix(arg1);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_SuperMasterCheck_toggled(bool checked)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setSuperscriptInMaster(checked);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_SuperNoteCheck_toggled(bool checked)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setSuperscriptInNote(checked);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_AutoH_toggled(bool checked)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setAutoNotesHeight(checked);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_AutoW_toggled(bool checked)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setAutoNotesWidth(checked);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_AutoWeld_toggled(bool checked)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setAutoWeldNotesFrames(checked);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_AutoRemove_toggled(bool checked)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	ns.setAutoRemoveEmptyNotesFrames(checked);

	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_paraStyleCombo_currentIndexChanged(const int &arg1)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	if (arg1 == 0)
		ns.setNotesParStyle("");
	else
		ns.setNotesParStyle(paraStyleCombo->itemText(arg1));
	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}

void NotesSetsManager::on_charStyleCombo_currentIndexChanged(const int &arg1)
{
	NotesSet ns = changesMap.value(NSlistBox->currentText());
	if (arg1 == 0)
		ns.setMarksCharStyle("");
	else
		ns.setMarksCharStyle(charStyleCombo->itemText(arg1));
	changesMap.insert(NSlistBox->currentText(), ns);
	ApplyButton->setEnabled(true);
}
