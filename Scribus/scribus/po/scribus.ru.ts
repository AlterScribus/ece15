<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation>getColorNames() -&gt; list

Возвращает список имён цветов, определённых для этого документа.
Если ни один документ не открыт, возвращается список стандартных цветов документа.
</translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation>newDocDialog() -&gt; bool

Показавает диалог &quot;Новый документ&quot;. Создаёт новый документ, если пользователь
примет установки. Не создаёт документ, если пользователь нажимает &quot;Отменить&quot;.
Возвращает значение true, если документ создан.
</translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;name&quot;]) -&gt; string

Возвращает имя цвета заливки объекта &quot;name&quot;. Если &quot;name&quot; 
не задан, используется текущий выбранный объект.
</translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation>moveObject(dx, dy [, &quot;name&quot;])

Смещает обект &quot;name&quot; на dx и dy по отношению к текущей позиции.
Расстояния выражаются в текущей единице измерения документа 
(см. константы UNIT). Если &quot;name&quot; не задано, используется выбранный
в данный момент объект. Если объект &quot;name&quot; принадлежит группе, 
перемещается вся группа.
</translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumer = is the number of the first page in the document used for
    pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
    numbers if you&apos;re creating a document in several parts.

    unit: this value sets the measurement units used by the document. Use a
    predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES, NOFACINGPAGES

    firstSideLeft = FIRSTPAGELEFT, FIRSTPAGERIGHT

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single
button, OK, is displayed. Only the caption and message arguments are required,
though setting an icon and appropriate button(s) is strongly
recommended. The message text may contain simple HTML-like markup.

Returns the number of the button the user pressed. Button numbers start
at 1.

For the icon and the button parameters there are predefined constants available
with the same names as in the Qt Documentation. These are the BUTTON_* and
ICON_* constants defined in the module. There are also two extra constants that
can be binary-ORed with button constants:
    BUTTONOPT_DEFAULT   Pressing enter presses this button.
    BUTTONOPT_ESCAPE    Pressing escape presses this button.

