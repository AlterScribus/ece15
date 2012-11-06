/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QByteArray>
#include <QCursor>
#include <QDrag>
#include <QFile>
#include <QInputDialog>
#include <QList>
#include <QMimeData>
#include <QRegExp>
#include <QStack>
#include <QDebug>
#include "slaoutput.h"
#include <ErrorCodes.h>
#include <GlobalParams.h>
#include <ViewerPreferences.h>
#include <poppler-config.h>

#include "importpdf.h"

#include <cstdlib>

#include "commonstrings.h"
#include "loadsaveplugin.h"
#include "pagesize.h"
#include "pdfoptions.h"
#include "prefscontext.h"
#include "prefsfile.h"
#include "prefsmanager.h"
#include "prefstable.h"
#include "rawimage.h"
#include "scclocale.h"
#include "sccolorengine.h"
#include "scconfig.h"
#include "scmimedata.h"
#include "scpaths.h"
#include "scribus.h"
#include "scribusXml.h"
#include "scribuscore.h"
#include "sctextstream.h"
#include "selection.h"
#include "undomanager.h"
#include "util.h"
#include "util_formats.h"
#include "util_ghostscript.h"
#include "util_icon.h"
#include "util_math.h"

#include "ui/customfdialog.h"
#include "ui/missing.h"
#include "ui/multiprogressdialog.h"
#include "ui/propertiespalette.h"

PdfPlug::PdfPlug(ScribusDoc* doc, int flags)
{
	tmpSele = new Selection(this, false);
	m_Doc = doc;
	importerFlags = flags;
	interactive = (flags & LoadSavePlugin::lfInteractive);
	progressDialog = NULL;
}

QImage PdfPlug::readThumbnail(QString fName)
{
	QString tmp, cmd1, cmd2;
	QString pdfFile = QDir::toNativeSeparators(fName);
	QString tmpFile = QDir::toNativeSeparators(ScPaths::getTempFileDir() + "sc.png");
	int ret = -1;
	tmp.setNum(1);
	QStringList args;
	args.append("-r72");
	args.append("-sOutputFile="+tmpFile);
	args.append("-dFirstPage="+tmp);
	args.append("-dLastPage="+tmp);
	args.append(pdfFile);
	ret = callGS(args);
	if (ret == 0)
	{
		QImage image;
		image.load(tmpFile);
		QFile::remove(tmpFile);
		image.setText("XSize", QString("%1").arg(image.width()));
		image.setText("YSize", QString("%1").arg(image.height()));
		return image;
	}
	return QImage();
}

