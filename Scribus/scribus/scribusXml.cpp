/***************************************************************************
                 	scribusXml.cpp the document xml library for scribus
                             -------------------
    begin                : Sam Jul 14 10:00:00 CEST 2001
    copyright            : (C) 2001 by Christian T�pp
    email                : christian.toepp@mr-ct@gmx.de
 ***************************************************************************/

#include "scribusXml.h"
#include "scribusXml.moc"
#include <qfile.h>
#include <qtextstream.h>
#include <qapplication.h>
#include <qstylefactory.h>
#include <qtl.h>
#include <qcursor.h>
#include <qregexp.h>
#include <qdir.h>
#include <qtextcodec.h>
#include <cstdlib>
#include <cmath>
#include "missing.h"
#include "config.h"
#ifdef HAVE_LIBZ
#include <zlib.h>
#endif
extern double QStodouble(QString in);
extern int QStoInt(QString in);
extern bool loadText(QString nam, QString *Buffer);
extern QString Path2Relative(QString Path);

QString ScriXmlDoc::ReadDatei(QString fileName)
{
/**
  * added to support gz docs
  * 2.7.2002 C.Toepp
  * <c.toepp@gmx.de>
  */
QString f = "";
#ifdef HAVE_LIBZ
if(fileName.right(2) == "gz")
	{
	gzFile gzDoc;
	char buff[4097];
	int i;
	gzDoc = gzopen(fileName.latin1(),"rb");
	if(gzDoc == NULL)
		{
		return "";
		}
	while((i = gzread(gzDoc,&buff,4096)) > 0)
		{
		buff[i] = '\0';
		f.append(buff);
		}
	gzclose(gzDoc);
	}
else
	{
// a normal document
	loadText(fileName, &f);
	}
#else
loadText(fileName, &f);
#endif
QString ff = "";
if (f.startsWith("<SCRIBUSUTF8"))
	ff = QString::fromUtf8(f);
else
	ff = f;
return ff;
/** end changes */
}

bool ScriXmlDoc::ReadStyles(QString fileName, ScribusDoc* doc, preV *Prefs)
{
	struct StVorL vg;
	QMap<QString,QString> DoFonts;
	QDomDocument docu("scridoc");
	QString f = "";
	QString tmpf;
	QFont fo;
	bool fou;
	Vorlagen.clear();
	DoFonts.clear();
	f = ReadDatei(fileName);
	if (f == "")
		return false;
	if(!docu.setContent(f))
		return false;
	QDomElement elem=docu.documentElement();
	if ((elem.tagName() != "SCRIBUS") && (elem.tagName() != "SCRIBUSUTF8"))
		return false;
	QDomNode DOC=elem.firstChild();
	while(!DOC.isNull())
		{
		QDomElement dc=DOC.toElement();
		QDomNode PAGE=DOC.firstChild();
		while(!PAGE.isNull())
			{
			QDomElement pg=PAGE.toElement();
			if(pg.tagName()=="FONT")
				{
				tmpf = pg.attribute("NAME");
				if ((!Prefs->AvailFonts.find(tmpf)) || (!Prefs->AvailFonts[tmpf]->UseFont))
					{
					if ((!Prefs->GFontSub.contains(tmpf)) || (!Prefs->AvailFonts[Prefs->GFontSub[tmpf]]->UseFont))
						{
	  				qApp->setOverrideCursor(QCursor(arrowCursor), true);
						DmF *dia = new DmF(0, tmpf, Prefs);
						dia->exec();
						tmpf = dia->Ersatz;
						delete dia;
	  				qApp->setOverrideCursor(QCursor(waitCursor), true);
						Prefs->GFontSub[pg.attribute("NAME")] = tmpf;
						}
					else
						tmpf = Prefs->GFontSub[tmpf];
					}
				fo = Prefs->AvailFonts[tmpf]->Font;
				fo.setPointSize(qRound(doc->Dsize / 10.0));
				doc->AddFont(tmpf, fo);
				DoFonts[pg.attribute("NAME")] = tmpf;
				}
			if(pg.tagName()=="STYLE")
				{
				fou = false;
				vg.Vname = pg.attribute("NAME");
				vg.LineSpa = QStodouble(pg.attribute("LINESP"));
				vg.Indent = QStodouble(pg.attribute("INDENT","0"));
				vg.First = QStodouble(pg.attribute("FIRST","0"));
				vg.Ausri = QStoInt(pg.attribute("ALIGN"));
				vg.Avor = QStodouble(pg.attribute("VOR","0"));
				vg.Anach = QStodouble(pg.attribute("NACH","0"));
				if (pg.hasAttribute("FONT"))
					vg.Font = DoFonts[pg.attribute("FONT")];
				else
					vg.Font = DoFonts[doc->Dfont];
				vg.FontSize = qRound(QStodouble(pg.attribute("FONTSIZE","12")) * 10.0);
				for (uint xx=0; xx<Vorlagen.count(); ++xx)
					{
					if (vg.Vname == Vorlagen[xx].Vname)
						{
						if ((vg.LineSpa == Vorlagen[xx].LineSpa) &&
								(vg.Indent == Vorlagen[xx].Indent) &&
								(vg.First == Vorlagen[xx].First) &&
								(vg.Ausri == Vorlagen[xx].Ausri) &&
								(vg.Avor == Vorlagen[xx].Avor) &&
								(vg.Anach == Vorlagen[xx].Anach) &&
								(vg.Font == Vorlagen[xx].Font) &&
								(vg.FontSize == Vorlagen[xx].FontSize))
							{
							fou = true;
							}
						else
							{
							vg.Vname = "Copy of "+Vorlagen[xx].Vname;
							fou = false;
							}
						break;
						}
					}
				if (!fou)
					Vorlagen.append(vg);
				}
			PAGE=PAGE.nextSibling();
			}
		DOC=DOC.nextSibling();
		}
	return true;
}

bool ScriXmlDoc::ReadColors(QString fileName)
{
	QDomDocument docu("scridoc");
	QString f = "";
	f = ReadDatei(fileName);
	if (f == "")
		return false;
	if(!docu.setContent(f))
		return false;
	Farben.clear();
	CMYKColor lf = CMYKColor();
	QDomElement elem=docu.documentElement();
	if ((elem.tagName() != "SCRIBUS") && (elem.tagName() != "SCRIBUSUTF8"))
		return false;
	QDomNode DOC=elem.firstChild();
	while(!DOC.isNull())
		{
		QDomElement dc=DOC.toElement();
		QDomNode PAGE=DOC.firstChild();
		while(!PAGE.isNull())
			{
			QDomElement pg=PAGE.toElement();
			if(pg.tagName()=="COLOR")
				{
				if (pg.hasAttribute("CMYK"))
					lf.setNamedColor(pg.attribute("CMYK"));
				else
					lf.fromQColor(QColor(pg.attribute("RGB")));
		  	Farben[pg.attribute("NAME")] = lf;
				}
			PAGE=PAGE.nextSibling();
			}
		DOC=DOC.nextSibling();
		}
	return true;
}

int ScriXmlDoc::ReadPageCount(QString fileName)
{
QString PgNam;
int counter = 0;
QDomDocument docu("scridoc");
QString f = "";
f = ReadDatei(fileName);
if (f == "")
	return 0;
if(!docu.setContent(f))
	return 0;
QDomElement elem=docu.documentElement();
if ((elem.tagName() != "SCRIBUS") && (elem.tagName() != "SCRIBUSUTF8"))
	return 0;
QDomNode DOC=elem.firstChild();
while(!DOC.isNull())
	{
	QDomNode PAGE=DOC.firstChild();
	while(!PAGE.isNull())
		{
		QDomElement pg=PAGE.toElement();
		if(pg.tagName()=="PAGE")
			{
			PgNam = pg.attribute("NAM", "");
			if (PgNam == "")
				counter++;
			}
		PAGE=PAGE.nextSibling();
		}
	DOC=DOC.nextSibling();
	}
return counter;
}

bool ScriXmlDoc::ReadPage(QString fileName, SCFonts &avail, ScribusDoc *doc, ScribusView *view, int PageToLoad)
{
struct CLBuf OB;
struct StVorL vg;
struct Layer la;
struct ScribusDoc::BookMa bok;
struct Linked Link;
PageItem *Neu;
LFrames.clear();
QString tmV, tmp, tmpf, tmp2, tmp3, tmp4, PgNam, f, Defont;
QFont fo;
QMap<QString,QString> DoFonts;
QMap<uint,QString> DoVorl;
uint VorlC;
int x, y, a, counter, baseobj;
double xf, yf;
bool newVersion = false;
bool fou;
bool VorLFound = false;
DoVorl.clear();
DoFonts.clear();
DoVorl[0] = "0";
DoVorl[1] = "1";
DoVorl[2] = "2";
DoVorl[3] = "3";
DoVorl[4] = "4";
VorlC = 5;
QDomDocument docu("scridoc");
f = "";
f = ReadDatei(fileName);
if (f == "")
	return false;
if(!docu.setContent(f))
	return false;
CMYKColor lf = CMYKColor();
QDomElement elem=docu.documentElement();
if ((elem.tagName() != "SCRIBUS") && (elem.tagName() != "SCRIBUSUTF8"))
	return false;
if (elem.hasAttribute("Version"))
	newVersion = true;
QDomNode DOC=elem.firstChild();
while(!DOC.isNull())
	{
	QDomElement dc=DOC.toElement();
	/*
	* Attribute von DOCUMENT auslesen
	*/
	DoFonts.clear();
	QDomNode PAGE=DOC.firstChild();
	while(!PAGE.isNull())
		{
		QDomElement pg=PAGE.toElement();
		if(pg.tagName()=="FONT")
			{
			/*
			* Attribute von FONT auslesen
			*/
			tmpf = pg.attribute("NAME");
			if ((!avail.find(tmpf)) || (!avail[tmpf]->UseFont))
				{
				if ((!view->Prefs->GFontSub.contains(tmpf)) || (!avail[view->Prefs->GFontSub[tmpf]]->UseFont))
					{
  				qApp->setOverrideCursor(QCursor(arrowCursor), true);
					DmF *dia = new DmF(view, tmpf, view->Prefs);
					dia->exec();
					tmpf = dia->Ersatz;
					delete dia;
  				qApp->setOverrideCursor(QCursor(waitCursor), true);
					view->Prefs->GFontSub[pg.attribute("NAME")] = tmpf;
					}
				else
					tmpf = view->Prefs->GFontSub[tmpf];
				}
			fo = avail[tmpf]->Font;
			fo.setPointSize(qRound(doc->Dsize / 10.0));
			doc->AddFont(tmpf, fo);
			DoFonts[pg.attribute("NAME")] = tmpf;
			}
		if(pg.tagName()=="COLOR")
			{
			if (pg.hasAttribute("CMYK"))
				lf.setNamedColor(pg.attribute("CMYK"));
			else
				lf.fromQColor(QColor(pg.attribute("RGB")));
		  doc->PageColors[pg.attribute("NAME")] = lf;
			}
		if(pg.tagName()=="STYLE")
			{
			fou = false;
			VorLFound = true;
			vg.Vname = pg.attribute("NAME");
			vg.LineSpa = QStodouble(pg.attribute("LINESP"));
			vg.Indent = QStodouble(pg.attribute("INDENT","0"));
			vg.First = QStodouble(pg.attribute("FIRST","0"));
			vg.Ausri = QStoInt(pg.attribute("ALIGN"));
			vg.Avor = QStodouble(pg.attribute("VOR","0"));
			vg.Anach = QStodouble(pg.attribute("NACH","0"));
			if (pg.hasAttribute("FONT"))
				vg.Font = DoFonts[pg.attribute("FONT")];
			else
				vg.Font = DoFonts[Defont];
			vg.FontSize = qRound(QStodouble(pg.attribute("FONTSIZE","12")) * 10.0);
			for (uint xx=0; xx<doc->Vorlagen.count(); ++xx)
				{
				if (vg.Vname == doc->Vorlagen[xx].Vname)
					{
					if ((vg.LineSpa == doc->Vorlagen[xx].LineSpa) &&
							(vg.Indent == doc->Vorlagen[xx].Indent) &&
							(vg.First == doc->Vorlagen[xx].First) &&
							(vg.Ausri == doc->Vorlagen[xx].Ausri) &&
							(vg.Avor == doc->Vorlagen[xx].Avor) &&
							(vg.Anach == doc->Vorlagen[xx].Anach) &&
							(vg.Font == doc->Vorlagen[xx].Font) &&
							(vg.FontSize == doc->Vorlagen[xx].FontSize))
						{
						DoVorl[VorlC] = tmV.setNum(xx);
						VorlC++;
						fou = true;
						}
					else
						{
						vg.Vname = "Copy of "+doc->Vorlagen[xx].Vname;
						fou = false;
						}
					break;
					}
				}
			if (!fou)
				{
				doc->Vorlagen.append(vg);
				DoVorl[VorlC] = tmV.setNum(doc->Vorlagen.count()-1);
				VorlC++;
				}
			}
		if(pg.tagName()=="JAVA")
			doc->JavaScripts[pg.attribute("NAME")] = pg.attribute("SCRIPT");
		if(pg.tagName()=="LAYERS")
			{
			la.LNr = QStoInt(pg.attribute("NUMMER"));
			la.Level = QStoInt(pg.attribute("LEVEL"));
			la.Name = pg.attribute("NAME");
			la.Sichtbar = QStoInt(pg.attribute("SICHTBAR"));
			la.Drucken = QStoInt(pg.attribute("DRUCKEN"));
			bool laex = false;
			for (uint la2 = 0; la2 < doc->Layers.count(); ++la2)
				{
				if (doc->Layers[la2].Name == la.Name)
					laex = true;
				}
			if (!laex)
				doc->Layers.append(la);
			}
		if(pg.tagName()=="Bookmark")
			{
			bok.Title = pg.attribute("Title");
			bok.Text = pg.attribute("Text");
			bok.Aktion = pg.attribute("Aktion");
			bok.ItemNr = QStoInt(pg.attribute("ItemNr"));
			bok.Seite = QStoInt(pg.attribute("Seite"));
			bok.Element = QStoInt(pg.attribute("Element"));
			bok.First = QStoInt(pg.attribute("First"));
			bok.Last = QStoInt(pg.attribute("Last"));
			bok.Prev = QStoInt(pg.attribute("Prev"));
			bok.Next = QStoInt(pg.attribute("Next"));
			bok.Parent = QStoInt(pg.attribute("Parent"));
			doc->BookMarks.append(bok);
			}
		if(pg.tagName()=="MultiLine")
			{
			multiLine ml;
			QDomNode MuLn = PAGE.firstChild();
			while(!MuLn.isNull())
				{
				QDomElement MuL = MuLn.toElement();
				struct singleLine sl;
				sl.Color = MuL.attribute("Color");
				sl.Dash = QStoInt(MuL.attribute("Dash"));
				sl.LineEnd = QStoInt(MuL.attribute("LineEnd"));
				sl.LineJoin = QStoInt(MuL.attribute("LineJoin"));
				sl.Shade = QStoInt(MuL.attribute("Shade"));
				sl.Width = QStodouble(MuL.attribute("Width"));
				ml.push_back(sl);
				MuLn = MuLn.nextSibling();
				}
			doc->MLineStyles.insert(pg.attribute("Name"), ml);
			}
		if ((pg.tagName()=="PAGE") && (QStoInt(pg.attribute("NUM")) == PageToLoad))
			{
			/*
			* Attribute von PAGE auslesen
			*/
			a = doc->ActPage->PageNr;
			if ((pg.hasAttribute("NumVGuides")) && (QStoInt(pg.attribute("NumVGuides","0")) != 0))
				{
				tmp = pg.attribute("VerticalGuides");
				QTextStream fgv(&tmp, IO_ReadOnly);
				view->Pages.at(a)->YGuides.clear();
				for (int cxv = 0; cxv < QStoInt(pg.attribute("NumVGuides","0")); ++cxv)
					{
					fgv >> xf;
					view->Pages.at(a)->YGuides.append(xf);
					}
				qHeapSort(view->Pages.at(a)->YGuides);
				tmp = "";
				}
			else
				view->Pages.at(a)->YGuides.clear();
			if ((pg.hasAttribute("NumHGuides")) && (QStoInt(pg.attribute("NumHGuides","0")) != 0))
				{
				tmp = pg.attribute("HorizontalGuides");
				QTextStream fgh(&tmp, IO_ReadOnly);
				view->Pages.at(a)->XGuides.clear();
				for (int cxh = 0; cxh < QStoInt(pg.attribute("NumHGuides","0")); ++cxh)
					{
					fgh >> xf;
					view->Pages.at(a)->XGuides.append(xf);
					}
				qHeapSort(view->Pages.at(a)->XGuides);
				tmp = "";
				}
			else
				view->Pages.at(a)->XGuides.clear();
			QDomNode OBJ=PAGE.firstChild();
			counter = doc->ActPage->Items.count();
			baseobj = counter;
			while(!OBJ.isNull())
				{
				QDomElement obj=OBJ.toElement();
				/*
				* Attribute von OBJECT auslesen
				*/
				if ((QStoInt(obj.attribute("NEXTITEM")) != -1) && (QStoInt(obj.attribute("NEXTPAGE")) == PageToLoad))
					{
					if (QStoInt(obj.attribute("BACKITEM")) == -1)
						{
						Link.Start = counter;
						Link.StPag = a;
						LFrames.append(Link);
						}
					}
				OB.PType = QStoInt(obj.attribute("PTYPE"));
				OB.Xpos = QStodouble(obj.attribute("XPOS"));
				OB.Ypos=QStodouble(obj.attribute("YPOS"));
				OB.Width=QStodouble(obj.attribute("WIDTH"));
				OB.Height=QStodouble(obj.attribute("HEIGHT"));
				OB.RadRect = QStodouble(obj.attribute("RADRECT","0"));
				OB.ClipEdited = QStoInt(obj.attribute("CLIPEDIT", "0"));
				OB.FrameType = QStoInt(obj.attribute("FRTYPE", "0"));
				OB.Pwidth=QStodouble(obj.attribute("PWIDTH"));
				OB.Pcolor=obj.attribute("PCOLOR");
				if ((!newVersion) && (OB.PType == 4))
					{
					OB.TxtFill = obj.attribute("PCOLOR2");
					OB.Pcolor2 = "None";
					}
				else
					{
					OB.Pcolor2 = obj.attribute("PCOLOR2");
					OB.TxtFill = obj.attribute("TXTFILL", "Black");
					}
				OB.NamedLStyle = obj.attribute("NAMEDLST", "");
				if (!doc->MLineStyles.contains(OB.NamedLStyle))
					OB.NamedLStyle = "";
				OB.Shade=QStoInt(obj.attribute("SHADE"));
				OB.Shade2=QStoInt(obj.attribute("SHADE2"));
				OB.TxtStroke=obj.attribute("TXTSTROKE", "None");
				OB.ShTxtFill=QStoInt(obj.attribute("TXTFILLSH", "100"));
				OB.ShTxtStroke=QStoInt(obj.attribute("TXTSTRSH", "100"));
				OB.TxtScale=QStoInt(obj.attribute("TXTSCALE", "100"));
				OB.TxTStyle=QStoInt(obj.attribute("TXTSTYLE", "0"));
				OB.GrColor = obj.attribute("GRCOLOR","");
				OB.GrColor2 = obj.attribute("GRCOLOR2","");
				OB.GrShade = QStoInt(obj.attribute("GRSHADE","100"));
				OB.GrShade2 = QStoInt(obj.attribute("GRSHADE2","100"));
				OB.GrType = QStoInt(obj.attribute("GRTYP","0"));
				OB.Rot=QStodouble(obj.attribute("ROT"));
				OB.PLineArt=Qt::PenStyle(QStoInt(obj.attribute("PLINEART")));
				OB.PLineEnd=Qt::PenCapStyle(QStoInt(obj.attribute("PLINEEND","0")));
				OB.PLineJoin=Qt::PenJoinStyle(QStoInt(obj.attribute("PLINEJOIN","0")));
				OB.LineSp=QStodouble(obj.attribute("LINESP"));
				OB.ExtraV=QStodouble(obj.attribute("EXTRAV","0"));
				OB.LocalScX=QStodouble(obj.attribute("LOCALSCX"));
				OB.LocalScY=QStodouble(obj.attribute("LOCALSCY"));
				OB.LocalX=QStodouble(obj.attribute("LOCALX"));
				OB.LocalY=QStodouble(obj.attribute("LOCALY"));
				OB.PicArt=QStoInt(obj.attribute("PICART"));
				OB.flippedH=QStoInt(obj.attribute("FLIPPEDH"));
				OB.flippedV=QStoInt(obj.attribute("FLIPPEDV"));
				OB.BBoxX=QStodouble(obj.attribute("BBOXX"));
				OB.BBoxH=QStodouble(obj.attribute("BBOXH"));
				OB.ScaleType = QStoInt(obj.attribute("SCALETYPE","1"));
				OB.AspectRatio = QStoInt(obj.attribute("RATIO","0"));
				OB.isPrintable=QStoInt(obj.attribute("PRINTABLE"));
				OB.isBookmark=QStoInt(obj.attribute("BOOKMARK"));
				if ((OB.isBookmark) && (doc->BookMarks.count() == 0))
					doc->OldBM = true;
				OB.BMnr = QStoInt(obj.attribute("BookNr","0"));
				OB.isAnnotation=QStoInt(obj.attribute("ANNOTATION","0"));
				OB.AnType = QStoInt(obj.attribute("ANTYPE","0"));
				OB.AnAction = obj.attribute("ANACTION","");
				OB.An_E_act = obj.attribute("ANEACT","");
				OB.An_X_act = obj.attribute("ANXACT","");
				OB.An_D_act = obj.attribute("ANDACT","");
				OB.An_Fo_act = obj.attribute("ANFOACT","");
				OB.An_Bl_act = obj.attribute("ANBLACT","");
				OB.An_K_act = obj.attribute("ANKACT","");
				OB.An_F_act = obj.attribute("ANFACT","");
				OB.An_V_act = obj.attribute("ANVACT","");
				OB.An_C_act = obj.attribute("ANCACT","");
				OB.AnActType = QStoInt(obj.attribute("ANACTYP","0"));
				OB.An_Extern = obj.attribute("ANEXTERN","");
				if ((OB.An_Extern != "") && (OB.AnActType != 8))
					{
					QFileInfo efp(OB.An_Extern);
					OB.An_Extern = efp.absFilePath();
					}
				OB.AnZiel = QStoInt(obj.attribute("ANZIEL","0"));
				OB.AnName = obj.attribute("ANNAME","");
				OB.AnToolTip = obj.attribute("ANTOOLTIP","");
				OB.AnRollOver = obj.attribute("ANROLL","");
				OB.AnDown = obj.attribute("ANDOWN","");
				OB.AnBwid = QStoInt(obj.attribute("ANBWID","1"));
				OB.AnBsty = QStoInt(obj.attribute("ANBSTY","0"));
				OB.AnFeed = QStoInt(obj.attribute("ANFEED","1"));
				OB.AnFlag = QStoInt(obj.attribute("ANFLAG","0"));
				OB.AnFont = QStoInt(obj.attribute("ANFONT","4"));
				OB.AnFormat = QStoInt(obj.attribute("ANFORMAT","0"));
				OB.AnVis = QStoInt(obj.attribute("ANVIS","0"));
				OB.AnIsChk = static_cast<bool>(QStoInt(obj.attribute("ANCHK","0")));
				OB.AnAAact = static_cast<bool>(QStoInt(obj.attribute("ANAA","0")));
				OB.AnHTML = static_cast<bool>(QStoInt(obj.attribute("ANHTML","0")));
				OB.AnUseIcons = static_cast<bool>(QStoInt(obj.attribute("ANICON","0")));
				OB.AnChkStil = QStoInt(obj.attribute("ANCHKS","0"));
				OB.AnMaxChar = QStoInt(obj.attribute("ANMC","-1"));
				OB.AnBColor = obj.attribute("ANBCOL","None");
				OB.AnIPlace = QStoInt(obj.attribute("ANPLACE","1"));
				OB.AnScaleW = QStoInt(obj.attribute("ANSCALE","0"));
				if (QStoInt(obj.attribute("TRANSPARENT","0")) == 1)
					OB.Pcolor = "None";
				OB.Textflow=QStoInt(obj.attribute("TEXTFLOW"));
				OB.Textflow2=QStoInt(obj.attribute("TEXTFLOW2","0"));
				OB.Extra=QStodouble(obj.attribute("EXTRA"));
				OB.TExtra=QStodouble(obj.attribute("TEXTRA", "1"));
				OB.BExtra=QStodouble(obj.attribute("BEXTRA", "1"));
				OB.RExtra=QStodouble(obj.attribute("REXTRA", "1"));
				OB.PoShow = QStoInt(obj.attribute("PTLSHOW","0"));
				OB.BaseOffs = QStodouble(obj.attribute("BASEOF","0"));
				OB.Ausrich = QStoInt(obj.attribute("ALIGN","0"));
				OB.IFont = DoFonts[obj.attribute("IFONT", doc->Dfont)];
				OB.ISize = qRound(QStodouble(obj.attribute("ISIZE","12")) * 10.0);
				OB.Pfile=obj.attribute("PFILE");
				OB.Pfile2=obj.attribute("PFILE2","");
				OB.Pfile3=obj.attribute("PFILE3","");
				OB.IProfile=obj.attribute("PRFILE","");
				OB.EmProfile=obj.attribute("EPROF","");
				OB.IRender = QStoInt(obj.attribute("IRENDER","1"));
				OB.UseEmbedded = QStoInt(obj.attribute("EMBEDDED","1"));
				OB.Locked = static_cast<bool>(QStoInt(obj.attribute("LOCK","0")));
				OB.Reverse = static_cast<bool>(QStoInt(obj.attribute("REVERS","0")));
				OB.InvPict = static_cast<bool>(QStoInt(obj.attribute("INVERS","0")));
				OB.LayerNr = QStoInt(obj.attribute("LAYER","0"));
				OB.Language = obj.attribute("LANGUAGE", doc->Language);
				OB.Transparency = QStodouble(obj.attribute("TransValue","0.0"));
				if (obj.hasAttribute("TransValueS"))
					OB.TranspStroke = QStodouble(obj.attribute("TransValueS","0.0"));
				else
					OB.TranspStroke = OB.Transparency;
				if (obj.hasAttribute("NUMCLIP"))
					{
					OB.Clip.resize(obj.attribute("NUMCLIP").toUInt());
					tmp = obj.attribute("CLIPCOOR");
					QTextStream fc(&tmp, IO_ReadOnly);
					for (uint c=0; c<obj.attribute("NUMCLIP").toUInt(); ++c)
						{
						fc >> x;
						fc >> y;
						OB.Clip.setPoint(c, x, y);
						}
					}
				else
					OB.Clip.resize(0);
				if (obj.hasAttribute("NUMPO"))
					{
					OB.PoLine.resize(obj.attribute("NUMPO").toUInt());
					tmp = obj.attribute("POCOOR");
						QTextStream fp(&tmp, IO_ReadOnly);
					for (uint cx=0; cx<obj.attribute("NUMPO").toUInt(); ++cx)
						{
						fp >> xf;
						fp >> yf;
						OB.PoLine.setPoint(cx, xf, yf);
						}
					}
				else
					OB.PoLine.resize(0);
				tmp = "";
				if ((obj.hasAttribute("GROUPS")) && (QStoInt(obj.attribute("NUMGROUP","0")) != 0))
					{
					tmp = obj.attribute("GROUPS");
					QTextStream fg(&tmp, IO_ReadOnly);
					OB.Groups.clear();
					for (int cx = 0; cx < QStoInt(obj.attribute("NUMGROUP","0")); ++cx)
						{
						fg >> x;
						OB.Groups.push(x);
						}
					tmp = "";
					}
				else
					OB.Groups.clear();
				QDomNode IT=OBJ.firstChild();
				while(!IT.isNull())
					{
					QDomElement it=IT.toElement();
					if (it.tagName()=="ITEXT")
						{
						tmp2 = it.attribute("CH");
						tmp2.replace(QRegExp("\r"), QChar(5));
						tmp2.replace(QRegExp("\n"), QChar(5));
						tmp3 = "\t" + DoFonts[it.attribute("CFONT")] + "\t";
						tmp3 += it.attribute("CSIZE") + "\t";
						tmp3 += it.attribute("CCOLOR") + "\t";
						tmp3 += it.attribute("CEXTRA") + "\t";
						tmp3 += it.attribute("CSHADE") + "\t";
						tmp3 += it.attribute("CSTYLE") + "\t";
						if (VorLFound)
							tmp3 += DoVorl[it.attribute("CAB","0").toUInt()] + "\t";
						else
							{
							if (it.attribute("CAB","0").toUInt() < 5)
								tmp3 += it.attribute("CAB","0")+"\t";
							else
								tmp3 += "0\t";
							}
						tmp3 += it.attribute("CSTROKE","None") + "\t";
						tmp3 += it.attribute("CSHADE2","100") + "\t";
						tmp3 += it.attribute("CSCALE","100") + "\n";
						for (uint cxx=0; cxx<tmp2.length(); ++cxx)
							{
							tmp += tmp2.at(cxx)+tmp3;
							}
						}
					IT=IT.nextSibling();
					}
				OB.Ptext = tmp;
				if ((OB.PType == 5) && (OB.Height != 0))
					{
					OB.Rot += atan2(OB.Height,OB.Width)*(180.0/3.1415927);
					OB.Width = sqrt(pow(OB.Width,2)+pow(OB.Height,2));
					OB.Height = 0;
					OB.Clip.setPoints(4, -1,-1, static_cast<int>(OB.Width+1),-1, static_cast<int>(OB.Width+1), static_cast<int>(OB.Height+1), -1, static_cast<int>(OB.Height+1));
					}
				view->Pages.at(a)->PasteItem(&OB, true);
				Neu = view->Pages.at(a)->Items.at(counter);
				if (QStoInt(obj.attribute("NEXTPAGE")) == PageToLoad)
					{
					Neu->NextIt = baseobj + QStoInt(obj.attribute("NEXTITEM"));
					Neu->NextPg = a; // QStoInt(obj.attribute("NEXTPAGE"));
					}
				counter++;
				OBJ=OBJ.nextSibling();
				}
			if (LFrames.count() != 0)
				{
				PageItem *Its;
				PageItem *Itn;
				PageItem *Itr;
				QValueList<Linked>::Iterator lc;
				for (lc = LFrames.begin(); lc != LFrames.end(); ++lc)
					{
					Its = view->Pages.at((*lc).StPag)->Items.at((*lc).Start);
					Itr = Its;
					Its->BackBox = 0;
					while (Its->NextIt != -1)
						{
						if (Its->NextPg == a)
							{
							Itn = view->Pages.at(Its->NextPg)->Items.at(Its->NextIt);
							Its->NextBox = Itn;
							Itn->BackBox = Its;
							Its = Itn;
							}
						else
							break;
						}
					Its->NextBox = 0;
					Itr->Dirty = true;
//					Itr->paintObj();
					}
				}
			view->reformPages();
			return true;
			}
		PAGE=PAGE.nextSibling();
		}	
	DOC=DOC.nextSibling();
}
return false;
}