Usage examples:
result = messageBox(&apos;Script failed&apos;,
                    &apos;This script only works when you have a text frame selected.&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolyLine(list, [&quot;name&quot;]) -&gt; string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolygon(list, [&quot;name&quot;]) -&gt; string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createBezierLine(list, [&quot;name&quot;]) -&gt; string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yello and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius isexpressed in points. If &quot;name&quot; is not given the currentlyselected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getProperty(object, property)

Return the value of the property `property&apos; of the passed `object&apos;.

The `object&apos; argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property&apos; argument must be a string, and is the name of the property
to look up on `object&apos;.

The return value varies depending on the type of the property.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object&apos; named `childname&apos;, possibly restricting
the search to children of type name `ofclass&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positve values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>textOverflows([&quot;name&quot;]) -&gt; bool

Returns true if the text in frame &quot;name&quot; overflows.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <source>%1. %2 %3 </source>
        <translation>%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation>Scribus v%1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation>ID сборки:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Свой вклад в разработку внесли:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation>На немецкий:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation>На французский:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation>На итальянский:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation>На венгерский:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation>На украинский:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation>На болгарский:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation>На галльский:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation>На турецкий:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation>На литовский:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation>На польский:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation>На чешский:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation>На словацкий:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation>На датский:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation>На норвежский:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation>На уэльский:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation>На русский:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation>Портирование под Windows:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation>На бразильский:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation>На финский:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation>На словенский:</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation>На баскский:</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>О &amp;программе</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>&amp;Авторы</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>П&amp;ереводы</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>В &amp;Интернете</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Команда разработчиков:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Официальная документация:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Остальная документация:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation>На британский английский:</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation>На шведский:</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Веб-сайт</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Электронный справочник</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Система отслеживания ошибок</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Список рассылки</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation>На каталонский:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation>На корейский:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation>На испанский:</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation>На эсперанто:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation>На сербский:</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Официальные переводы и переводчики:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Предыдущие авторы переводов:</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>О Scribus %1</translation>
    </message>
    <message>
        <source>Portugese (Brazilian):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Afrikaans:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dutch:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support.
Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation>Дополнительные параметры</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation>Создать PostScript Level 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation>Создать только PostScript Level 2
Осторожно! Файл может получиться огромным.</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation>Создать только PostScript Level 1
Осторожно! Файл может получиться огромным.</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation>Зеркально отразить по &amp;горизонтали</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation>Зеркально отразить по &amp;вертикали</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation>Применить вычитание из-под &amp;чёрного</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation>Применить ICC-&amp;профили</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation>PostScript Level &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation>PostScript Level &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation>PostScript Level &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Способ удаления некоторых серых (ахроматических) тонов, 
составленных из голубой, желтой и пурпурной красок, 
и замены их на черный. UCR главным образом воздействует на 
нейтральные по цвету части изображения. Использование этого 
метода способно улучшить печать некоторых изображений, но 
каждый отдельный случай требует особого рассмотрения. 
При использовании этого способа также снижается 
вероятность избыточной яркости изображения. </translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation>Распределение / Выравнивание</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Выравнивание</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>По горизонтали</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation>левыми сторонами</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation>серединой</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation>правыми сторонами</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>По вертикали</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation>верхними сторонами</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation>нижними сторонами</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">мм</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation>&amp;Между:</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation>&amp;Не изменять</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation>В&amp;ыровнять</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation>&amp;Смещение</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation>Распределить ра&amp;вномерно</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation>&amp;Между:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation>Не &amp;изменять</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation>Выр&amp;овнять</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation>Смеще&amp;ние</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation>Распределить р&amp;авномерно</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Применить</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Выключка по левой стороне</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Выключка по правой стороне</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Выключка по центру</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Выключка по ширине</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Принудительная выключка по ширине</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Свойства поля</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Тип:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Кнопка</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Текстовое поле</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Флажок</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Раскрывающийся список</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Список</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Свойства</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Имя:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Подсказка:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Граница</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Цвет:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Не задано</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Тонкая</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Нормальная</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Широкая</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Стиль:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Сплошная</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Пунктирная</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Подчёркнутая</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>С фаской</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Втяжка</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Другое</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Только для чтения</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Необходимо</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>Не экспортировать значение</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Видимость:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Видимо</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Скрыто</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Не  печатается</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Не видно на экране</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Внешний вид</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Текст нажатой кнопки</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Текст для Roll Over</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Пиктограммы</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Использовать пиктограммы</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Нажато</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Roll Over</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Расположение...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>В фокусе</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Инвертировано</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Обведено</translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Нажато</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Многострочное</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Символов не более</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>Символы</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Без прокрутки</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Без проверки орфографии</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Стиль флажка:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Галочка</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Крестик</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Ромб</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Круг</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Звезда</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Квадрат</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>По умолчанию включён</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Редактируем</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation>Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Перейти</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Отправить форму</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Сбросить введённые данные</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Импортировать данные</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Событие:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Mouse Up</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Mouse Down</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Mouse Enter</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Mouse Exit</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>On Focus</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>On Blur</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Сценарий:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Изменить...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Передать на URL</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Переслать данные как HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Откуда взять данные:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Цель</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>В файл:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Изменить...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Страница:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X-Поз:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y-Поз:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Действие</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>Формат поля:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Общий</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Числовой</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Проценты</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Время</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Другой</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Числовой формат</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Цифр в дробной части:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Использовать символ валюты</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Знак валюты перед числом</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Формат</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Процентный формат</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Формат даты</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Формат времени</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Другие сценарии</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Формат:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Комбинация клавиш:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Формат</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>Значение не проверено</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>Значение должно быть больше или равно:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>и меньше или равно:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Другой сценарий проверки:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Проверка</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>Значение не вычислено</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>Значение является</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>суммой</translation>
    </message>
    <message>
        <source>product</source>
        <translation>произведением</translation>
    </message>
    <message>
        <source>average</source>
        <translation>средним арифметическим</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>минимальным из</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>максимальным из</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>следующих полей:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Выбрать</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Другой сценарий для вычисления:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Вычисления</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Введите разделённый запятыми список полей</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>Для использования пиктограмм в кнопках необходима, 
как минимум, пиктограмма для Normal</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation>Изображения (*.tif *.png *.jpg *.xpm);;Файлы Postscript (*.eps);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Пример:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Изменение выделения</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Шрифт для использования с PDF 1.3:</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Флажок игнорируется для PDF 1.3
</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-документы (*.pdf);;Все файлы (*)</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Свойства аннотации</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ссылка</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Внешняя ссылка</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Внешняя веб-ссылка</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Цель</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>PDF-документы (*.pdf);;Все файлы (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Тип:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Из&amp;менить...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>С&amp;траница:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>&amp;X-Поз.</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Поз:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation>Применить шаблон</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Шаблон:</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation>Применить к &amp;текущей странице</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation>Применить ко всем &amp;чётным страницам</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation>Применить ко всем &amp;нечётным страницам</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation>На&amp;чиная со страницы:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>До:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Запасник</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation>Запасники (*.scs);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Объект</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Новая запись</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Переименовать</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>Имя &quot;%1&quot; уже использовано.
Выберите другое.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Открыть...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Сохранить &amp;как...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation>
&amp;Небольшой</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation>&amp;Средний</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation>&amp;Большой</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>&amp;Предпросмотр</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Имя:</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Закладки</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Переместить закладку</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Вставить закладку</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Закладки</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Расположение</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Способ:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Только название</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Только пиктограмма</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Название под пиктограммой</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Название над пиктограммой</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Название справа от пиктограммы</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Название слева от пиктограммы</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Название поверх пиктограммы</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Масштабировать:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Всегда</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Когда пиктограмма слишком мала</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Когда пиктограмма слишком велика</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Никогда</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Как масштабировать:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Пропорционально</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Непропорционально</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Пикт.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Сбросить</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">Настройки управления цветом</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Системные профили</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Типы вывода</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Перцепционный</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Относительно колориметрический</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Абсолютно колориметрический</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation>Стандартный цветовой профиль для 
импортированных изображений</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Стандартный цветовой профиль 
для сплошных тонов на странице</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Цветовой профиль, созданный вами или полученный 
от производителя устройства. Этот должен быть 
профиль для конкретного монитора, а не общий 
профиль  (например, sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Цветовой профиль для вашего принтера, созданный 
его производителем. Этот профиль дожен быть 
уникальным для вашего принтера, а не общим 
профилем  (например, sRGB).</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Компенсация чёрной точки -- это метод улучшения 
контрастности фотографий. Его рекомендуется 
использовать при наличии фотографий в документе.</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Стандартный тип рендеринга для вашего монитора. 
Если вы не знаете, что это такое, выберите 
относительно колориметрический или перцептуальный.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Стандартный тип рендеринга для вашего принтера. 
Если вы не знаете, что это такое, выберите 
относительно колориметрический или перцептуальный.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Включить мягкий режим цветопробы вашего 
документа на основе выбранного профиля для принтера.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Способ отображения на экране тех цветов, которые 
могут быть некорректно напечатаны. Он требует очень 
точных профилей и предназначен лишь для предупреждения.</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Включить управление цветом</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation>&amp;Изображения:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>&amp;Сплошные тона:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Монитор:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>&amp;Принтер:</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>М&amp;онитор:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>Пр&amp;интер:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>&amp;Эмулировать принтер на экране</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Пометить цвета вне &amp;гаммы</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>Использовать компенсацию &amp;чёрной точки</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Изменить цвет</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <source>Web Safe RGB</source>
        <translation>RGB для web</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Новый</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Старый</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>C:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation>M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>K:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation>Динамические цветовые полосы</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Статические цветовые полосы</translation>
    </message>
    <message>
        <source>R:</source>
        <translation>R:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>G:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation>Цвет с таким именем уже существует</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>Карта цветов HSV</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Имя:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>Цветовая &amp;модель</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation>Вы не можете создать цвет с именем &quot;%1&quot;.
Это имя зарезервировано для прозрачного цвета</translation>
    </message>
</context>
<context>
    <name>ChTable</name>
    <message>
        <source>You can see a thumbnail if you press
and hold down the right mouse button

The Insert key inserts a Glyph into the Selection below
and the Delete key removes the last inserted one</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Select Character:</source>
        <translation type="unfinished">Выбор символа:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Шрифт:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">В&amp;ставить</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">О&amp;чистить</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Закрыть</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished">Вставить символы под курсор в тексте</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished">Удалить текуее выделение(ия).</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="unfinished">Закрыть это диалог и вернуться к правке текста.</translation>
    </message>
    <message>
        <source>Full Character Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basic Latin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin-1 Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General Punctuation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Super- and Subscripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Currency Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letterlike Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number Forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arrows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mathematical Operators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Box Drawing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Block Elements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometric Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miscellaneous Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dingbats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small Form Variants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ligatures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Specials</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished">Греческий</translation>
    </message>
    <message>
        <source>Greek Extended</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyrillic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyrillic Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic Extended A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic Extended B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Current Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problems</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Glyphs missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text overflow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is not on a Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Missing Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image has a DPI-Value less than %1 DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object has transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a PDF-Annotation or Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Документ</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Страница</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Горизонтальный градиент</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Вертикальный градиент</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Диагональный градиент</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Перекрёстно-диагональный градиент</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Радиальный градиент</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Непрозрачность:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Тень:</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation>Изменить свойства цвета линии</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Изменить свойства заливки линии</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Насыщение цвета</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Обычная или градиентная заливка</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Установить прозрачность для выбранного цвета</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation>Цвет выбранного объекта</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Линейный градиент</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Радиальный градиент</translation>
    </message>
    <message>
        <source>X1:</source>
        <translation>X1:</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation>Y1:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation>X2:</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation>Y2:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move the start of the Gradient Vector with the left Mouse Button pressed and
nove the end of the Gradient Vector with the right Mouse Button pressed</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation>Параметры импорта CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Разделитель полей:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Разделитель значений:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Первая строка как заголовок</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Параметры печати</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Параметр</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Набор страниц</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Все страницы</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Только чётные</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Только нечётные</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Зеркалирование</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Ориентация</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Портрет</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Альбом</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Страниц на лист</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>страница на лист</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>страниц на лист</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation>Здесь отображаются различные параметры CUPS для печати.
Состав параметров зависит от используемой модели принтера.
наличие поддержки можно проверить в диалоге &quot;О Scribus&quot;, 
вызываемом через меню &quot;Справка&quot;. Найдите сокращение вида
&quot;C-C-T&quot;, которое расшифровывается так: 
C=CUPS C=littlecms T=TIFF
Отсутствующая библиотека помечается символом *</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>Кодировка:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Перемещается в каталог с документами.
Это можно изменить через диалог общих настроек.</translation>
    </message>
    <message>
        <source>&amp;Compress File</source>
        <translation>&amp;Сжать файл</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Включить шрифты</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Удаление цвета</translation>
    </message>
    <message>
        <source>?</source>
        <translation type="obsolete">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Заменить на:</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="obsolete">Удалить цвет:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Delete Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation>Удаление страниц</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Удалить от:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>до:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Delete From:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation type="obsolete">Шрифт отсутствует</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">Шрифт %1 не установлен.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Использовать</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">вместо</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">ОК</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Информация о документе</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Заголовок:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Автор:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Ключевые слова:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Опи&amp;сание:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>Изда&amp;тель:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>Соа&amp;вторы:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>Д&amp;ата:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>&amp;Тип:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>Фор&amp;мат:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>Идентиф&amp;икатор:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>&amp;Источник:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>Я&amp;зык:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>О&amp;тношение:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>&amp;Cфера действия:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Пра&amp;ва:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation>До&amp;кумент</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>&amp;Подробнее</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Человек или организация, в первую очередь 
ответственные за создание содержимого 
этого документа. Это поле может быть встроено 
в документ Scribus для справки, равно как и 
в метаданные для PDF</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Имя, данное этому документу.
Это поле может быть встроено в 
документ Scribus для справки, 
равно как и в метаданные для PDF</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Характеристика этого документа.
Это поле предназначено для краткого описания документа.
Оно встраивается в PDF при экспорте</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>Тема этого документа. Это поле для 
ключевых слов, которые будут встроены 
в PDF для упрощения последующего 
поиска и индексирования PDF-файлов</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Человек или организация, ответственные за выпуск этого документа</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Человек или организация, внесшие вклад 
в содержимое этого документа</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Дата, связанная с событием в жизненном цикле этого 
документа, в формате ГГГГ-ММ-ДД согласно ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>Природа жанра содержимого этого документа, например, категории, функции и т.д.</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>Физическая или цифровая форма этого документа. 
Рекомендуется  указать тип носителя и количество.
Указание RFC2045, RFC2046 для MIME-типов также не помешает.</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Уникальная ссылка на этот документ посредством ISBN или URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>Код языка, на котором написано содержимое этого 
документа -- обычно, в коде ISO-639, обычно 
имеющее суффикс с дефисом и кодом страны 
по ISO-3166, например, en-GB, fr-CH.</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Ссылка на документ с родственной тематикой, 
возможно, с формальным идентификатором, 
таким как ISBN или URI.</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>Область охвата данного документа, возможно, 
включая место, время и область юрисдикции.</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Информация о правах на документ и его содержимое, 
например, авторские и патентные права, торговая марка.</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Ссылка на документ, производным от которого является 
данный документ, например, в виде ISBN или URI.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Настройка принтера</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Все</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation>Файлы Postscript (*.ps);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cyan</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Black</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Вставить сюда разделённый запятыми список 
маркёров, где каждый маркёр может быть * для 
всех страниц, 1-5 для диапазона страниц или 
номером одиночной страницы.</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Путь к принтеру</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Параметры...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Файл:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>&amp;Альтернативная команда для принтера</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation>Использовать альтернативное средство 
настройки печати вроде kprinter или gtklp для 
задания дополнительных параметров печати</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>&amp;Команда:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Диапазон</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>Напечатать &amp;все</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Напечатать те&amp;кущую страницу</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Напечатать ди&amp;апазон</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>Ко&amp;личество копий:</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation>Напечатать &amp;обычным образом</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation>Напечатать с ц&amp;ветоделением</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation>Напечатать в цв&amp;ете (если возможно)</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation>Напечатать в оттенках &amp;серого</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation>До&amp;полнительные параметры...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>&amp;Напечатать</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>Импорт файла:
%1
не удался!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Критическая ошибка</translation>
    </message>
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Правка стиля</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Символ</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation>Междустрочные интервалы</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Между строк</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation>Стиль с таким именем уже существует</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation>Эффект:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Не задано</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">pp</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Имя стиля абзаца</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Шрифт выделенного текста или объекта</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Кегль шрифта</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Цвет заливки текста</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Цвет контура текста</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation>Создать (буквицу) увеличенную первую букву абзаца.</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Задать общую высоту буквицы в строках</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation>Выровнять по опорной сетке</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Отбивка перед абзацем</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Отбивка под абзацем</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Табуляторы и отступы</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Имя:</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation>&amp;Шрифт:</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation>&amp;Размер:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation>&amp;Выключка:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation>&amp;Буквица</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>&amp;Линии:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>Цвет &amp;заливки:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation>Цвет &amp;контура:</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation>Подстроить до опорной &amp;сетки</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation>Между с&amp;трок:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation>&amp;Над:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation>&amp;Под:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Sample text of this paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged
for blue quartz</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation>Редактор</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation>Javascripts (*.js);;Все файлы (*)</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Открыть...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Сохранить &amp;как...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>Сохр&amp;анить и выйти</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>Вы&amp;йти без сохранения</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Отменить</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>Пов&amp;торить</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Вырезать</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>С&amp;копировать</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Вст&amp;авить</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>О&amp;чистить</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>Полу&amp;чить имена полей</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>&amp;All pages</source>
        <translation>&amp;Все страницы</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>Сменить каталог вывода</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>Каталог вывода -- каталог, в который помещаются изображения.
Файлы будут иметь имена вида &apos;&apos;имядокумента-№страницы.расширение&quot;</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Только текущую страницу</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Возможные форматы для экспорта</translation>
    </message>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Выберите каталог для экспорта</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Экспортировать как изображение</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Экспортировать в каталог:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>&amp;Формат:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Качество:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Разрешение:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Диапазон</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>&amp;Текущая страница</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>Д&amp;иапазон</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Экспортировать диапазон страниц</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Вставить сюда разделённый запятыми список 
маркёров, где каждый маркёр может быть * для 
всех страниц, 1-5 для диапазона страниц или 
номером одиночной страницы.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Экспортировать все страницы</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Разрешение изображений
Используйте 72 dpi для изображений, 
ориентированных на просмотр с экрана</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>Качество изображений - 100% является 
наилучшим, 1% - наихудшим</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Раз&amp;мер:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Размер изображений. 100% - без изменений, 200% - в 2  раза больше и т.д.</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Размер:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Название:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Без заголовка</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Автор:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Не известно</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Документ Scribus</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
    </message>
    <message>
        <source>Colorspace:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation>Цвета</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документы (*.sla *.sla.gz *.scd *.scd.gz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документы (*.sla *.scd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Копия %1</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Наборы цветов</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Текущий набор цветов:</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Выберите загружаемый набор цветов </translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>Сохранить текущий набор цветов</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Удалить неиспользуемые цвета из 
текущего набора цветов в документе</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation>Добавить цвета к текущему набору из другого документа</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Создать новый цвет для текущего набора</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>Изменить выбранный цвет</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Сделать копию выбранных цветов</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>Удалить выбранные цвета</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Сделать текущий набор цветов стандартным</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Выберите имя</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Новый цвет</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Из файла</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Изменить</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>Проду&amp;блировать</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>Удалить &amp;неиспользуемые</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>Со&amp;хранить набор цветов</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Имя:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation type="obsolete">Глобальные настройки шрифтов</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Доступные шрифты</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Замена шрифтов</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Дополнительные пути</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Да</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Имя шрифта</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Использовать</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Встраивать в:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="obsolete">Подмножество</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Тип</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="obsolete">Путь к шрифту</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Замена</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Выберите каталог</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>&amp;Доступные шрифты</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>Замена &amp;шрифтов</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Дополнительные &amp;пути</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>До&amp;бавить...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Имя шрифта</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation type="unfinished">Использовать</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation type="unfinished">Встраивать в:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Подмножество</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished">Путь к шрифту</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;ОК</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">А ещё неплохо бы на зависть другим уметь красиво читать и писать</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Просмотр шрифтов</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation type="obsolete">Добавить выбранный шрифт в Стиль (меню &quot;Шрифт&quot;)</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation type="obsolete">Закрыть этот диалог</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Имя шрифта</translation>
    </message>
    <message>
        <source>Doc</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
        <translation type="unfinished">Тип</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Подмножество</translation>
    </message>
    <message>
        <source>Access</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <comment>font preview</comment>
        <translation type="unfinished">Просмотр шрифтов</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>font preview</comment>
        <translation type="unfinished">&amp;ОК</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>font preview</comment>
        <translation type="unfinished">О&amp;тменить</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished">Добавить выбранный шрифт в Стиль (меню &quot;Шрифт&quot;)</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation type="unfinished">Закрыть этот диалог</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished">А ещё неплохо бы на зависть другим уметь красиво читать и писать</translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <source>Font Substitution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This Document contains some Fonts that are not installed on your System,
please choose a suitable replacement for them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Original Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Substitution Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these substitutions permanent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ОК</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Положение:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation>Здесь можно, добавить, изменить или удалить опорные точки.</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Настройка направляющих</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Горизонтальные</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Вертикальные</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Поз:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Добавить</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-Поз:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>До&amp;бавить...</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>&amp;Блокировать направляющие</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Извините, но руководство недоступно! 
Посетите сайт http://docs.scribus.net 
для получения актуальной документации.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Содержание</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ссылка</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Электронная справка по Scribus</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Возможен перенос</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Принять</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Пропустить</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Вставка страницы</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Настройки модуля переносов</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Размер наименьшего переносимого слова.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Максимально допустимое количество переносов подряд.
Значение &quot;0&quot; аналогично бесконечному количеству переносов.</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>Я&amp;зык:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>На&amp;именьшее слово:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>Предлагать &amp;варианты переноса</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Автоматически вставлять по мере &amp;набора текста</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Диалоговое окно с вариантами каждого переноса будет 
появляться после вызова функции вставки переносов</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Вставлять переносы по мере набора текста</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Переносов &amp;подряд не более:</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Вставка страницы</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Вставляется</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>перед страницей</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>после страницы</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>в конец</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Шаблон (Правая страница):</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="obsolete">&amp;Вставка</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>Страниц(а)</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="obsolete">Шаблон (&amp;Левая страница):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Шаблон:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">В&amp;ставить</translation>
    </message>
    <message>
        <source>Template (&amp;Left Page):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Template (&amp;Right Page):</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation>Вставить таблицу</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation>Строк:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation>Столбцов:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>New Script</source>
        <translation>Новый сценарий</translation>
    </message>
    <message>
        <source>Edit JavaScripts</source>
        <translation>Изменить JavaScripts</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Добавить</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Новый сценарий</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Нет</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation>Вы действительно хотите удалить этот сценарий?</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Настройка горячих клавиш</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Действие</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Комбинация</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Выберите комбинацию клавиш для действия</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation>Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation>Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation>Shift</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation>Ctrl+</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Без горячих клавиш</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>&amp;Собственная комбинация</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>&amp;Установить</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation>Эта комбинация уже использована</translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation>Слои</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation>Добавить новый слой</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Удалить слой</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation>Поднять слой</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation>Опустить слой</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation>Новый слой</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation>Вы хотите заодно удалить все объекты этого слоя?</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Имя</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Правка стилей линий</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Копия %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Новый стиль</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документы (*.sla *.sla.gz *.scd *.scd.gz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документы (*.sla *.scd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Из файла</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>Проду&amp;блировать</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Нет</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Вы действительно хотите удалить этот стиль?</translation>
    </message>
</context>
<context>
    <name>MSpinBox</name>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
</context>
<context>
    <name>Macro</name>
</context>
<context>
    <name>MacroManager</name>
</context>
<context>
    <name>ManageMacrosDialog</name>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">Описание</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="obsolete">&amp;Изменить...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Импортировать</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Многократное дублирование</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>Ко&amp;личество копий:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>Смещение по &amp;горизонтали:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>Смещение по &amp;вертикали:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Расстояния</translation>
    </message>
    <message>
        <source>X1:</source>
        <translation>X1:</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation>Y1:</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation>X2:</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation>Y2:</translation>
    </message>
    <message>
        <source>DX:</source>
        <translation>ДX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation>ДY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>Угол:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Длина:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
</context>
<context>
    <name>MenuTest</name>
    <message>
        <source>Script error</source>
        <translation type="unfinished">Ошибка сценария</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished">Если вы пытались выполнить сценарий из стандартной поставки Scribus, 
сообщите об ошибке на &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;, пожалуйста.</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">&amp;Показать консоль</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Спрятать &amp;консоль</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished">Это сообщение скопировано в буфер обмена.
Нажмите Ctrl+V, чтобы вставить его в жалобную книгу.</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Изменить...</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Импортировать</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Отменить</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документы (*.sla *.sla.gz *.scd *.scd.gz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документы (*.sla *.scd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Import Template</source>
        <translation>Импортировать шаблон</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Импортировать страницы</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="obsolete">Из документа:</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="obsolete">Импортировать страницы:</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Вставить сюда разделённый запятыми список 
маркёров, где каждый маркёр может быть * для 
всех страниц, 1-5 для диапазона страниц или 
номером одиночной страницы.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>из 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Создать страницы</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">перед страницей</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">после страницы</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">в конец</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>из %1</translation>
    </message>
    <message>
        <source>&amp;From Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chan&amp;ge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import Page(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens importWhereData
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>After Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Импортировать</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished">Шрифт отсутствует</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished">Шрифт %1 не установлен.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished">Использовать</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished">вместо</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;ОК</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Перемещение страниц</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Скопировать страницу</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Переместить страницу(ы):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>до:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">перед страницей</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">после страницы</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">в конец</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Move Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>After Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At End</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Свойства</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Геометрия</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Уровень</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Показать кривую</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Смещение от начала кривой:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Расстояние от кривой:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Расстояние до текста</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation>Настраиваемые расстояния</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Входной профиль:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Тип рендеринга:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Перцепционный</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Относительно колориметрический</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Абсолютно колориметрический</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Левая точка</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Конечные точки</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Фацетное соединение</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Фасочное соединение</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Скруглённое соединение</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Плоская шляпка</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Квадратная шляпка</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Округлая шляпка</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Стилей нет</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Кегль шрифта</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Межстрочное расстояние</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Задаваемый кернинг</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>Имя &quot;%1&quot; уже использовано.
Выберите другое.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Очертание:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Опорная точка:</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Тень:</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Линии ячейки</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Линия вверху</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Линия слева</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Линия справа</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Линия внизу</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Имя выбранного объекта</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Горизонтальное положение опорной точки</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Вертикальное положение опорной точки</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Ширина</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Высота</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Вращение объекта относительно опорной точки</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Точка, относительно которой вычисляются углы поворота</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Выберите верхний левый угол в качестве опорной точки</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Выберите верхний правый угол в качестве опорной точки</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Выберите нижний левый угол в качестве опорной точки</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Выберите нижний правый угол в качестве опорной точки</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Выберите центр в качестве опорной точки</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Перевернуть по горизонтали</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Перевернуть по вертикали</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>На уровень выше</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>На уровень ниже</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>На самый высокий уровень</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>На самый низкий уровень</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Заблокировать или разблокировать объект</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Заблокировать или разблокировать размер объекта</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Разрешить или запретить печать объекта</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Шрифт выделенного текста или объекта</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Изменяемая ширина символов</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Цвет контура текста</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Цвет заливки текста</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Насыщенность цвета контура текста</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Насыщенность цвета заливки текста</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Стиль текущего абзаца</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Изменить настройки левой или конечной точек</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Шаблон линии</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Толщина линии</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Тип соединения линий</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Тип окончания линий</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Стиль линии текущего объекта</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Выбрать очертание рамки...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Изменить очертание рамки...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Указать радиус скругления углов</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Количество столбцов в текстовой рамке</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Расстояние между столбцами</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Расстояние между текстом и верхом рамки</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Расстояние между текстом и низом рамки</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Расстояние между текстом и левой стороной рамки</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Расстояние между текстом и правой стороной рамки</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Изменить табуляторы текстовой рамки...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Разрешить изображению иметь отличный от рамки размер</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Горизонтальное смещение изображения относительно рамки</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Вертикальное смещение изображения относительно рамки</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Изменить размер изображения по горизонтали</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Изменить размер изображения по вертикали</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>Сохранить пропорции при масштабировании</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Уместить изображение в рамке</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Использовать пропорции изображения вместо пропорций рамки</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Сохранять соотношение сторон</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Исходный профиль для изображения</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation>Тип рендеринга изображения</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Свойства текста на контуре</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Отображает уровень объекта  относительно других.
Ноль обозначает, что объект находится в самом низу.</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation>Включить обтекание текста вокруг 
объектов более высоких уровней</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Переключиться между интервалом и шириной столбцов</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Ширина столбцов</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>О&amp;чертания</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Текст</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>&amp;Изображение</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Линия</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Цвета</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-Поз:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Поз:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Ширина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Высота:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Поворот:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>Изменить &amp;очертания...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>За&amp;круглённые
углы:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>С&amp;толбцов:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Интервал:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>С&amp;верху:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>С&amp;низу:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>С&amp;лева:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>С&amp;права:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>Т&amp;абуляторы...</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>Текст о&amp;бтекает рамку</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>Использовать &amp;площадку</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>&amp;Контурная линия</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Кегль шрифта:</translation>
    </message>
    <message>
        <source>&amp;Kerning:</source>
        <translation>&amp;Кернинг:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation>Между с&amp;трок:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>С&amp;тиль:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>Я&amp;зык:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Свободное масштабирование</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>X-М&amp;асшт.:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>Y-Мас&amp;шт.:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>&amp;Масштабировать до размера рамки</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>Пропорц&amp;ионально</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Базовая точка:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>&amp;Тип линии:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>То&amp;лщина линии:</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>&amp;Края:</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>&amp;Окончания:</translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation>Использовать для расчёта обтекания 
текста площадку вместо контура рамки</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation>Использовать для расчёта обтекания текста вторую 
линию, исходно основанную на контуре рамки</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Язык для расстановки 
переносов в рамке</translation>
    </message>
    <message>
        <source>&amp;X1:</source>
        <translation>&amp;X1:</translation>
    </message>
    <message>
        <source>X&amp;2:</source>
        <translation>X&amp;2:</translation>
    </message>
    <message>
        <source>Y&amp;1:</source>
        <translation>Y&amp;1:</translation>
    </message>
    <message>
        <source>&amp;Y2:</source>
        <translation>&amp;Y2:</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Написание справа налево</translation>
    </message>
    <message>
        <source>Start Arrow:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End Arrow:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation>Изменить стиль</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Плоская шляпка</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Квадратная шляпка</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Округлая шляпка</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Фацетное соединение</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Фасочное соединение</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Скруглённое соединение</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Толщина линии:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source> pt </source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Целая линия</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Линейный пунктир</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Пунктир</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Тире-точка</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Тире-точка-точка</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>Имя &quot;%1&quot; уже использовано.
Выберите другое.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>MusterPages</name>
    <message>
        <source>Edit Templates</source>
        <translation type="unfinished">Правка шаблонов</translation>
    </message>
    <message>
        <source>Duplicates the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Deletes the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds a new master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loads master page(s) from another document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Предупреждение</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="unfinished">Вы действительно хотите удалить этот шаблон?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">&amp;Нет</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;Да</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">&amp;Имя:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="unfinished">Новый шаблон</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">Копия %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Имя:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">Копия #%1 из </translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Правка шаблонов</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Предупреждение</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Копия %1</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Новый шаблон</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Копия #%1 из </translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Имя:</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Из файла</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Новый</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">Проду&amp;блировать</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Закрыть</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Нет</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Да</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Имя:</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Вы действительно хотите удалить этот шаблон?</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation>Новый документ</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Формат страницы</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Собственный</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Портрет</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Альбом</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Направляющие полей</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Пункты (pt)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Дюймы (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Пики (p)</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation>Направляющие столбцов</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Миллиметры (mm)</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Размер страницы документа, стандартный 
либо заданный пользователем</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Ориентация страниц документа</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Ширина страниц документа, настраиваемая в том случае, если 
выбраны пользовательские настройки размера страницы</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Настраиваемая высота страниц документа</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Включить одиночный или парный режим страниц</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Сделать первую страницу левой страницей документа</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Расстояние между направляющей верхнего поля и краем страницы</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Расстояние между направляющей нижнего поля и краем страницы</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Расстояние между направляющей нижнего поля и краем страницы.
Если включён режим парных страниц, пространство полей может 
быть использовано для просчёта правильных полей для переплёта</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Расстояние между направляющей правого поля и краем страницы.
Если страницы парные, то пространство полей можно использовать 
для расчёта брошюровки</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation>Номер первой страницы в документе</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Единица измерения по умолчанию</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Автоматически создавать текстовые рамки 
при добавлении новых страниц</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Количество столбцов в автоматически 
создаваемых текстовых рамках</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Расстояние между автоматически 
создаваемыми столбцами</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Раз&amp;мер:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Ор&amp;иентация:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Ширина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Высота:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Парные &amp;страницы</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>&amp;Левая страница первой</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>С&amp;лева:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>С&amp;права:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>С&amp;верху:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>С&amp;низу:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>&amp;Номер первой страницы:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Стандартная &amp;единица:</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>&amp;Автосоздание текстовых рамок</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Интервал:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>С&amp;толбцов:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Изнутри:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>Снару&amp;жи:</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executive</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Ledger</translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation>Левая страница</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Правая страница</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Узлы</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Переместить узлы</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Переместить контрольные точки</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Добавить узлы</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Удалить узлы</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Восстановить контрольные точки</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Восстановить эту контрольную точку</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation>Если флажок выставлен, используются 
координаты относительно страницы, в 
противном случае -- относительно объекта.</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>&amp;Абсолютные координаты</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-Поз:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Поз:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>&amp;Изменить контурную линию</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>&amp;Восстановить 
контурную линию</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>&amp;Завершить</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Переместить контрольные точки независимо</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Переместить контрольные точки симметрично</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Разомкнуть многоугольник или кривую Безье</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Замкнуть эту кривую Безье</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Зеркально отразить этот 
контур по горизонтали</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Зеркально отразить этот 
контур по вертикали</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Разрезать контур по 
горизонтали направо</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Разрезать контур по 
горизонтали направо</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Разрезать контур 
по вертикали вверх</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Разрезать контур 
по вертикали вниз</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Вращать контур против 
часовой стрелки</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Вращать контур по 
часовой стрелке</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation>Уменьшить контур на показываемые %</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Увеличить контур на показываемые %</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Угол вращения</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation>% увеличения или уменьшения</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Включить режим правки контурной линии</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Восстановить исходную контурную линию</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation>Консоль для сценариев</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Диапазон экспорта</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">Параметры</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">По левому полю</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">По правому полю</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="obsolete">dpi</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Общее</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Внедрение</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Доступные шрифты:</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="obsolete">Внедряемые шрифты:</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Страница</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Эффекты</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="obsolete">сек</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">Без эффекта</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Blinds</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Box</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Dissolve</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Мерцание</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Разделение</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Wipe</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Горизонтально</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Вертикально</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="obsolete">Изнутри</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Снаружи</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">Слева направо</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">Сверху вниз</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">Снизу вверх</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">Справа налево</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Пароли</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Настройки</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Вывод на печать</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Сплошные тона:</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="obsolete">Профиль:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Тип рендеринга:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Перцепционный</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Относительно колориметрический</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Насыщенность</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Абсолютно колориметрический</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Изображения:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="obsolete">Не использовать встроенные ICC-профили</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="obsolete">Тип вывода в PDF/X-3</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="obsolete">Рамка под обрез</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="obsolete">Просмотра с монитора / Web</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Характеристики изображения</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="obsolete">Автоматически</translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="obsolete">JPEG</translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="obsolete">Zip</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Не задано</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="obsolete">Максимальное</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="obsolete">Высокое</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Среднее</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="obsolete">Низкое</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="obsolete">Наихудшее</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="obsolete">Из верхнего левого в правый нижний</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="obsolete">Экспортировать все страницы в PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="obsolete">Экспортировать часть страниц в PDF</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Как долго отображается страница</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Продолжительность действия эффекта.
Меньшее число ускорит его, большее - замедлит.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="obsolete">Применить выбранный эффект ко всем страницам.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Основной пароль, которым защищены все параметры 
безопасности экспортируемого PDF-файла</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="obsolete">Встроить цветовой профиль для сплошных тонов</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="obsolete">Встроить цветовой профиль для изображений</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="obsolete">Не использовать цветовые профили, 
встроенные в исходные изображения</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="obsolete">Расстояние от линии обреза до верха физической страницы</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="obsolete">Расстояние от линии обреза до низа физической страницы</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="obsolete">Расстояние от линии обреза до левого края физической страницы</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="obsolete">Расстояние от линии обреза до правого края физической страницы</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="obsolete">&amp;Общие</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="obsolete">&amp;Шрифты</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="obsolete">Здесь определяется совместимость с PDF разных версий.
Выберите Acrobat 4.0, если вам нужна максимальная совместимость.
Выберите Acrobat 5.0, если в документе используются особенности 
PDF 1.4 (например, полупрозрачность) или 128-битное шифрование.
Выберите PDF/X-3, если предполагается профессиональная 
высококачественная полиграфия. Этот вариант доступен при включённой 
системе управления цветом (CMS).</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Здесь определяется брошюровка страниц в PDF. Если вы не знаете, 
что это такое, то лучше оставить стандартную настройку: &quot;Слева&quot;.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Если параметр включён, Scribus создаст миниатюры для 
каждой страницы в PDF, которые могут использоваться 
для навигации по документу в некоторых программах.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="obsolete">Если параметр включён, Scribus создаст PDF-Articles, 
что полезно для навигации по связанным статьям в PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Встроить закладки, созданные в документе. 
Это позволит удобно перемещаться по PDF-документу.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Экспортировать разрешение текста и векторной 
графики. На растровые изображения, подобные 
фотографиям, это не распространяется.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Сжимать текст и графику. Без особой причины 
отключать этот параметр не стоит. Это помогает 
уменьшить размер получаемого PDF-файла.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Способ сжатия изображения
Автоматический - Scribus сам выбирает подходящий способ.
ZIP - подходит для изображений со сплошными тонами.
JPEG - больше подходит для создания PDF файлов меньшего 
размера с большим количеством фотографий (и по 
возможности небольшой потерей в качестве).
Для типичных задач рекомендуется оставить 
автоматический выбор типа сжатия.</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="obsolete">Изменить разрешение растровых изображений до указанного.
Если флажок не выставлен, будут использованы исходные 
значения количества точек на дюйм.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="obsolete">dpi (кол-во точек на дюйм) при экспорте изображений</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Встраивать шрифтовые файлы в документы PDF. 
Встраивание этих файлов позволит сохранить вид 
документа при чтении с любого компьютера.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Разрешить презентационные эффекты
при использовании Acrobat Reader 
в полноэкранном режиме.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="obsolete">Показывать миниатюры каждой 
указанной выше страницы.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="obsolete">Тип отображаемого эффекта</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="obsolete">Направление движения линий в эффектах split и blind.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="obsolete">Стартовая позиция эффектов box и split.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="obsolete">Направление эффектов glitter и wipe.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Здесь определяются настройки безопасности в экспортируемом PDF.
Выберите Acrobat 4.0, если вам нужно 40-битное шифрование.
Выберите Acrobat 5.0, если вам нужно 128-битное шифрование.
Помните, что шифрование в PDF не настолько надёжно, как системы 
шифрования GPG или PGP.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Цветовая модель для вывода в PDF.
&quot;Экран/Веб&quot; подходит для просмотра документов с 
экрана и печати на обычных струйных принтерах.
&quot;Принтер&quot; необходимо выбрать при печати на 
настоящий 4-цветный CMYK принтер.</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="obsolete">Цветовой профиль для сплошных тонов</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="obsolete">Тип рендеринга сплошных тонов</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="obsolete">Цветовой профиль для изображений</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="obsolete">Тип рендеринга изображений</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="obsolete">Профиль вывода на печать. При возможности 
получите информацию в вашей типографии 
о необходимом профиле.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Обязательная строка для PDF/X-3 или PDF не пройдёт 
тест на соответствие требованиям PDF/X-3. 
Рекомендуется использовать название документа.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Уровни сжатия: Минимальный (25%), Низкий (50%), 
Средний (75%), Высокий (85%), Максимальный (95%)</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="obsolete">Выберите пароль для доступа на чтение PDF-документа.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="obsolete">Разрешить печать документа.
При невыставленном флажке печатать  
файл PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="obsolete">Разрешить изменения в документе. 
При невыставленном флажке изменять  
файл PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Разрешить копирование текста и графики из PDF.
При невыставленном флажке копировать  
текст и графику в PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Разрешить добавление аннотаций и полей в PDF.
При невыставленном флажке редактировать 
аннотации и поля в PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Вставить сюда разделённый запятыми список 
маркёров, где каждый маркёр может быть * для 
всех страниц, 1-5 для диапазона страниц или 
номером одиночной страницы.</translation>
    </message>
    <message>
        <source>Create PDF File</source>
        <translation>Создание PDF-файла</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>Вы&amp;вод в файл:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="obsolete">&amp;Все страницы</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="obsolete">Вы&amp;брать страницы</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="obsolete">Сов&amp;местимость:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="obsolete">П&amp;ереплёт:</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="obsolete">Создать &amp;миниатюры</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="obsolete">Сохранить св&amp;язанные текст. рамки как PDF-Articles</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="obsolete">Добавить &amp;закладки</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Разрешение:</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Метод:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Качество:</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">Понизить р&amp;азрешение 
изображений до:</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">Встроить &amp;все шрифтовые файлы</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="obsolete">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="obsolete">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="obsolete">Показывать вид &amp;страниц</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="obsolete">Продолжительность
&amp;отображения:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="obsolete">Продолжительность
&amp;эффекта:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="obsolete">&amp;Тип эффекта:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="obsolete">Дви&amp;жущиеся линии:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="obsolete">От&amp;куда:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="obsolete">&amp;Направление:</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">&amp;Применить эффект 
ко всем страницам</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="obsolete">Использовать &amp;шифрование</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="obsolete">&amp;Пользователь:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="obsolete">&amp;Владелец:</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="obsolete">Разрешить &amp;печать документа</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="obsolete">Разрешить &amp;изменения в документе</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="obsolete">Разрешить &amp;копирование текста и графики</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="obsolete">Разрешить добавление &amp;аннотаций и полей</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="obsolete">&amp;Безопасность</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="obsolete">Назначение в&amp;ывода:</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="obsolete">&amp;Свои настройки рендеринга</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="obsolete">Настройки рендеринга</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="obsolete">&amp;Частота:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="obsolete">&amp;Угол:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="obsolete">Сп&amp;от-функция:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="obsolete">Простая точка</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Линия</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="obsolete">Окружность</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="obsolete">Эллипс</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="obsolete">Использовать ICC-профиль</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">Ц&amp;вет</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="obsolete">&amp;Инфострока:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="obsolete">Профи&amp;ль вывода:</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">Это дополнительный параметр, отключенный по умолчанию. 
Он включается в особых случаях, когда этого требует принтер, 
причём вам сообщаются все детали. В противном случае 
экспортированный вами PDF-файл может не распечататься 
корректно и не отображаться одинаково во всех 
операционных системах.</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-документы (*.pdf);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="obsolete">Сжать текст и ве&amp;кторную графику</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="obsolete">Включить п&amp;резентационные эффекты</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="obsolete">&amp;Презентация</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Поворот:</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">&amp;Вычесть неиспользуемые знаки из всех шрифтовых файлов</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">Из каких шрифтовых файлов вычесть знаки:</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="obsolete">Зеркально отразить по горизонтали</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="obsolete">Зеркально отразить по вертикали</translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Просмотр печати</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Все</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation>Включить более качественное отображение текста при просмотре 
ценой замедления прорисовки. Работает только со шрифтами Type1.</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Включить отображение полупрозрачных объектов. 
Требует Ghostscript как минимум версии 7.07.</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Включить режим эмуляции красок CMYK вместо палитры RGB</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Включить/отключить красочную плиту C (Cyan)</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Включить/отключить красочную плиту M (Magenta)</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Включить/отключить красочную плиту Y (Yellow)</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Включить/отключить красочную плиту K (Black)</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation>Сгладить &amp;текст</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation>Сгладить &amp;графику</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Показать &amp;полупрозрачность</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>Вычитание из-под &amp;чёрного</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>По&amp;казать CMYK</translation>
    </message>
    <message>
        <source>&amp;C</source>
        <translation>&amp;C</translation>
    </message>
    <message>
        <source>&amp;M</source>
        <translation>&amp;M</translation>
    </message>
    <message>
        <source>&amp;Y</source>
        <translation>&amp;Y</translation>
    </message>
    <message>
        <source>&amp;K</source>
        <translation>&amp;K</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Способ удаления некоторых серых (ахроматических) тонов, 
составленных из голубой, желтой и пурпурной красок, 
и замены их на черный. UCR главным образом воздействует на 
нейтральные по цвету части изображения. Использование этого 
метода способно улучшить печать некоторых изображений, но 
каждый отдельный случай требует особого рассмотрения. 
При использовании этого способа также снижается 
вероятность избыточной яркости изображения.</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Включить более качественное отображение шрифтов TrueType, Open Type Fonts,
EPS, PDF и векторной графики при просмотре ценой замедления прорисовки</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Предупреждение</translation>
    </message>
    <message>
        <source>Detected some Errors.
Consider using the Preflight Checker to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Abort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ignore</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation type="obsolete">Скопировать сюда</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Переместить сюда</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Отменить</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Изменить текст...</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Текстовая рамка</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ничего</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Изображение</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="obsolete">Файл:</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="obsolete">Текст по контуру</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="obsolete">Абзацев:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="obsolete">Слов:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="obsolete">Символов:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="obsolete">Связанный текст</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Печать:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Включено</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="obsolete">Выключено</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">Программа</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">отсутствует!</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Предупреждение</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Копия</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">Вст&amp;авить</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Показать &amp;поля</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Показывать &amp;обрамление</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Показывать &amp;изображения</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Показать &amp;сетку</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Показать &amp;направляющие</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Показать опорную &amp;сетку</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">Привязать к &amp;сетке</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">Привязать к н&amp;аправляющим</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="obsolete">Исходный PPI:</translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="obsolete">Текущий PPI:</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="obsolete">&amp;Инфо</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="obsolete">Получить &amp;изображение...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">Изображение &amp;видимо</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">&amp;Обновить изображение</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Изменить изображение</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Подстроить рамку до изображения</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">Получить &amp;текст...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="obsolete">Добавить &amp;текст из файла...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">Изменить те&amp;кст...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">Является PDF-&amp;закладкой</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">Является PDF-&amp;аннотацией</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">Свойства а&amp;ннотации</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">Свойства по&amp;ля</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">Пара&amp;метры PDF</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">Заб&amp;локировать</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">&amp;Разблокировать</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">За&amp;блокировать размер объекта</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Разблокиро&amp;вать размер объекта</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Передать в запа&amp;сник</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Переложить в сло&amp;й</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">Встав&amp;ить lorem ipsum</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">С&amp;группировать</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">Разгру&amp;ппировать</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="obsolete">Уро&amp;вень</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Отправить на самый &amp;низкий уровень</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Отправить на самый &amp;высокий уровень</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">Сделать уровнем н&amp;иже</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">Сделать уровнем в&amp;ыше</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">Рамку изобра&amp;жения</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">Многоу&amp;гольник</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Контур</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">&amp;Текстовую рамку</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">Кривая &amp;Безье</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="obsolete">&amp;Преобразовать в</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">&amp;Вырезать</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Скопировать</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">У&amp;далить</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">&amp;Очистить содержимое</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="obsolete">Показать &amp;свойства...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="obsolete">Скрыть &amp;свойства...</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Вы действительно хотите удалить весь текст?</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Изображение</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Линия</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Многоугольник</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Ломаная линия</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Контурный текст</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation>Страница</translation>
    </message>
    <message>
        <source> of %1</source>
        <translation>из %1</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Результат</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Результаты поиска для:</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Просмотр</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Выбрать</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation>Изображения</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Путь</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Стр</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Печать</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Статус</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>Перейти</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Отсутствует</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Искать</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Свойства многоугольника</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete">%</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">&amp;Углы:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Поворот:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Коэфф.:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Количество углов в многоугольнике</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Градусы вращения многоугольников</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Пример многоугольника</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Использовать к&amp;эфф.</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Использовать коэффициент для создания многоугольника 
с выпуклыми или вогнутыми сторонами</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Отрицательное значение сделает многоугольник вогнутым 
(в форме звезды), а положительное - выпуклым</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished">&amp;Углы:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">&amp;Поворот:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished">Количество углов в многоугольнике</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished">Градусы вращения многоугольников</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished">Использовать коэффициент для создания многоугольника 
с выпуклыми или вогнутыми сторонами</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished">Пример многоугольника</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="unfinished">Отрицательное значение сделает многоугольник вогнутым 
(в форме звезды), а положительное - выпуклым</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Общие</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Документ</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Направляющие</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Типографика</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Инструменты</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Запасник</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Отображение</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>GUI</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Единицы измерения</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">Точки (pt)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Дюймы (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Пики (p)</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="obsolete">Меню</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Пути</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Размер страницы</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Собственный</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Портретная</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Альбомная</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Направляющие полей</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Автосохранение</translation>
    </message>
    <message>
        <source>min</source>
        <translation>мин</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Внешний вид сетки</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Цвета сетки</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Расположение</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Нижний индекс</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete">%</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Верхний индекс</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Капитель</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Другое</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">А ещё неплохо бы на зависть другим уметь красиво читать и писать</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ничего</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation>Другие параметры</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Просмотр</translation>
    </message>
    <message>
        <source>Small</source>
        <translation>Небольшой</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Средний</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation>Для подстройки отображения листа перетащите ползунок внизу в нужную позицию.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Выберите каталог</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Миллиметры (mm)</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation type="obsolete">Внешние инструменты</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation>Разное</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation>Интерпретатор Postscript</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Инструмент обработки графики</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation>Печать</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation>Выберите одну из доступных тем интерфейса, 
наследуемую Scribus у KDE и Qt</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Стандартный размер шрифта для меню и окон</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Стандартная единица измерения в работе</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Количество строк, прокручиваемых за один раз при помощи колеса мыши</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Радиус области, внутри которой можно захватывать точки контроля над объектом</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Количество недавно открытых документов, отображаемых в меню &quot;Файл&quot;</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Стандартный каталог для документов</translation>
    </message>
    <message>
        <source>Default ICC profiles directory</source>
        <translation>Стандартный каталог для ICC-профилей</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Стандартный каталог для сценариев</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Стандартный, либо настраиваемый размер страницы</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Стандартная ориентация страниц документа</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Ширина страниц документа, настраиваемая в том случае, если 
выбраны пользовательские настройки размера страницы</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Высота страниц документа, настраиваемая в том случае, если 
выбраны пользовательские настройки размера страницы</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Включить одиночный или парный режим страниц</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation>Сделать первую страницу левой страницей документа</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Расстояние между направляющей верхнего поля и краем страницы</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Расстояние между направляющей нижнего поля и краем страницы</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Расстояние между направляющей нижнего поля и краем страницы.
Если включён режим парных страниц, пространство полей может 
быть использовано для просчёта правильных полей для переплёта</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation>Если параметр включён, Scribus сохранит резервную копию в файле 
с расширением .bak по истечении указанного периода времени</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Период времени между автоматическим сохранением</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="obsolete">Расстояние между малыми ячейками сетки</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="obsolete">Расстояние между большими ячейками сетки</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Расстояние, начиная с которого объект начнёт &quot;прилипать&quot; к направляющим линиям</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="obsolete">Цвет малых ячеек сетки</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="obsolete">Цвет больших ячеек сетки</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="obsolete">Цвет направляющих линий</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="obsolete">Расположите сетку подо всеми объектами страницы</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="obsolete">Расположите сетку надо всеми объектами страницы</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="obsolete">Смещение выше линии опорной сетки</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="obsolete">Относительный размер верхнего индекса по отношению к обычному шрифту</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="obsolete">Смещение ниже линии опорной сетки обычного шрифта</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="obsolete">Относительный размер нижнего индекса по отношению к обычному шрифту</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="obsolete">Относительный размер капители по отношению к обычному шрифту</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">Увеличение междустрочного интервала в процентах размера шрифта</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="obsolete">Свойства текстовой рамки</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Свойства рамки изображения</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="obsolete">Свойства очертания</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="obsolete">Степень увеличения по умолчанию</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="obsolete">Свойства линии</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="obsolete">Свойства многоугольника</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="obsolete">Шрифт для новых текстовых рамок</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="obsolete">Кегль шрифта для новых текстовых рамок</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="obsolete">Цвет шрифта</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="obsolete">Количество столбцов в текстовой рамке</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="obsolete">Расстояние между столбцами в текстовой рамке</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="obsolete">Так выглядит указанный шрифт</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">Рамки позволяют произвольно масштабировать изображения</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="obsolete">Масштабирование изображений по горизонтали</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="obsolete">Масштабирование изображений по вертикали</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="obsolete">Сохранять соотношение сторон при масштабировании</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">Изображения в рамке масштабируются под её размер</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">Автоматически масштабируемые изображения 
сохраняют исходное соотношение сторон</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Цвет заливки рамок изображений</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="obsolete">Насыщение цвета заливки</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="obsolete">Цвет линий очертаний</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="obsolete">Насыщение цвета линий</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="obsolete">Цвет заливки очертаний</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="obsolete">Стиль линий очертаний</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="obsolete">Толщина линий очертаний</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="obsolete">Включено минимально возможное &quot;прилипание&quot;</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="obsolete">Включено максимально возможное &quot;прилипание&quot;</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="obsolete">Изменить &quot;прилипание&quot; для каждого шага масштабирования</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="obsolete">Цвет линий</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="obsolete">Насыщение линий</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="obsolete">Стиль линий</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="obsolete">Толщина линий</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Количество углов в многоугольнике</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Градусы вращения многоугольников</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Пример многоугольника</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation>Изменить размер миниатюры в запаснике</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="obsolete">Если страницы указаны как парные, разбрасывать 
их отображение по соответствующим сторонам</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Цвет бумаги</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="obsolete">Цвет линий полей</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Пометить пространство за полями цветом полей</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="obsolete">Включить полупрозрачность при экспорте в PDF 1.4</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Указать стандартный масштаб вида страницы</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation>Путь к интерпретатору Ghostscript в системе</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Сглаживать текст для EPS и PDF при отображении на экране</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Сглаживать графику для EPS и PDF при отображении на экране</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation>Не показывать объекты вне полей на распечатанной 
странице или в экспортированном файле</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Расстояние между направляющей правого поля и краем страницы.
Если страницы парные, то пространство полей можно использовать 
для расчёта брошюровки</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation>Сохранять содержимое запасника при каждом его изменении</translation>
    </message>
    <message>
        <source>Filesystem location for graphics editor</source>
        <translation>Путь к графическому редактору</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="obsolete">Сетка линии шрифта</translation>
    </message>
    <message>
        <source>Turns on the basegrid</source>
        <translation type="obsolete">Включить опорную сетку</translation>
    </message>
    <message>
        <source>Turns off the basegrid</source>
        <translation type="obsolete">Выключить опорную сетку</translation>
    </message>
    <message>
        <source> px</source>
        <translation type="obsolete">px</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>&amp;Тема:</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>Размер &amp;шрифта:</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="obsolete">Настройки мыши</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>&amp;Смещение по 
колесу мыши:</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="obsolete">Радиус &amp;захвата:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>Сколько &amp;недавних 
документов помнить:</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>Доку&amp;менты:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>ICC-&amp;профили:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Из&amp;менить...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>С&amp;ценарии:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>Изм&amp;енить...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Раз&amp;мер:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Ор&amp;иентация:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Ширина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Высота:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Парные &amp;страницы</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>&amp;Левая страница первой</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>С&amp;низу:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>С&amp;верху:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>С&amp;права:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>С&amp;лева:</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Включено</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Интервал:</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="obsolete">Ширина маленьких ячеек</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="obsolete">Ширина большиих ячеек</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="obsolete">Расстояние для привязки:</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="obsolete">Цвет маленьких ячеек:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="obsolete">Цвет больших ячеек:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="obsolete">Цвет &amp;собственных 
направляющих:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="obsolete">Цвет &amp;опорной сетки:</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="obsolete">На &amp;заднем плане</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="obsolete">На &amp;переднем плане</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="obsolete">В&amp;кл</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="obsolete">В&amp;ыкл</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="obsolete">&amp;Смещение:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="obsolete">&amp;Масштабирование:</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="obsolete">Смеще&amp;ние:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="obsolete">&amp;Масштабирование:</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="obsolete">Ма&amp;сштабирование:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="obsolete">&amp;Сетка линии шрифта:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="obsolete">С&amp;мещение сетки линии шрифта:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Автомат. межстрочное
расстоя&amp;ние:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="obsolete">Стандартный &amp;шрифт:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="obsolete">Стандартный &amp;кегль:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="obsolete">Цвет &amp;текста:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="obsolete">С&amp;толбцов:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Интервал:</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="obsolete">&amp;Цвет линии:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="obsolete">&amp;Затенение:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="obsolete">Цвет за&amp;ливки:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="obsolete">За&amp;тенение:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="obsolete">Тип ли&amp;нии:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="obsolete">То&amp;лщина линии:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="obsolete">&amp;Минимум:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="obsolete">Ма&amp;ксимум:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="obsolete">&amp;Шаг:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="obsolete">&amp;Свободное масштабирование</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="obsolete">Масштабирование 
по &amp;горизонтали:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="obsolete">Масштабирование 
по &amp;вертикали:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">Масштабировать &amp;изображение до рамки</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="obsolete">Сохранять &amp;соотношение сторон</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">Цвет &amp;заливки:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">&amp;Углы:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Поворот:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">К&amp;оэфф:</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation>Сохранять содержимое
при &amp;изменениях</translation>
    </message>
    <message>
        <source>Large</source>
        <translation>Большой</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="obsolete">Показывать страницы р&amp;ядом друг с другом</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="obsolete">Цвета на странице</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="obsolete">Задний &amp;план:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="obsolete">По&amp;ля:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Показывать &amp;непечатаемую область цветом полей</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="obsolete">Использовать возможности &amp;полупрозрачности PDF 1.4</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>Подстройка отображения страницы на &amp;экране</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Имя исполняемого файла:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>Сгладить &amp;текст</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>Сгладить &amp;графику</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>&amp;Имя исполняемого файла:</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation>Обрезать печатаемую область до &amp;полей</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation>Применить вычитание из-под &amp;чёрного</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Изнутри:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>Снару&amp;жи:</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation>&amp;Шаблоны:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>&amp;Изменить...</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation>Дополнительный каталог для шаблонов макетов</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Использовать &amp;коэфф.</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Использовать коэффициент для создания многоугольника 
с выпуклыми или вогнутыми сторонами</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Отрицательное значение сделает многоугольник вогнутым 
(в форме звезды), а положительное - выпуклым</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Способ удаления некоторых серых (ахроматических) тонов, 
составленных из голубой, желтой и пурпурной красок, 
и замены их на черный. UCR главным образом воздействует на 
нейтральные по цвету части изображения. Использование этого 
метода способно улучшить печать некоторых изображений, но 
каждый отдельный случай требует особого рассмотрения. 
При использовании этого способа также снижается 
вероятность избыточной насыщенности изображения. </translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executive</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Ledger</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished">Я&amp;зык:</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doc-Checker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">Цвет:</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>External Tools.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Always ask before Fonts are replaced when loading a Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the of linked frames on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select your default language for Scribus to run with.
Leave this blank to choose based on environment variables.
You can still override this by passing a command line option when starting Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the length of the action history in steps.
If set to 0 infinite amount of actions will be stored.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>&amp;Тон:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Насыщ.:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;Ярк.:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Красный:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;Зелёный:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>&amp;Синий:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>&amp;Альфа-канал:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>&amp;Основные цвета</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Пользовательские цвета</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>&amp;Добавить цвета &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>До&amp;бавить в пользовательские цвета</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Выберите цвет</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Скопировать или переместить файл</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Прочитать: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Прочитать: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>&amp;Имя файла:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>&amp;Тип файла:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>На один каталог вверх</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Все файлы (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Тип</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Аттрибуты</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Посмотреть &amp;в:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Вернуться</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Создать новый каталог</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Список</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Таблица</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Информация о просматриваемом файле</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Содержимое просматриваемого файла</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Чтение-запись</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Только чтение</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Только запись</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Недоступен</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Символьная ссылка на файл</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Символьная ссылка на каталог</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Кат</translation>
    </message>
    <message>
        <source>Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Открыть</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>&amp;Переименовать</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>Пере&amp;загрузить</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Сортировать по &amp;имени</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Сортировать по &amp;размеру</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Сортировать по &amp;дате</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Без сортировки</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Сортировать</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Показать &amp;скрытые файлы</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>файл</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>каталог</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>символьная ссылка</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Удалить %1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Вы действительно хотите удалить %1 &quot;%2&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Нет</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Новый каталог 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Новый каталог</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Новый каталог %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Найти каталог</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Каталоги</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Сохранить</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Файл не найден.
Проверьте путь и имя файла.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Все файлы (*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Выберите каталог</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Каталог:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Шрифт</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>С&amp;тиль шрифта</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Раз&amp;мер</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Эффекты</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>&amp;Вычеркнутый</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Подчёркнутый</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Цвет</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Пример</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>С&amp;ценарий</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Применить</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отменить</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Выберите новый шрифт</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Выделить всё</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Отменить</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>Пов&amp;торить</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Вырезать</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>С&amp;копировать</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Вст&amp;авить</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Выстроить</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Настроить...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;О Qt&lt;/h3&gt;&lt;p&gt;Эта программа использует Qt версии %1.&lt;/p&gt;&lt;p&gt;Qt является инструментом разработки многоплатформенных приложений на C++ с графическим интерфейсом.&lt;/p&gt;&lt;p&gt;Qt обеспечивает собираемость приложений без несовместимого изменения исходного кода в MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux и основных вариантах коммерческих Unix-систем.&lt;br&gt;Также существует версия Qt лоя встраиваемых устройств.&lt;/p&gt;&lt;p&gt;Qt является продуктом компании Trolltech. Подробности вы можете узнать на сайте &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Вы действительно хотите перезаписать файл:
%1 ?</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Электронный справочник</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="unfinished">Сценарии на Python (*.py);; Все файлы (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>SVG-изображения (*.svg *.svgz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>SVG-изображения (*.svg);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Инициализация...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Документ</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Фон</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation>Просмотреть вид печати</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">С&amp;ценарии</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Ошибка при записи файла (-ов).</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Файл существует. Перезаписать?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>уже существует. Перезаписать его?</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Да, все</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Сохранить как изображение</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation>Произошла ошибка при записи результируемых файлов.</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Экспорт прошёл успешно</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Все файлы (*)</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Созд&amp;ать из шаблона...</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Бюллетени</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Буклеты</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Каталоги</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Флайеры</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Знаки</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Карточки</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Фирменные бланки</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Конверты</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Визитные карточки</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Календари</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Рекламные проспекты</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Этикетки</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Меню</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Программы</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>PDF-формы</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>PDF-презентации</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Журналы</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Плакаты</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Объявления</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Текстовые документы</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Буклеты-гармошки</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Свои шаблоны</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Сохранить как &amp;шаблон...</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Вставить символ...</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Сохранить как &amp;изображение...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation>Просмотреть &amp;шрифты</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="obsolete">Просмотреть пе&amp;чать</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation>&amp;Руководство по сценариям</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished">&amp;Сценарии</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished">&amp;Выполнить сненарий...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished">&amp;Недавние сценарии</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished">Показать &amp;консоль</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Сохран&amp;ить страницу как &amp;SVG...</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>Импортировать &amp;SVG...</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>Импортировать &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Все поддерживаемые форматы (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation>Импортируется текст</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Все поддерживаемые форматы</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>Документы HTML</translation>
    </message>
    <message>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Текстовые документы</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Файлы со значениями, разделёнными запятой</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>CSV_data</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>CSV_header</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>Шрифт %1 повреждён и не будет использован</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation>Шаблон:</translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation>
Внешние ссылки
</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Текстовые фильтры</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Албанский</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Баскский</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Болгарский</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation>Португальский (Бразилия)</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Каталонский</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Китайский</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Чешский</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Датский</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Голландский</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Английский</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Английский (Англия)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Эсперанто</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Немецкий</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Финский</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Французский</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation type="unfinished">Галицийский</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Греческий</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Венгерский</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Индонезийский</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Итальянский</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Корейский</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Литовский</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Норвежский (бокмол)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Норвежский (новонорвежский)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Норвежский</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Польский</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Русский</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Шведский</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Испанский</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Испанский (Латинская Америка)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Словацкий</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Словенский</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Сербский</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="unfinished">О сц&amp;енарии...</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="unfinished">О сценарии</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Невозможно получить цвет с пустым именем.</translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Цвет не найден</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Невозможно изменить цвет с пустым именем.</translation>
    </message>
    <message>
        <source>Color not found in document</source>
        <comment>python error</comment>
        <translation type="obsolete">Цвет не найден в документе</translation>
    </message>
    <message>
        <source>Color not found in default colors</source>
        <comment>python error</comment>
        <translation type="obsolete">Цвет не найден среди стандартных цветов</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Невозможно создать цвет с пустым именем.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Невозможно удалить цвет с пустым именем.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Невозможно заменить цвет с пустым именем.</translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="obsolete">Не удалось открыть документ</translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation type="obsolete">Не удалось сохранить документ</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>Цель не является рамкой изображения.</translation>
    </message>
    <message>
        <source>Can&apos;t scale by 0%</source>
        <comment>python error</comment>
        <translation type="obsolete">Масштабирование на 0% невозможно</translation>
    </message>
    <message>
        <source>Font not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Шрифт не найден</translation>
    </message>
    <message>
        <source>Can&apos;t render an empty sample</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно обработать пустой пример</translation>
    </message>
    <message>
        <source>Can&apos;t save to a blank filename</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно сохранить в файл с пустым именем</translation>
    </message>
    <message>
        <source>Can&apos;t have an empty layer name</source>
        <comment>python error</comment>
        <translation type="obsolete">Не может быть слоя без имени</translation>
    </message>
    <message>
        <source>Layer not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Слой не найден</translation>
    </message>
    <message>
        <source>Can&apos;t remove the last layer</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно удалить последний слой</translation>
    </message>
    <message>
        <source>Can&apos;t create layer without a name</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно создать слой без имени</translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="obsolete">Объект с запрошенным именем уже существует</translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Объект не найден</translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Стиль не найден</translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно назначить стиль нетекстовой рамке</translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="obsolete">Не удалось сохранить EPS-файл</translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="obsolete">Количество страниц вне допустимого диапазона</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Стиль линии не найден</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Невозможно получить кегль шрифта из нетекстовой рамки.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Невозможно шрифт из нетекстовой рамки.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Невозможно получить текстовый кегль из нетекстовой рамки.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Невозможно получить текст из нетекстовой рамки.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Невозможно вставить текст в нетекстовую рамку.</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set text alignment on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно установить выключку текста для нетекстовой рамки</translation>
    </message>
    <message>
        <source>Can&apos;t set font size on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно установить кегль для нетекстовой рамки</translation>
    </message>
    <message>
        <source>Can&apos;t set font on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Невозможно установить шрифт для нетекстовой рамки</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>Импортировать  &amp;OpenOffice.org Draw...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation>OpenOffice.org Draw (*.sxd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>Документы OpenOffice.org Writer</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Свои настройки:</translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Обычные настройки:</translation>
    </message>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>&amp;Короткие слова...</translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>Идёт обработка типографики для коротких слов.
Подождите, пожалуйста...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Обработка типографики для коротких слов завершена.</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="unfinished">Африкаанс</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brazilian Portugese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Template </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 (found using fontconfig) is broken, discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to load a font - freetype couldn&apos;t find the font file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x.
The process of  saving will make files originating from versions of
Scribus of 1.2.x or lower unusable again in those versions.
Are you sure you wish to proceed with this operation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Proceed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished">p</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="unfinished">Точки (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="unfinished">Миллиметры (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">Дюймы (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">Пики (p)</translation>
    </message>
    <message>
        <source>File exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.
Do you want to replace it with the file you are saving?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished">За&amp;менить</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Все</translation>
    </message>
    <message>
        <source>Colour not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colour not found in document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colour not found in default colors.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Child not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Types matched, but setting property failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use themwithout a document to operate on.
- If you do not pass a frame name to a function that requires one,the function will use the currently selected frame, if any, orraise a NoValidObjectError if it can&apos;t find anything to operateon.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Выделить всё</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Отменить</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>Пов&amp;торить</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Вырезать</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>С&amp;копировать</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Вст&amp;авить</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Системное меню</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Затенить</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Убрать тень</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Обычный вид</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Свернуть</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Развернуть</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Восстановить</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Переместить</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Раз&amp;мер</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>&amp;Свернуть</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>&amp;Развернуть</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Оставаться на&amp;верху</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Свернуть</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Восстановить вниз</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>За&amp;тенить</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>Убр&amp;ать тень</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation>Параметры документа</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Направляющие полей</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Включить одиночный или парный режим страниц</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Сделать первую страницу левой страницей документа</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Расстояние между направляющей верхнего поля и краем страницы</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Расстояние между направляющей нижнего поля и краем страницы</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Расстояние между направляющей нижнего поля и краем страницы.
Если включён режим парных страниц, пространство полей может 
быть использовано для расчёта правильных полей для переплёта.</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Расстояние между направляющей правого поля и краем страницы.
Если включён режим парных страниц, пространство полей может 
быть использовано для расчёта правильных полей для переплёта.</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>С&amp;верху:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>С&amp;лева:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>С&amp;низу:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>С&amp;права:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Парные &amp;страницы</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>&amp;Левая страница первой</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Изнутри:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation>Снару&amp;жи:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Размер страницы</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Размер:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Собственный</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Ориентация:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Портрет</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Альбом</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Ширина:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Высота:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>&amp;Номер первой страницы:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished">Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">Ор&amp;иентация:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">&amp;Ширина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">&amp;Высота:</translation>
    </message>
    <message>
        <source>&amp;Unit:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished">Автосохранение</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished">мин</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished">&amp;Интервал:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Документ</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Направляющие</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">Цвет:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished">Показывать &amp;непечатаемую область цветом полей</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished">Отображение</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished">Типографика</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Инструменты</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doc-Checker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the of linked frames on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="unfinished">Цвет бумаги</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished">Пометить пространство за полями цветом полей</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation>Настройки стиля</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Стиль текущего абзаца</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Настройки заливки цветом</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Цвет заливки текста</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Цветонасыщенность заливки текста</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Настройки цвета контура</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Цвет контура текста</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Цветонасыщенность контура текста</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation>Настройки шрифта</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation>Шрифт выделенного текста</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Кегль шрифта</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Изменяемая ширина символов</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation>Настройки символа</translation>
    </message>
    <message>
        <source>Kerning:</source>
        <translation>Кернинг:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Задаваемый кернинг</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Background</source>
        <translation>Фон</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Копия #%1 из </translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="unfinished">Postscript</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Идёт поиск шрифтов</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">В вашей системе нет PostScript-шрифтов</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation>Выход</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Критическая ошибка</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Разумные переносы</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Выключка по левой стороне</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Выключка по правой стороне</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Выключка по центру</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Вставить номер страницы</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Направить текст по контуру</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Показать Слои</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="obsolete">Javascripts...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Откатить</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Показать Палитру страниц</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="obsolete">Блокировать/Разблокировать</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="obsolete">Неразрывный пробел</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>Чтение настроек</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation>Запуск модуля переносов</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>Установка горячих клавиш</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>Чтение запасника</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation>Запуск модулей</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">Новый</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Открыть...</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Закрыть</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Сохранить</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Сохранить как...</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Получить Текст/Изображение...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Документ...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Параметры документа...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Напечатать...</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Выйти</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Вырезать</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Скопировать</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Вставить</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Очистить</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Выделить всё</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Цвета...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Стили...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Шаблоны...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Шрифты...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="obsolete">Выбрать новый шрифт</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Продублировать</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Продублировать многократно</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Удалить</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Группировать</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="obsolete">Разгруппировать</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Блокировать</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Послать на самый низкий уровень</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Послать на самый высокий уровень</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">Сделать уровнем ниже</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">Сделать уровнем выше</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Распространить / Выровнять...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Вставить...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Удалить...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Переместить...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Применить шаблон...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Настроить направляющие...</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Уместить в окне</translation>
    </message>
    <message>
        <source>50%</source>
        <translation type="obsolete">50%</translation>
    </message>
    <message>
        <source>75%</source>
        <translation type="obsolete">75%</translation>
    </message>
    <message>
        <source>200%</source>
        <translation type="obsolete">200%</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation type="obsolete">Миниатюры</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Скрыть поля</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Скрыть обрамление</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Скрыть изображения</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Показать сетку</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Привязать к сетке</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Настроить изображения</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Вставить переносы</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">О Scribus</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>О Qt</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Электронная помощь...</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Стиль</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Инструменты</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Подчёркнутый</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Зачёркнутый</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Капитель</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Верхний индекс</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Нижний индекс</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Контурный</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X-Поз:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y-Поз:</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Готово</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Получить изображение...</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Цвет</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Инвертировать</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Получить текст...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Шрифт</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Тень</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Разблокировать</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Документы (*.sla *.sla.gz *.scd *.scd.gz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документы (*.sla *.scd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>Файл загружается...</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Текстовый файлы (*.txt);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">Невозможно записать файл:
%1</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Документы (*.sla *.sla.gz *.scd *.scd.gz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>Файл сохраняется...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>Документ выводится на печать...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Документ</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Печать не удалась!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Руководство по Scribus</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">Следующие программы отсутствуют:</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Все</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">EPS-изображения (*.eps);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation>Загружается:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>Идёт подстройка цветов</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Английский</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Немецкий</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Испанский</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Итальянский</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Французский</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Русский</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Датский</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Словацкий</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Венгерский</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Чешский</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Датский</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Португальский</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation>Украинский</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Польский</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Греческий</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Каталонский</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Выберите каталог</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Свойства</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Схема</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Запасник</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>&quot;Обрушивание&quot; Scribus</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus обрушился по причине #%1</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="obsolete">Создать новый документ</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="obsolete">Открыть документ</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="obsolete">Сохранить текущий документ</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="obsolete">Закрыть текущий документ</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="obsolete">Напечатать текущий документ</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="obsolete">Сохранить текущий документ в PDF</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Все поддерживаемые форматы</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Все файлы (*)</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Финский</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation>Ирландский</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Объект</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>С&amp;траница</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Вид</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>С&amp;ервис</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>&amp;Расш.</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>О&amp;кна</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Справка</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="obsolete">Показать опорную сетку</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="obsolete">Скрыть опорную сетку</translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation>Некоторые объекты заблокированы</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Отменить</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="obsolete">Заблокировать все</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="obsolete">Разблокировать все</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Литовский</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Шведский</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Словенский</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="obsolete">&amp;Настройки</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="obsolete">&amp;Управление цветом...</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>Созд&amp;ать</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Открыть...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>&amp;Недавние</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Сохранить &amp;как</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>&amp;Вернуть</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Со&amp;брать для вывода...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="obsolete">По&amp;лучить Текст/Изображение...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>&amp;Добавить текст...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Импортировать</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>Сохранить &amp;текст...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Сохран&amp;ить как EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Сохр&amp;анить как PDF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Экспортировать</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>Параметры до&amp;кумента...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>На&amp;печатать...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>В&amp;ыйти</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Отменить</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Вырезать</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Скопировать</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Вст&amp;авить</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>О&amp;чистить</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Выделить в&amp;сё</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Найти/Заменить</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>Ц&amp;вета...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>Стили &amp;абзаца...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>Стили &amp;линий...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation>&amp;Шаблоны...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation>&amp;Javascripts...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Продублировать</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>Продублировать &amp;многократно</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Сгруппировать</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>&amp;Разгруппировать</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Заблокировать</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Послать на самый &amp;низкий уровень</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Послать на самый &amp;высокий уровень</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>Сделать уровнем н&amp;иже</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>Сделать уровнем в&amp;ыше</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation>Распространить / Выр&amp;овнять...</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Очертания</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>Направить &amp;текст по контуру</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>Сн&amp;ять текст с контура</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>Объединить &amp;многоугольники</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>Разде&amp;лить многоугольники</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation>Преобразовать в &amp;контур</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Вставить...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>&amp;Удалить...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Переместить</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation>Применить &amp;шаблон...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="obsolete">&amp;Уместить в окне</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation>&amp;100&amp;</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation>&amp;Миниатюры</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>Показать страничную &amp;сетку</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Привязать к н&amp;аправляющим</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>Показать опорную &amp;сетку</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Свойства</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation>С&amp;труктура</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>&amp;Запасник</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>С&amp;лои</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation>&amp;Палитра страниц</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Закладки</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>Настроить &amp;изображения</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>Вставить &amp;переносы</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>&amp;Подсказки</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>PDF-&amp;инструменты</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="obsolete">Подсказки</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="obsolete">&amp;Шрифты...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="obsolete">&amp;Модуль переносов...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="obsolete">&amp;Горячие клавиши...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>О &amp;Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>О &amp;Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>Ру&amp;ководство по Scribus...</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>Ст&amp;иль</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>В&amp;лево</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>По &amp;центру</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>&amp;Вправо</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>По &amp;ширине</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>&amp;Принудительно</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>Друг&amp;ое...</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Каскадом</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Название</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Цвет</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation>&amp;Инвертировать</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Получить текст...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Шрифт</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Кегль</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Эффекты</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Выключка</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Тень</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>Т&amp;абуляторы...</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">&amp;Разблокировать</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Показывать &amp;изображения</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>Показать &amp;поля</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>Показывать &amp;обрамление</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>Показать &amp;направляющие</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation>Ghostscript : Вы не можете использовать изображения в формате EPS</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="obsolete">Импортировать &amp;страницы...</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>Происходит импорт страниц...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Импорт страниц</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation>&lt;p&gt;Вы пытаетесь импортировать большее число страниц, чем существует в данном документе начиная с текущей.&lt;/p&gt;Выберите одно из следующих вариантов:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Создать&lt;/b&gt; недостающие страницы&lt;/li&gt;&lt;li&gt;&lt;b&gt;Импортировать&lt;/b&gt; страницы до последней существующей&lt;/li&gt;&lt;li&gt;&lt;b&gt;Отменить&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Создать</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Импортировать</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Импорт завершён</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Данные для импорта не найдены</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation>Получение ICC-профилей</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation>Информация о д&amp;окументе...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>&amp;Настроить направляющие...</translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="obsolete">100%</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Привязать к стран&amp;ичной сетке</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>&amp;Настроить Scribus...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Кегль:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Тень:</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="obsolete">Отменить уд&amp;аление объекта</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="obsolete">Отменить &amp;перемещение объекта</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="obsolete">Отменить &amp;изменение объекта</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="obsolete">Изменить &amp;очертания</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="obsolete">Файл %1 не имеет формат Scribus</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Африкаанс</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Шрифтовая подсистема инициализирована</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There are no Postscript fonts on your system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="unfinished">Postscript</translation>
    </message>
    <message>
        <source>PDF-1.3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF-1.4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF/X-3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Migrate Old Scribus Settings?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Page(s)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">Пов&amp;торить</translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;%1 %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="unfinished">&amp;Подчёркнутый</translation>
    </message>
    <message>
        <source>&amp;Strike Through</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small &amp;Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Su&amp;perscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Su&amp;bscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is &amp;Locked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished">Изменить &amp;очертания...</translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fit in window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;50%</source>
        <translation type="unfinished">&amp;50&amp;</translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation type="unfinished">&amp;75&amp;</translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation type="unfinished">&amp;200&amp;</translation>
    </message>
    <message>
        <source>Show &amp;Text Chain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Measurements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action &amp;History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight &amp;Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="unfinished">&amp;Вставить символ...</translation>
    </message>
    <message>
        <source>Insert Smart Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Non Breaking Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Palettes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postscript Files (*.eps *.EPS *.ps *.PS);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG Images (*.svg *.svgz);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG Images (*.svg);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation type="unfinished">OpenOffice.org Draw (*.sxd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>File %1 
is not in an acceptable format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Some Fonts used by this Document have been substituted:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Some ICC-Profiles used by this Document are not installed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write the File: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Detected some Errors.
Consider using the Preflight Checker to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Abort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ignore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Detected some Errors.
Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation type="unfinished">Болгарский</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="unfinished">Программа</translation>
    </message>
    <message>
        <source>is already running!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">Информация</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="unfinished">отсутствует!</translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Слой</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Все</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation type="unfinished">Скопировать сюда</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished">Переместить сюда</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">Вст&amp;авить</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="unfinished">Изображение</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished">Файл:</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished">Исходный PPI:</translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished">Текущий PPI:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished">Связанный текст</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished">Текстовая рамка</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished">Текст по контуру</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished">Абзацев:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished">Слов:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished">Символов:</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="unfinished">Печать:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">Включено</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">Выключено</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished">&amp;Инфо</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished">Изображение &amp;видимо</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="unfinished">&amp;Обновить изображение</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="unfinished">&amp;Изменить изображение</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="unfinished">&amp;Подстроить рамку до изображения</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="unfinished">Изменить те&amp;кст...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished">Является PDF-&amp;закладкой</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished">Является PDF-&amp;аннотацией</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished">Свойства а&amp;ннотации</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished">Свойства по&amp;ля</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">Пара&amp;метры PDF</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished">Изменить текст...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="unfinished">&amp;Разблокировать</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="unfinished">За&amp;блокировать размер объекта</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="unfinished">Разблокиро&amp;вать размер объекта</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished">Передать в запа&amp;сник</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">Переложить в сло&amp;й</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="unfinished">Встав&amp;ить lorem ipsum</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="unfinished">Разгру&amp;ппировать</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished">Уро&amp;вень</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished">Сделать уровнем н&amp;иже</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished">Сделать уровнем в&amp;ыше</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="unfinished">Рамку изобра&amp;жения</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="unfinished">Многоу&amp;гольник</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="unfinished">&amp;Контур</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished">&amp;Текстовую рамку</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished">Кривая &amp;Безье</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished">&amp;Преобразовать в</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="unfinished">&amp;Очистить содержимое</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Предупреждение</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="unfinished">Вы действительно хотите удалить весь текст?</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished">Копия</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Документ:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>изменился с момента последнего сохранения.</translation>
    </message>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation>Всё равно в&amp;ыйти</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation>Всё равно &amp;закрыть</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="obsolete">&amp;Сценарии</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="obsolete">&amp;Выполнить сненарий...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="obsolete">&amp;Недавние сценарии</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="obsolete">О сц&amp;енарии...</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">С&amp;ценарии</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Открыть</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Сценарии на Python (*.py);; Все файлы (*)</translation>
    </message>
    <message>
        <source>Script error</source>
        <translation type="obsolete">Ошибка сценария</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="obsolete">Если вы пытались выполнить сценарий из стандартной поставки Scribus, 
сообщите об ошибке на &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;, пожалуйста.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="obsolete">Это сообщение скопировано в буфер обмена.
Нажмите Ctrl+V, чтобы вставить его в жалобную книгу.</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Спрятать &amp;консоль</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="obsolete">О сценарии</translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">О&amp;тменить</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Дополнительные параметры</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Просмотр  страниц</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation>Показать имена шаблонов</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Найти/Заменить</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Найти:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Стиль абзаца</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Шрифт</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Кегль шрифта</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Эффекты шрифта</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Цвет заливки</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Тень заливки</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Цвет контура</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Тень контура</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Влево</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>По центру</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Вправо</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>По ширине</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Принудительно</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Не задано</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Заменить на:</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Поиск окончен</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>Слово це&amp;ликом</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>Не у&amp;читывать регистр</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Искать</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>За&amp;менить</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>Заменить &amp;все</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>О&amp;чистить</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation>Палитра страниц</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation>Доступные шаблоны:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Страницы документа:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation>Парные страницы</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation>Левая страница первой</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation>Перетащите страницы или шаблоны 
на пиктограмму корзины для их удаления.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation>Здесь находятся все ваши шаблоны. 
Для создания новой страницы перетащите 
шаблон в область просмотра страниц внизу.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation>Просмотр всех страниц в документе</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Выбор полей</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Доступные поля</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation>Выбранные поля</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Другое...</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Тень</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Тень:</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Без стиля</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Стилей нет</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Правка стилей</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Копия %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Новый стиль</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документы (*.sla *.sla.gz *.scd *.scd.gz);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документы (*.sla *.scd);;Все файлы (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Из файла</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>Проду&amp;блировать</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сохранить</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Вы действительно хотите удалить этот стиль?</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Редактор текста</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation>Вы действительно хотите потерять все изменения?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Вы действительно хотите удалить весь текст?</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Текущий абзац:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Слов:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Символов:</translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Итого:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Абзацев:</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation>Обновить текстовую рамку</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Текстовые файлы (*.txt);;Все файлы (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Вы хотите сохранить изменения:</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation>Обновить текстовую рамку и выйти</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation>Выйти без обновления текстовой рамки</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Восстановить текст из рамки</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Сохранить в файл...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>За&amp;грузить из файла...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>Сохранить до&amp;кумент</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>&amp;Обновить текст в рамке и выйти</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Выйти &amp;без обновления текста в рамке</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Выделить в&amp;сё</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Вырезать</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>С&amp;копировать</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Вст&amp;авить</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>О&amp;чистить</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Найти/Заменить...</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation>В&amp;ставить символ...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>&amp;Изменить стили...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>&amp;Просмотреть шрифты...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>&amp;Обновить текстовую рамку</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Фон...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>Показать &amp;шрифт...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Настроить...</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation>Удалить весь текст</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation>Загрузить текст из файла</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation>Сохранить текст в файл</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation>Восстановить текст из рамки</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation>Найти/Заменить</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>&amp;Умное выделение текста</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation>Подчёркивание</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Капитель</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Нижний индекс</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Верхний индекс</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation>Вычеркнутый текст</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="obsolete">Контурный текст</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>Update paragraph styles</source>
        <translation>Обновить абзацные стили</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Добавить название документа в начало абзацного стиля</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Больше не спрашивать</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scribus</source>
        <translation>При импорте документа можно добавлять название
импортируемого документа в начало нового 
абзацного стиля Scribus</translation>
    </message>
    <message>
        <source>If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</source>
        <translation>Если в документе Scribus существует стиль, имя которого 
сопадает со стилем импортируемого документа OO.o Writer, 
то этот стиль может быть обновлён до совпадения с 
одноимённым стилем из импортируемого документа</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Параметры импорта из OpenOffice.org Writer</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OpenOffice.org document and
never ask your confirmation again</source>
        <translation>Использовать ли эти настройки в дальнейшем
и больше не запрашивать подтверждение при
импорте документов OO.o Writer</translation>
    </message>
    <message>
        <source>Pack paragraph styles</source>
        <translation>Сжать абзацные стили</translation>
    </message>
    <message>
        <source>Group paragraph styles by attributes.
Less paragraph styles but controlling them may be hard.
Should be used if it is known that text must not be edited
after importing.</source>
        <translation>Сгруппировать абзацные стили по атрибутам.
В результате количество стилей уменьшается, 
но управлять стилевой разметкой становится сложнее.
Рекомендуется использовать этот параметр только 
при отсутствии необходимости ручной правки текста.</translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <source>Ignore all errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic check before printing or exporting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for missing glyphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for objects not on a page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for transparencies used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for missing images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check image resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lowest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished">dpi</translation>
    </message>
    <message>
        <source>Check for placed PDF-Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove Profile</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <source>Common Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Placing in Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snap Distance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grab Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> px</source>
        <translation type="unfinished">px</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Направляющие</translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Page Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Major Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">Цвет:</translation>
    </message>
    <message>
        <source>Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minor Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="unfinished">Сетка линии шрифта</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished">Показать опорную сетку</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="unfinished">Автомат. межстрочное
расстоя&amp;ние:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished">&amp;Сетка линии шрифта:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished">С&amp;мещение сетки линии шрифта:</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished">Расстояние между малыми ячейками сетки</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished">Расстояние между большими ячейками сетки</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished">Расстояние, начиная с которого объект начнёт &quot;прилипать&quot; к направляющим линиям</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished">Радиус области, внутри которой можно захватывать точки контроля над объектом</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished">Цвет малых ячеек сетки</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished">Цвет больших ячеек сетки</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished">Цвет направляющих линий</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished">Цвет линий полей</translation>
    </message>
    <message>
        <source>Color for the basegrid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the basegrid on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the gridlines on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the guides on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the margins on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="unfinished">Увеличение междустрочного интервала в процентах размера шрифта</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Настройка табуляторов</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation type="unfinished">Диапазон экспорта</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished">&amp;Все страницы</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished">Вы&amp;брать страницы</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">&amp;Поворот:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished">Параметры</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished">Сов&amp;местимость:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished">П&amp;ереплёт:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished">По левому полю</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished">По правому полю</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished">Создать &amp;миниатюры</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished">Сохранить св&amp;язанные текст. рамки как PDF-Articles</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished">Добавить &amp;закладки</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished">dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished">&amp;Разрешение:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="unfinished">Характеристики изображения</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished">Автоматически</translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="unfinished">JPEG</translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="unfinished">Zip</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="unfinished">&amp;Метод:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished">&amp;Качество:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished">Максимальное</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished">Высокое</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished">Низкое</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished">Наихудшее</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="unfinished">Понизить р&amp;азрешение 
изображений до:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished">&amp;Общие</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="unfinished">Встроить &amp;все шрифтовые файлы</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="unfinished">&amp;Вычесть неиспользуемые знаки из всех шрифтовых файлов</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished">Внедрение</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished">Доступные шрифты:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="unfinished">Внедряемые шрифты:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="unfinished">Из каких шрифтовых файлов вычесть знаки:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished">&amp;Шрифты</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished">Показывать вид &amp;страниц</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">Эффекты</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished">Продолжительность
&amp;отображения:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished">Продолжительность
&amp;эффекта:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished">&amp;Тип эффекта:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished">Дви&amp;жущиеся линии:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished">От&amp;куда:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished">&amp;Направление:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished">сек</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished">Без эффекта</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished">Blinds</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished">Box</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">Dissolve</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished">Мерцание</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished">Разделение</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished">Wipe</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished">Изнутри</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="unfinished">Снаружи</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished">Слева направо</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished">Сверху вниз</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished">Снизу вверх</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished">Справа налево</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished">Из верхнего левого в правый нижний</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished">&amp;Применить эффект 
ко всем страницам</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">&amp;Расш.</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished">Использовать &amp;шифрование</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished">Пароли</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished">&amp;Пользователь:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished">&amp;Владелец:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished">Настройки</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished">Разрешить &amp;печать документа</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished">Разрешить &amp;изменения в документе</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished">Разрешить &amp;копирование текста и графики</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished">Разрешить добавление &amp;аннотаций и полей</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished">&amp;Безопасность</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished">Назначение в&amp;ывода:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished">Просмотра с монитора / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">Вывод на печать</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished">&amp;Свои настройки рендеринга</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished">Настройки рендеринга</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished">&amp;Частота:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished">&amp;Угол:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished">Сп&amp;от-функция:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished">Простая точка</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Линия</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished">Окружность</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished">Эллипс</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished">Сплошные тона:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished">Использовать ICC-профиль</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished">Профиль:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished">Тип рендеринга:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Перцепционный</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Относительно колориметрический</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Насыщенность</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Абсолютно колориметрический</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished">Изображения:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished">Не использовать встроенные ICC-профили</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">Ц&amp;вет</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished">Тип вывода в PDF/X-3</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished">&amp;Инфострока:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished">Профи&amp;ль вывода:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="unfinished">Рамка под обрез</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="unfinished">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="unfinished">Встраивать шрифтовые файлы в документы PDF. 
Встраивание этих файлов позволит сохранить вид 
документа при чтении с любого компьютера.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="unfinished">Разрешить презентационные эффекты
при использовании Acrobat Reader 
в полноэкранном режиме.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished">Показывать миниатюры каждой 
указанной выше страницы.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="unfinished">Как долго отображается страница</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished">Продолжительность действия эффекта.
Меньшее число ускорит его, большее - замедлит.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished">Тип отображаемого эффекта</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished">Направление движения линий в эффектах split и blind.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished">Стартовая позиция эффектов box и split.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished">Направление эффектов glitter и wipe.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished">Применить выбранный эффект ко всем страницам.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished">Экспортировать все страницы в PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished">Экспортировать часть страниц в PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished">Вставить сюда разделённый запятыми список 
маркёров, где каждый маркёр может быть * для 
всех страниц, 1-5 для диапазона страниц или 
номером одиночной страницы.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="unfinished">Здесь определяется совместимость с PDF разных версий.
Выберите Acrobat 4.0, если вам нужна максимальная совместимость.
Выберите Acrobat 5.0, если в документе используются особенности 
PDF 1.4 (например, полупрозрачность) или 128-битное шифрование.
Выберите PDF/X-3, если предполагается профессиональная 
высококачественная полиграфия. Этот вариант доступен при включённой 
системе управления цветом (CMS).</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="unfinished">Здесь определяется брошюровка страниц в PDF. Если вы не знаете, 
что это такое, то лучше оставить стандартную настройку: &quot;Слева&quot;.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished">Если параметр включён, Scribus создаст миниатюры для 
каждой страницы в PDF, которые могут использоваться 
для навигации по документу в некоторых программах.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished">Если параметр включён, Scribus создаст PDF-Articles, 
что полезно для навигации по связанным статьям в PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="unfinished">Встроить закладки, созданные в документе. 
Это позволит удобно перемещаться по PDF-документу.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished">Экспортировать разрешение текста и векторной 
графики. На растровые изображения, подобные 
фотографиям, это не распространяется.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="unfinished">Сжимать текст и графику. Без особой причины 
отключать этот параметр не стоит. Это помогает 
уменьшить размер получаемого PDF-файла.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="unfinished">Способ сжатия изображения
Автоматический - Scribus сам выбирает подходящий способ.
ZIP - подходит для изображений со сплошными тонами.
JPEG - больше подходит для создания PDF файлов меньшего 
размера с большим количеством фотографий (и по 
возможности небольшой потерей в качестве).
Для типичных задач рекомендуется оставить 
автоматический выбор типа сжатия.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="unfinished">Уровни сжатия: Минимальный (25%), Низкий (50%), 
Средний (75%), Высокий (85%), Максимальный (95%)</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="unfinished">Изменить разрешение растровых изображений до указанного.
Если флажок не выставлен, будут использованы исходные 
значения количества точек на дюйм.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished">dpi (кол-во точек на дюйм) при экспорте изображений</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished">Здесь определяются настройки безопасности в экспортируемом PDF.
Выберите Acrobat 4.0, если вам нужно 40-битное шифрование.
Выберите Acrobat 5.0, если вам нужно 128-битное шифрование.
Помните, что шифрование в PDF не настолько надёжно, как системы 
шифрования GPG или PGP.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="unfinished">Основной пароль, которым защищены все параметры 
безопасности экспортируемого PDF-файла</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished">Выберите пароль для доступа на чтение PDF-документа.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished">Разрешить печать документа.
При невыставленном флажке печатать  
файл PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished">Разрешить изменения в документе. 
При невыставленном флажке изменять  
файл PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="unfinished">Разрешить копирование текста и графики из PDF.
При невыставленном флажке копировать  
текст и графику в PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="unfinished">Разрешить добавление аннотаций и полей в PDF.
При невыставленном флажке редактировать 
аннотации и поля в PDF будет невозможно.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="unfinished">Цветовая модель для вывода в PDF.
&quot;Экран/Веб&quot; подходит для просмотра документов с 
экрана и печати на обычных струйных принтерах.
&quot;Принтер&quot; необходимо выбрать при печати на 
настоящий 4-цветный CMYK принтер.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished">Это дополнительный параметр, отключенный по умолчанию. 
Он включается в особых случаях, когда этого требует принтер, 
причём вам сообщаются все детали. В противном случае 
экспортированный вами PDF-файл может не распечататься 
корректно и не отображаться одинаково во всех 
операционных системах.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished">Встроить цветовой профиль для сплошных тонов</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished">Цветовой профиль для сплошных тонов</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished">Тип рендеринга сплошных тонов</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished">Встроить цветовой профиль для изображений</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished">Не использовать цветовые профили, 
встроенные в исходные изображения</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished">Цветовой профиль для изображений</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished">Тип рендеринга изображений</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished">Профиль вывода на печать. При возможности 
получите информацию в вашей типографии 
о необходимом профиле.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished">Обязательная строка для PDF/X-3 или PDF не пройдёт 
тест на соответствие требованиям PDF/X-3. 
Рекомендуется использовать название документа.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished">Расстояние от линии обреза до верха физической страницы</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished">Расстояние от линии обреза до низа физической страницы</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished">Расстояние от линии обреза до левого края физической страницы</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished">Расстояние от линии обреза до правого края физической страницы</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished">Зеркально отразить по горизонтали</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished">Зеркально отразить по вертикали</translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Шрифт:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished">Размер:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished">С&amp;толбцов:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished">&amp;Интервал:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">А ещё неплохо бы на зависть другим уметь красиво читать и писать</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished">&amp;Цвет линии:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished">&amp;Затенение:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished">Цвет за&amp;ливки:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished">За&amp;тенение:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished">То&amp;лщина линии:</translation>
    </message>
    <message>
        <source>Line S&amp;tyle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arrows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished">&amp;Свободное масштабирование</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished">Масштабирование 
по &amp;горизонтали:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished">Масштабирование 
по &amp;вертикали:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished">Масштабировать &amp;изображение до рамки</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished">Сохранять &amp;соотношение сторон</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished">Цвет &amp;заливки:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished">&amp;Минимум:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished">Ма&amp;ксимум:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished">&amp;Шаг:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished">Свойства текстовой рамки</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="unfinished">Свойства рамки изображения</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished">Свойства очертания</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished">Степень увеличения по умолчанию</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished">Свойства линии</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished">Свойства многоугольника</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished">Шрифт для новых текстовых рамок</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished">Кегль шрифта для новых текстовых рамок</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished">Цвет шрифта</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished">Количество столбцов в текстовой рамке</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished">Расстояние между столбцами в текстовой рамке</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished">Так выглядит указанный шрифт</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished">Рамки позволяют произвольно масштабировать изображения</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished">Масштабирование изображений по горизонтали</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished">Масштабирование изображений по вертикали</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished">Сохранять соотношение сторон при масштабировании</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished">Изображения в рамке масштабируются под её размер</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished">Автоматически масштабируемые изображения 
сохраняют исходное соотношение сторон</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="unfinished">Цвет заливки рамок изображений</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished">Насыщение цвета заливки</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished">Цвет линий очертаний</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished">Насыщение цвета линий</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished">Цвет заливки очертаний</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished">Стиль линий очертаний</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished">Толщина линий очертаний</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished">Включено минимально возможное &quot;прилипание&quot;</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished">Включено максимально возможное &quot;прилипание&quot;</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished">Изменить &quot;прилипание&quot; для каждого шага масштабирования</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished">Цвет линий</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished">Стиль линий</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished">Толщина линий</translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Нижний индекс</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished">&amp;Смещение:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished">&amp;Масштабирование:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Верхний индекс</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished">Смеще&amp;ние:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished">&amp;Масштабирование:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Капитель</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished">Ма&amp;сштабирование:</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished">Смещение выше линии опорной сетки</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished">Относительный размер верхнего индекса по отношению к обычному шрифту</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished">Смещение ниже линии опорной сетки обычного шрифта</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished">Относительный размер нижнего индекса по отношению к обычному шрифту</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished">Относительный размер капители по отношению к обычному шрифту</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Влево</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Вправо</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>По точке</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>По запятой</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>По центру</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Удалить всё</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Отступ первой строки абзаца</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Отступ слева для всего абзаца</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Удалить все табуляторы</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Положение:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation>&amp;Красная строка:</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation>Отступ с&amp;лева:</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Структура</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Элемент</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Тип</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Информация</translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="obsolete">X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="obsolete">Y:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="obsolete">Шрифт:</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Изображение</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Текст</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Линия</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Многоугольник</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="obsolete">Ломаная линия</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="obsolete">Контурный текст</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Страница</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Предупреждение</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Имя &quot;%1&quot; уже использовано.
Выберите другое.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">ОК</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Группа</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Страница</translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <source>Add vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished">Группировать</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished">Создать</translation>
    </message>
    <message>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align/Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Items involved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color1: %1, Color2: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="unfinished">Блокировать</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished">Разблокировать</translation>
    </message>
    <message>
        <source>Lock size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">Удалить</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished">Переименовать</translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="unfinished">Вставить</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished">Вырезать</translation>
    </message>
    <message>
        <source>Set fill color transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the style of line end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the style of line join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not use custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set start arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set end arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rows: %1, Cols: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font stroke color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font stroke color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set kerning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">Многоугольник</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished">Ломаная линия</translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import SVG image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import EPS image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import OpenOffice draw image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No text flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set image scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frame size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Break aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset contour line</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <source>Action History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show selected object only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">&amp;Отменить</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">Пов&amp;торить</translation>
    </message>
    <message>
        <source>Initial State</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Вставить значение</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Введите значение и нажмите ОК</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Введите значение и нажмите ОК</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Передать ваше значение сценарию</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Короткие слова</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Вставить неразрывные пробелы:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>В &amp;выбранные рамки</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>По всей &amp;странице</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>По всему &amp;документу</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation>О &amp;модуле и языках</translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation>Заменить стандартные настройки</translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
        <comment>short words plugin</comment>
        <translation>Если существует свой файл настроек этого модуля
(%1),
вы можете добавить свои настройки к общесистемным, 
держа флажок напротив этой метки снятым.
Вы также можете заменить общесистемные 
настройки своими собственными, для чего нужно 
держать флажок напротив этой метки включенным.</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Обработаны только выбранные рамки.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Обработана только текущая страница.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Обработан весь документ.</translation>
    </message>
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation>Короткие Слова для Scribus</translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation>Работает для следующих языков</translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation>О модуле Короткие Слова</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Инструменты</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation>Выбрать объекты</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Повернуть объекты</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Изменить содержимое рамки</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Вставить тестовую рамку</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation>Вставить изображение</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Свойства...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation>Вставить многоугольник</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation>Вставить линии</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation>Вставить кривые Безье</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Вставить линию от руки</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Связать текстовые рамки</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Разъединить тестовые рамки</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Вставить таблицу</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>Изменить масштаб</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Изменить текст в Текстовом Редакторе</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation>Нарисовать различные очертания</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="obsolete">Измерить</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>Button</source>
        <translation>Кнопка</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Текстовое поле</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Флажок</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Раскрывающийся список</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Список</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>ССылка</translation>
    </message>
    <message>
        <source>PDF Tools</source>
        <translation>PDF-инструменты</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>Вставить PDF-поля</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>Вставить PDF-аннотации</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Выбор символа:</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="obsolete">Вставить символы под курсор в тексте</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="obsolete">Удалить текуее выделение(ия).</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Закрыть это диалог и вернуться к правке текста.</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="obsolete">В&amp;ставить</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">О&amp;чистить</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Закрыть</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Выберите фильтр импорта</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <source>Get text only</source>
        <translation>Только текст</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Импортировать текст без форматирования</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Фильтр импорта:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Кодировка:</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Выберите фильтр импорта</translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Запомнить ассоциацию</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation>Запомнить расширение файла для импорта и 
больше не спрашивать о файлах этого типа</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Новый документ из шаблона</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Все</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Размер страницы</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Цвета</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Описание</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Использование</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Создано при помощи:</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Автор</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Открыть</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Скачивание шаблонов</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Устанавка шаблонов</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Распакуйте архив в каталог шаблонов ~/.scribus/templates 
для текущего пользователя или в PREFIX/share/scribus/templates 
для всех пользователей системы.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Подготовка шаблона</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Удаление шаблона</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Перевод template.xml</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Шаблоны документов можно найти на сайте http://www.scribus.net/ в разделе Downloads.</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Убедитесь в том, что используемые изображения доступны с любого другого компьютера. Если шрифты не доступны отовсюду, не собирайте их при сохранении шаблона.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>Создатель шаблона должен убедиться в том, что раздел &quot;Установка шаблонов&quot; действителен и для его шаблонов. Это означает, что у пользователя не должно возникнуть проблем при скачивании пакета, извлечении файлов шаблонов из него и использовании этих шаблонов.</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Удаление шаблона из данного диалога означает лишь удаление записи из template.xml, а сами файлы с документами удалены не будут. Всплывающее меню с пунктом &quot;Удалить&quot; появится только в том случае, если у вас есть права на запись в файл template.xml.</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Скопируйте существующий template.xml в файл с именем вида template.lang_COUNTRY.xml (используйте тот же код страны, что и в qm-файле для вашего языка), например template.fi.xml для template.xml на финском языке. Копия должна находиться в том же каталоге, что и исходный template.xml, так чтобы Scribus мог загрузить этот файл.</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Сохранить как шаблон</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Категория</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Размер страницы</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Цвета</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Описание</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Использование</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Автор</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>Эл. адрес</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Подробнее</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Менее подробно</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Таблоид</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>альбом</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>портрет</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>собственный</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Создать фильтр</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>О&amp;чистить</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>У&amp;далить</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Выбрать предыдущий сохранённый фильтр</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Дать имя этому фильтру для запоминания</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Дать имя для запоминания</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>О&amp;тменить</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Отключить или включить эту строку фильтра</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Удалить эту строку фильтра</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Добавить новую строку фильтра</translation>
    </message>
    <message>
        <source>to</source>
        <translation>до</translation>
    </message>
    <message>
        <source>and</source>
        <translation>и</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>удалить совпадение</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>не удалять совпадение</translation>
    </message>
    <message>
        <source>words</source>
        <translation>слов</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Заменить</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Применить</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>Значение слева является регулярным выражением</translation>
    </message>
    <message>
        <source>with</source>
        <translation>на</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>абзацный стиль</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>все вхождения</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>все абзацы</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>абзацы, начинающиеся с</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>абзац меньше</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>абзацы больше</translation>
    </message>
</context>
</TS>
