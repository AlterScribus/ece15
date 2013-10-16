#ifndef CANVASGESTURE_TEXTCOLUMNRESIZE_H
#define CANVASGESTURE_TEXTCOLUMNRESIZE_H
#include <QRect>

#include "scribusapi.h"
#include "canvas.h"
#include "canvasgesture.h"
#include "canvasmode.h"

class QDragEnterEvent;
class QDragMoveEvent;
class QDragLeaveEvent;
class QDropEvent;
class QEvent;
class QInputMethodEvent;
class QMouseEvent;
class QKeyEvent;
class QPainter;
class QRubberBand;
class PageItem;
class UndoTransaction;

/**
  This class realizes resizing of text column/gap of selected item
  The user presses the mousebutton at one of the columns border, drags it to the end point
  and releases the mousebutton. If CTRL modifier is pressed then th gap is resized, else the column is resized to the new dimensions.
  During the move the selecte item is highlighted.
 */

class SCRIBUS_API TextColumnResize : public CanvasGesture
{
public:
	TextColumnResize();
	~TextColumnResize() {}

	virtual void drawControls(QPainter* p);
	virtual void activate(bool);
	virtual void deactivate(bool);
	virtual void mouseReleaseEvent(QMouseEvent *m);
	virtual void mouseMoveEvent(QMouseEvent *m);
	/**
	  This method only sets the m_handle field.
	  If the correct value is set by prepare() (default = SOUTHEAST), 
	  it's not necessary to call this method.
	 */
	virtual void mousePressEvent(QMouseEvent *m);
	Canvas::FrameHandle columnHandle() const { return m_handle; }

private:
	void adjustBounds(QMouseEvent *m);
	void doResize(bool scaleContent);
	Canvas::FrameHandle m_handle;
	double m_rotation;
	double m_origRatio;
	QPoint m_mousePressPoint;
	QRectF m_bounds;
	QRectF m_origBounds;
	QRectF m_mousePressBounds;
	UndoTransaction* m_transactionStarted;
	double m_extraWidth;
	double m_extraHeight;
	double m_extraX;
	double m_extraY;
};

#endif // CANVASGESTURE_TEXTCOLUMNRESIZE_H
