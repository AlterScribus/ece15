/****************************************************************************
** Form interface generated from reading ui file 'measurements.ui'
**
** Created: Fre Mai 14 21:58:35 2004
**      by: The User Interface Compiler ($Id$)
**
** WARNING! All changes made in this file will be lost!
****************************************************************************/

#ifndef MEASUREMENTS_H
#define MEASUREMENTS_H

#include <qvariant.h>
#include <qdialog.h>

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QLabel;

class Measurements : public QDialog
{
	Q_OBJECT

public:
	Measurements( QWidget* parent );
	~Measurements() {};

	QLabel* Label1;
	QLabel* Label2;
	QLabel* Label3;
	QLabel* Label4;
	QLabel* Label5;
	QLabel* Label6;
	QLabel* Label7;
	QLabel* Label8;
	QLabel* X1;
	QLabel* Y1;
	QLabel* Y2;
	QLabel* X2;
	QLabel* DX;
	QLabel* DY;
	QLabel* Length;
	QLabel* Angle;

public slots:
	void setValues(double x1, double y1, double x2, double y2, double angle, double len, int unit);

protected:
	QGridLayout* MeasurementsLayout;
};

#endif // MEASUREMENTS_H
