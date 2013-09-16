/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef PREFS_TEXTVALIDATOR_H
#define PREFS_TEXTVALIDATOR_H

#include "pluginapi.h"
#include "ui_prefs_textvalidator.h"
#include "ui/prefs_pane.h"

class ApplicationPrefs;

class PLUGIN_API  Prefs_TextValidator : public Prefs_Pane, Ui::Prefs_TextValidator
{
	Q_OBJECT

	public:
		Prefs_TextValidator(QWidget* parent=0);
		~Prefs_TextValidator();
		virtual void restoreDefaults(struct ApplicationPrefs *prefsData);
		virtual void saveGuiToPrefs(struct ApplicationPrefs *prefsData) const;

	public slots:
		void languageChange();
		//! \brief Apply changes to prefs. Auto connected.
		void apply();

	protected slots:
		/*! \brief Save the content into user file. */
		virtual void saveButton_pressed();
		/*! \brief Re-reads system wide config file. */
		virtual void resetButton_pressed();
private:
		void readPrefs();
		void savePrefs();
};

#endif
