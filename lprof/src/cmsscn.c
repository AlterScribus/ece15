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
// Version 1.08a


#include "lcmsprf.h"
#include <stdio.h>

// The scanner profiler


BOOL   cdecl cmsxScannerProfilerInit(LPSCANNERPROFILERDATA sys);                                        
BOOL   cdecl cmsxScannerProfilerDo(LPSCANNERPROFILERDATA sys);

// ------------------------------------------------------------ Implementation



// Does create regression matrix

static
void ComputeGlobalRegression(LPSCANNERPROFILERDATA sys)
{
        BOOL lAllOk;
        int nTerms;
        MLRSTATISTICS Stat;

		nTerms = cmsxFindOptimumNumOfTerms(&sys ->hdr, 55, &lAllOk);

  
        if (!lAllOk) {
			if (sys -> hdr.printf) 
					sys -> hdr.printf("*** WARNING: Inconsistence found, profile may be wrong. Check the target!");     
			nTerms = 4;
		}

		// Create high terms matrix used by interpolation
        cmsxRegressionCreateMatrix(&sys -> hdr.m, 
                                       sys -> hdr.m.Allowed, 
                                       nTerms,
                                       sys -> hdr.PCSType,
                                       &sys -> HiTerms,
                                       &Stat);
        
        if (sys -> hdr.printf) 
            sys -> hdr.printf("Global regression: %d terms, R2Adj = %g", nTerms, Stat.R2adj);

		// Create low terms matrix used by extrapolation
		cmsxRegressionCreateMatrix(&sys -> hdr.m, 
                                       sys -> hdr.m.Allowed, 
                                       (nTerms > 10 ? 10 : nTerms),
                                       sys -> hdr.PCSType,
                                       &sys -> LoTerms,
                                       &Stat);        	
		if (sys -> hdr.printf) 
            sys -> hdr.printf("Extrapolation: R2Adj = %g", Stat.R2adj);

}


// Fill struct with default values
        
BOOL cmsxScannerProfilerInit(LPSCANNERPROFILERDATA sys)
{                                
        

        if (sys == NULL) return FALSE;
        ZeroMemory(sys, sizeof(SCANNERPROFILERDATA));

        sys->hdr.DeviceClass = icSigInputClass;
        sys->hdr.ColorSpace  = icSigRgbData;
        sys->hdr.PCSType     = PT_Lab;
		sys->hdr.Medium      = MEDIUM_REFLECTIVE_D50;
		
        // Default values for generation

        sys -> hdr.lUseCIECAM97s = FALSE;
        sys -> hdr.CLUTPoints = 16;
       
           
        // Default viewing conditions for scanner

        sys -> hdr.device.Yb = 20;
        sys -> hdr.device.La = 20;
        sys -> hdr.device.surround = AVG_SURROUND;
        sys -> hdr.device.D_value  = 1.0;			// Complete adaptation


        // Viewing conditions of PCS
		cmsxInitPCSViewingConditions(&sys -> hdr);


        sys -> HiTerms = NULL;
		sys -> LoTerms = NULL;

        strcpy(sys -> hdr.Description,  "no description");
        strcpy(sys -> hdr.Manufacturer, "little cms profiler construction set");
        strcpy(sys -> hdr.Copyright,   "No copyright, use freely");
        strcpy(sys -> hdr.Model,       "(unknown)");

		sys ->lLocalConvergenceExtrapolation = FALSE;
		sys ->hdr.ProfileVerbosityLevel = 0;
	

    return TRUE;
}

// Auxiliar: take RGB and update gauge
static
void GetRGB(LPPROFILERCOMMONDATA hdr, register WORD In[], double* r, double* g, double* b)
{   
    static int Count = 0, n_old = 0;
    double R, G, B;
    int n;
    
        
        R = _cmsxSaturate65535To255(In[0]);       // Convert from the sheet notation
        G = _cmsxSaturate65535To255(In[1]);       // 0..255.0, to our notation
        B = _cmsxSaturate65535To255(In[2]);       // of 0..0xffff, 0xffff/255 = 257

        if (R == 0 && G == 0 && B == 0)  {
                Count = 0; n_old = -1;
        }

        n = (int) (double) (100. * Count)  / (hdr->CLUTPoints * hdr->CLUTPoints * hdr->CLUTPoints);
        Count++;

        if (n > n_old) {
            if (hdr->Gauger) hdr->Gauger("", 0, 100, (int) n);
        }

        n_old = n;
        *r = R; *g = G; *b = B;

}





