/***************************************************************************
                          pageitem.cpp  -  description
                             -------------------
    begin                : Sat Apr 7 2001
    copyright            : (C) 2001 by Franz Schmid
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

#include "pageitem.h"
#include <qpainter.h>
#include <qpen.h>
#include <qfont.h>
#include <qregion.h>
#include <qpoint.h>
#include <qfileinfo.h>
#include <qdrawutil.h>
#include <qbitmap.h>
#include <cmath>
#include "page.h"
#include "config.h"
#include <ft2build.h>
#include FT_GLYPH_H
extern double Cwidth(ScribusDoc *doc, QString name, QString ch, int Siz, QString ch2 = " ");
extern QPointArray FlattenPath(FPointArray ina, QValueList<uint> &Segs);
extern double xy2Deg(double x, double y);
extern void BezierPoints(QPointArray *ar, QPoint n1, QPoint n2, QPoint n3, QPoint n4);

PageItem::PageItem(Page *pa, int art, double x, double y, double w, double h, double w2, QString fill, QString outline, ScribusDoc *doc) : QObject(pa)
{
	QString tmp;
	BackBox = 0;
	NextBox = 0;
	Locked = false;
	Xpos = x;
	Ypos = y;
	Width = w;
	Height = h;
	OldB = Width;
	OldH = Height;
	OldB2 = Width;
	OldH2 = Height;
	PType = art;
	Rot = 0;
	Parent = pa;
	Doc = doc;
	Pcolor = fill;
	if (PType == 4)
		Pcolor2 = fill;
	else
		Pcolor2 = outline;
	TxtFill = Doc->DpenText;
	TxtStroke = TxtFill;
	ShTxtStroke = 100;
	ShTxtFill = 100;
	TxtScale = 100;
	TxTStyle = 0;
	Shade = 100;
	Shade2 = 100;
	GrColor = "";
	GrColor2 = "";
	GrShade = 100;
	GrShade2 = 100;
	GrType = 0;
	Pwidth = w2;
	PLineArt = Doc->DLineArt;
	PLineEnd = FlatCap;
	PLineJoin = MiterJoin;
	Select = false;
	FrameOnly = false;
	ClipEdited = false;
	FrameType = 0;
	IFont = Doc->Dfont;
	ISize = Doc->Dsize;
	LineSp = (Doc->Dsize * static_cast<double>(Doc->AutoLine) / 100) + Doc->Dsize;
	Doc->Vorlagen[0].LineSpa = LineSp;
	CurX = 0;
	CurY = 0;
	CPos = 0;
	Extra = 1;
	TExtra = 1;
	BExtra = 1;
	RExtra = 1;
	ExtraV = 0;
	Ptext.clear();
	Ptext.setAutoDelete(true);
	Pfile = "";
	pixm = QImage();
	Pfile2 = "";
	Pfile3 = "";
	LocalScX = 1;
	LocalScY = 1;
	LocalViewX = 1;
	LocalViewY = 1;
	OrigW = 0;
	OrigH = 0;
	LocalX = 0;
	LocalY = 0;
	flippedH = 0;
	flippedV = 0;
	BBoxX = 0;
	BBoxH = 0;
	RadRect = 0;
	if ((art == 4) || (art == 2))
		Frame = true;
	else
		Frame = false;
	switch (art)
		{
		case 6:
			Clip.setPoints(4, static_cast<int>(w/2),0, static_cast<int>(w),static_cast<int>(h/2), static_cast<int>(w/2),static_cast<int>(h), 0,static_cast<int>(h/2));
			break;
		default:
			Clip.setPoints(4, 0,0, static_cast<int>(w),0, static_cast<int>(w),static_cast<int>(h), 0,static_cast<int>(h));
			break;
		}
	PoLine.resize(0);
	Segments.clear();
	PoShow = false;
	BaseOffs = 0;
	OwnPage = pa;
	PicArt = true;
	PicAvail = false;
	isPrintable = true;
	isBookmark = false;
  BMnr = 0;
	isAnnotation = false;
	AnType = 0;
	AnActType = 0;
	AnBwid = 1;
	AnAction = "";
	An_E_act = "";
	An_X_act = "";
	An_D_act = "";
	An_Fo_act = "";
	An_Bl_act = "";
	An_K_act = "";
	An_F_act = "";
	An_V_act = "";
	An_C_act = "";
	An_Extern = "";
	AnName = "Item"+tmp.setNum(Doc->TotalItems);
	AutoName = true;
	Doc->TotalItems++;
	AnToolTip = "";
	AnRollOver = "";
	AnDown = "";
	AnBsty = 0;
	AnFeed = 1;
	AnFlag = 0;
	AnZiel = 0;
	AnVis = 0;
	AnChkStil = 0;
	AnFormat = 0;
	AnFont = 4;
	AnIsChk = false;
	AnAAact = false;
	AnHTML = false;
	AnUseIcons = false;
	AnIPlace = 1;
	AnScaleW = 0;
	AnMaxChar = -1;
	AnBColor = outline;
	HasSel = false;
	Textflow = true;
	Textflow2 = false;
	Tinput = false;
	isAutoText = false;
	Ausrich = 0;
	Redrawn = false;
	isRaster = false;
	Sizing = false;
	toPixmap = false;
	UseEmbedded = true;
	EmProfile = "";
	Groups.clear();
	LayerNr = Doc->ActiveLayer;
	ScaleType = true;
	AspectRatio = true;
	Transparency = 0.0;
	TranspStroke = 0.0;
	Reverse = false;
	InvPict = false;
	NamedLStyle = "";
	DashValues.clear();
	DashOffset = 0;
	fill_gradient = VGradient(VGradient::linear);
	Language = doc->Language;
}

/** Zeichnet das Item */
void PageItem::DrawObj(ScPainter *p, QRect e)
{
	QColor tmp;
	FPointArray CL;
	QPointArray cl;
	QPainter pf, pp;
	PageItem *nb;
	QPoint pt1, pt2;
	FPoint gv;
	QRegion cm;
	uint a, nrc, nrc2, zae;
	int desc, asce, absa, aSpa, chs;
	uint BuPos, LastSP, BuPos2;
	double oldCurY, LastXp, EndX, OFs, OFs2, wide, rota, wid;
	double sc = Doc->Scale;
	QString chx, chx2, chx3;
	struct Pti *hl;
	struct ZZ *Zli;
	struct ZZ *Zli2;
	QPtrList<ZZ> LiList;
	bool outs = false;
	if (!Doc->DoDrawing)
		{
		Redrawn = true;
		Tinput = false;
		FrameOnly = false;
		Dirty = false;
		return;
		}
	LiList.setAutoDelete(true);
	for (int xxx=0; xxx<5; ++xxx)
		{
		Doc->Vorlagen[xxx].LineSpa = LineSp;
		Doc->Vorlagen[xxx].Indent = 0;
		Doc->Vorlagen[xxx].First = 0;
		Doc->Vorlagen[xxx].Avor = 0;
		Doc->Vorlagen[xxx].Anach = 0;
		}
	Doc->Vorlagen[0].Ausri = Ausrich;
	pf.begin(Parent);
	pf.translate(static_cast<int>(Xpos*sc), static_cast<int>(Ypos*sc));
	pf.scale(static_cast<double>(sc), static_cast<double>(sc));
	pf.rotate(static_cast<double>(Rot));
	if (!Doc->RePos)
		{
		if (!e.isEmpty())
			pf.setClipRect(e);
		else
			pf.setClipRect(OwnPage->ViewReg().boundingRect());
		}
	bool doStroke = true;
	p->setZoomFactor(sc);
	p->save();
	p->translate(-e.x(), -e.y());
	p->translate(Xpos*sc, Ypos*sc);
	p->rotate(static_cast<double>(Rot));
	p->setLineWidth(Pwidth);
	if (Pcolor != "None")
		{
		SetFarbe(&tmp, Pcolor, Shade);
		p->setBrush(tmp);
		p->setFillMode(1);
		}
	else
		p->setFillMode(0);
	if (GrType != 0)
		{
		p->setFillMode(2);
		p->fill_gradient = fill_gradient;
		QWMatrix grm;
		grm.rotate(Rot);
		FPointArray gra;
		switch (GrType)
			{
			case 1:
				gra.setPoints(2, 0, 0, Width, 0);
				gra.map(grm);
				p->setGradient(VGradient::linear, gra.point(0), gra.point(1));
				break;
			case 2:
				gra.setPoints(2, 0, 0, Height, 0);
				grm.rotate(90);
				gra.map(grm);
				p->setGradient(VGradient::linear, gra.point(0), gra.point(1));
				break;
			case 3:
				gra.setPoints(2, 0, 0, Width, Height);
				gra.map(grm);
				p->setGradient(VGradient::linear, gra.point(0), gra.point(1));
				break;
			case 4:
				gra.setPoints(2, 0, Height, Width, 0);
				gra.map(grm);
				p->setGradient(VGradient::linear, gra.point(0), gra.point(1));
				break;
			case 5:
				if (Width > Height)
					gv = FPoint(Width, Height / 2.0);
				else
					gv = FPoint(Width / 2.0, Height);
				p->setGradient(VGradient::radial, FPoint(Width / 2.0,Height / 2.0), gv, FPoint(Width / 2.0,Height / 2.0));
				break;
			}
		}
	if (Pcolor2 != "None")
		{
		SetFarbe(&tmp, Pcolor2, Shade2);
		if ((Pwidth == 0) && (PType != 5))
			p->setLineWidth(0);
		else
			{
			p->setPen(tmp, Pwidth, PLineArt, PLineEnd, PLineJoin);
			if (DashValues.count() != 0)
				p->setDash(DashValues, DashOffset);
			}
		}
	else
		p->setLineWidth(0);
	p->setBrushOpacity(1.0 - Transparency);
	p->setPenOpacity(1.0 - TranspStroke);
	switch (PType)
		{
		case 2:
			if (Doc->RePos)
				break;
			if ((Pcolor != "None") || (GrType != 0))
				{
				p->setupPolygon(&PoLine);
				p->drawPolygon();
				}
			if (Pfile == "")
				{
				p->setPen(black, 1, SolidLine, FlatCap, MiterJoin);
				p->drawLine(FPoint(0, 0), FPoint(Width, Height));
				p->drawLine(FPoint(0, Height), FPoint(Width, 0));
				}
			else
				{
				QBitmap bmd = QBitmap(static_cast<int>(Width), static_cast<int>(Height));
				bmd.fill(Qt::color0);
				QPainter pb;
				pb.begin(&bmd);
				pb.setBrush(Qt::color1);
				pb.setPen(QPen(Qt::color1, 1, DotLine, FlatCap, MiterJoin));
				DrawPoly(&pb, Clip, pb.brush().color(), true);
				pb.end();
				QPixmap pmd = QPixmap(static_cast<int>(Width), static_cast<int>(Height));
				pmd.fill();
				QPainter pd;
				pd.begin(&pmd);
				if ((!PicArt) || (!PicAvail))
					{
					pd.setPen(QPen(black, 1, SolidLine, FlatCap, MiterJoin));
					pd.drawLine(0, 0, static_cast<int>(Width), static_cast<int>(Height));
					pd.drawLine(0, static_cast<int>(Height), static_cast<int>(Width), 0);
					if (PicAvail)
						pd.setPen(blue);
					else
						pd.setPen(red);
					pd.setBackgroundMode(OpaqueMode);
					pd.setFont(QFont("Helvetica", 18));
					QFileInfo fi = QFileInfo(Pfile);
					int leng = pd.fontMetrics().width(fi.fileName());
					int xp = static_cast<int>(Width / 2 - leng / 2);
					int yp = static_cast<int>(Height / 2 + pd.fontMetrics().height() / 2);
					pd.drawText(xp, yp, fi.fileName());
					}
				else
					{
					if ((Pcolor != "None") || (GrType != 0))
						{
						pd.setPen(NoPen);
						SetFarbe(&tmp, Pcolor, Shade);
						pd.setBrush(tmp);
						if (!Doc->RePos)
							{
							if (GrType == 0)
								DrawPoly(&pd, Clip, pd.brush().color());
							}
						}
					if (flippedH % 2 != 0)
						{
						pd.translate(Width, 0);
						pd.scale(-1, 1);
						}
					if (flippedV % 2 != 0)
						{
						pd.translate(0, static_cast<int>(Height));
						pd.scale(1, -1);
						}
					if ((LocalViewX != 1) || (LocalViewY != 1))
						pd.scale(LocalViewX, LocalViewY);
					if (InvPict)
						{
						QImage ip = pixm.copy();
						ip.invertPixels();
						pd.drawImage(static_cast<int>(LocalX*LocalScX), static_cast<int>(LocalY*LocalScY), ip);
						}
					else
						pd.drawImage(static_cast<int>(LocalX*LocalScX), static_cast<int>(LocalY*LocalScY), pixm);
					}
				pmd.setMask(bmd);
				QImage ip2 = pmd.convertToImage();
				p->drawImage(ip2);
				pd.end();
				}
			break;
		case 5:
			if (Doc->RePos)
				break;
			if (NamedLStyle == "")
				p->drawLine(FPoint(0, 0), FPoint(Width, 0));
			else
				{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
					{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(tmp, ml[it].Width,
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin));
					p->drawLine(FPoint(0, 0), FPoint(Width, 0));
					}
				doStroke = false;
				}
			break;
		case 1:
		case 3:
		case 6:
			if (Doc->RePos)
				break;
			p->setupPolygon(&PoLine);
			p->drawPolygon();
			break;
		case 7:
			if (Doc->RePos)
				break;
			p->setupPolygon(&PoLine);
			if (NamedLStyle == "")
				p->drawPolyLine();
			else
				{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
					{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(tmp, ml[it].Width,
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin));
					p->drawPolyLine();
					}
				}
			doStroke = false;
			break;
		case 4:
			p->save();
			if ((Pcolor != "None") || (GrType != 0))
				{
				p->setupPolygon(&PoLine);
				p->drawPolygon();
				}
			if ((isAnnotation) && (AnType == 2) && (Pfile != "") && (PicAvail) && (PicArt) && (AnUseIcons))
				{
				QBitmap bmd = QBitmap(static_cast<int>(Width), static_cast<int>(Height));
				bmd.fill(Qt::color0);
				QPainter pb;
				pb.begin(&bmd);
				pb.setBrush(Qt::color1);
				pb.setPen(QPen(Qt::color1, 1, DotLine, FlatCap, MiterJoin));
				DrawPoly(&pb, Clip, pb.brush().color(), true);
				pb.end();
				QPixmap pmd = QPixmap(static_cast<int>(Width), static_cast<int>(Height));
				pmd.fill();
				QPainter pd;
				pd.begin(&pmd);
				if ((Pcolor != "None") || (GrType != 0))
					{
					pd.setPen(NoPen);
					SetFarbe(&tmp, Pcolor, Shade);
					pd.setBrush(tmp);
					if (!Doc->RePos)
						{
						if (GrType == 0)
							DrawPoly(&pd, Clip, pd.brush().color());
						}
					}
				pd.drawImage(static_cast<int>(LocalX*LocalScX), static_cast<int>(LocalY*LocalScY), pixm);
				pmd.setMask(bmd);
				QImage ip2 = pmd.convertToImage();
				p->drawImage(ip2);
				}
			if ((Ptext.count() != 0) || (Dirty) || (NextBox != 0))
				{
				if (NextBox != 0)
					{
					nb = NextBox;
					while (nb != 0)
						{
						a = nb->Ptext.count();
						for (uint s=0; s<a; ++s)
							{
							Ptext.append(nb->Ptext.take(0));
							}
						nb->Dirty = true;
						nb = nb->NextBox;
						}
					nb = NextBox;
					}
				Doc->Vorlagen[0].LineSpa = LineSp;
				QRegion cl = QRegion(pf.xForm(Clip));
				for (a=0; a<OwnPage->Items.count(); ++a)
					{
					if (((OwnPage->Items.at(a)->ItemNr > ItemNr)
 								&& (OwnPage->Items.at(a)->LayerNr == LayerNr))
   							|| (Doc->Layers[OwnPage->Items.at(a)->LayerNr].Level > Doc->Layers[LayerNr].Level))
						{
						if (OwnPage->Items.at(a)->Textflow)
							{
							pp.begin(Parent);
							pp.translate(OwnPage->Items.at(a)->Xpos*sc, OwnPage->Items.at(a)->Ypos*sc);
							pp.scale(sc, sc);
							pp.rotate(OwnPage->Items.at(a)->Rot);
							if (OwnPage->Items.at(a)->Textflow2)
								{
								QPointArray tcli;
								tcli.resize(4);
								tcli.setPoint(0, QPoint(0,0));
								tcli.setPoint(1, QPoint(qRound(OwnPage->Items.at(a)->Width), 0));
								tcli.setPoint(2, QPoint(qRound(OwnPage->Items.at(a)->Width), qRound(OwnPage->Items.at(a)->Height)));
								tcli.setPoint(3, QPoint(0, qRound(OwnPage->Items.at(a)->Height)));
								cm = QRegion(pp.xForm(tcli));
								}
							else
								cm = QRegion(pp.xForm(OwnPage->Items.at(a)->Clip));
							pp.end();
							cl = cl.subtract(cm);
							}
						}
					}
				if (flippedH % 2 != 0)
					{
					p->translate(Width * sc, 0);
					p->scale(-1, 1);
					}
				if (flippedV % 2 != 0)
					{
					p->translate(0, Height * sc);
					p->scale(1, -1);
					}
				if ((Doc->AppMode == 7) && (Dirty))
					Dirty = false;
				CurX = Extra;
				CurY = Doc->Vorlagen[0].LineSpa+TExtra;
				LiList.clear();
				BuPos = 0;
				BuPos2 = 0;
				LastSP = 0;
				LastXp = 0;
				outs = false;
				OFs = 0;
				OFs2 = 0;
				aSpa = 0;
				absa = 0;
				for (a = 0; a < Ptext.count(); ++a)
					{
					hl = Ptext.at(a);
					chx = hl->ch;
					if (hl->ch == QChar(30))
						chx = ExpandToken(a);
					absa = hl->cab;
					if (a == 0)
						{
						if (BackBox != 0)
							{
							nb = BackBox;
							while (nb != 0)
								{
								if (nb->Ptext.count() != 0)
									{
									if (nb->Ptext.at(nb->Ptext.count()-1)->ch == QChar(13))
										{
										CurX += Doc->Vorlagen[absa].First;
										CurX += Doc->Vorlagen[absa].Indent;
										CurY += Doc->Vorlagen[absa].Avor;
										break;
										}
									else
										{
										CurX += Doc->Vorlagen[absa].Indent;
										break;
										}
									nb = nb->BackBox;
									}
								}
							}
						else
							{
							CurX += Doc->Vorlagen[absa].First;
							CurX += Doc->Vorlagen[absa].Indent;
							CurY += Doc->Vorlagen[absa].Avor;
							}
						}
					if ((Doc->Vorlagen[0].LineSpa != Doc->Vorlagen[absa].LineSpa) && (a == 0))
						CurY += Doc->Vorlagen[absa].Avor;
					if (LiList.count() == 0)
						{
						CurY += Doc->Vorlagen[absa].LineSpa - Doc->Vorlagen[0].LineSpa;
						if ((a > 0) && (Ptext.at(a-1)->ch == QChar(13)))
							{
							CurX += Doc->Vorlagen[hl->cab].First;
							CurX += Doc->Vorlagen[hl->cab].Indent;
							CurY += Doc->Vorlagen[hl->cab].Avor;
							}
						}
					oldCurY = CurY;
					chs = hl->csize;
					SetZeichAttr(hl, &chs, &chx);
					if (chx == QChar(29))
						chx2 = " ";
					else
						chx2 = chx;
					if (a < Ptext.count()-1)
						{
						if (Ptext.at(a+1)->ch == QChar(29))
							chx3 = " ";
						else
							chx3 = Ptext.at(a+1)->ch;
						wide = Cwidth(Doc, hl->cfont, chx2, chs, chx3);
						}
					else
						wide = Cwidth(Doc, hl->cfont, chx2, chs);
					wide = wide * (hl->cscale / 100.0);
					desc = static_cast<int>(-(*Doc->AllFonts)[hl->cfont]->numDescender * chs);
					asce = static_cast<int>((*Doc->AllFonts)[hl->cfont]->numAscent * chs);
					if (LiList.isEmpty())
						{
						pt1 = QPoint(static_cast<int>(CurX), static_cast<int>(CurY+desc+BExtra));
						pt2 = QPoint(static_cast<int>(CurX), static_cast<int>(CurY-asce));
						while ((!cl.contains(pf.xForm(pt1))) || (!cl.contains(pf.xForm(pt2))))
							{
							CurX++;
							pt1 = QPoint(static_cast<int>(CurX), static_cast<int>(CurY+desc));
							pt2 = QPoint(static_cast<int>(CurX), static_cast<int>(CurY-asce));
							if (CurX+RExtra > Width)
								{
								CurY += Doc->Vorlagen[hl->cab].LineSpa;
								CurY += Doc->Vorlagen[hl->cab].Anach;
								CurX = Extra;
								if (CurY+BExtra > Height)
									{
									nrc = a;
									goto NoRoom;
									}
								}
							}
							CurX += Extra;
						}
					hl->xp = CurX+hl->cextra;
					hl->yp = CurY;
					CurY = oldCurY;
					CurX += wide+hl->cextra;
					pt1 = QPoint(static_cast<int>(CurX+RExtra), static_cast<int>(CurY+desc+BExtra));
					pt2 = QPoint(static_cast<int>(CurX+RExtra), static_cast<int>(CurY-asce));
					if ((!cl.contains(pf.xForm(pt1))) || (!cl.contains(pf.xForm(pt2))))
						outs = true;
					Zli = new ZZ;
					Zli->Zeich = chx;
					Zli->Farb = hl->ccolor;
					Zli->shade = hl->cshade;
					Zli->Farb2 = hl->cstroke;
					Zli->shade2 = hl->cshade2;
					Zli->xco = hl->xp;
					Zli->yco = hl->yp;
					Zli->Sele = hl->cselect;
					Zli->Siz = chs;
					Zli->Style = hl->cstyle;
					Zli->ZFo = hl->cfont;
					Zli->wide = wide;
					Zli->kern = hl->cextra;
					Zli->scale = hl->cscale;
					if ((hl->ch == " ") && (!outs))
						{
						LastXp = hl->xp;
						LastSP = BuPos;
						}
					if ((hl->ch == "-") && (!outs))
						{
						LastXp = CurX;
						LastSP = BuPos;
						}
					if ((hl->cstyle & 128) && (!outs))
						{
						LastXp = CurX + Cwidth(Doc, hl->cfont, "-", hl->csize);
						LastSP = BuPos;
						}
					LiList.append(Zli);
					BuPos++;
					if ((hl->ch == QChar(13)) || (outs))
						{
						if (outs)
							{
							if (LastSP != 0)            // Hier k�nnen auch andere Trennungen eingebaut werden
								{
								a -= BuPos - LastSP;
								a++;
								if (Ptext.at(a)->cstyle & 128)
									{
									Zli = new ZZ;
									Zli->Zeich = "-";
									Zli->Farb = Ptext.at(a)->ccolor;
									Zli->Farb2 = Ptext.at(a)->cstroke;
									Zli->shade = Ptext.at(a)->cshade;
									Zli->shade2 = Ptext.at(a)->cshade2;
									Zli->xco = LastXp - Cwidth(Doc, Ptext.at(a)->cfont, "-", Ptext.at(a)->csize);
									Zli->yco = Ptext.at(a)->yp;
									Zli->Sele = Ptext.at(a)->cselect;
									Zli->Siz = Ptext.at(a)->csize;
									Zli->Style = Ptext.at(a)->cstyle;
									Zli->ZFo = Ptext.at(a)->cfont;
									Zli->wide = Cwidth(Doc, Ptext.at(a)->cfont, "-", Ptext.at(a)->csize);
									Zli->kern = Ptext.at(a)->cextra;
									Zli->scale = Ptext.at(a)->cscale;
									LiList.insert(LastSP+1, Zli);
									LastSP += 1;
									}
								BuPos = LastSP+1;
								if (Doc->Vorlagen[absa].Ausri != 0)
									{
									EndX = LastXp;
									do
										{
										pt1 = QPoint(static_cast<int>(EndX+RExtra), static_cast<int>(CurY+desc));
										pt2 = QPoint(static_cast<int>(EndX+RExtra), static_cast<int>(CurY-asce));
										EndX++;
										}
									while ((cl.contains(pf.xForm(pt1))) && (cl.contains(pf.xForm(pt2))));
									if (Doc->Vorlagen[absa].Ausri == 2)
										OFs = EndX - LastXp;
									if (Doc->Vorlagen[absa].Ausri == 1)
										OFs = (EndX - LastXp) / 2;
									if ((Doc->Vorlagen[absa].Ausri == 3) || (Doc->Vorlagen[absa].Ausri == 4))
										{
										aSpa = 0;
										for (uint sof = 0; sof<BuPos-1; ++sof)
											{
											if (LiList.at(sof)->Zeich == QChar(32))
												aSpa++;
											}
										if (aSpa > 1)
											OFs2 = (EndX - LastXp) / aSpa;
										else
											{
											if (aSpa == 0)
												OFs2 = 0;
											else
												OFs2 = (EndX - LastXp);
											}
										OFs = 0;
										for (uint yof = 0; yof < LiList.count(); ++yof)
											{
											LiList.at(yof)->xco += OFs;
											Ptext.at(BuPos2)->xp += OFs;
											BuPos2++;
											if (LiList.at(yof)->Zeich == QChar(32))
												OFs += OFs2;
											}
										}
									else
										{
										for (uint xof = 0; xof<LiList.count(); ++xof)
											{
											LiList.at(xof)->xco += OFs;
											Ptext.at(BuPos2)->xp += OFs;
											BuPos2++;
											}
										}
									}
								}
							else
								{
								a--;
								BuPos--;
								}
							}
						else
							{
							if (Doc->Vorlagen[absa].Ausri != 0)
								{
								EndX = CurX;
								do
									{
									pt1 = QPoint(static_cast<int>(EndX+RExtra), static_cast<int>(CurY+desc));
									pt2 = QPoint(static_cast<int>(EndX+RExtra), static_cast<int>(CurY-asce));
									EndX++;
									}
								while ((cl.contains(pf.xForm(pt1))) && (cl.contains(pf.xForm(pt2))));
								if (Doc->Vorlagen[absa].Ausri == 2)
									OFs = EndX - CurX - Extra;
								if (Doc->Vorlagen[absa].Ausri == 1)
									OFs = (EndX - CurX - Extra) / 2;
								if (Doc->Vorlagen[absa].Ausri == 3)
									OFs = 0;
								if (Doc->Vorlagen[absa].Ausri == 4)
									{
									aSpa = 0;
									for (uint sof = 0; sof<LiList.count(); ++sof)
										{
										if (LiList.at(sof)->Zeich == QChar(32))
											aSpa++;
										}
									if (aSpa != 0)
										{
										OFs2 = (EndX - CurX - Extra) / aSpa;
										}
									else
										OFs2 = 0;
									OFs = 0;
									for (uint yof = 0; yof < LiList.count(); ++yof)
										{
										LiList.at(yof)->xco += OFs;
										Ptext.at(BuPos2)->xp += OFs;
										BuPos2++;
										if (LiList.at(yof)->Zeich == QChar(32))
											OFs += OFs2;
										}
									}
								else
									{
									for (uint xof = 0; xof<LiList.count(); ++xof)
										{
										LiList.at(xof)->xco += OFs;
										Ptext.at(BuPos2)->xp += OFs;
										BuPos2++;
										}
									}
								}
							}
						BuPos2 = a;
						BuPos2++;
						uint BuPos3 = BuPos;
						CurY += Doc->Vorlagen[0].LineSpa;
						CurX = Extra;
						if (hl->ch != QChar(13))
							CurX += Doc->Vorlagen[hl->cab].Indent;
						else
							{
							CurY += Doc->Vorlagen[hl->cab].Anach;
							if (BuPos3 > 0)
								BuPos3 -= 1;
							}
						hl->xp = CurX;
						hl->yp = CurY;
						LiList.at(LiList.count()-1)->xco = hl->xp;
						LiList.at(LiList.count()-1)->yco = hl->yp;
						for (uint zc = 0; zc<BuPos3; ++zc)
							{
							Zli2 = LiList.at(zc);
							if (Zli2->Farb != "None")
								{
								SetFarbe(&tmp, Zli2->Farb, Zli2->shade);
								p->setBrush(tmp);
								}
							if (Zli2->Farb2 != "None")
								{
								SetFarbe(&tmp, Zli2->Farb2, Zli2->shade2);
								p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
								}
							if ((Zli2->Sele) && (Doc->AppMode == 7) && (Select))
								{
								wide = Zli2->wide;
								desc = static_cast<int>((*Doc->AllFonts)[Zli2->ZFo]->numDescender * -Zli2->Siz);
								asce = static_cast<int>((*Doc->AllFonts)[Zli2->ZFo]->numAscent * Zli2->Siz);
								p->setFillMode(1);
           			p->setBrush(darkBlue);
								if (!Doc->RePos)
           				p->drawRect(Zli2->xco, Zli2->yco-asce, wide+1, asce+desc);
								p->setBrush(white);
								}
							if (!Doc->RePos)
								{
								if (e.intersects(pf.xForm(QRect(qRound(Zli2->xco),qRound(Zli2->yco-LineSp), qRound(Zli2->wide+1), qRound(LineSp)))))
									DrawZeichenS(p, Zli2);
								}
							}
						LiList.clear();
						BuPos = 0;
						LastSP = 0;
						LastXp = 0;
						outs = false;
						}
					}
				if (Doc->Vorlagen[absa].Ausri != 0)
					{
					EndX = CurX;
					do
						{
						pt1 = QPoint(static_cast<int>(EndX+RExtra), static_cast<int>(CurY+desc));
						pt2 = QPoint(static_cast<int>(EndX+RExtra), static_cast<int>(CurY-asce));
						EndX++;
						}
					while ((cl.contains(pf.xForm(pt1))) && (cl.contains(pf.xForm(pt2))));
					if (Doc->Vorlagen[absa].Ausri == 2)
						OFs = EndX - CurX - Extra;
					if (Doc->Vorlagen[absa].Ausri == 1)
						OFs = (EndX - CurX - Extra) / 2;
					if (Doc->Vorlagen[absa].Ausri == 3)
						OFs = 0;
					if (Doc->Vorlagen[absa].Ausri == 4)
						{
						aSpa = 0;
						for (uint sof = 0; sof<LiList.count(); ++sof)
							{
							if (LiList.at(sof)->Zeich == QChar(32))
								aSpa++;
							}
						if (aSpa != 0)
							{
							OFs2 = (EndX - CurX - Extra) / aSpa;
							}
						else
							OFs2 = 0;
						OFs = 0;
						for (uint yof = 0; yof < LiList.count(); ++yof)
							{
							LiList.at(yof)->xco += OFs;
							Ptext.at(BuPos2)->xp += OFs;
							BuPos2++;
							if (LiList.at(yof)->Zeich == QChar(32))
								OFs += OFs2;
							}
						}
					else
						{
						for (uint xof = 0; xof<LiList.count(); ++xof)
							{
							LiList.at(xof)->xco += OFs;
							Ptext.at(BuPos2)->xp += OFs;
							BuPos2++;
							}
						}
					}
				for (uint zc = 0; zc<LiList.count(); ++zc)
					{
					Zli2 = LiList.at(zc);
					if (Zli2->Farb != "None")
						{
						SetFarbe(&tmp, Zli2->Farb, Zli2->shade);
						p->setBrush(tmp);
						}
					if (Zli2->Farb2 != "None")
						{
						SetFarbe(&tmp, Zli2->Farb2, Zli2->shade2);
						p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
						}
					if ((Zli2->Sele) && (Doc->AppMode == 7) && (Select))
						{
						wide = Zli2->wide;
						desc = static_cast<int>((*Doc->AllFonts)[Zli2->ZFo]->numDescender * -Zli2->Siz);
						asce = static_cast<int>((*Doc->AllFonts)[Zli2->ZFo]->numAscent * Zli2->Siz);
						p->setFillMode(1);
         		p->setBrush(darkBlue);
						if (!Doc->RePos)
         			p->drawRect(Zli2->xco, Zli2->yco-asce, wide+1, asce+desc);
						p->setBrush(white);
						}
					if (!Doc->RePos)
						{
						if (e.intersects(pf.xForm(QRect(qRound(Zli2->xco),qRound(Zli2->yco-LineSp), qRound(Zli2->wide+1), qRound(LineSp)))))
							DrawZeichenS(p, Zli2);
						}
					}
				LiList.clear();
				BuPos = 0;
				LastSP = 0;
				outs = false;
				}
			MaxChars = Ptext.count();
			Redrawn = true;
			p->restore();
			break;
