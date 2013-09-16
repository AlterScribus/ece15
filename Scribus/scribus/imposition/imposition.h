#ifndef IMPOSER_H
#define IMPOSER_H

#include <QString>

#include "imposition/impositionoptions.h"
#include "imposition/impositioninputfile.h"
namespace Imposition
	{
		class imposer
		{
		public:
			imposer();
			~imposer() { }
			int  impose (QString in, QString out, ImposerOptions * options);
		private:
			void imposeBirthdayCard (const QString & target, imposeInputFile * input, ImposerOptions * options );
			void imposeBusinessCard (const QString & target, imposeInputFile * input, ImposerOptions * options );
			void imposeMagazine 	(const QString & target, imposeInputFile * input, ImposerOptions * options );
			void imposeMultiFold 	(const QString & target, imposeInputFile * input, ImposerOptions * options );
			void imposeTiles 	(const QString & target, imposeInputFile * input, ImposerOptions * options );
			void imposeFile 	(const QString & target, imposeInputFile * input, ImposerOptions * options );
		};

} // end of namespace
#endif
