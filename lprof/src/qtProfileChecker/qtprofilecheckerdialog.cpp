//
//  Little cms
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
// Version 1.09a

#include "qtprofilecheckerdialog.h"
#include "qtlcmswidgets.h"

#ifdef USE_KDE
#include <kfiledialog.h>
#endif

typedef struct {
				const char *Label;
				QRgb rgb;

} LABELCOLOR,FAR* LPLABELCOLOR;


qtProfileCheckerDialog::qtProfileCheckerDialog( QWidget* parent, const char* name, bool modal, WFlags f )
	: qtProfileCheckerDialogBase( parent, name, modal, f )
{

	// Fill targets list
	TargetsSelector -> setDirCaption(" Select target vendor && type ");
    TargetsSelector -> FillValues();

	ComboBoxIntent -> setEnabled(FALSE);

	ComboBoxIntent -> clear();
	ComboBoxIntent -> insertItem("(*) Perceptual");
	ComboBoxIntent -> insertItem("(*) Relative colorimetric");
	ComboBoxIntent -> insertItem("(*) Saturation");
	ComboBoxIntent -> insertItem("(*) Absolute");

	InfoView -> setText("\n\nSelect the  profile to check. "
					    "Optionally, you can select target reference and measurement for dE testing.\n\n"
						"Press 'GO!' when done.");

	ResetData(FALSE);
	
}

// Auxiliary: Erases one gamma curve set

static
void FreeGammaSet(LPGAMMATABLE Gamma[], int n, BOOL lFree)
{

	for (int i=0; i < n; i++) {
	
		if (lFree) {
				if (Gamma[i] != NULL)
					cmsFreeGamma(Gamma[i]);
		}

		Gamma[i] = NULL;
	}
}

void qtProfileCheckerDialog::ResetMeasurement(BOOL lFree)
{
	if (lFree) {

	if (m.Patches)
		free(m.Patches);
	if (m.Allowed)
		free(m.Allowed);
	}

	ZeroMemory(&m, sizeof(MEASUREMENT));

}


// Trash data

void qtProfileCheckerDialog::ResetData(BOOL lFree)
{
	
	FreeGammaSet(TRC, 3, lFree);
	for (int i=0; i < 3; i++) {
	
		FreeGammaSet(&A2B0Pre[i][0], MAXCHANNELS, lFree);
		FreeGammaSet(&A2B0Post[i][0], MAXCHANNELS, lFree);
		FreeGammaSet(&B2A0Pre[i][0], MAXCHANNELS, lFree);
		FreeGammaSet(&B2A0Post[i][0], MAXCHANNELS, lFree);
	}

	ResetMeasurement(lFree);
	ZeroMemory(&Primaries, sizeof(cmsCIExyYTRIPLE));
	ZeroMemory(&MediaWhite, sizeof(cmsCIEXYZ));	
	
	TabProfiler -> setTabEnabled(ResultsTab, FALSE);
	
	RadioPreA2B  -> setEnabled(FALSE);
	RadioPostA2B -> setEnabled(FALSE);
	RadioPreB2A  -> setEnabled(FALSE);
	RadioPostB2A -> setEnabled(FALSE);
	RadioTRC -> setEnabled(FALSE);
}

	

qtProfileCheckerDialog::~qtProfileCheckerDialog()
{
	ResetData();
	ReferenceSheet[0] = MeasurementSheet[0] = OutputProfileFile[0] = 0;

}

static
void GrabCurvesFromLUT(cmsHPROFILE hProfile, icTagSignature sig,
					  LPGAMMATABLE Pre[MAXCHANNELS], LPGAMMATABLE Post[MAXCHANNELS])
					  
{
		LPLUT Lut = cmsReadICCLut(hProfile, sig);
		unsigned int i;

		for (i=0; i < Lut ->InputChan; i++) {
			
			Pre[i]  = cmsAllocGamma(Lut ->InputEntries);
		    CopyMemory(Pre[i]->GammaTable, Lut ->L1[i], Lut ->InputEntries * sizeof(WORD));
		}

		for (i=0; i < Lut ->OutputChan; i++) {

			Post[i] = cmsAllocGamma(Lut->OutputEntries);
			CopyMemory(Post[i]->GammaTable, Lut ->L2[i], Lut ->OutputEntries * sizeof(WORD));
		}

		cmsFreeLUT(Lut);
}



