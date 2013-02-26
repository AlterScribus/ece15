/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QMessageBox>

#include "pluginmanager.h"
#include "prefs_textvalidator.h"
#include "prefsstructs.h"
#include <prefsfile.h>
#include <prefscontext.h>
#include <prefsmanager.h>
#include "scpaths.h"
#include "commonstrings.h"

Prefs_TextValidator::Prefs_TextValidator(QWidget* parent)
	: Prefs_Pane(parent)
{
	setupUi(this);
	languageChange();
	
	// defaults
	saveButton->setEnabled(false);
	//check if Shrt Words plugin is enabled
	shortWordsBox->setEnabled(PluginManager::instance().DLLexists("scribusshortwords"));
	QStringList langs;
	langs <<"af"<<"be"<<"ch"<<"cs"<<"de"<<"en"<<"es"<<"et"<<"fi"<<"fr"<<"hu"<<"is"<<"lt"<<"mk"<<"nl"<<"pl"<<"ru"<<"se"<<"sk"<<"sl"<<"sq"<<"uk";
	autoQuotesLangCombo->addItems(langs);

	readPrefs();

	// signals
	connect(saveButton, SIGNAL(clicked()), this, SLOT(saveButton_pressed()));
	connect(resetButton, SIGNAL(clicked()), this, SLOT(resetButton_pressed()));
}

Prefs_TextValidator::~Prefs_TextValidator()
{
	savePrefs();
}

void Prefs_TextValidator::languageChange()
{
	remSpacesGroupBox->setTitle(tr("Remove Spaces"));
	remSpacesAfter->setText(tr("after Chars"));
	remSpacesBefore->setText(tr("before Chars"));
	remEmptyLines->setText(tr("remove empty lines"));
	remHyphenation->setText(tr("remove manual hyphenation"));
	convertSpaces->setText(tr("convert fixed spaces to normal"));
	remBreaks->setText(tr("remove line breaks"));
	remCharsGroupBox->setTitle(tr("Remove Chars"));
	charlabel1->setText(tr("Remove") + ":");
	charlabel2->setText(tr("Remove") + ":");
	charlabel3->setText(tr("Remove") + ":");
	replaceGroup->setTitle(tr("Replace Strings"));
	with1->setText(tr("with"));
	with2->setText(tr("with"));
	with3->setText(tr("with"));
	autoQuotesBox->setText(tr("auto-Quotes for language"));
	shortWordsBox->setText(tr("Run Short-Words plugin"));
	runOnImportBox->setText(tr("run Text Validator on importing text from file"));
	ensureSpacesGroup->setTitle(tr("Ensure spaces existing"));
	ensureSpacesBefore->setText(tr("before Chars"));
	ensureSpacesAfter->setText(tr("after Chars"));
}

void Prefs_TextValidator::restoreDefaults(struct ApplicationPrefs *prefsData)
{
}

void Prefs_TextValidator::saveGuiToPrefs(struct ApplicationPrefs *prefsData) const
{
}

void Prefs_TextValidator::apply()
{
	if (saveButton->isEnabled())
		saveButton_pressed();
}

void Prefs_TextValidator::saveButton_pressed()
{
	messageLabel->setText( tr("User settings saved"));
	saveButton->setEnabled(false);
}

void Prefs_TextValidator::resetButton_pressed()
{
	saveButton->setEnabled(false);
	resetButton->setEnabled(false);
	messageLabel->setText( tr("System wide configuration reloaded"));
}

