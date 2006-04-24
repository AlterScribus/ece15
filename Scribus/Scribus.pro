######################################################################
# Automatically generated by qmake (1.07a) Mon Apr 24 23:56:11 2006
######################################################################

TEMPLATE = app
DEPENDPATH += scribus \
              scribus/libart \
              scribus/pixbuf \
              scribus/po \
              scribus/text \
              scribus/plugins/barcodegenerator \
              scribus/plugins/colorwheel \
              scribus/plugins/fontpreview \
              scribus/plugins/myplugin \
              scribus/plugins/newfromtemplateplugin \
              scribus/plugins/pixmapexport \
              scribus/plugins/psimport \
              scribus/plugins/saveastemplateplugin \
              scribus/plugins/scriptplugin \
              scribus/plugins/short-words \
              scribus/plugins/svgexplugin \
              scribus/plugins/svgimplugin \
              scribus/plugins/fileloader/oldscribusformat \
              scribus/plugins/fileloader/oodraw \
              scribus/plugins/gettext/csvim \
              scribus/plugins/gettext/docim \
              scribus/plugins/gettext/htmlim \
              scribus/plugins/gettext/odtim \
              scribus/plugins/gettext/pdbim \
              scribus/plugins/gettext/sxwim \
              scribus/plugins/gettext/textfilter \
              scribus/plugins/gettext/txtim \
              scribus/plugins/scriptplugin/scripter2
INCLUDEPATH += . \
               scribus \
               scribus/text \
               scribus/plugins/svgimplugin \
               scribus/plugins/psimport \
               scribus/plugins/fileloader/oodraw \
               scribus/libart \
               scribus/pixbuf \
               scribus/plugins/barcodegenerator \
               scribus/plugins/colorwheel \
               scribus/plugins/fontpreview \
               scribus/plugins/myplugin \
               scribus/plugins/newfromtemplateplugin \
               scribus/plugins/pixmapexport \
               scribus/plugins/saveastemplateplugin \
               scribus/plugins/scriptplugin \
               scribus/plugins/short-words \
               scribus/plugins/svgexplugin \
               scribus/plugins/fileloader/oldscribusformat \
               scribus/plugins/gettext/csvim \
               scribus/plugins/gettext/docim \
               scribus/plugins/gettext/htmlim \
               scribus/plugins/gettext/odtim \
               scribus/plugins/gettext/pdbim \
               scribus/plugins/gettext/sxwim \
               scribus/plugins/gettext/textfilter \
               scribus/plugins/gettext/txtim

