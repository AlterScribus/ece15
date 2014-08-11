/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QFileDialog>
#include <QMessageBox>

#include "appmodes.h"
#include "charselect.h"
#include "charselectenhanced.h"
#include "commonstrings.h"
#include "pageitem_table.h"
#include "pageitem_textframe.h"
#include "prefsmanager.h"
#include "scpaths.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "util.h"
#include "util_icon.h"



CharSelect::CharSelect(QWidget* parent) : ScrPaletteBase(parent, "CharSelect"), m_doc(0), m_enhanced(0), m_Item(0)
{
	setupUi(this);

	paletteFileMask = tr("Scribus Char Palette (*.ucp);;All Files (*)");

	hideButton->setIcon(loadIcon("22/insert-table.png"));
	unicodeButton->setIcon(loadIcon("find.png"));
	uniLoadButton->setIcon(loadIcon("22/document-open.png"));
	uniSaveButton->setIcon(loadIcon("22/document-save.png"));
	uniClearButton->setIcon(loadIcon("22/document-new.png"));

	m_userTableModel = new CharTableModel(this, 6, m_doc, PrefsManager::instance()->appPrefs.itemToolPrefs.textFont);
	loadUserContent(ScPaths::getApplicationDataDir() + "charpalette.ucp");

	m_userTable->setModel(m_userTableModel);
	m_userTable->setAcceptDrops(true);

	// signals and slots connections
	connect(m_userTable, SIGNAL(selectChar(uint, QString)), this, SLOT(userNewChar(uint, QString)));
	connect(m_userTableModel, SIGNAL(selectionChanged(QItemSelectionModel*)), m_userTable, SLOT(modelSelectionChanged(QItemSelectionModel*)));
	connect(m_userTableModel, SIGNAL(rowAppended()), m_userTable, SLOT(resizeLastRow()));
	connect(unicodeButton, SIGNAL(chosenUnicode(const QString &)), m_userTableModel, SLOT(appendUnicode(const QString &)));
	connect(hideButton, SIGNAL(toggled(bool)), this, SLOT(hideButton_toggled(bool)));
	connect(this, SIGNAL(insertUserSpecialChar(QChar, QString)), this, SLOT(slot_insertUserSpecialChar(QChar, QString)));
	connect(uniLoadButton, SIGNAL(clicked()), this, SLOT(uniLoadButton_clicked()));
	connect(uniSaveButton, SIGNAL(clicked()), this, SLOT(uniSaveButton_clicked()));
	connect(uniClearButton, SIGNAL(clicked()), this, SLOT(uniClearButton_clicked()));
}

CharSelect::~CharSelect()
{
}

void CharSelect::setDoc(ScribusDoc* doc)
{
//     tDebug("setDoc start");
	if (m_doc != doc)
	{
		m_doc = doc;
		m_userTableModel->setDoc(m_doc);
	}

	if (!m_doc)
	{
		saveUserContent(ScPaths::getApplicationDataDir() + "charpalette.ucp");
		return;
	}

	m_userTableModel->setFontInUse(m_doc->currentStyle.charStyle().font().scName());
//     tDebug("setDoc end");
}

const QString & CharSelect::getCharacters()
{
	return chToIns;
}

void CharSelect::userNewChar(uint i, QString font)
{
	emit insertUserSpecialChar(QChar(i), font);
}

void CharSelect::slot_insertSpecialChars(const QString & chars)
{
	chToIns = chars;
	slot_insertSpecialChar();
}

void CharSelect::slot_insertSpecialChar()
{
	emit insertSpecialChar();

	if (!m_Item)
		return;
	PageItem_TextFrame *cItem;
	if (m_doc->appMode == modeEditTable)
		cItem = m_Item->asTable()->activeCell().textFrame();
	else
		cItem = m_Item->asTextFrame();
	if (cItem->HasSel)
		cItem->deleteSelectedTextFromFrame();
	cItem->invalidateLayout(false);
	//CB: Avox please make text->insertchar(char) so none of this happens in gui code, and item can tell doc its changed so the view and mainwindow slotdocch are not necessary
	QChar ch;
	QString fontName = m_doc->currentStyle.charStyle().font().scName();
	if (m_enhanced)
		fontName = m_enhanced->getUsedFont();
	for (int a=0; a<chToIns.length(); ++a)
	{
		ch = chToIns.at(a);
		if (ch == QChar(10))
			ch = QChar(13);
		if (ch == QChar(9))
			ch = QChar(32);
		int pot = cItem->itemText.cursorPosition();
		cItem->itemText.insertChars(ch, true);
		CharStyle nstyle = m_Item->itemText.charStyle(pot);
		nstyle.setFont((*m_doc->AllFonts)[fontName]);
		cItem->itemText.applyCharStyle(pot, 1, nstyle);
	}
	m_doc->view()->DrawNew();
	m_doc->changed();
// 	delEdit();
}

void CharSelect::slot_insertUserSpecialChar(QChar ch, QString font)
{
	if (!m_Item)
		return;
	PageItem_TextFrame *cItem;
	if (m_doc->appMode == modeEditTable)
		cItem = m_Item->asTable()->activeCell().textFrame();
	else
		cItem = m_Item->asTextFrame();
	if (cItem->HasSel)
		cItem->deleteSelectedTextFromFrame();
	cItem->invalidateLayout(false);
// 	//CB: Avox please make text->insertchar(char) so none of this happens in gui code, and item can tell doc its changed so the view and mainwindow slotdocch are not necessary
	if (ch == QChar(10))
		ch = QChar(13);
	if (ch == QChar(9))
		ch = QChar(32);
	int pot = cItem->itemText.cursorPosition();
	cItem->itemText.insertChars(ch, true);
	CharStyle nstyle = m_Item->itemText.charStyle(pot);
	nstyle.setFont((*m_doc->AllFonts)[font]);
	cItem->itemText.applyCharStyle(pot, 1, nstyle);
	m_doc->view()->DrawNew();
	m_doc->changed();
}