NoRoom: if (NextBox != 0)
					{
					nrc2 = Ptext.count();
					for (uint ss=nrc; ss<nrc2; ++ss)
						{
						NextBox->Ptext.append(Ptext.take(nrc));
						}
					NextBox->Dirty = true;
					if (uint(CPos) > nrc)
						{
						CPos = nrc;
						if ((Doc->AppMode == 7) && (Tinput))
							{
							OwnPage->Deselect(true);
							NextBox->CPos = 1;
							Doc->ActPage = NextBox->OwnPage;
							NextBox->OwnPage->SelectItemNr(NextBox->ItemNr);
							break;
							}
						}
					if (NextBox->OwnPage != OwnPage)
						NextBox->OwnPage->RefreshItem(NextBox, true);
					else
						{
						bool savre = Doc->RePos;
						Doc->RePos = true;
						p->save();
						NextBox->DrawObj(p, QRect(0, 0, 1, 1));
						p->restore();
						Doc->RePos = savre;
						}
					}
				else
					{
					if (!Doc->RePos)
						{
						p->setPen(black, 1, SolidLine, FlatCap, MiterJoin);
						p->setBrush(white);
						p->drawRect(Width-16, Height-16, 14, 14);
						p->drawLine(FPoint(Width-16, Height-16), FPoint(Width-3, Height-3));
						p->drawLine(FPoint(Width-16, Height-3), FPoint(Width-3, Height-16));
						}
					}
				MaxChars = nrc;
				Redrawn = true;
				p->restore();
				break;
		case 8:
			if (!PoShow)
				doStroke = false;
			cl = FlattenPath(PoLine, Segments);
			CurX = Extra;
			if (Ptext.count() != 0)
				CurX += Ptext.at(0)->cextra;
			zae = 0;
			wid = sqrt(pow(cl.point(zae+1).x()-cl.point(zae).x(),2)+pow(cl.point(zae+1).y()-cl.point(zae).y(),2));
			while (wid < 1)
				{
				zae++;
				if (zae == cl.size()-1)
				{
					MaxChars = Ptext.count();
					break;
				}
				wid = sqrt(pow(cl.point(zae+1).x()-cl.point(zae).x(),2)+pow(cl.point(zae+1).y()-cl.point(zae).y(),2));
				}
			rota = xy2Deg(cl.point(zae+1).x()-cl.point(zae).x(),cl.point(zae+1).y()-cl.point(zae).y());
			for (a = 0; a < Ptext.count(); ++a)
				{
				CurY = 0;
				hl = Ptext.at(a);
				chx = hl->ch;
				if ((chx == QChar(30)) || (chx == QChar(13)))
					continue;
				chs = hl->csize;
				SetZeichAttr(hl, &chs, &chx);
				if (chx == QChar(29))
					chx2 = " ";
				else
					chx2 = chx;
				if (a < Ptext.count()-1)
					{
					if (Ptext.at(a+1)->ch == QChar(29))
						chx3 = " ";
					else
						chx3 = Ptext.at(a+1)->ch;
					wide = Cwidth(Doc, hl->cfont, chx2, chs, chx3);
					}
				else
					wide = Cwidth(Doc, hl->cfont, chx2, chs);
				wide = wide * (hl->cscale / 100.0);
				if ((CurX+(wide+hl->cextra)/2) >= wid)
					{
					if (zae < cl.size()-1)
						{
						CurX = CurX - wid;
						wid = 0;
						EndX = CurX;
						do
							{
							do
								{
								zae++;
								if (zae == cl.size()-1)
								{
									MaxChars = Ptext.count();
									break;
								}
								wid = sqrt(pow(cl.point(zae+1).x()-cl.point(zae).x(),2)+pow(cl.point(zae+1).y()-cl.point(zae).y(),2));
								rota = xy2Deg(cl.point(zae+1).x()-cl.point(zae).x(),cl.point(zae+1).y()-cl.point(zae).y());
								}
							while (wid == 0);
							EndX -= wid;
							}
						while (wid < EndX);
						CurX = EndX + wid;
						}
					else
					{
						MaxChars = Ptext.count();
						break;
					}
					}
				p->save();
				p->translate(cl.point(zae).x()*sc, cl.point(zae).y()*sc);
				p->rotate(rota);
				hl->xp = CurX+hl->cextra;
				hl->yp = CurY+BaseOffs;
				hl->PtransX = cl.point(zae).x();
				hl->PtransY = cl.point(zae).y();
				hl->PRot = rota;
				Zli = new ZZ;
				Zli->Zeich = chx;
				if (hl->ccolor != "None")
					{
					SetFarbe(&tmp, hl->ccolor, hl->cshade);
					p->setBrush(tmp);
					}
				if (hl->cstroke != "None")
					{
					SetFarbe(&tmp, hl->cstroke, hl->cshade2);
					p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
					}
				Zli->Farb = hl->ccolor;
				Zli->Farb2 = hl->cstroke;
				Zli->shade = hl->cshade;
				Zli->shade2 = hl->cshade2;
				Zli->xco = hl->xp;
				Zli->yco = hl->yp;
				Zli->Sele = hl->cselect;
				Zli->Siz = chs;
				Zli->Style = hl->cstyle;
				Zli->ZFo = hl->cfont;
				Zli->wide = wide;
				Zli->kern = hl->cextra;
				Zli->scale = hl->cscale;
				if (!Doc->RePos)
					DrawZeichenS(p, Zli);
				delete Zli;
				p->restore();
				p->setZoomFactor(sc);
				CurX += wide+hl->cextra;
				}
		default:
			break;
		}
	if ((doStroke) && (!Doc->RePos))
		{
		if (Pcolor2 != "None")
			{
			SetFarbe(&tmp, Pcolor2, Shade2);
			p->setPen(tmp, Pwidth, PLineArt, PLineEnd, PLineJoin);
			if (DashValues.count() != 0)
				p->setDash(DashValues, DashOffset);
			}
		else
			p->setLineWidth(0);
		p->setupPolygon(&PoLine);
		if (NamedLStyle == "")
			p->drawPolyLine();
		else
			{
			multiLine ml = Doc->MLineStyles[NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
				{
				SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
				p->setPen(tmp, ml[it].Width,
								 static_cast<PenStyle>(ml[it].Dash),
								 static_cast<PenCapStyle>(ml[it].LineEnd),
								 static_cast<PenJoinStyle>(ml[it].LineJoin));
				p->drawPolyLine();
				}
			}
		}
	if ((!Tinput) && (!Doc->RePos))
		{
		if ((Frame) && (Doc->ShFrames) && ((PType == 2) || (PType == 4)))
			{
			p->setPen(black, 1, DotLine, FlatCap, MiterJoin);
			if ((isBookmark) || (isAnnotation))
				p->setPen(blue, 1, DotLine, FlatCap, MiterJoin);
			if ((BackBox != 0) || (NextBox != 0))
				p->setPen(red, 1, SolidLine, FlatCap, MiterJoin);
			if (Locked)
				p->setPen(darkRed, 1, SolidLine, FlatCap, MiterJoin);
			p->setFillMode(0);
			p->setupPolygon(&PoLine);
			p->drawPolyLine();
			}
		}
	Tinput = false;
	FrameOnly = false;
	Dirty = false;
	p->restore();
	pf.end();
}

