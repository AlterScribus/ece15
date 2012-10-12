#ifndef PROPERTYWIDGET_DropCap_H
#define PROPERTYWIDGET_DropCap_H

#include "ui_propertywidget_dropcapbase.h"

#include "propertywidgetbase.h"
#include "ui/charselectenhanced.h"

class PageItem;
class ParagraphStyle;
class ScribusMainWindow;

class PropertyWidget_DropCap : public QFrame, private Ui::PropertyWidget_DropCapBase, public PropertyWidgetBase
{
    Q_OBJECT

public:
	PropertyWidget_DropCap(QWidget *parent = 0);
	~PropertyWidget_DropCap() {}

	void updateStyle(const ParagraphStyle& newCurrent);
	void updateCharStyles();

	void displayCharStyle(const QString& name);
	void connectSignals();
	void disconnectSignals();
	CharSelectEnhanced * m_enhanced;
	
	void fillNumerationsCombo();
protected:
	double m_unitRatio;
	int    m_unitIndex;

	PageItem *         m_item;
	ScribusMainWindow* m_ScMW;

	void configureWidgets();
	void setCurrentItem(PageItem *item);

	virtual void changeEvent(QEvent *e);

public slots:
	void setMainWindow(ScribusMainWindow *mw);
	void setDoc(ScribusDoc *doc);

	void handleAppModeChanged(int oldMode, int mode);
	void handleSelectionChanged();
	void handleUpdateRequest(int);

	void languageChange();
	void unitChange();

	void handleParEffectUse();
	void handleBulletStr(QString);
	void handleDropCapLines();
	void handleNumName(QString);
	void handleNumStyle(int);
	void handleNumLevel(int);
	void hnadleNumPrefix(QString);
	void handleNumSuffix(QString);
	void handlePEOffset();
	void handlePEIndent();
	void handlePECharStyle();

private slots:
	void on_bulletCharTableButton__toggled(bool checked);
	void insertSpecialChars(const QString &chars);

private:
	void openEnhanced();
	void closeEnhanced(bool show = false);
	void enableDropCap(bool);
	void enableBullet(bool);
	void enableNum(bool);
	void enableParEffect(bool);
	void fillBulletStrEditCombo()
	{
		bulletStrEdit_->clear();
		bulletStrEdit_->addItem(QChar(0x2022));
		bulletStrEdit_->addItem("*");
		bulletStrEdit_->addItem("-");
		bulletStrEdit_->addItem("<");
		bulletStrEdit_->addItem(">");
		bulletStrEdit_->setMinimumWidth(50);
		bulletStrEdit_->setEditText(QChar(0x2022));
	}
	
	void fillNumStyleCombo()
	{
		numStyleCombo->clear();
		numStyleCombo->addItem("1_2_3");
		numStyleCombo->addItem("i_ii_iii");
		numStyleCombo->addItem("I_II_III");
		numStyleCombo->addItem("a_b_c");
		numStyleCombo->addItem("i_ii_iii");
		numStyleCombo->addItem("A_B_C");
		numStyleCombo->addItem("*");
	}
//	void SMPStyleWidget::fillNumRestartCombo()
//	{
//		numRestartCombo->clear();
//		numRestartCombo->addItem(tr("Document"));
//		numRestartCombo->addItem(tr("Section"));
//		numRestartCombo->addItem(tr("Story"));
//		numRestartCombo->addItem(tr("Page"));
//		numRestartCombo->addItem(tr("Frame"));
//	}
};

#endif // PROPERTYWIDGET_DropCap_H