static
const char* SupportedIntent(cmsHPROFILE hProfile, int nIntent)
{
		static char Buffer[256];
		int AsInput, AsOutput;
		const char* Intents[] = {"Perceptual", "Relative colorimetric", "Saturation", "Absolute" };
								// none, input only, output only, full
		const char* Mode[]    = {"(*) ", "(i) ", "(o) ", "" };


		AsInput  = cmsIsIntentSupported(hProfile, nIntent, LCMS_USED_AS_INPUT) ? 1 : 0;
		AsOutput = cmsIsIntentSupported(hProfile, nIntent, LCMS_USED_AS_OUTPUT) ? 2 : 0;
	
		Buffer[0] = 0;
		strcpy(Buffer, Mode[AsInput + AsOutput]);
		strcat(Buffer, Intents[nIntent]);

		return Buffer;
}


static
void ScaleToWhite(LPcmsCIEXYZ WtPt, LPcmsCIEXYZ Src)
{

	Src->X = (Src -> X * WtPt ->X ) / cmsD50_XYZ() -> X;
	Src->Y = (Src -> Y * WtPt ->Y ) / cmsD50_XYZ() -> Y;
	Src->Z = (Src -> Z * WtPt ->Z ) / cmsD50_XYZ() -> Z;

}



// Open profile and grab all needed information

