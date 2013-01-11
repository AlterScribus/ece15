/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPOSEINPUTFILE_H
#define IMPOSEINPUTFILE_H

#include "podofo/podofo.h"

#include <string>
#include <map>
#include <vector>
#include <sstream>
#include <istream>
#include <string>

using namespace PoDoFo;

namespace Imposition
{

class imposeInputFile
{
	public:
		imposeInputFile();
		imposeInputFile( const std::string & source );

		~imposeInputFile() { }

		void loadSource ( const std::string & source );

		PdfMemDocument *sourceDoc;
		int pcount;
		double sourceWidth;
		double sourceHeight;
		double scaleFactor;
		std::string boundingBox;

	private:
		bool checkIsPDF ( std::string path );

};

};// end of namespace
#endif
