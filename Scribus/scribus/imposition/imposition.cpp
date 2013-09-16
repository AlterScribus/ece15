/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "imposition.h"

#include <cstdlib>
#include <iostream>
#include <string>
#include <cstdio>
#include <stdexcept>
#include <iomanip>
#include "podofo/podofo.h"
#include "impositionoutputfile.h"
using std::cerr;
using std::strtod;
using std::ostringstream;
using std::map;
using std::vector;
using std::string;
using std::ifstream;
using std::istream;
using std::ostream;
using std::endl;
using std::runtime_error;
namespace Imposition
{
		imposer::imposer ( )
		{
		}

		void imposer::imposeBirthdayCard (const QString & target, imposeInputFile * input, ImposerOptions * options )
		{
			int numberOfSheets = 0;
			int currentSheet;
			int currentPage;
			int currentPageOnSheet;

			double scalingFactor = options->scalingFactor;
			double destWidth   = options->sheetWidth;
			double destHeight  = options->sheetHeight;
			std::string boundingBox = "";

			imposeOutputFile * output      = new imposeOutputFile();
			output->createTarget(target.toStdString(),input);

			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			numberOfSheets = (input->pcount+3) / 4;
			currentPage = 1;
			for (currentSheet = 1; currentSheet <= numberOfSheets; currentSheet++) {
				/* Create new sheet */
				output->startSheet(destWidth, destHeight, scalingFactor);
				for (currentPageOnSheet = 1; currentPageOnSheet <= 4; currentPageOnSheet++) {
					if (currentPage <= input->pcount) {
						/* If there are still input pages left, add the next to the output */
						/* First calculate the rotation and translation
						 * Page 3 and 4 are upside down*/
						double cosR = currentPageOnSheet < 2 ? -1 : 1;
						double sinR = 0;
						double tx;
						double ty;
						switch (currentPageOnSheet) {
							case 1:
							  cosR = -1.0;
							  sinR = 0.0;
							  tx   = input->sourceWidth;
							  ty   = input->sourceHeight*2;
							  break;
							case 2:
							  cosR = -1.0;
							  sinR = 0.0;
							  tx   = input->sourceWidth*2;
							  ty   = input->sourceHeight*2;
							  break;
							case 3:
							  cosR = 1.0;
							  sinR = 0.0;
							  tx   = 0.0;
							  ty   = 0.0;
							  break;
							case 4:
							  cosR = 1.0;
							  sinR = 0.0;
							  tx   = input->sourceWidth;
							  ty   = 0.0;
							  break;
							default:
							  std::cerr<<"imposeBirthdayCard::impose error: currentPageOnSheet of of range."<<std::endl;
							  cosR = 1.0;
							  sinR = 0.0;
							  tx   = 0.0;
							  ty   = 0.0;
							  break;
						}
						output->imposePage(currentPage, cosR, sinR, tx,ty);

						currentPage++;
					}
				}
				output->finishSheet();

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeBusinessCard (const QString & target, imposeInputFile * input, ImposerOptions * options )
		{
			int numberOfSheets = 0;
			int currentSheet;

		  int cx, cy;

			double tx,ty;
			double scalingFactor = options->scalingFactor;
			double destWidth   = options->sheetWidth;
			double destHeight  = options->sheetHeight;
			std::string boundingBox = "";

			imposeOutputFile * output      = new imposeOutputFile();
			output->createTarget(target.toStdString(),input);

			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			numberOfSheets = input->pcount;
			for (currentSheet = 1; currentSheet <= numberOfSheets; currentSheet++) {
				output->startSheet(destWidth, destHeight, scalingFactor);
				tx = 0.0;
        for (cx = 0; cx<options->nX; cx++) {
          ty = 0.0;
          for (cy = 0; cy<options->nY; cy++) {
						output->imposePage(currentSheet, 1.0, 0.0, tx,ty); /* Sheet number is page number */
					  ty+=input->sourceHeight;
					}
          tx+=input->sourceWidth;
				}
				output->finishSheet();

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeMultiFold (const QString & target, imposeInputFile * input, ImposerOptions * options )
		{
			int nPagesPerSheet = options->nX * options->nY;

			double scalingFactor = options->scalingFactor;
			double destWidth   = options->sheetWidth;
			double destHeight  = options->sheetHeight;

			std::string boundingBox = "";

      int currentSide = 0;		/* 0 = front, 1 = back */
			int numberOfCreatedPages = 0;
			int currentPage = 0;

			/* cosR and sinR are fixed for now: no rotation supported yet */
			double cosR = 1.0;
			double sinR = 0.0;

			double tx;
			double ty;

			imposeOutputFile * output      = new imposeOutputFile();
			output->createTarget(target.toStdString(),input);

			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			if (options->doubleSided == true) {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 2*nFold.
			   * nPagesPerSheet pages per sheet, double sided */
			  numberOfCreatedPages = (input->pcount+(nPagesPerSheet*2)-1);
			  numberOfCreatedPages -= numberOfCreatedPages % (nPagesPerSheet*2);
			} else {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 2.
			   * nPagesPerSheet pages per sheet, single sided */
			  numberOfCreatedPages = (input->pcount+nPagesPerSheet-1);
			  numberOfCreatedPages -= numberOfCreatedPages % nPagesPerSheet;
			}
			currentPage = 1; currentSide = 0;
			while (currentPage <= numberOfCreatedPages) {
				/* Create new sheet */
				output->startSheet(destWidth, destHeight, scalingFactor);
				for (int pY = 1; pY <= options->nY; pY ++) {
          for (int pX = 1; pX <= options->nX; pX ++) {
            /* FIXME: Support rotation */
					  tx = (pX-1)*input->sourceWidth;
					  ty = (options->nY-pY)*input->sourceHeight;
					  if (currentPage <= input->pcount) output->imposePage(currentPage, cosR, sinR, tx,ty);
					  currentPage++;
          }
				}
        output->finishSheet();
				currentSide ^=1;

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeMagazine (const QString & target, imposeInputFile * input, ImposerOptions * options )
		{
			int numberOfCreatedPages = 0;
			int leftPage, rightPage;

			double scalingFactor = options->scalingFactor;
			double destWidth   = options->sheetWidth;
			double destHeight  = options->sheetHeight;
			std::string boundingBox = "";

			/* cosR and sinR are fixed for now: no rotation supported yet */
			double cosR = 1.0;
			double sinR = 0.0;

			double tx;
			double ty;

			imposeOutputFile * output      = new imposeOutputFile();
			output->createTarget(target.toStdString(),input);

			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			if (options->doubleSided == true) {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 4.
			   * Two pages per sheet, double sided */
			  numberOfCreatedPages = (input->pcount+3) & ~3;
			} else {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 2.
			   * Two pages per sheet, single sided */
			  numberOfCreatedPages = (input->pcount+1) & ~1;
			}
			/* Set starting pages. */
			leftPage = 1;
			rightPage = numberOfCreatedPages;

			if ( leftPage > rightPage ) // Sanity check
				throw std::invalid_argument ( "imposeMagazine: This can't happen error: leftpage exceeds rightpage." );

			/* Loop over all pages. The page counters leftPage and rightPage can both exceed the source page counter,
			 * e.g. when there is 1 source page but we make a double-sided magazine, the leftPage counts 1,2 and the
			 * rightPage counts 4,3. Therefore all calls to imposePage must be guarded with a page number test.
			 */
			for (; leftPage < rightPage; leftPage++, rightPage--) {
				/* Create new sheet */
				output->startSheet(destWidth, destHeight, scalingFactor);
				ty = 0.0;
				if ((options->doubleSided == 1) && ((leftPage & 1)==1)) {
					/* If we impose double sided, and we are printing the odd pages,
					   swap left and right */
					tx = 0.0;
					if (rightPage <= input->pcount) output->imposePage(rightPage, cosR, sinR, tx,ty);
					tx = input->sourceWidth;
					if (leftPage <= input->pcount)  output->imposePage(leftPage , cosR, sinR, tx,ty);
				} else {
					/* Otherwise the pages are not swapped.*/
					tx = 0.0;
					if (leftPage  <= input->pcount) output->imposePage(leftPage , cosR, sinR, tx,ty);
					tx = input->sourceWidth;
					if (rightPage <= input->pcount) output->imposePage(rightPage, cosR, sinR, tx,ty);
				}
		                output->finishSheet();

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeTiles (const QString & target, imposeInputFile * input, ImposerOptions * options )
		{
		}

		void imposer::imposeFile (const QString & target, imposeInputFile * input, ImposerOptions * options )
		{
		}

		int imposer::impose ( QString in, QString out, ImposerOptions * options)
		{
			try
			{
				if (options->style == ImposerOptions::None) {
					std::cerr << "Imposer::impose called with no imposition selected." << std::endl;
					return -1;
				}

				imposeInputFile * input = new imposeInputFile(in.toStdString());
				switch (options->style) {
					case ImposerOptions::BirthdayCard:
						imposeBirthdayCard (out,input,options);
						break;
					case ImposerOptions::BusinessCard:
						imposeBusinessCard (out,input,options);
						break;
					case ImposerOptions::Magazine:
						imposeMagazine (out,input,options);
						break;
					case ImposerOptions::MultiFold:
						imposeMultiFold (out,input,options);
						break;
					case ImposerOptions::Tiles:
						imposeTiles (out,input,options);
						break;
					case ImposerOptions::File:
						imposeFile (out,input,options);
						break;
					default:
						std::cerr << "imposer::impose called with unhandled imposition style: " << options->style << std::endl;
						break;
				}
			}
			catch ( PoDoFo::PdfError & e )
			{
				e.GetCallstack();
				e.PrintErrorMsg();
				return 3;
			}
			catch ( std::exception & e )
			{
				cerr << e.what() << endl;
			}

			return 0;
		}
}