bool ScriXmlDoc::ReadDoc(QString fileName, SCFonts &avail, ScribusDoc *doc, ScribusView *view, QProgressBar *dia2)
{
struct CLBuf OB;
struct StVorL vg;
struct Layer la;
struct ScribusDoc::BookMa bok;
int counter, Pgc;
bool AtFl;
bool newVersion = false;
struct Linked Link;
QString tmp, tmpf, tmp2, tmp3, tmp4, PgNam, Defont;
QFont fo;
QMap<QString,QString> DoFonts;
int x, y, a;
double xf, yf;
PageItem *Neu;
LFrames.clear();
QDomDocument docu("scridoc");
QString f = "";
f = ReadDatei(fileName);
if (f == "")
	return false;
if (!f.startsWith("<SCRIBUS"))
	return false;
if(!docu.setContent(f))
	return false;
doc->PageColors.clear();
doc->Layers.clear();
CMYKColor lf = CMYKColor();
QDomElement elem=docu.documentElement();
if ((elem.tagName() != "SCRIBUS") && (elem.tagName() != "SCRIBUSUTF8"))
	return false;
if (elem.hasAttribute("Version"))
	newVersion = true;
QDomNode DOC=elem.firstChild();
dia2->setTotalSteps(DOC.childNodes().count());
dia2->setProgress(0);
int ObCount = 0;
while(!DOC.isNull())
{
	QDomElement dc=DOC.toElement();
	/*
	* Attribute von DOCUMENT auslesen
	*/
	doc->PageB=QStodouble(dc.attribute("PAGEWITH"));
	doc->PageH=QStodouble(dc.attribute("PAGEHEIGHT"));
	doc->PageM.Left=QStodouble(dc.attribute("BORDERLEFT"));
	doc->PageM.Right=QStodouble(dc.attribute("BORDERRIGHT"));
	doc->PageM.Top=QStodouble(dc.attribute("BORDERTOP"));
	doc->PageM.Bottom=QStodouble(dc.attribute("BORDERBOTTOM"));
	doc->PageOri = QStoInt(dc.attribute("ORIENTATION","0"));
	doc->FirstPnum = QStoInt(dc.attribute("FIRSTNUM","1"));
	doc->PageFP=QStoInt(dc.attribute("BOOK"));
	doc->FirstPageLeft=QStoInt(dc.attribute("FIRSTLEFT"));
	doc->PageAT=QStoInt(dc.attribute("AUTOTEXT"));
	doc->PageSp=QStoInt(dc.attribute("AUTOSPALTEN"));
	doc->PageSpa=QStodouble(dc.attribute("ABSTSPALTEN"));
	doc->Einheit = QStoInt(dc.attribute("UNITS","0"));
	Defont=dc.attribute("DFONT");
	doc->Dsize=qRound(QStodouble(dc.attribute("DSIZE")) * 10);
	doc->DocAutor=dc.attribute("AUTHOR");
	doc->DocComments=dc.attribute("COMMENTS");
	doc->DocKeyWords=dc.attribute("KEYWORDS","");
	doc->DocTitel=dc.attribute("TITLE");
	doc->VHoch=QStoInt(dc.attribute("VHOCH"));
	doc->VHochSc=QStoInt(dc.attribute("VHOCHSC"));
	doc->VTief=QStoInt(dc.attribute("VTIEF"));
	doc->VTiefSc=QStoInt(dc.attribute("VTIEFSC"));
	doc->VKapit=QStoInt(dc.attribute("VKAPIT"));
	doc->GroupCounter=QStoInt(dc.attribute("GROUPC","1"));
	doc->HasCMS = static_cast<bool>(QStoInt(dc.attribute("HCMS","0")));
	doc->CMSSettings.SoftProofOn = static_cast<bool>(QStoInt(dc.attribute("DPSo","0")));
	doc->CMSSettings.CMSinUse = static_cast<bool>(QStoInt(dc.attribute("DPuse","0")));
	doc->CMSSettings.GamutCheck = static_cast<bool>(QStoInt(dc.attribute("DPgam","0")));
	doc->CMSSettings.BlackPoint = static_cast<bool>(QStoInt(dc.attribute("DPbla","1")));
	doc->CMSSettings.DefaultMonitorProfile = dc.attribute("DPMo","");
	doc->CMSSettings.DefaultPrinterProfile = dc.attribute("DPPr","");
	doc->CMSSettings.DefaultInputProfile = dc.attribute("DPIn","");
	doc->CMSSettings.DefaultInputProfile2 = dc.attribute("DPIn2","");
	doc->CMSSettings.DefaultIntentPrinter = QStoInt(dc.attribute("DIPr","0"));
	doc->CMSSettings.DefaultIntentMonitor = QStoInt(dc.attribute("DIMo","1"));
	doc->CMSSettings.DefaultIntentMonitor2 = QStoInt(dc.attribute("DIMo2","1"));
	doc->ActiveLayer = QStoInt(dc.attribute("ALAYER","0"));
	doc->Language = dc.attribute("LANGUAGE", "");
	doc->MinWordLen = QStoInt(dc.attribute("MINWORDLEN", "3"));
	doc->Automatic = static_cast<bool>(QStoInt(dc.attribute("AUTOMATIC", "1")));
	doc->AutoCheck = static_cast<bool>(QStoInt(dc.attribute("AUTOCHECK", "0")));
	doc->GuideLock = static_cast<bool>(QStoInt(dc.attribute("GUIDELOCK", "0")));
	DoFonts.clear();
	QDomNode PAGE=DOC.firstChild();
	while(!PAGE.isNull())
	{
		ObCount++;
		dia2->setProgress(ObCount);
		QDomElement pg=PAGE.toElement();
		if(pg.tagName()=="FONT")
		{
			/*
			* Attribute von FONT auslesen
			*/
			tmpf = pg.attribute("NAME");
			if ((!avail.find(tmpf)) || (!avail[tmpf]->UseFont))
				{
				if ((!view->Prefs->GFontSub.contains(tmpf)) || (!avail[view->Prefs->GFontSub[tmpf]]->UseFont))
					{
  				qApp->setOverrideCursor(QCursor(arrowCursor), true);
					DmF *dia = new DmF(view, tmpf, view->Prefs);
					dia->exec();
					tmpf = dia->Ersatz;
					delete dia;
  				qApp->setOverrideCursor(QCursor(waitCursor), true);
					view->Prefs->GFontSub[pg.attribute("NAME")] = tmpf;
					}
				else
					tmpf = view->Prefs->GFontSub[tmpf];
				}
			fo = avail[tmpf]->Font;
			fo.setPointSize(qRound(doc->Dsize / 10.0));
			doc->AddFont(tmpf, fo);
			DoFonts[pg.attribute("NAME")] = tmpf;
		}
		if(pg.tagName()=="COLOR")
			{
			if (pg.hasAttribute("CMYK"))
				lf.setNamedColor(pg.attribute("CMYK"));
			else
				lf.fromQColor(QColor(pg.attribute("RGB")));
		  doc->PageColors[pg.attribute("NAME")] = lf;
			}
		if(pg.tagName()=="STYLE")
			{
			vg.Vname = pg.attribute("NAME");
			vg.LineSpa = QStodouble(pg.attribute("LINESP"));
			vg.Indent = QStodouble(pg.attribute("INDENT","0"));
			vg.First = QStodouble(pg.attribute("FIRST","0"));
			vg.Ausri = QStoInt(pg.attribute("ALIGN"));
			vg.Avor = QStodouble(pg.attribute("VOR","0"));
			vg.Anach = QStodouble(pg.attribute("NACH","0"));
			if (pg.hasAttribute("FONT"))
				vg.Font = DoFonts[pg.attribute("FONT")];
			else
				vg.Font = DoFonts[Defont];
			vg.FontSize = qRound(QStodouble(pg.attribute("FONTSIZE","12")) * 10.0);
			doc->Vorlagen.append(vg);
			}
		if(pg.tagName()=="JAVA")
			doc->JavaScripts[pg.attribute("NAME")] = pg.attribute("SCRIPT");
		if(pg.tagName()=="LAYERS")
			{
			la.LNr = QStoInt(pg.attribute("NUMMER"));
			la.Level = QStoInt(pg.attribute("LEVEL"));
			la.Name = pg.attribute("NAME");
			la.Sichtbar = QStoInt(pg.attribute("SICHTBAR"));
			la.Drucken = QStoInt(pg.attribute("DRUCKEN"));
			doc->Layers.append(la);
			}
		if(pg.tagName()=="Bookmark")
			{
			bok.Title = pg.attribute("Title");
			bok.Text = pg.attribute("Text");
			bok.Aktion = pg.attribute("Aktion");
			bok.ItemNr = QStoInt(pg.attribute("ItemNr"));
			bok.Seite = QStoInt(pg.attribute("Seite"));
			bok.Element = QStoInt(pg.attribute("Element"));
			bok.First = QStoInt(pg.attribute("First"));
			bok.Last = QStoInt(pg.attribute("Last"));
			bok.Prev = QStoInt(pg.attribute("Prev"));
			bok.Next = QStoInt(pg.attribute("Next"));
			bok.Parent = QStoInt(pg.attribute("Parent"));
			doc->BookMarks.append(bok);
			}
		if(pg.tagName()=="PDF")
			{
			doc->PDF_Optionen.Articles = static_cast<bool>(QStoInt(pg.attribute("Articles")));
			doc->PDF_Optionen.Thumbnails = static_cast<bool>(QStoInt(pg.attribute("Thumbnails")));
			doc->PDF_Optionen.Compress = static_cast<bool>(QStoInt(pg.attribute("Compress")));
			doc->PDF_Optionen.RecalcPic = static_cast<bool>(QStoInt(pg.attribute("RecalcPic")));
			doc->PDF_Optionen.Bookmarks = static_cast<bool>(QStoInt(pg.attribute("Bookmarks")));
			doc->PDF_Optionen.PresentMode = static_cast<bool>(QStoInt(pg.attribute("PresentMode")));
			doc->PDF_Optionen.PicRes = QStoInt(pg.attribute("PicRes"));
			doc->PDF_Optionen.Version = QStoInt(pg.attribute("Version"));
			doc->PDF_Optionen.Resolution = QStoInt(pg.attribute("Resolution"));
			doc->PDF_Optionen.Binding = QStoInt(pg.attribute("Binding"));
			doc->PDF_Optionen.Datei = "";
			doc->PDF_Optionen.UseRGB = static_cast<bool>(QStoInt(pg.attribute("RGBMode","0")));
			doc->PDF_Optionen.UseProfiles = static_cast<bool>(QStoInt(pg.attribute("UseProfiles","0")));
			doc->PDF_Optionen.UseProfiles2 = static_cast<bool>(QStoInt(pg.attribute("UseProfiles2","0")));
			doc->PDF_Optionen.Intent = QStoInt(pg.attribute("Intent","1"));
			doc->PDF_Optionen.Intent2 = QStoInt(pg.attribute("Intent2","1"));
			doc->PDF_Optionen.SolidProf = pg.attribute("SolidP", "");
			doc->PDF_Optionen.ImageProf = pg.attribute("ImageP", "");
			doc->PDF_Optionen.PrintProf = pg.attribute("PrintP", "");
			doc->PDF_Optionen.Info = pg.attribute("InfoString", "");
			doc->PDF_Optionen.BleedTop = QStodouble(pg.attribute("BTop","0"));
			doc->PDF_Optionen.BleedLeft = QStodouble(pg.attribute("BLeft","0"));
			doc->PDF_Optionen.BleedRight = QStodouble(pg.attribute("BRight","0"));
			doc->PDF_Optionen.BleedBottom = QStodouble(pg.attribute("BBottom","0"));
			doc->PDF_Optionen.EmbeddedI = static_cast<bool>(QStoInt(pg.attribute("ImagePr","0")));
			doc->PDF_Optionen.PassOwner = pg.attribute("PassOwner", "");
			doc->PDF_Optionen.PassUser = pg.attribute("PassUser", "");
			doc->PDF_Optionen.Permissions = QStoInt(pg.attribute("Permissions","-4"));
			doc->PDF_Optionen.Encrypt = static_cast<bool>(QStoInt(pg.attribute("Encrypt","0")));
			QDomNode PFO = PAGE.firstChild();
			while(!PFO.isNull())
				{
				QDomElement pdfF = PFO.toElement();
				if(pdfF.tagName() == "Fonts")
					{
					if (!doc->PDF_Optionen.EmbedList.contains(DoFonts[pdfF.attribute("Name")]))
						doc->PDF_Optionen.EmbedList.append(DoFonts[pdfF.attribute("Name")]);
					}
				if(pdfF.tagName() == "Effekte")
					{
    			struct PreSet ef;
    			ef.EffektLen = QStoInt(pdfF.attribute("EffektLen"));
    			ef.AnzeigeLen = QStoInt(pdfF.attribute("AnzeigeLen"));
    			ef.Effekt = QStoInt(pdfF.attribute("Effekt"));
    			ef.Dm = QStoInt(pdfF.attribute("Dm"));
    			ef.M = QStoInt(pdfF.attribute("M"));
    			ef.Di = QStoInt(pdfF.attribute("Di"));
					doc->PDF_Optionen.PresentVals.append(ef);
					}
				PFO = PFO.nextSibling();
				}
			}
		if(pg.tagName()=="MultiLine")
			{
			multiLine ml;
			QDomNode MuLn = PAGE.firstChild();
			while(!MuLn.isNull())
				{
				QDomElement MuL = MuLn.toElement();
				struct singleLine sl;
				sl.Color = MuL.attribute("Color");
				sl.Dash = QStoInt(MuL.attribute("Dash"));
				sl.LineEnd = QStoInt(MuL.attribute("LineEnd"));
				sl.LineJoin = QStoInt(MuL.attribute("LineJoin"));
				sl.Shade = QStoInt(MuL.attribute("Shade"));
				sl.Width = QStodouble(MuL.attribute("Width"));
				ml.push_back(sl);
				MuLn = MuLn.nextSibling();
				}
			doc->MLineStyles.insert(pg.attribute("Name"), ml);
			}
		if(pg.tagName()=="PAGE")
			{
			/*
			* Attribute von PAGE auslesen
			*/
			a = QStoInt(pg.attribute("NUM"));
			PgNam = "";
			PgNam = pg.attribute("NAM", "");
			Pgc = doc->PageC;
			AtFl = doc->PageAT;
			if (PgNam == "")
				{
				doc->PageC = Pgc;
				view->Pages = view->DocPages;
				doc->PageAT = AtFl;
				doc->MasterP = false;
				}
			else
				{
				doc->PageC = 0;
				doc->PageAT = false;
				view->Pages = view->MasterPages;
				doc->MasterP = true;
				}
			emit NewPage(a);
			view->Pages.at(a)->LeftPg=QStoInt(pg.attribute("LEFT","0"));
			QString Mus = "";
			Mus = pg.attribute("MNAM","Normal");
			if (!doc->MasterP)
				view->Pages.at(a)->MPageNam = Mus;
			else
				view->Pages.at(a)->MPageNam = "";
			if ((pg.hasAttribute("NumVGuides")) && (QStoInt(pg.attribute("NumVGuides","0")) != 0))
				{
				tmp = pg.attribute("VerticalGuides");
				QTextStream fgv(&tmp, IO_ReadOnly);
				view->Pages.at(a)->YGuides.clear();
				for (int cxv = 0; cxv < QStoInt(pg.attribute("NumVGuides","0")); ++cxv)
					{
					fgv >> xf;
					view->Pages.at(a)->YGuides.append(xf);
					}
				qHeapSort(view->Pages.at(a)->YGuides);
				tmp = "";
				}
			else
				view->Pages.at(a)->YGuides.clear();
			if ((pg.hasAttribute("NumHGuides")) && (QStoInt(pg.attribute("NumHGuides","0")) != 0))
				{
				tmp = pg.attribute("HorizontalGuides");
				QTextStream fgh(&tmp, IO_ReadOnly);
				view->Pages.at(a)->XGuides.clear();
				for (int cxh = 0; cxh < QStoInt(pg.attribute("NumHGuides","0")); ++cxh)
					{
					fgh >> xf;
					view->Pages.at(a)->XGuides.append(xf);
					}
				qHeapSort(view->Pages.at(a)->XGuides);
				tmp = "";
				}
			else
				view->Pages.at(a)->XGuides.clear();
			counter = 0;
			QDomNode OBJ=PAGE.firstChild();
			while(!OBJ.isNull())
			{
				QDomElement obj=OBJ.toElement();
				/*
				* Attribute von OBJECT auslesen
				*/
				if (QStoInt(obj.attribute("NEXTITEM")) != -1)
					{
					if (QStoInt(obj.attribute("BACKITEM")) == -1)
						{
						Link.Start = counter;
						Link.StPag = a;
						LFrames.append(Link);
						}
					}
				OB.PType = QStoInt(obj.attribute("PTYPE"));
				OB.Xpos = QStodouble(obj.attribute("XPOS"));
				OB.Ypos=QStodouble(obj.attribute("YPOS"));
				OB.Width=QStodouble(obj.attribute("WIDTH"));
				OB.Height=QStodouble(obj.attribute("HEIGHT"));
				OB.RadRect = QStodouble(obj.attribute("RADRECT","0"));
				OB.ClipEdited = QStoInt(obj.attribute("CLIPEDIT", "0"));
				OB.FrameType = QStoInt(obj.attribute("FRTYPE", "0"));
				OB.Pwidth=QStodouble(obj.attribute("PWIDTH"));
				OB.Pcolor=obj.attribute("PCOLOR");
				if ((!newVersion) && (OB.PType == 4))
					{
					OB.TxtFill = obj.attribute("PCOLOR2");
					OB.Pcolor2 = "None";
					}
				else
					{
					OB.Pcolor2 = obj.attribute("PCOLOR2");
					OB.TxtFill = obj.attribute("TXTFILL", "Black");
					}
				OB.NamedLStyle = obj.attribute("NAMEDLST", "");
				OB.Shade=QStoInt(obj.attribute("SHADE"));
				OB.Shade2=QStoInt(obj.attribute("SHADE2"));
				OB.TxtStroke=obj.attribute("TXTSTROKE", "None");
				OB.ShTxtFill=QStoInt(obj.attribute("TXTFILLSH", "100"));
				OB.ShTxtStroke=QStoInt(obj.attribute("TXTSTRSH", "100"));
				OB.TxtScale=QStoInt(obj.attribute("TXTSCALE", "100"));
				OB.TxTStyle=QStoInt(obj.attribute("TXTSTYLE", "0"));
				OB.GrColor = obj.attribute("GRCOLOR","");
				OB.GrColor2 = obj.attribute("GRCOLOR2","");
				OB.GrShade = QStoInt(obj.attribute("GRSHADE","100"));
				OB.GrShade2 = QStoInt(obj.attribute("GRSHADE2","100"));
				OB.GrType = QStoInt(obj.attribute("GRTYP","0"));
				OB.Rot=QStodouble(obj.attribute("ROT"));
				OB.PLineArt=Qt::PenStyle(QStoInt(obj.attribute("PLINEART")));
				OB.PLineEnd=Qt::PenCapStyle(QStoInt(obj.attribute("PLINEEND","0")));
				OB.PLineJoin=Qt::PenJoinStyle(QStoInt(obj.attribute("PLINEJOIN","0")));
				OB.LineSp=QStodouble(obj.attribute("LINESP"));
				OB.ExtraV=QStodouble(obj.attribute("EXTRAV","0"));
				OB.LocalScX=QStodouble(obj.attribute("LOCALSCX"));
				OB.LocalScY=QStodouble(obj.attribute("LOCALSCY"));
				OB.LocalX=QStodouble(obj.attribute("LOCALX"));
				OB.LocalY=QStodouble(obj.attribute("LOCALY"));
				OB.PicArt=QStoInt(obj.attribute("PICART"));
				OB.flippedH=QStoInt(obj.attribute("FLIPPEDH"));
				OB.flippedV=QStoInt(obj.attribute("FLIPPEDV"));
				OB.BBoxX=QStodouble(obj.attribute("BBOXX"));
				OB.BBoxH=QStodouble(obj.attribute("BBOXH"));
				OB.ScaleType = QStoInt(obj.attribute("SCALETYPE","1"));
				OB.AspectRatio = QStoInt(obj.attribute("RATIO","0"));
				OB.isPrintable=QStoInt(obj.attribute("PRINTABLE"));
				OB.isBookmark=QStoInt(obj.attribute("BOOKMARK"));
				if ((OB.isBookmark) && (doc->BookMarks.count() == 0))
					doc->OldBM = true;
				OB.BMnr = QStoInt(obj.attribute("BookNr","0"));
				OB.isAnnotation=QStoInt(obj.attribute("ANNOTATION","0"));
				OB.AnType = QStoInt(obj.attribute("ANTYPE","0"));
				OB.AnAction = obj.attribute("ANACTION","");
				OB.An_E_act = obj.attribute("ANEACT","");
				OB.An_X_act = obj.attribute("ANXACT","");
				OB.An_D_act = obj.attribute("ANDACT","");
				OB.An_Fo_act = obj.attribute("ANFOACT","");
				OB.An_Bl_act = obj.attribute("ANBLACT","");
				OB.An_K_act = obj.attribute("ANKACT","");
				OB.An_F_act = obj.attribute("ANFACT","");
				OB.An_V_act = obj.attribute("ANVACT","");
				OB.An_C_act = obj.attribute("ANCACT","");
				OB.AnActType = QStoInt(obj.attribute("ANACTYP","0"));
				OB.An_Extern = obj.attribute("ANEXTERN","");
				if ((OB.An_Extern != "") && (OB.AnActType != 8))
					{
					QFileInfo efp(OB.An_Extern);
					OB.An_Extern = efp.absFilePath();
					}
				OB.AnZiel = QStoInt(obj.attribute("ANZIEL","0"));
				OB.AnName = obj.attribute("ANNAME","");
				OB.AnToolTip = obj.attribute("ANTOOLTIP","");
				OB.AnRollOver = obj.attribute("ANROLL","");
				OB.AnDown = obj.attribute("ANDOWN","");
				OB.AnBwid = QStoInt(obj.attribute("ANBWID","1"));
				OB.AnBsty = QStoInt(obj.attribute("ANBSTY","0"));
				OB.AnFeed = QStoInt(obj.attribute("ANFEED","1"));
				OB.AnFlag = QStoInt(obj.attribute("ANFLAG","0"));
				OB.AnFont = QStoInt(obj.attribute("ANFONT","4"));
				OB.AnFormat = QStoInt(obj.attribute("ANFORMAT","0"));
				OB.AnVis = QStoInt(obj.attribute("ANVIS","0"));
				OB.AnIsChk = static_cast<bool>(QStoInt(obj.attribute("ANCHK","0")));
				OB.AnAAact = static_cast<bool>(QStoInt(obj.attribute("ANAA","0")));
				OB.AnHTML = static_cast<bool>(QStoInt(obj.attribute("ANHTML","0")));
				OB.AnUseIcons = static_cast<bool>(QStoInt(obj.attribute("ANICON","0")));
				OB.AnChkStil = QStoInt(obj.attribute("ANCHKS","0"));
				OB.AnMaxChar = QStoInt(obj.attribute("ANMC","-1"));
				OB.AnBColor = obj.attribute("ANBCOL","None");
				OB.AnIPlace = QStoInt(obj.attribute("ANPLACE","1"));
				OB.AnScaleW = QStoInt(obj.attribute("ANSCALE","0"));
				if (QStoInt(obj.attribute("TRANSPARENT","0")) == 1)
					OB.Pcolor = "None";
				OB.Textflow=QStoInt(obj.attribute("TEXTFLOW"));
				OB.Textflow2=QStoInt(obj.attribute("TEXTFLOW2","0"));
				OB.Extra=QStodouble(obj.attribute("EXTRA"));
				OB.TExtra=QStodouble(obj.attribute("TEXTRA", "1"));
				OB.BExtra=QStodouble(obj.attribute("BEXTRA", "1"));
				OB.RExtra=QStodouble(obj.attribute("REXTRA", "1"));
				OB.PoShow = QStoInt(obj.attribute("PTLSHOW","0"));
				OB.BaseOffs = QStodouble(obj.attribute("BASEOF","0"));
				OB.Ausrich = QStoInt(obj.attribute("ALIGN","0"));
				OB.IFont = DoFonts[obj.attribute("IFONT", doc->Dfont)];
				OB.ISize = qRound(QStodouble(obj.attribute("ISIZE","12")) * 10);
				OB.Pfile=obj.attribute("PFILE");
				OB.Pfile2=obj.attribute("PFILE2","");
				OB.Pfile3=obj.attribute("PFILE3","");
				OB.IProfile=obj.attribute("PRFILE","");
				OB.EmProfile=obj.attribute("EPROF","");
				OB.IRender = QStoInt(obj.attribute("IRENDER","1"));
				OB.UseEmbedded = QStoInt(obj.attribute("EMBEDDED","1"));
				OB.Locked = static_cast<bool>(QStoInt(obj.attribute("LOCK","0")));
				OB.Reverse = static_cast<bool>(QStoInt(obj.attribute("REVERS","0")));
				OB.InvPict = static_cast<bool>(QStoInt(obj.attribute("INVERS","0")));
				OB.LayerNr = QStoInt(obj.attribute("LAYER","0"));
				OB.Language = obj.attribute("LANGUAGE", doc->Language);
				OB.Transparency = QStodouble(obj.attribute("TransValue","0.0"));
				if (obj.hasAttribute("TransValueS"))
					OB.TranspStroke = QStodouble(obj.attribute("TransValueS","0.0"));
				else
					OB.TranspStroke = OB.Transparency;
				if (obj.hasAttribute("NUMCLIP"))
					{
					OB.Clip.resize(obj.attribute("NUMCLIP").toUInt());
					tmp = obj.attribute("CLIPCOOR");
					QTextStream fc(&tmp, IO_ReadOnly);
					for (uint c=0; c<obj.attribute("NUMCLIP").toUInt(); ++c)
						{
						fc >> x;
						fc >> y;
						OB.Clip.setPoint(c, x, y);
						}
					}
				else
					OB.Clip.resize(0);
				if (obj.hasAttribute("NUMPO"))
					{
					OB.PoLine.resize(obj.attribute("NUMPO").toUInt());
					tmp = obj.attribute("POCOOR");
						QTextStream fp(&tmp, IO_ReadOnly);
					for (uint cx=0; cx<obj.attribute("NUMPO").toUInt(); ++cx)
						{
						fp >> xf;
						fp >> yf;
						OB.PoLine.setPoint(cx, xf, yf);
						}
					}
				else
					OB.PoLine.resize(0);
				tmp = "";
				if ((obj.hasAttribute("GROUPS")) && (QStoInt(obj.attribute("NUMGROUP","0")) != 0))
					{
					tmp = obj.attribute("GROUPS");
					QTextStream fg(&tmp, IO_ReadOnly);
					OB.Groups.clear();
					for (int cx = 0; cx < QStoInt(obj.attribute("NUMGROUP","0")); ++cx)
						{
						fg >> x;
						OB.Groups.push(x);
						}
					tmp = "";
					}
				else
					OB.Groups.clear();
				QDomNode IT=OBJ.firstChild();
				while(!IT.isNull())
				{
					QDomElement it=IT.toElement();
					if (it.tagName()=="ITEXT")
						{
						tmp2 = it.attribute("CH");
						tmp2.replace(QRegExp("\r"), QChar(5));
						tmp2.replace(QRegExp("\n"), QChar(5));
						tmp3 = "\t" + DoFonts[it.attribute("CFONT")] + "\t";
						tmp3 += it.attribute("CSIZE") + "\t";
						tmp3 += it.attribute("CCOLOR") + "\t";
						tmp3 += it.attribute("CEXTRA") + "\t";
						tmp3 += it.attribute("CSHADE") + "\t";
						tmp3 += it.attribute("CSTYLE") + "\t";
						tmp3 += it.attribute("CAB","0") + "\t";
						tmp3 += it.attribute("CSTROKE","None") + "\t";
						tmp3 += it.attribute("CSHADE2","100") + "\t";
						tmp3 += it.attribute("CSCALE","100") + "\n";
						for (uint cxx=0; cxx<tmp2.length(); ++cxx)
							{
							tmp += tmp2.at(cxx)+tmp3;
							}
						}
					IT=IT.nextSibling();
				}
				OB.Ptext = tmp;
				int docGc = doc->GroupCounter;
				doc->GroupCounter = 0;
				doc->Dfont = DoFonts[Defont];
				if ((OB.PType == 5) && (OB.Height != 0))
					{
					OB.Rot += atan2(OB.Height,OB.Width)*(180.0/3.1415927);
					OB.Width = sqrt(pow(OB.Width,2)+pow(OB.Height,2));
					OB.Height = 0;
					OB.Clip.setPoints(4, -1,-1, static_cast<int>(OB.Width+1),-1, static_cast<int>(OB.Width+1), static_cast<int>(OB.Height+1), -1, static_cast<int>(OB.Height+1));
					}
				view->Pages.at(a)->PasteItem(&OB, true);
				doc->GroupCounter = docGc;
				Neu = view->Pages.at(a)->Items.at(counter);
				Neu->isAutoText=QStoInt(obj.attribute("AUTOTEXT"));
				if (Neu->isAutoText)
					doc->LastAuto = Neu;
				Neu->NextIt = QStoInt(obj.attribute("NEXTITEM"));
				Neu->NextPg = QStoInt(obj.attribute("NEXTPAGE"));
				counter++;
				OBJ=OBJ.nextSibling();
				}
			if (PgNam == "")
				{
				view->DocPages = view->Pages;
				}
			else
				{
				view->Pages.at(a)->PageNam = PgNam;
				view->MasterNames[PgNam] = a;
				view->MasterPages = view->Pages;
				}
			doc->MasterP = false;
			doc->PageC = Pgc+1;
			doc->PageAT = AtFl;
		}
		PAGE=PAGE.nextSibling();
	}
	DOC=DOC.nextSibling();
}
for (uint ap=0; ap<view->MasterPages.count(); ++ap)
	{
	view->MasterPages.at(ap)->parentWidget()->hide();
	}
view->Pages = view->DocPages;
doc->PageC = view->Pages.count();
view->reformPages();
if (doc->Layers.count() == 0)
	{
	la.LNr = 0;
	la.Level = 0;
	la.Name = tr("Background");
	la.Sichtbar = true;
	la.Drucken = true;
	doc->Layers.append(la);
	}
if (LFrames.count() != 0)
	{
	PageItem *Its;
	PageItem *Itn;
	PageItem *Itr;
	QValueList<Linked>::Iterator lc;
	for (lc = LFrames.begin(); lc != LFrames.end(); ++lc)
		{
		Its = view->Pages.at((*lc).StPag)->Items.at((*lc).Start);
		Itr = Its;
		Its->BackBox = 0;
		if (Its->isAutoText)
			doc->FirstAuto = Its;
		while (Its->NextIt != -1)
			{
			Itn = view->Pages.at(Its->NextPg)->Items.at(Its->NextIt);
			Its->NextBox = Itn;
			Itn->BackBox = Its;
			Its = Itn;
			}
		Its->NextBox = 0;
		Itr->Dirty = true;
//		Itr->paintObj();
		}
	}
if (doc->Einheit == 0)
	view->UN->setText("pt");
else
	view->UN->setText("mm");
dia2->setProgress(DOC.childNodes().count());
return true;
}