void qtProfileCheckerDialog::InspectProfile()
{
	char Buffer[1024];	

	ResetData();
	ReferenceSheet[0] = MeasurementSheet[0] = OutputProfileFile[0] = 0;

	// We need a profile at least
	strcpy(OutputProfileFile, (const char *) OutputFileEdit -> text());
	if (!OutputProfileFile[0]) return;


	// Maybe some reference sheet
	QString cTarget = TargetsSelector -> getFilename();
    if (cTarget != QString::null)
            strcpy(ReferenceSheet, (const char*) cTarget);

	// And measurement sheet
	QString cScanout = Scanout -> text();
	if (cScanout != QString::null)
			strcpy(MeasurementSheet,  (const char *) cScanout);


	// Go on.. open profile
	cmsHPROFILE hProfile = cmsOpenProfileFromFile(OutputProfileFile, "r");

	PCSColorSpace     = cmsGetPCS(hProfile);
	ProfileColorSpace = cmsGetColorSpace(hProfile);

	InfoView -> setText((QString) "\nProfile: " + cmsTakeProductName(hProfile));
	InfoView -> append((QString) "\n" + cmsTakeProductInfo(hProfile));
	
	// The white point is REQUIRED
	cmsTakeMediaWhitePoint(&MediaWhite, hProfile);

	cmsCIExyY White;
	cmsXYZ2xyY(&White, &MediaWhite);

	sprintf(Buffer, "\nMedia white (XYZ): %3.2f, %3.2f, %3.2f",
							MediaWhite.X*100., MediaWhite.Y*100., MediaWhite.Z*100.);							
	InfoView -> append(Buffer);

	// The colorant matrix is optional

	ZeroMemory(&Primaries, sizeof(cmsCIExyYTRIPLE));

	if (cmsIsTag(hProfile, icSigRedColorantTag) &&
		cmsIsTag(hProfile, icSigGreenColorantTag) &&
		cmsIsTag(hProfile, icSigBlueColorantTag)) {
	
		MAT3 Mat;

		if (cmsReadICCMatrixRGB2XYZ(&Mat, hProfile)) {

			// Undo chromatic adaptation
			if (cmsAdaptMatrixFromD50(&Mat, &White)) {
			

				cmsCIEXYZ tmp;				

				tmp.X = Mat.v[0].n[0];
				tmp.Y = Mat.v[1].n[0];
				tmp.Z = Mat.v[2].n[0];

				// ScaleToWhite(&MediaWhite, &tmp);
				cmsXYZ2xyY(&Primaries.Red, &tmp);

				tmp.X = Mat.v[0].n[1];
				tmp.Y = Mat.v[1].n[1];
				tmp.Z = Mat.v[2].n[1];
				// ScaleToWhite(&MediaWhite, &tmp);
				cmsXYZ2xyY(&Primaries.Green, &tmp);
				
				tmp.X = Mat.v[0].n[2];
				tmp.Y = Mat.v[1].n[2];
				tmp.Z = Mat.v[2].n[2];
				// ScaleToWhite(&MediaWhite, &tmp);
				cmsXYZ2xyY(&Primaries.Blue, &tmp);

				

				sprintf(Buffer, "Primaries: R:%1.2g, %1.2g  G:%1.2g, %1.2g  B:%1.2g, %1.2g", 
							Primaries.Red.x, Primaries.Red.y,
							Primaries.Green.x, Primaries.Green.y,
							Primaries.Blue.x, Primaries.Blue.y);

				InfoView -> append(Buffer);
				
			}
		}		
	}
	  

	// The TRC tables are optional
	if (cmsIsTag(hProfile, icSigRedTRCTag) &&
		cmsIsTag(hProfile, icSigGreenTRCTag) && 
		cmsIsTag(hProfile, icSigBlueTRCTag)) 
	{

		TRC[0] = cmsReadICCGamma(hProfile, icSigRedTRCTag);	
		TRC[1] = cmsReadICCGamma(hProfile, icSigGreenTRCTag);	
		TRC[2] = cmsReadICCGamma(hProfile, icSigBlueTRCTag);
		RadioTRC -> setEnabled(TRUE);

		double gr, gg, gb;

		gr = cmsEstimateGamma(TRC[0]);
		gg = cmsEstimateGamma(TRC[1]);
		gb = cmsEstimateGamma(TRC[2]);

		if (gr > 0 && gg > 0 && gb > 0) {
		sprintf(Buffer, "Estimated gamma : R:%1.3g, G:%1.3g  B:%1.3g", gr, gg, gb);
		InfoView -> append(Buffer);
		}
	}



	// Now on LUT's (Also optional)

	if (cmsIsTag(hProfile, icSigAToB0Tag)) {
		GrabCurvesFromLUT(hProfile, icSigAToB0Tag, A2B0Pre[0], A2B0Post[0]);

		RadioPreA2B  -> setEnabled(TRUE);
		RadioPostA2B -> setEnabled(TRUE);
	}

	if (cmsIsTag(hProfile, icSigAToB1Tag)) {
		GrabCurvesFromLUT(hProfile, icSigAToB1Tag, A2B0Pre[1], A2B0Post[1]);
		RadioPreA2B  -> setEnabled(TRUE);
		RadioPostA2B -> setEnabled(TRUE);
	}

	if (cmsIsTag(hProfile, icSigAToB2Tag))  {
		GrabCurvesFromLUT(hProfile, icSigAToB2Tag, A2B0Pre[2], A2B0Post[2]);
		RadioPreA2B  -> setEnabled(TRUE);
		RadioPostA2B -> setEnabled(TRUE);
	}

	if (cmsIsTag(hProfile, icSigBToA0Tag)) {
		GrabCurvesFromLUT(hProfile, icSigBToA0Tag, B2A0Pre[0], B2A0Post[0]);

		RadioPreB2A  -> setEnabled(TRUE);
		RadioPostB2A -> setEnabled(TRUE);
	}

	if (cmsIsTag(hProfile, icSigBToA1Tag)) {
		GrabCurvesFromLUT(hProfile, icSigBToA1Tag, B2A0Pre[1], B2A0Post[1]);
		RadioPreB2A  -> setEnabled(TRUE);
		RadioPostB2A -> setEnabled(TRUE);
	}

	if (cmsIsTag(hProfile, icSigBToA2Tag))  {
		GrabCurvesFromLUT(hProfile, icSigBToA2Tag, B2A0Pre[2], B2A0Post[2]);
		RadioPreB2A  -> setEnabled(TRUE);
		RadioPostB2A -> setEnabled(TRUE);
	}


	// Try to get target data stored in profile

	if (cmsTakeCharTargetData(hProfile, &CharTarget, &CharTargetSize)) {

			LCMSHANDLE hSheet = cmsxIT8LoadFromMem(CharTarget, CharTargetSize);
            if (hSheet != NULL) {

                cmsxPCollLoadFromSheet(&m,  hSheet);
                cmsxIT8Free(hSheet);
				cmsxPCollValidatePatches(&m, PATCH_HAS_XYZ|PATCH_HAS_RGB);
			}
	}

   // If there are measurements, load them also

	if (ReferenceSheet[0] || MeasurementSheet[0]) {

	// If already filled, this takes precedence

	ResetMeasurement(TRUE);
	cmsxPCollBuildMeasurement(&m, ReferenceSheet, MeasurementSheet, 
											PATCH_HAS_XYZ|PATCH_HAS_RGB);
	}


	if (m.nPatches > 0) {

		// We need D50 Lab for checking results
		

		QString Results;
		CheckProfileResults(ResultsGrid, Results, 						
						&m,
						OutputProfileFile,
						MonitorProfileSelector ->getFilename());

		ResultsResume -> setText(Results);
		TabProfiler -> setTabEnabled(ResultsTab, TRUE);


	}

	ComboBoxIntent -> clear();

	ComboBoxIntent -> insertItem(SupportedIntent(hProfile, INTENT_PERCEPTUAL));
	ComboBoxIntent -> insertItem(SupportedIntent(hProfile, INTENT_RELATIVE_COLORIMETRIC));
	ComboBoxIntent -> insertItem(SupportedIntent(hProfile, INTENT_SATURATION));	

	cmsCloseProfile(hProfile);

}





