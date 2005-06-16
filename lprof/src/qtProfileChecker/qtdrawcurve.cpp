//
//  Little cms - profiler construction set
//  Copyright (C) 1998-2001 Marti Maria
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

#include "qtlcmswidgets.h"

#include <qpixmap.h>
#include <qcolor.h>
#include <qimage.h>


cmsxDrawCurve::cmsxDrawCurve(QPixmap& APix) : Pix(APix) 
{
	
	
	pixcols = Pix.width();
	pixrows = Pix.height();
   
	Pnt.begin(&Pix);
	Pnt.setBackgroundColor(qRgb(0, 0, 0));
	Pnt.eraseRect(0, 0, pixcols-1, pixrows-1);
	Pnt.setPen(qRgb(255, 255, 255));
	Pnt.end();

}


cmsxDrawCurve::~cmsxDrawCurve()
{
	
}


void cmsxDrawCurve::DrawGammaCurve(LPGAMMATABLE Gamma, const char*Label, QRgb color, int Pos)
{

	Pnt.begin(&Pix);
	Pnt.setPen(color);
	
	int y = Pos*20 + 22;
	char Buffer[256];

	int n = Gamma->nEntries;
	sprintf(Buffer, "%s [%d]", Label, n);

	Pnt.drawText(QPoint(22, y), Buffer);
	

	
	Pnt.moveTo(0, pixrows - 1);

	for (int i=0; i < n; i++) {
		
		int v = Gamma ->GammaTable[i];

		double xf =  (double) (i * (pixcols - 1)) / (n - 1);
		double yf =  (double) (v * (pixrows - 1)) / 65535.0;
		int x = (int) floor(xf + .5);
		int y = (int) floor(yf + .5);
		
		Pnt.lineTo(x, pixrows - y - 1);
	}

	Pnt.end();
}


