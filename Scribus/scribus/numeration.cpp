#include "numeration.h"
#include "util.h"

const QString getStringFromNum(NumStyle style, uint num, const QChar leadingChar, const ushort charsLen)
{
	QString str = getStringFromSequence(style, num);
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
	numStyle = Type_1_2_3;
	asterix = "";
	lead = '0';
	len = 0;
	range = NSRblock;
}

const QString Numeration::numString(const uint num)
{
	if (numStyle == Type_asterix)
		return getAsterixStringFromNum(num, asterix, lead, len);

	return getStringFromNum(style, num, lead, len);
	
}
