/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QMessageBox>

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

	// signals
	connect(saveButton, SIGNAL(clicked()), this, SLOT(saveButton_pressed()));
	connect(resetButton, SIGNAL(clicked()), this, SLOT(resetButton_pressed()));
}

Prefs_TextValidator::~Prefs_TextValidator()
{
}

void Prefs_TextValidator::languageChange()
{
	remSpacesGroupBox->setTitle(tr("Remove Spaces"));
	remSpacesAfter->setText(tr("afterChars"));
	remSpacesBefore->setText(tr("before Chars"));
	remEmptyLines->setText(tr("remove empty lines"));
	remHyphenation->setText(tr("remove manual hyphenation"));
	convertSpaces->setText(tr("convert fixed spaces to normal"));
	remBreaks->setText(tr("remove line breaks"));
	remCharsGroupBox->setTitle(tr("Remove Chars"));
	charlabel1->setText(tr("Remove") + ":");
	charlabel2->setText(tr("Remove") + ":");
	charlabel3->setText(tr("Remove") + ":");
	charlabel4->setText(tr("Remove") + ":");
	charlabel5->setText(tr("Remove") + ":");
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
	//	runShortWords = tvPluginPrefs->getBool("runShortWords", false);
	remMultiplySpaces->setChecked(tvPluginPrefs->getBool("removeMultiSpaces", true));
	remSpacesBegin->setChecked(tvPluginPrefs->getBool("removeSpacesParaStart", true));
	remSpacesEnd->setChecked(tvPluginPrefs->getBool("removeSpacesParaEnd", true));
	remEmptyLines->setChecked(tvPluginPrefs->getBool("removeEmptyLines", true));
	remBreaks->setChecked(tvPluginPrefs->getBool("removeBreaks", true));
	remHyphenation->setChecked(tvPluginPrefs->getBool("removeHyphenation", false));
	convertSpaces->setChecked(tvPluginPrefs->getBool("convertSpacesToNormal", false));
	remSpacesBeforeChars->setText(tvPluginPrefs->get("removeSpaceBefore", ",.:;)"));
	remSpacesAfterChars->setText(tvPluginPrefs->get("removeSpaceAfter", "("));

	QList<QLineEdit*> charsLE;
	charsLE << char1 << char2 << char3 << char4 << char5;
	QList<QLineEdit*> beforeLE;
	beforeLE << remCharsBeforeChars1 << remCharsBeforeChars2 << remCharsBeforeChars3 << remCharsBeforeChars4 << remCharsBeforeChars5;
	QList<QLineEdit*> afterLE;
	afterLE << remCharsAfterChars1 << remCharsAfterChars2 << remCharsAfterChars3 << remCharsAfterChars4 << remCharsAfterChars5;
	QString charsKeys = tvPluginPrefs->get("removeCharsKeys", "");
	if (!charsKeys.isEmpty())
	{
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
	tvPluginPrefs->set("removehyphenation", remHyphenation->isChecked());
	tvPluginPrefs->set("convertSpacesToNormal", convertSpaces->isChecked());
	tvPluginPrefs->set("removeSpaceBefore", remSpacesBeforeChars->text());
	tvPluginPrefs->set("removeSpaceAfter", remSpacesAfterChars->text());

	QList<QLineEdit*> charsLE;
	charsLE << char1 << char2 << char3 << char4 << char5;
	QList<QLineEdit*> beforeLE;
	beforeLE << remCharsBeforeChars1 << remCharsBeforeChars2 << remCharsBeforeChars3 << remCharsBeforeChars4 << remCharsBeforeChars5;
	QList<QLineEdit*> afterLE;
	afterLE << remCharsAfterChars1 << remCharsAfterChars2 << remCharsAfterChars3 << remCharsAfterChars4 << remCharsAfterChars5;
	QString charsKeys = "";
	for (int i = 0;  i < charsLE.length(); ++i)
	{
		QString chstr = charsLE.at(i)->text().trimmed().at(0);
		if (chstr.isEmpty())
			chstr = " ";
		charsKeys.append(chstr);
		charsLE.at(i)->setText(charsKeys.at(i));
		tvPluginPrefs->set("RCB_" + QString::number(i), beforeLE.at(i)->text());
		tvPluginPrefs->set("RCA_" + QString::number(i), afterLE.at(i)->text());
	}
	tvPluginPrefs->set("removeCharsKeys", charsKeys);
}