# Input
HEADERS += config.h \
           scribus/about.h \
           scribus/aboutplugins.h \
           scribus/actionmanager.h \
           scribus/aligndistribute.h \
           scribus/alignselect.h \
           scribus/annot.h \
           scribus/annota.h \
           scribus/annotation.h \
           scribus/applytemplatedialog.h \
           scribus/arrowchooser.h \
           scribus/autoform.h \
           scribus/autoformbuttongroup.h \
           scribus/bookmwin.h \
           scribus/bookpalette.h \
           scribus/buttonicon.h \
           scribus/charselect.h \
           scribus/checkDocument.h \
           scribus/cmserrorhandling.h \
           scribus/cmsprefs.h \
           scribus/cmykfw.h \
           scribus/collect4output.h \
           scribus/color.h \
           scribus/colorchart.h \
           scribus/colorcombo.h \
           scribus/colorm.h \
           scribus/colorsetmanager.h \
           scribus/commonstrings.h \
           scribus/cpalette.h \
           scribus/crypt.h \
           scribus/cupsoptions.h \
           scribus/customfdialog.h \
           scribus/dcolor.h \
           scribus/deferredtask.h \
           scribus/delpages.h \
           scribus/docinfo.h \
           scribus/docitemattrprefs.h \
           scribus/docsections.h \
           scribus/documentchecker.h \
           scribus/documentinformation.h \
           scribus/druck.h \
           scribus/dynamictip.h \
           scribus/edit1format.h \
           scribus/editformats.h \
           scribus/editor.h \
           scribus/effectsdialog.h \
           scribus/exif.h \
           scribus/extimageprops.h \
           scribus/fileloader.h \
           scribus/filesearch.h \
           scribus/fileunzip.h \
           scribus/filewatcher.h \
           scribus/fmitem.h \
           scribus/fontcombo.h \
           scribus/fontprefs.h \
           scribus/fontreplacedialog.h \
           scribus/fparser.h \
           scribus/fpconfig.h \
           scribus/fpoint.h \
           scribus/fpointarray.h \
           scribus/fptypes.h \
           scribus/frameedit.h \
           scribus/gradienteditor.h \
           scribus/gsutil.h \
           scribus/gtaction.h \
           scribus/gtdialogs.h \
           scribus/gtfont.h \
           scribus/gtframestyle.h \
           scribus/gtgettext.h \
           scribus/gtmeasure.h \
           scribus/gtparagraphstyle.h \
           scribus/gtstyle.h \
           scribus/gtwriter.h \
           scribus/guidemanager.h \
           scribus/guidemanagercore.h \
           scribus/helpbrowser.h \
           scribus/hnjalloc.h \
           scribus/hruler.h \
           scribus/hyask.h \
           scribus/hyphen.h \
           scribus/hyphenator.h \
           scribus/hysettings.h \
           scribus/icons5.h \
           scribus/icons6.h \
           scribus/imageinfodialog.h \
           scribus/insertTable.h \
           scribus/inspage.h \
           scribus/ioapi.h \
           scribus/javadocs.h \
           scribus/keymanager.h \
           scribus/langmgr.h \
           scribus/layers.h \
           scribus/linecombo.h \
           scribus/lineformats.h \
           scribus/linkbutton.h \
           scribus/loadsaveplugin.h \
           scribus/loremipsum.h \
           scribus/margindialog.h \
           scribus/marginWidget.h \
           scribus/md5.h \
           scribus/mdup.h \
           scribus/measurements.h \
           scribus/menumanager.h \
           scribus/mergedoc.h \
           scribus/missing.h \
           scribus/movepage.h \
           scribus/mpalette.h \
           scribus/mspinbox.h \
           scribus/multiline.h \
           scribus/multiprogressdialog.h \
           scribus/muster.h \
           scribus/navigator.h \
           scribus/newfile.h \
           scribus/newtemp.h \
           scribus/page.h \
           scribus/pageitem.h \
           scribus/pageitem_imageframe.h \
           scribus/pageitem_line.h \
           scribus/pageitem_pathtext.h \
           scribus/pageitem_polygon.h \
           scribus/pageitem_polyline.h \
           scribus/pageitem_textframe.h \
           scribus/pageitemattributes.h \
           scribus/pagelayout.h \
           scribus/pageselector.h \
           scribus/pagesize.h \
           scribus/pagestructs.h \
           scribus/pdflib.h \
           scribus/pdfoptions.h \
           scribus/pdfoptionsio.h \
           scribus/pdfopts.h \
           scribus/picsearch.h \
           scribus/picstatus.h \
           scribus/pluginapi.h \
           scribus/pluginmanager.h \
           scribus/pluginmanagerprefsgui.h \
           scribus/polygonwidget.h \
           scribus/polyprops.h \
           scribus/prefs.h \
           scribus/prefscontext.h \
           scribus/prefsdialogbase.h \
           scribus/prefsfile.h \
           scribus/prefsmanager.h \
           scribus/prefspanel.h \
           scribus/prefsreader.h \
           scribus/prefsstructs.h \
           scribus/prefstable.h \
           scribus/preview.h \
           scribus/printerutil.h \
           scribus/pslib.h \
           scribus/query.h \
           scribus/rc4.h \
           scribus/reformdoc.h \
           scribus/rulermover.h \
           scribus/sampleitem.h \
           scribus/sccolor.h \
           scribus/sccolorshade.h \
           scribus/sccombobox.h \
           scribus/scconfig.h \
           scribus/scfontmetrics.h \
           scribus/scfonts.h \
           scribus/scfonts_ttf.h \
           scribus/scimage.h \
           scribus/scmenu.h \
           scribus/scmessagebox.h \
           scribus/scpageoutput.h \
           scribus/scpainter.h \
           scribus/scpainterex_gdi.h \
           scribus/scpainterexbase.h \
           scribus/scpaths.h \
           scribus/scpixmapcache.h \
           scribus/scplugin.h \
           scribus/scpreview.h \
           scribus/scraction.h \
           scribus/scrap.h \
           scribus/scribus.h \
           scribus/scribusapi.h \
           scribus/scribusapp.h \
           scribus/scribuscore.h \
           scribus/scribusdoc.h \
           scribus/scribusstructs.h \
           scribus/scribusview.h \
           scribus/scribuswin.h \
           scribus/scribusXml.h \
           scribus/scrpalettebase.h \
           scribus/sctextstruct.h \
           scribus/sctoolbar.h \
           scribus/scwinprint.h \
           scribus/search.h \
           scribus/seiten.h \
           scribus/selection.h \
           scribus/selfield.h \
           scribus/serializer.h \
           scribus/shadebutton.h \
           scribus/smlinestyle.h \
           scribus/smreplacedia.h \
           scribus/spalette.h \
           scribus/splash.h \
           scribus/stencilreader.h \
           scribus/story.h \
           scribus/styleitem.h \
           scribus/stylemanager.h \
           scribus/styleoptions.h \
           scribus/styleselect.h \
           scribus/tabcheckdoc.h \
           scribus/tabexternaltoolswidget.h \
           scribus/tabguides.h \
           scribus/tabmanager.h \
           scribus/tabpdfoptions.h \
           scribus/tabruler.h \
           scribus/tabtools.h \
           scribus/tabtypography.h \
           scribus/tocgenerator.h \
           scribus/tocindexprefs.ui.h \
           scribus/tree.h \
           scribus/undogui.h \
           scribus/undomanager.h \
           scribus/undoobject.h \
           scribus/undostack.h \
           scribus/undostate.h \
           scribus/units.h \
           scribus/unzip.h \
           scribus/useprintermarginsdialog.h \
           scribus/util.h \
           scribus/vgradient.h \
           scribus/vgradientex.h \
           scribus/vruler.h \
           scribus/werktoolb.h \
           scribus/libart/art_kmisc.h \
           scribus/libart/art_render_misc.h \
           scribus/libart/art_render_pattern.h \
           scribus/libart/art_rgb.h \
           scribus/libart/art_rgb_affine_private.h \
           scribus/libart/art_rgb_svp.h \
           scribus/libart/art_rgba_affine.h \
           scribus/pixbuf/gdk-pixbuf-xlib-private.h \
           scribus/pixbuf/gdk-pixbuf-xlib.h \
           scribus/pixbuf/gdk-pixbuf-xlibrgb.h \
           scribus/text/nlsconfig.h \
           scribus/text/storytext.h \
           scribus/plugins/barcodegenerator/barcode.h \
           scribus/plugins/barcodegenerator/barcodegenerator.h \
           scribus/plugins/colorwheel/colorblind.h \
           scribus/plugins/colorwheel/colorwheel.h \
           scribus/plugins/colorwheel/colorwheelwidget.h \
           scribus/plugins/colorwheel/cwdialog.h \
           scribus/plugins/colorwheel/cwsetcolor.h \
           scribus/plugins/fontpreview/fontpreview.h \
           scribus/plugins/fontpreview/fontpreviewplugin.h \
           scribus/plugins/myplugin/myplugin.h \
           scribus/plugins/myplugin/mypluginimpl.h \
           scribus/plugins/newfromtemplateplugin/nftdialog.h \
           scribus/plugins/newfromtemplateplugin/nftemplate.h \
           scribus/plugins/newfromtemplateplugin/nftrcreader.h \
           scribus/plugins/newfromtemplateplugin/nftsettings.h \
           scribus/plugins/newfromtemplateplugin/nfttemplate.h \
           scribus/plugins/pixmapexport/dialog.h \
           scribus/plugins/pixmapexport/export.h \
           scribus/plugins/psimport/importps.h \
           scribus/plugins/psimport/importpsplugin.h \
           scribus/plugins/saveastemplateplugin/satdialog.h \
           scribus/plugins/saveastemplateplugin/satemplate.h \
           scribus/plugins/scriptplugin/cmdcolor.h \
           scribus/plugins/scriptplugin/cmddialog.h \
           scribus/plugins/scriptplugin/cmddoc.h \
           scribus/plugins/scriptplugin/cmdgetprop.h \
           scribus/plugins/scriptplugin/cmdgetsetprop.h \
           scribus/plugins/scriptplugin/cmdmani.h \
           scribus/plugins/scriptplugin/cmdmisc.h \
           scribus/plugins/scriptplugin/cmdobj.h \
           scribus/plugins/scriptplugin/cmdpage.h \
           scribus/plugins/scriptplugin/cmdsetprop.h \
           scribus/plugins/scriptplugin/cmdtext.h \
           scribus/plugins/scriptplugin/cmdutil.h \
           scribus/plugins/scriptplugin/cmdvar.h \
           scribus/plugins/scriptplugin/guiapp.h \
           scribus/plugins/scriptplugin/objimageexport.h \
           scribus/plugins/scriptplugin/objpdffile.h \
           scribus/plugins/scriptplugin/objprinter.h \
           scribus/plugins/scriptplugin/pconsole.h \
           scribus/plugins/scriptplugin/runscriptdialog.h \
           scribus/plugins/scriptplugin/scriptercore.h \
           scribus/plugins/scriptplugin/scripterprefsgui.h \
           scribus/plugins/scriptplugin/scriptplugin.h \
           scribus/plugins/scriptplugin/svgimport.h \
           scribus/plugins/scriptplugin/valuedialog.h \
           scribus/plugins/short-words/configuration.h \
           scribus/plugins/short-words/parse.h \
           scribus/plugins/short-words/shortwords.h \
           scribus/plugins/short-words/swprefsgui.h \
           scribus/plugins/short-words/version.h \
           scribus/plugins/short-words/vlnadialog.h \
           scribus/plugins/svgexplugin/svgexplugin.h \
           scribus/plugins/svgimplugin/color.h \
           scribus/plugins/svgimplugin/svgplugin.h \
           scribus/plugins/fileloader/oldscribusformat/oldscribusformat.h \
           scribus/plugins/fileloader/oldscribusformat/oldscribusformatimpl.h \
           scribus/plugins/fileloader/oodraw/color.h \
           scribus/plugins/fileloader/oodraw/oodrawimp.h \
           scribus/plugins/fileloader/oodraw/stylestack.h \
           scribus/plugins/gettext/csvim/csvdia.h \
           scribus/plugins/gettext/csvim/csvim.h \
           scribus/plugins/gettext/docim/docim.h \
           scribus/plugins/gettext/htmlim/htmlim.h \
           scribus/plugins/gettext/htmlim/htmlreader.h \
           scribus/plugins/gettext/odtim/contentreader.h \
           scribus/plugins/gettext/odtim/odtdia.h \
           scribus/plugins/gettext/odtim/odtim.h \
           scribus/plugins/gettext/odtim/stylereader.h \
           scribus/plugins/gettext/pdbim/pdbim.h \
           scribus/plugins/gettext/sxwim/contentreader.h \
           scribus/plugins/gettext/sxwim/stylereader.h \
           scribus/plugins/gettext/sxwim/sxwdia.h \
           scribus/plugins/gettext/sxwim/sxwim.h \
           scribus/plugins/gettext/textfilter/textfilter.h \
           scribus/plugins/gettext/textfilter/tfdia.h \
           scribus/plugins/gettext/textfilter/tffilter.h \
           scribus/plugins/gettext/txtim/txtim.h
