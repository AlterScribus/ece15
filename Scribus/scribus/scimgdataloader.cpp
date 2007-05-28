/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "scimgdataloader.h"

ScImgDataLoader::ScImgDataLoader(void)
{
	initialize();
}

void ScImgDataLoader::initialize(void)
{
	m_msgType = noMsg;
	m_message.setLength(0);
	m_image = QImage();
	m_imageInfoRecord.init();
	m_embeddedProfile.resize(0);
	m_profileComponents = 0;
}

void ScImgDataLoader::setRequest(bool valid, QMap<int, ImageLoadRequest> req)
{
	m_imageInfoRecord.RequestProps = req;
	m_imageInfoRecord.isRequest = valid;
}

bool ScImgDataLoader::supportFormat(const QString& fmt) 
{
	QString format = fmt.lower();
	return (m_supportedFormats.contains(format));
}

QString ScImgDataLoader::getPascalString(QDataStream & s)
{
	uchar len, tmp;
	uint adj;
	QString ret = "";
	s >> len;
	if (len == 0)
	{
		s >> tmp;
		return ret;
	}
	for( int i = 0; i < len; i++ )
	{
		s >> tmp;
		ret += QChar(tmp);
	}
	adj = (ret.length()+1) % 2;
	s.device()->at( s.device()->at() + adj );
	return ret;
}

void ScImgDataLoader::swapRGBA()
{
	for (int i = 0; i < m_image.height(); ++i)
	{
		unsigned int *ptr = (unsigned int *) m_image.scanLine(i);
		unsigned char r, b;
		for (int j = 0; j < m_image.width(); ++j)
		{
			unsigned char *p = (unsigned char *) ptr;
			r = p[0];
			b = p[2];
			p[2] = r;
			p[0] = b;
			ptr++;
		}
	}
}

void ScImgDataLoader::swapRGBA(QImage *img)
{
	for (int i = 0; i < img->height(); ++i)
	{
		unsigned int *ptr = (unsigned int *) img->scanLine(i);
		unsigned char r, b;
		for (int j = 0; j < img->width(); ++j)
		{
			unsigned char *p = (unsigned char *) ptr;
			r = p[0];
			b = p[2];
			p[2] = r;
			p[0] = b;
			ptr++;
		}
	}
}

