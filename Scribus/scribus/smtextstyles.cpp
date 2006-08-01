/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "smtextstyles.h"
#include "smtextstyles.moc"
#include "smtextstylewidgets.h"
#include "util.h"
#include "mspinbox.h"
#include "alignselect.h"
#include "tabruler.h"
#include "fontcombo.h"
#include "styleselect.h"
#include "sccombobox.h"
#include "shadebutton.h"
#include "commonstrings.h"
#include "style.h"
#include "scribusdoc.h"
#include "selection.h"
#include "scribus.h"
#include "prefsmanager.h"
#include "colorcombo.h"

#include <qtabwidget.h>



SMParagraphStyle::SMParagraphStyle() : StyleItem(), pwidget_(0), doc_(0), selectionIsDirty_(false)
{

}

QTabWidget* SMParagraphStyle::widget()
{
	if (!pwidget_)
	{
		pwidget_ = new SMPStyleWidget();
		Q_CHECK_PTR(pwidget_);
	}

	return pwidget_->tabWidget;
}

QString SMParagraphStyle::typeName()
{
	return tr("Paragraph Styles");
}

void SMParagraphStyle::currentDoc(ScribusDoc *doc)
{
	Q_ASSERT(doc);
	doc_ = doc;
	if (pwidget_)
	{
		pwidget_->cpage->fillLangCombo(doc_->scMW()->LangTransl);
		pwidget_->cpage->fillColorCombo(doc_->PageColors);
	}
}

QValueList<StyleName> SMParagraphStyle::styles()
{
	QValueList<StyleName> tmpList;

	if (!doc_)
		return tmpList; // no doc available

	reloadTmpStyles();

	for (uint i = 0; i < tmpStyles_.count(); ++i)
	{
		if (tmpStyles_[i].hasName())
		{
			QString styleName = tmpStyles_[i].name();
			QString parentName = QString::null;

			if (tmpStyles_[i].hasParent() && tmpStyles_[i].parent()->hasName())
				parentName = tmpStyles_[i].parent()->displayName();

			tmpList << StyleName(styleName, parentName);
		}
	}

	return tmpList;
}

void SMParagraphStyle::selected(const QStringList &styleNames)
{
	selection_.clear();
	selectionIsDirty_ = false;
	removeConnections();
	if (styleNames.count() == 1)
	{
		QValueList<CharStyle> cstyles = getCharStyles();
		for (uint i = 0; i < tmpStyles_.count(); ++i)
		{
			if (tmpStyles_[i].displayName() == styleNames[0])
			{
				pwidget_->show(tmpStyles_[i], tmpStyles_, cstyles);
				selection_.append(&tmpStyles_[i]);
			}
		}
	}
	else // more than one item selected do the magic tricks here
	{
		
	}
	setupConnections();
}

QValueList<CharStyle> SMParagraphStyle::getCharStyles()
{
	QValueList<CharStyle> charStyles;
	StyleSet<CharStyle> &tmp = doc_->docCharStyles;
	for (uint i = 0; i < tmp.count(); ++i)
		charStyles.append(tmp[i]);
	return charStyles;
}

QString SMParagraphStyle::fromSelection() const
{
//	Q_ASSERT(doc_ && doc_->m_Selection);
//	QString lsName = QString::null;

//	for (uint i = 0; i < doc_->m_Selection->count(); ++i)
//	{
//		PageItem *item = doc_->m_Selection->itemAt(i);
//	}
	return QString::null;
}

void SMParagraphStyle::apply()
{
	Q_ASSERT(doc_);
	doc_->docParagraphStyles.redefine(tmpStyles_);
}

void SMParagraphStyle::editMode(bool isOn)
{
	if (isOn)
		reloadTmpStyles();
}

void SMParagraphStyle::deleteStyles(const QValueList<RemoveItem> &removeList)
{

}

void SMParagraphStyle::nameChanged(const QString &newName)
{

}

