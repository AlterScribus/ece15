/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SCRIBUS13FORMAT_H
#define SCRIBUS13FORMAT_H

#include "pluginapi.h"
#include "loadsaveplugin.h"
#include "scfonts.h"
#include "scribusstructs.h"

#include <qdom.h>
#include <qmap.h>
#include <qptrlist.h>
#include <qstring.h>
#include <qvaluelist.h>

class PLUGIN_API Scribus13Format : public LoadSavePlugin
{
	Q_OBJECT

	public:
		// Standard plugin implementation
		Scribus13Format();
		virtual ~Scribus13Format();
		virtual const QString fullTrName() const;
		virtual const AboutData* getAboutData() const;
		virtual void deleteAboutData(const AboutData* about) const;
		virtual void languageChange();
		virtual bool fileSupported(QIODevice* file, const QString & fileName=QString::null) const;

		virtual bool loadFile(const QString & fileName, const FileFormat & fmt, int flags, int index = 0);
		virtual bool saveFile(const QString & fileName, const FileFormat & fmt);
		virtual void addToMainWindowMenu(ScribusMainWindow *) {};

		// Special features - .sla page extraction support
		virtual bool loadPage(const QString & fileName, int pageNumber, bool Mpage, QString renamedPageName=QString::null);
		virtual bool readStyles(const QString& fileName, ScribusDoc* doc, QValueList<ParagraphStyle> &docParagraphStyles);
		virtual bool readLineStyles(const QString& fileName, QMap<QString,multiLine> *Sty);
		virtual bool readColors(const QString& fileName, ColorList & colors);
		virtual bool readPageCount(const QString& fileName, int *num1, int *num2, QStringList & masterPageNames);
		virtual void getReplacedFontData(bool & getNewReplacement, QMap<QString,QString> &getReplacedFonts, QPtrList<Foi> &getDummyFois);

	private:
		void registerFormats();
		//Scribus Doc vars, not plugin vars
		void GetItemText(QDomElement *it, ScribusDoc *doc, PageItem* obj, LastStyles* last, bool impo=false, bool VorLFound=false);
		void readParagraphStyle(ParagraphStyle& vg, const QDomElement& pg, SCFonts &avail, ScribusDoc *doc);
		PageItem* PasteItem(QDomElement *obj, ScribusDoc *doc);
		void GetStyle(QDomElement *pg, ParagraphStyle *vg, QValueList<ParagraphStyle> &docParagraphStyles, ScribusDoc* doc, bool fl);
		QString readSLA(const QString & fileName);
		QString AskForFont(SCFonts &avail, QString fStr, ScribusDoc *doc);
		void WritePages(ScribusDoc *doc, QDomDocument *docu, QDomElement *dc, QProgressBar *dia2, uint maxC, bool master);
		void WriteObjects(ScribusDoc *doc, QDomDocument *docu, QDomElement *dc, QProgressBar *dia2, uint maxC, int master);
		void SetItemProps(QDomElement *ob, PageItem* item, bool newFormat);
		QValueList<int> LFrames;
		QPtrList<Foi> dummyFois;
		bool newReplacement;
		QMap<QString,QString> ReplacedFonts;
		QMap<uint,QString> DoVorl;
		uint VorlC;
};

extern "C" PLUGIN_API int scribus13format_getPluginAPIVersion();
extern "C" PLUGIN_API ScPlugin* scribus13format_getPlugin();
extern "C" PLUGIN_API void scribus13format_freePlugin(ScPlugin* plugin);

#endif
