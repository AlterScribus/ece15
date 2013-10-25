/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QObject>
#include <QList>
#include <QPointer>
#include "sctextstruct.h"
#include "scfonts.h"
#include "pageitem.h"
#include "scribusdoc.h"

void GlyphLayout::growWithTabLayout()
{
	if (more)
		shrink();
	more = new TabLayout();
}

ScText::~ScText() 
{
	// delete the linked list if present
	GlyphLayout * more = glyph.more;
	while (more) {
		glyph.more = glyph.more->more;
		delete more;
		more = glyph.more;
	}
	if (parstyle)
		delete parstyle;
	parstyle = NULL;
	mark = NULL;
}

bool ScText::hasObject(ScribusDoc *doc) const
{
	if (this->ch == SpecialChars::OBJECT)
		return ((embedded > 0) && (doc->FrameItems.contains(embedded)));
	return false;
}

bool ScText::hasMark(const Mark* const mrk) const
{
	if (this->ch == SpecialChars::OBJECT)
	{
		if (mrk == NULL)
			return mark != NULL;
		else
			return mark == mrk;
	}
	return false;
}

bool ScText::hasMarkType(MarkType mt) const
{
	if (mark == NULL)
		return false;
	return (mark->isType(mt));
}

QList<PageItem*> ScText::getGroupedItems(ScribusDoc *doc)
{
	QList<PageItem*> result;
	if ((embedded > 0) && (doc->FrameItems.contains(embedded)))
	{
		PageItem* dItem = doc->FrameItems[embedded];
		result.append(dItem);
		if (dItem->isGroup())
			result = dItem->getItemList();
	}
	return result;
}

PageItem* ScText::getItem(ScribusDoc *doc)
{
	if ((embedded > 0) && (doc->FrameItems.contains(embedded)))
		return doc->FrameItems[embedded];
	return NULL;
}

// used for check of last visible glyph in text frame
bool ScText::isVisible(ScribusDoc *doc)
{
	if (ch.isPrint() && !ch.isSpace())
		return true;
	if (hasMark() && !(mark->isType(MARKAnchorType) || mark->isType(MARKIndexType)))
		return true;
	if (hasObject(doc))
		return true;
	if ((ch == SpecialChars::PAGENUMBER) || (ch == SpecialChars::PAGECOUNT))
		return true;

	return false;
}

void ScText::setNewMark(Mark *mrk)
{
//	if (!mrk->isUnique())
		mark = mrk;
}
