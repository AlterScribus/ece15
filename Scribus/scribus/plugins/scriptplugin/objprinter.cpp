/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "objprinter.h"
#include "cmdutil.h"
#include "prefsmanager.h"

#include <structmember.h>
#include <qfileinfo.h>
#include <qdir.h>
#include <vector>
#include "pslib.h"
#include "util.h"

#ifdef HAVE_CUPS
#include <cups/cups.h>
#endif
#ifdef HAVE_CMS
extern bool SCRIBUS_API CMSuse;
#endif
// these functions are located at utils.cpp
bool SCRIBUS_API loadText(QString nam, QString *Buffer);
void SCRIBUS_API ReOrderText(ScribusDoc *doc, ScribusView *view);
// end of utils.cpp


typedef struct
{
	PyObject_HEAD
	PyObject *allPrinters; // list of strings - names of installed printers
	PyObject *printer;  // string - selected printer
	PyObject *file;  // string - name of file to print into (eg. output.ps)
	PyObject *cmd; // string - if "" use standard command else use this as command (eg. "kprinter", "xpp" ...)
	PyObject *pages; // list of integers - pages to be printed
	int copies; // numer of printed copies
	PyObject *separation; // string - No; All; Cyan; Magenta; Yellow; Black
	int color; // bool - do we print in color=1 or greyscale=0
	int useICC; // bool - do we use ICC Profiles 0 = No 1 = Yes
	int pslevel; // integer - 1, 2 or 3 level of used postscript
	int mph; // bool - mirror pages horizontally
	int mpv; // bool - mirror pages vertically
	int ucr; // bool - Under Color Removal
} Printer;


static void Printer_dealloc(Printer* self)
{
	Py_XDECREF(self->allPrinters);
	Py_XDECREF(self->printer);
	Py_XDECREF(self->file);
	Py_XDECREF(self->cmd);
	Py_XDECREF(self->pages);
	Py_XDECREF(self->separation);
	self->ob_type->tp_free((PyObject *)self);
}

static PyObject * Printer_new(PyTypeObject *type, PyObject */*args*/, PyObject */*kwds*/)
{
// do not create new object if there is no opened document
	if (!ScMW->HaveDoc) {
		PyErr_SetString(PyExc_SystemError, "Need to open document first");
		return NULL;
	}

	Printer *self;
	self = (Printer *)type->tp_alloc(type, 0);
	if (self != NULL) {
// set allPrinters attribute
		self->allPrinters = PyList_New(0);
		if (self->allPrinters == NULL){
			Py_DECREF(self);
			return NULL;
		}
// set printer attribute
		self->printer = PyString_FromString("");
		if (self->printer == NULL){
			Py_DECREF(self);
			return NULL;
		}
// set file attribute
		self->file = PyString_FromString("");
		if (self->file == NULL){
			Py_DECREF(self);
			return NULL;
		}
// set cmd attribute
		self->cmd = PyString_FromString("");
		if (self->cmd == NULL){
			Py_DECREF(self);
			return NULL;
		}
// set pages attribute
		self->pages = PyList_New(0);
		if (self->pages == NULL){
			Py_DECREF(self);
			return NULL;
		}
// set separation attribute
		self->separation = PyString_FromString("No");
		if (self->separation == NULL){
			Py_DECREF(self);
			return NULL;
		}
// set color attribute
		self->color = 1;
// set useICC attribute
		self->useICC = 0;
// set pslevel attribute
		self->pslevel = 3;
// set mph attribute
		self->mph = 0;
// set mpv attribute
		self->mpv = 0;
// set ucr attribute
		self->ucr = 1;
// set copies attribute
		self->copies = 1;
	}
	return (PyObject *) self;
}

