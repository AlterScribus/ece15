#ifndef LINEFORMATE_H
#define LINEFORMATE_H

#include <qdialog.h>
#include <qlistbox.h>
#include <qpushbutton.h>
#include <qlayout.h>
#include <qtooltip.h>
#include "scribusdoc.h"

class LineFormate : public QDialog
{ 
    Q_OBJECT

public:
    LineFormate( QWidget* parent, ScribusDoc *doc);
    ~LineFormate() {};

    QListBox* ListBox1;
	QPushButton* LoadLS;
    QPushButton* NewB;
    QPushButton* EditB;
    QPushButton* DublicateB;
    QPushButton* DeleteB;
    QPushButton* SaveB;
    QPushButton* CancelB;
    QString sFnumber;
	QMap<QString,multiLine> TempStyles;
	ScribusDoc *Docu;
  	void UpdateFList();

public slots:
	void selFormat(QListBoxItem *c);
	void editFormat();
	void neuesFormat();
	void dupFormat();
	void deleteFormat();
	void loadLStyles();

protected:
    QHBoxLayout* StilFormateLayout;
    QVBoxLayout* Layout15;
};

#endif // STILFORMATE_H
