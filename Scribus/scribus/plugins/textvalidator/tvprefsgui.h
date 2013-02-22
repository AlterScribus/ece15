/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/* This is the Scribus Text Validator GUI class specification.
2013 Cezary Grabski <cezaryece@scribus-ece.info>
This program is free software - see LICENSE file in the distribution
or documentation
*/
#ifndef TVPREFSGUI_H
#define TVPREFSGUI_H

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QPushButton;
class QLabel;
class QTextEdit;
class QSpacerItem;

#include "ui/prefspanel.h"

/*! \brief This is the Scribus Text Validator plugin configuration widget.
Used in Preferences dialog.
\author Cezary Grabski <cezaryece@scribus-ece.info>
*/
class TVPrefsGui : public PrefsPanel
{
	Q_OBJECT

	public:
		TVPrefsGui(QWidget* parent);
		~TVPrefsGui();

		QLabel* titleLabel;
		QTextEdit* cfgEdit;
		QPushButton* okButton;
		QPushButton* resetButton;

	public slots:
		//! \brief Apply changes to prefs. Auto connected.
		void apply();
		/*! \brief Save the content into user file. */
		virtual void okButton_pressed();
		/*! \brief Re-reads system wide config file. */
		virtual void resetButton_pressed();

	protected:
		QGridLayout* SWPrefsGuiLayout;
		QVBoxLayout* editLayout;
		QHBoxLayout* buttonLayout;
		QSpacerItem* buttonSpacer;

	protected slots:
		virtual void languageChange();
};

#endif