void PageItem::paintObj(QRect e, QPixmap *ppX)
{
	QPainter p;
	if (!Doc->DoDrawing)
		{
		Redrawn = true;
		Tinput = false;
		FrameOnly = false;
		Dirty = false;
		return;
		}
	if (toPixmap)
		p.begin(ppX);
	else
		p.begin(Parent);
	if ((!toPixmap) && (!Doc->RePos))
		{
		if (!e.isEmpty())
			p.setClipRect(e);
		else
			p.setClipRect(OwnPage->ViewReg().boundingRect());
		}
	p.translate(static_cast<int>(Xpos*Doc->Scale), static_cast<int>(Ypos*Doc->Scale));
	p.scale(static_cast<double>(Doc->Scale), static_cast<double>(Doc->Scale));
	p.rotate(static_cast<double>(Rot));
	if (Sizing)
		{
		p.setRasterOp(XorROP);
		p.setBrush(NoBrush);
		p.setPen(QPen(white, 1, DotLine, FlatCap, MiterJoin));
		p.drawRect(0, 0, static_cast<int>(OldB), static_cast<int>(OldH));
		p.drawRect(0, 0, static_cast<int>(Width), static_cast<int>(Height));
		OldB = Width;
		OldH = Height;
		}
	if ((!Tinput) && (!Doc->RePos))
		{
		if ((Frame) && (Doc->ShFrames))
			{
			p.setPen(QPen(black, 1, DotLine, FlatCap, MiterJoin));
			if ((isBookmark) || (isAnnotation))
				p.setPen(QPen(blue, 1, DotLine, FlatCap, MiterJoin));
			if ((BackBox != 0) || (NextBox != 0))
				p.setPen(QPen(red, 1, SolidLine, FlatCap, MiterJoin));
			if (Locked)
				p.setPen(QPen(darkRed, 1, SolidLine, FlatCap, MiterJoin));
			p.setBrush(NoBrush);
			DrawPolyL(&p, Clip);
			}
		if (Select) // && (!Doc->EditClip))
			{
			if (!OwnPage->SelItem.isEmpty())
				{
				if (Groups.count() == 0)
					{
					QPainter pr;
					pr.begin(Parent);
					pr.translate(static_cast<int>(Xpos*Doc->Scale), static_cast<int>(Ypos*Doc->Scale));
					pr.rotate(static_cast<double>(Rot));
					if (Locked)
						pr.setPen(QPen(darkRed, 1, SolidLine, FlatCap, MiterJoin));
					else
						pr.setPen(QPen(red, 1, DotLine, FlatCap, MiterJoin));
					pr.setBrush(NoBrush);
					pr.drawRect(-1, -1, static_cast<int>(Width*Doc->Scale)+2, static_cast<int>(Height*Doc->Scale)+2);
					if (Locked)
						{
						pr.setPen(QPen(darkRed, 1, SolidLine, FlatCap, MiterJoin));
						pr.setBrush(darkRed);
						}
					else
						{
						pr.setPen(QPen(red, 1, SolidLine, FlatCap, MiterJoin));
						pr.setBrush(red);
						}
					if (PType != 5)
						{
						pr.drawRect(-1, -1, 6, 6);
						pr.drawRect(static_cast<int>(Width*Doc->Scale), static_cast<int>(Height*Doc->Scale), -6, -6);
						pr.drawRect(static_cast<int>(Width*Doc->Scale), -1, -6, 6);
						pr.drawRect(-1, static_cast<int>(Height*Doc->Scale), 6, -6);
						if (Width > 6)
							{
							pr.drawRect(static_cast<int>(Width/2*Doc->Scale - 3), static_cast<int>(Height*Doc->Scale), 6, -6);
							pr.drawRect(static_cast<int>(Width/2*Doc->Scale - 3), -1, 6, 6);
							}
						if (Height > 6)
							{
							pr.drawRect(static_cast<int>(Width*Doc->Scale), static_cast<int>(Height/2*Doc->Scale - 3), -6, 6);
							pr.drawRect(-1, static_cast<int>(Height/2*Doc->Scale - 3), 6, 6);
							}
						}
					else
						{
						pr.drawRect(-3, -3, 6, 6);
						pr.drawRect(static_cast<int>(Width*Doc->Scale)+3, -3, -6, 6);
						}
					pr.end();
					}
				else
					{
					p.setPen(QPen(darkCyan, 1, DotLine, FlatCap, MiterJoin));
					p.setBrush(NoBrush);
					p.drawRect(-1, -1, static_cast<int>(Width+2), static_cast<int>(Height+2));
					}
				}
			}
		}
	Tinput = false;
	FrameOnly = false;
	Dirty = false;
	p.end();
}