static int Printer_init(Printer *self, PyObject */*args*/, PyObject */*kwds*/)
{
// pool system for installed printers
// most code is stolen and little adopted from druck.cpp
	PyObject *allPrinters = PyList_New(0);
	if (allPrinters){
		Py_DECREF(self->allPrinters);
		self->allPrinters = allPrinters;
	}
#ifdef HAVE_CUPS
	cups_dest_t *dests;
	int num_dests = cupsGetDests(&dests);
	for (int i = 0; i < num_dests; ++i) {
		if (dests[i].name != NULL) {
			PyObject *tmp = PyString_FromString(dests[i].name);
			if (tmp) {
				PyList_Append(self->allPrinters, tmp);
				Py_DECREF(tmp);
			}
		}
	}
	cupsFreeDests(num_dests, dests);
#else
	QString Pcap;
	// loadText is defined in utils.cpp
	if (loadText("/etc/printcap", &Pcap))
	{
		QTextStream ts(&Pcap, IO_ReadOnly);
		while(!ts.atEnd())
		{
			QStringList wt;
			QString tmp = ts.readLine();
			if (tmp.isEmpty())
				continue;
			if ((tmp[0] != '#') && (tmp[0] != ' ') && (tmp[0] != '\n') && (tmp[0] != '\t'))
			{
				tmp = tmp.stripWhiteSpace();
				tmp = tmp.left(tmp.length() - (tmp.right(2) == ":\\" ? 2 : 1));
				wt = QStringList::split("|", tmp);
				PyObject *tmppr = PyString_FromString(wt[0]);
				if (tmppr){
					PyList_Append(self->allPrinters, tmppr);
					Py_DECREF(tmppr);
				}
			}
		}
	}
#endif
	PyObject *tmp2 = PyString_FromString("File");
	PyList_Append(self->allPrinters, tmp2);
	Py_DECREF(tmp2);
// as defaut set to print into file
	PyObject *printer = NULL;
	printer = PyString_FromString("File");
	if (printer){
		Py_DECREF(self->printer);
		self->printer = printer;
	}
// set defaul name of file to print into
	QString tf = ScMW->doc->PDF_Options.Datei;
	if (tf.isEmpty()) {
		QFileInfo fi = QFileInfo(ScMW->doc->DocName);
		tf = fi.dirPath()+"/"+fi.baseName()+".pdf";
	}
	PyObject *file = NULL;
	file = PyString_FromString(tf.ascii());
	if (file){
		Py_DECREF(self->file);
		self->file = file;
	} else {
		PyErr_SetString(PyExc_SystemError, "Can not initialize 'file' attribute");
		return -1;
	}
// alternative printer commands default to ""
	PyObject *cmd = NULL;
	cmd = PyString_FromString("");
	if (cmd){
		Py_DECREF(self->cmd);
		self->cmd = cmd;
	}
// if document exist when created Printer instance
// set to print all pages
	PyObject *pages = NULL;
	int num = 0;
	if (ScMW->HaveDoc)
		// which one should I use ???
		// new = ScMW->view->Pages.count()
		num = ScMW->doc->Pages->count();
	pages = PyList_New(num);
	if (pages){
		Py_DECREF(self->pages);
		self->pages = pages;
	}
	for (int i = 0; i<num; i++) {
		PyObject *tmp=NULL;
		tmp = PyInt_FromLong((long)i+1L); // instead of 1 put here first page number
		if (tmp)
			PyList_SetItem(self->pages, i, tmp);
	}
// do not print separation
	PyObject *separation = NULL;
	separation = PyString_FromString("No");
	if (separation){
		Py_DECREF(self->separation);
		self->separation = separation;
	}
// print in color
	self->color = 1;
// do not use ICC Profile
	self->useICC = 0;
// use PostScrip level 3
	self->pslevel = 3;
// do not mirror pages
	self->mph = 0;
// do not mirror pages
	self->mpv = 0;
// apply Under Color Removal as default
	self->ucr = 1;
// number of copies
	self->copies = 1;
	return 0;
}

static PyMemberDef Printer_members[] = {
	{const_cast<char*>("copies"), T_INT, offsetof(Printer, copies), 0, const_cast<char*>("Number of copies")},
	{const_cast<char*>("color"), T_INT, offsetof(Printer, color), 0, const_cast<char*>("Print in color.\n\t True - color  --  Default\n\t False - greyscale")},
	{const_cast<char*>("useICC"), T_INT, offsetof(Printer, useICC), 0, const_cast<char*>("Use ICC Profile\n\tTrue\n\tFalse  --  Default")},
	{const_cast<char*>("pslevel"), T_INT, offsetof(Printer, pslevel), 0, const_cast<char*>("PostScript Level\nCan be 1 or 2 or 3    -- Default is 3.")},
	{const_cast<char*>("mph"), T_INT, offsetof(Printer, mph), 0, const_cast<char*>("Mirror Pages Horizontal\n\tTrue\n\tFalse  --  Default")},
	{const_cast<char*>("mpv"), T_INT, offsetof(Printer, mpv), 0, const_cast<char*>("Mirror Pages Vertical\n\t True\n\tFalse  --  Default")},
	{const_cast<char*>("ucr"), T_INT, offsetof(Printer, ucr), 0, const_cast<char*>("Apply Under Color Removal\n\tTrue  --  Default\n\tFalse")},
	{NULL, 0, 0, 0, NULL} // sentinel
};