void SMParagraphStyle::languageChange()
{
	
}

void SMParagraphStyle::reloadTmpStyles()
{
	selection_.clear();
	tmpStyles_.clear();
	StyleSet<ParagraphStyle> &tmp = doc_->docParagraphStyles;
	for (uint i = 0; i < tmp.count(); ++i)
		tmpStyles_.append(tmp[i]);
}

void SMParagraphStyle::setupConnections()
{
	Q_ASSERT(pwidget_);

	// paragraph attributes
	connect(pwidget_->lineSpacingMode_, SIGNAL(highlighted(int)), this, SLOT(slotLineSpacingMode(int)));
	connect(pwidget_->lineSpacing_, SIGNAL(valueChanged(int)), this, SLOT(slotLineSpacing()));
	connect(pwidget_->spaceAbove_, SIGNAL(valueChanged(int)), this, SLOT(slotSpaceAbove()));
	connect(pwidget_->spaceBelow_, SIGNAL(valueChanged(int)), this, SLOT(slotSpaceBelow()));
	connect(pwidget_->alignement_->TextL, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextR, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextC, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextB, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextF, SIGNAL(clicked()), this, SLOT(slotAlignment()));

	connect(pwidget_->dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	connect(pwidget_->dropCapLines_, SIGNAL(valueChanged(int)), this, SLOT(slotDropCapLines(int)));
	connect(pwidget_->dropCapOffset_, SIGNAL(valueChanged(int)), this, SLOT(slotDropCapOffset()));

	connect(pwidget_->tabList_, SIGNAL(tabsChanged()), this, SLOT(slotTabRuler()));
	connect(pwidget_->tabList_, SIGNAL(leftIndentChanged(double)), this, SLOT(slotLeftIndent(double)));
	connect(pwidget_->tabList_, SIGNAL(rightIndentChanged(double)), this, SLOT(slotRightIndent(double)));
	connect(pwidget_->tabList_, SIGNAL(firstLineChanged(double)), this, SLOT(slotFirstLine(double)));
	
	// character attributes
	connect(pwidget_->cpage->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	connect(pwidget_->cpage->effects_, SIGNAL(State(int)), this, SLOT(slotEffects(int)));
	connect(pwidget_->cpage->fillColor_, SIGNAL(highlighted(int)), this, SLOT(slotFillColor()));
	connect(pwidget_->cpage->fillShade_, SIGNAL(clicked()), this, SLOT(slotFillShade()));
	connect(pwidget_->cpage->strokeColor_, SIGNAL(highlighted(int)), this, SLOT(slotStrokeColor()));
	connect(pwidget_->cpage->strokeShade_, SIGNAL(clicked()), this, SLOT(slotStrokeShade()));
	connect(pwidget_->cpage->language_, SIGNAL(highlighted(int)), this, SLOT(slotLanguage()));
	connect(pwidget_->cpage->fontSize_, SIGNAL(valueChanged(int)), this, SLOT(slotFontSize()));
	connect(pwidget_->cpage->fontHScale_, SIGNAL(valueChanged(int)), this, SLOT(slotScaleH()));
	connect(pwidget_->cpage->fontVScale_, SIGNAL(valueChanged(int)), this, SLOT(slotScaleV()));
	connect(pwidget_->cpage->tracking_, SIGNAL(valueChanged(int)), this, SLOT(slotTracking()));
	connect(pwidget_->cpage->baselineOffset_, SIGNAL(valueChanged(int)),
	        this, SLOT(slotBaselineOffset()));
	connect(pwidget_->cpage->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
}

void SMParagraphStyle::removeConnections()
{
	Q_ASSERT(pwidget_);

	disconnect(pwidget_->lineSpacingMode_, SIGNAL(highlighted(int)), this, SLOT(slotLineSpacingMode(int)));
	disconnect(pwidget_->lineSpacing_, SIGNAL(valueChanged(int)), this, SLOT(slotLineSpacing()));
	disconnect(pwidget_->spaceAbove_, SIGNAL(valueChanged(int)), this, SLOT(slotSpaceAbove()));
	disconnect(pwidget_->spaceBelow_, SIGNAL(valueChanged(int)), this, SLOT(slotSpaceBelow()));
	disconnect(pwidget_->alignement_->TextL, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextR, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextC, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextB, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextF, SIGNAL(clicked()), this, SLOT(slotAlignment()));

	disconnect(pwidget_->dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	disconnect(pwidget_->dropCapLines_, SIGNAL(valueChanged(int)), this, SLOT(slotDropCapLines(int)));
	disconnect(pwidget_->dropCapOffset_, SIGNAL(valueChanged(int)), this, SLOT(slotDropCapOffset()));

	disconnect(pwidget_->tabList_, SIGNAL(tabsChanged()), this, SLOT(slotTabRuler()));
	disconnect(pwidget_->tabList_, SIGNAL(leftIndentChanged(double)), this, SLOT(slotLeftIndent(double)));
	disconnect(pwidget_->tabList_, SIGNAL(rightIndentChanged(double)), this, SLOT(slotRightIndent(double)));
	disconnect(pwidget_->tabList_, SIGNAL(firstLineChanged(double)), this, SLOT(slotFirstLine(double)));
}

void SMParagraphStyle::slotLineSpacingMode(int mode)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setLineSpacingMode(static_cast<ParagraphStyle::LineSpacingMode>(mode));

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotLineSpacing()
{
	double a, b, value;
	int c;

	pwidget_->lineSpacing_->getValues(&a, &b, &c, &value);
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setLineSpacing(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotSpaceAbove()
{
	double a, b, value;
	int c;

	pwidget_->spaceAbove_->getValues(&a, &b, &c, &value);
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setGapBefore(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotSpaceBelow()
{
	double a, b, value;
	int c;

	pwidget_->spaceBelow_->getValues(&a, &b, &c, &value);
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setGapAfter(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotAlignment()
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setAlignment(pwidget_->alignement_->getStyle());

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotDropCap(bool isOn)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setHasDropCap(isOn);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotDropCapLines(int lines)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setDropCapLines(lines);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotDropCapOffset()
{
	double a, b, value;
	int c;

	pwidget_->dropCapOffset_->getValues(&a, &b, &c, &value);
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setDropCapOffset(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotTabRuler()
{
	QValueList<ParagraphStyle::TabRecord> newTabs = pwidget_->tabList_->getTabVals();
	for (uint i = 0; i < selection_.count(); ++i)
	{
		QValueList<ParagraphStyle::TabRecord> &tabs = selection_[i]->tabValues();
		tabs.clear();
		for (uint i = 0; i < newTabs.count(); ++i)
			tabs.append(newTabs[i]);
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotLeftIndent(double value)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setLeftMargin(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotRightIndent(double value)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setRightMargin(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFirstLine(double value)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->setFirstIndent(value);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFontSize()
{
	double a, b, value;
	int c;

	pwidget_->cpage->fontSize_->getValues(&a, &b, &c, &value);

	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setFontSize(qRound(10 * value));

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotEffects(int e)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setEffects(static_cast<StyleFlag>(e));

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFillColor()
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setFillColor(pwidget_->cpage->fillColor_->currentText());
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFillShade()
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setFillShade(pwidget_->cpage->fillShade_->getValue());
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotStrokeColor()
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setStrokeColor(pwidget_->cpage->strokeColor_->currentText());
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotStrokeShade()
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setStrokeShade(pwidget_->cpage->strokeShade_->getValue());
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotLanguage()
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setLanguage(pwidget_->cpage->strokeColor_->currentText());
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotScaleH()
{
	double a, b, value;
	int c;

	pwidget_->cpage->fontHScale_->getValues(&a, &b, &c, &value);

	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setScaleH(qRound(10 * value));
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotScaleV()
{
	double a, b, value;
	int c;

	pwidget_->cpage->fontVScale_->getValues(&a, &b, &c, &value);

	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setScaleV(qRound(10 * value));
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotTracking()
{
	double a, b, value;
	int c;

	pwidget_->cpage->tracking_->getValues(&a, &b, &c, &value);

	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setTracking(qRound(value * 10));
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotBaselineOffset()
{
	double a, b, value;
	int c;

	pwidget_->cpage->baselineOffset_->getValues(&a, &b, &c, &value);

	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setBaselineOffset(qRound(value * 10));
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFont(QString s)
{
	for (uint i = 0; i < selection_.count(); ++i)
		selection_[i]->charStyle().setFont(PrefsManager::instance()->appPrefs.AvailFonts[s]);
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

SMParagraphStyle::~SMParagraphStyle()
{

}

/******************************************************************************/
/******************************************************************************/

SMCharacterStyle::SMCharacterStyle() : StyleItem(), widget_(0), page_(0), doc_(0)
{

}

QTabWidget* SMCharacterStyle::widget()
{
	if (!widget_)
	{
		widget_ = new QTabWidget();
		Q_CHECK_PTR(widget_);
		page_ = new SMCStylePage();
		Q_CHECK_PTR(page_);
		widget_->addTab(page_, tr("Properties"));
	}

	return widget_;
}

QString SMCharacterStyle::typeName()
{
	return tr("Character Styles");
}

void SMCharacterStyle::currentDoc(ScribusDoc *doc)
{
	Q_ASSERT(doc);
	doc_ = doc;
	if (page_)
		page_->fillLangCombo(doc_->scMW()->LangTransl);
}

QValueList<StyleName> SMCharacterStyle::styles()
{
	QValueList<StyleName> tmpList;

	if (!doc_)
		return tmpList; // no doc available

	reloadTmpStyles();

	for (uint i = 0; i < tmpStyles_.count(); ++i)
	{
		if (tmpStyles_[i].hasName())
		{
			QString styleName = tmpStyles_[i].name();
			QString parentName = QString::null;

			if (tmpStyles_[i].hasParent() && tmpStyles_[i].parent()->hasName())
				parentName = tmpStyles_[i].parent()->displayName();

			tmpList << StyleName(styleName, parentName);
		}
	}

	return tmpList;
}

void SMCharacterStyle::selected(const QStringList &styleNames)
{
	selection_.clear();
	if (styleNames.count() == 1)
	{
		for (uint i = 0; i < tmpStyles_.count(); ++i)
		{
			if (tmpStyles_[i].displayName() == styleNames[0])
			{
				page_->show(tmpStyles_[i], tmpStyles_);
				selection_.append(&tmpStyles_[i]);
				break;
			}
		}
			
	}
	else // more than one item selected do the magic tricks here
	{
		
	}
}

QString SMCharacterStyle::fromSelection() const
{
	return QString::null;
}

void SMCharacterStyle::apply()
{
	Q_ASSERT(doc_);
	doc_->docCharStyles.redefine(tmpStyles_);
}

void SMCharacterStyle::editMode(bool isOn)
{
	if (isOn)
		reloadTmpStyles();
}

void SMCharacterStyle::deleteStyles(const QValueList<RemoveItem> &removeList)
{

}

void SMCharacterStyle::nameChanged(const QString &newName)
{

}

void SMCharacterStyle::languageChange()
{
	
}

void SMCharacterStyle::reloadTmpStyles()
{
	selection_.clear();
	tmpStyles_.clear();
	StyleSet<CharStyle> &tmp = doc_->docCharStyles;
	for (uint i = 0; i < tmp.count(); ++i)
		tmpStyles_.append(tmp[i]);
}

SMCharacterStyle::~SMCharacterStyle()
{
	delete page_;
	delete widget_;
	page_ = 0;
	widget_ = 0;
}

