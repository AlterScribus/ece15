//
//  Little cms - profiler construction set
//  Copyright (C) 1998-2001 Marti Maria
//  Copyright (C) 2001 Klas Kalass
//
// THIS SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
// EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
// WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
//
// IN NO EVENT SHALL MARTI MARIA BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
// INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND,
// OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
// WHETHER OR NOT ADVISED OF THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF
// LIABILITY, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE
// OF THIS SOFTWARE.
//
// This file is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
//
// As a special exception to the GNU General Public License, if you
// distribute this file as part of a program that contains a
// configuration script generated by Autoconf, you may include it under
// the same distribution terms that you use for the rest of that program.
//
// Version 1.08a

#ifdef USE_KDE
#include <kcmdlineargs.h>
#include <kaboutdata.h>
#include <klocale.h>
#include <kapp.h>
#else
#include <qapplication.h>
#endif

#include "qtmeasurementtooldialog.h"

#ifdef USE_KDE
#define VERSION "1.0"
static const char *description =
	I18N_NOOP("KMeasurementTool");
// INSERT A DESCRIPTION FOR YOUR APPLICATION HERE
	
	
#endif



int main( int argc, char** argv )
{
#ifdef USE_KDE
  KAboutData aboutData( "kmeasurementtool", I18N_NOOP("KMeasurementTool"),
    VERSION, description, KAboutData::License_GPL,
    "(c) 2001, Klas Kalass, Marti Maria", 0, 0, "klas.kalass@gmx.de");
  aboutData.addAuthor("Klas Kalass, Marti Maria",0, "klas.kalass@gmx.de");
  KCmdLineArgs::init( argc, argv, &aboutData );
  KApplication app;
#else
  QApplication app( argc, argv );
#endif
  qtMeasurementToolDialog dialog( 0, 0, TRUE );
  app.setMainWidget(&dialog);
  
  dialog.exec();
  
  return 0;
}

