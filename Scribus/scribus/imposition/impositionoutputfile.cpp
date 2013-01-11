/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "impositionoutputfile.h"

#include <fstream>
#include <stdexcept>
#include <algorithm>
#include <cmath>
#include <istream>
#include <ostream>
#include <cstdlib>
#include <iostream>

using std::ostringstream;
using std::map;
using std::vector;
using std::string;
using std::ifstream;
using std::istream;
using std::ostream;
using std::endl;
using std::runtime_error;
using namespace PoDoFo;

namespace Imposition
{

		imposeOutputFile::imposeOutputFile ( )
		{
			targetDoc = 0;
			sheet = NULL;
			//scaleFactor = 1.0;
		}

		PdfObject* imposeOutputFile::migrateResource ( PdfObject * obj, imposeInputFile * input  )
		{
			PdfObject *ret ( 0 );

			if ( obj->IsDictionary() )
			{
				ret = targetDoc->GetObjects().CreateObject ( *obj );

				TKeyMap resmap = obj->GetDictionary().GetKeys();
				for ( TCIKeyMap itres = resmap.begin(); itres != resmap.end(); ++itres )
				{
					PdfObject *o = itres->second;
					ret->GetDictionary().AddKey ( itres->first , migrateResource ( o, input ) );
				}

				if ( obj->HasStream() )
				{
					* ( ret->GetStream() ) = * ( obj->GetStream() );
//                    ret = new PdfObject( ret->Reference() );
				}
			}
			else if ( obj->IsArray() )
			{
				PdfArray carray ( obj->GetArray() );
				PdfArray narray;
				for ( unsigned int ci = 0; ci < carray.GetSize(); ++ci )
				{
					PdfObject *co ( migrateResource ( &carray[ci],input ) );
					narray.push_back ( *co );
				}
				ret = targetDoc->GetObjects().CreateObject ( narray );
			}
			else if ( obj->IsReference() )
			{
				if ( migrateMap.find ( obj->GetReference().ToString() ) != migrateMap.end() )
                {
                    PdfObject * obj2 = migrateMap[ obj->GetReference().ToString() ];
                    return new PdfObject (obj2->Reference());
                    //return migrateMap[obj->GetReference().ToString() ];
				}

				PdfObject * o ( migrateResource ( input->sourceDoc->GetObjects().GetObject ( obj->GetReference() ), input ) );

                                ret  = new PdfObject ( o->Reference() ) ;

			}
			else
			{
				ret = new PdfObject ( *obj );//targetDoc->GetObjects().CreateObject(*obj);
			}


			migrateMap.insert ( std::pair<std::string, PdfObject*> ( obj->Reference().ToString(), ret ) );


			return ret;

		}

		PdfObject* imposeOutputFile::getInheritedResources ( PdfPage* page, imposeInputFile * input)
		{
			PdfObject *res ( 0 ); // = new PdfObject;
			PdfObject *rparent = page->GetObject();
			while ( rparent && rparent->IsDictionary() )
			{
				PdfObject *curRes = rparent->GetDictionary().GetKey ( PdfName ( "Resources" ) );
				if ( curRes )
				{
					res = migrateResource ( curRes, input );
				}
				rparent = rparent->GetIndirectKey ( "Parent" );
			}
			return res;

		}