QString PageItem::ExpandToken(uint base)
{
	uint zae = 0;
	QString chx = "#";
	if (!Doc->MasterP)
		{
		while (Ptext.at(base+zae)->ch == QChar(30))
			{
			zae++;
			if (base+zae == Ptext.count())
				break;
			}
		QString out="%1";
		chx = out.arg(OwnPage->PageNr+Doc->FirstPnum, zae).right(zae).left(1);
		}
	return chx;
}

void PageItem::SetFarbe(QColor *tmp, QString farbe, int shad)
{
	int h, s, v, sneu;
	Doc->PageColors[farbe].getRGBColor().rgb(&h, &s, &v);
	if ((h == s) && (s == v))
		{
		Doc->PageColors[farbe].getRGBColor().hsv(&h, &s, &v);
		sneu = 255 - ((255 - v) * shad / 100);
		tmp->setHsv(h, s, sneu);
		}
	else
		{
		Doc->PageColors[farbe].getRGBColor().hsv(&h, &s, &v);
		sneu = s * shad / 100;
		tmp->setHsv(h, sneu, v);
		}
}

void PageItem::SetZeichAttr(struct Pti *hl, int *chs, QString *chx)
{
	int	asce = static_cast<int>((*Doc->AllFonts)[hl->cfont]->numAscent * hl->csize);
	int chst = hl->cstyle & 127;
	if (chst != 0)
		{
		if (chst & 1)
			{
			CurY -= asce * Doc->VHoch / 100;
			*chs = QMAX(static_cast<int>(hl->csize * Doc->VHochSc / 100), 1);
			}
		if (chst & 2)
			{
			CurY += asce * Doc->VTief / 100;
			*chs = QMAX(hl->csize * Doc->VTiefSc / 100, 1);
			}
		if (chst & 64)
			{
			if (chx->upper() != *chx)
				{
				*chs = QMAX(static_cast<int>(hl->csize * Doc->VKapit / 100), 1);
				*chx = chx->upper();
				}
			}
		}
}

