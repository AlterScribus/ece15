/***************************************************************************
	begin                : June 2005
	copyright            : (C) 2005 by Craig Bradney
	email                : cbradney@zip.com.au
***************************************************************************/

/***************************************************************************
*                                                                         *
*   ScApp program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/

#ifndef ALIGNDISTRIBUTEPALETTE_H
#define ALIGNDISTRIBUTEPALETTE_H

#include <qvariant.h>
#include <qpixmap.h>
#include <qdialog.h>
#include "scribusstructs.h"
#include "scribusview.h"
#include "scrpalettebase.h"

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QSpacerItem;
class QGroupBox;
class QLabel;
class QComboBox;
class QToolButton;

class ScribusApp;
class ScribusDoc;
class UndoManager;

class AlignDistributePalette : public ScrPaletteBase
{
	Q_OBJECT

public:
	typedef enum {First, Last, Page, Margins, Selection } AlignTo;

	AlignDistributePalette( QWidget* parent = 0, const char* name = 0, bool modal = FALSE, WFlags fl = 0 );
	~AlignDistributePalette();

	QGroupBox* alignGroupBox;
	QLabel* alignRelativeToLabel;
	QComboBox* alignRelativeToCombo;
	QToolButton* alignLeftOutToolButton;
	QToolButton* alignRightOutToolButton;
	QToolButton* alignBottomInToolButton;
	QToolButton* alignRightInToolButton;
	QToolButton* alignBottomOutToolButton;
	QToolButton* alignCenterHorToolButton;
	QToolButton* alignLeftInToolButton;
	QToolButton* alignCenterVerToolButton;
	QToolButton* alignTopOutToolButton;
	QToolButton* alignTopInToolButton;
	QGroupBox* distributeGroupBox;
	QToolButton* distributeDistHToolButton;
	QToolButton* distributeRightToolButton;
	QToolButton* distributeBottomToolButton;
	QToolButton* distributeCenterHToolButton;
	QToolButton* distributeDistVToolButton;
	QToolButton* distributeLeftToolButton;
	QToolButton* distributeCenterVToolButton;
	QToolButton* distributeTopToolButton;

	virtual void setView( ScribusView * newView );

protected:
	ScribusView *currView;

	QVBoxLayout* AlignDistributePaletteLayout;
	QVBoxLayout* alignGroupBoxLayout;
	QHBoxLayout* layout11;
	QHBoxLayout* layout14;
	QSpacerItem* spacer15;
	QSpacerItem* spacer16;
	QGridLayout* layout2;
	QGridLayout* distributeGroupBoxLayout;
	QHBoxLayout* layout4;
	QSpacerItem* dsitributeLeftSpacer;
	QSpacerItem* distributeRightSpacer;
	QGridLayout* layout1;

protected slots:
	virtual void languageChange();
	
	void alignLeftOut();
	void alignRightOut();
	void alignBottomIn();
	void alignRightIn();
	void alignBottomOut();
	void alignCenterHor();
	void alignLeftIn();
	void alignCenterVer();
	void alignTopOut();
	void alignTopIn();
	void distributeDistH();
	void distributeRight();
	void distributeBottom();
	void distributeCenterH();
	void distributeDistV();
	void distributeLeft();
	void distributeCenterV();
	void distributeTop();
	
	void alignToChanged(int);

private:
	void init();
	bool startAlign();
	void endAlign();
	UndoManager *undoManager;
	ScribusApp* ScApp;
	AlignTo currAlignTo;
	QValueList<AlignObjs> *alignObjects;
	uint alignObjectsCount;
	ScribusDoc *currDoc;
	
signals:
	void documentChanged();

};

#endif // ALIGNDISTRIBUTEPALETTE_H
