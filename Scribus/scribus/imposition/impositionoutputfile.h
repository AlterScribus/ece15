/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPOSEOUTPUTFILE_H
#define IMPOSEOUTPUTFILE_H

#include "podofo/podofo.h"
#include "impositioninputfile.h"

#include <string>
#include <map>
#include <vector>
#include <sstream>
#include <istream>
#include <string>

using namespace PoDoFo;

namespace Imposition
{

  class imposeOutputFile
  {
	public:
		imposeOutputFile();

		~imposeOutputFile() { }

		PdfMemDocument *targetDoc;

		void createTarget ( const std::string & target, imposeInputFile * input );

		void startSheet(double w, double h, double s);
		void finishSheet();
		void imposePage (int page,double c, double s, double x, double y);
	private:
		PdfReference globalResRef;

		std::map<int, PdfXObject*> xobjects;
		std::map<int,PdfObject*> resources;
		std::map<int, PdfRect> cropRect;
		std::map<int,PdfRect> bleedRect;
		std::map<int, PdfRect> trimRect;
		std::map<int,PdfRect> artRect;
		std::map<int, PdfDictionary*> pDict;
		std::map<int, int> virtualMap;

		PdfObject* getInheritedResources ( PdfPage* page, imposeInputFile * input );
		PdfObject* migrateResource(PdfObject * obj, imposeInputFile * input);

		std::map<std::string, PdfObject*> migrateMap;

		PdfDictionary xdict;
        std::ostringstream * buffer;
		PdfPage *     sheet;
  };

}; // end of namespace
#endif
