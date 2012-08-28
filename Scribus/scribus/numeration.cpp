#include "numeration.h"
#include "util.h"

const QString Numeration::numString(uint num)
{
	if (numFormat == Type_asterix)
		return getAsterixStringFromNum(num, asterix, lead, len);

	return getStringFromNum(numFormat, num, lead, len);
}


const QString getStringFromNum(NumFormat format, uint num, const QChar leadingChar, const ushort charsLen)
{
	QString str = getStringFromSequence(format, num);
	if (charsLen > str.length())
		str = str.rightJustified(charsLen, leadingChar);
	return str;
}

const QString getAsterixStringFromNum(uint num, QString asterix, const QChar leadingChar, const ushort charsLen)
{
	QString str = getStringFromSequence(Type_asterix, num, asterix);
	if (charsLen > str.length())
		str = str.rightJustified(charsLen, leadingChar);
	return str;
}
