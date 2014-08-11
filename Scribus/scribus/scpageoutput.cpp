/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "scpageoutput.h"

#include <QList>
#include <QPointF>
#include <QRectF>
#include <QStack>

#include "cmsettings.h"
#include "commonstrings.h"
#include "pageitem.h"
#include "pageitem_arc.h"
#include "pageitem_group.h"
#include "pageitem_imageframe.h"
#include "pageitem_line.h"
#include "pageitem_pathtext.h"
#include "pageitem_polygon.h"
#include "pageitem_polyline.h"
#include "pageitem_regularpolygon.h"
#include "pageitem_spiral.h"
#include "pageitem_textframe.h"
#include "prefsmanager.h"
#include "scfonts.h"
#include "scimage.h"
#include "scpage.h"
#include "scpattern.h"

#include "scribusdoc.h"
#include "util.h"
#include "util_formats.h"
#include "util_math.h"


MarksOptions::MarksOptions(void)
{
	markLength = 20.0;
	markOffset = 0.0;
	BleedTop = 0.0;
	BleedLeft = 0.0;
	BleedRight = 0.0;
	BleedBottom = 0.0;
	cropMarks = false;
	bleedMarks = false;
	registrationMarks = false;
	colorMarks = false;
	docInfoMarks = false;
}

MarksOptions::MarksOptions(struct PrintOptions& opt)
{
	markLength = opt.markLength;
	markOffset = opt.markOffset;
	BleedTop = opt.bleeds.Top;
	BleedLeft = opt.bleeds.Left;
	BleedRight = opt.bleeds.Right;
	BleedBottom = opt.bleeds.Bottom;
	cropMarks = opt.cropMarks;
	bleedMarks = opt.bleedMarks;
	registrationMarks = opt.registrationMarks;
	colorMarks = opt.colorMarks;
	docInfoMarks = true;
}

ScPageOutput::ScPageOutput(ScribusDoc* doc, bool reloadImages, int resolution, bool useProfiles) 
			: m_marksOptions()
{
	m_doc = doc;
	m_reloadImages = reloadImages;
	m_imageRes = resolution;
	m_useProfiles = useProfiles;
}

ScImage::RequestType ScPageOutput::translateImageModeToRequest( ScPainterExBase::ImageMode mode )
{
	ScImage::RequestType value = ScImage::RGBData;
	if ( mode == ScPainterExBase::cmykImages )
		value = ScImage::CMYKData;
	else if ( mode == ScPainterExBase::rgbImages )
		value = ScImage::RGBData;
	else if ( mode == ScPainterExBase::rawImages )
		value = ScImage::RawData;
	return value;
}

void ScPageOutput::drawPage( ScPage* page, ScPainterExBase* painter)
{
	int clipx = static_cast<int>(page->xOffset());
	int clipy = static_cast<int>(page->yOffset());
	int clipw = qRound(page->width());
	int cliph = qRound(page->height());
	ScLayer layer;
	layer.isViewable = false;
	uint layerCount = m_doc->layerCount();
	for (uint la = 0; la < layerCount; ++la)
	{
		m_doc->Layers.levelToLayer(layer, la);
		drawMasterItems(painter, page, layer, QRect(clipx, clipy, clipw, cliph));
		drawPageItems(painter, page, layer, QRect(clipx, clipy, clipw, cliph));
	}
	drawMarks(page, painter, m_marksOptions);
}

void ScPageOutput::drawMasterItems(ScPainterExBase *painter, ScPage *page, ScLayer& layer, const QRect& clip)
{
	PageItem* currItem;
	if (page->MPageNam.isEmpty())
		return;
	if (page->FromMaster.count() <= 0)
		return;
	if (!layer.isViewable || !layer.isPrintable)
		return;
	ScPage* Mp = m_doc->MasterPages.at(m_doc->MasterNames[page->MPageNam]);
	uint pageFromMasterCount = page->FromMaster.count();
	for (uint a = 0; a < pageFromMasterCount; ++a)
	{
		currItem = page->FromMaster.at(a);
		if (currItem->LayerID != layer.ID)
			continue;
		if ((currItem->OwnPage != -1) && (currItem->OwnPage != static_cast<int>(Mp->pageNr())))
			continue;
		if (!currItem->printEnabled())
			continue;
		int savedOwnPage = currItem->OwnPage;
		double OldX = currItem->xPos();
		double OldY = currItem->yPos();
		double OldBX = currItem->BoundingX;
		double OldBY = currItem->BoundingY;
		currItem->OwnPage = page->pageNr();
		if (!currItem->ChangedMasterItem)
		{
			currItem->moveBy(-Mp->xOffset() + page->xOffset(), -Mp->yOffset() + page->yOffset(), true);
			currItem->BoundingX = OldBX - Mp->xOffset() + page->xOffset();
			currItem->BoundingY = OldBY - Mp->yOffset() + page->yOffset();
		}
		/*if (evSpon)
			currItem->Dirty = true;*/
		QRectF oldR(currItem->getBoundingRect().adjusted(0.0, 0.0, 1.0, 1.0));
		if (clip.intersects(oldR.toRect()))
		{
			// relayout necessary to get page number ok
			currItem->invalidateLayout();
			currItem->layout();
			drawItem(currItem, painter, clip);
		}
		currItem->OwnPage = savedOwnPage;
		if (!currItem->ChangedMasterItem)
		{
			currItem->setXYPos(OldX, OldY, true);
			currItem->BoundingX = OldBX;
			currItem->BoundingY = OldBY;
		}
	}
}

void ScPageOutput::drawPageItems(ScPainterExBase *painter, ScPage *page, ScLayer& layer, const QRect& clip)
{
	PageItem *currItem;
	if (m_doc->Items->count() <= 0)
		return;
	if (!layer.isViewable || !layer.isPrintable)
		return;
	int docCurrPageNo = static_cast<int>(page->pageNr());
	for (int it = 0; it < m_doc->Items->count(); ++it)
	{
		currItem = m_doc->Items->at(it);
		if (currItem->LayerID != layer.ID)
			continue;
		if (!currItem->printEnabled())
			continue;
		if ((m_doc->masterPageMode()) && ((currItem->OwnPage != -1) && (currItem->OwnPage != docCurrPageNo)))
			continue;
		if (!m_doc->masterPageMode() && !currItem->OnMasterPage.isEmpty())
		{
			if (currItem->OnMasterPage != page->pageName())
				continue;
		}
		QRectF oldR(currItem->getBoundingRect().adjusted(0.0, 0.0, 1.0, 1.0));
		if (clip.intersects(oldR.toRect()))
		{
			drawItem( currItem, painter, clip );
		}
	}
}

void ScPageOutput::drawItem( PageItem* item, ScPainterExBase* painter, const QRect& clip )
{
	drawItem_Pre(item, painter);
	PageItem::ItemType itemType = item->itemType();
	if (itemType == PageItem::Arc)
		drawItem_Arc( (PageItem_Arc*) item, painter, clip);
	else if (itemType == PageItem::Group)
		drawItem_Group( (PageItem_Group*) item, painter, clip);
	else if (itemType == PageItem::ImageFrame)
		drawItem_ImageFrame( (PageItem_ImageFrame*) item, painter, clip);
	else if (itemType == PageItem::Line)
		drawItem_Line( (PageItem_Line*) item, painter, clip);
	else if (itemType == PageItem::PathText)
		drawItem_PathText(  (PageItem_PathText*) item, painter, clip);
	else if (itemType == PageItem::Polygon)
		drawItem_Polygon( (PageItem_Polygon*) item, painter, clip);
	else if (itemType == PageItem::PolyLine)
		drawItem_PolyLine( (PageItem_PolyLine*) item, painter, clip);
	else if (itemType == PageItem::RegularPolygon)
		drawItem_RegularPolygon( (PageItem_RegularPolygon*) item, painter, clip);
	else if (itemType == PageItem::Spiral)
		drawItem_Spiral( (PageItem_Spiral*) item, painter, clip);
	else if (itemType == PageItem::TextFrame)
		drawItem_TextFrame( (PageItem_TextFrame*) item, painter, clip);
	drawItem_Post(item, painter);
}