void PageItem::DrawZeichenS(ScPainter *p, struct ZZ *hl)
{
	QString ccx = hl->Zeich;
	if (ccx == QChar(29))
		ccx = " ";
	if (ccx == QChar(13))
		return;
	double csi = static_cast<double>(hl->Siz) / 10.0;
	uint chr = ccx[0].unicode();
	if ((*Doc->AllFonts)[hl->ZFo]->CharWidth.contains(chr))
		{
		QWMatrix chma;
		chma.scale(csi, csi);
		FPointArray gly = (*Doc->AllFonts)[hl->ZFo]->GlyphArray[chr].Outlines.copy();
		if (gly.size() > 3)
			{
			gly.map(chma);
			chma = QWMatrix();
			chma.scale(hl->scale / 100.0, 1);
			gly.map(chma);
			chma = QWMatrix();
			if (Reverse)
				{
				chma.scale(-1, 1);
				chma.translate(-hl->wide, 0);
				gly.map(chma);
				chma = QWMatrix();
				chma.translate(hl->xco, hl->yco-hl->Siz);
				}
			else
				chma.translate(hl->xco, hl->yco-hl->Siz);
			gly.map(chma);
			p->setFillMode(1);
			p->setupPolygon(&gly);
			if (hl->Farb != "None")
				p->fillPath();
			if ((hl->Style & 4) && (hl->Farb2 != "None"))
				{
				p->setLineWidth((*Doc->AllFonts)[hl->ZFo]->strokeWidth * hl->Siz / 2);
				p->strokePath();
				}
			}
		if (hl->Style & 16)
			{
			p->setPen(p->brush());
			double st = (*Doc->AllFonts)[hl->ZFo]->strikeout_pos * hl->Siz;
			p->setLineWidth(QMAX((*Doc->AllFonts)[hl->ZFo]->strokeWidth * hl->Siz, 1));
			p->drawLine(FPoint(hl->xco-hl->kern, hl->yco-st), FPoint(hl->xco+hl->wide, hl->yco-st));
			}
		if (hl->Style & 8)
			{
			double st = (*Doc->AllFonts)[hl->ZFo]->underline_pos * hl->Siz;
			QString dummy;
			p->setPen(p->brush());
			p->setLineWidth(QMAX((*Doc->AllFonts)[hl->ZFo]->strokeWidth * hl->Siz, 1));
			if ((gly.size() > 4) && (ccx != QChar(32)))
				p->drawUnderline(FPoint(hl->xco-hl->kern, hl->yco-st), FPoint(hl->xco+hl->wide, hl->yco-st), false, &dummy);
			else
				p->drawLine(FPoint(hl->xco-hl->kern, hl->yco-st), FPoint(hl->xco+hl->wide, hl->yco-st));
			}
		}
	else
		{
		p->setLineWidth(1);
		p->setPen(black);
		p->setFillMode(0);
		p->drawRect(hl->xco, hl->yco-hl->Siz, hl->Siz*(hl->scale / 100.0), hl->Siz);
		}
}