bool ScriXmlDoc::ReadElemHeader(QString file, bool isFile, double *x, double *y, double *w, double *h)
{
	QString f;
	QDomDocument docu("scridoc");
	if (isFile)
		{
		if (!loadText(file, &f))
			return false;
		QString ff = "";
		if (f.startsWith("<SCRIBUSELEMUTF8"))
			ff = QString::fromUtf8(f);
		else
			ff = f;
		if(!docu.setContent(ff))
			return false;
		}
	else
		{
		QString ff = "";
		if (file.startsWith("<SCRIBUSELEMUTF8"))
			ff = QString::fromUtf8(file);
		else
			ff = file;
		if(!docu.setContent(ff))
			return false;
		}
	QDomElement elem=docu.documentElement();
	if ((elem.tagName() != "SCRIBUSELEM") && (elem.tagName() != "SCRIBUSELEMUTF8"))
		return false;
	*x = QStodouble(elem.attribute("XP"));
	*y = QStodouble(elem.attribute("YP"));
	*w = QStodouble(elem.attribute("W","0"));
	*h = QStodouble(elem.attribute("H","0"));
	return true;
}

bool ScriXmlDoc::ReadElem(QString fileName, SCFonts &avail, ScribusDoc *doc, int Xp, int Yp, bool Fi, bool loc, QMap<QString,QString> &FontSub, preV *Prefs)
{
	struct CLBuf OB;
	struct StVorL vg;
	QString tmp, tmpf, tmp2, tmp3, tmp4, f, tmV;
	QFont fo;
	QMap<QString,QString> DoFonts;
	QMap<uint,QString> DoVorl;
	QMap<QString,QString> DoMul;
	uint VorlC;
	bool fou;
	bool VorLFound = false;
	bool newVersion = false;
	int x, y;
	double GrX, GrY, xf, yf;
	int GrMax = doc->GroupCounter;
	CMYKColor lf = CMYKColor();
	QDomDocument docu("scridoc");
	if (Fi)
		{
		if (!loadText(fileName, &f))
			return false;
		QString ff = "";
		if (f.startsWith("<SCRIBUSELEMUTF8"))
			ff = QString::fromUtf8(f);
		else
			ff = f;
		if(!docu.setContent(ff))
			return false;
		}
	else
		{
		QString ff = "";
		if (fileName.startsWith("<SCRIBUSELEMUTF8"))
			ff = QString::fromUtf8(fileName);
		else
			ff = fileName;
		if(!docu.setContent(ff))
			return false;
		}
	QDomElement elem=docu.documentElement();
	if ((elem.tagName() != "SCRIBUSELEM") && (elem.tagName() != "SCRIBUSELEMUTF8"))
		return false;
	if (loc)
		{
		GrX = 0;
		GrY = 0;
		}
	else
		{
		GrX = QStodouble(elem.attribute("XP"));
		GrY = QStodouble(elem.attribute("YP"));
		}
	if (elem.hasAttribute("Version"))
		newVersion = true;
	QDomNode DOC=elem.firstChild();
	DoFonts.clear();
	DoVorl.clear();
	DoVorl[0] = "0";
	DoVorl[1] = "1";
	DoVorl[2] = "2";
	DoVorl[3] = "3";
	DoVorl[4] = "4";
	VorlC = 5;
	QString CurDirP = QDir::currentDirPath();
	QDir::setCurrent(QString(getenv("HOME")));
	while(!DOC.isNull())
		{
		QDomElement pg=DOC.toElement();
		if(pg.tagName()=="FONT")
			{
			tmpf = pg.attribute("NAME");
			if ((!avail.find(tmpf)) || (!avail[tmpf]->UseFont))
				{
				if (!FontSub.contains(tmpf) || (!avail[FontSub[tmpf]]->UseFont))
					{
					DmF *dia = new DmF(0, tmpf, Prefs);
					dia->exec();
					tmpf = dia->Ersatz;
					FontSub[pg.attribute("NAME")] = tmpf;
					delete dia;
					}
				else
					tmpf = FontSub[tmpf];
				}
			fo = avail[tmpf]->Font;
			fo.setPointSize(qRound(doc->Dsize / 10.0));
			if(!doc->UsedFonts.contains(tmpf))
				doc->AddFont(tmpf, fo);
			DoFonts[pg.attribute("NAME")] = tmpf;
			}
		if(pg.tagName()=="COLOR")
			{
			if (pg.hasAttribute("CMYK"))
				lf.setNamedColor(pg.attribute("CMYK"));
			else
				lf.fromQColor(QColor(pg.attribute("RGB")));
			if (!doc->PageColors.contains(pg.attribute("NAME")))
		  	doc->PageColors[pg.attribute("NAME")] = lf;
			}
		if(pg.tagName()=="MultiLine")
			{
			multiLine ml;
			QDomNode MuLn = DOC.firstChild();
			while(!MuLn.isNull())
				{
				QDomElement MuL = MuLn.toElement();
				struct singleLine sl;
				sl.Color = MuL.attribute("Color");
				sl.Dash = QStoInt(MuL.attribute("Dash"));
				sl.LineEnd = QStoInt(MuL.attribute("LineEnd"));
				sl.LineJoin = QStoInt(MuL.attribute("LineJoin"));
				sl.Shade = QStoInt(MuL.attribute("Shade"));
				sl.Width = QStodouble(MuL.attribute("Width"));
				ml.push_back(sl);
				MuLn = MuLn.nextSibling();
				}
			if (!doc->MLineStyles.contains(pg.attribute("Name")))
				doc->MLineStyles.insert(pg.attribute("Name"), ml);
			}
		if(pg.tagName()=="STYLE")
			{
			fou = false;
			VorLFound = true;
			vg.Vname = pg.attribute("NAME");
			vg.LineSpa = QStodouble(pg.attribute("LINESP"));
			vg.Indent = QStodouble(pg.attribute("INDENT","0"));
			vg.First = QStodouble(pg.attribute("FIRST","0"));
			vg.Ausri = QStoInt(pg.attribute("ALIGN"));
			vg.Avor = QStodouble(pg.attribute("VOR","0"));
			vg.Anach = QStodouble(pg.attribute("NACH","0"));
			if (pg.hasAttribute("FONT"))
				vg.Font = DoFonts[pg.attribute("FONT")];
			else
				vg.Font = doc->Dfont;
			vg.FontSize = qRound(QStodouble(pg.attribute("FONTSIZE","12")) * 10);
			for (uint xx=0; xx<doc->Vorlagen.count(); ++xx)
				{
				if (vg.Vname == doc->Vorlagen[xx].Vname)
					{
					if ((vg.LineSpa == doc->Vorlagen[xx].LineSpa) &&
							(vg.Indent == doc->Vorlagen[xx].Indent) &&
							(vg.First == doc->Vorlagen[xx].First) &&
							(vg.Ausri == doc->Vorlagen[xx].Ausri) &&
							(vg.Avor == doc->Vorlagen[xx].Avor) &&
							(vg.Anach == doc->Vorlagen[xx].Anach) &&
							(vg.Font == doc->Vorlagen[xx].Font) &&
							(vg.FontSize == doc->Vorlagen[xx].FontSize))
						{
						DoVorl[VorlC] = tmV.setNum(xx);
						VorlC++;
						fou = true;
						}
					else
						{
						vg.Vname = "Copy of "+doc->Vorlagen[xx].Vname;
						fou = false;
						}
					break;
					}
				}
			if (!fou)
				{
				doc->Vorlagen.append(vg);
				DoVorl[VorlC] = tmV.setNum(doc->Vorlagen.count()-1);
				VorlC++;
				}
			}
		DOC=DOC.nextSibling();
		}
	DOC=elem.firstChild();
	while(!DOC.isNull())
		{
		QDomElement pg=DOC.toElement();
		if(pg.tagName()=="ITEM")
			{
			OB.PType = QStoInt(pg.attribute("PTYPE"));
			OB.Xpos = static_cast<double>(Xp) + QStodouble(pg.attribute("XPOS")) - GrX;
			OB.Ypos = static_cast<double>(Yp) + QStodouble(pg.attribute("YPOS")) - GrY;
			OB.Width = QStodouble(pg.attribute("WIDTH"));
			OB.Height = QStodouble(pg.attribute("HEIGHT"));
			OB.RadRect = QStodouble(pg.attribute("RADRECT","0"));
			OB.ClipEdited = QStoInt(pg.attribute("CLIPEDIT", "0"));
			OB.FrameType = QStoInt(pg.attribute("FRTYPE", "0"));
			OB.Pwidth = QStodouble(pg.attribute("PWIDTH"));
			OB.Pcolor = pg.attribute("PCOLOR");
			if ((!newVersion) && (OB.PType == 4))
				{
				OB.TxtFill = pg.attribute("PCOLOR2");
				OB.Pcolor2 = "None";
				}
			else
				{
				OB.Pcolor2 = pg.attribute("PCOLOR2");
				OB.TxtFill = pg.attribute("TXTFILL", "Black");
				}
			OB.NamedLStyle = pg.attribute("NAMEDLST", "");
			if (!doc->MLineStyles.contains(OB.NamedLStyle))
				OB.NamedLStyle = "";
			OB.Shade = QStoInt(pg.attribute("SHADE"));
			OB.Shade2 = QStoInt(pg.attribute("SHADE2"));
			OB.TxtStroke = pg.attribute("TXTSTROKE", "None");
			OB.ShTxtFill = QStoInt(pg.attribute("TXTFILLSH", "100"));
			OB.ShTxtStroke = QStoInt(pg.attribute("TXTSTRSH", "100"));
			OB.TxtScale = QStoInt(pg.attribute("TXTSCALE", "100"));
			OB.TxTStyle = QStoInt(pg.attribute("TXTSTYLE", "0"));
			OB.GrColor = pg.attribute("GRCOLOR","");
			OB.GrColor2 = pg.attribute("GRCOLOR2","");
			OB.GrShade = QStoInt(pg.attribute("GRSHADE","100"));
			OB.GrShade2 = QStoInt(pg.attribute("GRSHADE2","100"));
			OB.GrType = QStoInt(pg.attribute("GRTYP","0"));
			OB.Rot = QStodouble(pg.attribute("ROT"));
			OB.PLineArt = Qt::PenStyle(QStoInt(pg.attribute("PLINEART")));
			OB.PLineEnd = Qt::PenCapStyle(QStoInt(pg.attribute("PLINEEND","0")));
			OB.PLineJoin = Qt::PenJoinStyle(QStoInt(pg.attribute("PLINEJOIN","0")));
			OB.LineSp = QStodouble(pg.attribute("LINESP"));
			OB.ExtraV = QStodouble(pg.attribute("EXTRAV","0"));
			OB.LocalScX = QStodouble(pg.attribute("LOCALSCX"));
			OB.LocalScY = QStodouble(pg.attribute("LOCALSCY"));
			OB.LocalX = QStodouble(pg.attribute("LOCALX"));
			OB.LocalY = QStodouble(pg.attribute("LOCALY"));
			OB.PicArt = QStoInt(pg.attribute("PICART"));
			OB.flippedH = QStoInt(pg.attribute("FLIPPEDH"));
			OB.flippedV = QStoInt(pg.attribute("FLIPPEDV"));
			OB.ScaleType = QStoInt(pg.attribute("SCALETYPE","1"));
			OB.AspectRatio = QStoInt(pg.attribute("RATIO","0"));
			OB.BBoxX = QStodouble(pg.attribute("BBOXX"));
			OB.BBoxH = QStodouble(pg.attribute("BBOXH"));
			OB.isPrintable = QStoInt(pg.attribute("PRINTABLE"));
			OB.isBookmark = false;
			OB.BMnr = 0;
			OB.isAnnotation = QStoInt(pg.attribute("ANNOTATION","0"));
			OB.AnType = QStoInt(pg.attribute("ANTYPE","0"));
			OB.AnAction = pg.attribute("ANACTION","");
			OB.An_E_act = pg.attribute("ANEACT","");
			OB.An_X_act = pg.attribute("ANXACT","");
			OB.An_D_act = pg.attribute("ANDACT","");
			OB.An_Fo_act = pg.attribute("ANFOACT","");
			OB.An_Bl_act = pg.attribute("ANBLACT","");
			OB.An_K_act = pg.attribute("ANKACT","");
			OB.An_F_act = pg.attribute("ANFACT","");
			OB.An_V_act = pg.attribute("ANVACT","");
			OB.An_C_act = pg.attribute("ANCACT","");
			OB.AnActType = QStoInt(pg.attribute("ANACTYP","0"));
			OB.An_Extern = pg.attribute("ANEXTERN","");
			if ((OB.An_Extern != "") && (OB.AnActType != 8))
				{
				QFileInfo efp(OB.An_Extern);
				OB.An_Extern = efp.absFilePath();
				}
			OB.AnZiel = QStoInt(pg.attribute("ANZIEL","0"));
			OB.AnName = pg.attribute("ANNAME","");
			OB.AnToolTip = pg.attribute("ANTOOLTIP","");
			OB.AnRollOver = pg.attribute("ANROLL","");
			OB.AnDown = pg.attribute("ANDOWN","");
			OB.AnBwid = QStoInt(pg.attribute("ANBWID","1"));
			OB.AnBsty = QStoInt(pg.attribute("ANBSTY","0"));
			OB.AnFeed = QStoInt(pg.attribute("ANFEED","1"));
			OB.AnFlag = QStoInt(pg.attribute("ANFLAG","0"));
			OB.AnFont = QStoInt(pg.attribute("ANFONT","4"));
			OB.AnFormat = QStoInt(pg.attribute("ANFORMAT","0"));
			OB.AnVis = QStoInt(pg.attribute("ANVIS","0"));
			OB.AnMaxChar = QStoInt(pg.attribute("ANMC","-1"));
			OB.AnIsChk = static_cast<bool>(QStoInt(pg.attribute("ANCHK","0")));
			OB.AnAAact = static_cast<bool>(QStoInt(pg.attribute("ANAA","0")));
			OB.AnHTML = static_cast<bool>(QStoInt(pg.attribute("ANHTML","0")));
			OB.AnUseIcons = static_cast<bool>(QStoInt(pg.attribute("ANICON","0")));
			OB.AnChkStil = QStoInt(pg.attribute("ANCHKS","0"));
			OB.AnIPlace = QStoInt(pg.attribute("ANPLACE","1"));
			OB.AnScaleW = QStoInt(pg.attribute("ANSCALE","0"));
			OB.AnBColor = pg.attribute("ANBCOL","None");
			if (QStoInt(pg.attribute("TRANSPARENT","0")) == 1)
				OB.Pcolor = "None";
			OB.Textflow = QStoInt(pg.attribute("TEXTFLOW"));
			OB.Textflow2 = QStoInt(pg.attribute("TEXTFLOW2","0"));
			OB.Extra = QStodouble(pg.attribute("EXTRA"));
			OB.TExtra = QStodouble(pg.attribute("TEXTRA", "1"));
			OB.BExtra = QStodouble(pg.attribute("BEXTRA", "1"));
			OB.RExtra = QStodouble(pg.attribute("REXTRA", "1"));
			OB.PoShow = QStoInt(pg.attribute("PTLSHOW","0"));
			OB.BaseOffs = QStodouble(pg.attribute("BASEOF","0"));
			OB.Ausrich = QStoInt(pg.attribute("ALIGN","0"));
			OB.IFont = DoFonts[pg.attribute("IFONT")];
			OB.ISize = qRound(QStodouble(pg.attribute("ISIZE","12")) * 10);
			OB.Pfile = pg.attribute("PFILE");
			OB.Pfile2 = pg.attribute("PFILE2","");
			OB.Pfile3 = pg.attribute("PFILE3","");
			OB.IProfile = pg.attribute("PRFILE","");
			OB.EmProfile = pg.attribute("EPROF","");
			OB.IRender = QStoInt(pg.attribute("IRENDER","1"));
			OB.UseEmbedded = QStoInt(pg.attribute("EMBEDDED","1"));
			OB.Locked = static_cast<bool>(QStoInt(pg.attribute("LOCK","0")));
			OB.Reverse = static_cast<bool>(QStoInt(pg.attribute("REVERS","0")));
			OB.InvPict = static_cast<bool>(QStoInt(pg.attribute("INVERS","0")));
			OB.Language = pg.attribute("LANGUAGE", doc->Language);
			OB.Transparency = QStodouble(pg.attribute("TransValue","0.0"));
			if (pg.hasAttribute("TransValueS"))
				OB.TranspStroke = QStodouble(pg.attribute("TransValueS","0.0"));
			else
				OB.TranspStroke = OB.Transparency;
			if (pg.hasAttribute("NUMCLIP"))
				{
				OB.Clip.resize(pg.attribute("NUMCLIP").toUInt());
				tmp = pg.attribute("CLIPCOOR");
				QTextStream f(&tmp, IO_ReadOnly);
				for (uint c=0; c<pg.attribute("NUMCLIP").toUInt(); ++c)
					{
					f >> x;
					f >> y;
					OB.Clip.setPoint(c, x, y);
					}
				}
			else
				OB.Clip.resize(0);
			if (pg.hasAttribute("NUMPO"))
				{
				OB.PoLine.resize(pg.attribute("NUMPO").toUInt());
				tmp = pg.attribute("POCOOR");
				QTextStream fp(&tmp, IO_ReadOnly);
				for (uint cx=0; cx<pg.attribute("NUMPO").toUInt(); ++cx)
					{
					fp >> xf;
					fp >> yf;
					OB.PoLine.setPoint(cx, xf, yf);
					}
				}
			else
				OB.PoLine.resize(0);
			tmp = "";
			if ((pg.hasAttribute("GROUPS")) && (QStoInt(pg.attribute("NUMGROUP","0")) != 0))
				{
				tmp = pg.attribute("GROUPS");
				QTextStream fg(&tmp, IO_ReadOnly);
				OB.Groups.clear();
				for (int cx = 0; cx < QStoInt(pg.attribute("NUMGROUP","0")); ++cx)
					{
					fg >> x;
					OB.Groups.push(x+doc->GroupCounter);
					GrMax = QMAX(GrMax, x+doc->GroupCounter);
					}
				tmp = "";
				}
			else
				OB.Groups.clear();
			tmp = "";
			QDomNode IT=DOC.firstChild();
			while(!IT.isNull())
				{
				QDomElement it=IT.toElement();
				if (it.tagName()=="ITEXT")
						{
						tmp2 = it.attribute("CH");
						tmp2.replace(QRegExp("\r"), QChar(5));
						tmp2.replace(QRegExp("\n"), QChar(5));
						tmp3 = "\t" + DoFonts[it.attribute("CFONT")] + "\t";
						tmp3 += it.attribute("CSIZE") + "\t";
						tmp3 += it.attribute("CCOLOR") + "\t";
						tmp3 += it.attribute("CEXTRA") + "\t";
						tmp3 += it.attribute("CSHADE") + "\t";
						tmp3 += it.attribute("CSTYLE") + "\t";
						if (VorLFound)
							tmp3 += DoVorl[it.attribute("CAB","0").toUInt()] + "\t";
						else
							{
							if (it.attribute("CAB","0").toUInt() < 5)
								tmp3 += it.attribute("CAB","0")+"\t";
							else
								tmp3 += "0\t";
								}
						tmp3 += it.attribute("CSTROKE","None") + "\t";
						tmp3 += it.attribute("CSHADE2","100") + "\t";
						tmp3 += it.attribute("CSCALE","100") + "\n";
						for (uint cxx=0; cxx<tmp2.length(); ++cxx)
							{
							tmp += tmp2.at(cxx)+tmp3;
							}
						}
					IT=IT.nextSibling();
				}
			OB.Ptext = tmp;
			if ((OB.PType == 5) && (OB.Height != 0))
				{
				OB.Rot += atan2(OB.Height,OB.Width)*(180.0/3.1415927);
				OB.Width = sqrt(pow(OB.Width,2)+pow(OB.Height,2));
				OB.Height = 0;
				OB.Clip.setPoints(4, -1,-1, static_cast<int>(OB.Width+1),-1, static_cast<int>(OB.Width+1), static_cast<int>(OB.Height+1), -1, static_cast<int>(OB.Height+1));
				}
			OB.LayerNr = -1;
			doc->ActPage->PasteItem(&OB, true, true);
			}
		DOC=DOC.nextSibling();
		}
	doc->GroupCounter = GrMax + 1;
	QDir::setCurrent(CurDirP);
	return true;
}