// The sampler for Lab
static
int RegressionSamplerLab(register WORD In[], register WORD Out[], register LPVOID Cargo)
{
    cmsCIEXYZ xyz;  
    cmsCIELab Lab;
    double r, g, b;    	
    LPSCANNERPROFILERDATA sys = (LPSCANNERPROFILERDATA) Cargo;
	char code;

        
        GetRGB(&sys->hdr, In, &r, &g, &b);


		code = cmsxHullCheckpoint(sys->hdr.hRGBHull, 
							      (int) floor(r + .5),
								  (int) floor(g + .5),
								  (int) floor(b + .5));


		if (code == 'i') { // Inside gamut

			if (!cmsxRegressionRGB2Lab(r, g, b, sys -> HiTerms, &Lab)) return FALSE;
		}
		else  
		if (!sys -> lLocalConvergenceExtrapolation && code == 'o') {  // outside gamut

			if (!cmsxRegressionRGB2Lab(r, g, b, sys -> LoTerms, &Lab)) return FALSE;
		}				
		else {	// At gamut hull boundaries

			if (!cmsxRegressionInterpolatorRGB(&sys -> hdr.m,
												PT_Lab,                                        
												10,
												TRUE,
												30,
												r, g, b,
												&Lab)) return FALSE;
		}
		
                       
        // Regression CAN deliver wrong values. Clamp these.
        cmsClampLab(&Lab, 127.9961, -128, 127.9961, -128);

        // Normalize
        cmsLab2XYZ(cmsD50_XYZ(), &xyz, &Lab);
        cmsxChromaticAdaptationAndNormalization(&sys->hdr, &xyz, FALSE);       
        cmsXYZ2Lab(cmsD50_XYZ(), &Lab, &xyz);

        // Clamping again, adaptation could move slightly values
        cmsClampLab(&Lab, 127.9961, -128, 127.9961, -128);

        // To PCS encoding
        cmsFloat2LabEncoded(Out, &Lab);

				
    return TRUE; // And done with success
}





// The sampler for XYZ
static
int RegressionSamplerXYZ(register WORD In[], register WORD Out[], register LPVOID Cargo)
{
    cmsCIEXYZ xyz;
    double r, g, b;
    LPSCANNERPROFILERDATA sys = (LPSCANNERPROFILERDATA) Cargo;
	char code;

      GetRGB(&sys -> hdr, In, &r, &g, &b);

	    code = cmsxHullCheckpoint(sys ->hdr.hRGBHull,
								  (int) floor(r + .5),
								  (int) floor(g + .5),
								  (int) floor(b + .5));

		if (code == 'i') { // Inside gamut

			if (!cmsxRegressionRGB2XYZ(r, g, b, sys -> HiTerms, &xyz)) return FALSE;
		}
		else  
		if (!sys -> lLocalConvergenceExtrapolation && code == 'o') {  // outside gamut

			if (!cmsxRegressionRGB2XYZ(r, g, b, sys -> LoTerms, &xyz)) return FALSE;
		}
				
		else {	// At gamut hull boundaries

			if (!cmsxRegressionInterpolatorRGB(&sys -> hdr.m,
												PT_XYZ,                                        
												10,
												TRUE,
												30,
												r, g, b,
												&xyz)) return FALSE;
		}
		                                        
        
      xyz.X /= 100.;
      xyz.Y /= 100.;
      xyz.Z /= 100.;

      cmsxChromaticAdaptationAndNormalization(&sys->hdr, &xyz, FALSE);       
     
      // To PCS encoding. It also claps bad values
      cmsFloat2XYZEncoded(Out, &xyz);
        
    return TRUE; // And done witch success
}



