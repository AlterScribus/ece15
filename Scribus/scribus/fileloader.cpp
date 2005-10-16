#include <qdom.h>
#include <qprogressbar.h>
#include <qfile.h>
#include <qfileinfo.h>
#include <qtl.h>
#include <qcursor.h>
#include <qregexp.h>
#include <qdir.h>
#include <qtextcodec.h>
#include <qcheckbox.h>
#include <cstdlib>
#include <cmath>
#include <qtextstream.h>
#include "fileloader.h"
#include "scribus.h"
#include "scribusXml.h"
#include "missing.h"
#include "fontreplacedialog.h"
#include "units.h"
#include "pluginmanager.h"
#include "pagestructs.h"
#include "scconfig.h"
#ifdef HAVE_LIBZ
	#include <zlib.h>
#endif
#include "util.h"
#include "prefsmanager.h"

/*!
 \fn FileLoader::FileLoader(QString fileName)
 \author Franz Schmid
 \date
 \brief Constructor, sets the variable "FileName" to the input parameter fileName
 \param QString fileName
 \retval None
 */
FileLoader::FileLoader(const QString & fileName) :
	QObject(0, "FileLoader")
{
	prefsManager=PrefsManager::instance();
	FileName = fileName;
	FileType = -1;
	havePS = ScApp->pluginManager->DLLexists("importps");
	haveSVG = ScApp->pluginManager->DLLexists("svgimplugin");
	haveSXD = ScApp->pluginManager->DLLexists("oodrawimp");
}

// FIXME: This static method is here as a temporary transitional
// measure during the process of converting to file loader plugins.
const QString FileLoader::getLoadFilterString()
{
	PluginManager& pluginManager(PluginManager::instance());
	QString formats;
#ifdef HAVE_LIBZ
	formats += tr("Documents (*.sla *.sla.gz *.scd *.scd.gz);;");
#else
	formats += tr("Documents (*.sla *.scd);;");
#endif
	if (pluginManager.DLLexists("importps"))
		formats += tr("PostScript Files (*.eps *.EPS *.ps *.PS);;");
	if (pluginManager.DLLexists("svgimplugin"))
#ifdef HAVE_LIBZ
		formats += tr("SVG Images (*.svg *.svgz);;");
#else
		formats += tr("SVG Images (*.svg);;");
#endif
	if (pluginManager.DLLexists("oodrawimp"))
		formats += tr("OpenOffice.org Draw (*.sxd);;");
	formats += tr("All Files (*)");
	return formats;
}

/*!
 \fn int FileLoader::TestFile()
 \author Franz Schmid
 \date
 \brief Tests if the file "FileName" exists and determines the type of the file.
 \param None
 \retval int -1 if the file doesn't exist or any other error has occured, 0 for the old Format, 1 for the new Format, 2 for EPS and PS files, 3 for SVG files and 4 for PDF files
 */
int FileLoader::TestFile()
{
	QFileInfo fi = QFileInfo(FileName);
	int ret = -1;
	if (!fi.exists())
		ret = -1;
	QString ext = fi.extension(true).lower();
	if ((ext.endsWith("sla.gz")) || (ext.endsWith("sla")) || (ext.endsWith("scd.gz")) || (ext.endsWith("scd")))
		ret = CheckScribus();
	else if (((ext.endsWith("ps")) || (ext.endsWith("eps"))) && (havePS))
		ret = 2;
	else if (((ext.endsWith("svg")) || (ext.endsWith("svgz"))) && (haveSVG))
		ret = 3;
	else if ((ext.endsWith("sxd")) && (haveSXD))
		ret = 5;
/*	if (ext == "pdf")
		ret = 4; */
	FileType = ret;
	return ret;
}

/*!
 \fn int FileLoader::CheckScribus()
 \author Franz Schmid
 \date
 \brief Checks which Scribus fileformat the File in FileName has.
 \param None
 \retval 0 for old Scribus files, 1 for Scribus files created by Scribus 1.3 and above
 */
int FileLoader::CheckScribus()
{
	int ret = -1;
	QString fText(readSLA(FileName));
	if (fText.isEmpty())
		return ret;
	if ((fText.startsWith("<SCRIBUSUTF8NEW")) && (fText.contains("<PAGE ", true) != 0))
		return 1;
	if ((fText.startsWith("<SCRIBUS")) && (fText.contains("<PAGE ", true) != 0))
		return 0;
	return ret;
}

/*!
 \fn QString FileLoader::readSLA(QString fileName)
 \author Franz Schmid
 \date
 \brief Auxiliary function loads the file "fileName" into a QString, taking care of any encoding issues
 \param QString fileName
 \retval QString Contents of the file

 Note that this method will use the system text encoding when loading .sla /
 .scd files from before the conversion to utf-8 storage. There is presently no
 override for the encoding used.
 */
QString FileLoader::readSLA(const QString & fileName)
{
	QCString docBytes("");
	if(fileName.right(2) == "gz")
	{
#ifdef HAVE_LIBZ
		/**
		  * added to support gz docs
		  * 2.7.2002 C.Toepp
		  * <c.toepp@gmx.de>
		  */
		// The file is gzip encoded and we can load
		// gzip files.
		gzFile gzDoc;
		char buff[4097];
		int i;
		gzDoc = gzopen(fileName.latin1(),"rb");
		if(gzDoc == NULL)
			return "";
		while((i = gzread(gzDoc,&buff,4096)) > 0)
		{
			buff[i] = '\0';
			docBytes.append(buff);
		}
		gzclose(gzDoc);
#else
		// The file is gzip encoded but we can't load gzip files.
		// Leave `f' empty, since we have no way to
		// report a failure condition from here.
#endif
	}
	else
		// Not gzip encoded, just load it
		loadRawText(fileName, docBytes);
	QString docText("");
	if (docBytes.left(12) == "<SCRIBUSUTF8")
		docText = QString::fromUtf8(docBytes);
	else if (docBytes.left(8) == "<SCRIBUS")
		docText = QString::fromLocal8Bit(docBytes);
	if (docText.endsWith(QChar(10)) || docText.endsWith(QChar(13)))
		docText.truncate(docText.length()-1);
	return docText;
}

bool FileLoader::LoadPage(int PageToLoad, bool Mpage)
{
	bool ret = false;
	newReplacement = false;
	ReplacedFonts.clear();
	dummyFois.clear();
	dummyFois.setAutoDelete(true);
	switch (FileType)
	{
		case 0:
			{
				ScriXmlDoc *ss = new ScriXmlDoc();
				ss->ReplacedFonts.clear();
				ss->newReplacement = false;
				ss->dummyFois.clear();
				ret = ss->ReadPage(FileName, prefsManager->appPrefs.AvailFonts, ScApp->doc, ScApp->view, PageToLoad, Mpage);
				ReplacedFonts = ss->ReplacedFonts;
				newReplacement = ss->newReplacement;
				dummyFois = ss->dummyFois;
				delete ss;
			}
			break;
		case 1:
			ret = ReadPage(FileName, prefsManager->appPrefs.AvailFonts, ScApp->doc, ScApp->view, PageToLoad, Mpage);
			break;
		default:
			ret = false;
			break;
	}
	if (ReplacedFonts.count() != 0)
	{
		if ((prefsManager->appPrefs.askBeforeSubstituite) || (newReplacement))
		{
			qApp->setOverrideCursor(QCursor(Qt::arrowCursor), true);
			FontReplaceDialog *dia = new FontReplaceDialog(0, &ReplacedFonts);
			if (dia->exec())
			{
				QMap<QString,QString>::Iterator itfsu;
				for (itfsu = ReplacedFonts.begin(); itfsu != ReplacedFonts.end(); ++itfsu)
				{
					if (dia->stickyReplacements->isChecked())
						prefsManager->appPrefs.GFontSub[itfsu.key()] = itfsu.data();
				}
				delete dia;
			}
			else
			{
				delete dia;
				return false;
			}
		}
		for (uint d = 0; d < ScApp->doc->MasterItems.count(); ++d)
		{
			PageItem *it = ScApp->doc->MasterItems.at(d);
			if ((!ScApp->doc->UsedFonts.contains(it->IFont)) && (!it->IFont.isEmpty()))
				it->IFont = ReplacedFonts[it->IFont];
			if ((it->asTextFrame()) || (it->asPathText()))
			{
				for (uint e = 0; e < it->itemText.count(); ++e)
				{
				if (!ScApp->doc->UsedFonts.contains(it->itemText.at(e)->cfont->scName()))
					it->itemText.at(e)->cfont = (*ScApp->doc->AllFonts)[ReplacedFonts[it->itemText.at(e)->cfont->scName()]];
				}
			}
		}
		for (uint d = 0; d < ScApp->doc->DocItems.count(); ++d)
		{
			PageItem *it = ScApp->doc->DocItems.at(d);
			if ((!ScApp->doc->UsedFonts.contains(it->IFont)) && (!it->IFont.isEmpty()))
				it->IFont = ReplacedFonts[it->IFont];
			if ((it->asTextFrame()) || (it->asPathText()))
			{
				for (uint e = 0; e < it->itemText.count(); ++e)
				{
				if (!ScApp->doc->UsedFonts.contains(it->itemText.at(e)->cfont->scName()))
					it->itemText.at(e)->cfont = (*ScApp->doc->AllFonts)[ReplacedFonts[it->itemText.at(e)->cfont->scName()]];
				}
			}
		}
		for (uint d = 0; d < ScApp->doc->FrameItems.count(); ++d)
		{
			PageItem *it = ScApp->doc->FrameItems.at(d);
			if ((!ScApp->doc->UsedFonts.contains(it->IFont)) && (!it->IFont.isEmpty()))
				it->IFont = ReplacedFonts[it->IFont];
			if ((it->asTextFrame()) || (it->asPathText()))
			{
				for (uint e = 0; e < it->itemText.count(); ++e)
				{
				if (!ScApp->doc->UsedFonts.contains(it->itemText.at(e)->cfont->scName()))
					it->itemText.at(e)->cfont = (*ScApp->doc->AllFonts)[ReplacedFonts[it->itemText.at(e)->cfont->scName()]];
				}
			}
		}
		for (uint a = 0; a < ScApp->doc->docParagraphStyles.count(); ++a)
		{
			if ((!ScApp->doc->UsedFonts.contains(ScApp->doc->docParagraphStyles[a].Font)) && (!ScApp->doc->docParagraphStyles[a].Font.isEmpty()))
				ScApp->doc->docParagraphStyles[a].Font = ReplacedFonts[ScApp->doc->docParagraphStyles[a].Font];
		}
		QMap<QString,QString>::Iterator itfsu;
		for (itfsu = ReplacedFonts.begin(); itfsu != ReplacedFonts.end(); ++itfsu)
		{
			if (!ScApp->doc->UsedFonts.contains(itfsu.data()))
			{
//				QFont fo = prefsManager->appPrefs.AvailFonts[itfsu.data()]->Font;
//				fo.setPointSize(qRound(ScApp->doc->toolSettings.defSize / 10.0));
				ScApp->doc->AddFont(itfsu.data(), qRound(ScApp->doc->toolSettings.defSize / 10.0));
			}
		}
		if (prefsManager->appPrefs.askBeforeSubstituite)
			ReplacedFonts.clear();
		dummyFois.clear();
	}
	return ret;
}

/*!
 \fn bool FileLoader::LoadFile()
 \author Franz Schmid
 \date
 \brief Loads the file "FileName" as a Scribus document
 \retval bool true when loading is succsessful, false otherwise
 */
