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

#ifndef TVDIALOG_H
#define TVDIALOG_H

#include "ui_tvdialog.h"

class TVConfig;

/*! \brief GUI dialog for user to make decision.
Generated from Qt designer UI file. Later changes by my hands :)
\author Petr Vanek <petr@yarpen.cz>
*/
class TVDialog : public QDialog, public Ui::TVDialog
{
	Q_OBJECT

	public:
		TVDialog(QWidget* parent = 0);
		~TVDialog();

		int actionSelected();

	protected slots:
		virtual void languageChange();

	private:
		//! reference on the config structure
		TVConfig *cfg;

		/*! \brief  from config file */
		void selectAction(int aAction);

		void savePrefs();

	private slots:
		/*! \brief  run shorts processing */
		virtual void okButton_pressed();
		/*! \brief  cancel and quit */
		virtual void cancelButton_pressed();
};

#endif // TVDialog_H