// The main scanner profiler
BOOL cmsxScannerProfilerDo(LPSCANNERPROFILERDATA sys)
{

        LPLUT AToB0;
        DWORD dwNeedSamples;

                   
        if (!*sys -> hdr.OutputProfileFile)
                return FALSE;

    
        if (!cmsxChoosePCS(&sys->hdr))
                return FALSE;               

        dwNeedSamples = PATCH_HAS_RGB;
        if (sys ->hdr.PCSType == PT_Lab)
                dwNeedSamples |= PATCH_HAS_Lab;
        else
                dwNeedSamples |= PATCH_HAS_XYZ;

            
        if (sys->hdr.printf) {
            
            sys->hdr.printf("Loading sheets...");

            if (sys->hdr.ReferenceSheet[0])
                sys->hdr.printf("Reference sheet: %s", sys->hdr.ReferenceSheet);
            if (sys->hdr.MeasurementSheet[0])
                sys->hdr.printf("Measurement sheet: %s", sys->hdr.MeasurementSheet);
        }


        if (!cmsxPCollBuildMeasurement(&sys->hdr.m, 
                                    sys->hdr.ReferenceSheet, 
                                    sys->hdr.MeasurementSheet,
                                    dwNeedSamples)) return FALSE;

			
		
        sys->hdr.hProfile = cmsCreateRGBProfile(NULL, NULL, NULL);
     

        cmsSetDeviceClass(sys->hdr.hProfile, sys->hdr.DeviceClass);
        cmsSetColorSpace(sys->hdr.hProfile,  sys->hdr.ColorSpace);
        cmsSetPCS(sys->hdr. hProfile,  _cmsICCcolorSpace(sys->hdr.PCSType));
    
        // Save char target tag
		if (sys->hdr.ProfileVerbosityLevel >= 2) {
			
			cmsxEmbedCharTarget(&sys ->hdr);
		}

        AToB0 = cmsAllocLUT();

        cmsAlloc3DGrid(AToB0, sys->hdr.CLUTPoints, 3, 3);

        cmsxComputeLinearizationTables(&sys-> hdr.m, 
                                        sys -> hdr.PCSType, 
                                        sys -> Prelinearization, 
										1024,
										MEDIUM_REFLECTIVE_D50);
                                        	
        // Refresh RGB of all patches. This converts all regression into
        // near linear RGB->Lab or XYZ
            
        cmsxPCollLinearizePatches(&sys->hdr.m, sys -> hdr.m.Allowed, sys -> Prelinearization);   

		cmsxComputeGamutHull(&sys->hdr);
        ComputeGlobalRegression(sys);

        cmsAllocLinearTable(AToB0, sys -> Prelinearization, 1);                              

        // Set CIECAM97s parameters

        sys -> hdr.device.whitePoint.X = sys -> hdr.WhitePoint.X * 100.;
        sys -> hdr.device.whitePoint.Y = sys -> hdr.WhitePoint.Y * 100.;
        sys -> hdr.device.whitePoint.Z = sys -> hdr.WhitePoint.Z * 100.;
	   
		  	   
        sys->hdr.hDevice = cmsCIECAM97sInit(&sys->hdr.device);
        sys->hdr.hPCS    = cmsCIECAM97sInit(&sys->hdr.PCS);

        
        if (sys -> hdr.PCSType == PT_Lab)
                cmsSample3DGrid(AToB0, RegressionSamplerLab, sys, 0);
        else
                cmsSample3DGrid(AToB0, RegressionSamplerXYZ, sys, 0);

        cmsCIECAM97sDone(sys->hdr.hDevice);
        cmsCIECAM97sDone(sys->hdr.hPCS);

        cmsAddTag(sys->hdr.hProfile, icSigAToB0Tag, AToB0);


	    cmsxEmbedTextualInfo(&sys -> hdr);
       
		cmsAddTag(sys->hdr.hProfile, icSigMediaWhitePointTag, &sys->hdr.WhitePoint);
        cmsAddTag(sys->hdr.hProfile, icSigMediaBlackPointTag, &sys->hdr.BlackPoint);


		// Save primaries & gamma curves
		if (sys->hdr.ProfileVerbosityLevel >= 1) {

			cmsxEmbedMatrixShaper(&sys ->hdr);
		}

        _cmsSaveProfile(sys->hdr.hProfile, sys->hdr.OutputProfileFile);

        cmsCloseProfile(sys->hdr.hProfile);
        sys->hdr.hProfile = NULL;

        cmsxPCollFreeMeasurements(&sys->hdr.m);    
               
        cmsFreeLUT(AToB0);
       
        if (sys -> HiTerms)
                MATNfree(sys -> HiTerms);
        sys -> HiTerms = NULL;


		if (sys -> LoTerms)
                MATNfree(sys -> LoTerms);
        sys -> LoTerms = NULL;

		

        if (sys ->Prelinearization[0])
            cmsFreeGammaTriple(sys -> Prelinearization);   
		
		if (sys ->hdr.Gamma)
			cmsFreeGammaTriple(sys->hdr.Gamma);
		
    return TRUE;
}
