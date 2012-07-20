#ifndef NOTESSETMANAGER_H
#define NOTESSETMANAGER_H

#include "notesset.h"
#include "ui/scrpalettebase.h"
#include "ui/spalette.h"
#include "ui_notessetmanager.h"
class ScribusDoc;
class ScribusMainWindow;

class SCRIBUS_API NotesSetsManager : public ScrPaletteBase, private Ui::NotesSetManager
{
	Q_OBJECT

public:
	explicit NotesSetsManager(QWidget *parent = 0, const char *name = "notessetsManager");
	~NotesSetsManager();

private:
	ScribusDoc         *m_Doc;
	PrefsContext       *m_prefs;
	QMap<QString, NotesSet> changesMap; //<NSname to change, NSet new values>
	void updateNSList();
	void readNSet(QString nsName);
	void changeNSet();
	void setBlockSignals(bool block);
	bool addNewNsMode;

public slots:
	void setDoc(ScribusDoc *doc);
	void handleUpdateRequest(int updateFlags);
	void languageChange();
	void setNSet(NotesSet* NS);

private slots:
	void on_NSlistBox_currentIndexChanged(const QString &arg1);
	void on_ApplyButton_clicked();
	void on_DeleteButton_clicked();
	void on_OKButton_clicked();
	void on_NewNameEdit_textChanged(const QString &arg1);
	void on_FootRadio_toggled(bool checked);
	void on_EndRadio_toggled(bool checked);
	void on_NumberingBox_currentIndexChanged(int index);
	void on_RangeBox_currentIndexChanged(int index);
	void on_StartSpinBox_valueChanged(int arg1);
	void on_PrefixEdit_textChanged(const QString &arg1);
	void on_SuffixEdit_textChanged(const QString &arg1);
	void on_SuperMasterCheck_toggled(bool checked);
	void on_SuperNoteCheck_toggled(bool checked);
	void on_AutoH_toggled(bool checked);
	void on_AutoW_toggled(bool checked);
	void on_AutoWeld_toggled(bool checked);
	void on_AutoRemove_toggled(bool checked);
	void on_NewButton_clicked();
	void on_paraStyleCombo_currentIndexChanged(const int &arg1);
	void on_charStyleCombo_currentIndexChanged(const int &arg1);
};
#endif // NOTESSETMANAGER_H