INTERFACES += scribus/aboutpluginsbase.ui \
              scribus/docitemattrprefsbase.ui \
              scribus/docsectionsbase.ui \
              scribus/guidemanagerbase.ui \
              scribus/multiprogressdialogbase.ui \
              scribus/pageitemattributesbase.ui \
              scribus/smlinestylewbase.ui \
              scribus/smreplacediabase.ui \
              scribus/stylemanagerbase.ui \
              scribus/tabexternaltoolswidgetbase.ui \
              scribus/tocindexprefs.ui \
              scribus/tocindexprefsbase.ui \
              scribus/useprintermarginsdialogbase.ui \
              scribus/plugins/barcodegenerator/barcodegeneratorbase.ui \
              scribus/plugins/fontpreview/fontpreviewbase.ui
SOURCES += scribus/about.cpp \
           scribus/aboutplugins.cpp \
           scribus/actionmanager.cpp \
           scribus/aligndistribute.cpp \
           scribus/alignselect.cpp \
           scribus/annot.cpp \
           scribus/annota.cpp \
           scribus/applytemplatedialog.cpp \
           scribus/arrowchooser.cpp \
           scribus/autoform.cpp \
           scribus/autoformbuttongroup.cpp \
           scribus/bookmwin.cpp \
           scribus/bookpalette.cpp \
           scribus/buttonicon.cpp \
           scribus/charselect.cpp \
           scribus/checkDocument.cpp \
           scribus/cmserrorhandling.cpp \
           scribus/cmsprefs.cpp \
           scribus/cmykfw.cpp \
           scribus/collect4output.cpp \
           scribus/colorchart.cpp \
           scribus/colorcombo.cpp \
           scribus/colorm.cpp \
           scribus/colorsetmanager.cpp \
           scribus/commonstrings.cpp \
           scribus/cpalette.cpp \
           scribus/cupsoptions.cpp \
           scribus/customfdialog.cpp \
           scribus/dcolor.cpp \
           scribus/deferredtask.cpp \
           scribus/delpages.cpp \
           scribus/docinfo.cpp \
           scribus/docitemattrprefs.cpp \
           scribus/docsections.cpp \
           scribus/documentchecker.cpp \
           scribus/documentinformation.cpp \
           scribus/druck.cpp \
           scribus/dynamictip.cpp \
           scribus/edit1format.cpp \
           scribus/editformats.cpp \
           scribus/editor.cpp \
           scribus/effectsdialog.cpp \
           scribus/exif.cpp \
           scribus/extimageprops.cpp \
           scribus/fileloader.cpp \
           scribus/filesearch.cpp \
           scribus/fileunzip.cpp \
           scribus/filewatcher.cpp \
           scribus/fmitem.cpp \
           scribus/fontcombo.cpp \
           scribus/fontprefs.cpp \
           scribus/fontreplacedialog.cpp \
           scribus/fparser.cpp \
           scribus/fpoint.cpp \
           scribus/fpointarray.cpp \
           scribus/fpoptimizer.cpp \
           scribus/frameedit.cpp \
           scribus/gradienteditor.cpp \
           scribus/gsutil.cpp \
           scribus/gtaction.cpp \
           scribus/gtdialogs.cpp \
           scribus/gtfont.cpp \
           scribus/gtframestyle.cpp \
           scribus/gtgettext.cpp \
           scribus/gtmeasure.cpp \
           scribus/gtparagraphstyle.cpp \
           scribus/gtstyle.cpp \
           scribus/gtwriter.cpp \
           scribus/guidemanager.cpp \
           scribus/guidemanagercore.cpp \
           scribus/helpbrowser.cpp \
           scribus/hnjalloc.c \
           scribus/hruler.cpp \
           scribus/hyask.cpp \
           scribus/hyphen.c \
           scribus/hyphenator.cpp \
           scribus/hysettings.cpp \
           scribus/imageinfodialog.cpp \
           scribus/insertTable.cpp \
           scribus/inspage.cpp \
           scribus/ioapi.c \
           scribus/javadocs.cpp \
           scribus/keymanager.cpp \
           scribus/langmgr.cpp \
           scribus/layers.cpp \
           scribus/linecombo.cpp \
           scribus/lineformats.cpp \
           scribus/linkbutton.cpp \
           scribus/loadsaveplugin.cpp \
           scribus/loadsaveplugin.moc.cpp \
           scribus/loremipsum.cpp \
           scribus/main.cpp \
           scribus/main_nix.cpp \
           scribus/main_win32.cpp \
           scribus/margindialog.cpp \
           scribus/marginWidget.cpp \
           scribus/md5.c \
           scribus/mdup.cpp \
           scribus/measurements.cpp \
           scribus/menumanager.cpp \
           scribus/mergedoc.cpp \
           scribus/missing.cpp \
           scribus/movepage.cpp \
           scribus/mpalette.cpp \
           scribus/mspinbox.cpp \
           scribus/multiline.cpp \
           scribus/multiprogressdialog.cpp \
           scribus/muster.cpp \
           scribus/navigator.cpp \
           scribus/newfile.cpp \
           scribus/newtemp.cpp \
           scribus/page.cpp \
           scribus/pageitem.cpp \
           scribus/pageitem_imageframe.cpp \
           scribus/pageitem_line.cpp \
           scribus/pageitem_pathtext.cpp \
           scribus/pageitem_polygon.cpp \
           scribus/pageitem_polyline.cpp \
           scribus/pageitem_textframe.cpp \
           scribus/pageitemattributes.cpp \
           scribus/pagelayout.cpp \
           scribus/pageselector.cpp \
           scribus/pagesize.cpp \
           scribus/pdflib.cpp \
           scribus/pdfoptions.cpp \
           scribus/pdfoptionsio.cpp \
           scribus/pdfopts.cpp \
           scribus/picsearch.cpp \
           scribus/picstatus.cpp \
           scribus/pluginmanager.cpp \
           scribus/pluginmanagerprefsgui.cpp \
           scribus/polygonwidget.cpp \
           scribus/polyprops.cpp \
           scribus/prefs.cpp \
           scribus/prefscontext.cpp \
           scribus/prefsdialogbase.cpp \
           scribus/prefsfile.cpp \
           scribus/prefsmanager.cpp \
           scribus/prefspanel.cpp \
           scribus/prefspanel.moc.cpp \
           scribus/prefsreader.cpp \
           scribus/prefstable.cpp \
           scribus/preview.cpp \
           scribus/printerutil.cpp \
           scribus/pslib.cpp \
           scribus/query.cpp \
           scribus/rc4.c \
           scribus/reformdoc.cpp \
           scribus/rulermover.cpp \
           scribus/sampleitem.cpp \
           scribus/sccolor.cpp \
           scribus/sccolorshade.cpp \
           scribus/sccombobox.cpp \
           scribus/scfontmetrics.cpp \
           scribus/scfonts.cpp \
           scribus/scfonts_ttf.cpp \
           scribus/scimage.cpp \
           scribus/scmenu.cpp \
           scribus/scmessagebox.cpp \
           scribus/scpageoutput.cpp \
           scribus/scpainter.cpp \
           scribus/scpainterex_gdi.cpp \
           scribus/scpaths.cpp \
           scribus/scplugin.cpp \
           scribus/scpreview.cpp \
           scribus/scraction.cpp \
           scribus/scrap.cpp \
           scribus/scribus.cpp \
           scribus/scribusapp.cpp \
           scribus/scribuscore.cpp \
           scribus/scribusdoc.cpp \
           scribus/scribusview.cpp \
           scribus/scribuswin.cpp \
           scribus/scribusXml.cpp \
           scribus/scrpalettebase.cpp \
           scribus/sctextstruct.cpp \
           scribus/sctoolbar.cpp \
           scribus/scwinprint.cpp \
           scribus/search.cpp \
           scribus/seiten.cpp \
           scribus/selection.cpp \
           scribus/selfield.cpp \
           scribus/serializer.cpp \
           scribus/shadebutton.cpp \
           scribus/smlinestyle.cpp \
           scribus/smreplacedia.cpp \
           scribus/spalette.cpp \
           scribus/splash.cpp \
           scribus/stencilreader.cpp \
           scribus/story.cpp \
           scribus/styleitem.cpp \
           scribus/styleitem.moc.cpp \
           scribus/stylemanager.cpp \
           scribus/styleselect.cpp \
           scribus/tabcheckdoc.cpp \
           scribus/tabexternaltoolswidget.cpp \
           scribus/tabguides.cpp \
           scribus/tabmanager.cpp \
           scribus/tabpdfoptions.cpp \
           scribus/tabruler.cpp \
           scribus/tabtools.cpp \
           scribus/tabtypography.cpp \
           scribus/tocgenerator.cpp \
           scribus/translationdummy.cpp \
           scribus/tree.cpp \
           scribus/undogui.cpp \
           scribus/undomanager.cpp \
           scribus/undoobject.cpp \
           scribus/undostack.cpp \
           scribus/undostate.cpp \
           scribus/units.cpp \
           scribus/unzip.c \
           scribus/useprintermarginsdialog.cpp \
           scribus/util.cpp \
           scribus/vgradient.cpp \
           scribus/vgradientex.cpp \
           scribus/vruler.cpp \
           scribus/werktoolb.cpp \
           scribus/libart/art_kmisc.c \
           scribus/libart/art_render_misc.c \
           scribus/libart/art_render_pattern.c \
           scribus/libart/art_rgb.c \
           scribus/libart/art_rgb_affine_private.c \
           scribus/libart/art_rgb_svp.c \
           scribus/libart/art_rgba_affine.c \
           scribus/pixbuf/gdk-pixbuf-xlib-drawable.c \
           scribus/pixbuf/gdk-pixbuf-xlib-render.c \
           scribus/pixbuf/gdk-pixbuf-xlib.c \
           scribus/pixbuf/gdk-pixbuf-xlibrgb.c \
           scribus/text/storytext.cpp \
           scribus/plugins/barcodegenerator/barcode.cpp \
           scribus/plugins/barcodegenerator/barcodegenerator.cpp \
           scribus/plugins/barcodegenerator/barcodegenerator.moc.cpp \
           scribus/plugins/barcodegenerator/barcodegeneratorbase.moc.cpp \
           scribus/plugins/colorwheel/colorblind.cpp \
           scribus/plugins/colorwheel/colorwheel.cpp \
           scribus/plugins/colorwheel/colorwheel.moc.cpp \
           scribus/plugins/colorwheel/colorwheelwidget.cpp \
           scribus/plugins/colorwheel/cwdialog.cpp \
           scribus/plugins/colorwheel/cwsetcolor.cpp \
           scribus/plugins/fontpreview/fontpreview.cpp \
           scribus/plugins/fontpreview/fontpreview.moc.cpp \
           scribus/plugins/fontpreview/fontpreviewplugin.cpp \
           scribus/plugins/myplugin/myplugin.cpp \
           scribus/plugins/myplugin/myplugin.moc.cpp \
           scribus/plugins/myplugin/mypluginimpl.cpp \
           scribus/plugins/myplugin/mypluginimpl.moc.cpp \
           scribus/plugins/newfromtemplateplugin/nftdialog.cpp \
           scribus/plugins/newfromtemplateplugin/nftemplate.cpp \
           scribus/plugins/newfromtemplateplugin/nftrcreader.cpp \
           scribus/plugins/newfromtemplateplugin/nftsettings.cpp \
           scribus/plugins/newfromtemplateplugin/nfttemplate.cpp \
           scribus/plugins/pixmapexport/dialog.cpp \
           scribus/plugins/pixmapexport/export.cpp \
           scribus/plugins/psimport/importps.cpp \
           scribus/plugins/psimport/importpsplugin.cpp \
           scribus/plugins/saveastemplateplugin/satdialog.cpp \
           scribus/plugins/saveastemplateplugin/satemplate.cpp \
           scribus/plugins/scriptplugin/cmdcolor.cpp \
           scribus/plugins/scriptplugin/cmddialog.cpp \
           scribus/plugins/scriptplugin/cmddoc.cpp \
           scribus/plugins/scriptplugin/cmdgetprop.cpp \
           scribus/plugins/scriptplugin/cmdgetsetprop.cpp \
           scribus/plugins/scriptplugin/cmdmani.cpp \
           scribus/plugins/scriptplugin/cmdmisc.cpp \
           scribus/plugins/scriptplugin/cmdobj.cpp \
           scribus/plugins/scriptplugin/cmdpage.cpp \
           scribus/plugins/scriptplugin/cmdsetprop.cpp \
           scribus/plugins/scriptplugin/cmdtext.cpp \
           scribus/plugins/scriptplugin/cmdutil.cpp \
           scribus/plugins/scriptplugin/guiapp.cpp \
           scribus/plugins/scriptplugin/objimageexport.cpp \
           scribus/plugins/scriptplugin/objpdffile.cpp \
           scribus/plugins/scriptplugin/objprinter.cpp \
           scribus/plugins/scriptplugin/pconsole.cpp \
           scribus/plugins/scriptplugin/runscriptdialog.cpp \
           scribus/plugins/scriptplugin/scriptercore.cpp \
           scribus/plugins/scriptplugin/scripterprefsgui.cpp \
           scribus/plugins/scriptplugin/scriptplugin.cpp \
           scribus/plugins/scriptplugin/svgimport.cpp \
           scribus/plugins/scriptplugin/valuedialog.cpp \
           scribus/plugins/short-words/configuration.cpp \
           scribus/plugins/short-words/parse.cpp \
           scribus/plugins/short-words/shortwords.cpp \
           scribus/plugins/short-words/swprefsgui.cpp \
           scribus/plugins/short-words/vlnadialog.cpp \
           scribus/plugins/svgexplugin/svgexplugin.cpp \
           scribus/plugins/svgimplugin/svgplugin.cpp \
           scribus/plugins/fileloader/oldscribusformat/oldscribusformat.cpp \
           scribus/plugins/fileloader/oldscribusformat/oldscribusformat.moc.cpp \
           scribus/plugins/fileloader/oldscribusformat/oldscribusformatimpl.cpp \
           scribus/plugins/fileloader/oldscribusformat/oldscribusformatimpl.moc.cpp \
           scribus/plugins/fileloader/oodraw/oodrawimp.cpp \
           scribus/plugins/fileloader/oodraw/stylestack.cpp \
           scribus/plugins/gettext/csvim/csvdia.cpp \
           scribus/plugins/gettext/csvim/csvim.cpp \
           scribus/plugins/gettext/docim/docim.cpp \
           scribus/plugins/gettext/htmlim/htmlim.cpp \
           scribus/plugins/gettext/htmlim/htmlreader.cpp \
           scribus/plugins/gettext/odtim/contentreader.cpp \
           scribus/plugins/gettext/odtim/odtdia.cpp \
           scribus/plugins/gettext/odtim/odtim.cpp \
           scribus/plugins/gettext/odtim/stylereader.cpp \
           scribus/plugins/gettext/pdbim/pdbim.cpp \
           scribus/plugins/gettext/sxwim/contentreader.cpp \
           scribus/plugins/gettext/sxwim/stylereader.cpp \
           scribus/plugins/gettext/sxwim/sxwdia.cpp \
           scribus/plugins/gettext/sxwim/sxwim.cpp \
           scribus/plugins/gettext/textfilter/textfilter.cpp \
           scribus/plugins/gettext/textfilter/tfdia.cpp \
           scribus/plugins/gettext/textfilter/tffilter.cpp \
           scribus/plugins/gettext/txtim/txtim.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_base.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qtclass_qapplication.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qtclass_qframe.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qtclass_qmainwindow.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qtclass_qobject.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qtclass_qscrollview.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qtclass_qwidget.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_qttype_qstring.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribus_pageitem.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribus_scribusdoc.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribus_scribusmainwin.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribus_scribusqapp.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribus_scribusview.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribus_scribuswin.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_scribusstructs.cpp \
           scribus/plugins/scriptplugin/scripter2/scripter2_styles.cpp
