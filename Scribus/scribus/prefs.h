#ifndef PREFS_H
#define PREFS_H

#include <qdialog.h>
#include <qbuttongroup.h>
#include <qcombobox.h>
#include <qgroupbox.h>
#include <qlabel.h>
#include <qpushbutton.h>
#include <qradiobutton.h>
#include <qspinbox.h>
#include <qwidget.h>
#include <qlayout.h>
#include <qtoolbutton.h>
#include <qframe.h>
#include <qcheckbox.h>
#include <qwidgetstack.h>
#include <qpixmap.h>
#include <qslider.h>
#include <qlineedit.h>
#include <qfiledialog.h>

class QListView;

#include "scribusstructs.h"

#include "mspinbox.h"
#include "scribus.h"
#include "prefsdialogbase.h"
class TabTypograpy;
class HySettings;
class CMSPrefs;
class KeyManager;
class TabGuides;
class TabTools;
class TabCheckDoc;
class TabPDFOptions;
class FontPrefs;
class DocumentItemAttributes;
class TOCIndexPrefs;
class MarginWidget;
class PrefsManager;

#include "langmgr.h"

class Preferences : public PrefsDialogBase
{
    	Q_OBJECT

public:
	Preferences( QWidget* parent);
	~Preferences();

	QString prefsPageSizeName;
	//const QString getSelectedGUILang( void );
	QString selectedGUILang;
	void drawRuler();

	QWidget* tab;
	QLabel* TextLabel1_2;
	QSpinBox* SpinBox3;
	QSpinBox* Recen;
	QButtonGroup* ButtonGroup1;
	QLabel* guiLangLabel;
	QLabel* TextGstil;
	QLabel* TextGstil2;
	QSpinBox* GFsize;
	QComboBox* guiLangCombo;
	QComboBox* GUICombo;
	QComboBox* UnitCombo;
	QLabel* unitComboText;
	QGroupBox* GroupBox200;
	QLabel* PfadText;
	QLineEdit* Docs;
	QToolButton* FileC;
	QLabel* PfadText2;
	QLineEdit* ProPfad;
	QToolButton* FileC2;
	QLabel* PfadText3;
	QLineEdit* ScriptPfad;
	QToolButton* FileC3;
	QLabel* PfadText4;
	QLineEdit* DocumentTemplateDir;
	QToolButton* FileC4;

	TabGuides* tabGuides;

	QLabel* TextLabel4c;

	TabTypograpy* tabTypo;

	QWidget* tabView;
	QButtonGroup* pageBackground;
	QLabel* textLabel9;
	QCheckBox* checkLink;
	QCheckBox* checkFrame;
	QCheckBox* checkPictures;
	QCheckBox* checkControl;
	QPushButton* backColor;
	QCheckBox* checkUnprintable;
	QGroupBox* groupScratch;
	MSpinBox* topScratch;
	MSpinBox* bottomScratch;
	MSpinBox* leftScratch;
	MSpinBox* rightScratch;
	QLabel* TextLabel7s;
	QLabel* TextLabel5s;
	QLabel* Linkss;
	QLabel* Rechtss;

	TabTools* tabTools;

	HySettings* tabHyphenator;
	FontPrefs* tabFonts;
	TabCheckDoc* tabDocChecker;
	CMSPrefs* tabColorManagement;
	TabPDFOptions* tabPDF;
	DocumentItemAttributes* tabDefaultItemAttributes;
	TOCIndexPrefs* tabDefaultTOCIndexPrefs;
	KeyManager* tabKeys;

