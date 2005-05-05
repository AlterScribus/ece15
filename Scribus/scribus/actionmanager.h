/***************************************************************************
    begin                : Jan 2005
    copyright            : (C) 2005 by Craig Bradney
    email                : cbradney@zip.com.au
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#ifndef ACTIONMANAGER_H
#define ACTIONMANAGER_H

#include <qobject.h> 
#include <qstring.h>
#include <qmap.h>
#include <qguardedptr.h>
#include <qdict.h>

#include "scraction.h"

class ScribusApp;
class ScribusView;
class UndoManager;
/**
@author Craig Bradney
*/
class ActionManager : public QObject
{
	Q_OBJECT

	public:
		ActionManager ( QObject * parent, const char * name );	
		~ActionManager() {};
		
		void createActions();
		void disconnectModeActions();
		void connectModeActions();
		void disconnectNewViewActions();
		void connectNewViewActions(ScribusView *);
		void disconnectNewSelectionActions();
		void connectNewSelectionActions(ScribusView *);
		void saveActionShortcutsPreEditMode();
		void restoreActionShortcutsPostEditMode();
		void enableActionStringList(QStringList *list, bool enabled, bool checkingUnicode=false);
		void enableUnicodeActions(bool enabled);
		void setPDFActions(ScribusView *);
		
	private:
		void initFileMenuActions();
		void initEditMenuActions();
		void initStyleMenuActions();
		void initItemMenuActions();
		void initInsertMenuActions();
		void initPageMenuActions();
		void initViewMenuActions();
		void initToolsMenuActions();
		void initExtrasMenuActions();
		void initWindowsMenuActions();
		void initScriptMenuActions();
		void initHelpMenuActions();
		void initSpecialActions();
	
		ScribusApp *ScApp;
		UndoManager *undoManager;
		QMap<QString, QGuardedPtr<ScrAction> > *scrActions;
		QDict<QActionGroup> *scrActionGroups;
		QStringList *modeActionNames;
		QStringList *nonEditActionNames;
		QStringList *unicodeCharActionNames;
		
};

#endif
