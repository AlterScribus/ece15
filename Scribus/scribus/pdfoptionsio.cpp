#include "pdfoptionsio.h"
#include "scribusstructs.h"

const int PDFOptionsIO::formatVersion = 1300;

PDFOptionsIO::PDFOptionsIO(PDFOptions& opts) :
	m_doc("PDFSettings"),
	m_root(),
	m_includePasswords(false),
	m_error()
{
	this->m_opts = &opts;
}

// writeTo(QString) is implemented separately to writeTo(QTextStream)
// because we don't want to clobber the output file until we know the
// data has been generated ok, and we can't avoid clobbering the file
// to create a QTextStream().
bool PDFOptionsIO::writeTo(QString outFileName, bool includePasswords)
{
	m_includePasswords = includePasswords;
	QString xml = buildXMLString();
	if (xml == QString::null)
		return false;
	QFile f(outFileName);
	if (!f.open(IO_WriteOnly|IO_Truncate))
	{
		m_error = QObject::tr("Couldn't open output file");
		return false;
	}
	QTextStream ts(&f);
	ts.setEncoding(QTextStream::UnicodeUTF8);
	ts << xml;
	m_includePasswords = false; // just to be paranoid
	m_error = QString::null;
	return true;
}

bool PDFOptionsIO::writeTo(QTextStream& outStream, bool includePasswords)
{
	m_includePasswords = includePasswords;
	if (!outStream.device()->isWritable())
	{
		m_error = QObject::tr("Output stream not writeable");
		return false;
	}
	QString xml = buildXMLString();
	if (xml == QString::null)
		return false;
	outStream << xml;
	m_includePasswords = false; // just to be paranoid
	m_error = QString::null;
	return true;
}

