/***************************************************************************
                          texttoolb.cpp  -  description
                             -------------------
    begin                : Sun Mar 10 2002
    copyright            : (C) 2002 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <qtooltip.h>
#include <qpopupmenu.h>
#include "werktoolb.h"
#include "werktoolb.moc"
#include "polyprops.h"
#include "autoformbuttongroup.h"
#include "scribus.h"
#include "menumanager.h"

extern QPixmap loadIcon(QString nam);
extern ScribusApp* ScApp;

WerkToolB::WerkToolB(QMainWindow* parent) : QToolBar( tr("Tools"), parent)
{
	SubMode = 0;
	ValCount = 32;
	static double AutoShapes0[] = {0.0, 0.0, 0.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0,
									100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 0.0, 100.0, 0.0, 100.0,
									0.0, 100.0, 0.0, 100.0, 0.0, 0.0, 0.0, 0.0};
	ShapeVals = AutoShapes0;

	ScApp->scrActions["toolsSelect"]->addTo(this);
	ScApp->scrActions["toolsSelect"]->setOn(true);
	ScApp->scrActions["toolsInsertTextFrame"]->addTo(this);
	ScApp->scrActions["toolsInsertImageFrame"]->addTo(this);
	ScApp->scrActions["toolsInsertTableFrame"]->addTo(this);
	
	ScApp->scrActions["toolsInsertShape"]->addTo(this);
	ScApp->scrMenuMgr->createMenu("insertShapeButtonMenu", "insertShapeButtonMenu");
	insertShapeButtonMenu=ScApp->scrMenuMgr->getLocalPopupMenu("insertShapeButtonMenu");
	ScApp->scrMenuMgr->addMenuToWidgetOfAction("insertShapeButtonMenu", ScApp->scrActions["toolsInsertShape"]);
	
	QToolButton *insertShapeButton = dynamic_cast<QToolButton*>(ScApp->scrActions["toolsInsertShape"]->getWidgetAddedTo());
	if (insertShapeButton)
		insertShapeButton->setPopupDelay(0);
	Rechteck = new AutoformButtonGroup( NULL );
	insertShapeButtonMenu->insertItem( Rechteck );
	ScApp->scrActions["toolsInsertShape"]->setIconSet(QIconSet(Rechteck->getIconPixmap(0), Rechteck->getIconPixmap(0)));

	ScApp->scrActions["toolsInsertPolygon"]->addTo(this);
	ScApp->scrMenuMgr->createMenu("insertPolygonButtonMenu", "insertPolygonButtonMenu");
	insertPolygonButtonMenu=ScApp->scrMenuMgr->getLocalPopupMenu("insertPolygonButtonMenu");
	ScApp->scrMenuMgr->addMenuToWidgetOfAction("insertPolygonButtonMenu", ScApp->scrActions["toolsInsertPolygon"]);
	insertPolygonButtonMenu->insertItem( tr("Properties..."), this, SLOT(GetPolyProps()));
	
	QToolButton *insertPolygonButton = dynamic_cast<QToolButton*>(ScApp->scrActions["toolsInsertPolygon"]->getWidgetAddedTo());
	if (insertPolygonButton)
		insertPolygonButton->setPopupDelay(0);
	
	ScApp->scrActions["toolsInsertLine"]->addTo(this);
	ScApp->scrActions["toolsInsertBezier"]->addTo(this);
	ScApp->scrActions["toolsInsertFreehandLine"]->addTo(this);
	ScApp->scrActions["toolsRotate"]->addTo(this);
	ScApp->scrActions["toolsZoom"]->addTo(this);
	ScApp->scrActions["toolsEditContents"]->addTo(this);
	ScApp->scrActions["toolsEditWithStoryEditor"]->addTo(this);
	ScApp->scrActions["toolsLinkTextFrame"]->addTo(this);
	ScApp->scrActions["toolsUnlinkTextFrame"]->addTo(this);
	ScApp->scrActions["toolsMeasurements"]->addTo(this);

	setCloseMode(QDockWindow::Undocked);
	connect(this, SIGNAL(placeChanged(QDockWindow::Place)), this, SLOT(Docken(QDockWindow::Place)));
	connect(this, SIGNAL(visibilityChanged(bool)), this, SLOT(Verbergen(bool)));
	connect(Rechteck, SIGNAL(FormSel(int, int, double *)), this, SLOT(SelShape(int, int, double *)));
}

void WerkToolB::Docken(QDockWindow::Place p)
{
	setOrientation(p == InDock ? Horizontal : Vertical);
}

void WerkToolB::Verbergen(bool vis)
{
	if (!vis)
		emit Schliessen();
}

void WerkToolB::GetPolyProps()
{
	PolygonProps* dia = new PolygonProps(this, ScApp->doc->toolSettings.polyC, ScApp->doc->toolSettings.polyFd, ScApp->doc->toolSettings.polyF, ScApp->doc->toolSettings.polyS, ScApp->doc->toolSettings.polyR);
	if (dia->exec())
		dia->getValues(&ScApp->doc->toolSettings.polyC, &ScApp->doc->toolSettings.polyFd, &ScApp->doc->toolSettings.polyF, &ScApp->doc->toolSettings.polyS, &ScApp->doc->toolSettings.polyR);
	delete dia;
}

void WerkToolB::SelShape(int s, int c, double *vals)
{
	const QPixmap* newIcon = Rechteck->find(s)->pixmap();
	ScApp->scrActions["toolsInsertShape"]->setIconSet(QIconSet(*newIcon, *newIcon));
	insertShapeButtonMenu->hide();
	SubMode = s;
	ValCount = c;
	ShapeVals = vals;
	ScApp->scrActions["toolsInsertShape"]->setOn(true);
}


WerkToolBP::WerkToolBP(QMainWindow* parent) : QToolBar( tr("PDF Tools"), parent)
{
	PDFM = new QPopupMenu();
	QString tmp_icn[] = {"pushbutton.png", "textview.png", "checkbox.png", "combobox.png", "listbox.png"};
	QString tmp_txt[] = { tr("Button"), tr("Text Field"), tr("Check Box"), tr("Combo Box"), tr("List Box")};
	size_t ar_tmp = sizeof(tmp_icn) / sizeof(*tmp_icn);
	for (uint a = 0; a < ar_tmp; ++a)
		PDFM->insertItem(loadIcon(tmp_icn[a]), tmp_txt[a]);
	PDFTool = new QToolButton(loadIcon("pushbutton.png"), tr("Insert PDF Fields"), QString::null, this, SLOT(ModeFromTB()), this);
	PDFTool->setToggleButton(true);
	PDFTool->setPopup(PDFM);
	PDFTool->setPopupDelay(0);
	PDFwerkz = 0;
	PDFA = new QPopupMenu();
	PDFA->insertItem(loadIcon("charset.png"), tr("Text"));
	PDFA->insertItem(loadIcon("goto.png"), tr("Link"));
	PDFaTool = new QToolButton(loadIcon("charset.png"), tr("Insert PDF Annotations"), QString::null, this, SLOT(ModeFromTB()), this);
	PDFaTool->setToggleButton(true);
	PDFaTool->setPopup(PDFA);
	PDFaTool->setPopupDelay(0);
	PDFnotiz = 0;
	setCloseMode(QDockWindow::Undocked);
	connect(this, SIGNAL(placeChanged(QDockWindow::Place)), this, SLOT(Docken(QDockWindow::Place)));
	connect(this, SIGNAL(visibilityChanged(bool)), this, SLOT(Verbergen(bool)));
	connect(PDFM, SIGNAL(activated(int)), this, SLOT(setPDFtool(int)));
	connect(PDFA, SIGNAL(activated(int)), this, SLOT(setPDFnotiz(int)));
}

void WerkToolBP::setPDFnotiz(int id)
{
	int c = PDFA->indexOf(id);
	PDFnotiz = c;
	switch (c)
	{
		case 0:
			PDFaTool->setPixmap(loadIcon("charset.png"));
			break;
		case 1:
			PDFaTool->setPixmap(loadIcon("goto.png"));
			break;
	}
	PDFTool->setOn(false);
	PDFaTool->setOn(true);
	emit NewMode(InsertPDFTextAnnotation+PDFnotiz);
}

void WerkToolBP::setPDFtool(int id)
{
	int c = PDFM->indexOf(id);
	PDFwerkz = c;
	QString tmp[] = {"pushbutton.png", "textview.png", "checkbox.png", "combobox.png", "listbox.png"};
	PDFTool->setPixmap(loadIcon(tmp[c]));
	PDFTool->setOn(true);
	PDFaTool->setOn(false);
	emit NewMode(InsertPDFButton+PDFwerkz);
}

void WerkToolBP::Docken(QDockWindow::Place )
{
	setOrientation(Horizontal);
}

void WerkToolBP::Verbergen(bool vis)
{
	if (!vis)
		emit Schliessen();
}

void WerkToolBP::ModeFromTB()
{
	PDFTool->setOn(false);
	PDFaTool->setOn(false);
	if (PDFTool == sender())
	{
		PDFTool->setOn(true);
		emit NewMode(InsertPDFButton+PDFwerkz);
	}
	if (PDFaTool == sender())
	{
		PDFaTool->setOn(true);
		emit NewMode(InsertPDFTextAnnotation+PDFnotiz);
	}
}