QString ScriXmlDoc::WriteElem(QPtrList<PageItem> *Selitems, ScribusDoc *doc)
{
	int tsh, tsh2, tst, tst2, tsb, tsb2, tshs, tshs2, tsc, tsc2;
	QString text, tf, tf2, tc, tc2, tcs, tcs2, tmp, tmpy;
	double te, te2, xf, yf, ts, ts2;
	PageItem *item;
	QDomDocument docu("scribus");
	QString st="<SCRIBUSELEMUTF8></SCRIBUSELEMUTF8>";
	docu.setContent(st);
	QDomElement elem=docu.documentElement();
	item = Selitems->at(0);
	QValueList<uint> ELL;
	for (uint cor=0; cor<Selitems->count(); ++cor)
		{
		ELL.append(Selitems->at(cor)->ItemNr);
		}
	qHeapSort(ELL);
	if (doc->ActPage->GroupSel)
		{
		elem.setAttribute("XP", doc->ActPage->GroupX);
		elem.setAttribute("YP", doc->ActPage->GroupY);
		elem.setAttribute("W", doc->ActPage->GroupW);
		elem.setAttribute("H", doc->ActPage->GroupH);
		}
	else
		{
		if (item->Rot == 0)
			{
			elem.setAttribute("XP", item->Xpos);
			elem.setAttribute("YP", item->Ypos);
			elem.setAttribute("W", item->Width);
			elem.setAttribute("H", item->Height);
			}
		else
			{
			QPainter p;
			p.begin(doc->ActPage);
			p.translate(static_cast<int>(item->Xpos), static_cast<int>(item->Ypos));
			p.rotate(item->Rot);
			QRect apr = QRegion(p.xForm(QRect(0, 0, static_cast<int>(item->Width), static_cast<int>(QMAX(item->Height, 1))))).boundingRect();
			p.end();
			elem.setAttribute("XP", apr.x());
			elem.setAttribute("YP", apr.y());
			elem.setAttribute("W", apr.width());
			elem.setAttribute("H", apr.height());
			}
		}
	elem.setAttribute("COUNT", Selitems->count());
	elem.setAttribute("Version", "1.1.2");
	for (uint co=0; co<Selitems->count(); ++co)
		{
		QString CurDirP = QDir::currentDirPath();
		QDir::setCurrent(QString(getenv("HOME")));
		item = doc->ActPage->Items.at(ELL[co]);
		QDomElement ob=docu.createElement("ITEM");
		ob.setAttribute("PTYPE",item->PType);
		ob.setAttribute("XPOS",item->Xpos);
		ob.setAttribute("YPOS",item->Ypos);
		ob.setAttribute("WIDTH",item->Width);
		ob.setAttribute("HEIGHT",item->Height);
		ob.setAttribute("RADRECT",item->RadRect);
		ob.setAttribute("FRTYPE", item->FrameType);
		if(item->ClipEdited)
			ob.setAttribute("CLIPEDIT",1);
		else
			ob.setAttribute("CLIPEDIT",0);
		ob.setAttribute("PWIDTH",item->Pwidth);
		ob.setAttribute("PCOLOR",item->Pcolor);
		ob.setAttribute("PCOLOR2",item->Pcolor2);
		ob.setAttribute("TXTFILL",item->TxtFill);
		ob.setAttribute("TXTSTROKE",item->TxtStroke);
		ob.setAttribute("TXTSTRSH",item->ShTxtStroke);
		ob.setAttribute("TXTFILLSH",item->ShTxtFill);
		ob.setAttribute("TXTSCALE",item->TxtScale);
		ob.setAttribute("TXTSTYLE",item->TxTStyle);
		ob.setAttribute("NAMEDLST",item->NamedLStyle);
		ob.setAttribute("SHADE",item->Shade);
		ob.setAttribute("SHADE2",item->Shade2);
		ob.setAttribute("GRCOLOR",item->GrColor);
		ob.setAttribute("GRCOLOR2",item->GrColor2);
		ob.setAttribute("GRSHADE",item->GrShade);
		ob.setAttribute("GRSHADE2",item->GrShade2);
		ob.setAttribute("GRTYP",item->GrType);
		ob.setAttribute("ROT",item->Rot);
		ob.setAttribute("PLINEART",item->PLineArt);
		ob.setAttribute("PLINEEND", item->PLineEnd);
		ob.setAttribute("PLINEJOIN", item->PLineJoin);
		ob.setAttribute("LINESP",item->LineSp);
		ob.setAttribute("EXTRAV",item->ExtraV);
		ob.setAttribute("LOCALSCX",item->LocalScX);
		ob.setAttribute("LOCALSCY",item->LocalScY);
		ob.setAttribute("LOCALX",item->LocalX);
		ob.setAttribute("LOCALY",item->LocalY);
		if(item->PicArt)
			ob.setAttribute("PICART",1);
		else
			ob.setAttribute("PICART",0);
		if(item->PoShow)
			ob.setAttribute("PTLSHOW",1);
		else
			ob.setAttribute("PTLSHOW",0);
		ob.setAttribute("BASEOF", item->BaseOffs);
		ob.setAttribute("FLIPPEDH",item->flippedH);
		ob.setAttribute("FLIPPEDV",item->flippedV);
		ob.setAttribute("BBOXX",item->BBoxX);
		ob.setAttribute("BBOXH",item->BBoxH);
		if(item->ScaleType)
			ob.setAttribute("SCALETYPE", 1);
		else
			ob.setAttribute("SCALETYPE", 0);
		if(item->AspectRatio)
			ob.setAttribute("RATIO", 1);
		else
			ob.setAttribute("RATIO", 0);
		if(item->isPrintable)
			ob.setAttribute("PRINTABLE",1);
		else
			ob.setAttribute("PRINTABLE",0);
		if(item->isAnnotation)
			{
			ob.setAttribute("ANNOTATION",1);
			ob.setAttribute("ANTYPE", item->AnType);
			ob.setAttribute("ANACTION", item->AnAction);
			ob.setAttribute("ANEACT", item->An_E_act);
			ob.setAttribute("ANXACT", item->An_X_act);
			ob.setAttribute("ANDACT", item->An_D_act);
			ob.setAttribute("ANFOACT", item->An_Fo_act);
			ob.setAttribute("ANBLACT", item->An_Bl_act);
			ob.setAttribute("ANKACT", item->An_K_act);
			ob.setAttribute("ANFACT", item->An_F_act);
			ob.setAttribute("ANVACT", item->An_V_act);
			ob.setAttribute("ANCACT", item->An_C_act);
			if (item->AnActType == 8)
				ob.setAttribute("ANEXTERN", item->An_Extern);
			else
				ob.setAttribute("ANEXTERN", Path2Relative(item->An_Extern));
			ob.setAttribute("ANZIEL", item->AnZiel);
			ob.setAttribute("ANACTYP", item->AnActType);
			ob.setAttribute("ANTOOLTIP", item->AnToolTip);
			ob.setAttribute("ANBWID", item->AnBwid);
			ob.setAttribute("ANBSTY", item->AnBsty);
			ob.setAttribute("ANFEED", item->AnFeed);
			ob.setAttribute("ANFLAG", item->AnFlag);
			ob.setAttribute("ANFONT", item->AnFont);
			ob.setAttribute("ANFORMAT", item->AnFormat);
			ob.setAttribute("ANROLL", item->AnRollOver);
			ob.setAttribute("ANDOWN", item->AnDown);
			ob.setAttribute("ANVIS", item->AnVis);
			ob.setAttribute("ANMC", item->AnMaxChar);
			ob.setAttribute("ANCHK", item->AnIsChk);
			ob.setAttribute("ANAA", item->AnAAact);
			ob.setAttribute("ANCHKS", item->AnChkStil);
			ob.setAttribute("ANBCOL", item->AnBColor);
			ob.setAttribute("ANHTML", item->AnHTML);
			ob.setAttribute("ANICON", item->AnUseIcons);
			ob.setAttribute("ANPLACE", item->AnIPlace);
			ob.setAttribute("ANSCALE", item->AnScaleW);
			}
		else
			ob.setAttribute("ANNOTATION",0);
		if (!item->AutoName)
			ob.setAttribute("ANNAME", item->AnName);
		else
			ob.setAttribute("ANNAME", "");
		if(item->Textflow)
			ob.setAttribute("TEXTFLOW",1);
		else
			ob.setAttribute("TEXTFLOW",0);
		if(item->Textflow2)
			ob.setAttribute("TEXTFLOW2",1);
		else
			ob.setAttribute("TEXTFLOW2",0);
		if(item->isAutoText)
			ob.setAttribute("AUTOTEXT",1);
		else
			ob.setAttribute("AUTOTEXT",0);
		ob.setAttribute("EXTRA",item->Extra);
		ob.setAttribute("TEXTRA",item->TExtra);
		ob.setAttribute("BEXTRA",item->BExtra);
		ob.setAttribute("REXTRA",item->RExtra);
		ob.setAttribute("ALIGN",item->Ausrich);
		ob.setAttribute("IFONT",item->IFont);
		ob.setAttribute("ISIZE",item->ISize / 10.0);
		if (item->Pfile != "")
			ob.setAttribute("PFILE",Path2Relative(item->Pfile));
		else
			ob.setAttribute("PFILE","");
		if (item->Pfile2 != "")
			ob.setAttribute("PFILE2",Path2Relative(item->Pfile2));
		else
			ob.setAttribute("PFILE2","");
		if (item->Pfile3 != "")
			ob.setAttribute("PFILE3",Path2Relative(item->Pfile3));
		else
			ob.setAttribute("PFILE3","");
		QDir::setCurrent(CurDirP);
		ob.setAttribute("PRFILE",item->IProfile);
		ob.setAttribute("EPROF", item->EmProfile);
		ob.setAttribute("IRENDER",item->IRender);
		if(item->UseEmbedded)
			ob.setAttribute("EMBEDDED",1);
		else
			ob.setAttribute("EMBEDDED",0);
		if(item->Locked)
			ob.setAttribute("LOCK", 1);
		else
			ob.setAttribute("LOCK", 0);
		if(item->Reverse)
			ob.setAttribute("REVERS", 1);
		else
			ob.setAttribute("REVERS", 0);
		if(item->InvPict)
			ob.setAttribute("INVERS", 1);
		else
			ob.setAttribute("INVERS", 0);
		ob.setAttribute("TransValue", item->Transparency);
		ob.setAttribute("TransValueS", item->TranspStroke);
		for(uint k=0;k<item->Ptext.count();++k)
			{
			QDomElement it=docu.createElement("ITEXT");
			ts = item->Ptext.at(k)->csize / 10.0;
			tf = item->Ptext.at(k)->cfont;
			tc = item->Ptext.at(k)->ccolor;
			te = item->Ptext.at(k)->cextra;
			tsh = item->Ptext.at(k)->cshade;
			tst = item->Ptext.at(k)->cstyle;
			tsb = item->Ptext.at(k)->cab;
			tcs = item->Ptext.at(k)->cstroke;
			tshs = item->Ptext.at(k)->cshade2;
			tsc = item->Ptext.at(k)->cscale;
			if (item->Ptext.at(k)->ch == QChar(13))
				text = QChar(5);
			else
				text = item->Ptext.at(k)->ch;
			k++;
			if (k == item->Ptext.count())
				{
				it.setAttribute("CH",text);
				it.setAttribute("CSIZE",ts);
				it.setAttribute("CFONT",tf);
				it.setAttribute("CCOLOR",tc);
				it.setAttribute("CEXTRA",te);
				it.setAttribute("CSHADE",tsh);
				it.setAttribute("CSTYLE",tst);
				it.setAttribute("CAB",tsb);
				it.setAttribute("CSTROKE",tcs);
				it.setAttribute("CSHADE2",tshs);
				it.setAttribute("CSCALE",tsc);
				ob.appendChild(it);
				break;
				}
			ts2 = item->Ptext.at(k)->csize / 10.0;
			tf2 = item->Ptext.at(k)->cfont;
			tc2 = item->Ptext.at(k)->ccolor;
			te2 = item->Ptext.at(k)->cextra;
			tsh2 = item->Ptext.at(k)->cshade;
			tst2 = item->Ptext.at(k)->cstyle;
			tsb2 = item->Ptext.at(k)->cab;
			tcs2 = item->Ptext.at(k)->cstroke;
			tshs2 = item->Ptext.at(k)->cshade2;
			tsc2 = item->Ptext.at(k)->cscale;
			while ((ts2 == ts)
							&& (tsb2 == tsb)
							&& (tf2 == tf)
							&& (tc2 == tc)
							&& (te2 == te)
							&& (tsh2 == tsh)
							&& (tshs2 == tshs)
							&& (tsc2 == tsc)
							&& (tcs2 == tcs)
							&& (tst2 == tst))
				{
				if (item->Ptext.at(k)->ch == QChar(13))
					text += QChar(5);
				else
					text += item->Ptext.at(k)->ch;
				k++;
				if (k == item->Ptext.count())
					break;
				ts2 = item->Ptext.at(k)->csize / 10.0;
				tf2 = item->Ptext.at(k)->cfont;
				tc2 = item->Ptext.at(k)->ccolor;
				te2 = item->Ptext.at(k)->cextra;
				tsh2 = item->Ptext.at(k)->cshade;
				tst2 = item->Ptext.at(k)->cstyle;
				tsb2 = item->Ptext.at(k)->cab;
				tcs2 = item->Ptext.at(k)->cstroke;
				tshs2 = item->Ptext.at(k)->cshade2;
				tsc2 = item->Ptext.at(k)->cscale;
				}
			it.setAttribute("CH",text);
			it.setAttribute("CSIZE",ts);
			it.setAttribute("CFONT",tf);
			it.setAttribute("CCOLOR",tc);
			it.setAttribute("CEXTRA",te);
			it.setAttribute("CSHADE",tsh);
			it.setAttribute("CSTYLE",tst);
			it.setAttribute("CAB",tsb);
			it.setAttribute("CSTROKE",tcs);
			it.setAttribute("CSHADE2",tshs);
			it.setAttribute("CSCALE",tsc);
			k--;
			ob.appendChild(it);
			}
		ob.setAttribute("NUMTEXT",item->Ptext.count());
		QString txnu = "";
		for(uint kt=0;kt<item->Ptext.count();++kt)
			{
			txnu += tmp.setNum(item->Ptext.at(kt)->xp) + " " + tmpy.setNum(item->Ptext.at(kt)->yp) + " ";
			}
		ob.setAttribute("TEXTCOOR", txnu);
		ob.setAttribute("NUMGROUP",static_cast<int>(item->Groups.count()));
		QString glp = "";
		QValueStack<int>::Iterator nx;
		for (nx = item->Groups.begin(); nx != item->Groups.end(); ++nx)
			{
			glp += tmp.setNum((*nx)) + " ";
			}
		ob.setAttribute("GROUPS", glp);
		ob.setAttribute("NUMPO",item->PoLine.size());
		QString polp = "";
		for (uint nxx=0; nxx<item->PoLine.size(); ++nxx)
			{
			item->PoLine.point(nxx, &xf, &yf);
			polp += tmp.setNum(xf) + " " + tmpy.setNum(yf) + " ";
			}
		ob.setAttribute("POCOOR", polp);
		ob.setAttribute("BACKITEM", -1);
		ob.setAttribute("BACKPAGE", -1);
		ob.setAttribute("NEXTITEM", -1);
		ob.setAttribute("NEXTPAGE", -1);
		ob.setAttribute("LANGUAGE", item->Language);
		elem.appendChild(ob);
		}
	QMap<QString,QFont>::Iterator itf;
	for (itf = doc->UsedFonts.begin(); itf != doc->UsedFonts.end(); ++itf)
		{
		QDomElement fn=docu.createElement("FONT");
		fn.setAttribute("NAME",itf.key());
		elem.appendChild(fn);
		}
	CListe::Iterator itc;
	for (itc = doc->PageColors.begin(); itc != doc->PageColors.end(); ++itc)
		{
		QDomElement co=docu.createElement("COLOR");
		co.setAttribute("NAME",itc.key());
		co.setAttribute("RGB",doc->PageColors[itc.key()].getRGBColor().name());
		co.setAttribute("CMYK",doc->PageColors[itc.key()].name());
		elem.appendChild(co);
		}
	if (doc->Vorlagen.count() > 5)
		{
		for (uint ff = 5; ff < doc->Vorlagen.count(); ++ff)
			{
			QDomElement fo=docu.createElement("STYLE");
			fo.setAttribute("NAME",doc->Vorlagen[ff].Vname);
			fo.setAttribute("ALIGN",doc->Vorlagen[ff].Ausri);
			fo.setAttribute("LINESP",doc->Vorlagen[ff].LineSpa);
			fo.setAttribute("INDENT",doc->Vorlagen[ff].Indent);
			fo.setAttribute("FIRST",doc->Vorlagen[ff].First);
			fo.setAttribute("VOR",doc->Vorlagen[ff].Avor);
			fo.setAttribute("NACH",doc->Vorlagen[ff].Anach);
			fo.setAttribute("FONT",doc->Vorlagen[ff].Font);
			fo.setAttribute("FONTSIZE",doc->Vorlagen[ff].FontSize / 10.0);
			elem.appendChild(fo);
			}
		}
	QMap<QString,multiLine>::Iterator itMU;
	for (itMU = doc->MLineStyles.begin(); itMU != doc->MLineStyles.end(); ++itMU)
		{
		QDomElement MuL=docu.createElement("MultiLine");
		MuL.setAttribute("Name",itMU.key());
		multiLine ml = itMU.data();
		multiLine::iterator itMU2;
		for (itMU2 = ml.begin(); itMU2 != ml.end(); ++itMU2)
			{
			QDomElement SuL=docu.createElement("SubLine");
			SuL.setAttribute("Color", (*itMU2).Color);
			SuL.setAttribute("Shade", (*itMU2).Shade);
			SuL.setAttribute("Dash", (*itMU2).Dash);
			SuL.setAttribute("LineEnd", (*itMU2).LineEnd);
			SuL.setAttribute("LineJoin", (*itMU2).LineJoin);
			SuL.setAttribute("Width", (*itMU2).Width);
			MuL.appendChild(SuL);
			}
		elem.appendChild(MuL);
		}
	return docu.toString().utf8();
}

