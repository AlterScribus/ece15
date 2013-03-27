#include "marks.h"
#include "markparastyletext.h"

MarkParaStyleText::MarkParaStyleText(const QStringList& stylesList, QWidget *parent) :
	MarkInsert(stylesList, parent)
{
	setupUi(this);
	setUiContent(stylesList);
}

MarkParaStyleText::MarkParaStyleText(const Mark * mrk, const QStringList& stylesList, QWidget *parent)
{
	//for editing by marks Manager - user can change label and variable text
	setupUi(this);
	setUiContent(stylesList);

	StyleVariableMark* m = (StyleVariableMark*) mrk;
	setValues(m->pStyleName, m->searchDirection, m->textLimit, m->range);
}

void MarkParaStyleText::setUiContent(const QStringList stylesList)
{
	styleLabel->setText(tr("Get text from:"));
	styleCombo->addItems(stylesList);
	searchLabel->setText(tr("searching"));
	searchCombo->addItem(tr("Backward")); //0
	searchCombo->addItem(tr("Forward")); //1
	searchCombo->addItem(tr("First on Current Page")); //2
	searchCombo->addItem(tr("Last on Current Page")); //3
	limitLabel->setText(tr("Limit text lenght to"));
	limitSpin->setSuffix(tr("chars"));
	limitSpin->setRange(1,999);
	limitSpin->setValue(1);
	rangeCombo->addItem(tr("Get whole paragraph"));	//0
	rangeCombo->addItem(tr("Get first sentence"));	//1
	rangeCombo->addItem(tr("Get first line"));		//2
	rangeCombo->addItem(tr("Exact lenght"));			//3
	rangeCombo->addItem(tr("Last space"));			//4
	rangeLabel->setText(tr("end at"));
	setWindowTitle(tr("Mark with text from Paragraph Style occurence"));
}
void MarkParaStyleText::changeEvent(QEvent *e)
{
	QDialog::changeEvent(e);
	switch (e->type()) {
		case QEvent::LanguageChange:
			retranslateUi(this);
		break;
		default:
		break;
	}
}

void MarkParaStyleText::values(QString &styleName, int &search, int &limit, int &range)
{
	styleName = styleCombo->currentText();
	search = searchCombo->currentIndex();
	limit = limitSpin->value();
	range = rangeCombo->currentIndex();
}

void MarkParaStyleText::setValues(QString styleName, int search, int limit, int range)
{
	styleCombo->setCurrentIndex(styleCombo->findText(styleName));
	searchCombo->setCurrentIndex(search);
	limitSpin->setValue(limit);
	rangeCombo->setCurrentIndex(range);
	limitLabel->setEnabled(range >= EXACT_LENGHT);
	limitSpin->setEnabled(range >= EXACT_LENGHT);
}

void MarkParaStyleText::on_limitSpin_valueChanged(int arg1)
{
	if (arg1 == 0)
		rangeCombo->setCurrentIndex(0);
	else if (rangeCombo->currentIndex() < EXACT_LENGHT)
		rangeCombo->setCurrentIndex(EXACT_LENGHT);
}

void MarkParaStyleText::on_rangeCombo_currentIndexChanged(int index)
{
	limitLabel->setEnabled(index >= EXACT_LENGHT);
	limitSpin->setEnabled(index >= EXACT_LENGHT);
}