		void imposeOutputFile::createTarget ( const std::string & target, imposeInputFile * input)
		{
			if ( !input || !input->sourceDoc )
				throw std::logic_error ( "input document not loaded." );

			targetDoc = new PdfMemDocument;

			for ( int i = 0; i < input->pcount ; ++i )
			{
				PdfPage * page = input->sourceDoc->GetPage ( i );
				PdfMemoryOutputStream outMemStream ( 1 );

				PdfXObject *xobj = new PdfXObject ( page->GetMediaBox(), targetDoc );
				if ( page->GetContents()->HasStream() )
				{
					page->GetContents()->GetStream()->GetFilteredCopy ( &outMemStream );
				}
				else if ( page->GetContents()->IsArray() )
				{
					PdfArray carray ( page->GetContents()->GetArray() );
					for ( unsigned int ci = 0; ci < carray.GetSize(); ++ci )
					{
						if ( carray[ci].HasStream() )
						{
							carray[ci].GetStream()->GetFilteredCopy ( &outMemStream );
						}
						else if ( carray[ci].IsReference() )
						{
							PdfObject *co = input->sourceDoc->GetObjects().GetObject ( carray[ci].GetReference() );

							while ( co != NULL )
							{
								if ( co->IsReference() )
								{
									co = input->sourceDoc->GetObjects().GetObject ( co->GetReference() );
								}
								else if ( co->HasStream() )
								{
									co->GetStream()->GetFilteredCopy ( &outMemStream );
									break;
								}
							}

						}

					}
				}

				/// Its time to manage other keys of the page dictionary.
				std::vector<std::string> pageKeys;
				std::vector<std::string>::const_iterator itKey;
				pageKeys.push_back ( "Group" );
				for ( itKey = pageKeys.begin(); itKey != pageKeys.end(); ++itKey )
				{
					PdfName keyname ( *itKey );
					if ( page->GetObject()->GetDictionary().HasKey ( keyname ) )
					{
						xobj->GetObject()->GetDictionary().AddKey ( keyname, migrateResource ( page->GetObject()->GetDictionary().GetKey ( keyname ) , input));
					}
				}

				outMemStream.Close();

				PdfMemoryInputStream inStream ( outMemStream.TakeBuffer(),outMemStream.GetLength() );
				xobj->GetContents()->GetStream()->Set ( &inStream );

				resources[i+1] = getInheritedResources ( page,input );
				xobjects[i+1] = xobj;
				cropRect[i+1] = page->GetCropBox();
				bleedRect[i+1] = page->GetBleedBox();
				trimRect[i+1] = page->GetTrimBox();
				artRect[i+1] = page->GetArtBox();

			}


			targetDoc->SetPdfVersion ( input->sourceDoc->GetPdfVersion() );

			PdfInfo *sInfo ( input->sourceDoc->GetInfo() );
			PdfInfo *tInfo ( targetDoc->GetInfo() );

			if ( sInfo->GetAuthor() != PdfString::StringNull )
				tInfo->SetAuthor ( sInfo->GetAuthor() );
			if ( sInfo->GetCreator() != PdfString::StringNull )
				tInfo->SetCreator ( sInfo->GetCreator() );
			if ( sInfo->GetSubject() != PdfString::StringNull )
				tInfo->SetSubject ( sInfo->GetSubject() );
			if ( sInfo->GetTitle() != PdfString::StringNull )
				tInfo->SetTitle ( sInfo->GetTitle() );
			if ( sInfo->GetKeywords() != PdfString::StringNull )
				tInfo->SetKeywords ( sInfo->GetKeywords() );

			if ( sInfo->GetTrapped() != PdfName::KeyNull )
				tInfo->SetTrapped ( sInfo->GetTrapped() );

		}

		void imposeOutputFile::imposePage (int page,double c, double s, double x, double y) {
			PdfXObject *xo = xobjects[page];
			// FIXME BBOX STUFF HERE
			ostringstream op;
			op << "OriginalPage" << page;
			xdict.AddKey ( PdfName ( op.str() ) , xo->GetObjectReference() );
			if ( resources[page] )
			{
				if ( resources[page]->IsDictionary() )
				{
					TKeyMap resmap = resources[page]->GetDictionary().GetKeys();
					TCIKeyMap itres;
					for ( itres = resmap.begin(); itres != resmap.end(); ++itres )
						xo->GetResources()->GetDictionary().AddKey ( itres->first, itres->second );
				}
				else if ( resources[page]->IsReference() )
					xo->GetObject()->GetDictionary().AddKey ( PdfName ( "Resources" ), resources[page] );
				else
					std::cerr<<"ERROR Unknown type resource "<<resources[page]->GetDataTypeString()  <<  std::endl;
			}
			// Very primitive but it makes it easy to track down imposition plan into content stream.
            *buffer << "q\n";
            *buffer << std::fixed << c <<" "<< s <<" "<< -s <<" "<< c<<" "<< x <<" "<<  y << " cm\n";
            *buffer << "/OriginalPage" << page << " Do\n";
            *buffer << "Q\n";
		}

		void imposeOutputFile::startSheet (double w, double h, double s) {
            sheet = targetDoc->CreatePage ( PdfRect ( 0.0, 0.0, w, h ) );
            buffer = new std::ostringstream();
			xdict.Clear();
			/* Scale factor */
            *buffer << std::fixed << s <<" 0 0 "<< s <<" 0 0 cm\n";
		}


		void imposeOutputFile::finishSheet () {
            string bufStr = buffer->str();
            sheet->GetContentsForAppending()->GetStream()->Set ( bufStr.data(), bufStr.size() );
			sheet->GetResources()->GetDictionary().AddKey ( PdfName ( "XObject" ), xdict );
            delete buffer;
			// FIXME: Check whether sheet gets distroyed, otherwise memory leak here.
		};
}; // end of namespace
