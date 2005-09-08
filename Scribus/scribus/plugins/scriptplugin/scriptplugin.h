#ifndef SCRIPTPLUG_H
#define SCRIPTPLUG_H

#include "cmdvar.h"
#include "scplugin.h"
#include "pluginapi.h"

class QString;
class QPixmap;
class QWidget;
class PrefsPanel;

class PLUGIN_API ScriptPlugin : public ScPersistentPlugin
{
	Q_OBJECT

	public:
		// Standard plugin implementation
		ScriptPlugin();
		virtual ~ScriptPlugin();
		virtual bool initPlugin();
		virtual bool cleanupPlugin();
		virtual const QString fullTrName() const;
		virtual const AboutData* getAboutData() const;
		virtual void deleteAboutData(const AboutData* about) const;
		virtual void languageChange();
		virtual bool newPrefsPanelWidget(QWidget* parent, PrefsPanel*& panel,
										 QString& caption, QPixmap& icon);

		// Special features (none)
};

extern "C" PLUGIN_API int scriptplugin_getPluginAPIVersion();
extern "C" PLUGIN_API ScPlugin* scriptplugin_getPlugin();
extern "C" PLUGIN_API void scriptplugin_freePlugin(ScPlugin* plugin);

/** Some useful Subroutines */
static PyObject *scribus_retval(PyObject *self, PyObject* args);
static PyObject *scribus_getval(PyObject *self);

#endif // CMSPLUG_H