void ScImgDataLoader::parseRessourceData( QDataStream & s, const PSDHeader & header, uint size )
{
	uint signature, resSize, offset, resBase, vRes, hRes, adj;
	ushort resID, hResUnit, vResUnit, dummyW;
	QString resName;
	uchar filler;
	offset = 0;
	bool first = false;
	bool pathOpen = false;
	FPoint firstPoint, firstControl;
	FPointArray clip2;
	while ((offset + 6)< size)
	{
		s >> signature;
		offset += 4;
		if(((signature >> 24)&0xff) != '8' ||
		        ((signature >> 16)&0xff) != 'B' ||
		        ((signature >> 8)&0xff) != 'I' ||
		        ((signature )&0xff) != 'M' )
			break;
		s >> resID;
		offset += 2;
		adj = s.device()->at();
		resName = getPascalString(s);
		offset += s.device()->at() - adj;
		s >> resSize;
		if(offset + resSize > size)
			break;
		resBase = s.device()->at();
		if ( (resID >= 0x07d0) && (resID <= 0x0bb6) )
		{
			QString db1, db2;
			short type;
			uint data1, data2, data3, data4, data5, data6;
			double frac1, frac2, frac3, frac4, frac5, frac6;
			ushort man1, man2, man3, man4, man5, man6;
			uint offset2;
			offset2 = 0;
			first = false;
			pathOpen = false;
			clip2.resize(0);
			while (offset2 < resSize)
			{
				s >> type;
				s >> data1;
				frac1 = (data1 & 0x00FFFFFF) / 16777215.0;
				man1 = (data1 & 0x0F000000) >> 24;
				frac1 = (frac1 + man1) * header.height;
				s >> data2;
				frac2 = (data2 & 0x00FFFFFF) / 16777215.0;
				man2 = (data2 & 0x0F000000) >> 24;
				frac2 = (frac2 + man2) * header.width;
				s >> data3;
				frac3 = (data3 & 0x00FFFFFF) / 16777215.0;
				man3 = (data3 & 0x0F000000) >> 24;
				frac3 = (frac3 + man3) * header.height;
				s >> data4;
				frac4 = (data4 & 0x00FFFFFF) / 16777215.0;
				man4 = (data4 & 0x0F000000) >> 24;
				frac4 = (frac4 + man4) * header.width;
				s >> data5;
				frac5 = (data5 & 0x00FFFFFF) / 16777215.0;
				man5 = (data5 & 0x0F000000) >> 24;
				frac5 = (frac5 + man5) * header.height;
				s >> data6;
				frac6 = (data6 & 0x00FFFFFF) / 16777215.0;
				man6 = (data6 & 0x0F000000) >> 24;
				frac6 = (frac6 + man6) * header.width;
				switch (type)
				{
				case 0:
				case 3:
					if (pathOpen)
					{
						clip2.addPoint(firstPoint);
						clip2.addPoint(firstControl);
						clip2.setMarker();
					}
					pathOpen = false;
					first = true;
					break;
				case 1:
				case 2:
				case 4:
				case 5:
					if (first)
					{
						firstControl = FPoint(frac2, frac1);
						firstPoint = FPoint(frac4, frac3);
						clip2.addPoint(FPoint(frac4, frac3));
						clip2.addPoint(FPoint(frac6, frac5));
					}
					else
					{
						clip2.addPoint(frac4, frac3);
						clip2.addPoint(frac2, frac1);
						clip2.addPoint(frac4, frac3);
						clip2.addPoint(frac6, frac5);
					}
					pathOpen = true;
					first = false;
					break;
				case 6:
					first = true;
					break;
				default:
					break;
				}
				offset2 += 26;
			}
			clip2.addPoint(firstPoint);
			clip2.addPoint(firstControl);
			m_imageInfoRecord.PDSpathData.insert(resName, clip2.copy());
			m_imageInfoRecord.valid = true;
		}
		else
		{
			switch (resID)
			{
			case 0x0bb7:
				adj = s.device()->at();
				m_imageInfoRecord.clipPath = getPascalString(s);
				offset += s.device()->at() - adj;
				break;
			case 0x03ed:
				s >> hRes;
				s >> hResUnit;
				s >> dummyW;
				s >> vRes;
				s >> vResUnit;
				s >> dummyW;
				m_imageInfoRecord.xres = qRound(hRes / 65536.0);
				m_imageInfoRecord.yres = qRound(vRes / 65536.0);
				break;
			case 0x040f:
				m_embeddedProfile.resize(resSize);
				s.readRawBytes(m_embeddedProfile.data(), resSize);
				break;
			case 0x0409:
			case 0x040C:
				{
					uint thdummy, thsize;
					s >> thdummy;
					s >> thdummy;
					s >> thdummy;
					s >> thdummy;
					s >> thdummy;
					s >> thsize;
					s >> thdummy;
					char* buffer = (char*)malloc(thsize);
					s.readRawBytes(buffer, thsize);
					QImage imth;
					imth.loadFromData((const uchar*)buffer, thsize, "JPEG");
					imth.convertDepth(32);
					if (resID == 0x0409)
						m_imageInfoRecord.exifInfo.thumbnail = imth.swapRGB();
					else
						m_imageInfoRecord.exifInfo.thumbnail = imth;
					m_imageInfoRecord.exifInfo.width = imth.width();
					m_imageInfoRecord.exifInfo.height = imth.height();
					m_imageInfoRecord.exifDataValid = true;
					free(buffer);
				}
			default:
				break;
			}
		}
		if (resBase + resSize <= size) {
			s.device()->at( resBase + resSize );
			offset += resSize;
		}
		if (resSize & 1)
		{
			s >> filler;
			offset += 1;
		}
	}
	if(offset<size)
		s.device()->at( size );
}