void PageItem::DrawPoly(QPainter *p, QPointArray pts, QColor BackF, bool bitm)
{
	if ((Pcolor != "None") || (GrType != 0) || (PType == 2))
		{
		QBitmap bm(static_cast<int>(Width), static_cast<int>(Height));
		bm.fill(Qt::color0);
		QPainter pbm;
		pbm.begin(&bm);
		pbm.setBrush(Qt::color1);
		pbm.setPen(NoPen);
		pbm.setRasterOp(XorROP);
		QPointArray dr;
		QValueList<uint>::Iterator it3;
		uint FirstVal = 0;
		for (it3 = Segments.begin(); it3 != Segments.end(); ++it3)
			{
			dr.resize(0);
			dr.putPoints(0, (*it3)-FirstVal-1, pts, FirstVal);
			pbm.drawPolygon(dr);
			FirstVal = (*it3);
			}
		dr.resize(0);
		dr.putPoints(0, pts.size()-FirstVal-1, pts, FirstVal);
		pbm.drawPolygon(dr);
		pbm.end();
		if (bitm)
			p->drawPixmap(0, 0, bm);
		else
			{
			QPixmap ppm(static_cast<int>(Width), static_cast<int>(Height));
			ppm.fill(BackF);
			ppm.setMask(bm);
			p->drawPixmap(0, 0, ppm);
			}
		}
}