void ScPageOutput::drawItem_Pre( PageItem* item, ScPainterExBase* painter)
{
	painter->save();
	if (!item->isEmbedded)
		painter->translate( item->xPos(), item->yPos());
	painter->rotate(item->rotation());
	painter->setBlendModeFill(item->fillBlendmode());
	painter->setLineWidth(item->lineWidth());
	if (item->isGroup())
		return;
	if (item->GrType == 8)
	{
		QString pat = item->pattern();
		if ((pat.isEmpty()) || (!m_doc->docPatterns.contains(pat)))
		{
			painter->m_fillGradient = VGradientEx(VGradientEx::linear);
			if (item->fillColor() != CommonStrings::None)
			{
				painter->setBrush(ScColorShade(m_doc->PageColors[item->fillColor()], (int) item->fillShade()));
				painter->setFillMode(ScPainterExBase::Solid);
			}
			else
				painter->setFillMode(ScPainterExBase::None);
		}
		else
		{
			QTransform patternTransform;
			ScPattern& pattern = m_doc->docPatterns[item->pattern()];
			double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY;
			bool   patternMirrorX, patternMirrorY;
			item->patternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY);
			item->patternFlip(patternMirrorX, patternMirrorY);
			painter->setPattern(&pattern, patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY, patternMirrorX, patternMirrorY);
			painter->setFillMode(ScPainterExBase::Pattern);
		}
	}
	else if (item->GrType == 9)
	{
		painter->setFillMode(ScPainterExBase::Gradient);
		FPoint pG1 = FPoint(0, 0);
		FPoint pG2 = FPoint(item->width(), 0);
		FPoint pG3 = FPoint(item->width(), item->height());
		FPoint pG4 = FPoint(0, item->height());
		ScColorShade col1(m_doc->PageColors[item->GrColorP1], item->GrCol1Shade);
		ScColorShade col2(m_doc->PageColors[item->GrColorP2], item->GrCol2Shade);
		ScColorShade col3(m_doc->PageColors[item->GrColorP3], item->GrCol3Shade);
		ScColorShade col4(m_doc->PageColors[item->GrColorP4], item->GrCol4Shade);
		painter->set4ColorGeometry(pG1, pG2, pG3, pG4, item->GrControl1, item->GrControl2, item->GrControl3, item->GrControl4);
		painter->set4ColorColors(col1, col2, col3, col4);
	}
	else if (item->GrType != 0)
	{
		QString gradientVal = item->gradient();
		if ((!gradientVal.isEmpty()) && (!m_doc->docGradients.contains(gradientVal)))
			gradientVal = "";
		if (!(gradientVal.isEmpty()) && (m_doc->docGradients.contains(gradientVal)))
			painter->m_fillGradient = VGradientEx(m_doc->docGradients[gradientVal], *m_doc);
		if ((painter->m_fillGradient.Stops() < 2) && (item->GrType < 9)) // fall back to solid filling if there are not enough colorstops in the gradient.
		{
			if (item->fillColor() != CommonStrings::None)
			{
				painter->setBrush( ScColorShade(m_doc->PageColors[item->fillColor()], (int) item->fillShade()) );
				painter->setFillMode(ScPainterExBase::Solid);
			}
			else
				painter->setFillMode(ScPainterExBase::None);
		}
		else
		{
			FPoint fpStart(item->GrStartX, item->GrStartY), fpEnd(item->GrEndX, item->GrEndY);
			FPoint fpFocal(item->GrFocalX, item->GrFocalY);
			painter->setFillMode(ScPainterExBase::Gradient);
			painter->m_fillGradient = VGradientEx(item->fill_gradient, *m_doc);
			switch (item->GrType)
			{
				case 1:
				case 2:
				case 3:
				case 4:
				case 6:
					painter->setGradient(VGradientEx::linear, fpStart, fpEnd, fpStart, item->GrScale, item->GrSkew);
					break;
				case 5:
				case 7:
					painter->setGradient(VGradientEx::radial, fpStart, fpEnd, fpFocal, item->GrScale, item->GrSkew);
					break;
				case 10:
					painter->setFillMode(ScPainterExBase::Gradient);
					painter->setDiamondGeometry(FPoint(0, 0), FPoint(item->width(), 0), FPoint(item->width(), item->height()), FPoint(0, item->height()), 
					                            item->GrControl1, item->GrControl2, item->GrControl3, item->GrControl4, item->GrControl5);
					break;
				case 11:
				case 13:
					painter->setFillMode(ScPainterExBase::Gradient);
					painter->setMeshGradient(FPoint(0, 0), FPoint(item->width(), 0), FPoint(item->width(), item->height()), FPoint(0, item->height()), item->meshGradientArray);
					break;
				case 12:
					painter->setFillMode(ScPainterExBase::Gradient);
					painter->setMeshGradient(FPoint(0, 0), FPoint(item->width(), 0), FPoint(item->width(), item->height()), FPoint(0, item->height()), item->meshGradientPatches);
					break;
			}
		}
	}
	else
	{
		painter->m_fillGradient = VGradientEx(VGradientEx::linear);
		if (item->fillColor() != CommonStrings::None)
		{
			painter->setBrush( ScColorShade(m_doc->PageColors[item->fillColor()], (int) item->fillShade()) );
			painter->setFillMode(ScPainterExBase::Solid);
		}
		else
			painter->setFillMode(ScPainterExBase::None);
	}
	if (item->lineColor() != CommonStrings::None)
	{
		if ((item->lineWidth() == 0) && !item->asLine())
			painter->setLineWidth(0);
		else
		{
			ScColorShade tmp(m_doc->PageColors[item->lineColor()], (int) item->lineShade());
			painter->setPen( tmp , item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
			if (item->DashValues.count() != 0)
				painter->setDash(item->DashValues, item->DashOffset);
		}
	}
	else
		painter->setLineWidth(0);
	painter->setBrushOpacity(1.0 - item->fillTransparency());
	painter->setPenOpacity(1.0 - item->lineTransparency());
	painter->setFillRule(item->fillRule);

	if ((item->GrMask == 1) || (item->GrMask == 2) || (item->GrMask == 4) || (item->GrMask == 5))
	{
		QString gradientMaskVal = item->gradientMaskVal;
		FPoint fpMaskStart(item->GrMaskStartX, item->GrMaskStartY);
		FPoint fpMaskEnd(item->GrMaskEndX, item->GrMaskEndY);
		FPoint fpMaskFocal(item->GrMaskFocalX, item->GrMaskFocalY);
		if ((item->GrMask == 1) || (item->GrMask == 2))
			painter->setMaskMode(1);
		else
			painter->setMaskMode(3);
		if ((!gradientMaskVal.isEmpty()) && (!m_doc->docGradients.contains(gradientMaskVal)))
			gradientMaskVal = "";
		if (!(gradientMaskVal.isEmpty()) && (m_doc->docGradients.contains(gradientMaskVal)))
			painter->m_maskGradient = VGradientEx(m_doc->docGradients[gradientMaskVal], *m_doc);
		if ((item->GrMask == 1) || (item->GrMask == 4))
			painter->setGradientMask(VGradientEx::linear, fpMaskStart, fpMaskEnd, fpMaskStart, item->GrMaskScale, item->GrMaskSkew);
		else
			painter->setGradientMask(VGradientEx::radial, fpMaskStart, fpMaskEnd, fpMaskFocal, item->GrMaskScale, item->GrMaskSkew);
	}
	else if ((item->GrMask == 3) || (item->GrMask == 6) || (item->GrMask == 7) || (item->GrMask == 8))
	{
		QString patternMaskVal = item->patternMaskVal;
		if ((patternMaskVal.isEmpty()) || (!m_doc->docPatterns.contains(patternMaskVal)))
			painter->setMaskMode(0);
		else
		{
			painter->setPatternMask(&m_doc->docPatterns[patternMaskVal], item->patternMaskScaleX, item->patternMaskScaleY, item->patternMaskOffsetX, item->patternMaskOffsetY, 
				                    item->patternMaskRotation, item->patternMaskSkewX, item->patternMaskSkewY, item->patternMaskMirrorX, item->patternMaskMirrorY);
			if (item->GrMask == 3)
				painter->setMaskMode(2);
			else if (item->GrMask == 6)
				painter->setMaskMode(4);
			else if (item->GrMask == 7)
				painter->setMaskMode(5);
			else
				painter->setMaskMode(6);
		}
	}
	else
		painter->setMaskMode(0);
}