void Prefs_TextValidator::readPrefs()
{
	PrefsFile* prefsFile = PrefsManager::instance()->applicationPrefsFile();
	PrefsContext *tvPluginPrefs = prefsFile->getPluginContext("TextValidatorPlugin");
	shortWordsBox->setChecked(tvPluginPrefs->getBool("runShortWords", false));
	autoQuotesBox->setChecked(tvPluginPrefs->getBool("runAutoQuotes", false));
	autoQuotesLangCombo->setCurrentIndex(autoQuotesLangCombo->findText(tvPluginPrefs->get("autoQuotesLang","en")));
	remMultiplySpaces->setChecked(tvPluginPrefs->getBool("removeMultiSpaces", true));
	remSpacesBegin->setChecked(tvPluginPrefs->getBool("removeSpacesParaStart", true));
	remSpacesEnd->setChecked(tvPluginPrefs->getBool("removeSpacesParaEnd", true));
	remEmptyLines->setChecked(tvPluginPrefs->getBool("removeEmptyLines", true));
	remBreaks->setChecked(tvPluginPrefs->getBool("removeBreaks", true));
	remHyphenation->setChecked(tvPluginPrefs->getBool("removeHyphenation", false));
	convertSpaces->setChecked(tvPluginPrefs->getBool("convertSpacesToNormal", false));
	convertTabs->setChecked(tvPluginPrefs->getBool("convertTabs", false));
	remSpacesBeforeChars->setText(tvPluginPrefs->get("removeSpacesBeforeChars", ",.:;)"));
	remSpacesBefore->setChecked(tvPluginPrefs->getBool("removeSpacesBefore", true));
	remSpacesAfterChars->setText(tvPluginPrefs->get("removeSpacesAfterChars", "("));
	remSpacesAfter->setChecked(tvPluginPrefs->getBool("removeSpacesAfter", true));
	ensureSpacesBeforeChars->setText(tvPluginPrefs->get("ensureSpacesBeforeChars", "("));
	ensureSpacesBefore->setChecked(tvPluginPrefs->getBool("ensureSpacesBefore", true));
	ensureSpacesAfterChars->setText(tvPluginPrefs->get("ensureSpacesAfterChars", ")"));
	ensureSpacesAfter->setChecked(tvPluginPrefs->getBool("ensureSpacesAfter", true));
	runOnImportBox->setChecked(tvPluginPrefs->getBool("runOnImport", true));
	
	QString charsKeys = tvPluginPrefs->get("removeCharsKeys", "");
	if (!charsKeys.isEmpty())
	{
		QList<QLineEdit*> charsLE;
		charsLE << char1 << char2 << char3;
		QList<QLineEdit*> beforeLE;
		beforeLE << remCharsBeforeChars1 << remCharsBeforeChars2 << remCharsBeforeChars3;
		QList<QLineEdit*> afterLE;
		afterLE << remCharsAfterChars1 << remCharsAfterChars2 << remCharsAfterChars3;
		for (int i = 0;  i < charsKeys.length(); ++i)
		{
			QChar ch = charsKeys.at(i);
			if (ch != ' ')
			{
				charsLE.at(i)->setText(ch);
				beforeLE.at(i)->setText(tvPluginPrefs->get("RCB_" + QString::number(i), ""));
				afterLE.at(i)->setText(tvPluginPrefs->get("RCA_" + QString::number(i), ""));
			}
		}
	}
	QList<QCheckBox*> replacesCB;
	replacesCB << replace1 << replace2 << replace3;
	QList<QLineEdit*> strSourcesLE;
	strSourcesLE << replaceSource1 << replaceSource2 << replaceSource3;
	QList<QLineEdit*> strTargetsLE;
	strTargetsLE << replaceTarget1 << replaceTarget2 << replaceTarget3;
	for (int i = 0; i < 3; ++i)
	{
		replacesCB.at(i)->setChecked(tvPluginPrefs->getBool("replace" + QString::number(i), false));
		strSourcesLE.at(i)->setText(tvPluginPrefs->get("replaceSource" + QString::number(i)));
		strTargetsLE.at(i)->setText(tvPluginPrefs->get("replaceTarget" + QString::number(i)));
	}
	
}