/* Here begins Getter & Setter functions */

static PyObject *Printer_getallPrinters(Printer *self, void */*closure*/)
{
	Py_INCREF(self->allPrinters);
	return self->allPrinters;
}

static int Printer_setallPrinters(Printer */*self*/, PyObject */*value*/, void */*closure*/)
{
	PyErr_SetString(PyExc_ValueError, "'allPrinters' attribute is READ-ONLY");
	return -1;
}

static PyObject *Printer_getprinter(Printer *self, void */*closure*/)
{
	Py_INCREF(self->printer);
	return self->printer;
}

static int Printer_setprinter(Printer *self, PyObject *value, void */*closure*/)
{
	if (value == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete 'printer' attribute.");
		return -1;
	}
	if (!PyString_Check(value)) {
		PyErr_SetString(PyExc_TypeError, "The 'printer' attribute value must be string.");
		return -1;
	}
	int n = PyList_Size(self->allPrinters);
	bool same = 0;
	for (int i = 0; i<n; i++)
		if (PyObject_RichCompareBool(value, PyList_GetItem(self->allPrinters, i), Py_EQ) == 1)
			same = true;
	if (!same) {
		PyErr_SetString(PyExc_ValueError, "'printer' value can be only one of string in 'allPrinters' attribute ");
		return -1;
	}
	Py_DECREF(self->printer);
	Py_INCREF(value);
	self->printer = value;
	return 0;
}

static PyObject *Printer_getfile(Printer *self, void */*closure*/)
{
	Py_INCREF(self->file);
	return self->file;
}

static int Printer_setfile(Printer *self, PyObject *value, void */*closure*/)
{
	if (value == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete 'file' attribute.");
		return -1;
	}
	if (!PyString_Check(value)) {
		PyErr_SetString(PyExc_TypeError, "The 'file' attribute value must be string.");
		return -1;
	}
	Py_DECREF(self->file);
	Py_INCREF(value);
	self->file = value;
	return 0;
}

static PyObject *Printer_getcmd(Printer *self, void */*closure*/)
{
	Py_INCREF(self->cmd);
	return self->cmd;
}

static int Printer_setcmd(Printer *self, PyObject *value, void */*closure*/)
{
	if (value == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete 'cmd' attribute.");
		return -1;
	}
	if (!PyString_Check(value)) {
		PyErr_SetString(PyExc_TypeError, "The 'cmd' attribute value must be string.");
		return -1;
	}
	Py_DECREF(self->cmd);
	Py_INCREF(value);
	self->cmd = value;
	return 0;
}

static PyObject *Printer_getpages(Printer *self, void */*closure*/)
{
	Py_INCREF(self->pages);
	return self->pages;
}

static int Printer_setpages(Printer *self, PyObject *value, void */*closure*/)
{
	if (value == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete 'pages' attribute.");
		return -1;
	}
	if (!PyList_Check(value)) {
		PyErr_SetString(PyExc_TypeError, "'pages' attribute value must be list of integers.");
		return -1;
	}
	int len = PyList_Size(value);
	for (int i = 0; i<len; i++){
		PyObject *tmp = PyList_GetItem(value, i);
		if (!PyInt_Check(tmp)){
			PyErr_SetString(PyExc_TypeError, "'pages' attribute must be list containing only integers.");
			return -1;
		}
		if (PyInt_AsLong(tmp) > static_cast<int>(ScMW->doc->Pages->count()) || PyInt_AsLong(tmp) < 1) {
			PyErr_SetString(PyExc_ValueError, "'pages' value out of range.");
			return -1;
		}
	}
	Py_DECREF(self->pages);
	Py_INCREF(value);
	self->pages = value;
	return 0;
}

static PyObject *Printer_getseparation(Printer *self, void */*closure*/)
{
	Py_INCREF(self->separation);
	return self->separation;
}

static int Printer_setseparation(Printer *self, PyObject *value, void */*closure*/)
{
	if (value == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete 'separation' attribute.");
		return -1;
	}
	if (!PyString_Check(value)) {
		PyErr_SetString(PyExc_TypeError, "The 'separation' attribute value must be string.");
		return -1;
	}
	Py_DECREF(self->separation);
	Py_INCREF(value);
	self->separation = value;
	return 0;
}


