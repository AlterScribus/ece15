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
} NumStyle;

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
	Numeration() : numStyle(Type_1_2_3) {}
	void setType(NumStyle style) { numStyle = style; }
	const NumStyle style() { return numStyle; }
	const QString numString(const uint num, const QChar leadingChar='0', const ushort charsLen = 1); 
	const QString numString(const uint num, const QChar asterix); 

private:
	NumStyle numStyle;
	const QString getStringFromSequence(NumStyle style, uint index,  const QChar leadingChar='0', const ushort charsLen);
	const QString getAsterixStringFromSequence(NumStyle style, uint index, QString asterix);
};



#endif // NUMERATION_H
