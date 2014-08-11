/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.             *
 ***************************************************************************/

#ifndef GTDIALOGS_H
#define GTDIALOGS_H

#include <QDialog>

#include "scribusapi.h"

class PrefsContext;
class QComboBox;
class QCheckBox;
class gtFileDialog;


class SCRIBUS_API gtImporterDialog : public QDialog
{
	Q_OBJECT
private:
	QComboBox*   importerCombo;
	QCheckBox*   rememberCheck;
	QPushButton* okButton;
public:
	gtImporterDialog(const QStringList& importers, int currentSelection);
	~gtImporterDialog();
	bool shouldRemember();
	QString getImporter();
};

class SCRIBUS_API gtDialogs
{
private:
	gtFileDialog* fdia;
	QString fileName;
	QString encoding;
	int importer;
	PrefsContext* prefs;
	QString pwd;
public:
	gtDialogs();
	~gtDialogs();
	const QString& getFileName();
	const QString& getEncoding();
	int getImporter();
	bool importTextOnly();
	bool runFileDialog(const QString& filters, const QStringList& importers);
	bool runImporterDialog(const QStringList& importers);
};

#endif // GTDIALOGS_H