void PageItem::DrawPolyL(QPainter *p, QPointArray pts)
{
	QColor tmp;
	if (Segments.count() != 0)
		{
		QValueList<uint>::Iterator it2;
		uint FirstVal = 0;
		for (it2 = Segments.begin(); it2 != Segments.end(); ++it2)
			{
			if (NamedLStyle == "")
				p->drawPolyline(pts, FirstVal, (*it2)-FirstVal);
			else
				{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
					{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(QPen(tmp,
									 QMAX(static_cast<int>(ml[it].Width*Doc->Scale), 1),
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin)));
					p->drawPolyline(pts, FirstVal, (*it2)-FirstVal);
					}
				}
			FirstVal = (*it2);
			}
		if (NamedLStyle == "")
			p->drawPolyline(pts, FirstVal);
		else
			{
			multiLine ml = Doc->MLineStyles[NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
				{
				SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
				p->setPen(QPen(tmp,
								 QMAX(static_cast<int>(ml[it].Width*Doc->Scale), 1),
								 static_cast<PenStyle>(ml[it].Dash),
								 static_cast<PenCapStyle>(ml[it].LineEnd),
								 static_cast<PenJoinStyle>(ml[it].LineJoin)));
				p->drawPolyline(pts, FirstVal);
				}
			}
		}
	else
		{
		if (NamedLStyle == "")
			p->drawPolyline(pts);
		else
			{
			multiLine ml = Doc->MLineStyles[NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
				{
				SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
				p->setPen(QPen(tmp,
								 QMAX(static_cast<int>(ml[it].Width*Doc->Scale), 1),
								 static_cast<PenStyle>(ml[it].Dash),
								 static_cast<PenCapStyle>(ml[it].LineEnd),
								 static_cast<PenJoinStyle>(ml[it].LineJoin)));
				p->drawPolyline(pts);
				}
			}
		}
}


void PageItem::CopyIt(struct CLBuf *Buffer)
{
	uint a;
	Buffer->PType = PType;
	Buffer->Xpos = Xpos;
	Buffer->Ypos = Ypos;
	Buffer->Width = Width;
	Buffer->Height = Height;
	Buffer->RadRect = RadRect;
	Buffer->FrameType = FrameType;
	Buffer->ClipEdited = ClipEdited;
	Buffer->Pwidth = Pwidth;
	Buffer->Pcolor = Pcolor;
	Buffer->Pcolor2 = Pcolor2;
	Buffer->Shade = Shade;
	Buffer->Shade2 = Shade2;
	Buffer->GrColor = GrColor;
	Buffer->GrColor2 = GrColor2;
	Buffer->GrShade = GrShade;
	Buffer->GrShade2 = GrShade2;
	Buffer->GrType = GrType;
	Buffer->TxtStroke = TxtStroke;
	Buffer->TxtFill = TxtFill;
	Buffer->ShTxtStroke = ShTxtStroke;
	Buffer->ShTxtFill = ShTxtFill;
	Buffer->TxtScale = TxtScale;
	Buffer->TxTStyle = TxTStyle;
	Buffer->Rot = Rot;
	Buffer->PLineArt = PLineArt;
	Buffer->PLineEnd = PLineEnd;
	Buffer->PLineJoin = PLineJoin;
	Buffer->LineSp = LineSp;
	Buffer->LocalScX = LocalScX;
	Buffer->LocalScY = LocalScY;
	Buffer->LocalX = LocalX;
	Buffer->LocalY = LocalY;
	Buffer->PicArt = PicArt;
	Buffer->flippedH = flippedH;
	Buffer->flippedV = flippedV;
	Buffer->BBoxX = BBoxX;
	Buffer->BBoxH = BBoxH;
	Buffer->isPrintable = isPrintable;
	Buffer->isBookmark = isBookmark;
	Buffer->BMnr = BMnr;
	Buffer->isAnnotation = isAnnotation;
	Buffer->AnType = AnType;
	Buffer->AnAction = AnAction;
	Buffer->An_E_act = An_E_act;
	Buffer->An_X_act = An_X_act;
	Buffer->An_D_act = An_D_act;
	Buffer->An_Fo_act = An_Fo_act;
	Buffer->An_Bl_act = An_Bl_act;
	Buffer->An_K_act = An_K_act;
	Buffer->An_F_act = An_F_act;
	Buffer->An_V_act = An_V_act;
	Buffer->An_C_act = An_C_act;
	Buffer->An_Extern = An_Extern;
	Buffer->AnZiel = AnZiel;
	Buffer->AnName = AnName;
	Buffer->AnActType = AnActType;
	Buffer->AnToolTip = AnToolTip;
	Buffer->AnBwid = AnBwid;
	Buffer->AnBsty = AnBsty;
	Buffer->AnFeed = AnFeed;
	Buffer->AnFlag = AnFlag;
	Buffer->AnFont = AnFont;
	Buffer->AnRollOver = AnRollOver;
	Buffer->AnDown = AnDown;
	Buffer->AnFormat = AnFormat;
	Buffer->AnVis = AnVis;
	Buffer->AnMaxChar = AnMaxChar;
	Buffer->AnChkStil = AnChkStil;
	Buffer->AnIsChk = AnIsChk;
	Buffer->AnAAact = AnAAact;
	Buffer->AnBColor = AnBColor;
	Buffer->AnHTML = AnHTML;
	Buffer->AnUseIcons = AnUseIcons;
	Buffer->AnIPlace = AnIPlace;
	Buffer->AnScaleW = AnScaleW;
	Buffer->Extra = Extra;
	Buffer->TExtra = TExtra;
	Buffer->BExtra = BExtra;
	Buffer->RExtra = RExtra;
	Buffer->Pfile = Pfile;
	Buffer->Pfile2 = Pfile2;
	Buffer->Pfile3 = Pfile3;
	QString Text = "";
	if (Ptext.count() != 0)
		{
		for (a=0; a<Ptext.count(); ++a)
			{
			if( (Ptext.at(a)->ch == "\n") || (Ptext.at(a)->ch == "\r"))
				Text += QString(QChar(5))+"\t";
			else
				Text += Ptext.at(a)->ch+"\t";
			Text += Ptext.at(a)->cfont+"\t";
			Text += QString::number(Ptext.at(a)->csize)+"\t";
			Text += Ptext.at(a)->ccolor+"\t";
			Text += QString::number(Ptext.at(a)->cextra)+"\t";
			Text += QString::number(Ptext.at(a)->cshade)+'\t';
			Text += QString::number(Ptext.at(a)->cstyle)+'\t';
			Text += QString::number(Ptext.at(a)->cab)+'\t';
			Text += Ptext.at(a)->cstroke+"\t";
			Text += QString::number(Ptext.at(a)->cshade2)+'\t';
			Text += QString::number(Ptext.at(a)->cscale)+'\n';
			}
		}
	Buffer->Ptext = Text;
	Buffer->Clip = Clip.copy();
	Buffer->PoLine = PoLine.copy();
	Buffer->PoShow = PoShow;
	Buffer->BaseOffs = BaseOffs;
	Buffer->Textflow = Textflow;
	Buffer->Textflow2 = Textflow2;
	Buffer->Ausrich = Ausrich;
	Buffer->IFont = IFont;
	Buffer->ISize = ISize;
	Buffer->ExtraV = ExtraV;
	Buffer->Groups = Groups;
	Buffer->IProfile = IProfile;
	Buffer->IRender = IRender;
	Buffer->UseEmbedded = UseEmbedded;
	Buffer->EmProfile = EmProfile;
	Buffer->LayerNr = LayerNr;
	Buffer->ScaleType = ScaleType;
	Buffer->AspectRatio = AspectRatio;
	Buffer->Locked = Locked;
	Buffer->Transparency = Transparency;
	Buffer->TranspStroke = TranspStroke;
	Buffer->Reverse = Reverse;
	Buffer->InvPict = InvPict;
	Buffer->NamedLStyle = NamedLStyle;
	Buffer->Language = Language;
}