void ScriXmlDoc::WritePages(ScribusView *view, QDomDocument docu, QDomElement dc, QProgressBar *dia2, uint maxC)
{
int tsh, tsh2, tst, tst2, tsb, tsb2, tshs, tshs2, tsc, tsc2;
QString text, tf, tf2, tc, tc2, tcs, tcs2, tmp, tmpy, Ndir;
double ts, ts2, te, te2, xf, yf;
uint ObCount = maxC;
Page *page;
PageItem *item;
for(uint i=0;i<view->Pages.count();++i)
{
	ObCount++;
	if (dia2 != 0)
		dia2->setProgress(ObCount);
	page = view->Pages.at(i);
	QDomElement pg=docu.createElement("PAGE");
	pg.setAttribute("NUM",page->PageNr);
	pg.setAttribute("NAM",page->PageNam);
	pg.setAttribute("MNAM",page->MPageNam);
	if (page->LeftPg)
		pg.setAttribute("LEFT", 1);
	else
		pg.setAttribute("LEFT", 0);
	pg.setAttribute("NumVGuides", static_cast<int>(page->YGuides.count()));
	QString Vgui = "";
	for (uint vgu = 0; vgu < page->YGuides.count(); ++vgu)
		{
		Vgui += tmp.setNum(page->YGuides[vgu]) + " ";
		}
	pg.setAttribute("VerticalGuides", Vgui);
	pg.setAttribute("NumHGuides", static_cast<int>(page->XGuides.count()));
	QString Hgui = "";
	for (uint hgu = 0; hgu < page->XGuides.count(); ++hgu)
		{
		Hgui += tmp.setNum(page->XGuides[hgu]) + " ";
		}
	pg.setAttribute("HorizontalGuides", Hgui);
	for(uint j=0;j<page->Items.count();++j)
	{
		item = page->Items.at(j);
		QDomElement ob=docu.createElement("PAGEOBJECT");
		ob.setAttribute("PTYPE",item->PType);
		ob.setAttribute("XPOS",item->Xpos);
		ob.setAttribute("YPOS",item->Ypos);
		ob.setAttribute("WIDTH",item->Width);
		ob.setAttribute("HEIGHT",item->Height);
		ob.setAttribute("RADRECT",item->RadRect);
		ob.setAttribute("FRTYPE", item->FrameType);
		if(item->ClipEdited)
			ob.setAttribute("CLIPEDIT",1);
		else
			ob.setAttribute("CLIPEDIT",0);
		ob.setAttribute("PWIDTH",item->Pwidth);
		ob.setAttribute("PCOLOR",item->Pcolor);
		ob.setAttribute("PCOLOR2",item->Pcolor2);
		ob.setAttribute("TXTFILL",item->TxtFill);
		ob.setAttribute("TXTSTROKE",item->TxtStroke);
		ob.setAttribute("TXTSTRSH",item->ShTxtStroke);
		ob.setAttribute("TXTFILLSH",item->ShTxtFill);
		ob.setAttribute("TXTSCALE",item->TxtScale);
		ob.setAttribute("TXTSTYLE",item->TxTStyle);
		ob.setAttribute("NAMEDLST",item->NamedLStyle);
		ob.setAttribute("SHADE",item->Shade);
		ob.setAttribute("SHADE2",item->Shade2);
		ob.setAttribute("GRCOLOR",item->GrColor);
		ob.setAttribute("GRCOLOR2",item->GrColor2);
		ob.setAttribute("GRSHADE",item->GrShade);
		ob.setAttribute("GRSHADE2",item->GrShade2);
		ob.setAttribute("GRTYP",item->GrType);
		ob.setAttribute("ROT",item->Rot);
		ob.setAttribute("PLINEART",item->PLineArt);
		ob.setAttribute("PLINEEND", item->PLineEnd);
		ob.setAttribute("PLINEJOIN", item->PLineJoin);
		ob.setAttribute("LINESP",item->LineSp);
		ob.setAttribute("EXTRAV",item->ExtraV);
		ob.setAttribute("LOCALSCX",item->LocalScX);
		ob.setAttribute("LOCALSCY",item->LocalScY);
		ob.setAttribute("LOCALX",item->LocalX);
		ob.setAttribute("LOCALY",item->LocalY);
		if(item->PicArt)
			ob.setAttribute("PICART",1);
		else
			ob.setAttribute("PICART",0);
		if(item->PoShow)
			ob.setAttribute("PTLSHOW",1);
		else
			ob.setAttribute("PTLSHOW",0);
		ob.setAttribute("BASEOF", item->BaseOffs);
		ob.setAttribute("FLIPPEDH",item->flippedH);
		ob.setAttribute("FLIPPEDV",item->flippedV);
		ob.setAttribute("BBOXX",item->BBoxX);
		ob.setAttribute("BBOXH",item->BBoxH);
		ob.setAttribute("ALIGN",item->Ausrich);
		ob.setAttribute("IFONT",item->IFont);
		ob.setAttribute("ISIZE",item->ISize / 10.0 );
		if(item->ScaleType)
			ob.setAttribute("SCALETYPE", 1);
		else
			ob.setAttribute("SCALETYPE", 0);
		if(item->AspectRatio)
			ob.setAttribute("RATIO", 1);
		else
			ob.setAttribute("RATIO", 0);
		if(item->isPrintable)
			ob.setAttribute("PRINTABLE",1);
		else
			ob.setAttribute("PRINTABLE",0);
		if(item->isBookmark)
			ob.setAttribute("BOOKMARK",1);
		else
			ob.setAttribute("BOOKMARK",0);
		ob.setAttribute("BookNr", item->BMnr);
		if(item->isAnnotation)
			{
			ob.setAttribute("ANNOTATION",1);
			ob.setAttribute("ANTYPE", item->AnType);
			ob.setAttribute("ANACTION", item->AnAction);
			ob.setAttribute("ANEACT", item->An_E_act);
			ob.setAttribute("ANXACT", item->An_X_act);
			ob.setAttribute("ANDACT", item->An_D_act);
			ob.setAttribute("ANFOACT", item->An_Fo_act);
			ob.setAttribute("ANBLACT", item->An_Bl_act);
			ob.setAttribute("ANKACT", item->An_K_act);
			ob.setAttribute("ANFACT", item->An_F_act);
			ob.setAttribute("ANVACT", item->An_V_act);
			ob.setAttribute("ANCACT", item->An_C_act);
			if (item->AnActType == 8)
				ob.setAttribute("ANEXTERN", item->An_Extern);
			else
				ob.setAttribute("ANEXTERN", Path2Relative(item->An_Extern));
			ob.setAttribute("ANZIEL", item->AnZiel);
			ob.setAttribute("ANACTYP", item->AnActType);
			ob.setAttribute("ANTOOLTIP", item->AnToolTip);
			ob.setAttribute("ANBWID", item->AnBwid);
			ob.setAttribute("ANBSTY", item->AnBsty);
			ob.setAttribute("ANFEED", item->AnFeed);
			ob.setAttribute("ANFLAG", item->AnFlag);
			ob.setAttribute("ANFONT", item->AnFont);
			ob.setAttribute("ANFORMAT", item->AnFormat);
			ob.setAttribute("ANROLL", item->AnRollOver);
			ob.setAttribute("ANDOWN", item->AnDown);
			ob.setAttribute("ANVIS", item->AnVis);
			ob.setAttribute("ANMC", item->AnMaxChar);
			ob.setAttribute("ANCHK", item->AnIsChk);
			ob.setAttribute("ANAA", item->AnAAact);
			ob.setAttribute("ANCHKS", item->AnChkStil);
			ob.setAttribute("ANBCOL", item->AnBColor);
			ob.setAttribute("ANHTML", item->AnHTML);
			ob.setAttribute("ANICON", item->AnUseIcons);
			ob.setAttribute("ANPLACE", item->AnIPlace);
			ob.setAttribute("ANSCALE", item->AnScaleW);
			}
		else
			ob.setAttribute("ANNOTATION",0);
		if (!item->AutoName)
			ob.setAttribute("ANNAME", item->AnName);
		else
			ob.setAttribute("ANNAME", "");
		if(item->Textflow)
			ob.setAttribute("TEXTFLOW",1);
		else
			ob.setAttribute("TEXTFLOW",0);
		if(item->Textflow2)
			ob.setAttribute("TEXTFLOW2",1);
		else
			ob.setAttribute("TEXTFLOW2",0);
		if(item->isAutoText)
			ob.setAttribute("AUTOTEXT",1);
		else
			ob.setAttribute("AUTOTEXT",0);
		ob.setAttribute("EXTRA",item->Extra);
		ob.setAttribute("TEXTRA",item->TExtra);
		ob.setAttribute("BEXTRA",item->BExtra);
		ob.setAttribute("REXTRA",item->RExtra);
		if (((item->PType == 2) || (item->PType == 4)) && (item->Pfile != ""))
			ob.setAttribute("PFILE",Path2Relative(item->Pfile));
		else
			ob.setAttribute("PFILE","");
		if (item->Pfile2 != "")
			ob.setAttribute("PFILE2",Path2Relative(item->Pfile2));
		else
			ob.setAttribute("PFILE2","");
		if (item->Pfile3 != "")
			ob.setAttribute("PFILE3",Path2Relative(item->Pfile3));
		else
			ob.setAttribute("PFILE3","");
		ob.setAttribute("PRFILE",item->IProfile);
		ob.setAttribute("EPROF", item->EmProfile);
		ob.setAttribute("IRENDER",item->IRender);
		if(item->UseEmbedded)
			ob.setAttribute("EMBEDDED",1);
		else
			ob.setAttribute("EMBEDDED",0);
		if(item->Locked)
			ob.setAttribute("LOCK", 1);
		else
			ob.setAttribute("LOCK", 0);
		if(item->Reverse)
			ob.setAttribute("REVERS", 1);
		else
			ob.setAttribute("REVERS", 0);
		if(item->InvPict)
			ob.setAttribute("INVERS", 1);
		else
			ob.setAttribute("INVERS", 0);
		ob.setAttribute("TransValue", item->Transparency);
		ob.setAttribute("TransValueS", item->TranspStroke);
		for(uint k=0;k<item->Ptext.count();++k)
			{
			QDomElement it=docu.createElement("ITEXT");
			ts = item->Ptext.at(k)->csize / 10.0;
			tf = item->Ptext.at(k)->cfont;
			tc = item->Ptext.at(k)->ccolor;
			te = item->Ptext.at(k)->cextra;
			tsh = item->Ptext.at(k)->cshade;
			tst = item->Ptext.at(k)->cstyle;
			tsb = item->Ptext.at(k)->cab;
			tcs = item->Ptext.at(k)->cstroke;
			tshs = item->Ptext.at(k)->cshade2;
			tsc = item->Ptext.at(k)->cscale;
			if (item->Ptext.at(k)->ch == QChar(13))
				text = QChar(5);
			else
				text = item->Ptext.at(k)->ch;
			k++;
			if (k == item->Ptext.count())
				{
				it.setAttribute("CH",text);
				it.setAttribute("CSIZE",ts);
				it.setAttribute("CFONT",tf);
				it.setAttribute("CCOLOR",tc);
				it.setAttribute("CEXTRA",te);
				it.setAttribute("CSHADE",tsh);
				it.setAttribute("CSTYLE",tst);
				it.setAttribute("CAB",tsb);
				it.setAttribute("CSTROKE",tcs);
				it.setAttribute("CSHADE2",tshs);
				it.setAttribute("CSCALE",tsc);
				ob.appendChild(it);
				break;
				}
			ts2 = item->Ptext.at(k)->csize / 10.0;
			tf2 = item->Ptext.at(k)->cfont;
			tc2 = item->Ptext.at(k)->ccolor;
			te2 = item->Ptext.at(k)->cextra;
			tsh2 = item->Ptext.at(k)->cshade;
			tst2 = item->Ptext.at(k)->cstyle;
			tsb2 = item->Ptext.at(k)->cab;
			tcs2 = item->Ptext.at(k)->cstroke;
			tshs2 = item->Ptext.at(k)->cshade2;
			tsc2 = item->Ptext.at(k)->cscale;
			while ((ts2 == ts)
							&& (tsb2 == tsb)
							&& (tf2 == tf)
							&& (tc2 == tc)
							&& (te2 == te)
							&& (tsh2 == tsh)
							&& (tshs2 == tshs)
							&& (tsc2 == tsc)
							&& (tcs2 == tcs)
							&& (tst2 == tst))
				{
				if (item->Ptext.at(k)->ch == QChar(13))
					text += QChar(5);
				else
					text += item->Ptext.at(k)->ch;
				k++;
				if (k == item->Ptext.count())
					break;
				ts2 = item->Ptext.at(k)->csize / 10.0;
				tf2 = item->Ptext.at(k)->cfont;
				tc2 = item->Ptext.at(k)->ccolor;
				te2 = item->Ptext.at(k)->cextra;
				tsh2 = item->Ptext.at(k)->cshade;
				tst2 = item->Ptext.at(k)->cstyle;
				tsb2 = item->Ptext.at(k)->cab;
				tcs2 = item->Ptext.at(k)->cstroke;
				tshs2 = item->Ptext.at(k)->cshade2;
				tsc2 = item->Ptext.at(k)->cscale;
				}
			it.setAttribute("CH",text);
			it.setAttribute("CSIZE",ts);
			it.setAttribute("CFONT",tf);
			it.setAttribute("CCOLOR",tc);
			it.setAttribute("CEXTRA",te);
			it.setAttribute("CSHADE",tsh);
			it.setAttribute("CSTYLE",tst);
			it.setAttribute("CAB",tsb);
			it.setAttribute("CSTROKE",tcs);
			it.setAttribute("CSHADE2",tshs);
			it.setAttribute("CSCALE",tsc);
			k--;
			ob.appendChild(it);
			}
		ob.setAttribute("NUMGROUP", static_cast<int>(item->Groups.count()));
		QString glp = "";
		QValueStack<int>::Iterator nx;
		for (nx = item->Groups.begin(); nx != item->Groups.end(); ++nx)
			{
			glp += tmp.setNum((*nx)) + " ";
			}
		ob.setAttribute("GROUPS", glp);
		ob.setAttribute("NUMPO",item->PoLine.size());
		QString polp = "";
		for (uint nxx=0; nxx<item->PoLine.size(); ++nxx)
			{
			item->PoLine.point(nxx, &xf, &yf);
			polp += tmp.setNum(xf) + " " + tmpy.setNum(yf) + " ";
			}
		ob.setAttribute("POCOOR", polp);
		if (item->BackBox != 0)
			{
			ob.setAttribute("BACKITEM", item->BackBox->ItemNr);
			ob.setAttribute("BACKPAGE", item->BackBox->OwnPage->PageNr);
			}
		else
			{
			ob.setAttribute("BACKITEM", -1);
			ob.setAttribute("BACKPAGE", -1);
			}
		if (item->NextBox != 0)
			{
			ob.setAttribute("NEXTITEM", item->NextBox->ItemNr);
			ob.setAttribute("NEXTPAGE", item->NextBox->OwnPage->PageNr);
			}
		else
			{
			ob.setAttribute("NEXTITEM", -1);
			ob.setAttribute("NEXTPAGE", -1);
			}
		ob.setAttribute("LAYER", item->LayerNr);
		ob.setAttribute("LANGUAGE", item->Language);
		pg.appendChild(ob);
	}
	dc.appendChild(pg);
}
}