TRANSLATIONS += scribus/po/scribus.af.ts \
                scribus/po/scribus.bg.ts \
                scribus/po/scribus.ca.ts \
                scribus/po/scribus.cs_CZ.ts \
                scribus/po/scribus.cy.ts \
                scribus/po/scribus.da_DK.ts \
                scribus/po/scribus.de.ts \
                scribus/po/scribus.de_ol.ts \
                scribus/po/scribus.en_GB.ts \
                scribus/po/scribus.es_ES.ts \
                scribus/po/scribus.eu.ts \
                scribus/po/scribus.fi.ts \
                scribus/po/scribus.fr.ts \
                scribus/po/scribus.gl.ts \
                scribus/po/scribus.hu.ts \
                scribus/po/scribus.id.ts \
                scribus/po/scribus.ja.ts \
                scribus/po/scribus.lt_LT.ts \
                scribus/po/scribus.lu.ts \
                scribus/po/scribus.nb_NO.ts \
                scribus/po/scribus.nl.ts \
                scribus/po/scribus.pl_PL.ts \
                scribus/po/scribus.ru.ts \
                scribus/po/scribus.se.ts \
                scribus/po/scribus.sk_SK.ts \
                scribus/po/scribus.sl.ts \
                scribus/po/scribus.sq.ts \
                scribus/po/scribus.sr.ts \
                scribus/po/scribus.th_TH.ts \
                scribus/po/scribus.tr.ts \
                scribus/po/scribus.uk.ts \
                scribus/po/scribus.zh_CN.ts