void ScPageOutput::drawItem_Post( PageItem* item, ScPainterExBase* painter )
{
	bool doStroke = true;
	if (!item->isGroup())
	{
		painter->setMaskMode(0);
		if (item->isGroup() || item->isLine() || item->isPathText() || item->isPolyLine() || item->isSpiral() || item->isSymbol() || item->isTable() )
			doStroke = false;
		if ((doStroke))
		{
			painter->setBlendModeStroke(item->lineBlendmode());
			painter->setPenOpacity(1.0 - item->lineTransparency());
			if ((item->lineColor() != CommonStrings::None)|| (!item->strokePattern().isEmpty()) || (item->strokeGradientType() > 0))
			{
				ScColorShade tmp(m_doc->PageColors[item->lineColor()], (int) item->lineShade());
				painter->setPen(tmp, item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
				if (item->DashValues.count() != 0)
					painter->setDash(item->DashValues, item->DashOffset);
			}
			else
				painter->setLineWidth(0);
			if ((item->itemType() == PageItem::LatexFrame) || (item->itemType() == PageItem::ImageFrame) || (item->itemType() == PageItem::OSGFrame))
				painter->setupPolygon(&item->PoLine);
			if (item->NamedLStyle.isEmpty())
			{
				QString patternStrokeVal = item->strokePattern();
				if ((!patternStrokeVal.isEmpty()) && (m_doc->docPatterns.contains(patternStrokeVal)))
				{
					if (item->patternStrokePath)
					{
						QPainterPath guidePath = item->PoLine.toQPainterPath(false);
						drawStrokePattern(item, painter, guidePath);
					}
					else
					{
						painter->setPattern(&m_doc->docPatterns[patternStrokeVal], item->patternStrokeScaleX, item->patternStrokeScaleY, item->patternStrokeOffsetX, item->patternStrokeOffsetY, item->patternStrokeRotation, item->patternStrokeSkewX, item->patternStrokeSkewY, item->patternStrokeMirrorX, item->patternStrokeMirrorY);
						painter->setStrokeMode(ScPainterExBase::Pattern);
						painter->strokePath();
					}
				}
				else if (item->strokeGradientType() > 0)
				{
					QString gradientStrokeVal = item->strokeGradient();
					if ((!gradientStrokeVal.isEmpty()) && (!m_doc->docGradients.contains(gradientStrokeVal)))
						gradientStrokeVal = "";
					if (!(gradientStrokeVal.isEmpty()) && (m_doc->docGradients.contains(gradientStrokeVal)))
						painter->m_strokeGradient = VGradientEx(m_doc->docGradients[gradientStrokeVal], *m_doc);
					if (painter->m_strokeGradient.Stops() < 2) // fall back to solid stroking if there are not enough colorstops in the gradient.
					{
						if (item->lineColor() != CommonStrings::None)
						{
							ScColorShade strokeColor(m_doc->PageColors[item->lineColor()], item->lineShade());
							painter->setBrush(strokeColor);
							painter->setStrokeMode(ScPainterExBase::Solid);
						}
						else
							painter->setStrokeMode(ScPainterExBase::None);
					}
					else
					{
						FPoint fpStart(item->GrStrokeStartX, item->GrStrokeStartY);
						FPoint fpEnd(item->GrStrokeEndX, item->GrStrokeEndY);
						FPoint fpFocal(item->GrStrokeFocalX, item->GrStrokeFocalY);
						painter->setStrokeMode(ScPainterExBase::Gradient);
						painter->m_strokeGradient = VGradientEx(item->stroke_gradient, *m_doc);
						if (item->GrTypeStroke == 6)
							painter->setGradient(VGradientEx::linear, fpStart, fpEnd, fpStart, item->GrStrokeScale, item->GrStrokeSkew);
						else
							painter->setGradient(VGradientEx::radial, fpStart, fpEnd, fpFocal, item->GrStrokeScale, item->GrStrokeSkew);
					}
					painter->strokePath();
				}
				else if (item->lineColor() != CommonStrings::None)
				{
					ScColorShade scColor(m_doc->PageColors[item->lineColor()], item->lineShade());
					painter->setStrokeMode(ScPainterExBase::Solid);
					painter->setPen(scColor, item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
					if (item->DashValues.count() != 0)
						painter->setDash(item->DashValues, item->DashOffset);
					painter->strokePath();
				}
			}
			else
			{
				multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
				{
					const SingleLine& sl = ml[it];
					if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
					{
						ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
						painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
										static_cast<Qt::PenCapStyle>(sl.LineEnd),
										static_cast<Qt::PenJoinStyle>(sl.LineJoin));
						painter->strokePath();
					}
				}
			}
			painter->setBlendModeStroke(0);
		}
	}
	painter->setFillMode(ScPainterExBase::Solid);
	painter->setBlendModeFill(0);
	painter->setStrokeMode(ScPainterExBase::Solid);
	painter->setBlendModeStroke(0);
	painter->restore();
}

void ScPageOutput::drawGlyphs(PageItem* item, ScPainterExBase *painter, const CharStyle& style, GlyphLayout& glyphs, const QRect& clip)
{
	uint glyph = glyphs.glyph;
	if (glyph == (ScFace::CONTROL_GLYPHS + SpecialChars::NBSPACE.unicode())) // NBSPACE
		glyph = style.font().char2CMap(QChar(' '));
	else if (glyph == (ScFace::CONTROL_GLYPHS + SpecialChars::NBHYPHEN.unicode())) // NBHYPHEN
		glyph = style.font().char2CMap(QChar('-'));
	
	if (glyph >= ScFace::CONTROL_GLYPHS)
	{
		if (glyphs.more)
		{
			painter->translate(glyphs.xadvance, 0);
			drawGlyphs(item, painter, style, *glyphs.more, clip);
		}
		return;
	}
	
	//if (style.font().canRender(QChar(glyph)))
	{
		QTransform chma, chma2, chma3, chma4, chma5, chma6;
		chma.scale(glyphs.scaleH * style.fontSize() / 100.00, glyphs.scaleV * style.fontSize() / 100.0);
		FPointArray gly = style.font().glyphOutline(glyph);
		// Do underlining first so you can get typographically correct
		// underlines when drawing a white outline
		if ((style.effects() & ScStyle_Underline) || ((style.effects() & ScStyle_UnderlineWords) && (glyph != style.font().char2CMap(QChar(' ')))))
		{
			double st, lw;
			if ((style.underlineOffset() != -1) || (style.underlineWidth() != -1))
			{
				if (style.underlineOffset() != -1)
					st = (style.underlineOffset() / 1000.0) * (style.font().descent(style.fontSize() / 10.0));
				else
					st = style.font().underlinePos(style.fontSize() / 10.0);
				if (style.underlineWidth() != -1)
					lw = (style.underlineWidth() / 1000.0) * (style.fontSize() / 10.0);
				else
					lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			else
			{
				st = style.font().underlinePos(style.fontSize() / 10.0);
				lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			if (style.baselineOffset() != 0)
				st += (style.fontSize() / 10.0) * glyphs.scaleV * (style.baselineOffset() / 1000.0);
			ScColorShade tmpPen = painter->pen();
			painter->setPen(painter->brush());
			painter->setLineWidth(lw);
			if (style.effects() & ScStyle_Subscript)
				painter->drawLine(FPoint(glyphs.xoffset, glyphs.yoffset - st), FPoint(glyphs.xoffset + glyphs.xadvance, glyphs.yoffset - st));
			else
				painter->drawLine(FPoint(glyphs.xoffset, -st), FPoint(glyphs.xoffset + glyphs.xadvance, -st));
			painter->setPen(tmpPen);
		}
		if (gly.size() > 3)
		{
			painter->save();
			painter->translate(glyphs.xoffset, glyphs.yoffset - ((style.fontSize() / 10.0) * glyphs.scaleV));
			if (item->reversed())
			{
				painter->scale(-1, 1);
				painter->translate(-glyphs.xadvance, 0);
			}
			if (style.baselineOffset() != 0)
				painter->translate(0, -(style.fontSize() / 10.0) * (style.baselineOffset() / 1000.0));
			double glxSc = glyphs.scaleH * style.fontSize() / 100.00;
			double glySc = glyphs.scaleV * style.fontSize() / 100.0;
			painter->scale(glxSc, glySc);
			painter->setFillMode(ScPainterExBase::Solid);
			bool fr = painter->fillRule();
			painter->setFillRule(false);
			painter->setupPolygon(&gly, true);
			if (glyph == 0)
			{
				ScColorShade tmp(PrefsManager::instance()->appPrefs.displayPrefs.controlCharColor, 100);
				painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				painter->setLineWidth(style.fontSize() * glyphs.scaleV * style.outlineWidth() * 2 / 10000.0);
				painter->strokePath();
			}
			else if ((style.font().isStroked()) && ((style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0) != 0))
			{
				ScColorShade tmp = painter->brush();
				painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				painter->setLineWidth(style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0);
				painter->strokePath();
			}
			else
			{
				if ((style.effects() & ScStyle_Shadowed) && (style.strokeColor() != CommonStrings::None))
				{
					painter->save();
					painter->translate((style.fontSize() * glyphs.scaleH * style.shadowXOffset() / 10000.0) / glxSc, -(style.fontSize() * glyphs.scaleV * style.shadowYOffset() / 10000.0) / glySc);
					ScColorShade tmp = painter->brush();
					painter->setBrush(painter->pen());
					painter->setupPolygon(&gly, true);
					fillPath(item, painter, clip);
					painter->setBrush(tmp);
					painter->restore();
					painter->setupPolygon(&gly, true);
				}
				if (style.fillColor() != CommonStrings::None)
					fillPath(item, painter, clip);
				if ((style.effects() & ScStyle_Outline) && (style.strokeColor() != CommonStrings::None) && ((style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0) != 0))
				{
					painter->setLineWidth((style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0) / glySc);
					painter->strokePath();
				}
			}
			painter->setFillRule(fr);
			painter->restore();
		}
		if (style.effects() & ScStyle_Strikethrough)
		{
			double st, lw;
			if ((style.strikethruOffset() != -1) || (style.strikethruWidth() != -1))
			{
				if (style.strikethruOffset() != -1)
					st = (style.strikethruOffset() / 1000.0) * (style.font().ascent(style.fontSize() / 10.0));
				else
					st = style.font().strikeoutPos(style.fontSize() / 10.0);
				if (style.strikethruWidth() != -1)
					lw = (style.strikethruWidth() / 1000.0) * (style.fontSize() / 10.0);
				else
					lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			else
			{
				st = style.font().strikeoutPos(style.fontSize() / 10.0);
				lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			if (style.baselineOffset() != 0)
				st += (style.fontSize() / 10.0) * glyphs.scaleV * (style.baselineOffset() / 1000.0);
			painter->setPen(painter->brush());
			painter->setLineWidth(lw);
			painter->drawLine(FPoint(glyphs.xoffset, glyphs.yoffset - st), FPoint(glyphs.xoffset + glyphs.xadvance, glyphs.yoffset - st));
		}
	}
	/*else
	{
		painter->setLineWidth(1);
		painter->setPen(ScColorShade(Qt::red, 100));
		painter->setBrush(ScColorShade(Qt::red, 100));
		painter->setFillMode(1);
		painter->drawRect(glyphs.xoffset, glyphs.yoffset - (style.fontSize() / 10.0) * glyphs.scaleV , (style.fontSize() / 10.0) * glyphs.scaleH, (style.fontSize() / 10.0) * glyphs.scaleV);
	}*/
	if (glyphs.more)
	{
		painter->translate(glyphs.xadvance, 0);
		drawGlyphs(item, painter, style, *glyphs.more, clip);
	}
}

void ScPageOutput::drawItem_Embedded( PageItem* item, ScPainterExBase *p, const QRect& clip, const CharStyle& style, PageItem* cembedded)
{
	if (!cembedded)
		return;
	QList<PageItem*> emG;
	emG.append(cembedded);
	for (int em = 0; em < emG.count(); ++em)
	{
		PageItem* embedded = emG.at(em);
		p->save();
		double x = embedded->xPos();
		double y = embedded->yPos();
		embedded->setXPos( embedded->gXpos, true );
		embedded->setYPos((embedded->gHeight * (style.scaleV() / 1000.0)) + embedded->gYpos, true );
		p->translate((embedded->gXpos * (style.scaleH() / 1000.0)), ( - (embedded->gHeight * (style.scaleV() / 1000.0)) + embedded->gYpos * (style.scaleV() / 1000.0)));
		if (style.baselineOffset() != 0)
		{
			p->translate(0, -embedded->gHeight * (style.baselineOffset() / 1000.0));
			embedded->setYPos( embedded->yPos() - embedded->gHeight * (style.baselineOffset() / 1000.0) );
		}
		p->scale(style.scaleH() / 1000.0, style.scaleV() / 1000.0);
		double pws = embedded->m_lineWidth;
		drawItem_Pre(embedded, p);
		switch(embedded->itemType())
		{
			case PageItem::ImageFrame:
			case PageItem::LatexFrame:
			case PageItem::TextFrame:
			case PageItem::Polygon:
			case PageItem::PathText:
			case PageItem::Symbol:
			case PageItem::Group:
			case PageItem::RegularPolygon:
			case PageItem::Arc:
				drawItem(embedded, p, clip);
				break;
			case PageItem::Line:
			case PageItem::PolyLine:
				embedded->m_lineWidth = pws * qMin(style.scaleH() / 1000.0, style.scaleV() / 1000.0);
				drawItem(embedded, p, clip);
				break;
			default:
				break;
		}
		embedded->m_lineWidth = pws * qMin(style.scaleH() / 1000.0, style.scaleV() / 1000.0);
		drawItem_Post(embedded, p);
		embedded->setXPos(x, true);
		embedded->setYPos(y, true);
		p->restore();
		embedded->m_lineWidth = pws;
	}
}

void ScPageOutput::drawPattern( PageItem* item, ScPainterExBase* painter, const QRect& clip)
{
	double x1, x2, y1, y2;
	ScPattern& pattern = m_doc->docPatterns[item->pattern()];
	double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY;
	item->patternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation, patternSkewX, patternSkewY);

	// Compute pattern tansformation matrix and its inverse for converting pattern coordinates
	// to pageitem coordinates 
	QTransform matrix, invMat;
	matrix.translate(patternOffsetX, patternOffsetY);
	matrix.rotate(patternRotation);
	matrix.shear(patternSkewX, patternSkewY);
	matrix.scale(pattern.scaleX, pattern.scaleY);
	matrix.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
	invMat.scale((patternScaleX != 0) ? (100 /patternScaleX) : 1.0, (patternScaleY != 0) ? (100 /patternScaleY) : 1.0);
	invMat.scale((pattern.scaleX != 0) ? (1 /pattern.scaleX) : 1.0, (pattern.scaleY != 0) ? (1 /pattern.scaleY) : 1.0);
	invMat.rotate(-patternRotation);
	invMat.translate(-patternOffsetX, -patternOffsetY);

	// Compute bounding box in which pattern item will be drawn
	double width  = item->width();
	double height = item->height();
	double rot    = patternRotation - floor(patternRotation / 90) * 90;
	double ctheta = cos(rot * M_PI / 180);
	double stheta = sin(rot * M_PI / 180);
	QRectF  itemRect(0.0, 0.0, item->width(), item->height());
	QPointF pa( width * stheta * stheta, -width * stheta * ctheta );
	QPointF pb( width + height * ctheta * stheta, height * stheta * stheta );
	QPointF pc( -height * ctheta * stheta, height * ctheta * ctheta );
	QPointF pd( width * ctheta * ctheta, height + width * ctheta * stheta );
	QPointF ipa = invMat.map(pa), ipb = invMat.map(pb);
	QPointF ipc = invMat.map(pc), ipd = invMat.map(pd);

	painter->save();
	if (item->imageClip.size() != 0)
	{
		painter->setupPolygon(&item->imageClip);
		painter->setClipPath();
	}
	painter->setupPolygon(&item->PoLine);
	painter->setClipPath();
	for (int index = 0; index < pattern.items.count(); index++)
	{
		QRectF itRect;
		PageItem* it = pattern.items.at(index);

		painter->save();
		painter->translate(patternOffsetX, patternOffsetY);
		painter->rotate(patternRotation);
		painter->scale(pattern.scaleX, pattern.scaleY);
		painter->scale(patternScaleX / 100.0, patternScaleY / 100.0);

		double patWidth  = (pattern.width != 0.0) ? pattern.width : 1.0;
		double patHeight = (pattern.height != 0.0) ? pattern.height : 1.0;
		double kxa = (ipa.x() - it->gXpos) / patWidth;
		double kxb = (ipb.x() - it->gXpos) / patWidth;
		double kxc = (ipc.x() - it->gXpos) / patWidth;
		double kxd = (ipd.x() - it->gXpos) / patWidth;
		double kya = (ipa.y() - it->gYpos) / patHeight;
		double kyb = (ipb.y() - it->gYpos) / patHeight;
		double kyc = (ipc.y() - it->gYpos) / patHeight;
		double kyd = (ipd.y() - it->gYpos) / patHeight;
		int kxMin  = (int) floor( qMin(qMin(kxa, kxb), qMin(kxc, kxd)) );
		int kxMax  = (int) ceil ( qMax(qMax(kxa, kxb), qMax(kxc, kxd)) );
		int kyMin  = (int) floor( qMin(qMin(kya, kyb), qMin(kyc, kyd)) );
		int kyMax  = (int) ceil ( qMax(qMax(kya, kyb), qMax(kyc, kyd)) );

		double itx = it->xPos();
		double ity = it->yPos();
		double itPosX = it->gXpos, itPosY = it->gYpos;
		for ( int kx = kxMin; kx <= kxMax; kx++ )
		{
			for ( int ky = kyMin; ky <= kyMax; ky++ )
			{
				itPosX = it->gXpos + kx * pattern.width;
				itPosY = it->gYpos + ky * pattern.height;
				it->setXYPos(itPosX, itPosY);
				it->getBoundingRect(&x1, &y1, &x2, &y2);
				itRect.setCoords(x1, y1, x2, y2);
				itRect = matrix.mapRect( itRect );
				if ( itRect.intersects(itemRect) )
					drawItem(it, painter, clip);
			}
		}
		it->setXYPos(itx, ity);
		painter->restore();
	}
	painter->restore();
}

void ScPageOutput::drawStrokePattern(PageItem* item, ScPainterExBase* painter, const QPainterPath& path)
{

}

void ScPageOutput::drawItem_Arc ( PageItem_Arc* item , ScPainterExBase* painter, const QRect& clip )
{
	painter->setupPolygon(&item->PoLine);
	fillPath(item, painter, clip);
}

void ScPageOutput::drawItem_Group( PageItem_Group* item, ScPainterExBase* painter, const QRect& clip )
{
	if (item->groupItemList.isEmpty())
		return;

	painter->save();
	if (item->imageFlippedH())
	{
		painter->translate(item->width(), 0);
		painter->scale(-1, 1);
	}
	if (item->imageFlippedV())
	{
		painter->translate(0, item->height());
		painter->scale(1, -1);
	}
	/*if ((maskType() == 1) || (maskType() == 2) || (maskType() == 4) || (maskType() == 5))
	{
		if ((maskType() == 1) || (maskType() == 2))
			painter->setMaskMode(1);
		else
			painter->setMaskMode(3);
		if ((!gradientMask().isEmpty()) && (!m_Doc->docGradients.contains(gradientMask())))
			gradientMaskVal = "";
		if (!(gradientMask().isEmpty()) && (m_Doc->docGradients.contains(gradientMask())))
			mask_gradient = m_Doc->docGradients[gradientMask()];
		painter->mask_gradient = mask_gradient;
		if ((maskType() == 1) || (maskType() == 4))
			painter->setGradientMask(VGradient::linear, FPoint(GrMaskStartX, GrMaskStartY), FPoint(GrMaskEndX, GrMaskEndY), FPoint(GrMaskStartX, GrMaskStartY), GrMaskScale, GrMaskSkew);
		else
			painter->setGradientMask(VGradient::radial, FPoint(GrMaskStartX, GrMaskStartY), FPoint(GrMaskEndX, GrMaskEndY), FPoint(GrMaskFocalX, GrMaskFocalY), GrMaskScale, GrMaskSkew);
	}
	else if ((maskType() == 3) || (maskType() == 6) || (maskType() == 7) || (maskType() == 8))
	{
		if ((patternMask().isEmpty()) || (!m_Doc->docPatterns.contains(patternMask())))
			painter->setMaskMode(0);
		else
		{
			double scw = Width / groupWidth;
			double sch = Height / groupHeight;
			painter->setPatternMask(&m_Doc->docPatterns[patternMask()], patternMaskScaleX * scw, patternMaskScaleY * sch, patternMaskOffsetX, patternMaskOffsetY, patternMaskRotation, patternMaskSkewX, patternMaskSkewY, patternMaskMirrorX, patternMaskMirrorY);
			if (maskType() == 3)
				painter->setMaskMode(2);
			else if (maskType() == 6)
				painter->setMaskMode(4);
			else if (maskType() == 7)
				painter->setMaskMode(5);
			else
				painter->setMaskMode(6);
		}
	}
	else*/
		painter->setMaskMode(0);
	painter->setFillRule(item->fillRule);
	//painter->beginLayer(1.0 - fillTransparency(), fillBlendmode(), &PoLine);
	painter->setMaskMode(0);
	painter->scale(item->width() / item->groupWidth, item->height() / item->groupHeight);
	for (int em = 0; em < item->groupItemList.count(); ++em)
	{
		PageItem* embedded = item->groupItemList.at(em);
		painter->save();
		painter->translate(embedded->gXpos, embedded->gYpos);
		embedded->isEmbedded = true;
		embedded->invalidateLayout();
		drawItem(embedded, painter, QRect());
		embedded->isEmbedded = false;
		painter->restore();
	}
	//painter->endLayer();
	painter->restore();
}

void ScPageOutput::drawItem_ImageFrame( PageItem_ImageFrame* item, ScPainterExBase* painter, const QRect& clip  )
{
	ScPainterExBase::ImageMode mode = ScPainterExBase::rgbImages;
	if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
	{
		painter->setupPolygon(&item->PoLine);
		fillPath(item, painter, clip);
	}
	if (item->Pfile.isEmpty())
	{
		/*painter->setPen( ScColorShade(Qt::black, 100), 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
		painter->drawLine(FPoint(0, 0), FPoint(item->width(), item->height()));
		painter->drawLine(FPoint(0, item->height()), FPoint(item->width(), 0));*/
	}
	else
	{
		if ((!item->imageShown()) || (!item->PictureIsAvailable))
		{
			/*painter->setPen( ScColorShade(Qt::red, 100), 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			painter->drawLine(FPoint(0, 0), FPoint(item->width(), item->height()));
			painter->drawLine(FPoint(0, item->height()), FPoint(item->width(), 0));*/
		}
		else
		{
			ScImage scImg;
			ScImage* pImage = NULL;
			double imScaleX = item->imageXScale();
			double imScaleY = item->imageYScale();
			if( m_reloadImages )
			{
				bool dummy;
				bool useCmyk = false;
				ScPainterExBase::ImageMode imageMode = painter->imageMode();
				if ( imageMode == ScPainterExBase::cmykImages )
					useCmyk = true;
				QFileInfo fInfo(item->Pfile);
				QString ext = fInfo.suffix();
				CMSettings cmsSettings(item->doc(), item->IProfile, item->IRender);
				cmsSettings.allowColorManagement(m_useProfiles);
				cmsSettings.setUseEmbeddedProfile(item->UseEmbedded);
				scImg.imgInfo.valid = false;
				scImg.imgInfo.clipPath = "";
				scImg.imgInfo.PDSpathData.clear();
				scImg.imgInfo.layerInfo.clear();
				scImg.imgInfo.RequestProps = item->pixm.imgInfo.RequestProps;
				scImg.imgInfo.isRequest = item->pixm.imgInfo.isRequest;
				scImg.loadPicture(item->Pfile, item->pixm.imgInfo.actualPageNumber, cmsSettings, translateImageModeToRequest(imageMode), m_imageRes, &dummy);
				if( extensionIndicatesEPSorPS(ext) || extensionIndicatesPDF(ext)  )
				{
					imScaleX *= (72.0 / (double) m_imageRes);
					imScaleY *= (72.0 / (double) m_imageRes);
				}
				scImg.applyEffect(item->effectsInUse, m_doc->PageColors, useCmyk);
				mode = imageMode;
				pImage = &scImg;
			}
			else
				pImage = &item->pixm;

			painter->save();
			if (item->imageClip.size() != 0)
			{
				painter->setupPolygon(&item->imageClip);
				painter->setClipPath();
			}
			painter->setupPolygon(&item->PoLine);
			painter->setClipPath();
			if (item->imageFlippedH())
			{
				painter->translate(item->width(), 0);
				painter->scale(-1, 1);
			}
			if (item->imageFlippedV())
			{
				painter->translate(0, item->height());
				painter->scale(1, -1);
			}
			painter->translate(item->imageXOffset() * item->imageXScale(), item->imageYOffset() * item->imageYScale());
			//painter->translate(item->LocalX * imScaleX * scale, item->LocalY * imScaleY * scale); ??
			painter->scale( imScaleX, imScaleY );
			if (pImage->imgInfo.lowResType != 0)
				painter->scale(pImage->imgInfo.lowResScale, pImage->imgInfo.lowResScale);
			painter->drawImage(pImage, mode);
			painter->restore();
		}
	}
}

void ScPageOutput::drawItem_Line( PageItem_Line* item, ScPainterExBase* painter, const QRect& clip )
{
	if (item->PoLine.size() < 4)
		return;

	int startArrowIndex = item->startArrowIndex();
	int endArrowIndex = item->endArrowIndex();

	if (item->NamedLStyle.isEmpty())
	{
		QString patternStrokeVal = item->strokePattern();
		if ((!patternStrokeVal.isEmpty()) && (m_doc->docPatterns.contains(patternStrokeVal)))
		{
			if (item->patternStrokePath)
			{
				QPainterPath guidePath = item->PoLine.toQPainterPath(false);
				guidePath.moveTo(0, 0);
				guidePath.lineTo(item->width(), 0);
				drawStrokePattern(item, painter, guidePath);
			}
			else
			{
				painter->setPattern(&m_doc->docPatterns[patternStrokeVal], item->patternStrokeScaleX, item->patternStrokeScaleY, item->patternStrokeOffsetX, item->patternStrokeOffsetY, item->patternStrokeRotation, item->patternStrokeSkewX, item->patternStrokeSkewY, item->patternStrokeMirrorX, item->patternStrokeMirrorY);
				painter->setStrokeMode(ScPainterExBase::Pattern);
				painter->strokePath();
			}
		}
		else if (item->strokeGradientType() > 0)
		{
			QString gradientStrokeVal = item->strokeGradient();
			if ((!gradientStrokeVal.isEmpty()) && (!m_doc->docGradients.contains(gradientStrokeVal)))
				gradientStrokeVal = "";
			if (!(gradientStrokeVal.isEmpty()) && (m_doc->docGradients.contains(gradientStrokeVal)))
				painter->m_strokeGradient = VGradientEx(m_doc->docGradients[gradientStrokeVal], *m_doc);
			if (painter->m_strokeGradient.Stops() < 2) // fall back to solid stroking if there are not enough colorstops in the gradient.
			{
				if (item->lineColor() != CommonStrings::None)
				{
					ScColorShade strokeColor(m_doc->PageColors[item->lineColor()], item->lineShade());
					painter->setBrush(strokeColor);
					painter->setStrokeMode(ScPainterExBase::Solid);
				}
				else
					painter->setStrokeMode(ScPainterExBase::None);
			}
			else
			{
				FPoint fpStart(item->GrStrokeStartX, item->GrStrokeStartY);
				FPoint fpEnd(item->GrStrokeEndX, item->GrStrokeEndY);
				FPoint fpFocal(item->GrStrokeFocalX, item->GrStrokeFocalY);
				painter->setStrokeMode(ScPainterExBase::Gradient);
				painter->m_strokeGradient = VGradientEx(item->stroke_gradient, *m_doc);
				if (item->GrTypeStroke == 6)
					painter->setGradient(VGradientEx::linear, fpStart, fpEnd, fpStart, item->GrStrokeScale, item->GrStrokeSkew);
				else
					painter->setGradient(VGradientEx::radial, fpStart, fpEnd, fpFocal, item->GrStrokeScale, item->GrStrokeSkew);
			}
			painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
		}
		else if (item->lineColor() != CommonStrings::None)
		{
			ScColorShade scColor(m_doc->PageColors[item->lineColor()], item->lineShade());
			painter->setStrokeMode(ScPainterExBase::Solid);
			painter->setPen(scColor, item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
			if (item->DashValues.count() != 0)
				painter->setDash(item->DashValues, item->DashOffset);
			painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
		}
	}
	else
	{
		painter->setStrokeMode(ScPainterExBase::Solid);
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			const SingleLine& sl = ml[it];
			if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
			{
				ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
				painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
						static_cast<Qt::PenCapStyle>(sl.LineEnd),
						static_cast<Qt::PenJoinStyle>(sl.LineJoin));
				painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
			}
		}
	}
	if (startArrowIndex != 0)
	{
		QTransform arrowTrans;
		arrowTrans.translate(0, 0);
		arrowTrans.scale(-1,1);
		drawArrow(painter, item, arrowTrans, startArrowIndex);
	}
	if (endArrowIndex != 0)
	{
		QTransform arrowTrans;
		arrowTrans.translate(item->width(), 0);
		drawArrow(painter, item, arrowTrans, endArrowIndex);
	}
}

void ScPageOutput::drawItem_PathText( PageItem_PathText* item, ScPainterExBase* painter, const QRect& clip )
{
	QString chstr;
	//ScText *hl;
	FPoint point = FPoint(0, 0);
	FPoint tangent = FPoint(0, 0);
	double CurX = item->textToFrameDistLeft(); // item->CurX = item->textToFrameDistLeft()
	QString actFill, actStroke;
	double actFillShade, actStrokeShade, dx;
	StoryText& itemText = item->itemText;
	if (item->pathTextShowFrame())
	{
		painter->setupPolygon(&item->PoLine, false);
		if (item->NamedLStyle.isEmpty())
		{
			if (item->lineColor() != CommonStrings::None)
				painter->strokePath();
		}
		else
		{
			multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
			for (int it = ml.size() - 1; it > -1; it--)
			{
				const SingleLine& sl = ml[it];
				if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
				{
					ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
					painter->setPen(tmp, sl.Width,  static_cast<Qt::PenStyle>(sl.Dash), 
							 static_cast<Qt::PenCapStyle>(sl.LineEnd), 
							 static_cast<Qt::PenJoinStyle>(sl.LineJoin));
					painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
				}
			}
		}
	}
	double totalTextLen = 0.0;
	double totalCurveLen = 0.0;
	double extraOffset = 0.0;
	if (itemText.length() != 0)
	{
        CurX += itemText.charStyle(0).fontSize() * itemText.charStyle(0).tracking() / 10000.0;
		totalTextLen += itemText.charStyle(0).fontSize() * itemText.charStyle(0).tracking() / 10000.0;
	}
	for (int a = 0; a < itemText.length(); ++a)
	{
        GlyphLayout* glyphs = itemText.getGlyphs(a);
        chstr =itemText.text(a,1);
		if (chstr[0] == SpecialChars::PAGENUMBER || chstr[0] == SpecialChars::PARSEP || chstr[0] == SpecialChars::PAGECOUNT
			|| chstr[0] == SpecialChars::TAB || chstr == SpecialChars::LINEBREAK)
			continue;
		if (a < itemText.length()-1)
			chstr += itemText.text(a+1, 1);
        glyphs->yadvance = 0;
        item->layoutGlyphs(itemText.charStyle(a), chstr, itemText.flags(a), *glyphs);
        glyphs->shrink();
        if (item->itemText.hasObject(a))
            totalTextLen += (item->itemText.object(a)->width() + item->itemText.object(a)->lineWidth()) * glyphs->scaleH;
		else
            totalTextLen += glyphs->wide()+itemText.charStyle(a).fontSize() * itemText.charStyle(a).tracking() / 10000.0;
	}
	for (int segs = 0; segs < item->PoLine.size()-3; segs += 4)
	{
		totalCurveLen += item->PoLine.lenPathSeg(segs);
	}
	if ((itemText.defaultStyle().alignment() != 0) && (totalCurveLen >= totalTextLen + item->textToFrameDistLeft()))
	{
		if (itemText.defaultStyle().alignment() == 2)
		{
			CurX = totalCurveLen  - totalTextLen;
			CurX -= item->textToFrameDistLeft();
		}
		if (itemText.defaultStyle().alignment() == 1)
			CurX = (totalCurveLen - totalTextLen) / 2.0;
		if ((itemText.defaultStyle().alignment() == 3) || (itemText.defaultStyle().alignment() == 4))
			extraOffset = (totalCurveLen - item->textToFrameDistLeft()  - totalTextLen) / static_cast<double>(itemText.length());
	}

	QPainterPath guidePath = item->PoLine.toQPainterPath(false);
	QList<QPainterPath> pathList = decomposePath(guidePath);
	QPainterPath currPath = pathList[0];
	int currPathIndex = 0;
	for (int a = item->firstInFrame(); a < itemText.length(); ++a)
	{
        GlyphLayout* glyphs = itemText.getGlyphs(a);
        PathData* pdata = &(item->textLayout.point(a));
        
        chstr = itemText.text(a,1);
		if (chstr[0] == SpecialChars::PAGENUMBER || chstr[0] == SpecialChars::PARSEP || chstr[0] == SpecialChars::PAGECOUNT
			|| chstr[0] == SpecialChars::TAB || chstr[0] == SpecialChars::LINEBREAK)
			continue;
		if (a < itemText.length()-1)
			chstr += itemText.text(a+1, 1);
        glyphs->yadvance = 0;
        item->layoutGlyphs(itemText.charStyle(a), chstr, itemText.flags(a), *glyphs);
        glyphs->shrink();                                                           // HACK
		// Unneeded now that glyph xadvance is set appropriately for inline objects by PageItem_TextFrame::layout() - JG
		/*if (hl->hasObject())
			dx = (hl->embedded.getItem()->gWidth + hl->embedded.getItem()->lineWidth()) * hl->glyph.scaleH / 2.0;
		else*/
        dx = glyphs->wide() / 2.0;

		CurX += dx;

		double currPerc = currPath.percentAtLength(CurX);
		if (currPerc >= 0.9999999)
		{
			currPathIndex++;
			if (currPathIndex == pathList.count())
				break;
			currPath = pathList[currPathIndex];
			CurX = dx;
			currPerc = currPath.percentAtLength(CurX);
		}
		double currAngle = currPath.angleAtPercent(currPerc);
		if (currAngle <= 180.0)
			currAngle *= -1.0;
		else
			currAngle = 360.0 - currAngle;
		QPointF currPoint = currPath.pointAtPercent(currPerc);
		tangent = FPoint(cos(currAngle * M_PI / 180.0), sin(currAngle * M_PI / 180.0));
		point = FPoint(currPoint.x(), currPoint.y());

        //hl = itemText.item_p(a);
        glyphs->xoffset = 0;
		pdata->PtransX = point.x();
		pdata->PtransY = point.y();
		pdata->PRot    = currAngle * M_PI / 180.0;
		pdata->PDx     = dx;
		QTransform trafo = QTransform( 1, 0, 0, -1, -dx, 0 );
		if (item->textPathFlipped)
			trafo *= QTransform(1, 0, 0, -1, 0, 0);
		if (item->textPathType == 0)
			trafo *= QTransform( tangent.x(), tangent.y(), tangent.y(), -tangent.x(), point.x(), point.y() ); // ID's Rainbow mode
		else if (item->textPathType == 1)
			trafo *= QTransform( 1, 0, 0, -1, point.x(), point.y() ); // ID's Stair Step mode
		else if (item->textPathType == 2)
		{
			double a = 1;
			if (tangent.x() < 0)
				a = -1;
			if (fabs(tangent.x()) > 0.1)
				trafo *= QTransform( a, (tangent.y() / tangent.x()) * a, 0, -1, point.x(), point.y() ); // ID's Skew mode
			else
				trafo *= QTransform( a, 4 * a, 0, -1, point.x(), point.y() );
		}
		QTransform sca = painter->worldMatrix();
		trafo *= sca;
		painter->save();
		QTransform savWM = painter->worldMatrix();
		painter->setWorldMatrix(trafo);

		actFill = itemText.charStyle(a).fillColor();
		actFillShade = itemText.charStyle(a).fillShade();
		if (actFill != CommonStrings::None)
		{
			ScColorShade tmp(m_doc->PageColors[actFill], qRound(actFillShade));
			painter->setBrush(tmp);
		}
		actStroke = itemText.charStyle(a).strokeColor();
		actStrokeShade = itemText.charStyle(a).strokeShade();
		if (actStroke != CommonStrings::None)
		{
			ScColorShade tmp(m_doc->PageColors[actStroke], qRound(actStrokeShade));
			painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
		}
		painter->translate(0.0, item->pathTextBaseOffset());
        if (itemText.hasObject(a))
            drawItem_Embedded(itemText.object(a), painter, clip, itemText.charStyle(a), itemText.object(a));
		else
            drawGlyphs(item, painter, itemText.charStyle(a), *glyphs, clip);

		painter->setWorldMatrix(savWM);
		painter->restore();
		CurX -= dx;
        if (itemText.hasObject(a))
            CurX += (itemText.object(a)->width() + itemText.object(a)->lineWidth()) * glyphs->scaleH;
		else
            CurX += glyphs->wide()+itemText.charStyle(a).fontSize() * itemText.charStyle(a).tracking() / 10000.0 + extraOffset;
	}
}

void ScPageOutput::drawItem_Polygon ( PageItem_Polygon* item , ScPainterExBase* painter, const QRect& clip )
{
	painter->setupPolygon(&item->PoLine);
	fillPath(item, painter, clip);
}

void ScPageOutput::drawItem_PolyLine( PageItem_PolyLine* item, ScPainterExBase* painter, const QRect& clip )
{
	if (item->PoLine.size() < 4)
		return;

	int startArrowIndex = item->startArrowIndex();
	int endArrowIndex = item->endArrowIndex();

	if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
	{
		FPointArray cli;
		FPoint Start;
		bool firstp = true;
		for (int n = 0; n < item->PoLine.size()-3; n += 4)
		{
			if (firstp)
			{
				Start = item->PoLine.point(n);
				firstp = false;
			}
			if (item->PoLine.isMarker(n))
			{
				cli.addPoint(item->PoLine.point(n-2));
				cli.addPoint(item->PoLine.point(n-2));
				cli.addPoint(Start);
				cli.addPoint(Start);
				cli.setMarker();
				firstp = true;
				continue;
			}
			cli.addPoint(item->PoLine.point(n));
			cli.addPoint(item->PoLine.point(n+1));
			cli.addPoint(item->PoLine.point(n+2));
			cli.addPoint(item->PoLine.point(n+3));
		}
		if (cli.size() > 2)
		{
			FPoint l1 = cli.point(cli.size()-2);
			cli.addPoint(l1);
			cli.addPoint(l1);
			cli.addPoint(Start);
			cli.addPoint(Start);
		}
		painter->setupPolygon(&cli);
		fillPath(item, painter, clip);
	}
	painter->setupPolygon(&item->PoLine, false);
	if (item->NamedLStyle.isEmpty())
	{
		QString patternStrokeVal = item->strokePattern();
		if ((!patternStrokeVal.isEmpty()) && (m_doc->docPatterns.contains(patternStrokeVal)))
		{
			if (item->patternStrokePath)
			{
				QPainterPath guidePath = item->PoLine.toQPainterPath(false);
				guidePath.moveTo(0, 0);
				guidePath.lineTo(item->width(), 0);
				drawStrokePattern(item, painter, guidePath);
			}
			else
			{
				painter->setPattern(&m_doc->docPatterns[patternStrokeVal], item->patternStrokeScaleX, item->patternStrokeScaleY, item->patternStrokeOffsetX, item->patternStrokeOffsetY, item->patternStrokeRotation, item->patternStrokeSkewX, item->patternStrokeSkewY, item->patternStrokeMirrorX, item->patternStrokeMirrorY);
				painter->setStrokeMode(ScPainterExBase::Pattern);
				painter->strokePath();
			}
		}
		else if (item->strokeGradientType() > 0)
		{
			QString gradientStrokeVal = item->strokeGradient();
			if ((!gradientStrokeVal.isEmpty()) && (!m_doc->docGradients.contains(gradientStrokeVal)))
				gradientStrokeVal = "";
			if (!(gradientStrokeVal.isEmpty()) && (m_doc->docGradients.contains(gradientStrokeVal)))
				painter->m_strokeGradient = VGradientEx(m_doc->docGradients[gradientStrokeVal], *m_doc);
			if (painter->m_strokeGradient.Stops() < 2) // fall back to solid stroking if there are not enough colorstops in the gradient.
			{
				if (item->lineColor() != CommonStrings::None)
				{
					ScColorShade strokeColor(m_doc->PageColors[item->lineColor()], item->lineShade());
					painter->setBrush(strokeColor);
					painter->setStrokeMode(ScPainterExBase::Solid);
				}
				else
					painter->setStrokeMode(ScPainterExBase::None);
			}
			else
			{
				FPoint fpStart(item->GrStrokeStartX, item->GrStrokeStartY);
				FPoint fpEnd(item->GrStrokeEndX, item->GrStrokeEndY);
				FPoint fpFocal(item->GrStrokeFocalX, item->GrStrokeFocalY);
				painter->setStrokeMode(ScPainterExBase::Gradient);
				painter->m_strokeGradient = VGradientEx(item->stroke_gradient, *m_doc);
				if (item->GrTypeStroke == 6)
					painter->setGradient(VGradientEx::linear, fpStart, fpEnd, fpStart, item->GrStrokeScale, item->GrStrokeSkew);
				else
					painter->setGradient(VGradientEx::radial, fpStart, fpEnd, fpFocal, item->GrStrokeScale, item->GrStrokeSkew);
			}
			painter->strokePath();
		}
		else if (item->lineColor() != CommonStrings::None)
		{
			ScColorShade scColor(m_doc->PageColors[item->lineColor()], item->lineShade());
			painter->setStrokeMode(ScPainterExBase::Solid);
			painter->setPen(scColor, item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
			if (item->DashValues.count() != 0)
				painter->setDash(item->DashValues, item->DashOffset);
			painter->strokePath();
		}
	}
	else
	{
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			const SingleLine& sl = ml[it];
			if (sl.Color != CommonStrings::None)
			{
				ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
				painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
						static_cast<Qt::PenCapStyle>(sl.LineEnd),
						static_cast<Qt::PenJoinStyle>(sl.LineJoin));
				painter->strokePath();
			}
		}
	}
	if (startArrowIndex != 0)
	{
		FPoint Start = item->PoLine.point(0);
		for (int xx = 1; xx < item->PoLine.size(); xx += 2)
		{
			FPoint Vector = item->PoLine.point(xx);
			if ((Start.x() != Vector.x()) || (Start.y() != Vector.y()))
			{
				double r = atan2(Start.y()-Vector.y(),Start.x()-Vector.x())*(180.0/M_PI);
				QTransform arrowTrans;
				arrowTrans.translate(Start.x(), Start.y());
				arrowTrans.rotate(r);
				drawArrow(painter, item, arrowTrans, startArrowIndex);
				break;
			}
		}
	}
	if (endArrowIndex != 0)
	{
		FPoint End = item->PoLine.point(item->PoLine.size()-2);
		for (uint xx = item->PoLine.size()-1; xx > 0; xx -= 2)
		{
			FPoint Vector = item->PoLine.point(xx);
			if ((End.x() != Vector.x()) || (End.y() != Vector.y()))
			{
				double r = atan2(End.y()-Vector.y(),End.x()-Vector.x())*(180.0/M_PI);
				QTransform arrowTrans;
				arrowTrans.translate(End.x(), End.y());
				arrowTrans.rotate(r);
				drawArrow(painter, item, arrowTrans, endArrowIndex);
				break;
			}
		}
	}
}

void ScPageOutput::drawItem_RegularPolygon( PageItem_RegularPolygon* item, ScPainterExBase* painter, const QRect& clip )
{
	painter->setupPolygon(&item->PoLine);
	painter->fillPath();
}

void ScPageOutput::drawItem_Spiral( PageItem_Spiral* item, ScPainterExBase* painter, const QRect& clip )
{
	if (item->PoLine.size() < 4)
		return;

	int startArrowIndex = item->startArrowIndex();
	int endArrowIndex = item->endArrowIndex();

	if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
	{
		FPointArray cli;
		FPoint Start;
		bool firstp = true;
		for (int n = 0; n < item->PoLine.size()-3; n += 4)
		{
			if (firstp)
			{
				Start = item->PoLine.point(n);
				firstp = false;
			}
			if (item->PoLine.isMarker(n))
			{
				cli.addPoint(item->PoLine.point(n-2));
				cli.addPoint(item->PoLine.point(n-2));
				cli.addPoint(Start);
				cli.addPoint(Start);
				cli.setMarker();
				firstp = true;
				continue;
			}
			cli.addPoint(item->PoLine.point(n));
			cli.addPoint(item->PoLine.point(n+1));
			cli.addPoint(item->PoLine.point(n+2));
			cli.addPoint(item->PoLine.point(n+3));
		}
		if (cli.size() > 2)
		{
			FPoint l1 = cli.point(cli.size()-2);
			cli.addPoint(l1);
			cli.addPoint(l1);
			cli.addPoint(Start);
			cli.addPoint(Start);
		}
		painter->setupPolygon(&cli);
		fillPath(item, painter, clip);
	}
	painter->setupPolygon(&item->PoLine, false);
	if (item->NamedLStyle.isEmpty())
	{
		QString patternStrokeVal = item->strokePattern();
		if ((!patternStrokeVal.isEmpty()) && (m_doc->docPatterns.contains(patternStrokeVal)))
		{
			if (item->patternStrokePath)
			{
				QPainterPath guidePath = item->PoLine.toQPainterPath(false);
				guidePath.moveTo(0, 0);
				guidePath.lineTo(item->width(), 0);
				drawStrokePattern(item, painter, guidePath);
			}
			else
			{
				painter->setPattern(&m_doc->docPatterns[patternStrokeVal], item->patternStrokeScaleX, item->patternStrokeScaleY, item->patternStrokeOffsetX, item->patternStrokeOffsetY, item->patternStrokeRotation, item->patternStrokeSkewX, item->patternStrokeSkewY, item->patternStrokeMirrorX, item->patternStrokeMirrorY);
				painter->setStrokeMode(ScPainterExBase::Pattern);
				painter->strokePath();
			}
		}
		else if (item->strokeGradientType() > 0)
		{
			QString gradientStrokeVal = item->strokeGradient();
			if ((!gradientStrokeVal.isEmpty()) && (!m_doc->docGradients.contains(gradientStrokeVal)))
				gradientStrokeVal = "";
			if (!(gradientStrokeVal.isEmpty()) && (m_doc->docGradients.contains(gradientStrokeVal)))
				painter->m_strokeGradient = VGradientEx(m_doc->docGradients[gradientStrokeVal], *m_doc);
			if (painter->m_strokeGradient.Stops() < 2) // fall back to solid stroking if there are not enough colorstops in the gradient.
			{
				if (item->lineColor() != CommonStrings::None)
				{
					ScColorShade strokeColor(m_doc->PageColors[item->lineColor()], item->lineShade());
					painter->setBrush(strokeColor);
					painter->setStrokeMode(ScPainterExBase::Solid);
				}
				else
					painter->setStrokeMode(ScPainterExBase::None);
			}
			else
			{
				FPoint fpStart(item->GrStrokeStartX, item->GrStrokeStartY);
				FPoint fpEnd(item->GrStrokeEndX, item->GrStrokeEndY);
				FPoint fpFocal(item->GrStrokeFocalX, item->GrStrokeFocalY);
				painter->setStrokeMode(ScPainterExBase::Gradient);
				painter->m_strokeGradient = VGradientEx(item->stroke_gradient, *m_doc);
				if (item->GrTypeStroke == 6)
					painter->setGradient(VGradientEx::linear, fpStart, fpEnd, fpStart, item->GrStrokeScale, item->GrStrokeSkew);
				else
					painter->setGradient(VGradientEx::radial, fpStart, fpEnd, fpFocal, item->GrStrokeScale, item->GrStrokeSkew);
			}
			painter->strokePath();
		}
		else if (item->lineColor() != CommonStrings::None)
		{
			ScColorShade scColor(m_doc->PageColors[item->lineColor()], item->lineShade());
			painter->setStrokeMode(ScPainterExBase::Solid);
			painter->setPen(scColor, item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
			if (item->DashValues.count() != 0)
				painter->setDash(item->DashValues, item->DashOffset);
			painter->strokePath();
		}
	}
	else
	{
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			const SingleLine& sl = ml[it];
			if (sl.Color != CommonStrings::None)
			{
				ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
				painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
						static_cast<Qt::PenCapStyle>(sl.LineEnd),
						static_cast<Qt::PenJoinStyle>(sl.LineJoin));
				painter->strokePath();
			}
		}
	}
	if (startArrowIndex != 0)
	{
		FPoint Start = item->PoLine.point(0);
		for (int xx = 1; xx < item->PoLine.size(); xx += 2)
		{
			FPoint Vector = item->PoLine.point(xx);
			if ((Start.x() != Vector.x()) || (Start.y() != Vector.y()))
			{
				double r = atan2(Start.y()-Vector.y(),Start.x()-Vector.x())*(180.0/M_PI);
				QTransform arrowTrans;
				arrowTrans.translate(Start.x(), Start.y());
				arrowTrans.rotate(r);
				drawArrow(painter, item, arrowTrans, startArrowIndex);
				break;
			}
		}
	}
	if (endArrowIndex != 0)
	{
		FPoint End = item->PoLine.point(item->PoLine.size()-2);
		for (uint xx = item->PoLine.size()-1; xx > 0; xx -= 2)
		{
			FPoint Vector = item->PoLine.point(xx);
			if ((End.x() != Vector.x()) || (End.y() != Vector.y()))
			{
				double r = atan2(End.y()-Vector.y(),End.x()-Vector.x())*(180.0/M_PI);
				QTransform arrowTrans;
				arrowTrans.translate(End.x(), End.y());
				arrowTrans.rotate(r);
				drawArrow(painter, item, arrowTrans, endArrowIndex);
				break;
			}
		}
	}
}

void ScPageOutput::drawItem_TextFrame( PageItem_TextFrame* item, ScPainterExBase* painter, const QRect& clip )
{
	QTransform wm;
	QPoint pt1, pt2;
	FPoint ColBound;
	QRegion cm;
	int a;
	double desc, asce;
	
	QRect e2;
	painter->save();
	if (item->isEmbedded)
		e2 = clip;
	else
	{
		e2 = QRect(qRound(clip.x() + m_doc->minCanvasCoordinate.x()), qRound(clip.y() + m_doc->minCanvasCoordinate.y()), clip.width(), clip.height());
		wm.translate(item->xPos(), item->yPos());
	}
	wm.rotate(item->rotation());
	if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
	{
		painter->setupPolygon(&item->PoLine);
		fillPath(item, painter, clip);
	}
	if ((item->isAnnotation()) && (item->annotation().Type() == Annotation::Button) && (!item->Pfile.isEmpty()) && (item->PictureIsAvailable) && (item->imageShown()) && (item->annotation().UseIcons()))
	{
		painter->save();
		painter->setupPolygon(&item->PoLine);
		painter->setClipPath();
		painter->scale(item->imageXScale(), item->imageYScale());
		painter->translate(static_cast<int>(item->imageXOffset() * item->imageXScale()), static_cast<int>(item->imageYOffset()  * item->imageYScale()));
		if (!item->pixm.qImage().isNull())
			painter->drawImage(&item->pixm, ScPainterExBase::rgbImages);
		painter->restore();
	}
	if ((item->itemText.length() != 0))
	{
		if (item->imageFlippedH())
		{
			painter->translate(item->width(), 0);
			painter->scale(-1, 1);
		}
		if (item->imageFlippedV())
		{
			painter->translate(0, item->height());
			painter->scale(1, -1);
		}

		for (uint ll=0; ll < item->textLayout.lines(); ++ll)
		{
			LineSpec ls = item->textLayout.line(ll);
			double CurX = ls.x;
			for (a = ls.firstItem; a <= ls.lastItem; ++a)
			{
                GlyphLayout* glyphs = item->itemText.getGlyphs(a);
				const CharStyle& charStyle  = item->itemText.charStyle(a);

				if (charStyle.fillColor() != CommonStrings::None)
				{
                    ScColorShade tmp(m_doc->PageColors[charStyle.fillColor()], (int) charStyle.fillShade());
					painter->setBrush(tmp);
				}
				if (charStyle.strokeColor() != CommonStrings::None)
				{
                    ScColorShade tmp(m_doc->PageColors[charStyle.strokeColor()], (int) charStyle.strokeShade());
					painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				}

				//if (!m_doc->RePos)
				{
                    //double xcoZli = CurX + glyphs->xoffset;
					desc = - charStyle.font().descent(charStyle.fontSize() / 10.0);
					asce = charStyle.font().ascent(charStyle.fontSize() / 10.0);
					if (charStyle.strokeColor() != CommonStrings::None)
					{
						ScColorShade tmp(m_doc->PageColors[charStyle.strokeColor()], (int) charStyle.strokeShade());
						painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
					}
					if (e2.intersects(wm.mapRect(QRect(qRound(CurX + glyphs->xoffset),qRound(ls.y + glyphs->yoffset-asce), qRound(glyphs->xadvance+1), qRound(asce+desc)))))
					{
						painter->save();
						painter->translate(CurX, ls.y);
                        if (item->itemText.hasObject(a))
                            drawItem_Embedded(item, painter, clip, charStyle, item->itemText.object(a));
						else
                            drawGlyphs(item, painter, charStyle, *glyphs, clip);
						painter->restore();
					}
					// Unneeded now that glyph xadvance is set appropriately for inline objects by PageItem_TextFrame::layout() - JG
					/*if (hl->hasObject())
						CurX += (hl->embedded.getItem()->gWidth + hl->embedded.getItem()->lineWidth());
					else*/
                    CurX += glyphs->wide();
				}
			}
		}
	}
	painter->restore();
}

void ScPageOutput::drawArrow(ScPainterExBase* painter, PageItem* item, QTransform &arrowTrans, int arrowIndex)
{
	FPointArray arrow = m_doc->arrowStyles().at(arrowIndex-1).points.copy();
	if (item->NamedLStyle.isEmpty())
	{
		if (item->lineWidth() != 0.0)
			arrowTrans.scale(item->lineWidth(), item->lineWidth());
	}
	else
	{
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		if (ml[ml.size()-1].Width != 0.0)
			arrowTrans.scale(ml[ml.size()-1].Width, ml[ml.size()-1].Width);
	}
	arrow.map(arrowTrans);
	painter->setupPolygon(&arrow);
	if (item->NamedLStyle.isEmpty())
	{
		if (item->lineColor() != CommonStrings::None)
		{
			ScColorShade tmp(m_doc->PageColors[item->lineColor()], item->lineShade());
			painter->setBrush(tmp);
			painter->setBrushOpacity(1.0 - item->lineTransparency());
			painter->setLineWidth(0);
			painter->setFillMode(ScPainterExBase::Solid);
			painter->fillPath();
		}
	}
	else
	{
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		QColor tmp;
		if (ml[0].Color != CommonStrings::None)
		{
			ScColorShade tmp(m_doc->PageColors[ml[0].Color], ml[0].Shade);
			painter->setBrush(tmp);
			painter->setLineWidth(0);
			painter->setFillMode(ScPainterExBase::Solid);
			painter->fillPath();
		}
		for (int it = ml.size()-1; it > 0; it--)
		{
			if (ml[it].Color != CommonStrings::None)
			{
				ScColorShade tmp(m_doc->PageColors[ml[it].Color], ml[it].Shade);
				painter->setPen(tmp, ml[it].Width, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				painter->strokePath();
			}
		}
	}
}

void ScPageOutput::drawMarks( ScPage* page, ScPainterExBase* painter, const MarksOptions& options )
{
	double markLength = options.markLength;
	double markOffs   = options.markOffset;
	double bleedLeft = 0.0, bleedRight = 0.0;
	double bleedBottom = options.BleedBottom;
	double bleedTop = options.BleedTop;
	if (!options.cropMarks && !options.bleedMarks && !options.registrationMarks && !options.colorMarks)
		return;
	if (m_doc->locationOfPage(page->pageNr()) == LeftPage)
	{
		bleedRight = options.BleedRight;
		bleedLeft  = options.BleedLeft;
	}
	else if (m_doc->locationOfPage(page->pageNr()) == RightPage)
	{
		bleedRight = options.BleedLeft;
		bleedLeft  = options.BleedRight;
	}
	else
	{
		bleedRight = options.BleedLeft;
		bleedLeft  = options.BleedLeft;
	}
	double width = page->width();
	double height = page->height();
	double offsetX = page->xOffset();
	double offsetY = page->yOffset();
	QPointF bleedTopLeft(offsetX - bleedLeft, offsetY - bleedTop);
	QPointF bleedBottomRight(offsetX + width + bleedRight, offsetY + height + bleedBottom);
	QRectF  bleedBox(bleedTopLeft, bleedBottomRight);
	painter->save();
	painter->setLineWidth(0.5);
	painter->setPen(ScColorShade(Qt::black, 100), 0.5, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin );
	if (options.cropMarks)
	{
		FPoint start, end;
		double left = offsetX, right = offsetX + width;
		double bottom = offsetY + height, top = offsetY;
		drawBoxMarks( painter, QRectF(QPointF(left, top), QPointF(right, bottom)), bleedBox, markOffs, markLength);
	}
	if (options.bleedMarks)
	{
		FPoint start, end;
		double left = offsetX - bleedLeft, right = offsetX + width + bleedRight;
		double bottom = offsetY + height + bleedBottom, top = offsetY - bleedTop;;
		drawBoxMarks( painter, QRectF(QPointF(left, top), QPointF(right, bottom)), bleedBox, markOffs, markLength);
	}
	if (options.registrationMarks)
	{
		double posX = (2* offsetX + width) / 2.0 - 7.0;
		double posY = (offsetY + height + bleedBottom + markOffs + 3.0);
		painter->save();
		painter->translate(posX, posY);
		drawRegistrationCross( painter );
		painter->restore();
		posX = (2 * offsetX + width) / 2.0 - 7.0;
		posY = (offsetY - bleedTop - markOffs - 17);
		painter->save();
		painter->translate(posX, posY);
		drawRegistrationCross( painter );
		painter->restore();

		posX = (offsetX - bleedLeft - markOffs - 17);
		posY = (2 * offsetY + height) / 2.0 - 7.0;
		painter->save();
		painter->translate(posX, posY);
		drawRegistrationCross( painter );
		painter->restore();
		posX = (offsetX + width + bleedRight + markOffs + 3.0);
		posY = (2 * offsetY + height) / 2.0 - 7.0;
		painter->save();
		painter->translate(posX, posY);
		drawRegistrationCross( painter );
		painter->restore();
	}
	if (options.colorMarks)
	{
		int shade = 100;
		double startX = offsetX + 6.0;
		double startY = offsetY - bleedTop - markOffs - 16.0;
		ScColorShade strokecolor( ScColor(0, 0, 0, 255), 100 );
		painter->setPen( strokecolor, 0.5, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin );
		painter->setFillMode( ScPainterExBase::Solid );
		for (int i = 0; i < 11; i++ )
		{
			ScColorShade fillcolor( ScColor(0, 0, 0, 255), shade );
			painter->setBrush( fillcolor );
			painter->drawRect( startX + i * 14, startY, 14, 14 );
			shade -= 10;
		}
		startX = offsetX + width - 20.0;
		painter->setBrush( ScColorShade(ScColor(0, 0, 0, 255), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 0, 255, 0), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 255, 0, 0), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 0, 0, 0), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 255, 0, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 0, 255, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 255, 255, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 0, 0, 255), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 0, 255, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 255, 0, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 0, 0, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
	}
	painter->restore();
}