	QLabel* textLabelP;
	QWidget* tab_5;
	QGroupBox* saving;
	QCheckBox* SaveAtQuit;
	QGroupBox* preview;
	QComboBox* PreviewSize;
	QWidget* tab_7;
	QButtonGroup* GroupSize;
	QLabel* GZText2;
	QComboBox* GZComboF;
	QComboBox* GZComboO;
	QLabel* GZText1;
	QLabel* GZText3;
	QLabel* GZText4;
	MSpinBox* pageWidth;
	MSpinBox* pageHeight;
	QCheckBox* facingPages;
	QCheckBox* Linkszuerst;
	MarginWidget* GroupRand;
	QGroupBox* GroupAS;
	QCheckBox* ASon;
	QLabel* ASText;
	QSpinBox* ASTime;
	QGroupBox* urGroup;
	QLabel* urLabel;
	QSpinBox* urSpinBox;
	QGroupBox* CaliGroup;
	QLabel* CaliText;
	QLabel* CaliRuler;
	QSlider* CaliSlider;
	QLabel* CaliAnz;
 	QWidget* ExtTool;
	QGroupBox* groupGS;
	QLabel* GSText;
	QLineEdit* GSName;
	QCheckBox* GSantiText;
	QCheckBox* GSantiGraph;
	QSpinBox* GSResolution;
	QLabel* GSResText;
	QGroupBox* groupGimp;
	QLabel* GimpText;
	QLineEdit* GimpName;
	QWidget* Misc;
	QGroupBox* groupPrint;
	QCheckBox* ClipMarg;
	QCheckBox* DoGCR;
	QCheckBox* AskForSubs;
	QCheckBox* stylePreview;
	QCheckBox* startUpDialog;
	//! lorem ipsum
	QGroupBox* groupLI;
	QCheckBox* useStandardLI;
	QSpinBox* paragraphsLI;
	QLabel* paraLabelLI;
	//! plugin manager
	QWidget* pluginManagerWidget;
	QGroupBox* plugGroupBox;
	QListView* pluginsList;
	QLabel* pluginWarning;

	double unitRatio;
	double PFactor;
	double Pagebr;
	double Pageho;
	int docUnitIndex;
	double DisScale;
	ScribusApp *ap;
	QColor colorPaper;


public slots:
	virtual void changePaperColor();
	void changeDocs();
	void changeProfs();
	void changeScripts();
	void changeDocumentTemplates();
	void setDS();
	void setPageWidth(int v);
	void setPageHeight(int v);
	void setSize(const QString &);
	void setOrien(int ori);
	void unitChange();
	void setDisScale();
	void switchCMS(bool enable);

protected:
	QGridLayout* tabLayout;
	QGridLayout* ButtonGroup1Layout;
	QGridLayout* GroupBox200Layout;
	QGridLayout* tabLayout_5;
	QHBoxLayout* savingLayout;
	QHBoxLayout* previewLayout;
	QHBoxLayout* Layout3;
	QHBoxLayout* tabLayout_7;
	QVBoxLayout* Layout21;
	QVBoxLayout* GroupSizeLayout;
	QGridLayout* Layout6;
	QHBoxLayout* Layout5_2;
	QHBoxLayout* Layout8;
	QGridLayout* GroupASLayout;
	QVBoxLayout* CaliGroupLayout;
	QHBoxLayout* layout15ca;
	QVBoxLayout* ExtToolLayout;
	QVBoxLayout* groupGSLayout;
	QHBoxLayout* GSlayout;
	QHBoxLayout* GSlayout2;
	QHBoxLayout* groupGimpLayout;
	QVBoxLayout* MiscLayout;
	QVBoxLayout* groupPrintLayout;
	//! layout of the lorem ipsum group
	QVBoxLayout* groupLILayout;
	QVBoxLayout* tabViewLayout;
	QVBoxLayout* pageBackgroundLayout;
	QHBoxLayout* layout10;
	QHBoxLayout* groupScratchLayout;
	QGridLayout* Layout4s;
	// plugin manager
	QVBoxLayout* plugLayout1;
	QVBoxLayout* pluginMainLayout;
	QGridLayout* plugGroupBoxLayout;

	QStringList defaultAttributesList;

protected slots:
	virtual void setTOCIndexData(QWidget *widgetToShow);

private slots:
	void setSelectedGUILang( const QString &newLang );
	void setActionHistoryLength();
	void changePluginLoad(QListViewItem *, const QPoint &, int);

private:
	LanguageManager langMgr;
	PrefsManager* prefsManager;
};

#endif // PREFS_H