// Construct and return an XML string representing the settings
QString PDFOptionsIO::buildXMLString()
{
	// Verify to make sure our settings are sane
	QString vrfyError;
	PDFOptions::VerifyResults vr = m_opts->verify(&vrfyError);
	if (vr != PDFOptions::Verify_NoError)
	{
		m_error = QObject::tr("Verification of settings failed: %1").arg(vrfyError);
		return QString::null;
	}
	// Build the document. Initial implementation uses QDom.
	m_root = m_doc.createElement("ScribusPDFOptions");
	m_root.setAttribute("version", formatVersion);
	m_doc.appendChild(m_root);
	// Fill the guts of the document
	buildSettings();
	// We're done - return a string containing the document XML
	QString xml = m_doc.toString();
	xml.prepend("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
	return xml;
}

// Build up the stored settings into the passed DOM objects
void PDFOptionsIO::buildSettings()
{
	addElem(m_root, "thumbnails", m_opts->Thumbnails);
	addElem(m_root, "articles", m_opts->Articles);
	addElem(m_root, "useLayers", m_opts->useLayers);
	addElem(m_root, "compress", m_opts->Compress);
	addElem(m_root, "compressMethod", m_opts->CompressMethod);
	addElem(m_root, "quality", m_opts->Quality);
	addElem(m_root, "recalcPic", m_opts->RecalcPic);
	addElem(m_root, "bookmarks", m_opts->Bookmarks);
	addElem(m_root, "picRes", m_opts->PicRes);
	QString pdfVersString;
	switch (m_opts->Version)
	{
		case PDFOptions::PDFVersion_X3:
			pdfVersString = "X3";
			break;
		default:
			pdfVersString = QString::number(m_opts->Version);
			break;
	}
	addElem(m_root, "pdfVersion", pdfVersString);
	addElem(m_root, "resolution", m_opts->Resolution);
	addElem(m_root, "binding", m_opts->Binding);
	addList(m_root, "embedFonts", m_opts->EmbedList);
	addList(m_root, "subsetFonts", m_opts->SubsetList);
	addElem(m_root, "mirrorH", m_opts->MirrorH);
	addElem(m_root, "mirrorV", m_opts->MirrorV);
	addElem(m_root, "rotateDegrees", m_opts->RotateDeg);
	addElem(m_root, "presentMode", m_opts->PresentMode);
	addPresentationData();
	addElem(m_root, "filename", m_opts->Datei);
	addElem(m_root, "isGrayscale", m_opts->isGrayscale);
	addElem(m_root, "useRGB", m_opts->UseRGB);
	addElem(m_root, "useProfiles", m_opts->UseProfiles);
	addElem(m_root, "useProfiles2", m_opts->UseProfiles2);
	addElem(m_root, "useLPI", m_opts->UseLPI);
	addLPISettings();
	addElem(m_root, "solidProf", m_opts->SolidProf);
	addElem(m_root, "sComp", m_opts->SComp);
	addElem(m_root, "imageProf", m_opts->ImageProf);
	addElem(m_root, "embeddedI", m_opts->EmbeddedI);
	addElem(m_root, "intent2", m_opts->Intent2);
	addElem(m_root, "printProf", m_opts->PrintProf);
	addElem(m_root, "info", m_opts->Info);
	addElem(m_root, "intent", m_opts->Intent);
	addElem(m_root, "bleedTop", m_opts->BleedTop);
	addElem(m_root, "bleedLeft", m_opts->BleedLeft);
	addElem(m_root, "bleedRight", m_opts->BleedRight);
	addElem(m_root, "bleedBottom", m_opts->BleedBottom);
	addElem(m_root, "encrypt", m_opts->Encrypt);
	addElem(m_root, "passOwner", m_includePasswords ? m_opts->PassOwner : "");
	addElem(m_root, "passUser", m_includePasswords ? m_opts->PassUser : "");
	addElem(m_root, "permissions", m_opts->Permissions);
}

// Convenience functions to add a single-attribute element
// of a particular type to the tree at a given point.

void PDFOptionsIO::addElem(QDomElement& addTo, QString name, bool value)
{
	QDomElement elem = m_doc.createElement(name);
	elem.setAttribute("value",value);
	addTo.appendChild(elem);
}

void PDFOptionsIO::addElem(QDomElement& addTo, QString name, QString value)
{
	QDomElement elem = m_doc.createElement(name);
	elem.setAttribute("value",value);
	addTo.appendChild(elem);
}

void PDFOptionsIO::addElem(QDomElement& addTo, QString name, int value)
{
	QDomElement elem = m_doc.createElement(name);
	elem.setAttribute("value",value);
	addTo.appendChild(elem);
}

void PDFOptionsIO::addElem(QDomElement& addTo, QString name, double value)
{
	QDomElement elem = m_doc.createElement(name);
	elem.setAttribute("value",value);
	addTo.appendChild(elem);
}

// Save a QValueList<String> or QStringList as a list of
// <item value=""> elements
void PDFOptionsIO::addList(QDomElement& addTo, QString name, QValueList<QString>& value)
{
	// List base element has no attributes, only children
	QDomElement listbase = m_doc.createElement(name);
	addTo.appendChild(listbase);
	QValueList<QString>::iterator it;
	for (it = value.begin(); it != value.end(); ++it)
		addElem(listbase, "item", *(it));
}

// save PDFOptions::PresentVals
void PDFOptionsIO::addPresentationData()
{
	// PDFOptions::PresentVals is a QValueList<PDFPresentationData>
	//
	// XML structure will be like this:
	// <presentationSettings>
	//   <presentationSettingsEntry>
	//     <pageEffectDuration value="0"/>
	//     <pageViewDuration value="0"/>
	//     <effectType value="0"/>
	//     <dm value="0"/>
	//     <m value="0"/>
	//     <di value="0"/>
	//   </presentationSettingsEntry>
	//   <presentationSettingsEntry>
	//     ...
	//   </presentationSettingsEntry>
	//   ...
	// </presentationSettings>
	QDomElement presentationSettings = m_doc.createElement("presentationSettings");
	m_root.appendChild(presentationSettings);
	QValueList<PDFPresentationData>::iterator it;
	for (it = m_opts->PresentVals.begin(); it != m_opts->PresentVals.end(); ++it)
	{
		// Settings entry has no attributes, only children
		QDomElement psEntry = m_doc.createElement("presentationSettingsEntry");
		presentationSettings.appendChild(psEntry);
		// Children:
		addElem(psEntry, "pageEffectDuration", (*it).pageEffectDuration);
		addElem(psEntry, "pageViewDuration", (*it).pageViewDuration);
		addElem(psEntry, "effectType", (*it).effectType);
		addElem(psEntry, "dm", (*it).Dm);
		addElem(psEntry, "m", (*it).M);
		addElem(psEntry, "di", (*it).Di);
	}
}

// Save PDFOptions::LPISettings
void PDFOptionsIO::addLPISettings()
{
	// PDFOptions::LPISettings is a QMap<QString,LPIData>
	//
	// XML structure will be like this:
	// <lpiSettings>
	//   <lpiSettingsEntry name="blah">
	//     <frequency value="0">
	//     <angle value="0">
	//     <spotFunc value="0">
	//   </lpiSettingsEntry>
	//   <lpiSettingsEntry name="blah2">
	//     ...
	//   </lpiSettingsEntry>
	//   ...
	// </lpiSettings>
	QDomElement lpiSettings = m_doc.createElement("lpiSettings");
	m_root.appendChild(lpiSettings);
	QMap<QString,LPIData>::iterator it;
	for (it = m_opts->LPISettings.begin(); it != m_opts->LPISettings.end(); ++it)
	{
		// Settings entry has no attributes, only children
		QDomElement lpiEntry = m_doc.createElement("lpiSettingsEntry");
		lpiEntry.setAttribute("name", it.key());
		lpiSettings.appendChild(lpiEntry);
		// Children:
		addElem(lpiEntry, "frequency", (*it).Frequency);
		addElem(lpiEntry, "angle", (*it).Angle);
		addElem(lpiEntry, "spotFunc", (*it).SpotFunc);
	}

}

bool PDFOptionsIO::readFrom(QTextStream& inStream)
{
	if (!inStream.device()->isReadable())
		return false;
	// TODO: implement this method
	return false;
}

// overload of bool readFrom(QTextStream& inStream)
bool PDFOptionsIO::readFrom(QString inFileName)
{
	QTextStream ts(inFileName, IO_ReadOnly);
	return readFrom(ts);
}

const QString& PDFOptionsIO::lastError() const
{
	return m_error;
}