bool ScriXmlDoc::WriteDoc(QString fileName, ScribusDoc *doc, ScribusView *view, QProgressBar *dia2)
{
QString text, tf, tf2, tc, tc2;
QDomDocument docu("scribus");
QString st="<SCRIBUSUTF8></SCRIBUSUTF8>";
docu.setContent(st);
QDomElement elem=docu.documentElement();
elem.setAttribute("Version", "1.1.2");
QDomElement dc=docu.createElement("DOCUMENT");
dc.setAttribute("ANZPAGES",doc->PageC);
dc.setAttribute("PAGEWITH",doc->PageB);
dc.setAttribute("PAGEHEIGHT",doc->PageH);
dc.setAttribute("BORDERLEFT",doc->PageM.Left);
dc.setAttribute("BORDERRIGHT",doc->PageM.Right);
dc.setAttribute("BORDERTOP",doc->PageM.Top);
dc.setAttribute("BORDERBOTTOM",doc->PageM.Bottom);
dc.setAttribute("ORIENTATION",doc->PageOri);
dc.setAttribute("FIRSTNUM",doc->FirstPnum);
if(doc->PageFP)
	dc.setAttribute("BOOK",1);
if(doc->FirstPageLeft)
	dc.setAttribute("FIRSTLEFT",1);
if(doc->PageAT)
	dc.setAttribute("AUTOTEXT",1);
dc.setAttribute("AUTOSPALTEN",doc->PageSp);
dc.setAttribute("ABSTSPALTEN",doc->PageSpa);
dc.setAttribute("UNITS",doc->Einheit);
dc.setAttribute("DFONT",doc->Dfont);
dc.setAttribute("DSIZE",doc->Dsize / 10.0);
dc.setAttribute("AUTHOR",doc->DocAutor);
dc.setAttribute("COMMENTS",doc->DocComments);
dc.setAttribute("KEYWORDS",doc->DocKeyWords);
dc.setAttribute("TITLE",doc->DocTitel);
dc.setAttribute("VHOCH",doc->VHoch);
dc.setAttribute("VHOCHSC",doc->VHochSc);
dc.setAttribute("VTIEF",doc->VTief);
dc.setAttribute("VTIEFSC",doc->VTiefSc);
dc.setAttribute("VKAPIT",doc->VKapit);
dc.setAttribute("GROUPC",doc->GroupCounter);
dc.setAttribute("HCMS", static_cast<int>(doc->HasCMS));
dc.setAttribute("DPSo", static_cast<int>(doc->CMSSettings.SoftProofOn));
dc.setAttribute("DPuse", static_cast<int>(doc->CMSSettings.CMSinUse));
dc.setAttribute("DPgam", static_cast<int>(doc->CMSSettings.GamutCheck));
dc.setAttribute("DPbla", static_cast<int>(doc->CMSSettings.BlackPoint));
dc.setAttribute("DPMo",doc->CMSSettings.DefaultMonitorProfile);
dc.setAttribute("DPPr",doc->CMSSettings.DefaultPrinterProfile);
dc.setAttribute("DPIn",doc->CMSSettings.DefaultInputProfile);
dc.setAttribute("DPIn2",doc->CMSSettings.DefaultInputProfile2);
dc.setAttribute("DIPr",doc->CMSSettings.DefaultIntentPrinter);
dc.setAttribute("DIMo",doc->CMSSettings.DefaultIntentMonitor);
dc.setAttribute("DIMo2",doc->CMSSettings.DefaultIntentMonitor2);
dc.setAttribute("ALAYER", doc->ActiveLayer);
dc.setAttribute("LANGUAGE", doc->Language);
dc.setAttribute("MINWORDLEN", doc->MinWordLen);
dc.setAttribute("AUTOMATIC", static_cast<int>(doc->Automatic));
dc.setAttribute("AUTOCHECK", static_cast<int>(doc->AutoCheck));
dc.setAttribute("GUIDELOCK", static_cast<int>(doc->GuideLock));
QMap<QString,multiLine>::Iterator itMU;
for (itMU = doc->MLineStyles.begin(); itMU != doc->MLineStyles.end(); ++itMU)
	{
	QDomElement MuL=docu.createElement("MultiLine");
	MuL.setAttribute("Name",itMU.key());
	multiLine ml = itMU.data();
	multiLine::iterator itMU2;
	for (itMU2 = ml.begin(); itMU2 != ml.end(); ++itMU2)
		{
		QDomElement SuL=docu.createElement("SubLine");
		SuL.setAttribute("Color", (*itMU2).Color);
		SuL.setAttribute("Shade", (*itMU2).Shade);
		SuL.setAttribute("Dash", (*itMU2).Dash);
		SuL.setAttribute("LineEnd", (*itMU2).LineEnd);
		SuL.setAttribute("LineJoin", (*itMU2).LineJoin);
		SuL.setAttribute("Width", (*itMU2).Width);
		MuL.appendChild(SuL);
		}
	dc.appendChild(MuL);
	}
QMap<QString,QString>::Iterator itja;
for (itja = doc->JavaScripts.begin(); itja != doc->JavaScripts.end(); ++itja)
	{
	QDomElement jav=docu.createElement("JAVA");
	jav.setAttribute("NAME",itja.key());
	jav.setAttribute("SCRIPT",itja.data());
	dc.appendChild(jav);
	}
QMap<QString,QFont>::Iterator itf;
for (itf = doc->UsedFonts.begin(); itf != doc->UsedFonts.end(); ++itf)
	{
	QDomElement fn=docu.createElement("FONT");
	fn.setAttribute("NAME",itf.key());
	dc.appendChild(fn);
	}
QValueList<ScribusDoc::BookMa>::Iterator itbm;
for (itbm = doc->BookMarks.begin(); itbm != doc->BookMarks.end(); ++itbm)
	{
	QDomElement fn=docu.createElement("Bookmark");
	fn.setAttribute("Title",(*itbm).Title);
	fn.setAttribute("Text",(*itbm).Text);
	fn.setAttribute("Aktion",(*itbm).Aktion);
	fn.setAttribute("ItemNr", (*itbm).ItemNr);
	fn.setAttribute("Seite", (*itbm).Seite);
	fn.setAttribute("Element", (*itbm).Element);
	fn.setAttribute("First", (*itbm).First);
	fn.setAttribute("Last", (*itbm).Last);
	fn.setAttribute("Prev", (*itbm).Prev);
	fn.setAttribute("Next", (*itbm).Next);
	fn.setAttribute("Parent", (*itbm).Parent);
	dc.appendChild(fn);
	}
CListe::Iterator itc;
for (itc = doc->PageColors.begin(); itc != doc->PageColors.end(); ++itc)
	{
	QDomElement co=docu.createElement("COLOR");
	co.setAttribute("NAME",itc.key());
	co.setAttribute("RGB",doc->PageColors[itc.key()].getRGBColor().name());
	co.setAttribute("CMYK",doc->PageColors[itc.key()].name());
	dc.appendChild(co);
	}
if (doc->Vorlagen.count() > 5)
	{
	for (uint ff = 5; ff < doc->Vorlagen.count(); ++ff)
		{
		QDomElement fo=docu.createElement("STYLE");
		fo.setAttribute("NAME",doc->Vorlagen[ff].Vname);
		fo.setAttribute("ALIGN",doc->Vorlagen[ff].Ausri);
		fo.setAttribute("LINESP",doc->Vorlagen[ff].LineSpa);
		fo.setAttribute("INDENT",doc->Vorlagen[ff].Indent);
		fo.setAttribute("FIRST",doc->Vorlagen[ff].First);
		fo.setAttribute("VOR",doc->Vorlagen[ff].Avor);
		fo.setAttribute("NACH",doc->Vorlagen[ff].Anach);
		fo.setAttribute("FONT",doc->Vorlagen[ff].Font);
		fo.setAttribute("FONTSIZE",doc->Vorlagen[ff].FontSize / 10.0);
		dc.appendChild(fo);
		}
	}
for (uint lay = 0; lay < doc->Layers.count(); ++lay)
	{
	QDomElement la = docu.createElement("LAYERS");
	la.setAttribute("NUMMER",doc->Layers[lay].LNr);
	la.setAttribute("LEVEL",doc->Layers[lay].Level);
	la.setAttribute("NAME",doc->Layers[lay].Name);
	la.setAttribute("SICHTBAR", static_cast<int>(doc->Layers[lay].Sichtbar));
	la.setAttribute("DRUCKEN", static_cast<int>(doc->Layers[lay].Drucken));
	dc.appendChild(la);
	}
QDomElement pdf = docu.createElement("PDF");
pdf.setAttribute("Thumbnails", static_cast<int>(doc->PDF_Optionen.Thumbnails));
pdf.setAttribute("Articles", static_cast<int>(doc->PDF_Optionen.Articles));
pdf.setAttribute("Bookmarks", static_cast<int>(doc->PDF_Optionen.Bookmarks));
pdf.setAttribute("Compress", static_cast<int>(doc->PDF_Optionen.Compress));
pdf.setAttribute("PresentMode", static_cast<int>(doc->PDF_Optionen.PresentMode));
pdf.setAttribute("RecalcPic", static_cast<int>(doc->PDF_Optionen.RecalcPic));
pdf.setAttribute("RGBMode", static_cast<int>(doc->PDF_Optionen.UseRGB));
pdf.setAttribute("UseProfiles", static_cast<int>(doc->PDF_Optionen.UseProfiles));
pdf.setAttribute("UseProfiles2", static_cast<int>(doc->PDF_Optionen.UseProfiles2));
pdf.setAttribute("Binding", doc->PDF_Optionen.Binding);
pdf.setAttribute("PicRes", doc->PDF_Optionen.PicRes);
pdf.setAttribute("Resolution", doc->PDF_Optionen.Resolution);
pdf.setAttribute("Version", doc->PDF_Optionen.Version);
pdf.setAttribute("Intent", doc->PDF_Optionen.Intent);
pdf.setAttribute("Intent2", doc->PDF_Optionen.Intent2);
pdf.setAttribute("SolidP", doc->PDF_Optionen.SolidProf);
pdf.setAttribute("ImageP", doc->PDF_Optionen.ImageProf);
pdf.setAttribute("PrintP", doc->PDF_Optionen.PrintProf);
pdf.setAttribute("InfoString", doc->PDF_Optionen.Info);
pdf.setAttribute("BTop", doc->PDF_Optionen.BleedTop);
pdf.setAttribute("BLeft", doc->PDF_Optionen.BleedLeft);
pdf.setAttribute("BRight", doc->PDF_Optionen.BleedRight);
pdf.setAttribute("BBottom", doc->PDF_Optionen.BleedBottom);
pdf.setAttribute("ImagePr", static_cast<int>(doc->PDF_Optionen.EmbeddedI));
pdf.setAttribute("PassOwner", doc->PDF_Optionen.PassOwner);
pdf.setAttribute("PassUser", doc->PDF_Optionen.PassUser);
pdf.setAttribute("Permissions", doc->PDF_Optionen.Permissions);
pdf.setAttribute("Encrypt", static_cast<int>(doc->PDF_Optionen.Encrypt));
for (uint pdoF = 0; pdoF < doc->PDF_Optionen.EmbedList.count(); ++pdoF)
	{
	QDomElement pdf2 = docu.createElement("Fonts");
	pdf2.setAttribute("Name", doc->PDF_Optionen.EmbedList[pdoF]);
	pdf.appendChild(pdf2);
	}
for (uint pdoE = 0; pdoE < doc->PDF_Optionen.PresentVals.count(); ++pdoE)
	{
	QDomElement pdf3 = docu.createElement("Effekte");
	pdf3.setAttribute("EffektLen", doc->PDF_Optionen.PresentVals[pdoE].EffektLen);
	pdf3.setAttribute("AnzeigeLen", doc->PDF_Optionen.PresentVals[pdoE].AnzeigeLen);
	pdf3.setAttribute("Effekt", doc->PDF_Optionen.PresentVals[pdoE].Effekt);
	pdf3.setAttribute("Dm", doc->PDF_Optionen.PresentVals[pdoE].Dm);
	pdf3.setAttribute("M", doc->PDF_Optionen.PresentVals[pdoE].M);
	pdf3.setAttribute("Di", doc->PDF_Optionen.PresentVals[pdoE].Di);
	pdf.appendChild(pdf3);
	}
dc.appendChild(pdf);
if (dia2 != 0)
	{
	dia2->setTotalSteps(view->Pages.count()+view->MasterPages.count());
	dia2->setProgress(0);
	}
WritePages(view, docu, dc, dia2, 0);
view->DocPages = view->Pages;
view->Pages = view->MasterPages;
WritePages(view, docu, dc, dia2, view->DocPages.count());
view->Pages = view->DocPages;
elem.appendChild(dc);
/**
 * changed to enable saving
 * of *.gz documents
 * 2.7.2002 C.Toepp
 * <c.toepp@gmx.de>
*/
#ifdef HAVE_LIBZ
if(fileName.right(2) == "gz")
	{
  // zipped saving
	gzFile gzDoc = gzopen(fileName.latin1(),"wb");
	if(gzDoc == NULL)
		return false;
	gzputs(gzDoc, docu.toString().utf8());
	gzclose(gzDoc);
	}
else
	{
	QFile f(fileName);
	if(!f.open(IO_WriteOnly))
		return false;
	QTextStream s(&f);
	QString wr = docu.toString().utf8();
	s.writeRawBytes(wr, wr.length());
	f.close();
	}
#else
QFile f(fileName);
if(!f.open(IO_WriteOnly))
	return false;
QTextStream s(&f);
QString wr = docu.toString().utf8();
s.writeRawBytes(wr, wr.length());
f.close();
#endif
return true;
}

