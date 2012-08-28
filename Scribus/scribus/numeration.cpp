#include "numeration.h"
#include "util.h"

const QString Numeration::numString(int num, int l)
{
	if (l < 0)
		l = len;
	if (numFormat == Type_asterix)
		return getAsterixStringFromNum(num, asterix, lead, l);

	return getStringFromNum(numFormat, num, lead, l);
}


const QString getStringFromNum(NumFormat format, int num, const QChar leadingChar, const int charsLen)
{
	QString str = getStringFromSequence(format, num);
	if (charsLen > str.length())
		str = str.rightJustified(charsLen, leadingChar);
	return str;
}

const QString getAsterixStringFromNum(int num, QString asterix, const QChar leadingChar, const int charsLen)
{
	QString str = getStringFromSequence(Type_asterix, num, asterix);
	if (charsLen > str.length())
		str = str.rightJustified(charsLen, leadingChar);
	return str;
}
