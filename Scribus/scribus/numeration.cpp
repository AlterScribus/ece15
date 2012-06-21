#include "numeration.h"

Numeration::Numeration()
{
}


const QString Numeration::numString(const uint num, const QChar leadingChar, const ushort charsLen)
{
	
	return getStringFromSequence(numStyle, num, leadingChar, charsLen);
}

const QString Numeration::numString(const uint num, const QChar asterix)
{
	return getAsterixStringFromSequence(uint num, QString asterix);
}

const QString Numeration::getStringFromSequence(NumStyle type, uint index, const QChar leadingChar, const ushort charsLen)
{
}

const QString Numeration::getAsterixStringFromSequence(uint num, QString asterix)
{
}