void ScriXmlDoc::WritePref(preV *Vor, QString ho)
{
	QDomDocument docu("scribusrc");
	QString st="<SCRIBUSRC></SCRIBUSRC>";
	docu.setContent(st);
	QDomElement elem=docu.documentElement();
	QDomElement dc=docu.createElement("GUI");
	dc.setAttribute("STILT",Vor->GUI);
	dc.setAttribute("RAD",Vor->Wheelval);
	dc.setAttribute("APF",Vor->AppFontSize);
	dc.setAttribute("GRAB",Vor->GrabRad);
	dc.setAttribute("UNIT",Vor->Einheit);
	dc.setAttribute("SBS", Vor->PagesSbS);
	dc.setAttribute("FRV", Vor->ShFrames);
	dc.setAttribute("RCD", Vor->RecentDCount);
	dc.setAttribute("DOC", Vor->DocDir);
	dc.setAttribute("PROFILES", Vor->ProfileDir);
	dc.setAttribute("SCRIPTS", Vor->ScriptDir);
	elem.appendChild(dc);
	QDomElement dc1=docu.createElement("GRID");
	dc1.setAttribute("MINOR",Vor->DminGrid);
	dc1.setAttribute("MAJOR",Vor->DmajGrid);
	dc1.setAttribute("MINORC",Vor->DminColor.name());
	dc1.setAttribute("MAJORC",Vor->DmajColor.name());
	dc1.setAttribute("GuideC", Vor->guideColor.name());
	dc1.setAttribute("GuideZ", Vor->GuideRad);
	dc1.setAttribute("BACKG", static_cast<int>(Vor->Before));
	elem.appendChild(dc1);
	QDomElement dc1a=docu.createElement("PAGE");
	dc1a.setAttribute("PAGEC",Vor->DpapColor.name());
	dc1a.setAttribute("MARGC",Vor->DmargColor.name());
	dc1a.setAttribute("RANDF", static_cast<int>(Vor->RandFarbig));
	dc1a.setAttribute("TRANS", static_cast<int>(Vor->PDFTransparency));
	dc1a.setAttribute("DScale",Vor->DisScale);
	elem.appendChild(dc1a);
	QDomElement dc2=docu.createElement("FONTS");
	dc2.setAttribute("FACE",Vor->DefFont);
	dc2.setAttribute("SIZE",Vor->DefSize / 10.0);
	elem.appendChild(dc2);
	QDomElement dc3=docu.createElement("TYPO");
	dc3.setAttribute("TIEF",Vor->DVTief);
	dc3.setAttribute("TIEFSC",Vor->DVTiefSc);
	dc3.setAttribute("HOCH",Vor->DVHoch);
	dc3.setAttribute("HOCHSC",Vor->DVHochSc);
	dc3.setAttribute("SMCAPS",Vor->DVKapit);
	dc3.setAttribute("AUTOL", Vor->AutoLine);
	elem.appendChild(dc3);
	QDomElement dc9=docu.createElement("TOOLS");
	dc9.setAttribute("PEN",Vor->Dpen);
	dc9.setAttribute("BRUSH",Vor->Dbrush);
	dc9.setAttribute("PENLINE",Vor->DpenLine);
	dc9.setAttribute("PENTEXT",Vor->DpenText);
	dc9.setAttribute("STIL",Vor->DLineArt);
	dc9.setAttribute("STILLINE",Vor->DLstyleLine);
	dc9.setAttribute("WIDTH",Vor->Dwidth);
	dc9.setAttribute("WIDTHLINE",Vor->DwidthLine);
	dc9.setAttribute("PENSHADE",Vor->Dshade2);
	dc9.setAttribute("LINESHADE",Vor->DshadeLine);
	dc9.setAttribute("BRUSHSHADE",Vor->Dshade);
	dc9.setAttribute("MAGMIN",Vor->MagMin);
	dc9.setAttribute("MAGMAX",Vor->MagMax);
	dc9.setAttribute("MAGSTEP",Vor->MagStep);
	dc9.setAttribute("CPICT",Vor->DbrushPict);
	dc9.setAttribute("PICTSHADE",Vor->ShadePict);
	dc9.setAttribute("PICTSCX",Vor->ScaleX);
	dc9.setAttribute("PICTSCY",Vor->ScaleY);
	dc9.setAttribute("POLYC", Vor->PolyC);
	dc9.setAttribute("POLYF", Vor->PolyF);
	dc9.setAttribute("POLYR", Vor->PolyR);
	dc9.setAttribute("POLYFD", Vor->PolyFd);
	dc9.setAttribute("POLYS", static_cast<int>(Vor->PolyS));
	dc9.setAttribute("PSCALE", static_cast<int>(Vor->ScaleType));
	dc9.setAttribute("PASPECT", static_cast<int>(Vor->AspectRatio));
	elem.appendChild(dc9);
	QDomElement dc4=docu.createElement("MAINWINDOW");
	dc4.setAttribute("XPOS",Vor->MainX);
	dc4.setAttribute("YPOS",Vor->MainY);
	dc4.setAttribute("WIDTH",Vor->MainW);
	dc4.setAttribute("HEIGHT",Vor->MainH);
	elem.appendChild(dc4);
	QDomElement dc5=docu.createElement("TOOLPALETTE");
	dc5.setAttribute("VISIBLE", static_cast<int>(Vor->Werkv));
	dc5.setAttribute("PDFVISIBLE", static_cast<int>(Vor->WerkvP));
	elem.appendChild(dc5);
	QDomElement dc7=docu.createElement("TREEPALETTE");
	dc7.setAttribute("VISIBLE", static_cast<int>(Vor->Tpalv));
	dc7.setAttribute("XPOS",Vor->Tpalx);
	dc7.setAttribute("YPOS",Vor->Tpaly);
	elem.appendChild(dc7);
	QDomElement dc72=docu.createElement("NODEPALETTE");
	dc72.setAttribute("XPOS",Vor->Npalx);
	dc72.setAttribute("YPOS",Vor->Npaly);
	elem.appendChild(dc72);
	QDomElement dc73=docu.createElement("SCRAPBOOK");
	dc73.setAttribute("VISIBLE", static_cast<int>(Vor->SCpalv));
	dc73.setAttribute("XPOS",Vor->SCpalx);
	dc73.setAttribute("YPOS",Vor->SCpaly);
	dc73.setAttribute("WIDTH",Vor->SCpalw);
	dc73.setAttribute("HEIGHT",Vor->SCpalh);
	dc73.setAttribute("PREVIEW",Vor->PSize);
	dc73.setAttribute("SAVE", static_cast<int>(Vor->SaveAtQ));
	elem.appendChild(dc73);
	QDomElement dc74=docu.createElement("LAYERPALETTE");
	dc74.setAttribute("VISIBLE", static_cast<int>(Vor->Lpalv));
	dc74.setAttribute("XPOS",Vor->Lpalx);
	dc74.setAttribute("YPOS",Vor->Lpaly);
	elem.appendChild(dc74);
	QDomElement dc75=docu.createElement("PAGEPALETTE");
	dc75.setAttribute("VISIBLE", static_cast<int>(Vor->Sepalv));
	dc75.setAttribute("XPOS",Vor->Sepalx);
	dc75.setAttribute("YPOS",Vor->Sepaly);
	dc75.setAttribute("THUMBS", static_cast<int>(Vor->SepalT));
	dc75.setAttribute("NAMES", static_cast<int>(Vor->SepalN));
	elem.appendChild(dc75);
	QDomElement dc76=docu.createElement("DOKUMENT");
	dc76.setAttribute("FORMATCODE",Vor->PageFormat);
	dc76.setAttribute("AUSRICHTUNG",Vor->Ausrichtung);
	dc76.setAttribute("BREITE",Vor->PageBreite);
	dc76.setAttribute("HOEHE",Vor->PageHoehe);
	dc76.setAttribute("RANDO",Vor->RandOben);
	dc76.setAttribute("RANDU",Vor->RandUnten);
	dc76.setAttribute("RANDL",Vor->RandLinks);
	dc76.setAttribute("RANDR",Vor->RandRechts);
	dc76.setAttribute("DOPPEL", static_cast<int>(Vor->DoppelSeiten));
	dc76.setAttribute("LINKS", static_cast<int>(Vor->ErsteLinks));
	dc76.setAttribute("AutoSave", static_cast<int>(Vor->AutoSave));
	dc76.setAttribute("AutoSaveTime", Vor->AutoSaveTime);
	elem.appendChild(dc76);
	QDomElement dc77=docu.createElement("BOOKPALETTE");
	dc77.setAttribute("VISIBLE", static_cast<int>(Vor->Bopalv));
	dc77.setAttribute("XPOS",Vor->Bopalx);
	dc77.setAttribute("YPOS",Vor->Bopaly);
	elem.appendChild(dc77);
	QDomElement dc8=docu.createElement("MEASUREMENTS");
	dc8.setAttribute("VISIBLE", static_cast<int>(Vor->Mpalv));
	dc8.setAttribute("XPOS",Vor->Mpalx);
	dc8.setAttribute("YPOS",Vor->Mpaly);
	elem.appendChild(dc8);
	QDomElement dc81=docu.createElement("CMS");
	dc81.setAttribute("DPSo", static_cast<int>(Vor->DCMSset.SoftProofOn));
	dc81.setAttribute("DPuse", static_cast<int>(Vor->DCMSset.CMSinUse));
	dc81.setAttribute("DPgam", static_cast<int>(Vor->DCMSset.GamutCheck));
	dc81.setAttribute("DPbla", static_cast<int>(Vor->DCMSset.BlackPoint));
	dc81.setAttribute("DPMo",Vor->DCMSset.DefaultMonitorProfile);
	dc81.setAttribute("DPPr",Vor->DCMSset.DefaultPrinterProfile);
	dc81.setAttribute("DPIn",Vor->DCMSset.DefaultInputProfile);
	dc81.setAttribute("DPIn2",Vor->DCMSset.DefaultInputProfile2);
	dc81.setAttribute("DIPr",Vor->DCMSset.DefaultIntentPrinter);
	dc81.setAttribute("DIMo",Vor->DCMSset.DefaultIntentMonitor);
	dc81.setAttribute("DIMo2",Vor->DCMSset.DefaultIntentMonitor2);
	elem.appendChild(dc81);
	QDomElement dc82=docu.createElement("PRINTER");
	dc82.setAttribute("NAME",Vor->PrinterName);
	dc82.setAttribute("FILE",Vor->PrinterFile);
	dc82.setAttribute("COMMAND",Vor->PrinterCommand);
	elem.appendChild(dc82);
	QDomElement rde=docu.createElement("HYPHEN");
	rde.setAttribute("LANG", Vor->Language);
	rde.setAttribute("WORDLEN", Vor->MinWordLen);
	rde.setAttribute("MODE", static_cast<int>(Vor->Automatic));
	rde.setAttribute("INMODE", static_cast<int>(Vor->AutoCheck));
	elem.appendChild(rde);
	CListe::Iterator itc;
	for (itc = Vor->DColors.begin(); itc != Vor->DColors.end(); ++itc)
		{
		QDomElement co=docu.createElement("COLOR");
		co.setAttribute("NAME",itc.key());
		co.setAttribute("RGB",Vor->DColors[itc.key()].getRGBColor().name());
		co.setAttribute("CMYK",Vor->DColors[itc.key()].name());
		elem.appendChild(co);
		}
	for ( SCFontsIterator itf(Vor->AvailFonts); itf.current(); ++itf)
		{
		QDomElement fn=docu.createElement("FONT");
		fn.setAttribute("NAME",itf.currentKey());
		fn.setAttribute("EMBED",static_cast<int>(itf.current()->EmbedPS));
		fn.setAttribute("USE", static_cast<int>(itf.current()->UseFont));
		fn.setAttribute("SUBSET", static_cast<int>(itf.current()->Subset));
		elem.appendChild(fn);
		}
	for (uint rd=0; rd<Vor->RecentDocs.count(); ++rd)
		{
		QDomElement rde=docu.createElement("RECENT");
		rde.setAttribute("NAME",Vor->RecentDocs[rd]);
		elem.appendChild(rde);
		}
	for (uint ksc=0; ksc<68; ++ksc)
		{
		QDomElement kscc=docu.createElement("SHORTCUT");
		kscc.setAttribute("CODE",Vor->KeyActions[ksc].KeyID);
		kscc.setAttribute("NR", ksc);
		elem.appendChild(kscc);
		}
	QMap<QString,QString>::Iterator itfsu;
	for (itfsu = Vor->GFontSub.begin(); itfsu != Vor->GFontSub.end(); ++itfsu)
		{
		QDomElement fosu = docu.createElement("Substitute");
		fosu.setAttribute("Name",itfsu.key());
		fosu.setAttribute("Replace",itfsu.data());
		elem.appendChild(fosu);
		}
	QFile f(ho);
	if(!f.open(IO_WriteOnly))
		return;
	QTextStream s(&f);
	s<<docu.toCString();
	f.close();
}

