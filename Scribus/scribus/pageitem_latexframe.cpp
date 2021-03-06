/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
						pageitem_latexframe.cpp  -  description
						-------------------
	begin                : Mon May 28 2007
	copyright            : (C) 2007 by Hermann Kraus
	email                : herm@scribus.info
***************************************************************************/

/***************************************************************************
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/

#include "pageitem_latexframe.h"

#include <QDebug>
#include <QTemporaryFile>

#include "prefsmanager.h"
#include "scpainter.h"
#include "scraction.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "undomanager.h"
#include "undostate.h"
#include "latexeditor.h"
#include "latexhelpers.h"
#include "util.h"

PageItem_LatexFrame::PageItem_LatexFrame(ScribusDoc *pa, double x, double y, double w, double h, double w2, QString fill, QString outline)
		: PageItem_ImageFrame(pa, x, y, w, h, w2, fill, outline)
{
	setUPixmap(Um::ILatexFrame);
	AnName = tr("Render") + QString::number(m_Doc->TotalItems);
	setUName(AnName);
	
	imgValid = false;
	m_usePreamble = true;
	err = 0;
	internalEditor = 0;
	killed = false;
	
	config = 0;
	if (PrefsManager::instance()->latexConfigs().count() > 0)
		setConfigFile(PrefsManager::instance()->latexConfigs()[0]);

	latex = new QProcess();
	connect(latex, SIGNAL(finished(int, QProcess::ExitStatus)),
		this, SLOT(updateImage(int, QProcess::ExitStatus)));
	connect(latex, SIGNAL(error(QProcess::ProcessError)),
		this, SLOT(latexError(QProcess::ProcessError)));
	latex->setProcessChannelMode(QProcess::MergedChannels);
	
	QTemporaryFile *tempfile = new QTemporaryFile(QDir::tempPath() + "/scribus_temp_render_XXXXXX");
	tempfile->open();
	tempFileBase = getLongPathName(tempfile->fileName());
	tempfile->setAutoRemove(false);
	tempfile->close();
	delete tempfile;
	Q_ASSERT(!tempFileBase.isEmpty());
	
	m_dpi = 0;
}

PageItem_LatexFrame::~PageItem_LatexFrame()
{
	if (internalEditor) delete internalEditor;
	
	latex->disconnect();
	if (latex->state() != QProcess::NotRunning) {
		killed = true;
		latex->terminate();
		latex->waitForFinished(500);
		if (latex->state() != QProcess::NotRunning) {
			latex->kill();
			latex->waitForFinished(500);
		}
	}
	deleteImageFile();
	delete latex;
}

void PageItem_LatexFrame::clearContents()
{
	PageItem_ImageFrame::clearContents();
	formulaText = "";
	appStdout = "";
	err = 0;
	imgValid = false;
}

void PageItem_LatexFrame::deleteImageFile()
{
	QFileInfo fi(tempFileBase);
	QDir dir = fi.absoluteDir();
	QStringList filter;
	
	filter << fi.fileName() + "*";
	Q_ASSERT(!fi.fileName().isEmpty());
	Q_ASSERT(!fi.fileName().contains("/"));
	Q_ASSERT(!fi.fileName().contains("\\"));
	QStringList files;
	files = dir.entryList(filter);
	foreach (QString file, files) {
		Q_ASSERT(file.startsWith("scribus_temp"));
		dir.remove(file);
	}
	imgValid = false;
}

void PageItem_LatexFrame::DrawObj_Item(ScPainter *p, QRectF e, double sc)
{
	layout();
	if (!imgValid && !err)
	{
		//Draw indicator that latex is running
		p->setBrush(Qt::white);
		p->setPen(Qt::green, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
		p->drawLine(FPoint(0, 0), FPoint(Width, Height));
		p->drawText(QRectF(0.0, 0.0, Width, Height), tr("Rendering..."));
	}
	else if (err)
	{
		//Draw error indicator
		p->setBrush(Qt::white);
		p->setPen(Qt::blue, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
		p->drawLine(FPoint(0, 0), FPoint(Width, Height));
		p->drawLine(FPoint(0, Height), FPoint(Width, 0));
		p->drawText(QRectF(0.0, 0.0, Width, Height), tr("Render Error"));
	}
	else
	{
		//Just pass it to ImageFrame
		PageItem_ImageFrame::DrawObj_Item(p, e, sc);
	}
}

void PageItem_LatexFrame::updateImage(int exitCode, QProcess::ExitStatus exitStatus)
{
	appStdout = latex->readAllStandardOutput();
	err = exitCode;
	
	emit latexFinished();
	emit stateChanged(latex->state());
	
	static bool firstWarning = true;
	if (exitCode) {
		imgValid = false;
		if (firstWarning && !killed)
		{
			bool editorRunning = internalEditor && internalEditor->isVisible();
			QMessageBox msgBox;
			msgBox.setText(tr("Running the external application failed!"));
			QString informativeText = tr("This is usually a problem with your input. Please check the program's output.");
			if (!editorRunning) {
				informativeText += " "+tr("Do you want to open the editor to fix the problem?");
				msgBox.setStandardButtons(QMessageBox::Yes|QMessageBox::No);
				msgBox.setDefaultButton(QMessageBox::Yes);
			} else {
				msgBox.setStandardButtons(QMessageBox::Ok);
				msgBox.setDefaultButton(QMessageBox::Ok);
			}
			msgBox.setIcon(QMessageBox::Warning);
			msgBox.setInformativeText(informativeText);
			msgBox.setDetailedText(output());
			if ((msgBox.exec() == QMessageBox::Yes) && !editorRunning) {
				runEditor();
			}
			firstWarning = false;
		}
		qCritical() << "RENDER FRAME: updateImage():" << tr("Running the external application failed!");
		killed = false;
		update(); //Show error marker
		return;
	}
	else
	{
		firstWarning = true;
	}
	imgValid = true;

	//Save state and restore afterwards
	double xres, yres;
	if (PictureIsAvailable)
	{
		xres = pixm.imgInfo.xres;
		yres = pixm.imgInfo.yres;
	}
	else
	{
		xres = yres = realDpi();
	}
	double scaleX = LocalScX * xres;
	double scaleY = LocalScY * yres;
	double offX   = LocalX   / xres;
	double offY   = LocalY   / yres;
	PageItem_ImageFrame::loadImage(imageFile, true, realDpi());
	if (PrefsManager::instance()->latexForceDpi()) 
	{
		pixm.imgInfo.xres = pixm.imgInfo.yres = realDpi();
	}

	//Restore parameters, account for dpi changes
	LocalScX = scaleX / pixm.imgInfo.xres;
	LocalScY = scaleY / pixm.imgInfo.yres;
	LocalX   = offX   * pixm.imgInfo.xres;
	LocalY   = offY   * pixm.imgInfo.yres;
	emit imageOffsetScale(LocalScX, LocalScY, LocalX, LocalY);
	
	update();
}


void PageItem_LatexFrame::runApplication()
{
	imgValid = false;
	err = 0;
	killed = false;
	
	static bool firstWarningTmpfile = true;
	static bool firstWarningLatexMissing = true;

	if (!config)
	{
		qCritical() << "RENDER FRAME:" << tr("No configuration defined to run the application!");
		return;
	}
	
	QFile tempfile(tempFileBase);
	if (!tempfile.open(QIODevice::Truncate|QIODevice::WriteOnly)) {
		err = 0xffff;
		update(); //Show error marker
		if (firstWarningTmpfile)
		{
			QMessageBox::critical(0, tr("Error"), "<qt>" +
								  tr("Could not create a temporary file to run the application!") 
								  + "</qt>", 1, 0, 0);
			firstWarningTmpfile = false;
		}
		qCritical() << "RENDER FRAME:" << tr("Could not create a temporary file to run the application!");
		//Don't know how to continue as it's impossible to create tempfile
		return;
	}
	else
	{
		firstWarningTmpfile = true;
	}
	
	QString full_command = config->executable();
	
	if (full_command.isEmpty()) {
		err = 0xffff;
		update(); //Show error marker
		if (firstWarningLatexMissing)
		{
			QMessageBox::critical(0, tr("Error"),
									 "<qt>" + tr("The config file didn't specify a executable path!") +
									 "</qt>",1, 0, 0);
			firstWarningLatexMissing = false;
		}
        qCritical() << "RENDER FRAME:" << tr("The config file didn't specify a executable path!");
		return;
	}
	else
	{
		firstWarningLatexMissing = true;
	}

	full_command.replace("%dpi", QString::number(realDpi()));
	if (full_command.contains("%file")) {
		full_command.replace("%file", QString("\"%1\"").arg(QDir::toNativeSeparators(tempFileBase)));
	} else {
		full_command = full_command + QString(" \"%1\"").arg(QDir::toNativeSeparators(tempFileBase));
	}
	full_command.replace("%dir", QString("\"%1\"").arg(QDir::toNativeSeparators(QDir::tempPath())));
	latex->setWorkingDirectory(QDir::tempPath());

	double lDpi = realDpi()/72.0;
	full_command.replace("$scribus_height_px$", QString::number(qRound(Height*lDpi)));
	full_command.replace("$scribus_width_px$",  QString::number(qRound(Width*lDpi)));
	QMapIterator<QString, QString> i(editorProperties);
	while (i.hasNext())
	{
		i.next();
		full_command.replace("$scribus_"+i.key()+"$", i.value());
	}
	
	imageFile = tempFileBase + config->imageExtension();

	writeFileContents(&tempfile);
	tempfile.close();
	
	latex->start(full_command);
	emit stateChanged(QProcess::Starting);
}

void PageItem_LatexFrame::runEditor()
{
	if (!internalEditor) {
		internalEditor = new LatexEditor(this);
		internalEditor->startEditor();
	} else if (internalEditor->isVisible()) {
		internalEditor->activateWindow();
		internalEditor->raise();
	} else {
		internalEditor->startEditor();
	}
}

void PageItem_LatexFrame::rerunApplication(bool updateDisplay)
{
	if (latex->state() != QProcess::NotRunning) {
		killed = true;
		latex->terminate();
		latex->waitForFinished(500);
		if (latex->state() != QProcess::NotRunning) {
			//Still not terminated?
			latex->kill();
			latex->waitForFinished(500);
		}
	}
	runApplication();
	if (updateDisplay) this->update();
}


void PageItem_LatexFrame::writeFileContents(QFile *tempfile)
{
	QString tmp(formulaText);
	double scaleX, scaleY, realW, realH, offsetX, offsetY;
	double lDpi = realDpi()/72.0;
	scaleX = LocalScX*lDpi;
	scaleY = LocalScY*lDpi;
	offsetX = LocalX*LocalScX;
	offsetY = LocalY*LocalScY;
	realW = Width/scaleX - LocalX/lDpi;
	realH = Height/scaleY - LocalY/lDpi;
	if (!tmp.contains("$scribus_noprepost$") && m_usePreamble) {
		tmp = config->preamble() + tmp + config->postamble();
	}
	tmp.replace(QString("$scribus_width$"), QString::number(Width));
	tmp.replace(QString("$scribus_width_px$"), QString::number(qRound(Width*lDpi)));
	tmp.replace(QString("$scribus_width_inch$"), QString::number(Width/72.0));
	tmp.replace(QString("$scribus_height$"), QString::number(Height));
	tmp.replace(QString("$scribus_height_px$"), QString::number(qRound(Height*lDpi)));
	tmp.replace(QString("$scribus_height_inch$"), QString::number(Height/72.0));
	tmp.replace(QString("$scribus_realwidth$"), QString::number(realW));
	tmp.replace(QString("$scribus_realwidth_px$"), QString::number(qRound(realW*lDpi)));
	tmp.replace(QString("$scribus_realheight$"), QString::number(realH));
	tmp.replace(QString("$scribus_realheight_px$"), QString::number(qRound(realH*lDpi)));
	tmp.replace(QString("$scribus_offsetX$"), QString::number(offsetX));
	tmp.replace(QString("$scribus_offsetX_px$"), QString::number(qRound(offsetX*lDpi)));
	tmp.replace(QString("$scribus_offsetY$"), QString::number(offsetY));
	tmp.replace(QString("$scribus_offsetY$"), QString::number(qRound(offsetY*lDpi)));
	tmp.replace(QString("$scribus_scaleX$"), QString::number(scaleX));
	tmp.replace(QString("$scribus_scaleY$"), QString::number(scaleY));
	tmp.replace(QString("$scribus_dpi$"), QString::number(realDpi()));
	tmp.replace(QString("$scribus_file$"), tempFileBase);
	tmp.replace(QString("$scribus_dir$"), QDir::tempPath());
	QMapIterator<QString, QString> i(editorProperties);
	while (i.hasNext()) {
		i.next();
		tmp.replace("$scribus_"+i.key()+"$", i.value());
	}
	tempfile->write(tmp.toUtf8());
}

bool PageItem_LatexFrame::setFormula(QString formula, bool undoable)
{
	if (formula == formulaText) {
		//Nothing changed
		return false;
	}
	imgValid = false;
	err = 0;
	if (UndoManager::undoEnabled() && undoable)
	{
		SimpleState *ss = new SimpleState(Um::ChangeFormula, "", Um::IChangeFormula);
		ss->set("CHANGE_FORMULA", "change_formula");
		ss->set("OLD_FORMULA", formulaText);
		ss->set("NEW_FORMULA", formula);
		undoManager->action(this, ss);
	} else if (!undoable) {
		emit formulaAutoUpdate(formulaText, formula);
	}
	formulaText = formula;
	return true;
}

void PageItem_LatexFrame::latexError(QProcess::ProcessError error)
{
	err = 0xffff;
	update(); //Show error marker
	static bool firstWarning = true;
	if (killed) {
		killed = false;
		update();
		//Don't show errors caused by killing processes
		return; 
	}
	if (firstWarning)
	{
		if (latex->error() == QProcess::FailedToStart) {
			QMessageBox::critical(0, tr("Error"), "<qt>" +
								  tr("The application \"%1\" failed to start! Please check the path: ").
								  arg(config->executable())
								  + "</qt>", 1, 0, 0);
		} else {
			QMessageBox::critical(0, tr("Error"), "<qt>" +
					tr("The application \"%1\" crashed!").arg(config->executable())
					+ "</qt>", 1, 0, 0);
		}
		firstWarning = false;
	}
	qCritical() << "RENDER FRAME: latexError():" << 
			tr("Running the application \"%1\" failed!").arg(config->executable()) << latex->error();
	emit stateChanged(QProcess::NotRunning);
}


QString PageItem_LatexFrame::application() const
{
	return config ? config->executable() : tr("No application defined");
}

QString PageItem_LatexFrame::configFile() const
{
	return configFilename;
}

int PageItem_LatexFrame::realDpi() const
{
	if (m_dpi) {
		return m_dpi;
	} else {
		return PrefsManager::instance()->latexResolution();
	}
}

void PageItem_LatexFrame::setDpi(int newDpi)
{
	m_dpi = newDpi;
}

void PageItem_LatexFrame::setConfigFile(QString newConfig, bool relative)
{
	// Try to interpret a config file as a relative path even when it is given with a full path
	if (relative) {
		QFileInfo fi;
		QStringList configs = PrefsManager::instance()->latexConfigs();
		foreach (QString config, configs) {
			fi.setFile(config);
			if (newConfig == fi.fileName()) {
				newConfig = config;
				break;
			}
		}
	}

	if (configFilename == newConfig) return;
	
	bool unchanged = formulaText.isEmpty();
	if (config && (formulaText == config->emptyFrameText())) {
		unchanged = true;
	}
	
	configFilename = newConfig;
	config = LatexConfigCache::instance()->parser(configFilename);
	
	//Initialize with default values
	QString key;
	QMapIterator<QString, QString> i(config->properties);
	while (i.hasNext()) {
		i.next();
		key = i.key();
		if (!editorProperties.contains(key)) {
			editorProperties[key] = i.value();
		}
	}
	QString newFormula;
	if (unchanged) {
		if (PrefsManager::instance()->latexStartWithEmptyFrames()) {
			newFormula = "";
		} else {
			newFormula = config->emptyFrameText();
		}
		emit formulaAutoUpdate(formulaText, newFormula);
		formulaText = newFormula;
	}
	
	emit applicationChanged();
}

void PageItem_LatexFrame::killProcess()
{
	killed = true;
	latex->kill();
}

void PageItem_LatexFrame::restore(UndoState *state, bool isUndo)
{
	SimpleState *ss = dynamic_cast<SimpleState*>(state);
	if (!ss) {
		PageItem_ImageFrame::restore(state, isUndo);
		return;
	}
	if (ss->contains("CHANGE_FORMULA")) {
		if (isUndo) {
			setFormula(ss->get("OLD_FORMULA"), false);
		} else {
			setFormula(ss->get("NEW_FORMULA"), false);
		}
	} else {
		PageItem_ImageFrame::restore(state, isUndo);
	}
}


void PageItem_LatexFrame::setUsePreamble(bool useP) 
{
	m_usePreamble = useP;
}

void PageItem_LatexFrame::layout()
{
	if (!invalid) return;
	invalid = false;
	
	if (Width == lastWidth && Height == lastHeight) return;
	lastWidth = Width;
	lastHeight = Height;
	
	rerunApplication(false);
}

void PageItem_LatexFrame::applicableActions(QStringList & actionList)
{
	actionList << "itemImageIsVisible";
	actionList << "itemPreviewFull";
	actionList << "itemPreviewLow";
	actionList << "itemPreviewNormal";
	actionList << "itemUpdateImage";
	actionList << "editEditRenderSource";
	if (PictureIsAvailable)
	{
		/*if (!isTableItem)
			actionList << "itemAdjustFrameToImage";*/
		actionList << "editClearContents";
		actionList << "editCopyContents";
	}
	if (doc()->scMW()->contentsBuffer.sourceType==PageItem::LatexFrame)
	{
		actionList << "editPasteContents";
		actionList << "editPasteContentsAbs";
	}
}

QString PageItem_LatexFrame::infoDescription()
{
	QString htmlText;
	htmlText.append("<h2>"+tr("Render Frame") + "</h2><table>");
	htmlText.append("<tr><th align=\"right\">" + tr("Application") + ": </th><td>" + application());
	htmlText.append("</td></tr><tr><th align=\"right\">" + tr("DPI") + ": </th><td>" +
			 QString::number(realDpi()));
	htmlText.append("</td></tr><tr><th align=\"right\">" + tr("State") + ": </th><td>");
	if (latex->state() == QProcess::NotRunning) {
		if (error()) {
			htmlText.append(tr("Error"));
		} else {
			htmlText.append(tr("Finished"));
		}
	} else {
		htmlText.append(tr("Running"));
	}
	htmlText.append("</td></tr></table><hr>");
	htmlText.append(PageItem::infoDescription());
	return htmlText;
}


