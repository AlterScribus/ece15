#include "fontpreview.h"
#include "ui.h"
#include "scribus.h"
#include <qcursor.h>
#include <qlistview.h>

int fontpreview_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* fontpreview_getPlugin()
{
	FontPreviewPlugin* plug = new FontPreviewPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void fontpreview_freePlugin(ScPlugin* plugin)
{
	FontPreviewPlugin* plug = dynamic_cast<FontPreviewPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

FontPreviewPlugin::FontPreviewPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

FontPreviewPlugin::~FontPreviewPlugin() {};

void FontPreviewPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "FontPreview";
	// Action text for menu, including accel
	m_actionInfo.text = tr("&Font Preview...");
	// Menu
	m_actionInfo.menu = "Extras";
	m_actionInfo.enabledOnStartup = true;
}

const QString FontPreviewPlugin::fullTrName() const
{
	return QObject::tr("Font Preview");
}

const ScActionPlugin::AboutData* FontPreviewPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	Q_CHECK_PTR(about);
	about->authors = QString::fromUtf8("Petr Van\xc4\x9bk <petr@scribus.info>");
	about->shortDescription = tr("Font Preview dialog");
	about->description = tr("Sorting, searching and browsing available fonts.");
	// about->version
	// about->releaseDate
	// about->copyright
	about->license = "GPL";
	return about;
}

void FontPreviewPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

/**
Create dialog and insert font into Style menu when user accepts.
*/
bool FontPreviewPlugin::run(QString target)
{
	// I don't know how many fonts user has...
	qApp->setOverrideCursor(QCursor(Qt::WaitCursor));
	FontPreview *dlg = new FontPreview(target);
	qApp->restoreOverrideCursor();
	// run it and wait for user's reaction
	if (dlg->exec() == QDialog::Accepted)
	{
		if  (target.isEmpty())
			ScMW->SetNewFont(dlg->getCurrentFont());
		else
			m_runResult = dlg->getCurrentFont();
	}
	delete dlg;
	return true;
}