bool PdfPlug::import(QString fNameIn, const TransactionSettings& trSettings, int flags, bool showProgress)
{
	QString fName = fNameIn;
	bool success = false;
	interactive = (flags & LoadSavePlugin::lfInteractive);
	importerFlags = flags;
	cancel = false;
	double b, h;
	bool ret = false;
	QFileInfo fi = QFileInfo(fName);
	if ( !ScCore->usingGUI() )
	{
		interactive = false;
		showProgress = false;
	}
	baseFile = QDir::cleanPath(QDir::toNativeSeparators(fi.absolutePath()+"/"));
	if ( showProgress )
	{
		ScribusMainWindow* mw=(m_Doc==0) ? ScCore->primaryMainWindow() : m_Doc->scMW();
		progressDialog = new MultiProgressDialog( tr("Importing: %1").arg(fi.fileName()), CommonStrings::tr_Cancel, mw );
		QStringList barNames, barTexts;
		barNames << "GI";
		barTexts << tr("Analyzing File:");
		QList<bool> barsNumeric;
		barsNumeric << false;
		progressDialog->addExtraProgressBars(barNames, barTexts, barsNumeric);
		progressDialog->setOverallTotalSteps(3);
		progressDialog->setOverallProgress(0);
		progressDialog->setProgress("GI", 0);
		progressDialog->show();
		connect(progressDialog, SIGNAL(canceled()), this, SLOT(cancelRequested()));
		qApp->processEvents();
	}
	else
		progressDialog = NULL;
/* Set default Page to size defined in Preferences */
	b = 0.0;
	h = 0.0;
	if (progressDialog)
	{
		progressDialog->setOverallProgress(1);
		qApp->processEvents();
	}
	if (b == 0.0)
		b = PrefsManager::instance()->appPrefs.docSetupPrefs.pageWidth;
	if (h == 0.0)
		h = PrefsManager::instance()->appPrefs.docSetupPrefs.pageHeight;
	docWidth = b;
	docHeight = h;
	baseX = 0;
	baseY = 0;
	if (!interactive || (flags & LoadSavePlugin::lfInsertPage))
	{
		m_Doc->setPage(docWidth, docHeight, 0, 0, 0, 0, 0, 0, false, false);
		m_Doc->addPage(0);
		m_Doc->view()->addPage(0, true);
		baseX = 0;
		baseY = 0;
	}
	else
	{
		if (!m_Doc || (flags & LoadSavePlugin::lfCreateDoc))
		{
			m_Doc=ScCore->primaryMainWindow()->doFileNew(docWidth, docHeight, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0, 1, "Custom", true);
			ScCore->primaryMainWindow()->HaveNewDoc();
			ret = true;
			baseX = 0;
			baseY = 0;
			baseX = m_Doc->currentPage()->xOffset();
			baseY = m_Doc->currentPage()->yOffset();
		}
	}
	if ((!ret) && (interactive))
	{
		baseX = m_Doc->currentPage()->xOffset();
		baseY = m_Doc->currentPage()->yOffset();
	}
	if ((ret) || (!interactive))
	{
		if (docWidth > docHeight)
			m_Doc->setPageOrientation(1);
		else
			m_Doc->setPageOrientation(0);
		m_Doc->setPageSize("Custom");
	}
	Elements.clear();
	m_Doc->setLoading(true);
	m_Doc->DoDrawing = false;
	if (!(flags & LoadSavePlugin::lfLoadAsPattern))
		m_Doc->view()->updatesOn(false);
	m_Doc->scMW()->setScriptRunning(true);
	qApp->changeOverrideCursor(QCursor(Qt::WaitCursor));
	QString CurDirP = QDir::currentPath();
	QDir::setCurrent(fi.path());
	if (convert(fName))
	{
		tmpSele->clear();
		QDir::setCurrent(CurDirP);
		if ((Elements.count() > 1) && (!(importerFlags & LoadSavePlugin::lfCreateDoc)))
			m_Doc->groupObjectsList(Elements);
		m_Doc->DoDrawing = true;
		m_Doc->scMW()->setScriptRunning(false);
		m_Doc->setLoading(false);
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
		if ((Elements.count() > 0) && (!ret) && (interactive))
		{
			if (flags & LoadSavePlugin::lfScripted)
			{
				bool loadF = m_Doc->isLoading();
				m_Doc->setLoading(false);
				m_Doc->changed();
				m_Doc->setLoading(loadF);
				if (!(flags & LoadSavePlugin::lfLoadAsPattern))
				{
					m_Doc->m_Selection->delaySignalsOn();
					for (int dre=0; dre<Elements.count(); ++dre)
					{
						m_Doc->m_Selection->addItem(Elements.at(dre), true);
					}
					m_Doc->m_Selection->delaySignalsOff();
					m_Doc->m_Selection->setGroupRect();
					m_Doc->view()->updatesOn(true);
				}
			}
			else
			{
				m_Doc->DragP = true;
				m_Doc->DraggedElem = 0;
				m_Doc->DragElements.clear();
				m_Doc->m_Selection->delaySignalsOn();
				for (int dre=0; dre<Elements.count(); ++dre)
				{
					tmpSele->addItem(Elements.at(dre), true);
				}
				tmpSele->setGroupRect();
				ScriXmlDoc *ss = new ScriXmlDoc();
				ScElemMimeData* md = new ScElemMimeData();
				md->setScribusElem(ss->WriteElem(m_Doc, tmpSele));
				delete ss;
				m_Doc->itemSelection_DeleteItem(tmpSele);
				m_Doc->view()->updatesOn(true);
				m_Doc->m_Selection->delaySignalsOff();
				// We must copy the TransationSettings object as it is owned
				// by handleObjectImport method afterwards
				TransactionSettings* transacSettings = new TransactionSettings(trSettings);
				m_Doc->view()->handleObjectImport(md, transacSettings);
				m_Doc->DragP = false;
				m_Doc->DraggedElem = 0;
				m_Doc->DragElements.clear();
			}
		}
		else
		{
			m_Doc->changed();
			m_Doc->reformPages();
			if (!(flags & LoadSavePlugin::lfLoadAsPattern))
				m_Doc->view()->updatesOn(true);
		}
		success = true;
	}
	else
	{
		QDir::setCurrent(CurDirP);
		m_Doc->DoDrawing = true;
		m_Doc->scMW()->setScriptRunning(false);
		if (!(flags & LoadSavePlugin::lfLoadAsPattern))
			m_Doc->view()->updatesOn(true);
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
	}
	if (interactive)
		m_Doc->setLoading(false);
	//CB If we have a gui we must refresh it if we have used the progressbar
	if (!(flags & LoadSavePlugin::lfLoadAsPattern))
	{
		if ((showProgress) && (!interactive))
			m_Doc->view()->DrawNew();
	}
	return success;
}

