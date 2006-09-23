/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef CWDIALOG_H
#define CWDIALOG_H

#include <qvariant.h>
#include <qdialog.h>

#include "cwdialogbase.h"
#include "colorwheelwidget.h"
#include "scribus.h"

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QSpacerItem;
class QComboBox;
class QListBox;
class QListView;
class QPushButton;
class QSpinBox;
class QGroupBox;
class QSlider;
class ColorListBox;
class ScribusDoc;
class ScColor;


/** \brief GUI dialog for Color Wheel Plugin.
Quite everything in this class is self explanatory (except few things ;)).
\author Petr Vanek <petr@scribus.info>
\date April 2005
 */
class CWDialog : public CWDialogBase
{
	Q_OBJECT
	public:
		CWDialog( QWidget* parent = 0, ScribusDoc* doc = 0, const char* name = 0, bool modal = FALSE, WFlags fl = 0 );
		~CWDialog();
	private:
		/** \brief Configuration structure */
		PrefsContext* prefs;
		//! \brief a parent doc reference
		ScribusDoc* m_Doc;

		/** \brief Draws a strange colorful things as preview of the color schema.
		User can see what will see a person with selected kind of color blindness.
		*/
		void setPreview();

		/*! \brief Main color manipulator for preview.
		It calls transformations for the other vision defects filters.
		\param c input color. QColor from sample list.
		\retval QColor It returns c for chosen defect filter.
		*/
		QColor computeDefect(QColor c);

		/** \brief It fills colors into list view.
		It takes colors from ColorWheel widget. */
		void fillColorList();

		/*! \brief Set the spins with its color component value.
		It fills recomputed components regarding chosen color model
		and the changed channel. E.g. if user change R in RGB palette
		all CMYK channels are recomputed calling setupCMYKComponent(). */
		void setupColorComponents();

		/*! \brief A GUI setter for RGB components when is one of CMYK changed.
		\retval ScColor a color made from RGB channels. */
		ScColor setupRGBComponent();

		/*! \brief A GUI setter for CMYK components when is one of RGB changed.
		\retval ScColor a color made from CMYK channels. */
		ScColor setupCMYKComponent();

		/*! \brief A GUI setter for CMYK and RGB components when there is a ScColor given.
		It's used e.g. when user select one of the document's colors.
		\param col A color which is used for RGB,CMYK GUI settings.
		\retval ScColor a color made from CMYK channels. */
		ScColor setupFromColor(ScColor col);

		/*! \brief Connect or disconnect rgbcmyk spinboxes signals.
		\param conn if true perform connect. Disconnect in the case of false
		*/
		void connectSlots(bool conn=true);

		/*! \brief Call main color calculation.
		It calls a ColorWheel methods to get requested harmonious colors depending
		on the dialog's settings.
		\param index an index of the typeCombo (Color Scheme Method)
		\param updateSpins if true call setupCMYKComponent() and setupRGBComponent() methods.
		if false don't reset any of these component spins - it's used for colorWheel
		mouse clicked/released events.
		*/
		void processColors(int index, bool updateSpins=true);

	private slots:
		void colorspaceTab_currentChanged( QWidget * );
		void angleSpin_valueChanged(int);
		void colorWheel_clicked(int, const QPoint &);
		void typeCombo_activated(int);
		void documentColorList_currentChanged(QListBoxItem *);
		void defectCombo_activated(int);
		void addButton_clicked();
		void replaceButton_clicked();
		void cancelButton_clicked();

		void cSpin_valueChanged( int );
		void mSpin_valueChanged( int );
		void ySpin_valueChanged( int );
		void kSpin_valueChanged( int );
		void rSpin_valueChanged( int );
		void gSpin_valueChanged( int );
		void bSpin_valueChanged( int );
};

#endif // CWDIALOG_H
