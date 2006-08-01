/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef STYLEITEM_H
#define STYLEITEM_H

#include <qobject.h>
#include <qvaluelist.h>

class QString;
class QStringList;
class ScribusDoc;
class QTabWidget;

/** RemoveItem.first will be the style to remove and RemoveItem.second
 *  will be the one used in place of the deleted style */
typedef QPair<QString, QString> RemoveItem;

/** StyleName.first is the name of the style and StyleName.second is the
 *  name of the parent style or QString::null if there's no parent for this style */
typedef QPair<QString, QString> StyleName;

/**
 * @brief Represents a style type that can be added to the Style Manager
 * @brief palette.
 *
 * This class is ment to be used as a parent class for any style types
 * that are wanted to be configured using the Style Manager palette.
 * @author Riku Leino <riku@scribus.info>
 * @date November 2005
 */
class StyleItem : public QObject {
	Q_OBJECT
public:
	StyleItem();
	virtual ~StyleItem();

	/** 
	 * @brief return the QWidget for editing style's properties
	 *
	 * This is the widget where the attributes of style are edited. It
	 * will be placed on the main tab widget's Properties page.
	 */
	virtual QTabWidget* widget() = 0;

	/** @brief name of the style (Paragraph style, Character style...) */
	virtual QString typeName() = 0;

	/**
	 * @brief Whenever style manager is shown attached StyleItems get the current doc
	 * @brief passed to them with this function.
	 */
	virtual void currentDoc(ScribusDoc *doc) = 0;

	/** @brief existing styles in this category */
	virtual QValueList<StyleName> styles() = 0;

	/**
	 * @brief Whenever this function is called StyleItem must update the main
	 * @brief widget with the corresponding data.
	 *
	 * Whenever user selects a style from the style list in the manager
	 * this slot is called from the StyleItem. StyleItem must then update
	 * the main widget with the data related to the selected item and then
	 * just wait for apply() to apply the changes user made (with the
	 * main widget).
	 * @param styleNames styles selected for editing
	 */
	virtual void selected(const QStringList &styleNames) = 0;

	/**
	 * @brief Return the name of the style in this category applied to the
	 * @brief selected object(s).
	 *
	 * If there are multiple objects selected only return a style name if the style
	 * is applied on all selected objects. If they doesn't share the same style then
	 * return QString::null.
	 */
	virtual QString fromSelection() const = 0;

	/**
	 * @brief apply changes made to the currently selected style(s)
	 *
	 * When a user has edited a style (s)he can either cancel or apply
	 * changes. On cancel and ok button clicks no action is needed from
	 * the StyleItem but if a user chooses to press button apply StyleItem's
	 * function apply() is called and StyleItem must upgrade the style
	 * and apply it where ever that style is used in the document.
	 * (cancel will be disabled after this)
	 */
	virtual void apply() = 0;

	/**
	 * @brief When SM switches to or away from edit mode this function is called
	 * @param isOn true if SM is in edit mode false if SM has just closed edit mode
	 */
	virtual void editMode(bool isOn) {};

	/**
	 * @brief User has requested to delete all the selected styles
	 */
	virtual void deleteStyles(const QValueList<RemoveItem> &removeList) = 0;

	/** @brief Called when the currently selected style's name has changed */
	virtual void nameChanged(const QString &newName) = 0;

	virtual void languageChange() = 0;

/*
	Emit this signal when selection has been edited. SM knows to highlight the
	edited styles based on this signal.
signals:
	selectionDirty();
*/

private:
	/* hide these two, StyleItem is not ment to be copied */
	StyleItem(const StyleItem&);
	void operator=(const StyleItem&);

};

#endif
