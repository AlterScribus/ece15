/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef TEXTVALIDATOR_H
#define TEXTVALIDATOR_H

#include "pluginapi.h"
#include "scplugin.h"

/*! \brief See scplugin.h and pluginmanager.{cpp,h} for detail on what these methods do.
That documentatation is not duplicated here.
Please don't implement the functionality of your plugin here; do that
in textvalidatorimpl.h and textvalidatorimpl.cpp. */
class PageItem;
class ScribusDoc;

class PLUGIN_API TextValidator : public ScActionPlugin
{
	Q_OBJECT

	public:
		//! \brief Standard plugin implementation
		TextValidator();
		virtual ~TextValidator();
		//! \brief main method to run the plug
		virtual bool run(ScribusDoc* doc, QString target = QString::null);
		virtual const QString fullTrName() const;
		virtual const AboutData* getAboutData() const;
		virtual void deleteAboutData(const AboutData* about) const;
		virtual void languageChange();
		virtual void addToMainWindowMenu(ScribusMainWindow *) {}
		/*! \brief Preference widget */
		virtual bool newPrefsPanelWidget(QWidget* parent, PrefsPanel*& panel,
										 QString& caption, QPixmap& icon);
		virtual bool newPrefsPanelWidget(QWidget* parent, Prefs_Pane*& panel,
										 QString& caption, QPixmap& icon);
		virtual int validateItem(ScribusDoc* doc, PageItem* item);
};

extern "C" PLUGIN_API int textvalidator_getPluginAPIVersion();
extern "C" PLUGIN_API ScPlugin* textvalidator_getPlugin();
extern "C" PLUGIN_API void textvalidator_freePlugin(ScPlugin* plugin);

#endif