// Returns a label list

static
LPLABELCOLOR GetLabelColorSet(icColorSpaceSignature ColorSpace)
{

static LABELCOLOR GraySet[] = {
    { "Gray", qRgb(255, 255, 255) }};

static LABELCOLOR RGBSet[] = {  
	{ "Red", qRgb(255, 128, 128)},
	{ "Green", qRgb(128, 255, 128)},
	{ "Blue", qRgb(128, 128, 255)}};

	static LABELCOLOR CMYSet[] = {
	{ "Cyan",	 qRgb(128, 255, 255)},
	{ "Magenta", qRgb(255, 128, 255)},
	{ "Yellow",  qRgb(255, 255, 128)}};

    static LABELCOLOR CMYKSet[] = {
	{ "Cyan",	 qRgb(128, 255, 255)},
	{ "Magenta", qRgb(255, 128, 255)},
	{ "Yellow",  qRgb(255, 255, 128)},
	{ "Black",   qRgb(255, 255, 255)}};

	static LABELCOLOR YCbCrSet[] = {
	{ "Y",  qRgb(255, 255, 255)},
	{ "Cb",	 qRgb(128, 128, 255)},
	{ "Cr",  qRgb(255, 128, 128)}};

	static LABELCOLOR XYZSet[] = {
	{ "X", qRgb(255, 128, 128)},
	{ "Y", qRgb(255, 255, 255)},
	{ "Z", qRgb(128, 128, 255)}};

	static LABELCOLOR LabSet[] = {
	{ "L*",  qRgb(255, 255, 255)},
	{ "a*",	 qRgb(128, 255, 255)},
	{ "b*",  qRgb(255, 128, 255)}};


	static LABELCOLOR HexaSet[] = {
	{ "Cyan",	 qRgb(128, 255, 255)},
	{ "Magenta", qRgb(255, 128, 255)},
	{ "Yellow",  qRgb(255, 255, 128)},
	{ "Black",   qRgb(255, 255, 255)},
	{ "Orange",  qRgb(255, 128, 0) },
	{ "Green",   qRgb(128, 255, 128)}};

	static LABELCOLOR DefaultSet[] = {
	{ "CH1",  qRgb(255, 255, 255)},
	{ "CH2",  qRgb(255, 255, 255)},
	{ "CH3",  qRgb(255, 255, 255)},
	{ "CH4",  qRgb(255, 255, 255)},
	{ "CH5",  qRgb(255, 255, 255)},
	{ "CH6",  qRgb(255, 255, 255)},
	{ "CH7",  qRgb(255, 255, 255)},
	{ "CH8",  qRgb(255, 255, 255)},
	{ "CH9",  qRgb(255, 255, 255)},
	{ "CH10",  qRgb(255, 255, 255)},
	{ "CH11",  qRgb(255, 255, 255)},
	{ "CH12",  qRgb(255, 255, 255)},
	{ "CH13",  qRgb(255, 255, 255)},
	{ "CH14",  qRgb(255, 255, 255)},
	{ "CH15",  qRgb(255, 255, 255)},
	{ "CH16",  qRgb(255, 255, 255)}};
	

	switch (ColorSpace) {

	case icSigGrayData: return GraySet;
	case icSigRgbData: return RGBSet;
	case icSigCmyData: return CMYSet;
	case icSigCmykData: return CMYKSet;
	case icSigYCbCrData: return YCbCrSet;
	case icSigHexachromeData: return HexaSet;
	case icSigXYZData: return XYZSet; 
	case icSigLabData: return LabSet; 
	default: return DefaultSet;

	}
}



// Draw one set of curves

static
void DrawOneSet(cmsxDrawCurve* Curve, LPGAMMATABLE Tab[], icColorSpaceSignature ColorSpace)
{
	LPLABELCOLOR Labels;
	int nCurves = _cmsChannelsOf(ColorSpace);

	Labels = GetLabelColorSet(ColorSpace);
	
	for (int i=0; i < nCurves; i++) {

		if (Tab[i]) Curve->DrawGammaCurve(Tab[i], Labels[i].Label, Labels[i].rgb, i);
	}
}


