/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "impositioninputfile.h"
#define DEBUG

#include <fstream>
#include <stdexcept>
#include <algorithm>
#include <cmath>
#include <istream>
#include <ostream>
#include <cstdlib>
using std::ostringstream;
using std::map;
using std::vector;
using std::string;
using std::ifstream;
using std::istream;
using std::ostream;
using std::endl;
using std::runtime_error;

#include <iostream>
namespace Imposition
	{

#define MAX_SOURCE_PAGES 5000
#define MAX_RECORD_SIZE 2048
		bool imposeInputFile::checkIsPDF ( std::string path )
		{
			ifstream in ( path.c_str(), ifstream::in );
			if ( !in.good() )
				throw runtime_error ( "setSource() failed to open input file" );

			const int magicBufferLen = 5;
			char magicBuffer[magicBufferLen ];
			in.read ( magicBuffer, magicBufferLen );
			std::string magic ( magicBuffer , magicBufferLen );

			in.close();
			if ( magic.find ( "%PDF" ) < 5 )
				return true;
			return false;
		}

		imposeInputFile::imposeInputFile ( )
		{
			sourceDoc = NULL;
			scaleFactor = 1.0;
		}

		imposeInputFile::imposeInputFile ( const std::string & source )
		{
			imposeInputFile();
			loadSource(source);
		}

		void imposeInputFile::loadSource ( const std::string & source )
		{
			if ( checkIsPDF ( source ) )
			{
				try{
					sourceDoc = new PdfMemDocument ( source.c_str() );
				}
				catch(PdfError& e)
				{
					std::cerr<<"Unable to create new PdfMemDocument: " <<PdfError::ErrorMessage( e. GetError() )<<endl;
					return;
				}
			}
			else
			{
				throw runtime_error ( "loadSource(): Input file appears not a valid PDF." );
			}


			pcount = sourceDoc->GetPageCount();
			if ( pcount > 0 ) // only here to avoid possible segfault, but PDF without page is not conform IIRC
			{
				PoDoFo::PdfRect rect ( sourceDoc->GetPage ( 0 )->GetMediaBox() );
				// keep in mind it’s just a hint since PDF can have different page sizes in a same doc
				sourceWidth =  rect.GetWidth() - rect.GetLeft();
				sourceHeight =  rect.GetHeight() - rect.GetBottom() ;
			} else	{
				throw runtime_error ( "loadSource(): No pages found in the source document" );
			}
		}

}; // end of namespace
