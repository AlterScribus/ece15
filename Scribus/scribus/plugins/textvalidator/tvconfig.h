/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef _SCRIBUS_TVCONFIG_H_
#define _SCRIBUS_TVCONFIG_H_

#include <QObject>

class QString;
class QStringList;
class PrefsContext;

/*! \brief This is the Scribus Short Words configuratin specification.
Methods of this class read config files and PrefsManager context informations.
Preferences GUI is in SWPrefsGui.

This code is based on the Scribus-Vlna plug in rewritten for
international use.

\author Petr Vanek <petr@yarpen.cz> with contributors.
*/
class TVConfig : public QObject
{
	Q_OBJECT

public:
	/*! \brief Reads config from the ui cfg file */
	TVConfig();
	/*! \brief Writes config into the ui cfg file */
	~TVConfig(){}

	/*! \brief Id of the UI radiobutton  */
	uint range;
	//*! \brief UI checkbox */
	//uint userConfig;
	bool useStyle;
	int currentLanguage;

	/*! \brief Save cfg. */
	void saveConfig();

private:
	/*! \brief Configuration structure */
	PrefsContext* prefs;
	/*! \brief getShortWords use this one. for each case from GUI select the right config file (or both).
	\param lang language
	\param filename configuration file.
	\retval QStringList parsed SW. Each SW in one string item. */
};

#endif
