<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFontSize([&quot;nazwa&quot;]) -&gt; float

Zwraca rozmiar czcionki w punktach dla ramki tekstowej &quot;nazwa&quot;. Jeśli ta ramka 
tekstowa zawiera jakiś zaznaczony tekst, zwracana jest wartość przypisana do pierwszej litery zaznaczonego tekstu.
Jeśli nie zostanie podana &quot;nazwa&quot;, użyty zostanie aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation>getColorNames() -&gt; list

Zwraca listę zawierającą nazwy wszystkich zdefiniowanych kolorów w danym dokumencie.
Jeśli nie jest aktualnie otwarty żaden dokument, zwrócona zostanie lista wszystkich domyślnych kolorów.</translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation>newDocDialog() -&gt; bool

Wyświetla okno dialogowe &quot;Nowy dokument&quot;. Tworzy nowy dokument, jeśli użytkownik zaakceptuje ustawienia. Nie tworzy dokumentu, jeśli użytkownik naciśnie na przycisk 
&quot;Anuluj&quot;. Zwraca true, jeśli dokument zostanie utworzony.</translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;nazwa&quot;]) -&gt; string

Zwraca nazwę koloru wypełnienia obiektu &quot;nazwa&quot;.
Jeśli nie zostanie podana &quot;nazwa&quot;, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation>moveObject(dx, dy [, &quot;nazwa&quot;])

Przesuwa obiekt &quot;nazwa&quot; o dx i dy w stosunku do aktualnej pozycji.
Odległości podawane są w aktualnych jednostkach miary dla danego dokumentu (zobacz
stałe UNIT). Jeśli &quot;nazwa nie zostanie podana, użyty zostanie aktualnie wybrany obiekt.
Jeśli obiekt &quot;nazwa&quot; należy do grupy, zostanie przesunięta cała grupa.</translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation>setRedraw(bool)

Blokuje aktualizację widoku strony, kiedy bool = False, w innym przypadku aktualizowanie jest włączone.
Ta zmiana zachowa ważność po zakończeniu pracy skryptu, pamiętaj więc, aby wykonać
setRedraw(True) w  finally: na samym dole skryptu.</translation>
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
        <translation>createRect(x, y, width, height, [&quot;nazwa&quot;]) -&gt; string

Tworzy nowy prostokąt na aktualnej stronie i zwraca jego nazwę. 
Współrzędne podaje się w aktualnych jednostkach miar dla danego dokumentu.
(zobacz stałe UNIT). &quot;nazwa&quot; powinna być jednoznacznym identyfikatorem obiektu, 
ponieważ będziesz potrzebował jej, aby przywoływać ten obiekt w przyszłości.
Jeśli nie zostanie podana, Scribus utworzy ją za ciebie.

Może zwrócić błąd NameExistsError, jeśli podasz nazwę, która już jest w użyciu.</translation>
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
        <translation>newPage(gdzie [,&quot;szablon&quot;])

Tworzy nową stronę. Creates a new page. Jeśli &quot;gdzie&quot; jest równe -1, nowa strona zostanie dołączona
do dokumentu, w innym przypadku nowa strona zostanie wklejona przed &quot;gdzie&quot;. Numery stron są
liczone od 1 wzwyż, niezależnie jaki numer strony wyświetla się na pierwszej stronie twojego
dokumentu. Opcjonalny parametr &quot;szablon&quot; oznacza nazwę strony szablonu dla nowej strony.

Może zwrócić błąd IndexError, jeśli numer strony będzie poza dozwolonym zakresem</translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation>setGradientFill(typ, &quot;kolor1&quot;, cieniowanie1, &quot;kolor2&quot;, cieniowanie2, [&quot;nazwa&quot;])

Przypisuje wypełnienie gradientem &quot;typ&quot; do obiektu &quot;nazwa&quot;. Opisy kolorów są
takie same jak dla setFillColor() i setFillShade(). Zobacz stałe dla
istniejących typów (FILL_&lt;type&gt;).</translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>messagebarText(&quot;string&quot;)

Pisze &quot;string&quot; w linijce statusu Scribusa. Tekst ten
musi być łańcuchem znaków w kowoaniu UTF8 lub &apos;unicode&apos; (zalecane).</translation>
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

    firstPageNumber = is the number of the first page in the document used for
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
        <translation type="obsolete">O Scribusie %1</translation>
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
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getFont([&quot;nazwa&quot;]) -&gt; string

Zwraca nazwę czcionki dla ramki tekstowej &quot;nazwa&quot;. Jeśli ta ramka tekstowa zawiera 
zaznaczony tekst, zwrócona zostanie wartość przypisana do pierwszej litery zaznaczonego 
tekstu. Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty zaznaczony aktualnie obiekt.</translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getTextLength([&quot;nazwa&quot;]) -&gt; integer

Zwraca długość tekstu w ramce tekstowej &quot;nazwa&quot;.
Jeśli nazwa nie zostanie podana, zostanie użyty aktualnie wybrany obiekt.</translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getText([&quot;nazwa&quot;]) -&gt; string

Zwraca tekst zawarty w ramce tekstowej &quot;nazwa&quot;. Jeśli ramka ta zawiera
zaznaczony tekst, zostanie zwrócony tylko ten tekst. Zwracany jest cały tekst ramki,
a nie tylko jego widoczna część. Jeśli &quot;nazwa&apos; nie zostanie podana,
zostanie użyty zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>getAllText([&quot;nazwa&quot;]) -&gt; string

Zwraca tekst zawarty w ramce &quot;nazwa&quot; i wszystkie teksty z ramek, 
które są połączone z tą ramką. Jeśli ramka zawiera zaznaczony tekst,
zwrócony zostanie ten tekst. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineSpacing([&quot;nazwa&quot;]) -&gt; float

Zwraca interlinię (&quot;leading&quot;) z ramki tekstowej &quot;nazwa&quot; wyrażoną w punktach.
Jeśli &quot;nazwa&quot; nie zostanie podana, użyty zostanie aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getColumnGap([&quot;nazwa&quot;]) -&gt; float

Zwraca odstęp pomiędzy szpaltami w ramce tekstowej &quot;nazwa&quot; wyrażony w punktach. 
Jeśli &quot;nazwa&quot; nie zostanie podana, użyty zostanie aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getColumns([&quot;nazwa&quot;]) -&gt; integer

Zwraca ilość szpalt w ramce tekstowej &quot;nazwa&quot;. 
Jeśli &quot;nazwa&quot; nie zostanie podana, użyty zostanie aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setText(&quot;teks&quot;, [&quot;name&quot;])

Przypisuje ramce tekstowej &quot;nazwa&quot; tekst łańcucha &quot;tekst&quot;.
Tekst musi być kodowany w UTF8, użyj np. unicode(text, &apos;iso-8859-2&apos;). 
Zobacz FAQ, aby poznać dalsze szczegóły. Jeśli &quot;nazwa&quot; nie zostanie podana, 
użyty zostanie aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation>insertText(&quot;tekst&quot;, poz, [&quot;nazwa&quot;])

Wstawia tekst &quot;tekst&quot; na pozycji &quot;poz&quot; w ramce tekstowej. Tekst musi 
być kodowany w UTF (zobacz setText()),. Pierwsza litera ma indeks 0.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie wybrany obiekt.

Może zwrócić błąd IndexError w przypadku wstawiania tekstu poza dozwolonym zakresem.</translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation>setFont(&quot;font&quot;, [&quot;nazwa&quot;])

Przypisuje czcionce w ramce tekstowej &quot;nazwa&quot; czcionkę &quot;font&quot;. Jeśli ramka zawiera
zaznaczony tekst, zostanie zmieniony tylko ten tekst. Jeśli &quot;nazwa&quot; nie zostanie podana,
zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli nie znajdzie czcionki.</translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation>setFontSize(rozmiar, [&quot;nazwa&quot;])

Przypisuje nowy rozmiar czcionce w ramce tekstowej &quot;nazwa&quot;. &quot;rozmiar&quot; traktowany jest
jako wartość w punktach. Jeśli ramka zawiera zaznaczony tekst, zostanie zmieniony tylko
ten tekst. &quot;rozmiar&quot; musi zawierać się w zakresie od 1 do 512. Jeśli &quot;nazwa&quot; nie zostanie
podana, zostanie użyty aktualnie wybrany obiekt.

Może zwrócić błąd ValueError dla rozmiaru czcionki poza dozwolonym zakresem.</translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation>setLineSpacing(rozmiar, [&quot;nazwa&quot;])

Przypisuje interlinię (&quot;leading&quot;) wielkości &quot;rozmiar&quot; ramce tekstowej &quot;nazwa&quot;.
&quot;rozmiar&quot; jest wartością w punktach. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli interlinia jest poza dozwolonym zakresem.</translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation>setColumnGap(rozmiar, [&quot;nazwa&quot;])

Przypisuje odstępowi między szpaltami w ramce &quot;nazwa&quot; wartość &quot;rozmiar&quot;. 
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli odstęp między szpaltami będzie poza dopuszczalnym zakresem.</translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation>setColumns(nr, [&quot;nazwa&quot;])

Przypisuje ilość kolumn w ramce tekstowej &quot;nazwa&quot; wartości liczby całkowitej &quot;nr&quot;.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli ilość kolumn nie wynosi przynajmniej 1.</translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation>setTextAlignment(wyrównanie, [&quot;nazwa&quot;])

Przypisuje wyrównanie tekstu w ramce tekstowej &quot;nazwa&quot;.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.
&quot;wyrównanie&quot; powinno być jedną ze stałych ALIGN_ zdefiniowanych 
w tym module - zobacz dir(scribus).

Może zwrócić błąd ValueError w przypadku podania błędnego wyrównania.</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished">selectText(start, liczba, [&quot;nazwa&quot;])

Zaznacza podaną &quot;liczbę&quot; znaków tekstu w ramce tekstowej &quot;nazwa&quot;, poczynając od znaku &quot;start&quot;.
Liczenie znaków zaczyna się od 0. Jeśli &quot;liczba&quot; równa się 0, zaznaczenie tekstu zostanie zniesione.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd IndexError, jeśli zaznaczenie wyjdzie poza zakres tekstu.</translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>deleteText([&quot;nazwa&quot;])

Usuwa cały tekst w ramce tekstowej &quot;nazwa&quot;. Jeśli ramka zawiera zaznaczony tekst, 
zostanie usunięty tylko zaznaczony tekst. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>setTextColor(&quot;kolor&quot;, [&quot;nazwa&quot;])

Przypisuje tekstowi w ramce tekstowej &quot;nazwa&quot; kolor &quot;kolor&quot;. Jeśli ramka zawiera 
zaznaczony tekst, zostanie zmieniony tylko ten tekst. Jeśli &quot;nazwa&quot; nie zostanie 
podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>setTextStroke(&quot;kolor&quot;, [&quot;nazwa&quot;])

Przypisuje &quot;kolor&quot; obrysu tekstu. Jeśli &quot;nazwa&quot; nie zostanie 
podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setTextShade(cieniowanie, [&quot;nazwa&quot;])

Przypisuje cieniowanie koloru tekstu w ramce &quot;nazwa&quot; wartość &quot;cieniowanie&quot;.
Jeśli ramka zawiera zaznaczony tekst, zostanie zmieniony tylko ten tekst.
&quot;cieniowaie&quot; musi być liczbą całkowitą w zakresio od 0 (najjaśniejsze) od 100 
(pełna intensywność koloru). Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie 
użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation>linkTextFrames(&quot;nazwa_od&quot;, &quot;nazwa_do&quot;)

Łączy dwie ramki tekstowe. Ramka &quot;nazwa_od&quot; połączona zostanie z ramką
&quot;nazwa_do&quot;. Ramka docelowa musi być pustą ramką tekstową i nie może 
być połączona z żadną inną ramką tekstową.

Może zwrócić błąd ScribusException, jeśli ograniczenia dotyczące łączenia ramek nie zostaną dotrzymane.</translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation>unlinkTextFrames(&quot;nazwa&quot;)

Usuń obiekt &quot;nazwa&quot; z połączonych ramek tekstowych. Jeśli ramka
znajduje się w środku łańcucha połączonych ramek, poprzednia i następna ramka zostaną 
ze zobą połączone. tzn.  &apos;a-&gt;b-&gt;c&apos; zmieni się w &apos;a-&gt;c&apos;, jeśli wykonasz unlinkTextFrames(b)&apos;

Może zwrócić błąd ScribusException, jeśli ograniczenia dotyczące łączenia ramek nie zostaną dotrzymane.</translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation>traceText([&quot;nazwa&quot;])

Zamienia ramkę tekstową &quot;nazwa&quot; na krzywe. Jeśli &quot;nazwa&quot; nie 
zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>getColor(&quot;nazwa&quot;) -&gt; tuple

Zwraca krotkę (C, M, Y, K) zawierającą cztery składowe koloru &quot;nazwa&quot; w aktualnym dokumencie.
Jeśli nie jest otwarty żaden dokument, zwraca wartość koloru o tej nazwie z domyślnych kolorów.

Może zwrócić błąd NotFoundError, jeśli nazwa koloru nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli zostanie podana błędna nazwa koloru.</translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>changeColor(&quot;nazwa&quot;, c, m, y, k)

Zmienia kolor &quot;nazwa&quot; na podaną wartość CMYK. Wartość koloru definiuje się
za pomocą czterech komponentów c = Cyjan, m = Madżenta, y = Żółty i k = Czarny.
Komponetu koloru powinny mieścić się w zakresie od 0 do 255.

Może zwrócić błąd NotFoundError, jeśli nazwa koloru nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli zostanie podana błędna nazwa koloru.</translation>
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
        <translation>deleteColor(&quot;nazwa&quot;, &quot;nowy&quot;)

Usuwa kolor &quot;nazwa&quot;. Każde wystąpienie tego koloru zastąpione zostanie
kolorem &quot;nowy&quot;. Jeśli kolor &quot;nowy&quot; nie zostanie podany, użyty zostanie 
kolor &quot;None&quot; czyli przezroczystość.

deleteColor zastępuje domyślne kolory, jeśli nie jest otwarty żaden dokument.
W takim przypadku, kolor &quot;nowy&quot; nie zostanie uwzględniony.

Może zwrócić błąd NotFoundError, jeśli nazwa koloru nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli zostanie podana błędna nazwa koloru.</translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>replaceColor(&quot;nazwa&quot;, &quot;nowy&quot;)

Każde wystąpienie koloru &quot;nazwa&quot; zastąpione zostanie kolorem &quot;nowy&quot;.

Może zwrócić błąd NotFoundError, jeśli nazwa koloru nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli zostanie podana błędna nazwa koloru.</translation>
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
        <translation>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -&gt; łańcuch z nazwą pliku

Wyświetla okienko dialogowe &quot;Otwórz plik&quot; z nagłówkiem &quot;caption&quot;. Pliki filtrowane są
według łańcucha &quot;filter&quot;. Można również podać domyślną nazwę pliku lub ścieżkę - jeśli nie chcesz 
używać tego parametru, pozostaw pusty łancuch. Wartość &quot;haspreview&quot; równa True włącza mały 
okienko podglądu wewnątrz okienka Wybierz Plik. Jeśli parametr &quot;issave&quot; równa się True, dialog 
będzie się zachowywał jak dialog &quot;Zapisz jako&quot;, w innym przypadku zachowa się jak dialog &quot;Otwórz plik&quot;. 
Domyślne ustawienie dla obu opcjonalnych parametrów to False.

Filtr &quot;filter&quot;, jeśli zostanie podany, przybiera formę &apos;komentarz (*.typ *.typ2 ...)&apos;,
przykładowo &apos;Obrazki (*.png *.xpm *.jpg)&apos;.

Zobacz opis dialogu QFileDialog w dokumentacji QT, aby poznać dalsze szczegóły na temat filtrów.

Przykład: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Przykład: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)</translation>
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
        <translation>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

Wyświetla okienko z tytułem &quot;caption&quot;, z informacją &quot;message&quot;, ikoną &quot;icon&quot;
 oraz maksymalnie 3 przyciskami. Domyślnie okienko wyświetla się bez ikony i jednym 
przyciskiem OK. Wymagane są jedynie argumenty &quot;caption&quot; i &quot;message&quot;, chociaż 
podanie ikony i odpowiedniego przycisku jest bardzo zalecane. Argument &quot;message&quot;
może zawierać proste formatowanie HTML.

Zwraca numer przycisku naciśniętego przez użytkownika. Numery przycisków 
zaczynają się od 1.

Parametry ikony i przycisku są predefiniowanymi stałymi opisanymi pod tymi samymi
nazwami w dokumentacji QT. Są to stałe  BUTTON_* i ICON_*  zdefiniowane w tym module.
Są również dwie specjalne stałe które mogą być binary-ORed ze stałymi przycisków:
    BUTTONOPT_DEFAULT   Wciśnięcie enter wciska ten przycisk.
    BUTTONOPT_ESCAPE    Wciśnięcie escape wciska ten przycisk.

Przykłady użycia:
wynik = messageBox(&apos;Skrypt przerwał działanie&apos;,
                    &apos;Ten skrypt działa tylko wtedy, kiedy zostanie zaznaczona ramka tekstowa.&apos;,
                    ICON_ERROR)
wynik = messageBox(&apos;Małpy!&apos;, &apos;Coś poszło nie tak! &lt;i&gt;Czy to była małpa?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Zdefiniowane stałe przycisków i ikon:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/></translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation>valueDialog(caption, message [,defaultvalue]) -&gt; string

Wyświetla zwykły dialog zapytania o łańcuch znaków i zwraca jego wartość jako łańcuch.
Parametry: tytuł okna, tekst w oknie i &apos;opcjonalna&apos; domyślna wartość.

Przykład: valueDialog(&apos;tytuł&apos;, &apos;tekst w oknie&apos;, &apos;opcjonalna&apos;)</translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation>closeDoc()

Zamyka aktualny dokument bez zapytania o potwierdzenie.

Może zwrócić błąd NoDocOpenError, jeśli żaden dokument nie będzie otwarty</translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation>haveDoc() -&gt; bool

Zwraca true, jeśli znajdzie otwarty dokument.</translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation>openDoc(&quot;nazwa&quot;)

Otwiera dokument &quot;nazwa&quot;.

Może zwrócić błąd ScribusError, jeśli nie będzie mógł otworzyć dokumentu.</translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation>saveDoc()

Zapisuje aktualny dokument pod jego aktualną nazwą, zwraca true jeśli zapis się powiedzie.
Jeśli dokument jeszcze nie został zapisany, może wyświetlić dialog zapisywania pliku.

Aktualnie nie ma możliwości pokazania, czy zapis się powiódł.</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation>saveDocAs(&quot;nazwa&quot;)

Zapisuje aktualny dokument pod nową nazwą &quot;nazwa&quot; 
(która może być bezwględną lub względną ścieżką)

Może zwrócić błąd ScribusError, jeśli zapis się nie powiedzie.</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation>saveDocAs(&quot;autor&quot;, &quot;info&quot;, &quot;opis&quot;) -&gt; bool

Przypisuje informacje o dokumencie.  &quot;Autor&quot;, &quot;Info&quot;, &quot;Opis&quot; 
to łańcuchy znaków.</translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation>setMargins(lr, rr, tr, br)

Ustawia marginesy dokumentu: Lewy(lr), Prawy(rr), Górny(tr) i Dolny(br),
które podane są w jednostkach miar dokumentu - zobacz stałe UNIT_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation>setUnit(typ)

Zmienia jednostkę miary dokumentu. Możliwe wartości &quot;typu&quot; 
są zdefiniowane jako stałe UNIT_&lt;type&gt;.

Może zwrócić błąd ValueError, jeśli podana zostanie błędna jednostka.</translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation>getUnit() -&gt; integer (stała jednostki Scribusa)

Zwraca jednostki miar dokumentu. Zwrócona wartość będzie jedną
ze stałych UNIT_* :
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.</translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation>loadStylesFromFile(&quot;nazwa_pliku&quot;)

Wczytuje style akapitów z dokumentu Scribusa &quot;nazwa_pliku&quot; do aktualnego dokumentu.</translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation>setDocType(strony_widzące_się, pierwsza_strona_po_lewej)

Ustawia typ dokumentu. Aby uzyskać strony widzące się, podaj jako pierwszy parametr
FACINGPAGES, aby wyłączyć strony widzące się podaj NOFACINGPAGES. Jeśli chcesz,
aby pierwsza strona była po lewej stronie, jako drugi parametr podaj FIRSTPAGELEFT, 
w innym przypadku podaj FIRSTPAGERIGHT.</translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineColor([&quot;nazwa&quot;]) -&gt; string

Zwraca nazwę koloru linii objektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineWidth([&quot;nazwa&quot;]) -&gt; integer

Zwraca grubość linii obiektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;nazwa&quot;]) -&gt; integer

Zwraca wartość cieniowania koloru linii obiektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation>getLineJoin([&quot;nazwa&quot;]) -&gt; integer (zobacz stałe)

Zwraca styl połączenia linii obiektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt. Są następujące typy połączeń linii:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND</translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation>getLineEnd([&quot;nazwa&quot;]) -&gt; integer (zobacz stałe)

Zwraca styl zakończenia linii obiektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt. Są następujące typy zakończeń:
CAP_FLAT, CAP_ROUND, CAP_SQUARE</translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation>getLineStyle([&quot;name&quot;]) -&gt; integer (zobacz stałe)

Zwraca styl linii obiektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie 
użyty aktualnie zaznaczony obiekt. Stałe stylu linii to:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID</translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillShade([&quot;nazwa&quot;]) -&gt; integer

Zwraca wartość cieniowania koloru wypełnienia obiektu &quot;nazwa&quot;.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getImageScale([&quot;nazwa&quot;]) -&gt; (x,y)

