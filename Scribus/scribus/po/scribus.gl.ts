<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation>getColorNames() -&gt; lista(new line)
Devolve unha lista que contén os nomes de todas as cores definidas no documento.
Se non hai nengún documento aberto, devolve unha lista das cores do documento padrón.</translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation>newDocDialog() -&gt; bool

Mostra o diálogo &quot;Documento Novo&quot;. Crea un documento novo se o usuario
acepta a configuración. Non crea un documento se o usuario preme sobre Cancelar.
Devolve verdadeiro se se creou un documento novo.</translation>
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
        <translation type="obsolete">newDoc(tamaño, marxes, orientación, númeroPrimeiraPáxina,
                   unidade, páxinasEnfrentadas, primeiraCaraEsquerda) -&gt; bool

Crea un documento novo e devolve verdadeiro se o puido crear. Os parámetros teñen
o significado seguinte:

    tamaño = Un par (anchura, altura) que descrebe o tamaño do documento. Pode
    usar as constantes pré-definidas chamas PAPER_&lt;tipo_de_papel&gt;, p.ex. PAPER_A4, etc.

    marxes = Catro datos (esquerda, diretia, superior, inferior) que descreben
    as marxes do documento

    orientación = a orientación da páxina - constantes RETRATO, APAISADO

    númeroPrimeiraPáxina = é o número da primeira páxina no documento, que
    se usa para a numeración das páxinas. Ainda que normalmente será 1, resulta útil
    poder usar números máis altos se se crea un documento en varias partes.

    unidade: este valor fixa as unidades de medida usadas polo documento. Use
    unha constante definida para isto de entre UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    páxinasEnfrentadas = FACINGPAGES, NOFACINGPAGES

    primeiraPáxinaEsquerda = FIRSTPAGELEFT, FIRSTPAGERIGHT

Os valores para anchura, altura e as marxes exprésanse na unidade dada
para o documento. As constantes PAPER_* exprésanse en puntos. Se o seu documento
non está en puntos, asegúrese de telo en conta.

exemplo: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
               FACINGPAGES, FIRSTPAGERIGHT)</translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;nome&quot;]) -&gt; cadea

Devolve o nome da cor de enchido do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation>moveObject(dx, dy [, &quot;nome&quot;])

Move o obxecto &quot;nome&quot; en dx e dy relativos á súa posición actual.
As distancias expesanse na unidade de medida actual do documento
(ver constantes UNIT). Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado
nese momento. Se o obxecto &quot;nome&quot; pertence a un grupo, móvese todo o grupo.</translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation>setRedraw(bool)