bool FileLoader::LoadFile()
{
	bool ret = false;
	newReplacement = false;
	ScApp->doc->guidesSettings.marginsShown = prefsManager->appPrefs.guidesSettings.marginsShown;
	ScApp->doc->guidesSettings.framesShown = prefsManager->appPrefs.guidesSettings.framesShown;
	ScApp->doc->guidesSettings.gridShown = prefsManager->appPrefs.guidesSettings.gridShown;
	ScApp->doc->guidesSettings.guidesShown = prefsManager->appPrefs.guidesSettings.guidesShown;
	ScApp->doc->guidesSettings.baseShown = prefsManager->appPrefs.guidesSettings.baseShown;
	ScApp->doc->guidesSettings.linkShown = prefsManager->appPrefs.guidesSettings.linkShown;
	ScApp->doc->toolSettings.polyC = prefsManager->appPrefs.toolSettings.polyC;
	ScApp->doc->toolSettings.polyF = prefsManager->appPrefs.toolSettings.polyF;
	ScApp->doc->toolSettings.polyR = prefsManager->appPrefs.toolSettings.polyR;
	ScApp->doc->toolSettings.polyFd = prefsManager->appPrefs.toolSettings.polyFd;
	ScApp->doc->toolSettings.polyS = prefsManager->appPrefs.toolSettings.polyS;
	ScApp->doc->AutoSave = prefsManager->appPrefs.AutoSave;
	ScApp->doc->AutoSaveTime = prefsManager->appPrefs.AutoSaveTime;
	ReplacedFonts.clear();
	dummyFois.clear();
	dummyFois.setAutoDelete(true);
	switch (FileType)
	{
		case 0:
			{
				ScriXmlDoc *ss = new ScriXmlDoc();
				QObject::connect(ss, SIGNAL(NewPage(int)), ScApp, SLOT(slotNewPage(int)));
				ss->ReplacedFonts.clear();
				ss->newReplacement = false;
				ss->dummyFois.clear();
				ret = ss->ReadDoc(FileName, prefsManager->appPrefs.AvailFonts, ScApp->doc, ScApp->view, ScApp->mainWindowProgressBar);
				QObject::disconnect(ss, SIGNAL(NewPage(int)), ScApp, SLOT(slotNewPage(int)));
				ReplacedFonts = ss->ReplacedFonts;
				newReplacement = ss->newReplacement;
				dummyFois = ss->dummyFois;
				delete ss;
			}
			break;
		case 1:
			ret = ReadDoc(FileName, prefsManager->appPrefs.AvailFonts, ScApp->doc, ScApp->view, ScApp->mainWindowProgressBar);
			break;
		case 2:
			ret = ScApp->pluginManager->callImportExportPlugin("importps", FileName);
			break;
		case 3:
			ret = ScApp->pluginManager->callImportExportPlugin("svgimplugin", FileName);
			break;
		case 5:
			ret = ScApp->pluginManager->callImportExportPlugin("oodrawimp", FileName);
			break;
		default:
			ret = false;
			break;
	}
/*	for (uint d = 0; d < ScApp->doc->MasterItems.count(); ++d)
	{
		PageItem *it = ScApp->doc->MasterItems.at(d);
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				ScText *hl = it->itemText.at(e);
				if ((hl->ch == QChar(25)) && ((int)hl->cembedded != -1))
					hl->cembedded = ScApp->doc->FrameItems.at((int)hl->cembedded);
				else
					hl->cembedded = 0;
			}
		}
	}
	for (uint d = 0; d < ScApp->doc->DocItems.count(); ++d)
	{
		PageItem *it = ScApp->doc->DocItems.at(d);
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				ScText *hl = it->itemText.at(e);
				if ((hl->ch == QChar(25)) && ((int)hl->cembedded != -1))
					hl->cembedded = ScApp->doc->FrameItems.at((int)hl->cembedded);
				else
					hl->cembedded = 0;
			}
		}
	} */
	if (ReplacedFonts.count() != 0)
	{
		if ((prefsManager->appPrefs.askBeforeSubstituite) || (newReplacement))
		{
			qApp->setOverrideCursor(QCursor(Qt::arrowCursor), true);
			FontReplaceDialog *dia = new FontReplaceDialog(0, &ReplacedFonts);
			if (dia->exec())
			{
				QMap<QString,QString>::Iterator itfsu;
				for (itfsu = ReplacedFonts.begin(); itfsu != ReplacedFonts.end(); ++itfsu)
				{
					if (dia->stickyReplacements->isChecked())
						prefsManager->appPrefs.GFontSub[itfsu.key()] = itfsu.data();
				}
				delete dia;
			}
			else
			{
				delete dia;
				return false;
			}
		}
		for (uint d = 0; d < ScApp->doc->MasterItems.count(); ++d)
		{
			PageItem *it = ScApp->doc->MasterItems.at(d);
			if ((!ScApp->doc->UsedFonts.contains(it->IFont)) && (!it->IFont.isEmpty()))
				it->IFont = ReplacedFonts[it->IFont];
			if ((it->asTextFrame()) || (it->asPathText()))
			{
				for (uint e = 0; e < it->itemText.count(); ++e)
				{
				if (!ScApp->doc->UsedFonts.contains(it->itemText.at(e)->cfont->scName()))
					it->itemText.at(e)->cfont = (*ScApp->doc->AllFonts)[ReplacedFonts[it->itemText.at(e)->cfont->scName()]];
				}
			}
		}
		for (uint d = 0; d < ScApp->doc->DocItems.count(); ++d)
		{
			PageItem *it = ScApp->doc->DocItems.at(d);
			if ((!ScApp->doc->UsedFonts.contains(it->IFont)) && (!it->IFont.isEmpty()))
				it->IFont = ReplacedFonts[it->IFont];
			if ((it->asTextFrame()) || (it->asPathText()))
			{
				for (uint e = 0; e < it->itemText.count(); ++e)
				{
				if (!ScApp->doc->UsedFonts.contains(it->itemText.at(e)->cfont->scName()))
					it->itemText.at(e)->cfont = (*ScApp->doc->AllFonts)[ReplacedFonts[it->itemText.at(e)->cfont->scName()]];
				}
			}
		}
		for (uint d = 0; d < ScApp->doc->FrameItems.count(); ++d)
		{
			PageItem *it = ScApp->doc->FrameItems.at(d);
			if ((!ScApp->doc->UsedFonts.contains(it->IFont)) && (!it->IFont.isEmpty()))
				it->IFont = ReplacedFonts[it->IFont];
			if ((it->asTextFrame()) || (it->asPathText()))
			{
				for (uint e = 0; e < it->itemText.count(); ++e)
				{
				if (!ScApp->doc->UsedFonts.contains(it->itemText.at(e)->cfont->scName()))
					it->itemText.at(e)->cfont = (*ScApp->doc->AllFonts)[ReplacedFonts[it->itemText.at(e)->cfont->scName()]];
				}
			}
		}
		for (uint a = 0; a < ScApp->doc->docParagraphStyles.count(); ++a)
		{
			if ((!ScApp->doc->UsedFonts.contains(ScApp->doc->docParagraphStyles[a].Font)) && (!ScApp->doc->docParagraphStyles[a].Font.isEmpty()))
				ScApp->doc->docParagraphStyles[a].Font = ReplacedFonts[ScApp->doc->docParagraphStyles[a].Font];
		}
		QValueList<QString> tmpList;
		tmpList.clear();
		for (uint fe = 0; fe <  ScApp->doc->PDF_Options.EmbedList.count(); ++fe)
		{
			if (ReplacedFonts.contains(ScApp->doc->PDF_Options.EmbedList[fe]))
				tmpList.append(ReplacedFonts[ScApp->doc->PDF_Options.EmbedList[fe]]);
			else
				tmpList.append(ScApp->doc->PDF_Options.EmbedList[fe]);
		}
		ScApp->doc->PDF_Options.EmbedList = tmpList;
		tmpList.clear();
		for (uint fe = 0; fe <  ScApp->doc->PDF_Options.SubsetList.count(); ++fe)
		{
			if (ReplacedFonts.contains(ScApp->doc->PDF_Options.SubsetList[fe]))
				tmpList.append(ReplacedFonts[ScApp->doc->PDF_Options.SubsetList[fe]]);
			else
				tmpList.append(ScApp->doc->PDF_Options.SubsetList[fe]);
		}
		ScApp->doc->PDF_Options.SubsetList = tmpList;
		QMap<QString,QString>::Iterator itfsu;
		for (itfsu = ReplacedFonts.begin(); itfsu != ReplacedFonts.end(); ++itfsu)
		{
			if (!ScApp->doc->UsedFonts.contains(itfsu.data()))
			{
//				QFont fo = prefsManager->appPrefs.AvailFonts[itfsu.data()]->Font;
//				fo.setPointSize(qRound(ScApp->doc->toolSettings.defSize / 10.0));
				ScApp->doc->AddFont(itfsu.data(), qRound(ScApp->doc->toolSettings.defSize / 10.0));
			}
		}
		if (prefsManager->appPrefs.askBeforeSubstituite)
			ReplacedFonts.clear();
		dummyFois.clear();
	}
	return ret;
}

bool FileLoader::ReadPage(const QString & fileName, SCFonts &avail, ScribusDoc *doc, ScribusView *view, int PageToLoad, bool Mpage)
{
	struct ParagraphStyle vg;
	struct Layer la;
	struct ScribusDoc::BookMa bok;
	PageItem *Neu;
	Page* Apage;
	LFrames.clear();
	QString tmV, tmp, tmpf, tmp2, tmp3, tmp4, PgNam, Defont, tmf;
	QFont fo;
	QMap<int,int> TableID;
	QPtrList<PageItem> TableItems;
	int a, counter, baseobj;
	double xf, pageX, pageY;
	bool newVersion = false;
	bool VorLFound = false;
	QMap<int,int> layerTrans;
	int maxLayer = 0;
	int maxLevel = 0;
	layerTrans.clear();
	uint layerCount=doc->layerCount();
	for (uint la2 = 0; la2 < layerCount; ++la2)
	{
		maxLayer = QMAX(doc->Layers[la2].LNr, maxLayer);
		maxLevel = QMAX(doc->Layers[la2].Level, maxLevel);
	}
	DoVorl.clear();
	DoVorl[0] = "0";
	DoVorl[1] = "1";
	DoVorl[2] = "2";
	DoVorl[3] = "3";
	DoVorl[4] = "4";
	VorlC = 5;
	QDomDocument docu("scridoc");
	QString f(readSLA(fileName));
	if (f.isEmpty())
		return false;
	if(!docu.setContent(f))
		return false;
	ScColor lf = ScColor();
	QDomElement elem=docu.documentElement();
	if (elem.tagName() != "SCRIBUSUTF8NEW")
		return false;
	if (elem.hasAttribute("Version"))
		newVersion = true;
	QDomNode DOC=elem.firstChild();
	counter = doc->Items.count();
	baseobj = counter;
	while(!DOC.isNull())
	{
		QDomElement dc=DOC.toElement();
		QDomNode PAGE=DOC.firstChild();
		while(!PAGE.isNull())
		{
			QDomElement pg=PAGE.toElement();
			if(pg.tagName()=="COLOR" && pg.attribute("NAME")!="None")
			{
				if (pg.hasAttribute("CMYK"))
					lf.setNamedColor(pg.attribute("CMYK"));
				else
					lf.fromQColor(QColor(pg.attribute("RGB")));
				if (pg.hasAttribute("Spot"))
					lf.setSpotColor(static_cast<bool>(QStoInt(pg.attribute("Spot"))));
				else
					lf.setSpotColor(false);
				if (pg.hasAttribute("Register"))
					lf.setRegistrationColor(static_cast<bool>(QStoInt(pg.attribute("Register"))));
				else
					lf.setRegistrationColor(false);
			  doc->PageColors[pg.attribute("NAME")] = lf;
			}
			if(pg.tagName()=="STYLE")
			{
				GetStyle(&pg, &vg, doc->docParagraphStyles, doc, true);
				VorLFound = true;
			}
			if(pg.tagName()=="JAVA")
				doc->JavaScripts[pg.attribute("NAME")] = pg.attribute("SCRIPT");
			if(pg.tagName()=="LAYERS")
			{
				la.LNr = QStoInt(pg.attribute("NUMMER"));
				la.Level = QStoInt(pg.attribute("LEVEL"));
				la.Name = pg.attribute("NAME");
				la.isViewable = QStoInt(pg.attribute("SICHTBAR"));
				la.isPrintable = QStoInt(pg.attribute("DRUCKEN"));
				bool laex = false;
				uint layerCount=doc->layerCount();
				for (uint la2 = 0; la2 < layerCount; ++la2)
				{
					if (doc->Layers[la2].Name == la.Name)
					{
						laex = true;
						layerTrans.insert(la.LNr, doc->Layers[la2].LNr);
					}
				}
				if (!laex)
				{
					maxLayer++;
					maxLevel++;
					layerTrans.insert(la.LNr, maxLayer);
					la.LNr = maxLayer;
					la.Level = maxLevel;
					doc->Layers.append(la);
				}
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
					struct SingleLine sl;
					sl.Color = MuL.attribute("Color");
					sl.Dash = QStoInt(MuL.attribute("Dash"));
					sl.LineEnd = QStoInt(MuL.attribute("LineEnd"));
					sl.LineJoin = QStoInt(MuL.attribute("LineJoin"));
					sl.Shade = QStoInt(MuL.attribute("Shade"));
					sl.Width = QStodouble(MuL.attribute("Width"));
					ml.push_back(sl);
					MuLn = MuLn.nextSibling();
				}
				QString Nam = pg.attribute("Name");
				QString Nam2 = Nam;
				int copyC = 1;
				while (doc->MLineStyles.contains(Nam2))
				{
					Nam2 = QObject::tr("Copy #%1 of ").arg(copyC)+Nam;
					copyC++;
				}
				doc->MLineStyles.insert(Nam2, ml);
			}
			if(pg.tagName()=="Arrows")
			{
				struct ArrowDesc arrow;
				arrow.name = pg.attribute("Name");
				arrow.userArrow = true;
				double xa, ya;
				QString tmp = pg.attribute("Points");
				QTextStream fp(&tmp, IO_ReadOnly);
				for (uint cx = 0; cx < pg.attribute("NumPoints").toUInt(); ++cx)
				{
					fp >> xa;
					fp >> ya;
					arrow.points.addPoint(xa, ya);
				}
				doc->arrowStyles.append(arrow);
			}
			if (((pg.tagName()=="PAGE") || (pg.tagName()=="MASTERPAGE")) && (QStoInt(pg.attribute("NUM")) == PageToLoad))
			{
				a = doc->currentPage->pageNr();
				Apage = doc->Pages.at(a);
				if ((pg.tagName()!="MASTERPAGE") && (Mpage))
				{
					PAGE=PAGE.nextSibling();
					continue;
				}
				if (Mpage)
				{
					Apage->LeftPg=QStoInt(pg.attribute("LEFT","0"));
					Apage->setPageName(pg.attribute("NAM",""));
				}
				if (pg.hasAttribute("Size"))
					Apage->PageSize = pg.attribute("Size");
				if (pg.hasAttribute("Orientation"))
					Apage->PageOri = QStoInt(pg.attribute("Orientation"));
				if (pg.hasAttribute("PAGEWIDTH"))
					Apage->setWidth(QStodouble(pg.attribute("PAGEWIDTH")));
				else
					Apage->setWidth(QStodouble(pg.attribute("PAGEWITH")));
				Apage->setHeight(QStodouble(pg.attribute("PAGEHEIGHT")));
				Apage->setInitialHeight(Apage->height());
				Apage->setInitialWidth(Apage->width());
				Apage->initialMargins.Top = QStodouble(pg.attribute("BORDERTOP"));
				Apage->initialMargins.Bottom = QStodouble(pg.attribute("BORDERBOTTOM"));
				Apage->initialMargins.Left = QStodouble(pg.attribute("BORDERLEFT"));
				Apage->initialMargins.Right = QStodouble(pg.attribute("BORDERRIGHT"));
				Apage->Margins.Top = Apage->initialMargins.Top;
				Apage->Margins.Bottom = Apage->initialMargins.Bottom;
				pageX = QStodouble(pg.attribute("PAGEXPOS"));
				pageY = QStodouble(pg.attribute("PAGEYPOS"));
				if ((pg.hasAttribute("NumVGuides")) && (QStoInt(pg.attribute("NumVGuides","0")) != 0))
				{
					tmp = pg.attribute("VerticalGuides");
					QTextStream fgv(&tmp, IO_ReadOnly);
					Apage->YGuides.clear();
					for (int cxv = 0; cxv < QStoInt(pg.attribute("NumVGuides","0")); ++cxv)
					{
						fgv >> xf;
						Apage->YGuides.append(xf);
					}
					qHeapSort(Apage->YGuides);
					tmp = "";
				}
				if ((pg.hasAttribute("NumHGuides")) && (QStoInt(pg.attribute("NumHGuides","0")) != 0))
				{
					tmp = pg.attribute("HorizontalGuides");
					QTextStream fgh(&tmp, IO_ReadOnly);
					Apage->XGuides.clear();
					for (int cxh = 0; cxh < QStoInt(pg.attribute("NumHGuides","0")); ++cxh)
					{
						fgh >> xf;
						Apage->XGuides.append(xf);
					}
					qHeapSort(Apage->XGuides);
					tmp = "";
				}
			}
			if ((pg.tagName()=="PAGEOBJECT") || (pg.tagName()=="MASTEROBJECT") || (pg.tagName()=="FRAMEOBJECT"))
			{
				if ((pg.tagName()!="MASTEROBJECT") && (Mpage))
				{
					PAGE=PAGE.nextSibling();
					continue;
				}
				if (QStoInt(pg.attribute("OwnPage")) == PageToLoad)
				{
					if (QStoInt(pg.attribute("NEXTITEM")) != -1)
					{
						if (QStoInt(pg.attribute("BACKITEM")) == -1)
							LFrames.append(doc->Items.count());
					}
					int docGc = doc->GroupCounter;
					doc->GroupCounter = 0;
					Neu = PasteItem(&pg, doc, view);
					Neu->Xpos = Neu->Xpos - pageX + Apage->xOffset();
					Neu->Ypos = Neu->Ypos - pageY + Apage->yOffset();
					view->setRedrawBounding(Neu);
					Neu->OwnPage = view->OnPage(Neu);
					if (pg.tagName()=="PAGEOBJECT")
						Neu->OnMasterPage = "";
					doc->GroupCounter = docGc;
					tmpf = pg.attribute("IFONT", doc->toolSettings.defFont);
					if ((!avail.find(tmpf)) || (!avail[tmpf]->UseFont))
					{
						if ((!view->Prefs->GFontSub.contains(tmpf)) || (!avail[view->Prefs->GFontSub[tmpf]]->UseFont))
						{
							newReplacement = true;
							ReplacedFonts.insert(tmpf, view->Prefs->toolSettings.defFont);
						}
						else
							ReplacedFonts.insert(tmpf, view->Prefs->GFontSub[tmpf]);
					}
					else
					{
						if (!doc->UsedFonts.contains(tmpf))
						{
//							QFont fo = avail[tmpf]->Font;
//							fo.setPointSize(qRound(doc->toolSettings.defSize / 10.0));
							doc->AddFont(tmpf, qRound(doc->toolSettings.defSize / 10.0));
						}
					}
					Neu->IFont = tmpf;
					QDomNode IT=pg.firstChild();
					while(!IT.isNull())
					{
						QDomElement it=IT.toElement();
						if (it.tagName()=="CSTOP")
						{
							QString name = it.attribute("NAME");
							double ramp = QStodouble(it.attribute("RAMP","0.0"));
							int shade = QStoInt(it.attribute("SHADE","100"));
							double opa = QStodouble(it.attribute("TRANS","1"));
							Neu->fill_gradient.addStop(SetColor(doc, name, shade), ramp, 0.5, opa, name, shade);
						}
						if (it.tagName()=="ITEXT")
							GetItemText(&it, doc, Neu, true, VorLFound);
						if(it.tagName()=="PageItemAttributes")
						{
							QDomNode PIA = it.firstChild();
							ObjAttrVector pageItemAttributes;
							while(!PIA.isNull())
							{
								QDomElement itemAttr = PIA.toElement();
								if(itemAttr.tagName() == "ItemAttribute")
								{
									ObjectAttribute objattr;
									objattr.name=itemAttr.attribute("Name");
									objattr.type=itemAttr.attribute("Type");
									objattr.value=itemAttr.attribute("Value");
									objattr.parameter=itemAttr.attribute("Parameter");
									objattr.relationship=itemAttr.attribute("Relationship");
									objattr.relationshipto=itemAttr.attribute("RelationshipTo");
									objattr.autoaddto=itemAttr.attribute("AutoAddTo");
									pageItemAttributes.append(objattr);
								}
								PIA = PIA.nextSibling();
							}
							Neu->setObjectAttributes(&pageItemAttributes);
						}
						IT=IT.nextSibling();
					}
					if (Neu->fill_gradient.Stops() == 0)
					{
						Neu->fill_gradient.addStop(doc->PageColors[doc->toolSettings.dBrush].getRGBColor(), 0.0, 0.5, 1.0, doc->toolSettings.dBrush, 100);
						Neu->fill_gradient.addStop(doc->PageColors[doc->toolSettings.dPen].getRGBColor(), 1.0, 0.5, 1.0, doc->toolSettings.dPen, 100);
					}
//					Neu->Language = ScApp->GetLang(pg.attribute("LANGUAGE", doc->Language));
					Neu->Language = doc->Language;
					Neu->isAutoText = static_cast<bool>(QStoInt(pg.attribute("AUTOTEXT")));
					Neu->isEmbedded = static_cast<bool>(QStoInt(pg.attribute("isInline","0")));
					Neu->gXpos = QStodouble(pg.attribute("gXpos","0.0"));
					Neu->gYpos = QStodouble(pg.attribute("gYpos","0.0"));
					QString defaultVal;
					defaultVal.setNum(Neu->Width);
					Neu->gWidth = QStodouble(pg.attribute("gWidth",defaultVal));
					defaultVal.setNum(Neu->Height);
					Neu->gHeight = QStodouble(pg.attribute("gHeight",defaultVal));
					if (Neu->LineSpMode == 3)
					{
						doc->docParagraphStyles[0].BaseAdj = true;
						Neu->LineSp = doc->typographicSettings.valueBaseGrid-1;
					}
					if (Neu->isAutoText)
						doc->LastAuto = Neu;
					Neu->NextIt = baseobj + QStoInt(pg.attribute("NEXTITEM"));
					if (Neu->isTableItem)
					{
						TableItems.append(Neu);
						TableID.insert(QStoInt(pg.attribute("OwnLINK","0")), Neu->ItemNr);
					}
					if (pg.tagName()=="FRAMEOBJECT")
					{
						doc->FrameItems.append(doc->Items.take(Neu->ItemNr));
						Neu->ItemNr = doc->FrameItems.count()-1;
					}
				}
				counter++;
			}
			PAGE=PAGE.nextSibling();
		}
		DOC=DOC.nextSibling();
	}
	if (TableItems.count() != 0)
	{
		for (uint ttc = 0; ttc < TableItems.count(); ++ttc)
		{
			PageItem* ta = TableItems.at(ttc);
			if (ta->TopLinkID != -1)
				ta->TopLink = doc->Items.at(TableID[ta->TopLinkID]);
			else
				ta->TopLink = 0;
			if (ta->LeftLinkID != -1)
				ta->LeftLink = doc->Items.at(TableID[ta->LeftLinkID]);
			else
				ta->LeftLink = 0;
			if (ta->RightLinkID != -1)
				ta->RightLink = doc->Items.at(TableID[ta->RightLinkID]);
			else
				ta->RightLink = 0;
			if (ta->BottomLinkID != -1)
				ta->BottomLink = doc->Items.at(TableID[ta->BottomLinkID]);
			else
				ta->BottomLink = 0;
		}
	}
	if (LFrames.count() != 0)
	{
		PageItem *Its;
		PageItem *Itn;
		PageItem *Itr;
		QValueList<int>::Iterator lc;
		for (lc = LFrames.begin(); lc != LFrames.end(); ++lc)
		{
			Its = doc->Items.at((*lc));
			Itr = Its;
			Its->BackBox = 0;
			while (Its->NextIt != -1)
			{
				if (Its->NextIt < static_cast<int>(doc->Items.count()))
				{
					Itn = doc->Items.at(Its->NextIt);
					Its->NextBox = Itn;
					Itn->BackBox = Its;
					Its = Itn;
				}
				else
					Its->NextIt = -1;
			}
			Its->NextBox = 0;
		}
	}
	return true;
}

