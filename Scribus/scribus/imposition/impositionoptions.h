/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPOSEROPTIONS_H
#define IMPOSEROPTIONS_H

/**
 * @file pdfoptions.h
 * @author Jos Hulzink
 * @brief Defines class imposerOptions, used for loading/saving/passing around imposer options
 */

#include "qstring.h"
#include "qmap.h"
#include "QList"
#include "scribusapi.h"
#include "scribusstructs.h"
#include "iostream"

/**
 * @brief imposer Options struture. Capable of verifying its self, but otherwise largely
 *        a dumb struct.
 *
 * If you change this class, please ensure that imposerOptionsIO is
 * updated to match and scribus/dtd/scribuspdfoptions.dtd is tweaked
 * if required.
 *
 * @sa imposerOptionsIO
 */
class SCRIBUS_API ImposerOptions
{
public:

	enum VerifyResults
	{
		Verify_NoError = 0,
		Verify_OptionConflict,
		Verify_OptionOutOfRange,
		Verify_OtherError
	};

	enum ImposerStyle
	{
		None = 0,
		BirthdayCard,
		BusinessCard,
		Magazine,
		MultiFold,
		Tiles,
		File
	};

	ImposerStyle style;
	int  sheetRotation;
	bool sheetAutoSize;
	int  sheetWidth;
	int  sheetHeight;
	double scalingFactor;
	/* nX, nY: number of repetitions/slices horizontally and vertically */
	int  nX;
	int  nY;
	bool doubleSided;
};

#endif