static PyGetSetDef Printer_getseters [] = {
	{const_cast<char*>("allPrinters"), (getter)Printer_getallPrinters, (setter)Printer_setallPrinters, const_cast<char*>("List of installed printers  --  read only"), NULL},
	{const_cast<char*>("printer"), (getter)Printer_getprinter, (setter)Printer_setprinter, const_cast<char*>("Name of printer to use.\nDefault is 'File' for printing into file"), NULL},
	{const_cast<char*>("file"), (getter)Printer_getfile, (setter)Printer_setfile, const_cast<char*>("Name of file to print into"), NULL},
	{const_cast<char*>("cmd"), (getter)Printer_getcmd, (setter)Printer_setcmd, const_cast<char*>("Alternative Printer Command"), NULL},
	{const_cast<char*>("pages"), (getter)Printer_getpages, (setter)Printer_setpages, const_cast<char*>("List of pages to be printed"), NULL},
	{const_cast<char*>("separation"), (getter)Printer_getseparation, (setter)Printer_setseparation, const_cast<char*>("Print separationl\n\t 'No'  -- Default\n\t 'All'\n\t 'Cyan'\n\t 'Magenta'\n\t 'Yellow'\n\t 'Black'\nBeware of misspelling because check is not performed"), NULL},
	{NULL, NULL, NULL, NULL, NULL}  // sentinel
};

// Here we actually print
static PyObject *Printer_print(Printer *self)
{
	if (!ScMW->HaveDoc) {
		PyErr_SetString(PyExc_SystemError, "Need to open documetnt first");
		return NULL;
	}
// copied from void ScribusMainWindow::slotFilePrint() in file scribus.cpp
	QString fna, prn, cmd, scmd, cc, data, SepName;
	QString printcomm;
	int Nr, PSLevel;
	bool fil, sep, color, PSfile, mirrorH, mirrorV, useICC, DoGCR;
	PSfile = false;

//    ReOrderText(ScMW->doc, ScMW->view);
	prn = QString(PyString_AsString(self->printer));
	fna = QString(PyString_AsString(self->file));
	fil = (QString(PyString_AsString(self->printer)) == QString("File")) ? true : false;
	std::vector<int> pageNs;
	for (int i = 0; i < PyList_Size(self->pages); ++i) {
		pageNs.push_back((int)PyInt_AsLong(PyList_GetItem(self->pages, i)));
	}
	Nr = (self->copies < 1) ? 1 : self->copies;
	SepName = QString(PyString_AsString(self->separation));
	sep =(SepName == QString("No")) ?  false : true;
//	 if (SepName == QString("All"))
//		 SepName = tr(SepName);
	color = self->color;
	mirrorH = self->mph;
	mirrorV = self->mpv;
	useICC = self->useICC;
	DoGCR = self->ucr;
	int psl = self->pslevel;
	if (psl < 1)
		psl = 1;
	else if (psl > 3)
		psl = 3;
	PSLevel = psl;
	printcomm = QString(PyString_AsString(self->cmd));
	QMap<QString,int> ReallyUsed;
	ReallyUsed.clear();
	ScMW->doc->getUsedFonts(&ReallyUsed);
	PrefsManager *prefsManager=PrefsManager::instance();
	PSLib *dd = new PSLib(true, prefsManager->appPrefs.AvailFonts, ReallyUsed, ScMW->doc->PageColors, false, true);
	if (dd != NULL)
	{
		if (!fil)
			fna = ScMW->PrefsPfad+"/tmp.ps";
		PSfile = dd->PS_set_file(fna);
		fna = QDir::convertSeparators(fna);
		if (PSfile)
		{
			QStringList spots;
			dd->CreatePS(ScMW->doc, /*ScMW->view, */pageNs, sep, SepName, spots, color, mirrorH, mirrorV, useICC, DoGCR, false);
			if (PSLevel != 3)
			{
				QString tmp;
				QStringList opts;
				opts.append( QString("-dDEVICEWIDTHPOINTS=%1").arg(tmp.setNum(ScMW->doc->pageWidth)) );
				opts.append( QString("-dDEVICEHEIGHTPOINTS=%1").arg(tmp.setNum(ScMW->doc->pageHeight)) );
				convertPS2PS(fna, fna+".tmp", opts, PSLevel);
				moveFile( fna + ".tmp", fna );
			}

			if (!fil)
			{
				if (!printcomm.isEmpty())
					cmd = printcomm + " "+fna;
				else
				{
					cmd = "lpr -P" + prn;
					if (Nr > 1)
						cmd += " -#" + cc.setNum(Nr);
#ifdef HAVE_CUPS
// This need yet to be implemented by object Printer
//					cmd += printer->PrinterOpts;
#endif
					cmd += " "+fna;
				}
				system(cmd);
				unlink(fna);
			}
		}
		else {
			delete dd;
			PyErr_SetString(PyExc_SystemError, "Printing failed");
			return NULL;
		}
		delete dd;
	}
	Py_INCREF(Py_None);
	return Py_None;
}