Desactiva o redeseñado da páxina se bool = False e, se non, permite o redeseñado.
Esta modificación persistirá mesmo logo de sair o guión, de maneira que deberá
asegurarse de chamar setRedraw(True) nunha cláusula finally: no nível superior do guión.</translation>
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
        <translation>createRect(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea un rectángulo novo na páxina actual e devolve o seu nome.
As coordenadas danse nas unidades de medida actuais do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o
obxecto porque precisará deste nome para facer referencia a ese obxecto
no futuro. Se non se fornece un &quot;nome&quot;, Scribus creará un por vostede.

Pode provocar un NameExistsError se pasar explicitamente un nome que xa exista.</translation>
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
        <translation>newPage(where [,&quot;modelo&quot;])

Crea unha páxina nova. Se &quot;where&quot; é -1, a Páxina nova adiciónaselle ao
documento; se non, a páxina nova insírese antes do &quot;where&quot;. Os números de
páxina cóntanse a partir do 1, sen importar cal sexa o número da primeira páxina
do seu documento. O parámetro opcional &quot;modelo&quot; especifica o nome do
modelo de páxina para a páxina nova.

Pode causar un IndexError se o número de páxina estiver fora de rango</translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation>setGradientFill(tipo, &quot;cor1&quot;, saturación1, &quot;co2&quot;, saturación2, [&quot;nome&quot;])

Fixa o gradiente de enchido do obxecto &quot;nome&quot; nese tipo. As descricións
de cores son as mesmas que para setFillColor() and setFillShade().
Vexa as constantes para os tipos disponíbeis (FILL_&lt;type&gt;).</translation>
    </message>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFontSize([&quot;nome&quot;]) -&gt; float

Devolve o tamaño da fonte en puntos para a moldura de texto &quot;nome&quot;.
Se esta moldura de texto tiver texto seleccionado, devólvese o valor asignado
ao primeiro carácter da seleccion.
Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>messagebarText(&quot;cadea&quot;)

Escrebe a &quot;cadea&quot; na barra de mensaxes de Scribus (liña de estado).
O texto debe estar codificado en UTF8 ou ser unha cadea &apos;unicode&apos; (recomendado).</translation>
    </message>
    <message>
        <source>register_macro_callable(name, callable, accel=&apos;&apos;)

Create a macro called &quot;name&quot; with the existing callable object &quot;callable&quot;.
The passed callable must not require any arguments when called (it may take
optional arguments, but will not be given any).
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
If the passed callable is a class, it will be rejected. Functions and bound
methods are quite acceptable, as are instances of classes that provide a
__call__ method with no arguments. There is no problem with registering
a callable more than once, nor with registering multiple bound methods
of a single instance.
</source>
        <translation type="obsolete">Módulo da interface de Python para Scribus

Este módulo e&apos;a interface de Python para Scribus. Fornece funcións para
controlar Scribus e para manipular obxectos da tela. Cada función documéntase
individualmente máis abaixo.

Certas cousas son comúns a toda a interface.

A maioría das funcións operan sobre molduras. As molduras identifícanse polo seu nome,
unha cadea - non son obxectos reais de Python. Moitas funcións levan un
parámetro opcional (non palabra-chave), o nome da moldura.
Moitas excepcións son así mesmo comuns para a maioría das funcións. Estas
non se documentan actualmente no docstring para cada función.
- Moitas funcións provocarán un NoDocOpenError se tenta usalas sen un documento sobre
o que operaren.
- Se non lle pasa o nome dunha moldura a unha función que o requira, a función usará a moldura
seleccionada nese momento, de habela, ou provocará un NoValidObjectError se non dá atopado
nada sobre o que operar.
- Moitas funcións provocarán un WrongFrameTypeError se tenta usalas nun tipo de moldura no que
non teñan sentido. Por exemplo, asignar a cor do texto nunha moldura de imaxes non ten sentido
e provocará esta excepción.
- Os erros que proveñan de chamadas á API de Python subxacente pasaranse sen alteracións.
Como tais, a lista de excepcións fornecida aquí e no seu docstring é incompleta.

Os detalles sobre as excepcións que pode provocar cada función fornécense na
documentación de cada función.</translation>
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
        <translation>getColor(&quot;nome&quot;) -&gt; valores

Devolve catro valores (C, M, Y, K) que conteñen os catro componentes de cor
da cor &quot;nome&quot; do documento actual. Se non hai nengún documento aberto,
devolve o valor da cor nomeada das cores do documento padrón.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>changeColor(&quot;nome&quot;, c, m, y, k)

Muda a cor &quot;nome&quot; ao valor CMYK especificado. O valor da cor defínese mediante
catro componentes c = Cián, m = Maxenta, y = Amarelo e k = Negro.
As componentes das cores deberían estar no rango entre 0 e 255.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">defineColor(&quot;nome&quot;, c, m, y, k)

Define un novo &quot;nome&quot; de cor. O Valor da cor defínese mediante catro componentes:
c = Cián, m = Maxenta, y = Amarelo e k = Negro.
As componentes das cores deberían estar no rango entre 0 e 255.

Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
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
        <translation>deleteColor(&quot;nome&quot;,&quot;substituta&quot;)

Limpa o &quot;nome&quot; da cor. Toda aparición da cor substituése pola &quot;substituta&quot;.
Se non se especifica, &quot;substituta&quot; pasa a ser a cor &quot;Nengunha&quot; - transparente.

deleteColor funciona sobre as cores por omisión do documento se non hai
nengún documento aberto. Nese caso, se se especifica &quot;substituta&quot;, esta non ten efecto.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>replaceColor(&quot;name&quot;, &quot;substituta&quot;)

Toda aparición da cor &quot;nome&quot; substitúese pola cor &quot;substituta&quot;.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
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
        <translation>fileDialog(&quot;lexenda&quot;, [&quot;filtro&quot;, &quot;nomePorOmisión&quot; ,haspreview, issave]) -&gt; cadea con nome de ficheiro

Mostra un diálogo Abrir Ficheiro coa lexenda &quot;lexenda&quot;. Os ficheiros fíltranse coa
cadea de filtro &quot;filtro&quot;. Tamén se poden fornecer un nome de ficheiro ou un camiño por
omisión; deixe esta cadea baleira cando non a queira usar. O valor True para haspreview
permite un visor de vista previa na caixa de FileSelect. Se o parámetro issave se fixa en True
o diálogo funciona como un diálogo &quot;Salvar Como&quot;; se non, funciona como un &quot;Diálogo
Abrir Ficheiro&quot;. Por omisión, ambos parámetros son False.

O filtro, se se especifica, toma a forma &quot;comentario (*.tipo *.tipo2 ...)&apos;.
Por exemplo &apos;Imaxes (*.png *.xpm *.jpg)&apos;.

Consulte a Documentación QT para QFileDialog para máis detalles sobre os filtros.

Exemplo: fileDialog(&apos;Abrir fonte&apos;, &apos;ficheiros CSV (*.csv)&apos;)
Exemplo: fileDialog(&apos;Salvar informe&apos;, defaultname=&apos;informe.txt&apos;, issave=True)
</translation>
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
        <translation>messageBox(&quot;lexenda&quot;, &quot;mensaxe&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; inteiro

Mostra unha caixa de mensaxe co título &quot;lexenda&quot;, a mensaxe &quot;mensaxe&quot; e un icone, &quot;icon&quot;
e até 3 botóns. Por omisión non se usa nengún icone e só se mostra un botón, OK.
Só son precisos os argumentos da lexenda e da mensaxe, ainda que se recomenda moito
indicar un icone e un(s) botón(s) apropiados. O texto da mensaxe pode conter linguaxe de etiquetado
tipo HTML.

Devolve o número do botón que o usuario premeu. Os números dos botóns comezan polo 1.

Para os parámetros do icone e do botón existen constantes pré-definidas cos mesmos nomes que
na Documentación do QT. Son as constantes BUTTON_* e ICON* definidas no módulo. Hai tamén dúas
constantes extra que poden ser binary-ORed con contantes de botón:
    BUTTONOPT_DEFAULT    Ao premer enter prémese este botón.
    BUTTONOPT_ESCAPE    Ao premer escape prémese este botón.

Exemplos de uso:
result = messageBox(&apos;Fallou o guión&apos;,
                    &apos;Este guión só funciona se ten unha moldura de texto seleccionada&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monos!&apos;, &apos;Algo se foi ao carallo!&apos; &lt;i&gt;Era un mono?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Constantes de botón e icone definidas:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.</translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation>valueDialog(lexenda, mensaxe [,valorporomisión]) -&gt; cadea

Mostra o diálogo común &apos;Pedir unha cadea&apos; e devolve o seu valor como cadea.
Parámetros: título da xanela, texto na xanela e valor &apos;por omisión&apos; opcional.

Exemplo: valueDialog(&apos;título&apos;, &apos;texto na xanela&apos;, &apos;opcional&apos;)</translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation>closeDoc()

Fecha o documento actual sen pedir se se ha de gardar.

Pode mandar un NoDocOpenError se non hai un documento que fechar</translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation>haveDoc() -&gt; bool

Devolve verdadeiro se hai un documento aberto.</translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation>openDoc(&quot;nome)

Abre o documento &quot;nome&quot;.

Pode provocar un ScribusError se non se puido abrir o documento.</translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation>saveDoc()

Salva o documento actual co seu nome actual; devolve verdadeiro se se logrou.
Se o documento ainda non se salvou, pode activar un diálogo interactivo
para gardalo.

Se falla o gardado non hai maneira de sabelo de momento.</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation>saveDocAs(&quot;nome&quot;)

Salva o documento actual co novo nome &quot;nome&quot; (que pode ser un
camiño completo ou relativo).

Pode provocar un ScribusError se non se puido gardar.</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation>saveDocAs(&quot;autor&quot;, &quot;información&quot;, &quot;descrición&quot;) -&gt; bool

Consigna a información do documento. &quot;Autor&quot;, &quot;Información&quot;, &quot;Descrición&quot;
son cadeas.</translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation>setMargins(lr, rr, tr, br)

Fixa as marxes do documento, Esquerda(lr), Direita(rr), Superior(tr) e Inferior(br)
As marxes danse nas unidades de medida do documento - vexa as
constantes UNIT_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation>setUnit(tipo)

Muda as unidades de medida do documento. Os valores posíbeis para &quot;unidade&quot;
son definidas como constantes UNIT_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation>getUnit() -&gt; inteiro (Constante da unidade de Scribus)

Devolve as unidades de medida do documento. O valor de retorno será unha
das constantes UNIT_*:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.</translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation>loadStylesFromFile(&quot;nomedeficheiro&quot;)

Carrega estilos de parágrafo desde o documento de Scribus en &quot;nomedodocumento&quot;
no documento actual.</translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation>setDocType(páxinasEnfrentadas, primeiraPáxinaEsquerda)

Indica o tipo de documento. Para obter páxinas enfrendas, fixe o primeiro parámetro en
FACINGPAGES; para non as ter use NOFACINGPAGES. Se quer ter a primeira páxina
á esquerda, fixe o segundo parámetro en FIRSTPAGELEFT; para que sexa a esquerda
use FIRSTPAGERIGHT.</translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineColor([&quot;nome&quot;[) -&gt; cadea

Devolve o nome da cor da liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineWidth([&quot;nome&quot;[) -&gt;inteiro

Devolve a anchura da liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;nome&quot;[) -&gt;inteiro

Devolve o valor de saturación da liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation>getLineJoin([&quot;nome&quot;[) -&gt;inteiro (ver as constantes)

Devolve o estilo da xunta do obxecto &quot;nome&quot;. Se non se fornece un
&quot;nome&quot; úsase o elemento seleccionado nese momento. Os tipos de bordes son:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND</translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation>getLineEnd([&quot;nome&quot;[) -&gt;inteiro (ver as constantes)

Devolve o estilo de terminación do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Os estilos de terminación son:
CAP_FLAT, CAP_ROUND, CAP_SQUARE</translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation>getLineStyle([&quot;nome&quot;[) -&gt;inteiro (ver as constantes)

Devolve o estilo de liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
As constantes de estilo de liña son:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID</translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillShade([&quot;nome&quot;[) -&gt;inteiro

Devolve o valor de saturación da cor de enchido do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">getCornerRadius([&quot;nome&quot;[) -&gt;inteiro

Devolve o radio dos vértices do obxecto &quot;nome&quot;. O radio exprésase en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;nome&quot;[) -&gt;(x,y)

Devolve un par (x, y) que contén os valores de ampliación da moldura de imaxe
&quot;nome&quot;. Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getImageName([&quot;nome&quot;[) -&gt;cadea

Devolve o nome do ficheiro da imaxe que está na moldura de imaxe.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="obsolete">getPosition([&quot;nome&quot;[) -&gt;inteiro

Devolve un par (x, y) coa posición do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
A posición exprésase na unidade de medida real do documento
- ver UNIT_&lt;tipo&gt; para máis referencias.</translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation>getSize([&quot;nome&quot;[) -&gt;(anchura,altura)

Devolve un par (anchura, altura) co tamaño do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
O tamaño exprésase na unidade de medida real do documento
- ver UNIT_&lt;tipo&gt; para máis referencias.</translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation>getRotation([&quot;nome&quot;[) -&gt;inteiro

Devolve o valor da rotación do obxecto &quot;nome&quot;. O valor exprésase en graus,
e o sentido das agulLas do reloxio é positivo.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation>getAllObjects() -&gt; lista

Devolve unha lista que contén os nomes de todos os obxectos da páxina actual.</translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation>moveObjectAbs(x, y [, &quot;nome&quot;])

Move o obxecto &quot;nome&quot; a unha localización nova. As coordenadas exprésanse na
unidade de medida actual do documento (ver as constantes UNIT).
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Se o obxecto &quot;nome&quot; pertence a un grupo, móvese o grupo inteiro.</translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>rotateObject(rot[, &quot;nome&quot;])

Rota o obxecto &quot;nome&quot; en &quot;rot&quot; graus relativamente. O obxecto rótase
co vértice actualmente seleccionado como punto de rotación - por omisión
o vértice superior esquerdo con rotación cero. Os valores positivos significan
rotación anti-reloxio cando se usa o punto de rotación por omisión.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">rotateObjectAbs(rot [, &quot;nome&quot;])

Fixa a rotación do obxecto &quot;nome&quot; en &quot;rot&quot;. Os valores positivos
significan rotación anti-reloxio. 
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>sizeObject(anchura, altura[, &quot;nome&quot;])

Modifica o tamaño do obxecto &quot;nome&quot; para a anchura e altura dadas.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation>getSelectedObject([nr]) -&gt; cadea

Devolve o nome do obxecto seleccionado. &quot;nr&quot;, de se fornecer, indica o número
de obxectos seleccionados; p.ex. 0 significa o primeiro obxecto seleccionado,
1 significa o segundo Obxecto seleccionado, e así.</translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation>selectionCount() -&gt; inteiro

Devolve o número de obxectos seleccionados.</translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation>selectObject(&quot;nome&quot;)

Selecciona o obxecto co &quot;nome&quot; dado.</translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation>deselectAll()

De-selecciona todos os obxectos do documento.</translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation>groupObjects(lista)

Agrupa xuntas os obxectos enunciados na &quot;lista&quot;. &quot;lista&quot; debe conter os nomes
dos obxectos que se han de agrupar. 
Se non se fornece unha &quot;lista&quot; úsanse os elementos seleccionados nese momento.</translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation>unGroupObjects(&quot;name&quot;)

Destrúe o grupo ao que pertence o obecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
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
        <translation>scaleGroup(factor [, &quot;nome&quot;})

Escala o grupo ao que pertence o obxecto &quot;nome&quot;. Os valores maiores de 1 aumentan
o grupo; os valores menores de 1 reducen o tamaño do grupo. Por exemplo, un valor
de 0.5 reduce o grupo ao 50% do seu tamaño orixinal, un valor de 1.5 aumenta o tamaño
do grupo a un 150% do seu tamaño orixinal. O valor de &quot;factor&quot; debe ser maior de 0.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se se lle pasa un factor de escala non válido.</translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>loadImage(&quot;nomedeficheiro&quot; [, &quot;nome&quot;])

Carrega a imaxe &quot;imaxe&quot; na moldura de imaxe &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un WrongFrameTypeError se a moldura de destino non é unha moldura de imaxe</translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>scaleImaxe(x, y [, &quot;nome&quot;])

Fixa os factores de escala para a imaxe da moldura de imaxe &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
O número 1 indica 100%.

Pode provocar un WrongFrameTypeError se a moldura de destino non é unha moldura de imaxe</translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation>lockObject([&quot;nome&quot;]) -&gt; bool

Bloquea o obxecto &quot;nome&quot; se está desbloqueado ou desbloquéao se está bloqueado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Devolve verdadeiro se está bloqueado.</translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>isLocked([&quot;nome&quot;]) -&gt; bool

Devolve verdadeiro se o obxecto &quot;nome&quot; está bloqueado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation>getFontNames() -&gt; list

Devolve unha lista cos nomes das fontes disponíbeis.</translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation>getXFontNames() -&gt; lista de valores

Devolve información ampliada sobre a fonte. É unha lista de valores con:
[ (Nome Scribus, Familia, Nome real, subgrupo (1|0), embed PS (1|0), ficheiro da fonte), (...), ...]</translation>
    </message>
    <message>
        <source>rendeFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
Image is saved into &quot;filename&quot;. Returns true when success.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="obsolete">rendeFont(&quot;nome&quot;,&quot;nomedoficheiro&quot;, &quot;mostra&quot;, tamaño) -&gt; bool

Crea unha ante-visión da fonte &quot;nome&quot; co texto dado &quot;mostra&quot; e o tamaño.
A imaxe sálvase en &quot;nomedeficheiro&quot;. Devolve verdadeiro se se garda.

Pode provocar un NotFoundError se non se atopa a fonte especificada.
Pode provocar un ValueError se se lle pasan unha mostra ou nome de ficheiros baleiros.</translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation>getLayers() -&gt; lista

Devolve unha lista cos nomes das capas definidas.</translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>secActiveLayer(&quot;nome&quot;)

Fixa a capa activa na capa de nome &quot;nome&quot;.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation>getActiveLayer() -&gt; string

Devolve o nome da capa activa actual.</translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>sentToLayer(&quot;capa&quot;[ &quot;nome&quot;])

Envía o obxecto &quot;nome&quot; para a capa &quot;capa&quot;. A capa debe existir.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerVisible(&quot;capa&quot;, visible)

Fixa a capa &quot;capa&quot; como visíbel ou non. Se visíbel está fixado como false
a capa é invisíbel.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerPrintable(&quot;capa&quot;, printable)

Fixa a capa &quot;capa&quot; como imprimíbel ou non. Se imprimíbel está fixado como false
a capa non poderá imprimirse.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the Layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerVisible(&quot;capa&quot;) -&gt; bool

Devolve se a Capa &quot;capa&quot; é visíbel ou non; un valor True significa
que a capa &quot;capa&quot; é visíbel, un valor False significa que a capa
&quot;capa&quot; é invisíbel.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerPrintable(&quot;capa&quot;) -&gt; bool

Devolve se a Capa &quot;capa&quot; é imprimíbel ou non; un valor True significa
que a capa &quot;capa&quot; é imprimíbel un valor False significa que non se permite imprimir
a capa &quot;capa&quot;.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>deleteLayer(&quot;layer&quot;)

Eliminar a capa de nome &quot;capa&quot;. Non acontece nada se a capa non existe
ou se é a única capa do documento.
Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>createLayer(capa)

Crea unha capa nova co nome &quot;nome&quot;.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation>getGuiLanguage() -&gt; string

Devolve unha cadea co valor -lang.</translation>
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
        <translation>createEllipse(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea unha elipse nova na páxina actual e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createImage(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea unha molura de imaxe nova na páxina actual e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createText(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea unha moldura de texto nova na páxina actual e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createLine(x1, y1, x2, y2, [&quot;nome&quot;]) -&gt; cadea

Crea unha liña nova desde o punto(x1, y1) ao punto(x2, y2) e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createPolyLine(lista, [&quot;nome&quot;]) -&gt; cadea

Crea unha poli-liña nova e devolve o seu nome. Os puntos da poli-liña
armacénanse na lista &quot;lista&quot; na orde seguinte: [x1, y1, x2, y2...xn, yn].
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un ValueError se se lle pasa un número insuficiente de puntos ou se
o número de valores que se lle pasan non se agrupan en puntos sen sobrantes.</translation>
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
        <translation>createPolyLigon(lista, [&quot;nome&quot;]) -&gt; cadea

Crea un polígono novo e devolve o seu nome. Os puntos do polígono
armacénanse na lista &quot;lista&quot; na orde seguinte: [x1, y1, x2, y2...xn. yn].
Requírense polo menos tres puntos. Non hai necesidade de repetir o
primeiro para fechar o polígono. O polígono féchase automaticamente
conectando o primeiro e derradeiro puntos.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un ValueError se se lle pasa un número insuficiente de puntos ou se
o número de valores que se lle pasan non se agrupan en puntos sen sobrantes.</translation>
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
        <translation>createBezierLine(lista, [&quot;nome&quot;]) -&gt; cadea

Crea unha curva de Bézier nova e devolve o seu nome. Os puntos da curva de Bézier
armacénanse na lista &quot;lista&quot; na orde seguinte: [x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn].
Na lista de puntos, x e y significan as coordenadas x e y do punto e kx e ky significan
o punto de control da curva. As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un ValueError se se lle pasa un número insuficiente de puntos ou se
o número de valores que se lle pasan non se agrupan en puntos sen sobrantes.</translation>
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
        <translation>createTrazoDeTexto(x, y, &quot;caixadetexto&quot;, &quot;curvadeBézier&quot;, [&quot;nome&quot;]) -&gt; cadea

Crea un TrazoDeTexto novo unindo os dous obxectos &quot;caixadetexto&quot; e
&quot;curvadeBézier&quot; e devolve o seu nome. 
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un NotFoundError se un ou os dous obxectos de base nomeados non existe.</translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation>newPage(where [,&quot;modelo&quot;])

Crea unha páxina nova. Se &quot;where&quot; é -1, a Páxina nova adiciónaselle ao
documento; se non, a páxina nova insírese antes do &quot;where&quot;. Os números de
páxina cóntanse a partir do 1, sen importar cal sexa o número da primeir páxina
do seu documento. O parámetro opcional &quot;modelo&quot; especifica o nome do
modelo de páxina para a páxina nova.

Pode causar un IndexError se o número de páxina está fora de rango.</translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation>textFlowsAroundFrame(&quot;name&quot; [, estado])

Habilita/Deshabilita a función &quot;O Texto Flúe Arredor da Moldura&quot; para o obxecto &quot;nome.
Chámase cos parámetros cadea nome e un &quot;estado&quot; booleano opcional&quot;.
Se non se lle pasa un &quot;estado&quot;, múdase o fluxo de texto.</translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation>objectExists([&quot;nome&quot;]) -&gt; bool

Comproba se existe un obxecto co nome especificado no documento.
O parámetro opcional é o nome do obxecto. Se non se lle fornece o nome dun
obxecto devolve Verdadeiro se hai algo seleccionado.</translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation>setStyle(&quot;estilo&quot; [, &quot;nome&quot;])

Aplica o &quot;estilo&quot; nomeado ao obxecto chamado &quot;nome&quot;. Se non se lle fornece
un nome de obxecto aplícase ao obxecto seleccionado.</translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation>getAllStyles() -&gt; lista

Devolve unha lista dos nomes de todos os estilos de parágrafo do documento actual.</translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation>currentPage() -&gt; inteiro

Devolve o núemro da páxina de traballo actual. Os números de páxina cóntanse desde o 1,
sen importar cal sexa o número que se mostra na primeira páxina do seu documento.</translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation>redrawAll()

Redeseña todas as páxinas.</translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation>savePageAsEPS(&quot;nome&quot;)

Salva a páxina actual como un EPS no ficheiro &quot;nome&quot;.

Pode provocar un ScribusError se non se pode gravar.</translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation>deletePage(nr)

Elimina a páxina dada. Non fai nada se o documento só contén unha páxina.
Os números de páxina cóntanse a partir do 1, sen importar cal é o número
que se mostra na primeira páxina.

Pode provocar un IndexError se o número de páxina está fora de rango</translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation>gotoPage(nr)

Móvese a páxina &quot;nr&quot; (ou sexa, fai que &quot;nr&quot; sexa a páxina actual). Obsérvese que
gotoPage non cambia (actualmente) a páxina que se lle mostra ao usuario,
simplemente designa a páxina sobre a que operarán os comandos do guión.

Pode provocar un IndexError se o número de páxina está fora do rango.</translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation>pageCount() -&gt; inteiro

Devolve o número de páxinas do documento.</translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation>getHGuides() -&gt; lista

Devolve unha lista coas posicións das guías horizontais. Os valores están
nas unidades actuais do documento - ver as constantes UNIT_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation>setHGuides() -&gt; lista

Fixa as guías horizontais. O parámetro de entrada debe ser unha lista de posicións de guías
medidas nas nidades do documento actual - ver as constantes UNIT_&lt;tipo&gt;

Exemplo: setHGuides(getHGuides() + [200.0, 210.0] # adicionar guías novas sen perder nengunha
         setHGuides([90,250]) # substituir completamente as guías actuais</translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation>getVGuides() -&gt; lista

ver getHGuides.</translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation>Ver setHGuides.</translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation>getPageSize() -&gt; valores

Devolve uns valores coas dimensións da páxina medidas nas unidades actuais do documento.
Ver as constantes UNIT_&lt;tipo&gt; e getPageMargins()</translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation>getPageItems() -&gt; lista

Devolve unha lista de valores con elementos da páxina actual. Os valores son:
(nome, tipoDeObxecto, orde). Por exemplo [(&apos;Texto1&apos;, 4, 0), (&apos;Imaxe1&apos;, 2, 1)]
significa que o obxecto chamado &apos;Texto1&apos; é unha moldura de texto (tipo 4) e que
é o primeiro na páxina...</translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation>getPageMargins()

Devolve as marxes da páxina como valores (esquerda, direita, superior, inferior)
nas unidades actuais. Ver as constantes UNIT_&lt;tipo&gt; e getPageSize().</translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillColor(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor de enchido do obxecto &quot;nome&quot; para a cor &quot;cor&quot;.
&quot;cor&quot; é o nome dunha das cores definidas. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>setFillColor(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor da liña do obxecto &quot;nome&quot; para a cor &quot;cor&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation>setLineWidth(anchura, [&quot;nome&quot;])

Fixa a anchura da liña do obxecto &quot;nome&quot; en &quot;anchura&quot;.
&quot;anchura&quot; debe estar no rango entre 0.0 e 12.0 incluídos e mídese en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a anchura da liña está fora dos limites.</translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation>setLineShade(saturación, [&quot;nome&quot;])

Fixa a saturación da cor da liña do obxecto &quot;nome&quot; en &quot;saturación&quot;.
&quot;saturación&quot; debe ser un valor inteiro no rango de 0 (menor) a 100
(intensidade de cor total). Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation>setLineJoin(borde, [&quot;nome&quot;])

Fixa o estilo do borde da liña do obxecto &quot;nome&quot; no estilo &quot;borde&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Existen unhas constantes pré-definidas para o borde - JOIN_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation>setLineExtremo(extremo, [&quot;nome&quot;])

Fixa o estilo do extremo da liña do obxecto &quot;nome&quot; no estilo &quot;extremo&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Existen unhas constantes pré-definidas para extremo - CAP_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation>setLineStyle(estilo, [&quot;nome&quot;])

Fixa o estilo da liña do obxecto &quot;nome&quot; para o estilo &quot;estilo&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Existen constantes pré-definidas para o &quot;estilo&quot; - LINE_&lt;estilo&gt;.</translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation>setFillShade(saturación, [&quot;nome&quot;])

Fixa a saturación da cor de enchido do obxecto &quot;nome&quot; en &quot;saturación&quot;.
&quot;saturación&quot; debe ser un valor inteiro no rango de 0 (menor) a 100
(intensidade de cor total). Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation>setCornerRadius(radio, [&quot;nome&quot;])

Fixa o radio da esquina do obxecto &quot;nome&quot;. O radio exprésase en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation>setMultiLine(&quot;nomeDeEstilo&quot;, [&quot;nome&quot;])

Fixa o estilo de liña do obxecto &quot;nome&quot; para o estilo de nome &quot;nomeDeEstilo&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getFont([&quot;nome&quot;]) -&gt; cadea

Devolve o nome da fonte da moldura de texto &quot;nome&quot;. Se esta
moldura de texto ten algún texto seleccionado, devólvese o valor
asignado ao primeiro carácter da selección.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getTextLength([&quot;nome&quot;])

Devolve a lonxitude do texto da moldura de texto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getText([&quot;nome&quot;]) -&gt; cadea

Devolve o texto da moldura de texto &quot;nome&quot;. Se a moldura de texto ten algún
texto selecconado, devólvese o texto seleccionado. Devólvese todo todo o texto
da moldura, non só o texto que se pode ver actualmente. 
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>getAllText([&quot;nome&quot;]) -&gt; cadea

Devolve o texto da moldura de texto &quot;nome&quot; e de todas as molduras que están
vinculadas con esta moldura. Se a moldura de texto ten algún
texto selecconado, devólvese o texto seleccionado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineSpacing([&quot;nome&quot;]) -&gt; float

Devolve o espaciamento da liña  da moldura de texto &quot;nome&quot; expresado en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getColumnGap([&quot;nome&quot;]) -&gt; float

Devolve o tamaño da distancia entre as columnas  da moldura de texto &quot;nome&quot; expresado en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getColumns([&quot;nome&quot;]) -&gt; inteiro

Devolve o número de columnas da moldura de texto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setText(&quot;text&quot;, [&quot;nome&quot;])

Fixa o texto da moldura de texto &quot;nome&quot; para o texto da cadea &quot;texto&quot;.
O texto debe estar codificado en UTF8 - usar, p.ex. unicode(text, &apos;iso-8850-2&apos;).
Ver as FAQ para máis detalles. Se non se fornece un &quot;nome&quot; úsase o elemento
seleccionado nese momento.</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation>insertText(&quot;texto&quot;, pos, [&quot;nome&quot;])

Insire o texto &quot;texto&quot; na posición &quot;pos&quot; na moldura de texto. O texto debe estar
codificado en UTF (ver setText() como referencia). O primeiro carácter ten o
índice 0. &quot;nome&quot;. Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un IndexError debido a unha inserción fora de limites.</translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation>setFont(&quot;fonte&quot;, [&quot;nome&quot;])

Fixa a fonte da moldura de texto &quot;nome&quot; en &quot;fonte&quot;. Se hai texto
seleccionado só se modifica o texto seleccionado. Se non se fornece
un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode devolver un ValueError se non se atopa a fonte.</translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation>setFontSize(tamaño, [&quot;nome&quot;])

Fixa o tamaño da fonte da moldura de texto &quot;nome&quot; en &quot;tamaño&quot;.
&quot;tamaño&quot; trátase como un valor en puntos. Se hai texto seleccionado só se
modifica o texto seleccionado. &quot;tamaño&quot; debe estar no rango 1 a 512.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError por un tamaño de fonte que está fora dos limites.</translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation>setLineSpacing(tamaño, [&quot;nome&quot;])

Fixa o espaciamento de liña da moldura de texto &quot;nome&quot; en &quot;tamaño&quot;.
&quot;tamaño&quot; é un valor en puntos. Se non se fornece
un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se o espaciamento de liña está fora de limites.</translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation>setColumnGap(tamaño, [&quot;nome&quot;])

Fixa a distancia entre columnas da moldura de texto &quot;nome&quot; en &quot;tamaño&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a distancia entre columnas está fora de limites.</translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation>setColumn(nr, [&quot;nome&quot;])

Fixa o número de columnas da moldura de texto &quot;nome&quot; en &quot;tamaño&quot; no inteiro &quot;nr&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se o número de columnas está fora de limites.</translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation>setTextAlignment(aliñamento, [&quot;nome&quot;])

Fixa o aliñamento da moldura de texto &quot;nome&quot; no aliñamento especificado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
&quot;aliñamento&quot; debería ser unha das constantes ALIGN_constantes definidas
neste módulo - ver dir(Scribus).

Pode provocar un ValueError se o número de columnas está fora de limites.</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished">selectText(inicio,conta, [&quot;nome&quot;])

Selecciona &quot;conta&quot; caracteres de texto na moldura de texto &quot;nome&quot; a partir
do carácter &quot;inicio&quot;. A conta de caracteres comeza no 0. Se &quot;conta&quot; é cero,
elimínase calquer selección de texto. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.

Pode provocar un IndexError se a selección está fora dos limites do texto.</translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>deleteText([&quot;nome&quot;])

Limpa todo o texto da moldura de texto &quot;nome&quot;. Se hai texto seleccionado
só se limpará o texto seleccionado. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>setTextColor(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor do texto da moldura de texto &quot;nome&quot; na cor &quot;cor&quot;.
Se hai texto seleccionado só se modificará o texto seleccionado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>setTextStroke(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor do trazo do texto.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setTextShade(&quot;saturación&quot;, [&quot;nome&quot;])

Fixa a saturación da cor do texto do obxecto &quot;nome&quot; en &quot;saturación&quot;.
Se hai texto seleccionado só se modificará o texto seleccionado.
&quot;saturación&quot; debe ser un valor inteiro no rango de 0 (menor) a 100 (intensidade
total da cor). Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation>linkTextFrames(&quot;denome&quot;, &quot;anome&quot;)

Vincula dúas molduras de texto. A moldura de nome &quot;denome&quot; vincúlase á
moldura chamada &quot;anome&quot;. A moldura de destino debe ser unha moldura
de texto baleira e non debe vincularse ou estar vinculada xa a outras molduras.</translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation>unlinkTextFrames(&quot;nome&quot;)

Eliminar o obxecto (con nome) especificado do fluxo/vinculación de moldura
de texto. Se a moldura estaba no medio dunha cadea, conectaranse as molduras
anterior e seguinte, p.ex. &apos;a-&gt;b-&gt;c&apos; convírtese en &apos;a-&gt;c&apos; cando se fai
unlinkTextFrames(b)

Pode provocar unha ScribusException se se violan as regras de vinculación.</translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation>traceText([&quot;nome&quot;])

Convirte a moldura de texto &quot;nome&quot; en siluetas. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation>progressReset()

Limpa a configuración anterior da barra de progreso de Scribus. Chámase antes de
usasr a nova barra de progreso. Ver progressSet.</translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation>progressTotal(max)

Fixa o valor de paso máximo da barra de paso no número especificado.
Ver progressSet.</translation>
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

Fixa a posición da barra de progreso en &quot;nr&quot;, un valor relativo ao progressTotal
fixado anteriormente. A barra de progreso usa o concepto de pasos; dáselle o
número total de pasos e o número de pasos xa completado e mostra a percentaxe
de pasos xa completados. Pódese especcificar o número total de pasos con
progressTotal(). O número actual de pasos fíxase con progressSet(). Pódese facer
retornar a barra de progreso ao principio con progressReset(). [basado en información
obtida dos documentos do Qt da Trolltech]</translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation>setCursor()

[NON ACEPTADO!] Isto podería foder as cousas, así que non o toques de momento.</translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation>docChanged(bool)

Des/Habilita o icone de gardar na barra de icones de Scribus e o elemento do
menú Gardar. É útil chamar por este procedimento cando está a modificar o documento
porque Scribus non perceberá automaticamente cando se modifica o documento
por medio dun guión.</translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation>setScaleImageToFrame(escalaamoldura, proporcional=None, nome=&lt;selección&gt;)

Indica que a escala á moldura na imaxe seleccionada ou especificada será &quot;escalaamoldura&quot;.
De especificarse &quot;proporcional&quot;, a ampliación de aspecto fixo será &quot;proporcional&quot;.
Tanto &quot;escalaamoldura&quot; como &quot;proporcional&quot; son booleanas.

Pode provocar un erro WrongFrameTypeError.</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared. If &quot;count&quot; is -1, all text in the frame will
be selected. If &quot;name&quot; is not given the currently selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="obsolete">selectText(inicio, conta, [&quot;nome&quot;])

Selecciona &quot;conta&quot; caracteres de texto na moldura de texto &quot;nome&quot; a partir
do carácter &quot;inicio&quot;. A conta de caracteres comeza por 0. Se a &quot;conta&quot; é cero,
eliminarase toda selección de texto. Se a &quot;conta&quot; é -1 seleccionarase todo o
texto da moldura. Se non se dá un &quot;nome&quot;, usarase o elemento seleccionado
nese momento.

Pode provocar un IndexError se a selección está fora dos limites do texto.</translation>
    </message>
    <message>
        <source>register_macro_code(name, sourcetext, accel=&apos;&apos;)

Create a macro named &quot;name&quot; by evaluating the the source code &quot;sourcetext&quot;.
&quot;sourcetext&quot; must follow the same rules as macros created in the GUI.
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
</source>
        <translation type="obsolete">register_macro_code(nome, textofonte, acelerador=&apos;&apos;)

Crear unha macro chamada &quot;nome&quot; mediante a evaluación do código fonte &quot;textofonte&quot;.
&quot;textofonte&quot; debe seguir as mesmas regras que as macros creadas na GUI.
Se se fornece, a cadea &quot;acelerador&quot; usarase para contar cun atallo
de teclado para a macro.</translation>
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
        <translation type="unfinished">renderFont(&quot;nome&quot;, &quot;nomedeficheiro&quot;, &quot;exemplo&quot;, tamaño, formato=&quot;PPM&quot;) -&gt; booleano

Crea unha vista previa gráfica da fonte &quot;nome&quot; co texto &quot;exemplo&quot; e o tamaño.
Se o &quot;nomedeficheiro&quot; non é &quot;&quot;, a imaxe sálvase en &quot;nomedeficheiro&quot;. Do contrario,
os datos de imaxe devólvense como unha cadea. O argumento opcional
&quot;formato&quot; especifica o formato de imaxe que se xerará e permite calquer formato
permitido por QPixmap.save(). Formatos habituais son PPM, JPEG, PNG e XPM.

Pode provocar un NotFoundError se non se atopa a fonte especificada.
Pode provocar un ValueError se se lle pasar un exemplo ou nome de ficheiro vacíos.</translation>
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
        <translation type="obsolete">Acerca de Scribus%1%2</translation>
    </message>
    <message>
        <source>%1. %2 %3 </source>
        <translation>%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation>Scribus, Versión %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation>ID da compilación:</translation>
    </message>
    <message>
        <source>Programming:</source>
        <translation type="obsolete">Programación:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Contribucións de:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation>Portaxe a Windows:</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation type="obsolete">Documentación:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation>Alemán:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation>Francés:</translation>
    </message>
    <message>
        <source>Spanish and Catalan:</source>
        <translation type="obsolete">Español e Catalán:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation>Italiano:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation>Húngaro:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation>Ucraniano:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation>Búlgaro:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation>Galego:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation>Turco:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation>Lituano:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation>Polonés:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation>Checo:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation>Eslovaco:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation>Dinamarqués:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation>Noruegués:</translation>
    </message>
    <message>
        <source>English:</source>
        <translation type="obsolete">Inglés:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation>Galés:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation>Ruso:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation>Portugués do Brasil:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation>Finlandés:</translation>
    </message>
    <message>
        <source>Homepage and online reference</source>
        <translation type="obsolete">Sitio web e referencia en liña</translation>
    </message>
    <message>
        <source>Mailing list</source>
        <translation type="obsolete">Lista de corrreo</translation>
    </message>
    <message>
        <source>Bugs and feature requests</source>
        <translation type="obsolete">Erros e propostas de funcionalidades</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation>Basco:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation>Esloveno:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Este painel mostra a versión, data da compilación e
soporte de librarías compiladas en Scribus
O C-C-T equivale a soporte C=CUPS C=littlecms T=TIFF.
Se falta o soporte dunha libraría, indícase con *</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Acerca de</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>A&amp;utores</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>&amp;Traducións</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;En liña</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>Acerca de Scribus %1</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Equipo de Desenvolvimento:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Documentación Oficial:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Outra Documentación:</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Traducións e Tradutores Oficiais:</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation>Catalán:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation>Inglés (británico):</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation>Esperanto:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation>Coreano:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation>Serbio:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation>Español:</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation>Sueco:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Contribuíron anteriormente coas súas traducións:</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Sitio web</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Referencia en liña</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Erros e Peticións</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Lista de Correo</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Este painel mostra a versión, data de creación e
soporte de librarías compilado en Scribus.
C-C-T significa apoio a C=littlecms C=CUPS T=TIFF.
A ausencia de apoio a librarías indícase cun *</translation>
    </message>
    <message>
        <source>Portugese (Brazilian):</source>
        <translation>Portugués (Brasileiro):</translation>
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
        <translation>Opcións avanzadas</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation>Crea PostScript Nível 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation>Crea só PostScript Nível 2. Atención: 
pódense crear ficheiros enormes</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation>Crea só PostScript Nível 1. Atención: 
pódense crear ficheiros enormes</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation>Reflexar a(s) Páxina(s) na &amp;Horizontal</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation>Reflexar a(s) Páxina(s) na &amp;Vertical</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation>Applicar os Perfís &amp;ICC</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation>PostScript Nível &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation>PostScript Nível &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation>PostScript Nível &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation>Aplicar UC&amp;R</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
O UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
O UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation>Distribuir/Aliñar</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Aliñar</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation>Lados Esquerdos</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation>Medios</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation>Lados Direitos</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation>Lados Superiores</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation>Lados Inferiores</translation>
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
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Applicar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation>&amp;Entre:</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation>A&amp;liñar</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation>De&amp;sprazamento</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation>Distribuir &amp;Uniformemente</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation>Ent&amp;re:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation>&amp;Non Modificar</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation>Al&amp;iñar</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation>Des&amp;prazamento</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation>Distribuir U&amp;niformemente</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation>N&amp;on Modificar</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Aliñar o Texto á Esquerda</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Aliñar o Texto á Direita</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Centrar o Texto</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Xustificar o Texto</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Xustificar o Texto forzando</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Propriedades do Campo</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Botón</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Campo de Texto</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Caixa de Selección</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Caixa de Lista despregábel</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Caixa de Lista</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Propriedades</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Suxestión:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Bordo</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Cor:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengun</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Anchura:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Delgado</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Ancho</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Estilo:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Sólido</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Tracexado</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Subliñado</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Biselado</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Biselado interior</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Outro</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Só  Lectura</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Necesario</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>Non Exportar o Valor</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Visibilidade:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Visíbel</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Escondido</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Non Imprimir</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Non Ver</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Aparencia</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Texto para Botón Presionado</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Texto para Pasar co Botón</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Iconas</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Usar Iconas</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Presionado</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Pasar co Punteiro</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Colocación da Icona...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Resaltar</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Invertir</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation></translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Premer</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Multi-Liña</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Contrasinal</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Limite de</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>Caracteres</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Non Desprazar</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Non Comprobar a Ortografía</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Comprobar o Estilo:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Comprobar</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Cruz</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Rombo</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Círculo</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Estrela</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Cuadrado</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Seleccionado por omisión</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Modificábel</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation>Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Ir A</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Enviar o Formulario</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Limpar o Formulario</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Importar Datos</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Evento:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Rato Soltado</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Rato Premido</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Entrar co Rato</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Sair co Rato</translation>
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
        <translation>Guión:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Modificar...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Enviar a un URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Enviar os Datos como HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Importar Datos desde:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Destino</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Para o Ficheiro:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Mudar...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Páxina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Posición X:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Posición Y:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>O Campo está formatado como:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Sen formato</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Número</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Percentaxe</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Hora</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Formato dos Números</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Decimais:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Usar o Símbolo de Moeda</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Antepor o Símbolo de Moeda</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Formatado</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Formato das percentaxes</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Formato da data</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Formato da hora</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Guións persoais</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Formato:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Atallo de teclado:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>O valor non foi validado</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>O valor debe ser maior ou igual a:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>e menor ou igual a:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Validación personalizada do guión:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Validar</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>O valor non está calculado</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>O valor é </translation>
    </message>
    <message>
        <source>sum</source>
        <translation>a suma</translation>
    </message>
    <message>
        <source>product</source>
        <translation>o produto</translation>
    </message>
    <message>
        <source>average</source>
        <translation>a media</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>o mínimo</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>o máximo</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>dos campos seguintes:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Escoller...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Guión de cálculo personalizado:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Calcular</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Introducir aquí unha lista de campos separados por vírgulas</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>É preciso, como mínimo, a Icona de Normal para usar Iconas en Botóns</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation>Imaxes (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;Todos (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Exemplo:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Modificación da Selección</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Fonte a usar con PDF 1.3:</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Ignórase a bandeira para PDF 1.3</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Ficheiros PDF (*.pdf);;Todos (*)</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Propriedades das Anotacións</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="obsolete">Tipo:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ligazón</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Ligazón externa</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Ligazón-web externa</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Destino</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Modificar...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="obsolete">Páxina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">Posición X:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Posición Y:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>Documentos PDF (*.pdf);;Todos (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Tipo:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Cam&amp;biar...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Páxina:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>Pos-&amp;X</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation>Aplicar un Modelo</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Modelo:</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation>Aplicar á Páxina &amp;Actual</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation>Aplicar desde a &amp;Páxina:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>Á:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation>Aplicar a todas as Páxinas p&amp;ares</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation>Aplicar a todas as Páxinas &amp;impares</translation>
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
        <translation>Porta-retallos</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation>Porta-retallos (*.scs);;Todos (*)</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Obxecto</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Entrada Nova</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Mudar o Nome</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Carregar...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation>&amp;Pequeno</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation>&amp;Mediano</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation>&amp;Grande</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>&amp;Vista Previa</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Marcadores</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Mover Marcador</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Inserir Marcador</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Marcadores</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Colocación das Iconas</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Disposición:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Só o rótulo</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Só a icona</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>O rótulo por baixo da Icona</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>O rótulo por cima da Icona</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>O rótulo á direita da Icona</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>O rótulo á esquerda da Icona</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>O rótulo sobreposto á Icona</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Escala:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Sempre</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Cando a Icona é demasiado grande</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nunca</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Como Escalar:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Proporcional</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Non Proporcional</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Icona</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Configuración inicial</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Cando a Icona é demasiado pequena</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">Configuración da Xestión das Cores</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Profís do Sistema</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Tipo de Exhibición</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimétrico relativo</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturazón</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimétrico absoluto</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation>Perfil de cores por omisión para as imaxes importadas</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Perfil de cores por omisión para as cores sólidas na páxina</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Perfil de cores que vostede xerou ou recebeu do fabricante.
Este perfil debería ser específico do seu monitor e non un perfil xenérico (ou sexa, sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Perfil de cores para o seu modelo de impresora que forneceu o fabricante.
Este perfil debería ser específico da súa impresora e non un perfil xenérico (ou sexa, sRGB).</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Compensación do Punto Negro é un método de mellorar o contraste nas fotografías.
Recoméndase que a permita se ten fotos no seu documento.</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Exhibición por omisión para o seu monitor. De non ter unha boa razón para mudala,
limítese a escoller Colorimétrica Relativa ou Perceptual.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Exhibición por omisión para a súa impresora. De non ter unha boa razón para mudala,
limítese a escoller Colorimétrica Relativa ou Perceptual.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Permitir &quot;probas virtuais&quot; de como se imprimirán as cores do seu documento,
baseadas no perfil de impresora escollido.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Método polo que se mostran cores na pantalla que pode que non se impriman adecuadamente.
Isto require perfís moi exactos e só serve como advertencia.</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Activar a Xestión das Cores</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation>&amp;Imaxes:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>Cores &amp;Sólidas:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Monitor:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>Im&amp;resora:</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>M&amp;onitor:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>Impres&amp;ora:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Sim&amp;ular a Impresora na Pantalla</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Marcar Cores da &amp;Gama</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>Usar a Compensación de Punto &amp;Negro</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Mudar a Cor</translation>
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
        <translation>RGB preparada para a Web</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nova</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Vella</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
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
        <translation>A:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>N:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation>Barras de Cores Dinámicas</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Barras de Cores Estáticas</translation>
    </message>
    <message>
        <source>R:</source>
        <translation>Vm:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>Vd:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>Az:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation>O nome da Cor non é único</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>Mapa de Cores HSV</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>&amp;Modelo de Cor</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation>Non pode crear unha cor chamada &quot;%1&quot;.
É un nome reservado para a cor transparente</translation>
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
        <translation type="unfinished">Seleccione o Carácter:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Fonte:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">&amp;Inserir</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Fechar</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished">Inserir os caracteres no cursor no texto</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished">Eliminar a(s) selección(s) actuais.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="unfinished">Fechar este diálogo e voltar á edición de texto.</translation>
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
        <translation type="unfinished">Grego</translation>
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
        <translation type="unfinished">Documento</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Páxina</translation>
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
        <translation>Gradiente Horizontal</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Gradiente Vertical</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Gradiente Diagonal</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Gradiente Diagonal inverso</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Gradiente Radial</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Opacidade:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Saturación:</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation>Mudar as Propriedades de Cor da Liña</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Mudar as Propriedades de Cor do Recheo</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Saturación da cor</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Método de recheo normal ou gradiente</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Indicar a transparencia da cor seleccionada</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation>Cor do obxecto seleccionado</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Gradiente lineal libre</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Gradiente radial libre</translation>
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
        <translation> pt</translation>
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
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">pl</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
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
        <translation>Opcións do Importador de CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Delimitador de Campo:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Delimitador de Valor:</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>A primeira liña é un cabezallo</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengún</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Opcións da Impresora</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Opción</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Grupo de Páxinas</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Todas as Páxinas</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Só as Páxinas impares</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Só as páxinas pares</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Reflectir</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientación</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Impresión N-Up</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>Páxina por Folla</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>Páxinas por Folla</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation>Este painel mostra varias opcións de impresión do CUPS.
Os parámetros exactos disponíbeis dependerán do controlador da súa impresora.
Pode confirmar que acepta CUPS seleccionando Axuda &gt; Acerca de.
Procure as liñas C-C-T. Equivalen a se pode aceptar C=CUPS C=littlecms T=TIFF.
A ausencia de soporte para unha libraría indícase cun *</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>Codificación:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Móvese para o seu Directorio de Documentos.
Pódese definir nas Preferencias.</translation>
    </message>
    <message>
        <source>&amp;Compress File</source>
        <translation>&amp;Comprimir o Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Incluir Fontes</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Eliminar esta Cor</translation>
    </message>
    <message>
        <source>?</source>
        <translation type="obsolete">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Substituir por:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="obsolete">Eliminar a Cor:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
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
        <translation>Eliminar Páxinas</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Eliminar desde:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>até:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
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
        <translation type="obsolete">Falta esta Fonte</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">A Fonte %1 non está instalada.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Usar</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">no seu lugar</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Dacordo</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Información sobre o Documento</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Título:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Autor:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Palabras-chave:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Descri&amp;ción:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Editor:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>Co&amp;laboradores:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>Dat&amp;a:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>T&amp;ipo:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>F&amp;ormato:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>Id&amp;entificador:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>&amp;Fonte:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>Idiom&amp;a:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>&amp;Relación:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>Ám&amp;bito:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Direito&amp;s:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation>Docu&amp;mento</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>Máis &amp;Información</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>A persoa ou organización responsábel en primeira instáncia de crear o contido do documento.
Este campo pódese incorporar ao documento de Scribus como referencia, así como nos meta-datos dun PDF</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Nome que se lle dá ao documento.
Este campo pódese incorporar ao documento de Scribus como referencia, así como nos meta-datos dun PDF</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Relación do contido do documento.
Este campo prevese para unha descrición ou resumo breves do documento. Incorpórase ao PDF á hora de exportalo</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>O tema do contido do documento
Este campo prevese para palabras-chave do documento que se queira incluir nun PDF para axudar nas procuras e na indexación de ficheiros PDF</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Unha persoa ou organización responsábel de distribuir o documento</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Unha persoa ou organización responsábel de contribuir ao contido do documento</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Unha data asociada cun acontecimento no ciclo vital do documento, no formato AAAA-MM-DD, ssegundo a ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>A natureza ou xénero do contido do documento, como por exemplo categorías, funcións, xéneros, etc</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>A manifestación física ou dixital do documento. Paga a pena anotar o tipo e dimensións.
Tamén resultan de utilidade aquí RFC2045 e RFC2046 para os tipos MIME</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Unha referencia sen ambigüidades ao documento nun contexto tal como o ISBN ou o URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Unha referencia a un documento do que deriva o documento acutal, como por exemplo o ISBN ou o URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>O idioma no que está escrito o documento, normalmente un código de idioma ISO-639,
co sufixo opcional dun hífen e un código de país ISO-3166 como, por exemplo en-GB ou fr-CH</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Unha referencia a un documento relacionado, talvez usando un identificador formal tal e como o ISBN ou o URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>A entensión ou rango do contido do documento, que talvez inclúa a localización, hora e ámbitos de xurisdición</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Información sobre os direitos que se posúen sobre o documento, como o copyright, patente ou marca rexistrada</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Configurar a Impresora</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation>Ficheiros Postscript (*.ps);;Todos (*)</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cián</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Maxenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Amarelo</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Preto</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Inserir unha lista de elementos separada por vírgulas, na que
un elemento pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Destino da Impresión</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Opcións...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Ficheiro:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>Comando de Impresión A&amp;lternativo</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>Co&amp;mando:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Rango</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>Imprimilo &amp;Todo</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Imprimir a Pá&amp;xina Actual</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Imprimir o &amp;Rango</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>N&amp;úmero de Copias:</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation>Imprimir &amp;Normal</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation>Imprimir as &amp;Separacións</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation>Impr&amp;imir en Cores de ser Posíbel</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation>Imprimir en &amp;Escala de Grises</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation>Opcións A&amp;vanzadas...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>Im&amp;primir</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation>Usar un xestor de impresión alternativo, tal como kprinter ou gtklp,
para utilizar opcións de impresión adicionais</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>A importar o Ficheiro:
%1
fallou!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Erro Fatal</translation>
    </message>
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>Editing Macro: &lt;b&gt;</source>
        <translation type="obsolete">A editar a Macro: &lt;b&gt;</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="obsolete">Scribus - Xestor de Macros</translation>
    </message>
    <message>
        <source>The file &apos;%1&apos; already exists.
Are you sure you want to overwrite it?
</source>
        <translation type="obsolete">O ficheiro &apos;%1&apos; xa existe.
Ten a certeza de querer escreber por riba?</translation>
    </message>
    <message>
        <source>You have already edited this macro.
Are you sure you want to discard all your changes?
</source>
        <translation type="obsolete">Xa modificou esta macro.
Ten a certeza de querer prescindir das modificacións?</translation>
    </message>
    <message>
        <source>A full traceback follows:

%1
</source>
        <translation type="obsolete">A continuación, un rexistro completo:

%1</translation>
    </message>
    <message>
        <source>Compilation of the macro failed, so it can not 
be saved in its current form. The error was:
%1
</source>
        <translation type="obsolete">Fallou a compilación da macro, de maneira
que non se pode salvar na súa forma actual.
O erro foi:
%1</translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation type="obsolete">Scribus - Macro Nova</translation>
    </message>
    <message>
        <source>&lt;qt&gt;This is the Edit Macro / New Macro dialog box. Here you can change the source code to macros. Edit the source code to the macro in the text editing area below the &quot;Source Code&quot; label and click OK to save your changes to the macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Este é o diálogo de Modificación de Macro / Macro Nova. Aqui pode modificar o código fonte das macros. Modifíqueo na área de edición de texto baixo a equiqueta &quot;Código Fonte&quot; e prema sobre Aceptar as modificacións para gardar as mudanzas feitas na macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Source Code:</source>
        <translation type="obsolete">Código Fonte:</translation>
    </message>
    <message>
        <source>Editing Macro:</source>
        <translation type="obsolete">Modificación da Macro:</translation>
    </message>
    <message>
        <source>The name of the macro being edited.</source>
        <translation type="obsolete">Nome da macro que se está a modificar.</translation>
    </message>
    <message>
        <source>&lt;/qt&gt;This item displays the name of the macro you are currently editing.&lt;qt&gt;</source>
        <translation type="obsolete">&lt;/qt&gt;Este elemento mostra o nome da macro que se está a editar neste momento.&lt;qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Discard all changes and exit.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Rexeitar as mudanzas feitas e sair.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Exit the editing dialog, discarding all changes you have made. If you want to exit without saving the macro but don&apos;t want to lose your changes, save your changes with &quot;Save Source As...&quot;.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Sair do diálogo de modificación, rexeitando todas as modificacións feitas. Se quer sair sen salvar a macro mais non quer perder as mudanzas, garde as modificacións con &quot;Salvar a Fonte Como...&quot;.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;Aceptar as modificacións</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+A</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes and exit.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Salvar as modificacións e sair.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes to the macro and exit. If there is a problem with the macro, a message will be displayed and the editing dialog will not close.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Salvar as mudanzas feitas na macro e sair. De haber algún problema coa macro, mostrarase unha mensaxe e o diálogo de modificación non se fechará.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;This text area contains the source code of the macro. If you&apos;re creating a new macro there won&apos;t be anything in it, and if you&apos;re editing an existing macro the source code the macro was defined with will be shown here.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Esta área de texto contén o código fonte da macro. Se está a crear unha macro nova non haberá nada nel, mais se está a modificar unha macro xa existente, o código fonte co que se definiu a macro aparecerá aquí.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Load Source ...</source>
        <translation type="obsolete">&amp;Carregar a Fonte...</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace the current source code with code from a file.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Substituir o código fonte actual con código dun ficheiro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Load new source code into the editing area from &quot;file&quot;. Any source code in the editing area is replaced. The loaded source must be a Scribus macro function. If you load any other script, you&apos;ll need to edit it so that it&apos;ll work as a scripter macro before saving it.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Carregar código fonte novo na área de edición desde o &quot;ficheiro&quot;. Calquer código fonte existente na área de modificación será substituído. A fonte carregada debe ser unha función de macro de Scribus. Se carrega calquer outro tipo de guión precisará modificalo para que funcione como unha macro de guión antes de salvalo.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Save Source As...</source>
        <translation type="obsolete">&amp;Salvar a Fonte Como...</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="obsolete">Alt+S</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save the source code being edited to a file.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Salvar nun ficheiro o código fonte que se está a modificar.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Save the source code - the text - of the macro to a file. You can edit the saved source and load it again with &quot;Load Source...&quot;.</source>
        <translation type="obsolete">Modificar o código fonte - o texto - da macro nun ficheiro. Pode modificar a fonte gardada e carregala de novo mediante &quot;Carregar Fonte...&quot;.</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Modificar o Estilo</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Carácter</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation>Efecto:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation>Espazos verticais</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Espaciamento da Liña</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation>O nome do Estilo non é único</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Nome do seu estilo de parágrafo</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Fonte do texto ou obxecto seleccionados</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Cor do recheo do texto</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Cor do trazo do texto</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation>Fornece unha primeira letra de tamaño maior para o parágrafo. Úsase como efecto de estilo</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Determina a altura xeral, en número de liñas, da Maiúscula Inicial</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation>Aliñar o texto á grella de base</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Espaciamento por cima do parágrafo</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Espaciamento por baixo do parágrafo</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabuladores e indentación</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation>&amp;Fonte:</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation>Tama&amp;ño:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation>&amp;Aliñamento:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation>&amp;Maiúsculas Iniciais</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>&amp;Liñas:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>Cor de &amp;enchido:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation>Co&amp;r do trazo:</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation>Axustar á &amp;Grella de Base</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation>E&amp;spaciamento da Liña:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation>P&amp;or en cima:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation>Por &amp;baixo:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
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
        <translation>Editor</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation>Javascripts (*.js);;Todos (*)</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Abrir...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>&amp;Gardar e Sair</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>&amp;Sair sen Gardar</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiasr</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>&amp;Coller os Nomes dos Campos</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Editar</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>&amp;All pages</source>
        <translation>Tod&amp;as as páxinas</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>Mudar o directorio de saída</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>O directorio de saída - o lugar no que armacenar as súas imaxes.
O nome do ficheiro exportado será &quot;nomedodocumento-númerodepáxina.tipodeficheiro&quot;</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Exportar só a páxina actual</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Formatos de exportación disponíbeis</translation>
    </message>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Escolla un Directorio de Exportacións</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>M&amp;udar...</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Exportar ao Directorio:</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>&amp;Tipo de Imaxe:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>Cali&amp;dade:</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Exportar como Imaxe(s)</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolución:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>puntos por pulgada</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Rango</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>Páxina a&amp;ctual</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Rango</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Exportar un rango de páxinas</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Inserir unha lista separada por vírgulas de referentes, nos que
un referente pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Exportar todas as páxinas</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Resolución das Imaxes
Use 72 dpi (puntos por pulgada) para Imaxes intendadas para a Pantalla</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>A calidade das súas imaxes - 100% é a mellor calidade e 1% a pior</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Tama&amp;ño:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Tamaño das imaxes. 100% sen modificación, 200% o dobre de grande, etc.</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Tamaño:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Título:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Sen título</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Autor:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Descoñecido</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Documento de Scribus</translation>
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
        <translation>Cores</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Paletas de Cores</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Paleta de Cores actual:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Escolla un Nome</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todo (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todo (*)</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Cor Nova</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Escolla unha paleta de cores para carregar</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>Gardar a paleta de cores actual</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Eliminar as cores que non se usan da paleta de cores do documento actual</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation>Engadir cores á paleta actual desde un documento xa existente</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Crear unha cor nova dentro da paleta actual</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>Modificar a cor seleccionada</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Facer unha copia da cor seleccionada</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>Eliminar a cor seleccionada</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Facer que a paleta actual sexa a paleta de cores por omisión</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>Eng&amp;adir</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nova</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>Elimina&amp;r as non usadas</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>&amp;Gardar a Paleta de Cores</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation type="obsolete">Configuración Xeral das Fontes</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Fontes disponíbeis</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Substitucións de Fontes</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Rotas adicionais</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Si</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Nome da Fonte</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Usar a Fonte</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Embeber en:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="obsolete">Subconxunto</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Tipo</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="obsolete">Camiño ao Ficheiro da Fonte</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Substitución</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>&amp;Fontes Disponíbeis</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>&amp;Substitucións de Fontes</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Rotas Ad&amp;icionais</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>M&amp;udar...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>A&amp;dicionar...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Elimina&amp;r</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Nome da Fonte</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation type="unfinished">Usar a Fonte</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation type="unfinished">Embeber en:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Subconxunto</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished">Camiño ao Ficheiro da Fonte</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Un túzaro pensa que me há de gañar co seixo que levo</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Vista Previa das Fontes</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation type="obsolete">Adicionar a fonte seleccionado no menú Estilo, Fonte</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation type="obsolete">Deixar a vista previa</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Nome da Fonte</translation>
    </message>
    <message>
        <source>Doc</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
        <translation type="unfinished">Tipo</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Subconxunto</translation>
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
        <translation type="unfinished">Vista Previa das Fontes</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>font preview</comment>
        <translation type="unfinished">&amp;Dacordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>font preview</comment>
        <translation type="unfinished">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished">Adicionar a fonte seleccionado no menú Estilo, Fonte</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation type="unfinished">Deixar a vista previa</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished">Un túzaro pensa que me há de gañar co seixo que levo</translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Posición:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation>Aquí pode adicionar, mudar ou eliminar Paradas de Cor.</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Xerir as Guías</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Guías Horizontais</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Guías Verticais</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation> p</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Pos-&amp;X:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>Adici&amp;onar</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>El&amp;iminar</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>B&amp;loquear as Guías</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://scribus.net for updated docs and downloads.</source>
        <translation type="obsolete">Lamentámolo, pero non hai un manual disponíbel. Visite http://scribus.net se precisar de documentos actualizados e software para baixar.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Contido</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ligazón</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Axuda en liña sobre Scribus</translation>
    </message>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Lamentámolo, mais non se dispón dun manual.
Consulte http://docs.scribus.net  para documentos actualizados
e www.scribus.net para descargas.</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Posíbel guión</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Pasar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Configuración dos Guións Automáticos</translation>
    </message>
    <message>
        <source>If you uncheck this you will get a dialog
everytime a possible Hyphenation is found.</source>
        <translation type="obsolete">Se non se selecciona, verá un diálogo
cada vez que se propoña un guión novo.</translation>
    </message>
    <message>
        <source>Enables automatic checking of your text while typing.</source>
        <translation type="obsolete">Permite comprobar o texto automaticamente ao tempo que se escrebe.</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Tamaño da palabra máis pequena que poderá ser dividida cun guión.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Número máximo de guións un debaixo doutro.
O valor 0 significa que non se contabilizan.</translation>
    </message>
    <message>
        <source>&amp;Fully Automatic</source>
        <translation type="obsolete">&amp;Totalmente automático</translation>
    </message>
    <message>
        <source>Check &amp;During Typing</source>
        <translation type="obsolete">Comprobar &amp;Mentres se Escrebe</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Palabra máis pequena:</translation>
    </message>
    <message>
        <source>&amp;Number of Hypenations allowed:</source>
        <translation type="obsolete">&amp;Número de Guións permitidos:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>Suxestións para colocar os &amp;Guións de palabras</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Quebrar o Texto con Guións Automaticamente ao &amp;Escreber</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Guións Consecutivos &amp;Permitidos:</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Mostraráse unha caixa de diálogo que mostra todos os guións posíbeis para cada palabra cando use Extras, opción Colocar Guións no Texto.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Permite a colocación automática de guións mentres escrebe.</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Inserción de Páxinas</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Inserir</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>antes da Páxina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>a continuación da Páxina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>ao Final</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Modelo (Páxina Direita):</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="obsolete">&amp;Inserir</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>Páxina(s)</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="obsolete">&amp;Modelo (Páxina Esquerda):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Modelo:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">&amp;Inserir</translation>
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
        <translation>Inserción de Tabelas</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation>Número de Fileiras:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation>Número de Columnas:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>New Script</source>
        <translation>Guión Novo</translation>
    </message>
    <message>
        <source>Edit JavaScripts</source>
        <translation>Modificar os JavaScripts</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Do you really want do delete this Script?</source>
        <translation type="obsolete">Ten a intención firme de eliminar este Guión?</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Modificar...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Adicionar...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Guión Novo:</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation>Ten a certeza de querer eliminar este Guión?</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Xestión dos Atallos de Teclado</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Tecla Actual</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Seleccionar unha Tecla para esta Acción</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+MAIÚSCULAS+T</translation>
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
        <translation>Maiúsculas</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation>Maiúsculas+</translation>
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
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Nengunha tecla</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>Tecla Definida polo &amp;Utilizador</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>Asignar &amp;Tecla</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation>Esta Secuencia de Teclas xa está reservada</translation>
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
        <translation>Capas</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation>Adicionar unha Capa nova</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Eliminar a Capa</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation>Subir a Capa</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation>Baixar a Capa</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation>Capa Nova</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation>Quer que tamén se eliminen todos os Obxectos desta Capa?</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Nome</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Modificación dos Estilos de Liña</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Estilo Novo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Do you really want do delete this Style?</source>
        <translation type="obsolete">Ten a certeza de querer eliminar este Estilo?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todo (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todo (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Salvar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Ten a certeza de querer eliminar este Estilo?</translation>
    </message>
</context>
<context>
    <name>MSpinBox</name>
    <message>
        <source> pt</source>
        <translation> pt</translation>
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
        <translation> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation> p</translation>
    </message>
</context>
<context>
    <name>Macro</name>
    <message>
        <source>Passed object is not callable</source>
        <comment>python error</comment>
        <translation type="obsolete">O obxecto que se pasou non é chamábel

erro de python</translation>
    </message>
</context>
<context>
    <name>MacroManager</name>
    <message>
        <source>Manage Macros</source>
        <translation type="obsolete">Xerir as Macros</translation>
    </message>
    <message>
        <source>Brings up a graphical window for creating, deleting, editing, saving and loading macros.</source>
        <translation type="obsolete">Presenta unha xanela gráfica para crear, eliminar, modificar, salvar e carregar macros.</translation>
    </message>
    <message>
        <source>Create, edit and delete macros</source>
        <translation type="obsolete">Crear, modificar e eliminar macros</translation>
    </message>
    <message>
        <source>&amp;Macro</source>
        <translation type="obsolete">&amp;Macro</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="obsolete">Scribus - Xestor de Macros</translation>
    </message>
    <message>
        <source>Unable to open the requested file: %1</source>
        <translation type="obsolete">Foi imposíbel abrir o ficheiro que se pedía: %1</translation>
    </message>
    <message>
        <source>Scribus - Edit Macro</source>
        <translation type="obsolete">Scribus - Modificar Macro</translation>
    </message>
    <message>
        <source>&lt;qt&gt;The macro name you requested is already taken  by another macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;O nome de macro que pediu xa está collido  por outra macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Macro creation failed. The macro manager was unable to set up the macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Fallou a creación de Macro. O xestor de macros foi incapaz de preparar a macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; has reported a minor error.
The error is: %2
A full traceback follows:

%3
</source>
        <translation type="obsolete">A macro &apos;%1&apos; informa dun erro menor.
O erro é: %2
A seguir, o rexistro completo:

%3</translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; failed to execute correctly.
The error is: %2
A full traceback follows:

%3
</source>
        <translation type="obsolete">A macro &apos;%1&apos; non se executou correctamente.
O erro é: %2
A seguir, o rexistro completo:

%3</translation>
    </message>
</context>
<context>
    <name>ManageMacrosDialog</name>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="obsolete">Scribus - Xestor de Macros</translation>
    </message>
    <message>
        <source>Renaming the macro failed because the name is already in use.</source>
        <translation type="obsolete">A mudanza de nome da macro fallou debido a que o nome xa existía.</translation>
    </message>
    <message>
        <source>Scribus - Manage Macros</source>
        <translation type="obsolete">Scribus - Xerir Macros</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;This window is the Scribus Macro Manager. Here you can create macros, edit macros, etc. All changes are made using the buttons on the right hand side of the window.&lt;/p&gt;
&lt;p&gt;All changes made in this dialog take effect instantly - you cannot cancel the actions you make here.
The table in the center of the dialog lists what macros are currently loaded and some information about them. Use &quot;What&apos;s this&quot; on the table for more information.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;Esta xanela é o Xestor de Macros de Scribus. Aquí pode crear macros, modificar macros, etc. Todas as modificacións fanse mediante os botóns da parte superior direita da xanela.&lt;/p&gt;
&lt;p&gt;Todas as modificacións feitas neste diálogo son efectivas inmediatametne - non pode cancelar as accións realizadas aquí. A tabela do centro do diálogo lista as macros que están carregadas actualmente e algunha información relativa a elas. Utilice &quot;Que é isto&quot; na tabela para máis información.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Nova</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="obsolete">Alt+N</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Crar unha macro nova&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro by prompting for the macro name then bringing up the edit macro dialog box.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Crear unha macro nova pedindo primeiro o nome da macro e presentando logo o diálogo de edición de macros.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+D</translation>
    </message>
    <message>
        <source>Macro</source>
        <translation type="obsolete">Macro</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="obsolete">Editor</translation>
    </message>
    <message>
        <source>Accel</source>
        <translation type="obsolete">Atallo</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">Descrición</translation>
    </message>
    <message>
        <source>&lt;p&gt;This table lists the macros that are currently defined.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Name:&lt;/b&gt; The name of the macro, as shown in the menu bar and in other places around Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Edit:&lt;/b&gt; If the macro can be edited, &quot;Yes&quot; appears in this column. Usually if a macro cannot be edited it was created using the register_macro command in a script.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Accel:&lt;/b&gt; The menu shortcut key sequence, if any, associated with the macro. For example, CTRL-F8 means that you can press Control-F8 when in Scribus to run the macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Description:&lt;/b&gt; If the macro contains a &quot;docstring&quot;, a special string at the start of its definition that describes it, that is shown here. If the docstring is long, only the beginning is shown - use &quot;What&apos;s This&quot; on the macro&apos;s entry in the Macro menu to see the full description.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Esta tabela lista as macros definidas actualmente.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Nome:&lt;/b&gt; O nome da macro, tal e como se mostra na barra de menú e noutros lugares do Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Modificar:&lt;/b&gt; Se a macro se pode modificar, &quot;Si&quot; aparece nesta columna. Normalmente, se unha macro non se pode modificar foi porque se creou usando o comando registere_macro nun guión.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Atallo:&lt;/b&gt; A secuencia de teclas que constitúen o atallo do menú, de existir, asociada coa macro. Por exemplo, CTRL-F8 significa que pode premer Control-F8 desde dentro de Scribus para executar a macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Descrición:&lt;/b&gt; Se a macro contén un &quot;docstring&quot;, unha secuencia especial no comezo da súa definición que a define, que se mostra aquí. Se o docstring é longo, só se mostra o principio - use &quot;Que é Isto&quot; na entrada da macro no menú Macro para ver a descrición completa.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Rena&amp;me</source>
        <translation type="obsolete">&amp;Mudar o nome</translation>
    </message>
    <message>
        <source>Alt+M</source>
        <translation type="obsolete">Alt+M</translation>
    </message>
    <message>
        <source>Rename the selected macro.</source>
        <translation type="obsolete">Mudarlle o nome á macro seleccionada.</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Rename the selected macro. You will be prompted for the new name.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Mudarlle o nome á macro seleccionada. Pediráselle o novo nome.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="obsolete">&amp;Modificar...</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="obsolete">Alt+M</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Edit the source of the selected macro, if the source is availible.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Modificar a fonte da macro seleccionada, de estar disponíbel.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="obsolete">Alt+E</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Delete the currently selected macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Borrar a macro seleccionada neste momento.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete the selected macro. This is instant, and there is no way to recover the macro once deleted. If the macro is created by a start-up script, it will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Eliminar a macro seleccionada. Isto é instantáneo e non hai xeito de recuperar a macro unha vez que foi eliminada. Se a macro foi creada mediante un guión de inicio, reaparecerá a próxima vez que abra o Scribus&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Set Accel</source>
        <translation type="obsolete">A&amp;signar un Atallo</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="obsolete">Alt+S</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Set the keyboard shortcut for the selected macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Asignar o atallo de teclado para a macro seleccionada.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Set the keyboard shortcut (accelerator) key of the selected macro. You will be prompted for the new shortcut in a dialog box.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Asignar a tecla do atallo de teclado para a macro seleccionada. Pediráselle o atallo novo mediante un diálogo.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>E&amp;xport</source>
        <translation type="obsolete">E&amp;xportar</translation>
    </message>
    <message>
        <source>Alt+X</source>
        <translation type="obsolete">Alt+X</translation>
    </message>
    <message>
        <source>Export macros to a file.</source>
        <translation type="obsolete">Exportar as macros a un ficheiro.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Export macros to an external file. The file will be a Python script containing the scripter commands to re-create the macros. It can be run using &lt;tt&gt;Load extension script&lt;/tt&gt; from the &lt;tt&gt;Script&lt;/tt&gt; menu, or the import button in the macro manager.&lt;/p&gt;
&lt;p&gt;If you want a nice, human readable version of your macros, select the macro you want, press the &lt;tt&gt;Edit&lt;/tt&gt;  button, and use the &lt;tt&gt;Save source&lt;/tt&gt; button in the &lt;tt&gt;Edit Macro&lt;/tt&gt; dialog. You won&apos;t be able to load that version with &lt;tt&gt;Load extension script&lt;/tt&gt; - instead, create a new macro with the&lt;tt&gt; New&lt;/tt&gt; button and use &lt;tt&gt;Load source&lt;/tt&gt;.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Exportar as macros a un ficheiro externo. O ficheiro será un guión en Python que conteña os comandos de guión para recrear as macros. Pódese executar utilizando &lt;tt&gt;Carregar o guión de extensións&lt;/tt&gt; do menú &lt;tt&gt;Guións&lt;/tt&gt; ou o botón de importacións no xestor de macros.&lt;/p&gt;
&lt;p&gt;Se prefire unha versión agradábel, lexíbel directamente, das súas macros, escolla a macro que quer, prema no botón &lt;tt&gt;Modificar&lt;/tt&gt; e use o botón &lt;tt&gt;Salvar a fonte&lt;/tt&gt; no diálogo &lt;tt&gt;Modificar Macro&lt;/tt&gt;. Non poderá carregar esa versión mediante &lt;tt&gt;Carregar guión de extensións&lt;/tt&gt; - en vez diso, cre unha macro nova co botón &lt;tt&gt;Nova&lt;/tt&gt; e use &lt;tt&gt;Carregar fonte&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Delete &amp;All</source>
        <translation type="obsolete">Eliminalas Tod&amp;as</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="obsolete">Alt+A</translation>
    </message>
    <message>
        <source>Delete all macros.</source>
        <translation type="obsolete">Limpar todas as macros.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete all registered macros. This is instant, and there is no way to recover the deleted macros. Any macros created by your start-up script will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Eliminar todas as macros rexistradas. Isto é inmediato e non hai xeito de recuperar as macros borradas. Calquer macro creada mediante o seu guión de inicio reaparecerá a próxima vez que abra Scribus&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Importar</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="obsolete">Alt+I</translation>
    </message>
    <message>
        <source>Import macros from a file.</source>
        <translation type="obsolete">Importar macros desde un ficheiro.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Loads macros from an external file.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Carregar macros desde un ficheiro externo.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Close this dialog</source>
        <translation type="obsolete">Fechar este diálogo</translation>
    </message>
    <message>
        <source>Return to Scribus</source>
        <translation type="obsolete">Voltar para o Scribus</translation>
    </message>
    <message>
        <source>&lt;p&gt;Edit the selected macro. &lt;/p&gt;
&lt;p&gt;If this button is greyed out, either there is no selected macro or the macro manager does not have the source code for the macro you have selected (in which case &lt;tt&gt;No&lt;/tt&gt; will be shown in the &lt;tt&gt;Edit &lt;/tt&gt;column of the macro).&lt;/p&gt;
&lt;p&gt;If Scribus doesn&apos;t have the source, the macro was probably created by a script.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Modificar a macro seleccionada.&lt;/p&gt;
&lt;p&gt;Se este botón está apagado, ora non hai unha macro seleccionada ou o xestor de macros non dispón do código fonte da macro que escolleu (en cuxo caso verá &lt;tt&gt;Non&lt;/tt&gt; na columna &lt;tt&gt;Modificar&lt;/tt&gt; da macro).&lt;/p&gt;
&lt;p&gt;Se Scribus non dispón da fonte, a macro creouna moi posibelmente un guión.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Duplicado Múltiple</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>&amp;Número de Copias:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>Distancia &amp;Horizontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>Distancia &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Distancias</translation>
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
        <translation>Ángulo:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Lonxitude:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
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
        <translation type="unfinished">Erro de Guión</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished">Se se trataba dun guión oficial, teña a bondade de informar en &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Mostrar a &amp;Consola</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Agochar a &amp;Consola</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished">Esta mensaxe enviouse tamén para a área de transferencia. Empregue Ctrl+V para pegala no xestor de erros.</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Mudar...</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Importar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todo (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todo (*)</translation>
    </message>
    <message>
        <source>Import Template</source>
        <translation>Importar Modelo</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importación de Páxina(s)</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="obsolete">Do Documento:</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="obsolete">Importar as Páxina(s):</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Insira unha lista separada por vírgulas dos referentes, na
que un referente pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou unha única páxina.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>desde 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Crear Páxina(s)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">antes da Páxina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">a continuación da Páxina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">ao Final</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>desde %1</translation>
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
        <translation type="unfinished">&amp;Importar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished">Falta esta Fonte</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished">A Fonte %1 non está instalada.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished">Usar</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished">no seu lugar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;Dacordo</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Mover Páxinas</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Copiar Páxina</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Mover Páxina(s):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>para:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">antes da Páxina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">a continuación da Páxina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">ao Final</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
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
        <translation>Propriedades</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Xeometría</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Punto base:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Nível</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Forma:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Distancia do Texto</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Mostrar Curva</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Iniciar o Offset (distancia):</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Distancia desde a Curva:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation>Espaciamento Personalizado</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Perfil de Entrada:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Tipo de Exhibición:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimétrica Relativa</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimétrica Absoluta</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Punto Esquerdo</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Puntos finais</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Xunta en inglete</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Xunta en bisel</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Xunta redondeada</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Terminación Plana</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Terminación Cuadrada</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Terminación Redondeada</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Espaciamento da Liña</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Axuste automático do Kerming</translation>
    </message>
    <message>
        <source>Reverse Writing</source>
        <translation type="obsolete">Escrita Inversa</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengún</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Saturación:</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Nome do obxecto seleccionado</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Posición horizontal do punto base actual</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Posición vertical do punto base actual</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Rotación do obxecto sobre o punto base actual</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Punto desde o que se referencian as medidas e ángulos de rotación</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Seleccione o superior esquerdo como punto base</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Seleccione o superior direito como punto base</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Seleccione o inferior esquerdo como punto base</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Seleccione o inferior direito como punto base</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Seleccione o centro como punto base</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Voltear Horizontalmente</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Voltear Verticalmente</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Mover un nível para riba</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Mover un nível para baixo</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Traer para a Frente</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Enviar para o Fondo</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Bloquear ou desbloquear o obxecto</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Bloquear ou desbloquear o tamaño do obxecto</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Permitir ou impedir que se imprima o obxecto</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Fonte do texto ou obxecto seleccionado</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Anchura de ampliación dos caracteres</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Cor do trazo do texto</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Cor do recheo do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Saturación da cor do trazo do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Saturación da cor do recheo do texto</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Estilo do parágrafo actual</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Mudar a configuración dos puntos esquerdo e direito</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Padrón da liña</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Anchura da liña</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Tipo de xuntas da liña</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Tipo de extremos da liña</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Estilo de liña do obxecto actual</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Escolla a forma da moldura...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Modifique a forma da moldura...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Indique o radio da redondez da esquina</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Número de columnas na moldura de texto</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Distancia entre as columnas</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Distancia do texto á parte superior da moldura</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Distancia do texto á parte inferior da moldura</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Distancia do texto á parte esquerda da moldura</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Distancia do texto á parte direita da moldura</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Modificar as tabulacións da moldura de texto...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Permitir que a imaxe teña un tamaño diferente ao da moldura</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Offset horizontal da imaxe dentro da moldura</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Offset vertical da imaxe dentro da moldura</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Mudar o tamaño da imaxe horizontalmente</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Mudar o tamaño da imaxe verticalmente</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>Manter a ampliación en X e Y igual</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Facer que a imaxe encaixe dentro do tamaño da moldura</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Usar as proporcións da imaxe en vez das da moldura</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Liñas das Celas</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Liña Superior</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Liña á Esquerda</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Liña á Direita</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Liña Inferior</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Manter a proporción</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Perfil fonte da imaxe</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation></translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Propriedades do Trazado do Texto</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Indica o nível no que se atopa o obxecto; 0 significa que o obxecto está no fondo</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation>Facer que o texto das molduras inferirores flúa arredor da silueta do obxecto</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Muda entre anchura de Espazo ou Columna</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Anchura da Columna</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Texto</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>&amp;Imaxe</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Liña</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Cores</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Pos. &amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos. &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>A&amp;ltura:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotación:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Modificar a Forma...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>Esquinas
R&amp;edondeadas:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colum&amp;nas:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Espazo:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>Su&amp;perior:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Di&amp;reita:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>T&amp;abuladores...</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>O Texto &amp;Flúe Arredor da Moldura</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>Usar a Caixa &amp;Delimitadora</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>&amp;Usar a Liña de Contorno</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>Tamaño da &amp;Fonte:</translation>
    </message>
    <message>
        <source>&amp;Kerning:</source>
        <translation>&amp;Kerning:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation>Espaciamento da L&amp;iña:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>Est&amp;ilo:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>Idi&amp;oma:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>Ampliación &amp;Libre</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>Esc&amp;ala X:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>Escal&amp;a Y:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Ampliar/Reducir ao &amp;Tamaño da Moldura</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>P&amp;roporcional</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>Punto &amp;Base:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>T&amp;ipo de Liña:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Anchura da Liña:</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>Bor&amp;des:</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>&amp;Extremos:</translation>
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
        <translation>Use unha caixa que o rodee en lugar da forma da moldura para que flúa o texto</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation>Use unha segunda liña baseada orixinalmente da forma da moldura para que flúa o texto</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Língua da moldura para colocar os hífens</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Escrita da Direita para a Esquerda</translation>
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
        <translation>Modificación do Estilo</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Terminación Plana</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Terminación Cuadrada</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Terminación Redondeada</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Xunta en inglete</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Xunta en bisel</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Xunta redondeada</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Anchura da Liña:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source> pt </source>
        <translation> pt </translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Liña Continua</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Liña Tracexada</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Liña Punteada</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Liña Trazo-Punto</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Liña Trazo-Punto-Punto</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>O nome &quot;%1&quot; xa está a ser usado.
Escolla outro.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>MusterPages</name>
    <message>
        <source>Edit Templates</source>
        <translation type="unfinished">Modificación dos Modelos</translation>
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
        <translation type="unfinished">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="unfinished">Ten a certeza de querer eliminar este Modelo?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;Si</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">&amp;Nome:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="unfinished">Modelo Novo</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">Copia de %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Nome:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normal</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Modificación dos Modelos</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want do delete this Template?</source>
        <translation type="obsolete">Ten a certeza de que desexa eliminar este Modelo?</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Nome:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Modelo Novo</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Copia de %1</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Copia nº %1 de</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Novo</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Si</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Nome:</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Ten a certeza de querer eliminar este Modelo?</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation>Documento Novo</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da Páxina</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Puntos (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Milímetros (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Pulgadas (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Picas (p)</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation>Guías das Columnas</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Tamaño das páxinas do documento, ora un tamaño padrón ora un tamaño personalizado</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Orientación das páxinas do documento</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Anchura das páxinas do documento, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Altura das páxinas do documento, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Permitir a disposición en páxinas simples ou enfrentadas</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Facer que a primeira páxina do documento sexa a esquerda</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe esquerda e o bordo da páxina.
Se se seleccionaron Páxinas Enfrentadas, este espazo de marxe pódese usar para lograr marxes apropiadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe direita e o bordo da páxina.
Se se seleccionaron Páxinas Enfrentadas, este espazo de marxe pódese usar para lograr marxes apropiadas para a encuadernación</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation>Primeiro número de páxina do documento</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Unidade de medida por omisión para a edición do documento</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Crear molduras de texto automaticamente ao adicionar páxinas novas</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Distancia entre columnas creadas automaticamente</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Número de columnas que se crearán nas molduras de texto creadas automaticamente</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Tama&amp;ño:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>A&amp;ltura:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Páxinas en&amp;frentadas</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>A &amp;Páxina Esquerda Primeiro</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Di&amp;reita:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>Número da Pr&amp;imeira Páxina:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Unidade por &amp;omisión:</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>Molduras de Texto &amp;Automáticas</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Distancia:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnas:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Interior:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>E&amp;xterior:</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executivo</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation></translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Libro de contabilidade</translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation>Páxina Esquerda</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Páxina Direita</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Nodos</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Mover Nodos</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Mover Puntos de Control</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Engadir Nodos</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Eliminar Nodos</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Limpar os Puntos de Control</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Limpar este Punto de Control</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation>Se se selecciona use Coordenadas relativas á Páxina;
se non, as Coordenadas son relativas ao Obxecto.</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>Coordenadas &amp;Absolutas</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Pos-&amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>Modificar a Liña de &amp;Contorno</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>&amp;Limpar a Liña de Contorno</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>Co&amp;ncluir as Modificacións</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Mover os Puntos de Control Independente</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Mover Puntos de Control Simétricos</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Abrir un Polígono ou Corta unha Curva de Bézier</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Fechar esta Curva de Bézier</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Reflexar a Traxectoria Horizontalmente</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Reflexar a Traxectoria Verticalmente</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Recortar a Traxectoria Horizontalmente para a Esquerda</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Recortar a Traxectoria Verticalmenta para Riba</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Recortar a Traxecyoria Verticalmenta para Baixo</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Xirar a Traxectoria en sentido Anti-reloxio</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Xirar a Traxectoria no Sentido do Reloxio</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation>Reducir o Tamaño da Traxectoria na percentaxe mostrada</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Aumentar o Tamaño da Traxectoria na percentaxe mostrada</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Ángulo de Rotación</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation>Percentaxe na que Aumentar ou Reducir</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Activar o Modo de Modificación do Contorno da Liña</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Tornar a Liña de Contorno para a Forma Orixinal da Moldura</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Recortar a Traxectoria Horizontalmente para a Direita</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation>Consola dos Guións</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Rango a Exportar</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">Opcións de Ficheiro</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">Marxe Esquerda</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">Marxe Direita</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="obsolete"> dpi</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Xeral</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Embebido</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Fontes Disponíbeis:</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="obsolete">Fontes a embeber:</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Páxina</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Efectos</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="obsolete"> sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">Sen Efectos</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Persianas</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Caixa</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Disolución</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Brillos</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Partir</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Borrar</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Horizontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Vertical</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="obsolete">Dentro</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Fora</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">Da Esquerda para a Direita</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">De Arriba para Baixo</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">De Abaixo para Riba</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">Da Direita para a Esquerda</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="obsolete">Superior Esquerda para Inferior Direita</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Contrasinais</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Configuración</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="obsolete">Pantalla / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Impresora</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Cores Uniformes:</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="obsolete">Perfil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Exhibición:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Colorimétrica Relativa</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Saturación</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Colorimétrica Absoluta</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Imaxes:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="obsolete">Non usar perfís ICC embebidos</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="obsolete">Exhibición PDF/X-3</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="obsolete">Caixa Recortada</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Salvar como</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Configuración das Imaxes</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="obsolete">Automática</translation>
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
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="obsolete">Máxima</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="obsolete">Alta</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Media</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="obsolete">Baixa</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="obsolete">Mínima</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="obsolete">Exportar todas as páxinas a PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="obsolete">Exportar un rango de páxinas a PDF</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Tempo durante o que se mostra a páxina antes de que se inicie a presentación na páxina seleccionada.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Tempo durante o que se produce o efecto.
Un tempo menor acelerará o efecto; un maior ralentizarao.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="obsolete">Aplicar os efectos seleccionados a todas as páxinas.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Escolla un contrasinal mestre que permita ou impida todas
as funcionalidades de seguranza nos seus PDFs exportados</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="obsolete">Embeber un perfil de cor para as cores uniformes</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="obsolete">Embeber un perfil de cor para as imaxes</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="obsolete">Non usar perfis de cor embebidos nas imaxes fonte</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="obsolete">Tamaño da sangría desde o borde superior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="obsolete">Tamaño da sangría desde o borde inferior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="obsolete">Tamaño da sangría desde o borde esquerdo da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="obsolete">Tamaño da sangría desde o borde direito da páxina física</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="obsolete">&amp;Xeral</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="obsolete">&amp;Fontes</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="obsolete">E&amp;xtras</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="obsolete">Determina a compatibilidade do PDF. Por omisión é Acrobat 4.0, que fornece a maior compatibilidade.
Escolla Acrobat 5.0 se o seu ficheiro ten funcionalidades de PDF 1.4 tais como transparencia ou se precisar de encripción de 128 bits.
PDF/X-3 é para exportar o PDF para impresión comercial e pódese seleccionar se ten activada a xestión das cores.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Determina a encadernación das páxinas no PDF. A non ser que saiba
que o ten que mudar, déixea como está - Esquerda.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Xera miniaturas para cada páxina do PDF.
Alguns visualizadores úsannas para navegar.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="obsolete">Xerar Artigos PDF, moi úteis para navegar entre artigos vinculados nun PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Embeber os marcadores creados no seu documento.
Úsanse na navegación por documentos PDF longos.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Exportar a resolución do texto e dos gráficos vectoriais.
Non afecta á resolución das imaxes de mapa de bits, como as fotos.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Compresión do texto e os gráficos.
De non ter unha razón, non o seleccione. Reduce o tamaño do PDF.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Versión da compresión para as imaxes.
Automático permite que Scribus escolla o mellor método.
ZIP é bon para imaxes con cores uniformes.
JPEG é mellor para crear ficheiros PDF que teñen moitas fotos (cunha pequena perda de calidade, posibelmente).
Déixeo en automático, a non ser que precise de opcións de compresión especiais.</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="obsolete">Reduza a definición das imaxes de mapas de bits aos puntos por pulgada indicados.
Se non selecciona isto mostraranse na súa resolución orixinal.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="obsolete">DPI (Puntos por Pulgada) para a exportación de imaxes.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Embeber fontes no PDF. O embebido de fontes
preservará a disposición e aparencia do seu documento.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Permite os efectos de presentación ao usar o Reader de Acrobat a pantalla completa.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="obsolete">Mostra as previsualizacións das páxinas de cada unha das listadas aquí arriba.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="obsolete">Tipo do efecto de exhibición.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="obsolete">Dirección do efecto das liñas que se moven nos efectos partir e persiana.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="obsolete">Posición inicial para os efectos de caixa e partir.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="obsolete">Dirección dos efectos de brillo e borrado.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Permitir as funcionalidades de seguranza nos PDF que exporte.
Se escolle Acrobat 4.0, o PDF protexerase con encripción de 40 bits.
Se escolle Acrobat 5.0, o PDF protexerase con encripción de 128 bits.
Descargo de responsabilidade: a encripción PDF non é tan fiábel como a encripción GPG ou PG e ten algunhas limitacións.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Modelo de cor para a saída do seu PDF.
Escolla Pantalla/Web para PDFs que vaian ser visualizados nunha pantalla ou impresos en impresoras de chorro de tinta normais.
Escolla Impresora para imprimir nunha verdadeira impresora de catro cores CMYK.</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="obsolete">Perfil de Cor para as cores uniformes</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="obsolete">Exhibición para as cores sólidas</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="obsolete">Perfil de cor para as imaxes</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="obsolete">Exhibición para as imaxes</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="obsolete">Perfil de saída para a impresión. De ser posíbel, consulte a súa impresora para a selección de perfis.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Secuencia obrigatoria en PDF/X-3, ou o PDF non será conforme
con PDF/X-3. Recomendamos que use o título do documento.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Níveis de compresión: Mínima (25%), Baixa (50%), Media (75%), Alta (85%), Máxima (95%)</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="obsolete">Escolla un contrasinal para que os utilizadores podan ler os seus PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="obsolete">Permita que se imprima o PDF. Se non se selecciona, impídese a impresión.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="obsolete">Permita a modificación do PDF. Se non se selecciona, impídese a modificación do PDF.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Permita copiar o texto ou os gráficos do PDF.
Se non se selecciona, o texto e os gráficos non se poden copiar.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Permita que se engadan anotacións e campos no PDF.
Se non se selecciona, impídese a modificación de anotacións e campos.</translation>
    </message>
    <message>
        <source>Create PDF File</source>
        <translation>Crear un Ficheiro PDF</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>&amp;Saída para o Ficheiro:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="obsolete">&amp;Todas as Páxinas</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="obsolete">&amp;Escoller as Páxinas</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="obsolete">Compatibilid&amp;ade:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="obsolete">E&amp;ncadernación:</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="obsolete">Xerar &amp;Miniaturas</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="obsolete">Salvar as Molduras de Texto &amp;Vinculadas como Artigos de PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="obsolete">&amp;Incluir os Marcadores</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Resolución:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="obsolete">Com&amp;primir o Texto e os Gráficos Vectoriais</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Método:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Calidade:</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">&amp;Reducir a Calidade das Imaxes a:</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">&amp;Embeber todas as Fontes</translation>
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
        <source>Enable &amp;Presentation Effects</source>
        <translation type="obsolete">Permitir os Efectos de &amp;Presentación</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="obsolete">Mostrar as Pre&amp;visualizacións das Páxinas</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="obsolete">Duración da &amp;Exhibición:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="obsolete">Duración do Efec&amp;to:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="obsolete">T&amp;ipo de Efecto:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="obsolete">Liñas &amp;Móveis:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="obsolete">&amp;Desde:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="obsolete">D&amp;irección:</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">&amp;Aplicar os Efectos en todas as Páxinas</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="obsolete">&amp;Usar o Encriptamento</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="obsolete">&amp;Utilizador:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="obsolete">&amp;Propietario:</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="obsolete">Permitir a Im&amp;presión do Documento</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="obsolete">Permitir a Modifi&amp;cación do Documento</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="obsolete">Permitir Cop&amp;iar o Texto e os Gráficos</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="obsolete">Permitir Adicionar &amp;Anotacións e Campos</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="obsolete">S&amp;eguranza</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="obsolete">Saída Pe&amp;nsada Para:</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="obsolete">&amp;Usar Configuración de Exhibición Personalizada</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="obsolete">Configuración de Exhibición</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="obsolete">Fre&amp;cuencia:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="obsolete">&amp;Ángulo:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="obsolete">Función do S&amp;pot:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="obsolete">Punto Simple</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Liña</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="obsolete">Redondo</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="obsolete">Elipse</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="obsolete">Usar o Perfil ICC</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">C&amp;or</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="obsolete">Secuencia de &amp;Información:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="obsolete">&amp;Perfil de Saída:</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Salvar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Inserir unha lista separada por vírgulas de posibilidades,
na que unha pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Ficheiros PDF (*.pdf);;Todo (*)</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">Esta é unha configuración avanzada que non se activa por omisión. Deberíase permitir só
cando así o requira a súa impresora e vostede dispoña de todos os detalles exactos.
De non facelo así, o seu PDF exportado pode non imprimirse correctamente e con certeza non será portábel entre sistemas.</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotación:</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="obsolete">Comprimir o Texto e os Gráficos &amp;Vectoriais</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">Todas as Fontes a un &amp;Subconxunto</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">Fontes a meter nun subconxunto:</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="obsolete">P&amp;ermitir os Efectos de Presentación</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="obsolete">&amp;Presentación</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="obsolete">Reflexar a(s) Páxina(s) horizontalmente</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="obsolete">Reflexar a(s) Páxina(s) verticalmente</translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Previsualización da Impresión</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation>Permite unha vista máis agradábel dos elementos de texto no visualizador
en detrimento da velocidade. Isto só afecta ás fontes Type 1</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of True Type Fonts, Open Type Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Permite unha vista máis agradábel das Fontes True Type, Fontes Open Type, EPS, PDF e
os gráficos de vectores na previsualización, a expensas da velocidade</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Mostrar transparencia e elementos transparentes no seu documento. Precisa de Ghostscript 7.07 ou posterior</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Permite unha previsualización que use simulacións de tintas CMYK xenéricas en vez das cores RGB</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Des/Activar o tinteiro C (Cián)</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Des/Activar o tinteiro M (Maxenta)</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Des/Activar o tinteiro A (Amarelo)</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Des/Activar o tinteiro N (Negro)</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation>&amp;Texto anti-alias</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation>&amp;Gráficos Anti-alias</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Mostrar a Trans&amp;parencia</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>&amp;Mostrar CMYK</translation>
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
        <translation>&amp;A</translation>
    </message>
    <message>
        <source>&amp;K</source>
        <translation>&amp;N</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>&amp;UCR</translation>
    </message>
    <message>
        <source>A way of switching some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Unha das maneiras de evitar as manchas grises compostas
de cián, amarelo e maxenta usando negro no seu lugar.
A UCR afecta sobretodo ás imaxes que teñen tons neutros e/ou escuros
próximos do gris ou cinza. Se se usa pódese mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar para cada caso.
A UCR reduce a posibilidade de sobresaturación con tintas CY.</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Permite unha visión máis agradábel das Fontes TrueType, Fontes OpenType, EPS, PDF e
os gráficos de vectores na vista previa a costa dun ralentizamento da vista previa</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
O UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
O UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Advertencia</translation>
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
        <translation type="obsolete">Copiar Aquí</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Mover para Aquí</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Imaxe</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="obsolete">Ficheiro:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="obsolete">Texto vinculado</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Moldura de Texto</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="obsolete">Texto nunha traxectoria</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="obsolete">Parágrafos: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="obsolete">Palabras: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="obsolete">Caracteres: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Imprimir: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Activado</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="obsolete">Desactivado</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Modificar o Texto...</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">O Programa</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">falta!</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Copiar de</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Pegar</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Mostrar as &amp;Marxes</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Mostrar as M&amp;olduras</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Mostrar as &amp;Imaxes</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Mostrar a &amp;Grella</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Mostrar as G&amp;uías</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Mostrar a Grella &amp;Base</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">&amp;Axustar á Grella</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">A&amp;xustar ás Guías</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="obsolete">PPI orixinais: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="obsolete">PPI reais: </translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="obsolete">In&amp;formación</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="obsolete">Ir &amp;Procurar unha Imaxe...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">I&amp;maxe Visíbel</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">A&amp;ctualizar a Imaxe</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Modificar a Imaxe</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Axustar a Moldura á Imaxe</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Procurar Texto...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="obsolete">&amp;Adicionar Texto...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">&amp;Modificar Texto...</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">&amp;Inserir Texto de Exemplo</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">É un &amp;Marcador de PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">É unha A&amp;notación de PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">P&amp;ropiedades da Anotación</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">P&amp;ropiedades do Campo</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">Opcións de &amp;PDF</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">B&amp;loquear</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">Des&amp;loquear</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">Bloquear o Tama&amp;ño do Obxecto</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Desbloquear o Tama&amp;ño do Obxecto</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Enviar para o Por&amp;taretallos</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Enviar para a Ca&amp;pa</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">A&amp;grupar</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">Desa&amp;grupar</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="obsolete">Ní&amp;vel</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Enviar para o &amp;Fondo</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Traer para o &amp;Primeiro Plano</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Baixar</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">&amp;Subir</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">Moldura de &amp;Imaxe</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">Pol&amp;ígono</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Esquemas</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">Moldura de &amp;Texto</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">Curva &amp;Bezier</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="obsolete">Conve&amp;rtir en</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">Cor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">&amp;Limpar o Contido</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="obsolete">Mostrar as P&amp;ropiedades...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="obsolete">Agochar as P&amp;ropiedades...</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Realmente pretende eliminar todo o Texto?</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Imaxe</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Liña</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Poli-liña</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation>Páxina</translation>
    </message>
    <message>
        <source> of %1</source>
        <translation>de %1</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Resultado</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Procurar Resultados para: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Vista Previa</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Seleccionar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation>Imaxes</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>IrA</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Falta</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Procurar</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Camiño</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Páxina</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Imprimir</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Estado</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Propriedades do Polígono</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Es&amp;quinas:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotación:</translation>
    </message>
    <message>
        <source>Conve&amp;x Polygon</source>
        <translation type="obsolete">Polígono Conve&amp;xo</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Factor:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Número de esquinas do polígono</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Graus de rotación do polígono</translation>
    </message>
    <message>
        <source>Polygons will be convex rather than concave</source>
        <translation type="obsolete">O polígono será convexo en vez de cóncavo</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Polígono Modelo</translation>
    </message>
    <message>
        <source>Change the angles at which lines of the polygon join</source>
        <translation type="obsolete">Mudar os ángulos nos que se unen as liñas do polígono</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Aplicar &amp;Factor</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Aplicar Factor Convexo/Cóncavo para mudar a figura dos Polígonos</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Un valor negativo fará o polígono cóncavo (ou con forma de estrela),
un valor positivo farao convexo</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">&amp;Rotación:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished">&amp;Factor:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Preferencias</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Xeral</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Guías</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Tipografía</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Ferramentas</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Retallos</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Presentación</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>GUI</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Unidades</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">Puntos (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Millímetros (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Pulgadas (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Picas (p)</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="obsolete">Menús</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Camiños</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da Páxina</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Auto-gardado</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Disposición da Grella</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Cores da Grella</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Colocación</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subíndice</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superíndice</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Versalitas</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Outros</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Un túzaro pensa que me há de gañar co seixo que levo</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation>Outras Opcións</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Vista Previa</translation>
    </message>
    <message>
        <source>Small</source>
        <translation>Pequena</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Mediana</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation>Para axustar a presentación, arrastre a regra de abaixo co Control Corredeiro.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation type="obsolete">Ferramentas Externas</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation>Outros.</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation>Intérprete de Postscript</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Ferramenta de Procesamento de Imaxes</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation>Impresión</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation>Escolla a decoración das xanelas e a aparencia por omisión.
Scribus herda caisquer temas do KDE ou de Qt</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Tamaño de fonte por omisión para os menús e as xanelas</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Unidade de medida por omisión para a edición do documento</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Número de liñas que desprazará Scribus por cada movimento da roda do rato</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Radio da área na que Scribus lle permitirá agarrar os manipuladores</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Número de documentos editados recentemente que se mostrarán no menú de Ficheiro</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Directorio por omisión dos documentos</translation>
    </message>
    <message>
        <source>Default ICC profiles directory</source>
        <translation>Directorio por omisión dos perfís ICC</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Directorio por omisión dos guións do Scripter</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Tamaño da páxina por omisión, tanto un tamaño padrón como personalizado</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Orientación por omisión das páxinas dos documentos</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Anchura das páxinas dos documentos, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Altura das páxinas dos documentos, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Permitir disposición sinxela ou dobre</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation>Facer que a primeira páxina do documento sexa a esquerda</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe esquerda e o bordo da páxina.
Se se seleccionaron Páxinas Enfrentadas, este espazo de marxe pódese usar para lograr as marxes apropiadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe direita e o bordo da páxina.
Se se seleccionaron Páxinas Enfrentadas, este espazo de marxe pódese usar para lograr as marxes apropiadas para a encuadernación</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation>De estar seleccionado, Scribus garda unha copia de seguranza do seu ficheiro coa extensión .bak
cada vez que transcorre o período de tempo</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Período de tempo entre auto-gardados</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="obsolete">Distancia entre as liñas menores da grella</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="obsolete">Distancia entre as liñas principais da grella</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Distancia dentro da cal un obxecto se axustará ás guías</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="obsolete">Cor das liñas menores da grella</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="obsolete">Cor das liñas principais da grella</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="obsolete">Cor das liñas-guía que insira</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="obsolete">Colocar a grella detrás dos obxectos da páxina</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="obsolete">Colocar a grella por diante dos obxectos da páxina</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="obsolete">Deslocamento por cima da liña base da fonte nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="obsolete">Tamaño relativo dos superíndices comparados coa fonte normal</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="obsolete">Deslocamento por baixo da liña base da fonte normal nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="obsolete">Tamaño relativo dos subíndices comparados coa fonte normal</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="obsolete">Tamaño relativo das versalitas comparadas coa fonte normal</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">Percentaxe de incremento sobre o tamaño de fonte para o espaciamento entre liñas</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="obsolete">Propriedades das Molduras de Texto</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Propriedades das Molduras de Imaxe</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="obsolete">Propriedades do Deseño de Figuras</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="obsolete">Níveis de magnificación predefinidos</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="obsolete">Propriedades do Deseño de Liñas</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="obsolete">Propriedades do Deseño de Polígonos</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="obsolete">Fonte para as molduras de texto novas</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="obsolete">Tamaño da fonte para as novas molduras de texto</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="obsolete">Cor da fonte</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="obsolete">Número de columnas nunha moldura de texto</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="obsolete">Espaciamento entre as columnas de molduras de texto</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="obsolete">Exemplo da súa fonte</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">As molduras de imaxe permiten que as imaxes se amplíen e reduzan a calquer tamaño</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="obsolete">Ampliación ou redución horizontal das imaxes</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="obsolete">Ampliación ou redución vertical das imaxes</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="obsolete">Manter iguais as proporcións horizontal e vertical</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">As imaxes nas molduras de imaxe amplíanse ou redúcense ao tamaño da moldura</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">As imaxes ampliadas ou reducidas manteñen as proporcións orixinais automaticamente</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Cor de recheo para as molduras de imaxe</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="obsolete">Saturación da cor do recheo</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="obsolete">Cor da liña das figuras</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="obsolete">Saturación da cor das liñas</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="obsolete">Cor de recheo das figuras</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="obsolete">Estilo de liña das figuras</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="obsolete">Anchura da liña das figuras</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="obsolete">Redución mínima permitida</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="obsolete">Ampliación máxima permitida</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="obsolete">Paso de ampliación ou redución en cada operación de achegamento ou afastamento</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="obsolete">Cor das liñas</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="obsolete">Saturación da cor</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="obsolete">Estilo das liñas</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="obsolete">Anchura das liñas</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Número de esquinas dos polígonos</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Graus de rotación dos polígonos</translation>
    </message>
    <message>
        <source>Polygons will be convex rather than concave</source>
        <translation type="obsolete">Os polígonos serán convexos en vez de cóncavos</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Polígono de exemplo</translation>
    </message>
    <message>
        <source>Change the angles at which lines of the polygon join</source>
        <translation type="obsolete">Mudar os ángulos con que se unen as liñas do polígono</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation>Escoller o tamaño da vista previa na paleta do Porta-retallos</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="obsolete">Ao usar páxinas enfrentadas, mostrar as dúas páxinas lado a lado</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Cor do papel</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="obsolete">Cor das liñas das marxes</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Enmascarar a área por fora das marxes na cor das marxes</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="obsolete">Permitir as funcións de transparencia na exportación a PDF 1.4</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Definir o nível de ampliación por omisión</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation>Localización do intérprete de Ghostscript no sistema de ficheiros</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Texto antialias para a representación EPS e PDF na pantalla</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Gráficos antialias para a representación EPS e PDF</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation>Non mostrar os obxectos que fiquen por fora das marxes na páxina impresa ou no ficheiro exportado</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation>Salvar os contidos do porta-retallos depóis de cada modificación</translation>
    </message>
    <message>
        <source>Filesystem location for graphics editor</source>
        <translation>Localización do editor de gráficos no sistema de ficheiros</translation>
    </message>
    <message>
        <source> px</source>
        <translation type="obsolete"> px</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="obsolete">Grella de base</translation>
    </message>
    <message>
        <source>Turns on the basegrid</source>
        <translation type="obsolete">Activa a grella de base</translation>
    </message>
    <message>
        <source>Turns off the basegrid</source>
        <translation type="obsolete">Desactiva a grella de base</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>&amp;Tema:</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>Tamaño da &amp;fonte:</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="obsolete">Configuración do Rato</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>Salto da Rod&amp;a:</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="obsolete">Radio de A&amp;garre:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>Documentos &amp;Recentes:</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>&amp;Documentos:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>Perfís &amp;ICC:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>M&amp;udar...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>G&amp;uións:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>Mu&amp;dar...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Tama&amp;ño:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>A&amp;ltura:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Páxinas en&amp;frentadas</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>A &amp;Páxina Esquerda Primeiro</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Di&amp;reita:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>Acti&amp;vado</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>Interva&amp;lo:</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="obsolete">Espaciamentos M&amp;enores da Grella:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="obsolete">Espaciamentos P&amp;rincipais da Grella:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="obsolete">Distancia de A&amp;xuste das Guías:</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="obsolete">C&amp;or da Grella menor:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="obsolete">Cor da Grella &amp;principal:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="obsolete">Cor das Guías do &amp;Utilizador:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="obsolete">Cor da Grella de &amp;Base:</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="obsolete">No &amp;Fondo</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="obsolete">No Primeiro P&amp;lano</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="obsolete">&amp;Si</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="obsolete">&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="obsolete">&amp;Desprazamento:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="obsolete">&amp;Ampliación:</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="obsolete">D&amp;esprazamento:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="obsolete">&amp;Ampliación:</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="obsolete">A&amp;mpliación:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="obsolete">&amp;Grella de Base:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="obsolete">Dista&amp;ncia á Liña Base:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Espaciamento automático de &amp;Liña:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="obsolete">&amp;Fonte por omisión:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="obsolete">Tama&amp;ño por omisión:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="obsolete">C&amp;or do Texto:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="obsolete">Colu&amp;mnas:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Distancia:</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="obsolete">Cor da &amp;Liña:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="obsolete">&amp;Saturación:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="obsolete">Cor de &amp;Recheo:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="obsolete">Sa&amp;turación:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="obsolete">&amp;Tipo de Liña:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="obsolete">&amp;Anchura da Liña:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="obsolete">Mí&amp;nimo:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="obsolete">Má&amp;ximo:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="obsolete">&amp;Paso:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="obsolete">Ampliación &amp;Libre</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="obsolete">Ampliación &amp;Horizontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="obsolete">Ampliación &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">Ampliar ou reducir a Imaxe ao Tama&amp;ño da Moldura</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="obsolete">Manter a P&amp;roporción</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">Cor de R&amp;echeo:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Esquin&amp;as:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotación:</translation>
    </message>
    <message>
        <source>Conve&amp;x Polygon</source>
        <translation type="obsolete">Polígono conve&amp;xo</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Factor:</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation>Sa&amp;lvar os Contidos ao Modificar</translation>
    </message>
    <message>
        <source>Large</source>
        <translation>Grande</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="obsolete">Mostrar as Páxinas &amp;Lado a Lado</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="obsolete">Cores das Páxinas</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="obsolete">&amp;Fondo:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="obsolete">&amp;Marxes:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Mostrar a Área non &amp;imprimíbel na Cor das Marxes</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="obsolete">Usar as Funcións de &amp;Transparencia de PDF 1.4</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>&amp;Axustar o Tamaño de exhibición</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Nome do Executábel:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>&amp;Texto Antialias</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>&amp;Gráficos Antialias</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>Nome do &amp;Executábel:</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation>Axustar ás &amp;Marxes da Páxina</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Interior:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>E&amp;xterior:</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation>Applicar &amp;UCR</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation>&amp;Modelos:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Mud&amp;ar...</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executivo</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Libro de contabilidade</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Aplicar o &amp;Factor</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation>Directorio adicional para os Modelos de Documento</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Aplicar o Factor Convexo/Cóncavo para modificar a figura dos Polígonos</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Un valor negativo fará que o polígono sexa cóncavo (ou teña forma de estrela),
un valor positivo farao convexo</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
O UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
O UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Cor:</translation>
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
        <translation type="unfinished">&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>Ma&amp;tiz:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Saturación:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>Va&amp;lor:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Vermello:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>V&amp;erde:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>Az&amp;ul:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>Canal a&amp;lfa:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>Cores &amp;básicas</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Cores personalizadas</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>&amp;Definir Cores Personalizadas &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>&amp;Adicionar ás Cores Personalizadas</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Selección de cor</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Copiar ou Mover un Ficheiro</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Ler: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Escreber: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>&amp;Nome do Ficheiro:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>&amp;Tipo de Ficheiro:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Subir un directorio</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Todo (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Attributos</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Procurar &amp;en:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Para tras</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Crear un Cartafol Novo</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Vista en Lista</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Vista en Detalle</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Vista da Información do Ficheiro</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Ver os Contidos do Ficheiro</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Ler-escreber</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Só lectura</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Só escrita</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Inaccesíbel</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Vínculo simbólico ao Ficheiro</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Vínculo simbólico ao Directorio</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Vínculo simbólico a Especial</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Dir</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Especial</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>Muda&amp;r o Nome</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>R&amp;ecarregar</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Ordenar polo &amp;Nome</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Ordenar polo Tama&amp;ño</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Ordenar pola &amp;Data</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Sen ordenar</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Ordenar</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Mostrar os fic&amp;heiros ocultos</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>o ficheiro</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>o directorio</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>o vínculo simbólico</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Eliminar %1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Seguro que quer eliminar %1 &quot;%2&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Novo Cartafol 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Novo Cartafol</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Novo cartafol %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Procurar o Directorio</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Directorios</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Gardar</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erro</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Non se atopou o ficheiro.
Comprobe o camiño e o nome do ficheiro.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Todo (*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Directorio:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Fonte</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>Estilo de &amp;Fonte</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Tama&amp;ño</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Efectos</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Tac&amp;hado</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Subliñado</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Cor</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Exemplo</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>&amp;Guión</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Escoller unha Fonte</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Limpar</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Seleccionalo Todo</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Aliñar</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Personalizar...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Acerca de Qt&lt;/h3&gt;&lt;p&gt;Este programa emprega Qt, versión %1.&lt;/p&gt;&lt;p&gt;Qt é un conxunto de ferramentas en C++ para o desenvolvimento de Interfaces de usuario e de aplicacións.&lt;/p&gt;&lt;p&gt;Qt fornece portabilidade a partir dun código fonte único para MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, e todas as variantes comerciais principais de Unix.&lt;br&gt;Qt áchase tamén disponíbel para dispositivos embebidos.&lt;/p&gt;&lt;p&gt;Qt é un produto da Trolltech. Consulte en &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt;se precisa de máis información.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Initializing...</source>
        <translation>A inicializar...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Pretende realmente sobreescreber o Ficheiro:
%1 ?</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Referencia en liña</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="unfinished">Guións en Python (*.py);; Todo (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Salvar como</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>Imaxes SVG (*.svg *.svgz);;Todo (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>Imaxes SVG(*.svg);;Todo (*)</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">&amp;Guión</translation>
    </message>
    <message>
        <source>Oook! You&apos;re calling an object doesn&apos;t exist!</source>
        <translation type="obsolete">Carafio! Chamas por un obxecto que non existe!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to erase an object doesn&apos;t exist!</source>
        <translation type="obsolete">Carafio! Pretendes eliminar un obxecto que non existe!</translation>
    </message>
    <message>
        <source>Oook! An object you&apos;re trying to textflow doesn&apos;t exist!</source>
        <translation type="obsolete">Carafio! Un obxecto que pretendes desbordar de texto non existe!</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Salvar como Imaxe</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation>Erro ao escreber o(s) ficheiro(s) de saída.</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Erro ao escreber o(s) ficheiro(s) de saída.</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Exportouse con éxito.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>O ficheiro xa existe. Escrebemos por riba del?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>xa existe. Escrebemos por riba del?</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Si a todo</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Todos os Formatos Recoñecidos (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation>Antevisión das &amp;Fontes</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Inserir Especial</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Novo &amp;a partir dun Modelo...</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Novo</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Boletins</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Boletíns</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Catálogos</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Folletos</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Sinais</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Cartóns</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Papel timbrado</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Sobres de correo</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Cartóns Comerciais</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Calendarios</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Anuncios</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Etiquetas</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menús</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programas</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>Formulariios PDF</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>Presentacións PDF</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Revistas</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Pósters</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Anuncios</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Documentos de Texto</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Páxinas dobres</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Modelos propios</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Gardar como &amp;Imaxe...</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="obsolete">Imprimir a &amp;Vista Previa</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="obsolete">Im&amp;primir...</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>Importar &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Gardar como &amp;Modelo...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation>Manual do S&amp;cripter...</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished">Guións do &amp;Scribus</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished">&amp;Executar Guión...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished">Guións &amp;Recentes</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished">Mostrar a &amp;Consola</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Gardar Páxina como &amp;SVG...</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>Importar &amp;SVG...</translation>
    </message>
    <message>
        <source>Oook! Wrong arguments! Call: </source>
        <translation type="obsolete">Carafio! Os argumentos están errados! Chamada: </translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to load image into an object doesn&apos;t exist or isn&apos;t selected!</source>
        <translation type="obsolete">Carafio! Pretende carregar unha imaxe nun obxecto que non existe ou non está seleccionado!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to (un)lock an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Carafio! Pretende (des)bloquear un obxecto que non existe! Nen hai nengún seleccionado.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to query an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Carafio! Pretende interrogar a un obxecto que non existe. Nen hai nengún seleccionado.</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation>Vista Previa da Impresión</translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation>A importar texto</translation>
    </message>
    <message>
        <source>Importer</source>
        <translation type="obsolete">Importador</translation>
    </message>
    <message>
        <source>Choose the importer to use</source>
        <translation type="obsolete">Escolla o importador que se deba usar</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Todos os Formatos Coñecidos</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>Ficheiros HTML</translation>
    </message>
    <message>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Ficheiros de Texto</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Ficheiros de Valores Separados por Vírgulas (CSV)</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>Datos CSV</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>Cabezallo CSV</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albanés</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Basco</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Búlgaro</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation>Brasileiro</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Catalán</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Chinés</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>ChecoCheco</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Dinamarqués</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holandés</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Inglés</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Inglés (británico)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Alemán</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Finés</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francés</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation>Galego</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grego</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Húngaro</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonesio</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italiano</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Coreano</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Lituano</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Noruegués (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Noruegués (Nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Noruegués</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polonés</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Ruso</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Sueco</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Español</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Español (Latinoamérica)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Eslovaco</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Esloveno</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Serbio</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>A Fonte %1 non está ben, non se usará</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation>Modelo:</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Casos de Medios</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode ter unha cor cun nome baleiro.

erro de python.</translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou a cor</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode cambiar unha cor con nome baleiro.</translation>
    </message>
    <message>
        <source>Color not found in document</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou a cor no documento</translation>
    </message>
    <message>
        <source>Color not found in default colors</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou esta cor entre as cores por omisión</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode crear unha cor con nome baleiro.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode eliminar unha cor con nome baleiro.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode substituir unha cor con nome baleiro.

erro de python.</translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se deu aberto o documento

erro de python</translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se deu gardado o documento

erro de python</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation>Unidade fora de rango. Use unha das constantes scribus.UNIT_*.</translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>O destino non é unha moldura de imaxe.</translation>
    </message>
    <message>
        <source>Can&apos;t scale by 0%</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode modificar nun 0%

erro de python</translation>
    </message>
    <message>
        <source>Font not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou a Fonte</translation>
    </message>
    <message>
        <source>Can&apos;t render an empty sample</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode exibir unha mostra baleira</translation>
    </message>
    <message>
        <source>Can&apos;t save to a blank filename</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode salvar nun nome de ficheiro en branco</translation>
    </message>
    <message>
        <source>Can&apos;t have an empty layer name</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode ter un nome de capa baleiro</translation>
    </message>
    <message>
        <source>Layer not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou a capa</translation>
    </message>
    <message>
        <source>Can&apos;t remove the last layer</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se puido eliminar a última capa</translation>
    </message>
    <message>
        <source>Can&apos;t create layer without a name</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode crear unha capa sen nome</translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="obsolete">Xa existe un obxecto co nome solicitado</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter dous puntos como mínimo (catro valores)</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter un número par de valores</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter tres puntos como mínimo (seis valores)</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter catro puntos como mínimo (oito valores)</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe ter un múltiplo de seis valores

erro de python</translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou ese obxecto

erro de python</translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou ese estilo

erro de </translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se lle pode dar ese estilo a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se puido salvar como EPS

erro de python</translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="obsolete">O número de páxina está fora do rango

erro de python</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">o argumento non é unha lista: debe ser unha lista de valores float

erro de python</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">o argumento contén valores non numéricos: debe ser unha lista de valores float

erro de python</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation type="obsolete">Anchura de liña fora de limites; debe ser 0 &lt;= ancho_de_liña &lt;=12

erro de python</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Saturación da liña fora de limites; debe ser 0 &lt;= saturación &lt;= 100

erro de python</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Saturación do enchido fora de limites; debe ser 0 &lt;= saturación &lt;= 100

erro de python</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>O radio da esquina debe ser un número positivo.

erro de python.</translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou ese estilo de liña

erro de python</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber o tamaño da fonte dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber a fonte dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber o tamaño do texto dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber o número de columnas dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber o espaciamento entre liñas dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber a distancia entre columnas dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode saber o texto dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar texto a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode inserir texto nunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Insert index out of bounds</source>
        <comment>python error</comment>
        <translation type="obsolete">Índice de inserción fora de limites

erro de python</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Aliñamento fora de rango. Use unha das constantes scribus.ALIGN*.

erro de python.</translation>
    </message>
    <message>
        <source>Can&apos;t set text alignment on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar un aliñamento a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512</source>
        <comment>python error</comment>
        <translation type="obsolete">Tamaño da fonte fora de limites - debe ser 1&lt;= tamaño &lt;= 512

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t set font size on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar un tamaño de fonte a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t set font on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar unha fonte a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1</source>
        <comment>python error</comment>
        <translation type="obsolete">Espaciamento de liña fora de limites - debe ser &gt;= 0.1

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t line spacing on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non pode haber espaciamento entre liñas nunha moldura que non sexa de texto</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive</source>
        <comment>python error</comment>
        <translation type="obsolete">Distancia entre columnas fora de limites - debe ser positiva

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t column gap on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non pode haber distancia entre columnas nunha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1</source>
        <comment>python error</comment>
        <translation type="obsolete">Número de columnas fora de limites - debe ser &gt; 1

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t number of columns on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se poden numerar columnas nunha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Índice da selección fora de limites

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode seleccionar texto dunha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t delete text from a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode limpar o texto dunha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t set text fill on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar un enchido a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t set text stroke on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar un trazo de texto a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t set text shade on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar unha saturación de texto a unha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can only link text frames</source>
        <comment>python error</comment>
        <translation type="obsolete">Só se poden vincular molduras de texto

erro de python</translation>
    </message>
    <message>
        <source>Target frame must be empty</source>
        <comment>python error</comment>
        <translation type="obsolete">A moldura de destino debe estar baleira

erro de python</translation>
    </message>
    <message>
        <source>Target frame links to another frame</source>
        <comment>python error</comment>
        <translation type="obsolete">A moldura de destino está vinculada a outra moldura 

erro de python</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame</source>
        <comment>python error</comment>
        <translation type="obsolete">A moldura de destino ten vinculación desde outra moldura

erro de python</translation>
    </message>
    <message>
        <source>Source and target are the same object</source>
        <comment>python error</comment>
        <translation type="obsolete">A fonte e o destino son o mesmo obxecto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t unlink a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode desvincular unha moldura que non sexa de texto.

erro de python</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished">Este obxecto non é unha moldura de texto vinculada, non se pode desvincular.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="unfinished">Este obxecto é a última moldura dunha serie, non se pode desvincular.
Desvincule no seu lugar a moldura anterior.

erro de python.</translation>
    </message>
    <message>
        <source>Can&apos;t convert a non-text frame to outlines</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode converter unha moldura que non sexa de texto en siluetas

erro de python</translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation type="obsolete">Tentouse asignar progreso &gt; máximo progreso</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="unfinished">&amp;Acerca de Script...</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="unfinished">Acerca de Script</translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>Importar do &amp;Draw de OpenOffice.org...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation>OpenOffice.org Draw (*.sxd);;Todo (*)</translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation>Vínculos externos</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>Documentos do Writer de OpenOffice.org</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Filtros de texto</translation>
    </message>
    <message>
        <source>Scribus Python interface module
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>This module is the Python interface for Scribus. It provides functions
<byte value="x9"/><byte value="x9"/>to control scribus and to manipulate objects on the canvas. Each
<byte value="x9"/><byte value="x9"/>function is documented individually below.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>A few things are common across most of the interface.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>Most functions operate on frames. Frames are identified by their name,
<byte value="x9"/><byte value="x9"/>a string - they are not real Python objects. Many functions take an
<byte value="x9"/><byte value="x9"/>optional (non-keyword) parameter, a frame name.
<byte value="x9"/><byte value="x9"/>Many exceptions are also common across most functions. These are
<byte value="x9"/><byte value="x9"/>not currently documented in the docstring for each function.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>    - Many functions will raise a NoDocOpenError if you try to use them
<byte value="x9"/><byte value="x9"/>      without a document to operate on.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>    - If you do not pass a frame name to a function that requires one,
<byte value="x9"/><byte value="x9"/>      the function will use the currently selected frame, if any, or
<byte value="x9"/><byte value="x9"/>      raise a NoValidObjectError if it can&apos;t find anything to operate
<byte value="x9"/><byte value="x9"/>      on.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>    - Many functions will raise WrongFrameTypeError if you try to use them
<byte value="x9"/><byte value="x9"/>      on a frame type that they do not make sense with. For example, setting
<byte value="x9"/><byte value="x9"/>      the text colour on a graphics frame doesn&apos;t make sense, and will result
<byte value="x9"/><byte value="x9"/>      in this exception being raised.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>    - Errors resulting from calls to the underlying Python API will be
<byte value="x9"/><byte value="x9"/>      passed through unaltered. As such, the list of exceptions thrown by
<byte value="x9"/><byte value="x9"/>      any function as provided here and in its docstring is incomplete.
<byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>Details of what exceptions each function may throw are provided on the
<byte value="x9"/><byte value="x9"/>function&apos;s documentation.
<byte value="x9"/><byte value="x9"/></source>
        <translation type="obsolete">Módulo de interface de Python para Scribus
    Este módulo é a interface de Python para Scribus. Fornece funcións
  para controlar Scribus e para manipular obxectos na tela. Cada
  función documéntase individualmente máis abaixo.
    Algunhas cousas son comúns en practicamente toda a interface.
    A maioría das funcións operan sobre molduras. As molduras identifícanse polo seu nome,
  que é unha cadea (non son obxectos reais de Python). A maioría das funcións levan un
  parámetro opcional (que non é unha palabra-chave), un nome de moldura.
  Moitas excepcións son tamén comúns para a maioría das funcións. Estas non se
  mencionan actualmente no docstring de cada función.
        Moitas funcións provocarán un NoDocOpenError se tenta utilizalas
        sen fornecer un documento sobre o que operar.
        - Se non lle pasa un nome de moldura a unha función que a precisar,
        a función usará a moldura seleccionada nese momento, de habela, ou
        provocará un NoValidObjectError se non pode atopar nada sobre o que operar.
        - Moitas funcións provocarán un WrongFrameTypeError se tenta utilizalas
        sobre un tipo de moldura que non teña sentido. Por exemplo, asignarlle a
        cor de texto a unha moldura de gráficos non ten sentido e resultará
        en que se provoque unha excepción.
        - Os erros que resulten en chamadas á API de Python subxacente pasaranse
        sen alterar. Como tal, a lista de excepcións enviadas por calquer función, tal e
        como se fornecen aquí e no seu docstring, é incompleta.
    Detalles sobre cais son as excepcións que pode enviar cada función fornécense
    na documentación da función.</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Non se atopou a cor - erro de python

erro de python</translation>
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
        <translation type="obsolete">Módulo da interface de Python para Scribus

Este módulo e&apos;a interface de Python para Scribus. Fornece funcións para
controlar Scribus e para manipular obxectos da tela. Cada función documéntase
individualmente máis abaixo.

Certas cousas son comúns a toda a interface.

A maioría das funcións operan sobre molduras. As molduras identifícanse polo seu noome,
unha secuencia - non son obxectos reais de Python. Moitas funcións levan un
parámetro opcional (non palabra-chave), o nome da moldura.
Moitas excepcións son así mesmo comuns para a maioría das funcións. Estas
non se documentan actualmente no docstring para cada función.
- Moitas funcións provocarán un NoDocOpenError se tenta usalas sen un documento sobre
o que operaren.
- Se non lle pasa o nome dunha moldura a unha función que o requira, a función usará a moldura
seleccionada nese momento, de habela, ou provocará un NoValidObjectError se non dá atopado
nada sobre o que operar.
- Moitas funcións provocarán un WrongFrameTypeError se tenta usalas nun tipo de moldura no que
non teñan sentido. Por exemplo, asignar a cor do texto nunha moldura de imaxes non ten sentido
e provocará esta excepción.
- Os erros que proveñan de chamadas á API de Python subxacente pasaranse sen alteracións.
Como tais, a lista de excepcións fornecida aquí e no seu docstring é incompleta.

Os detalles sobre as excepcións que pode provocar cada función fornécense na
documentación de cada función.</translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Configuración personalizada (opcional): 

extensión de abreviacións:</translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Configuración padrón:

extensión de abreviacións:</translation>
    </message>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>Abre&amp;viacións...</translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>A procesar as Abreviacións. Agarde un bocado...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Procesamento das Abreviacións. Feito.</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Afrikaans</translation>
    </message>
    <message>
        <source>Portugese (Brazilian)</source>
        <translation type="obsolete">Portugués (Brasileiro)</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation>Turco</translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation>Ucraíno</translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation>Galés</translation>
    </message>
    <message>
        <source>Specified item not an image frame</source>
        <comment>python error</comment>
        <translation type="obsolete">O elemento indicado non é unha moldura de imaxe

erro de python</translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation>O nome de ficheiro debe ser unha cadea.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation>Non se pode eliminar a configuración de tipo de imaxe.

erro de python.</translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation>O tipo de imaxe debe ser unha cadea.

erro de python.</translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation>O atributo &apos;allTypes&apos; é de SÓ-LECTURA

erro de python</translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation>Fallou a exportación da imaxe

erro de python</translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation type="unfinished">Imposíbel salvar o pixmap

erro do guión</translation>
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
        <translation type="unfinished">Páxina</translation>
    </message>
    <message>
        <source>Template </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Personalizado</translation>
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
        <translation type="unfinished">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Proceed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Puntos (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">Pulgadas (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">Picas (p)</translation>
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
        <translation type="unfinished">&amp;Substituir</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
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
        <translation>Limpar</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Seleccionalo Todo</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Menú do Sistema</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Enrolar</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Redimensionar</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimizar</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maximizar</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Restaurar</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Mover</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Tamaño</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Mi&amp;nimizar</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximizar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Manter por &amp;Riba das demáis</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimizar</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Restaurar para baixo</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>Enr&amp;olar</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>De&amp;senrolar</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation>Configuración do Documento</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Permitir a disposición en páxina simple ou dobre</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Que a primeira páxina do documento sexa a esquerda</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe esquerda e o bordo da páxina
Se se seleccionan Páxinas Enfrentadas, pódese usar este espazo de marxe para a obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe direita e o bordo da páxina
Se se seleccionan Páxinas Enfrentadas, pódese usar este espazo de marxe para a obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Direita:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Páxinas en&amp;frentadas</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Primeiro a &amp;Páxina Esquerda</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Interior:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation>&amp;Exterior:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da Páxina</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Tamaño:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Orientación:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Anchura:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Altura:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>Número da Pr&amp;imeira Páxina:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">Tama&amp;ño:</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished">Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished">Tabloide</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">A&amp;ltura:</translation>
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
        <translation type="unfinished">Auto-gardado</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished">min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished">Interva&amp;lo:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Documento</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Guías</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">Cor:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished">Mostrar a Área non &amp;imprimíbel na Cor das Marxes</translation>
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
        <translation type="unfinished">Presentación</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished">Tipografía</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Ferramentas</translation>
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
        <translation type="unfinished">Cor do papel</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished">Enmascarar a área por fora das marxes na cor das marxes</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style of current paragraph</source>
        <translation>Estilo do parágrafo actual</translation>
    </message>
    <message>
        <source>Style Settings</source>
        <translation>Configuración do Estilo</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Cor de recheo do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Saturación da cor de recheo do texto</translation>
    </message>
    <message>
        <source>Fill Color Settings</source>
        <translation>Configuración da Cor de Recheo</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Cor do trazo do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Saturación da cor do trazo do texto</translation>
    </message>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Configuración da Cor do Trazo</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation>Fonte do texto seleccionado</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Anchura de ampliación dos caracteres</translation>
    </message>
    <message>
        <source>Font Settings</source>
        <translation>Configuración da Fonte</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Kerning:</source>
        <translation>Kerning:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Kerning Manual</translation>
    </message>
    <message>
        <source>Character Settings</source>
        <translation>Configuración dos Caracteres</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation>Copia #%1 de</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
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
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>A procurar as Fontes</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">Non hai Fontes Postscript no seu Sistema</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation>A sair agora</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Erro Fatal</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Guión intelixente</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Aliñar á Esquerda</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Aliñar á Direita</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Centrar</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Inserir o Número de Páxina</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Ligar o Texto á Traxectoria</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Mostrar as Capas</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="obsolete">Javascripts...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Desfacer</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Mostrar a Paleta de Páxinas</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="obsolete">Bloquear/Desbloquear</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="obsolete">Espazo non Rompedor</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>Preferencias de Lectura</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation>Colocador de Hífens de Init</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>A preparar os Atallos</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>A ler os Retallos</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation>A iniciar as Extensións</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">Novo</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Abrir...</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Fechar</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Gardar</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Gardar como...</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Coller Texto/Imaxe...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Información do Documento...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Configuración do Documento...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Imprimir...</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Sair</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Cortar</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Copiar</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Pegar</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Limpar</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Seleccionalo todo</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Cores...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Estilos...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Modelos...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Fontes...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="obsolete">Seleccionar unha Nova Fonte</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Duplicar</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Duplicar Múltiple</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Eliminar</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Agrupar</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="obsolete">Desagrupar</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Bloquear</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Enviar para o Fondo</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Traer para a Frente</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">Baixar</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">Subir</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Distribuir/Aliñar...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Inserir...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Eliminar...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Mover...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Applicar un Modelo...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Xerir as Guías...</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Axustar na Xanela</translation>
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
        <translation type="obsolete">Miniaturas</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Esconder as Marxes</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Esconder as Molduras</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Esconder as Imaxes</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Mostrar a Grella</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Axustar á Grella</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Ferramentas</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Propriedades</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Contorno</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Retallos</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Xerir as Imaxes</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Colocar guións no Texto</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">Acerca do Scribus</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>Acerca do Qt</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Axuda en liña...</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Estilo</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Subliñado</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Tachado</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Versalita</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superíndice</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subíndice</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Contorno</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Posición X:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Posición Y:</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Preparado</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Ir por unha Imaxe...</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Cor</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Invertir</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Ir por Texto...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Fonte</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Desbloquear</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todos (*)</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>A carregar...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Todos os Formatos Coñecidos</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Ficheiros de Texto (*.txt);;Todos(*)</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">Non foi posíbel escreber no Ficheiro: 
%1</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Está ben</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *scd.gz);;Todos (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>A salvar...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>A imprimir...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Fallou a impresión!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Manual do Scribus</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">Faltan os Programas seguintes:</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todos</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">Ficheiros EPS (*.eps);;Todos (*)</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation>A carregar:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>A axustar as Cores</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Inglés</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Alemán</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Español</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italiano</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francés</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Ruso</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Dinamarqués</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Eslovaco</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Húngaro</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Checo</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holandés</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portugués</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation>Ucraniano</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polonés</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grego</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Catalán</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Finés</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation>Irlandés</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Scribus estragouse</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus estragouse debido ao Sinal #%1</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="obsolete">Crear un Documento novo</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="obsolete">Abrir un Documento</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="obsolete">Gardar o Documento actual</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="obsolete">Fechar o Documento actual</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="obsolete">Imprimir o Documento actual</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="obsolete">Gardar o Documento actual como PDF</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Editar</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>E&amp;lemento</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Páxina</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Vista</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Ferramentas</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>&amp;Xanelas</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Axuda</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="obsolete">Mostrar a Grella Base</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="obsolete">Esconder a Grella Base</translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation>Algúns Obxectos están bloqueados.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="obsolete">Bloquealo todo</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="obsolete">Desbloquealo todo</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
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
        <source>&amp;Settings</source>
        <translation type="obsolete">&amp;Configuración</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Lituano</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Sueco</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Esloveno</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="obsolete">Xestión da &amp;Cor...</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Abrir...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>Abrir &amp;Recente</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>&amp;Volver ao Gardado</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Recoller para Saí&amp;da...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="obsolete">&amp;Ir buscar Texto/Imaxe...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>Engadir &amp;Texto...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>Gardar o &amp;Texto...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Gardar a Páxina como &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Gardar como P&amp;DF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Exportar</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>&amp;Configuración do Documento...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>&amp;Imprimir...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Sair</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Seleccionalo &amp;Todo</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Procurar/Substituir...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>C&amp;ores...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>Estilos de &amp;Parágrafo...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>Estilos de &amp;Liña...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation>&amp;Modelos...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation>&amp;Javascripts...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>Duplicar &amp;Múltiple</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Agrupar</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>Desagr&amp;upar</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">B&amp;loquear</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Enviar para o &amp;Fondo</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Traer para a &amp;Frente</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Baixar</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>Subi&amp;r</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation>Distribuir/&amp;Aliñar...</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>&amp;Ligar o Texto á Traxectoria</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>&amp;Desligar o Texto da Traxectoria</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>&amp;Combinar Polígonos</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>Partir &amp;Polígonos</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation>C&amp;onvertir en Siluetas</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Inserir...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>&amp;Eliminar...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Mover...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation>&amp;Aplicar un Modelo...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="obsolete">Encai&amp;xar na Xanela</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation>&amp;100%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation>&amp;Miniaturas</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>Mostrar a &amp;Grella</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Axus&amp;tar ás Guías</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>Mostar a Grella de &amp;Base</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Propriedades</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation>&amp;Esquema</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>Portaretallo&amp;s</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>&amp;Capas</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation>Paleta de P&amp;áxinas</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Marcadores</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>&amp;Xerir as Imaxes</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>Colocar &amp;guións no Texto</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>Su&amp;xestións</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>Ferramentas para P&amp;DF</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="obsolete">Suxestións</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="obsolete">&amp;Fontes...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="obsolete">&amp;Hyphenator...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="obsolete">A&amp;tallos do teclado...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>&amp;Acerca do Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>Acerca do &amp;Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>&amp;Manual do Scribus...</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>Est&amp;ilo</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>&amp;Esquerda</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Centro</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>&amp;Direita</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>&amp;Xustificado</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>&amp;Forzado</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Outro...</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Cascada</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Mosaico</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Cor</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation>&amp;Invertir</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Ir Buscart Texto...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Fonte</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Tama&amp;ño</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Efectos</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Aliñamento</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Saturación</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabuladores...</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">Desb&amp;loquear</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Mostrar as &amp;Imaxes</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>Mostrar as Ma&amp;rxes</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>Mostrar as Mo&amp;lduras</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>Mostrar as G&amp;uías</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation>Ghostscript : Non pode usar Imaxes EPS</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="obsolete">Importar &amp;Páxina(s)...</translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="obsolete">100%</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>A&amp;xustar á Grella</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>P&amp;referencias...</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>A importar Páxinas...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importar Páxina(s)</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation>&lt;p&gt;Pretende importar máis páxinas das que existen no documento actual a contar desde a páxina activa.&lt;/p&gt;Escolla de entre o seguinte:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Crear&lt;/b&gt; as páxinas que faltan&lt;/li&gt;&lt;li&gt;&lt;b&gt;Importar&lt;/b&gt; páxinas até a última páxina &lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancelar&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Crear</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Importar</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Importación rematada</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Non se atopou nada que importar</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation>A procurar os Perfís ICC</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>Xerir as &amp;Guías...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>Tama&amp;ño:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Saturación:</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation>&amp;Información do Documento...</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="obsolete">&amp;Desfacer Eliminar Obxecto</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="obsolete">&amp;Desfacer Mover Obxecto</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="obsolete">&amp;Desfacer Modificar Obxecto</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="obsolete">&amp;Modificar a Forma</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Sistema de Fontes Inicializado</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="obsolete">O Ficheiro %1 non está no formato do Scribus</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Afrikaans</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation>Portugués (BR)</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished">Editor</translation>
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
        <translation type="unfinished">&amp;Refacer</translation>
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
        <translation type="unfinished">&amp;Subliñado</translation>
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
        <translation type="unfinished">&amp;Modificar a Forma...</translation>
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
        <translation type="unfinished">&amp;Inserir Especial</translation>
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
        <translation type="unfinished">OpenOffice.org Draw (*.sxd);;Todo (*)</translation>
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
        <translation type="unfinished">&amp;Cancelar</translation>
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
        <translation type="unfinished">Búlgaro</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="unfinished">O Programa</translation>
    </message>
    <message>
        <source>is already running!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">Información</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="unfinished">falta!</translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Capa</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Todas</translation>
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
        <translation type="unfinished">Copiar Aquí</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished">Mover para Aquí</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Cancelar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">&amp;Pegar</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="unfinished">Imaxe</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished">Ficheiro:</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished">PPI orixinais: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished">PPI reais: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished">Texto vinculado</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished">Moldura de Texto</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished">Texto nunha traxectoria</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished">Parágrafos: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished">Palabras: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished">Caracteres: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="unfinished">Imprimir: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">Activado</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">Desactivado</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished">In&amp;formación</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished">I&amp;maxe Visíbel</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="unfinished">A&amp;ctualizar a Imaxe</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="unfinished">&amp;Modificar a Imaxe</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="unfinished">&amp;Axustar a Moldura á Imaxe</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="unfinished">&amp;Modificar Texto...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished">É un &amp;Marcador de PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished">É unha A&amp;notación de PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished">P&amp;ropiedades da Anotación</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished">P&amp;ropiedades do Campo</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">Opcións de &amp;PDF</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished">Modificar o Texto...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="unfinished">B&amp;loquear</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="unfinished">Bloquear o Tama&amp;ño do Obxecto</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="unfinished">Desbloquear o Tama&amp;ño do Obxecto</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished">Enviar para o Por&amp;taretallos</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">Enviar para a Ca&amp;pa</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="unfinished">&amp;Inserir Texto de Exemplo</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="unfinished">Desa&amp;grupar</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished">Ní&amp;vel</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="unfinished">Enviar para o &amp;Fondo</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished">&amp;Baixar</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="unfinished">Moldura de &amp;Imaxe</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="unfinished">Pol&amp;ígono</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="unfinished">&amp;Esquemas</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished">Moldura de &amp;Texto</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished">Curva &amp;Bezier</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished">Conve&amp;rtir en</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Eliminar</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="unfinished">&amp;Limpar o Contido</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished">Copiar de</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Documento:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>foi modificado desde a última vez que se salvou.</translation>
    </message>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation>Dá igual, sa&amp;ir</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation>Dá igual, fec&amp;har</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation>&amp;Gardar Agora</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="obsolete">Guións do &amp;Scribus</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="obsolete">&amp;Executar Guión...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="obsolete">Guións &amp;Recentes</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Mostrar a &amp;Consola</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="obsolete">&amp;Acerca de Script...</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">&amp;Guión</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Abrir</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Guións en Python (*.py);; Todo (*)</translation>
    </message>
    <message>
        <source>Script error</source>
        <translation type="obsolete">Erro de Guión</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="obsolete">Se se trataba dun guión oficial, teña a bondade de informar en &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="obsolete">Esta mensaxe enviouse tamén para a área de transferencia. Empregue Ctrl+V para pegala no xestor de erros.</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Agochar a &amp;Consola</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="obsolete">Acerca de Script</translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>Scribus - Scripter Preferences</source>
        <translation type="obsolete">Scribus - Preferencias do Guionista</translation>
    </message>
    <message>
        <source>Enable Scripter Extensions</source>
        <translation type="obsolete">Habilitar as Extensións do Guionista</translation>
    </message>
    <message>
        <source>Turn on extension scripts and macros</source>
        <translation type="obsolete">Activar os guións de extensión e as macros</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;Enabling scripter extensions turns on additional scripter functionality including Python macros and the option of loading a Python script at start-up. Turning on this option unlocks the &lt;tt&gt;Load Extension Script&lt;/tt&gt; item in the Script menu.&lt;/p&gt;
&lt;p&gt;
Only scripts written to be run as extension scripts should be used with &lt;tt&gt;Load Extension Script&lt;/tt&gt; or as start-up scripts. See the scripter documentation for more details.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;Habilitar as extensións do guionista activa a funcionalidade adicional do guionista, que inclué macros en Python e a opción de carregar un guión en Python ao inicio. Activar esta opción desbloquea o elemento &lt;tt&gt;Carregar Guión de Extensión&lt;/tt&gt; do menú Guión.&lt;/p&gt;
&lt;p&gt;
Só se deben usar con &lt;tt&gt;Carregar un Guión de Extensión&lt;/tt&gt; ou como guións de inicio os guións escritos para ser executados como guións de extensión. Consulte a documentación do guionista para máis información.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Use a Startup Script</source>
        <translation type="obsolete">Usar un Guión de Inicio</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;If &lt;tt&gt;Use a Startup Script&lt;/tt&gt; is checked, Scribus will load the script file specified here as an extension script at start-up. It is important that the script be written as an extension script, as if not written carefully it can potentially cause problems.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Use a Startup Script&lt;/tt&gt; will be disabled if scripter extensions are off, as extension scripts cannot be loaded without scripter extensions enabled.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;Se selecciona &lt;tt&gt;Usar un Guión de Inicio&lt;/tt&gt;, Scribus carregará o ficheiro de guión especificado aquí como guión de extensión no inicio. É importante que o guión estexa escrito como guión de extensión, xa que de non estar escrito con coidado podería causar problemas.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Desactivarase &lt;tt&gt;Usar un Guión de Inicio&lt;/tt&gt; se están desactivadas as extensións do guionista, xa que os guións de extensión non se poden carregar sen ter activadas as extensións do guionista.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="obsolete">Procurar...</translation>
    </message>
    <message>
        <source>Browse for a new script file</source>
        <translation type="obsolete">Procurar un ficheiro de guión novo</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Browse for a new script file&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Procurar un ficheiro de guión novo&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>What script file to load at start-up</source>
        <translation type="obsolete">Que ficheiro de guión carregar no inicio</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;The file containing the Python script to run as an extension script at start-up.&lt;/p&gt;
&lt;p&gt;Note that when this script is run, Scribus has not completely started up and the workspace does not yet exist.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;O ficheiro que contén o guión en Python que se executará como guión de extensión no inicio.&lt;/p&gt;
&lt;p&gt;Observe que cando se executa este guión, Scribus ainda non se iniciou de todo e a área de traballo ainda non existe.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Script File:</source>
        <translation type="obsolete">Ficheiro do Guión:</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Close without saving changes</source>
        <translation type="obsolete">Fechar sen salvar as modificacións</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;Dacordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+D</translation>
    </message>
    <message>
        <source>Save changes and close</source>
        <translation type="obsolete">Salvar as modificacións e fechar</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Opcións avanzadas</translation>
    </message>
    <message>
        <source>Import All Names at Startup</source>
        <translation type="obsolete">Importar Todos os Nomes no Inicio</translation>
    </message>
    <message>
        <source>Run &apos;from scribus import *&apos; in the script console at start-up</source>
        <translation type="obsolete">Executar &apos;do importador de Scribus *&apos; na consola de guións no inicio</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Import All Names at Startup&lt;/tt&gt; is an advanced option. You should probably leave it checked unless you have read the documentation and know what you are doing.&lt;/p&gt;
&lt;p&gt;Unchecking this option will prevent the scripter from running its usual &lt;tt&gt;from scribus import *&lt;/tt&gt; command when it initializes the main interpreter (used for the script console and extension scripts) at start-up.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Importar Todos os Nomes no Inicio&lt;/tt&gt; é unha opción avanzada. O máis seguro é que deba deixala marcada, a non ser que xa lese a documentación e saiba o que anda a facer.&lt;/p&gt;
&lt;p&gt;Des-seleccionar esta opción evitará que o guionista corra o seu comando normal &lt;tt&gt;do importador de Scribus *&lt;/tt&gt; ao inicializar o interpretador principal (usado pola consola de guións e os guións de extensión) no inicio.&lt;/p&gt;
&lt;p&gt;Esta opción non é efectiva até que se reinicie o Scribusf.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Enable Legacy Name Aliases</source>
        <translation type="obsolete">Permitir Alias de Nome anticuados</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Enable the use of OldStyle function names&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Permitir o nome de nomes de función OldStyle&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Enable Legacy Aliases&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;If checked, this option will cause the scripter to create a large number of function and constant name aliases for 1.2.0 script compatibility. It defaults to checked.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Permitir Alias anticuados&lt;/tt&gt; é unha opción avanzada. O máis probábel é que a deba deixar tal e como está.&lt;/p&gt;
&lt;p&gt;Se a selecciona, esta opción fará que o guionista cre un grande número de alias de nome de funcións e constantes para compatibilidade cos guións da versión 1.2.0. Por omisión, está seleccionada.&lt;/p&gt;
&lt;p&gt;Esta opción non é efectiva até que se reinicie o Scribus.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Use Fake Stdin</source>
        <translation type="obsolete">Usar Stdin Falso</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace sys.stdin with a fake file to prevent Scribus hanging when a script tries to read from stdin.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Substitúa sys.stdin cun ficheiro falso para evitar que Scribus se colgue cando un guión tenta ler do stdin.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Use Fake Stdin&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;Normally, scribus will provide Python with a fake file object for &lt;tt&gt;sys.stdin&lt;/tt&gt;, so that reads from stdin always return an empty string. If the real &lt;tt&gt;sys.stdin&lt;/tt&gt; is left in place, scripts that try to read from it will block - and in turn block scribus&apos;s execution, making the app appear to hang - until input arrives on stdin. It&apos;s unusual for GUI apps to expect anything on stdin, so mostly users will think scribus has crashed.&lt;/p&gt;
&lt;p&gt;You can disable this option if you want to accept input on stdin. Generally you should use &lt;tt&gt;os.popen&lt;/tt&gt; to make a pipe instead, or use some other input mechanism, but this option is here just in case.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Usar Stdin Falso&lt;/tt&gt; é unha opción avanzada. O máis probábel é que a deba deixar como está.&lt;/p&gt;
&lt;p&gt;Normalmente, Scribus fornecerá a Python un obxecto de ficheiro falso para &lt;tt&gt;sys.stdin&lt;/tt&gt; para que as lecturas desde stdin devolvan sempre unha cadea vacía. Se se deixa o verdadeiro &lt;tt&gt;sys.stdin&lt;/tt&gt; no seu sitio, os guiósn que tenten ler del bloquearan-se - e bloquearán á súa vez Scribus, facendo que a aplicación pareza colgar-se - até que chegue entrada a stdin. Non é normal que as aplicacións GUI esperen algo do stdin, de maneira que a maioría dos usuarios pensarán que Scribus caeu.
&lt;p&gt;Pode desabilitar esta opción se quer aceptar entrada desde stdin. Normalmente debería utilizar &lt;tt&gt;os.popen&lt;/tt&gt; para facer unha tubaria ou usar outro mecanismo de entrada, pero esta opción está aquí por se as moscas.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Mostrar a Ante-visión das Páxinas</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation>Mostrar os Nomes dos Modelos</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Procurar/Substituir</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Procurar:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Estilo de Parágrafo</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Fonte</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Efectos da Fonte</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Cor de Enchido</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Saturación do Enchido</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Cor do Trazo</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Saturación do Trazo</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Esquerda</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centro</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Direita</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Bloco</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Forzado</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengún</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Substituir con:</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Rematou a pesquisa</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>A Palabra &amp;Inteira</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>&amp;Ignorar maiúsculas/minúsculas</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Procurar</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Substituir</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>Substituílo &amp;Todo</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation>Distribuir as Páxinas</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation>Modelos Disponíbeis:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Páxinas do Documento:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation>Páxinas Enfrentadas</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation>A Páxina Esquerda primeiro</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation>Arrastre Páxinas ou Modelos para o Lixo para así eliminalos.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation>Velaquí os seus Modelos; para crear unha Páxina nova
arrastre un Modelo para a Vista de Páxina de embaixo.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation>Vista de todas as páxinas do documento.</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Seleccionar Campos</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Campos Disponíbeis</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation>Campos Seleccionados</translation>
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
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Outro...</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Ocultar</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Ocultar:</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Sen  Estilo</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Modificación dos Estilos</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Estilo Novo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Do you really want do delete this Style?</source>
        <translation type="obsolete">Seguro que o que quer é eliminar este Estilo?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todo (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todo (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Salvar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Pretende realmente eliminar este Estilo?</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation></translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Parágrafo Actual:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Palabras: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Caracteres: </translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Totais:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Parágrafos: </translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation>De verdade que lle apetece perder todas as Modificacións?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Realmente quer eliminar todo o Texto?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Ficheiros de Texto (*.txt);;Todo(*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Salvar como</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Desexa gravar as modificacións?</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Inserir Especial</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Recarregar o Texto desde unha Moldura</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Gardar nun Ficheiro...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>C&amp;arregar desde un Ficheiro...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>Salvar o &amp;Documento</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>Act&amp;ualizar a Moldura de Texto e Sair</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Sair s&amp;en Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Cor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation>&amp;Inserir Especial...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>Act&amp;ualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Seleccion&amp;alo Todo</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>&amp;Modificar os Estilos...</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation>Carregar Texto desde un Ficheiro</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation>Gravar o Texto nun Ficheiro</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation>Actualizar a Moldura de Texto e Sair</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation>Sair Sen Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation>Recarregar o Texto desde unha Moldura</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation>Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Procurar/Substituir...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>Vista Previa das &amp;Fontes...</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Fondo...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>&amp;Mostrar Fonte...</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Configuración</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation>Procurar/Substituir</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">Vista Previa das &amp;Fontes</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation>Limpar todo o Texto</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>Selección de texto &amp;intelixente</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation>Subliñado</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Versalitas</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subíndice</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superíndice</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="obsolete">Contorno</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation>Tachado</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Opcións do Importador do Writer de OpenOffice.org</translation>
    </message>
    <message>
        <source>Update paragraph styles</source>
        <translation>Actualizar os estilos de parágrafo</translation>
    </message>
    <message>
        <source>If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</source>
        <translation>Se xa existe un estilo de parágrafo co mesmo nome que o parágrafo
actual do documento de OpenOffice.org, deberíase modificar o estilo en Scribus
para que equivalla ao que se importa ou non se debería tocar</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Usar o nome do documento como prefixo dos estilos de parágrafo</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scribus</source>
        <translation>Debería o importador adicionar o nome do documento
por diante do nome do estilo de parágrafo en Scribus</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Non perguntar máis</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OpenOffice.org document and
never ask your confirmation again</source>
        <translation>Debería o importador utilizar sempre o valor actualmente
asignado ao importar un documento do OpenOffice.org
e non pedir máis a súa configuración</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Pack paragraph styles</source>
        <translation>Empacar os estilos de parágrafo</translation>
    </message>
    <message>
        <source>Group paragraph styles by attributes.
Less paragraph styles but controlling them may be hard.
Should be used if it is known that text must not be edited
after importing.</source>
        <translation>Agrupar os estilos de parágrafo polos seus atributos.
Menos estilos de parágrafo, mais controlalos pode resultar máis difícil.
Deberíase utilizar se se sabe que o texto non vai ser modificado
após importalo.</translation>
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
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"> px</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Guías</translation>
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
        <translation type="unfinished">Cor:</translation>
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
        <translation type="unfinished">Grella de base</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished">Mostrar a Grella Base</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="unfinished">Espaciamento automático de &amp;Liña:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished">&amp;Grella de Base:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished">Dista&amp;ncia á Liña Base:</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished">Distancia entre as liñas menores da grella</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished">Distancia entre as liñas principais da grella</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished">Distancia dentro da cal un obxecto se axustará ás guías</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished">Radio da área na que Scribus lle permitirá agarrar os manipuladores</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished">Cor das liñas menores da grella</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished">Cor das liñas principais da grella</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished">Cor das liñas-guía que insira</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished">Cor das liñas das marxes</translation>
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
        <translation type="unfinished">Percentaxe de incremento sobre o tamaño de fonte para o espaciamento entre liñas</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Xerir os Tabuladores</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation type="unfinished">Rango a Exportar</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished">&amp;Todas as Páxinas</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished">&amp;Escoller as Páxinas</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">&amp;Rotación:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished">Opcións de Ficheiro</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished">Compatibilid&amp;ade:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished">E&amp;ncadernación:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished">Marxe Esquerda</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished">Marxe Direita</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished">Xerar &amp;Miniaturas</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished">Salvar as Molduras de Texto &amp;Vinculadas como Artigos de PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished">&amp;Incluir os Marcadores</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished">&amp;Resolución:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished">Com&amp;primir o Texto e os Gráficos Vectoriais</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="unfinished">Configuración das Imaxes</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="unfinished">&amp;Método:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished">Máxima</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished">Alta</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished">Baixa</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished">Mínima</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="unfinished">&amp;Reducir a Calidade das Imaxes a:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished">&amp;Xeral</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="unfinished">&amp;Embeber todas as Fontes</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="unfinished">Todas as Fontes a un &amp;Subconxunto</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished">Embebido</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished">Fontes Disponíbeis:</translation>
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
        <translation type="unfinished">Fontes a embeber:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="unfinished">Fontes a meter nun subconxunto:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished">&amp;Fontes</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished">Permitir os Efectos de &amp;Presentación</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Páxina</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished">Mostrar as Pre&amp;visualizacións das Páxinas</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">Efectos</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished">Duración da &amp;Exhibición:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished">Duración do Efec&amp;to:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished">T&amp;ipo de Efecto:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished">Liñas &amp;Móveis:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished">&amp;Desde:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished">D&amp;irección:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished"> sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished">Sen Efectos</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished">Persianas</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished">Caixa</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">Disolución</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished">Brillos</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished">Partir</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished">Borrar</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Horizontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Vertical</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished">Dentro</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="unfinished">Fora</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished">Da Esquerda para a Direita</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished">De Arriba para Baixo</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished">De Abaixo para Riba</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished">Da Direita para a Esquerda</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished">Superior Esquerda para Inferior Direita</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished">&amp;Aplicar os Efectos en todas as Páxinas</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished">&amp;Usar o Encriptamento</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished">Contrasinais</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished">&amp;Utilizador:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished">&amp;Propietario:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished">Configuración</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished">Permitir a Im&amp;presión do Documento</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished">Permitir a Modifi&amp;cación do Documento</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished">Permitir Cop&amp;iar o Texto e os Gráficos</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished">Permitir Adicionar &amp;Anotacións e Campos</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished">S&amp;eguranza</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Xeral</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished">Saída Pe&amp;nsada Para:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished">Pantalla / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">Impresora</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished">&amp;Usar Configuración de Exhibición Personalizada</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished">Configuración de Exhibición</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished">Fre&amp;cuencia:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished">&amp;Ángulo:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished">Función do S&amp;pot:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished">Punto Simple</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Liña</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished">Redondo</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished">Elipse</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished">Cores Uniformes:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished">Usar o Perfil ICC</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished">Perfil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished">Exhibición:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished">Imaxes:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished">Non usar perfís ICC embebidos</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">C&amp;or</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished">Exhibición PDF/X-3</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished">Secuencia de &amp;Información:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished">&amp;Perfil de Saída:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="unfinished">Caixa Recortada</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="unfinished">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="unfinished">Embeber fontes no PDF. O embebido de fontes
preservará a disposición e aparencia do seu documento.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="unfinished">Permite os efectos de presentación ao usar o Reader de Acrobat a pantalla completa.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished">Mostra as previsualizacións das páxinas de cada unha das listadas aquí arriba.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="unfinished">Tempo durante o que se mostra a páxina antes de que se inicie a presentación na páxina seleccionada.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished">Tempo durante o que se produce o efecto.
Un tempo menor acelerará o efecto; un maior ralentizarao.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished">Tipo do efecto de exhibición.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished">Dirección do efecto das liñas que se moven nos efectos partir e persiana.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished">Posición inicial para os efectos de caixa e partir.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished">Dirección dos efectos de brillo e borrado.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished">Aplicar os efectos seleccionados a todas as páxinas.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished">Exportar todas as páxinas a PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished">Exportar un rango de páxinas a PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="unfinished">Determina a compatibilidade do PDF. Por omisión é Acrobat 4.0, que fornece a maior compatibilidade.
Escolla Acrobat 5.0 se o seu ficheiro ten funcionalidades de PDF 1.4 tais como transparencia ou se precisar de encripción de 128 bits.
PDF/X-3 é para exportar o PDF para impresión comercial e pódese seleccionar se ten activada a xestión das cores.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="unfinished">Determina a encadernación das páxinas no PDF. A non ser que saiba
que o ten que mudar, déixea como está - Esquerda.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished">Xera miniaturas para cada páxina do PDF.
Alguns visualizadores úsannas para navegar.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished">Xerar Artigos PDF, moi úteis para navegar entre artigos vinculados nun PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="unfinished">Embeber os marcadores creados no seu documento.
Úsanse na navegación por documentos PDF longos.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished">Exportar a resolución do texto e dos gráficos vectoriais.
Non afecta á resolución das imaxes de mapa de bits, como as fotos.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="unfinished">Compresión do texto e os gráficos.
De non ter unha razón, non o seleccione. Reduce o tamaño do PDF.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="unfinished">Versión da compresión para as imaxes.
Automático permite que Scribus escolla o mellor método.
ZIP é bon para imaxes con cores uniformes.
JPEG é mellor para crear ficheiros PDF que teñen moitas fotos (cunha pequena perda de calidade, posibelmente).
Déixeo en automático, a non ser que precise de opcións de compresión especiais.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="unfinished">Níveis de compresión: Mínima (25%), Baixa (50%), Media (75%), Alta (85%), Máxima (95%)</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="unfinished">Reduza a definición das imaxes de mapas de bits aos puntos por pulgada indicados.
Se non selecciona isto mostraranse na súa resolución orixinal.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished">DPI (Puntos por Pulgada) para a exportación de imaxes.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished">Permitir as funcionalidades de seguranza nos PDF que exporte.
Se escolle Acrobat 4.0, o PDF protexerase con encripción de 40 bits.
Se escolle Acrobat 5.0, o PDF protexerase con encripción de 128 bits.
Descargo de responsabilidade: a encripción PDF non é tan fiábel como a encripción GPG ou PG e ten algunhas limitacións.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="unfinished">Escolla un contrasinal mestre que permita ou impida todas
as funcionalidades de seguranza nos seus PDFs exportados</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished">Escolla un contrasinal para que os utilizadores podan ler os seus PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished">Permita que se imprima o PDF. Se non se selecciona, impídese a impresión.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished">Permita a modificación do PDF. Se non se selecciona, impídese a modificación do PDF.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="unfinished">Permita copiar o texto ou os gráficos do PDF.
Se non se selecciona, o texto e os gráficos non se poden copiar.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="unfinished">Permita que se engadan anotacións e campos no PDF.
Se non se selecciona, impídese a modificación de anotacións e campos.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="unfinished">Modelo de cor para a saída do seu PDF.
Escolla Pantalla/Web para PDFs que vaian ser visualizados nunha pantalla ou impresos en impresoras de chorro de tinta normais.
Escolla Impresora para imprimir nunha verdadeira impresora de catro cores CMYK.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished">Esta é unha configuración avanzada que non se activa por omisión. Deberíase permitir só
cando así o requira a súa impresora e vostede dispoña de todos os detalles exactos.
De non facelo así, o seu PDF exportado pode non imprimirse correctamente e con certeza non será portábel entre sistemas.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished">Embeber un perfil de cor para as cores uniformes</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished">Perfil de Cor para as cores uniformes</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished">Exhibición para as cores sólidas</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished">Embeber un perfil de cor para as imaxes</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished">Non usar perfis de cor embebidos nas imaxes fonte</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished">Perfil de cor para as imaxes</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished">Exhibición para as imaxes</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished">Perfil de saída para a impresión. De ser posíbel, consulte a súa impresora para a selección de perfis.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished">Secuencia obrigatoria en PDF/X-3, ou o PDF non será conforme
con PDF/X-3. Recomendamos que use o título do documento.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished">Tamaño da sangría desde o borde superior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished">Tamaño da sangría desde o borde inferior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished">Tamaño da sangría desde o borde esquerdo da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished">Tamaño da sangría desde o borde direito da páxina física</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished">Reflexar a(s) Páxina(s) horizontalmente</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished">Reflexar a(s) Páxina(s) verticalmente</translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Fonte:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished">Tamaño:</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">Un túzaro pensa que me há de gañar co seixo que levo</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished">Cor da &amp;Liña:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished">&amp;Saturación:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished">Cor de &amp;Recheo:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished">Sa&amp;turación:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished">&amp;Anchura da Liña:</translation>
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
        <translation type="unfinished">Ampliación &amp;Libre</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished">Ampliación &amp;Horizontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished">Ampliación &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished">Ampliar ou reducir a Imaxe ao Tama&amp;ño da Moldura</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished">Manter a P&amp;roporción</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished">Mí&amp;nimo:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished">Má&amp;ximo:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished">&amp;Paso:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished">Propriedades das Molduras de Texto</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="unfinished">Propriedades das Molduras de Imaxe</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished">Propriedades do Deseño de Figuras</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished">Níveis de magnificación predefinidos</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished">Propriedades do Deseño de Liñas</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished">Propriedades do Deseño de Polígonos</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished">Fonte para as molduras de texto novas</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished">Tamaño da fonte para as novas molduras de texto</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished">Cor da fonte</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished">Número de columnas nunha moldura de texto</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished">Espaciamento entre as columnas de molduras de texto</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished">Exemplo da súa fonte</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished">As molduras de imaxe permiten que as imaxes se amplíen e reduzan a calquer tamaño</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished">Ampliación ou redución horizontal das imaxes</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished">Ampliación ou redución vertical das imaxes</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished">Manter iguais as proporcións horizontal e vertical</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished">As imaxes nas molduras de imaxe amplíanse ou redúcense ao tamaño da moldura</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished">As imaxes ampliadas ou reducidas manteñen as proporcións orixinais automaticamente</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="unfinished">Cor de recheo para as molduras de imaxe</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished">Saturación da cor do recheo</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished">Cor da liña das figuras</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished">Saturación da cor das liñas</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished">Cor de recheo das figuras</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished">Estilo de liña das figuras</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished">Anchura da liña das figuras</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished">Redución mínima permitida</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished">Ampliación máxima permitida</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished">Paso de ampliación ou redución en cada operación de achegamento ou afastamento</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished">Cor das liñas</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished">Saturación da cor</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished">Estilo das liñas</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished">Anchura das liñas</translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Subíndice</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished">&amp;Desprazamento:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished">&amp;Ampliación:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Superíndice</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished">D&amp;esprazamento:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished">&amp;Ampliación:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished">A&amp;mpliación:</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished">Deslocamento por cima da liña base da fonte nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished">Tamaño relativo dos superíndices comparados coa fonte normal</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished">Deslocamento por baixo da liña base da fonte normal nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished">Tamaño relativo dos subíndices comparados coa fonte normal</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished">Tamaño relativo das versalitas comparadas coa fonte normal</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Esquerda</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Direita</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>Punto</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Vírgula</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centro</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Borralos todos</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Indentación para a primeira liña do parágrafo</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Indentación desde a esquerda para todo o parágrafo</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Limpar todos os Tabuladores</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Posición:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation>Primeira &amp;Liña:</translation>
    </message>
    <message>
        <source>Ind&amp;ent:</source>
        <translation type="obsolete">Ind&amp;entación:</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation>Ind&amp;entación á esquerda:</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Elemento</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Tipo</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Información</translation>
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
        <translation type="obsolete">Fonte:</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Imaxe</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Texto</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Liña</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Polígono</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="obsolete">Poliliña</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="obsolete">TrazadoDoTexto</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Páxina</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">O nome&quot;%1&quot; xa existe.
Póñalle outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Dacordo</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Grupo</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Páxina</translation>
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
        <translation type="unfinished">Agrupar</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished">Crear</translation>
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
        <translation type="unfinished">Cancelar</translation>
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
        <translation type="unfinished">Bloquear</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished">Desbloquear</translation>
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
        <translation type="unfinished">Eliminar</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished">Mudar o Nome</translation>
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
        <translation type="unfinished">Pegar</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished">Cortar</translation>
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
        <translation type="unfinished">Polígono</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">&amp;Refacer</translation>
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
        <translation>Introdución de valores</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Introduza un valor e despóis prema sobre Dacordo.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Introduza un valor e despóis prema sobre Dacordo</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Envíelle o seu valor ao guión</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Abreviacións

extensión de abreviacións</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Aplicar espazo que non se pode romper a:

extensión de abreviacións:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>Molduras &amp;Seleccionadas

extensión de abreviacións</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>&amp;Páxina activa

extensión de abreviacións</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>&amp;Todos os elementos

extensión de abreviacións</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation>&amp;Información e
Idiomas

extensión de abreviacións</translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation>Substituir o predefinido pola configuración do usuario

extensión de abreviacións</translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
        <comment>short words plugin</comment>
        <translation>Cando o ficheiro deconfiguración do usuario existe
(%1)
pode escoller se prefire adicionar a súa configuración
á configuración global retirándolle a selección ao botón.

Pode substituir os valores predefinidos polos seus
seleccionando o botón tamén.
extensión de abreviacións.</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Só se procesaron as molduras seleccionadas.

extensión de abreviacións.
</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Só se procesou a páxina actual.

extensión de abreviacións.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Procesáronse todos os elementos do documento.

extensión de abreviacións.</translation>
    </message>
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation>Abreviacións para Scribus</translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation>Disponíbel nos idiomas seguintes

extensión de abreviacións</translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation>Sobre Abreviacións</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Ferramentas</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation>Seleccionar Elementos</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Inserir unha Moldura de Texto</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation>Inserir unha Imaxe</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Propriedades...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation>Inserir Polígonos</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation>Inserir Liñas</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation>Inserir Curvas Bezier</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Inserir Liña a Man Alzada</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Rodar o Elemento</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Editar os Contidos da Moldura</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Ligar Molduras de Texto</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Desligar Molduras de Texto</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>Achegarse ou alonxarse</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Modificar o texto co Editor de Texto</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation>Deseñar Figuras variadas</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Inserir unha Tabela</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="obsolete">Realizar medicións</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>Button</source>
        <translation>Botón</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Campo de Texto</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Caixa de Verificación</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Caixa de Selección</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Caixa de Lista</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ligazón</translation>
    </message>
    <message>
        <source>PDF Tools</source>
        <translation>Ferramentas PDF</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>Inserir Campos PDF</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>Inserir Anotacións de PDF</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Seleccione o Carácter:</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="obsolete">Inserir os caracteres no cursor no texto</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="obsolete">Eliminar a(s) selección(s) actuais.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Fechar este diálogo e voltar á edición de texto.</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="obsolete">&amp;Inserir</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Fechar</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Escolla o importador que prefira usar</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automático</translation>
    </message>
    <message>
        <source>Get text only</source>
        <translation>Obter só o texto</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Importar o texto sen formato nengún</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importador:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codificación:</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Escolla que importador quer usar</translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Lembrar a asociación</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation>Lembrar a extensión do ficheiro - asociación do importador
e non perguntar máis ao seleccionar un importador
para ficheiros deste tipo.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Novo a partir dun Modelo</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da Páxina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Cores</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descrición</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Uso</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Creado con</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Elimina&amp;r</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Incorporar Modelos novos</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Instalar os Modelos</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Hai que extrair o pacote no directorio de modelos ~/.scribus/templates para o usuario actual ou en PREFIXO/share/scribus/templates para todos os utilizadores do sistema.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Preparar un modelo</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Desfacerse dun modelo</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Traducir template.xml</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Pódense atopar modelos de documento en http://www.scribus.net/ na sección de Descargas.</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Asegúrese de que as imaxes e fontes que utilice pódense usar libremente. Se non pode compartillar as fontes, non as inclúa ao salvar o documento como modelo.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>O creador dun modelo deberíase tamén asegurar de que a sección anterior sobre Instalación de Modelos tamén se aplica ao seu modelo. Isto significa que un usario debería ser quen de baixarse un pacote de modelos e de extraílos no directorio de modelos e comezar a usalos.</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Eliminar un modelo do diálogo Novo a partir dun Modelo só eliminará a entrada existente en template.xml, non eliminará os ficheiros do documento. Aparecerá un menú emerxente coa opción de eliminalos só se ten acceso de escrita para o ficheiro template.xml.</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Copie un template.xml xa existente nun ficheiro chamado template.lang_COUNTRY.xml (use o mesmo código de idioma presente no ficheiro qm do seu idioma), por exemplo template.fi.xml para o finés. A copia débese atopar no mesmo directorio que o template.xml orixinal para que Scribus a poida carregar.</translation>
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
        <translation>Gardar como Modelo</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoría</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da Páxina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Cores</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descrición</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Uso</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>Email</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Detalles adicionais</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Dacordo</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Menos detalle</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>apaisado</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>retrato</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>personalizado</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Crear un filtro</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Escoller un filtro gardado con anterioridade</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Darlle un nome a este filtro para gardalo</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Darlle un nome para gardalo</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Dacordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Des/Habilitar esta liña do filtro</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Limpar esta liña do filtro</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Adicionar unnha nova liña ao filtro</translation>
    </message>
    <message>
        <source>to</source>
        <translation>para</translation>
    </message>
    <message>
        <source>and</source>
        <translation>e</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>eliminar a equivalencia</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>non eliminar a equivalencia</translation>
    </message>
    <message>
        <source>words</source>
        <translation>palabras</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Substituir</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>O valor da esquerda é unha expresión regular</translation>
    </message>
    <message>
        <source>with</source>
        <translation>con</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>estilo do parágrafo</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>todas as veces que apareza</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>todos os parágrafos</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>todos os parágrafos que comecen por</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>parágrafos con menos de</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>parágrafos con máis de</translation>
    </message>
</context>
</TS>