int  qtProfileCheckerDialog::GetIntent(void)
{
	return ComboBoxIntent -> currentItem();		
}

void qtProfileCheckerDialog::RedrawCurve()
{
	if (TabProfiler -> currentPage() != CurvesTab) return;

	int w = CurvePixLabel-> width();
	int h = CurvePixLabel-> height();
	int intent = GetIntent();

	
	QPixmap* Pix = new QPixmap(w, h);		
	cmsxDrawCurve Curve(*Pix);

	if (RadioTRC -> isChecked()) {

			DrawOneSet(&Curve, TRC, icSigRgbData);			
	}
	else
	if (RadioPreA2B -> isChecked()) {

		 DrawOneSet(&Curve, A2B0Pre[intent], ProfileColorSpace);		 
	}
	else
	if (RadioPostA2B -> isChecked()) {

		 DrawOneSet(&Curve, A2B0Post[intent], PCSColorSpace);		 

	}
	else
	if (RadioPreB2A -> isChecked()) {

		 DrawOneSet(&Curve, B2A0Pre[intent], PCSColorSpace);		 
	}
	else
	if (RadioPostB2A -> isChecked()) {

		 DrawOneSet(&Curve, B2A0Post[intent], ProfileColorSpace);		 

	}

	CurvePixLabel  ->setPixmap(*Pix);
	delete Pix;
}



void qtProfileCheckerDialog::RedrawTonge()
{

	if (TabProfiler -> currentPage() != DiagramTab) return;

	int w = CIETonge-> width();
	int h = CIETonge-> height();
	
    QPixmap* Pix = new QPixmap(w, h);
		
	Pix ->setOptimization(QPixmap::BestOptim);
	Pix ->fill(Qt::black);

	cmsxCIETonge Tonge(NULL, *Pix);

	Tonge.DrawTonge();

	if (MediaWhite.Y > 0.0)
		Tonge.DrawWhitePoint(&MediaWhite);

	if (Primaries.Red.Y != 0.0)
		Tonge.DrawColorantTriangle(&Primaries);

	if (m.Patches && m.Allowed)
			Tonge.DrawPatches(&m);

	CIETonge ->setPixmap(*Pix);
	// delete Pix;
}


void qtProfileCheckerDialog::resizeEvent(QResizeEvent* )
{
	slotUpdateLabels();
}


void qtProfileCheckerDialog::slotUpdateLabels()
{

	ComboBoxIntent -> setEnabled(TabProfiler -> currentPage() == CurvesTab);

	RedrawTonge();
	RedrawCurve();
}




void qtProfileCheckerDialog::slotSelectOutputFile()
{
#ifdef USE_KDE
    QString fn = KFileDialog::getOpenFileName( QString::null, 
                                                "*.icc *.icm| icc profiles (*.icc *.icm)\n*.*|All files (*.*)",
                                                this,
                                                "Select profile filename");
#else
    QString fn = QFileDialog::getOpenFileName( QString::null, 
                                                "icc profiles (*.icc *.icm)\nAll files (*.*)",
                                                this,
                                                QString::null,
                                                "Select profile filename");
#endif
    if (fn != QString::null)
            SetInputProfile(fn);
	

}

void qtProfileCheckerDialog::SetScanoutFile(const QString ScanoutFile)
{
        Scanout -> setText(ScanoutFile);
}

void qtProfileCheckerDialog::SetInputProfile(const QString OutputFile)
{
	 OutputFileEdit -> setText(OutputFile);
}



void qtProfileCheckerDialog::slotSelectScanoutIT8()
{
#ifdef USE_KDE
    QString fn = KFileDialog::getOpenFileName( "", 
                                                "*.it? *.cgt| IT8-CGATS.5 Files (*.it? *.cgt)\n*.*|All files (*.*)",
                                                this,
                                                "Select measurement filename");
#else
    QString fn = QFileDialog::getOpenFileName( "", 
                                                "IT8/CGATS.5 Files (*.it? *.cgt)\nAll files (*.*)",
                                                this,
                                                QString::null,
                                                "Select measurement filename");
#endif
    if (fn != QString::null)
            SetScanoutFile(fn);

}


void qtProfileCheckerDialog::slotGO()
{	
	InspectProfile();
	slotUpdateLabels();

}

void qtProfileCheckerDialog::slotChangeCurve()
{
		RedrawCurve();
}
