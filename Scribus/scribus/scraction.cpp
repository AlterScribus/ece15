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
#include <qpopupmenu.h>
#include <qiconset.h>
#include "scraction.h"
#include "scraction.moc"


ScrAction::ScrAction( QObject * parent, const char * name ) : QAction( parent, name )
{
	initScrAction();
}

ScrAction::ScrAction( const QString & menuText, QKeySequence accel, QObject * parent, const char * name ) : QAction( menuText, accel, parent, name )
{
	initScrAction();
}

ScrAction::ScrAction( MenuType mType, const QIconSet & icon, const QString & menuText, QKeySequence accel, QObject * parent, const char * name, int extraInt, double extraDouble, QString extraQString ) : QAction( icon, menuText, accel, parent, name )
{
	initScrAction();
	setIconSizes();
	menuType=mType;
	if (menuType!=Normal)
		connect (this, SIGNAL(activated()), this, SLOT(activatedToActivatedData()));
	switch (mType)
	{
		case DataInt:
			_dataInt=extraInt;
			break;
		case DataDouble:
			_dataDouble=extraDouble;
			break;
		case DataQString:
			_dataQString=extraQString;
			break;
		case RecentFile:
			break;
		case DLL:
			pluginID=extraInt;
			break;
		case Window:
			windowID=extraInt;
			break;
		case RecentScript:
			break;			
		case Normal:
		default:
			break;
	}
}

ScrAction::ScrAction( const QIconSet & icon, const QString & menuText, QKeySequence accel, QObject * parent, const char * name ) : QAction( icon, menuText, accel, parent, name )
{
	initScrAction();
	setIconSizes();
}

void ScrAction::initScrAction()
{
	menuType=ScrAction::Normal;
	menuIndex=-1;
	widgetAddedTo=NULL;
	containerWidgetAddedTo=NULL;
	savedKeySequence=QKeySequence("");
	shortcutSaved=false;
}

ScrAction::~ScrAction()
{
}

void ScrAction::setIconSizes()
{
	QIconSet iconset=iconSet();
	if (!iconset.isNull())
	{
		iconset.setIconSize(QIconSet::Small, QSize(16,16));
		iconset.setIconSize(QIconSet::Large, QSize(22,22));
	}
}

void ScrAction::activatedToActivatedData()
{
	if (menuType==ScrAction::DataInt)
		emit activatedData(_dataInt);
	if (menuType==ScrAction::DataDouble)
		emit activatedData(_dataDouble);
	if (menuType==ScrAction::DataQString)
		emit activatedData(_dataQString);
	if (menuType==ScrAction::DLL)
		emit activatedData(pluginID);
	if (menuType==ScrAction::Window)
		emit activatedData(windowID);
	if (menuType==ScrAction::RecentFile)
		emit activatedData(menuText());
	if (menuType==ScrAction::RecentScript)
		emit activatedData(menuText());
}

void ScrAction::toggledToToggledData(bool ison)
{
	if (isToggleAction())
	{
		if (menuType==ScrAction::DataInt)
			emit toggledData(ison, _dataInt);
		if (menuType==ScrAction::DataDouble)
			emit toggledData(ison, _dataDouble);
		if (menuType==ScrAction::DataQString)
			emit toggledData(ison, _dataQString);
		if (menuType==ScrAction::DLL)
			emit toggledData(ison, pluginID);
		if (menuType==ScrAction::Window)
			emit toggledData(ison, windowID);
		if (menuType==ScrAction::RecentFile)
			emit toggledData(ison, menuText());
		if (menuType==ScrAction::RecentScript)
			emit toggledData(ison, menuText());
	}
}

void ScrAction::addedTo ( int index, QPopupMenu * menu )
{
	if (menuIndex==-1) // Add the first time, not for secondary popups.
	{
		menuIndex=index;
		popupMenuAddedTo=menu;
	}
}


void ScrAction::addedTo( QWidget * actionWidget, QWidget * container )
{
	if (actionWidget)
		widgetAddedTo = actionWidget;
	if (containerWidgetAddedTo)
		containerWidgetAddedTo = container;
}


QWidget* ScrAction::getWidgetAddedTo()
{
	return widgetAddedTo;
}

QString ScrAction::cleanMenuText()
{
	return menuText().remove('&');
}

const int ScrAction::getMenuIndex()
{
	return menuIndex;
}

bool ScrAction::addTo ( QWidget * w )
{
	widgetAddedTo=w;
	return (QAction::addTo(w));
}

const bool ScrAction::isDLLAction()
{
	return menuType==ScrAction::DLL;
}

const int ScrAction::dllID()
{
	if (menuType==ScrAction::DLL)
		return pluginID;
	return -1;
}

void ScrAction::setToggleAction(bool isToggle)
{
	if (menuType!=Normal)
	{
		if(isToggle)
			connect (this, SIGNAL(toggled(bool)), this, SLOT(toggledToToggledData(bool)));
		else
			disconnect (this, SIGNAL(toggled(bool)), this, SLOT(toggledToToggledData(bool)));
	}
	QAction::setToggleAction(isToggle);
}

void ScrAction::saveShortcut()
{
	if(!shortcutSaved)
	{
		savedKeySequence=accel();
		setAccel(QKeySequence(""));
		shortcutSaved=true;
	}
}

void ScrAction::restoreShortcut()
{
	if (shortcutSaved)
	{
		setAccel(savedKeySequence);
		savedKeySequence=QKeySequence("");
		shortcutSaved=false;
	}
}
