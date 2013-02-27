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


#include "tvdialog.h"

#include "scribus.h"
#include "scpaths.h"
#include "tvconfig.h"
#include "ui/helpbrowser.h"

#include <QGridLayout>
#include <QHBoxLayout>
#include <QVBoxLayout>
#include <QSpacerItem>
#include <QLabel>
#include <QPushButton>
#include <QGroupBox>
#include <QRadioButton>
#include <QToolTip>

#include "commonstrings.h"
#include "langmgr.h"

TVDialog::TVDialog(QWidget* parent) : QDialog(parent)
{
	setupUi(this);

	cfg = new TVConfig();

	languageChange();
	resize(minimumSizeHint());

	// signals and slots connections
	connect(buttonBox->button(QDialogButtonBox::Ok), SIGNAL(clicked()),
			 this, SLOT(okButton_pressed()));
	connect(buttonBox->button(QDialogButtonBox::Cancel), SIGNAL(clicked()),
			 this, SLOT(cancelButton_pressed()));

	selectAction(cfg->range);
}

/*
 *  Destroys the object and frees any allocated resources
 */
TVDialog::~TVDialog()
{
}

int TVDialog::actionSelected()
{
	if (frameRadio->isChecked())
		return 0;
	else if (pageRadio->isChecked())
		return 1;
	else if (allRadio->isChecked())
		return 2;
	return -1;
}

void TVDialog::savePrefs()
{
	cfg->range = actionSelected();
	cfg->saveConfig();
}

/*
 *  Sets the strings of the subwidgets using the current
 *  language.
 */
void TVDialog::languageChange()
{
	setWindowTitle( tr("Text Validator", "text validator plugin"));
	radioGroup->setTitle( tr("Validate text", "text validator plugin"));
	frameRadio->setText( tr("&Selected Frames", "text validator plugin"));
	pageRadio->setText( tr("Active &Page", "text validator plugin"));
	allRadio->setText( tr("&All Items", "text validator plugin"));
	frameRadio->setToolTip( tr("Only selected frames processed.", "text validator plugin"));
	pageRadio->setToolTip( tr("Only actual page processed.", "text validator plugin"));
	allRadio->setToolTip( tr("All items in document processed.", "text validator plugin"));
}

void TVDialog::okButton_pressed()
{
	savePrefs();
	accept();
}

void TVDialog::cancelButton_pressed()
{
	savePrefs();
	reject();
}

void TVDialog::selectAction(int aAction)
{
	if (aAction!=0 && aAction!=1 && aAction!=2)
		aAction = 0;
	if (aAction == 0 && frameRadio->isEnabled())
		frameRadio->setChecked(true);
	else if (aAction == 1)
		pageRadio->setChecked(true);
	else if (aAction == 2)
		allRadio->setChecked(true);
}
