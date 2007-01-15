<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS><TS version="1.1" language="de_DE">
<context>
    <name></name>
    <message>
        <location filename="" line="136643300"/>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation>getColorNames() -&gt; list

Gibt eine Liste zurück, die alle vorhandenen Farben des aktuellen Dokuments enthält. 
Wenn kein Dokument geöffnet ist, werden die Standardfarben zurückgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation>newDocDialog() -&gt; bool

Zeigt den Dialog \&quot;Neues Dokument\&quot; an. Damit können Sie ein neues Dokument erstellen, wenn der Benutzer die standardmässigen Einstellung aktzeptiert. Erzeugt kein neues Dokument, wenn der Benutzer auf \&quot;Abbrechen\&quot; klickt. 
Gibt den Wert \&quot;true\&quot; zurück, wenn ein neues Dokument erstellt wurde.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;name&quot;]) -&gt; string

Gibt den Wert der Füllfarbe des Objekts &quot;name&quot; zurück.
Wenn &quot;name&quot; nicht angegeben ist, wird das aktuell ausgewählt Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation>moveObject(dx, dy [, &quot;name&quot;])

Verschiebt das Objekt &quot;name&quot; um dx und dy relativ zur Position. Die 
Entfernungsangaben werden in der Masseinheit des Dokuments 
angegeben (siehe Konstanten UNIT*). Wenn &quot;name&quot; nicht vorhanden ist, 
wird das ausgewählte Objekt verschoben und wenn &quot;name&quot; zu einer Gruppe
gehört, wird die gesamte Gruppe verschoben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation>setRedraw(bool)

Wenn bool=False, dann wird die Seite nicht neu neu aufgebaut (redraw ist deaktiviert).
Standard ist bool=True. Diese Einstellung bleibt bestehen, auch wenn das Script beendet ist.
Stellen Sie also sicher, dass setRedraw(True) aufgerufen wird, bevor das Script beendet wird.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Erzeugt ein neues Rechteck auf der aktuellen Seite und gibt seinen Namen zurück. Die
Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe UNIT-Konstanten).
&quot;name&quot; sollte eine eindeutige Identifikation des Rechtecks ermöglichen, weil Sie den Objekt-
namen immer wieder benötigen. Ist &quot;name&quot; nicht vorhanden, wählt Scribus einen Namen für Sie.

Wenn Sie einen schon verwendeten Namen benutzen, tritt der Fehler NameExistsError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Füllt das Objekt &quot;name&quot; mit einem Farbverlauf. Farbbezeichnungen sind die
gleichen wie für setFillColor() und setFillShade(). Siehe Konstanten
für mögliche Typen (FILL_&lt;type&gt;).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFontSize([&quot;name&quot;]) -&gt; float

Gibt die Schriftgrösse in Punkten für den Textrahmen &quot;name&quot; zurück. Wenn innerhalb
des Rahmens Text markiert ist, wird die Schriftgrösse des ersten Zeichens verwendet.
Wenn &quot;name&quot; nicht vergeben ist, wird der selektierte Textrahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>messagebarText(&quot;string&quot;)

Schreibt &quot;string&quot; in die Statuszeile von Scribus. Der Text muss
UTF8-kodiert oder ein &apos;unicode&apos;-String sein (empfohlen).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>newPage(where [,&quot;masterpage&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;masterpage&quot; specifies the name of the
master page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation>newPage(where [,&quot;masterpage&quot;])

Erzeugt eine neue Seite. Falls &quot;where&quot; -1 ist, wird die neue Seite an das Dokument angefügt,
ansonsten wird die neue Seite vor &quot;where&quot; eingefügt. Seitennummern werden von 1 ab hoch-
gezählt, egal welches die angezeigte erste Seitennummer Ihres Dokumentes ist. Der optionale
Parameter &quot;masterpage&quot; legt den Namen der Musterseite für die neue Seite fest</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>&quot;string&quot; muss ein gültiger Dateiname einer SVG-Datei sein. Der Text
muss UTF8-kodiert oder ein Unicode-String (empfohlen) sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>newDocument(size, margins, orientation, firstPageNumber,
                        unit, pagesType, firstPageOrder, numPages) -&gt; bool

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

pagesType = One of the predefined constants PAGE_n. PAGE_1 is single page,
PAGE_2 is for double sided documents, PAGE_3 is for 3 pages fold and
PAGE_4 is 4-fold.

firstPageOrder = What is position of first page in the document.
Indexed from 0 (0 = first).

numPage = Number of pages to be created.

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3, 1)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
        <translation>firstPageOrder = What is position of first page in the document.(new line)
Indexed from 0 (0 = first).
numPage = Number of pages to be created.
The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.
example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3, 1)
May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.</translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <location filename="" line="136643300"/>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>getColor(&quot;name&quot;) -&gt; tuple

Gibt eine Liste mit den vier Farbkomponenten der Farbe &quot;name&quot; im aktuellen 
Dokument wieder. Wenn kein Dokument geöffnet ist, werden die Werte der 
angegebenen Standardfarbe zurückgegeben.

Wenn die Farbe nicht gefunden wird, tritt der Fehler NotFoundError auf.
Wenn der Name der Farbe ungültig ist, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>changeColor(&quot;name&quot;, c, m, y, k)

Ändert die Farbe &quot;name&quot; auf die angegeben CMYK-Werte. Die Abkürzungen
stehen für die vier Farben c=Cyan, m=Magenta, y=Yellow, b=Black.
Die Werte müssen zwischen 0 und 255 liegen.

Wenn die Farbe nicht gefunden wird, tritt der Fehler NotFoundError auf.
Wenn ein ungültiger Farbname angegeben wird, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Löscht die Farbe &quot;name&quot;. An allen Stellen, wo &quot;name&quot; im Dokument auftritt,
wird sie durch &quot;replace&quot; ersetzt. Standardmässig ist &quot;replace&quot; gar keine Farbe -
Transparenz.

Sie können deleteColor auch verwenden, wenn kein Dokument geöffnet ist, dann
bleibt die Angabe von &quot;replace&quot; aber ohne Auswirkung.

Wenn die angegebene Farbe nicht gefunden wird, tritt der Fehler NotFoundError auf.
Wenn der Farbname ungültig ist, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>replaceColor(&quot;name&quot;, &quot;replace&quot;)

An allen Stellen, wo die Farbe &quot;name&quot; vorkommt, wird sie duch die Farbe
&quot;replace&quot; ersetzt.

Wenn eine der Farben nicht vorhanden ist, tritt der Fehler NotFoundError auf.
Wenn der Name der Farbe ungültig ist, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
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
        <translation>messageBox(&quot;caption&quot;, &quot;message&quot;,icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer
Zeigt einen Dialog mit dem Titel &quot;caption&quot;, der Botschaft &quot;message&quot; und dem Symbol &quot;icon&quot; sowie
bis zu 3 Buttons an. Standard ist kein Symbol und ein OK-Button. Nur Titel und Botschaft sind
erforderliche Felder, aber Symbol und Buttons werden empfohlen.
Der Text der Botschaft kann auch einfachen HTML-Code enthalten.
Gibt die Nummer des Buttons wieder, der gedrückt wurde, beginnend mit 1.
Für Buttons und Symbole gibt es vordefinierte Konstanten, die gleichen wie in
der Qt-Dokumentation.
Die sind im Modul definiert und heissen BUTTON_* und ICON_* . Es gibt auch zwei
spezielle Konstanten, die auch den Wert 0 annehmen können: BUTTONOPT_DEFAULT aktiviert den 
jeweiligen Button per Druck auf Enter.
BUTTONOPT_ESCAPE drückt die Escape-Taste falls dieser Button gedrückt wird.
Beispiel
result = messageBox(&apos;Script failed&apos;,&apos;This script only works when you have a text frame selected.&apos;,
ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,ICON_WARNING,
BUTTON_YES|BUTTONOPT_DEFAULT, BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)
Konstanten für Buttons und Symbole:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation>valueDialog(caption, message [,defaultvalue]) -&gt; string

Zeigt einen Dialog an, der einen String verlangt und zurückgibt.
Parameter: Fenstertitel, Text im Fenster und optionaler &apos;default&apos;-Text.

Beispiel: valueDialog(&apos;TItel&apos;, &apos;Text im Fenster&apos;, &apos;optional&apos;)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation>closeDoc()

Schliesst das aktuelle Dokument, ohne Änderungen zu sichern.

Wenn kein Dokument offen ist, tritt der Fehler NoDocOpenError auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation>haveDoc() -&gt; bool

Gibt True zurück, wenn ein Dokument geöffnet ist.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation>openDoc(&quot;name&quot;)

Öffnet das Dokument &quot;name&quot;.

Schlägt das fehl, tritt der Fehler ScribusError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation>saveDoc()

Speichert das Dokument unter dem aktuellen Namen und gibt True zurück, wenn das
erfolgreich war. Wurde das Dokument noch nicht gesichert, öffnet sich der &quot;Speichern&quot;-
Dialog.

Wenn das Sichern fehlschlägt, erscheint derzeit keine Fehlermeldung.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation>saveDocAs(&quot;name&quot;)

Speichert das aktuelle Dokument unter dem neuen Namen &quot;name&quot;. Die Pfadangabe kann dabei
relativ oder absolut sein.

Schlägt das Sichern fehl, tritt der Fehler ScribusError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation>setMargins(lr, rr, tr, br)

Verändert die Ränder des Dokuments. Links=lr, Rechts=rr, Oben=tr, Unten=br.
Die Einheit wird durch die Masseinheit des Dokuments vorgegeben, siehe die
Konstanten UNIT_&lt;type&gt;.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation>setUnit(type)

Ändert die Masseinheit des Dokuments auf &quot;type&quot;. Mögliche Einheiten geben Sie durch die 
Konstanten UNIT_&lt;type&gt; an.

Ist die Einheit ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation>getUnit() -&gt; integer (Scribus unit constant)

Gibt die Masseinheit des Dokuments zurück. Der Rückgabewert ist eine
der möglichen UNIT_*-Konstanten:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation>loadStylesFromFile(&quot;filename&quot;)

Lädt die Absatzstile aus der Datei &quot;filename&quot; in das aktuelle Dokument.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation>setDocType(facingPages, firstPageLeft)

Setzt den Dokumenttyp. Gegenüberliegende Seiten erreichen Sie mit FACINGPAGES, normale
Seiten mit NOFACINGPAGES. Wenn die erste Seite links sein soll, schreiben Sie FIRSTPAGELEFT, 
ansonsten FIRSTPAGERIGHT.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineColor([&quot;name&quot;]) -&gt; string

Gibt den Namen der Linienfarbe des Objekts &quot;name&quot; zurück.
Wenn &quot;name&quot; nicht angegeben ist, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineWidth([&quot;name&quot;]) -&gt; integer

Gibt die Linienbreite des Objekts &quot;name&quot; zurück.
Wenn &quot;name&quot; nicht angegeben ist, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;name&quot;]) -&gt; integer

Gibt den Tonwert des Objekts &quot;name&quot; zurück.
Wenn &quot;name&quot; nicht angegeben ist, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation>getLineJoin([&quot;name&quot;]) -&gt; integer (siehe Konstanten)

Gibt den Stil der Ecken des Objekts &quot;name&quot; zurück. Ist kein &quot;name&quot; angegeben, wird
das aktuelle Objekt benutzt. Die Linientypen sind JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation>getLineEnd([&quot;name&quot;]) -&gt; integer (siehe Konstanten)

Gibt den Stil der Linienrundungen des Objekts &quot;name&quot; an. Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt benutzt.
Die unterstützten Stile sind CAP_FLAT, CAP_ROUND, CAP_SQUARE</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation>getLineStyle([&quot;name&quot;]) -&gt; integer (siehe Konstanten)

Gibt den Linienstil des Objekts &quot;name&quot; wieder. Ist &quot;name&quot; nicht angegeben,
wird das aktuelle Objekt benutzt. Linienstile sind LINE_DASH, LINE_DASHDOT,
LINE_DASHDOTDOT, LINE_SOLID</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillShade([&quot;name&quot;]) -&gt; integer

Gibt den Tonwert der Füllfarbe von &quot;name&quot; zurück. Ist &quot;name&quot; nicht angegeben, wird
das aktuelle Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getImageScale([&quot;name&quot;]) -&gt; (x,y)(

Gibt ein Zahlenpaar (x,y) zurück mit den Skalierungswerten des Bildes im Rahmen
&quot;name&quot;. Ist &quot;name&quot; nicht angegeben, wird der aktuelle Rahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getImageName([&quot;name&quot;]) -&gt; string

Gibt den Dateinamen des Bildes im Rahmen &quot;name&quot; zurück. Ist &quot;name&quot; nicht
angegeben, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation>getSize([&quot;name&quot;]) -&gt; (Breite,Höhe)

Gibt das Zahlenpaar (Breite,Höhe) des Objekts &quot;name&quot; zurück. Ist &quot;name&quot; nicht
angegeben, wird das aktuelle Objekt verwendet. Die Grösse wird in der Masseinheit
des Dokuments angegeben - siehe die UNIT_*-Konstanten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation>getRotation([&quot;name&quot;]) -&gt; integer

Gibt die Drehung des Objekts &quot;name&quot; in Grad zurück und im Uhrzeigersinn zurück.
Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation>getAllObjects() -&gt; list

Gibt eine Liste zurück mit allen auf der aktuellen Seite verwendeten Objekte.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation>moveObjectAbs(x, y [, &quot;name&quot;])

Bewegt das Objekt &quot;name&quot; an die neue Stelle. Die Koordinaten werden in der Masseinheit
des Dokuments angegeben (siehe UNIT_*-Konstanten). Ist &quot;name&quot; nicht angegeben, wird das
aktuelle Objekt benutzt. Gehört &quot;name&quot; zu einer Gruppe, wird die Gruppe verschoben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>rotateObject(rot [, &quot;name&quot;])

Dreht das Objekt &quot;name&quot; relativ um &quot;rot&quot; Grad. Beim Drehen wird der Ursprung verwendet,
der gerade aktiv ist - normalerweise der Punkt links oben. Positive Werte für &quot;rot&quot; bedeuten
Drehung in Uhrzeigersinn, negative Werte Drehung gegen den Uhrzeigersinn. Ist &quot;name&quot; nicht
angegeben, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>sizeObject(width, height [, &quot;name&quot;])

Ändert die Grösse von &quot;name&quot; auf die Breite width und die Höhe height.
ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation>getSelectedObject([nr]) -&gt; string

Gibt den Namen des ausgewählten Objekts zurück. &quot;nr&quot; gibt die Zahl des gewählten
Objekts an. 0 bedeutet das erste ausgewählte Objekt, 1 das zweite usw.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation>selectionCount() -&gt; integer

Gibt die Anzahl der ausgewählten Objekte zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation>selectObject(&quot;name&quot;)

Wählt das Objekt &quot;name&quot; aus.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation>deselectAll()

Setzt alle Objekte im Dokument auf nicht ausgewählt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation>groupObjects(list)

Gruppiert die Elemente in &quot;list&quot;. &quot;list&quot; muss die Namen der zu gruppierenden 
Objekte enthalten. Ist &quot;list&quot; nicht angegeben, werden die aktuell gewählten 
Objekte verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation>unGroupObjects(&quot;name&quot;)

Zerstört die Gruppe &quot;name&quot;. Ist &quot;name&quot; nicht angegeben, wird die aktuelle Gruppe verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
        <translation>scaleGroup(factor [,&quot;name&quot;])

Skaliert die Gruppe, zu dem das Objekt &quot;name&quot; gehört. Werte grösser als 1 vergrössern das Objekt, 
Werte kleiner als 1 verkleinert das Objekt. Zum Beispiel bedeutet 0.5 = 50 % oder 1.5=150% der 
Originalgrösse. &quot;factor&quot; muss grösser als 0 sein. Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt
benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Lädt das Bild &quot;picture&quot; in den Bildrahmen &quot;name&quot;. Ist &quot;name&quot; nicht angegeben, 
wird der aktuelle Rahmen benutzt.

Ist das Ziel kein Bildrahmen, tritt der Fehler WrongFrameTypeError auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>scaleImage(x, y [, &quot;name&quot;])

Skaliert das Bild &quot;name&quot; auf die angegeben Werte. 1 bedeutet 100 %. Ist &quot;name&quot;
nicht angegeben, wird der aktuelle Bildrahmen verwendet.

Ist das Ziel kein Bildrahmen, tritt der Fehler WrongFrameTypeError auf,</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation>lockObject([&quot;name&quot;]) -&gt; bool

Sperrt das Objekt &quot;name&quot;, wenn es freigegeben ist und entsperrt es, wenn es
gesperrt ist. Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt verwendet.
Gibt True zurück, wenn das Objekt gesperrt ist.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>isLocked([&quot;name&quot;]) -&gt; bool

Gibt True zurück, wenn &quot;name&quot; gesperrt ist. Ist &quot;name&quot; nicht angegeben, wird das aktuelle
Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation>getFontNames() -&gt; list

Gibt eine Liste mit allen verfügbaren Schriften zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation>getXFontNames() -&gt; list

Gibt genaue Informationen zu einer Schrift zurück mit den Werten:
[ (Name in Scribus, Familie, wirklicher Name, Subset (1|0), embed PS (1|0), Fontdatei), (...), ... ]</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation>getLayers() -&gt; list

Gibt eine Liste mit allen Ebenen zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setActiveLayer(&quot;name&quot;)

Macht die Ebene &quot;name&quot; zur aktiven Ebene.

Ist die Ebene nicht vorhanden, tritt der Fehler NotFoundError auf.
Ist der Name der Ebene ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation>getActiveLayer() -&gt; string

Gibt die aktive Ebene zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Verschiebt das Objekt &quot;name&quot; auf die Ebene &quot;layer&quot;. Die Ebene muss
vorhanden sein. Ist &quot;name&quot; nicht angegeben, wird das aktive Objekt benutzt.

Ist die Ebene nicht vorhanden, tritt der Fehler NotFoundError auf.
Ist der Name der Ebene ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerVisible(&quot;layer&quot;, visible)

Zeigt die Ebene &quot;layer&quot; an oder versteckt sie. Ist &quot;visible&quot; auf False gesetzt,
ist die Ebene unsichtbar.

Ist die Ebene nicht vorhanden, tritt der Fehler NotFoundError auf.
Ist der Name der Ebene ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>deleteLayer(&quot;layer&quot;)

Löscht die Ebene &quot;layer&quot;. Ist die Ebene nicht vorhanden oder ist nur eine
Ebene vorhanden, passiert gar nichts.

Ist die Ebene nicht vorhanden, tritt der Fehler NotFoundError auf,
Ist der Name der Ebene ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>createLayer(layer)

Erzeugt einen Ebene mit dem Namen &quot;layer&quot;.

Ist der Name ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation>getGuiLanguage() -&gt; string

Gibt den Wert der Variable -lang zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Erzeugt eine Ellipse auf der aktuellen Seite und gibt ihren Namen zurück. Die Koordinaten
werden in der Masseinheit des Dokuments angegeben (siehe UNIT-Konstanten). &quot;name&quot; sollte
das Objekt eindeutig identifizieren, weil Sie den Namen für spätere Zwecke brauchen. Ist &quot;name&quot;
nicht angegeben, erzeugt Scribus einen Namen für das Objekt.

Ist der Name schon vorhanden, tritt der Fehler NameExistsError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Erzeugt einen Bildrahmen auf der aktuellen Seite und gibt seinen Namen zurück.
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Erzeugt einen neuen Textrahmen auf der aktuellen Seite und gibt seinen Namen zurück.
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Erzeugt eine Linie von P(x1,y1) zu P(x2,y2) und gibt ihren Namen zurück.
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
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
        <translation>createPolyLine(list, [&quot;name&quot;]) -&gt; string

Erzeugt eine Mehrfachlinie und und gibt ihren Namen zurück. Die Punkte werden in
der folgenden Reihenfolge gespeichert: [x1, y1, x2,...xn, yn].
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.
Ist die Anzahl der Punkte nicht genügend, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
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
        <translation>createPolygon(list, [&quot;name&quot;]) -&gt; string

Erzeugt ein Vieleck und gibt seinen Namen zurück. Die Punkte werden in
der folgenden Reihenfolge gespeichert: [x1, y1, x2,...xn, yn]. Sie müssen
mindestens 3 Punkte angeben, aber Sie müssen den ersten Punkt nicht zum
Schliessen des Polygons erneut angeben - das geschieht automatisch.
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.
Ist die Anzahl der Punkte nicht ausreichend, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
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
        <translation>createBezierLine(list, [&quot;name&quot;]) -&gt; string

Erzeugt eine Bézierkurve und gibt ihren Namen zurück. Die Punkte werden in
der folgenden Reihenfolge gespeichert: 
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]. 
x und y steht dabei für die X- und Y-Koordinaten und kx und ky steht für den
Kontrollpunkt der Kurve. 
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.
Ist die Anzahl der Punkte nicht ausreichend, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</source>
        <translation>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Erzeugt Text auf einem Pfad, indem die Objekte &quot;textbox&quot; und &quot;beziercurve&quot;
zusammengefügt werden.
Die Koordinaten werden in der Masseinheit des Dokuments angegeben (siehe
UNIT-Konstanten). &quot;name&quot; sollte das Objekt eindeutig identifizieren, weil Sie den
Namen für spätere Zwecke benötigen. Wenn Sie &quot;name&quot; nicht angeben, legt Scribus
einen Namen für das Objekt fest.

Ist das Objekt schon vorhanden, tritt der Fehler NameExistsError auf.
Sind ein oder beide Objekte nicht vorhanden, tritt der Fehler NotFoundError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation>deleteObject([&quot;name&quot;])

Löscht das Objekt &quot;name&quot;. Ist &quot;name&quot; nicht angegeben, wird das aktuelle
Objekt gelöscht.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation>objectExists([&quot;name&quot;]) -&gt; bool

Gibt an, ob das Objekt mit dem Name &quot;name&quot; auch wirklich im aktuellen Dokument
existiert. &quot;name&quot; ist optional, ist &quot;name&quot; nicht angegeben, wird True ausgegeben, wenn
gerade ein Objekt selektiert ist.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation>setStyle(&quot;style&quot; [, &quot;name&quot;])

Setzt den Absatzstil &quot;style&quot; für das Objekt &quot;name&quot;. Ist kein Objekt angegeben,
wird der Stil auf das aktuelle Objekt angewendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation>getAllStyles() -&gt; list

Gibt eine Listen mit allen Absatzstilen im aktuellen Dokument zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation>currentPage() -&gt; integer

Gibt die Nummer der aktuellen Seite zurück. Seitenzahlen werden ab 1 gezählt, egal welche
Seitenzahl auf der aktuellen Seite angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation>redrawAll()

Baut alle Seiten neu auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation>savePageAsEPS(&quot;name&quot;)

Speichert die aktuelle Seite als EPS-Datei mit dem Namen &quot;name&quot;.

Schlägt das Speichern fehl, tritt der Fehler ScribusError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation>deletePage(nr)

Löscht die Seite mit der Nummer &quot;nr&quot;. Besteht das Dokument nur aus einer Seite, passiert nichts.
Seitenzahlen werden von 1 aufwärts gezählt, egal, welche Seitenzahl Sie auf der aktuellen Seite
im Dokument sehen.

Ist die Seitenzahl ungültig, tritt der Fehler IndexError auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation>gotoPage(nr)

Geht zur Seite &quot;nr&quot;, das heisst, die Seite &quot;nr&quot; wird zur aktuellen Seite. Zur Zeit ändert
sich allerdings nicht die Seite, die der User sieht, es wird nur intern die aktuelle
Seite geändert.

Ist die Seitenzahl ungültig, tritt der Fehler IndexError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation>pageCount() -&gt; integer

Gibt die Anzahl der Seiten im Dokument zurück.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation>getHGuides() -&gt; list

Gibt eine Liste zurück, die die Position der horizontalen Hilfslinien enthält. Die Werte
werden in der Masseinheit des Dokuments angegeben, siehe UNIT-Konstanten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation>setHGuides(list)

Legt horizontale Hilfslinien fest, list muss eine Liste der Linien sein, angegeben in der Masseinheit
des Dokuments, siehe UNIT-Konstanten.

Beispiel:
setHGuides(getHGuides() + [200.0, 210.0] # fügt eine neue Hilfslinie hinzu
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getVGuides()

See getHGuides.
</source>
        <translation>getVGuides()

Siehe getHGuides.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setVGuides()

See setHGuides.
</source>
        <translation>setVGuides()

Siehe setHGuides.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation>getPageSize() -&gt; tuple

Gibt eine Liste mit der Seitengrösse in der aktuellen Masseinheit zurück, siehe
UNIT-Konstanten und getPageMargins()</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation>getPageItems() -&gt; list

Gibt eine Liste zurück mit den Objekten auf der aktuelle Seite. Die Reihenfolge
der Werte ist: (Name, Typ des Objekts, Anordnung).

Beispiel: [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)] bedeutet, dass das Objekt Text1 heisst, 
ein Textrahmen ist  (type 4) und sich auf der ersten Seite befindet...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Setzt die Füllfarbe &quot;color&quot; für das Objekt &quot;name&quot;. &quot;color&quot; ist der Name einer
vorhandenen Farbe. Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt
verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Setzt die Linienfarbe &quot;color&quot; für das Objekt &quot;name&quot;. Ist &quot;name&quot; nicht angegeben, 
wird das aktuelle Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation>setLineWidth(width, [&quot;name&quot;])

Setzt die Linienbreite für das Objekt &quot;name&quot; auf &quot;width&quot;. &quot;width&quot; muss zwischen 
0.0 und 12.0 gross sein und wird in Punkt angegeben. Ist &quot;name&quot; nicht angegeben,
wird das aktuelle Objekt verwendet.

Ist die Linienbreite ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation>setLineShade(shade, [&quot;name&quot;])

Setzt den Tonwert der Linie des Objekts &quot;name&quot; auf &quot;shade&quot;. &quot;shade&quot; ist eine
ganze Zahl zwischen 0 und 100. Ist &quot;name&quot; nicht angegeben, wird das aktuelle 
Objekt verwendet.

Ist der Tonwert ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation>setLineJoin(join, [&quot;name&quot;])

Setzt die Ecken der Linien des Objekts &quot;name&quot; auf den Stil join.
Ist &quot;name&quot; nicht angegeben, wird das aktuelle Obekt verwendet.
Benutzen Sie die vorgegeben Konstaten des Typs JOIN_*.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation>SetLineEnd(endtype, [&quot;name&quot;])

Setzt die Linienenden des Objekts &quot;name&quot; auf den Stil &quot;endtype&quot;.
Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt verwendet.
Benutzen Sie die vorgegebenen Konstanten des Typs CAP_*.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation>setLineStyle(style, [&quot;name&quot;])

Setzt den Linienstil des Objekts &quot;name&quot; auf den Stil &quot;style&quot;. Ist &quot;name&quot; nicht
angegeben, wird das aktuelle Objekt verwendet. Benutzen Sie die
vorgegebenen Konstanten des Typs LINE_*.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation>setFillShade(shade, [&quot;name&quot;])

Setzt den Tonwert der Füllfarbe für das Objekt &quot;name&quot; auf &quot;shade&quot;.
&quot;shade&quot; muss eine ganze Zahl zwischen 0 und 100 sein. Ist &quot;name&quot;
nicht angegeben, wird das aktuelle Objekt benutzt.

Ist der Tonwert ungültig, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation>setCornerRadius(radius, [&quot;name&quot;])

Setzt den Eckradius für das Objekt &quot;name&quot; auf radius. Der Radius wird
in Punkt angegeben. Ist &quot;name&quot; nicht angegeben, wird das aktuelle
Objekt verwendet.

Ist der Eckradius negativ, tritt der Fehler ValueError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Setzt den Linienstil für das Objekt &quot;name&quot; auf den angegebenen Stil.
Ist &quot;name&quot; nicht angegeben, wird der aktuelle Stil benutzt.

Ist der Stil nicht vorhanden, tritt der Fehler NotFoundError auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getFont([&quot;name&quot;]) -&gt; string

Gibt den Namen der Schrift für den Textrahmen &quot;name&quot; zurück. Ist in
dem Textfeld Text ausgewählt, wird die Schrift des ersten gewählten
Zeichens angegeben. Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt
verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getTextLength([&quot;name&quot;]) -&gt; integer

Gibt die Länge des Textes im Textrahmen &quot;name&quot; zurück.
Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getText([&quot;name&quot;]) -&gt; string

Gibt den Text aus dem Textrahmen &quot;name&quot; zurück. Ist in dem Textfeld Text markiert,
wird der selektierte Text zurückgegeben. Der gesamte Text wird zurückgegeben, nicht
nur der sichtbare Teil des Textes, Ist &quot;name&quot; nicht angegeben, wird das aktuelle
Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>getAllText([&quot;name&quot;]) -&gt; string

Gibt den Text aus dem Textrahmen &quot;name&quot; zurück und aus allen Rahmen, die mit
dem Rahmen &quot;name&quot; verbunden sind. Ist in dem Textfeld Text markiert,
wird der selektierte Text zurückgegeben. Ist &quot;name&quot; nicht angegeben, wird das aktuelle
Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineSpacing([&quot;name&quot;]) -&gt; float

Gibt den Zeilenabstand für den Textrahmen &quot;name&quot; in Punkten zurück.
Ist &quot;name&quot; nicht angegeben, wird das aktuelle Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getColumnGap([&quot;name&quot;]) -&gt; float

Gibt den Zeilenabstand für den Text im Rahmen &quot;name&quot; in Punkten zurück. Ist
&quot;name&quot; nicht angegeben, wird das aktuelle Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getColumns([&quot;name&quot;]) -&gt; integer

Gibt die Anzahl der Spalten im Textrahmen &quot;name&quot; zurück. Ist &quot;name&quot; nicht
angegeben, wird das aktuelle Objekt verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setText(&quot;text&quot;, [&quot;name&quot;])

Ändert den Text im Rahmen &quot;name&quot; auf den String &quot;text&quot;.
Der Text muss URF8-kodiert sein - verwenden Sie z.B. unicode(text, &apos;iso-8859-2&apos;).
Lesen Sie in der FAQ nach für weitere Informationen. Ist &quot;name&quot; nicht angegeben, 
wird der aktuelle Textrahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation>setFont(&quot;font&quot;, [&quot;name&quot;])

Setzt die Schrift für den Rahmen &quot;name&quot; auf &quot;font&quot;. Ist Text ausgewählt,
wird nur die Markierung verändert. Ist &quot;name&quot; nicht angegeben, wird der
aktuelle Textrahmen verwendet.

Ist die Schrift ungültig, wird der Fehler ValueError ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation>setFontSize(size, [&quot;name&quot;])

Setzt die Schriftgrösse im Textrahmen &quot;name&quot; auf den Wert &quot;size&quot;. &quot;size&quot; ist
ein Wert in Punkten zwischen 1 und 512. Ist eine Markierung vorhanden, wird
nur die die Markiertung verändert. Ist &quot;name&quot; nicht angegeben, wird der aktuelle
Textrahmen verwendet.

Ist die Schriftgrösse ungültig, wird der Fehler ValueError ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation>setLineSpacing(size, [&quot;name&quot;])

Setzt den Zeilenabstand im Rahmen &quot;name&quot; auf den Wert &quot;size&quot;.
&quot;size&quot; ist ein Wert in Punkten. Ist &quot;name&quot; nicht angegeben, wird der
aktuelle Textrahmen verwendet.

Ist der Wert für Zeilenabstand ungültig, wird der Fehler ValueError
ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation>setColumnGap(size, [&quot;name&quot;])

Setzt den Spaltenabstand im Rahmen &quot;name&quot; auf den Wert &quot;size&quot;.
Ist &quot;name&quot; nicht angegeben, wird der aktuelle Textrahmen verwendet.

Ist der Abstand nicht positiv, wird der Fehler ValueError ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation>setColumns(nr, [&quot;name&quot;])

Legt die Anzahl der Spalten im Textrahmen &quot;name&quot; fest auf &quot;nr&quot; fest.
Wenn &quot;name&quot; nicht angegeben ist, wird der aktuelle Textrahmen verwendet.

Ist die Anzahl der Spalten kleiner als 1, wird der Fehler ValueError ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation>setTextAlignment(align, [&quot;name&quot;])

Richtet den Text in dem Objekt &quot;name&quot; nach der Art &quot;align&quot; aus. Ist &quot;name&quot;
nicht angegeben, wird der aktuelle Textrahmen verwendet. &quot;align&quot; ist eine der
ALIGN_*-Konstanten. Siehe dir(scribus).

Bei einem falschen Argument wird der Fehler ValueError ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation>selectText(start, count, [&quot;name&quot;])

Markiert &quot;count&quot; Zeichen des Textrahmens &quot;name&quot; beginnend mit dem Zeichen &quot;start&quot;. 
Die Zählung beginnt bei 0. Wenn &quot;count&quot;=0 ist, wird die Markierung gelöscht. Wenn &quot;name&quot;
nicht angegeben ist, wird der aktuelle Textrahmen verwendet.

Wenn die Werte ungültig sind, wird der Fehler IndexError ausgegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>deleteText([&quot;name&quot;])

Löscht den Textrahmen &quot;name&quot;. Wenn Text ausgewählt ist, wird nur die Markierung
gelöscht. Ist &quot;name&quot; nicht angegeben, wird der aktuelle Textrahmen gelöscht.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Ändert die Farbe des Textes auf &quot;color&quot;. Wenn Text ausgewählt ist, wird die
Markierung auf &quot;color&quot; geändert. Ist &quot;name&quot; nicht angegeben, wird der aktuelle
Textrahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Setzt die Farbe &quot;color&quot; für die Umrandung des Textes. Ist &quot;name&quot; nicht angegeben, wird der aktuelle 
Textrahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setTextShade(shade, [&quot;name&quot;])

Setzt den Tonwert für den Textrahmen &quot;name&quot; auf &quot;shade&quot;.
Ist Text in dem Rahmen ausgewählt, wird nur der ausgewählt Text
verändert. &quot;shade&quot; muss eine ganze Zahl zwischen 0 und 100 sein.
Ist &quot;name&quot; nicht vorhanden oder angegeben, wird der aktuelle Rahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Zwei Textrahmen verketten. &quot;Fromname&quot; wird mit &quot;Toname&quot; verkettet. Der Zielrahmen
muss leer sein und darf nicht mit anderen Rahmen verkettet sein.

Werden die Regeln verletzt, erscheint der Fehler ScribusException.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation>unlinkTextFrames(&quot;name&quot;)

Entfernt den Textrahmen &quot;name&quot; aus der Reihe der verketteten Rahmen. Ist der
zu entfernende Rahmen einer aus der Mitte der Reihe, wird der vorherige und nächste
Rahmen miteinander verkettet, z.B. wird aus a-&gt;b-&gt;c dann a-&gt;c, wenn Sie Rahmen b
entfernen.

Wenn die Verkettungsregeln gebrochen werden, erscheint der Fehler ScribusException.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation>traceText([&quot;name&quot;])

Konvertiert den Textrahmen &quot;name&quot; in Umrisse. Ist &quot;name&quot; nicht vorhanden oder 
vorgegeben, wird der aktuelle Textrahmen verwendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation>progressReset()

Löscht die Fortschrittsanzeige. Wird aufgerufen, bevor eine neue Verlaufsanzeige benutzt wird.
Siehe progressSet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation>progressTotal(max)

Setzt die Gesamtzahl der Schritte für die Fortschrittsanzeige. Siehe progressSet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</source>
        <translation>progressSet(nr)

Die Fortschrittsanzeigen auf &quot;nr&quot; setzen, ein Wert relativ zum vorher festgelegten Wert
für progressTotal. Die Fortschrittsanzeige verwendet Schritte zum Anzeigen des Verlaufs:
Sie geben die Gesamtzahl der Schritte an und dann immer die fertigen Schritte - die Verlaufs-
anzeige zeigt immer den Prozentsatz der fertigen Schritte an. Die Gesamtzahl der Schritte können
Sie mit progressTotal() festlegen, die aktuelle Zahl der Schritte mit progressSet().
Die Fortschrittsanzeige kann mit progressReset() zurückgesetzt werden. [Infos sind aus den 
Dokumenten von Trolltech Qt]</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation>setCursor()

[nicht unterstützt!] Bitte verwenden Sie diese Funktion zur Zeit noch nicht.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation>docChanged(bool)

Aktiviert/Deaktivert das Icon zum Speichern und den entsprechenden Eintrag im Datei-Menü.
Wenn Sie ein Dokument verändert ist es hilfreich, diese Funktion aufzurufen, weil Scribus im Script-
Modus nicht automatisch erkennt, wann ein Dokument verändert wurde.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Setzt die Eigenschaft An Rahmen anpassen für den gewählten Bildrahmen oder angegebenen
Bildrahmen.
&apos;proportional&apos; verkleinert das Bild proportional zur ursprünglichen Grösse.
Sowohl &apos;scaletoframe&apos; als auch &apos;proportional&apos; sind boolsche Werte.

Kann den Fehler WrongFrameTypeError verursachen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Gibt zurück, ob die Ebene gedruckt wird oder nicht. True bedeutet, dass die Ebene
gedruckt wird, False bedeutet, dass das Drucken deaktiviert ist.

Der Fehler NotFoundError tritt auf, wenn die Ebene nicht existiert.
Der Fehler ValueError tritt auf, wenn der Ebenenname ungültig ist.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Erzeugt ein Bild mit dem Text &quot;sample&quot; in der Schrift &quot;font&quot; und der Grösse &quot;size&quot;.
Ist &quot;filename&quot; angegeben, wird das Bild unter &quot;filename&quot; abgespeichert. Ansonsten
werden die Bilddaten als String zurückgegeben. Das optionale Argument &quot;format&quot; gibt 
an, welches Bildformat generiert werden soll. Unterstützt werden die Formate, die auch 
QPixmap.save() kennt, zum Beispiel PPM, JPEG, PNG und XPM.

Der Fehler NotFoundError tritt auf, wenn die Schrift nicht gefunden wird.
Der Fehler ValueError tritt auf, wenn &quot;sample&quot; leer ist oder der Dateiname ungültig ist.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Legt fest (toggle=1), ob der Textrahmen &quot;name&quot; ein Lesezeichen ist oder nicht.
Ist &quot;name&quot; nicht angegeben, wird der aktuelle Textrahmen verwendet.

Der Fehler WrongFrameTypeError tritt auf, wenn der Zielrahmen kein Textrahmen ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Gibt zurück, ob der Textrahmen &quot;name&quot; ein PDF-Lesezeichen ist.
Ist &quot;name&quot; nicht angegeben, wird der aktuelle Textrahmen verwendet.

Der Fehler WrongFrameTypeError tritt auf, wenn der Zielrahmen kein Textrahmen ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation>getPageMargins()

Gibt die Seitenränder als ein Tupel in der gerade aktiven Einheit zurück (oben, unten, links, rechts).
Mögliche Einheiten finden Sie bei UNIT_&lt;tye&gt; und getPageSize().
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. When the isdir parameter is True
the dialog shows and returns only directories. The default for all of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -&gt; string with filename

Zeigt einen Datei öffnen-Dialog mit der Beschriftung &quot;caption&quot;. Dateien werden
gefiltert mit dem String &quot;filter&quot;. Ein Standard-Dateiname oder -pfad kann auch
angegeben werden. Lassen Sie diesen String leer, wenn Sie ihn nicht verwenden
möchten. Der Wert &quot;True&quot; für &quot;haspreview&quot; aktiviert die Dateivorschau im FileSelect-
Dialog. Wenn der &quot;issave&quot;-Parameter den Wert &quot;True&quot; hat, verhält sich der Dialog wie
der &quot;Speichern unter&quot;-Dialog, ansonsten wie der &quot;Date öffnen&quot;-Dialog. Wenn der &quot;isdir&quot;-
Parameter den Wert &quot;True&quot; hat, zeigt der Dialog lediglich Verzeichnisse an. Der Standard-
wert aller optionalen Parameter ist &quot;False&quot;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.
</source>
        <translation>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.
</source>
        <translation>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getProperty(object, property)

Return the value of the property `property&apos; of the passed `object&apos;.

The `object&apos; argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property&apos; argument must be a string, and is the name of the property
to look up on `object&apos;.

The return value varies depending on the type of the property.
</source>
        <translation>getProperty(object, property)

Return the value of the property `property&apos; of the passed `object&apos;.

The `object&apos; argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property&apos; argument must be a string, and is the name of the property
to look up on `object&apos;.

The return value varies depending on the type of the property.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
        <translation>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
        <translation>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object&apos; named `childname&apos;, possibly restricting
the search to children of type name `ofclass&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.
</source>
        <translation>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>textOverflows([&quot;name&quot;, nolinks]) -&gt; integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn&apos;t
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>newStyleDialog() -&gt; string

Shows &apos;Create new paragraph style&apos; dialog. Function returns real
style name or None when user cancels the dialog.
</source>
        <translation>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

WARNING: Obsolete procedure! Use newDocument instead.

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
        <translation>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

WARNING: Obsolete procedure! Use newDocument instead.

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
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().
</source>
        <translation>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>masterPageNames()

Returns a list of the names of all master pages in the document.
</source>
        <translation>masterPageNames()(new line)
(new line)
Returns a list of the names of all master pages in the document.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>editMasterPage(pageName)

Enables master page editing and opens the named master page
for editing. Finish editing with closeMasterPage().
</source>
        <translation>editMasterPage(pageName)(new line)
(new line)
Enables master page editing and opens the named master page(new line)
for editing. Finish editing with closeMasterPage().</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>createMasterPage(pageName)

Creates a new master page named pageName and opens it for
editing.
</source>
        <translation>createMasterPage(pageName)(new line)
(new line)
Creates a new master page named pageName and opens it for(new line)
editing.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>deleteMasterPage(pageName)

Delete the named master page.
</source>
        <translation>deleteMasterPage(pageName)(new line)
(new line)
Delete the named master page.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
        <translation>zoomDocument(double)(new line)
(new line)
Zoom the document in main GUI window. Actions have whole number(new line)
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFillTransparency([&quot;name&quot;]) -&gt; float

Returns the fill transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getFillTransparency([&quot;name&quot;]) -&gt; float
Returns the fill transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getFillBlendmode([&quot;name&quot;]) -&gt; integer

Returns the fill blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getFillBlendmode([&quot;name&quot;]) -&gt; integer
Returns the fill blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineTransparency([&quot;name&quot;]) -&gt; float

Returns the line transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineTransparency([&quot;name&quot;]) -&gt; float
Returns the line transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLineBlendmode([&quot;name&quot;]) -&gt; integer

Returns the line blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineBlendmode([&quot;name&quot;]) -&gt; integer
Returns the line blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerLocked(&quot;layer&quot;, locked)

Sets the layer &quot;layer&quot; to be locked or not. If locked is set to
true the layer will be locked.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerLocked(&quot;layer&quot;, locked)
Sets the layer &quot;layer&quot; to be locked or not. If locked is set to
true the layer will be locked.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerOutlined&quot;layer&quot;, outline)

Sets the layer &quot;layer&quot; to be locked or not. If outline is set to
true the layer will be displayed outlined.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerOutlined&quot;layer&quot;, outline)
Sets the layer &quot;layer&quot; to be locked or not. If outline is set to
true the layer will be displayed outlined.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerFlow&quot;layer&quot;, flow)

Sets the layers &quot;layer&quot;  flowcontrol to flow. If flow is set to
true text in layers above this one will flow around objects on this layer.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerFlow&quot;layer&quot;, flow)
Sets the layers &quot;layer&quot;(sp)(sp)flowcontrol to flow. If flow is set to
true text in layers above this one will flow around objects on this layer.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerBlendmode&quot;layer&quot;, blend)

Sets the layers &quot;layer&quot;  blendmode to blend.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerBlendmode&quot;layer&quot;, blend)
Sets the layers &quot;layer&quot;(sp)(sp)blendmode to blend.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerTransparency&quot;layer&quot;, trans)

Sets the layers &quot;layer&quot;  transparency to trans.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerTransparency&quot;layer&quot;, trans)
Sets the layers &quot;layer&quot;(sp)(sp)transparency to trans.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isLayerLocked(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is locked or not, a value of True means
that the layer &quot;layer&quot; is editable, a value of False means that the layer
&quot;layer&quot; is locked.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerLocked(&quot;layer&quot;) -&gt; bool
Returns whether the layer &quot;layer&quot; is locked or not, a value of True means
that the layer &quot;layer&quot; is editable, a value of False means that the layer
&quot;layer&quot; is locked.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isLayerOutlined(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is outlined or not, a value of True means
that the layer &quot;layer&quot; is outlined, a value of False means that the layer
&quot;layer&quot; is normal.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerOutlined(&quot;layer&quot;) -&gt; bool
Returns whether the layer &quot;layer&quot; is outlined or not, a value of True means
that the layer &quot;layer&quot; is outlined, a value of False means that the layer
&quot;layer&quot; is normal.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isLayerFlow(&quot;layer&quot;) -&gt; bool

Returns whether text flows around objects on layer &quot;layer&quot;, a value of True means
that text flows around, a value of False means that the text does not flow around.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerFlow(&quot;layer&quot;) -&gt; bool
Returns whether text flows around objects on layer &quot;layer&quot;, a value of True means
that text flows around, a value of False means that the text does not flow around.
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLayerBlendmode(&quot;layer&quot;) -&gt; int

Returns the &quot;layer&quot; layer blendmode,

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>getLayerBlendmode(&quot;layer&quot;) -&gt; int
Returns the &quot;layer&quot; layer blendmode,
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getLayerTransparency(&quot;layer&quot;) -&gt; float

Returns the &quot;layer&quot; layer transparency,

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>getLayerTransparency(&quot;layer&quot;) -&gt; float
Returns the &quot;layer&quot; layer transparency,
May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>textFlowMode(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional int &quot;state&quot; (0 &lt;= state &lt;= 3).
Setting &quot;state&quot; to 0 will disable text flow.
Setting &quot;state&quot; to 1 will make text flow around object frame.
Setting &quot;state&quot; to 2 will make text flow around bounding box.
Setting &quot;state&quot; to 3 will make text flow around contour line.
If &quot;state&quot; is not passed, text flow is toggled.
</source>
        <translation>textFlowMode(&quot;name&quot; [, state])
Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional int &quot;state&quot; (0 &lt;= state &lt;= 3).
Setting &quot;state&quot; to 0 will disable text flow.
Setting &quot;state&quot; to 1 will make text flow around object frame.
Setting &quot;state&quot; to 2 will make text flow around bounding box.
Setting &quot;state&quot; to 3 will make text flow around contour line.
If &quot;state&quot; is not passed, text flow is toggled.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>duplicateObject([&quot;name&quot;]) -&gt; string

creates a Duplicate of the selected Object (or Selection Group).
</source>
        <translation>duplicateObject([&quot;name&quot;]) -&gt; string
creates a Duplicate of the selected Object (or Selection Group).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setFillTransparency(transparency, [&quot;name&quot;])

Sets the fill transparency of the object &quot;name&quot; to transparency
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillTransparency(transparency, [&quot;name&quot;])
Sets the fill transparency of the object &quot;name&quot; to transparency
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setFillBlendmode(blendmode, [&quot;name&quot;])

Sets the fill blendmode of the object &quot;name&quot; to blendmode
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillBlendmode(blendmode, [&quot;name&quot;])
Sets the fill blendmode of the object &quot;name&quot; to blendmode
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineTransparency(transparency, [&quot;name&quot;])

Sets the line transparency of the object &quot;name&quot; to transparency
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setLineTransparency(transparency, [&quot;name&quot;])

Sets the line transparency of the object &quot;name&quot; to transparency
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLineBlendmode(blendmode, [&quot;name&quot;])

Sets the line blendmode of the object &quot;name&quot; to blendmode
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setLineBlendmode(blendmode, [&quot;name&quot;])
Sets the line blendmode of the object &quot;name&quot; to blendmode
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool
Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPageType() -&gt; integer

Returns the type of the Page, 0 means left Page, 1 is a middle Page and 2 is a right Page
</source>
        <translation>getPageType() -&gt; integer

Returns the type of the Page, 0 means left Page, 1 is a middle Page and 2 is a right Page</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getTextLines([&quot;name&quot;]) -&gt; integer

Returns the number of lines of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getTextLines([&quot;name&quot;]) -&gt; integer

Returns the number of lines of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the
printable set to false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the
printable set to false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting text at position -1 appends it to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting text at position -1 appends it to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.</translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Contributions from:</source>
        <translation>Beiträge von:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;About</source>
        <translation>Ü&amp;ber</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A&amp;uthors</source>
        <translation>A&amp;utoren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Translations</source>
        <translation>Über&amp;setzungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Online</source>
        <translation>&amp;Online</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Development Team:</source>
        <translation>Entwicklerteam:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Official Documentation:</source>
        <translation>Offizielle Dokumentation:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Other Documentation:</source>
        <translation>Andere Dokumentationen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Homepage</source>
        <translation>Homepage</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Online Reference</source>
        <translation>Onlinereferenz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bugs and Feature Requests</source>
        <translation>Fehler und Featurewünsche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mailing List</source>
        <translation>Mailingliste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Official Translations and Translators:</source>
        <translation>Offizielle Übersetzungen und Übersetzer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Previous Translation Contributors:</source>
        <translation>Ehemalige Übersetzer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>About Scribus %1</source>
        <translation>Über Scribus %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 %2 %3</source>
        <translation>%1 %2 %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%3-%2-%1 %4 %5</source>
        <translation>%3-%2-%1 %4 %5</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Using Ghostscript version %1</source>
        <translation>Ghostscript-Version: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Ghostscript version available</source>
        <translation>Ghostscript ist nicht vorhanden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</source>
        <translation>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Build ID:</source>
        <translation>Build ID:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation>Mac OS&amp;#174; X Aqua-Portierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Windows&amp;#174; Port:</source>
        <translation>Windows&amp;#174;-Portierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tango Project Icons:</source>
        <translation>Icons aus dem Tango-Projekt:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Updates</source>
        <translation>&amp;Updates</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for &amp;Updates</source>
        <translation>Auf Updates über&amp;prüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected. The Windows version does not use fontconfig or CUPS libraries.</source>
        <translation>Diese Leiste zeigt die Version, das Build-Datum und die kompilierte Unterstützung für Programmbibliotheken. C-C-T-F bedeutet im einzelnen: 
C= littleCMS C=CUPS, T=TIFF-Unterstützung, F=Fontconfig-Unterstützung. Der zusätzliche Buchstabe am Ende bezeichnet den Renderer, nämlich entweder C (Cairo) oder A (libart). Wird eine der Bibliotheken nicht unterstützt, steht statt dessen ein *. Hier wird auch die von Scribus gefundene Ghostscript-Version angezeigt. Die Windows-Version benutz weder fontconfig noch CUPS.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for updates to Scribus. No data from your machine will be transferred off it.</source>
        <translation>Auf Updates für Scribus überprüfen. Es werden keine Daten von Ihrem Computer übertragen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
        <translation>OS/2&amp;#174;/eComStation&amp;#8482;-Portierung:</translation>
    </message>
</context>
<context>
    <name>AboutPlugins</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Filename:</source>
        <translation>Dateiname:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Version:</source>
        <translation>Version:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enabled:</source>
        <translation>Aktiviert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Release Date:</source>
        <translation>Datum der Veröffentlichung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Description:</source>
        <translation>Beschreibung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Author(s):</source>
        <translation>Autor(en):</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copyright:</source>
        <translation>Urheberrecht:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>License:</source>
        <translation>Lizenz:</translation>
    </message>
</context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus: About Plug-ins</source>
        <translation>Scribus: Über die Plug-Ins</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Open...</source>
        <translation>Ö&amp;ffnen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save &amp;As...</source>
        <translation>Speichern &amp;unter...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Re&amp;vert to Saved</source>
        <translation>Neu la&amp;den</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Collect for O&amp;utput...</source>
        <translation>Für Aus&amp;gabe sammeln...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Get Text...</source>
        <translation>Text laden...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Append &amp;Text...</source>
        <translation>&amp;Text anfügen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Get Image...</source>
        <translation>Bild laden...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save &amp;Text...</source>
        <translation>&amp;Text speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as P&amp;DF...</source>
        <translation>Als &amp;PDF speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document &amp;Setup...</source>
        <translation>Dokument &amp;einrichten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Print...</source>
        <translation>&amp;Drucken...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Quit</source>
        <translation>&amp;Beenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo</source>
        <translation>&amp;Rückgängig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Item Action Mode</source>
        <translation>&amp;Objektbezogener Modus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cu&amp;t</source>
        <translation>&amp;Ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paste</source>
        <translation>Einf&amp;ügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select &amp;All</source>
        <translation>Alles aus&amp;wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Deselect All</source>
        <translation>Alles auswählen &amp;rückgängig machen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Suchen und Ersetzen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Image...</source>
        <translation>Bild bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;olors...</source>
        <translation>&amp;Farben...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paragraph Styles...</source>
        <translation>&amp;Absatzstile...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Line Styles...</source>
        <translation>&amp;Linienstile...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Master Pages...</source>
        <translation>&amp;Musterseiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>P&amp;references...</source>
        <translation>Allgemeine &amp;Einstellungen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 pt</source>
        <translation>%1 pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Other...</source>
        <translation>&amp;Andere...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Left</source>
        <translation>&amp;Links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Center</source>
        <translation>&amp;Zentriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Right</source>
        <translation>&amp;Rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Block</source>
        <translation>&amp;Blocksatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Forced</source>
        <translation>&amp;Erzwungener Blocksatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;%1 %</source>
        <translation>&amp;%1 %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Normal</source>
        <translation>&amp;Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Underline</source>
        <translation>&amp;Unterstrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underline &amp;Words</source>
        <translation>Wörter unterst&amp;richen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Strike Through</source>
        <translation>&amp;Durchgestrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;All Caps</source>
        <translation>&amp;Grossbuchstaben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Small &amp;Caps</source>
        <translation>&amp;Kapitälchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Su&amp;perscript</source>
        <translation>&amp;Hochgestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Su&amp;bscript</source>
        <translation>&amp;Tiefgestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;hadow</source>
        <translation>&amp;Schatten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Image Effects</source>
        <translation>&amp;Bildeffekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabulatoren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;uplicate</source>
        <translation>&amp;Duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Multiple Duplicate</source>
        <translation>&amp;Mehrfach duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Group</source>
        <translation>&amp;Gruppieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Ungroup</source>
        <translation>Gruppe auf&amp;lösen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is &amp;Locked</source>
        <translation>Ge&amp;sperrt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Si&amp;ze is Locked</source>
        <translation>Grössen&amp;änderung gesperrt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lower to &amp;Bottom</source>
        <translation>In den &amp;Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Raise to &amp;Top</source>
        <translation>In den &amp;Vordergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Lower</source>
        <translation>Weiter nach hin&amp;ten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Raise</source>
        <translation>Weiter nach vor&amp;n</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to S&amp;crapbook</source>
        <translation>In &amp;Bibliothek speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Attributes...</source>
        <translation>&amp;Attribute...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>I&amp;mage Visible</source>
        <translation>Bild an&amp;zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Update Image</source>
        <translation>Bild &amp;aktualisieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Adjust Frame to Image</source>
        <translation>Rahmen an Bild anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Extended Image Properties</source>
        <translation>Erweiterte Bildeigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Low Resolution</source>
        <translation>&amp;Niedrige Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Normal Resolution</source>
        <translation>Nor&amp;male Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Full Resolution</source>
        <translation>&amp;Hohe Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is PDF &amp;Bookmark</source>
        <translation>Als PDF-&amp;Lesezeichen verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is PDF A&amp;nnotation</source>
        <translation>Als PDF-&amp;Anmerkung verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Annotation P&amp;roperties</source>
        <translation>Eigenschaften der An&amp;merkung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Field P&amp;roperties</source>
        <translation>&amp;Eigenschaften des Feldes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Form bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Attach Text to Path</source>
        <translation>Text an Pfad aus&amp;richten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Detach Text from Path</source>
        <translation>Text von Pfad l&amp;ösen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Combine Polygons</source>
        <translation>Polygone &amp;kombinieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Split &amp;Polygons</source>
        <translation>Polygone &amp;teilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bezier Curve</source>
        <translation>Bézier&amp;kurve</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Image Frame</source>
        <translation>&amp;Bildrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Polygon</source>
        <translation>&amp;Polygon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Text Frame</source>
        <translation>&amp;Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Glyph...</source>
        <translation>&amp;Zeichen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample Text</source>
        <translation>Beispieltext</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Insert...</source>
        <translation>Ein&amp;fügen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Im&amp;port...</source>
        <translation>&amp;Importieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete...</source>
        <translation>&amp;Löschen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy...</source>
        <translation>&amp;Kopieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Move...</source>
        <translation>Ver&amp;schieben...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Apply Master Page...</source>
        <translation>Musterseite an&amp;wenden...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Manage &amp;Guides...</source>
        <translation>&amp;Hilfslinien bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;50%</source>
        <translation>&amp;50%</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;75%</source>
        <translation>&amp;75%</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;100%</source>
        <translation>&amp;100%</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;200%</source>
        <translation>&amp;200%</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Thumbnails</source>
        <translation>&amp;Vorschaubilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Margins</source>
        <translation>S&amp;atzspiegel anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Frames</source>
        <translation>Ra&amp;hmen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Images</source>
        <translation>&amp;Bilder anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Grid</source>
        <translation>Ra&amp;ster anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show G&amp;uides</source>
        <translation>&amp;Hilfslinien anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Baseline Grid</source>
        <translation>&amp;Grundlinienraster anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Text Chain</source>
        <translation>Ver&amp;kettete Textrahmen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Control Characters</source>
        <translation>Kontrollzeichen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sn&amp;ap to Grid</source>
        <translation>Am &amp;Raster ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sna&amp;p to Guides</source>
        <translation>An &amp;Hilfslinien ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Properties</source>
        <translation>&amp;Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Scrapbook</source>
        <translation>Biblio&amp;thek</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Layers</source>
        <translation>E&amp;benen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Measurements</source>
        <translation>&amp;Abstandsmesser</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Action &amp;History</source>
        <translation>Aktions&amp;verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preflight &amp;Verifier</source>
        <translation>&amp;Druckvorstufenüberprüfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Align and Distribute</source>
        <translation>&amp;Ausrichten und Verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Tools</source>
        <translation>&amp;Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>P&amp;DF Tools</source>
        <translation>&amp;PDF-Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select Item</source>
        <translation>Eintrag auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>T&amp;able</source>
        <translation>Ta&amp;belle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shape</source>
        <translation>&amp;Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Line</source>
        <translation>&amp;Linie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Freehand Line</source>
        <translation>Frei&amp;handlinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotate Item</source>
        <translation>Objekt drehen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Zoom in or out</source>
        <translation>Vergrössern oder verkleinern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Zoom in</source>
        <translation>Vergrössern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Zoom out</source>
        <translation>Verkleinern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Contents of Frame</source>
        <translation>Rahmeninhalt bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Text...</source>
        <translation>Text bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Link Text Frames</source>
        <translation>Textrahmen verketten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unlink Text Frames</source>
        <translation>Verkettete Textrahmen trennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Eye Dropper</source>
        <translation>Farb&amp;wähler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy Item Properties</source>
        <translation>Eigenschaften übertragen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit the text with the Story Editor</source>
        <translation>Text im Story Editor bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Text Frame</source>
        <translation>Textrahmen einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Image Frame</source>
        <translation>Bildrahmen einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Table</source>
        <translation>Tabelle einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Shape</source>
        <translation>Form einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Polygon</source>
        <translation>Polygon einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Line</source>
        <translation>Linie einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Bezier Curve</source>
        <translation>Bézierkurve einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Freehand Line</source>
        <translation>Freihandlinie einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Manage Pictures</source>
        <translation>Bilder &amp;verwalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Hyphenate Text</source>
        <translation>Silben&amp;trennung anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Generate Table Of Contents</source>
        <translation>&amp;Inhaltsverzeichnis erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;About Scribus</source>
        <translation>&amp;Über Scribus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>About &amp;Qt</source>
        <translation>Über &amp;Qt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Toolti&amp;ps</source>
        <translation>Tool&amp;tips</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus &amp;Manual...</source>
        <translation>&amp;Handbuch für Scribus...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Smart &amp;Hyphen</source>
        <translation>Bedingtes &amp;Trennzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Non Breaking Dash</source>
        <translation>Geschützter Bindestrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Non Breaking &amp;Space</source>
        <translation>Geschütztes &amp;Leerzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page &amp;Number</source>
        <translation>Seiten&amp;zahl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Line</source>
        <translation>Zeilenumbruch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Frame Break</source>
        <translation>Rahmenumbruch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Column Break</source>
        <translation>Spaltenumbruch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copyright</source>
        <translation>Copyright</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Registered Trademark</source>
        <translation>Registriertes Warenzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Trademark</source>
        <translation>Warenzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bullet</source>
        <translation>Aufzählung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Em Dash</source>
        <translation>Geviertstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>En Dash</source>
        <translation>Halbgeviertstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Figure Dash</source>
        <translation>Zahlenstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quotation Dash</source>
        <translation>Zitatstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apostrophe</source>
        <translation>Apostroph</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Straight Double</source>
        <translation>Zollzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Left</source>
        <translation>Einfaches Anführungszeichen rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Right</source>
        <translation>Einfaches Anführungszeichen rechts (Englisch)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Left</source>
        <translation>Doppeltes Anführungszeichen rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Right</source>
        <translation>Doppeltes Anführungszeichen rechts (Englisch)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Reversed</source>
        <translation>Anführungszeichen links (Englisch) gespiegelt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Reversed</source>
        <translation>Doppeltes Anführungszeichen links (Englisch) gespiegelt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Left Guillemet</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Right Guillemet</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Left Guillemet</source>
        <translation>&lt;&lt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Right Guillemet</source>
        <translation>&gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Low Single Comma</source>
        <translation>Einfaches Anführungszeichen links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Low Double Comma</source>
        <translation>Doppeltes Anführungszeichen links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CJK Single Left</source>
        <translation>Einfaches Anführungszeichen links (CJK)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CJK Single Right</source>
        <translation>Einfaches Anführungszeichen rechts (CJK)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CJK Double Left</source>
        <translation>Doppeltes Anführungszeichen links (CJK)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CJK Double Right</source>
        <translation>Doppeltes Anführungszeichen rechts (CJK)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Toggle Palettes</source>
        <translation>Paletten ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Toggle Guides</source>
        <translation>Hilfslinien ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Arrange Pages</source>
        <translation>&amp;Seiten anordnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dehyphenate Text</source>
        <translation>Silbentrennung rückgängig machen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Manage Page Properties...</source>
        <translation>Eigenschaften der Seite bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rulers relative to Page</source>
        <translation>Lineal relativ zur Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Previe&amp;w</source>
        <translation>D&amp;ruckvorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;JavaScripts...</source>
        <translation>&amp;JavaScripts...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert to Master Page...</source>
        <translation>In Musterseite umwandeln...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cascade</source>
        <translation>&amp;Hintereinander</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Tile</source>
        <translation>&amp;Nebeneinander</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;About Plug-ins</source>
        <translation>&amp;Über Plug-Ins</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>More Info...</source>
        <translation>Erweitert...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Printing Enabled</source>
        <translation>&amp;Drucken aktiviert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Flip Horizontally</source>
        <translation>Horizontal &amp;spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Flip Vertically</source>
        <translation>Vertikal &amp;spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Rulers</source>
        <translation>Lineale anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation>D&amp;okumentstruktur</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Solidus</source>
        <translation>Schrägstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Middle Dot</source>
        <translation>Mittepunkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>En Space</source>
        <translation>En-Abstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Em Space</source>
        <translation>Em-Abstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Thin Space</source>
        <translation>Sehr enge Grundschriftweite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Thick Space</source>
        <translation>Weite Grundschriftweite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mid Space</source>
        <translation>Weite Grundschriftweite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hair Space</source>
        <translation>Extrem enge Grundschriftweite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Smart Hyphen</source>
        <translation>Bedingten Trennstrich einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Non Breaking Dash</source>
        <translation>Geschützten Bindestrich einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Non Breaking Space</source>
        <translation>Geschütztes Leerzeichen einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Page Number</source>
        <translation>Seitenzahl einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>ff</source>
        <translation>ff</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>fi</source>
        <translation>fi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>fl</source>
        <translation>fl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>ffi</source>
        <translation>ffi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>ffl</source>
        <translation>ffl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>ft</source>
        <translation>ft</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>st</source>
        <translation>st</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;tyles...</source>
        <translation>&amp;Stile...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paste (&amp;Absolute)</source>
        <translation>Einfügen (&amp;Absolut)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation>Um&amp;randung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation>&amp;Umriss</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert PDF Push Button</source>
        <translation>PDF-Schaltfläche einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert PDF Text Field</source>
        <translation>PDF Textfeld einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert PDF Check Box</source>
        <translation>PDF Checkbox einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert PDF Combo Box</source>
        <translation>PDF Combobox einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert PDF List Box</source>
        <translation>PDF Listbox einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Text Annotation</source>
        <translation>Anmerkung einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Link Annotation</source>
        <translation>Link einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as &amp;EPS...</source>
        <translation>Als &amp;EPS speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Text Frame Columns</source>
        <translation>Spaltenmarkierungen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Frame...</source>
        <translation>&amp;Rahmen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview Mode</source>
        <translation>Vorschaumodus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Layer Indicators</source>
        <translation>Ebenenmarkierungen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Patterns...</source>
        <translation>Füllmuster...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to Patterns</source>
        <translation>Zu Füllmustern hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Fit to Height</source>
        <translation>&amp;Seitenhöhe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fit to Width</source>
        <translation>Seitenbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Bleeds</source>
        <translation>Anschnitt anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Zero Width Space</source>
        <translation>&amp;Null-Leerzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Zero Width NB Space</source>
        <translation>Geschütztes Null-Leerzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sticky Tools</source>
        <translation>Werkzeugmodus</translation>
    </message>
</context>
<context>
    <name>AlignDistributeBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Align and Distribute</source>
        <translation>Ausrichten und verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align</source>
        <translation>Ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Selected Guide:</source>
        <translation>&amp;Ausgewählte Hilfslinie:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Relative To:</source>
        <translation>&amp;Relativ zu:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute</source>
        <translation>Verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Distance:</source>
        <translation>Ab&amp;stand:</translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Align and Distribute</source>
        <translation>Ausrichten und verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align</source>
        <translation>Ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Relative to:</source>
        <translation>&amp;Relativ zu:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>First Selected</source>
        <translation>Zuerst markiertes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Last Selected</source>
        <translation>Zuletzt markiertes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page</source>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Margins</source>
        <translation>Ränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Guide</source>
        <translation>Hilfslinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selection</source>
        <translation>Markierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align bottoms</source>
        <translation>Untere Seiten ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align right sides</source>
        <translation>Rechte Seiten ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Center on vertical axis</source>
        <translation>Auf vertikaler Achse zentrieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align left sides</source>
        <translation>Linke Seiten ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Center on horizontal axis</source>
        <translation>Auf horizontaler Achse zentrieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align tops</source>
        <translation>Obere Seiten ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Selected Guide:</source>
        <translation>&amp;Ausgewählte Hilfslinie:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute</source>
        <translation>Verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute right sides equidistantly</source>
        <translation>Rechte Seiten gleichmässig verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute bottoms equidistantly</source>
        <translation>Unterseiten gleichmässig verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute centers equidistantly horizontally</source>
        <translation>Objektmitten gleichmässig horizontal verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute left sides equidistantly</source>
        <translation>Linke Seiten gleichmässig verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute centers equidistantly vertically</source>
        <translation>Objektmitten gleichmässig vertikal verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute tops equidistantly</source>
        <translation>Oberseiten gleichmässig verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Distance:</source>
        <translation>Ab&amp;stand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distribute the items with the distance specified</source>
        <translation>Verteilung der Objekte wie angegeben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None Selected</source>
        <translation>Nichts ausgewählt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y: %1%2</source>
        <translation>Y: %1 %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X: %1%2</source>
        <translation>X: %1 %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align right sides of items to left side of anchor</source>
        <translation>Rechte Seiten von Objekten an der linken Seite des gewählten Ankers ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align left sides of items to right side of anchor</source>
        <translation>Linke Seiten von Objekten an der rechten Seite des gewählten Ankers ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align tops of items to bottom of anchor</source>
        <translation>Unterseite von Objekten an der Oberseite des gewählten Ankers ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align bottoms of items to top of anchor</source>
        <translation>Unterseite von Objekten an der Oberseite des gewählten Ankers ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make horizontal gaps between items equal</source>
        <translation>Gleicher horizontaler Abstand zwischen Objekten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make horizontal gaps between items equal to the value specified</source>
        <translation>Horizontaler Abstand zwischen Objekten wie angegeben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make vertical gaps between items equal</source>
        <translation>Gleicher vertikaler Abstand zwischen Objekten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make vertical gaps between items equal to the value specified</source>
        <translation>Vertikaler Abstand zwischen Objekten wie angegeben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make horizontal gaps between items and sides of page equal</source>
        <translation>Gleiche horizontale Abstände zwischen Objekten und Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make vertical gaps between items and the top and bottom of page equal</source>
        <translation>Gleiche vertikale Abstände zwischen Objekten und Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make horizontal gaps between items and sides of page margins equal</source>
        <translation>Gleiche horizontale Abstände zwischen Objekten und Satzspiegel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make vertical gaps between items and the top and bottom of page margins equal</source>
        <translation>Gleiche vertikale Abstände zwischen Objekten und Satzspiegel</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Align Text Left</source>
        <translation>Linksbündig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align Text Right</source>
        <translation>Rechtsbündig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align Text Center</source>
        <translation>Zentriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align Text Justified</source>
        <translation>Blocksatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align Text Forced Justified</source>
        <translation>Erzwungener Blocksatz</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Field Properties</source>
        <translation>Feldeigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Border</source>
        <translation>Rand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color:</source>
        <translation>Farbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width:</source>
        <translation>Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Thin</source>
        <translation>Schmal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Wide</source>
        <translation>Breit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style:</source>
        <translation>Stil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Solid</source>
        <translation>Durchgehend</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dashed</source>
        <translation>Gestrichelt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underline</source>
        <translation>Unterstrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Beveled</source>
        <translation>Hervorgehoben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inset</source>
        <translation>Vertieft</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Other</source>
        <translation>Andere</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Read Only</source>
        <translation>Nur lesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Required</source>
        <translation>Erforderlich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Visibility:</source>
        <translation>Darstellung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Visible</source>
        <translation>Sichtbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hidden</source>
        <translation>Versteckt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Print</source>
        <translation>Nicht drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No View</source>
        <translation>Nicht sichtbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Appearance</source>
        <translation>Aussehen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text for Button Down</source>
        <translation>Text für Button Down</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text for Roll Over</source>
        <translation>Text für Roll Over</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Icons</source>
        <translation>Icons</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Icons</source>
        <translation>Icons benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pressed</source>
        <translation>Gedrückt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Roll Over</source>
        <translation>Roll Over</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Icon Placement...</source>
        <translation>Anordnung...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Highlight</source>
        <translation>Hervorhebung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Invert</source>
        <translation>Invertieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outlined</source>
        <translation>Umrandung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Push</source>
        <translation>Gedrückt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Multi-Line</source>
        <translation>Mehrzeilig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Password</source>
        <translation>Passwort</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Limit of</source>
        <translation>Maximum von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Characters</source>
        <translation>Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do Not Scroll</source>
        <translation>Nicht scrollen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do Not Spell Check</source>
        <translation>Nicht in Rechtschreibprüfung einbeziehen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check Style:</source>
        <translation>Art des Häkchens:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default is Checked</source>
        <translation>Standardeinstellung ist markiert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Editable</source>
        <translation>Änderbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Event:</source>
        <translation>Ereignis:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Script:</source>
        <translation>Script:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit...</source>
        <translation>Bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Submit to URL:</source>
        <translation>Sende an URL:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Submit Data as HTML</source>
        <translation>Sende Daten als HTML</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import Data from:</source>
        <translation>Importiere Daten von:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Destination</source>
        <translation>Ziel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To File:</source>
        <translation>In Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change...</source>
        <translation>Ändern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page:</source>
        <translation>Seite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X-Pos:</source>
        <translation>X-Pos:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y-Pos:</source>
        <translation>Y-Pos:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Action</source>
        <translation>Aktion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Field is formatted as:</source>
        <translation>Feld ist formatiert als:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number Format</source>
        <translation>Zahlenformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Decimals:</source>
        <translation>Dezimalstellen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Currency Symbol</source>
        <translation>Währungssymbol benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Prepend Currency Symbol</source>
        <translation>Währungssymbol voranstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Formatting</source>
        <translation>Formatierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Percent Format</source>
        <translation>Prozentformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Date Format</source>
        <translation>Datumsformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Time Format</source>
        <translation>Zeitformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom Scripts</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Format:</source>
        <translation>Format:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keystroke:</source>
        <translation>Tastendruck:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value is not validated</source>
        <translation>Wert wird nicht überprüft</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value must be greater than or equal to:</source>
        <translation>Wert muss grösser oder gleich sein als:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>and less or equal to:</source>
        <translation>und kleiner oder gleich als:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom validate script:</source>
        <translation>Eigenes Überprüfungsscript:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Validate</source>
        <translation>Überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value is not calculated</source>
        <translation>Wert wird nicht berechnet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value is the</source>
        <translation>Wert ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>sum</source>
        <translation>die Summe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>product</source>
        <translation>das Produkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>average</source>
        <translation>der Durchschnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>minimum</source>
        <translation>das Minimum</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>maximum</source>
        <translation>das Maximum</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>of the following fields:</source>
        <translation>der folgenden Felder:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pick...</source>
        <translation>Auswählen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom calculation script:</source>
        <translation>Eigenes Berechnungsscript:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Calculate</source>
        <translation>Berechnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enter a comma separated list of fields here</source>
        <translation>Hier eine kommaseparierte Liste der Felder eintragen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>Sie benötigen mindestens das Icon für Normal um Icons zu benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Example:</source>
        <translation>Beispiel:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selection Change</source>
        <translation>Auswahl geändert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Button</source>
        <translation>Schaltfläche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Field</source>
        <translation>Textfeld</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check Box</source>
        <translation>Kontrollkästchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Combo Box</source>
        <translation>Kombinationsfeld</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>List Box</source>
        <translation>Listenfeld</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check</source>
        <translation>Haken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cross</source>
        <translation>Kreuz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Diamond</source>
        <translation>Raute</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Circle</source>
        <translation>Kreis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Star</source>
        <translation>Stern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Square</source>
        <translation>Quadrat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Go To</source>
        <translation>Gehe zu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Submit Form</source>
        <translation>Formular senden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset Form</source>
        <translation>Formular zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import Data</source>
        <translation>Daten importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mouse Up</source>
        <translation>Maustaste loslassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mouse Down</source>
        <translation>Maustaste drücken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mouse Enter</source>
        <translation>Mauszeiger berührt Feld</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mouse Exit</source>
        <translation>Mauszeiger verlässt Feld</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>On Focus</source>
        <translation>Feld hat Fokus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>On Blur</source>
        <translation>Feld verliert Fokus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plain</source>
        <translation>Nichts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number</source>
        <translation>Zahl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Percentage</source>
        <translation>Prozent</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Time</source>
        <translation>Zeit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font for use with PDF 1.3:</source>
        <translation>Schrift für PDF 1.3:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Wird von PDF 1.3 ignoriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-Dateien (*.pdf);;Alle Dateien (*.*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>JavaScript</source>
        <translation>JavaScript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>highlight</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>action</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tooltip:</source>
        <translation>Tooltip:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do Not Export Value</source>
        <translation>Wert nicht exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)</source>
        <translation>Bilder (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;Alle Dateien (*)</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Annotation Properties</source>
        <translation>Eigenschaften der Anmerkung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Link</source>
        <translation>Verknüpfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>External Link</source>
        <translation>Externe Verknüpfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>External Web-Link</source>
        <translation>Externe Webverknüpfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Destination</source>
        <translation>Ziel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>PDF-Dateien (*.pdf);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Type:</source>
        <translation>&amp;Typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;hange...</source>
        <translation>Ä&amp;ndern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Page:</source>
        <translation>&amp;Seite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;X-Pos</source>
        <translation>&amp;X-Position</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Position:</translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply Master Page</source>
        <translation>Musterseite anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Master Page:</source>
        <translation>&amp;Musterseite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply To</source>
        <translation>Anwenden auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Current &amp;page</source>
        <translation>Aktuelle &amp;Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Even pages</source>
        <translation>&amp;Gerade Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+E</source>
        <translation>Alt+E</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>O&amp;dd pages</source>
        <translation>&amp;Ungerade Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;All pages</source>
        <translation>Alle &amp;Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Within range</source>
        <translation>&amp;Bereich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+W</source>
        <translation>Alt+W</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>to</source>
        <translation>bis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation>Musterseite auf gerade, ungerade oder alle Seiten im definierten Bereich anwenden</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <translation>Nichts</translation>
    </message>
</context>
<context>
    <name>Barcode</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Barcode Generator...</source>
        <translation>&amp;Strichcodegenerator...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus frontend for Pure Postscript Barcode Writer</source>
        <translation>Scribus-Dialog für den Pure Postscript Barcode Writer</translation>
    </message>
</context>
<context>
    <name>BarcodeGenerator</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Error opening file: %1</source>
        <translation>Fehler beim Öffnen der Datei: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>12 or 13 digits</source>
        <translation>12 oder 13 Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>8 digits</source>
        <translation>8 Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>11 or 12 digits</source>
        <translation>11 oder 12 Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>7 or 8 digits</source>
        <translation>7 oder 8 Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>5 digits</source>
        <translation>5 Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>2 digits</source>
        <translation>2 Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
        <translation>Kombination aus Buchstaben, ZIffern und den Symbolen -.*$/+%.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of digits</source>
        <translation>Kombinationen aus Ziffern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of digits and capital letters</source>
        <translation>Kombinationen aus Ziffern und Grossbuchstaben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of hexadecimal characters</source>
        <translation>Kombinationen aus Hexadezimalzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Barcode incomplete</source>
        <translation>Strichcode ist unvollständig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
        <translation>Kombination aus ASCII-Zeichen und Sonderzeichen, beginnend mit dem passenden Startzeichen für den Zeichensatz. Bei USS/EAN-128 muss am Anfang ein FNC1-Symbol direkt nach dem Startzeichen stehen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
        <translation>Kombination aus Ziffern und den Symbolem -$:/.+ABCD.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation>Kombination aus Ziffern. Ein ITF-14-Code besteht aus 14 Zeichen und besitzt keine Prüfnummer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>12 or 13 digits with dashes. The legacy ISBN-10 format accepts 9 or 10 digits with dashes, but this standard was depreciated for public use after 1st January 2007. (Note: To convert an old ISBN-10 to a new ISBN-13, prefix 978- to the first 9 digits, e.g. 1-56592-479-7 -&gt; 978-1-56592-479. The final check-digit will be calculated automatically.)</source>
        <translation>12 oder 13 Ziffern mit Strichen. Das alte ISBN-10-Format erlaubt 9 oder 10 Ziffern mit Strichen, aber dieser Standard wurde zum 1. Januar 2007 für ungültig erklärt.
(Um einen alten ISBN-10-Code in den neuen ISBN-13-Code umzuwandeln, setzen Sie die Ziffern 978 voran, z. B. 1-56592-479-7 -&gt; 978-1-56592-479. Die Prüfnummer wird automatisch berechnet.)</translation>
    </message>
</context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Barcode Creator</source>
        <translation>Strichcodegenerator</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Barcode</source>
        <translation>Strichcode</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Type:</source>
        <translation>&amp;Typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select one of the available barcode type here</source>
        <translation>Wählen Sie bitte einen der verfügbaren Typen aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The numeric representation of the code itself. See the help message below</source>
        <translation>Die Zahlen, die in dem Strichcode vorkommen. Siehe die Hilfe unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset the barcode samples</source>
        <translation>Einstellungen zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Include text in barcode</source>
        <translation>&amp;Text in Strichcode einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+I</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>If checked, there will be numbers in the barcode too</source>
        <translation>Zahlen im Strichcode darstellen, wenn aktiviert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Guard whitespace</source>
        <translation>&amp;Sicherheitsleerzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+G</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Draw arrows to be sure of space next the code</source>
        <translation>Pfeile als Sicherheitsabstand um den Strichcode zeichnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colors</source>
        <translation>Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Background</source>
        <translation>&amp;Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+B</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Background color - under the code lines</source>
        <translation>Farbe hinter dem Strichcode</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Lines</source>
        <translation>&amp;Linien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of the lines in barcode</source>
        <translation>Farbe der Strichcodelinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Text</source>
        <translation>&amp;Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of the text and numbers</source>
        <translation>Farbe des Textes und der Zahlen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hints and help is shown here</source>
        <translation>Hier sehen Sie Tips und Tricks</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview of the result. 72dpi sample.</source>
        <translation>Vorschau des Ergebnisses in 72dpi.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Co&amp;de:</source>
        <translation>&amp;Code:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>I&amp;nclude checksum</source>
        <translation>Prüfsumme &amp;integrieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+N</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Generate and include a checksum in barcode</source>
        <translation>Prüfsumme erzeugen und mit in den Strichcode einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Incl&amp;ude checksum digit</source>
        <translation>Prüfsummen&amp;zeichen integrieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+U</source>
        <translation>Alt+Z</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Include the checksum digit in the barcode text</source>
        <translation>Prüfsummenziffer in den Barcode integrieren</translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scrapbook</source>
        <translation>Bibliothek</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object</source>
        <translation>Objekt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Entry</source>
        <translation>Neuer Eintrag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rename</source>
        <translation>Umbenennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation>Die Bezeichnung &quot;%1&quot; ist nicht eindeutig.
Bitte wählen Sie eine andere.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Scrapbook Directory</source>
        <translation>Wählen Sie ein Verzeichnis für die Bibliothek</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Directory</source>
        <translation>Wählen Sie ein Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scrapbook (*.scs)</source>
        <translation>Bibliothek (*.scs)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a scrapbook file to import</source>
        <translation>Wählen Sie eine Bibliothek aus, die Sie importieren möchten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create a new scrapbook page</source>
        <translation>Neue Seite in der Bibliothek erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load an existing scrapbook</source>
        <translation>Vorhandene Bibliothek laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save the selected scrapbook</source>
        <translation>Markierte Bibliothek speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import an scrapbook file from Scribus &lt;=1.3.2</source>
        <translation>Bibliothek aus Scribus &lt;=1.3.2 importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close the selected scrapbook</source>
        <translation>Markierte Bibliothek schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy To:</source>
        <translation>Kopieren nach:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move To:</source>
        <translation>Verschieben nach:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Main</source>
        <translation>Hauptfenster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copied Items</source>
        <translation>Kopierte Objekte</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Bookmarks</source>
        <translation>Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Bookmark</source>
        <translation>Lesezeichen verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Bookmark</source>
        <translation>Lesezeichen einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Bookmarks</source>
        <translation>Lesezeichen</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Icon Placement</source>
        <translation>Anordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Layout:</source>
        <translation>Anordnung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scale:</source>
        <translation>Skaliere:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Always</source>
        <translation>Immer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>When Icon is too small</source>
        <translation>bei zu kleinem Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>When Icon is too big</source>
        <translation>bei zu grossem Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Never</source>
        <translation>Nie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scale How:</source>
        <translation>Skalierungsart:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Proportional</source>
        <translation>Proportional</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Non Proportional</source>
        <translation>Unproportional</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Icon</source>
        <translation>Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset</source>
        <translation>Zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Caption only</source>
        <translation>Nur Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Icon only</source>
        <translation>Nur Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Caption below Icon</source>
        <translation>Text unter dem Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Caption above Icon</source>
        <translation>Text über dem Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Caption right to Icon</source>
        <translation>Text rechts vom Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Caption left to Icon</source>
        <translation>Text links vom Icon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Caption overlays Icon</source>
        <translation>Text überlagert Icon</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <location filename="" line="136643300"/>
        <source>System Profiles</source>
        <translation>Systemprofile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering Intents</source>
        <translation>Render-Prioritäten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Perceptual</source>
        <translation>Wahrnehmung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relative Colorimetric</source>
        <translation>Relativ farbmetrisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation</source>
        <translation>Farbsättigung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Absolute Colorimetric</source>
        <translation>Absolut farbmetrisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Das Farbprofil für Ihren Monitor, das Sie entweder selbst erstellt oder vom 
Hersteller erhalten haben. Dieses Farbprofil sollte die Eigenschaften Ihres 
Monitors berücksichtigen und kein generisches Profil (z. B. sRGB) sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Das Farbprofil für Ihren Drucker, das Sie vom Hersteller erhalten haben. 
Dieses Farbprofil sollte die Eigenschaften Ihres Druckers berücksichtigen 
und kein generisches Profil (z. B. sRGB) sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Tiefenkompensierung ist eine Methode zur Verbesserung des Kontrasts.
Diese Option sollte aktiviert sein, wenn Sie Fotos im Dokument haben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Aktiviert die Druckvorschau unter Verwendung des
gewählten Druckerprofils.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Aktiviert die Gamut-Warnung, d. h. die Anzeige von Farben, welche 
auf Grund der Eigenschaften des gewählten Ausgabegerätes für den 
Druck nicht korrekt wiedergegeben werden können. Bitte beachten Sie, 
dass dies sehr genaue Geräteprofile erfordert.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Activate Color Management</source>
        <translation>Farbmanagement &amp;aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Monitor:</source>
        <translation>Moni&amp;tor:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>P&amp;rinter:</source>
        <translation>&amp;Drucker:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Druckerfarben auf dem Bildschirm &amp;simulieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Farben ausserhalb des Farbbereichs &amp;markieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>&amp;Tiefenkompensierung benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;RGB Pictures:</source>
        <translation>&amp;RGB-Bilder:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;CMYK Pictures:</source>
        <translation>&amp;CMYK-Bilder:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default color profile for imported CMYK images</source>
        <translation>Standard-Farbprofil für importierte CMYK-Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default color profile for imported RGB images</source>
        <translation>Standard-Farbprofil für importierte RGB-Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;RGB Solid Colors:</source>
        <translation>&amp;RGB-Füllfarben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;CMYK Solid Colors:</source>
        <translation>&amp;CMYK-Füllfarben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pictures:</source>
        <translation>Bilder:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sol&amp;id Colors:</source>
        <translation>Füll&amp;farben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert all colors to printer space</source>
        <translation>Alle Farben in den Farbraum des Druckers konvertieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default color profile for solid RGB colors on the page</source>
        <translation>Standardprofil für RGB-Füllfarben im Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default color profile for solid CMYK colors on the page</source>
        <translation>Standardprofil für CMYK-Füllfarben im Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default rendering intent for solid colors. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Standard-Rendering für Füllfarben. Verändern Sie die Einstellung nur, wenn Sie wissen, was Sie tun.
Hier sollte entweder Relativ farbmetrisch oder Wahrnehmung ausgewählt werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default rendering intent for images. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Standard-Rendering für Bilder. Verändern Sie die Einstellung nur, wenn Sie wissen, was Sie tun.
Hier sollte entweder Relativ farbmetrisch oder Wahrnehmung ausgewählt werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Simulate a full color managed environment :
all colors, rgb or cmyk, are converted to printer color space.</source>
        <translation>Komplette Farbmanagement-Umgebung simulieren:
alle Farben (egal ob RGB oder CMYK) werden in den Farbraum des Druckers konvertiert.</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Color</source>
        <translation>Farbe bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Web Safe RGB</source>
        <translation>Webfarben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Old</source>
        <translation>Alt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C:</source>
        <translation>C:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>M:</source>
        <translation>M:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>K:</source>
        <translation>K:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dynamic Color Bars</source>
        <translation>Dynamische Farbregler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Static Color Bars</source>
        <translation>Statische Farbregler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>R:</source>
        <translation>R:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>G:</source>
        <translation>G:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>HSV-Colormap</source>
        <translation>HSV-Farbwähler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color &amp;Model</source>
        <translation>Farb&amp;modell</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is Spot Color</source>
        <translation>Schmuckfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is Registration Color</source>
        <translation>Registrierungsfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation>Sie können keine Farbe mit der Bezeichnung &quot;%1&quot; erstellen.
%1 ist reserviert für Transparenz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation>Diese Option ermöglicht es, die Farbe auf allen Platten zu drucken. Registrierungsfarben werden für Druckermarken wie Schneidemarken oder Passkreuze verwendet. Sie werden üblicherweise nicht im Layout selbst gebraucht.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation>Wenn das Farbmanagement aktiviert ist, zeigt das Warndreieck an, dass die Farbe ausserhalb des Farbraums (Gamut) des gewählten Druckers ist. Das bedeutet, dass die Farbe nicht so wiedergegeben wird, wie am Monitor angezeigt. Weitere Hinweise zu diesem Thema finden Sie in der Online-Hilfe.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The name of the color already exists,
please choose another one.</source>
        <translation>Der Name existiert bereits. Bitte wählen Sie einen anderen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
        <translation>Diese Option macht diese Farbe zu einer Schmuckfarbe, die eine zusätzliche Druckplatte benötigt. Schmuckfarben werden oft verwendet, wenn ein Logo oder eine andere Farbe besonders genau wiedergegeben werden soll oder nicht mit CMYK-Farben wiedergegeben werden kann. Metallic- oder Leuchtfarben sind gute Beispiele für nicht durch C,M,Y, und K wiederzugebende Farben.</translation>
    </message>
</context>
<context>
    <name>CStylePBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent</source>
        <translation>Verknüpft mit</translation>
    </message>
</context>
<context>
    <name>CWDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Merging colors</source>
        <translation>Farben werden zusammengeführt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error: </source>
        <translation>Fehler:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color %1 exists already!</source>
        <translation>Die Farbe %1 ist schon vorhanden!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color %1 appended.</source>
        <translation>Farbe %1 wurde hinzugefügt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Now opening the color manager.</source>
        <translation>Farbendialog wird geöffnet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Merging</source>
        <translation>Farben hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation>Scribus konnte die gewünschte Farbe nicht finden. Sie haben wahrscheinlich Schwarz, Grau oder Weiss ausgewählt.
Es ist nicht möglich, diese Farben zu verarbeiten.</translation>
    </message>
</context>
<context>
    <name>CWDialogBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Wheel</source>
        <translation>Farbkreis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Click the wheel to get the base color. Its color model depends on the chosen tab.</source>
        <translation>Klicken Sie auf das Farbrad, um die Ausgangsfarbe zu erhalten. Das Farbmodell wird vom ausgewählten Reiter bestimmt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C:</source>
        <translation>C:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>M:</source>
        <translation>M:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>K:</source>
        <translation>K:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>RGB:</source>
        <translation>RGB:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>R:</source>
        <translation>R:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>G:</source>
        <translation>G:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CMYK:</source>
        <translation>CMYK:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation>Wählen Sie eine der Methoden zur Erstellung eines Farbschemas aus.
Die Dokumentation enthält hierzu weitere Informationen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Angle:</source>
        <translation>Winkel:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation>Der Unterschied zwischen dem ausgewählten und den gezählten Werten. Weitere Informationen finden Sie in der Hilfe.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview:</source>
        <translation>Vorschau:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vision Defect Type:</source>
        <translation>Art der Sehbehinderung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample color scheme.</source>
        <translation>Vorschau der Farbharmonie.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colors of your chosen color scheme.</source>
        <translation>Die Farben Ihres gewählten Farbschemas.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Merge</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+M</source>
        <translation>Alt+M</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Merge created colors into the document colors</source>
        <translation>Farben zu den Dokumentfarben hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Replace</source>
        <translation>&amp;Ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+R</source>
        <translation>Alt+R</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace created colors in the document colors</source>
        <translation>Vorhandene Dokumentfarben durch die neuen Farben ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Leave colors untouched</source>
        <translation>Farben unverändert lassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation>Hier können Sie die Art der Sehbehinderung auswählen, die Sie simulieren wollen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Scheme Method</source>
        <translation>Farbschema</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>HSV:</source>
        <translation>HSV:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>HSV</source>
        <translation>HSV</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>H:</source>
        <translation>H:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S:</source>
        <translation>S:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>V:</source>
        <translation>V:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Result Colors</source>
        <translation>Ergebnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation>%</translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Font:</source>
        <translation>Schrift:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character Class:</source>
        <translation>Zeichensatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Insert</source>
        <translation>Ein&amp;fügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert the characters at the cursor in the text</source>
        <translation>Zeichen an Cursorposition einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete the current selection(s).</source>
        <translation>Markierung(en) löschen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Full Character Set</source>
        <translation>Kompletter Zeichensatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Basic Latin</source>
        <translation>Basis Latein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Latin-1 Supplement</source>
        <translation>Latein-1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Latin Extended-A</source>
        <translation>Latein erweitert-A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Latin Extended-B</source>
        <translation>Latein erweitert-B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>General Punctuation</source>
        <translation>Allgemeine Interpunktion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Super- and Subscripts</source>
        <translation>Hoch- und Tiefstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Currency Symbols</source>
        <translation>Währungssymbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Letterlike Symbols</source>
        <translation>Buchstabensymbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number Forms</source>
        <translation>Zahlensysmbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arrows</source>
        <translation>Pfeilsymbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mathematical Operators</source>
        <translation>Mathematische Operatoren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Box Drawing</source>
        <translation>Rahmensymbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Block Elements</source>
        <translation>Blocksymbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Geometric Shapes</source>
        <translation>Geometrische Formen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Miscellaneous Symbols</source>
        <translation>Sonstige Symbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dingbats</source>
        <translation>Dingbats</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Small Form Variants</source>
        <translation>Kleine Symbole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ligatures</source>
        <translation>Ligaturen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Specials</source>
        <translation>Spezielle Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Greek</source>
        <translation>Griechisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Greek Extended</source>
        <translation>Griechisch erweitert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cyrillic</source>
        <translation>Kyrillisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cyrillic Supplement</source>
        <translation>Kyrillisch Zusätze</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arabic</source>
        <translation>Arabisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arabic Extended A</source>
        <translation>Arabisch erweitert A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arabic Extended B</source>
        <translation>Arabisch erweitert B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hebrew</source>
        <translation>Hebräisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation>Wenn Sie die rechte Maustaste drücken und gedrückt halten, sehen Sie ein Vorschaubild. Die Taste Einfügen fügt ein Zeichen in die Markierung unten ein, und die Taste Löschen entfernt das letzte Zeichen wieder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Char Palette (*.ucp);;All Files (*)</source>
        <translation>Scribus-Zeichenpalette (*.ucp);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enhanced Palette</source>
        <translation>Erweiterte Palette</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quick Palette</source>
        <translation>Kompaktpalette</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hide Enhanced</source>
        <translation>Erweiterte Palette verbergen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a filename to open</source>
        <translation>Wählen Sie eine Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error reading file %1 - file is corrupted propably.</source>
        <translation>Fehler beim Öffnen der Datei %1 - Die Datei ist möglicherweise beschädigt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a filename to save under</source>
        <translation>Speichern als</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot write file %1</source>
        <translation>Kann Datei %1 nicht speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clean the Palette?</source>
        <translation>Inhalt entfernen? </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You will clean all characters from this palette. Are you sure?</source>
        <translation>Sind Sie sicher, dass Sie alle Zeichen entfernen möchten?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character Palette</source>
        <translation>Zeichenpalette</translation>
    </message>
</context>
<context>
    <name>CharTable</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Glyphs missing</source>
        <translation>Fehlende Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text overflow</source>
        <translation>Überfliessender Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object is not on a Page</source>
        <translation>Objekt ausserhalb einer Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Missing Image</source>
        <translation>Fehlendes Bild</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object has transparency</source>
        <translation>Transparenz wird verwendet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object is a PDF Annotation or Field</source>
        <translation>Objekt ist eine PDF-Anmerkung oder ein PDF-Feld</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object is a placed PDF</source>
        <translation>Objekt ist eine importierte PDF-Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Problems found</source>
        <translation>Keine Probleme gefunden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page </source>
        <translation>Seite </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Free Objects</source>
        <translation>Freie Objekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Problems found</source>
        <translation>Es sind Probleme aufgetaucht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preflight Verifier</source>
        <translation>Druckvorstufenüberprüfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Items</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Problems</source>
        <translation>Probleme</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Current Profile:</source>
        <translation>Aktuelles Profil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Ignore Errors</source>
        <translation>Fehler ig&amp;norieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check again</source>
        <translation>Nochmals überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image resolution below %1 DPI, currently %2 x %3 DPI</source>
        <translation>Auflösung ist keiner als %1 dpi, aktuell %2 x %3 dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image resolution above %1 DPI, currently %2 x %3 DPI</source>
        <translation>Auflösung ist grösser als %1 dpi, aktuell %2 x %3 dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image is GIF</source>
        <translation>Das Bild ist eine GIF-Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Transparency used</source>
        <translation>Transparenz verwendet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blendmode used</source>
        <translation>Farbüberblendung verwendet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Layer &quot;%1&quot;</source>
        <translation>Ebene &quot;%1&quot;</translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose Styles</source>
        <translation>Stile wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Available Styles</source>
        <translation>Verfügbare Stile</translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Directory</source>
        <translation>Wählen Sie ein Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Collecting...</source>
        <translation>Stelle die notwendigen Dateien zusammen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation>Es können nicht alle Dateien für die Datei %1 
zusammengestellt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot collect the file: 
%1</source>
        <translation>Fehler beim Zusammenstellen der Datei
%1</translation>
    </message>
</context>
<context>
    <name>ColorManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Colors</source>
        <translation>Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;uplicate</source>
        <translation>&amp;Duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Remove Unused</source>
        <translation>Unbenutzte &amp;entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Sets</source>
        <translation>Farbpaletten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Current Color Set:</source>
        <translation>Aktive Palette:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save Color Set</source>
        <translation>Farbpalette &amp;speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a color set to load</source>
        <translation>Farbpalette auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save the current color set</source>
        <translation>Farbpalette speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Unbenutzte Farben entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import colors to the current set from an existing document</source>
        <translation>Importiert Farben aus einem existierenden Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create a new color within the current set</source>
        <translation>Neue Farbe anlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit the currently selected color</source>
        <translation>Farbe bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make a copy of the currently selected color</source>
        <translation>Kopie der ausgewählen Farbe anlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete the currently selected color</source>
        <translation>Ausgewählte Farbe löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make the current colorset the default color set</source>
        <translation>Aktuelle Farbpalette zur Voreinstellung machen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Name</source>
        <translation>Namen wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy of %1</source>
        <translation>Kopie von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Color</source>
        <translation>Neue Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected.What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation>Wenn das Farbmanagement aktiviert ist, zeigt das Warndreieck an, dass die Farbe ausserhalb des Farbraums (Gamut) des gewählten Druckers ist. Das bedeutet, dass die Farbe nicht so wiedergegeben wird, wie am Monitor angezeigt. Weitere Hinweise zu diesem Thema finden Sie in der Online-Hilfe.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.scd);;Other Files (*.eps *.epsi *.ps *.ai);;All Files (*)</source>
        <translation>Dokumente (*.sla *.scd);;Andere Dateien (*.eps *.epsi *.ps *.ai);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Other Files (*.eps *.epsi *.ps *.ai);;All Files (*)</source>
        <translation>Dokumente (*.sla *.sla.gz *.scd *.scd.gz);;Andere Dateien (*.eps *.epsi *.ps *.ai);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The file %1 does not contain colors which can be imported.
If the file was a PostScript-based, try to import it with File -&amp;gt; Import. 
Not all files have DSC conformant comments where the color descriptions are located.
 This prevents importing colors from some files.
See the Edit Colors section of the documentation for more details.</source>
        <translation>Die Datei %1 enthält keine Farben , die importiert werden können. 
Falls es sich um eine Datei handelt, die auf Postscript basiert, versuchen Sie, diese per Datei &gt; Importieren zu laden.
Nicht alle Dateien enthalten DSC-konforme Kommentare, in denen die Farbbeschreibungen gespeichert sind. 
Daher können Farben aus einigen Dateien nicht importiert werden.
Weitere Informationen finden Sie in der Dokumentation.</translation>
    </message>
</context>
<context>
    <name>ColorWheel</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Monochromatic</source>
        <translation>Monochromatische Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Analogous</source>
        <translation>Analoge Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Complementary</source>
        <translation>Komplementärfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Split Complementary</source>
        <translation>Gespaltene Komplementärfarben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Triadic</source>
        <translation>Triadisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tetradic (Double Complementary)</source>
        <translation>Triadisch (Doppelte Komplementärfarben)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Base Color</source>
        <translation>Grundfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Monochromatic Light</source>
        <translation>Monochromatisch hell</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Monochromatic Dark</source>
        <translation>Monochromatisch dunkel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>1st. Analogous</source>
        <translation>1. Analoge Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>2nd. Analogous</source>
        <translation>2. Analoge Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>1st. Split</source>
        <translation>1. Teilung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>2nd. Split</source>
        <translation>2. Teilung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>3rd. Split</source>
        <translation>3. Teilung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>4th. Split</source>
        <translation>4. Teilung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>1st. Triadic</source>
        <translation>1. Triade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>2nd. Triadic</source>
        <translation>2. Triade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>1st. Tetradic (base opposite)</source>
        <translation>1. Tetrade (entgegengesetzte Richtung)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>2nd. Tetradic (angle)</source>
        <translation>2. Tetrade (Winkel)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>3rd. Tetradic (angle opposite)</source>
        <translation>3. Tetrade (gegenüberliegender Winkel)</translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Color Wheel...</source>
        <translation>Farb&amp;kreis...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color setting helper</source>
        <translation>Hilfsmittel zur Erstellung von Farbschemata</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color selector with color theory included.</source>
        <translation>Farbwähler basierend auf Farbenlehren.</translation>
    </message>
</context>
<context>
    <name>CommonStrings</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Apply</source>
        <translation>An&amp;wenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>color name</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Page</source>
        <translation>Einzelne Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Sided</source>
        <translation>Doppelseite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>3-Fold</source>
        <translation>3fach gefaltet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>4-Fold</source>
        <translation>4fach gefaltet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Monday</source>
        <translation>Montag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tuesday</source>
        <translation>Dienstag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Wednesday</source>
        <translation>Mittwoch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Thursday</source>
        <translation>Donnerstag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Friday</source>
        <translation>Freitag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturday</source>
        <translation>Samstag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sunday</source>
        <translation>Sonntag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>January</source>
        <translation>Januar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>February</source>
        <translation>Februar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>March</source>
        <translation>März</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>April</source>
        <translation>April</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>May</source>
        <translation>Mai</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>June</source>
        <translation>Juni</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>July</source>
        <translation>Juli</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>August</source>
        <translation>August</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>September</source>
        <translation>September</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>October</source>
        <translation>Oktober</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>November</source>
        <translation>November</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>December</source>
        <translation>Dezember</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No</source>
        <translation>Nein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;No</source>
        <translation>N&amp;ein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left Page</source>
        <comment>Left page location</comment>
        <translation>Linke Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Middle</source>
        <comment>Middle page location</comment>
        <translation>Mitte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Middle Left</source>
        <comment>Middle Left page location</comment>
        <translation>Mitte links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Middle Right</source>
        <comment>Middle Right page location</comment>
        <translation>Mitte rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right Page</source>
        <comment>Right page location</comment>
        <translation>Rechte Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal</source>
        <comment>Default single master page</comment>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal Left</source>
        <comment>Default left master page</comment>
        <translation>Normal links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal Middle</source>
        <comment>Default middle master page</comment>
        <translation>Normal Mitte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal Right</source>
        <comment>Default right master page</comment>
        <translation>Normal rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal Vision</source>
        <comment>Color Blindness - Normal Vision</comment>
        <translation>Normales Sehvermögen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Protanopia (Red)</source>
        <comment>Color Blindness - Red Color Blind</comment>
        <translation>Rotgrünblindheit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Deuteranopia (Green)</source>
        <comment>Color Blindness - Greed Color Blind</comment>
        <translation>Grünblindheit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tritanopia (Blue)</source>
        <comment>Color Blindness - Blue Color Blind</comment>
        <translation>Blaublindheit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Full Color Blindness</source>
        <comment>Color Blindness - Full Color Blindness</comment>
        <translation>Komplett farbenblind</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom: </source>
        <comment>Custom Tab Fill Option</comment>
        <translation>Benutzerdefiniert: </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Solid Line</source>
        <translation>Durchgehend</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dashed Line</source>
        <translation>Gestrichelt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dotted Line</source>
        <translation>Gepunktet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dash Dot Line</source>
        <translation>Strich-Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dash Dot Dot Line</source>
        <translation>Strich-Punkt-Punkt</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal Gradient</source>
        <translation>Waagrechter Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical Gradient</source>
        <translation>Senkrechter Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Diagonal Gradient</source>
        <translation>Diagonaler Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cross Diagonal Gradient</source>
        <translation>Umgekehrt diagonaler Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Radial Gradient</source>
        <translation>Radialer Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Opacity:</source>
        <translation>Deckkraft:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shade:</source>
        <translation>Tonwert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Line Color Properties</source>
        <translation>Linienfarbe bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Fill Color Properties</source>
        <translation>Füllfarbe bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color</source>
        <translation>Tonwert der Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal or gradient fill method</source>
        <translation>Füllmethode</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set the transparency for the color selected</source>
        <translation>Transparenz für Farbe auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Free linear Gradient</source>
        <translation>Benutzerdefinierter linearer Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X1:</source>
        <translation>X1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y1:</source>
        <translation>Y1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X2:</source>
        <translation>X2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y2:</source>
        <translation>Y2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Free radial Gradient</source>
        <translation>Benutzerdefinierter radialer Verlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Vector</source>
        <translation>Vektor verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation>Verschieben Sie den Anfang des Verlaufsvektors, indem Sie die linke Maustaste gedrückt halten, und den Endwert des Vektors mit der rechten Maustaste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Transparency Settings</source>
        <translation>Transparenzeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blend Mode:</source>
        <translation>Modus:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Darken</source>
        <translation>Abdunkeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lighten</source>
        <translation>Aufhellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiply</source>
        <translation>Multiplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Screen</source>
        <translation>Bildschirm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overlay</source>
        <translation>Ineinander kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hard Light</source>
        <translation>Hartes Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Soft Light</source>
        <translation>Weiches Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Difference</source>
        <translation>Differenz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Dodge</source>
        <translation>Farbig abwedeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Burn</source>
        <translation>Farbig nachbelichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hue</source>
        <translation>Farbton</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation</source>
        <translation>Sättigung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Luminosity</source>
        <translation>Luminanz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Offsets</source>
        <translation>Versatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scaling</source>
        <translation>Skalierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X-Scale:</source>
        <translation>X-Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y-Scale:</source>
        <translation>Y-Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotation</source>
        <translation>Drehung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Angle</source>
        <translation>Winkel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pattern</source>
        <translation>Füllmuster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exclusion</source>
        <translation>Ausschluss</translation>
    </message>
</context>
<context>
    <name>CreateRangeBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Create Range</source>
        <translation>Seitenfolge erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of Pages in Document:</source>
        <translation>Anzahl der Seiten im Dokument:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Doc Page Range</source>
        <translation>Seitenfolge im Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Basic Range Selection</source>
        <translation>Grundeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add a Range of Pages</source>
        <translation>Seitenfolge hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Consecutive Pages</source>
        <translation>Aufeinanderfolgende Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>From:</source>
        <translation>Von:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To:</source>
        <translation>bis:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Comma Separated List</source>
        <translation>Kommaseparierte Liste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Even Pages</source>
        <translation>Gerade Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Odd Pages</source>
        <translation>Ungerade Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add To Range</source>
        <translation>&amp;Zur Folge hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Range of Pages</source>
        <translation>Seitenfolge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move &amp;Up</source>
        <translation>Nach &amp;oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move &amp;Down</source>
        <translation>Nach &amp;unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>De&amp;lete</source>
        <translation>Lö&amp;schen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Advanced Reordering</source>
        <translation>Erweiterte Anordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Group Size:</source>
        <translation>Grösse der Seitengruppe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample Page Order:</source>
        <translation>Beispielanordnung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Order</source>
        <translation>Anordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>CSV Importer Options</source>
        <translation>Optionen für CSV-Importer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Field delimiter:</source>
        <translation>Feldtrenner:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value delimiter:</source>
        <translation>Texttrenner:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>First row is a header</source>
        <translation>Erste Zeile ist Kopfzeile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>delimiter</comment>
        <translation>Keiner</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer Options</source>
        <translation>Druckereinstellungen (CUPS)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Option</source>
        <translation>Einstellung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Set</source>
        <translation>Welche Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Pages</source>
        <translation>Alle Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Even Pages only</source>
        <translation>Nur gerade Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Odd Pages only</source>
        <translation>Nur ungerade Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror</source>
        <translation>Spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Orientation</source>
        <translation>Ausrichtung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>N-Up Printing</source>
        <translation>Seiten zusammenfassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page per Sheet</source>
        <translation>Seite pro Blatt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pages per Sheet</source>
        <translation>Seiten pro Blatt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help &gt; About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
        <translation>Dieser Dialog enthält verschiedene Optionen für das Drucken mit CUPS. Die exakten Optionen hängen von Ihrem Drucker ab. Sie können überprüfen, ob CUPS aktiviert ist, wenn Sie Hilfe &gt; Über aufrufen. Suchen Sie nach den Zeichen C-C-T-F. Diese bedeuten C=CUPS C=littlecms T=TIFF. Fehlende Bibliotheken werden durch * angezeigt</translation>
    </message>
</context>
<context>
    <name>CurveWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Curve Files (*.scu);;All Files (*)</source>
        <translation>Kurvendateien (*.scu);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot write the file: 
%1</source>
        <translation>Die Datei %1 kann nicht geschrieben werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inverts the curve</source>
        <translation>Invertiert die Kurve</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resets the curve</source>
        <translation>Setzt die Kurve zurück</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Switches between linear and cubic interpolation of the curve</source>
        <translation>Wechselt zwischen linearer und kubischer Interpolation der Kurve</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Loads a curve</source>
        <translation>Lädt eine Kurve</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saves this curve</source>
        <translation>Speichert diese Kurve</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Encoding:</source>
        <translation>Kodierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Führt zum Dokumentenverzeichnis.
Dieses können Sie in unter Datei - Allgemeine Einstellungen festlegen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Compress File</source>
        <translation>Datei &amp;komprimieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Include Fonts</source>
        <translation>Schriften ein&amp;betten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Include ICC Profiles</source>
        <translation>ICC-Profile &amp;einbetten</translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancelled by user</source>
        <translation>Vom Anwender beendet</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Color</source>
        <translation>Farbe löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Color:</source>
        <translation>Farbe löschen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace With:</source>
        <translation>Ersetzen durch:</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Pages</source>
        <translation>Seiten löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>to:</source>
        <translation>bis:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete From:</source>
        <translation>Löschen von:</translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Style</source>
        <translation>Stil löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Style:</source>
        <translation>Lösche Stil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace With:</source>
        <translation>Ersetzen durch:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Style</source>
        <translation>Kein Stil</translation>
    </message>
</context>
<context>
    <name>DocIm</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Importing failed</source>
        <translation>Import fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Importing Word document failed 
%1</source>
        <translation>Fehler beim Import des Word-Dokuments
%1</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Information</source>
        <translation>Dokumentinformationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Title:</source>
        <translation>&amp;Titel:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Author:</source>
        <translation>&amp;Autor:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Keywords:</source>
        <translation>&amp;Stichwörter:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Descri&amp;ption:</source>
        <translation>Beschrei&amp;bung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Herausgeber:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Contributors:</source>
        <translation>&amp;Mitarbeiter:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dat&amp;e:</source>
        <translation>&amp;Datum:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>T&amp;ype:</source>
        <translation>&amp;Typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>F&amp;ormat:</source>
        <translation>&amp;Format:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Identi&amp;fier:</source>
        <translation>&amp;Identifikation:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Source:</source>
        <translation>&amp;Quelle:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Language:</source>
        <translation>&amp;Sprache:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Relation:</source>
        <translation>&amp;Beziehung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Co&amp;verage:</source>
        <translation>&amp;Gültigkeitsbereich:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ri&amp;ghts:</source>
        <translation>&amp;Rechte:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Further &amp;Information</source>
        <translation>Weitere &amp;Informationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Eine Person oder Organisation, die für die Veröffentlichung des Dokuments verantwortlich ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Eine Person oder Organisation, die an der Erstellung des Dokuments beteiligt war</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Ein Datum, das mit der Entstehung des Dokuments verbunden ist,
nach ISO 8601 im Format JJJJ-MM-DD </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>Die Gattung oder der Typ des Dokuments, z. B. Kategorie, Funktion, Genre etc</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Eine eindeutige Referenz zu dem Dokument in einem gegebenen Kontext wie ISBN oder URI</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Eine Referenz zu einem ähnlichen Dokument. Hier kann eine formale 
Identifikation wie ISBN oder ein URI verwendet werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>Der Geltungsbereich des Dokuments, wenn möglich mit Ort, Zeit und Gerichtsstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Informationen über rechtliche Aspekte des Dokumenteninhalts, 
etwa Urheberrechte, Patente oder Warenzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Eine Referenz zu einem Dokument, von dem sich das aktuelle Dokument ableitet, z.B. ISBN oder URI</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documen&amp;t</source>
        <translation>Dokume&amp;nt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Die Person oder Organisation, die hauptsächlich für den Inhalt des Dokuments verantwortlich ist. Dieses Feld kann sowohl in das Scribus-Dokument als auch in die Metadaten einer PDF-Datei eingebettet werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Der Titel oder die Bezeichnung des Dokuments. 
Dieses Feld kann sowohl in das Scribus-Dokument als auch 
in die Meta-Daten einer PDF-Datei eingebettet werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Ein Abriss des Inhalts.
Hier kann eine kurze Beschreibung oder Zusammenfassung stehen. 
Sie wird beim Export in die PDF-Datei eingebettet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>Kurze Beschreibung des Inhalts.
Der Inhalt dieses Feldes wird in der PDF-Datei gespeichert und hilft Ihnen, 
PDF-Dateien zu indexieren und wiederzufinden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>Die physische oder digitale Veröffentlichungsform des Dokuments. 
Abmessung und Medientyp können hier notiert werden.
Die Verwendung der RFCs 2045 und 2046 für MIME-Typen kann hier nützlich sein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>Die Sprache, in welcher der Inhalt des Dokuments geschrieben ist, 
normalerweise ein ISO-639-Sprachcode, optional ergänzt durch 
einen Bindestrich und den ISO-3166 Ländercode, wie z. B. en-GB oder fr-CH</translation>
    </message>
</context>
<context>
    <name>DocSections</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
        <translation>Fügt einen Abschnitt für die Seitenzahl in das Dokument ein. Der neue Abschnitt wird unter dem aktuellen hinzugefügt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete the currently selected section.</source>
        <translation>Markierten Abschnitt löschen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>1, 2, 3, ...</source>
        <translation>1, 2, 3, ...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>i, ii, iii, ...</source>
        <translation>i, ii, iii, ...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>I, II, III, ...</source>
        <translation>I, II, III, ...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>a, b, c, ...</source>
        <translation>a, b, c, ...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A, B, C, ...</source>
        <translation>A, B, C, ...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
        <translation>&lt;b&gt;Name:&lt;/b&gt; Optionale Bezeichnung für den Abschnitt, z. B. Index.&lt;br/&gt;&lt;b&gt;Sichtbar:&lt;/b&gt; Entscheiden Sie, ob die Seitennummern angezeigt werden sollen.&lt;br/&gt;&lt;b&gt;Von:&lt;/b&gt; Der Seitenindex für diesen Abschnitt, mit dem die Zählung beginnen soll.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt;Der Seitenindex für diesen Abschnitt, mit dem die Zählung enden soll.&lt;br/&gt;&lt;b&gt;Stil:&lt;/b&gt; Wählen Sie den Numerierungsstil aus.&lt;br/&gt;&lt;b&gt;Beginn:&lt;/b&gt; Die Seitennummer, ab der die Zählung beginnen soll. Wenn Sie beispielsweise hier 2 eintragen und als Stil a, b, c wählen, wird mit b angefangen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Number Out Of Bounds</source>
        <translation>Seitenzahl ausserhalb des gültigen Bereichs</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
        <translation>Der Wert, den Sie eingegeben haben, liegt ausserhalb des gültigen Bereichs (%1-%2).</translation>
    </message>
</context>
<context>
    <name>DocSectionsBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Sections</source>
        <translation>Dokumentabschnitte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>From</source>
        <translation>von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To</source>
        <translation>bis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style</source>
        <translation>Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Start</source>
        <translation>Beginn</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shown</source>
        <translation>Sichtbar</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Relates To</source>
        <translation>Verweist auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is Parent Of</source>
        <translation>Ist Elternobjekt von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is Child Of</source>
        <translation>Ist Kindobjekt von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Frames</source>
        <translation>Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image Frames</source>
        <translation>Bildrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Boolean</source>
        <translation>Boolsch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Integer</source>
        <translation>Integer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>String</source>
        <translation>String</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>relationship</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>auto add</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>types</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Real Number</source>
        <translation>Reale Zahl</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Item Attributes</source>
        <translation>Eigenschaften des Dokumentobjekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parameter</source>
        <translation>Parameter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relationship</source>
        <translation>Beziehung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relationship To</source>
        <translation>Beziehung zu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Auto Add To</source>
        <translation>Automatisch hinzufügen zu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Setup Printer</source>
        <translation>Drucker einrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cyan</source>
        <translation>Cyan</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Yellow</source>
        <translation>Gelb</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Black</source>
        <translation>Schwarz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Geben sie durch Kommata getrennt ein, welche
Seiten importiert werden sollen, zum Beispiel
1-5 oder 3,4. * steht  für alle Seiten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Destination</source>
        <translation>Druckerwahl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Options...</source>
        <translation>&amp;Optionen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;File:</source>
        <translation>&amp;Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;hange...</source>
        <translation>Ä&amp;ndern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A&amp;lternative Printer Command</source>
        <translation>Al&amp;ternativer Druckbefehl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Co&amp;mmand:</source>
        <translation>&amp;Befehl:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Range</source>
        <translation>Bereich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print &amp;All</source>
        <translation>&amp;Alles drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Current Pa&amp;ge</source>
        <translation>Aktue&amp;lle Seite drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print &amp;Range</source>
        <translation>Be&amp;reich drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>N&amp;umber of Copies:</source>
        <translation>Anzahl der &amp;Kopien:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Print</source>
        <translation>&amp;Drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Normal</source>
        <translation>Normal drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Separations</source>
        <translation>Farbseparationen drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print in Color if Available</source>
        <translation>In Farbe drucken, falls möglich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print in Grayscale</source>
        <translation>In Graustufen drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript Level 1</source>
        <translation>Postscript Level 1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript Level 2</source>
        <translation>Postscript Level 2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript Level 3</source>
        <translation>Postscript Level 3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page</source>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation>Seite(n) horizontal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) Vertical</source>
        <translation>Seite(n) vertikal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set Media Size</source>
        <translation>Mediengrösse festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply Under Color Removal</source>
        <translation>Unterfarbenreduktion anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Schmuckfarben in Prozessfarben umwandeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply ICC Profiles</source>
        <translation>ICC-Profile anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Advanced Options</source>
        <translation>Weitere Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview...</source>
        <translation>Vorschau...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation>Legt die Postscript-Version fest. 
Postscript Level 1 und 2 haben häufig sehr grosse Dateien zur Folge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation>Postscript-Dateien (*.ps);;All Files (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation>Einen alternativen Druckmanager, etwa kprinter oder gtklp, für weitere Druckoptionen verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Verwendet echtes Schwarz anstelle von Farbmischungen aus Magenta, Gelb und Cyan. UFR hat den grössten Effekt auf Bilder, die neutrale oder dunkle Farbtöne haben, die Grau ähneln. Diese Option kann die Druckqualität verbessern. Testen Sie bitte von Fall zu Fall, wie Sie bessere Ergebnisse erhalten. UFR verringert ausserdem die Gefahr einer Übersättigung der CMYK-Farben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Konvertiert Schmuckfarben in Prozessfarben. Sie sollten diese Option nur deaktivieren, wenn Sie Schmuckfarben wirklich benötigen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation>Wenn das Farbmanagement aktiviert ist, werden die ICC-Profile mit in den Druckstream eingebettet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation>Legen Sie die Druckgrösse der Postscript-Datei explizit fest. Nur aktivieren, wenn ihre Druckerei das verlangt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clip to Page Margins</source>
        <translation>Auf Seitenränder beschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to retrieve printer settings</source>
        <translation>Abfragen der Druckereinstellungen fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation>Objekte ausserhalb des Satzspiegels nicht drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Force Overprint Mode</source>
        <translation>Überdrucken erzwingen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation>Aktiviert den Überdrucken-Modus für das ganze Dokument. Einstellungen für einzelne Objekte
werden ignoriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer Marks</source>
        <translation>Druckermarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Crop Marks</source>
        <translation>Schneidemarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleed Marks</source>
        <translation>Anschnittmarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Registration Marks</source>
        <translation>Registrierungsmarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Bars</source>
        <translation>Farbbalken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Offset:</source>
        <translation>Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Marks</source>
        <translation>Marken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleed Settings</source>
        <translation>Anschnitteinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top:</source>
        <translation>Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bottom:</source>
        <translation>Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left:</source>
        <translation>Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right:</source>
        <translation>Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Document Bleeds</source>
        <translation>Dokumenteinstellungen für Anschnitt verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleeds</source>
        <translation>Anschnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inside:</source>
        <translation>Innen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outside:</source>
        <translation>Aussen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Zugabe für Anschnitt oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Zugabe für Anschnitt unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Zugabe für Anschnitt links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Zugabe für Anschnitt rechts</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Importing File:
%1
failed!</source>
        <translation>Fehler beim Importieren
der Datei
%1!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fatal Error</source>
        <translation>Fataler Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Analyzing PostScript:</source>
        <translation>Postscript wird analysiert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Generating Items</source>
        <translation>Objekte werden erstellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Converting of %1 images failed!</source>
        <translation>Fehler beim Konvertieren von %1 Bildern!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group%1</source>
        <translation>Gruppe%1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Importing: %1</source>
        <translation>Importiere: %1</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Style</source>
        <translation>Stilvorlage bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character</source>
        <translation>Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Spacing</source>
        <translation>Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name of your paragraph style</source>
        <translation>Name des Absatzstils</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font of selected text or object</source>
        <translation>Schrift des gewählten Textes oder des Objekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Size</source>
        <translation>Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of text fill</source>
        <translation>Textfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of text stroke</source>
        <translation>Textumrissfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Legt die gesamte Höhe der Initiale in Zeilennummern fest</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Spacing above the paragraph</source>
        <translation>Abstand über dem Absatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Spacing below the paragraph</source>
        <translation>Abstand unter dem Absatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tabulators and Indentation</source>
        <translation>Tabulatoren und Einzüge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Lines:</source>
        <translation>&amp;Zeilen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distances</source>
        <translation>Abstände</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fixed Linespacing</source>
        <translation>Fester Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic Linespacing</source>
        <translation>Automatischer Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align to Baseline Grid</source>
        <translation>Am Grundlinienraster ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Drop Caps</source>
        <translation>Initialen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance from Text:</source>
        <translation>Abstand vom Text:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview of the Paragraph Style</source>
        <translation>Vorschau des Absatzstils</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Determines the gap between the DropCaps and the Text</source>
        <translation>Legt den Abstand zwischen der Initiale und dem Text fest</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Toggles sample text of this paragraph style</source>
        <translation>Schaltet die Absatzvorschau an oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name of the style is not unique</source>
        <translation>Der Name des Stils ist nicht eindeutig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Background</source>
        <translation>Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Manual Tracking</source>
        <translation>Zeichenabstand anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Offset to baseline of characters</source>
        <translation>Abstand der Zeichen von der Grundlinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Click to select the line spacing mode</source>
        <translation>Klicken Sie hier, um den Zeilenabstand zu ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select for easier reading of light colored text styles</source>
        <translation>Wählen Sie einen dunkleren Hintergrund, um hellen Text besser zu erkennen</translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Editor</source>
        <translation>Editor</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Open...</source>
        <translation>Ö&amp;ffnen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save &amp;As...</source>
        <translation>Speichern &amp;unter...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save and Exit</source>
        <translation>Speicher&amp;n und beenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Exit without Saving</source>
        <translation>Nicht speichern und &amp;beenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo</source>
        <translation>&amp;Rückgängig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cu&amp;t</source>
        <translation>&amp;Ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paste</source>
        <translation>Einf&amp;ügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Get Field Names</source>
        <translation>&amp;Feldnamen auslesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation>JavaScripts (*.js);;Alle Dateien (*)</translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Image Effects</source>
        <translation>Bildeffekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options:</source>
        <translation>Optionen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color:</source>
        <translation>Farbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shade:</source>
        <translation>Tonwert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Brightness:</source>
        <translation>Helligkeit:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Contrast:</source>
        <translation>Kontrast:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Radius:</source>
        <translation>Radius:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value:</source>
        <translation>Wert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Posterize:</source>
        <translation>Posterisieren:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Available Effects</source>
        <translation>Verfügbare Effekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blur</source>
        <translation>Verwischen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Brightness</source>
        <translation>Helligkeit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colorize</source>
        <translation>Farben ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Contrast</source>
        <translation>Kontrast</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Grayscale</source>
        <translation>Graustufen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Invert</source>
        <translation>Invertieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Posterize</source>
        <translation>Posterisieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sharpen</source>
        <translation>Schärfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&gt;&gt;</source>
        <translation>&gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;&lt;</source>
        <translation>&lt;&lt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Effects in use</source>
        <translation>Verwendete Effekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color 1:</source>
        <translation>Farbe 1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color 2:</source>
        <translation>Farbe 2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color 3:</source>
        <translation>Farbe 3:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color 4:</source>
        <translation>Farbe 4:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Duotone</source>
        <translation>Duplex</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tritone</source>
        <translation>Triplex</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quadtone</source>
        <translation>Quadruplex</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Curves</source>
        <translation>Kurven</translation>
    </message>
</context>
<context>
    <name>ExportBitmap</name>
    <message>
        <location filename="" line="136643300"/>
        <source>File exists. Overwrite?</source>
        <translation>Die Datei existiert bereits. Soll sie überschrieben werden?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>exists already. Overwrite?</source>
        <translation>existiert bereits. Soll die Datei überschrieben werden?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;All pages</source>
        <translation>Alle &amp;Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change the output directory</source>
        <translation>Ausgabeverzeichnis wechseln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Available export formats</source>
        <translation>Verfügbare Exportformate</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Export Directory</source>
        <translation>Wählen Sie ein Ausgabeverzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>Das Ausgabeverzeichnis - dort werden Ihre Bilder gespeichert.
Dateinamen der Bilder haben das Format &quot;Dokumentname-Seite.Dateiformat&quot;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export only the current page</source>
        <translation>Nur die aktuelle Seite exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;hange...</source>
        <translation>Ä&amp;ndern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Export to Directory:</source>
        <translation>In &amp;Verzeichnis exportieren:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image &amp;Type:</source>
        <translation>&amp;Dateityp:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Quality:</source>
        <translation>&amp;Qualität:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export as Image(s)</source>
        <translation>Als Bild speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Resolution:</source>
        <translation>Auf&amp;lösung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Range</source>
        <translation>Bereich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Current page</source>
        <translation>A&amp;ktuelle Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Range</source>
        <translation>&amp;Bereich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export a range of pages</source>
        <translation>Einen Seitenbereich exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Geben Sie mit Hilfe von Kommata oder Bindestrichen ein, welche
Seiten importiert werden sollen, zum Beispiel
1-5 oder 3,4. * steht  für alle Seiten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export all pages</source>
        <translation>Alle Seiten exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Gibt die Auflösung der Bilder an.
72 dpi sind optimal, wenn Sie die Seiten nur auf dem 
Bildschirm betrachten wollen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>Gibt die Qualität der Bilder an - von 100% = beste Qualität bis 1% = schlechteste Qualität</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Grösse der Bilder. 100% verändert nichts, 200% für doppelt so grosse Bilder etc.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image size in Pixels</source>
        <translation>Bildgrösse in Pixel</translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Extended Image Properties</source>
        <translation>Erweiterte Bildeigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Darken</source>
        <translation>Abdunkeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lighten</source>
        <translation>Aufhellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hue</source>
        <translation>Farbton</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation</source>
        <translation>Sättigung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Luminosity</source>
        <translation>Luminanz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiply</source>
        <translation>Multiplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Screen</source>
        <translation>Negativ Multiplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dissolve</source>
        <translation>Auflösen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overlay</source>
        <translation>Ineinander kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hard Light</source>
        <translation>Hartes Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Soft Light</source>
        <translation>Weiches Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Difference</source>
        <translation>Differenz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exclusion</source>
        <translation>Ausschluss</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Dodge</source>
        <translation>Farbig abwedeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Burn</source>
        <translation>Farbig nachbelichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blend Mode:</source>
        <translation>Modus:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Opacity:</source>
        <translation>Deckkraft:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Layers</source>
        <translation>Ebenen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Don&apos;t use any Path</source>
        <translation>Keinen Pfad benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paths</source>
        <translation>Pfade</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Size:</source>
        <translation>Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Title:</source>
        <translation>Titel:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Title</source>
        <translation>Kein Titel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Author:</source>
        <translation>Autor:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unknown</source>
        <translation>Unbekannt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Document</source>
        <translation>Scribus-Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resolution:</source>
        <translation>Auflösung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>DPI</source>
        <translation>dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Grayscale</source>
        <translation>Graustufen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colorspace:</source>
        <translation>Farbraum:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Duotone</source>
        <translation>Duplex</translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Some fonts used by this document have been substituted:</source>
        <translation>Einige Schriften in diesem Dokument wurden ersetzt:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> was replaced by: </source>
        <translation> wurde ersetzt durch: </translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Available Fonts</source>
        <translation>Verfügbare Schriften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Substitutions</source>
        <translation>Schriftersetzungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Additional Paths</source>
        <translation>Zusätzliche Pfade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Name</source>
        <translation>Schriftname</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replacement</source>
        <translation>Ersatzschrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Directory</source>
        <translation>Wählen Sie ein Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Available Fonts</source>
        <translation>Verfügbare &amp;Schriften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font &amp;Substitutions</source>
        <translation>Schrift&amp;ersetzung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Additional &amp;Paths</source>
        <translation>Zusätzliche &amp;Pfade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;hange...</source>
        <translation>Ä&amp;ndern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A&amp;dd...</source>
        <translation>&amp;Hinzufügen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Remove</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation>Name der Schrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation>Schrift benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation>Unterteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation>Pfad zur Schriftdatei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Embed in PostScript</source>
        <comment>font preview</comment>
        <translation>In Postscript einbetten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font search paths can only be set in File &gt; Preferences, and only when there is no document currently open. Close any open documents, then use File &gt; Preferences &gt; Fonts to change the font search path.</source>
        <translation>Suchpfade für Schriften können nur unter Datei &gt; Allgemeine Einstellungen hinzugefügt werden. Dazu darf kein Dokument geöffnet sein. Schliessen Sie alle geöffneten Dokumente und ändern Sie unter Datei &gt; Allgemeine Einstellungen &gt; Schriften den Suchpfad.</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation>Gewählte Schrift ins Menü Stil - Schriftart aufnehmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation>Vorschau verlassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Start searching</source>
        <translation>Suche starten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size of the selected font</source>
        <translation>Grösse der Schrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation>Falsches Üben von Xylophonmusik quält jeden grösseren Zwerg</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>User</source>
        <comment>font preview</comment>
        <translation>Benutzer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>System</source>
        <comment>font preview</comment>
        <translation>System</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample will be shown after key release</source>
        <translation>Die Vorschau wird nach Loslassen der Taste angezeigt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation>Wenn Sie hier Text eingeben, starten Sie eine schnelle Suche. Gross- und Kleinschreibung wird ignoriert. Sie können auch Wildcards (*, ?, [...]) verwenden. Beispiele: t* listet alle Schriften auf, die mit t oder T beginnen. *bold* listet alle Schriften mit fetten Schnitten auf.</translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Fonts Preview</source>
        <translation>Schriftvorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Quick Search:</source>
        <translation>&amp;Schnellsuche:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Search</source>
        <translation>&amp;Suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Name</source>
        <translation>Name der Schrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Doc</source>
        <translation>Doc</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Subset</source>
        <translation>Unterteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Access</source>
        <translation>Zugriff</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Font Size:</source>
        <translation>Schrift&amp;grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample text to display</source>
        <translation>Beispieltext</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Se&amp;t</source>
        <translation>Än&amp;dern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+T</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset the text</source>
        <translation>Text zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Append</source>
        <translation>&amp;Verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+V</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+L</translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Font Preview...</source>
        <translation>&amp;Schriftvorschau...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Preview dialog</source>
        <translation>Schriftvorschau-Dialog</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation>Verfügbare Schriften sortieren und durchsuchen.</translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Substitution</source>
        <translation>Ersetzung von Schriften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Original Font</source>
        <translation>Originalschrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Substitution Font</source>
        <translation>Ersatzschrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make these substitutions permanent</source>
        <translation>Schrift dauerhaft ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation>Dieses Dokument enthält einige Schriften, welche auf Ihrem System nicht installiert sind. 
Bitte entscheiden Sie sich für einen passenden Ersatz. &quot;Abbrechen&quot; wird das Laden des Dokuments
beenden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation>Bricht die Schriftenersetzung ab und beendet das Laden des
Dokumentes.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation>Falls Sie diese Funktion wählen, wird Scribus diese Ersetzungen dauerhaft verwenden. Ihre Entscheidung können Sie jedoch jederzeit im Menü Datei &gt; Dokument einrichten &gt; Schriften rückgängig machen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation>Wenn Sie &quot;OK&quot; klicken und speichern, werden diese Schriftersetzungen dauerhaft
im Dokument gespeichert.</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Position:</source>
        <translation>Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add, change or remove color stops here</source>
        <translation>Farben hinzufügen, ändern oder entfernen</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Guide</source>
        <translation>Hilfslinie bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enter a position:</source>
        <translation>Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Guide</source>
        <translation>Neue Hilfslinie</translation>
    </message>
</context>
<context>
    <name>GuideManagerBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Manage Guides</source>
        <translation>Hilfslinien bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontals</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Guide</source>
        <translation>Hilfslinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;elete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+E</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Verticals</source>
        <translation>Vertikal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A&amp;dd</source>
        <translation>Hin&amp;zufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+Z</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>De&amp;lete</source>
        <translation>Lö&amp;schen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+L</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Lock Guides</source>
        <translation>Hilfslinien &amp;sperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Appl&amp;y to All Pages</source>
        <translation>Auf alle Seiten an&amp;wenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+Y</source>
        <translation>Alt+W</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Number:</source>
        <translation>&amp;Nummer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>U&amp;se Gap:</source>
        <translation>A&amp;bstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+S</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Nu&amp;mber:</source>
        <translation>Nu&amp;mmer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use &amp;Gap:</source>
        <translation>Abstan&amp;d:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+G</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Refer To</source>
        <translation>Bezogen auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Page</source>
        <translation>&amp;Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+P</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>M&amp;argins</source>
        <translation>&amp;Ränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;election</source>
        <translation>&amp;Markierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Misc</source>
        <translation>&amp;Andere</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete all guides from the current page</source>
        <translation>Entfernt alle Hilfslinien auf der aktuellen Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete all guides from the current document</source>
        <translation>Entfernt alle Hilfslinien im Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Single</source>
        <translation>&amp;Einfach</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Column/Row</source>
        <translation>&amp;Spalte/Zeile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Guides from Current &amp;Page</source>
        <translation>Hilfslinien auf der Seite &amp;löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Guides from &amp;All Pages</source>
        <translation>Hilfslinien auf &amp;allen Seiten löschen</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Leider ist kein Handbuch verfügbar! Auf http://docs.scribus.net finden Sie aktualisierte Handbücher und auf http://www.scribus.net weitere Downloads.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Contents</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Link</source>
        <translation>Verknüpfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Online Help</source>
        <translation>Online-Hilfe für Scribus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Contents</source>
        <translation>&amp;Inhalt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Search</source>
        <translation>&amp;Suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Find</source>
        <translation>Suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search Term:</source>
        <translation>Suchbegriff:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Se&amp;arch</source>
        <translation>Suc&amp;hen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>De&amp;lete All</source>
        <translation>&amp;Alle löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Book&amp;marks</source>
        <translation>&amp;Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Print...</source>
        <translation>&amp;Drucken...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>E&amp;xit</source>
        <translation>Ver&amp;lassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Searching is case unsensitive</source>
        <translation>Die Suche berücksichtigt Gross- und Kleinschreibung nicht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Bookmark</source>
        <translation>Neues Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Bookmark&apos;s Title:</source>
        <translation>Titel des Lesezeichens:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Find...</source>
        <translation>&amp;Suchen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Find &amp;Next</source>
        <translation>&amp;Nächstes suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Find &amp;Previous</source>
        <translation>&amp;Vorheriges Suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add Bookmark</source>
        <translation>Lesezeichen &amp;hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;elete All</source>
        <translation>All&amp;es löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relevance</source>
        <translation>Relevanz</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Possible Hyphenation</source>
        <translation>Trennvorschlag</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Accept</source>
        <translation>Anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Skip</source>
        <translation>Überspringen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Länge des kürzesten Wortes, das getrennt werden soll.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Maximale Anzahl aufeinanderfolgender Trennungen.
Null bedeutet unbegrenzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Language:</source>
        <translation>&amp;Sprache:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Kürzestes Wort:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>Trenn&amp;vorschläge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Text automatisch während der Ein&amp;gabe trennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Wenn Sie die Funktion Extras - Silbentrennung anwenden benutzen, können Sie in einem Dialog aus allen möglichen Trennungen für jedes Wort wählen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Aktiviert die automatische Trennung während der Eingabe.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Aufeinanderfolgende &amp;Trennungen:</translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Image Info</source>
        <translation>Bildinformationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>General Info</source>
        <translation>Allgemeine Informationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Date / Time:</source>
        <translation>Datum/Zeit:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Has Embedded Profile:</source>
        <translation>eingebettetes Profil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Profile Name:</source>
        <translation>Name des Profils:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Has Embedded Paths:</source>
        <translation>eingebettete Pfade:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Has Layers:</source>
        <translation>Ebenen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>EXIF Info</source>
        <translation>EXIF-Informationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Artist:</source>
        <translation>Künstler:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Comment:</source>
        <translation>Kommentar:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>User Comment:</source>
        <translation>Kommentar des Benutzers:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Camera Model:</source>
        <translation>Kamera:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Camera Manufacturer:</source>
        <translation>Kamerahersteller:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Description:</source>
        <translation>Beschreibung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copyright:</source>
        <translation>Urheberrecht:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scanner Model:</source>
        <translation>Scanner:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scanner Manufacturer:</source>
        <translation>Scannerhersteller:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exposure time</source>
        <translation>Belichtungszeit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Aperture:</source>
        <translation>Blende:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>ISO equiv.:</source>
        <translation>ISO-Äquivalent:</translation>
    </message>
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Import &amp;EPS/PS...</source>
        <translation>&amp;EPS/PS-Dateien importieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Imports EPS Files</source>
        <translation>EPS-Dateien importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>Importiert die meisten EPS-Dateien in das aktuelle Dokument
und wandelt die Vektordaten in Scribus-Objekte um.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF</source>
        <translation>PDF</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Page</source>
        <translation>Seite einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>before Page</source>
        <translation>vor Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>after Page</source>
        <translation>nach Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>at End</source>
        <translation>am Dokumentende</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page(s)</source>
        <translation>Seite(n)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Insert</source>
        <translation>Ein&amp;fügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Master Page:</source>
        <translation>&amp;Musterseite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Size</source>
        <translation>Seitenformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Orie&amp;ntation:</source>
        <translation>Au&amp;srichtung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Width:</source>
        <translation>&amp;Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Height:</source>
        <translation>&amp;Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Objects with their Page</source>
        <translation>Objekte mit der Seite verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Master Pages</source>
        <translation>Musterseite</translation>
    </message>
</context>
<context>
    <name>InsertAFrame</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;b&gt;Insert a text frame&lt;/b&gt;&lt;br/&gt;A text frame allows you to enter any text in a defined position with the formatting you choose. You may select a text file on the Options tab if you want to immediately import a document into the frame. Scribus supports a wide variety of importable format from plain text to OpenOffice.org.&lt;br/&gt;Your text may be edited and formatted on the page directly or in the simple Story Editor.</source>
        <translation>&lt;b&gt;Einfügen eines Textrahmens&lt;/b&gt;&lt;br/&gt;Ein Textrahmen ermöglicht es Ihnen, irgendeinen Text in einer festgelegten Position und einer Formatierung Ihrer Wahl einzufügen. Falls Sie ein Dokument direkt in den Rahmen importieren möchten, können Sie im &quot;Optionen&quot;-Reiter eine Textdatei auswählen. Scribus unterstützt eine grosse Anzahl von Formaten, vom einfachen Text bis hin zu OpenOffice.org.&lt;br/&gt;Ihr Text kann direkt auf der Seite oder im Story Editor bearbeitet werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;b&gt;Insert an image frame&lt;/b&gt;&lt;br/&gt;An image frame allows you to place an image onto your page. Various image effects may be applied or combined including transparencies, brightness, posterisation that allow retouching or the creation of interesting visual results. Image scaling and shaping is performed with the Properties Palette.</source>
        <translation>&lt;b&gt;Einfügen eines Bildrahmens&lt;/b&gt;&lt;br/&gt;Ein Bildrahmen ermöglicht es Ihnen, ein Bild auf der Seite zu plazieren. Es können verschiedene Bildeffekte angewendet oder kombiniert werden, darunter Transparenz, Helligkeit oder Posterisierung. Damit lassen sich Bilder retuschieren, oder es können interessante optische Effekte erzielt werden. Die Grösse und die Form lassen sich in der Eigenschaftenpalette ändern.</translation>
    </message>
</context>
<context>
    <name>InsertAFrameBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert A Frame</source>
        <translation>Rahmen einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>T&amp;ype</source>
        <translation>T&amp;yp</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Text Frame</source>
        <translation>&amp;Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Image Frame</source>
        <translation>&amp;Bildrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+I</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>T&amp;able</source>
        <translation>T&amp;abelle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+A#</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shape</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polygon</source>
        <translation>Polygon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Location</source>
        <translation>&amp;Plazierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Placement</source>
        <translation>Plazierung auf der Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Current Page</source>
        <translation>Aktuelle Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selecting this will place the frame only on the current page.</source>
        <translation>Der Rahmen wird nur auf der aktuellen Seite eingefügt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Range of Pages:</source>
        <translation>Bereich:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selecting this will place frame on the selected range. </source>
        <translation>Die Rahmen werden im gewählten Bereich eingefügt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Position of Frame</source>
        <translation>Position des Rahmens</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top Left of Page</source>
        <translation>Oben links (Seite)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selecting this puts the frame on the top left with postion 0,0</source>
        <translation>Fügt den Rahmen mit den Koordinaten 0,0 ein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top Left of Margins</source>
        <translation>Oben links (Satzspiegel)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selecting this places the frame in the upper left of the page margins defined in your doc setup.</source>
        <translation>Fügt den Rahmen oben links im Satzspiegel ein, wie Sie ihn in den Dokumenteinstellungen eingerichtet haben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom Position:</source>
        <translation>Benutzerdefiniert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set the dimensions wished below in the X: Y: dialog below.</source>
        <translation>Stellen Sie hier die Masse des Rahmens ein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size</source>
        <translation>&amp;Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Same as the Page</source>
        <translation>Seitengrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Same as the Page Margins</source>
        <translation>Satzspiegel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom Size:</source>
        <translation>Benutzerdefiniert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Height:</source>
        <translation>Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width:</source>
        <translation>Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Options</source>
        <translation>&amp;Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Source Image:</source>
        <translation>Bildquelle:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Select File...</source>
        <translation>&amp;Datei...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>There are no options for this type of frame</source>
        <translation>Für diesen Rahmentyp gibt es keine Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Source Document:</source>
        <translation>Dokument:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Columns:</source>
        <translation>Spalten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Gap:</source>
        <translation>Abstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Link Created Frames</source>
        <translation>Erstellte Texrahmen verbinden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top Left of Bleed</source>
        <translation>Anschnitt oben links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selecting this places the frame in the upper left of the page bleed defined in your doc setup.</source>
        <translation>Plaziert den Rahmen oben links in der Anschnittzugabe, wie Sie unter Datei &gt; Dokument einrichten eingestellt wurde.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Same as the Bleed</source>
        <translation>Wie Anschnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Same as the Imported Image</source>
        <translation>Wie importierte Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Pages</source>
        <translation>Alle Seiten</translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert Table</source>
        <translation>Tabelle einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of rows:</source>
        <translation>Anzahl der Zeilen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of columns:</source>
        <translation>Anzahl der Spalten:</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <location filename="" line="136643300"/>
        <source>New Script</source>
        <translation>Neues Script</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit JavaScripts</source>
        <translation>JavaScripts bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit...</source>
        <translation>&amp;Bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add...</source>
        <translation>&amp;Hinzufügen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New Script:</source>
        <translation>&amp;Neues Script:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to delete this script?</source>
        <translation>Wollen Sie dieses Script wirklich löschen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation>Fügt ein neues Script hinzu und erstellt eine Funktion mit demselben Namen. Wenn Sie das Script als ein &quot;Open Action&quot;-Script verwenden wollen, verändern Sie bitte nicht den Namen der Funktion.</translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Layers</source>
        <translation>Ebenen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Layer</source>
        <translation>Ebene löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation>Wollen Sie alle Objekte auf dieser Ebene löschen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add a new layer</source>
        <translation>Neue Ebene hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete layer</source>
        <translation>Ebene löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Raise layer</source>
        <translation>Ebene nach oben verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lower layer</source>
        <translation>Ebene nach unten verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Opacity:</source>
        <translation>Deckkraft:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blend Mode:</source>
        <translation>Modus:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Darken</source>
        <translation>Abdunkeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lighten</source>
        <translation>Aufhellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiply</source>
        <translation>Multiplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Screen</source>
        <translation>Negativ multiplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overlay</source>
        <translation>Ineinander kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hard Light</source>
        <translation>Hartes Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Soft Light</source>
        <translation>Weiches Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Difference</source>
        <translation>Differenz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Dodge</source>
        <translation>Farbig abwedeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Burn</source>
        <translation>Farbig nachbelichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exclusion</source>
        <translation>Ausschluss</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hue</source>
        <translation>Farbton</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation</source>
        <translation>Sättigung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Luminosity</source>
        <translation>Luminanz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of the Layer Indicator - Each layer has a color assigned to display on the canvas when layer indicators are enabled. You can double click to edit the color. </source>
        <translation>Farbe der Ebenenmarkierung - Jede Ebene wird mit einer Farbe markiert, wenn die Ebenenmarkierungen aktiviert sind. Sie können auf die Markierung doppelklicken, um die Farbe zu ändern.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make Layer Visible - Uncheck to hide the layer from the display </source>
        <translation>Ebene sichtbar - Entfernen Sie die Markierung um die Ebene zu verbergen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Layer - Uncheck to disable printing. </source>
        <translation>Ebene Drucken - Entfernen Sie die Markierung, um den Ausruck dieser Ebene zu verhindern.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lock or Unlock Layer - Unchecked is unlocked </source>
        <translation>Ebene sperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text flows around objects in lower Layers - Enabling this forces text frames to flow around other objects, even in layers below</source>
        <translation>Text umfliesst Objekte in tieferliegenden Ebenen - Falls aktiviert, fliesst Text um andere Objekte herum, auch wenn sich diese auf tieferen Ebenen befinden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outline Mode - Toggles the &apos;wireframe&apos; display of objects to speed the display of very complex objects.</source>
        <translation>Umrissmodus - Reduziert die Anzeige auf die Objektumrisse, um die Darstellung sehr komplexer Objekte zu beschleunigen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name of the Layer - Double clicking on the name of a layer enabled editing</source>
        <translation>Name der Ebene - Ein Doppelklick auf den Namen der Ebene ermöglicht dessen Bearbeitung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Duplicates the current layer</source>
        <translation>Dupliziert die aktuelle Ebene</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Line Styles</source>
        <translation>Linienstile bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy of %1</source>
        <translation>Kopie von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Style</source>
        <translation>Neuer Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumente (*.sla *.sla.gz *.scd *.scd.gz);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumente (*.sla *.scd);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;uplicate</source>
        <translation>&amp;Duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to delete this style?</source>
        <translation>Möchten Sie diesen Stil wirklich löschen?</translation>
    </message>
</context>
<context>
    <name>LineStyleWBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>LineStyleWBase</source>
        <translation>LinienStyleWBase</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Width:</source>
        <translation>Linienbreite:</translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flat Cap</source>
        <translation>Flach</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Square Cap</source>
        <translation>Quadratisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round Cap</source>
        <translation>Abgerundet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Miter Join</source>
        <translation>Spitz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bevel Join</source>
        <translation>Gefasst</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round Join</source>
        <translation>Rund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add a new line</source>
        <translation>Neue Linie hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove a line</source>
        <translation>Linie entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line style</source>
        <translation>Linienstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line width</source>
        <translation>Linienbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>End style</source>
        <translation>Linienenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Join style</source>
        <translation>Ecken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line color</source>
        <translation>Linienfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line shade</source>
        <translation>Tonwert</translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>All Files (*)</source>
        <translation>Alle Dateien (*)</translation>
    </message>
</context>
<context>
    <name>LoremManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Select Lorem Ipsum</source>
        <translation>Beispieltext wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Author:</source>
        <translation>Autor:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Get More:</source>
        <translation>Mehr:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>XML File:</source>
        <translation>XML-Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lorem Ipsum</source>
        <translation>Beispieltext</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraphs:</source>
        <translation>Absätze:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Standard Lorem Ipsum</source>
        <translation>Standard-Lorem-Ipsum</translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Manage Page Properties</source>
        <translation>Seiteneigenschaften bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Size</source>
        <translation>Seitenformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Orie&amp;ntation:</source>
        <translation>Aus&amp;richtung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Width:</source>
        <translation>&amp;Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Height:</source>
        <translation>&amp;Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Objects with their Page</source>
        <translation>Objekte zusammen mit der Seite verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Margin Guides</source>
        <translation>Ränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Other Settings</source>
        <translation>Andere Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Master Page:</source>
        <translation>Musterseite:</translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bottom:</source>
        <translation>&amp;Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Top:</source>
        <translation>&amp;Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Abstand zwischen dem oberen Rand des Satzspiegels und dem Seitenrand (Kopfsteg)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Abstand zwischen dem unteren Rand des Satzspiegels und dem Seitenrand (Fusssteg)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Inside:</source>
        <translation>&amp;Innen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>O&amp;utside:</source>
        <translation>Ausse&amp;n:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preset Layouts:</source>
        <translation>Standard-Layouts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation>Seitenränder auf alle vorhandenen Seiten im Dokument anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer Margins...</source>
        <translation>Druckerränder...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation>Ränder für die ausgewählte Seitengrösse von einem der vorhandenen Drucker importieren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply settings to:</source>
        <translation>Einstellungen anwenden auf:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Document Pages</source>
        <translation>Alle Seiten im Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Master Pages</source>
        <translation>Alle Musterseiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply the margin changes to all existing master pages in the document</source>
        <translation>Änderungen an den Rändern auf alle Musterseiten im Dokument anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Margin Guides</source>
        <translation>Ränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top:</source>
        <translation>Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bottom:</source>
        <translation>Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Zugabe für Anschnitt oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Zugabe für Anschnitt unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Zugabe für Anschnitt links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Zugabe für Anschnitt rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleeds</source>
        <translation>Anschnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inside:</source>
        <translation>Innen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outside:</source>
        <translation>Aussen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left:</source>
        <translation>Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right:</source>
        <translation>Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the left margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Abstand zwischen dem linken Rand des Satzsspiegels und dem Seitenrand. Falls Sie ein doppelseitiges oder drei- bzw. vierfach gefaltetes Layout gewählt haben, kann dieser Abstand dazu verwendet werden, korrekte Ränder für die Bindung zu erhalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the right margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Abstand zwischen dem rechten Rand des Satzsspiegels und dem Seitenrand. Falls Sie ein doppelseitiges oder drei- bzw. vierfach gefaltetes Layout gewählt haben, kann dieser Abstand dazu verwendet werden, korrekte Ränder für die Bindung zu erhalten</translation>
    </message>
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Master Pages</source>
        <translation>Musterseiten bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to delete this master page?</source>
        <translation>Wollen Sie diese Musterseite wirklich löschen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Master Page</source>
        <translation>Neue Musterseite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New MasterPage</source>
        <translation>Neue Musterseite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Duplicate the selected master page</source>
        <translation>Markierte Musterseite duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete the selected master page</source>
        <translation>Markierte Musterseite löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add a new master page</source>
        <translation>Neue Musterseite hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import master pages from another document</source>
        <translation>Musterseite aus einem anderen Dokument importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Master Page %1</source>
        <translation>Neue Musterseite %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unable to Rename Master Page</source>
        <translation>Kann Musterseite nicht umbenennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The Normal page is not allowed to be renamed.</source>
        <translation>Die Standardseite kann nicht umbenannt werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rename Master Page</source>
        <translation>Musterseite umbenennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Name:</source>
        <translation>Neuer Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy #%1 of %2</source>
        <translation>Kopie Nr. %1 von %2</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiple Duplicate</source>
        <translation>Mehrfach Duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Number of Copies:</source>
        <translation>An&amp;zahl der Kopien:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Horizontaler Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Vertikaler Versatz:</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Distances</source>
        <translation>Abstände</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X1:</source>
        <translation>X1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y1:</source>
        <translation>Y1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X2:</source>
        <translation>X2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y2:</source>
        <translation>Y2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>DX:</source>
        <translation>DX:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>DY:</source>
        <translation>DY:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Angle:</source>
        <translation>Winkel:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Length:</source>
        <translation>Länge:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>pt</source>
        <translation>pt</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumente (*.sla *.sla.gz *.scd *.scd.gz);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumente (*.sla *.scd);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import Page(s)</source>
        <translation>Seiten importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> from 0</source>
        <translation>von 0</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create Page(s)</source>
        <translation>Seiten erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> from %1</source>
        <translation>von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import Master Page</source>
        <translation>Musterseite importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;From Document:</source>
        <translation>von &amp;Dokument:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Chan&amp;ge...</source>
        <translation>Än&amp;dern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import Page(s):</source>
        <translation>Seite(n) &amp;importieren:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import Master Page</source>
        <translation>&amp;Musterseite importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation>Geben Sie mit Hilfe von Kommata oder Bindestrichen ein, welche
Seiten importiert werden sollen, zum Beispiel
1-5 oder 3,4. * steht  für alle Seiten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Before Page</source>
        <translation>Vor Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>After Page</source>
        <translation>Nach Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>At End</source>
        <translation>Am Ende</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Missing Font</source>
        <translation>Fehlende Schrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The Font %1 is not installed.</source>
        <translation>Die Schrift %1 ist nicht installiert.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use</source>
        <translation>Benutze</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>instead</source>
        <translation>anstatt</translation>
    </message>
</context>
<context>
    <name>ModeToolBar</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Tools</source>
        <translation>Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties...</source>
        <translation>Eigenschaften...</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Pages</source>
        <translation>Seiten verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy Page</source>
        <translation>Seite kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Page(s):</source>
        <translation>Seite(n) verschieben von:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Page(s)</source>
        <translation>Seite(n) verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Before Page</source>
        <translation>Vor Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>After Page</source>
        <translation>Nach Seite </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>At End</source>
        <translation>Ans Ende</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To:</source>
        <translation>bis:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of copies:</source>
        <translation>Anzahl der Kopien:</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Geometry</source>
        <translation>Geometrie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Basepoint:</source>
        <translation>Ursprung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Level</source>
        <translation>Anordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shape:</source>
        <translation>Form:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance of Text</source>
        <translation>Abstand des Textes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Curve</source>
        <translation>Kurve zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Start Offset:</source>
        <translation>Anfangsposition:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance from Curve:</source>
        <translation>Abstand zur Kurve:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Input Profile:</source>
        <translation>Farbprofil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering Intent:</source>
        <translation>Renderpriorität:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Perceptual</source>
        <translation>Wahrnehmung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relative Colorimetric</source>
        <translation>Relativ farbmetrisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation</source>
        <translation>Farbsättigung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Absolute Colorimetric</source>
        <translation>Absolut farbmetrisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left Point</source>
        <translation>Linker Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>End Points</source>
        <translation>Endpunkte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Miter Join</source>
        <translation>Spitz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bevel Join</source>
        <translation>Gefasst</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round Join</source>
        <translation>Rund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flat Cap</source>
        <translation>Flach</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Square Cap</source>
        <translation>Quadratisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round Cap</source>
        <translation>Abgerundet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Style</source>
        <translation>Kein Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Size</source>
        <translation>Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Spacing</source>
        <translation>Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name of selected object</source>
        <translation>Name des markierten Objekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal position of current basepoint</source>
        <translation>Horizontale Position des aktuellen Ursprungs</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical position of current basepoint</source>
        <translation>Vertikale Position des aktuellen Ursprungs</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width</source>
        <translation>Breite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotation of object at current basepoint</source>
        <translation>Drehung des Objekts um den aktuellen Ursprung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Ursprungspunkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select top left for basepoint</source>
        <translation>Links oben als Ursprung setzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select top right for basepoint</source>
        <translation>Rechts oben als Ursprung setzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select bottom left for basepoint</source>
        <translation>Links unten als Ursprung setzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select bottom right for basepoint</source>
        <translation>Rechts unten als Ursprung setzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select center for basepoint</source>
        <translation>Mittelpunkt als Ursprung setzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flip Horizontal</source>
        <translation>Horizontal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flip Vertical</source>
        <translation>Vertikal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move one level up</source>
        <translation>Weiter nach vorn verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move one level down</source>
        <translation>Weiter nach hinten verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move to front</source>
        <translation>In den Vordergrund bringen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move to back</source>
        <translation>In den Hintergrund bringen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lock or unlock the object</source>
        <translation>Objekt sperren oder entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lock or unlock the size of the object</source>
        <translation>Grössenänderung sperren oder entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable or disable printing of the object</source>
        <translation>Drucken aktivieren oder deaktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font of selected text or object</source>
        <translation>Schrift des Objekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scaling width of characters</source>
        <translation>Zeichenbreiten skalieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color of text stroke</source>
        <translation>Tonwert der Textumrissfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color of text fill</source>
        <translation>Tonwert der Textfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style of current paragraph</source>
        <translation>Stilvorlage für aktuellen Absatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change settings for left or end points</source>
        <translation>Ändert die Einstellungen für die linken und die Endpunkte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pattern of line</source>
        <translation>Muster der Line</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Thickness of line</source>
        <translation>Linienbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type of line joins</source>
        <translation>Art der Ecken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type of line end</source>
        <translation>Art der Enden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line style of current object</source>
        <translation>Linienstil des Objekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose the shape of frame...</source>
        <translation>Rahmenform auswählen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit shape of the frame...</source>
        <translation>Rahmenform bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set radius of corner rounding</source>
        <translation>Radius der Eckenrundung setzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of columns in text frame</source>
        <translation>Anzahl der Spalten im Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between columns</source>
        <translation>Spaltenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance of text from top of frame</source>
        <translation>Abstand des Textes vom oberen Rahmenrand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance of text from bottom of frame</source>
        <translation>Abstand des Textes vom unteren Rahmenrand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance of text from left of frame</source>
        <translation>Abstand des Textes vom linken Rahmenrand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance of text from right of frame</source>
        <translation>Abstand des Textes vom rechten Rahmenrand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit tab settings of text frame...</source>
        <translation>Tabulatoren setzen/bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Erlaube verschiedene Grössen für Bild und Rahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal offset of image within frame</source>
        <translation>Horizontaler Versatz des Bildes innerhalb des Rahmens</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical offset of image within frame</source>
        <translation>Vertikaler Versatz des Bildes innerhalb des Rahmens</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resize the image horizontally</source>
        <translation>Bild horizontal skalieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resize the image vertically</source>
        <translation>Bild vertikal skalieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keep the X and Y scaling the same</source>
        <translation>Seitenverhältnis beibehalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make the image fit within the size of the frame</source>
        <translation>Bild füllt den Rahmen aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Benutzt die Bildproportionen anstelle der Rahmenproportionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cell Lines</source>
        <translation>Zellumrandungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line at Top</source>
        <translation>Oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line at the Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line at the Right </source>
        <translation>Rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line at Bottom</source>
        <translation>Unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keep the aspect ratio</source>
        <translation>Seitenverhältnisse beibehalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Source profile of the image</source>
        <translation>Farbprofil des Bildes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering intent for the image</source>
        <translation>Render-Methode für das Bild</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Switches between Gap or Column width</source>
        <translation>Wechsel zwischen der Breite des Zwischenraums und der Spalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Column width</source>
        <translation>Spaltenbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Path Text Properties</source>
        <translation>Eigenschaften des Pfadtextes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Zeigt an, auf welcher Ebene sich das Objekt befindet. 0 bedeutet im Vordergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shape</source>
        <translation>&amp;Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Text</source>
        <translation>&amp;Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Image</source>
        <translation>&amp;Bild</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Line</source>
        <translation>&amp;Linien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Colors</source>
        <translation>Fa&amp;rben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Width:</source>
        <translation>&amp;Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Height:</source>
        <translation>&amp;Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Rotation:</source>
        <translation>&amp;Drehung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use &amp;Bounding Box</source>
        <translation>&amp;Bounding Box benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Use Contour Line</source>
        <translation>&amp;Konturlinie benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Form bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>R&amp;ound
Corners:</source>
        <translation>Ecken
ab&amp;runden:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Spalten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To&amp;p:</source>
        <translation>&amp;Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bottom:</source>
        <translation>&amp;Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>T&amp;abulators...</source>
        <translation>&amp;Tabulatoren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>St&amp;yle:</source>
        <translation>S&amp;til:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Freie Skalierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X-Sc&amp;ale:</source>
        <translation>&amp;X-Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y-Scal&amp;e:</source>
        <translation>&amp;Y-Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scale &amp;To Frame Size</source>
        <translation>An Rahmen an&amp;passen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>P&amp;roportional</source>
        <translation>&amp;Proportional</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Ursprung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>T&amp;ype of Line:</source>
        <translation>Linien&amp;art:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line &amp;Width:</source>
        <translation>Linien&amp;breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ed&amp;ges:</source>
        <translation>&amp;Ecken:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Endings:</source>
        <translation>En&amp;den:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;X1:</source>
        <translation>&amp;X1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X&amp;2:</source>
        <translation>X&amp;2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y&amp;1:</source>
        <translation>Y&amp;1:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Y2:</source>
        <translation>&amp;Y2:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right to Left Writing</source>
        <translation>Rechtsläufiger Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Manual Tracking</source>
        <translation>Zeichenabstand anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fixed Linespacing</source>
        <translation>Fester Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic Linespacing</source>
        <translation>Automatischer Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align to Baseline Grid</source>
        <translation>Am Grundlinienraster ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Actual X-DPI:</source>
        <translation>X-dpi aktuell:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Actual Y-DPI:</source>
        <translation>Y-dpi aktuell:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Start Arrow:</source>
        <translation>Anfangspfeil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>End Arrow:</source>
        <translation>Endpfeil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Offset to baseline of characters</source>
        <translation>Abstand der Zeichen von der Grundlinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scaling height of characters</source>
        <translation>Zeichenhöhe ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>Der Name &quot;%1&quot; ist nicht eindeutig.&lt;br/&gt; Bitte wählen Sie einen anderen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Rule</source>
        <translation>Fülloption</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Even-Odd</source>
        <translation>Gerade-Ungerade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Non Zero</source>
        <translation>Nicht Null</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overprinting</source>
        <translation>Überdrucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Knockout</source>
        <translation>Knockout</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overprint</source>
        <translation>Überdrucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
        <translation>Farbe des Textumrisses und/oder des Schattens, je nachdem, was ausgewählt ist. Wenn beide Optionen aktiviert sind, gilt diese Farbe auch für beide.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
        <translation>Farbe des markierten Textes. Wenn die Option Umrandung aktiviert ist, ist diese Farbe gleichzeitig die Füllfarbe. Wenn die Option Schatten aktiviert ist, ist diese Farbe die oberste Farbe.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Gap:</source>
        <translation>Abstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width:</source>
        <translation>Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text &amp;Flow Around Frame</source>
        <translation>Text &amp;umfliesst Rahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Disabled</source>
        <translation>Deaktiviert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Frame &amp;Shape</source>
        <translation>Rahmenum&amp;riss benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image Effects</source>
        <translation>Bildeffekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Extended Image Properties</source>
        <translation>Erweiterte Bildeigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Disable text flow from lower frames around object</source>
        <translation>Umfluss von Text in tieferliegenden Rahmen deaktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use the frame shape for text flow of text frames below the object.</source>
        <translation>Rahmenumriss für den Umfluss von Text in tieferliegenden Rahmen verwenden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use the bounding box, which is always rectangular, instead of the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation>Das umgebende Rechteck (Zeichenbox) anstatt des Rahmenumrisses für den Umfluss tieferliegender Textrahmen verwenden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Transparency Settings</source>
        <translation>Transparenzeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Group</source>
        <translation>&amp;Gruppieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Opacity:</source>
        <translation>Deckkraft:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blend Mode:</source>
        <translation>Modus:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Darken</source>
        <translation>Abdunkeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lighten</source>
        <translation>Aufhellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiply</source>
        <translation>Multiplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Screen</source>
        <translation>Bildschirm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overlay</source>
        <translation>Ineinander kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hard Light</source>
        <translation>Hartes Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Soft Light</source>
        <translation>Weiches Licht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Difference</source>
        <translation>Differenz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exclusion</source>
        <translation>Ausschluss</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Dodge</source>
        <translation>Farbig abwedeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Burn</source>
        <translation>Farbig nachbelichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hue</source>
        <translation>Farbton</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group the selected objects</source>
        <translation>Ausgewählte Objekte gruppieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Destroys the selected group</source>
        <translation>Löst die ausgewählte Gruppe auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>When chosen, the contour line can be edited with the Edit Shape Tool on the palette further above. When edited via the shape palette, this becomes a second separate line originally based on the frame&apos;s shape for text flow of text frames below the object. T</source>
        <translation>Wenn Sie diese Option wählen, können Sie die Konturlinie mit dem Werkzeug &quot;Form bearbeiten&quot; weiter oben bearbeiten. Es entsteht eine zweite Linie, die ursprünglich auf der Rahmenform für Textumfluss beruht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation>Halten Sie die Maustaste gedrückt, um die Art des Zeilenabstandes auszuwählen.</translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Style</source>
        <translation>Stil bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flat Cap</source>
        <translation>Flach</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Square Cap</source>
        <translation>Quadratisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round Cap</source>
        <translation>Abgerundet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Miter Join</source>
        <translation>Spitz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bevel Join</source>
        <translation>Gefasst</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round Join</source>
        <translation>Rund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Width:</source>
        <translation>Linienbreite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>Der Name &quot;%1&quot; ist nicht eindeutig.&lt;br/&gt; Bitte wählen Sie einen anderen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>pt</source>
        <translation>pt</translation>
    </message>
</context>
<context>
    <name>MultiProgressDialogBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Progress</source>
        <translation>Fortschritt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overall Progress:</source>
        <translation>Gesamter Fortschritt:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
</context>
<context>
    <name>MultipleDuplicate</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Horizontaler Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Vertikaler Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Horizontal Gap:</source>
        <translation>&amp;Horizontaler Abstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Vertical Gap:</source>
        <translation>&amp;Vertikaler Abstand:</translation>
    </message>
</context>
<context>
    <name>MultipleDuplicateBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiple Duplicate</source>
        <translation>Mehrfach Duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;By Number of Copies</source>
        <translation>&amp;Nach Anzahl der Kopien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Number of Copies:</source>
        <translation>An&amp;zahl der Kopien:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shift Created Items By</source>
        <translation>&amp;Erstellte Objekte verschieben um</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create &amp;Gap Between Items Of</source>
        <translation>A&amp;bstand zwischen Objekten erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+G</source>
        <translation>Alt+G</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Horizontaler Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Vertikaler Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>By &amp;Rows &amp;&amp; Columns</source>
        <translation>Nach Zeilen &amp;&amp; &amp;Spalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical Gap:</source>
        <translation>Vertikaler Abstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal Gap:</source>
        <translation>Horizontaler Abstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of Rows:</source>
        <translation>Anzahl der Zeilen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of Columns:</source>
        <translation>Anzahl der Spalten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>My &amp;Plugin</source>
        <translation>Mein &amp;PlugIn</translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus - My Plugin</source>
        <translation>Scribus - Mein PlugIn</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The plugin worked!</source>
        <translation>Das PlugIn funktioniert!</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <location filename="" line="136643300"/>
        <source>New Document</source>
        <translation>Neues Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Margin Guides</source>
        <translation>Seitenränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Seitengrösse des Dokuments, entweder eine Standardgrösse oder benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Ausrichtung der Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Breite der Seite, veränderbar, wenn &quot;Benutzerdefiniert&quot; ausgewählt ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Höhe der Seite, veränderbar, wenn &quot;Benutzerdefiniert&quot; ausgewählt ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default unit of measurement for document editing</source>
        <translation>Standardmasseinheit für das Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Textrahmen automatisch erstellen, wenn neue Seiten hinzugefügt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Anzahl der Spalten in den automatisch erzeugten Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between automatically created columns</source>
        <translation>Abstand zwischen den Spalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Orie&amp;ntation:</source>
        <translation>Au&amp;srichtung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Width:</source>
        <translation>&amp;Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Height:</source>
        <translation>&amp;Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Default Unit:</source>
        <translation>Standard&amp;masseinheit:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Automatic Text Frames</source>
        <translation>Automatische &amp;Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Gap:</source>
        <translation>Ab&amp;stand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colu&amp;mns:</source>
        <translation>Spa&amp;lten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Initial number of pages of the document</source>
        <translation>Anzahl der Seiten, die erstellt werden sollen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>N&amp;umber of Pages:</source>
        <translation>&amp;Anzahl der Seiten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not show this dialog again</source>
        <translation>Diesen Dialog nicht mehr zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New Document</source>
        <translation>&amp;Neues Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open &amp;Existing Document</source>
        <translation>Vor&amp;handenes Dokument öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open Recent &amp;Document</source>
        <translation>Dokument aus dem &amp;Verlauf öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>First Page is:</source>
        <translation>Erste Seite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Document Settings After Creation</source>
        <translation>Dokumenteinstellungen nach dem Erstellen öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Layout</source>
        <translation>Dokumentlayout</translation>
    </message>
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>New &amp;from Template...</source>
        <translation>Neu von &amp;Vorlage...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load documents with predefined layout</source>
        <translation>Dokument mit festgelegtem Layout laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation>Beginnt ein neues Dokument aus einer Vorlage, die Sie oder andere erstellt haben (z. B. für Dokumente mit gleichbleibendem Stil).</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Nodes</source>
        <translation>Pfade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Nodes</source>
        <translation>Punkte verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Control Points</source>
        <translation>Kontrollpunkte verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add Nodes</source>
        <translation>Punkte hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Nodes</source>
        <translation>Punkte löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset Control Points</source>
        <translation>Kontrollpunkte zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset this Control Point</source>
        <translation>Diesen Kontrollpunkt zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Absolute Coordinates</source>
        <translation>&amp;Absolute Koordinaten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit &amp;Contour Line</source>
        <translation>&amp;Konturlinie bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Reset Contour Line</source>
        <translation>Konturlinie &amp;zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;End Editing</source>
        <translation>Bearbeitung &amp;beenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Control Points Independently</source>
        <translation>Kontrollpunkte unabhängig verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Control Points Symmetrical</source>
        <translation>Kontrollpunkte symmetrisch verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Bézierkurve oder Polygon öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close this Bezier Curve</source>
        <translation>Bézierkurve schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror the Path Horizontally</source>
        <translation>Pfad horizontal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror the Path Vertically</source>
        <translation>Pfad vertikal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Pfad horizontal nach links verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shear the Path Vertically Up</source>
        <translation>Pfad nach oben scheren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shear the Path Vertically Down</source>
        <translation>Pfad nach unten scheren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Pfad gegen den Uhrzeigersinn drehen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotate the Path Clockwise</source>
        <translation>Pfad mit dem Uhrzeigersinn drehen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Pfad vergrössern um x %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Angle of Rotation</source>
        <translation>Grad der Drehung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Konturmodus aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Kontur auf die originale Form zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Pfad horizontal nach rechts verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation>Wenn aktiviert, werden die Koordinaten relativ zur Seite verwendet, andernfalls die Koordinaten absolut zum Objekt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shrink the Size of the Path by shown %</source>
        <translation>Grösse des Pfads verringern um x %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reduce the Size of the Path by the shown value</source>
        <translation>Grösse des Pfads um den angezeigten Wert verringern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enlarge the Size of the Path by the shown value</source>
        <translation>Grösse des Pfads um den angezeigten Wert vergrössern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>% to Enlarge or Shrink By</source>
        <translation>Prozent vergrössern/verkleinern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value to Enlarge or Shrink By</source>
        <translation>Um den Wert vergrössern/verkleinern</translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <location filename="" line="136643300"/>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation>Diese Datei scheint keine OpenOffice.org-Zeichnung zu sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group%1</source>
        <translation>Gruppe%1</translation>
    </message>
</context>
<context>
    <name>OODrawImportPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>&amp;OpenOffice.org-Zeichnung importieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation>Importiert OpenOffice.org Draw-Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation>Importiert die meisten OpenOffice.org-Draw-Dateien in das aktuelle Dokument und wandelt deren Vektordaten in Scribus-Objekte um.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenDocument 1.0 Draw</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenOffice.org 1.x Draw</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This file contains some unsupported features</source>
        <translation>Diese Datei enthält einige nicht unterstützte Features</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The file could not be imported</source>
        <translation>Die Datei konnte nicht importiert werden</translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Namen der Datei vor jeden Absatzstil anfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not ask again</source>
        <translation>Einstellungen speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenDocument Importer Options</source>
        <translation>Optionen für den Import von OpenDocument-Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Existierende Stile im aktuellen Dokument überschreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Merge Paragraph Styles</source>
        <translation>Absatzstile zusammenfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Absatzstile nach Attributen zusammenfügen. Das verringert die Anzahl der Absatzstile, selbst wenn diese im Originaldokument anders benannt sind.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Name des Dokuments an den Absatzstil in Scribus anhängen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation>Diese Einstellungen zum Standard machen und beim Import von OpenDocument-Dateien nicht nochmals nachfragen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overwrite Paragraph Styles</source>
        <translation>Absatzstile überschreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Document</source>
        <translation>Scribus-Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.2.x Document</source>
        <translation>Scribus 1.2.x-Dokument</translation>
    </message>
</context>
<context>
    <name>OneClick</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Origin</source>
        <translation>Ursprung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size</source>
        <translation>Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width:</source>
        <translation>Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Height:</source>
        <translation>Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remember Values</source>
        <translation>Werte beibehalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Length:</source>
        <translation>Länge:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Angle:</source>
        <translation>Winkel:</translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Linewidth</source>
        <translation>Linienstärke</translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as PDF</source>
        <translation>Als PDF speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>O&amp;utput to File:</source>
        <translation>Ausgabe in &amp;Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cha&amp;nge...</source>
        <translation>Än&amp;dern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output one file for eac&amp;h page</source>
        <translation>Eine Datei &amp;pro Seite speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-Dateien (*.pdf);;Alle Dateien (*.*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation>Jede Seite wird mit automatischer Numerierung als separate PDF-Datei exportiert. Hilfreich fürs Ausschiessen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
        <translation>Sie können die PDF-Datei erst speichern, wenn Sie einen Infotext im PDF/X-3-Register angegeben haben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 does not exists and will be created, continue?</source>
        <translation>%1 existiert nicht und wird erstellt. Fortfahren?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot create directory: 
%1</source>
        <translation>Verzeichnis kann nicht erstellt werden:
%1</translation>
    </message>
</context>
<context>
    <name>PDFToolBar</name>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Tools</source>
        <translation>PDF-Werkzeuge</translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Saving PDF</source>
        <translation>PDF speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exporting Items on Current Page:</source>
        <translation>Analysiere Objekte auf der Seite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exporting Master Page:</source>
        <translation>Musterseite wird exportiert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exporting Page:</source>
        <translation>Seite wird exportiert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page:</source>
        <translation>Seite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Date:</source>
        <translation>Datum:</translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Preview</source>
        <translation>Druckvorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Aktiviert Transparenzen und transparente Objekt im Dokument. Erfordert Ghostscript 7.07 oder höher</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Benutzt zur Druckvorschau eine Simulation generischer CMYK-Tinten anstelle der RGB-Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Aktiviert/deaktiviert den Cyan-Auszug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Aktiviert/deaktiviert den Magenta-Auszug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Aktiviert/deaktiviert den Gelb-Auszug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Aktiviert/deaktiviert den Schwarz-Auszug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display Trans&amp;parency</source>
        <translation>&amp;Transparenz aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Display CMYK</source>
        <translation>&amp;CMYK anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;C</source>
        <translation>&amp;C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;M</source>
        <translation>&amp;M</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Y</source>
        <translation>&amp;Y</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;K</source>
        <translation>&amp;K</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Under Color Removal</source>
        <translation>&amp;Unterfarbenreduktion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Separation Name</source>
        <translation>Separationsbezeichnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cyan</source>
        <translation>Cyan</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Yellow</source>
        <translation>Gelb</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Black</source>
        <translation>Schwarz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scaling:</source>
        <translation>Zoom:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print...</source>
        <translation>Drucken...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Mit dieser Option werden Grautöne, die aus Cyan, Magenta und Gelb gemischt würden, 
durch reine Abstufungen von Schwarz ersetzt.
Hauptsächlich werden davon neutrale und dunkle Farbtöne beeinflusst,
die Grau sehr ähnlich sind. Diese Option kann zu besseren Bildern führen.
Sie müssen jedoch von Fall zu Fall entscheiden, ob Sie bessere Ergebnisse
erzielen. Zudem reduziert UFR die Gefahr der Übersättigung.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resize the scale of the page.</source>
        <translation>Vorschaugrösse.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Force Overprint Mode</source>
        <translation>Überdrucken erzwingen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable &amp;Antialiasing</source>
        <translation>Antialiasing &amp;aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fit to Width</source>
        <translation>Seitenbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fit to Height</source>
        <translation>Seitenhöhe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fit to Page</source>
        <translation>Ganze Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Provides a more pleasant view of Type 1 fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Ermöglicht eine angenehmere Vorschau von Type 1-. TrueType- und OpenType-Schriften sowie von EPS-, PDF- und Vektordateien, allerdings auf Kosten der Geschwindigkeit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display Settings</source>
        <translation>Anzeigeeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Settings</source>
        <translation>Druckeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation>Seite(n) horizontal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) Vertical</source>
        <translation>Seite(n) vertikal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clip to Page Margins</source>
        <translation>Auf Seitenränder beschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print in Grayscale</source>
        <translation>In Graustufen drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert Spot Colors</source>
        <translation>Schmuckfarben umwandeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply ICC Profiles</source>
        <translation>ICC-Profile anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Erlaubt die Umwandlung von Schmuckfarben in Prozessfarben. Falls Sie keine Schmuckfarben in einer Druckerei drucken lassen möchten, sollten Sie die Option besser aktiviert lassen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation>Aktiviert den Überdrucken-Modus für das ganze Dokument. Einstellungen für einzelne Objekte werden ignoriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation>Wenn das Farbmanagement aktiviert ist, werden die ICC-Profile mit in den Datenstrom für den Druck eingebettet</translation>
    </message>
</context>
<context>
    <name>PSLib</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Processing Master Page:</source>
        <translation>Musterseiten werden verarbeitet:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exporting Page:</source>
        <translation>Seite wird exportiert:</translation>
    </message>
</context>
<context>
    <name>PStyleWBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent</source>
        <translation>Verknüpft mit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distances and Alignment</source>
        <translation>Abstände und Ausrichtung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Drop Caps</source>
        <translation>Initialen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent&apos;s Drop Cap Status</source>
        <translation>Initialen im verknüpften Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tabulators and Indentation</source>
        <translation>Tabulatoren und Einzüge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ch&amp;aracter Style</source>
        <translation>Z&amp;eichenstil</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Image</source>
        <translation>Bild</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line</source>
        <translation>Linie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polygon</source>
        <translation>Polygon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polyline</source>
        <translation>Polyline</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PathText</source>
        <translation>Pfadtext</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy of</source>
        <translation>Kopie von</translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Relates To</source>
        <translation>Verweist auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is Parent Of</source>
        <translation>Ist Elternobjekt von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Is Child Of</source>
        <translation>Ist Kindobjekt von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>relationship</comment>
        <translation>Keine</translation>
    </message>
</context>
<context>
    <name>PageItemAttributesBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Item Attributes</source>
        <translation>Eigenschaften des Seitenobjekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parameter</source>
        <translation>Parameter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relationship</source>
        <translation>Beziehung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relationship To</source>
        <translation>Beziehung zu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <location filename="" line="136643300"/>
        <source>First Page is:</source>
        <translation>Erste Seite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Layout</source>
        <translation>Dokumentlayout</translation>
    </message>
</context>
<context>
    <name>PagePalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Double sided</source>
        <translation>Doppelseiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Middle Right</source>
        <translation>Mitte rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation>Ziehen Sie einzelne Seiten oder Musterseiten auf den Papierkorb, um sie zu löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation>Dies sind alle vorhandenen Musterseiten. Ziehen Sie eine Musterseite in das Fenster mit den Seitensymbolen, um eine neue Seite zu erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arrange Pages</source>
        <translation>Seiten anordnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Available Master Pages:</source>
        <translation>Verfügbare Musterseiten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Pages:</source>
        <translation>Seiten des Dokuments:</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 of %1</source>
        <translation>%1 von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 of %2</source>
        <translation>%1 von %2</translation>
    </message>
</context>
<context>
    <name>PatternDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Directory</source>
        <translation>Wählen Sie ein Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Loading Patterns</source>
        <translation>Lade Füllmuster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Files (*)</source>
        <translation>Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
</context>
<context>
    <name>PicSearchBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Result</source>
        <translation>Ergebnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search Results for: </source>
        <translation>Suchergebnis für: </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Preview</source>
        <translation>Vor&amp;schau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Select</source>
        <translation>&amp;Auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Goto</source>
        <translation>Gehe zu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Missing</source>
        <translation>Nicht vorhanden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search</source>
        <translation>Suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Path</source>
        <translation>Pfad</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page</source>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print</source>
        <translation>Drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel Search</source>
        <translation>Suche abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Manage Pictures</source>
        <translation>Bilder verwalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus - Image Search</source>
        <translation>Scribus-Bildersuche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The search failed: %1</source>
        <translation>Die Suche war nicht erfolgreich: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation>Keine Bilder mit dem Namen &quot;%1&quot; gefunden .</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select a base directory for search</source>
        <translation>Startverzeichnis für Suche auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search Directory</source>
        <translation>Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set a new location for the selected items. Useful when you may have moved the document but not the images.</source>
        <translation>Wählen Sie ein neues Verzeichnis für die gewählten Bilddateien. Nützlich, wenn Sie das Dokument, aber nicht die Bilder verschoben haben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select a base directory for your selected rows</source>
        <translation>Wählen Sie ein Basisverzeichnis für die ausgewählten Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Case insensitive search</source>
        <translation>Gross-/Kleinschreibung nicht beachten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows</source>
        <translation>Das Dateisystem wird ohne Berücksichtigung von Gross- und Kleinbuchstaben durchsucht, wenn Sie diese Option wählen. Beachten Sie, dass dies bei den meisten Betriebssystemen ausser Windows unüblich ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show thumbnails</source>
        <translation>Vorschaubilder anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show/hide image thumbnails</source>
        <translation>Vorschaubilder anzeigen/verbergen</translation>
    </message>
</context>
<context>
    <name>PixmapExportPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as &amp;Image...</source>
        <translation>Als &amp;Bild speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export As Image</source>
        <translation>Als Bild exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exports selected pages as bitmap images.</source>
        <translation>Exportiert die ausgewählten Seiten als Bitmap-Dateien.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as Image</source>
        <translation>Als Bild speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error writing the output file(s).</source>
        <translation>Fehler beim Schreiben der Datei(en).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export successful</source>
        <translation>Export erfolgreich</translation>
    </message>
</context>
<context>
    <name>PluginManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot find plugin</source>
        <comment>plugin manager</comment>
        <translation>PlugIn ist nicht vorhanden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation>Unbekannter Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation>Kann das Symbol %1 nicht finden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation>Lade Plug-In %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation>Laden fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation>Unbekannter Plug-In-Typ</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation>PlugIn: %1 geladen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation>PlugIn: %1 konnte geladen werden: %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin: %1 initialized ok </source>
        <comment>plugin manager</comment>
        <translation>Plugin: %1 korrekt initialisiert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin: %1 failed post initialization</source>
        <comment>plugin manager</comment>
        <translation>Plugin: %1 Fehler nach dem Initialisieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
        <translation>Es ist ein Problem beim Laden von %1 von %2 Plugins aufgetreten. %3 Wahrscheinlich liegt ein Abhängigkeitsproblem vor, oder es existieren noch ältere Plugins in Ihrem Installationsverzeichnis. Wenn Sie das Installationsverzeichnis löschen, Scribus anschliessend neu installieren und das Problem dann immer noch auftritt, melden Sie den Fehler bitte auf bugs.scribus.net.</translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin Manager</source>
        <translation>PlugIn-Manager</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin</source>
        <translation>PlugIn</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>How to run</source>
        <translation>Aufruf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load it?</source>
        <translation>Laden?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugin ID</source>
        <translation>PlugIn-ID</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You need to restart the application to apply the changes.</source>
        <translation>Sie müssen Scribus neu starten, damit die Änderungen wirksam werden.</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Polygon Properties</source>
        <translation>Polygon-Eigenschaften</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Corn&amp;ers:</source>
        <translation>Ec&amp;ken:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Rotation:</source>
        <translation>&amp;Drehung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply &amp;Factor</source>
        <translation>Faktor über&amp;nehmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Factor:</source>
        <translation>Fa&amp;ktor:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of corners for polygons</source>
        <translation>Zahl der Ecken des Polygons</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Degrees of rotation for polygons</source>
        <translation>Grad der Drehung des Polygons</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Hier stellen Sie ein, wie stark konvex oder konkav das Polygon gezeichnet wird</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample Polygon</source>
        <translation>Vorschau der gewählten Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation>Ein negativer Wert steht für eine konkave (sternförmige) Figur, ein positiver Wert für eine konvexe Form</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Preferences</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tools</source>
        <translation>Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scrapbook</source>
        <translation>Bibliothek</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Guides</source>
        <translation>Hilfslinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Typography</source>
        <translation>Typographie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display</source>
        <translation>Anzeige</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>External Tools</source>
        <translation>Externe Tools</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hyphenator</source>
        <translation>Silbentrennung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fonts</source>
        <translation>Schriften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Management</source>
        <translation>Farbmanagement</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Export</source>
        <translation>PDF-Export</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Item Attributes</source>
        <translation>Eigenschaften des Dokumentobjekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Table of Contents and Indexes</source>
        <translation>Inhaltsverzeichnisse
und 
Indizes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keyboard Shortcuts</source>
        <translation>Tastenkürzel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Miscellaneous</source>
        <translation>Verschiedenes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Plugins</source>
        <translation>Plug-Ins</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preflight Verifier</source>
        <translation>Druckvorstufenüberprüfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer</source>
        <translation>Drucker</translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Defaults</source>
        <translation>&amp;Standards laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save Preferences</source>
        <translation>Einstellungen speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export...</source>
        <translation>Exportieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Apply</source>
        <translation>An&amp;wenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All preferences can be reset here</source>
        <translation>Alle Einstellungen können hier zurückgesetzt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply all changes without closing the dialog</source>
        <translation>Alle Änderungen anwenden, ohne den Dialog zu schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export current preferences into file</source>
        <translation>Die aktuellen Einstellungen in einer Datei speichern</translation>
    </message>
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF 1.3</source>
        <translation>PDF 1.3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF 1.4</source>
        <translation>PDF 1.4</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF/X-3</source>
        <translation>PDF/X-3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Migrate Old Scribus Settings?</source>
        <translation>Sollen die Einstellungen aus älteren Scribus-Versionen übernommen werden?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation>Scribus hat eine bestehende Scribus 1.2-Konfigurationsdatei gefunden.
Möchten Sie diese in der neuen Scribus-Version verwenden?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation>Konnte Datei &quot;%1&quot; nicht öffnen, um in &quot;%2&quot; zu schreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation>Das Schreiben in die Datei &quot;%1&quot; ist fehlgeschlagen: QIODevice status code %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation>Konnte die Datei &quot;%1&quot; nicht öffnen: %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation>Konnte die XML-Datei &quot;%1&quot; nicht öffnen: %2 in Zeile %3, Spalte %4</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error Writing Preferences</source>
        <translation>Fehler beim Speichern der Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation>Scribus konnte die Einstellungen nicht speichern &lt;br&gt;%1&lt;br&gt;. Bitte überprüfen Sie die Zugriffsrechte für die Datei und das Verzeichnis sowie den verfügbaren Speicherplatz.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error Loading Preferences</source>
        <translation>Fehler beim Laden der Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation>Scribus konnte die Einstellungen nicht laden: &lt;br&gt;%1&lt;br&gt; Es werden die Standardeinstellungen geladen.</translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Magazine</source>
        <translation>Zeitschrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fibonacci</source>
        <translation>Fibonacci</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Golden Mean</source>
        <translation>Goldener Schnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Nine Parts</source>
        <translation>Neunerteilung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Gutenberg</source>
        <translation>Gutenberg</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>layout type</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You can select a predefined page layout here. &apos;None&apos; leave margins as is, Gutenberg sets margins classically. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation>Wählen Sie festgelegte Seitenlayouts. &quot;Keine&quot; verändert keine Einstellungen, &quot;Gutenberg&quot; setzt klassische Ränder, &quot;Magazine&quot; stellt alle Ränder auf den gleichen Wert. Massgeblich ist der Wert für Links/Innen.</translation>
    </message>
</context>
<context>
    <name>PythonConsole</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Open...</source>
        <translation>Ö&amp;ffnen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Exit</source>
        <translation>Ver&amp;lassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Run</source>
        <translation>Aus&amp;führen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save Output...</source>
        <translation>Aus&amp;gabe speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Script</source>
        <translation>S&amp;cript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Script Console</source>
        <translation>Script-Konsole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Write your commands here. A selection is processed as script</source>
        <translation>Schreiben Sie Ihre Befehle hier. Markierte Befehle werden als Script ausgeführt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output of your script</source>
        <translation>Ausgabe des Scripts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save the Python Commands in File</source>
        <translation>Python-Befehle in Datei schreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Files (*.txt)</source>
        <translation>Text-Dateien (*.txt)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save Current Output</source>
        <translation>Aktuelle Ausgabe speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save &amp;As...</source>
        <translation>Speichern &amp;unter...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Run As &amp;Console</source>
        <translation>In &amp;Konsole ausführen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Python Console</source>
        <translation>Scribus Python-Konsole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
        <translation>Dies stammt von der normalen Python-Konsole, weshalb es einige Einschränkungen enthält, vor allem im Bereich Leerzeichen. Bitte lesen Sie das Scribus-Handbuch, um weitere Informationen zu erhalten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open Python Script File</source>
        <translation>Python-Script öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Python Scripts (*.py *.PY)</source>
        <translation>Python Scripts (*.py *.PY)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line: %1 Column: %2</source>
        <translation>Zeile: %1 Spalte: %2</translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Hu&amp;e:</source>
        <translation>Farb&amp;ton:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Sat:</source>
        <translation>&amp;Sättigung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Val:</source>
        <translation>&amp;Val:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Red:</source>
        <translation>&amp;Rot:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Green:</source>
        <translation>&amp;Grün:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bl&amp;ue:</source>
        <translation>Bla&amp;u:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A&amp;lpha channel:</source>
        <translation>A&amp;lphakanal:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Basic colors</source>
        <translation>Grundfar&amp;ben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Custom colors</source>
        <translation>&amp;Benutzerdefinierte Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>
Eigene Farben &amp;definieren &gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add to Custom Colors</source>
        <translation>Zu benutzerdefinierten Farben &amp;hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select color</source>
        <translation>Farbe wählen</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy or Move a File</source>
        <translation>Datei kopieren oder verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Read: %1</source>
        <translation>Lesen: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Write: %1</source>
        <translation>Schreiben: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File &amp;name:</source>
        <translation>&amp;Dateiname:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File &amp;type:</source>
        <translation>Datei&amp;typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>One directory up</source>
        <translation>Eine Verzeichnis nach oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Files (*)</source>
        <translation>Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size</source>
        <translation>Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Attributes</source>
        <translation>Attribute</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Look &amp;in:</source>
        <translation>Su&amp;chen in:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Back</source>
        <translation>Zurück</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create New Folder</source>
        <translation>Neuen Ordner erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>List View</source>
        <translation>Liste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Detail View</source>
        <translation>Ausführlich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview File Info</source>
        <translation>Dateiinformation anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview File Contents</source>
        <translation>Vorschau der Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Read-write</source>
        <translation>Lesen/Schreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Read-only</source>
        <translation>Nur lesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Write-only</source>
        <translation>Nur schreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inaccessible</source>
        <translation>Gesperrt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Symlink to File</source>
        <translation>Link auf Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Symlink to Directory</source>
        <translation>Link auf Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Symlink to Special</source>
        <translation>Link auf Spezielle Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dir</source>
        <translation>Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Special</source>
        <translation>Spezialattribut</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save As</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Open</source>
        <translation>Ö&amp;ffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Rename</source>
        <translation>&amp;Umbenennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>R&amp;eload</source>
        <translation>Erne&amp;ut laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sort by &amp;Name</source>
        <translation>Nach &amp;Namen sortieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sort by &amp;Size</source>
        <translation>Nach &amp;Grösse sortieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sort by &amp;Date</source>
        <translation>Nach &amp;Datum sortieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Unsorted</source>
        <translation>&amp;Unsortiert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sort</source>
        <translation>Sortieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;hidden files</source>
        <translation>&amp;Versteckte Dateien anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>the file</source>
        <translation>die Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>the directory</source>
        <translation>das Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>the symlink</source>
        <translation>der symbolische Link</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete %1</source>
        <translation>%1 löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Sind Sie sicher, dass Sie %1 &quot;%2&quot; löschen möchten?&lt;/qt&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Folder 1</source>
        <translation>Neues Verzeichnis 1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Folder</source>
        <translation>Neues Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Folder %1</source>
        <translation>Neues Verzeichnis %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Find Directory</source>
        <translation>Verzeichnis suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Directories</source>
        <translation>Verzeichnisse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save</source>
        <translation>Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Files (*.*)</source>
        <translation>Alle Dateien (*.*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select a Directory</source>
        <translation>Wählen Sie ein Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Directory:</source>
        <translation>Verzeichnis:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Datei wurde nicht gefunden.
Überprüfen Sie Pfad- und Dateinamen.</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Font</source>
        <translation>Schrift&amp;art</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font st&amp;yle</source>
        <translation>&amp;Formatierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size</source>
        <translation>&amp;Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Effects</source>
        <translation>Effekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stri&amp;keout</source>
        <translation>Du&amp;rchgestrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Underline</source>
        <translation>&amp;Unterstrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Color</source>
        <translation>&amp;Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample</source>
        <translation>Vorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scr&amp;ipt</source>
        <translation>&amp;Script</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply</source>
        <translation>Anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select Font</source>
        <translation>Schriftart auswählen</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Clear</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select All</source>
        <translation>Alles auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo</source>
        <translation>&amp;Rückgängig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cu&amp;t</source>
        <translation>&amp;Ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paste</source>
        <translation>Einf&amp;ügen</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Line up</source>
        <translation>Ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Customize...</source>
        <translation>Anpassen...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Über Qt&lt;/h3&gt;&lt;p&gt;Dieses Programm verwendet Qt Version %1&lt;/p&gt;&lt;p&gt;Qt ist ein platformübergreifendes Framework zum Erstellen von GUI-Programmen in C++.&lt;/p&gt;&lt;p&gt;Qt bietet Portierungsmöglichkeiten mit nur einer Quellcode-Basis auf MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux und allen anderen grossen kommerziellen Unix-Versionen.&lt;br&gt;Qt ist auch für eingebettete Systeme erhältlich.&lt;/p&gt;&lt;p&gt;Qt ist ein Produkt von Trolltech. Weitere Informationen finden Sie unter &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Initializing...</source>
        <translation>Initialisierung...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Background</source>
        <translation>Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Wollen Sie die Datei
%1
wirklich überschreiben?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>SVG-Bilder (*.svg *.svgz);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>SVG-Bilder (*.svg);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Newsletters</source>
        <translation>Newsletter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Brochures</source>
        <translation>Broschüren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Catalogs</source>
        <translation>Kataloge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flyers</source>
        <translation>Flyer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Signs</source>
        <translation>Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cards</source>
        <translation>Karten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Letterheads</source>
        <translation>Briefköpfe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Envelopes</source>
        <translation>Briefumschläge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Business Cards</source>
        <translation>Visitenkarten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Calendars</source>
        <translation>Kalender</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Advertisements</source>
        <translation>Werbung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Labels</source>
        <translation>Beschriftungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Menus</source>
        <translation>Menüs</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Programs</source>
        <translation>Programme</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Forms</source>
        <translation>PDF-Formulare</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Magazines</source>
        <translation>Zeitschriften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Posters</source>
        <translation>Poster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Announcements</source>
        <translation>Ankündigungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Documents</source>
        <translation>Textdokumente</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Folds</source>
        <translation>Hefter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Own Templates</source>
        <translation>Eigene Vorlagen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Presentations</source>
        <translation>PDF-Präsentationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Scribus Scripts</source>
        <translation>&amp;Scripte für Scribus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Execute Script...</source>
        <translation>Script &amp;ausführen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Recent Scripts</source>
        <translation>&amp;Zuletzt verwendete Scripte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show &amp;Console</source>
        <translation>&amp;Konsole zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Files (*)</source>
        <translation>Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Importing text</source>
        <translation>Text importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Supported Formats</source>
        <translation>Alle unterstützten Formate</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>HTML Files</source>
        <translation>HTML-Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Files</source>
        <translation>Textdateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Comma Separated Value Files</source>
        <translation>Kommaseparierte Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CSV_data</source>
        <translation>CVS_data</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CSV_header</source>
        <translation>CSV_header</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>
External Links
</source>
        <translation>
Externe Links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 is broken, discarding it</source>
        <translation>Die Schrift %1 ist fehlerhaft und wird ab sofort ignoriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Filters</source>
        <translation>Textfilter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Media Cases</source>
        <translation>Cover</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Albanian</source>
        <translation>Albanisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Basque</source>
        <translation>Baskisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bulgarian</source>
        <translation>Bulgarisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Catalan</source>
        <translation>Katalanisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Chinese</source>
        <translation>Chinesisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Czech</source>
        <translation>Tschechisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Danish</source>
        <translation>Dänisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dutch</source>
        <translation>Niederländisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>English</source>
        <translation>Englisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>English (British)</source>
        <translation>Englisch (GB)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>German</source>
        <translation>Deutsch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Finnish</source>
        <translation>Finnisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>French</source>
        <translation>Französisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Galician</source>
        <translation>Galizisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Greek</source>
        <translation>Griechisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hungarian</source>
        <translation>Ungarisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Indonesian</source>
        <translation>Indonesisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Italian</source>
        <translation>Italienisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Korean</source>
        <translation>Koreanisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lithuanian</source>
        <translation>Litauisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Norwegisch (Nnyorsk)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Norwegian</source>
        <translation>Norwegisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polish</source>
        <translation>Polnisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Russian</source>
        <translation>Russisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Swedish</source>
        <translation>Schwedisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Spanish</source>
        <translation>Spanisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Spanish (Latin)</source>
        <translation>Spanisch (Lateinamerika)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Slovak</source>
        <translation>Slowakisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Slovenian</source>
        <translation>Slovenisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Serbian</source>
        <translation>Serbisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;About Script...</source>
        <translation>Ü&amp;ber das Script...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>About Script</source>
        <translation>Über das Script</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Keine Farbbezeichnung angegeben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Umbenennen einer Farbe ohne Bezeichnung fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kann keine Farbe ohne Bezeichnung erstellen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kann keine Farbe ohne Bezeichnung löschen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kann keine Farbe ohne Bezeichnung ersetzen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation>Einheit ausserhalb des Bereichs. Benutzen Sie eine der UNIT_*-Konstanten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>Ziel ist kein Bildrahmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>Eckenradius muss positiv sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann die Schriftgrösse nur von Textrahmen bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann Schrift nur von Textrahmen bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann die Grösse des Textes nur von Textrahmen bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann die Spaltenanzahl nur von Textrahmen bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann den Zeilenabstand nur von Textrahmen bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann den Spaltenabstand nur von Textrahmen bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann Text nur von Textrahmen auslesen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann Text nur in Textrahmen schreiben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Kann Text nur in Textrahmen anfügen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Ausrichtung nicht gültig. Verwenden Sie eine der scribus.ALIGN*-Konstanten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Auswahlindex ausserhalb des gültigen Bereichs</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation>Objekt ist kein verketteter Textrahmen, also kann die Verkettung nicht gelöst werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation>Kann den letzten Rahmen einer Kette nicht abtrennen. Lösen Sie erst die Verkettung der anderen Rahmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenOffice.org Writer Documents</source>
        <translation>OpenOffice.org Writer-Dokumente</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Farbe nicht gefunden - Python-Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Benutzerdefinierte (optionale) Konfiguration:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Standardkonfiguration:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>Die Umbruchkontrolle untersucht den Text. Bitte haben Sie einen Moment Geduld...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Die Umbruchkontrolle ist abgeschlossen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Afrikaans</source>
        <translation>Afrikaans</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turkish</source>
        <translation>Türkisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ukranian</source>
        <translation>Ukrainisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Welsh</source>
        <translation>Walisisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation>Der Dateiname muss eine Zeichenfolge sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation>Kann den Bildtyp nicht löschen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation>Der Bildtyp muss eine Zeichenfolge sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation>&apos;allTypes&apos; kann nicht verändert werden (Read-Only)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation>Beim Export des Bildes sind Fehler aufgetreten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation>Farbe nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation>Die Farbe ist im Dokument nicht vorhanden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation>Die Farbe ist in den Standardfarben nicht vorhanden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation>Skalieren auf 0% ist nicht möglich.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation>Angegebener Rahmen ist kein Bildrahmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation>Schrift nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation>Leere Objekte können nicht gerendert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation>Der Name der Ebene darf nicht leer sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation>Die Ebene wurde nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation>Die letzte Ebene kann nicht entfernt werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation>Kann keine Ebene ohne Namen erstellen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation>Index ist ausserhalb des gültigen Bereichs.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Die Textrichtung lässt sich nur für Textrahmen festlegen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation>Schriftgrösse ausserhalb des Bereichs - gültig sind Werte zwischen 1 und 512.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Schriftgrösse kann nur für Textrahmen geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Schrift kann nur für Textrahmen geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation>Zeilenabstand ist muss grösser oder gleich 0,1 sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Zeilenabstand kann nur für Textrahmen geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation>Spaltenanzahl darf nicht negativ sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Spaltenabstand kann nur für Textrahmen geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation>Spaltenanzahl muss grösser gleich 1 sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Anzahl der Spalten kann nur für Textrahmen geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation>Text kann nur in einem Textrahmen ausgewählt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation>Text kann nur in einem Textrahmen gelöscht werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Füllfarbe des Textes kann nur für Textrahmen geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Text kann nur in Textrahmen als durchgestrichen formatiert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Text kann nur in Textrahmen als schattiert formatiert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation>Nur Textrahmen können verkettet werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation>Der Zielrahmen muss leer sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation>Zielrahmen ist schon mit einem anderen Rahmen verknüpft.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation>Zielrahmen wird schon von einem anderen Textrahmen als Ziel benutzt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation>Quell- und Zielrahmen sind das gleiche Objekt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation>Nur für Textrahmen kann eine Verkettung aufgelöst werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation>Nur Textrahmen können in Umrisse konvertiert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation>Nur Textrahmen können Lesezeichen besitzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation>Nur Textrahmen geben Informationen zurück</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenDocument Text Documents</source>
        <translation>OpenDocument-Textdateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Croatian</source>
        <translation>Kroatisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portuguese</source>
        <translation>Portugiesisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portuguese (BR)</source>
        <translation>Portugiesisch (BR)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Crash</source>
        <translation>Scribus ist abgestürzt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Absturz durch Signal #%1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page</source>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Master Page </source>
        <translation>Musterseite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>4A0</source>
        <translation>4A0</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>2A0</source>
        <translation>2A0</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Comm10E</source>
        <translation>Comm10E</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>DLE</source>
        <translation>DLE</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Could not open output file %1</source>
        <translation>Kann die Ausgabedatei %1 nicht öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output stream not writeable</source>
        <translation>Ausgabe kann nicht geschrieben werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Verification of settings failed: %1</source>
        <translation>Überprüfung der Einstellungen fehlgeschlagen: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Could not open input file %1</source>
        <translation>Die Datei %1 kann nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unable to read settings XML:</source>
        <translation>Fehler beim Lesen der XML-Einstellungen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation>%1 (Zeile %2 Spalte %3)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unable to read settings XML: %1</source>
        <translation>Fehler beim Lesen der XML-Einstellungen: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation>null root node</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation>&lt;pdfVersion&gt; ist ungültig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>found %1 &lt;%2&gt; nodes, need 1.</source>
        <comment>Load PDF settings</comment>
        <translation>found %1 &lt;%2&gt; nodes, need 1.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>unexpected null &lt;%2&gt; node</source>
        <comment>Load PDF settings</comment>
        <translation>unexpected null &lt;%2&gt; node</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>node &lt;%1&gt; not an element</source>
        <comment>Load PDF settings</comment>
        <translation>node &lt;%1&gt; not an element</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>element &lt;%1&gt; lacks `value&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation>element &lt;%1&gt; lacks `value&apos; attribute</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>element &lt;%1&gt; value must be `true&apos; or `false&apos;</source>
        <comment>Load PDF settings</comment>
        <translation>element &lt;%1&gt; value must be `true&apos; or `false&apos;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Freetype2 library not available</source>
        <translation>Freetype2-Bibliotheken sind nicht verfügbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation>Die Schrift %1 ist fehlerhaft und kann nicht eingebettet werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 is broken (no Face), discarding it</source>
        <translation>Schrift %1 ist fehlerhaft (kein Schnitt) und wird verworfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation>Die Schrift %1 enthält das fehlerhafte Zeichen %2 (Code %3)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 cannot be read, no embedding</source>
        <translation>Die Schrift %1 kann nicht gelesen werden und wird nicht eingebettet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to load font %1 - font type unknown</source>
        <translation>Fehler beim Laden der Schrift %1 - Typ unbekannt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 loaded from %2(%3)</source>
        <translation>Schrift %1 geladen von %2(%3)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1(%2) is duplicate of %3</source>
        <translation>Die Schrift %1(%2) ist ein Duplikat von %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Loading font %1 (found using fontconfig)</source>
        <translation>Schrift %1 wird geladen (erkannt von fontconfig)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation>Fehler beim Laden einer Schrift - FreeType2 konnte die Datei nicht finden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
        <translation>lese Schnitt %1 der Schrift %2 (offset=%3, nTables=%4)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>memcpy header: %1 %2 %3</source>
        <translation>memcpy header: %1 %2 %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>table &apos;%1&apos;</source>
        <translation>Tabelle &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>memcpy table: %1 %2 %3</source>
        <translation>memcpy table: %1 %2 %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>memcpy offset: %1 %2 %3</source>
        <translation>memcpy offset: %1 %2 %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Development Version</source>
        <translation>Scribus-Entwickerversion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> in</source>
        <translation> in</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> p</source>
        <translation> p</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>cm</source>
        <translation>cm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Points (pt)</source>
        <translation>Punkte (pt)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Millimeters (mm)</source>
        <translation>Millimeter (mm)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inches (in)</source>
        <translation>Zoll (in)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Picas (p)</source>
        <translation>Picas (p)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Centimeters (cm)</source>
        <translation>Zentimeter (cm)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File exists</source>
        <translation>Datei existiert bereits</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Replace</source>
        <translation>&amp;Ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Template: </source>
        <translation>Dokumentvorlagen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation>Fehler beim Öffnen des Dokuments.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation>Fehler beim Speichern des Dokuments.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation>Das Argument muss entweder ein Seiteneintrag oder eine Instanz von PyCObject sein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Property not found</source>
        <translation>Eigenschaft nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Child not found</source>
        <translation>Kind nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation>Kann den Ergebnistyp &apos;%1&apos; nicht konvertieren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation>Eigenschaft &apos;%1&apos; wird nicht unterstützt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation>Konnte &apos;%1&apos; nicht nach &apos;%2&apos; konvertieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Types matched, but setting property failed.</source>
        <translation>Types matched, but setting property failed.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation>Zum Gruppieren müssen mindestens zwei Objekte vorhanden sein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation>Zum Gruppieren müssen mindestens zwei Objekte vorhanden sein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation>Need selection or argument list of items to group</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation>Pixmap kann nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation>Es existiert bereits ein Objekt mit diesem Namen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation>Point list must contain at least two points (four values).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation>Point list must contain an even number of values.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation>Point list must contain at least three points (six values).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation>Point list must contain at least four points (eight values).</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation>Point list must have a multiple of six values.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation>Objekt nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation>Stil nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Ein Stil kann nur auf ein Textrahmen angewendet werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation>Fehler beim Speichern der EPS-Datei.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation>Seitenzahl ist ausserhalb des gültigen Bereichs.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation>argument is not list: must be list of float values.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation>argument contains non-numeric values: must be list of float values.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation>argument contains no-numeric values: must be list of float values.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation>Linienstil nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation>Nur Textrahmen können auf Überfüllung geprüft werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Script</source>
        <translation>Sc&amp;ript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
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
- Many functions will raise a NoDocOpenError if you try to use them
without a document to operate on.
- If you do not pass a frame name to a function that requires one,
the function will use the currently selected frame, if any, or
raise a NoValidObjectError if it can&apos;t find anything to operate
on.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation, though as with most Python code this list
is not exhaustive due to exceptions from called functions.
</source>
        <translation>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use them
without a document to operate on.
- If you do not pass a frame name to a function that requires one,
the function will use the currently selected frame, if any, or
raise a NoValidObjectError if it can&apos;t find anything to operate
on.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation, though as with most Python code this list
is not exhaustive due to exceptions from called functions.
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> c</source>
        <translation>c</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>c</source>
        <translation>c</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cicero (c)</source>
        <translation>Cicero (c)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation>Der Dateiname darf nicht leer sein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>page</source>
        <comment>page export</comment>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Black</source>
        <translation>Schwarz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cyan</source>
        <translation>Cyan</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Yellow</source>
        <translation>Gelb</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Wheel</source>
        <translation>Farbkreis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Preview</source>
        <translation>Schriftenvorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>My Plugin</source>
        <translation>Mein Plug-In</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New From Template</source>
        <translation>Neu von Vorlage</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PS/EPS Importer</source>
        <translation>PS/EPS-Importer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save As Template</source>
        <translation>Als Vorlage speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scripter</source>
        <translation>Scripter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Short Words</source>
        <translation>Umbruchkontrolle für Abkürzungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>SVG Export</source>
        <translation>SVG-Export</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>SVG Import</source>
        <translation>SVG-Import</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenOffice.org Draw Importer</source>
        <translation>OpenOffice.org Draw-Importer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation>Scribus ist wegen der Ausnahme %1 abgestürzt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Creating Font Cache</source>
        <translation>Fontcache wird erstellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Font found, checking...</source>
        <translation>Neue Schrift gefunden, Überprüfung läuft...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Modified Font found, checking...</source>
        <translation>Geänderte Schrift gefunden, Überprüfung läuft...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reading Font Cache</source>
        <translation>Fontcache wird gelesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Writing updated Font Cache</source>
        <translation>Aktualisierter Fontcache wird geschrieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Searching for Fonts</source>
        <translation>Suche nach Schriften läuft</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation>Die Änderungen am Dokument wurden nicht gesichert, und Sie möchten zur gespeicherten Version zurückkehren. Wollen Sie das wirklich?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation>Eine Datei mit dem Namen &apos;%1&apos; ist schon vorhanden.&lt;br/&gt;Wollen Sie diese Datei mit dem aktuellen Dokument ersetzen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation>firstPageOrder ist grösser als erlaubt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Old .sla format support</source>
        <translation>Unterstützung für das alte .sla-Format</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>German (Trad.)</source>
        <translation>Deutsch (herkömmlich)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exporting PostScript File</source>
        <translation>Postscript Datei erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printing File</source>
        <translation>Datei drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation>&lt;p&gt;Sie versuchen, mehr Seiten zu importieren, als ab der aktuellen Seite im Dokument vorhanden sind.&lt;/p&gt;Was wollen Sie tun?&lt;br&gt;&lt;ul&gt;&lt;li&gt;Fehlende Seiten &lt;b&gt;erstellen&lt;/b&gt;&lt;/li&gt;&lt;li&gt;Import bei der letzten Seite &lt;b&gt;stoppen&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;b&gt;Abbrechen&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;reate</source>
        <translation>Er&amp;stellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Thai</source>
        <translation>Thai</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Barcode Generator</source>
        <translation>Strichcode-Generator</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation>OpenOffice.org-Zeichnung (*.sxd *.odg);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Word Documents</source>
        <translation>Worddateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation>Palm PDB-Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation>PDB_data</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation>PDB-Importer</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation>Fehler beim Öffnen der Datei %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Luxembourgish</source>
        <translation>Luxemburgisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Japanese</source>
        <translation>Japanisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation>Der Name der Musterseite entspricht keinem bereits existierenden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1(%2) is broken</source>
        <translation>Die Schriftart %1(%2) ist fehlerhaft</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arabic</source>
        <translation>Arabisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dzongkha</source>
        <translation>Dzongkha</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Estonian</source>
        <translation>Estnisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>font %1 </source>
        <translation>Schriftart %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>size %1 </source>
        <translation>Grösse %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+style </source>
        <translation>+Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+color </source>
        <translation>+Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+underline </source>
        <translation>+unterstrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>-underline </source>
        <translation>-unterstrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+strikeout </source>
        <translation>
+durchgestrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>-strikeout </source>
        <translation>-durchgestrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+shadow </source>
        <translation>+Schatten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>-shadow </source>
        <translation>-Schatten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+outline </source>
        <translation>+Umrandung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>-outline </source>
        <translation>-Umrandung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>-tracking </source>
        <translation>-Zeichenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+stretch </source>
        <translation>+Streckung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>parent= %1</source>
        <translation>Eltern= %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Latin</source>
        <translation>Latein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Icelandic</source>
        <translation>Isländisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Norwegian (Bokm&#xc3;&#xa5;l)</source>
        <translation>Norwegisch (Bokmål)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Romanian</source>
        <translation>Rumänisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quarto</source>
        <translation>Quarto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Foolscap</source>
        <translation>Kanzleipapier</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Letter</source>
        <translation>US-Letter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Govt. Letter</source>
        <translation>Govt. Letter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ledger</source>
        <translation>Ledger</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Executive</source>
        <translation>Executive</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Post</source>
        <translation>Post</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Crown</source>
        <translation>Crown</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Large Post</source>
        <translation>Large Post</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Demy</source>
        <translation>Demy</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Medium</source>
        <translation>Medium</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Royal</source>
        <translation>Royal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Elephant</source>
        <translation>Elephant</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Demy</source>
        <translation>Double Demy</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quad Demy</source>
        <translation>Quad Demy</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>STMT</source>
        <translation>STMT</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A</source>
        <translation>A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>B</source>
        <translation>B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D</source>
        <translation>D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 may be corrupted : missing resolution tags</source>
        <translation>%1 Könnte beschädigt sein: Fehlende Auflösungs-Tags</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font %1 has broken glyph %2</source>
        <translation>Schrift %1 enthält das defekte Zeichen %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
        <comment>python error</comment>
        <translation>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blendmode out of bounds, must be 0 &lt;= blendmode &lt;= 15.</source>
        <comment>python error</comment>
        <translation>Blendmode out of bounds, must be 0 &lt;= blendmode &lt;= 15.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.2.x Support</source>
        <translation>Scribus 1.2.x Support</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.3.4 Support</source>
        <translation>Scribus 1.3.4 Support</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation>Dies scheint kein PDB-Dokument zu sein. Bitte melden Sie den Fehler, wenn Sie sicher sind, dass es doch eines ist.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.x.  Saving the current file under 1.3.x renders it unable to be edited in Scribus 1.2.x versions. To preserve the ability to edit in 1.2.x, save this file under a different name and further edit the newly named file and the original will be untouched. Are you sure you wish to proceed with this operation?</source>
        <translation>Sie arbeiten mit einer Entwicklerversion von Scribus 1.3.x. Das Dokument, mit dem Sie arbeiten, wurde mit Scribus 1.2.x oder niedriger erstellt. Wenn Sie jetzt speichern, können Sie die Datei nicht mehr in Scribus 1.2.x verwenden, es sei denn, Sie speichern diese Datei unter einem anderen Namen. Wollen Sie wirklich fortfahren?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+tracking %1 </source>
        <translation>+Abstand %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>+baseline %1 </source>
        <translation>+Grundlinie %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot get number of lines of non-text frame.</source>
        <comment>python error</comment>
        <translation>Die Anzahl der Zeilen lässt sich nur in Textrahmen ermitteln.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Breton</source>
        <translation>Bretonisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>English (American)</source>
        <translation>Englisch (USA)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 may be corrupted : missing or wrong resolution tags</source>
        <translation>%1 könnte beschädigt sein: Fehlende oder falsche Auflösungstags</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The Font(s):
%1 are not available.
They have been replaced by &quot;Courier&quot;
Therefore the image may be not correct</source>
        <translation>Schrift(en)
%1 nicht verfügbar
Sie wurde(n) mit &quot;Courier&quot; ersetzt.
Das Bild könnte daher nicht richtig dargestellt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>English (Australian)</source>
        <translation>Englisch (Australien)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Supported Formats (*.eps *.EPS *.epsi *.EPSI *.ps *.PS);;</source>
        <translation>Alle unterstützten Formate (*.eps *.EPS *.epsi *.EPSI *.ps *.PS);;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>German (Swiss)</source>
        <translation>Deutsch (Schweiz)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hebrew</source>
        <translation>Hebräisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.3.0-&gt;1.3.3.7 Support</source>
        <translation>Unterstützung für Scribus 1.3.0-&gt;1.3.3.7</translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Clear</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select All</source>
        <translation>Alles auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo</source>
        <translation>&amp;Rückgängig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cu&amp;t</source>
        <translation>&amp;Ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paste</source>
        <translation>Einf&amp;ügen</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <location filename="" line="136643300"/>
        <source>System Menu</source>
        <translation>System-Menü</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shade</source>
        <translation>Aufrollen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unshade</source>
        <translation>Herabrollen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normalize</source>
        <translation>Wiederherstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Minimize</source>
        <translation>Minimieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Maximize</source>
        <translation>Maximieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Restore</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Move</source>
        <translation>Ver&amp;schieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size</source>
        <translation>&amp;Grösse ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mi&amp;nimize</source>
        <translation>M&amp;inimieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stay on &amp;Top</source>
        <translation>Im &amp;Vordergrund halten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Minimize</source>
        <translation>Minimieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Restore Down</source>
        <translation>Wiederherstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sh&amp;ade</source>
        <translation>&amp;Aufrollen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Unshade</source>
        <translation>&amp;Herabrollen</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Setup</source>
        <translation>Dokument einrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Information</source>
        <translation>Dokumentinformationen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Guides</source>
        <translation>Hilfslinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display</source>
        <translation>Anzeige</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Typography</source>
        <translation>Typographie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tools</source>
        <translation>Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hyphenator</source>
        <translation>Silbentrennung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fonts</source>
        <translation>Schriften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF Export</source>
        <translation>PDF-Export</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Item Attributes</source>
        <translation>Eigenschaften des Dokumentobjekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Table of Contents and Indexes</source>
        <translation>Inhaltsverzeichnisse und Indizes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Management</source>
        <translation>Farbmanagement</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preflight Verifier</source>
        <translation>Druckvorstufenüberprüfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Adjusting Colors</source>
        <translation>Farben anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sections</source>
        <translation>Abschnitte</translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation>Als Erweiterungsscript ausführen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Python Scripts (*.py *.PY);; All Files (*)</source>
        <translation>Python Scripts (*.py *.PY);; Alle Dateien (*)</translation>
    </message>
</context>
<context>
    <name>SMAlignSelect</name>
    <message>
        <location filename="" line="136643300"/>
        <source>P</source>
        <comment>P as in Parent</comment>
        <translation>V</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use parent style&apos;s alignment instead of overriding it</source>
        <translation>Verwenden Sie die Ausrichtung des verknüpften Stils, anstatt sie zu ignorieren</translation>
    </message>
</context>
<context>
    <name>SMBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Style Manager</source>
        <translation>Stilverwaltung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+N</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Apply</source>
        <translation>An&amp;wenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Clone</source>
        <translation>&amp;Klon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Please select a unique name for the style</source>
        <translation>Bitte wählen Sie einen eindeutigen Namen für den Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;&lt; &amp;Done</source>
        <translation>&lt;&lt; &amp;Fertig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Reset</source>
        <translation>&amp;Zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+R</source>
        <translation>Alt+Z</translation>
    </message>
</context>
<context>
    <name>SMCStylePage</name>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation>Pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent</source>
        <translation>Verknüpfung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent style</source>
        <translation>Übergeordneter Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font face</source>
        <translation>Schriftschnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font size</source>
        <translation>Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tracking</source>
        <translation>Zeichenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Baseline offset</source>
        <translation>Grundlinienversatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal scaling</source>
        <translation>Zeichenbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical scaling</source>
        <translation>Zeichenhöhe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Language</source>
        <translation>Sprache</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill color</source>
        <translation>Füllfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill shade</source>
        <translation>Tonwert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stroke color</source>
        <translation>Umrissfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stroke shade</source>
        <translation>Tonwert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shade</source>
        <translation>Tonwert</translation>
    </message>
</context>
<context>
    <name>SMCharacterStyle</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character Styles</source>
        <translation>Zeichenstile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character Style</source>
        <translation>Zeichenstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Style</source>
        <translation>Neuer Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clone of %1</source>
        <translation>Klon von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>SMColorCombo</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Parent Value</source>
        <translation>Den verknüpften Wert verwenden</translation>
    </message>
</context>
<context>
    <name>SMFontComboH</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Parent Font</source>
        <translation>Die verknüpfte Schrift verwenden</translation>
    </message>
</context>
<context>
    <name>SMLineStyle</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Styles</source>
        <translation>Linienstile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Style</source>
        <translation>Linienstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Style</source>
        <translation>Neuer Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clone of %1</source>
        <translation>Klon von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation>Pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Solid Line</source>
        <translation>Durchgehend</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dashed Line</source>
        <translation>Gestrichelt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dotted Line</source>
        <translation>Gepunktet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dash Dot Line</source>
        <translation>Strich-Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dash Dot Dot Line</source>
        <translation>Strich-Punkt-Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt </source>
        <translation>Pt</translation>
    </message>
</context>
<context>
    <name>SMPStyleWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Fixed Linespacing</source>
        <translation>Fester Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic Linespacing</source>
        <translation>Automatischer Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align to Baseline Grid</source>
        <translation>Am Grundlinienraster ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation>Pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent</source>
        <translation>Verknüpfter Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distances and Alignment</source>
        <translation>Abstände und Ausrichtung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Drop Caps</source>
        <translation>Initialen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tabulators and Indentation</source>
        <translation>Tabulatoren und Einzüge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character Style</source>
        <translation>Zeichenstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Lines:</source>
        <translation>&amp;Zeilen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance from Text:</source>
        <translation>Abstand vom Text:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Based on</source>
        <translation>Basiert auf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Parent style</source>
        <translation>Übergeordneter Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line spacing mode</source>
        <translation>Art des Zeilenabstandes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line spacing</source>
        <translation>Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Space above</source>
        <translation>Abstand darüber</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Space below</source>
        <translation>Abstand darunter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable or disable drop cap</source>
        <translation>Initialen aktivieren oder deaktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Drop cap lines</source>
        <translation>Zeilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Drop cap offset</source>
        <translation>Versatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alignment</source>
        <translation>Ausrichtung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>First line indent</source>
        <translation>Einzug der ersten Zeile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left indent</source>
        <translation>Linker Einzug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right indent</source>
        <translation>Rechter Einzug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tabulators</source>
        <translation>Tabulatoren</translation>
    </message>
</context>
<context>
    <name>SMParagraphStyle</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraph Styles</source>
        <translation>Absatzstile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraph Style</source>
        <translation>Absatzstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Style</source>
        <translation>Neuer Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clone of %1</source>
        <translation>Klon von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>SMReplaceDia</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace with</source>
        <translation>Ersetzen durch</translation>
    </message>
</context>
<context>
    <name>SMReplaceDiaBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete Styles</source>
        <translation>Stil löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ca&amp;ncel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+N</source>
        <translation>Alt+B</translation>
    </message>
</context>
<context>
    <name>SMRowWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>No Style</source>
        <translation>Kein Stil</translation>
    </message>
</context>
<context>
    <name>SMScComboBox</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Parent Value</source>
        <translation>Verknüpften Wert verwenden</translation>
    </message>
</context>
<context>
    <name>SMShadeButton</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Parent Value</source>
        <translation>Verknüpften Wert verwenden</translation>
    </message>
</context>
<context>
    <name>SMStyleSelect</name>
    <message>
        <location filename="" line="136643300"/>
        <source>P</source>
        <comment>P as in Parent</comment>
        <translation>P</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use parent style&apos;s effects instead of overriding them</source>
        <translation>Den Wert des verknüpften Stils verwenden, anstatt ihn zu ignorieren</translation>
    </message>
</context>
<context>
    <name>SMTabruler</name>
    <message>
        <location filename="" line="136643300"/>
        <source> Parent Tabs </source>
        <translation>Verknüpfte Tabulatoren</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Style of current paragraph</source>
        <translation>Stilvorlage für aktuellen Absatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style Settings</source>
        <translation>Stil verändern</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of text fill</source>
        <translation>Textfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color of text fill</source>
        <translation>Tonwert der Textfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Color Settings</source>
        <translation>Füllfarbe verändern</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of text stroke</source>
        <translation>Textumrissfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color of text stroke</source>
        <translation>Tonwert der Textumrissfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stroke Color Settings</source>
        <translation>Umrissfarbe verändern</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font of selected text</source>
        <translation>Schrift des Objekts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Size</source>
        <translation>Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scaling width of characters</source>
        <translation>Zeichenbreiten skalieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Settings</source>
        <translation>Schrift verändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scaling height of characters</source>
        <translation>Zeichenhöhe ändern</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Character Settings</source>
        <translation>Zeicheneinstellungen bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Manual Tracking</source>
        <translation>Zeichenabstand anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Exports SVG Files</source>
        <translation>Exportiert SVG-Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exports the current page into an SVG file.</source>
        <translation>Exportiert die aktuelle Seite als SVG-Datei.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as &amp;SVG...</source>
        <translation>Als &amp;SVG speichern...</translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Import &amp;SVG...</source>
        <translation>&amp;SVG importieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Imports SVG Files</source>
        <translation>Importiere SVG-Dateien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>Importiert die meisten SVG-Dateien in das aktuelle Dokument
und wandelt deren Vektordaten in Scribus-Objekte um.
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scalable Vector Graphics</source>
        <translation>Scalable Vector Graphics</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>SVG file contains some unsupported features</source>
        <translation>Die SVG-Datei enthält einige nicht unterstützte Features</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The file could not be imported</source>
        <translation>Die Datei konnte nicht importiert werden</translation>
    </message>
</context>
<context>
    <name>SVGPlug</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Group%1</source>
        <translation>Gruppe%1</translation>
    </message>
</context>
<context>
    <name>SWDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Umbruchkontrolle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Anwenden auf:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>&amp;Markierte Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>Aktive &amp;Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>&amp;Alle Objekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Die markierten Rahmen wurden bearbeitet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Aktuelle Seite wurde bearbeitet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Alle Objekte wurden bearbeitet.</translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <location filename="" line="136643300"/>
        <source>User settings</source>
        <translation>Benutzerdefinierte Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>System wide configuration</source>
        <translation>Systemweite Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save</source>
        <translation>&amp;Speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Reset</source>
        <translation>&amp;Zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save user configuration</source>
        <translation>Benutzerdefinierte Konfiguration speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation>Systemweite Konfiguration laden und benutzerdefinierte Einstellungen entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation>Benutzerkonfiguration bearbeiten. Wenn Sie speichern, wird diese anstelle der globalen Konfiguration benutzt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Short Words</source>
        <translation>Abkürzungsassistent</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation>Es sind schon benutzerdefinierte Einstellungen vorhanden. Wollen Sie diese wirklich überschreiben?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot write file %1.</source>
        <translation>Fehler beim Schreiben der Datei %1.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>User settings saved</source>
        <translation>Benutzerdefinierte Einstellungen gespeichert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>System wide configuration reloaded</source>
        <translation>Globale Konfiguration wiederhergestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot open file %1</source>
        <translation>Fehler beim Öffnen der Datei %1</translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as &amp;Template...</source>
        <translation>&amp;Als Vorlage speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save a document as a template</source>
        <translation>Dokument als Vorlage abspeichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation>Dokument als Vorlage abspeichern. So können Sie einmal erstellte Layouts immer wieder verwenden</translation>
    </message>
</context>
<context>
    <name>ScGTFileDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Select a file to import</source>
        <translation>Wählen Sie eine Datei für den Import aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Append</source>
        <translation>Anhängen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show options</source>
        <translation>Optionen anzeigen</translation>
    </message>
</context>
<context>
    <name>ScInputDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Input Dialog</source>
        <translation>Eingabedialog</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>InputDialog</source>
        <translation>Eingabedialog</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation>fest</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation>Aktion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load/Save/Import/Export</source>
        <translation>Öffnen/Speichern/Import/Export</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unknown</source>
        <translation>Unbekannt</translation>
    </message>
</context>
<context>
    <name>ScProgressBar</name>
    <message>
        <location filename="" line="136643300"/>
        <source>%1 of %2</source>
        <translation>%1 von %2</translation>
    </message>
</context>
<context>
    <name>ScToolBar</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Top</source>
        <translation>Oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bottom</source>
        <translation>Unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow Docking To...</source>
        <translation>Andocken erlauben...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical</source>
        <translation>Vertikal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Floating Orientation...</source>
        <translation>Richtung...</translation>
    </message>
</context>
<context>
    <name>ScWinPrint</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Printing...</source>
        <translation>Drucken...</translation>
    </message>
</context>
<context>
    <name>Scribus12Format</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.2.x Document</source>
        <translation>Scribus 1.2.x-Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Background</source>
        <translation>Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 von</translation>
    </message>
</context>
<context>
    <name>Scribus134Format</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.3.4 Document</source>
        <translation>Scribus 1.3.4-Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 von</translation>
    </message>
</context>
<context>
    <name>Scribus13Format</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus 1.3.0-&gt;1.3.3.7 Document</source>
        <translation>Scribus 1.3.0-&gt;1.3.3.7-Dokument</translation>
    </message>
</context>
<context>
    <name>ScribusCore</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Initializing Plugins</source>
        <translation>Plugins werden geladen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Initializing Keyboard Shortcuts</source>
        <translation>Tastenkürzel werden eingelesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reading Preferences</source>
        <translation>Einstellungen werden geladen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reading ICC Profiles</source>
        <translation>ICC-Profile werden gelesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Searching for Fonts</source>
        <translation>Suche nach Schriftarten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>There are no fonts found on your system.</source>
        <translation>Auf Ihrem System wurden keine Schriftarten gefunden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Exiting now.</source>
        <translation>Scribus wird nun beendet.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fatal Error</source>
        <translation>Fataler Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font System Initialized</source>
        <translation>Fontsystem initialisiert</translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <location filename="" line="136643300"/>
        <source>New Layer</source>
        <translation>Neue Ebene</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Background</source>
        <translation>Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to clear all your text?</source>
        <translation>Wollen Sie wirklich den gesamten Text entfernen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot Delete In-Use Item</source>
        <translation>Momentan verwendete Objekte können nicht gelöscht werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation>Das Objekt %1 wird gerade im Story Editor bearbeitet und kann deswegen nicht gelöscht werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Some objects are locked.</source>
        <translation>Einige Objekte sind gesperrt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Unlock All</source>
        <translation>Alle &amp;entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Skip locked objects</source>
        <translation>&amp;Gesperrte Objekte überspringen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation>Beim Öffnen von ICC-Profilen ist ein Fehler aufgetreten. Das Farbmanagement ist nicht aktiviert.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation>Anzahl der Kopien: %1
Horizontaler Versatz: %2
Vertikaler Versatz: %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of copies: %1
Horizontal gap: %2
Vertical gap: %3</source>
        <translation>Anzahl der Kopien: %1
Horizontaler Abstand: %2
Vertikaler Abstand: %3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Adjusting Colors</source>
        <translation>Farbanpassung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default Paragraph Style</source>
        <translation>Standard-Absatzstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default Character Style</source>
        <translation>Standard-Zeichenstil</translation>
    </message>
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Initializing Story Editor</source>
        <translation>Story Editor wird initialisiert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Initializing Hyphenator</source>
        <translation>Silbentrennung wird initialisiert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reading Scrapbook</source>
        <translation>Bibliothek wird geladen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Setting up Shortcuts</source>
        <translation>Tastaturkürzel werden gelesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fatal Error</source>
        <translation>Fataler Fehler</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open &amp;Recent</source>
        <translation>&amp;Zuletzt verwendete öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Export</source>
        <translation>E&amp;xportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>St&amp;yle</source>
        <translation>S&amp;til</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Color</source>
        <translation>&amp;Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size</source>
        <translation>&amp;Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shade</source>
        <translation>Ton&amp;wert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Font</source>
        <translation>Schrift&amp;art</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Effects</source>
        <translation>&amp;Effekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Item</source>
        <translation>&amp;Objekt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview Settings</source>
        <translation>Vorschaumodus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Level</source>
        <translation>Anordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to La&amp;yer</source>
        <translation>Auf andere &amp;Ebene verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF-Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shape</source>
        <translation>&amp;Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;onvert To</source>
        <translation>Um&amp;wandeln in</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>I&amp;nsert</source>
        <translation>&amp;Einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character</source>
        <translation>Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quote</source>
        <translation>Anführungszeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Space</source>
        <translation>Leerzeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Page</source>
        <translation>&amp;Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;View</source>
        <translation>&amp;Ansicht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Windows</source>
        <translation>&amp;Fenster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Help</source>
        <translation>&amp;Hilfe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Alignment</source>
        <translation>Aus&amp;richtung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ready</source>
        <translation>Fertig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Importing Pages...</source>
        <translation>Seiten werden importiert...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import Page(s)</source>
        <translation>Seiten importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import done</source>
        <translation>Import erfolgreich abgeschlossen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Found nothing to import</source>
        <translation>Nichts zum Importieren gefunden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File %1 is not in an acceptable format</source>
        <translation>Das Format der Datei %1 kann nicht verwendet werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Loading...</source>
        <translation>Lade...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation>Einige ICC-Profile in dem Dokument sind auf Ihrem System nicht vorhanden:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> was replaced by: </source>
        <translation> wurde ersetzt durch: </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>(converted)</source>
        <translation>(konvertiert)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot write the file: 
%1</source>
        <translation>Die Datei %1 kann nicht geschrieben werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save As</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saving...</source>
        <translation>Speichere...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation>Scribus hat einige Fehler festgestellt. Sie sollten die Druckvorstufenüberprüfung verwenden, um sie zu korrigieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Ignore</source>
        <translation>&amp;Ignorieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Abort</source>
        <translation>A&amp;bbruch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printing...</source>
        <translation>Drucke...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printing failed!</source>
        <translation>Drucken fehlgeschlagen!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot Cut In-Use Item</source>
        <translation>Objekte in Benutzung können nicht ausgeschnitten werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation>Das Objekt %1 wird gerade im Story Editor bearbeitet, deswegen kann es nicht ausgeschnitten werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>About Qt</source>
        <translation>Über Qt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Manual</source>
        <translation>Scribus-Handbuch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Textdateien (*.txt);;Alle Dateien(*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert Page to Master Page</source>
        <translation>In Musterseite umwandeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size</source>
        <translation>Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shade:</source>
        <translation>Ton&amp;wert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shade</source>
        <translation>Tonwert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Style</source>
        <translation>Kein Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The following programs are missing:</source>
        <translation>Die folgenden Programme fehlen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation>Ghostscript: Sie können weder EPS-Dateien noch die Druckvorschau verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation>Scribus hat Fehler entdeckt.
Bitte verwenden Sie die Druckvorstufenüberprüfung, um
diese zu finden und zu korrigieren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation>EPS-Dateien (*.eps);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation>Scribus hat Fehler entdeckt.
Bitte verwenden Sie die Druckvorstufenüberprüfung, um
diese zu finden und zu korrigieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>-Page%1</source>
        <translation>-Seite %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Some objects are locked.</source>
        <translation>Einige Objekte sind gesperrt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Lock All</source>
        <translation>Alle &amp;sperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Unlock All</source>
        <translation>Alle &amp;entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The program %1 is already running!</source>
        <translation>Das Programm %1 läuft schon!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The program %1 is missing!</source>
        <translation>Das Programm %1 fehlt!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation>Die gewählte Farbe existiert im Farbsatz des Dokuments noch nicht. Bitte geben Sie einen Namen für die neue Farbe ein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Not Found</source>
        <translation>Farbe nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation>Eine Farbe mit diesem Namen existiert schon. Bitte geben Sie einen anderen Namen ein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Level</source>
        <translation>&amp;Anordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to Layer</source>
        <translation>Auf andere Ebene verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Previe&amp;w Settings</source>
        <translation>&amp;Vorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Tools</source>
        <translation>&amp;Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X-Pos:</source>
        <translation>X-Pos:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y-Pos:</source>
        <translation>Y-Pos:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Master Page %1</source>
        <translation>Neue Musterseite %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation>Ghostscript: Sie können weder EPS-Dateien noch die Druckvorschau verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation>Ghostscript fehlt: Die Postscript-Druckvorschau ist nicht verfügbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to replace your existing image?</source>
        <translation>Wollen Sie das vorhandene Bild wirklich ersetzen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Contents</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Character</source>
        <translation>&amp;Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Quote</source>
        <translation>&amp;Anführungszeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;paces &amp;&amp; Breaks</source>
        <translation>&amp;Leerzeichen &amp;&amp; Umbrüche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Liga&amp;ture</source>
        <translation>Liga&amp;turen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paste Recent</source>
        <translation>Zuletzt verwendete Einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Updating Pictures</source>
        <translation>Aktualisiere Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.sla.gz);;All Files (*)</source>
        <translation>Dokumente (*.sla *.sla.gz);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla);;All Files (*)</source>
        <translation>Dokumente (*.sla);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group%1</source>
        <translation>Gruppe%1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to clear all your text?</source>
        <translation>Wollen Sie wirklich den gesamten Text entfernen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus </source>
        <translation>Scribus</translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Invalid argument: </source>
        <translation>Ungültiges Argument:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File %1 does not exist, aborting.</source>
        <translation>Die Datei %1 existiert nicht - Abbruch.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation>Verwendung: scribus [Optionen...] [Datei]</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options:</source>
        <translation>Optionen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print help (this message) and exit</source>
        <translation>Hilfe anzeigen (dieser Text) und beenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation>Benutzt xx als Abkürzung für eine Sprache, z.B. &apos;en&apos; oder &apos;de&apos;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>List the currently installed interface languages</source>
        <translation>Verfügbare Sprachen auflisten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show information on the console when fonts are being loaded</source>
        <translation>Zeigt Informationen auf der Konsole, wenn Schriften geladen werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not show the splashscreen on startup</source>
        <translation>Splashscreen beim Start nicht anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output version information and exit</source>
        <translation>Version ausgeben und beenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation>Rechtsläufige Anordnung der Schaltflächen (z.B. Abbrechen/Nein/Ja statt Ja/Nein/Abbrechen)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>filename</source>
        <translation>Dateiname</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use filename as path for user given preferences</source>
        <translation>Verwendet &apos;Dateiname&apos; als Pfad für die Konfigurationsdatei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation>Folgende Sprachen sind für Scribus installiert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To override the default language choice:</source>
        <translation>Um die Standardsprache ausser Kraft zu setzen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation>scribus -l xx oder scribus --lang xx; xx steht für den entsprechenden Ländercode.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus Version</source>
        <translation>Scribus-Version</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation>Scribus, Open Source Desktop Publishing</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Homepage</source>
        <translation>Homepage</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documentation</source>
        <translation>Dokumentation</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Issues</source>
        <translation>Bugs</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stop the showing of the splashscreen on startup. Writes an empty file called .neversplash in ~/.scribus.</source>
        <translation>Zeigt den Splashscreen beim Starten von Scribus nicht an. Dazu wird eine leere Datei mit dem Namen .neversplash in ~/.scribus angelegt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Download a file from the Scribus website and show the latest available version.</source>
        <translation>Laden Sie eine Datei von der Scribus-Webseite herunter und zeigen Sie die neueste Version.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display a console window</source>
        <translation>Öffnen Sie eine Textkonsole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show location ICC profile information on console while starting</source>
        <translation>Anzeige des Speicherortes von ICC-Profilen beim Start in der Konsole</translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy Here</source>
        <translation>An diese Stelle kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move Here</source>
        <translation>An diese Stelle verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paste</source>
        <translation>Einf&amp;ügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Picture</source>
        <translation>Bild</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File: </source>
        <translation>Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Original PPI: </source>
        <translation>Ursprüngliche PPI:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Actual PPI: </source>
        <translation>Aktuelle PPI:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Linked Text</source>
        <translation>Verketteter Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Frame</source>
        <translation>Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text on a Path</source>
        <translation>Text auf einem Pfad</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraphs: </source>
        <translation>Absätze:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Words: </source>
        <translation>Wörter:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Chars: </source>
        <translation>Zeichen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print: </source>
        <translation>Drucken:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enabled</source>
        <translation>ja</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Disabled</source>
        <translation>nein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>In&amp;fo</source>
        <translation>&amp;Information</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview Settings</source>
        <translation>Vorschaumodus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF-Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to La&amp;yer</source>
        <translation>Auf andere &amp;Ebene verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Le&amp;vel</source>
        <translation>An&amp;ordnung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Conve&amp;rt to</source>
        <translation>&amp;Umwandeln in</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Linking Text Frames</source>
        <translation>Textrahmen verketten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>You are trying to link to a filled frame, or a frame to itself.</source>
        <translation>Sie versuchen einen Rahmen mit sich selbst zu verketten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cannot Convert In-Use Item</source>
        <translation>Ein in Bearbeitung befindliches Objekt kann nicht
umgewandelt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation>Das Objekt %1 wird gerade im Story Editor bearbeitet und kann deswegen nicht umgewandelt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page %1 to %2</source>
        <translation>Seite %1 bis %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colorspace: </source>
        <translation>Farbraum:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unknown</source>
        <translation>Unbekannt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Grayscale</source>
        <translation>Graustufen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Contents</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paste Recent</source>
        <translation>Zuletzt verwendete einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Duotone</source>
        <translation>Duplex</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lines: </source>
        <translation>Zeilen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group%1</source>
        <translation>Gruppe%1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables the Preview Mode</source>
        <translation>Schaltet den Vorschaumodus ein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Here you can select the visual appearance of the display
You can choose between normal and several color blindness forms</source>
        <translation>Hier können Sie die farbliche Darstellung auswählen
Sie können zwischen &quot;normal&quot; und verschiedenen Formen der Farbenblindheit auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Switches Color Management on or off</source>
        <translation>Schaltet das Farbmanagement an oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview Mode</source>
        <translation>Vorschaumodus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enter Object Size</source>
        <translation>Objektgrösse eingeben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CMS is active. Therefore the color display may not match the perception by visually impaired</source>
        <translation>Das Farbmanagement ist aktiviert. Die Farbdarstellung kann daher nicht mit der Wahrnehmung durch Sehbehinderte übereinstimmen</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Document:</source>
        <translation>Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>has been changed since the last save.</source>
        <translation>wurde seit dem letzten Speichern verändert.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Discard</source>
        <translation>&amp;Verwerfen</translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Embedded Python scripting support.</source>
        <translation>Unterstützung für eingebettete Python-Scripte.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scripter</source>
        <translation>Scripter</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Script error</source>
        <translation>Fehler bei der Ausführung eines Scripts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation>Falls das Script ein offizelles Scribus-Script ist, melden Sie den Fehler bitte auf &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation>Diese Meldung befindet sich auch in Ihrer Zwischenablage. Benutzen Sie Strg+V, um sie in den Bugtracker zu kopieren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Examine Script</source>
        <translation>Script untersuchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation>Ihr Befehl konnte auf Grund eines internen Fehlers nicht ausgeführt werden. Weitere Hinweise finden Sie auf stderr.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation>Konnte das Python-Plug-In nicht einrichten. Weitere Hinweise finden Sie auf stderr.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documentation for:</source>
        <translation>Handbuch für:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Script</source>
        <translation>Script</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> doesn&apos;t contain any docstring!</source>
        <translation>enthält keinen docstring!</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Python Scripts (*.py *.PY);;All Files (*)</source>
        <translation>Python Scripts (*.py *.PY);;Alle Dateien (*)</translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Scripter Preferences</source>
        <translation>Einstellungen für den Scripter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable Extension Scripts</source>
        <translation>Erweiterungsscripte aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Extensions</source>
        <translation>Erweiterungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Console</source>
        <translation>Konsole</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Startup Script:</source>
        <translation>Autostart-Script:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation>Fehler:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation>Kommentare:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation>Stichwörter:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation>Zeichen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation>Zahlen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation>Strings:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation>Base Texts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select Color</source>
        <translation>Farbe wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change...</source>
        <translation>Ändern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Locate Startup Script</source>
        <translation>Autostart-Script auswählen</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Page Previews</source>
        <translation>Seitenvorschau anzeigen</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Search/Replace</source>
        <translation>Suchen und Ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search for:</source>
        <translation>Suchen nach:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraph Style</source>
        <translation>Absatzstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font</source>
        <translation>Schrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Size</source>
        <translation>Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Effects</source>
        <translation>Effekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Color</source>
        <translation>Füllfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Shade</source>
        <translation>Tonwert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stroke Color</source>
        <translation>Randfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stroke Shade</source>
        <translation>Tonwert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace with:</source>
        <translation>Ersetzen durch:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search finished</source>
        <translation>Suche beendet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Center</source>
        <translation>Zentriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Block</source>
        <translation>Blocksatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Forced</source>
        <translation>Erzw. Blocksatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Whole Word</source>
        <translation>&amp;Ganzes Wort</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Ignore Case</source>
        <translation>Gross-/&amp;Kleinschreibung ignorieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Search</source>
        <translation>&amp;Suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Replace</source>
        <translation>&amp;Ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace &amp;All</source>
        <translation>&amp;Alles ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Close</source>
        <translation>Sch&amp;liessen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search finished, found %1 matches</source>
        <translation>Suche beendet, %1 Übereinstimmungen gefunden</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Select Fields</source>
        <translation>Felder auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Available Fields</source>
        <translation>Verfügbare Felder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selected Fields</source>
        <translation>Ausgewählte Felder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Other...</source>
        <translation>Andere...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shade</source>
        <translation>Tonwert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shade:</source>
        <translation>Ton&amp;wert:</translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X-Offset</source>
        <translation>X-Offset</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y-Offset</source>
        <translation>Y-Offset</translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>Umbruc&amp;hkontrolle für Abkürzungen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Short Words</source>
        <translation>Umbruchkontrolle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
        <translation>Ein spezielles Plug-In, um ein geschütztes Leerzeichen vor oder hinter Abkürzungen einzufügen. Es ist in den folgenden Sprachen verfügbar:</translation>
    </message>
</context>
<context>
    <name>ShortcutWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;No Key</source>
        <translation>&amp;Keine Taste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;User Defined Key</source>
        <translation>&amp;Benutzerdefinierte Taste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set &amp;Key</source>
        <translation>Taste &amp;definieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt</source>
        <translation>Alt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ctrl</source>
        <translation>Strg</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shift</source>
        <translation>Shift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Meta</source>
        <translation>Meta</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Meta+</source>
        <translation>Meta+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shift+</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ctrl+</source>
        <translation>Strg+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No shortcut for the style</source>
        <translation>Kein Tastenkürzel für diesen Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style has user defined shortcut</source>
        <translation>Dem Stil ist ein benutzerdefiniertes Kürzel zugewiesen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Assign a shortcut for the style</source>
        <translation>Dem Stil ein Tastenkürzel zuweisen</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <location filename="" line="136643300"/>
        <source>No Style</source>
        <translation>Kein Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Styles...</source>
        <translation>Stile bearbeiten...</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>No Style</source>
        <translation>Kein Stil</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit Styles</source>
        <translation>Stilvorlagen bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy of %1</source>
        <translation>Kopie von %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New Style</source>
        <translation>Neue Stilvorlage</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumente (*.sla *.sla.gz *.scd *.scd.gz);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumente (*.sla *.scd);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;uplicate</source>
        <translation>&amp;Duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Story Editor</source>
        <translation>Textbearbeitung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Current Paragraph:</source>
        <translation>Aktueller Absatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Words: </source>
        <translation>Wörter:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Chars: </source>
        <translation>Zeichen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Totals:</source>
        <translation>Gesamt:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraphs: </source>
        <translation>Absätze:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Textdateien (*.txt);;Alle Dateien(*)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you want to save your changes?</source>
        <translation>Wollen Sie Ihre Änderungen speichern?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Text neu vom Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Save to File...</source>
        <translation>In Datei &amp;speichern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Load from File...</source>
        <translation>Von Datei &amp;laden...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save &amp;Document</source>
        <translation>&amp;Dokument speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>Änderungen &amp;übernehmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Änderungen &amp;ignorieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cu&amp;t</source>
        <translation>&amp;Ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Paste</source>
        <translation>Einf&amp;ügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Update Text Frame</source>
        <translation>&amp;Textrahmen auffrischen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select &amp;All</source>
        <translation>Alles aus&amp;wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Suchen und Ersetzen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit Styles...</source>
        <translation>Stil&amp;vorlagen bearbeiten...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Fonts Preview...</source>
        <translation>Schrift&amp;vorschau...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Background...</source>
        <translation>&amp;Hintergrund...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Display Font...</source>
        <translation>&amp;Schrift...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Settings</source>
        <translation>&amp;Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Smart text selection</source>
        <translation>&amp;Intelligente Textmarkierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Insert Glyph...</source>
        <translation>&amp;Zeichen einfügen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clear All Text</source>
        <translation>Text entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Story Editor - %1</source>
        <translation>Story Editor - %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to lose all your changes?</source>
        <translation>Alle Änderungen verwerfen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do you really want to clear all your text?</source>
        <translation>Wollen Sie wirklich den gesamten Text entfernen?</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Insert</source>
        <translation>Ein&amp;fügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Character</source>
        <translation>Zeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Quote</source>
        <translation>Anführungszeichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation>Leerzeichen &amp;&amp; Umbrüche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ligature</source>
        <translation>Ligaturen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Space</source>
        <translation>Leerzeichen</translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement</source>
        <translation>Versatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Linewidth</source>
        <translation>Linienstärke</translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Reset</source>
        <translation>&amp;Zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Apply</source>
        <translation>An&amp;wenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;&lt; &amp;Done</source>
        <translation>&lt;&lt; &amp;Fertig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit &gt;&gt;</source>
        <translation>&amp;Bearbeiten &gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import</source>
        <translation>&amp;Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Clone</source>
        <translation>&amp;Klonen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset all changes</source>
        <translation>Alle Änderungen zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply all changes</source>
        <translation>Alle Änderungen übernehmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply all changes and exit edit mode</source>
        <translation>Änderungen übernehmen und den Bearbeitungsmodus verlassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create a new style</source>
        <translation>Einen neuen Stil anlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import styles from another document</source>
        <translation>Stile aus einem anderen Dokument importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clone selected style</source>
        <translation>Den ausgewählten Stil klonen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete selected styles</source>
        <translation>Ausgewählte Stile löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import</source>
        <translation>Importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clone</source>
        <translation>Klonen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to Scrapbook</source>
        <translation>In Bibliothek speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Done</source>
        <translation>&amp;Fertig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shortcut</source>
        <translation>Tastaturkürzel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit styles</source>
        <translation>Stile bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name of the selected style</source>
        <translation>Name des ausgewählten Stils</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>New %1</source>
        <translation>Neu %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This key sequence is already in use</source>
        <translation>Diese Tastenkombination ist schon belegt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>More than one style selected</source>
        <translation>Mehr als ein Stil ausgewählt</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Small Caps</source>
        <translation>Kapitälchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Subscript</source>
        <translation>Tiefgestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Superscript</source>
        <translation>Hochgestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Caps</source>
        <translation>Grossbuchstaben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
        <translation>Text unterstreichen. Halten Sie die Maustaste gedrückt, um die Linienbreite und den Versatz selbst zu bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
        <translation>Nur Wörter unterstreichen. Halten Sie die Maustaste gedrückt, um die Linienbreite und den Versatz selbst zu bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
        <translation>Durchgestrichen. Halten Sie die Maustaste gedrückt, um die Linienbreite und den Versatz selbst zu bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
        <comment>Text Style Selector</comment>
        <translation>Umriss. Halten Sie die Maustaste gedrückt, um die Linienbreite selbst zu bestimmen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
        <translation>Schattierter Text. Halten Sie die Maustaste gedrückt, um den Abstand des Schattens selbst zu bestimmen.</translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Namen der Datei vor jedem Absatzstil anfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not ask again</source>
        <translation>Einstellungen merken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Optionen für den OpenOffice.org-Writer-Import</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Damit werden bereits vorhandene Stile im aktuellen Dokument überschrieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Merge Paragraph Styles</source>
        <translation>Absatzstile zusammenführen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Absatzstile nach Attributen zusammenführen. Diese Option führt zu weniger Absatzstilen, selbst wenn im Originaldokument Stile anders benannt sind.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Name des Dokuments an Absatzstile anhängen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation>Diese Einstellungen als Standard festlegen und beim Import von Dateien, die mit OpenOffice 1.x erstellt wurden, nicht erneut nachfragen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Overwrite Paragraph Styles</source>
        <translation>Absatzstile überschreiben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>At the beginning</source>
        <translation>Am Anfang</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>At the end</source>
        <translation>Am Ende</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Not Shown</source>
        <translation>Nicht sichtbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Table of Contents and Indexes</source>
        <translation>Inhaltsverzeichnisse und Indizes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Table Of Contents</source>
        <translation>Inhaltsverzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The frame the table of contents will be placed into</source>
        <translation>Der Rahmen, in den das Inhaltsverzeichnis eingefügt werden soll</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Numbers Placed:</source>
        <translation>Plazierung der Seitenzahlen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Item Attribute Name:</source>
        <translation>Bezeichnung des Dokumentobjekts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation>Das Dokumentobjekt, welches auf Rahmen als Grundlage für die Erstellung von Einträgen angewendet wird</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>Plazierung von Seitennummern am Anfang oder am Ende einer Zeile, beziehungsweise überhaupt nicht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>List Non-Printing Entries</source>
        <translation>Nicht druckende Einträge anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Include frames that are set to not print as well</source>
        <translation>Auch Rahmen einbeziehen, die nicht gedruckt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The paragraph style used for the entry lines</source>
        <translation>Der Abstatzstil, der für die Einträge verwendet wird</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraph Style:</source>
        <translation>Absatzstil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Destination Frame:</source>
        <translation>Zielrahmen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Table of Contents %1</source>
        <translation>Inhaltsverzeichnis %1</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Table of Contents and Indexes</source>
        <translation>Inhaltsverzeichnisse und Indices</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Table Of Contents</source>
        <translation>Inhaltsverzeichnis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+D</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The frame the table of contents will be placed into</source>
        <translation>Der Rahmen, in den das Inhaltsverzeichnis eingefügt werden soll</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Numbers Placed:</source>
        <translation>Plazierung der Seitenzahlen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Item Attribute Name:</source>
        <translation>Bezeichnung des Dokumentobjekts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation>Das Dokumentobjekt, welches auf Rahmen als Grundlage für die Erstellung von Einträgen angewendet wird</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>Plazierung von Seitennummern am Anfang oder am Ende einer Zeile, beziehungsweise überhaupt nicht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>List Non-Printing Entries</source>
        <translation>Nicht druckende Einträge anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Include frames that are set to not print as well</source>
        <translation>Auch Rahmen einbeziehen, die nicht gedruckt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The paragraph style used for the entry lines</source>
        <translation>Der Abstatzstil, der für die Einträge verwendet wird</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paragraph Style:</source>
        <translation>Absatzstil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Destination Frame:</source>
        <translation>Zielrahmen:</translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Ignore all errors</source>
        <translation>Fehler ignorieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic check before printing or exporting</source>
        <translation>Dokument automatisch vor dem Druck oder Export überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for missing glyphs</source>
        <translation>Auf fehlende Schriftzeichen überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for overflow in text frames</source>
        <translation>Auf Überfüllung der Textrahmen prüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for missing images</source>
        <translation>Auf fehlende Bilder überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check image resolution</source>
        <translation>Auflösung der Bilder überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lowest allowed resolution</source>
        <translation>Minimal erlaubte Auflösung der Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for placed PDF Files</source>
        <translation>Auf importierte PDF-Dateien überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for PDF Annotations and Fields</source>
        <translation>Auf PDF-Anmerkungen und PDF-Felder überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add Profile</source>
        <translation>Profil hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove Profile</source>
        <translation>Profil entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Highest allowed resolution</source>
        <translation>Höchste erlaubte Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for GIF images</source>
        <translation>Nach GIF-Bildern suchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ignore non-printable Layers</source>
        <translation>Nicht druckbare Ebenen ignorieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for items not on a page</source>
        <translation>Auf ausserhalb der Seite liegende Objekte überprüfen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Check for used transparencies</source>
        <translation>Auf Transparenzen überprüfen</translation>
    </message>
</context>
<context>
    <name>TabDisplay</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Color for paper</source>
        <translation>Papierfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Zeigt den nicht druckbaren Bereich in der Farbe der Seitenrandlinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable or disable  the display of linked frames.</source>
        <translation>Aktiviert oder deaktiviert die Anzeige von Rahmenverkettungen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation>Zeigt nicht druckbare Zeichen wie Absatzzeichen in Textrahmen an</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the display of frames on or off</source>
        <translation>Schaltet die Anzeige von Textrahmen an oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the display of layer indicators on or off</source>
        <translation>Schaltet die Ebenenmarkierungen an oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the display of pictures on or off</source>
        <translation>Schaltet die Anzeige von Bildern an oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Legt den Raum links vom Dokument fest, der als Ablagefläche zur Verfügung steht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Legt den Raum rechts vom Dokument fest, der als Ablagefläche zur Verfügung steht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Legt den Raum oberhalb des Dokumentes fest, der als Ablagefläche zur Verfügung steht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Legt den Raum unterhalb des Dokumentes fest, der als Ablagefläche zur Verfügung steht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set the default zoom level</source>
        <translation>Legt die Standard-Vergrösserungseinstellung fest</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation>Legen Sie ein Lineal auf dem Bildschirm an und verschieben Sie den Regler, um den Zoom-Level einzustellen, damit die Dokumente in der richtigen Grösse angezeigt werden</translation>
    </message>
</context>
<context>
    <name>TabDisplayBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Display</source>
        <translation>Anzeige</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Layer Indicators</source>
        <translation>Ebenenmarkierungen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Frames</source>
        <translation>Rahmen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Text Chains</source>
        <translation>Verkettung von Textrahmen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Nicht druck&amp;baren Rand in der Seitenrandlinienfarbe zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+U</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rulers Relative to Page</source>
        <translation>Lineale relativ zur Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Text Control Characters</source>
        <translation>Kontrollzeichen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Pictures</source>
        <translation>Bilder anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scratch Space</source>
        <translation>Ablagefläche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bottom:</source>
        <translation>&amp;Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Top:</source>
        <translation>&amp;Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Gaps Between Pages</source>
        <translation>Abstände zwischen Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal:</source>
        <translation>Horizontal:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical:</source>
        <translation>Vertikal:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Adjust Display Size</source>
        <translation>Anzeigegrösse anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation>Verschieben Sie das Lineal mit dem Regler, um die Anzeige anzupassen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colors</source>
        <translation>Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pages:</source>
        <translation>Seiten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Color:</source>
        <translation>Füllfarbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selected Page Border:</source>
        <translation>Ausgewählter Seitenrand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Frames</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Locked:</source>
        <translation>Gesperrt:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal:</source>
        <translation>Normal:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selected:</source>
        <translation>Ausgewählt:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Linked:</source>
        <translation>Verkettet:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Grouped:</source>
        <translation>Gruppiert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Annotation:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text:</source>
        <translation>Text:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Control Characters:</source>
        <translation>Steuerzeichen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Bleed Area</source>
        <translation>Anschnittzugabe anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>TabDisplayBase</source>
        <translation>TabDisplayBase</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scale%</source>
        <translation>Grösse%</translation>
    </message>
</context>
<context>
    <name>TabDocument</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Size</source>
        <translation>Seitenformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Orie&amp;ntation:</source>
        <translation>Ausrichtu&amp;ng:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Units:</source>
        <translation>Einheiten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Width:</source>
        <translation>&amp;Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Height:</source>
        <translation>&amp;Höhe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Margin Guides</source>
        <translation>Satzspiegel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Autosave</source>
        <translation>Automatisch speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Interval:</source>
        <translation>&amp;Intervall:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Undo/Redo</source>
        <translation>Rückgängig/Wiederholen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Action history length</source>
        <translation>Anzahl der Rückgängig/Wiederherstellen-Aktionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Breite der Seite, veränderbar, wenn Benutzerdefiniert ausgewählt ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Höhe der Seite, veränderbar, wenn Benutzerdefiniert ausgewählt ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Standardgrösse der Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default orientation of document pages</source>
        <translation>Standardausrichtung der Seite in neuen Dokumenten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default unit of measurement for document editing</source>
        <translation>Standardmasseinheit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation>Ist diese Option aktiviert, speichert Scribus eine Sicherungskopie ihres Dokuments mit der Erweiterung .bak im angegebenen Zeitintervall</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Time period between saving automatically</source>
        <translation>Intervall zwischen zwei automatischen Sicherungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation>Anzahl der rückgängig zu machenden Aktionen. 0 bedeutet, dass unendlich viele Aktionen aufgezeichnet werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation>Wendet die Grössenänderung auf alle Seiten im Dokument an</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply settings to:</source>
        <translation>Einstellungen anwenden auf:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Document Pages</source>
        <translation>Alle Dokumentseiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All Master Pages</source>
        <translation>Alle Musterseiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply the page size changes to all existing master pages in the document</source>
        <translation>Änderungen der Seitengrösse auf alle vorhandenen Musterseiten im Dokument anwenden</translation>
    </message>
</context>
<context>
    <name>TabExternalToolsWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Locate Ghostscript</source>
        <translation>Tragen Sie den Pfad zu Ghostscript ein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Locate your image editor</source>
        <translation>Wählen Sie Ihr Bildbearbeitungsprogramm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Locate your web browser</source>
        <translation>Wählen Sie Ihren Webbrowser</translation>
    </message>
</context>
<context>
    <name>TabExternalToolsWidgetBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>External Tools</source>
        <translation>Externe Tools</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PostScript Interpreter</source>
        <translation>Postscript-Interpreter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Name of Executable:</source>
        <translation>Name der &amp;ausführbaren Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Change..</source>
        <translation>&amp;Ändern..</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+Ä</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Antialias &amp;Text</source>
        <translation>&amp;Text weichzeichnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Text bei EPS- und PDF-Anzeige weichzeichnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Antialias &amp;Graphics</source>
        <translation>&amp;Bilder weichzeichnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+G</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Grafiken bei EPS- und PDF-Anzeige weichzeichnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resolution:</source>
        <translation>Auflösung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image Processing Tool</source>
        <translation>Bildbearbeitungsprogramm</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name of &amp;Executable:</source>
        <translation>Name der &amp;ausführbaren Datei:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Change...</source>
        <translation>&amp;Ändern...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Rescan</source>
        <translation>Er&amp;neut scannen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+R</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;qt&gt;Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Pfad zum Ghostscript-Interpreter. Auf Windows-Systemen muss das Programm gswin32c.exe ausgewählt sein, NICHT gswin32.exe. Anderenfalls könnte Scribus beim Start abstürzen.&lt;/qt&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;qt&gt;File system location for graphics editor. If you use gimp and your distribution includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Pfad zum Bildbearbeitungsprogramm. Wenn Sie GIMP verwenden, empfehlen wir Ihnen, hier gimp-remote einzutragen; dann können Sie Bilder in einer laufenden Instanz von GIMP bearbeiten.&lt;/qt&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Web Browser</source>
        <translation>Webbrowser</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Web Browser to launch with links from the Help system</source>
        <translation>Wählen Sie den Webbrowser, der für die Links in der Hilfe gestartet werden soll</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&lt;qt&gt;File system location for your web browser. This is used for external links from the Help system.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Pfad zum Webbrowser. Wird für die externen Links in der Hilfe verwendet.&lt;/qt&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rescan for the external tools if they do not exist in the already specified location</source>
        <translation>Erneut nach externen Tools suchen, wenn Sie nicht im gewählten Pfad vorhanden sind</translation>
    </message>
</context>
<context>
    <name>TabGeneral</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation>Wählen Sie die Standardsprache für Scribus aus. Tragen Sie hier nichts ein, wenn Sie die Umgebungsvariable Ihres Systems verwenden möchten. Sie können diese auch jederzeit umgehen, wenn Sie Scribus mit dem entsprechenden Parameter starten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Anzahl der zuletzt geöffneten Dokumente im Dateimenü</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Anzahl der Zeilen, die Scribus bei der Bewegung des Mausrades scrollen soll</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation>Wählen Sie die Standard-Fensterdekoration. Scribus zeigt Ihnen alle KDE- und Qt-Stile an, falls Qt so konfiguriert ist, dass es die KDE-Plugins durchsucht.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default font size for the menus and windows</source>
        <translation>Schriftgrösse für Menüs und Dialoge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default font size for the tool windows</source>
        <translation>Schriftgrösse für die Werkzeugfenster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default documents directory</source>
        <translation>Standardverzeichnis für Dokumente</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation>Verzeichnis für ICC-Profile. Kann nur geändert werden, wenn alle Dokumente geschlossen sind. Scribus sucht automatisch in den Systemverzeichnissen von Mac OSX und Windows. Unter Linux und Unix sucht Scribus in $home/.color/icc,/usr/share/color/icc und /usr/local/share/color/icc </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Default Scripter scripts directory</source>
        <translation>Standardverzeichnis für Scripts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Additional directory for document templates</source>
        <translation>Zusätzliches Verzeichnis für Dokumentvorlagen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a Directory</source>
        <translation>Wählen Sie ein Verzeichnis</translation>
    </message>
</context>
<context>
    <name>TabGeneralBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Language:</source>
        <translation>&amp;Sprache:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Theme:</source>
        <translation>&amp;Thema:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Time before a Move or Resize starts:</source>
        <translation>Verzögerung beim Verschieben oder bei Grössenänderungen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> ms</source>
        <translation>ms</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Font Size (Menus):</source>
        <translation>Schriftgrösse (&amp;Menüs):</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font Size (&amp;Palettes):</source>
        <translation>Schriftgrösse (&amp;Paletten):</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Wheel Jump:</source>
        <translation>&amp;Radvorschub:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Recent Documents:</source>
        <translation>&amp;Zuletzt verwendete Dokumente:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paths</source>
        <translation>Pfade</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Documents:</source>
        <translation>&amp;Dokumente:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Change...</source>
        <translation>&amp;Auswählen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;ICC Profiles:</source>
        <translation>&amp;ICC-Profile:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;hange...</source>
        <translation>A&amp;uswählen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+H</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Scripts:</source>
        <translation>&amp;Scripts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ch&amp;ange...</source>
        <translation>Auswä&amp;hlen...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+A</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document &amp;Templates:</source>
        <translation>Dokument&amp;vorlagen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cha&amp;nge...</source>
        <translation>Auswäh&amp;len...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+N</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>User Interface</source>
        <translation>Benutzeroberfläche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Startup Dialog</source>
        <translation>Start-Dialog zu Beginn anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Splashscreen on Startup</source>
        <translation>Splashscreen beim Programmstart zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>TabGeneralBase</source>
        <translation>TabGeneralBase</translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Common Settings</source>
        <translation>Gängige Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Placing in Documents</source>
        <translation>Plazierung im Dokument</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>In the Background</source>
        <translation>Im Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>In the Foreground</source>
        <translation>Im Vordergrund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Snapping</source>
        <translation>Einrasten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Snap Distance:</source>
        <translation>Distanz zum Einrasten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Grab Radius:</source>
        <translation>Fangradius:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> px</source>
        <translation>px</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Guides</source>
        <translation>Hilfslinien zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color:</source>
        <translation>Farbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Margins</source>
        <translation>Seitenrandlinien zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Page Grid</source>
        <translation>Seitenraster zeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Major Grid</source>
        <translation>Grosses Raster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Spacing:</source>
        <translation>Abstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Minor Grid</source>
        <translation>Kleines Raster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Baseline Grid</source>
        <translation>Grundlinienraster anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Baseline Settings</source>
        <translation>Einstellungen für Grundlinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Baseline &amp;Grid:</source>
        <translation>Grundlinen&amp;raster:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Baseline &amp;Offset:</source>
        <translation>Grundlinien&amp;versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the minor grid lines</source>
        <translation>Abstand zwischen den Teillinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the major grid lines</source>
        <translation>Abstand zwischen den Hauptlinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation>Abstand, ab dem ein Objekt an den Hilfslinien einrastet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation>Radius des Bereichs, in dem es möglich ist, die Objektbegrenzungen zu aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of the minor grid lines</source>
        <translation>Farbe der Teillinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of the major grid lines</source>
        <translation>Farbe der Hauptlinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of the guide lines you insert</source>
        <translation>Farbe der Hilfslinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color for the margin lines</source>
        <translation>Farbe für die Seitenränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color for the baseline grid</source>
        <translation>Farbe des Grundlinienrasters</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the basegrid on or off</source>
        <translation>Schaltet das Grundraster ein oder aus
</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the gridlines on or off</source>
        <translation>Schaltet das Raster ein oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the guides on or off</source>
        <translation>Schaltet die Hilfslinien ein oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Turns the margins on or off</source>
        <translation>Schaltet die Ränder an oder aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Guides are not visible through objects on the page</source>
        <translation>Die Hilfslinien sind hinter den Objekten der Seite verborgen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Guides are visible above all objects on the page</source>
        <translation>Die Hilfslinien sind über allen Objekten der Seite sichtbar</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance between the lines of the baseline grid</source>
        <translation>Abstand der Grundlinien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance from the top of the page for the first baseline</source>
        <translation>Abstand vom oberen Seitenrand bis zur ersten Grundlinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>px</source>
        <translation>px</translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation>XML-Tastenkürzelset (*.ksxml)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt</source>
        <translation>Alt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ctrl</source>
        <translation>Strg</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shift</source>
        <translation>Shift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Meta</source>
        <translation>Meta</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Meta+</source>
        <translation>Meta+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shift+</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ctrl+</source>
        <translation>Strg+</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This key sequence is already in use</source>
        <translation>Diese Tastenkombination ist schon belegt</translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidgetBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Keyboard Shortcuts</source>
        <translation>Tastenkürzel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Search:</source>
        <translation>Suche:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Action</source>
        <translation>Aktion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shortcut</source>
        <translation>Kürzel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shortcut for Selected Action</source>
        <translation>Tastenkürzel für die gewählte Aktion</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;No Key</source>
        <translation>&amp;Keine Taste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+N</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;User Defined Key</source>
        <translation>&amp;Benutzerdefinierte Taste</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+U</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set &amp;Key</source>
        <translation>Taste &amp;definieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+K</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>CTRL+ALT+SHIFT+W</source>
        <translation>CTRL+ALT+SHIFT+W</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Loadable Shortcut Sets</source>
        <translation>Benutzerdefinierten Satz laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keyboard shortcut sets available to load</source>
        <translation>Verfügbare Tastenkürzel-Sätze</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Load</source>
        <translation>&amp;Laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load the selected shortcut set</source>
        <translation>Gewählten Satz laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Import...</source>
        <translation>&amp;Importieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import a shortcut set into the current configuration</source>
        <translation>Tastenkürzel-Satz in die aktuelle Konfiguration importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Export...</source>
        <translation>E&amp;xportieren...</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+E</source>
        <translation>Alt+X</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export the current shortcuts into an importable file</source>
        <translation>Tastenkürzel-Satz exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Reset</source>
        <translation>&amp;Zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+R</source>
        <translation>Alt+Z</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reload the default Scribus shortcuts</source>
        <translation>Standard-Tastenkürzel von Scribus erneut laden</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Manage Tabulators</source>
        <translation>Tabulatoren bearbeiten</translation>
    </message>
</context>
<context>
    <name>TabMiscellaneousBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation>Immer nachfragen, bevor Schriften ersetzt werden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation>Vorschau des aktuellen Absatzstils während der Bearbeitung anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lorem Ipsum</source>
        <translation>Beispieltext</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Always use standard Lorem Ipsum</source>
        <translation>Immer den Standard-Beispieltext verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Count of the Paragraphs:</source>
        <translation>Anzahl der Absätze:</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Export Range</source>
        <translation>Bereich festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;All Pages</source>
        <translation>&amp;Alle Seiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;hoose Pages</source>
        <translation>Seiten &amp;wählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotation:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Compatibilit&amp;y:</source>
        <translation>&amp;Kompatibilität:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Binding:</source>
        <translation>Bindun&amp;g:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left Margin</source>
        <translation>Linker Rand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right Margin</source>
        <translation>Rechter Rand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Generate &amp;Thumbnails</source>
        <translation>&amp;Vorschaubilder erzeugen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation>Verkettete Textrahmen als &amp;PDF-Artikel speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Include Bookmarks</source>
        <translation>Lesezeichen &amp;integrieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation>Auflösung für &amp;EPS-Dateien:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation>&amp;Text und Vektorgrafik komprimieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Maximum</source>
        <translation>Maximal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>High</source>
        <translation>Hoch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Medium</source>
        <translation>Mittel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Low</source>
        <translation>Niedrig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Minimum</source>
        <translation>Minimal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;General</source>
        <translation>&amp;Allgemein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Embedding</source>
        <translation>Einbetten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Available Fonts:</source>
        <translation>Verfügbare Schriften:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fonts to embed:</source>
        <translation>Schriften vollständig einbetten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Fonts</source>
        <translation>Schriftar&amp;ten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable &amp;Presentation Effects</source>
        <translation>&amp;Präsentationseffekte aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page</source>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show Page Pre&amp;views</source>
        <translation>Seiten&amp;vorschau anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Effects</source>
        <translation>Effekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Display Duration:</source>
        <translation>&amp;Anzeigedauer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Effec&amp;t Duration:</source>
        <translation>Dauer des &amp;Effekts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Effect T&amp;ype:</source>
        <translation>Effekt&amp;typ:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Moving Lines:</source>
        <translation>&amp;Bewegte Linien:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>F&amp;rom the:</source>
        <translation>&amp;von:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;irection:</source>
        <translation>&amp;Richtung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> sec</source>
        <translation> sek</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Effect</source>
        <translation>Kein Effekt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Blinds</source>
        <translation>Jalousie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Box</source>
        <translation>Einblenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dissolve</source>
        <translation>Auflösen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Glitter</source>
        <translation>Schachbrett</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Split</source>
        <translation>Teilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Wipe</source>
        <translation>Wischen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical</source>
        <translation>Vertikal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inside</source>
        <translation>Innen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outside</source>
        <translation>Aussen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left to Right</source>
        <translation>Von links nach rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top to Bottom</source>
        <translation>Von oben nach unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bottom to Top</source>
        <translation>Von unten nach oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right to Left</source>
        <translation>Von rechts nach links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top-left to Bottom-Right</source>
        <translation>Schräg von links oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Apply Effect on all Pages</source>
        <translation>Effekt auf alle Seiten an&amp;wenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Use Encryption</source>
        <translation>&amp;Verschlüsselung benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Passwords</source>
        <translation>Passwörter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;User:</source>
        <translation>&amp;Benutzer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Owner:</source>
        <translation>&amp;Besitzer:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Settings</source>
        <translation>Berechtigungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow &amp;Printing the Document</source>
        <translation>Dokument &amp;drucken erlauben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow &amp;Changing the Document</source>
        <translation>Dokument än&amp;dern erlauben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation>Kopieren von &amp;Text und Bildern zulassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation>Hinzufügen von &amp;Anmerkungen erlauben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;ecurity</source>
        <translation>Sicher&amp;heit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output &amp;Intended For:</source>
        <translation>Ausgabe &amp;vorgesehen für:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Screen / Web</source>
        <translation>Monitor / Internet</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer</source>
        <translation>Drucker</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Grayscale</source>
        <translation>Graustufen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation>&amp;Benutzerdefinierte Ausgabeeinstellungen verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering Settings</source>
        <translation>Ausgabeeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fre&amp;quency:</source>
        <translation>&amp;Häufigkeit:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Angle:</source>
        <translation>&amp;Winkel:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;pot Function:</source>
        <translation>&amp;Punktaufbau:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Simple Dot</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line</source>
        <translation>Linie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Round</source>
        <translation>Rund</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ellipse</source>
        <translation>Ellipse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Solid Colors:</source>
        <translation>Farben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use ICC Profile</source>
        <translation>ICC-Profile benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering-Intent:</source>
        <translation>Renderpriorität:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Perceptual</source>
        <translation>Wahrnehmung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relative Colorimetric</source>
        <translation>Relativ farbmetrisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation</source>
        <translation>Farbsättigung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Absolute Colorimetric</source>
        <translation>Absolut farbmetrisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Images:</source>
        <translation>Bilder:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation>Eingebettete Profile nicht benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;olor</source>
        <translation>&amp;Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>PDF/X-3 Output Intent</source>
        <translation>PDF/X-3 Ausgabebedingung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Info String:</source>
        <translation>&amp;Infotext:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output &amp;Profile:</source>
        <translation>Ausgabe&amp;profil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show page previews of each page listed above.</source>
        <translation>Vorschau für aufgeführte Seiten anzeigen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Type of the display effect.</source>
        <translation>Auswahl des Effekts.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation>Richtung für die Effekte Rollen und Schachbrett.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Starting position for the box and split effects.</source>
        <translation>Startposition für die Effekte Einblenden und Teilen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Direction of the glitter or wipe effects.</source>
        <translation>Richtung für die Effekte Jalousie und Teilen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply the selected effect to all pages.</source>
        <translation>Gewählten Effekt auf alle Seiten anwenden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export all pages to PDF</source>
        <translation>Alle Seiten als PDF exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export a range of pages to PDF</source>
        <translation>Einen Seitenbereich als PDF exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation>Erzeugt PDF-Artikel, die für die Navigation in verketteten Textrahmen nützlich sind.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation>DPI (Punkte pro Zoll) für den Export von Bildern.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation>Wählen Sie ein Passwort, das es Benutzern erlaubt, die PDF-Datei anzusehen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation>Drucken erlauben. Wenn nicht ausgewählt, ist das Drucken verboten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation>Veränderung der PDF-Datei gestatten. Wenn nicht ausgewählt, wird die Veränderung verhindert.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Embed a color profile for solid colors</source>
        <translation>Farbprofil für Füllfarben einbetten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color profile for solid colors</source>
        <translation>Farbprofil für Füllfarben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering intent for solid colors</source>
        <translation>Rendermethode für Füllfarben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Embed a color profile for images</source>
        <translation>Farbprofil für Bilder einbetten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation>Farbprofile der Quellbilder nicht benutzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color profile for images</source>
        <translation>Farbprofil für Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rendering intent for images</source>
        <translation>Rendermethode für Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation>Ausgabeprofil zum Drucken. Wenn möglich, benutzen Sie das Profil Ihres Druckers.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Zugabe für Anschnitt oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Zugabe für Anschnitt unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Zugabe für Anschnitt links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Zugabe für Anschnitt rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) horizontally</source>
        <translation>Dokument horizontal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) vertically</source>
        <translation>Dokument vertikal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Konvertiert Schmuckfarben zu Prozessfarben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Compression &amp;Quality:</source>
        <translation>Kompressions&amp;qualität:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
        <translation>Schriften in PDF einbetten. Dadurch bleiben das Layout und das Aussehen des Dokuments erhalten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation>Länge eines Effekts. Je kürzer, desto schneller ist der Effekt, je länger, desto langsamer.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation>Geben Sie, durch Kommata getrennt, die Seiten ein, die verarbeitet werden sollen. * steht für alle Seiten, 1-5 für einen Bereich oder eine einzelne Seite. </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation>Legt die Bindung für PDF-Dateien fest. Nur verändern, wenn Sie es wirklich brauchen. Standard: Links.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation>Erzeugt kleine Vorschaubilder von jeder Seite. Einige PDF-Betrachter nutzen diese Vorschaubilder zur Navigation.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation>Fügt die Lesezeichen mit in die PDF-Datei ein. So können Sie in langen PDF-Dateien besser navigieren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation>Auflösung für Text und Vektorgrafiken. Beeinflusst nicht die Auflösung von Bitmapdaten wie Fotos.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation>Aktiviert verlustlose Komprimierung von Text und Grafiken. Verringert die Grösse der PDF-Datei. Nicht ohne Grund deaktivieren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
        <translation>Methode für die Komprimierung von Bitmapdaten. Automatisch bedeutet, dass Scribus die beste Methode wählt. ZIP ist verlustlos und gut für Bilder mit flächigen Farben. Mit JPEG erzeugen Sie kleinere PDFs, geeignet für viele Fotos. Hier können kleinere Qualitätsverluste auftreten. Empfehlung: Verändern Sie die Methode Automatisch nur, wenn Sie es wirklich benötigen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation>Aktiviert die Sicherheitsfunktionen in der exportierten PDF-Datei. Wenn Sie PDF 1.3 gewählt haben, wird die Datei mit 40-Bit-Verschlüsselung geschützt, bei PDF 1.4 wird 128-Bit-Verschlüsselung verwendet. Warnung: PDF-Verschlüsselung ist nicht so verlässlich wie GPG- oder PGP-Verschlüsselung und besitzt einige Einschränkungen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation>Wählen Sie ein Master-Passwort, das alle Sicherheitsfunktionen in der PDF-Datei aktiviert oder deaktiviert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation>Erlaubt das Entnehmen von Text oder Grafiken aus der PDF-Datei. Falls nicht aktiviert, können Texte oder Grafiken nicht kopiert werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation>Erlaubt das Hinzufügen von Anmerkungen. Falls nicht aktiviert, können keine Anmerkungen eingefügt werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation>Die ist eine fortgeschrittene Einstellung, die standardmässig nicht aktiviert ist. Sie sollte nur aktiviert werden, wenn dies ausdrücklich von Ihrer Druckerei gefordert wird und diese Ihnen alle benötigten Details mitgeteilt hat. Ansonsten könnte Ihre PDF-Datei nicht korrekt gedruckt werden und Probleme beim plattformübergreifenden Datenaustausch bereiten.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation>Vorgeschriebener Text für PDF/X-3, ohne den die Datei nicht der PDF/X-3-Spezifikation entspricht. Wir empfehlen, den Titel des Dokumentes zu verwenden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Ermöglicht die Umwandlung von Schmuck- in Prozessfarben. Solange Sie Schmuckfarben nicht wirklich benötigen, sollten Sie dies am besten aktiviert lassen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Include La&amp;yers</source>
        <translation>&amp;Ebenen exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Compression Metho&amp;d:</source>
        <translation>Kom&amp;primierungsmethode:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resa&amp;mple Images to:</source>
        <translation>Bilder &amp;neu berechnen auf:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display Settings</source>
        <translation>Anzeigeeinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Single Page</source>
        <translation>Einzelne Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Continuous</source>
        <translation>Fortlaufend</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Page Left</source>
        <translation>Doppelseite links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Double Page Right</source>
        <translation>Doppelseite rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Visual Appearance</source>
        <translation>Anzeige</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Viewers Defaults</source>
        <translation>Standardeinstellung des Betrachters verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Full Screen Mode</source>
        <translation>Vollbildmodus verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display Bookmarks Tab</source>
        <translation>Lesezeichen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display Thumbnails</source>
        <translation>Vorschaubilder anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Display Layers Tab</source>
        <translation>Reiter für Ebenen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hide Viewers Toolbar</source>
        <translation>Symbolleisten ausblenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hide Viewers Menubar</source>
        <translation>Menüleiste ausblenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Zoom Pages to fit Viewer Window</source>
        <translation>Seiten auf Grösse des Betrachterfensters zoomen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Special Actions</source>
        <translation>Erweiterte Aktionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No Script</source>
        <translation>Kein Script</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Viewer</source>
        <translation>Betrachter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clip to Page Margins</source>
        <translation>Auf Seitenränder beschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lossy - JPEG</source>
        <translation>Verlustbehaftet - JPEG</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lossless - Zip</source>
        <translation>Verlustlos - Zip</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image Compression Method</source>
        <translation>Kompressionsmethode für Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation>Javascript, das beim Öffnen
der PDF-Datei ausgeführt wird:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation>Aktiviert die Präsentationseffekte beim Öffnen der Datei in Adobe&amp;#174; Reader&amp;#174; im Vollbildmodus und anderen PDF-Betrachtern, die diese unterstützen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation>Ebenen werden mit exportiert. Nur in PDF-1.5-Dateien möglich.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation>Objekte ausserhalb des Seitenrandes nicht exportieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation>Dauer, für die die Seite angezeigt wird, bevor die Präsenation auf der Seite startet. Bei 0 werden die Übergänge deaktiviert.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation>Berechnet die Auflösung von Bitmap-Grafiken in der gewünschten Höhe neu. 
Ansonsten wird die ursprüngliche Auflösung verwendet. Die Aktivierung dieser 
Option kann den Speicherbedarf erhöhen und die Ausgabe verlangsamen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation>Farbmodell für die Ausgabe der PDF-Datei.
Wählen Sie Monitor/Internet für PDF-Dateien, die auf dem Monitor angezeigt oder mit herkömmlichen Druckern gedruckt werden sollen.
Wählen Sie Drucker, um die PDF-Datei auf einem CMYK-Drucker auszugeben Wählen Sie Graustufen, wenn Sie eine Graustufen-PDF benötigen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Force Overprint Mode</source>
        <translation>Überdrucken erzwingen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation>Aktiviert den Überdrucken-Modus für das ganze Dokument. Einstellungen für einzelne Objekte
werden ignoriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Determines the PDF compatibility.&lt;br/&gt;The default is &lt;b&gt;PDF 1.3&lt;/b&gt; which gives the widest compatibility.&lt;br/&gt;Choose &lt;b&gt;PDF 1.4&lt;/b&gt; if your file uses features such as transparency or you require 128 bit encryption.&lt;br/&gt;&lt;b&gt;PDF 1.5&lt;/b&gt; is necessary when you wish to preserve objects in separate layers within the PDF.&lt;br/&gt;&lt;b&gt;PDF/X-3&lt;/b&gt; is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation>Legt die Kompatibilität der PDF-Datei fest. Standard ist PDF 1.3 mit der grössten Kompatibilität. Mit PDF 1.4 können Sie Transparenz und 128bit-Verschlüsselung verwenden. PDF 1.5 ist notwendig, wenn Sie Ebenen in der PDF-Datei erhalten möchten. PDF/X-3 ist vorgesehen für kommerziellen RGB-Druck mit Farbprofilen. Es ist nur verfügbar, wenn Farbprofile aktiviert sind - verwenden Sie PDX/X-3 nur, wenn Ihre Druckerei das wünscht oder beim Druck auf einem Vierfarb-Laserdrucker.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Embed all</source>
        <translation>&amp;Alle einbetten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fonts to outline:</source>
        <translation>In Kurven umwandeln:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Outline all</source>
        <translation>Alle in &amp;Kurven umwandeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer Marks</source>
        <translation>Druckermarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Crop Marks</source>
        <translation>Schneidemarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleed Marks</source>
        <translation>Anschnittmarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Registration Marks</source>
        <translation>Registrierungsmarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Bars</source>
        <translation>Farbbalken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Information</source>
        <translation>Seiteninformation</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Offset:</source>
        <translation>Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleed Settings</source>
        <translation>Anschnitteinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top:</source>
        <translation>Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bottom:</source>
        <translation>Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left:</source>
        <translation>Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right:</source>
        <translation>Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Document Bleeds</source>
        <translation>Dokumenteinstellungen für Anschnitt verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pre-Press</source>
        <translation>Pre-Press</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert all glyphs in the document to outlines.</source>
        <translation>Alle Zeichen im Dokument in Kurven umwandeln.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
        <translation>Komprimierungsqualität für verlustbehaftete Komprimierung: Minimum (25%), Niedrig (50%), Mittel (75%) und Maximum (95%). Diese Einstellung wirkt sich nicht direkt auf die Grösse der Bilder aus, weil Grösse und Qualitätsverlust von Bild zu Bild variieren. Selbst wenn &quot;Maximum&quot; ausgewählt ist, tritt immer ein gewisser Qualitätsverlust bei JPEG auf.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Inside:</source>
        <translation>Innen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Outside:</source>
        <translation>Aussen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document Layout</source>
        <translation>Dokumentlayout</translation>
    </message>
</context>
<context>
    <name>TabPrinter</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Zugabe für Anschnitt oben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Zugabe für Anschnitt unten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Zugabe für Anschnitt links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Zugabe für Anschnitt rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation>Objekte ausserhalb des Satzspiegels nicht drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation>Einen alternativen Druckmanager, etwa kprinter oder gtklp, für weitere Druckoptionen verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation>Legt die Postscript-Version fest. 
Postscript Level 1 und 2 haben häufig sehr grosse Dateien zur Folge</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Verwendet echtes Schwarz anstelle von Farbmischungen aus Magenta, Gelb und Cyan. UFR hat den grössten Effekt auf Bilder, die neutrale oder dunkle Farbtöne haben, die Grau ähneln. Diese Option kann die Druckqualität verbessern. Testen Sie bitte von Fall zu Fall, wie Sie bessere Ergebnisse erhalten. UFR verringert ausserdem die Gefahr einer Übersättigung der CMYK-Farben.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Ermöglicht die Umwandlung von Schmuckfarben zu Prozessfarben. Solange Sie keine Schmuckfarben in einer Druckerei drucken möchten, sollten Sie diese Option aktiviert lassen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation>Aktiviert den Überdrucken-Modus für das ganze Dokument. Objektbezogene Einstellungen werden ignoriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation>Erlaubt das Einbetten von ICC-Profilen in den Druckdatenstrom, wenn das Farbmanagement aktiviert ist</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation>Legen Sie die Druckgrösse der Postscript-Datei explizit fest. Nur aktivieren, wenn ihre Druckerei das verlangt.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
</context>
<context>
    <name>TabPrinterBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Destination</source>
        <translation>Ausgabeziel</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alternative Printer Command</source>
        <translation>Alternativer Druckbefehl</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Command:</source>
        <translation>Befehl:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Postscript Options</source>
        <translation>Postscript-Optionen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Level 1</source>
        <translation>Level 1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Level 2</source>
        <translation>Level 2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Level 3</source>
        <translation>Level 3</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print in Color if Available</source>
        <translation>In Farbe drucken, falls möglich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print in Grayscale</source>
        <translation>In Graustufen drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page</source>
        <translation>Seite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation>Seite(n) horizontal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mirror Page(s) Vertical</source>
        <translation>Seite(n) vertikal spiegeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set Media Size</source>
        <translation>Mediengrösse festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Clip to Page Margins</source>
        <translation>Auf Seitenränder beschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply Under Color Removal</source>
        <translation>Unterfarbenreduktion anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Schmuckfarben in Prozessfarben umwandeln</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Force Overprint Mode</source>
        <translation>Überdrucken erzwingen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply ICC Profiles</source>
        <translation>ICC-Profile anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Normal</source>
        <translation>Normal drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Print Separations</source>
        <translation>Farbseparationen drucken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Marks &amp;&amp; Bleeds</source>
        <translation>Marken und Anschnitt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Printer Marks</source>
        <translation>Druckermarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Crop Marks</source>
        <translation>Schneidemarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleed Marks</source>
        <translation>Anschnittmarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Registration Marks</source>
        <translation>Registrierungsmarken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Offset:</source>
        <translation>Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color Bars</source>
        <translation>Farbbalken</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bleed Settings</source>
        <translation>Anschnitteinstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Top:</source>
        <translation>Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bottom:</source>
        <translation>Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Left:</source>
        <translation>Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right:</source>
        <translation>Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>TabPrinterBase</source>
        <translation>TabPrinterBase</translation>
    </message>
</context>
<context>
    <name>TabScrapbookBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Send Copied Items Automatically to Scrapbook</source>
        <translation>Kopierte Objekte automatisch zur Bibliothek hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This enables the scrapbook to be used an extension to the copy/paste buffers. Simply copying an object or grouped object will send this to the Scrapbook automatically</source>
        <translation>Mit dieser Funktion kann die Bibliothek kann als Erweiterung der Zwischenablage genutzt werde. Das einfache Kopieren eines Objekts oder einer Gruppe von Objekten sendet diese automatisch an die Bibliothek</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keep Copied Items Permanently Across Sessions</source>
        <translation>Kopierte Objekte dauerhaft bereithalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This enables copied items to be kept permanently in the scrapbook.</source>
        <translation>Mit dieser Funktion können kopierte Objekte dauerhaft der Bibliothek hinzugefügt werden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of Copied Items to Keep in Scrapbook:</source>
        <translation>Anzahl der kopierten Objekte in der Bibliothek:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The minimum number is 1; the maximum us 100.</source>
        <translation>Das Minimum ist 1, das Maximum 100.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>TabScrapbookBase</source>
        <translation>TabScrapbookBase</translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Font:</source>
        <translation>Schrift:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size:</source>
        <translation>Grösse:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Color:</source>
        <translation>Füllfarbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Stroke Color:</source>
        <translation>Linienfarbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tab Fill Character:</source>
        <translation>Füllzeichen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tab Width:</source>
        <translation>Tab-Breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Spalten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Gap:</source>
        <translation>A&amp;bstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Falsches Üben von Xylophonmusik quält jeden grösseren Zwerg</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Line Color:</source>
        <translation>Linien&amp;farbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Shading:</source>
        <translation>&amp;Tonwert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Fill Color:</source>
        <translation>Füll&amp;farbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;hading:</source>
        <translation>&amp;Tonwert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Style:</source>
        <translation>Linienstil:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line &amp;Width:</source>
        <translation>Linien&amp;breite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line S&amp;tyle:</source>
        <translation>Liniens&amp;til:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Arrows:</source>
        <translation>Pfeile:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Start:</source>
        <translation>Anfang:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>End:</source>
        <translation>Ende:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Freie Skalierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Horizontal Scaling:</source>
        <translation>&amp;Horizontal skalieren:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Vertical Scaling:</source>
        <translation>&amp;Vertikal skalieren:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation>Bild an &amp;Rahmen anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keep Aspect &amp;Ratio</source>
        <translation>Seitenverhältnisse beibe&amp;halten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>F&amp;ill Color:</source>
        <translation>Füll&amp;farbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Use embedded Clipping Path</source>
        <translation>Eingebetteten Pfad verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>On Screen Preview</source>
        <translation>Vorschau</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Full Resolution Preview</source>
        <translation>Vorschau in voller Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Normal Resolution Preview</source>
        <translation>Vorschau in normaler Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Low Resolution Preview</source>
        <translation>Vorschau in geringer Auflösung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Mi&amp;nimum:</source>
        <translation>Mini&amp;mum:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ma&amp;ximum:</source>
        <translation>Ma&amp;ximum:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Stepping:</source>
        <translation>Schritt&amp;weite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Frame Properties</source>
        <translation>Einstellungen für Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Picture Frame Properties</source>
        <translation>Einstellungen für Bildrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shape Drawing Properties</source>
        <translation>Einstellungen für Formen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Magnification Level Defaults</source>
        <translation>Einstellungen für Vergrösserungsstufen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Drawing Properties</source>
        <translation>Eigenschaften von Linien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polygon Drawing Properties</source>
        <translation>Eigenschaften von Polygonen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Font for new text frames</source>
        <translation>Schrift für neue Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Size of font for new text frames</source>
        <translation>Schriftgrösse für neue Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of font</source>
        <translation>Schriftfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Number of columns in a text frame</source>
        <translation>Anzahl der Spalten in neuen Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Gap between text frame columns</source>
        <translation>Abstand zwischen den Spalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sample of your font</source>
        <translation>Vorschau der gewählten Schrift</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation>Bildrahmen ermöglicht das Skalieren auf eine beliebige Grösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal scaling of images</source>
        <translation>Horizontale Skalierung des Bildes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical scaling of images</source>
        <translation>Vertikale Skalierung des Bildes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation>Seitenverhältnisse beibehalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation>Bilder werden auf die Grösse des Rahmens skaliert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation>Bilder behalten ihre ursprünglichen Seitenverhältnisse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill color of picture frames</source>
        <translation>Füllfarbe für Bildrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color of fill</source>
        <translation>Intensität der Füllfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line color of shapes</source>
        <translation>Linienfarbe der Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color of lines</source>
        <translation>Intensität der Linienfarbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill color of shapes</source>
        <translation>Füllfarbe der Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line style of shapes</source>
        <translation>Linienstil der Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line width of shapes</source>
        <translation>Linienbreite der Form</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Minimum magnification allowed</source>
        <translation>Kleinstmögliche Vergrösserungsstufe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Maximum magnification allowed</source>
        <translation>Grösstmögliche Vergrösserungstufe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change in magnification for each zoom operation</source>
        <translation>Abstand zwischen zwei Vergrösserungsstufen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color of lines</source>
        <translation>Farbe der Linien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Saturation of color</source>
        <translation>Tonwert der Farbe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Style of lines</source>
        <translation>Linienstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Width of lines</source>
        <translation>Linienbreite</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Color:</source>
        <translation>Textfarbe:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shading:</source>
        <translation>Tonwert:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text Stroke:</source>
        <translation>Umriss:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dot</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hyphen</source>
        <translation>Trennstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underscore</source>
        <translation>Unterstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>tab fill</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Shapes</source>
        <translation>Formen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lines</source>
        <translation>Linien</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Images</source>
        <translation>Bilder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Regular Polygons</source>
        <translation>Gleichmässige Polygone</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Zoom</source>
        <translation>Vergrösserung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotation Tool</source>
        <translation>Rotationswerkzeug</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Constrain to:</source>
        <translation>Beschränken auf:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Other Properties</source>
        <translation>Weitere Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Miscellaneous Settings</source>
        <translation>Weitere Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Item Duplicate</source>
        <translation>Objekt kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X Displacement</source>
        <translation>X-Versatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Y Displacement</source>
        <translation>Y-Versatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Horizontal displacement of page items</source>
        <translation>Horizontaler Versatz beim Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Vertical displacement of page items</source>
        <translation>Vertikaler Versatz beim Kopieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Constrain value for the rotation tool when the Control key is pressed</source>
        <translation>Schritte beim Anwenden des Rotationswerkzeuges mit gedrückter Strg-Taste</translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Subscript</source>
        <translation>Tiefgestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Displacement:</source>
        <translation>&amp;Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Scaling:</source>
        <translation>Ska&amp;lierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Superscript</source>
        <translation>Hochgestellt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>D&amp;isplacement:</source>
        <translation>&amp;Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>S&amp;caling:</source>
        <translation>Ska&amp;lierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underline</source>
        <translation>Unterstrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement:</source>
        <translation>Versatz:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Width:</source>
        <translation>Linienbreite:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Strikethru</source>
        <translation>Durchgestrichen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Small Caps</source>
        <translation>Kapitälchen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Sc&amp;aling:</source>
        <translation>Ska&amp;lierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic &amp;Line Spacing</source>
        <translation>Auto&amp;matischer Zeilenabstand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line Spacing:</source>
        <translation>Zeilenabstand:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement above the baseline of the font on a line</source>
        <translation>Versatz über der Grundlinie auf einer Zeile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation>Relative Grösse der tiefgestellen Buchstaben im Vergleich zur normalen Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation>Versatz unter der Grundlinie auf einer Zeile</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation>Relative Grösse der hochgestellten Buchstaben im Vergleich zur normalen Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation>Relative Grösse der Kapitälchen im Vergleich zur normalen Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation>Prozentuale Vergrösserung des Zeilenabstandes zur Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
        <translation>Versatz unterhalb der Grundlinie der normalen Schrift als Prozentwert der Grösse des Unterbandes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Line width expressed as a percentage of the font size</source>
        <translation>Linienstärke ausgedrückt in Prozent bezogen auf die Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
        <translation>Versatz über der Grundlinie der Schrift als Prozentwert der Grösse des Oberbandes</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Full Stop</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Comma</source>
        <translation>Komma</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Center</source>
        <translation>Zentriert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete All</source>
        <translation>Alle löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Indentation for first line of the paragraph</source>
        <translation>Einzug für die erste Zeile des Absatzes</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Einzug von links für den ganzen Absatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete all Tabulators</source>
        <translation>Alle Tabulatoren löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Position:</source>
        <translation>&amp;Position:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Fill Char:</source>
        <translation>Füllzeichen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Dot</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hyphen</source>
        <translation>Trennstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Underscore</source>
        <translation>Unterstrich</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Custom</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>None</source>
        <comment>tab fill</comment>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Indentation from the right for the whole paragraph</source>
        <translation>Rechter Einzug für den gesamten Absatz</translation>
    </message>
</context>
<context>
    <name>TextBrowser</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Locate your web browser</source>
        <translation>Wählen Sie Ihren Webbrowser</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>External Web Browser Failed to Start</source>
        <translation>Fehler beim Starten des externen Browsers</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scribus was not able to start the external web browser application %1. Please check the setting in Preferences</source>
        <translation>Scribus konnte den Browser %1 nicht starten. Bitte überprüfen Sie Ihre Einstellungen</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Outline</source>
        <translation>Übersicht</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Element</source>
        <translation>Objekt</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group </source>
        <translation>Gruppe</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Free Objects</source>
        <translation>Freie Objekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page </source>
        <translation>Seite </translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Free items</source>
        <translation>Freie Objekte</translation>
    </message>
</context>
<context>
    <name>UnderlineValues</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Displacement</source>
        <translation>
Versatz</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Linewidth</source>
        <translation>Linienstärke</translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Add vertical guide</source>
        <translation>Vertikale Hilfslinie hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add horizontal guide</source>
        <translation>Horizontale Hilfslinie hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove vertical guide</source>
        <translation>Vertikale Hilfslinie entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove horizontal guide</source>
        <translation>Horizontale Hilfslinie entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move vertical guide</source>
        <translation>Vertikale Hilfslinie verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move horizontal guide</source>
        <translation>Horizontale Hilfslinie verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lock guides</source>
        <translation>Hilfslinien sperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unlock guides</source>
        <translation>Hilfslinien entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Move</source>
        <translation>Verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Resize</source>
        <translation>Grösse ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rotate</source>
        <translation>Drehung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
        <translation>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
        <translation>W1: %1, H1: %2
W2: %3, H2: %4</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selection</source>
        <translation>Markierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Group</source>
        <translation>Gruppieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Selection/Group</source>
        <translation>Gruppe markieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create</source>
        <translation>Erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align/Distribute</source>
        <translation>Ausrichten/Verteilen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Items involved</source>
        <translation>Einbezogene Objekte</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set fill color</source>
        <translation>Füllfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Color1: %1, Color2: %2</source>
        <translation>Farbe1: %1, Farbe2: %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set fill color shade</source>
        <translation>Tonwert der Füllfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set line color</source>
        <translation>Linienfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set line color shade</source>
        <translation>Tonwert der Linienfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flip horizontally</source>
        <translation>Horizontal kippen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Flip vertically</source>
        <translation>Vertikal kippen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lock</source>
        <translation>Sperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unlock</source>
        <translation>Entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lock size</source>
        <translation>Grösse sperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Unlock size</source>
        <translation>Grösse entsperren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Ungroup</source>
        <translation>Gruppe auflösen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rename</source>
        <translation>Umbenennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>From %1
to %2</source>
        <translation>Von %1
bis %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply Master Page</source>
        <translation>Musterseite anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Paste</source>
        <translation>Einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cut</source>
        <translation>Ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set fill color transparency</source>
        <translation>Deckkraft der Füllfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set line color transparency</source>
        <translation>Deckkraft der Linienfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set line style</source>
        <translation>Linienstil festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set the style of line end</source>
        <translation>Endstil der Linie festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set the style of line join</source>
        <translation>Eckenstil der Linien festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set line width</source>
        <translation>Linienbreite festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No style</source>
        <translation>Kein Stil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set custom line style</source>
        <translation>Benutzerdefinierter Linienstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Do not use custom line style</source>
        <translation>Keinen benutzerdefinierten Linienstil verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set start arrow</source>
        <translation>Startpfeil festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set end arrow</source>
        <translation>Endpfeil festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Create table</source>
        <translation>Tabelle erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rows: %1, Cols: %2</source>
        <translation>Zeilen: %1, Spalten: %2</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font</source>
        <translation>Schrift festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font size</source>
        <translation>Schriftgrösse festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font width</source>
        <translation>Breite der Schrift festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font height</source>
        <translation>Höhe der Schrift festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font fill color</source>
        <translation>Füllfarbe der Schrift festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font stroke color</source>
        <translation>Linienfarbe der Schrift festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font fill color shade</source>
        <translation>Tonwert der Füllfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font stroke color shade</source>
        <translation>Tonwert der Linienfarbe festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set kerning</source>
        <translation>Unterschneidung festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set line spacing</source>
        <translation>Zeilenabstand festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set paragraph style</source>
        <translation>Absatzstil festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set language</source>
        <translation>Sprache festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Align text</source>
        <translation>Text ausrichten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set font effect</source>
        <translation>Texteffekt anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Image frame</source>
        <translation>Bildrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text frame</source>
        <translation>Textrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polygon</source>
        <translation>Polygon</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Bezier curve</source>
        <translation>Bézierkurve</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Polyline</source>
        <translation>Polylinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Convert to</source>
        <translation>Umwandeln in</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import SVG image</source>
        <translation>SVG-Bild importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import EPS image</source>
        <translation>EPS-Datei importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import OpenOffice.org Draw image</source>
        <translation>OpenOffice.org-Zeichnung importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Scratch space</source>
        <translation>Ablagefläche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text flows around the frame</source>
        <translation>Text umfliesst den Rahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text flows around bounding box</source>
        <translation>Text umfliesst die Bounding Box</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text flows around contour line</source>
        <translation>Text umfliesst Konturlinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No text flow</source>
        <translation>Kein Textfluss</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No bounding box</source>
        <translation>Keine Bounding Box</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No contour line</source>
        <translation>Keine Kontourlinie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page %1</source>
        <translation>Seite %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set image scaling</source>
        <translation>Bildgrösse festlegen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Frame size</source>
        <translation>Rahmengrösse</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Free scaling</source>
        <translation>Freie Skalierung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Keep aspect ratio</source>
        <translation>Grössenverhältnis beibehalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Break aspect ratio</source>
        <translation>Grössenverhältnis nicht beibehalten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit contour line</source>
        <translation>Konturlinie bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Edit shape</source>
        <translation>Form bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset contour line</source>
        <translation>Konturlinie zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add page</source>
        <translation>Seite hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add pages</source>
        <translation>Seiten hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete page</source>
        <translation>Seite löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete pages</source>
        <translation>Seiten löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add layer</source>
        <translation>Ebene hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Delete layer</source>
        <translation>Ebene löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Rename layer</source>
        <translation>Ebene umbenennen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Raise layer</source>
        <translation>Ebene nach oben verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Lower layer</source>
        <translation>Ebene nach unten verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send to layer</source>
        <translation>Auf Ebene verschieben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable printing of layer</source>
        <translation>Drucken der Ebene aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Disable printing of layer</source>
        <translation>Drucken der Ebene deaktiveren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change name of the layer</source>
        <translation>Name der Ebene ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Get image</source>
        <translation>Bild laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Text on a Path</source>
        <translation>Text auf einem Pfad</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enable Item Printing</source>
        <translation>Objekt drucken aktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Disable Item Printing</source>
        <translation>Objekt drucken deaktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Multiple duplicate</source>
        <translation>Mehrfach duplizieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change Image Offset</source>
        <translation>Bildposition ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Change Image Scale</source>
        <translation>Bildgrösse ändern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X1: %1, Y1: %2
X2: %4, Y2: %5</source>
        <translation>X1: %1, Y1: %2
X2: %4, Y2: %5</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>X: %1, Y: %2
X: %4, Y: %5</source>
        <translation>X: %1, Y: %2
X: %4, Y: %5</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply text style</source>
        <translation>Textstil anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo: %1</source>
        <comment>f.e. Undo: Move</comment>
        <translation>&amp;Rückgängig: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo</source>
        <translation>&amp;Rückgängig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo: %1</source>
        <comment>f.e. Redo: Move</comment>
        <translation>&amp;Wiederherstellen: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No object frame</source>
        <translation>Kein Objektrahmen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset control point</source>
        <translation>Kontrollpunkt zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Reset control points</source>
        <translation>Kontrollpunkte zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply image effects</source>
        <translation>Bildeffekte anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert frame</source>
        <translation>Rahmen einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Adjust frame to the image size</source>
        <translation>Rahmen an Bildgrösse anpassen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Set start and end arrows</source>
        <translation>Legen Sie Anfangs- und Endpfeile fest</translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Initial State</source>
        <translation>Anfangszustand</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Action History</source>
        <translation>Aktionsverlauf</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Show selected object only</source>
        <translation>Nur markiertes Objekt anzeigen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Undo</source>
        <translation>&amp;Rückgängig</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Redo</source>
        <translation>Wieder&amp;herstellen</translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <location filename="" line="136643300"/>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation>%1: %2</translation>
    </message>
</context>
<context>
    <name>UnicodeSearchBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Unicode Search</source>
        <translation>Unicode-Suche</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Search:</source>
        <translation>&amp;Suche:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Hex</source>
        <translation>Hex</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Meaning</source>
        <translation>Bezeichnung</translation>
    </message>
</context>
<context>
    <name>UpgradeChecker</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Attempting to get the Scribus version update file</source>
        <translation>Versuche die Scribus-Update-Datei zu laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>(No data on your computer will be sent to an external location)</source>
        <translation>(Es werden keine Daten von Ihrem Computer übermittelt)</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Timed out when attempting to get update file.</source>
        <translation>Zeitüberschreitung beim Versuch, die Update-Datei zu laden.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Error when attempting to get update file: %1</source>
        <translation>Fehler beim Versuch, die Update-Datei zu laden: %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>File not found on server</source>
        <translation>Datei nicht auf dem Server gefunden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
        <translation>Konnte die Versionsdatei nicht öffnen: %1
Fehler:%2 in Zeile: %3, Spalte %4</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
        <translation>Fehler bei der Suche nach Updates für Scribus. Bitte überprüfen Sie Ihre Internetverbindung.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>No updates are available for your version of Scribus %1</source>
        <translation>Es sind keine Updates für Ihre Scribus-Version verfügbar %1</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>One or more updates for your version of Scribus (%1) are available:</source>
        <translation>Es sind ein oder mehrere Updates für Ihre Scribus-Version verfügbar:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Please visit www.scribus.net for details.</source>
        <translation>Bitte besuchen Sie www.scribus.net, um näheres zu erfahren.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>This list may contain development versions.</source>
        <translation>Diese Liste könnte Entwicklerversionen enthalten.</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Minimum Margins for Page Size %1</source>
        <translation>Minimale Seitenränder für Seitengrösse %1</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialogBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Use Printer Margins</source>
        <translation>Druckerränder verwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Select &amp;Printer:</source>
        <translation>&amp;Drucker wählen:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Margins</source>
        <translation>Ränder</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Right:</source>
        <translation>Rechts:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Top:</source>
        <translation>&amp;Oben:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Bottom:</source>
        <translation>&amp;Unten:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Cancel</source>
        <translation>A&amp;bbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Insert value</source>
        <translation>Wert einfügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enter a value then press OK.</source>
        <translation>Geben Sie einen Wert ein und klicken Sie auf OK.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Enter a value then press OK</source>
        <translation>Geben Sie einen Wert ein und klicken Sie auf OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Send your value to the script</source>
        <translation>Wert an das Script senden</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose the importer to use</source>
        <translation>Wählen Sie den Importfilter aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import text without any formatting</source>
        <translation>Text ohne Formatierung importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Importer:</source>
        <translation>Importfilter:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Encoding:</source>
        <translation>Kodierung:</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Import Text Only</source>
        <translation>Nur Text importieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose the importer to use</source>
        <translation>Wählen Sie den Importfilter aus</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remember association</source>
        <translation>Verknüpfung mit Importfilter speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation>Die Verknüpfung von Dateityp und Importfilter speichern und nicht mehr nachfragen.</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>New From Template</source>
        <translation>Neu von Vorlage</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Size</source>
        <translation>Seitenformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colors</source>
        <translation>Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Description</source>
        <translation>Beschreibung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Usage</source>
        <translation>Verwendungszweck</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Created with</source>
        <translation>Erstellt mit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Remove</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Open</source>
        <translation>&amp;Öffnen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Downloading Templates</source>
        <translation>Vorlagen herunterladen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Installing Templates</source>
        <translation>Vorlagen installieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Bitte entpacken Sie die Vorlage nach ~/.scribus/templates für sich selbst oder nach PREFIX/share/scribus/templates für alle Benutzer.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Preparing a template</source>
        <translation>Vorlage vorbereiten</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Removing a template</source>
        <translation>Vorlage entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Translating template.xml</source>
        <translation>template.xml übersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Weitere Dokumentvorlagen finden Sie unter http://www.scribus.net/ im Download-Bereich.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Sie müssen sicherstellen, dass Bilder und Schriften frei benutzt werden können. Wenn Sie Schriften nicht verbreiten dürfen, dann binden Sie diese beim Export als Vorlage nicht ein.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>Wenn Sie Vorlagen erstellen, sollten Sie darauf achten, dass Sie die Informationen im Abschnitt &quot;Vorlagen installieren&quot; beachten. Das bedeutet, Benutzer sollten in der Lage sein, die Vorlage einfach in das entsprechende Verzeichnis zu kopieren und zu benutzen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Wenn Sie eine Vorlage von dieser Liste entfernen, wird nur der entsprechende Eintrag in der Datei template.xml gelöscht, nicht die Vorlage selbst. Sie können Vorlagen nur löschen, wenn Sie Schreibrechte für template.xml besitzen.</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Kopieren Sie die existierende template.xml in eine Datei mit der Bezeichnung template.lang_COUNTRY.xml (ersetzen Sie COUNTRY durch denselben Ländercode wie bei den po/qm-Dateien für Ihre Sprache), zum Beispiel template.fi.xml für Finnisch. Diese Kopie muss sich im selben Verzeichnis wie template.xml befinden.</translation>
    </message>
</context>
<context>
    <name>patternDialogBase</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Patterns</source>
        <translation>Füllmuster</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load</source>
        <translation>Laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Load Set</source>
        <translation>Satz laden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove All</source>
        <translation>Alle entfernen</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Save as Template</source>
        <translation>Als Vorlage speichern</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Category</source>
        <translation>Kategorie</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Page Size</source>
        <translation>Seitenformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Colors</source>
        <translation>Farben</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Description</source>
        <translation>Beschreibung</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Usage</source>
        <translation>Verwendungszweck</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Email</source>
        <translation>Email</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>More Details</source>
        <translation>Mehr Details</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Less Details</source>
        <translation>Weniger Details</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Letter</source>
        <translation>US-Letter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>custom</source>
        <translation>Benutzerdefiniert</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Create filter</source>
        <translation>Filter erstellen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>C&amp;lear</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>&amp;Delete</source>
        <translation>&amp;Löschen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Choose a previously saved filter</source>
        <translation>Gespeicherten Filter auswählen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Give a name to this filter for saving</source>
        <translation>Geben Sie einen Namen für diesen Filter ein</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Give a name for saving</source>
        <translation>Name des Filters</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <location filename="" line="136643300"/>
        <source>Disable or enable this filter row</source>
        <translation>Diese Zeile aktivieren oder deaktivieren</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove this filter row</source>
        <translation>Diese Zeile entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Add a new filter row</source>
        <translation>Neue Zeile hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>to</source>
        <translation>bis</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>and</source>
        <translation>und</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>remove match</source>
        <translation>Ergebnisse entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>do not remove match</source>
        <translation>Ergebnisse nicht entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>words</source>
        <translation>Wörter</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Replace</source>
        <translation>Ersetzen</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Apply</source>
        <translation>Anwenden</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>Value at the left is a regular expression</source>
        <translation>Linker Wert ist ein regulärer Ausdruck</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>with</source>
        <translation>mit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>paragraph style</source>
        <translation>Absatzstil</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>all instances of</source>
        <translation>Alle Instanzen von</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>all paragraphs</source>
        <translation>Alle Absätze</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>paragraphs starting with</source>
        <translation>Absätze beginnen mit</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>paragraphs with less than</source>
        <translation>Absätze mit weniger als</translation>
    </message>
    <message>
        <location filename="" line="136643300"/>
        <source>paragraphs with more than</source>
        <translation>Absätze mit mehr als</translation>
    </message>
</context>
</TS>