void Prefs_TextValidator::savePrefs()
{
	PrefsFile* prefsFile = PrefsManager::instance()->applicationPrefsFile();
	PrefsContext *tvPluginPrefs = prefsFile->getPluginContext("TextValidatorPlugin");
	tvPluginPrefs->set("removeMultiSpaces", remMultiplySpaces->isChecked());
	tvPluginPrefs->set("removeSpacesParaStart", remSpacesBegin->isChecked());
	tvPluginPrefs->set("removeSpacesParaEnd", remSpacesEnd->isChecked());
	tvPluginPrefs->set("removeEmptyLines", remEmptyLines->isChecked());
	tvPluginPrefs->set("removeBreaks", remBreaks->isChecked());
	tvPluginPrefs->set("removeHyphenation", remHyphenation->isChecked());
	tvPluginPrefs->set("convertSpacesToNormal", convertSpaces->isChecked());
	tvPluginPrefs->set("removeSpacesBefore", remSpacesBefore->isChecked());
	tvPluginPrefs->set("removeSpacesAfter", remSpacesAfter->isChecked());
	tvPluginPrefs->set("removeSpacesBeforeChars", remSpacesBeforeChars->text());
	tvPluginPrefs->set("removeSpacesAfterChars", remSpacesAfterChars->text());
	tvPluginPrefs->set("ensureSpacesBefore", ensureSpacesBefore->isChecked());
	tvPluginPrefs->set("ensureSpacesAfter", ensureSpacesAfter->isChecked());
	tvPluginPrefs->set("ensureSpacesBeforeChars", ensureSpacesBeforeChars->text());
	tvPluginPrefs->set("ensureSpacesAfterChars", ensureSpacesAfterChars->text());
	tvPluginPrefs->set("runShortWords", shortWordsBox->isEnabled() && shortWordsBox->isChecked());
	tvPluginPrefs->set("runAutoQuotes", autoQuotesBox->isChecked());
	tvPluginPrefs->set("autoQuotesLang", autoQuotesLangCombo->currentText());
	tvPluginPrefs->set("runOnImport", runOnImportBox->isChecked());
	tvPluginPrefs->set("convertTabs", convertTabs->isChecked());
	
	QList<QLineEdit*> charsLE;
	charsLE << char1 << char2 << char3;
	QList<QLineEdit*> beforeLE;
	beforeLE << remCharsBeforeChars1 << remCharsBeforeChars2 << remCharsBeforeChars3;
	QList<QLineEdit*> afterLE;
	afterLE << remCharsAfterChars1 << remCharsAfterChars2 << remCharsAfterChars3;
	QString charsKeys = "";
	for (int i = 0;  i < charsLE.length(); ++i)
	{
		QString chstr = charsLE.at(i)->text().trimmed();
		if (chstr.isEmpty())
			chstr = " ";
		charsKeys.append(chstr.at(0));
		charsLE.at(i)->setText(charsKeys.at(i));
		tvPluginPrefs->set("RCB_" + QString::number(i), beforeLE.at(i)->text());
		tvPluginPrefs->set("RCA_" + QString::number(i), afterLE.at(i)->text());
	}
	QList<QCheckBox*> replacesCB;
	replacesCB << replace1 << replace2 << replace3;
	QList<QLineEdit*> strSourcesLE;
	strSourcesLE << replaceSource1 << replaceSource2 << replaceSource3;
	QList<QLineEdit*> strTargetsLE;
	strTargetsLE << replaceTarget1 << replaceTarget2 << replaceTarget3;
	for (int i = 0; i < 3; ++i)
	{
		tvPluginPrefs->set("replace" + QString::number(i), replacesCB.at(i)->isChecked());
		tvPluginPrefs->set("replaceSource" + QString::number(i), strSourcesLE.at(i)->text());
		tvPluginPrefs->set("replaceTarget" + QString::number(i), strTargetsLE.at(i)->text());
	}

	tvPluginPrefs->set("removeCharsKeys", charsKeys);
}
