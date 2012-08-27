#include "numeration.h"
#include "util.h"

const QString getStringFromNum(NumFormat format, uint num, const QChar leadingChar, const ushort charsLen)
{
	QString str = getStringFromSequence(format, num);
	if (charsLen > str.length())
		str = str.rightJustified(leadingChar, charsLen);
	return str;
}

const QString getAsterixStringFromNum(uint num, QString asterix, const QChar leadingChar, const ushort charsLen)
{
	QString str = getStringFromSequence(Type_asterix, num, asterix);
	if (charsLen > str.length())
		str = str.rightJustified(leadingChar, charsLen);
	return str;
}



Numeration::Numeration()
{
	numFormat = Type_1_2_3;
	asterix = "";
	lead = '0';
	len = 0;
	range = NSRblock;
}

const QString Numeration::numString(uint num)
{
	if (numFormat == Type_asterix)
		return getAsterixStringFromNum(num, asterix, lead, len);

	return getStringFromNum(style, num, lead, len);
	
}
