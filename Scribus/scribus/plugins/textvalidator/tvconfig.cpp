/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/* This is the Scribus Short Words configuratin implementation.
There will be interface for the future Scribus central plugin
config center. maybe :)

This code is based on the Scribus-Vlna plug in rewritten for
international use.

2004 Petr Vanek <petr@yarpen.cz>
with contributors.

This program is free software - see LICENSE file in the distribution
or documentation
*/

#include "scconfig.h"
#include "tvconfig.h"
//#include "configuration.moc"
#include "scpaths.h"

#include "langmgr.h"
#include "prefsmanager.h"
#include "prefscontext.h"
#include "prefsfile.h"
#include <QDir>
#include <QStringList>


TVConfig::TVConfig()
{
	prefs = PrefsManager::instance()->prefsFile->getPluginContext("textvalidator");
	range = prefs->getUInt("range", 0);
}

void TVConfig::saveConfig()
{
	prefs->set("range", range);
}