Zwraca krotkę (x, y) zawierającą wartości skalowania ramki graficznej &quot;nazwa&quot;.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getImageName([&quot;nazwa&quot;]) -&gt; string

Zwraca nazwę pliku dla obrazka w ramce graficznej &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation>getSize([&quot;nazwa&quot;]) -&gt; (szerokość,wysokość)

Zwraca krotkę  (szerokość, wysokość) z rozmiarami obiektu &quot;nazwa&quot;.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony 
obiekt. Rozmiar podany jest w aktualnych jednostkach miary dokumentu.
Zobacz stałe UNIT_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation>getRotation([&quot;nazwa&quot;]) -&gt; integer

Zwraca obrót obiektu &quot;nazwa&quot;. Wartość obrotu wyrażona jest w stopniach, obrót zgodny 
z ruchem wskazówek zegara ma wartość dodatnią.Jeśli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation>getAllObjects() -&gt; list

Zwraca listę zawierającą nazwy wszystkich obiektów na aktualnej stronie.</translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation>moveObjectAbs(x, y [, &quot;name&quot;])

Przesuwa obiekt &quot;nazwa&quot; na nową pozycję. Współrzędne pozycji wyrażone są
w aktualnych jednostkach miary dokumentu (zobacz stałe UNIT). Jeśli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt. Jeśli obiekt 
&quot;nazwa&quot; należy do grupy, zostanie przesunięta cała grupa.</translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>rotateObject(obrót [, &quot;nazwa&quot;])

Obraca obiekt &quot;nazwa&quot; względnie o &quot;obrót&quot; stopni. Obiekt obracany jest wokół
punktu, który jest aktualnie wybrany jako środek obrotu - domyślnie środkiem 
jest górny lewy róg przy zerowym obrocie. Wartości dodatnie oznaczają ruch 
przeciwny do ruchu wskazówek zegara, jeśli używany jest domyśny środek obrotu.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>sizeObject(szerokość, wysokość [, &quot;nazwa&quot;])

Zmienia rozmiar obiektu &quot;nazwa&quot; na podaną szerokość i wysokość. 
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation>getSelectedObject([nr]) -&gt; string

Zwraca nazwę zaznaczonego obiektu. Jeśli podany zostanie &quot;nr&quot;, oznacza on numer
zaznaczonego obiektu, tzn. 0 oznacza pierwszy wybrany obiekt, 1 drugi obiekt itd.</translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation>selectionCount() -&gt; integer

Zwraca ilość zaznaczonych obiektów.</translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation>selectObject(&quot;nazwa&quot;)

Zaznacza obiekt &quot;nazwa&quot;.</translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation>deselectAll()

Usuwa zaznaczenie obiektu nazwa.</translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation>groupObjects(list)

Grupuje obiekty podane w liście &quot;list&quot;. Parametr &quot;list&quot; musi zawierać nazwy
obiektów, które mają być zgrupowane. Jeśli lista nie zostanie podana, zostaną 
użyte aktualnie zaznaczone obiekty.</translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation>unGroupObjects(&quot;nazwa&quot;)

Znosi grupę, do której należy obiekt &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
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
        <translation>scaleGroup(wsp [,&quot;nazwa&quot;])

Skaluje grupę, do której należy obiekt &quot;nazwa&quot;. Wartości większe niż 1 powiększają grupę,
wartości mniejsze niż 1 zmniejszają ją, np. wartość 0,5 skaluje grupę do 50% jej oryginalnego
rozmiaru, wartość 1,5 skaluje grupę do 150% oryginalnego rozmiaru. Wartość współczynnika 
&quot;wsp&quot; musi być większa niż 0. Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie 
zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli zostanie podany błędny współczynnik.</translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>loadImage(&quot;nazwa_pliku&quot; [, &quot;nazwa&quot;])

Wczytuje obrazek &quot;nazwa_pliku&quot; do ramki graficznej &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie 
zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd May raise WrongFrameTypeError, jeśli ramka docelowa nie jest ramką graficzną</translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>scaleImage(x, y [, &quot;nazwa&quot;])

Przypisuje współczynniki skalowania obrazkowi w ramce graficznej &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt. Liczba 1 oznacza 100%.

Może zwrócić błąd WrongFrameTypeError, jeśli ramka docelowa nie jest ramką graficzną</translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation>lockObject([&quot;nazwa&quot;]) -&gt; bool

Zabezpiecza obiekt &quot;nazwa&quot;, jeśli nie jest zabezpieczony bądź odbezpiecza go,
jeśli jest zabezpieczony. Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie 
użyty aktualnie zaznaczony obiekt. Zwraca true, jeśli obiekt jest zabezpieczony. </translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>isLocked([&quot;nazwa&quot;]) -&gt; bool

Zwraca true, jeśli obiekt &quot;nazwa&quot; jest zabezpieczony. Jeśli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation>getFontNames() -&gt; list

Zwraca listę z nazwami wszystkich dostępnych czcionek.</translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation>getXFontNames() -&gt; list of tuples

Zwraca obszerną informację o czcionkach. Jest to lista krotek zawierająca:
[ (nazwę w Scribusie, rodzinę, prawdziwą nazwę, podzbiór (1|0), zagnieźdź w PS (1|0), plik czcionki), (...), ... ]</translation>
    </message>
    <message>
        <source>rendeFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
Image is saved into &quot;filename&quot;. Returns true when success.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="obsolete">rendeFont(&quot;nazwa&quot;, &quot;nazwa_pliku&quot;, &quot;wzór&quot;, rozmiar) -&gt; bool

Tworzy obrazek z podglądem czcionki &quot;nazwa&quot; z podanym &quot;wzorem&quot; tekstu 
i w podanym rozmiarze. Obrazek zapisywany jest w pliku &quot;nazwa_pliku&quot;. 
Zwraca true w przypadku powodzenia.

Może zwrócić błąd NotFoundError, jeśli wymieniona czcionka nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli zostanie przekazany pusty parametr &quot;wzór&quot; lub &quot;nazwa_pliku&quot;.</translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation>getLayers() -&gt; list

Zwraca listę nazw wszystkich zdefiniowanych warstw.</translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setActiveLayer(&quot;nazwa&quot;)

Ustawia warstę &quot;nazwa&quot; jako aktywną wartstwę.

Może zwrócić błąd NotFoundError, jeśli warstwa nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa wartwy jest niedopuszczalna.</translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation>getActiveLayer() -&gt; string

Zwraca nazwę aktualnej warstwy.</translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>sentToLayer(&quot;warstwa&quot; [, &quot;nazwa&quot;])

Przenosi obiekt &quot;nazwa&quot; do warstwy &quot;warstwa&quot;. Warstwa ta musi istnieć.
Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie  użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd NotFoundError, jeśli warsta nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa jest niedopuszczalna.</translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerVisible(&quot;warstwa&quot;, widoczna)

Zmienia widoczność warstwy &quot;warstwa&quot; na widoczną lub nie. 
Jeśli widoczność ma wartość false, warstwa będzie niewidoczna.

Może zwrócić błąd NotFoundError, jeśli warstwa nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa warstwy jest niedopuszczalna. </translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerPrintable(&quot;warstwa&quot;, drukowalna)

Przypisuje warstwie &quot;warstwa&quot; parametr &quot;drukowalna&quot;. Jeśli &quot;drukowalna&quot; 
ma wartość false, wastwa nie będzie drukowana.

Może zwrócić błąd NotFoundError, jeśli warstwa nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa warstwy jest niedopuszczalna.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the Layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerPrintable(&quot;warstwa&quot;) -&gt; bool

Zwraca informację, czy warstwa jest widoczna. Wartość True oznacza, że warstwa
jest widoczna, wartość False oznacza niewidoczność warstwy.

Może zwrócić błąd NotFoundError, jeśli warstwa nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa warstwy jest niedopuszczalna. </translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerPrintable(&quot;warstwa&quot;) -&gt; bool

Zwraca informację, czy warstwa jest drukowalna. Wartość True oznacza, że warstwa
może być drukowana, wartość False oznacza, że druk warstwy jest wyłączony.

Może zwrócić błąd NotFoundError, jeśli warstwa nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa warstwy jest niedopuszczalna. </translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>deleteLayer(&quot;warstwa&quot;)

Usuwa warstwę o nazwie &quot;warstwa&quot;. Nie usuwa nic, jeśli taka warstwa 
nie istnieje albo jeśli warstwa ta jest jedyną warstwą dokumentu.

Może zwrócić błąd NotFoundError, jeśli warstwa nie zostanie znaleziona.
Może zwrócić błąd ValueError, jeśli nazwa warstwy jest niedopuszczalna. </translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>createLayer(warstwa)

Tworzy nową warstwę o nazwie &quot;warstwa&quot;.

Może zwrócić błąd ValueError, jeśli nazwa warstwy jest niedopuszczalna. </translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation>getGuiLanguage() -&gt; string

