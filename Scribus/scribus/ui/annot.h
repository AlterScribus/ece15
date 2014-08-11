/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef ANNOT_H
#define ANNOT_H

#include <QDialog>
class QHBoxLayout;
class QGridLayout;
class QVBoxLayout;
class QStackedWidget;
class QGroupBox;
class QTextEdit;
class QLabel;
class QFrame;
class QComboBox;
class QLineEdit;
class QCheckBox;
class QPushButton;
class QSpinBox;
class QTabWidget;
class QWidget;
class QRadioButton;

#include "scribusapi.h"
#include "sccolor.h"

class PageItem;
class Navigator;
class ColorCombo;
class ScribusView;
class PrefsContext;

class SCRIBUS_API ScAnnot : public QDialog
{
	Q_OBJECT

public:
	ScAnnot ( QWidget* parent, PageItem *it, int Seite, int b, int h, ColorList Farben, ScribusView* vie );
	~ScAnnot();
	void DecodeNum();
	void DecodeVali();
	void DecodeCalc();
	QStackedWidget* Fram;
	QStackedWidget* Fram2;
	QStackedWidget* FramOp;
	QStackedWidget* FoFram;
	QLabel* TextLabel1;
	QComboBox* ComboBox1;
	QLabel* TextVa;
	QFrame* Frame9;
	QComboBox* ActionCombo;
	QFrame* Frame3;
	QFrame* Frame4;
	QFrame* Frame4a;
	QFrame* Frame5;
	QLabel* TextLabel5;
	QComboBox* nameActionCombo;
	QLabel* TextLabel4a;
	QLineEdit *Name;
	QLabel* TextLabel4b;
	QLineEdit *Tip;
	QLabel* AcText1;
	QLabel* AcText2;
	QComboBox* SelAction;
	QTextEdit* EditJava;
	QGroupBox* GroupBox11;
	QLabel* TextLabel31;
	QLabel* TextLabel41;
	QLabel* TextLabel51;
	QCheckBox* LExtern;
	QLineEdit* Destfile;
	QPushButton* ChFile;
	QCheckBox* useAbsolute;
	Navigator* Pg1;
	QSpinBox* SpinBox11;
	QSpinBox* SpinBox21;
	QSpinBox* SpinBox31;
	QGroupBox* GroupBox10;
	QLabel* TextLabel20;
	QLabel* TextLabel30;
	QTabWidget* TabWidget2;
	QWidget* tab;
	QGroupBox* GroupBox40;
	QComboBox* Schrift;
	QLabel* TextLabel60;
	QLabel* CheckBox30;
	QLabel* CheckBox40;
	QLineEdit* DownT;
	QLineEdit* TextO;
	QGroupBox* GroupBox30;
	QCheckBox* ReadOnly;
	QCheckBox* Required;
	QCheckBox* NoExport;
	QLabel* TextLabel8_2;
	QComboBox* ComboBox7_2;
	QLabel* TextLabel90;
	QComboBox* Visib;
	QGroupBox* GroupBox20;
	ColorCombo* BorderC;
	QLabel* TextLabel40a;
	QComboBox* BorderW;
	QLabel* TextLabel40;
	QLabel* TextLabel50;
	QComboBox* BorderS;
	QWidget* tab_2;
	QLabel* TextLabel70;
	QWidget* tab_3;
	QGroupBox* GroupBox40a;
	QGroupBox* GroupBox30a;
	QGroupBox* OptTextFeld;
	QCheckBox* MultiL;
	QCheckBox* Passwd;
	QCheckBox* Limit;
	QSpinBox* MaxChars;
	QCheckBox* NoScroll;
	QCheckBox* NoSpell;
	QLabel* TextLabel2_2;
	QGroupBox* OptCheck;
	QLabel* CText1;
	QComboBox* ChkStil;
	QCheckBox* isChkd;
	QGroupBox* OptCombo;
	QCheckBox* CanEdit;
	QWidget* tab4;
	QLabel* TextForm1;
	QComboBox* TxFormat;
	QGroupBox* GroupCust;
	QLabel* TextForm2;
	QPushButton* EditFormat;
	QTextEdit* FormatScript;
	QLabel* TextForm3;
	QPushButton* EditKeystr;
	QTextEdit* KeyScript;
	QFrame* FoFrameNone;
	QGroupBox* NumbGroup;
	QLabel* TextNu1;
	QSpinBox* Decim;
	QCheckBox* UseCurr;
	QLineEdit* CurSym;
	QCheckBox* PreCurr;
	QGroupBox* NumGroup2;
	QRadioButton* Format0;
	QRadioButton* Format1;
	QRadioButton* Format2;
	QRadioButton* Format3;
	QGroupBox* PercGroup;
	QLabel* TextNu1a;
	QSpinBox* Decim2;
	QGroupBox* NumGroup2a;
	QRadioButton* Format0a;
	QRadioButton* Format1a;
	QRadioButton* Format2a;
	QRadioButton* Format3a;
	QGroupBox* TimeGroup;
	QRadioButton* Format0b;
	QRadioButton* Format1b;
	QRadioButton* Format2b;
	QRadioButton* Format3b;
	QGroupBox* DateGroup;
	QComboBox* Format0c;
	QLabel* TextDa1;
	QWidget* tab_4;
	QGroupBox* ValidateGroup;
	QRadioButton* NoValid;
	QRadioButton* SimpleValid;
	QLineEdit* MinValid;
	QLineEdit* MaxValid;
	QRadioButton* CustomValid;
	QTextEdit* ValidScript;
	QPushButton* EditValScript;
	QWidget* tab_5;
	QGroupBox* CalcGroup;
	QRadioButton* NoCalc;
	QRadioButton* SimpleCalc;
	QComboBox* CalcArt;
	QLabel* TextLabel1_2;
	QLineEdit* CalcFields;
	QRadioButton* CustomCalc;
	QTextEdit* CalcScript;
	QPushButton* EditCalc;
	QPushButton* EditJ;
	QPushButton* SeField;
	QFrame* Frame3b;
	QLabel* SubText1;
	QLineEdit* SubURL;
	QLabel* SubText2;
	QComboBox* SelAsHtml;
	QFrame* Frame3c;
	QLabel* SubText1a;
	QLineEdit* SubURLa;
	QGroupBox* OptIcons;
	QCheckBox* UseIcons;
	QPushButton* IconN;
	QLabel* NiconPrev;
	QPushButton* IconP;
	QLabel* PiconPrev;
	QPushButton* IconR;
	QLabel* RiconPrev;
	QPushButton* IconNR;
	QPushButton* IconPR;
	QPushButton* IconRR;
	QPushButton* PlaceIcon;
	QPushButton* PushButton1;
	QPushButton* PushButton2;
	PageItem* item;
	ScribusView* view;
	int Width;
	int Height;
	int OriWidth;
	int OriHeight;
	int ScrEdited;
	int FormNum;
	QString JavaScr;
	int MaxSeite;
	QString OldName;

public slots:
	void NewName();
	void IPlace();
	void RemoveNIcon();
	void RemovePIcon();
	void RemoveRIcon();
	void IconsEin();
	void GetNIcon();
	void GetPIcon();
	void GetRIcon();
	void SelectFelder();
	void editKeySc();
	void editFormatSc();
	void editValidSc();
	void editCalcSc();
	void editJavaSc();
	void SetFormNum();
	void SetCurr();
	void HandleVali();
	void SetVali();
	void HandleCalc();
	void SetCalc();
	void SetFoScript ( int it );
	void SetCoords ( double x, double y );
	void SetPage ( int v );
	void SetCross();
	void SetValues();
	void SetAnnotationType ( int i );
	void GetFile();
	void SetActionType ( int it );
	void SetLimit();
	void SetActionScript ( int it );
	void setDateSample ( const QString& ds );
	void SetExternLink();

protected:
	QVBoxLayout* AnnotLayout;
	QHBoxLayout* Layout1;
	QHBoxLayout* Layout1_2;
	QGridLayout* GroupBox11Layout;
	QVBoxLayout* Frame3Layout;
	QVBoxLayout* Frame3bLayout;
	QVBoxLayout* Frame3cLayout;
	QVBoxLayout* GroupBox10Layout;
	QGridLayout* Layout60;
	QVBoxLayout* tabLayout;
	QHBoxLayout* Layout10;
	QGridLayout* GroupBox40Layout;
	QGridLayout* GroupBox30Layout;
	QGridLayout* GroupBox20Layout;
	QVBoxLayout* tabLayout_2;
	QHBoxLayout* Layout20;
	QVBoxLayout* tabLayout_3;
	QGridLayout* GroupBox40aLayout;
	QGridLayout* GroupBox30aLayout;
	QGridLayout* Frame4aLayout;
	QVBoxLayout* OptTextFeldLayout;
	QHBoxLayout* Layout7;
	QHBoxLayout* Layout71;
	QHBoxLayout* Layout8;
	QVBoxLayout* OptCheckLayout;
	QHBoxLayout* ChkLayout;
	QVBoxLayout* OptComboLayout;
	QVBoxLayout* Layout;
	QHBoxLayout* FLayout;
	QVBoxLayout* GroupCustLayout;
	QVBoxLayout* FLayout3;
	QHBoxLayout* FLayout2;
	QVBoxLayout* FLayout5;
	QHBoxLayout* FLayout4;
	QVBoxLayout* NumbGroupLayout;
	QHBoxLayout* LayoutFN1;
	QHBoxLayout* LayoutFN2;
	QGridLayout* NumGroup2Layout;
	QVBoxLayout* PercGroupLayout;
	QHBoxLayout* LayoutFN1a;
	QGridLayout* NumGroup2aLayout;
	QVBoxLayout* TimeGroupLayout;
	QVBoxLayout* DateGroupLayout;
	QHBoxLayout* LayoutFN1c;
	QVBoxLayout* tabLayout_4;
	QVBoxLayout* ValidateGroupLayout;
	QGridLayout* VLayout1;
	QHBoxLayout* VLayout2;
	QVBoxLayout* tabLayout_5;
	QVBoxLayout* CalcGroupLayout;
	QHBoxLayout* CLayout1;
	QHBoxLayout* CLayout2;
	QHBoxLayout* CLayout3;
	QHBoxLayout* Layout18;
	QVBoxLayout* OptIconsLayout;
	QHBoxLayout* Layout17;
	QGridLayout* Layout14;
	QGridLayout* Layout15;
	QGridLayout* Layout16;
	QVBoxLayout* Frame5Layout;
	PrefsContext* dirs;
};

#endif // ANNOT_H