bool FileLoader::ReadDoc(const QString & fileName, SCFonts &avail, ScribusDoc *doc, ScribusView *view, QProgressBar *dia2)
{
	struct ParagraphStyle vg;
	struct Layer la;
	struct ScribusDoc::BookMa bok;
	int counter, Pgc;
	bool AtFl;
	bool newVersion = false;
	QString tmp, tmpf, tmp2, tmp3, tmp4, PgNam, Defont, tmf;
	QFont fo;
	QMap<int,int> TableID;
	QPtrList<PageItem> TableItems;
	int a;
	double xf, xf2;
	PageItem *Neu;
	Page* Apage;
	LFrames.clear();
	QDomDocument docu("scridoc");
	QString f(readSLA(fileName));
	/* 2004/10/02 - petr vanek - bug #1092 - missing <PAGE> crash Scribus. The check constraint moved into IsScribus()
	FIXME: I've add test on containig tag PAGE but returning false freezes S. in scribus.cpp need some hack too...  */
	if (!docu.setContent(f))
		return false;
	doc->PageColors.clear();
	doc->Layers.clear();
	ScColor lf = ScColor();
	QDomElement elem=docu.documentElement();
	if (elem.tagName() != "SCRIBUSUTF8NEW")
		return false;
	if (elem.hasAttribute("Version"))
		newVersion = true;
	QDomNode DOC=elem.firstChild();
	dia2->setTotalSteps(DOC.childNodes().count());
	dia2->setProgress(0);
	int ObCount = 0;
	TableItems.clear();
	TableID.clear();
	while(!DOC.isNull())
	{
		QDomElement dc=DOC.toElement();
	/*
	* Attribute von DOCUMENT auslesen
	*/
		//CB Add this in to set this in the file in memory. Its saved, why not load it. 
		//Will of course be replaced by per page settings although we still probably need a document default
		doc->PageSize = dc.attribute("PAGESIZE");
		doc->PageOri = QStoInt(dc.attribute("ORIENTATION","0"));
		doc->FirstPnum = QStoInt(dc.attribute("FIRSTNUM","1"));
		doc->currentPageLayout=QStoInt(dc.attribute("BOOK", "0"));
		int fp;
		if (doc->currentPageLayout == 0)
			fp = 0;
		else
		{
			if (QStoInt(dc.attribute("FIRSTLEFT","0")) == 1)
				fp = 0;
			else
				fp = 1;
		}
		if (DOC.namedItem("PageSets").isNull())
		{
			doc->pageSets[doc->currentPageLayout].FirstPage = fp;
			doc->pageSets[doc->currentPageLayout].GapHorizontal = QStodouble(dc.attribute("GapHorizontal", "0"));
			doc->pageSets[doc->currentPageLayout].GapVertical = 0.0;
			doc->pageSets[doc->currentPageLayout].GapBelow = QStodouble(dc.attribute("GapVertical", "40"));
		}
		doc->PageAT=QStoInt(dc.attribute("AUTOTEXT"));
		doc->PageSp=QStoInt(dc.attribute("AUTOSPALTEN"));
		doc->PageSpa=QStodouble(dc.attribute("ABSTSPALTEN"));
		doc->setUnitIndex(QStoInt(dc.attribute("UNITS","0")));
		doc->toolSettings.defSize=qRound(QStodouble(dc.attribute("DSIZE")) * 10);
		Defont=dc.attribute("DFONT");
		if ((!avail.find(Defont)) || (!avail[Defont]->UseFont))
		{
			ReplacedFonts.insert(Defont, view->Prefs->toolSettings.defFont);
			Defont = view->Prefs->toolSettings.defFont;
		}
		else
		{
//			QFont fo = avail[Defont]->Font;
//			fo.setPointSize(qRound(doc->toolSettings.defSize / 10.0));
			doc->AddFont(Defont, qRound(doc->toolSettings.defSize / 10.0));
		}
		doc->toolSettings.defFont = Defont;
		doc->toolSettings.dCols=QStoInt(dc.attribute("DCOL", "1"));
		doc->toolSettings.dGap=QStodouble(dc.attribute("DGAP", "0.0"));
		doc->documentInfo.setAuthor(dc.attribute("AUTHOR"));
		doc->documentInfo.setComments(dc.attribute("COMMENTS"));
		doc->documentInfo.setKeywords(dc.attribute("KEYWORDS",""));
		doc->documentInfo.setTitle(dc.attribute("TITLE"));
		doc->documentInfo.setPublisher(dc.attribute("PUBLISHER", ""));
		doc->documentInfo.setDate(dc.attribute("DOCDATE", ""));
		doc->documentInfo.setType(dc.attribute("DOCTYPE", ""));
		doc->documentInfo.setFormat(dc.attribute("DOCFORMAT", ""));
		doc->documentInfo.setIdent(dc.attribute("DOCIDENT", ""));
		doc->documentInfo.setSource(dc.attribute("DOCSOURCE", ""));
		doc->documentInfo.setLangInfo(dc.attribute("DOCLANGINFO", ""));
		doc->documentInfo.setRelation(dc.attribute("DOCRELATION", ""));
		doc->documentInfo.setCover(dc.attribute("DOCCOVER", ""));
		doc->documentInfo.setRights(dc.attribute("DOCRIGHTS", ""));
		doc->documentInfo.setContrib(dc.attribute("DOCCONTRIB", ""));
		doc->typographicSettings.valueSuperScript = QStoInt(dc.attribute("VHOCH"));
		doc->typographicSettings.scalingSuperScript = QStoInt(dc.attribute("VHOCHSC"));
		doc->typographicSettings.valueSubScript = QStoInt(dc.attribute("VTIEF"));
		doc->typographicSettings.scalingSubScript = QStoInt(dc.attribute("VTIEFSC"));
		doc->typographicSettings.valueSmallCaps = QStoInt(dc.attribute("VKAPIT"));
		doc->typographicSettings.valueBaseGrid = QStodouble(dc.attribute("BASEGRID", "12"));
		doc->typographicSettings.offsetBaseGrid = QStodouble(dc.attribute("BASEO", "0"));
		doc->typographicSettings.autoLineSpacing = QStoInt(dc.attribute("AUTOL","20"));
		doc->typographicSettings.valueUnderlinePos = QStoInt(dc.attribute("UnderlinePos","-1"));
		doc->typographicSettings.valueUnderlineWidth = QStoInt(dc.attribute("UnderlineWidth","-1"));
		doc->typographicSettings.valueStrikeThruPos = QStoInt(dc.attribute("StrikeThruPos","-1"));
		doc->typographicSettings.valueStrikeThruWidth = QStoInt(dc.attribute("StrikeThruWidth","-1"));
		doc->GroupCounter=QStoInt(dc.attribute("GROUPC","1"));
		doc->HasCMS = static_cast<bool>(QStoInt(dc.attribute("HCMS","0")));
		doc->CMSSettings.SoftProofOn = static_cast<bool>(QStoInt(dc.attribute("DPSo","0")));
		doc->CMSSettings.CMSinUse = static_cast<bool>(QStoInt(dc.attribute("DPuse","0")));
		doc->CMSSettings.GamutCheck = static_cast<bool>(QStoInt(dc.attribute("DPgam","0")));
		doc->CMSSettings.BlackPoint = static_cast<bool>(QStoInt(dc.attribute("DPbla","1")));
		doc->CMSSettings.DefaultMonitorProfile = dc.attribute("DPMo","");
		doc->CMSSettings.DefaultPrinterProfile = dc.attribute("DPPr","");
		doc->CMSSettings.DefaultImageRGBProfile = dc.attribute("DPIn","");
		doc->CMSSettings.DefaultImageCMYKProfile = dc.attribute("DPInCMYK","");
		doc->CMSSettings.DefaultSolidColorProfile = dc.attribute("DPIn2","");
		doc->CMSSettings.DefaultIntentPrinter = QStoInt(dc.attribute("DIPr","0"));
		doc->CMSSettings.DefaultIntentMonitor = QStoInt(dc.attribute("DIMo","1"));
		doc->CMSSettings.DefaultIntentImages = QStoInt(dc.attribute("DIMo2","1"));
		doc->setActiveLayer(QStoInt(dc.attribute("ALAYER","0")));
		doc->Language = dc.attribute("LANGUAGE", "");
		doc->MinWordLen = QStoInt(dc.attribute("MINWORDLEN", "3"));
		doc->HyCount = QStoInt(dc.attribute("HYCOUNT", "2"));
		if (dc.hasAttribute("PAGEWIDTH"))
			doc->pageWidth=QStodouble(dc.attribute("PAGEWIDTH"));
		else
			doc->pageWidth=QStodouble(dc.attribute("PAGEWITH"));
		doc->pageHeight=QStodouble(dc.attribute("PAGEHEIGHT"));
		doc->pageMargins.Left=QStodouble(dc.attribute("BORDERLEFT"));
		doc->pageMargins.Right=QStodouble(dc.attribute("BORDERRIGHT"));
		doc->pageMargins.Top=QStodouble(dc.attribute("BORDERTOP"));
		doc->pageMargins.Bottom=QStodouble(dc.attribute("BORDERBOTTOM"));
		doc->Automatic = static_cast<bool>(QStoInt(dc.attribute("AUTOMATIC", "1")));
		doc->AutoCheck = static_cast<bool>(QStoInt(dc.attribute("AUTOCHECK", "0")));
		doc->GuideLock = static_cast<bool>(QStoInt(dc.attribute("GUIDELOCK", "0")));
		doc->guidesSettings.minorGrid = QStodouble(dc.attribute("MINGRID", tmp.setNum(view->Prefs->guidesSettings.minorGrid)));
		doc->guidesSettings.majorGrid = QStodouble(dc.attribute("MAJGRID", tmp.setNum(view->Prefs->guidesSettings.majorGrid)));
		doc->guidesSettings.gridShown = static_cast<bool>(QStoInt(dc.attribute("SHOWGRID", "0")));
		doc->guidesSettings.guidesShown = static_cast<bool>(QStoInt(dc.attribute("SHOWGUIDES", "1")));
		doc->guidesSettings.framesShown = static_cast<bool>(QStoInt(dc.attribute("SHOWFRAME", "1")));
		doc->guidesSettings.marginsShown = static_cast<bool>(QStoInt(dc.attribute("SHOWMARGIN", "1")));
		doc->guidesSettings.baseShown = static_cast<bool>(QStoInt(dc.attribute("SHOWBASE", "0")));
		doc->guidesSettings.showPic = static_cast<bool>(QStoInt(dc.attribute("SHOWPICT", "1")));
		doc->guidesSettings.linkShown = static_cast<bool>(QStoInt(dc.attribute("SHOWLINK", "0")));
		doc->guidesSettings.showControls = static_cast<bool>(QStoInt(dc.attribute("SHOWControl","0")));
		doc->guidesSettings.rulerMode = static_cast<bool>(QStoInt(dc.attribute("rulerMode","1")));
		doc->rulerXoffset = QStodouble(dc.attribute("rulerXoffset", "0"));
		doc->rulerYoffset =QStodouble(dc.attribute("rulerYoffset", "0"));
		doc->SnapGuides = static_cast<bool>(QStoInt(dc.attribute("SnapToGuides","0")));
		doc->useRaster = static_cast<bool>(QStoInt(dc.attribute("SnapToGrid","0")));
		doc->toolSettings.polyC = QStoInt(dc.attribute("POLYC", "4"));
		doc->toolSettings.polyF = QStodouble(dc.attribute("POLYF", "0.5"));
		doc->toolSettings.polyR = QStodouble(dc.attribute("POLYR", "0"));
		doc->toolSettings.polyFd = QStoInt(dc.attribute("POLYFD", "0"));
		doc->toolSettings.polyS = static_cast<bool>(QStoInt(dc.attribute("POLYS", "0")));
		doc->AutoSave = static_cast<bool>(QStoInt(dc.attribute("AutoSave","0")));
		doc->AutoSaveTime = QStoInt(dc.attribute("AutoSaveTime","600000"));
		doc->ScratchBottom = QStodouble(dc.attribute("ScratchBottom", "20"));
		// FIXME A typo in early 1.3cvs (MAR 05) means we must support loading of
		// FIXME 'ScatchLeft' for a while too. This can be removed in a few months.
		if (dc.hasAttribute("ScatchLeft"))
			doc->ScratchLeft = QStodouble(dc.attribute("ScatchLeft", "100"));
		else
			doc->ScratchLeft = QStodouble(dc.attribute("ScratchLeft", "100"));
		doc->ScratchRight = QStodouble(dc.attribute("ScratchRight", "100"));
		doc->ScratchTop = QStodouble(dc.attribute("ScratchTop", "20"));
		doc->toolSettings.dStartArrow = QStoInt(dc.attribute("StartArrow", "0"));
		doc->toolSettings.dEndArrow = QStoInt(dc.attribute("EndArrow", "0"));
		doc->toolSettings.scaleX = QStodouble(dc.attribute("PICTSCX","1"));
		doc->toolSettings.scaleY = QStodouble(dc.attribute("PICTSCY","1"));
		doc->toolSettings.scaleType = static_cast<bool>(QStoInt(dc.attribute("PSCALE", "1")));
		doc->toolSettings.aspectRatio = static_cast<bool>(QStoInt(dc.attribute("PASPECT", "0")));
		doc->toolSettings.lowResType = QStoInt(dc.attribute("HalfRes", "1"));
		doc->toolSettings.useEmbeddedPath = static_cast<bool>(QStoInt(dc.attribute("EmbeddedPath", "0")));
		if (dc.hasAttribute("PEN"))
			doc->toolSettings.dPen = dc.attribute("PEN");
		if (dc.hasAttribute("BRUSH"))
			doc->toolSettings.dBrush = dc.attribute("BRUSH");
		if (dc.hasAttribute("PENLINE"))
			doc->toolSettings.dPenLine = dc.attribute("PENLINE");
		if (dc.hasAttribute("PENTEXT"))
			doc->toolSettings.dPenText = dc.attribute("PENTEXT");
		if (dc.hasAttribute("StrokeText"))
			doc->toolSettings.dStrokeText = dc.attribute("StrokeText");
		doc->toolSettings.dTextBackGround = dc.attribute("TextBackGround", "None");
		doc->toolSettings.dTextLineColor = dc.attribute("TextLineColor", "None");
		doc->toolSettings.dTextBackGroundShade = QStoInt(dc.attribute("TextBackGroundShade", "100"));
		doc->toolSettings.dTextLineShade = QStoInt(dc.attribute("TextLineShade", "100"));
		doc->toolSettings.dTextPenShade = QStoInt(dc.attribute("TextPenShade", "100"));
		doc->toolSettings.dTextStrokeShade = QStoInt(dc.attribute("TextStrokeShade", "100"));
		doc->toolSettings.dLineArt = static_cast<Qt::PenStyle>(QStoInt(dc.attribute("STIL")));
		doc->toolSettings.dLstyleLine = static_cast<Qt::PenStyle>(QStoInt(dc.attribute("STILLINE")));
		doc->toolSettings.dWidth = QStodouble(dc.attribute("WIDTH", "1"));
		doc->toolSettings.dWidthLine = QStodouble(dc.attribute("WIDTHLINE", "1"));
		doc->toolSettings.dShade2 = QStoInt(dc.attribute("PENSHADE", "100"));
		doc->toolSettings.dShadeLine = QStoInt(dc.attribute("LINESHADE", "100"));
		doc->toolSettings.dShade = QStoInt(dc.attribute("BRUSHSHADE", "100"));
		doc->toolSettings.magMin = QStoInt(dc.attribute("MAGMIN","10"));
		doc->toolSettings.magMax = QStoInt(dc.attribute("MAGMAX","3200"));
		doc->toolSettings.magStep = QStoInt(dc.attribute("MAGSTEP","25"));
		doc->toolSettings.tabFillChar = dc.attribute("TabFill","");
		doc->toolSettings.dTabWidth=QStodouble(dc.attribute("TabWidth", "36.0"));
		if (dc.hasAttribute("CPICT"))
			doc->toolSettings.dBrushPict = dc.attribute("CPICT");
		doc->toolSettings.shadePict = QStoInt(dc.attribute("PICTSHADE","100"));
		if (dc.hasAttribute("PAGEC"))
			doc->papColor = QColor(dc.attribute("PAGEC"));
		if (dc.hasAttribute("MARGC"))
			doc->guidesSettings.margColor = QColor(dc.attribute("MARGC"));
		if (dc.hasAttribute("MINORC"))
			doc->guidesSettings.minorColor = QColor(dc.attribute("MINORC"));
		if (dc.hasAttribute("MAJORC"))
			doc->guidesSettings.majorColor = QColor(dc.attribute("MAJORC"));
		if (dc.hasAttribute("GuideC"))
			doc->guidesSettings.guideColor = QColor(dc.attribute("GuideC"));
		if (dc.hasAttribute("BaseC"))
			doc->guidesSettings.baseColor = QColor(dc.attribute("BaseC"));
		doc->marginColored = static_cast<bool>(QStoInt(dc.attribute("RANDF","0")));
		doc->guidesSettings.before = static_cast<bool>(QStoInt(dc.attribute("BACKG","1")));
		doc->guidesSettings.guideRad = QStodouble(dc.attribute("GuideRad","10"));
		doc->guidesSettings.grabRad = QStoInt(dc.attribute("GRAB","4"));
		if (dc.hasAttribute("currentProfile"))
		{
			doc->checkerProfiles.clear();
			doc->curCheckProfile = dc.attribute("currentProfile");
		}
		doc->LastAuto = 0;
		QDomNode PAGE=DOC.firstChild();
		counter = 0;
		while(!PAGE.isNull())
		{
			ObCount++;
			dia2->setProgress(ObCount);
			QDomElement pg=PAGE.toElement();
			if (pg.tagName()=="PageSets")
			{
				QDomNode PGS = PAGE.firstChild();
				doc->pageSets.clear();
				while(!PGS.isNull())
				{
					QDomElement PgsAttr = PGS.toElement();
					if(PgsAttr.tagName() == "Set")
					{
						struct PageSet pageS;
						pageS.Name = PgsAttr.attribute("Name");
						pageS.FirstPage = QStoInt(PgsAttr.attribute("FirstPage","0"));
						pageS.Rows = QStoInt(PgsAttr.attribute("Rows","1"));
						pageS.Columns = QStoInt(PgsAttr.attribute("Columns","1"));
						pageS.GapHorizontal = QStodouble(PgsAttr.attribute("GapHorizontal","0"));
						pageS.GapVertical = QStodouble(PgsAttr.attribute("GapVertical","0"));
						pageS.GapBelow = QStodouble(PgsAttr.attribute("GapBelow","0"));
						pageS.pageNames.clear();
						QDomNode PGSN = PGS.firstChild();
						while(!PGSN.isNull())
						{
							QDomElement PgsAttrN = PGSN.toElement();
							if(PgsAttrN.tagName() == "PageNames")
								pageS.pageNames.append(PgsAttrN.attribute("Name"));
							PGSN = PGSN.nextSibling();
						}
						doc->pageSets.append(pageS);
					}
					PGS = PGS.nextSibling();
				}
			}
			if (pg.tagName()=="CheckProfile")
			{
				struct checkerPrefs checkerSettings;
				checkerSettings.ignoreErrors = static_cast<bool>(QStoInt(pg.attribute("ignoreErrors", "0")));
				checkerSettings.autoCheck = static_cast<bool>(QStoInt(pg.attribute("autoCheck", "1")));
				checkerSettings.checkGlyphs = static_cast<bool>(QStoInt(pg.attribute("checkGlyphs", "1")));
				checkerSettings.checkOrphans = static_cast<bool>(QStoInt(pg.attribute("checkOrphans", "1")));
				checkerSettings.checkOverflow = static_cast<bool>(QStoInt(pg.attribute("checkOverflow", "1")));
				checkerSettings.checkPictures = static_cast<bool>(QStoInt(pg.attribute("checkPictures", "1")));
				checkerSettings.checkResolution = static_cast<bool>(QStoInt(pg.attribute("checkResolution", "1")));
				checkerSettings.checkTransparency = static_cast<bool>(QStoInt(pg.attribute("checkTransparency", "1")));
				checkerSettings.minResolution = QStodouble(pg.attribute("minResolution","72"));
				checkerSettings.checkAnnotations = static_cast<bool>(QStoInt(pg.attribute("checkAnnotations", "0")));
				checkerSettings.checkRasterPDF = static_cast<bool>(QStoInt(pg.attribute("checkRasterPDF", "1")));
				doc->checkerProfiles[pg.attribute("Name")] = checkerSettings;
			}
			// 10/25/2004 pv - None is "reserved" color. cannot be defined in any file...
			if(pg.tagName()=="COLOR" && pg.attribute("NAME")!="None")
			{
				if (pg.hasAttribute("CMYK"))
					lf.setNamedColor(pg.attribute("CMYK"));
				else
					lf.fromQColor(QColor(pg.attribute("RGB")));
				if (pg.hasAttribute("Spot"))
					lf.setSpotColor(static_cast<bool>(QStoInt(pg.attribute("Spot"))));
				else
					lf.setSpotColor(false);
				if (pg.hasAttribute("Register"))
					lf.setRegistrationColor(static_cast<bool>(QStoInt(pg.attribute("Register"))));
				else
					lf.setRegistrationColor(false);
			  doc->PageColors[pg.attribute("NAME")] = lf;
			}
			if(pg.tagName()=="STYLE")
			{
				vg.Vname = pg.attribute("NAME");
				vg.LineSpaMode = QStoInt(pg.attribute("LINESPMode","0"));
				vg.LineSpa = QStodouble(pg.attribute("LINESP"));
				vg.Indent = QStodouble(pg.attribute("INDENT","0"));
				vg.First = QStodouble(pg.attribute("FIRST","0"));
				vg.textAlignment = QStoInt(pg.attribute("ALIGN"));
				vg.gapBefore = QStodouble(pg.attribute("VOR","0"));
				vg.gapAfter = QStodouble(pg.attribute("NACH","0"));
				tmpf = pg.attribute("FONT", doc->toolSettings.defFont);
				if ((!avail.find(tmpf)) || (!avail[tmpf]->UseFont))
				{
					if ((!view->Prefs->GFontSub.contains(tmpf)) || (!avail[view->Prefs->GFontSub[tmpf]]->UseFont))
					{
						newReplacement = true;
						ReplacedFonts.insert(tmpf, view->Prefs->toolSettings.defFont);
					}
					else
						ReplacedFonts.insert(tmpf, view->Prefs->GFontSub[tmpf]);
				}
				else
				{
					if (!doc->UsedFonts.contains(tmpf))
					{
//						QFont fo = avail[tmpf]->Font;
//						fo.setPointSize(qRound(doc->toolSettings.defSize / 10.0));
						doc->AddFont(tmpf, qRound(doc->toolSettings.defSize / 10.0));
					}
				}
				vg.Font = tmpf;
				vg.FontSize = qRound(QStodouble(pg.attribute("FONTSIZE","12")) * 10.0);
				vg.Drop = static_cast<bool>(QStoInt(pg.attribute("DROP","0")));
				vg.DropLin = QStoInt(pg.attribute("DROPLIN","2"));
				vg.DropDist = QStodouble(pg.attribute("DROPDIST","0"));
				vg.FontEffect = QStoInt(pg.attribute("EFFECT","0"));
				vg.FColor = pg.attribute("FCOLOR", doc->toolSettings.dBrush);
				vg.FShade = QStoInt(pg.attribute("FSHADE","100"));
				vg.SColor = pg.attribute("SCOLOR", doc->toolSettings.dPen);
				vg.SShade = QStoInt(pg.attribute("SSHADE","100"));
				vg.BaseAdj = static_cast<bool>(QStoInt(pg.attribute("BASE","0")));
				vg.txtShadowX=qRound(QStodouble(pg.attribute("TXTSHX", "5")) * 10);
				vg.txtShadowY=qRound(QStodouble(pg.attribute("TXTSHY", "-5")) * 10);
				vg.txtOutline=qRound(QStodouble(pg.attribute("TXTOUT", "1")) * 10);
				vg.txtUnderPos=qRound(QStodouble(pg.attribute("TXTULP", "-0.1")) * 10);
				vg.txtUnderWidth=qRound(QStodouble(pg.attribute("TXTULW", "-0.1")) * 10);
				vg.txtStrikePos=qRound(QStodouble(pg.attribute("TXTSTP", "-0.1")) * 10);
				vg.txtStrikeWidth=qRound(QStodouble(pg.attribute("TXTSTW", "-0.1")) * 10);
				vg.scaleH = qRound(QStodouble(pg.attribute("SCALEH", "100")) * 10);
				vg.scaleV = qRound(QStodouble(pg.attribute("SCALEV", "100")) * 10);
				vg.baseOff = qRound(QStodouble(pg.attribute("BASEO", "0")) * 10);
				vg.kernVal = qRound(QStodouble(pg.attribute("KERN", "0")) * 10);
				vg.TabValues.clear();
				if ((pg.hasAttribute("NUMTAB")) && (QStoInt(pg.attribute("NUMTAB","0")) != 0))
				{
					struct PageItem::TabRecord tb;
					tmp = pg.attribute("TABS");
					QTextStream tgv(&tmp, IO_ReadOnly);
					for (int cxv = 0; cxv < QStoInt(pg.attribute("NUMTAB","0")); cxv += 2)
					{
						tgv >> xf;
						tgv >> xf2;
						tb.tabPosition = xf2;
						tb.tabType = static_cast<int>(xf);
						tb.tabFillChar =  QChar();
						vg.TabValues.append(tb);
					}
					tmp = "";
				}
				else
				{
					QDomNode IT = pg.firstChild();
					while(!IT.isNull())
					{
						QDomElement it = IT.toElement();
						if (it.tagName()=="Tabs")
						{
							struct PageItem::TabRecord tb;
							tb.tabPosition = QStodouble(it.attribute("Pos"));
							tb.tabType = QStoInt(it.attribute("Type"));
							QString tbCh = "";
							tbCh = it.attribute("Fill","");
							if (tbCh.isEmpty())
								tb.tabFillChar = QChar();
							else
								tb.tabFillChar = tbCh[0];
							vg.TabValues.append(tb);
						}
						IT=IT.nextSibling();
					}
				}
				doc->docParagraphStyles.append(vg);
			}
			if(pg.tagName()=="JAVA")
				doc->JavaScripts[pg.attribute("NAME")] = pg.attribute("SCRIPT");
			if(pg.tagName()=="LAYERS")
			{
				la.LNr = QStoInt(pg.attribute("NUMMER"));
				la.Level = QStoInt(pg.attribute("LEVEL"));
				la.Name = pg.attribute("NAME");
				la.isViewable = QStoInt(pg.attribute("SICHTBAR"));
				la.isPrintable = QStoInt(pg.attribute("DRUCKEN"));
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
					struct SingleLine sl;
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
			if(pg.tagName()=="Arrows")
			{
				struct ArrowDesc arrow;
				arrow.name = pg.attribute("Name");
				arrow.userArrow = true;
				double xa, ya;
				QString tmp = pg.attribute("Points");
				QTextStream fp(&tmp, IO_ReadOnly);
				for (uint cx = 0; cx < pg.attribute("NumPoints").toUInt(); ++cx)
				{
					fp >> xa;
					fp >> ya;
					arrow.points.addPoint(xa, ya);
				}
				doc->arrowStyles.append(arrow);
			}
			if(pg.tagName()=="PDF")
			{
				doc->PDF_Options.Articles = static_cast<bool>(QStoInt(pg.attribute("Articles")));
				doc->PDF_Options.Thumbnails = static_cast<bool>(QStoInt(pg.attribute("Thumbnails")));
				doc->PDF_Options.Compress = static_cast<bool>(QStoInt(pg.attribute("Compress")));
				doc->PDF_Options.CompressMethod = QStoInt(pg.attribute("CMethod","0"));
				doc->PDF_Options.Quality = QStoInt(pg.attribute("Quality","0"));
				doc->PDF_Options.RecalcPic = static_cast<bool>(QStoInt(pg.attribute("RecalcPic")));
				doc->PDF_Options.Bookmarks = static_cast<bool>(QStoInt(pg.attribute("Bookmarks")));
				if (pg.hasAttribute("MirrorH"))
					doc->PDF_Options.MirrorH = static_cast<bool>(QStoInt(pg.attribute("MirrorH")));
				else
					doc->PDF_Options.MirrorH = false;
				if (pg.hasAttribute("MirrorV"))
					doc->PDF_Options.MirrorV = static_cast<bool>(QStoInt(pg.attribute("MirrorV")));
				else
					doc->PDF_Options.MirrorV = false;
				if (pg.hasAttribute("RotateDeg"))
					doc->PDF_Options.RotateDeg = QStoInt(pg.attribute("RotateDeg","0"));
				else
					doc->PDF_Options.RotateDeg = 0;
				doc->PDF_Options.PresentMode = static_cast<bool>(QStoInt(pg.attribute("PresentMode")));
				doc->PDF_Options.PicRes = QStoInt(pg.attribute("PicRes"));
				// Fixme: check input pdf version
				doc->PDF_Options.Version = (PDFOptions::PDFVersion)QStoInt(pg.attribute("Version"));
				doc->PDF_Options.Resolution = QStoInt(pg.attribute("Resolution"));
				doc->PDF_Options.Binding = QStoInt(pg.attribute("Binding"));
				doc->PDF_Options.Datei = "";
				doc->PDF_Options.isGrayscale = static_cast<bool>(QStoInt(pg.attribute("Grayscale","0")));
				doc->PDF_Options.UseRGB = static_cast<bool>(QStoInt(pg.attribute("RGBMode","0")));
				doc->PDF_Options.UseProfiles = static_cast<bool>(QStoInt(pg.attribute("UseProfiles","0")));
				doc->PDF_Options.UseProfiles2 = static_cast<bool>(QStoInt(pg.attribute("UseProfiles2","0")));
				doc->PDF_Options.Intent = QStoInt(pg.attribute("Intent","1"));
				doc->PDF_Options.Intent2 = QStoInt(pg.attribute("Intent2","1"));
				doc->PDF_Options.SolidProf = pg.attribute("SolidP", "");
				doc->PDF_Options.ImageProf = pg.attribute("ImageP", "");
				doc->PDF_Options.PrintProf = pg.attribute("PrintP", "");
				doc->PDF_Options.Info = pg.attribute("InfoString", "");
				doc->PDF_Options.BleedTop = QStodouble(pg.attribute("BTop","0"));
				doc->PDF_Options.BleedLeft = QStodouble(pg.attribute("BLeft","0"));
				doc->PDF_Options.BleedRight = QStodouble(pg.attribute("BRight","0"));
				doc->PDF_Options.BleedBottom = QStodouble(pg.attribute("BBottom","0"));
				doc->PDF_Options.EmbeddedI = static_cast<bool>(QStoInt(pg.attribute("ImagePr","0")));
				doc->PDF_Options.PassOwner = pg.attribute("PassOwner", "");
				doc->PDF_Options.PassUser = pg.attribute("PassUser", "");
				doc->PDF_Options.Permissions = QStoInt(pg.attribute("Permissions","-4"));
				doc->PDF_Options.Encrypt = static_cast<bool>(QStoInt(pg.attribute("Encrypt","0")));
				doc->PDF_Options.useLayers = static_cast<bool>(QStoInt(pg.attribute("UseLayers","0")));
				doc->PDF_Options.UseLPI = static_cast<bool>(QStoInt(pg.attribute("UseLpi","0")));
				doc->PDF_Options.UseSpotColors = static_cast<bool>(QStoInt(dc.attribute("UseSpotColors","1")));
				doc->PDF_Options.doMultiFile = static_cast<bool>(QStoInt(dc.attribute("doMultiFile","0")));
				QDomNode PFO = PAGE.firstChild();
				while(!PFO.isNull())
				{
					QDomElement pdfF = PFO.toElement();
					if(pdfF.tagName() == "LPI")
					{
						struct LPIData lpo;
						lpo.Angle = QStoInt(pdfF.attribute("Angle"));
						lpo.Frequency = QStoInt(pdfF.attribute("Frequency"));
						lpo.SpotFunc = QStoInt(pdfF.attribute("SpotFunction"));
						doc->PDF_Options.LPISettings[pdfF.attribute("Color")] = lpo;
					}
					if(pdfF.tagName() == "Fonts")
					{
						if (!doc->PDF_Options.EmbedList.contains(pdfF.attribute("Name")))
							doc->PDF_Options.EmbedList.append(pdfF.attribute("Name"));
					}
					if(pdfF.tagName() == "Subset")
					{
						if (!doc->PDF_Options.SubsetList.contains(pdfF.attribute("Name")))
							doc->PDF_Options.SubsetList.append(pdfF.attribute("Name"));
					}
					if(pdfF.tagName() == "Effekte")
					{
						struct PDFPresentationData ef;
						ef.pageEffectDuration = QStoInt(pdfF.attribute("pageEffectDuration"));
						ef.pageViewDuration = QStoInt(pdfF.attribute("pageViewDuration"));
						ef.effectType = QStoInt(pdfF.attribute("effectType"));
						ef.Dm = QStoInt(pdfF.attribute("Dm"));
						ef.M = QStoInt(pdfF.attribute("M"));
						ef.Di = QStoInt(pdfF.attribute("Di"));
						doc->PDF_Options.PresentVals.append(ef);
					}
					PFO = PFO.nextSibling();
				}
			}
			if(pg.tagName()=="DocItemAttributes")
			{
				QDomNode DIA = PAGE.firstChild();
				doc->docItemAttributes.clear();
				while(!DIA.isNull())
				{
					QDomElement itemAttr = DIA.toElement();
					if(itemAttr.tagName() == "ItemAttribute")
					{
						ObjectAttribute objattr;
						objattr.name=itemAttr.attribute("Name");
						objattr.type=itemAttr.attribute("Type");
						objattr.value=itemAttr.attribute("Value");
						objattr.parameter=itemAttr.attribute("Parameter");
						objattr.relationship=itemAttr.attribute("Relationship");
						objattr.relationshipto=itemAttr.attribute("RelationshipTo");
						objattr.autoaddto=itemAttr.attribute("AutoAddTo");
						doc->docItemAttributes.append(objattr);
					}
					DIA = DIA.nextSibling();
				}
			}
			if(pg.tagName()=="TablesOfContents")
			{
				QDomNode TOC = PAGE.firstChild();
				doc->docToCSetups.clear();
				while(!TOC.isNull())
				{
					QDomElement tocElem = TOC.toElement();
					if(tocElem.tagName() == "TableOfContents")
					{
						ToCSetup tocsetup;
						tocsetup.name=tocElem.attribute("Name");
						tocsetup.itemAttrName=tocElem.attribute("ItemAttributeName");
						tocsetup.frameName=tocElem.attribute("FrameName");
						tocsetup.listNonPrintingFrames=tocElem.attribute("ListNonPrinting");
						tocsetup.textStyle=tocElem.attribute("Style");
						QString numberPlacement=tocElem.attribute("NumberPlacement");
						if (numberPlacement=="Beginning")
							tocsetup.pageLocation=Beginning;
						if (numberPlacement=="End")
							tocsetup.pageLocation=End;
						if (numberPlacement=="NotShown")
							tocsetup.pageLocation=NotShown;
						doc->docToCSetups.append(tocsetup);
					}
					TOC = TOC.nextSibling();
				}
			}
			if ((pg.tagName()=="PAGE") || (pg.tagName()=="MASTERPAGE"))
			{
				a = QStoInt(pg.attribute("NUM"));
				PgNam = "";
				PgNam = pg.attribute("NAM", "");
				Pgc = doc->pageCount;
				AtFl = doc->PageAT;
				if (PgNam.isEmpty())
				{
					doc->pageCount = Pgc;
					doc->Pages = doc->DocPages;
					doc->PageAT = AtFl;
					doc->masterPageMode = false;
				}
				else
				{
					doc->pageCount = 0;
					doc->PageAT = false;
					doc->Pages = doc->MasterPages;
					doc->masterPageMode = true;
				}
				ScApp->slotNewPage(a);
				Apage = doc->Pages.at(a);
				if (PgNam.isEmpty())
				{
					doc->DocPages = doc->Pages;
					doc->pageCount = Pgc+1;
				}
				else
				{
					Apage->setPageName(PgNam);
					doc->MasterNames[PgNam] = a;
					doc->MasterPages = doc->Pages;
					doc->pageCount = Pgc;
				}
				doc->PageAT = AtFl;
				Apage->LeftPg=QStoInt(pg.attribute("LEFT","0"));
				QString Mus = "";
				Mus = pg.attribute("MNAM","Normal");
				if (!doc->masterPageMode)
					Apage->MPageNam = Mus;
				else
					Apage->MPageNam = "";
				if (pg.hasAttribute("Size"))
					Apage->PageSize = pg.attribute("Size");
				if (pg.hasAttribute("Orientation"))
					Apage->PageOri = QStoInt(pg.attribute("Orientation"));
				Apage->setXOffset(QStodouble(pg.attribute("PAGEXPOS")));
				Apage->setYOffset(QStodouble(pg.attribute("PAGEYPOS")));
				if (pg.hasAttribute("PAGEWIDTH"))
					Apage->setWidth(QStodouble(pg.attribute("PAGEWIDTH")));
				else
					Apage->setWidth(QStodouble(pg.attribute("PAGEWITH")));
				Apage->setHeight(QStodouble(pg.attribute("PAGEHEIGHT")));
				Apage->setInitialHeight(Apage->height());
				Apage->setInitialWidth(Apage->width());
				Apage->initialMargins.Top = QStodouble(pg.attribute("BORDERTOP"));
				Apage->initialMargins.Bottom = QStodouble(pg.attribute("BORDERBOTTOM"));
				Apage->initialMargins.Left = QStodouble(pg.attribute("BORDERLEFT"));
				Apage->initialMargins.Right = QStodouble(pg.attribute("BORDERRIGHT"));
				Apage->Margins.Top = Apage->initialMargins.Top;
				Apage->Margins.Bottom = Apage->initialMargins.Bottom;
				doc->masterPageMode = false;
				if ((pg.hasAttribute("NumVGuides")) && (QStoInt(pg.attribute("NumVGuides","0")) != 0))
				{
					tmp = pg.attribute("VerticalGuides");
					QTextStream fgv(&tmp, IO_ReadOnly);
					Apage->YGuides.clear();
					for (int cxv = 0; cxv < QStoInt(pg.attribute("NumVGuides","0")); ++cxv)
					{
						fgv >> xf;
						Apage->YGuides.append(xf);
					}
					qHeapSort(Apage->YGuides);
					tmp = "";
				}
				else
					Apage->YGuides.clear();
				if ((pg.hasAttribute("NumHGuides")) && (QStoInt(pg.attribute("NumHGuides","0")) != 0))
				{
					tmp = pg.attribute("HorizontalGuides");
					QTextStream fgh(&tmp, IO_ReadOnly);
					Apage->XGuides.clear();
					for (int cxh = 0; cxh < QStoInt(pg.attribute("NumHGuides","0")); ++cxh)
					{
						fgh >> xf;
						Apage->XGuides.append(xf);
					}
					qHeapSort(Apage->XGuides);
					tmp = "";
				}
				else
					Apage->XGuides.clear();
			}
			if ((pg.tagName()=="PAGEOBJECT") || (pg.tagName()=="MASTEROBJECT") || (pg.tagName()=="FRAMEOBJECT"))
			{
					if ((pg.tagName()=="PAGEOBJECT") || (pg.tagName()=="FRAMEOBJECT"))
					{
						doc->Items = doc->DocItems;
						doc->Pages = doc->DocPages;
						doc->masterPageMode = false;
					}
					else
					{
						doc->Items = doc->MasterItems;
						doc->Pages = doc->MasterPages;
						doc->masterPageMode = true;
					}
					if ((!pg.attribute("OnMasterPage").isEmpty()) && (pg.tagName()=="MASTEROBJECT"))
						doc->currentPage = doc->MasterPages.at(doc->MasterNames[pg.attribute("OnMasterPage")]);
					if ((QStoInt(pg.attribute("NEXTITEM")) != -1) || (static_cast<bool>(QStoInt(pg.attribute("AUTOTEXT")))))
					{
						if (QStoInt(pg.attribute("BACKITEM")) == -1)
							LFrames.append(doc->Items.count());
					}
					int docGc = doc->GroupCounter;
					doc->GroupCounter = 0;
					Neu = PasteItem(&pg, doc, view);
					if (pg.tagName()=="PAGEOBJECT")
						Neu->OnMasterPage = "";
					doc->GroupCounter = docGc;
					tmpf = pg.attribute("IFONT", doc->toolSettings.defFont);
					if ((!avail.find(tmpf)) || (!avail[tmpf]->UseFont))
					{
						if ((!view->Prefs->GFontSub.contains(tmpf)) || (!avail[view->Prefs->GFontSub[tmpf]]->UseFont))
						{
							newReplacement = true;
							ReplacedFonts.insert(tmpf, view->Prefs->toolSettings.defFont);
						}
						else
							ReplacedFonts.insert(tmpf, view->Prefs->GFontSub[tmpf]);
					}
					else
					{
						if (!doc->UsedFonts.contains(tmpf))
						{
//							QFont fo = avail[tmpf]->Font;
//							fo.setPointSize(qRound(doc->toolSettings.defSize / 10.0));
							doc->AddFont(tmpf, qRound(doc->toolSettings.defSize / 10.0));
						}
					}
					Neu->IFont = tmpf;
					QDomNode IT=pg.firstChild();
					while(!IT.isNull())
					{
						QDomElement it=IT.toElement();
						if (it.tagName()=="CSTOP")
						{
							QString name = it.attribute("NAME");
							double ramp = QStodouble(it.attribute("RAMP","0.0"));
							int shade = QStoInt(it.attribute("SHADE","100"));
							double opa = QStodouble(it.attribute("TRANS","1"));
							Neu->fill_gradient.addStop(SetColor(doc, name, shade), ramp, 0.5, opa, name, shade);
						}
						if (it.tagName()=="ITEXT")
							GetItemText(&it, doc, Neu);
						
						//CB PageItemAttributes
						if(it.tagName()=="PageItemAttributes")
						{
							QDomNode PIA = it.firstChild();
							ObjAttrVector pageItemAttributes;
							while(!PIA.isNull())
							{
								QDomElement itemAttr = PIA.toElement();
								if(itemAttr.tagName() == "ItemAttribute")
								{
									ObjectAttribute objattr;
									objattr.name=itemAttr.attribute("Name");
									objattr.type=itemAttr.attribute("Type");
									objattr.value=itemAttr.attribute("Value");
									objattr.parameter=itemAttr.attribute("Parameter");
									objattr.relationship=itemAttr.attribute("Relationship");
									objattr.relationshipto=itemAttr.attribute("RelationshipTo");
									objattr.autoaddto=itemAttr.attribute("AutoAddTo");
									pageItemAttributes.append(objattr);
								}
								PIA = PIA.nextSibling();
							}
							Neu->setObjectAttributes(&pageItemAttributes);
						}
						IT=IT.nextSibling();
					}
					if (Neu->fill_gradient.Stops() == 0)
					{
						Neu->fill_gradient.addStop(doc->PageColors[doc->toolSettings.dBrush].getRGBColor(), 0.0, 0.5, 1.0, doc->toolSettings.dBrush, 100);
						Neu->fill_gradient.addStop(doc->PageColors[doc->toolSettings.dPen].getRGBColor(), 1.0, 0.5, 1.0, doc->toolSettings.dPen, 100);
					}
					Neu->Language = ScApp->GetLang(pg.attribute("LANGUAGE", doc->Language));
					Neu->isAutoText = static_cast<bool>(QStoInt(pg.attribute("AUTOTEXT")));
					Neu->isEmbedded = static_cast<bool>(QStoInt(pg.attribute("isInline","0")));
					Neu->gXpos = QStodouble(pg.attribute("gXpos","0.0"));
					Neu->gYpos = QStodouble(pg.attribute("gYpos","0.0"));
					QString defaultVal;
					defaultVal.setNum(Neu->Width);
					Neu->gWidth = QStodouble(pg.attribute("gWidth",defaultVal));
					defaultVal.setNum(Neu->Height);
					Neu->gHeight = QStodouble(pg.attribute("gHeight",defaultVal));
					if (Neu->LineSpMode == 3)
					{
						doc->docParagraphStyles[0].BaseAdj = true;
						Neu->LineSp = doc->typographicSettings.valueBaseGrid-1;
					}
					if (Neu->isAutoText)
						doc->LastAuto = Neu;
					Neu->NextIt = QStoInt(pg.attribute("NEXTITEM"));
					if (Neu->isTableItem)
					{
						TableItems.append(Neu);
						TableID.insert(QStoInt(pg.attribute("OwnLINK","0")), Neu->ItemNr);
					}
					if (pg.tagName()=="FRAMEOBJECT")
					{
						doc->FrameItems.append(doc->Items.take(Neu->ItemNr));
						Neu->ItemNr = doc->FrameItems.count()-1;
					}
					if ((pg.tagName()=="PAGEOBJECT") || (pg.tagName()=="FRAMEOBJECT"))
					{
						doc->DocItems = doc->Items;
						doc->DocPages = doc->Pages;
					}
					else
					{
						doc->MasterItems = doc->Items;
						doc->MasterPages = doc->Pages;
					}
					doc->masterPageMode = false;
					counter++;
				}
			PAGE=PAGE.nextSibling();
		}
		DOC=DOC.nextSibling();
	}
	if (TableItems.count() != 0)
	{
		for (uint ttc = 0; ttc < TableItems.count(); ++ttc)
		{
			PageItem* ta = TableItems.at(ttc);
			if (ta->TopLinkID != -1)
				ta->TopLink = doc->Items.at(TableID[ta->TopLinkID]);
			else
				ta->TopLink = 0;
			if (ta->LeftLinkID != -1)
				ta->LeftLink = doc->Items.at(TableID[ta->LeftLinkID]);
			else
				ta->LeftLink = 0;
			if (ta->RightLinkID != -1)
				ta->RightLink = doc->Items.at(TableID[ta->RightLinkID]);
			else
				ta->RightLink = 0;
			if (ta->BottomLinkID != -1)
				ta->BottomLink = doc->Items.at(TableID[ta->BottomLinkID]);
			else
				ta->BottomLink = 0;
		}
	}
	doc->Pages = doc->DocPages;
	doc->pageCount = doc->Pages.count();
	doc->Items = doc->DocItems;
	doc->masterPageMode = false;
	view->reformPages();
	if (doc->Layers.count() == 0)
	{
		la.LNr = 0;
		la.Level = 0;
		la.Name = QObject::tr("Background");
		la.isViewable = true;
		la.isPrintable = true;
		doc->Layers.append(la);
	}
	if (LFrames.count() != 0)
	{
		PageItem *Its;
		PageItem *Itn;
		PageItem *Itr;
		QValueList<int>::Iterator lc;
		for (lc = LFrames.begin(); lc != LFrames.end(); ++lc)
		{
			Its = doc->Items.at((*lc));
			Itr = Its;
			Its->BackBox = 0;
			if (Its->isAutoText)
				doc->FirstAuto = Its;
			while (Its->NextIt != -1)
			{
				Itn = doc->Items.at(Its->NextIt);
				Its->NextBox = Itn;
				Itn->BackBox = Its;
				Its = Itn;
			}
			Its->NextBox = 0;
		}
	}
	view->unitSwitcher->setCurrentText(unitGetStrFromIndex(doc->unitIndex()));
	dia2->setProgress(DOC.childNodes().count());
	return true;
}

void FileLoader::GetItemText(QDomElement *it, ScribusDoc *doc, PageItem* obj, bool impo, bool VorLFound)
{
	struct ScText *hg;
	Foi* dummy;
	bool unknown = false;
	QString tmp2, tmpf;
	tmp2 = it->attribute("CH");
	tmp2.replace(QRegExp("\r"), QChar(13));
	tmp2.replace(QRegExp("\n"), QChar(13));
	tmp2.replace(QRegExp("\t"), QChar(9));
	tmpf = it->attribute("CFONT", doc->toolSettings.defFont);
	if ((!prefsManager->appPrefs.AvailFonts.find(tmpf)) || (!prefsManager->appPrefs.AvailFonts[tmpf]->UseFont))
	{
		bool isThere = false;
		for (uint dl = 0; dl < dummyFois.count(); ++dl)
		{
			if (dummyFois.at(dl)->scName() == tmpf)
			{
				isThere = true;
				dummy = dummyFois.at(dl);
				break;
			}
		}
		if (!isThere)
		{
			dummy = new Foi(tmpf, "", tmpf, "", "", 1, false);
			dummyFois.append(dummy);
		}
		unknown = true;
		if ((!prefsManager->appPrefs.GFontSub.contains(tmpf)) || (!prefsManager->appPrefs.AvailFonts[prefsManager->appPrefs.GFontSub[tmpf]]->UseFont))
		{
			newReplacement = true;
			ReplacedFonts.insert(tmpf, prefsManager->appPrefs.toolSettings.defFont);
		}
		else
			ReplacedFonts.insert(tmpf, prefsManager->appPrefs.GFontSub[tmpf]);
	}
	else
	{
		if (!doc->UsedFonts.contains(tmpf))
		{
//			QFont fo = prefsManager->appPrefs.AvailFonts[tmpf]->Font;
//			fo.setPointSize(qRound(doc->toolSettings.defSize / 10.0));
			doc->AddFont(tmpf, qRound(doc->toolSettings.defSize / 10.0));
		}
	}
	int size = qRound(QStodouble(it->attribute("CSIZE")) * 10);
	QString fcolor = it->attribute("CCOLOR");
	int extra;
	if (it->hasAttribute("CEXTRA"))
		extra = qRound(QStodouble(it->attribute("CEXTRA")) / QStodouble(it->attribute("CSIZE")) * 1000.0);
	else
		extra = QStoInt(it->attribute("CKERN"));
	int shade = QStoInt(it->attribute("CSHADE"));
	int style = QStoInt(it->attribute("CSTYLE"));
	int ab = QStoInt(it->attribute("CAB","0"));
	QString stroke = it->attribute("CSTROKE","None");
	int shade2 = QStoInt(it->attribute("CSHADE2","100"));
	int scale = qRound(QStodouble(it->attribute("CSCALE","100")) * 10);
	int scalev = qRound(QStodouble(it->attribute("CSCALEV","100")) * 10);
	int base = qRound(QStodouble(it->attribute("CBASE","0")) * 10);
	int shX = qRound(QStodouble(it->attribute("CSHX","5")) * 10);
	int shY = qRound(QStodouble(it->attribute("CSHY","-5")) * 10);
	int outL = qRound(QStodouble(it->attribute("COUT","1")) * 10);
	int ulp = qRound(QStodouble(it->attribute("CULP","-0.1")) * 10);
	int ulw = qRound(QStodouble(it->attribute("CULW","-0.1")) * 10);
	int stp = qRound(QStodouble(it->attribute("CSTP","-0.1")) * 10);
	int stw = qRound(QStodouble(it->attribute("CSTW","-0.1")) * 10);
	int iobj = QStoInt(it->attribute("COBJ","-1"));
	for (uint cxx=0; cxx<tmp2.length(); ++cxx)
	{
		hg = new ScText;
		hg->ch = tmp2.at(cxx);
		if (hg->ch == QChar(5))
			hg->ch = QChar(13);
		if (hg->ch == QChar(4))
			hg->ch = QChar(9);
		if (unknown)
			hg->cfont = dummy;
		else
			hg->cfont = (*doc->AllFonts)[tmpf];
		hg->csize = size;
		hg->ccolor = fcolor;
		hg->cextra = extra;
		hg->cshade = shade;
		hg->cselect = false;
		hg->cstyle = style;
		if (impo)
		{
			if (VorLFound)
				hg->cab = DoVorl[ab].toUInt();
			else
			{
				if (ab < 5)
					hg->cab = ab;
				else
					hg->cab = 0;
			}
		}
		else
			hg->cab = ab;
		hg->cstroke = stroke;
		hg->cshade2 = shade2;
		hg->cscale = QMIN(QMAX(scale, 100), 4000);
		hg->cscalev = QMIN(QMAX(scalev, 100), 4000);
		hg->cbase = base;
		hg->cshadowx = shX;
		hg->cshadowy = shY;
		hg->coutline = outL;
		hg->cunderpos = ulp;
		hg->cunderwidth = ulw;
		hg->cstrikepos = stp;
		hg->cstrikewidth = stw;
		hg->xp = 0;
		hg->yp = 0;
		hg->PRot = 0;
		hg->PtransX = 0;
		hg->PtransY = 0;
		if ((hg->ch == QChar(25)) && (iobj != -1))
			hg->cembedded = doc->FrameItems.at(iobj);
		else
			hg->cembedded = 0;
		obj->itemText.append(hg);
	}
	return;
}

PageItem* FileLoader::PasteItem(QDomElement *obj, ScribusDoc *doc, ScribusView *view)
{
	int z = 0;
	PageItem::ItemType pt = static_cast<PageItem::ItemType>(QStoInt(obj->attribute("PTYPE")));
	double x = QStodouble(obj->attribute("XPOS"));
	double y = QStodouble(obj->attribute("YPOS"));
	double w = QStodouble(obj->attribute("WIDTH"));
	double h = QStodouble(obj->attribute("HEIGHT"));
	double pw = QStodouble(obj->attribute("PWIDTH"));
	double scx = QStodouble(obj->attribute("LOCALSCX"));
	double scy = QStodouble(obj->attribute("LOCALSCY"));
	QString Pcolor = obj->attribute("PCOLOR");
	QString Pcolor2 = obj->attribute("PCOLOR2");
	QColor tmpc;
	PageItem *currItem;
	QString tmp;
	int xi;
	double xf, yf, xf2;
	QString clPath;
	QDomNode IT;
	switch (pt)
	{
	// OBSOLETE CR 2005-02-06
	case PageItem::ItemType1:
		//z = view->PaintEllipse(x, y, w, h, pw, Pcolor, Pcolor2);
		z = doc->itemAdd(PageItem::Polygon, PageItem::Ellipse, x, y, w, h, pw, Pcolor, Pcolor2, !view->Mpressed);
		currItem = doc->Items.at(z);
		break;
	//
	case PageItem::ImageFrame:
		//z = view->PaintPict(x, y, w, h);
		z = doc->itemAdd(PageItem::ImageFrame, PageItem::Unspecified, x, y, w, h, 1, doc->toolSettings.dBrushPict, "None", !view->Mpressed);
		currItem = doc->Items.at(z);
		currItem->LocalScX = scx;
		currItem->LocalScY = scy;
		currItem->LocalX = QStodouble(obj->attribute("LOCALX"));
		currItem->LocalY = QStodouble(obj->attribute("LOCALY"));
		currItem->Pfile = obj->attribute("PFILE");
		currItem->IProfile = obj->attribute("PRFILE","");
		currItem->EmProfile = obj->attribute("EPROF","");
		currItem->IRender = QStoInt(obj->attribute("IRENDER","1"));
		currItem->UseEmbedded = QStoInt(obj->attribute("EMBEDDED","1"));
		currItem->pixm.imgInfo.lowResType = QStoInt(obj->attribute("ImageRes","1"));
		IT = obj->firstChild();
		while(!IT.isNull())
		{
			QDomElement it = IT.toElement();
			if (it.tagName()=="ImageEffect")
			{
				struct ScImage::imageEffect ef;
				ef.effectParameters = it.attribute("Param");
				ef.effectCode = QStoInt(it.attribute("Code"));
				currItem->effectsInUse.append(ef);
			}
			IT=IT.nextSibling();
		}
		if (!currItem->Pfile.isEmpty())
			view->loadPict(currItem->Pfile, currItem, false);
		currItem->IProfile = obj->attribute("PRFILE","");
		currItem->EmProfile = obj->attribute("EPROF","");
		currItem->IRender = QStoInt(obj->attribute("IRENDER","1"));
		currItem->UseEmbedded = QStoInt(obj->attribute("EMBEDDED","1"));
		currItem->LocalScX = scx;
		currItem->LocalScY = scy;
		clPath = obj->attribute("ImageClip", "");
		if (currItem->pixm.imgInfo.PDSpathData.contains(clPath))
		{
			currItem->imageClip = currItem->pixm.imgInfo.PDSpathData[clPath].copy();
			currItem->pixm.imgInfo.usedPath = clPath;
			QWMatrix cl;
			cl.translate(currItem->LocalX*currItem->LocalScX, currItem->LocalY*currItem->LocalScY);
			cl.scale(currItem->LocalScX, currItem->LocalScY);
			currItem->imageClip.map(cl);
		}
		currItem->PicArt = QStoInt(obj->attribute("PICART"));
		currItem->BBoxX = QStodouble(obj->attribute("BBOXX"));
		currItem->BBoxH = QStodouble(obj->attribute("BBOXH"));
		currItem->ScaleType = QStoInt(obj->attribute("SCALETYPE","1"));
		currItem->AspectRatio = QStoInt(obj->attribute("RATIO","0"));
		currItem->Pwidth = pw;
		break;
	// OBSOLETE CR 2005-02-06
	case PageItem::ItemType3:
		z = doc->itemAdd(PageItem::Polygon, PageItem::Rectangle, x, y, w, h, pw, Pcolor, Pcolor2, !view->Mpressed);
		currItem = doc->Items.at(z);
		break;
	//
	case PageItem::PathText:
	case PageItem::TextFrame:
		z = doc->itemAdd(PageItem::TextFrame, PageItem::Unspecified, x, y, w, h, pw, "None", Pcolor, !view->Mpressed);
		currItem = doc->Items.at(z);
		if ((QStoInt(obj->attribute("ANNOTATION","0"))) && (static_cast<bool>(QStoInt(obj->attribute("ANICON","0")))))
		{
			currItem->LocalScX = scx;
			currItem->LocalScY = scy;
			currItem->LocalX = QStodouble(obj->attribute("LOCALX"));
			currItem->LocalY = QStodouble(obj->attribute("LOCALY"));
			currItem->Pfile = obj->attribute("PFILE");
			currItem->Pfile2 = obj->attribute("PFILE2","");
			currItem->Pfile3 = obj->attribute("PFILE3","");
			currItem->IProfile = obj->attribute("PRFILE","");
			currItem->EmProfile = obj->attribute("EPROF","");
			currItem->IRender = QStoInt(obj->attribute("IRENDER","1"));
			currItem->UseEmbedded = QStoInt(obj->attribute("EMBEDDED","1"));
			view->LoadPict(currItem->Pfile, z);
			currItem->LocalScX = scx;
			currItem->LocalScY = scy;
			currItem->PicArt = QStoInt(obj->attribute("PICART"));
			currItem->BBoxX = QStodouble(obj->attribute("BBOXX"));
			currItem->BBoxH = QStodouble(obj->attribute("BBOXH"));
			currItem->ScaleType = QStoInt(obj->attribute("SCALETYPE","1"));
			currItem->AspectRatio = QStoInt(obj->attribute("RATIO","0"));
		}
		currItem->LineSp = QStodouble(obj->attribute("LINESP"));
		currItem->LineSpMode = QStoInt(obj->attribute("LINESPMode","0"));
		currItem->convertTo(pt);
		break;
	case PageItem::Line:
		z = doc->itemAdd(PageItem::Line, PageItem::Unspecified, x, y, w, h, pw, "None", Pcolor2, !ScApp->view->Mpressed);
		currItem = doc->Items.at(z);
		break;
	case PageItem::Polygon:
		z = doc->itemAdd(PageItem::Polygon, PageItem::Unspecified, x, y, w, h, pw, Pcolor, Pcolor2, !ScApp->view->Mpressed);
		currItem = doc->Items.at(z);
		break;
	case PageItem::PolyLine:
		z = doc->itemAdd(PageItem::PolyLine, PageItem::Unspecified, x, y, w, h, pw, Pcolor, Pcolor2, !ScApp->view->Mpressed);
		currItem = doc->Items.at(z);
		break;
	}
	currItem->FrameType = QStoInt(obj->attribute("FRTYPE", "0"));
	currItem->startArrowIndex =  QStoInt(obj->attribute("startArrowIndex","0"));
	currItem->endArrowIndex =  QStoInt(obj->attribute("endArrowIndex","0"));
	currItem->NamedLStyle = obj->attribute("NAMEDLST", "");
	currItem->isBookmark = QStoInt(obj->attribute("BOOKMARK"));
	if ((currItem->isBookmark) && (doc->BookMarks.count() == 0))
		doc->OldBM = true;
	currItem->BMnr = QStoInt(obj->attribute("BookNr","0"));
	currItem->textAlignment = QStoInt(obj->attribute("ALIGN","0"));
	currItem->setImageFlippedH(QStoInt(obj->attribute("FLIPPEDH")));
	currItem->setImageFlippedV(QStoInt(obj->attribute("FLIPPEDV")));
	currItem->RadRect = QStodouble(obj->attribute("RADRECT","0"));
	currItem->ClipEdited = QStoInt(obj->attribute("CLIPEDIT", "0"));
	currItem->setFillColor(Pcolor);
	currItem->setLineColor(Pcolor2);
	currItem->setFillShade(QStoInt(obj->attribute("SHADE")));
	currItem->setLineShade(QStoInt(obj->attribute("SHADE2")));
	if (currItem->fillColor() != "None")
		currItem->fillQColor = doc->PageColors[currItem->fillColor()].getShadeColorProof(currItem->fillShade());
	if (currItem->lineColor() != "None")
		currItem->strokeQColor = doc->PageColors[currItem->lineColor()].getShadeColorProof(currItem->lineShade());
	currItem->TxtStroke = obj->attribute("TXTSTROKE", "None");
	currItem->TxtFill = obj->attribute("TXTFILL", "Black");
	currItem->ShTxtStroke = QStoInt(obj->attribute("TXTSTRSH", "100"));
	currItem->ShTxtFill = QStoInt(obj->attribute("TXTFILLSH", "100"));
	currItem->TxtScale=qRound(QStodouble(obj->attribute("TXTSCALE", "100")) * 10);
	currItem->TxtScaleV=qRound(QStodouble(obj->attribute("TXTSCALEV", "100")) * 10);
	currItem->TxtBase=qRound(QStodouble(obj->attribute("TXTBASE", "0")) * 10);
	currItem->TxtShadowX=qRound(QStodouble(obj->attribute("TXTSHX", "5")) * 10);
	currItem->TxtShadowY=qRound(QStodouble(obj->attribute("TXTSHY", "-5")) * 10);
	currItem->TxtOutline=qRound(QStodouble(obj->attribute("TXTOUT", "1")) * 10);
	currItem->TxtUnderPos=qRound(QStodouble(obj->attribute("TXTULP", "-0.1")) * 10);
	currItem->TxtUnderWidth=qRound(QStodouble(obj->attribute("TXTULW", "-0.1")) * 10);
	currItem->TxtStrikePos=qRound(QStodouble(obj->attribute("TXTSTP", "-0.1")) * 10);
	currItem->TxtStrikeWidth=qRound(QStodouble(obj->attribute("TXTSTW", "-0.1")) * 10);
	currItem->TxTStyle = QStoInt(obj->attribute("TXTSTYLE", "0"));
	currItem->Rot = QStodouble(obj->attribute("ROT"));
	currItem->Extra = QStodouble(obj->attribute("EXTRA"));
	currItem->TExtra = QStodouble(obj->attribute("TEXTRA", "1"));
	currItem->BExtra = QStodouble(obj->attribute("BEXTRA", "1"));
	currItem->RExtra = QStodouble(obj->attribute("REXTRA", "1"));
	currItem->PLineArt = Qt::PenStyle(QStoInt(obj->attribute("PLINEART")));
	currItem->PLineEnd = Qt::PenCapStyle(QStoInt(obj->attribute("PLINEEND","0")));
	currItem->PLineJoin = Qt::PenJoinStyle(QStoInt(obj->attribute("PLINEJOIN","0")));
	currItem->setPrintable(QStoInt(obj->attribute("PRINTABLE")));
	currItem->isAnnotation = QStoInt(obj->attribute("ANNOTATION","0"));
	currItem->AnType = QStoInt(obj->attribute("ANTYPE","0"));
	QString AnName = obj->attribute("ANNAME","");
	if (!AnName.isEmpty())
	{
		if (currItem->itemName() == AnName)
			currItem->AutoName = true;
		else
		{
			currItem->setItemName(AnName);
			currItem->AutoName = false;
		}
	}
	currItem->AnAction = obj->attribute("ANACTION","");
	currItem->An_E_act = obj->attribute("ANEACT","");
	currItem->An_X_act = obj->attribute("ANXACT","");
	currItem->An_D_act = obj->attribute("ANDACT","");
	currItem->An_Fo_act = obj->attribute("ANFOACT","");
	currItem->An_Bl_act = obj->attribute("ANBLACT","");
	currItem->An_K_act = obj->attribute("ANKACT","");
	currItem->An_F_act = obj->attribute("ANFACT","");
	currItem->An_V_act = obj->attribute("ANVACT","");
	currItem->An_C_act = obj->attribute("ANCACT","");
	currItem->AnActType = QStoInt(obj->attribute("ANACTYP","0"));
	currItem->An_Extern = obj->attribute("ANEXTERN","");
	if ((!currItem->An_Extern.isEmpty()) && (currItem->AnActType != 8))
	{
		QFileInfo efp(currItem->An_Extern);
		currItem->An_Extern = efp.absFilePath();
	}
	currItem->AnZiel = QStoInt(obj->attribute("ANZIEL","0"));
	currItem->AnToolTip = obj->attribute("ANTOOLTIP","");
	currItem->AnRollOver = obj->attribute("ANROLL","");
	currItem->AnDown = obj->attribute("ANDOWN","");
	currItem->AnBwid = QStoInt(obj->attribute("ANBWID","1"));
	currItem->AnBsty = QStoInt(obj->attribute("ANBSTY","0"));
	currItem->AnFeed = QStoInt(obj->attribute("ANFEED","1"));
	currItem->AnFlag = QStoInt(obj->attribute("ANFLAG","0"));
	currItem->AnFont = QStoInt(obj->attribute("ANFONT","4"));
	currItem->AnFormat = QStoInt(obj->attribute("ANFORMAT","0"));
	currItem->AnVis = QStoInt(obj->attribute("ANVIS","0"));
	currItem->AnIsChk = static_cast<bool>(QStoInt(obj->attribute("ANCHK","0")));
	currItem->AnAAact = static_cast<bool>(QStoInt(obj->attribute("ANAA","0")));
	currItem->AnHTML = static_cast<bool>(QStoInt(obj->attribute("ANHTML","0")));
	currItem->AnUseIcons = static_cast<bool>(QStoInt(obj->attribute("ANICON","0")));
	currItem->AnChkStil = QStoInt(obj->attribute("ANCHKS","0"));
	currItem->AnMaxChar = QStoInt(obj->attribute("ANMC","-1"));
	currItem->AnBColor = obj->attribute("ANBCOL","None");
	currItem->AnIPlace = QStoInt(obj->attribute("ANPLACE","1"));
	currItem->AnScaleW = QStoInt(obj->attribute("ANSCALE","0"));
	currItem->TopLine = static_cast<bool>(QStoInt(obj->attribute("TopLine","0")));
	currItem->LeftLine = static_cast<bool>(QStoInt(obj->attribute("LeftLine","0")));
	currItem->RightLine = static_cast<bool>(QStoInt(obj->attribute("RightLine","0")));
	currItem->BottomLine = static_cast<bool>(QStoInt(obj->attribute("BottomLine","0")));
	currItem->isTableItem = static_cast<bool>(QStoInt(obj->attribute("isTableItem","0")));
	currItem->TopLinkID =  QStoInt(obj->attribute("TopLINK","-1"));
	currItem->LeftLinkID =  QStoInt(obj->attribute("LeftLINK","-1"));
	currItem->RightLinkID =  QStoInt(obj->attribute("RightLINK","-1"));
	currItem->BottomLinkID =  QStoInt(obj->attribute("BottomLINK","-1"));
	currItem->PoShow = QStoInt(obj->attribute("PLTSHOW","0"));
	currItem->BaseOffs = QStodouble(obj->attribute("BASEOF","0"));
	currItem->setTextFlowsAroundFrame(QStoInt(obj->attribute("TEXTFLOW")));
	currItem->setTextFlowUsesBoundingBox(QStoInt(obj->attribute("TEXTFLOW2","0")));
	currItem->ISize = qRound(QStodouble(obj->attribute("ISIZE","12")) * 10);
	if (obj->hasAttribute("EXTRAV"))
		currItem->ExtraV = qRound(QStodouble(obj->attribute("EXTRAV","0")) / QStodouble(obj->attribute("ISIZE","12")) * 1000.0);
	else
		currItem->ExtraV = QStoInt(obj->attribute("TXTKERN"));
	currItem->DashOffset = QStodouble(obj->attribute("DASHOFF","0.0"));
	currItem->Reverse = static_cast<bool>(QStoInt(obj->attribute("REVERS","0")));
	currItem->setLocked(static_cast<bool>(QStoInt(obj->attribute("LOCK","0"))));
	currItem->setSizeLocked(static_cast<bool>(QStoInt(obj->attribute("LOCKR","0"))));
	currItem->setFillTransparency(QStodouble(obj->attribute("TransValue","0.0")));
	if (obj->hasAttribute("TransValueS"))
		currItem->setLineTransparency(QStodouble(obj->attribute("TransValueS","0.0")));
	else
		currItem->setLineTransparency(QStodouble(obj->attribute("TransValue","0.0")));
	if (QStoInt(obj->attribute("TRANSPARENT","0")) == 1)
		currItem->setFillColor("None");
	currItem->Cols = QStoInt(obj->attribute("COLUMNS","1"));
	currItem->ColGap = QStodouble(obj->attribute("COLGAP","0.0"));
	if (QStoInt(obj->attribute("LAYER","0")) != -1)
		currItem->LayerNr = QStoInt(obj->attribute("LAYER","0"));
	currItem->setTextFlowUsesContourLine(QStoInt(obj->attribute("TEXTFLOW3","0")));
	tmp = "";
	if ((obj->hasAttribute("GROUPS")) && (QStoInt(obj->attribute("NUMGROUP","0")) != 0))
	{
		tmp = obj->attribute("GROUPS");
		QTextStream fg(&tmp, IO_ReadOnly);
		currItem->Groups.clear();
		for (int cx = 0; cx < QStoInt(obj->attribute("NUMGROUP","0")); ++cx)
		{
			fg >> xi;
			currItem->Groups.push(xi);
		}
		tmp = "";
	}
	else
		currItem->Groups.clear();
	tmp = "";
	currItem->TabValues.clear();
	if ((obj->hasAttribute("NUMTAB")) && (QStoInt(obj->attribute("NUMTAB","0")) != 0))
	{
		struct PageItem::TabRecord tb;
		tmp = obj->attribute("TABS");
		QTextStream tgv(&tmp, IO_ReadOnly);
		for (int cxv = 0; cxv < QStoInt(obj->attribute("NUMTAB","0")); cxv += 2)
		{
			tgv >> xf;
			tgv >> xf2;
			tb.tabPosition = xf2;
			tb.tabType = static_cast<int>(xf);
			tb.tabFillChar = QChar();
			currItem->TabValues.append(tb);
		}
		tmp = "";
	}
	else
	{
		IT = obj->firstChild();
		while(!IT.isNull())
		{
			QDomElement it = IT.toElement();
			if (it.tagName()=="Tabs")
			{
				struct PageItem::TabRecord tb;
				tb.tabPosition = QStodouble(it.attribute("Pos"));
				tb.tabType = QStoInt(it.attribute("Type"));
				QString tbCh = "";
				tbCh = it.attribute("Fill","");
				if (tbCh.isEmpty())
					tb.tabFillChar = QChar();
				else
					tb.tabFillChar = tbCh[0];
				currItem->TabValues.append(tb);
			}
			IT=IT.nextSibling();
		}
	}
	if ((obj->hasAttribute("NUMDASH")) && (QStoInt(obj->attribute("NUMDASH","0")) != 0))
	{
		tmp = obj->attribute("DASHS");
		QTextStream dgv(&tmp, IO_ReadOnly);
		currItem->DashValues.clear();
		for (int cxv = 0; cxv < QStoInt(obj->attribute("NUMDASH","0")); ++cxv)
		{
			dgv >> xf;
			currItem->DashValues.append(xf);
		}
		tmp = "";
	}
	else
		currItem->DashValues.clear();
	tmp = "";
	if (obj->hasAttribute("NUMPO"))
	{
		currItem->PoLine.resize(obj->attribute("NUMPO").toUInt());
		tmp = obj->attribute("POCOOR");
		QTextStream fp(&tmp, IO_ReadOnly);
		for (uint cx=0; cx<obj->attribute("NUMPO").toUInt(); ++cx)
		{
			fp >> xf;
			fp >> yf;
			currItem->PoLine.setPoint(cx, xf, yf);
		}
	}
	else
		currItem->PoLine.resize(0);
	tmp = "";
	if (obj->hasAttribute("NUMCO"))
	{
		currItem->ContourLine.resize(obj->attribute("NUMCO").toUInt());
		tmp = obj->attribute("COCOOR");
		QTextStream fp(&tmp, IO_ReadOnly);
		for (uint cx=0; cx<obj->attribute("NUMCO").toUInt(); ++cx)
		{
			fp >> xf;
			fp >> yf;
			currItem->ContourLine.setPoint(cx, xf, yf);
		}
	}
	else
		currItem->ContourLine = currItem->PoLine.copy();
	if (!currItem->asLine())
		currItem->Clip = FlattenPath(currItem->PoLine, currItem->Segments);
	else
	{
		int ph = static_cast<int>(QMAX(1.0, currItem->Pwidth / 2.0));
		currItem->Segments.clear();
		currItem->PoLine.resize(0);
		currItem->Clip.setPoints(4, -ph,-ph, static_cast<int>(currItem->Width+ph),-ph,
		                  static_cast<int>(currItem->Width+ph),static_cast<int>(currItem->Height+ph),
		                  -ph,static_cast<int>(currItem->Height+ph));
		currItem->Height = 1;
	}
	if (currItem->asImageFrame())
		view->AdjustPictScale(currItem);
	if (!(currItem->asTextFrame()) && !(currItem->asPathText()))
		currItem->IFont = doc->toolSettings.defFont;
	currItem->GrType = QStoInt(obj->attribute("GRTYP","0"));
	QString GrColor;
	QString GrColor2;
	int GrShade;
	int GrShade2;
	if (currItem->GrType != 0)
	{
		currItem->GrStartX = QStodouble(obj->attribute("GRSTARTX","0.0"));
		currItem->GrStartY = QStodouble(obj->attribute("GRSTARTY","0.0"));
		currItem->GrEndX = QStodouble(obj->attribute("GRENDX","0.0"));
		currItem->GrEndY = QStodouble(obj->attribute("GRENDY","0.0"));
		GrColor = obj->attribute("GRCOLOR","");
		if (!GrColor.isEmpty())
		{
			GrColor2 = obj->attribute("GRCOLOR2","");
			GrShade = QStoInt(obj->attribute("GRSHADE","100"));
			GrShade2 = QStoInt(obj->attribute("GRSHADE2","100"));
		}
	}
	if (currItem->GrType != 0)
	{
		currItem->fill_gradient.clearStops();
		if ((!GrColor.isEmpty()) && (!GrColor2.isEmpty()))
		{
			if (currItem->GrType == 5)
			{
				if ((GrColor != "None") && (!GrColor.isEmpty()))
					currItem->SetFarbe(&tmpc, GrColor, GrShade);
				currItem->fill_gradient.addStop(tmpc, 0.0, 0.5, 1.0, GrColor, GrShade);
				if ((GrColor2 != "None") && (!GrColor2.isEmpty()))
					currItem->SetFarbe(&tmpc, GrColor2, GrShade2);
				currItem->fill_gradient.addStop(tmpc, 1.0, 0.5, 1.0, GrColor2, GrShade2);
			}
			else
			{
				if ((GrColor2 != "None") && (!GrColor2.isEmpty()))
					currItem->SetFarbe(&tmpc, GrColor2, GrShade2);
				currItem->fill_gradient.addStop(tmpc, 0.0, 0.5, 1.0, GrColor2, GrShade2);
				if ((GrColor != "None") && (!GrColor.isEmpty()))
					currItem->SetFarbe(&tmpc, GrColor, GrShade);
				currItem->fill_gradient.addStop(tmpc, 1.0, 0.5, 1.0, GrColor, GrShade);
			}
		}
		view->updateGradientVectors(currItem);
	}
	view->setRedrawBounding(currItem);
	currItem->OwnPage = view->OnPage(currItem);
	return currItem;
}

void FileLoader::GetStyle(QDomElement *pg, struct ParagraphStyle *vg, QValueList<ParagraphStyle> &docParagraphStyles, ScribusDoc* doc, bool fl)
{
	bool fou;
	QString tmpf, tmf, tmV;
	double xf, xf2;
	fou = false;
	bool tabEQ = false;
	vg->Vname = pg->attribute("NAME");
	vg->LineSpaMode = QStoInt(pg->attribute("LINESPMode","0"));
	vg->LineSpa = QStodouble(pg->attribute("LINESP"));
	vg->Indent = QStodouble(pg->attribute("INDENT","0"));
	vg->First = QStodouble(pg->attribute("FIRST","0"));
	vg->textAlignment = QStoInt(pg->attribute("ALIGN"));
	vg->gapBefore = QStodouble(pg->attribute("VOR","0"));
	vg->gapAfter = QStodouble(pg->attribute("NACH","0"));
	tmpf = pg->attribute("FONT", doc->toolSettings.defFont);
	if ((!prefsManager->appPrefs.AvailFonts.find(tmpf)) || (!prefsManager->appPrefs.AvailFonts[tmpf]->UseFont))
	{
		if ((!prefsManager->appPrefs.GFontSub.contains(tmpf)) || (!prefsManager->appPrefs.AvailFonts[prefsManager->appPrefs.GFontSub[tmpf]]->UseFont))
		{
			newReplacement = true;
			ReplacedFonts.insert(tmpf, doc->toolSettings.defFont);
		}
		else
			ReplacedFonts.insert(tmpf, prefsManager->appPrefs.GFontSub[tmpf]);
	}
	else
	{
		if (!doc->UsedFonts.contains(tmpf))
		{
//			QFont fo = prefsManager->appPrefs.AvailFonts[tmpf]->Font;
//			fo.setPointSize(qRound(doc->toolSettings.defSize / 10.0));
			doc->AddFont(tmpf, qRound(doc->toolSettings.defSize / 10.0));
		}
	}
	vg->Font = tmpf;
	vg->FontSize = qRound(QStodouble(pg->attribute("FONTSIZE","12")) * 10.0);
	vg->Drop = static_cast<bool>(QStoInt(pg->attribute("DROP","0")));
	vg->DropLin = QStoInt(pg->attribute("DROPLIN","2"));
	vg->DropDist = QStodouble(pg->attribute("DROPDIST","0"));
	vg->FontEffect = QStoInt(pg->attribute("EFFECT","0"));
	vg->FColor = pg->attribute("FCOLOR", doc->toolSettings.dBrush);
	vg->FShade = QStoInt(pg->attribute("FSHADE", "100"));
	vg->SColor = pg->attribute("SCOLOR", doc->toolSettings.dPen);
	vg->SShade = QStoInt(pg->attribute("SSHADE", "100"));
	vg->BaseAdj = static_cast<bool>(QStoInt(pg->attribute("BASE","0")));
	vg->txtShadowX = qRound(QStodouble(pg->attribute("TXTSHX", "5")) * 10);
	vg->txtShadowY = qRound(QStodouble(pg->attribute("TXTSHY", "-5")) * 10);
	vg->txtOutline = qRound(QStodouble(pg->attribute("TXTOUT", "1")) * 10);
	vg->txtUnderPos = qRound(QStodouble(pg->attribute("TXTULP", "-0.1")) * 10);
	vg->txtUnderWidth = qRound(QStodouble(pg->attribute("TXTULW", "-0.1")) * 10);
	vg->txtStrikePos = qRound(QStodouble(pg->attribute("TXTSTP", "-0.1")) * 10);
	vg->txtStrikeWidth = qRound(QStodouble(pg->attribute("TXTSTW", "-0.1")) * 10);
	vg->scaleH = qRound(QStodouble(pg->attribute("SCALEH", "100")) * 10);
	vg->scaleV = qRound(QStodouble(pg->attribute("SCALEV", "100")) * 10);
	vg->baseOff = qRound(QStodouble(pg->attribute("BASEO", "0")) * 10);
	vg->kernVal = qRound(QStodouble(pg->attribute("KERN", "0")) * 10);
	vg->TabValues.clear();
	if ((pg->hasAttribute("NUMTAB")) && (QStoInt(pg->attribute("NUMTAB","0")) != 0))
	{
		struct PageItem::TabRecord tb;
		QString tmp = pg->attribute("TABS");
		QTextStream tgv(&tmp, IO_ReadOnly);
		vg->TabValues.clear();
		for (int cxv = 0; cxv < QStoInt(pg->attribute("NUMTAB","0")); cxv += 2)
		{
			tgv >> xf;
			tgv >> xf2;
			tb.tabPosition = xf2;
			tb.tabType = static_cast<int>(xf);
			tb.tabFillChar = QChar();
			vg->TabValues.append(tb);
		}
		tmp = "";
	}
	else
	{
		QDomNode IT = pg->firstChild();
		while(!IT.isNull())
		{
			QDomElement it = IT.toElement();
			if (it.tagName()=="Tabs")
			{
				struct PageItem::TabRecord tb;
				tb.tabPosition = QStodouble(it.attribute("Pos"));
				tb.tabType = QStoInt(it.attribute("Type"));
				QString tbCh = "";
				tbCh = it.attribute("Fill","");
				if (tbCh.isEmpty())
					tb.tabFillChar = QChar();
				else
					tb.tabFillChar = tbCh[0];
				vg->TabValues.append(tb);
			}
			IT=IT.nextSibling();
		}
	}
	for (uint xx=0; xx<docParagraphStyles.count(); ++xx)
	{
		if (vg->Vname == docParagraphStyles[xx].Vname)
		{
			struct PageItem::TabRecord tb;
			tabEQ = false;
			if ((docParagraphStyles[xx].TabValues.count() == 0) && (vg->TabValues.count() == 0))
				tabEQ = true;
			else
			{
				for (uint t1 = 0; t1 < docParagraphStyles[xx].TabValues.count(); t1++)
				{
					tb.tabPosition = docParagraphStyles[xx].TabValues[t1].tabPosition;
					tb.tabType = docParagraphStyles[xx].TabValues[t1].tabType;
					tb.tabFillChar = docParagraphStyles[xx].TabValues[t1].tabFillChar;
					for (uint t2 = 0; t2 < vg->TabValues.count(); t2++)
					{
						struct PageItem::TabRecord tb2;
						tb2.tabPosition = vg->TabValues[t2].tabPosition;
						tb2.tabType = vg->TabValues[t2].tabType;
						tb2.tabFillChar = vg->TabValues[t2].tabFillChar;
						if ((tb2.tabFillChar == tb.tabFillChar) && (tb2.tabPosition == tb.tabPosition) && (tb2.tabType == tb.tabType))
						{
							tabEQ = true;
							break;
						}
					}
					if (tabEQ)
						break;
				}
			}
			if ((vg->LineSpa == docParagraphStyles[xx].LineSpa) &&
					(vg->LineSpaMode == docParagraphStyles[xx].LineSpaMode) &&
					(vg->Indent == docParagraphStyles[xx].Indent) &&
					(vg->First == docParagraphStyles[xx].First) &&
					(vg->textAlignment == docParagraphStyles[xx].textAlignment) &&
					(vg->gapBefore == docParagraphStyles[xx].gapBefore) &&
					(vg->gapAfter == docParagraphStyles[xx].gapAfter) &&
					(vg->Font == docParagraphStyles[xx].Font) && (tabEQ) &&
					(vg->Drop == docParagraphStyles[xx].Drop) &&
					(vg->DropLin == docParagraphStyles[xx].DropLin) &&
					(vg->DropDist == docParagraphStyles[xx].DropDist) &&
					(vg->FontEffect == docParagraphStyles[xx].FontEffect) &&
					(vg->FColor == docParagraphStyles[xx].FColor) &&
					(vg->FShade == docParagraphStyles[xx].FShade) &&
					(vg->SColor == docParagraphStyles[xx].SColor) &&
					(vg->SShade == docParagraphStyles[xx].SShade) &&
					(vg->BaseAdj == docParagraphStyles[xx].BaseAdj) &&
					(vg->txtShadowX == docParagraphStyles[xx].txtShadowX) &&
					(vg->txtShadowY == docParagraphStyles[xx].txtShadowY) &&
					(vg->txtOutline == docParagraphStyles[xx].txtOutline) &&
					(vg->txtUnderPos == docParagraphStyles[xx].txtUnderPos) &&
					(vg->txtUnderWidth == docParagraphStyles[xx].txtUnderWidth) &&
					(vg->txtStrikePos == docParagraphStyles[xx].txtStrikePos) &&
					(vg->txtStrikeWidth == docParagraphStyles[xx].txtStrikeWidth) &&
					(vg->scaleH == docParagraphStyles[xx].scaleH) &&
					(vg->scaleV == docParagraphStyles[xx].scaleV) &&
					(vg->baseOff == docParagraphStyles[xx].baseOff) &&
					(vg->kernVal == docParagraphStyles[xx].kernVal) &&
					(vg->FontSize == docParagraphStyles[xx].FontSize))
			{
				if (fl)
				{
					DoVorl[VorlC] = tmV.setNum(xx);
					VorlC++;
				}
				fou = true;
			}
			else
			{
				vg->Vname = "Copy of "+docParagraphStyles[xx].Vname;
				fou = false;
			}
			break;
		}
	}
	if (!fou)
	{
		for (uint xx=0; xx< docParagraphStyles.count(); ++xx)
		{
			struct PageItem::TabRecord tb;
			tabEQ = false;
			for (uint t1 = 0; t1 < docParagraphStyles[xx].TabValues.count(); t1++)
			{
				tb.tabPosition = docParagraphStyles[xx].TabValues[t1].tabPosition;
				tb.tabType = docParagraphStyles[xx].TabValues[t1].tabType;
				tb.tabFillChar = docParagraphStyles[xx].TabValues[t1].tabFillChar;
				for (uint t2 = 0; t2 < vg->TabValues.count(); t2++)
				{
					struct PageItem::TabRecord tb2;
					tb2.tabPosition = vg->TabValues[t2].tabPosition;
					tb2.tabType = vg->TabValues[t2].tabType;
					tb2.tabFillChar = vg->TabValues[t2].tabFillChar;
					if ((tb2.tabFillChar == tb.tabFillChar) && (tb2.tabPosition == tb.tabPosition) && (tb2.tabType == tb.tabType))
					{
						tabEQ = true;
						break;
					}
				}
				if (tabEQ)
					break;
			}
			if ((vg->LineSpa == docParagraphStyles[xx].LineSpa) &&
				(vg->LineSpaMode == docParagraphStyles[xx].LineSpaMode) &&
				(vg->Indent == docParagraphStyles[xx].Indent) &&
				(vg->First == docParagraphStyles[xx].First) &&
				(vg->textAlignment == docParagraphStyles[xx].textAlignment) &&
				(vg->gapBefore == docParagraphStyles[xx].gapBefore) &&
				(vg->gapAfter == docParagraphStyles[xx].gapAfter) &&
				(vg->Font == docParagraphStyles[xx].Font) && (tabEQ) &&
				(vg->Drop == docParagraphStyles[xx].Drop) &&
				(vg->DropLin == docParagraphStyles[xx].DropLin) &&
				(vg->DropDist == docParagraphStyles[xx].DropDist) &&
				(vg->FontEffect == docParagraphStyles[xx].FontEffect) &&
				(vg->FColor == docParagraphStyles[xx].FColor) &&
				(vg->FShade == docParagraphStyles[xx].FShade) &&
				(vg->SColor == docParagraphStyles[xx].SColor) &&
				(vg->SShade == docParagraphStyles[xx].SShade) &&
				(vg->BaseAdj == docParagraphStyles[xx].BaseAdj) &&
				(vg->txtShadowX == docParagraphStyles[xx].txtShadowX) &&
				(vg->txtShadowY == docParagraphStyles[xx].txtShadowY) &&
				(vg->txtOutline == docParagraphStyles[xx].txtOutline) &&
				(vg->txtUnderPos == docParagraphStyles[xx].txtUnderPos) &&
				(vg->txtUnderWidth == docParagraphStyles[xx].txtUnderWidth) &&
				(vg->txtStrikePos == docParagraphStyles[xx].txtStrikePos) &&
				(vg->txtStrikeWidth == docParagraphStyles[xx].txtStrikeWidth) &&
				(vg->scaleH == docParagraphStyles[xx].scaleH) &&
				(vg->scaleV == docParagraphStyles[xx].scaleV) &&
				(vg->baseOff == docParagraphStyles[xx].baseOff) &&
				(vg->kernVal == docParagraphStyles[xx].kernVal) &&
				(vg->FontSize == docParagraphStyles[xx].FontSize))
			{
				vg->Vname = docParagraphStyles[xx].Vname;
				fou = true;
				if (fl)
				{
					DoVorl[VorlC] = tmV.setNum(xx);
					VorlC++;
				}
				break;
			}
		}
	}
	if (!fou)
	{
		docParagraphStyles.append(*vg);
		if (fl)
		{
			DoVorl[VorlC] = tmV.setNum(docParagraphStyles.count()-1);
			VorlC++;
		}
	}
}
