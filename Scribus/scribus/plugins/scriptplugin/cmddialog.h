#ifndef CMDDIALOG_H
#define CMDDIALOG_H

#include <Python.h>

/** Calling Dialogs from Scribus */
PyObject *scribus_newdocdia(PyObject *self, PyObject* args);
PyObject *scribus_filedia(PyObject *self, PyObject* args);
#endif

