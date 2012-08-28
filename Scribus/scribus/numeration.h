#ifndef NUMERATION_H
#define NUMERATION_H

#include <QString>
typedef enum 
{
	Type_1_2_3,
	Type_i_ii_iii,
	Type_I_II_III,
	Type_a_b_c,
	Type_A_B_C,
	Type_asterix,
	Type_None=99
} NumFormat;

typedef enum {
	NSRdocument,
	NSRsection,
	NSRstory,
	NSRpage,
	NSRframe,
	NSRblock //used for contignous numeration eg. paragraphs - paragraph without numbering reset counter
} NumerationRange;

class Numeration
{
public:
	Numeration() : name(""), numFormat(Type_1_2_3), len(0) {}
	Numeration(QString n, NumFormat f) : name(n), numFormat(f), asterix("*"), len(0) {}
	void setFormat(NumFormat format, QChar leading = QChar(), uint l=0) { numFormat = format; lead = leading; len = l; }
	const NumFormat format() { return numFormat; }
	const QString numString(int num, int l = -1); 

	QString name;
private:
	NumFormat numFormat;
	QString asterix;
	QChar lead;
	int len;
	NumerationRange range;
	QString prefix;
	QString suffix;
};

//util functions for use without Numeration class
//convert passed num to string using numeration style
const QString getStringFromNum(NumFormat format, int num, const QChar leadingChar='0', const int charsLen=0);
//convert passed num to string with custom chars
const QString getAsterixStringFromNum(int num, QString asterix, const QChar leadingChar='_', const int charsLen=0);

#endif // NUMERATION_H