void ScPageOutput::drawBoxMarks( ScPainterExBase* painter, const QRectF& box, const QRectF& bleedBox, double offset , double markSize)
{
	FPoint start, end;
	double left   = box.left(), right = box.right();
	double bottom = box.bottom(), top = box.top();
	double bleedLeft = bleedBox.left(), bleedRight = bleedBox.right();
	double bleedBottom = bleedBox.bottom(), bleedTop = bleedBox.top();
	// Top Left
	start.setXY( bleedLeft - offset, top );
	end.setXY  ( bleedLeft - offset - markSize, top );
	painter->drawLine(start, end);
	start.setXY( left, bleedTop - offset );
	end.setXY  ( left, bleedTop - offset - markSize);
	painter->drawLine(start, end);
	// Top Right
	start.setXY( bleedRight + offset, top );
	end.setXY  ( bleedRight + offset + markSize, top );
	painter->drawLine(start, end);
	start.setXY( right, bleedTop - offset );
	end.setXY  ( right, bleedTop - offset - markSize);
	painter->drawLine(start, end);
	// Bottom Left
	start.setXY( bleedLeft - offset, bottom );
	end.setXY  ( bleedLeft - offset - markSize, bottom  );
	painter->drawLine(start, end);
	start.setXY( left, bleedBottom + offset );
	end.setXY  ( left, bleedBottom + offset + markSize);
	painter->drawLine(start, end);
	// Bottom Right
	start.setXY( bleedRight + offset, bottom );
	end.setXY  ( bleedRight + offset + markSize, bottom  );
	painter->drawLine(start, end);
	start.setXY( right, bleedBottom + offset );
	end.setXY  ( right, bleedBottom + offset + markSize);
	painter->drawLine(start, end);
}