Zwraca łańcuch z wartością języka interfejsu -lang.</translation>
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
        <translation>createEllipse(x, y, szerokość, wysokość, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową elipsę na aktualnej stronie i zwraca jej nazwę. Współrzędne podaje się
w aktualnych jednostkach miary dokumentu (zobacz stałe UNIT). &quot;nazwa&quot; powinna 
być jednoznacznym identyfikatorem obiektu, ponieważ będzie ona potrzebna przy
późniejszym odnoszeniu się do obiektu. Jeśli &quot;nazwa&quot; nie zostanie podana, Scribus
sam utworzy taką nazwę.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.</translation>
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
        <translation>createImage(x, y, szerokość, wysokość, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową ramkę graficzną na aktualnej stronie i zwraca jej nazwę. Współrzędne
podaje się w aktualnych jednostkach miary dokumentu. &quot;nazwa&quot; powinna być
jednoznacznym identyfikatorem obiektu, ponieważ będzie ona potrzebna aby 
odnosić się do tego obiektu. Jeśli nazwa nie zostanie podana, Scribus utworzy
ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.</translation>
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
        <translation>createText(x, y, szerokość, wysokość, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową ramkę tekstową na aktualnej stronie i zwraca jej nazwę. Współrzędne 
podawane są w aktualnej jednostce miary dokumentu (zobacz stałe UNIT). &quot;nazwa&quot; 
powinna być jednoznacznym identyfikatorem obiektu, ponieważ będzie potrzebna w 
przyszłości, aby odnosić się do obiektu. Jeśli nazwa nie zostanie podana, Scribus 
utworzy ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.</translation>
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
        <translation>createLine(x1, y1, x2, y2, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową linię od punktu(x1, y1) do punktu(x2, y2) i zwraca jej nazwę.
Współrzędne podawane są w aktualnej jednostce miary dokumentu (zobacz stałe UNIT). 
&quot;nazwa&quot;  powinna być jednoznacznym identyfikatorem obiektu, ponieważ będzie potrzebna
 w przyszłości, aby odnosić się do obiektu. Jeśli nazwa nie zostanie podana, Scribus 
utworzy ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.</translation>
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
        <translation>createPolyLine(lista, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową linię łamaną i zwraca jej nazwę. Punkty linii łamanej zapisane 
są w liście &quot;lista&quot; w następującej kolejności: [x1, y1, x2, y2...xn. yn].
Współrzędne podawane są w aktualnej jednostce miary dokumentu (zobacz stałe UNIT). 
&quot;nazwa&quot;  powinna być jednoznacznym identyfikatorem obiektu, ponieważ będzie potrzebna
 w przyszłości, aby odnosić się do obiektu. Jeśli nazwa nie zostanie podana, Scribus 
utworzy ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.
Może zwrócić błąd ValueError, jeśli podana zostanie niewystarczająca ilość
punktów lub ilość wartości nie da się zgrupować w punkty bez pozostawiania reszty.</translation>
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
        <translation>createPolygon(lista, [&quot;nazwa&quot;]) -&gt; string

Tworzy nowy wielokąt i zwraca jego nazwę. Creates a new polygon and returns its name. 
Punkty wielokąta zapisane są w liście &quot;lista&quot; w następującej kolejności: [x1, y1, x2, y2...xn. yn].
Współrzędne podawane są w aktualnej jednostce miary dokumentu (zobacz stałe UNIT). 
Wymagane są co najmniej 3 punkty. Nie trzeba powtarzać punktu początkowego., aby zamknąć
wielokąt. Wielokąt jest zamykany automatycznie przez połączenie pierwszego i ostatniego punktu. 
Współrzędne podawane są w aktualnej jednostce miary dokumentu (zobacz stałe UNIT). 
&quot;nazwa&quot;  powinna być jednoznacznym identyfikatorem obiektu, ponieważ będzie potrzebna
 w przyszłości, aby odnosić się do obiektu. Jeśli nazwa nie zostanie podana, Scribus 
utworzy ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.
Może zwrócić błąd ValueError, jeśli podana zostanie niewystarczająca ilość
punktów lub ilość wartości nie da się zgrupować w punkty bez pozostawiania reszty.</translation>
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
        <translation>createBezierLine(lista, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową krzywą Beziera i zwraca jej nazwę. Punkty krzywej Beziera
zapisane są w liście &quot;lista&quot; w następującej kolejności:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
W liście punktów x i y oznaczają współrzędne x i y punktu, a kx i ky 
oznaczają punkt kontrolny krzywej. Współrzędne podawane są w aktualnej 
jednostce miary dokumentu (zobacz stałe UNIT).  &quot;nazwa&quot;  powinna być 
jednoznacznym identyfikatorem obiektu, ponieważ będzie potrzebna w 
przyszłości, aby odnosić się do obiektu. Jeśli nazwa nie zostanie podana, 
Scribus utworzy ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.
Może zwrócić błąd ValueError, jeśli podana zostanie niewystarczająca ilość
punktów lub ilość wartości nie da się zgrupować w punkty bez pozostawiania reszty.</translation>
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
        <translation>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;nazwa&quot;]) -&gt; string

Tworzy nową krzywą pathText przez połączenie ze sobą obiektu &quot;textbox&quot; i &quot;beziercurve&quot; 
i zwraca jej nazwę. and returns its name. Współrzędne podawane są w aktualnej 
jednostce miary dokumentu (zobacz stałe UNIT).  &quot;nazwa&quot;  powinna być 
jednoznacznym identyfikatorem obiektu, ponieważ będzie potrzebna w 
przyszłości, aby odnosić się do obiektu. Jeśli nazwa nie zostanie podana, 
Scribus utworzy ją automatycznie.

Może zwrócić błąd NameExistsError, jeśli podana nazwa jest już w użyciu.
Może zwrócić błąd ValueError, jeśli podana zostanie niewystarczająca ilość
punktów lub ilość wartości nie da się zgrupować w punkty bez pozostawiania reszty.</translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation>deleteObject([&quot;nazwa&quot;])

Usuwa obiekt o nazwie &quot;nazwa&quot;. Jeśli nazwa nie zostanie podana,
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation>textFlowsAroundFrame(&quot;nazwa&quot; [, status])

Włącza/wyłącza właściowość &quot;Tekst opływa ramkę&quot; dla obiektu &quot;nazwa&quot;.
Wywołanie z użyciem parametrów &quot;nazwa&quot; (łańcuch) i opcjonalnego parametru
&quot;status&quot; (bool). Jeśli &quot;status&quot; nie zostanie podany, opływanie tekstu zostanie 
przełączone.</translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation>objectExists([&quot;nazwa&quot;]) -&gt; bool

Sprawdza, czy obiekt o nazwie &quot;nazwa&quot; istnieje w dokumencie. Parametr &quot;nazwa&quot; 
jest opcjonalny, jeśli nie zostanie podany, funkcja zwraca True, jeśli znajdzie jakiś 
zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation>setStyle(&quot;styl&quot; [, &quot;nazwa&quot;])

Przypisuje &quot;styl&quot; do obiektu &quot;nazwa&quot;. Jeśli nazwa nie zostanie podana,
styl zostanie przypisany do zaznaczonego obiektu.</translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation>getAllStyles() -&gt; list

Zwraca listę nazw wszystkich stylów akapitu w aktualnym dokumencie.</translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation>currentPage() -&gt; integer

Zwraca numer aktualnej strony. Numer stron liczone są od 1 w górę, 
niezależnie od tego, jaki pierwszy numer wyświetlany jest w dokumencie.</translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation>redrawAll()

Aktualizuje wszystkie strony.</translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation>savePageAsEPS(&quot;nazwa&quot;)

Zapisuje aktualną stronę jako EPS w pliku &quot;nazwa&quot;.

Może zwrócić błąd ScribusError, jest zapis się nie powiedzie.</translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation>deletePage(nr)

Usuwa podaną stronę. Nie robi nic, jeśli dokument zawiera tylko jedną stronę.
Numery stron zaczynają się od 1 niezależnie od tego, jaki pierszy numer jest
wyświetlany w dokumencie.

Może zwrócić błąd IndexError, jeśli numer strony jest poza dopuszczalnym zakresem</translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation>gotoPage(nr)

Przesuwa stronę do numeru &quot;nr&quot;  (tzn. przypisuje aktualnej stronie nr &quot;nr&quot;). 
Zauważ, że gotoPage nie zmienia (aktualnie) strony, która wyświetlana jest
użytkownikowi, tylko ustala stronę, na której będzie operował skrypt.

Może zwrócić błąd IndexError, jeśli numer strony jest poza dopuszczalnym zakresem.</translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation>pageCount() -&gt; integer

Zwraca ilość stron w dokumencie.</translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation>getHGuides() -&gt; list

Zwraca listę zawierającą pozycje poziomych linii pomocniczych. Wartości
podane są w aktualnych jednostkach dokumentu - zobacz stałe UNIT_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation>setHGuides(list)

Ustawia poziome linie pomocnicze. Podane parametry muszą być listą pozycji linii
pomocniczych w aktualnych jednostkach dokumentu - zobacz stałe UNIT_&lt;type&gt;.

Przykład: setHGuides(getHGuides() + [200.0, 210.0] # dodaje nowe linie nie usuwając istniejących
               setHGuides([90,250]) # całkowicie zastępuje istniejące linie</translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation>getVGuides()

Zobacz getHGuides.</translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation>setVGuides()

Zobacz setHGuides.</translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation>getPageSize() -&gt; tuple

Zwraca krotkę z wymiarami strony w aktualnych jednostkach dokumentu.
Zobacz stałe UNIT_&lt;type&gt; i getPageMargins()</translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation>getPageItems() -&gt; list

Zwraca listę krotek z obiektami na aktualnej stronie. Składowe krotki to:
(nazwa, typ_obiektu, kolejność). Np. [(&apos;Tekst1&apos;, 4, 0), (&apos;Obrazek1&apos;, 2, 1)]
oznacza, że obiekt o nazwie &apos;Tekst1&apos; jest ramką tekstową (typ 4) i jest 
pierwszy w kolejności na stronie...</translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation>getPageMargins()

Zwraca marginesy strony jako krotkę (lewy, prawy, górny, dolny) w aktualnych
jednostkach miary. Zobasz stałe UNIT_&lt;type&gt; i getPageSize().</translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillColor(&quot;kolor&quot;, [&quot;nazwa&quot;])

Przypisuje kolorowi wypełnienia obiektu &quot;nazwa&quot; wartość &quot;kolor&quot;. &quot;kolor&quot; jest
nazwą jednego ze zdefiniowanych kolorów. Jesli &quot;nazwa&quot; nie zostanie podana,
zostanie użyty aktualnie zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>setLineColor(&quot;kolor&quot;, [&quot;nazwa&quot;])

Przypisuje kolorowi obrysu obiektu &quot;nazwa&quot; wartość &quot;kolor&quot;.Jesli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt. </translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation>setLineWidth(grubuść, [&quot;nazwa&quot;])

Przypisuje grubość linii obiektowi &quot;nazwa&quot;. &quot;grubość&quot; musi mieścić się
w zakresie od 0.0 do 12.0 włącznie i podawana jest w punktach. Jesli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli grubość linii będzie poza dozwolonym zakresem.</translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation>setLineShade(cieniowanie, [&quot;nazwa&quot;])

Przypisuje cieniowaniu koloru linii obiektu &quot;nazwa&quot; wartość &quot;cieniowanie&quot;.
&quot;cieniowanie&quot; musi być liczbą całkowitą w zakresio od 0 (najjaśniejsze) 
do 100(pełna intensywność koloru). Jesli &quot;nazwa&quot; nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli cieniowanie będzie poza dozwolonym zakresem.</translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation>setLineJoin(połączenie, [&quot;nazwa&quot;])

Przypisuje połączeniu linii obiektu &quot;nazwa&quot; styl &quot;połączenie&quot;.  Jesli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt. Istnieją 
predefiniowane stałe dla połączeń linii - zobacz stałe JOIN_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation>setLineEnd(koniec, [&quot;nazwa&quot;])

Przypisuje zakończeniu linii obiektu &quot;nazwa&quot; styl &quot;koniec&quot;.  Jesli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt. Istnieją 
predefiniowane stałe dla zakończeń linii - zobacz stałe CAP_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation>setLineStyle(styl, [&quot;nazwa&quot;])

Przypisuje stylowi linii obiektu &quot;nazwa&quot; wartość &quot;styl&quot;.Jesli &quot;nazwa&quot; 
nie zostanie podana, zostanie użyty aktualnie zaznaczony obiekt. Istnieją 
predefiniowane stałe dla stylu linii - zobacz stałe LINE_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation>setFillShade(cieniowanie, [&quot;nazwa&quot;])

Przypisuje cieniowaniu koloru wypełnienia obiektu &quot;nazwa&quot; wartość &quot;cieniowanie&quot;. 
&quot;cieniowanie&quot; musi być liczbą całkowitą w zakresie od 0(najjaśniejsze) do 10(pełna
intensywność koloru). Jesli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie 
zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli cieniowanie będzie poza dozwolonym zakresem.</translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation>setCornerRadius(promień, [&quot;nazwa&quot;])

Przypisuje promieniowi zaokrąglenia rogów obiektu &quot;nazwa&quot; wartość &quot;promień&quot;. 
Promień podawany jest w punktach. Jesli &quot;nazwa&quot; nie zostanie podana, zostanie
użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd ValueError, jeśli promień będzie ujemny.</translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation>setMultiLine(&quot;styl&quot;, [&quot;nazwa&quot;])

Przypisuje stylowi linii obiektu &quot;nazwa&quot; wartość &quot;styl&quot;. Jesli &quot;nazwa&quot; nie zostanie podana, zostanie
użyty aktualnie zaznaczony obiekt.

Może zwrócić błąd NotFoundError, jeśli styl linii nie istnieje.</translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation>progressReset()

Wyzerowuje ustawienia linijki postępu Scribusa. Wywoływany przed użyciem 
nowej linijki postępu. Zobacz  progressSet.</translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation>progressTotal(max)

Przypisuje maksymalnej ilości kroków linijki postępu wartość &quot;max&quot;. 
Zobacz progressSet.</translation>
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
        <translation>progressSet(nr)

Przypisuje pozycji linijki postępu wartość &quot;nr&quot;, będącą wartością względna odnoszącą się 
do poprzednio przypisanej wartości progressTotal. Linijka postępu robi użytek z koncepcji 
kroków: podaje się jej całkowitą liczbę kroków i liczbę kroków zakończonych do tego momentu,
a linijka postępu wyświetli procent zakończonych kroków. Można podać całkowitą liczbę kroków
używając  progressTotal(). Aktualna ilość kroków przypisywana jest za pomocą progressSet(). 
Linijka postępu może być przewinięta do początku za pomocą progressReset(). 
[w oparciu o dokumentację QT firmy Trolltech]</translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation>setCursor()

[BRAK WSPARCIA!] Ta funkcja może doprowadzić do niestabilności, na razie nie używaj jej.</translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation>docChanged(bool)

Włącza/wyłącza ikonę zapisu na pasku ikon Scribusa i punkt menu &quot;Zapisz&quot;. Warto włączyć
tę procedurę przy zmianie dokumentu, ponieważ Scribus nie zauważy automatycznie, kiedy
dokument zostanie zmieniony za pomocą skryptu.</translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">defineColor(&quot;nazwa&quot;, c, m, y, k)

Definiuje nowy kolor o nazwie &quot;nazwa&quot;. Wartość koloru definiowana jest za pomocą
czterech komponentów: c = Cyjan, m = Madżenta, y = Żółty i k = Czarny. Komponentyz
koloru powinny się zawierać w zakresie od 0 do 255.

Może zwrócić błąd ValueError, jeśli zostanie podana niedopuszczalna nazwa koloru.</translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">getCornerRadius([&quot;nazwa&quot;]) -&gt; integer

Zwraca promień zaokrąglenia rogów obiektu &quot;nazwa&quot;. Promień podawany 
jest w punktach. Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie użyty aktualnie
zaznaczony obiekt.</translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="obsolete">getPosition([&quot;nazwa&quot;]) -&gt; (x,y)

Zwraca krotkę (x, y) z pozycją obiektu &quot;nazwa&quot;. Jeśli nazwa nie zostanie podana, 
zostanie użyty aktualnie zaznaczony obiekt. Pozycja wyrażana jest w aktualnych
jednostkach dokumentu - zobacz również stałe  UNIT_&lt;type&gt;.</translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">rotateObjectAbs(obrót [, &quot;nazwa&quot;])

Przypisuje obiektowi &quot;nazwa&quot; obrót &quot;obrót&quot;. Wartości dodatnie oznaczają ruch przeciwny
do ruchu wskazówek zegara. Jeśli nazwa nie zostanie podana, zostanie użyty aktualnie 
zaznaczony obiekt.</translation>
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
        <source>About Scribus%1%2</source>
        <translation type="obsolete">O Scribusie%1%2</translation>
    </message>
    <message>
        <source>%1. %2 %3 </source>
        <translation>%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation>Scribus - wersja %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation>Identyfikator kompilacji:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Wkład w rozwój programu:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation>Windows port:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation>Niemiecki:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation>Francuski:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation>Włoski:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation>Węgierski:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation>Ukraiński:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation>Bułgarski:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation>Galicyjski:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation>Turecki:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation>Litewski:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation>Polski:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation>Czeski:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation>Słowacki:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation>Duński:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation>Norweski:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation>Walijski:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation>Rosyjski:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation>Brazylijski:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation>Fiński:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation>Słoweński:</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation>Baskijski:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Panel ten informuje o numerze wersji, dacie kompilacji
oraz wkompilowanej obsłudze bibliotek.
Symbole C-C-T oznaczają wsparcie dla C=CUPS C=littlecms T=TIFF
O braku obsługi dla danej biblioteki informuje symbol *</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;O programie</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>&amp;Autorzy</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>&amp;Tłumaczenia</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;Online</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation>Szwedzki:</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Zespół tworzący program:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Oficjalna dokumentacja:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Inna dokumentacja:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation>Angielski (Brytyjski):</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Strona domowa</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Dokumentacja online</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Błędy i propozycje zmian</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Lista dyskusyjna</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation>Kataloński:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation>Koreański:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation>Hiszpański:</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Oficjalne tłumaczenia i tłumacze:</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation>Esperanto:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation>Serbski:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Poprzedni tłumacze:</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>O Scribusie %1</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Panel ten informuje o numerze wersji, dacie kompilacji
oraz wkompilowanej obsłudze bibliotek.
Symbole C-C-T oznaczają wsparcie dla C=littlecms,  C=CUPS i T=TIFF.
O braku obsługi dla danej biblioteki informuje symbol *</translation>
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
        <translation>Zaawansowane opcje</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation>Tworzy PostScript Level 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation>Tworzy tylko PostScript Level 2. 
Uwaga: pliki mogą być bardzo duże</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation>Tworzy tylko PostScript Level 2. 
Uwaga: pliki mogą być bardzo duże</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation>O&amp;dwróć strony w poziomie</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation>Odwróć strony w &amp;pionie</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation>Zastosuj profile &amp;ICC</translation>
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
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation>Zastosuj &amp;UCR (usuwanie koloru neutralnego)</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>UCR jest to sposób wykluczenia niektórych odcieni szarości, które
składają się z cyjanu (C), żółci (Y) i madżenty (M) używając zamiast nich czerni.
UCR najbardziej ma wpływ na obszary obrazków, które mają neutralne
lub ciemne odcienie bliskie szarości. Użycie go może poprawić wydruk niektórych 
obrazków, jednakże wymaga wykonania wcześniej kilku prób i testów dla każdego
przypadku.
UCR zmniejsza możliwość wystąpienia przesycenia z tuszami CMY.</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation>Odstęp/Wyrównanie</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Wyrównaj</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Poziomo</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation>Lewe brzegi</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation>Środki</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation>Prawe brzegi</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Pionowo</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation>Górne brzegi</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation>Dolne brzegi</translation>
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
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Zastosuj</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation>&amp;Pomiędzy:</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation>&amp;Wyrównaj</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation>P&amp;rzesunięcie</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation>Roz&amp;mieść równomiernie</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation>m&amp;iędzy:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation>&amp;Nie zmieniaj</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation>W&amp;yrównaj</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation>Prze&amp;sunięcie</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation>Rozmi&amp;eść równomiernie</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation>Nie zmienia&amp;j</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Wyrównaj tekst do lewej</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Wyrównaj tekst do prawej</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Wyśrodkuj tekst</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Justuj tekst</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>getLineStyle([&quot;nazwa&quot;]) -&gt; integer (zobacz stałe)

Zwraca styl linii obiektu &quot;nazwa&quot;. Jeśli &quot;nazwa&quot; nie zostanie podana, zostanie 
użyty aktualnie zaznaczony obiekt. Stałe stylu linii to:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Właściwości pola</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Przycisk</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Pole tekstowe</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Pole wyboru</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Lista rozwijana</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Lista</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Właściwości</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nazwa:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Podpowiedź:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Brzeg</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kolor:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Szerokość:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Cienki</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normalny</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Szeroki</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Styl:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Jednolity</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Kreskowany</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Podkreślenie</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Wytłoczony</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Wstawka</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Inne</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Tylko do odczytu</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Wymagane</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>Nie wysyłaj wartości</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Widoczność:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Widoczny</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Ukryty</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Nie drukuj</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Nie wyświetlaj</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Wygląd</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Tekst dla Button Down</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Text dla Roll Over</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Ikony</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Użyj ikon</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Wciśnięty</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Roll Over</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Rozmieszczenie ikon...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Wyróżnienie</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Negatyw</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Obramowanie</translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Wciśnięty</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Wielowierszowe</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Maksymalnie</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>znaków</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Nie przewijaj</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Nie sprawdzaj pisowni</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Sposób zaznaczenia:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Haczyk</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Krzyżyk</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Romb</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Kółko</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Gwiazdka</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Kwadrat</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Domyślnie zaznaczone</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Edycja dozwolona</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation>Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Idź do</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Wyślij formularz</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Wyzeruj formularz</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Importuj dane</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Zdarzenie:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Klawisz myszy puszczony</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Klawisz myszy przyciśnięty</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Kursor myszy wchodzi w pole</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Kursor myszy opuszcza pole</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>Wejście w pole</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>Opuszczenie pola</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Skrypt:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Edytuj...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Wyślij do URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Wyślij dane jako HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Importuj dane z:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Cel</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Do pliku:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Zmień...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Strona:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Wsp. X:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Wsp. Y:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Akcja</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>Pole jest sformatowane jako:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Bez formatowania</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Liczba</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Procent</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Czas</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Definicja użytkownika</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Format liczby</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Miejsca po przecinku:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Użyj symbolu waluty</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Poprzedź symbolem waluty</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Format</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Format procentu</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Format daty</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Format czasu</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Skrypty użytkownika</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Format:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Wciśnięty klawisz:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>Nie sprawdzaj wartości</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>Wartość musi być równa lub większa:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>i równa lub mniejsza:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Własny skrypt sprawdzający wartość:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Sprawdź</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>Wartość nie jest obliczana</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>Wartość jest</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>sumą</translation>
    </message>
    <message>
        <source>product</source>
        <translation>iloczynem</translation>
    </message>
    <message>
        <source>average</source>
        <translation>średnią</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>minimum</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>maksimum</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>następujących pól:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Wybierz...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Własny skrypt obliczeniowy:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Oblicz</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Tutaj podaj listę pól rozdzielonych przecinkami</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>Aby używać ikon, konieczna jest przynajmniej ikona dla pozycji normalnej</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation>Obrazki (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Przykład:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Zmiana wyboru</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Czcionka dla PDF 1.3:</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>W PDF-1.3 ignorowane</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Pliki PDF (*.pdf);;Wszystkie pliki (*)</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Właściwości adnotacji</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Dowiązanie</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Zewnętrzne dowiązanie</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Zewnętrzny web link</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Cel</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>Dokumenty PDF (*.pdf);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Typ:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Zmień...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Strona:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>Wsp. &amp;X</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Wsp. &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation>Zastosuj szablon</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normalny</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Szablon:</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation>Zastosuj &amp;do aktualnej strony</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation>&amp;Zastosuj od strony:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>do:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation>Zastosuj dla wszystkich &amp;parzystych stron</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation>Zastosuj dla wszystkich &amp;nieparzystych stron</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation type="unfinished">Brak</translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Biblioteka</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation>Biblioteki (*.scs);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Obiekt</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Nowy wpis</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Zmień nazwę</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>Nazwa &quot;%1&quot; już istnieje.
Proszę wybrać inną.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Pobierz...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Zapisz</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Zapisz &amp;jako...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation>&amp;Mały</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation>Ś&amp;redni</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation>&amp;Duży</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>P&amp;odgląd</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Zakładki</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Przesuń zakładkę</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Wstaw zakładkę</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Zakładki</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Rozmieszczenie ikon</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Układ:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Tylko tekst</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Tylko ikona</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Tekst pod ikoną</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Tekst nad ikoną</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Tekst na prawo od ikony</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Tekst na lewo od ikony</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Tekst na ikonie</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Skaluj:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>zawsze</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>kiedy ikona jest za mała</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>kiedy ikona jest za duża</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>nigdy</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Jak skalować:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>proporcjonalnie</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>nieproporcjonalnie</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Ikona</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Wyzeruj</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">Konfiguracja zarządzania kolorami</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Profile systemowe</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Metody konwersji przestrzeni kolorów</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Spostrzeżeniowa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Względna kolorymetryczna</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Nasyceniowa</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Bezwzględna kolorymetryczna</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation>Domyślny profil barw dla importowanych obrazków</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Domyślny profil barw dla jednolitych kolorów na stronie</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Profil barw, który wygenerowałeś lub otrzymałeś od producenta.
Profil ten powinien być specyficzny dla twojego monitora, a nie generyczny (jak np. sRGB). </translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Profil barw twojej drukarki pochodzący od producenta.
Profil ten powinien być specyficzny dla twojej drukarki, a nie generyczny (jak np. sRGB). </translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Kompensacja poziomu czerni to metoda polepszania kontrastu zdjęć.
Jest ona zalecana, jeśli twój dokument zawiera zdjęcia.</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Domyślna metoda konwersji przestrzeni kolorów dla twojego monitora. Wybierz  metodę 
względnie kolorymetryczną lub spostrzeżeniową, chyba że wiesz, dlaczego chcesz to zmienić.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Domyślna metoda konwersji przestrzeni kolorów dla twojej drukarki. Wybierz  metodę 
względnie kolorymetryczną lub spostrzeżeniową, chyba że wiesz, dlaczego chcesz to zmienić.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Włącz tzw. &quot;soft proofing&quot; pozwalający na sprawdzenie, jak zostaną 
wydrukowane kolory twojego dokumentu w oparciu o wybrany profil drukarki.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Metoda pokazywania kolorów na ekranie, które mogą nie być poprawnie wydrukowane.
Wymaga ona bardzo dokładnie dopasowanych profili i służy jedynie jako ostrzeżenie.</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Włącz zarządzanie kolorami</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation>&amp;Obrazki:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>&amp;Jednolite kolory:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Monitor:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>&amp;Drukarka:</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>Mo&amp;nitor:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>D&amp;rukarka:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>&amp;Symuluj drukarkę na ekranie</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>&amp;Zaznacz kolory spoza przestrzeni kolorów</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>Zastosuj &amp;kompensację poziomu czerni</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Edytuj kolor</translation>
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
        <translation>RGB dla internetu</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nowy</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Stary</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
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
        <translation>Dynamiczne paski kolorów</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Statyczne paski kolorów</translation>
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
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation>Nazwa koloru nie jest jednoznaczna</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>Mapa kolorów HSV</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>&amp;Model kolorów</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation>Nie można utworzyć koloru o nazwie &quot;%1&quot;.
Nazwa ta jest zarezerwowana dla przezroczystości</translation>
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
        <translation type="unfinished">Wybierz znak:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Czcionka:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">&amp;Wklej</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Zamknij</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished">Wstaw znak do tekstu obok kursora</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished">Usuń aktualne zaznaczenie.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="unfinished">Zamknij to okienko dialogowe i powróć do edycji tekstu.</translation>
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
        <translation type="unfinished">Grecki</translation>
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
        <translation type="unfinished">Dokument</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Strona </translation>
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
        <translation>Normalny</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Gradient w poziomie</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Gradient w pionie</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Gradient wzdłuż przekątnej</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Gradient wzdłuż skrzyżowanych przekątnych</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Gradient promieniowy</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Nieprzezroczystość:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Cieniowanie:</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation>Edytuj właściwości koloru obrysu</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Edytuj właściwości koloru wypełnienia</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Nasycenie koloru</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Wypełnienie normalne czy gradientem</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Włącz przezroczystość dla wybranego koloru</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation>Kolor wybranego obiektu</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Wolny gradient linearny</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Wolny gradient promieniowy</translation>
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
        <translation>Ustawienia importera CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Ogranicznik pól:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Ogranicznik wartości:</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Pierwszy wiersz jest nagłówkiem</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Ustawienia drukarki (CUPS)</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Opcja</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Zestaw stron</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Wszystkie strony</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Tylko strony parzyste</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Tylko strony nieparzyste</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Odwrócone</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nie</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Tak</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientacja</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Portret</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Pejzaż</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Zgrupowanie stron</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>strona na kartkę</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>Stron na kartkę</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation>Panel ten wyświetla opcje CUPS dla druku.
Opcje te zależą od zainstalowanego sterownika drukarki.
Aby upewnić się, czy wbudowana została obsługa CUPS, należy zajrzeć pod Pomoc &gt; O Scribusie
Sprawdź, czy identyfikator kompilacji zawiera C-C-T. Symbole te oznaczają wsparcie dla C=CUPS C=littlecms T=TIFF
Brak wparcia dla danej biblioteki symbolizuje znak *</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>Kodowanie:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Otwiera katalog dokumentów.
Ścieżkę tego katalogu można zmienić w &quot;Ustawieniach&quot;.</translation>
    </message>
    <message>
        <source>&amp;Compress File</source>
        <translation>&amp;Kompresja pliku</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Dołącz czcionki</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Usuń kolor</translation>
    </message>
    <message>
        <source>?</source>
        <translation type="obsolete">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Zastąp przez:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Anuluj</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="obsolete">Usuń kolor:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
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
        <translation>Usuń strony</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Usuń od:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>do:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
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
        <translation type="obsolete">Brakująca czcionka</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">Czcionka %1 nie jest zainstalowana.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Użyj</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">zamiast</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Informacje o dokumencie</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Tytuł:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Autor:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Słowa kluczowe:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>O&amp;pis:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Wydawca:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>I&amp;nni autorzy:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>&amp;Data:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>&amp;Typ:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>&amp;Format:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>Id&amp;entyfikator:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>Ź&amp;ródło:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Język:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>Odnie&amp;sienie:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>&amp;Zakres:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>&amp;Prawa:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation>&amp;Dokument</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>Pozostałe &amp;informacje</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Osoba lub organizacja odpowiadająca za zawartość dokumentu.
Pole to może być dodane do dokumentu Scribusa jako dodatkowa informacja, jak też zagnieżdżone jako metadane w pliku PDF </translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Nazwa nadana dokumentowi.
Pole to może być dodane do dokumentu Scribusa jako dodatkowa informacja, jak też zagnieżdżone jako metadane w pliku PDF </translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Opis zawartości dokumentu.
Pole to może być dodane do dokumentu Scribusa jako dodatkowa informacja, jak też zagnieżdżone jako metadane w pliku PDF </translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>Tematyka, której poświęcona jest zawartość dokumentu.
Pole to może być dodane do dokumentu Scribusa jako dodatkowa informacja, jak też zagnieżdżone jako metadane w pliku PDF </translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Osoba lub organizacja odpowiedzialna za opublikowanie dokumentu</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Osoby lub organizacje, które uczestniczyły w tworzeniu zawartości dokumentu </translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Data jakiegoś wydarzenia w cyklu życia dokumentu w formacie YYYY-MM-DD, zgodnie z ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>Natura albo rodzaj zawartości dokumentu, np. kategorie, funkcje, gatunki</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>Fizyczna albo cyfrowa forma dokumentu. Tutaj warto podać typ nośnika i rozmiar dokumentu.
Przydatne informacje na temat typów MIME znajdują się w RFC2045 i RFC2046</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Jednoznaczny odnośnik do dokumentu w danym kontekście, jak np. ISBN lub URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>Język zawartości dokumentu, zazwyczaj podany jako kod językowy ISO-639,
opcjonalnie uzupełniony o myślnik i kod kraju zgodny z ISO-3166, np pl-PL, fr-CH</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Odnośnik do powiązanego dokumentu, najlepiej w formie identyfikatora takiego jako ISBN lub URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>Zakres i zasięg zawartości dokumentu, najlepiej z podaniem miejsca, czasu i jurysdykcji</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Informacja o prawach obawiązujących dla tego dokumentu, np. prawach autorskich, patentach i znakach towarowych</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Odnośnik do dokumentu, z którego wywodzi się aktualny dokument, na przykład numer ISBN lub URI</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Ustawienia drukarki</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Wszystkie</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation>Postscript (*.ps);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cyjan (C)</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Madżenta (M)</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Żółty (Y)</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Czarny (K)</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Wpisz rozdzieloną przecinkami listę wartości,
gdzie * oznacza wszystkie strony, 1-5 zakres stron 
a pojedynczy numer oznacza numer strony.</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Drukarka</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Opcje...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Plik:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Zmień...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>A&amp;lternatywne polecenie drukarki</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>Pol&amp;ecenie:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Zakres</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>Drukuj &amp;wszystko</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Drukuj a&amp;ktualną stronę</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Dr&amp;ukuj zakres</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>&amp;Ilość kopii:</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation>Drukuj &amp;normalnie</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation>Drukuj &amp;barwne wyciągi</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation>Drukuj w kolorze, &amp;jeśli to możliwe</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation>Drukuj w od&amp;cieniach szarości</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation>Zaawan&amp;sowane opcje...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>&amp;Drukuj</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation>Użyj alternatywnego menedżera wydruku, takiego jak kprinter
lub gtklp, by uzyskać dostęp do dodatkowych opcji drukowania</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>Błąd podczas importu pliku %1! 
</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Krytyczny błąd</translation>
    </message>
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
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
        <translation>Edytuj style</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Znak</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation>Odstępy w pionie</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Interlinia</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation>Nazwa stylu nie jest jednoznaczna</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation>Atrybut:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
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
        <source>Name of your paragraph style</source>
        <translation>Nazwa stylu akapitu</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Czcionka wybranego tekstu albo obiektu</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Rozmiar czcionki</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kolor wypełnienia tekstu</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kolor obrysu tekstu</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation>Efekt stylistyczny, generujący ponadwymiarową pierwszą literę akapitu </translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Całkowita wielkość inicjałów opuszczonych liczona w ilości wierszy</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation>Wyrównaj tekst do linii pisma</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Interlinia nad akapitem</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Interlinia pod akapitem</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabulatory i wcięcie</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation>&amp;Czcionka:</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation>&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation>&amp;Wyrównanie:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation>&amp;Inicjały opuszczone</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>Wi&amp;erszy:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>&amp;Kolor wypełnienia:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation>Ko&amp;lor obrysu:</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation>Wyrówna&amp;j do linii pisma</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation>In&amp;terlinia:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation>Na&amp;d:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation>&amp;Pod:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
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
        <translation>Edytor</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation>Skrypty Javascript (*.js);;Wszystkie pliki(*)</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Otwórz...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Zapisz &amp;jako...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>&amp;Zapisz i zakończ</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>Zakończ &amp;bez zapisywania</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Cofnij</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Przywróć</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Wy&amp;tnij</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiuj</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Wklej</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>Wybierz &amp;nazwy pól</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edycja</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Wybierz katalog dla eksportu</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>&amp;Wszystkie strony</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>Zmień katalog wyjściowy</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>Katalog wyjściowy - miejsce, w którym zapisywane będą twoje obrazki. 
Nazwa wyeksportowanego pliku będzie następująca: &quot;nazwa_dokumentu-numer_strony.typ_pliku&quot;</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Eksportuj tylko aktualną stronę</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Dostępne formaty eksportu</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Zmień...</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Eksportuj do katalogu:</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>Typ o&amp;brazka:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Jakość:</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Eksportuj jako obrazek(ki)</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Rozdzielczość:</translation>
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
        <translation>Zakres</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>Aktualna &amp;strona</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>Za&amp;kres</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Wpisz rozdzieloną przecinkami listę wartości,
gdzie * oznacza wszystkie strony, 1-5 zakres stron 
a pojedynczy numer oznacza numer strony.</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Rozdzielczość obrazków
Użyj 72 dpi dla obrazków przeznaczonych do wyświetlania na ekranie</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>Jakość obrazków - 100% oznacza najlepszą, 1% najniższą</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Eksportuj zakres stron</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Eksportuj wszystkie strony</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Rozmiar obrazków. 100% oznacza niezmieniony rozmiar, 200%  dwa razy większy itd.</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Rozmiar:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Tytuł:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Bez tytułu</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Autor:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Nieznany</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Dokument Scribusa</translation>
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
        <translation>Kolory</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Zestawy kolorów</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Aktualny zestaw kolorów:</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.sla.gz *.scd *.scd.gz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.scd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopia %1</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Wybierz nazwę</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Nowy kolor</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Wybierz zestaw kolorów do otworzenia</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>Zapisz aktualny zestaw kolorów</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Usuń nieużywane kolory z zestawu kolorów aktualnego dokumentu</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation>Dołącz kolory do aktualnego zestawu kolorów z istniejącego dokumentu</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Utwórz nowy kolor wewnątrz aktualnego zestawu</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>Edytuj aktualnie wybrany kolor</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Utwórz kopię aktualnie wybranego koloru</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>Usuń aktualnie wybrany kolor</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Ustaw aktualny zestaw kolorów jako domyślny zestaw kolorów</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Dołącz</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edycja</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Klonuj</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>U&amp;suń nieużywane</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>&amp;Zapisz zestaw kolorów</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation type="obsolete">Globalne ustawienia czcionek</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Dostępne czcionki</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Czcionki zastępcze</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Dodatkowe ścieżki</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Tak</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Nazwa czcionki</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Użyj czcionkę</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Zagnieźdź w:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="obsolete">Podzbiór</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Typ</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="obsolete">Ścieżka do pliku czcionki</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Czcionka zastępcza</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Wybierz katalog</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>&amp;Dostępne czcionki</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>&amp;Czcionki zastępcze</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Doda&amp;tkowe ścieżki</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Zmień...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>&amp;Dodaj...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Nazwa czcionki</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation type="unfinished">Użyj czcionkę</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation type="unfinished">Zagnieźdź w:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Podzbiór</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished">Ścieżka do pliku czcionki</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Zażółć Gęślą Jaźń AaBbCc1!2@3#</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Podgląd czcionek</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation type="obsolete">Dołącz wybrane czcionki do Czcionek w menu Styl</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation type="obsolete">Zamknij podgląd</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Nazwa czcionki</translation>
    </message>
    <message>
        <source>Doc</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Podzbiór</translation>
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
        <translation type="unfinished">Podgląd czcionek</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>font preview</comment>
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>font preview</comment>
        <translation type="unfinished">&amp;Anuluj</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished">Dołącz wybrane czcionki do Czcionek w menu Styl</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation type="unfinished">Zamknij podgląd</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished">Zażółć Gęślą Jaźń AaBbCc1!2@3#</translation>
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
        <translation type="unfinished">OK</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Pozycja:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation>Tutaj można dodawać, zmieniać i usuwać stopery kolorów.</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Zarządzaj liniami pomocniczymi</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Poziome</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Pionowe</translation>
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
        <translation>Wsp. &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Dodaj</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Wsp. &amp;X:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>Doda&amp;j</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>U&amp;suń</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>&amp;Zabezpiecz linie pomocnicze</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Niestety brak podręcznika! Aktualną dokumentację znaleźć można pod adresem http://docs.scribus.net, 
proszę również zajrzeć pod www.scribus.net do działu &quot;Download&quot;.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Zawartość</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Dowiązanie</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Pomoc online Scribusa</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Propozycja podziału</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Zastosuj</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Pomiń</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Ustawienia</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Długość najkrótszego słowa podlegającego podziałowi na sylaby.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Maksymalna ilość następujących po sobie podziałów na sylaby.
Wartość 0 oznacza brak ograniczeń.</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Język:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Najkrótsze słowo:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>&amp;Propozycje podziału</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>&amp;Dziel tekst automatycznie w trakcie pisania</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Kiedy wybierzesz w menu Dodatki&gt;Dziel wyrazy, pojawi się okienko dialogowo z propozycjami podziału dla każdego słowa.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Włącza automatyczne dzielenie wyrazów w trakcie pisania tekstu.</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>&amp;Ilość dozwolonych kolejnych podziałów:</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Wklej stronę</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Wstaw</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>przed stroną</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>po stronie</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>na końcu dokumentu</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normalny</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Szablon (prawa strona):</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="obsolete">&amp;Wklej</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>stron</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="obsolete">Szab&amp;lon (lewa strona):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Szablon:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">&amp;Wklej</translation>
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
        <translation>Wklej tabelę</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation>Ilość wierszy:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation>Ilość szpalt:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>New Script</source>
        <translation>Nowy skrypt</translation>
    </message>
    <message>
        <source>Edit JavaScripts</source>
        <translation>Edytuj skrypty w JavaScript</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Edycja...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Dodaj...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Nowy skrypt:</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nie</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Tak</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation>Naprawdę usunąć ten skrypt?</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Konfiguracja skrótów klawiaturowych</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Akcja</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Aktualny skrót</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Wybierz kombinację klawiszy dla tej akcji</translation>
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
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Bez skrótu</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>Skrót przyporządkowany przez &amp;użytkownika</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>&amp;Przyporządkuj skrót</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation>Ta kombinacja klawiszy jest już używana</translation>
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
        <translation>Warstwy</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation>Dodaj nową wartwę</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Usuń warstwę</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation>Przesuń o wartwę wyżej</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation>Przesuń o warstwę niżej</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation>Nowa warstwa</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation>Czy chcesz także usunąć wszystkie obiekty na tej warstwie?</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Nazwa</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Edytuj style linii</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopia %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nowy styl</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.sla.gz *.scd *.scd.gz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.scd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Dołącz</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edycja</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Klonuj</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Zapisz</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nie</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Tak</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Naprawdę usunąć ten styl?</translation>
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
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Nowy</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">Opis</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="obsolete">&amp;Edycja...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Importuj</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Wielokrotne klonowanie</translation>
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
        <translation>&amp;Ilość kopii:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Przesunięcie poziome:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>P&amp;rzesunięcie pionowe:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Odstępy</translation>
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
        <translation>DX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation>DY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>Kąt:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Długość:</translation>
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
        <translation type="unfinished">Błąd w skrypcie</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished">Jeśli wykonujesz skrypt wchodzący w część oficjalnego pakietu Scribusa, zamelduj proszę błąd pod adresem &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Wyświetlaj &amp;konsolę</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete"> &amp;Ukryj konsolę</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished">Wiadomość ta zawarta jest również w twoim schowku. Użyj Ctrl+V, aby wkopiować ją w systemie zgłaszania błędów.</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Zmień...</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Importuj</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Anuluj</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.sla.gz *.scd *.scd.gz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.scd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Import Template</source>
        <translation>Importuj szablon</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importuj strony</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="obsolete">Z dokumentu:</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="obsolete">Importuj strony:</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Wpisz rozdzieloną przecinkami listę wartości,
gdzie * oznacza wszystkie strony, 1-5 zakres stron 
a pojedynczy numer oznacza numer strony.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>od 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Utwórz strony</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">przed stroną</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">po stronie</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">na końcu dokumentu</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>od %1</translation>
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
        <translation type="unfinished">&amp;Importuj</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished">Brakująca czcionka</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished">Czcionka %1 nie jest zainstalowana.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished">Użyj</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished">zamiast</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;OK</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Przesuń strony</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Kopiuj stronę</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Przesuń strony:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>do:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">przed stroną</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">po stronie</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">na końcu dokumentu</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
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
        <translation>Właściwości</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometria</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Punkt odniesienia:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Poziom</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Kształt:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Odstęp tekstu</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Wyświetlaj krzywą</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Początkowe przesunięcie:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Odstęp od krzywej:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation>Odstępy</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Profil wejściowy:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Metoda konwersji przestrzeni kolorów:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Spostrzeżeniowa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Względna kolorymetryczna</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Nasyceniowa</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Bezwzględna kolorymetryczna</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Lewy punkt</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Punkty końcowe</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Szpic</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Ścięty</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Okrągły</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Płaski</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Kwadratowy</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Zaokrąglony</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Bez stylu</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Rozmiar czcionki</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Interlinia</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Manualne podcinanie</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>Nazwa &quot;%1&quot; już istnieje.
Proszę wybrać inną.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Cieniowanie:</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Nazwa wybranego obiektu</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Współrzędna pozioma aktualnego punktu odniesienia</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Współrzędna pionowa aktualnego punktu odniesienia</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szerokość</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Wysokość</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Obrót obiektu dookoła aktualnego punktu odniesienia</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Punkt, do którego odnoszą się miary oraz kąty obrotu</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Wybierz górny lewy róg jako punkt odniesienia</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Wybierz górny prawy róg jako punkt odniesienia</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Wybierz dolny lewy róg jako punkt odniesienia</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Wybierz dolny prawy róg jako odniesienia</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Wybierz środek jako punkt odniesienia</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Odbicie lustrzane w poziomie</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Odbicie lustrzane w pionie</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Przesuń o poziom wyżej</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Przesuń o poziom niżej</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Przesuń na wierzch</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Przesuń na spód</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Zabezpiecza albo odbezpiecza obiekt</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Zabezpiecza albo odbezpiecza rozmiary obiektu</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Włącza albo wyłącza drukowanie obiektu</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Czcionka wybranego tekstu albo obiektu</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Skalowanie szerokości znaków</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kolor obrysu tekstu</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kolor wypełnienia tekstu</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Nasycenie koloru obrysu tekstu</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Nasycenie koloru wypełnienia tekstu</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Styl aktualnego akapitu</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Zmiana ustawień dla lewych albo końcowych punktów</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Wzór linii</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Grubość linii</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Typ połączenia linii</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Typ zakończenia linii</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Styl linii aktualnego obiektu</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Wybierz formę ramki...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Edytuj formę ramki...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Ustaw promień zaokrąglenia rogów</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Ilość szpalt w ramce tekstowej</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Ostęp pomiędzy szpaltami</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Odstęp tekstu od górnego brzegu ramki</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Odstęp tekstu od dolnego brzegu ramki</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Odstęp tekstu od lewego brzegu ramki</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Odstęp tekstu od prawego brzegu ramki</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Edytuj ustawienia tabulatorów ramki tekstowej...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Dozwolony inny rozmiar obrazka niż ramki</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Poziome przesunięcie obrazka w ramce</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Pionowe przesunięcie obrazka w ramce</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Zmień rozmiar obrazka w poziomie</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Zmień rozmiar obrazka w pionie</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>Zachowaj proporcje współrzędnych X i Y</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Dopasuj obrazek do rozmiarów ramki</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Użyj proporcji obrazka zamiast proporcji ramki</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Linie ograniczające komórki</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Linia u góry</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Linia na dole</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Linia po prawej</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Linia na dole</translation>
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
        <translation>Zachowaj proporcje</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Profil źrodła obrazka</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation>Metoda konwersji przestrzeni kolorów dla obrazka</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Przełącza pomiędzy szerokością odstępu a szerokością szpalty</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Szerokość szpalty</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Właściwości ścieżki tekstowej</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation>Tekst w ramkach znajdujących się pod spodem będzie opływał ten obiekt</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Pokazuje poziom, na którym znajduje się obiekt. 0 oznacza, że obiekt jest na spodzie</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>Ksz&amp;tałt ramki</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>Tek&amp;st</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>&amp;Obrazek</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Linia</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Kolory</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Wsp. &amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Wsp. &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>Sz&amp;erokość:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Wysokość:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>O&amp;brót:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>Tekst opływa &amp;ramkę</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>Zastosuj ramkę o&amp;graniczającą</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>Z&amp;astosuj kontur obiektu</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>Ed&amp;ycja ramki...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>Zaokrąglone
&amp;rogi:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Szp&amp;alty:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>Odstęp &amp;między szpaltami:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>Na &amp;górze:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>Na &amp;dole:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>Po l&amp;ewej:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Po &amp;prawej:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>Ta&amp;bulatory...</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Rozmiar czcionki:</translation>
    </message>
    <message>
        <source>&amp;Kerning:</source>
        <translation>&amp;Podcięcie:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation>&amp;Interlinia:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>St&amp;yl:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>&amp;Język:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>Sk&amp;alowanie ręczne</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>Skalo&amp;wanie X:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>Skalowa&amp;nie Y:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Skalu&amp;j do rozmiaru ramki</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>p&amp;roporcjonalnie</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>P&amp;unkt odniesienia:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>T&amp;yp linii:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Grubość linii:</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>&amp;Rogi:</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>Z&amp;akończenia:</translation>
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
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation>Zastosuj ramkę ograniczającą zamiast kształtu ramki dla opływu tekstu</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation>Użyj drugiej linii opartej na kształcie ramki dla opływu tekstu</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Język ramki dla dzielenia wyrazów</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Pisanie od prawej do lewej</translation>
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
        <translation>Edytuj style</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Płaski</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Kwadratowy</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Zaokrąglony</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Szpic</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Ścięty</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Okrągły</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Grubość linii:</translation>
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
        <translation>OK</translation>
    </message>
    <message>
        <source> pt </source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Linia ciągła</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Linia przerywana</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Linia punktowana</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Linia kreskowo-punktowa</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Linia punkt punkt kreska</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>Nazwa &quot;%1&quot; już istnieje.
Proszę wybrać inną.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>MusterPages</name>
    <message>
        <source>Edit Templates</source>
        <translation type="unfinished">Edytuj szablony</translation>
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
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="unfinished">Naprawdę usunąć ten szablon?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">&amp;Nie</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;Tak</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">&amp;Nazwa:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="unfinished">Nowy szablon</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">Kopia %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Nazwa:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normalny</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Edytuj szablony</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Kopia %1</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Nowy szablon</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Kopia  #%1</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normalny</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Nazwa:</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Dołącz</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Nowy</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">&amp;Klonuj</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Zamknij</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Nie</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Tak</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Nazwa:</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Naprawdę usunąć ten szablon?</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation>Nowy dokument</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Format strony</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Definicja użytkownika</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Portret</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Pejzaż</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marginesy</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Punkty (pt)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Cale (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Pica (p)</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation>Szpalty</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Milimetry (mm)</translation>
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
        <translation>Rozmiar strony dokumentu, standardowy albo zdefiniowany przez użytkownika</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Orientacja stron dokumentu</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Szerokość stron dokumentu, można ją zmienić, jeśli wybrałeś definiowanie rozmiaru strony przez użytkownika</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Wysokość stron dokumentu, można ją zmienić, jeśli wybrałeś definiowanie rozmiaru strony przez użytkownika</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Włącz rozkład stron na rozwarciu</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Ustaw jako pierwszą stronę lewą stronę dokumentu</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Odstęp pomiędzy górną linią pomocniczą marginesu a krawędzią strony</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Odstęp pomiędzy dolną linią pomocniczą marginesu a krawędzią strony</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Odstęp pomiędzy lewą linią pomocniczą marginesu a krawędzią strony
Jeśli wybrałeś strony widzące się, obszar marginesu może być użyty to osiągnięcia prawidłowych marginesów dla zszycia</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Ostęp pomiędzy linią pomocniczą prawego marginesu i krawędzią strony.
Jeśli zostały wybrane strony widzące się, to margines ten może zostać użyty dla osiągnięcia prawidłowego marginesu dla zszycia</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation>Pierwszy numer strony dokumentu</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Domyślna jednostka miary dla edycji dokumentów</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Utwórz automatycznie ramki tekstowe, kiedy będą dodawane nowe strony</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Odstęp pomiędzy automatycznie tworzonymi szpaltami</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Ilość szpalt w  automatycznie tworzonych ramkach tekstowych</translation>
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
        <translation>&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Szerokość:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Wysokość:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>S&amp;trony widzące się</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Lewa strona naj&amp;pierw</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>Po &amp;lewej:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Po &amp;prawej:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>Na &amp;górze:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>Na &amp;dole:</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>A&amp;utomatyczne ramki tekstowe</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>Odstęp &amp;między szpaltami:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Szpa&amp;lty:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>W&amp;ewnątrz:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Or&amp;ientacja:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>Pierwszy &amp;numer strony:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>&amp;Jednostka:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>Na &amp;zewnątrz:</translation>
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
        <translation>Lewa strona</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Prawa strona</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Węzły</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Przesuń węzły</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Przesuń punkty kontrolne</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Dodaj węzły</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Usuń węzły</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Wyzeruj punkty kontrolne</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Wyzeruj ten punkt kontrolny</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation>W przypadku zakreślenia, współrzędne odnoszą się do strony,
w innym przypadku do obiektu.</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>Współrzędne &amp;bezwzględne</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Wsp. &amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Wsp. &amp;Y:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>Edytuj linię &amp;konturu</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>&amp;Wyzeruj kontur obiektu</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>&amp;Zakończ edycję</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Przesuń punkty kontrolne niezależnie od siebie</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Przesuń punkty kontrolne symetrycznie</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Otwiera wielokąt lub przecina krzywą Beziera</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Zamknij tę krzywą Beziera</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Odwróć ścieżkę w poziomie</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Odwróć ścieżkę w pionie</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Przemieszczenie w poziomie w lewo</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Przemieszczenie w pionie do góry</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Przemieszczenie w pionie na dół</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Obraca ścieżkę odwrotnie do ruchu wskazówek zegara</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Obraca ścieżkę zgodnie z ruchem wskazówek zegara</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation>Zmniejsz rozmiar ścieżki o 10%</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Zwiększ rozmiar ścieżki o 10%</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Kąt obrotu</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation>% powiększenia lub pomniejszenia</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Włącz tryb edycji linii konturu</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Wyzeruj linię konturu do oryginalnego kształtu ramki</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Przemieszczenie w poziomie w prawo</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation>Konsola skryptowa</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Zakres eksportu</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">Opcje pliku</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">Lewy margines</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">Prawy margines</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="obsolete">dpi</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Ogólne</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Zagnieżdżanie</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Dostępne czcionki:</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="obsolete">Czcionki do zagnieżdżenia:</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Strona</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Efekty</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="obsolete">sek</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">Brak efektu</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Żaluzje</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Ramka</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Znikanie</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Szachownica</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Dzielenie</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Zacieranie</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Poziomo</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Pionowo</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="obsolete">Wewnątrz</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Zewnątrz</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">Od lewej do prawej</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">Od góry do dołu</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">Od dołu do góry</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">Od prawej do lewej</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Hasła</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Uprawnienia</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="obsolete">Monitor / Internet</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Drukarka</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Jednolite kolory:</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="obsolete">Profil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Metoda konwersji przestrzeni kolorów:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Spostrzeżeniowa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Względna kolorymetryczna</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Nasyceniowa </translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Bezwzględna kolorymetryczna</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Obrazki:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="obsolete">Nie używaj zagnieżdżonych profili ICC</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="obsolete">Ustawienia dla pliku wyjściowego PDF/X-3</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="obsolete">Krawędzie spadu</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="obsolete">Od góry po lewej do dołu po prawej</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Ustawienia grafiki</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="obsolete">Automatyczna</translation>
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
        <translation type="obsolete">Brak</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="obsolete">Maksymalna</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="obsolete">Wysoka</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Średnia</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="obsolete">Niska</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="obsolete">Minimalna</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="obsolete">Eksportuj wszystkie strony do PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="obsolete">Eksportuj zakres stron do PDF</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Czas, przez jaki strona będzie pokazywana, zanim włączy się efekt prezentacyjny dla wybranej strony.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Czas trwania efektu prezentacyjnego.
Krótszy czas spowoduje przyspieszenie efektu, dłuższy czas jego spowolnienie.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="obsolete">Zastosuj wybrany efekt do wszystkich stron.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Wybierz główne hasło, które włączy lub wyłączy wszystkie
zabezpieczenia w wyeksportowanym pliku PDF</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="obsolete">Zagnieżdża profil barw dla jednolitych kolorów</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="obsolete">Wybierz profil barw dla obrazków</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="obsolete">Nie stosuj profili barw zagnieżdżonych w obrazkach</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="obsolete">Wielkość spadu mierzona od górnej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="obsolete">Wielkość spadu mierzona od dolnej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="obsolete">Wielkość spadu mierzona od lewej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="obsolete">Wielkość spadu mierzona od prawej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="obsolete">Określa kompatybilność pliku PDF. Domyślne ustawienie to Acrobat 4.0, którego wynikiem jest największa kompatybilność.
Wybierz Acrobata 5.0, jeśli twój plik korzysta z takich właściwości PDF 1.4 jak przezroczystość, lub jeśli wymagane jest kodowanie 128 bitowe.
PDF/X-3 przeznaczony jest dla eksportu do PDF przeznaczonego do profesjonalnego druku i daje się wybrać, jeśli zostało włączone zarządzanie kolorami.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Określa odstęp do zszycia stron w pliku PDF. Najlepiej zostawić
domyślne ustawienie (z lewej strony), chyba że wiesz na pewno, że zmiana jest potrzebna.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Włącza generowanie miniatur każdej strony w pliku PDF.
Niektóre przegląrki używają miniatur do nawigacji.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="obsolete">Włącza generowanie artykułów PDF, które przydają się
w nawigowaniu pomiędzy powiązanymi ze sobą artykułami w PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Włącza osadzanie utworzonych przez ciebie zakładek w dokumencie.
Jest to przydatne przy poruszaniu się w długich dokumentach PDF.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Wybór rozdzielczości tekstu i grafiki wektorowej w eksportowanym pliku.
Nie ma wpływu na rozdzielczość grafiki bitmapowej, np. zdjęć.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Włącza kompresję tekstu i grafiki. Najlepiej zostawić zakreślone, 
chyba że ma się powody, aby to zmieniać. Redukuje to rozmiar pliku PDF.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Wybór wersji kompresji obrazków.
Automatyczna pozwala Scribusowi na wybór najlepszej metody.
ZIP jest dobry dla obrazków o jednolitych kolorach.
JPEG nadaje się lepiej do tworzenia mniejszych plików PDF zawierających dużo zdjęć (przy najmniejszej z możliwych utracie informacji obrazka).
Wybierz kompresję automatyczną, chyba że potrzebujesz specjalnych opcji przy kompresji.</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="obsolete">Ten wybór umożliwi redukcję grafiki bitmapowej do wybranej rozdzielczości DPI.
Jeśli nie zakreślisz tej opcji, grafika zostanie wyeksportowana z oryginalną rozdzielczością.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="obsolete">Wybór rozdzielczości DPI (Dots Per Inch) dla eksportu obrazków.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Zaznacz tę opcję, aby zagnieździć czcionki w dokumencie PDF. Zagnieżdżenie czcionek
pozwoli na zachowanie układu graficznego i wyglądu dokumentu.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Włącza efekty prezentacyjne, które Acrobat Reader pokazuje w trybie pełnoekranowym.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="obsolete">Wyświetl podgląd każdej strony wymienionej powyżej.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="obsolete">Typ efektu prezentacyjnego.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="obsolete">Kierunek przemieszczania się linii dla efektu dzielenia i żaluzji.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="obsolete">Wybierz pozycję początkową dla efektu ramki i dzielenia.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="obsolete">Wybierz kierunek efektu szachownicy lub zacierania.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Zakreślenie tej opcji włączy zabezpieczenia w eksportowanym dokumencie PDF.
Jeśli wybrałeś eksport do formatu Acrobat 4.0, to plik PDF zostanie zabezpieczony szyfrowaniem 40 bitowym.
Jeśli wybrałeś eksport do formatu Acrobat 5.0, to  plik PDF zostanie zabezpieczony szyfrowaniem 128 bitowym.
Zastrzeżenie: szyfrowanie w PDF nie jest tak godne zaufania jak GPG lub PGP i ma pewne ograniczenia.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Wybór modelu barw dla wyjściowego dokumentu PDF.
Wybierz &quot;Monitor/Internet&quot; dla plików PDF, które przeznaczone są do oglądania na monitorze lub do druku an typowych drukarkach atramentowych.
Wybierz opcję &quot;Drukarka&quot;, jeśli będziesz drukował na drukarce obsługującej CMYK.</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="obsolete">Model barw dla jednolitych kolorów</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="obsolete">Metoda konwersji przestrzeni kolorów dla jednolitych kolorów</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="obsolete">Profil barw dla obrazków</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="obsolete">Metoda konwersji przestrzeni kolorów dla obrazków</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="obsolete">Profil wyjściowy dla druku. Jeśli to możliwe, poproś drukarnię o poradę w sprawie wyboru właściwego profilu.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Ten komentarz musi zostać podany dla zgodności ze standardem PDF/X-3.
Zalecane jest wpisanie tutaj tytułu dokumentu.</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="obsolete">&amp;Ogólne</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="obsolete">&amp;Czcionki</translation>
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
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Stopnie kompresji: minimalny (25%), niski (50%), średni (75%), wysoki (85%), maksymalny (95%)</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="obsolete">Wybierz hasło dla użytkowników, którym będzie wolno czytać twój PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="obsolete">Dozwolone drukowanie dokumentu PDF. W przypadku braku zakreślenia druk zostanie uniemożliwiony.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="obsolete">Dozwolona edycja dokumentu PDF. W przypadku braku zakreślenia edycja zostanie uniemożliwiona.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Dozwolone kopiowanie tekstu i grafik z dokumentu PDF. W przypadku braku zakreślenia, kopiowanie zostanie uniemożliwione.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Dozwolone dodawanie adnotacji i pól do dokumentu PDF.
W przypadku braku zakreślenie edycja adnotacji i pól zostanie uniemożliwiona.</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Wpisz rozdzieloną przecinkami listę wartości,
gdzie * oznacza wszystkie strony, 1-5 zakres stron 
a pojedynczy numer oznacza numer strony.</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="obsolete">Opcje generowania rastra</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="obsolete">Standardowy</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Liniowy</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="obsolete">Okrągły</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="obsolete">Eliptyczny</translation>
    </message>
    <message>
        <source>Create PDF File</source>
        <translation>Utwórz plik PDF</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>Plik &amp;wyjściowy:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>&amp;Zmień...</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="obsolete">Wszys&amp;tkie strony</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="obsolete">Wybierz stro&amp;ny</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="obsolete">&amp;Format pliku:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="obsolete">Odstęp dla zsz&amp;ycia:</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="obsolete">G&amp;eneruj miniatury</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="obsolete">Zapisz połączone ramki tekstowe jako artykuły &amp;PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="obsolete">Dołącz zakładk&amp;i</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Rozdzielczość:</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Metoda:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Jakość:</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">Rozdzie&amp;lczość obrazków:</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">Za&amp;gnieźdź wszystkie czcionki</translation>
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
        <translation type="obsolete">Wyświetlaj &amp;miniatury stron</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="obsolete">Cza&amp;s wyświetlania:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="obsolete">&amp;Trwanie efektu:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="obsolete">Typ &amp;efektu:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="obsolete">&amp;Ruchome linie:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="obsolete">Od&amp;:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="obsolete">K&amp;ierunek:</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">Zastos&amp;uj efekt do wszystkich stron</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="obsolete">Zastosu&amp;j szyfrowanie</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="obsolete">Uż&amp;ytkownik:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="obsolete">Właścicie&amp;l:</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="obsolete">Dozwolo&amp;ne drukowanie dokumentu</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="obsolete">Dozwolona z&amp;miana dokumentu</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="obsolete">Dozwolone kopiowanie &amp;tekstu i grafik</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="obsolete">Dozwolone dodawanie adnotacji i &amp;pól</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="obsolete">&amp;Bezpieczeństwo</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="obsolete">Plik wy&amp;jściowy przeznaczony dla:</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="obsolete">Za&amp;stosuj własne opcje generowania rastra</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="obsolete">Częs&amp;totliwość:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="obsolete">Kąt&amp;:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="obsolete">Kształt punktu &amp;rastrowego:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="obsolete">Zastosuj profil ICC</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">&amp;Kolory</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="obsolete">Ko&amp;mentarz:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="obsolete">&amp;Profil wyjściowy:</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Zapisz</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Pliki PDF (*.pdf);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">Jest to zaawansowana opcja, która domyślnie jest wyłączona. Włącz ją tylko wtedy, 
kiedy zostaniesz o to poproszony przez twoją drukarnię i dostaniesz od nich szczegółowe instrukcje.
W innym przypadku twój wyeksportowany plik PDF może sprawiać problemy przy druku i przy otwieraniu w innym systemach.</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="obsolete">Kompresja &amp;tekstu i grafiki wektorowej</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="obsolete">Włącz e&amp;fekty prezentacyjne</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="obsolete">&amp;Prezentacja</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Obrót:</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">Zag&amp;nieżdż podzbiory wszystkich czcionek</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">Podzbiory czcionek do zagnieżdżenia:</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="obsolete">Odwróć strony w poziomie</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="obsolete">Odwróć strony w pionie</translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Podgląd wydruku</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Wszystkie</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation>Polepsza wygląd tekstu w okienku podglądu kosztem nieznacznego spowolnienia 
generowania podglądu. Dotyczy to tylko czcionek Type 1</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of True Type Fonts, Open Type Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Polepsza wygląd czcionek True Type, Open Type, plików EPS, PDF i  grafik wektorowych 
w okienku podglądu kosztem nieznacznego spowolnienia generowania podglądu</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Wyświetla przezroczystość i przezroczyste obiekty zawarte w dokumencie. Wymaga Ghostscriptu w wersji 7.07 lub późniejszej</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Włącza podgląd z zastosowaniem symulacji generycznych barw CMYK zamiast kolorów RGB</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Włącza/wyłącza podgląd barwy C (cyjan)</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Włącza/wyłącza podgląd barwy M (madżenta)</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Włącza/wyłącza podgląd barwy Y (żółty)</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Włącza/wyłącza podgląd barwy K (czarny)</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation>Wygładzanie &amp;tekstu</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation>Wygładzanie &amp;grafiki</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Wyświetlaj &amp;przezroczystość</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>&amp;Wyświetlaj CMYK</translation>
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
        <source>&amp;Under Color Removal</source>
        <translation>Zastosuj &amp;UCR (usuwanie koloru neutralnego)</translation>
    </message>
    <message>
        <source>A way of switching some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">UCR jest to sposób zamiany niektórych odcieni szarości, które
składają się z cyjanu (C), żółci (Y) i madżenty (M) na czarny.
UCR najbardziej ma wpływ na obszary obrazków, które mają neutralne
lub ciemne odcienie bliskie szarości. Użycie go może poprawić wydruk niektórych 
obrazków, jednakże wymaga wykonania wcześniej kilku prób i testów dla każdego
przypadku.
UCR zmniejsza możliwość wystąpienia przesycenia z tuszami CMY.</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>UCR jest to sposób zamiany niektórych odcieni szarości, które
składają się z cyjanu (C), żółci (Y) i madżenty (M) na czarny.
UCR ma największy wpływ na obszary obrazków, które mają neutralne
lub ciemne odcienie bliskie szarości. Użycie go może poprawić wydruk niektórych 
obrazków, jednakże wymaga wykonania wcześniej kilku prób i testów dla każdego
przypadku.
UCR zmniejsza możliwość wystąpienia przesycenia  tuszami CMY.</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Polepsza wygląd czcionek True Type i Open Type oraz grafik EPS i PDF 
w okienku podglądu kosztem nieznacznego spowolnienia generowania podglądu</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
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
        <translation type="obsolete">Kopiuj tutaj</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Przesuń tutaj</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Anuluj</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Obrazek</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="obsolete">Plik: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="obsolete">Dowiązany tekst</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Ramka tekstowa</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="obsolete">Tekst na ścieżce</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="obsolete">Akapitów: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="obsolete">Słów: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="obsolete">Znaków: </translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Edytuj tekst...</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Brak</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Drukowanie:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Włączone</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="obsolete">Wyłączone</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">Program</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">nie istnieje!</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Kopia</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Wklej</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Wyświetlaj &amp;marginesy</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Wyświetlaj &amp;ramki</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Wyświetlaj &amp;obrazki</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Wyświetlaj &amp;siatkę</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Wyświetlaj &amp;linie pomocnicze</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">W&amp;yświetlaj linie pisma</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">Wyrów&amp;naj do siatki</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">Wyrównaj &amp;do linii pomocniczych</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="obsolete">Oryginalne DPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="obsolete">Rzeczywiste DPI: </translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="obsolete">In&amp;formacja</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="obsolete">&amp;Pobierz obrazek...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">&amp;Obrazek widoczny</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">&amp;Aktualizuj obrazek</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Edytuj obrazek</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Dopasuj ramkę do obrazka</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Pobierz tekst...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="obsolete">Dołą&amp;cz tekst...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">&amp;Edytuj tekst...</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">&amp;Wstaw przykładowy tekst</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">Jest &amp;zakładką PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">Jest adnotac&amp;ją PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">Właściwości &amp;adnotacji</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">Właściwości &amp;pola</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">&amp;Opcje PDF</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Zabezpiecz</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">&amp;Odbezpiecz</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">Zabezpiecz roz&amp;miary obiektu</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Odbezp&amp;iecz rozmiary obiektu</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Dodaj do &amp;biblioteki</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">P&amp;rzesuń do warstwy</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;Grupuj</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">&amp;Rozgrupuj</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="obsolete">Poz&amp;iom</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Przesuń na &amp;spód</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Prz&amp;esuń na wierzch</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">O poziom &amp;niżej</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">O poziom w&amp;yżej</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">Ramka &amp;graficzna</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">&amp;Wielokąt</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Krzywe</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">Ramka &amp;tekstowa</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">Krzywa &amp;Beziera</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="obsolete">Z&amp;amień na</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">Wy&amp;tnij</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Kopiuj</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Usuń</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">W&amp;yczyść zawartość</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="obsolete">Wyświet&amp;laj właściwości...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="obsolete">Ukry&amp;j właściwości...</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Naprawdę usunąć cały tekst?</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Obrazek</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Linia</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Wielokąt</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Linia łamana</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Tekst na ścieżce</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation>Strona </translation>
    </message>
    <message>
        <source> of %1</source>
        <translation> z %1</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Wynik</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Wynik szukania dla: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Wybierz</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation>Obrazki</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Ścieżka</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Strona</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Drukuj</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>Idź do</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Tak</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Szukaj</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Właściwości wielokąta</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete">%</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">&amp;Rogi:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">O&amp;brót:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">W&amp;spółczynnik:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Ilość rogów wielokątów</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Kąt obrotu wielokątów</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Przykładowy wielokąt</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">&amp;Zastosuj współczynnik</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Zastosuj współczynnik wklęsłości/wypukłości, aby zmienić kształt wiekąta</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Wartość ujemna zmieni kształt wielokąta na wklęsły (albo gwiaździsty),
wartość dodatnia zmieni jego kształt na wypukły</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished">&amp;Rogi:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished">&amp;Zastosuj współczynnik</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished">W&amp;spółczynnik:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished">Ilość rogów wielokątów</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished">Kąt obrotu wielokątów</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished">Zastosuj współczynnik wklęsłości/wypukłości, aby zmienić kształt wiekąta</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished">Przykładowy wielokąt</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="unfinished">Wartość ujemna zmieni kształt wielokąta na wklęsły (albo gwiaździsty),
wartość dodatnia zmieni jego kształt na wypukły</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Konfiguracja</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Linie pomocnicze</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Typografia</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Narzędzia</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Biblioteka</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Widok</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>Graficzny interfejs użytkownika</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Jednostki</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">Punkty (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Milimetry (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Cale (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Pica (p)</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="obsolete">Menu</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Ścieżki</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Format strony</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Definicja użytkownika</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Portret</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Pejzaż</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marginesy</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Automatyczny zapis</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Układ linii pomocniczych</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Kolor linii pomocniczych</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Pozycja</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Indeks dolny</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete">%</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Indeks górny</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Kapitaliki</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Inne</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Zażółć Gęślą Jaźń AaBbCc1!2@3#</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Brak</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation>Inne opcje</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <source>Small</source>
        <translation>Mały</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Średni</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation>Aby dopasować wielkość widoku, użyj suwaka znajdującego się poniżej.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Wybierz katalog</translation>
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
        <source>External Tools</source>
        <translation type="obsolete">Zewnętrzne narzędzia</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation>Różne</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation>Interpreter Postscript</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Narzędzie do obróbki obrazków</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation>Drukowanie</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation>Wybierz domyślną dekorację i wygląd okien.
Scribus dziedziczy wszystkie dostępne tematy KDE i QT</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Domyślny rozmiar czcionki dla okienek i menu.</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Domyślna jednostka miary dla edycji dokumentów</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Ilość wierszy, o którą Scribus przewinie obraz przy każdym poruszeniu kółka myszy</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Promień obszaru, w którym Scribus pozwoli ci na uchwycenie obiektu</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Ilość ostatnio edytowanych dokumentów, które pokazane zostaną w menu Plik</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Domyślny katalog dla dokumentów</translation>
    </message>
    <message>
        <source>Default ICC profiles directory</source>
        <translation>Domyślny katalog dla profili ICC</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Domyślny katalog dla skryptów wtyczki skryptowej</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Domyślny rozmiar strony, standardowy albo zdefiniowany przez użytkownika</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Domyślna orientacja stron dokumentu</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Szerokość stron dokumentu, można ją zmienić, jeśli wybrałeś definiowanie rozmiaru strony przez użytkownika</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Wysokość stron dokumentu, można ją zmienić, jeśli wybrałeś definiowanie rozmiaru strony przez użytkownika</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Włącz rozkład stron na rozwarciu</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation>Ustaw jako pierwszą stronę lewą stronę dokumentu</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Odstęp pomiędzy górną linią pomocniczą marginesu a krawędzią strony</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Odstęp pomiędzy dolną linią pomocniczą marginesu a krawędzią strony</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Odstęp pomiędzy lewą linią pomocniczą marginesu a krawędzią strony
Jeśli wybrałeś strony widzące się, obszar marginesu może być użyty to osiągnięcia prawidłowych marginesów dla zszycia</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation>Jeśli włączysz tę opcję, Scribus będzie zapisywał kopię bezpieczeństwa twojego pliku z rozszerzeniem .bak
w zdefiniowanym odstępie czasowym.</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Okres czasu pomiędzy automatycznym zapisywaniem</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="obsolete">Odstęp pomiędzy liniami dodatkowej siatki</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="obsolete">Odstęp pomiędzy liniami głównej siatki</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Odstęp, w którego granicach obiekt przemieści się do linii pomocniczych</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="obsolete">Kolor linii dodatkowej siatki</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="obsolete">Kolor linii głównej siatki</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="obsolete">Kolor linii siatki, które zostaną dodane przez użytkownika</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="obsolete">Umieść siatkę pod obiektami na stronie</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="obsolete">Umieść siatkę nad obiektami na stronie</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="obsolete">Przesunięcie nad linią pisma czcionki w wierszu</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="obsolete">Względny rozmiar czcionki indeksu górnego w porównaniu z normalną czcionką</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="obsolete">Przesunięcie pod linią pisma normalnej czcionki w wierszu</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="obsolete">Względny rozmiar czcionki indeksu dolnego w porównaniu z normalną czcionką</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="obsolete">Względny rozmiar czcionki kapitalików w porównaniu z normalną czcionką</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">O ile w procentach interlinia jest większa od rozmiaru czcionki</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="obsolete">Właściwości ramki tekstowej</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Właściwości ramki graficznej</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="obsolete">Właściwości figur rysunkowych</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="obsolete">Domyślne ustawienia stopnia powiększenia</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="obsolete">Właściwości rysowania linii</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="obsolete">Właściwości rysowania wielokątów</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="obsolete">Czcionka dla nowych ramek tekstowych</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="obsolete">Rozmiar czcionki dla nowych ramek tekstowych</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="obsolete">Kolor czcionki</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="obsolete">Ilość szpalt w ramce tekstowej</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="obsolete">Odstęp pomiędzy szpaltami w ramce tekstowej</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="obsolete">Przykład twojej czcionki</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">Ramka graficzna pozwala na skalowanie obrazków do dowolnego rozmiaru</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="obsolete">Skalowanie obrazków w poziomie</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="obsolete">Skalowanie obrazków w pionie</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="obsolete">Zachowaj taką samą skalę w poziomie i w pionie</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">Obrazki w ramkach graficznych są skalowane to rozmiaru ramki</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">Automatyczne skalowanie obrazków, zachowaj oryginalne proporcje</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Kolor wypełnienia ramek graficznych</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="obsolete">Nasycenie koloru wypełnienia</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="obsolete">Kolor obrysu figur rysunkowych</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="obsolete">Nasycenie koloru obrysów</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="obsolete">Kolor wypełnienia figur rysunkowych</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="obsolete">Styl linii obrysu figur rysunkowych</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="obsolete">Grubość linii obrysu figur rysunkowych</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="obsolete">Minimalne dozwolone powiększenie</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="obsolete">Maksymalne dozwolone powiększenie</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="obsolete">Zmiana powiększenia dla każdej operacji powiększania </translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="obsolete">Kolor linii</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="obsolete">Nasycenie koloru</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="obsolete">Styl linii</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="obsolete">Grubość linii</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Ilość rogów wielokątów</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Kąt obrotu wielokątów</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Przykładowy wielokąt</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation>Wybierz rozmiar podglądu w bibliotece</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="obsolete">Przy zastosowaniu stron widzących się, wyświetl obie strony obok siebie</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Kolor papieru</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="obsolete">Kolor linii marginesu</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Wyświetl obszar poza marginesami w kolorze marginesu</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="obsolete">Włącz obsługę przezroczystości w ramach eksportu do PDF 1.4</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Ustaw domyślne powiększenie</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation>Lokalizacja interpretera Ghostcriptu w systemie plików</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Wygładzanie tekstu dla wyświetlania EPS i PDF na monitorze</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Wygładzanie grafiki dla wyświetlania EPS i PDF na monitorze</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation>Nie pokazuj obiektów poza marginesami na drukowanej stronie ani w eksportowanym pliku</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Ostęp pomiędzy linią pomocniczą prawego marginesu i krawędzią strony.
Jeśli zostały wybrane strony widzące się, to margines ten może zostać użyty dla osiągnięcia prawidłowego marginesu dla zszycia</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation>Zapisz zawartość biblioteki po każdej zmianie</translation>
    </message>
    <message>
        <source>Filesystem location for graphics editor</source>
        <translation>Lokalizacja edytora grafiki w systemie plików</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="obsolete">Siatka linii pisma</translation>
    </message>
    <message>
        <source>Turns on the basegrid</source>
        <translation type="obsolete">Włącza siatkę linii pisma</translation>
    </message>
    <message>
        <source>Turns off the basegrid</source>
        <translation type="obsolete">Wyłącza siatkę linii pisma</translation>
    </message>
    <message>
        <source> px</source>
        <translation type="obsolete">px</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>&amp;Styl:</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Rozmiar czcionki:</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="obsolete">Konfiguracja myszy</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>S&amp;kok kółka:</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="obsolete">Zasięg &amp;chwytania:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>Otwórz &amp;poprzedni:</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>&amp;Dokumenty:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Zmień...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>Profile &amp;ICC:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Z&amp;mień...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>Skr&amp;ypty:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>Zmi&amp;eń...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Ori&amp;entacja:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Szerokość:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>W&amp;ysokość:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>S&amp;trony widzące się</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Lewa strona &amp;najpierw</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>Na &amp;dole:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>Na &amp;górze:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Po &amp;prawej:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>Po &amp;lewej:</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Włączony</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Interwał:</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="obsolete">Odstęp linii &amp;dodatkowej siatki:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="obsolete">Odstęp linii &amp;głównej siatki:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="obsolete">&amp;Zasięg chwytu linii pomocniczej:</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="obsolete">Ko&amp;lor linii dodatkowej siatki:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="obsolete">&amp;Kolor linii głównej siatki:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="obsolete">Kolor linii &amp;pomocniczych:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="obsolete">Kolo&amp;r siatki linii pisma:</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="obsolete">&amp;W tle</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="obsolete">Z przod&amp;u</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="obsolete">Włą&amp;czona</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="obsolete">W&amp;yłączona</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="obsolete">&amp;Przesunięcie:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="obsolete">&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="obsolete">Przesu&amp;nięcie:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="obsolete">Ro&amp;zmiar:</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="obsolete">Roz&amp;miar:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="obsolete">&amp;Siatka linii pisma:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="obsolete">Przesunię&amp;cie siatki linii pisma:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Automatyczna &amp;interlinia:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="obsolete">Domyślna &amp;czcionka:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="obsolete">Domyślny &amp;rozmiar:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="obsolete">&amp;Kolor tekstu:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="obsolete">Szpa&amp;lty:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">Odstęp &amp;między szpaltami:</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="obsolete">&amp;Kolor linii:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="obsolete">&amp;Cieniowanie:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="obsolete">Kolor &amp;wypełnienia:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="obsolete">C&amp;ieniowanie:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="obsolete">&amp;Typ linii:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="obsolete">&amp;Grubość linii:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="obsolete">Mi&amp;nimum:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="obsolete">Ma&amp;ksimum:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="obsolete">&amp;Skok:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="obsolete">&amp;Skalowanie ręczne</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="obsolete">Skalowanie w &amp;poziomie:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="obsolete">Ska&amp;lowanie w pionie:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">Dopas&amp;uj obrazek do rozmiaru ramki</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="obsolete">Zachowa&amp;j proporcje</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">&amp;Kolor wypełnienia:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">&amp;Rogi:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Obrót:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">W&amp;spółczynnik:</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation>&amp;Zapisuj zawartość po zmianie</translation>
    </message>
    <message>
        <source>Large</source>
        <translation>Duży</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="obsolete">&amp;Wyświetlaj strony obok siebie</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="obsolete">Kolory strony</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="obsolete">&amp;Tło:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="obsolete">&amp;Marginesy:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Wyświetlaj obszar &amp;niedrukowalny w kolorze marginesu</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="obsolete">Zastosuj przezroczystość z PDF-&amp;1.4</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>&amp;Dopasuj wielkość widoku</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Nazwa programu:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>Wygładzanie &amp;tekstu</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>Wygładzanie &amp;grafiki</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>Nazwa &amp;programu:</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation>&amp;Przycinaj do krawędzi strony</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>Wewnąt&amp;rz:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>&amp;Na zewnątrz:</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation>Zastosuj &amp;UCR (usuwanie koloru neutralnego)</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation>Sza&amp;blony:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Zmień&amp;...</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation>Dodatkowy katalog na szablony dokumentów</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">&amp;Zastosuj współczynnik</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Zastosuj współczynnik wklęsłości/wypukłości, aby zmienić kształt wiekąta</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Wartość ujemna zmieni kształt wielokąta na wklęsły (albo gwiaździsty),
wartość dodatnia zmieni jego kształt na wypukły</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>UCR jest to sposób wykluczenia niektórych odcieni szarości, które
składają się z cyjanu (C), żółci (Y) i madżenty (M) i zastąpienia ich czernią.
UCR najbardziej ma wpływ na obszary obrazków, które mają neutralne
lub ciemne odcienie bliskie szarości. Użycie go może poprawić wydruk niektórych 
obrazków, jednakże wymaga wykonania wcześniej kilku prób i testów dla każdego
przypadku.
UCR zmniejsza możliwość wystąpienia przesycenia z tuszami CMY.</translation>
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
        <translation type="unfinished">&amp;Język:</translation>
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
        <translation type="unfinished">Kolor:</translation>
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
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>&amp;H:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;S:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;V:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;R:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;G:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>&amp;B:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>K&amp;anał alfa:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>&amp;Podstawowe kolory</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Kolory użytkownika</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>&amp;Definiuj kolory użytkownika &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>D&amp;odaj do kolorów użytkownika</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Wybierz kolor</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Kopiuj albo przesuń plik</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Odczyt: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Zapis: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>&amp;Nazwa pliku:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>&amp;Typ pliku:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Katalog wyżej</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Atrybuty</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Szukaj &amp;w:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Cofnij</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Nowy katalog</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Widok listy</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Widok szczegółowy</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Podgląd informacji o pliku</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Podgląd zawartości pliku</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Odczyt-zapis</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Tylko odczyt</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Tylko zapis</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Niedostępny</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Symboliczne dowiązanie do pliku</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Symboliczne dowiązanie do katalogu</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Symboliczne dowiązanie do specjalnego pliku</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Katalog</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Plik specjalny</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Otwórz</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Zapisz</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>Z&amp;mień nazwę</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>&amp;Aktualizuj</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>&amp;Sortuj według nazwy</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Sortuj według &amp;wielkości</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Sortuj według &amp;daty</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Bez sortowania</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Sortuj</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Pokaż ukryt&amp;e pliki</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>plik</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>katalog</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>symboliczne dowiązanie</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Usuń %1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Czy na pewno usunąć %1 &quot;%2&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Tak</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nie</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Nowy katalog 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nowy katalog</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Nowy katalog %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Znajdź katalog</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Katalogi</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Zapisz</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Nie znaleziono pliku.
Sprawdź katalog i nazwę pliku.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Wybierz katalog</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Katalog:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Czcionka</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>St&amp;yl czcionki</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Rozmiar</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Efekty</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Prze&amp;kreślenie</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Podkreślenie</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>K&amp;olor</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Przykład</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Skr&amp;ypt</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Zastosuj</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Wybierz czcionkę</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Zaznacz wszystko</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Cofnij</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Przywróć</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Wy&amp;tnij</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiuj</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Wklej</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Wyrównaj</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Dopasuj...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;O Qt&lt;/h3&gt;&lt;p&gt;Niniejszy  program używa Qt w wersji %1.&lt;/p&gt;&lt;p&gt;Qt to zestaw narzędzi C++ do programowania aplikacji i graficznych interfejsow użytkownika dla wielu platform.&lt;/p&gt;&lt;p&gt;Qt zapewnia przenośność kodu źródłowego pomiędzy systemami MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux oraz wszystkimi głównymi komercyjnymi wariantami systemu Unix.&lt;br&gt;Qt dostępne jest również dla urządzeń osadzonych.&lt;/p&gt;&lt;p&gt;Qt jest produktem firmy Trolltech. Więcej informacji dostępnych jest na stronie &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Naprawdę zastąpić plik:
%1?</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Podręcznik wtyczki skryptowej</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="unfinished">Skrypty w Pythonie (*.py);; Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>Grafiki SVG (*.svg *.svgz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>Grafiki SVG (*.svg);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Tak</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nie</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation>Podgląd wydruku</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Inicjalizacja...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Tło</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">S&amp;krypt</translation>
    </message>
    <message>
        <source>Oook! You&apos;re calling an object doesn&apos;t exist!</source>
        <translation type="obsolete">Uwaga! Próbujesz wywołać nieistniejący obiekt!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to erase an object doesn&apos;t exist!</source>
        <translation type="obsolete">Uwaga! Próbujesz usunąć nieistniejący obiekt!</translation>
    </message>
    <message>
        <source>Oook! An object you&apos;re trying to textflow doesn&apos;t exist!</source>
        <translation type="obsolete">Uwaga! Obiekt, w którym chcesz wpisać tekst, nie istnieje!</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Zapisz jako obrazek</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation>Błąd podczas zapisu do pliku wyjściowego.</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Błąd podczas zapisu do pliku wyjściowego.</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Eksport został zakończony.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Plik istnieje. Nadpisać?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>już istnieje. Nadpisać?</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Tak dla wszystkich</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Wszystkie obsługiwane formaty (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation>&amp;Podgląd czcionek</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">Dodaj znak  &amp;specjalny</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Nowy z &amp;szablonu...</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Biuletyny</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Broszury</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Katalogi</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Ulotki</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Znaki</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Karty</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Nagłówki listów</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Koperty</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Wizytówki</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Kalendarze</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Reklamy</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Etykiety</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Jadłospisy</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programy</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>Formularze PDF</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>Prezentacje PDF</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Magazyny</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Plakaty</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Ogłoszenia</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Dokumenty tekstowe</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Składanki</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Własne szablony</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Zapisz jako &amp;obrazek...</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="obsolete">Pod&amp;gląd wydruku</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>Importuj &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Zapisz jako sza&amp;blon...</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation>Podręcznik &amp;wtyczki skryptowej...</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished">&amp;Skrypty Scribusa</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished">&amp;Wykonaj skrypt...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished">&amp;Otwórz poprzedni skrypt</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished">Wyświetlaj  &amp;konsolę</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Zapisz stronę jako  &amp;SVG...</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>Importuj &amp;SVG...</translation>
    </message>
    <message>
        <source>Oook! Wrong arguments! Call: </source>
        <translation type="obsolete">Uwaga! Niepoprawne argumenty! Wywołaj:</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to load image into an object doesn&apos;t exist or isn&apos;t selected!</source>
        <translation type="obsolete">Uwaga! Próbujesz wstawić obrazek do nieistniejącego lub niezaznaczonego obiektu!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to (un)lock an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Uwaga! Próbujesz zabezpieczyć lub odbezpieczyć nieistniejący lub niezaznaczony obiekt.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to query an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Uwaga! Próbujesz znaleźć nieistniejący lub niezaznaczony obiekt.</translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation>Importuję tekst</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Wszystkie obsługiwane formaty</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>Pliki HTML</translation>
    </message>
    <message>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Pliki tekstowe</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Pliki danych rozdzielonych przecinkami</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>dane_CSV</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>nagłówek_CSV</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation>Szablon:</translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation>
Zewnętrzne dowiązania
</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>Czcionka %1 jest wadliwa i zostaje wyłączona</translation>
    </message>
    <message>
        <source>OO.o Writer Documents</source>
        <translation type="obsolete">Dokumenty w formacie programu OO.o Writer</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Importery tekstu</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Pudełka na CD/DVD</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albański</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Baskijski</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Bułgarski</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation>Brazylijski</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Kataloński</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Chiński</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Czeski</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Duński</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holenderski</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Angielski</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Angielski (Brytyjski)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Niemiecki</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Fiński</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francuski</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation>Galicyjski</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grecki</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Węgierski</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonezyjski</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Włoski</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Koreański</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Litewski</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Norweski (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Norweski (Nynorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Norweski</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polski</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Rosyjski</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Szwedzki</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Hiszpański</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Hiszpański (LA)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Słowacki</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Słoweński</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Serbski</translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation type="obsolete">Próba ustawienia postępu większego niż maksymalny</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="unfinished">O sk&amp;rypcie...</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="unfinished">O skrypcie</translation>
    </message>
    <message>
        <source>Import &amp;Open Office Draw...</source>
        <translation type="obsolete">Importuj &amp;Open Office Draw...</translation>
    </message>
    <message>
        <source>Open Office Draw (*.sxd);;All Files (*)</source>
        <translation type="obsolete">Open Office Draw (*.sxd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można ustalić rozmiaru czcionki w ramce nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można ustalić czcionki w ramce nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można ustalić rozmiaru tekstu w ramce nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można ustalić liczby szpalt w ramce nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można ustalić interlinii w ramce nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można ustalić odstępu między szpaltami w ramce nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można pobrać tekstu z ramki nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można wstawić tekstu do ramki nietekstowej.</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Nie można wstawić tekstu do ramki nietekstowej.</translation>
    </message>
    <message>
        <source>Insert index out of bounds</source>
        <comment>python error</comment>
        <translation type="obsolete">Wstawianie indeksu poza dozwononym zakresem</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Wyrównanie poza zakresem. Zastosuj jedną ze stałych scribus.ALIGN*.</translation>
    </message>
    <message>
        <source>Can&apos;t set text alignment on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać wyrównania tekstu do ramki nietekstowej</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512</source>
        <comment>python error</comment>
        <translation type="obsolete">Rozmiar czcionki poza dozwolonym zakresem - powinno być 1 &lt;= rozmiar &lt;= 512</translation>
    </message>
    <message>
        <source>Can&apos;t set font size on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać rozmiaru czcionki do ramki nietekstowej</translation>
    </message>
    <message>
        <source>Can&apos;t set font on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać czcionki do ramki nietekstowej</translation>
    </message>
    <message>
        <source>Font not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono czcionki</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1</source>
        <comment>python error</comment>
        <translation type="obsolete">Interlinia poza dozwolonym zakresem, powinna być  &gt;= 0.1</translation>
    </message>
    <message>
        <source>Can&apos;t line spacing on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać interlinii w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive</source>
        <comment>python error</comment>
        <translation type="obsolete">Odstęp pomiędzy szpaltami poza dozwolonym zakresem, wartość powinna być dodatnia</translation>
    </message>
    <message>
        <source>Can&apos;t column gap on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać odstępu między szpaltami w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1</source>
        <comment>python error</comment>
        <translation type="obsolete">Liczba szpalt poza dozwolonym zakresem, powinna być  &gt; 1</translation>
    </message>
    <message>
        <source>Can&apos;t number of columns on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać ilości szpalt w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Indeks zaznaczenia poza dozwolonym zakresem</translation>
    </message>
    <message>
        <source>Can&apos;t select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można wybrać tekstu w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Can&apos;t delete text from a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można usunąć tekstu w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Can&apos;t set text fill on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać wypełnienia tekstu w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Can&apos;t set text stroke on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać obrysu tekst w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Can&apos;t set text shade on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać cieniowania tekstu w ramce nietekstowej</translation>
    </message>
    <message>
        <source>Can only link text frames</source>
        <comment>python error</comment>
        <translation type="obsolete">Można tylko połączyć ramki tekstowe</translation>
    </message>
    <message>
        <source>Target frame must be empty</source>
        <comment>python error</comment>
        <translation type="obsolete">Ramka docelowa musi być pusta</translation>
    </message>
    <message>
        <source>Target frame links to another frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Ramka docelowa jest połączona z inną ramką</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Ramka docelowa jest przyłączona do innej ramki</translation>
    </message>
    <message>
        <source>Source and target are the same object</source>
        <comment>python error</comment>
        <translation type="obsolete">Źródło i cel są tym samym obiektem</translation>
    </message>
    <message>
        <source>Can&apos;t unlink a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można odłączyć ramki nietekstowej</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished">Obiekt nie jest ramką tekstową, nie można połączyć.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="unfinished">Obiekt jest ostatnią ramką w kolejności, nie można rozłączyć. Zamiast tego odłącz poprzednią ramkę. </translation>
    </message>
    <message>
        <source>Can&apos;t convert a non-text frame to outlines</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można zamienić ramki nietekstowej na krzywe</translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie udało się otworzyć dokumentu</translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie udało się zapisać dokumentu</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation>Jednostka spoza dozwolonego zakresu. Proszę użyć jednej ze stałych scribus.UNIT_*.</translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>Obiekt docelowy nie jest ramką graficzną.</translation>
    </message>
    <message>
        <source>Can&apos;t scale by 0%</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można skalować do 0%</translation>
    </message>
    <message>
        <source>Can&apos;t render an empty sample</source>
        <comment>python error</comment>
        <translation type="obsolete">Niemożliwy rendering pustej próbki</translation>
    </message>
    <message>
        <source>Can&apos;t save to a blank filename</source>
        <comment>python error</comment>
        <translation type="obsolete">Niemożliwy zapis do pustej nazwy pliku</translation>
    </message>
    <message>
        <source>Can&apos;t have an empty layer name</source>
        <comment>python error</comment>
        <translation type="obsolete">Niedopuszczalna pusta nazwa warstwy</translation>
    </message>
    <message>
        <source>Layer not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono warstwy</translation>
    </message>
    <message>
        <source>Can&apos;t remove the last layer</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można usunąć ostatniej warstwy</translation>
    </message>
    <message>
        <source>Can&apos;t create layer without a name</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można utworzyć wartswy bez nazwy</translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="obsolete">Obiekt o wybranej nazwie już istnieje</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation type="obsolete">Lista punktowa musi zawierać co najmniej dwa punkty (cztery wartości)</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation type="obsolete">Lista punktowa musi zawierać parzystą liczbę wartości</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation type="obsolete">Lista punktowa musi zawierać przynajmniej trzy punkty (sześć wartości)</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation type="obsolete">Lista punktowa musi zawierać co najmniej cztery punkty (osiem wartości)</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation type="obsolete">Lista punktowa musi zawierać wielokrotność sześciu wartości</translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono obiektu</translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono stylu</translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie można przypisać stylu do ramki nietekstowej</translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="obsolete">Zapis EPS nie powiódł się</translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="obsolete">Numer strony poza dozwolonym zakresem</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">argument nie jest listą: musi być listą wartości typu zmiennoprzecinkowego</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">argument zawiera wartości nienumeryczne: musi być listą wartości typu zmiennoprzecinkowego</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation type="obsolete">Długość linii poza dopuszczalnym zakresem, powinno być &lt;= długość linii &lt;= 12</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Cieniowanie linii poza dopuszczalnym zakresem, powinno być  0 &lt;= cieniowanie &lt;= 100</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Cieniowanie wypełnienia poza dopuszczalnym zakresem, powinno być 0 &lt;= cieniowanie &lt;= 100</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>Promień zaokrąglenia rogu musi być liczbą dodatnią.</translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono stylu linii</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nie można znaleźć koloru o pustej nazwie.</translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono koloru</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nie można zmienić koloru o pustej nazwie.</translation>
    </message>
    <message>
        <source>Color not found in document</source>
        <comment>python error</comment>
        <translation type="obsolete">W dokumencie nie znaleziono koloru</translation>
    </message>
    <message>
        <source>Color not found in default colors</source>
        <comment>python error</comment>
        <translation type="obsolete">Nie znaleziono koloru w domyślnych kolorach</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nie mogę utworzyć koloru o pustej nazwie.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nie mogę usunąć koloru o pustej nazwie.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nie mogę zastąpić koloru o pustej nazwie.</translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>Importuj &amp;OpenOffice.org Draw...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation>OpenOffice.org Draw (*.sxd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>Dokumenty OpenOffice.org Writer</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Nie znaleziono koloru - błąd pythona</translation>
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
the text colour on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation.</source>
        <translation type="obsolete">Moduł interfejsu Pythona w Scribusie

Moduł ten udostępnia interfejs Pythona w Scribusie. Pozwala on na używanie funkcji
kontrolujących Scribusa i na manipulowanie obiektami w obszarze roboczym.
Każda funkcja została opisana poniżej.

Parę rzeczy jest wspólnych dla całego interfejsu. 

Większość funkcji operuje na ramkach. Ramki identyfikowane są 
na podstawie ich nazwy - ciągu znaków, który nie jest obiektem Pythona. 
Wiele funkcji używa opcjonalnego (nie kluczowego) parametru: nazwy ramki.
Wiele wyjątków jest również wspólnych dla większości funkcji. Nie są one 
aktualnie opisane w dokumentacji poszczególnych funkcji.
- Wiele funkcji zwróci błąd NoDocOpenError, jeśli użyjesz ich bez dokumentu, na którym mają operować.
- Jeśli nie przekażesz funkcji nazwy ramki, a funkcja jej wymaga, funkcja ta użyje
aktualnie wybranej ramki, jeśli taka istnieje, lub zwróci błąd NoValidObjectError, 
jeśli nie znajdzie niczego, na czym będzie mogła operować.
- Wiele funkcji zwróci błąd WrongFrameTypeError, jeśli spróbujesz użyć ich na typie 
ramki, dla którego nie ma to żadnego sensu. Na przykład, przypisanie koloru tekstu 
w ramce graficznej nie ma żadnego sensu i spowoduje zwrócenie tego błędu.
- Błędy wynikające z wywołań API Pythona będą przekazywane bez zmiany.
Lista wyjątków zwracanych przez poszczególne funkcje zarówno opisana tutaj jak i dołączona do opisów funkcji jest niekompletna. 

Szczegóły na temat wyjątków zwracanych przez każdą funkcję zawarte są w dokumentacji poszczególnych funkcji.</translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Ustawienia własne (opcjonalne):</translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Ustawienia domyślne:</translation>
    </message>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>Short &amp;Words...</translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>Operacja w toku. Proszę czekać...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Operacja zakończona.</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="unfinished">Afrykanerski</translation>
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
        <translation type="unfinished">Strona</translation>
    </message>
    <message>
        <source>Template </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Definicja użytkownika</translation>
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
        <translation type="unfinished">&amp;Anuluj</translation>
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
        <translation type="unfinished">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished">p</translation>
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
        <translation type="unfinished">Punkty (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="unfinished">Milimetry (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">Cale (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">Pica (p)</translation>
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
        <translation type="unfinished">Zas&amp;tąp</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Wszystkie</translation>
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
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Zaznacz wszystko</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Cofnij</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Przywróć</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Wytni&amp;j</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiuj</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Wklej</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Menu systemowe</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Cieniowanie</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Bez cieniowania</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Przywróć</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimalizuj</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maksymalizuj</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Przywróć</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>Prz&amp;esuń</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Rozmiar</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Mi&amp;nimalizuj</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Maks&amp;ymalizuj</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Zawsze na &amp;wierzchu</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimalizuj</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Przywróć</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>C&amp;ieniowanie</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Bez cieniowania</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation>Ustawienia dokumentu</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marginesy</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Włącz widok dwu stron dokumentu naraz</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Ustaw jako pierwszą stronę lewą stronę dokumentu</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Odstęp pomiędzy górną linią pomocniczą marginesu a krawędzią strony</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Odstęp pomiędzy dolną linią pomocniczą marginesu a krawędzią strony</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Odstęp pomiędzy lewą linią pomocniczą marginesu a krawędzią strony
Jeśli wybrałeś strony widzące się, obszar marginesu może być użyty to osiągnięcia prawidłowych marginesów dla zszycia</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Ostęp pomiędzy linią pomocniczą prawego marginesu i krawędzią strony.
Jeśli zostały wybrane strony widzące się, to margines ten może zostać użyty dla osiągnięcia prawidłowego marginesu dla zszycia</translation>
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
        <translation>Na &amp;górze:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>Po &amp;lewej:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>Na &amp;dole:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Po &amp;prawej:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>S&amp;trony widzące się</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Lewa strona &amp;najpierw</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>Wewnąt&amp;rz:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation>Na &amp;zewnątrz:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Format strony</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Rozmiar:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Definicja użytkownika</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Orientacja:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Portret</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Pejzaż</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Szerokość:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Wysokość:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>Pierwszy &amp;numer strony:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Rozmiar:</translation>
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
        <translation type="unfinished">Tabloid</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Automatyczny zapis</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished">min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished">&amp;Interwał:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Dokument</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Linie pomocnicze</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">Kolor:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished">Wyświetlaj obszar &amp;niedrukowalny w kolorze marginesu</translation>
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
        <translation type="unfinished">Widok</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished">Typografia</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Narzędzia</translation>
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
        <translation type="unfinished">Kolor papieru</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished">Wyświetl obszar poza marginesami w kolorze marginesu</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style of current paragraph</source>
        <translation>Styl aktualnego akapitu</translation>
    </message>
    <message>
        <source>Style Settings</source>
        <translation>Ustawienia styli</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kolor wypełnienia tekstu</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Nasycenie koloru wypełnienia tekstu</translation>
    </message>
    <message>
        <source>Fill Color Settings</source>
        <translation>Ustawienia koloru wypełnienia</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kolor obrysu tekstu</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Nasycenie koloru obrysu tekstu</translation>
    </message>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Ustawienia koloru obrysu</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
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
        <translation>Czcionka zaznaczonego tekstu</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Rozmiar czcionki</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Skalowanie szerokości znaków</translation>
    </message>
    <message>
        <source>Font Settings</source>
        <translation>Ustawienia czcionki</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Kerning:</source>
        <translation>Podcięcie:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Manualne podcinanie</translation>
    </message>
    <message>
        <source>Character Settings</source>
        <translation>Ustawienia znaków</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation>Kopia %1</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Tło</translation>
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
        <translation>Plik</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Szukanie czcionek</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">Czcionki Postscript nie są zainstalowane</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation>Zakończ teraz</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Krytyczny błąd</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Inteligentne dzielenie wyrazów</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Wyrównaj do lewej</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Wyrównaj do prawej</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Wyśrodkuj</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Wstaw numer strony</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Dołącz tekst do ścieżki</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Wyświetlaj paletę warstw</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="obsolete">Skrypty w Javascript...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Cofnij</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Wyświetlaj paletę stron</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="obsolete">Zabezpiecz/Odbezpiecz</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="obsolete">Twarda spacja</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>Wczytywanie ustawień</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation>Inicjalizacja dzielenia wyrazów</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>Konfiguracja skrótów klawiaturowych</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>Wczytywanie biblioteki</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation>Inicjalizacja wtyczek</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">Nowy</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Otwórz...</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Zamknij</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Zapisz</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Zapisz jako...</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Pobierz tekst/obrazek...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Informacja o dokumencie...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Ustawienia dokumentu...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Drukuj...</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Zakończ</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Wytnij</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Kopiuj</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Wklej</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Usuń</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Zaznacz wszystko</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Kolory...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Style...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Szablony...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Czcionki...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="obsolete">Wybierz nową czcionkę</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Klonuj</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Wielokrotne klonowanie</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Usuń</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Grupuj</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="obsolete">Rozgrupuj</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Zabezpiecz</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Przesuń na spód</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Przesuń na wierzch</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">O poziom niżej</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">O poziom wyżej</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Odstęp/Wyrównanie...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Wklej...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Usuń...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Przesuń...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Zastosuj szablon...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Zarządzaj liniami pomocniczymi...</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Dopasuj do okna</translation>
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
        <translation type="obsolete">Miniatury</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Ukryj marginesy</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Ukryj ramki</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Ukryj obrazki</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Wyświetlaj siatkę</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Wyrównaj do siatki</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Narzędzia</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Właściwości</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Struktura</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Biblioteka</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Zarządzanie obrazkami</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Dziel wyrazy</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">O Scribusie</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>O Qt</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Podręcznik Scribusa...</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Styl</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normalny</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Podkreślenie</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Przekreślenie</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Kapitaliki</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Indeks górny</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Indeks dolny</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Obramowanie</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Wsp. X:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Wsp. Y:</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Gotowy</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Pobierz obrazek...</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Kolor</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Negatyw</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Pobierz tekst...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Czcionka</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Cieniowanie</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Odbezpiecz</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Dokumenty (*.sla *.sla.gz *.scd *.scd.gz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.scd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>Pobieranie...</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Pliki tekstowe (*.txt);;Wszystkie pliki(*)</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">Niemożliwy zapis pliku:
%1</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.sla.gz *.scd *.scd.gz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>Zapisywanie...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>Drukowanie...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokument</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Wydruk nie został ukończony!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Podręcznik Scribusa</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">Brak następujących programów:</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Wszystkie</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">Pliki EPS (*.eps);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation>Pobieranie:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>Dopasuj kolory</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Angielski</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Niemiecki</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Hiszpański</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Włoski</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francuski</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Rosyjski</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Duński</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Słowacki</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Węgierski</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Czeski</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holenderski</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portugalski</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation>Ukraiński</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polski</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grecki</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Kataloński</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Wybierz katalog</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Scribus zakonczył działanie</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus przestał działać z powodu sygnału #%1</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Fiński</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Wszystkie obsługiwane formaty</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation>Irlandzki</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="obsolete">Utwórz nowy dokument</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="obsolete">Otwórz dokument</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="obsolete">Zapisz aktualny dokument</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="obsolete">Zamknij aktualny dokument</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="obsolete">Drukuj aktualny dokument</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="obsolete">Zachowaj aktualny dokument jako PDF</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edycja</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Obiekt</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>S&amp;trona</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Widok</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Narzędzia</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>&amp;Dodatki</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>Okn&amp;a</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>Po&amp;moc</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="obsolete">Wyświetlaj linie pisma</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="obsolete">Ukryj linie pisma</translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation>Niektóre obiekty są zabezpieczone.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Anuluj</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="obsolete">Zabezpiecz wszystko</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="obsolete">Odbezpiecz wszystko</translation>
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
        <translation>Litewski</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Szwedzki</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Słoweński</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="obsolete">&amp;Ustawienia</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="obsolete">&amp;Zarządzanie kolorami...</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Otwórz...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>Otwórz &amp;poprzedni</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Z&amp;apisz</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Zapisz &amp;jako...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>Pop&amp;rzednia wersja</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Zbierz &amp;wszystko dla pliku wyjściowego...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="obsolete">Po&amp;bierz tekst/obrazek...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>&amp;Dołącz tekst...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importuj</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>Zapisz &amp;tekst...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Zapisz stronę jako  &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Zapisz jako &amp;PDF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Eksportuj</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>&amp;Ustawienia dokumentu...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>&amp;Drukuj...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>Za&amp;kończ</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Cofnij</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Wy&amp;tnij</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiuj</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Wklej</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Zaznacz wszystko</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>Z&amp;najdź/Zastąp...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>K&amp;olory...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>Style &amp;akapitów...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>Style &amp;linii...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation>&amp;Szablony...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation>Skrypty w &amp;Javascript...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Klonuj</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>&amp;Wielokrotne klonowanie</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Grupuj</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>&amp;Rozgrupuj</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Zabezpiecz</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Przesuń na &amp;spód</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Prz&amp;esuń na wierzch</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>O poziom &amp;niżej</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>O poziom w&amp;yżej</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation>Odstęp/Wyrówn&amp;anie...</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>Ksz&amp;tałt ramki</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>&amp;Dołącz tekst do ścieżki</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>&amp;Odłącz tekst od ścieżki</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>&amp;Połącz wielokąty</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>Podzie&amp;l wielokąty</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation>Za&amp;mień na krzywe</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Wklej...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>&amp;Usuń...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Przesuń...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation>&amp;Zastosuj szablon...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="obsolete">Dop&amp;asuj do okna</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation>&amp;100%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation>&amp;Miniatury</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>Wyświetlaj &amp;siatkę</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Wyrównaj &amp;do linii pomocniczych</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>W&amp;yświetlaj linie pisma</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Właściwości</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation>&amp;Struktura</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>&amp;Biblioteka</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>W&amp;arstwy</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation>S&amp;trony</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Zakładki</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>&amp;Zarządzanie obrazkami</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>&amp;Dziel wyrazy</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>&amp;Podpowiedzi</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>N&amp;arzędzia PDF</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="obsolete">Podpowiedzi</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="obsolete">&amp;Czcionki...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="obsolete">&amp;Dzielenie wyrazów...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="obsolete">&amp;Skróty klawiaturowe...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>&amp;O Scribusie</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>O &amp;Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>Podręcznik &amp;Scribusa...</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>&amp;Styl</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>Do &amp;lewej</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Wyśrodkowane</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>Do &amp;prawej</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>&amp;Justowany</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>J&amp;ustowany (z ostatnią linią)</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Inne...</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Kaskada</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Sąsiadujące</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Kolory</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation>&amp;Negatyw</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Pobierz tekst...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Czcionka</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Rozmiar</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Atrybuty</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Wyrównanie</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>C&amp;ieniowanie</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabulatory...</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">&amp;Odbezpiecz</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Wyświetlaj &amp;obrazki</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>Wyświetlaj &amp;marginesy</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>Wyświetlaj &amp;ramki</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>Wyświetlaj &amp;linie pomocnicze</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation>Ghostscript: nie możesz użyć grafik EPS</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="obsolete">Importuj st&amp;rony...</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>Import stron w toku...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importuj strony</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation>&lt;p&gt;Próbujesz zaimportować więcej stron, niż jest dostępnych licząc od aktywnej strony. &lt;/p&gt;Wybierz jedną z poniższych możliwości:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Utwórz&lt;/b&gt; brakujące strony&lt;/li&gt;&lt;li&gt;&lt;b&gt;Importuj&lt;/b&gt; strony aż do ostatniej strony&lt;/li&gt;&lt;li&gt;&lt;b&gt;Anuluj&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Utwórz</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Importuj</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Import zakończony</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Nie znaleziono niczego do zaimportowania</translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="obsolete">100%</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Wyrów&amp;naj do siatki</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>&amp;Konfiguracja...</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation>Wczytywanie profili ICC</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>Zarządzaj &amp;liniami pomocniczymi...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>C&amp;ieniowanie:</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation>Informacje o doku&amp;mencie...</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="obsolete">&amp;Cofnij usuwanie obiektu</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="obsolete">&amp;Cofnij przesunięcie obiektu</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="obsolete">&amp;Cofnij zmianę obiektu</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="obsolete">&amp;Edytuj kształt</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="obsolete">Plik %1 nie jest w formacie Scribusa</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Afrykanerski</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Inicjalizacja systemu czcionek</translation>
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
        <translation type="unfinished">&amp;Przywróć</translation>
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
        <translation type="unfinished">&amp;Podkreślenie</translation>
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
        <translation type="unfinished">Ed&amp;ycja ramki...</translation>
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
        <translation type="unfinished">&amp;50%</translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation type="unfinished">&amp;75%</translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation type="unfinished">&amp;200%</translation>
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
        <translation type="unfinished">Dodaj znak  &amp;specjalny</translation>
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
        <translation type="unfinished">OpenOffice.org Draw (*.sxd);;Wszystkie pliki (*)</translation>
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
        <translation type="unfinished">&amp;Anuluj</translation>
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
        <translation type="unfinished">Bułgarski</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="unfinished">Program</translation>
    </message>
    <message>
        <source>is already running!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">Informacja</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="unfinished">nie istnieje!</translation>
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
        <translation>Warstwa</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Wszystkie</translation>
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
        <translation type="unfinished">Kopiuj tutaj</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished">Przesuń tutaj</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Anuluj</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">&amp;Wklej</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="unfinished">Obrazek</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished">Plik: </translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished">Oryginalne DPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished">Rzeczywiste DPI: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished">Dowiązany tekst</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished">Ramka tekstowa</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished">Tekst na ścieżce</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished">Akapitów: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished">Słów: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished">Znaków: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="unfinished">Drukowanie:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">Włączone</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">Wyłączone</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished">In&amp;formacja</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished">&amp;Obrazek widoczny</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="unfinished">&amp;Aktualizuj obrazek</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="unfinished">&amp;Edytuj obrazek</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="unfinished">&amp;Dopasuj ramkę do obrazka</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="unfinished">&amp;Edytuj tekst...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished">Jest &amp;zakładką PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished">Jest adnotac&amp;ją PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished">Właściwości &amp;adnotacji</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished">Właściwości &amp;pola</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">&amp;Opcje PDF</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished">Edytuj tekst...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="unfinished">&amp;Zabezpiecz</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="unfinished">&amp;Odbezpiecz</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="unfinished">Zabezpiecz roz&amp;miary obiektu</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="unfinished">Odbezp&amp;iecz rozmiary obiektu</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished">Dodaj do &amp;biblioteki</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">P&amp;rzesuń do warstwy</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="unfinished">&amp;Wstaw przykładowy tekst</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished">&amp;Grupuj</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="unfinished">&amp;Rozgrupuj</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished">Poz&amp;iom</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="unfinished">Przesuń na &amp;spód</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="unfinished">Prz&amp;esuń na wierzch</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished">O poziom &amp;niżej</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished">O poziom w&amp;yżej</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="unfinished">Ramka &amp;graficzna</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="unfinished">&amp;Wielokąt</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="unfinished">&amp;Krzywe</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished">Ramka &amp;tekstowa</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished">Krzywa &amp;Beziera</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished">Z&amp;amień na</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Usuń</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="unfinished">W&amp;yczyść zawartość</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="unfinished">Naprawdę usunąć cały tekst?</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Brak</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished">Kopia</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Dokument:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>został zmieniony od ostatniego zapisu.</translation>
    </message>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation>Za&amp;kończ</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation>Za&amp;mknij</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation>&amp;Zapisz teraz</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="obsolete">&amp;Skrypty Scribusa</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="obsolete">&amp;Wykonaj skrypt...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="obsolete">&amp;Otwórz poprzedni skrypt</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="obsolete">O sk&amp;rypcie...</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">S&amp;krypt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Otwórz</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Skrypty w Pythonie (*.py);; Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Script error</source>
        <translation type="obsolete">Błąd w skrypcie</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="obsolete">Jeśli wykonujesz skrypt wchodzący w część oficjalnego pakietu Scribusa, zamelduj proszę błąd pod adresem &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="obsolete">Wiadomość ta zawarta jest również w twoim schowku. Użyj Ctrl+V, aby wkopiować ją w systemie zgłaszania błędów.</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete"> &amp;Ukryj konsolę</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="obsolete">O skrypcie</translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
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
        <translation type="obsolete">Zaawansowane opcje</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Wyświetlaj podgląd strony</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation>Wyświetlaj nazwy szablonów</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Znajdź/Zastąp</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Znajdź:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Styl akapitu</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Rozmiar czcionki</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Kolor wypełnienia</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Kolor obrysu</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Do lewej</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Wyśrodkowane</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Do prawej</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Justowany</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Justowany (z ostatnią linią)</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Zastąp przez:</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Przeszukiwanie zostało ukończone</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Atrybuty czcionki</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Cieniowanie wypełnienia</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Cieniowanie obrysu</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>&amp;Całe słowo</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>&amp;Ignoruj wielkość liter</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Szukaj</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>Zas&amp;tąp</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>Zastąp &amp;wszystko</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;yczyść</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation>Strony</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation>Dostępne szablony:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Strony dokumentu:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation>Strony widzące się</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation>Lewa strona najpierw</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation>Przeciągnij strony lub szablony do śmietnika, aby je usunąć.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation>Tutaj są twoje szablony. Aby stworzyć nową stronę, 
przeciągnij szablon na widok strony na dole.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normalny</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation>Podgląd wszystkich stron dokumentu.</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Wybierz pola</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Dostępne pola</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation>Wybrane pola</translation>
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
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Inne...</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Cieniowanie</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>C&amp;ieniowanie:</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Bez stylu</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Bez stylu</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Edytuj style</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopia %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nowy styl</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nie</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Tak</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.sla.gz *.scd *.scd.gz);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumenty (*.sla *.scd);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Dołącz</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edycja</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Klonuj</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Zapisz</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Naprawdę usunąć ten styl?</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Edytor artykułów</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Aktualny akapit:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Słów: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Znaków: </translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Ogólnie:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Akapitów: </translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation>Naprawdę anulować wszystkie zmiany?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Naprawdę usunąć cały tekst?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Pliki tekstowe (*.txt);;Wszystkie pliki(*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation>Aktualizuj ramkę tekstową</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Czy chcesz zachować zmiany?</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation>Aktualizuj ramkę tekstową i zakończ</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation>Zakończ bez aktualizowania ramki tekstowej</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">Dodaj znak  &amp;specjalny</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Pobierz tekst z ramki</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Zapisz do pliku...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>P&amp;obierz z pliku...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>Zapisz &amp;dokument</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>&amp;Aktualizuj ramkę tekstową i zakończ</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Zakończ &amp;bez aktualizowania ramki tekstowej</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Wy&amp;tnij</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiuj</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Wklej</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation>Dodaj znak  &amp;specjalny...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>&amp;Aktualizuj ramkę tekstową</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edycja</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Zaznacz wszystko</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>Edytuj sty&amp;le...</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation>Pobierz tekst z pliku</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation>Zapisz tekst do pliku</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation>Pobierz tekst z ramki</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>Z&amp;najdź/Zastąp...</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Tło...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>Czcionka &amp;edytora...</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>Us&amp;tawienia</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation>Znajdź/Zastąp</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">&amp;Podgląd czcionek</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>&amp;Podgląd czcionek...</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation>Usuń cały tekst</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>&amp;Inteligentne zaznaczanie tekstu</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation>Podkreślenie</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kapitaliki</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Indeks dolny</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Indeks górny</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="obsolete">Obramowanie tekstu</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation>Przekreślenie</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="unfinished">Struktura</translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>OO.o Writer Importer Options</source>
        <translation type="obsolete">Ustawienia importu z OO.o Writera</translation>
    </message>
    <message>
        <source>Update paragraph styles</source>
        <translation>Aktualizuj style akapitów</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Użyj nazwy dokumentu jako przedrostka nazw stylów</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Nie pytaj więcej</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OO.o document and
never ask your confirmation again</source>
        <translation type="obsolete">Włącza domyślne używanie aktualnych ustawień
w trakcie importu dokumentów OO.o i wyłącza 
pytanie o potwierdzenie przez użytkownika</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scribus</source>
        <translation>Włącza dodawanie przez importer nazwy dokumentu
przed nazwą stylu akapitu w Scribusie</translation>
    </message>
    <message>
        <source>If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</source>
        <translation>Zmień właściwości istniejącego stylu akapitu w Scribusie, 
jeśli w dokumencie OO.o Writera pojawi się styl o tej samej nazwie</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Opcje importera z formatu OpenOffice.org Writer</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OpenOffice.org document and
never ask your confirmation again</source>
        <translation>Czy importer ma używać wybranej aktualnie wartości
w trakcie importu dokumentów OpenOffice.org i
nie pytać już więcej o potwierdzenie</translation>
    </message>
    <message>
        <source>Pack paragraph styles</source>
        <translation>Pakuj style akapitów</translation>
    </message>
    <message>
        <source>Group paragraph styles by attributes.
Less paragraph styles but controlling them may be hard.
Should be used if it is known that text must not be edited
after importing.</source>
        <translation>Grupuj style akapitów według atrybutów.
Mniej styli akapitów, ale kontrola nad nimi może być trudna.
Powinno się stosować, kiedy wiadomo, że tekst nie będzie
edytowany po zaimportowaniu.</translation>
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
        <translation type="unfinished">Linie pomocnicze</translation>
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
        <translation type="unfinished">Kolor:</translation>
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
        <translation type="unfinished">Siatka linii pisma</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished">Wyświetlaj linie pisma</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="unfinished">Automatyczna &amp;interlinia:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished">&amp;Siatka linii pisma:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished">Przesunię&amp;cie siatki linii pisma:</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished">Odstęp pomiędzy liniami dodatkowej siatki</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished">Odstęp pomiędzy liniami głównej siatki</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished">Odstęp, w którego granicach obiekt przemieści się do linii pomocniczych</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished">Promień obszaru, w którym Scribus pozwoli ci na uchwycenie obiektu</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished">Kolor linii dodatkowej siatki</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished">Kolor linii głównej siatki</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished">Kolor linii siatki, które zostaną dodane przez użytkownika</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished">Kolor linii marginesu</translation>
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
        <translation type="unfinished">O ile w procentach interlinia jest większa od rozmiaru czcionki</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Konfiguracja tabulatorów</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation type="unfinished">Zakres eksportu</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished">Wszys&amp;tkie strony</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished">Wybierz stro&amp;ny</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished">Opcje pliku</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished">&amp;Format pliku:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished">Odstęp dla zsz&amp;ycia:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished">Lewy margines</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished">Prawy margines</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished">G&amp;eneruj miniatury</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished">Zapisz połączone ramki tekstowe jako artykuły &amp;PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished">Dołącz zakładk&amp;i</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished">dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished">&amp;Rozdzielczość:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="unfinished">Ustawienia grafiki</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Brak</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="unfinished">&amp;Metoda:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished">&amp;Jakość:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished">Maksymalna</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished">Wysoka</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished">Niska</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished">Minimalna</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="unfinished">Rozdzie&amp;lczość obrazków:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished">&amp;Ogólne</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="unfinished">Za&amp;gnieźdź wszystkie czcionki</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="unfinished">Zag&amp;nieżdż podzbiory wszystkich czcionek</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished">Zagnieżdżanie</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished">Dostępne czcionki:</translation>
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
        <translation type="unfinished">Czcionki do zagnieżdżenia:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="unfinished">Podzbiory czcionek do zagnieżdżenia:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished">&amp;Czcionki</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Strona</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished">Wyświetlaj &amp;miniatury stron</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">Efekty</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished">Cza&amp;s wyświetlania:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished">&amp;Trwanie efektu:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished">Typ &amp;efektu:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished">&amp;Ruchome linie:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished">Od&amp;:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished">K&amp;ierunek:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished">sek</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished">Brak efektu</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished">Żaluzje</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished">Ramka</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">Znikanie</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished">Szachownica</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished">Dzielenie</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished">Zacieranie</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Poziomo</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Pionowo</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished">Wewnątrz</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="unfinished">Zewnątrz</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished">Od lewej do prawej</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished">Od góry do dołu</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished">Od dołu do góry</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished">Od prawej do lewej</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished">Od góry po lewej do dołu po prawej</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished">Zastos&amp;uj efekt do wszystkich stron</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">&amp;Dodatki</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished">Zastosu&amp;j szyfrowanie</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished">Hasła</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished">Uż&amp;ytkownik:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished">Właścicie&amp;l:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished">Uprawnienia</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished">Dozwolo&amp;ne drukowanie dokumentu</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished">Dozwolona z&amp;miana dokumentu</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished">Dozwolone kopiowanie &amp;tekstu i grafik</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished">Dozwolone dodawanie adnotacji i &amp;pól</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished">&amp;Bezpieczeństwo</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Ogólne</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished">Plik wy&amp;jściowy przeznaczony dla:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished">Monitor / Internet</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">Drukarka</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished">Za&amp;stosuj własne opcje generowania rastra</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished">Opcje generowania rastra</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished">Częs&amp;totliwość:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished">Kąt&amp;:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished">Kształt punktu &amp;rastrowego:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished">Standardowy</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished">Okrągły</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished">Eliptyczny</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished">Jednolite kolory:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished">Zastosuj profil ICC</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished">Profil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished">Metoda konwersji przestrzeni kolorów:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Spostrzeżeniowa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Względna kolorymetryczna</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Bezwzględna kolorymetryczna</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished">Obrazki:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished">Nie używaj zagnieżdżonych profili ICC</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">&amp;Kolory</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished">Ustawienia dla pliku wyjściowego PDF/X-3</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished">Ko&amp;mentarz:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished">&amp;Profil wyjściowy:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="unfinished">Krawędzie spadu</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="unfinished">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="unfinished">Zaznacz tę opcję, aby zagnieździć czcionki w dokumencie PDF. Zagnieżdżenie czcionek
pozwoli na zachowanie układu graficznego i wyglądu dokumentu.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="unfinished">Włącza efekty prezentacyjne, które Acrobat Reader pokazuje w trybie pełnoekranowym.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished">Wyświetl podgląd każdej strony wymienionej powyżej.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="unfinished">Czas, przez jaki strona będzie pokazywana, zanim włączy się efekt prezentacyjny dla wybranej strony.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished">Czas trwania efektu prezentacyjnego.
Krótszy czas spowoduje przyspieszenie efektu, dłuższy czas jego spowolnienie.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished">Typ efektu prezentacyjnego.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished">Kierunek przemieszczania się linii dla efektu dzielenia i żaluzji.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished">Wybierz pozycję początkową dla efektu ramki i dzielenia.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished">Wybierz kierunek efektu szachownicy lub zacierania.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished">Zastosuj wybrany efekt do wszystkich stron.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished">Eksportuj wszystkie strony do PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished">Eksportuj zakres stron do PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished">Wpisz rozdzieloną przecinkami listę wartości,
gdzie * oznacza wszystkie strony, 1-5 zakres stron 
a pojedynczy numer oznacza numer strony.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="unfinished">Określa kompatybilność pliku PDF. Domyślne ustawienie to Acrobat 4.0, którego wynikiem jest największa kompatybilność.
Wybierz Acrobata 5.0, jeśli twój plik korzysta z takich właściwości PDF 1.4 jak przezroczystość, lub jeśli wymagane jest kodowanie 128 bitowe.
PDF/X-3 przeznaczony jest dla eksportu do PDF przeznaczonego do profesjonalnego druku i daje się wybrać, jeśli zostało włączone zarządzanie kolorami.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="unfinished">Określa odstęp do zszycia stron w pliku PDF. Najlepiej zostawić
domyślne ustawienie (z lewej strony), chyba że wiesz na pewno, że zmiana jest potrzebna.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished">Włącza generowanie miniatur każdej strony w pliku PDF.
Niektóre przegląrki używają miniatur do nawigacji.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished">Włącza generowanie artykułów PDF, które przydają się
w nawigowaniu pomiędzy powiązanymi ze sobą artykułami w PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="unfinished">Włącza osadzanie utworzonych przez ciebie zakładek w dokumencie.
Jest to przydatne przy poruszaniu się w długich dokumentach PDF.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished">Wybór rozdzielczości tekstu i grafiki wektorowej w eksportowanym pliku.
Nie ma wpływu na rozdzielczość grafiki bitmapowej, np. zdjęć.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="unfinished">Włącza kompresję tekstu i grafiki. Najlepiej zostawić zakreślone, 
chyba że ma się powody, aby to zmieniać. Redukuje to rozmiar pliku PDF.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="unfinished">Wybór wersji kompresji obrazków.
Automatyczna pozwala Scribusowi na wybór najlepszej metody.
ZIP jest dobry dla obrazków o jednolitych kolorach.
JPEG nadaje się lepiej do tworzenia mniejszych plików PDF zawierających dużo zdjęć (przy najmniejszej z możliwych utracie informacji obrazka).
Wybierz kompresję automatyczną, chyba że potrzebujesz specjalnych opcji przy kompresji.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="unfinished">Stopnie kompresji: minimalny (25%), niski (50%), średni (75%), wysoki (85%), maksymalny (95%)</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="unfinished">Ten wybór umożliwi redukcję grafiki bitmapowej do wybranej rozdzielczości DPI.
Jeśli nie zakreślisz tej opcji, grafika zostanie wyeksportowana z oryginalną rozdzielczością.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished">Wybór rozdzielczości DPI (Dots Per Inch) dla eksportu obrazków.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished">Zakreślenie tej opcji włączy zabezpieczenia w eksportowanym dokumencie PDF.
Jeśli wybrałeś eksport do formatu Acrobat 4.0, to plik PDF zostanie zabezpieczony szyfrowaniem 40 bitowym.
Jeśli wybrałeś eksport do formatu Acrobat 5.0, to  plik PDF zostanie zabezpieczony szyfrowaniem 128 bitowym.
Zastrzeżenie: szyfrowanie w PDF nie jest tak godne zaufania jak GPG lub PGP i ma pewne ograniczenia.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="unfinished">Wybierz główne hasło, które włączy lub wyłączy wszystkie
zabezpieczenia w wyeksportowanym pliku PDF</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished">Wybierz hasło dla użytkowników, którym będzie wolno czytać twój PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished">Dozwolone drukowanie dokumentu PDF. W przypadku braku zakreślenia druk zostanie uniemożliwiony.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished">Dozwolona edycja dokumentu PDF. W przypadku braku zakreślenia edycja zostanie uniemożliwiona.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="unfinished">Dozwolone kopiowanie tekstu i grafik z dokumentu PDF. W przypadku braku zakreślenia, kopiowanie zostanie uniemożliwione.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="unfinished">Dozwolone dodawanie adnotacji i pól do dokumentu PDF.
W przypadku braku zakreślenie edycja adnotacji i pól zostanie uniemożliwiona.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="unfinished">Wybór modelu barw dla wyjściowego dokumentu PDF.
Wybierz &quot;Monitor/Internet&quot; dla plików PDF, które przeznaczone są do oglądania na monitorze lub do druku an typowych drukarkach atramentowych.
Wybierz opcję &quot;Drukarka&quot;, jeśli będziesz drukował na drukarce obsługującej CMYK.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished">Jest to zaawansowana opcja, która domyślnie jest wyłączona. Włącz ją tylko wtedy, 
kiedy zostaniesz o to poproszony przez twoją drukarnię i dostaniesz od nich szczegółowe instrukcje.
W innym przypadku twój wyeksportowany plik PDF może sprawiać problemy przy druku i przy otwieraniu w innym systemach.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished">Zagnieżdża profil barw dla jednolitych kolorów</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished">Model barw dla jednolitych kolorów</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished">Metoda konwersji przestrzeni kolorów dla jednolitych kolorów</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished">Wybierz profil barw dla obrazków</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished">Nie stosuj profili barw zagnieżdżonych w obrazkach</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished">Profil barw dla obrazków</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished">Metoda konwersji przestrzeni kolorów dla obrazków</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished">Profil wyjściowy dla druku. Jeśli to możliwe, poproś drukarnię o poradę w sprawie wyboru właściwego profilu.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished">Ten komentarz musi zostać podany dla zgodności ze standardem PDF/X-3.
Zalecane jest wpisanie tutaj tytułu dokumentu.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished">Wielkość spadu mierzona od górnej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished">Wielkość spadu mierzona od dolnej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished">Wielkość spadu mierzona od lewej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished">Wielkość spadu mierzona od prawej krawędzi fizycznej strony</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished">Odwróć strony w poziomie</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished">Odwróć strony w pionie</translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Czcionka:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished">Rozmiar:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Brak</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished">Odstęp &amp;między szpaltami:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">Zażółć Gęślą Jaźń AaBbCc1!2@3#</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished">&amp;Kolor linii:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished">&amp;Cieniowanie:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished">Kolor &amp;wypełnienia:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished">C&amp;ieniowanie:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished">&amp;Grubość linii:</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished">Skalowanie w &amp;poziomie:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished">Ska&amp;lowanie w pionie:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished">Dopas&amp;uj obrazek do rozmiaru ramki</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished">Zachowa&amp;j proporcje</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished">&amp;Kolor wypełnienia:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished">Mi&amp;nimum:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished">Ma&amp;ksimum:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished">&amp;Skok:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished">Właściwości ramki tekstowej</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="unfinished">Właściwości ramki graficznej</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished">Właściwości figur rysunkowych</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished">Domyślne ustawienia stopnia powiększenia</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished">Właściwości rysowania linii</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished">Właściwości rysowania wielokątów</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished">Czcionka dla nowych ramek tekstowych</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished">Rozmiar czcionki dla nowych ramek tekstowych</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished">Kolor czcionki</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished">Ilość szpalt w ramce tekstowej</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished">Odstęp pomiędzy szpaltami w ramce tekstowej</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished">Przykład twojej czcionki</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished">Ramka graficzna pozwala na skalowanie obrazków do dowolnego rozmiaru</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished">Skalowanie obrazków w poziomie</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished">Skalowanie obrazków w pionie</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished">Zachowaj taką samą skalę w poziomie i w pionie</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished">Obrazki w ramkach graficznych są skalowane to rozmiaru ramki</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished">Automatyczne skalowanie obrazków, zachowaj oryginalne proporcje</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="unfinished">Kolor wypełnienia ramek graficznych</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished">Nasycenie koloru wypełnienia</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished">Kolor obrysu figur rysunkowych</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished">Nasycenie koloru obrysów</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished">Kolor wypełnienia figur rysunkowych</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished">Styl linii obrysu figur rysunkowych</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished">Grubość linii obrysu figur rysunkowych</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished">Minimalne dozwolone powiększenie</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished">Maksymalne dozwolone powiększenie</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished">Zmiana powiększenia dla każdej operacji powiększania </translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished">Kolor linii</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished">Nasycenie koloru</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished">Styl linii</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished">Grubość linii</translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Indeks dolny</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished">&amp;Przesunięcie:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished">&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Indeks górny</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished">Przesu&amp;nięcie:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished">Ro&amp;zmiar:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Kapitaliki</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished">Roz&amp;miar:</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished">Przesunięcie nad linią pisma czcionki w wierszu</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished">Względny rozmiar czcionki indeksu górnego w porównaniu z normalną czcionką</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished">Przesunięcie pod linią pisma normalnej czcionki w wierszu</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished">Względny rozmiar czcionki indeksu dolnego w porównaniu z normalną czcionką</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished">Względny rozmiar czcionki kapitalików w porównaniu z normalną czcionką</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Do lewej</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Do prawej</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>Kropka</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Przecinek</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Wyśrodkowane</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Usuń wszystko</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Wcięcie pierszego wiersza akapitu</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Wcięcie z lewej strony całego akapitu</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Usuń wszystkie tabulatory</translation>
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
        <translation>&amp;Pozycja:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation>Pierwsza &amp;linia:</translation>
    </message>
    <message>
        <source>Ind&amp;ent:</source>
        <translation type="obsolete">&amp;Wcięcie:</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation>W&amp;cięcie z lewej:</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Struktura</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Element</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Typ</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Informacja</translation>
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
        <translation type="obsolete">Czcionka:</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Obrazek</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Linia</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Wielokąt</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="obsolete">Linia łamana</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="obsolete">Tekst na ścieżce</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Strona</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Nazwa &quot;%1&quot; już istnieje.
Proszę wybrać inną.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Grupuj</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Strona </translation>
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
        <translation type="unfinished">Grupuj</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished">Utwórz</translation>
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
        <translation type="unfinished">Anuluj</translation>
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
        <translation type="unfinished">Zabezpiecz</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished">Odbezpiecz</translation>
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
        <translation type="unfinished">Usuń</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished">Zmień nazwę</translation>
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
        <translation type="unfinished">Wklej</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished">Wytnij</translation>
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
        <translation type="unfinished">Wielokąt</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished">Linia łamana</translation>
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
        <translation type="unfinished">&amp;Cofnij</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">&amp;Przywróć</translation>
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
        <translation>Wstaw wartość</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Wpisz wartość i kliknij na OK.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Wpisz wartość i kliknij na OK</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Wyślij wartość do skryptu</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Short Words</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Zastosuj twarde spacje dla:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>Zaznaczonych &amp;ramek</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>Aktualnej &amp;strony</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>&amp;Całego dokumentu</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation>&amp;Informacja i języki</translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation>Zastąp ustawienia domyślne własną konfiguracją</translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
        <comment>short words plugin</comment>
        <translation>możesz wybrać, czy dołączyć ustawienia własne
do ustawień domyślnych, nie zakreślając tej opcji,
czy też zastąpić domyślne ustawienia własnymi, zakreślając ją.</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Operacja dotyczy tylko zaznaczonych ramek.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Operacja dotyczy aktualnej strony.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Operacja dotyczy całego dokumentu.</translation>
    </message>
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation>Short Words dla Scribusa</translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation>Ustawienia dostępne dla następujących języków</translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation>O Short Words</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Narzędzia</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation>Wybierz element</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Utwórz ramkę tekstową</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation>Utwórz ramkę graficzną</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Właściwości...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation>Utwórz wielokąt</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation>Utwórz linię</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation>Utwórz krzywą Beziera</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Utwórz odręczną linię</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Obróć element</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Edytuj zawartość ramki</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Połącz ramki tekstowe</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Rozłącz ramki tekstowe</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>Powiększ/pomniejsz widok</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Edytuj tekst w edytorze artykułów</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation>Utwórz figurę geometryczną</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Utwórz tabelę</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="obsolete">Rób pomiary</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>Button</source>
        <translation>Przycisk</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Pole tekstowe</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Pole wyboru</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Lista rozwijana</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Lista</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Dowiązanie</translation>
    </message>
    <message>
        <source>PDF Tools</source>
        <translation>Narzędzia PDF</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>Wstaw pola PDF</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>Wstaw adnotacje PDF</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Wybierz znak:</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="obsolete">Wstaw znak do tekstu obok kursora</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="obsolete">Usuń aktualne zaznaczenie.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Zamknij to okienko dialogowe i powróć do edycji tekstu.</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="obsolete">&amp;Wklej</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Zamknij</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Wybierz jakiego importera użyć</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatyczny</translation>
    </message>
    <message>
        <source>Get text only</source>
        <translation>Pobierz tylko tekst</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Importuje tekst bez formatowania</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importer:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Kodowanie:</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Wybierz jakiego importera użyć</translation>
    </message>
    <message>
        <source></source>
        <translation></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Zapamiętaj przypisanie</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation>Zapamiętaj, do jakiego importera zostało przypisane to rozszerzenie
i nie pytaj więcej, jakiego importera używać dla tego typu pliku.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Nowy z szablonu</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Wszystkie</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Format strony</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kolory</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Opis</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Zastosowanie</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Utworzony w</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Otwórz</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Ściąganie szablonów</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Instalowanie szablonów</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Rozpakuj archiwum do katalogu szablonów ~/.scribus/templates dla aktualnego użytkownika lub PREFIX/share/scribus/templates dla wszystkich użytkowników systemu.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Przygotowanie szablonu</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Usuwanie szablonu</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Tłumaczenie template.xml</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Szablony dokumentów można znaleźć na stronie http://www.scribus.net/ w sekcji Downloads.</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Upewnij się, że obrazki i czcionki mogą być używane dowolnie. Jeśli czcionki nie mogą być udostępniane nie dołączaj ich podczas zapisywania szablonu.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>Twórcy szablonów powinni również zadbać o to, by ich szablony można było zainstalować przez dialog &quot;Nowy z szablonu&quot;. Oznacza to, iż użytkownik powinien mieć możliwość ściągnięcia archiwum z szablonem, rozpakowania go do katalogu szablonów i natychmiastowego użycia go.</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Usunięcie szablonu z okienka dialogowego usunie jedynie wpis z template.xml. Pliki dokumentów nie zostaną skasowane.
Menu podręczne z opcją usunięcia jest dostępne jedynie, gdy posiadasz prawa zapisu do pliku template.xml.</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Skopiuj istniejący template.xml do pliku o nazwie template.kod_KRAJU.xml (użyj tego samego kodu kraju co w pliku qm dla twojego języka), na przykład template.fi.xml jest to template.xml w języku fińskim. Kopia musi znajdować się w tym samym katalogu co oryginalny template.xml by NZS mógł go odnaleźć.</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Zapisz jako szablon</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategoria</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Format strony</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kolory</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Opis</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Zastosowanie</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor
</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>Email</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Więcej szczegółów</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Mniej szczegółów</translation>
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
        <source>landscape</source>
        <translation>Pejzaż</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>Portret</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>Definicja użytkownika</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Utwórz importer</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Wyczyść</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Wybierz zapisany wcześniej importer</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Nadaj nazwę, pod jaką należy zapisać ten importer</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Nadaj nazwę do zapisania</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Włącz albo wyłącz ten wiersz importera</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Usuń ten wiersz importera</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Dodaj nowy wiersz importera</translation>
    </message>
    <message>
        <source>to</source>
        <translation>do</translation>
    </message>
    <message>
        <source>and</source>
        <translation>i</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>usuń odpowiednik</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>nie usuwaj odpowiednika</translation>
    </message>
    <message>
        <source>words</source>
        <translation>słowa</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Zastąp</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Zastosuj</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>Wartość po lewej to wyrażenie regularne</translation>
    </message>
    <message>
        <source>with</source>
        <translation></translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>styl akapitu</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>wszystkie wystąpienia</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>wszystkich akapitów</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>akapitów zaczynających się od</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>akapitów zawierających mniej niż</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>akapitów zawierających więcej niż</translation>
    </message>
</context>
</TS>
