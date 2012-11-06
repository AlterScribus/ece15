try:
    import scribus
except ImportError,err:
    print 'This Python script is written for the Scribus scripting interface.'
    print 'It can only be run from within Scribus.'
    sys.exit(1)


pageitems = scribus.getPageItems()
for item in pageitems:
    if (item[0] == textbox):
        if (item[1] != 4):
            scribus.messageBox('Scribus - Usage Error', "This is not a textframe. Try again.", scribus.ICON_WARNING, scribus.BUTTON_OK)
            sys.exit(2)
contents = scribus.getTextLength(textbox)
