/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "textvalidator.h"
#include "textvalidatorimpl.h"
#include "tvprefsgui.h"
#include "prefs_textvalidator.h"
#include "util_icon.h"

// See scplugin.h and pluginmanager.{cpp,h} for detail on what these methods
// do. That documentatation is not duplicated here.
// Please don't implement the functionality of your plugin here; do that
// in textvalidatorimpl.h and textvalidatorimpl.cpp .

TextValidator::TextValidator() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

TextValidator::~TextValidator() {}

void TextValidator::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "TextValidator";
	// Action text for menu, including &accel
	m_actionInfo.text = tr("Text &Validator");
	// Menu
	m_actionInfo.menu = "Extras";
	// If needed, what item to add the menu item after
	//m_actionInfo.menuAfterName = "ColorWheel"
	// If needed, the keyboard shortcut for the plugin
	//m_actionInfo.keySequence = "CTRL+ALT+F3"
	// Should the menu item be enabled when the app starts
	// (even without a document open) ?
	m_actionInfo.enabledOnStartup = false;
}

const QString TextValidator::fullTrName() const
{
	return QObject::tr("Text Validator");
}

const ScActionPlugin::AboutData* TextValidator::getAboutData() const
{
	AboutData* about = new AboutData;
	Q_CHECK_PTR(about);
	about->authors = "Cezary Grabski [cezaryece@scribus-ece.info]";
	about->shortDescription = "Fixing some mistakes in text like unwanted spaces etc.";
//	about->description;
	about->version = "0.2";
//	about->releaseDate.fromString()
//	QString copyright;
	about->license = "GPL";
	return about;
}

void TextValidator::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool TextValidator::run(ScribusDoc* doc, QString target)
{
	TextValidatorImpl *tvPluginImpl = new TextValidatorImpl(doc);
	Q_CHECK_PTR(tvPluginImpl);
	bool result = tvPluginImpl->run();
	delete tvPluginImpl;
	return result;
}

bool TextValidator::newPrefsPanelWidget(QWidget* parent, PrefsPanel*& panel, QString& caption, QPixmap& icon)
{
	panel = new TVPrefsGui(parent);
	Q_CHECK_PTR(panel);
	caption = tr("Text Validator");
	icon = loadIcon("textvalidator.png");
	return true;
}

bool TextValidator::newPrefsPanelWidget(QWidget* parent, Prefs_Pane*& panel, QString& caption, QPixmap& icon)
{
	panel = new Prefs_TextValidator(parent);
	Q_CHECK_PTR(panel);
	caption = tr("Text Validator");
	icon = loadIcon("textvalidator_16.png");
	return true;
}

int TextValidator::validateItem(ScribusDoc* doc, PageItem *item)
{
	TextValidatorImpl *tvPluginImpl = new TextValidatorImpl(doc);
	Q_CHECK_PTR(tvPluginImpl);
	int result = tvPluginImpl->validateItemText(item, true);
	delete tvPluginImpl;
	return result;
}

// Low level plugin API
int textvalidator_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* textvalidator_getPlugin()
{
	TextValidator* plug = new TextValidator();
	Q_CHECK_PTR(plug);
	return plug;
}

void textvalidator_freePlugin(ScPlugin* plugin)
{
	TextValidator* plug = dynamic_cast<TextValidator*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}
