/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "tvprefsgui.h"
#include "scpaths.h"
#include "commonstrings.h"

#include <QDir>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMessageBox>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpacerItem>
#include <QTextCodec>
#include <QtWidgets/QTextEdit>
#include <QTextStream>
#include <QtWidgets/QToolTip>

TVPrefsGui::TVPrefsGui(QWidget* parent ) : PrefsPanel(parent)
{
	SWPrefsGuiLayout = new QGridLayout(this);
	SWPrefsGuiLayout->setMargin(10);
	SWPrefsGuiLayout->setSpacing(5);

	editLayout = new QVBoxLayout;
	editLayout->setMargin(0);
	editLayout->setSpacing(5);

	titleLabel = new QLabel(this);
	editLayout->addWidget(titleLabel);
	cfgEdit = new QTextEdit(this);
	editLayout->addWidget(cfgEdit);

	buttonLayout = new QHBoxLayout;
	buttonLayout->setMargin(0);
	buttonLayout->setSpacing(5);
	buttonSpacer = new QSpacerItem(4, 2, QSizePolicy::Expanding, QSizePolicy::Minimum);
	buttonLayout->addItem(buttonSpacer);

	okButton = new QPushButton(this);
	buttonLayout->addWidget(okButton);

	resetButton = new QPushButton(this);
	buttonLayout->addWidget(resetButton);
	editLayout->addLayout(buttonLayout);

	SWPrefsGuiLayout->addLayout(editLayout, 0, 0);
	languageChange();
	resize(QSize(362, 359).expandedTo(minimumSizeHint()));

	// defaults
	okButton->setEnabled(false);

	// signals
	connect(okButton, SIGNAL(clicked()), this, SLOT(okButton_pressed()));
	connect(resetButton, SIGNAL(clicked()), this, SLOT(resetButton_pressed()));
	connect(cfgEdit, SIGNAL(textChanged()), this, SLOT(cfgEdit_changed()));
}

TVPrefsGui::~TVPrefsGui() {}

/*
 *  Sets the strings of the subwidgets using the current
 *  language.
 */
void TVPrefsGui::languageChange()
{
	okButton->setText( tr("&Save"));
	resetButton->setText( tr("&Reset"));
	// tooltips
	okButton->setToolTip( tr("Save user configuration"));
	resetButton->setToolTip( "<qt>" + tr("Reload system wide configuration and remove user defined one") + "</qt>");
	cfgEdit->setToolTip( "<qt>" + tr("Edit custom configuration. If you save it, it will be used over system wide configuration") + "</qt>");
}

void TVPrefsGui::apply()
{
	if (okButton->isEnabled())
		okButton_pressed();
}

void TVPrefsGui::okButton_pressed()
{
	titleLabel->setText( tr("User settings saved"));
	okButton->setEnabled(false);
}

void TVPrefsGui::resetButton_pressed()
{
	okButton->setEnabled(false);
	resetButton->setEnabled(false);
	titleLabel->setText( tr("System wide configuration reloaded"));
}