bool ScriXmlDoc::ReadPref(struct preV *Vorein, QString ho)
{
	QDomDocument docu("scridoc");
	QFile f(ho);
	if(!f.open(IO_ReadOnly))
		return false;
	if(!docu.setContent(&f))
		{
		f.close();
		return false;
		}
	f.close();
	QDomElement elem=docu.documentElement();
	if (elem.tagName() != "SCRIBUSRC")
		return false;
	Vorein->DColors.clear();
	CMYKColor lf = CMYKColor();
	QDomNode DOC=elem.firstChild();
	while(!DOC.isNull())
		{
		QDomElement dc=DOC.toElement();
		if (dc.tagName()=="GUI")
			{
			Vorein->GUI = dc.attribute("STILT","Default");
			Vorein->Wheelval = QStoInt(dc.attribute("RAD"));
			Vorein->GrabRad = QStoInt(dc.attribute("GRAB","4"));
			Vorein->Einheit = QStoInt(dc.attribute("UNIT","0"));
			Vorein->PagesSbS = QStoInt(dc.attribute("SBS","1"));
			Vorein->ShFrames = QStoInt(dc.attribute("FRV","1"));
			Vorein->AppFontSize = QStoInt(dc.attribute("APF","12"));
			Vorein->RecentDCount = dc.attribute("RCD","5").toUInt();
			Vorein->DocDir = dc.attribute("DOC","");
			Vorein->ProfileDir = dc.attribute("PROFILES","");
			Vorein->ScriptDir = dc.attribute("SCRIPTS","");

			}
		if (dc.tagName()=="GRID")
			{
			Vorein->DminGrid = QStodouble(dc.attribute("MINOR"));
			Vorein->DmajGrid = QStodouble(dc.attribute("MAJOR"));
			Vorein->DminColor = QColor(dc.attribute("MINORC"));
			Vorein->DmajColor = QColor(dc.attribute("MAJORC"));
			Vorein->Before = static_cast<bool>(QStoInt(dc.attribute("BACKG","1")));
			if (dc.hasAttribute("GuideC"))
				Vorein->guideColor = QColor(dc.attribute("GuideC"));
			if (dc.hasAttribute("GuideZ"))
				Vorein->GuideRad = QStodouble(dc.attribute("GuideZ"));
			}
		if (dc.tagName()=="PAGE")
			{
			Vorein->DpapColor = QColor(dc.attribute("PAGEC"));
			Vorein->DmargColor = QColor(dc.attribute("MARGC","#0000ff"));
			Vorein->RandFarbig = static_cast<bool>(QStoInt(dc.attribute("RANDF","0")));
			Vorein->PDFTransparency = static_cast<bool>(QStoInt(dc.attribute("TRANS","0")));
			Vorein->DisScale = QStodouble(dc.attribute("DScale","1"));
			}
		if (dc.tagName()=="TYPO")
			{
			Vorein->DVTief = QStoInt(dc.attribute("TIEF"));
			Vorein->DVTiefSc = QStoInt(dc.attribute("TIEFSC"));
			Vorein->DVHoch = QStoInt(dc.attribute("HOCH"));
			Vorein->DVHochSc = QStoInt(dc.attribute("HOCHSC"));
			Vorein->DVKapit = QStoInt(dc.attribute("SMCAPS"));
			Vorein->AutoLine = QStoInt(dc.attribute("AUTOL","20"));
			}
		if (dc.tagName()=="TOOLS")
			{
			Vorein->Dpen = dc.attribute("PEN");
			Vorein->Dbrush = dc.attribute("BRUSH");
			Vorein->DpenLine = dc.attribute("PENLINE");
			Vorein->DpenText = dc.attribute("PENTEXT");
			Vorein->DLineArt = QStoInt(dc.attribute("STIL"));
			Vorein->DLstyleLine = QStoInt(dc.attribute("STILLINE"));
			Vorein->Dwidth = QStodouble(dc.attribute("WIDTH"));
			Vorein->DwidthLine = QStodouble(dc.attribute("WIDTHLINE"));
			Vorein->Dshade2 = QStoInt(dc.attribute("PENSHADE"));
			Vorein->DshadeLine = QStoInt(dc.attribute("LINESHADE"));
			Vorein->Dshade = QStoInt(dc.attribute("BRUSHSHADE"));
			Vorein->MagMin = QStoInt(dc.attribute("MAGMIN","10"));
			Vorein->MagMax = QStoInt(dc.attribute("MAGMAX","800"));
			Vorein->MagStep = QStoInt(dc.attribute("MAGSTEP","25"));
			Vorein->DbrushPict = dc.attribute("CPICT");
			Vorein->ShadePict = QStoInt(dc.attribute("PICTSHADE","100"));
			Vorein->ScaleX = QStodouble(dc.attribute("PICTSCX","1"));
			Vorein->ScaleY = QStodouble(dc.attribute("PICTSCY","1"));
			Vorein->ScaleType = static_cast<bool>(QStoInt(dc.attribute("PSCALE", "1")));
			Vorein->AspectRatio = static_cast<bool>(QStoInt(dc.attribute("PASPECT", "0")));
			Vorein->PolyC = QStoInt(dc.attribute("POLYC", "4"));
			Vorein->PolyF = QStodouble(dc.attribute("POLYF", "0.5"));
			Vorein->PolyR = QStodouble(dc.attribute("POLYR", "0"));
			Vorein->PolyFd = QStoInt(dc.attribute("POLYFD", "0"));
			Vorein->PolyS = static_cast<bool>(QStoInt(dc.attribute("POLYS", "0")));
			}
		if (dc.tagName()=="MAINWINDOW")
			{
			Vorein->MainX = QStoInt(dc.attribute("XPOS"));
			Vorein->MainY = QStoInt(dc.attribute("YPOS"));
			Vorein->MainW = QStoInt(dc.attribute("WIDTH"));
			Vorein->MainH = QStoInt(dc.attribute("HEIGHT"));
			}
		if (dc.tagName()=="TOOLPALETTE")
			{
			Vorein->Werkv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE","1")));
			Vorein->WerkvP = static_cast<bool>(QStoInt(dc.attribute("PDFVISIBLE","1")));
			}
		if (dc.tagName()=="TREEPALETTE")
			{
			Vorein->Tpalv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE")));
			Vorein->Tpalx = QStoInt(dc.attribute("XPOS"));
			Vorein->Tpaly = QStoInt(dc.attribute("YPOS"));
			}
		if (dc.tagName()=="LAYERPALETTE")
			{
			Vorein->Lpalv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE")));
			Vorein->Lpalx = QStoInt(dc.attribute("XPOS"));
			Vorein->Lpaly = QStoInt(dc.attribute("YPOS"));
			}
		if (dc.tagName()=="BOOKPALETTE")
			{
			Vorein->Bopalv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE")));
			Vorein->Bopalx = QStoInt(dc.attribute("XPOS"));
			Vorein->Bopaly = QStoInt(dc.attribute("YPOS"));
			}
		if (dc.tagName()=="PAGEPALETTE")
			{
			Vorein->Sepalv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE")));
			Vorein->Sepalx = QStoInt(dc.attribute("XPOS"));
			Vorein->Sepaly = QStoInt(dc.attribute("YPOS"));
			Vorein->SepalT = static_cast<bool>(QStoInt(dc.attribute("THUMBS")));
			Vorein->SepalN = static_cast<bool>(QStoInt(dc.attribute("NAMES")));
			}
		if (dc.tagName()=="SCRAPBOOK")
			{
			Vorein->SCpalv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE")));
			Vorein->SCpalx = QStoInt(dc.attribute("XPOS"));
			Vorein->SCpaly = QStoInt(dc.attribute("YPOS"));
			Vorein->SCpalw = QStoInt(dc.attribute("WIDTH"));
			Vorein->SCpalh = QStoInt(dc.attribute("HEIGHT"));
			Vorein->PSize = QStoInt(dc.attribute("PREVIEW"));
			Vorein->SaveAtQ = static_cast<bool>(QStoInt(dc.attribute("SAVE")));
			}
		if (dc.tagName() == "DOKUMENT")
			{
			Vorein->PageFormat = QStoInt(dc.attribute("FORMATCODE","4"));
			Vorein->Ausrichtung = QStoInt(dc.attribute("AUSRICHTUNG","0"));
			Vorein->PageBreite = QStodouble(dc.attribute("BREITE","595"));
			Vorein->PageHoehe = QStodouble(dc.attribute("HOEHE","842"));
			Vorein->RandOben = QStodouble(dc.attribute("RANDO","9"));
			Vorein->RandUnten = QStodouble(dc.attribute("RANDU","40"));
			Vorein->RandLinks = QStodouble(dc.attribute("RANDL","9"));
			Vorein->RandRechts = QStodouble(dc.attribute("RANDR","9"));
			Vorein->DoppelSeiten = static_cast<bool>(QStoInt(dc.attribute("DOPPEL","0")));
			Vorein->ErsteLinks = static_cast<bool>(QStoInt(dc.attribute("LINKS","0")));
			Vorein->AutoSave = static_cast<bool>(QStoInt(dc.attribute("AutoSave","0")));
			Vorein->AutoSaveTime = QStoInt(dc.attribute("AutoSaveTime","600000"));
			}
		if (dc.tagName()=="CMS")
			{
			Vorein->DCMSset.SoftProofOn = static_cast<bool>(QStoInt(dc.attribute("DPSo","0")));
			Vorein->DCMSset.CMSinUse = static_cast<bool>(QStoInt(dc.attribute("DPuse","0")));
			Vorein->DCMSset.GamutCheck = static_cast<bool>(QStoInt(dc.attribute("DPgam","0")));
			Vorein->DCMSset.BlackPoint = static_cast<bool>(QStoInt(dc.attribute("DPbla","1")));
			Vorein->DCMSset.DefaultMonitorProfile = dc.attribute("DPMo","");
			Vorein->DCMSset.DefaultPrinterProfile = dc.attribute("DPPr","");
			Vorein->DCMSset.DefaultInputProfile = dc.attribute("DPIn","");
			Vorein->DCMSset.DefaultInputProfile2 = dc.attribute("DPIn2","");
			Vorein->DCMSset.DefaultIntentPrinter = QStoInt(dc.attribute("DIPr","0"));
			Vorein->DCMSset.DefaultIntentMonitor = QStoInt(dc.attribute("DIMo","3"));
			Vorein->DCMSset.DefaultIntentMonitor2 = QStoInt(dc.attribute("DIMo2","3"));
			}
		if (dc.tagName()=="NODEPALETTE")
			{
			Vorein->Npalx = QStoInt(dc.attribute("XPOS"));
			Vorein->Npaly = QStoInt(dc.attribute("YPOS"));
			}
		if (dc.tagName()=="SHORTCUT")
			Vorein->KeyActions[QStoInt(dc.attribute("NR"))].KeyID = QStoInt(dc.attribute("CODE"));
		if (dc.tagName()=="RECENT")
			Vorein->RecentDocs.append(dc.attribute("NAME"));
		if (dc.tagName()=="MEASUREMENTS")
			{
			Vorein->Mpalv = static_cast<bool>(QStoInt(dc.attribute("VISIBLE", "1")));
			Vorein->Mpalx = QStoInt(dc.attribute("XPOS"));
			Vorein->Mpaly = QStoInt(dc.attribute("YPOS"));
			}
		if (dc.tagName()=="PRINTER")
			{
			Vorein->PrinterName = dc.attribute("NAME");
			Vorein->PrinterFile = dc.attribute("FILE");
			Vorein->PrinterCommand = dc.attribute("COMMAND");
			}
		if (dc.tagName()=="HYPHEN")
			{
			if (dc.attribute("LANG", "") != "")
				Vorein->Language = dc.attribute("LANG");
			Vorein->MinWordLen = QStoInt(dc.attribute("WORDLEN", "3"));
			Vorein->Automatic = static_cast<bool>(QStoInt(dc.attribute("MODE", "1")));
			Vorein->AutoCheck = static_cast<bool>(QStoInt(dc.attribute("INMODE", "1")));
			}
		if (dc.tagName()=="FONTS")
			{
			QString tmpf = dc.attribute("FACE");
			if (!Vorein->AvailFonts.find(tmpf))
				{
				DmF *dia = new DmF(0, tmpf, Vorein);
				dia->exec();
				Vorein->DefFont = dia->Ersatz;
				delete dia;
				}
			else
				Vorein->DefFont = dc.attribute("FACE");
			Vorein->DefSize = qRound(QStodouble(dc.attribute("SIZE")) * 10.0);
			}
		if (dc.tagName()=="FONT")
			{
			if (Vorein->AvailFonts.find(dc.attribute("NAME")))
				{
				Vorein->AvailFonts[dc.attribute("NAME")]->EmbedPS = static_cast<bool>(QStoInt(dc.attribute("EMBED")));
				Vorein->AvailFonts[dc.attribute("NAME")]->UseFont &= static_cast<bool>(QStoInt(dc.attribute("USE","1")));
				Vorein->AvailFonts[dc.attribute("NAME")]->Subset = static_cast<bool>(QStoInt(dc.attribute("SUBSET","0")));
				}
			}
		if (dc.tagName()=="COLOR")
			{
			if (dc.hasAttribute("CMYK"))
				lf.setNamedColor(dc.attribute("CMYK"));
			else
				lf.fromQColor(QColor(dc.attribute("RGB")));
		  Vorein->DColors[dc.attribute("NAME")] = lf;
			}
		if (dc.tagName()=="Substitute")
		  Vorein->GFontSub[dc.attribute("Name")] = dc.attribute("Replace");
		DOC=DOC.nextSibling();
		}
	if (Vorein->GUI != "Default")
		qApp->setStyle(QStyleFactory::create(Vorein->GUI));
	QFont apf = qApp->font();
	apf.setPointSize(Vorein->AppFontSize);
	qApp->setFont(apf,true);
	return true;
}