static PyMethodDef Printer_methods[] = {
	{const_cast<char*>("print"), (PyCFunction)Printer_print, METH_NOARGS, const_cast<char*>("Prints selected pages.")},
	{NULL, (PyCFunction)(0), 0, NULL} // sentinel
};

PyTypeObject Printer_Type = {
	PyObject_HEAD_INIT(NULL)   // PyObject_VAR_HEAD
	0,			 //
	const_cast<char*>("Printer"), // char *tp_name; /* For printing, in format "<module>.<name>" */
	sizeof(Printer),   // int tp_basicsize, /* For allocation */
	0,		       // int tp_itemsize; /* For allocation */

	/* Methods to implement standard operations */

	(destructor) Printer_dealloc, //     destructor tp_dealloc;
	0, //     printfunc tp_print;
	0, //     getattrfunc tp_getattr;
	0, //     setattrfunc tp_setattr;
	0, //     cmpfunc tp_compare;
	0, //     reprfunc tp_repr;

	/* Method suites for standard classes */

	0, //     PyNumberMethods *tp_as_number;
	0, //     PySequenceMethods *tp_as_sequence;
	0, //     PyMappingMethods *tp_as_mapping;

	/* More standard operations (here for binary compatibility) */

	0, //     hashfunc tp_hash;
	0, //     ternaryfunc tp_call;
	0, //     reprfunc tp_str;
	0, //     getattrofunc tp_getattro;
	0, //     setattrofunc tp_setattro;

	/* Functions to access object as input/output buffer */
	0, //     PyBufferProcs *tp_as_buffer;

	/* Flags to define presence of optional/expanded features */
	Py_TPFLAGS_DEFAULT|Py_TPFLAGS_BASETYPE,    // long tp_flags;

	printer__doc__,      // char *tp_doc; /* Documentation string */

	/* Assigned meaning in release 2.0 */
	/* call function for all accessible objects */
	0, //     traverseproc tp_traverse;

	/* delete references to contained objects */
	0, //     inquiry tp_clear;

	/* Assigned meaning in release 2.1 */
	/* rich comparisons */
	0, //     richcmpfunc tp_richcompare;

	/* weak reference enabler */
	0, //     long tp_weaklistoffset;

	/* Added in release 2.2 */
	/* Iterators */
	0, //     getiterfunc tp_iter;
	0, //     iternextfunc tp_iternext;

	/* Attribute descriptor and subclassing stuff */
	Printer_methods, //     struct PyMethodDef *tp_methods;
	Printer_members, //     struct PyMemberDef *tp_members;
	Printer_getseters, //     struct PyGetSetDef *tp_getset;
	0, //     struct _typeobject *tp_base;
	0, //     PyObject *tp_dict;
	0, //     descrgetfunc tp_descr_get;
	0, //     descrsetfunc tp_descr_set;
	0, //     long tp_dictoffset;
	(initproc)Printer_init, //     initproc tp_init;
	0, //     allocfunc tp_alloc;
	Printer_new, //     newfunc tp_new;
	0, //     freefunc tp_free; /* Low-level free-memory routine */
	0, //     inquiry tp_is_gc; /* For PyObject_IS_GC */
	0, //     PyObject *tp_bases;
	0, //     PyObject *tp_mro; /* method resolution order */
	0, //     PyObject *tp_cache;
	0, //     PyObject *tp_subclasses;
	0, //     PyObject *tp_weaklist;
	0, //     destructor tp_del;

#ifdef COUNT_ALLOCS
	/* these must be last and never explicitly initialized */
	//    int tp_allocs;
	//    int tp_frees;
	//    int tp_maxalloc;
	//    struct _typeobject *tp_next;
#endif
};
