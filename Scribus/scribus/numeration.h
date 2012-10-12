#ifndef NUMERATION_H
#define NUMERATION_H

#include <QString>
<<<<<<< HEAD
=======
#include <QMap>

>>>>>>> c71ca3ff01ca471bf0a83c0a6a900473bd952c92
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
<<<<<<< HEAD
	NSRframe,
	NSRblock //used for contignous numeration eg. paragraphs - paragraph without numbering reset counter
=======
	NSRframe
//	NSRblock //used for contignous numeration eg. paragraphs - paragraph without numbering reset counter
>>>>>>> c71ca3ff01ca471bf0a83c0a6a900473bd952c92
} NumerationRange;

class Numeration
{
public:
<<<<<<< HEAD
	Numeration() : name(""), numFormat(Type_1_2_3), len(0) {}
	Numeration(QString n, NumFormat f) : name(n), numFormat(f), asterix("*"), len(0) {}
	void setFormat(NumFormat format, QChar leading = QChar(), uint l=0) { numFormat = format; lead = leading; len = l; }
	const NumFormat format() { return numFormat; }
	const QString numString(int num, int l = -1); 

	QString name;
private:
=======
	Numeration() : numFormat(Type_1_2_3), asterix(QString()), lead('0'), len(0), range(NSRdocument), prefix(QString()), suffix(QString()), start(1) {}
	Numeration(NumFormat f) : numFormat(f), asterix("*") {}
	const QString numString(const int num);

>>>>>>> c71ca3ff01ca471bf0a83c0a6a900473bd952c92
	NumFormat numFormat;
	QString asterix;
	QChar lead;
	int len;
	NumerationRange range;
	QString prefix;
	QString suffix;
<<<<<<< HEAD
};

=======
	int start;
};

//struct used by ScribusDoc for storing numerations used in document
typedef struct {
	QString name;
	QList<Numeration> nums;
	QList<int> counters; // <level, count>
	int lastlevel;
} numstruct;

>>>>>>> c71ca3ff01ca471bf0a83c0a6a900473bd952c92
//util functions for use without Numeration class
//convert passed num to string using numeration style
const QString getStringFromNum(NumFormat format, int num, const QChar leadingChar='0', const int charsLen=0);
//convert passed num to string with custom chars
const QString getAsterixStringFromNum(int num, QString asterix, const QChar leadingChar='_', const int charsLen=0);
<<<<<<< HEAD
=======
//return numeration name from type
const QString getFormatName(int format);
>>>>>>> c71ca3ff01ca471bf0a83c0a6a900473bd952c92

#endif // NUMERATION_H
