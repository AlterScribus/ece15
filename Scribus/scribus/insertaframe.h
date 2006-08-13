/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
//
//
// Author: Craig Bradney <cbradney@zip.com.au>, (C) 2006
//
// Copyright: See COPYING file that comes with this distribution
//
//


#ifndef INSERTAFRAME_H
#define INSERTAFRAME_H

#include "insertaframebase.h"
#include "scribusapi.h"
#include "pageitem.h"

#include <qstring.h>

class ScribusDoc;

class SCRIBUS_API InsertAFrame : public InsertAFrameBase
{
    Q_OBJECT

public:
	InsertAFrame(QWidget* parent, ScribusDoc *doc);
	~InsertAFrame(){};
	
	void getNewFrameProperties(PageItem::ItemType& frameType, int& locationType, int& positionType, int& sizeType, double& x, double& y, double& width, double& height, QString &source);
protected:
	ScribusDoc* m_Doc;
	
protected slots:
	void slotSelectType(int id);
	void slotSelectPagePlacement(int id);
	void slotSelectPosition(int id);
	void slotSelectSize(int id);
};

#endif