void CharSelect::openEnhanced()
{
	if (m_enhanced)
		return;

	QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
	m_enhanced = new CharSelectEnhanced(this);
	connect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(slot_insertSpecialChars(const QString &)));
	connect(m_enhanced, SIGNAL(paletteShown(bool)), hideButton, SLOT(setChecked(bool)));
	m_enhanced->setDoc(m_doc);
	m_enhanced->setEnabled(this->isEnabled());
	m_enhanced->show();
	QApplication::changeOverrideCursor(Qt::ArrowCursor);
}

void CharSelect::closeEnhanced()
{
	if (!m_enhanced)
		return;

	hideButton->blockSignals(true);
	hideButton->setChecked(false);
	hideButton->blockSignals(false);

	disconnect(m_enhanced, SIGNAL(insertSpecialChars(const QString &)), this, SLOT(slot_insertSpecialChars(const QString &)));
	disconnect(m_enhanced, SIGNAL(paletteShown(bool)), hideButton, SLOT(setChecked(bool)));
	m_enhanced->close();
	delete m_enhanced;
	m_enhanced = 0;
}

void CharSelect::hideButton_toggled(bool state)
{
//     tDebug("hideButton_toggled start");
	if (!m_doc)
		return;

	if (m_enhanced && !state)
		closeEnhanced();
	else
		openEnhanced();

//     tDebug("hideButton_toggled end");
}

void CharSelect::hide()
{
	closeEnhanced();
	ScrPaletteBase::hide();
}

void CharSelect::show()
{
	ScrPaletteBase::show();
	m_userTable->resize(m_userTable->size());
}

void CharSelect::setEnabled(bool state, PageItem* item)
{
	ScrPaletteBase::setEnabled(state);
	m_Item = item;
	if (state)
		setDoc(m_doc);

	if (m_enhanced)
		m_enhanced->setEnabled(state);
}

void CharSelect::uniLoadButton_clicked()
{
	QString f = QFileDialog::getOpenFileName(this, tr("Choose a filename to open"), QDir::currentPath(), paletteFileMask);
	if (!f.isNull())
		loadUserContent(f);
}

void CharSelect::loadUserContent(QString f)
{
//     tDebug("loadUserContent start");
	QFile file(f);
	if (!file.exists())
		return;
	if (file.open(QIODevice::ReadOnly))
	{
		QTextStream stream(&file);
		QString line = stream.readLine();
		if (line != "# Character palette file for Scribus")
		{
			file.close();
			return;
		}
		m_userTableModel->setCharacters(CharClassDef());
		while (!stream.atEnd())
		{
			bool ok = false;
			line = stream.readLine();
			if (line.left(1) == "#")
				continue; // don't mess with a comment
			int a = line.indexOf(" ");
			QString si = line.left(a);
			si.toInt(&ok, 10);
			if (ok)
				m_userTableModel->addCharacter(line);
			else
			{
				QMessageBox::warning(this, tr("Error"),
				                     "<qt>" + tr("Error reading file %1 - file is corrupted propably.").arg(f) + "</qt>",
				                     QMessageBox::Ok, QMessageBox::NoButton);
				break;
			}
		}
		file.close();
	}
//     tDebug("loadUserContent end");
}

void CharSelect::uniSaveButton_clicked()
{
	if (m_userTableModel->characters().count() == 0)
		return;
	QString f = QFileDialog::getSaveFileName(this, tr("Save Quick Character Palette"), QDir::currentPath(), paletteFileMask);
	if (f.isNull())
		return;
	if (!f.endsWith(".ucp"))
		f+=".ucp";
//#9832: Qt does this for us now in getSaveFileName
//	if (!overwrite(this, f))
//		return;
	saveUserContent(f);
}

void CharSelect::saveUserContent(QString f)
{
	QFile file(f);
	if (file.open(QIODevice::WriteOnly))
	{
		QTextStream stream(&file);
		CharClassDef chars = m_userTableModel->characters();
		QStringList fonts = m_userTableModel->fonts();
		stream << "# Character palette file for Scribus\n";
		for (int a = 0; a < chars.count(); a++)
		{
			stream << chars[a] << " " << fonts[a] << "\n";
		}
		file.close();
	}
	else
		QMessageBox::warning(this, tr("Error"),
		                     "<qt>" + tr("Cannot write file %1").arg(f) + "</qt>",
		                     QMessageBox::Ok, QMessageBox::NoButton);
}

void CharSelect::uniClearButton_clicked()
{
	if (m_userTableModel->characters().count() > 0
	        &&
	        !QMessageBox::question(this, tr("Empty the Palette?"),
	                               "<qt>" + tr("You will remove all characters from this palette. Are you sure?") + "</qt>",
	                               CommonStrings::trYesKey, CommonStrings::trNoKey,
	                               QString::null, 0, 1 )
	   )
	{
		m_userTableModel->setCharacters(CharClassDef());
	}
}

void CharSelect::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
		Ui::CharSelect::retranslateUi(this);
	else
		QWidget::changeEvent(e);
}