PdfPlug::~PdfPlug()
{
	if (progressDialog)
		delete progressDialog;
	delete tmpSele;
}

bool PdfPlug::convert(QString fn)
{
	bool firstPg = true;
	int currentLayer = m_Doc->activeLayer();
	int baseLayer = m_Doc->activeLayer();
	importedColors.clear();
	if(progressDialog)
	{
		progressDialog->setOverallProgress(2);
		progressDialog->setLabel("GI", tr("Generating Items"));
		qApp->processEvents();
	}
	QFile f(fn);
	oldDocItemCount = m_Doc->Items->count();
	if (progressDialog)
	{
		progressDialog->setBusyIndicator("GI");
		qApp->processEvents();
	}

	globalParams = new GlobalParams();
	GooString *userPW = NULL;
	if (globalParams)
	{
		GooString *fname = new GooString(QFile::encodeName(fn).data());
		globalParams->setErrQuiet(gTrue);
		GBool hasOcg = gFalse;
		QList<OptionalContentGroup*> ocgGroups;
//		globalParams->setPrintCommands(gTrue);
		PDFDoc *pdfDoc = new PDFDoc(fname, NULL, NULL, NULL);
		if (pdfDoc)
		{
			if (pdfDoc->getErrorCode() == errEncrypted)
			{
				delete pdfDoc;
				pdfDoc = NULL;
				if (progressDialog)
					progressDialog->hide();
				qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
				ScribusMainWindow* mw = (m_Doc==0) ? ScCore->primaryMainWindow() : m_Doc->scMW();
				bool ok;
				QString text = QInputDialog::getText(mw, tr("Open PDF-File"), tr("Password"), QLineEdit::Normal, "", &ok);
				if (ok && !text.isEmpty())
				{
					fname = new GooString(QFile::encodeName(fn).data());
					userPW = new GooString(text.toLocal8Bit().data());
					pdfDoc = new PDFDoc(fname, userPW, userPW, NULL);
					qApp->changeOverrideCursor(QCursor(Qt::WaitCursor));
				}
				if ((!pdfDoc) || (pdfDoc->getErrorCode() != errNone))
				{
					if (progressDialog)
						progressDialog->close();
					delete pdfDoc;
					delete globalParams;
					return false;
				}
				if (progressDialog)
					progressDialog->show();
			}
			if (pdfDoc->isOk())
			{
				double hDPI = 72.0;
				double vDPI = 72.0;
				int firstPage = 1;
				int lastPage = pdfDoc->getNumPages();
				SlaOutputDev *dev = new SlaOutputDev(m_Doc, &Elements, &importedColors, importerFlags);
				if (dev->isOk())
				{
					OCGs* ocg = pdfDoc->getOptContentConfig();
					if (ocg)
					{
						hasOcg = ocg->hasOCGs();
						if (hasOcg)
						{

							QStringList ocgNames;
							Array *order = ocg->getOrderArray();
							if (order)
							{
								for (int i = 0; i < order->getLength (); ++i)
								{
									Object orderItem;
									order->get(i, &orderItem);
									if (orderItem.isDict())
									{
										Object ref;
										order->getNF(i, &ref);
										if (ref.isRef())
										{
											OptionalContentGroup *oc = ocg->findOcgByRef(ref.getRef());
											QString ocgName = UnicodeParsedString(oc->getName());
											if (!ocgNames.contains(ocgName))
											{
												ocgGroups.prepend(oc);
												ocgNames.append(ocgName);
											}
										}
										ref.free();
									}
									else
									{
										GooList *ocgs;
										int i;
										ocgs = ocg->getOCGs ();
										for (i = 0; i < ocgs->getLength (); ++i)
										{
											OptionalContentGroup *oc = (OptionalContentGroup *)ocgs->get(i);
											QString ocgName = UnicodeParsedString(oc->getName());
											if (!ocgNames.contains(ocgName))
											{
												ocgGroups.prepend(oc);
												ocgNames.append(ocgName);
											}
										}
									}
								}
							}
							else
							{
								GooList *ocgs;
								int i;
								ocgs = ocg->getOCGs ();
								for (i = 0; i < ocgs->getLength (); ++i)
								{
									OptionalContentGroup *oc = (OptionalContentGroup *)ocgs->get(i);
									QString ocgName = UnicodeParsedString(oc->getName());
									if (!ocgNames.contains(ocgName))
									{
										ocgGroups.prepend(oc);
										ocgNames.append(ocgName);
									}
								}
							}
						}
					}
					GBool useMediaBox = gTrue;
					GBool crop = gFalse;
					GBool printing = gFalse;
					dev->startDoc(pdfDoc, pdfDoc->getXRef(), pdfDoc->getCatalog());
					int rotate = pdfDoc->getPageRotate(firstPage);
					if (importerFlags & LoadSavePlugin::lfCreateDoc)
					{
// POPPLER_VERSION appeared in 0.19.0 first
#ifdef POPPLER_VERSION
						if (hasOcg)
						{
							QString actL = m_Doc->activeLayerName();
							for (int a = 0; a < ocgGroups.count(); a++)
							{
								OptionalContentGroup *oc = ocgGroups[a];
								if (actL != UnicodeParsedString(oc->getName()))
									currentLayer = m_Doc->addLayer(UnicodeParsedString(oc->getName()), false);
								else
									currentLayer = m_Doc->layerIDFromName(UnicodeParsedString(oc->getName()));
// POPPLER_VERSION appeared in 0.19.0 first
#ifdef POPPLER_VERSION
								if ((oc->getViewState() == OptionalContentGroup::ocUsageOn) || (oc->getViewState() == OptionalContentGroup::ocUsageUnset))
									m_Doc->setLayerVisible(currentLayer, true);
								else
									m_Doc->setLayerVisible(currentLayer, false);
								if ((oc->getPrintState() == OptionalContentGroup::ocUsageOn) || (oc->getPrintState() == OptionalContentGroup::ocUsageUnset))
									m_Doc->setLayerPrintable(currentLayer, true);
								else
									m_Doc->setLayerPrintable(currentLayer, false);
#else
								if (oc->getState() == OptionalContentGroup::On)
								{
									m_Doc->setLayerVisible(currentLayer, true);
									m_Doc->setLayerPrintable(currentLayer, true);
								}
								else
								{
									m_Doc->setLayerVisible(currentLayer, false);
									m_Doc->setLayerPrintable(currentLayer, false);
								}
#endif
								oc->setState(OptionalContentGroup::Off);
							}
							dev->layersSetByOCG = true;
						}
#endif
						Object info;
						pdfDoc->getDocInfo(&info);
						if (info.isDict())
						{
							Object obj;
							GooString *s1;
							Dict *infoDict = info.getDict();
							if (infoDict->lookup((char*)"Title", &obj )->isString())
							{
								s1 = obj.getString();
								m_Doc->documentInfo().setTitle(UnicodeParsedString(obj.getString()));
								obj.free();
							}
							if (infoDict->lookup((char*)"Author", &obj )->isString())
							{
								s1 = obj.getString();
								m_Doc->documentInfo().setAuthor(UnicodeParsedString(obj.getString()));
								obj.free();
							}
							if (infoDict->lookup((char*)"Subject", &obj )->isString())
							{
								s1 = obj.getString();
								m_Doc->documentInfo().setSubject(UnicodeParsedString(obj.getString()));
								obj.free();
							}
							if (infoDict->lookup((char*)"Keywords", &obj )->isString())
							{
								s1 = obj.getString();
								m_Doc->documentInfo().setKeywords(UnicodeParsedString(obj.getString()));
								obj.free();
							}
						}
						info.free();
						m_Doc->setPageHeight(pdfDoc->getPageMediaHeight(1));
						m_Doc->setPageWidth(pdfDoc->getPageMediaWidth(1));
						m_Doc->setPageSize("Custom");
						for (int pp = 0; pp < lastPage; pp++)
						{
							m_Doc->setActiveLayer(baseLayer);
							if (firstPg)
								firstPg = false;
							else
								m_Doc->addPage(pp);
							m_Doc->currentPage()->setInitialHeight(pdfDoc->getPageMediaHeight(pp + 1));
							m_Doc->currentPage()->setInitialWidth(pdfDoc->getPageMediaWidth(pp + 1));
							m_Doc->currentPage()->setHeight(pdfDoc->getPageMediaHeight(pp + 1));
							m_Doc->currentPage()->setWidth(pdfDoc->getPageMediaWidth(pp + 1));
							m_Doc->currentPage()->MPageNam = CommonStrings::trMasterPageNormal;
							m_Doc->currentPage()->m_pageSize = "Custom";
							m_Doc->reformPages(true);
							if (hasOcg)
							{
								for (int a = 0; a < ocgGroups.count(); a++)
								{
									OptionalContentGroup *oc = ocgGroups[a];
								//	m_Doc->setActiveLayer(UnicodeParsedString(oc->getName()));
								//	currentLayer = m_Doc->activeLayer();
									oc->setState(OptionalContentGroup::On);
								//	pdfDoc->displayPage(dev, pp + 1, hDPI, vDPI, rotate, useMediaBox, crop, printing);
								//	oc->setState(OptionalContentGroup::Off);
								}
								pdfDoc->displayPage(dev, pp + 1, hDPI, vDPI, rotate, useMediaBox, crop, printing, NULL, NULL, dev->annotations_callback, dev);
							}
							else
								pdfDoc->displayPage(dev, pp + 1, hDPI, vDPI, rotate, useMediaBox, crop, printing, NULL, NULL, dev->annotations_callback, dev);
						}
						int numjs = pdfDoc->getCatalog()->numJS();
						if (numjs > 0)
						{
							NameTree *jsNameTreeP = new NameTree();
							Object names;
							Object catDict;
							pdfDoc->getXRef()->getCatalog(&catDict);
							if (catDict.isDict())
							{
								catDict.dictLookup("Names", &names);
								if (names.isDict())
								{
									Object obj;
									names.dictLookup("JavaScript", &obj);
									jsNameTreeP->init(pdfDoc->getXRef(), &obj);
									obj.free();
								}
								for (int a = 0; a < numjs; a++)
								{
									m_Doc->JavaScripts.insert(UnicodeParsedString(jsNameTreeP->getName(a)), UnicodeParsedString(pdfDoc->getCatalog()->getJS(a)));
								}
								names.free();
							}
							catDict.free();
							delete jsNameTreeP;
						}
						m_Doc->pdfOptions().Version = (PDFOptions::PDFVersion)qMin(15, qMax(13, pdfDoc->getPDFMajorVersion() * 10 + pdfDoc->getPDFMinorVersion()));
						ViewerPreferences *viewPrefs = pdfDoc->getCatalog()->getViewerPreferences();
						if (viewPrefs)
						{
							m_Doc->pdfOptions().Binding = viewPrefs->getDirection() == ViewerPreferences::directionL2R ? 0 : 1;
							m_Doc->pdfOptions().hideMenuBar = viewPrefs->getHideMenubar();
							m_Doc->pdfOptions().hideToolBar = viewPrefs->getHideToolbar();
							m_Doc->pdfOptions().fitWindow = viewPrefs->getFitWindow();
						}
						Catalog::PageMode pgm = pdfDoc->getCatalog()->getPageMode();
						m_Doc->pdfOptions().displayFullscreen = (pgm == Catalog::pageModeFullScreen);
						m_Doc->pdfOptions().displayThumbs = (pgm == Catalog::pageModeThumbs);
						m_Doc->pdfOptions().displayBookmarks = (pgm == Catalog::pageModeOutlines);
						m_Doc->pdfOptions().displayLayers = (pgm == Catalog::pageModeOC);
						Catalog::PageLayout pgl = pdfDoc->getCatalog()->getPageLayout();
						if (pgl == Catalog::pageLayoutSinglePage)
							m_Doc->pdfOptions().PageLayout = PDFOptions::SinglePage;
						else if (pgl == Catalog::pageLayoutOneColumn)
							m_Doc->pdfOptions().PageLayout = PDFOptions::OneColumn;
						else if (pgl == Catalog::pageLayoutTwoColumnLeft)
							m_Doc->pdfOptions().PageLayout = PDFOptions::TwoColumnLeft;
						else if (pgl == Catalog::pageLayoutTwoColumnRight)
							m_Doc->pdfOptions().PageLayout = PDFOptions::TwoColumnRight;
					}
					else
					{
						if (hasOcg)
						{
							for (int a = 0; a < ocgGroups.count(); a++)
							{
								ocgGroups[a]->setState(OptionalContentGroup::On);
							}
						}
						pdfDoc->displayPage(dev, firstPage, hDPI, vDPI, rotate, useMediaBox, crop, printing, NULL, NULL, dev->annotations_callback, dev);
					}
				}
				delete dev;
			}
		}
		delete pdfDoc;
	}
	delete globalParams;
	globalParams = 0;

//	qDebug() << "converting finished";
//	qDebug() << "Imported" << Elements.count() << "Elements";

	if (Elements.count() == 0)
	{
		if (importedColors.count() != 0)
		{
			for (int cd = 0; cd < importedColors.count(); cd++)
			{
				m_Doc->PageColors.remove(importedColors[cd]);
			}
		}
	}

	if (progressDialog)
		progressDialog->close();
	return true;
}

QString PdfPlug::UnicodeParsedString(GooString *s1)
{
	if ( !s1 || s1->getLength() == 0 )
		return QString();
	GBool isUnicode;
	int i;
	Unicode u;
	QString result;
	if ((s1->getChar(0) & 0xff) == 0xfe && (s1->getLength() > 1 && (s1->getChar(1) & 0xff) == 0xff))
	{
		isUnicode = gTrue;
		i = 2;
		result.reserve((s1->getLength() - 2) / 2);
	}
	else
	{
		isUnicode = gFalse;
		i = 0;
		result.reserve(s1->getLength());
	}
	while (i < s1->getLength())
	{
		if (isUnicode)
		{
			u = ((s1->getChar(i) & 0xff) << 8) | (s1->getChar(i+1) & 0xff);
			i += 2;
		}
		else
		{
			u = s1->getChar(i) & 0xff;
			++i;
		}
		result += QChar( u );
	}
	return result;
}