void ScPageOutput::drawRegistrationCross( ScPainterExBase* painter )
{
	painter->save();

	painter->newPath();
	painter->moveTo(0.0, 7.0);
	painter->lineTo(14.0, 7.0);
	painter->strokePath();

	painter->newPath();
	painter->moveTo(7.0, 0.0);
	painter->lineTo(7.0, 14.0);
	painter->strokePath();

	painter->newPath();
	painter->moveTo(13.0, 7.0);
	painter->curveTo( FPoint(13.0, 10.31383), FPoint(10.31383, 13.0), FPoint(7.0, 13.0) );
	painter->curveTo( FPoint(3.68629, 13.0) , FPoint(1.0, 10.31383) , FPoint(1.0, 7.0) );
	painter->curveTo( FPoint(1.0, 3.68629)  , FPoint(3.68629, 1.0) , FPoint(7.0, 1.0) );
	painter->curveTo( FPoint(10.31383, 1.0) , FPoint(13.0, 3.68629) , FPoint(13.0, 7.0) );
	painter->strokePath();

	painter->newPath();
	painter->moveTo(10.5, 7.0);
	painter->curveTo( FPoint(10.5, 8.93307), FPoint(8.93307, 10.5), FPoint(7.0, 10.5) );
	painter->curveTo( FPoint(5.067, 10.5)  , FPoint(3.5, 8.93307) , FPoint(3.5, 7.0) );
	painter->curveTo( FPoint(3.5, 5.067)   , FPoint(5.067, 3.5)   , FPoint(7.0, 3.5) );
	painter->curveTo( FPoint(8.93307, 3.5) , FPoint(10.5, 5.067)  , FPoint(10.5, 7.0) );
	painter->strokePath();

	painter->restore();
}

void ScPageOutput::fillPath( PageItem* item, ScPainterExBase* painter, const QRect& clip )
{
	if( painter->fillMode() == ScPainterExBase::Pattern && !painter->hasCapability(ScPainterExBase::patterns) )
		drawPattern( item, painter, clip );
	else
		painter->fillPath();
}

void ScPageOutput::strokePath( PageItem* item, ScPainterExBase* painter, const QRect& clip )
{
	painter->strokePath();
}
