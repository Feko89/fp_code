import React from 'react';
import '../pages/Ucivo.css';

const topicsContent = {
  "Úvod do programovania": (
    <>
      <h1>Úvod do programovania</h1>
      <p>Programovanie je základnou zručnosťou v modernom digitálnom svete, ktorá umožňuje vytvárať technológie, riešiť problémy a zlepšovať každodenný život. Ak uvažujete o tom, že by ste sa naučili programovať, tu je niekoľko dôvodov, prečo sa pustiť práve do tejto oblasti a začať s jazykom Python.</p>
      <h3>Prečo programovať?</h3>
      <ol>
        <li><strong>Riešenie problémov</strong> – Programovanie vám umožňuje efektívne analyzovať problémy, nachádzať riešenia a zlepšovať procesy v rôznych odvetviach.</li>
        <li><strong>Kreativita a inovácie</strong> – S programovaním môžete vytvárať aplikácie, hry, webové stránky alebo pracovať s dátami, čo podporuje vašu kreativitu a schopnosť inovovať.</li>
        <li><strong>Kariérne možnosti</strong> – Schopnosť programovať je dnes veľmi cenená. Otvára dvere do rôznych oblastí IT, dátovej analytiky, umelej inteligencie, vývoja aplikácií a mnohých ďalších.</li>
        <li><strong>Nezávislosť a sebestačnosť</strong> – S programovacími znalosťami môžete pracovať na svojich vlastných projektoch, nezávisle na iných, a vytvárať si vlastné riešenia.</li>
        <li><strong>Osobný rozvoj</strong> – Programovanie rozvíja logické a analytické myslenie, trpezlivosť a schopnosť riešiť problémy krok za krokom.</li>
      </ol>
      <h3>Prečo začať s <u>Pythonom?</u></h3>
      <ol>
        <li><strong>Jednoduchá a prehľadná syntax</strong> – Python je známy svojou jednoduchou syntaxou, ktorá sa ľahko učí. Výrazne znižuje zložitosť učenia pre začiatočníkov.</li>
        <li><strong>Univerzálnosť</strong> – Python môžete využiť v rôznych oblastiach ako webový vývoj, dátová analytika, strojové učenie, automatizácia alebo herný vývoj.</li>
        <li><strong>Silná podpora komunity</strong> – Python má širokú komunitu, veľa dostupných návodov, tutoriálov a knižníc, ktoré zjednodušujú prácu a pomáhajú riešiť problémy.</li>
        <li><strong>Široká použiteľnosť v praxi</strong> – Od startupov až po veľké korporácie, Python je používaný na rôznych úrovniach a v mnohých odvetviach.</li>
        <li><strong>Interaktívne učenie</strong> – Python umožňuje okamžité testovanie a interaktívne učenie, čo podporuje experimentovanie a uľahčuje učenie v reálnom čase.</li>
      </ol>
      <p>Náš výklad vám priblíži základy programovania v jazyku Python. Kapitoly sú zoradené podľa náročnosti a nadväzujú na seba.</p>
    </>
  ),
  "Diagramy": (
    <>
    <h1>Diagramy v programovaní</h1>
    <br></br>
    <br></br>
    <p>Diagramy slúžia na vizualizáciu a lepšie pochopenie štruktúry, toku a vzťahov medzi komponentami v programe alebo systéme. Používanie diagramov zjednodušuje plánovanie, komunikáciu a analýzu, čím zvyšuje efektivitu pri vývoji softvéru.</p>
    <br></br>
    <h3>Základné typy diagramov v programovaní</h3>
    <br></br>
    <ol>
      <li>
        <strong>Vývojový diagram (Flowchart)</strong> – Zobrazuje tok procesu alebo logiku programu pomocou symbolov (obdĺžniky pre kroky, kosoštvorce pre rozhodnutia a šípky pre tok).</li>
      <li><strong>Diagram tried (Class Diagram)</strong> – Zobrazuje štruktúru tried v objektovo-orientovanom programe vrátane ich atribútov a metód.</li>
      <li><strong>Sekvenčný diagram (Sequence Diagram)</strong> – Zobrazí komunikáciu medzi objektmi alebo komponentami systému v čase, čím zobrazuje poradie volania metód.</li>
      <li><strong>Diagram prípadov použitia (Use Case Diagram)</strong> – Zobrazí, ako rôzni aktéri interagujú s aplikáciou alebo systémom.</li>
      <li><strong>Diagram aktivity (Activity Diagram)</strong> – Ukazuje tok činností alebo pracovných postupov v procese alebo logike programu.</li>
    </ol>
    <br></br>
    <br></br>
    <h3>Symboly používané vo vývojových diagramoch</h3>
    <br></br>
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Účel</th>
          <th>Popis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>→</td>
          <td>Flow line</td>
          <td>Indikuje tok logiky prepojením symbolov.</td>
        </tr>
        <tr>
          <td>⊓</td>
          <td>Terminál (Stop/Start)</td>
          <td>Reprezentuje začiatok a koniec vývojového diagramu.</td>
        </tr>
        <tr>
          <td>▭</td>
          <td>Input/Output</td>
          <td>Používa sa pre vstupné a výstupné operácie.</td>
        </tr>
        <tr>
          <td>▭ (so zaoblenými rohmi)</td>
          <td>Processing</td>
          <td>Používa sa pre aritmetické operácie a manipulácie s údajmi.</td>
        </tr>
        <tr>
          <td>◆</td>
          <td>Decision</td>
          <td>Používa sa pre rozhodovanie medzi dvoma alebo viacerými alternatívami.</td>
        </tr>
        <tr>
          <td>◯</td>
          <td>On-page Connector</td>
          <td>Používa sa na spojenie rôznych častí toku na rovnakej strane.</td>
        </tr>
        <tr>
          <td>⧫</td>
          <td>Off-page Connector</td>
          <td>Používa sa na pripojenie toku na inej strane alebo strane.</td>
        </tr>
        <tr>
          <td>⎯▭⎯</td>
          <td>Predefined Process/Function</td>
          <td>Reprezentuje skupinu príkazov vykonávajúcich jednu úlohu spracovania.</td>
        </tr>
      </tbody>
    </table>
    <br></br>
    <p>Diagramy sú neoddeliteľnou súčasťou vývoja softvéru, pretože zjednodušujú komplexné koncepty a uľahčujú tímovú spoluprácu.</p>
  </>
  ),
  "Syntax": (
    <>
       <h1>Základné pravidlá syntaxe v Pythone</h1>
    <br></br>
    <p>Python je známy svojou jednoduchou a čistou syntaxou, ktorá umožňuje rýchle učenie a efektívne programovanie. V tejto sekcii sa pozrieme na najdôležitejšie pravidlá a koncepty syntaxe, ktoré sú základom pre písanie kódu v Pythone.</p>
    <br></br>

    <h3>Komentáre</h3>
    <p>Komentáre sa používajú na dokumentáciu kódu a ich ignoruje Python interpret. Sú dôležité pre zrozumiteľnosť programu, najmä ak na projekte pracuje viac ľudí.</p>
    <p>Jednoriadkové komentáre začínajú znakom <code>#</code>, viacriadkové komentáre sa dajú písať pomocou trojitých úvodzoviek (<code>"""</code>).</p>
    <pre><code>
# Toto je jednoriadkový komentár

"""
Toto je viacriadkový komentár.
Používa sa na rozsiahlejší popis kódu
alebo jeho funkčnosti.
"""
    </code></pre>
    <br></br>

    <h3>Premenné</h3>
    <p>V Pythone je typ premenných určený automaticky na základe priradenej hodnoty. Typ nie je potrebné deklarovať explicitne. Python podporuje rôzne typy dát, ako sú:</p>
    <ul>
        <li><code>int</code>: celé čísla (napr. <code>x = 5</code>)</li>
        <li><code>float</code>: desatinné čísla (napr. <code>y = 3.14</code>)</li>
        <li><code>str</code>: reťazce (napr. <code>name = "Python"</code>)</li>
        <li><code>bool</code>: logické hodnoty (napr. <code>is_active = True</code>)</li>
    </ul>
    <p>Premenné môžu byť pretypované priamo v kóde:</p>
    <pre><code>
x = 5        # int
x = str(x)   # teraz je x reťazec "5"
    </code></pre>
    <br></br>

    <h3>Podmienky</h3>
    <p>Podmienky umožňujú vykonať rôzne časti kódu na základe splnenia určitých pravidiel. Používajú sa kľúčové slová <code>if</code>, <code>elif</code> (skratka pre "else if") a <code>else</code>.</p>
    <pre><code>
if x &gt; 0:
    print("Pozitívne číslo")
elif x == 0:
    print("Nula")
else:
    print("Negatívne číslo")
    </code></pre>
    <p>Logické operátory ako <code>and</code>, <code>or</code>, <code>not</code> môžu byť použité na kombináciu podmienok:</p>
    <pre><code>
if x &gt; 0 and y &gt; 0:
    print("Obe čísla sú pozitívne")
    </code></pre>
    <br></br>

    <h3>Cykly</h3>
    <p>Na iteráciu sa používajú dva hlavné typy cyklov:</p>
    <ul>
        <li><code>for</code>: iterácia cez sekvencie ako zoznamy, reťazce alebo rozsahy.</li>
        <li><code>while</code>: opakovanie kódu, pokiaľ je podmienka splnená.</li>
    </ul>
    <p>Príklad iterácie pomocou <code>for</code>:</p>
    <pre><code>
for i in range(5):<br></br>
    print(i)  # Vypíše čísla od 0 do 4
    </code></pre>
    <p>Príklad cyklu <code>while</code>:</p>
    <pre><code>
x = 0
while x &lt; 5:<br></br>
    print(x)
    x += 1
    </code></pre>
    <br></br>

    <h3>Funkcie</h3>
    <p>Funkcie umožňujú organizáciu a opätovné použitie kódu. Definujú sa pomocou kľúčového slova <code>def</code> a môžu prijímať argumenty a vracať hodnoty.</p>
    <pre><code>
def pozdrav("meno"):
    return f"Ahoj, {"meno"}!"

print(pozdrav("Svet"))  # Výstup: Ahoj, Svet!
    </code></pre>
    <p>Funkcie môžu mať aj predvolené hodnoty argumentov:</p>
    <pre><code>
def pozdrav("meno"="hosť"):
    return f"Ahoj, {"meno"}!"

print(pozdrav())  # Výstup: Ahoj, hosť!
    </code></pre>
    <br></br>

    <h3>Odsadzovanie (Indentácia)</h3>
    <p>Odsadzovanie je povinné a určuje bloky kódu. Používanie zložených zátvoriek je nahradené odsadzovaním, čo zlepšuje čitateľnosť.</p>
    <p>Štandardom sú 4 medzery:</p>
    <pre><code>
if x &gt; 0:
    print("Pozitívne číslo")
    if x &gt; 10:
        print("Veľké číslo")
    </code></pre>
    <br></br>

    <h3>Práca s dátovými štruktúrami</h3>
    <p>Python ponúka silné vstavané dátové štruktúry, ktoré uľahčujú manipuláciu s dátami:</p>
    <ul>
        <li><code>list</code>: zoznamy pre uchovávanie viacerých hodnôt (napr. <code>[1, 2, 3]</code>)</li>
        <li><code>tuple</code>: nemenné sekvencie (napr. <code>(1, 2, 3)</code>)</li>
        <li><code>dict</code>: slovníky pre uchovávanie párov kľúč-hodnota (napr. <code>{'kľúč : Hodnota'}</code>)</li>
        <li><code>set</code>: množiny pre unikátne hodnoty (napr. <code>{"1, 2, 3"}</code>)</li>
    </ul>
    <p>Príklad manipulácie s dátami:</p>
    <pre><code>
zoznam = [1, 2, 3]
zoznam.append(4)  # Pridanie hodnoty
print(zoznam)     # Výstup: [1, 2, 3, 4]
    </code></pre>
    <br></br>

    <h3>Záver</h3>
    <p>Syntax Pythonu je navrhnutá tak, aby bola jednoduchá na učenie a efektívna na použitie. Jeho čitateľnosť a flexibilita z neho robia jeden z najpopulárnejších jazykov pre vývoj aplikácií, analýzu dát a mnoho ďalších oblastí.</p>
</>
  ),
  "Dátové typy - Úvod": (
    <>
    <h1>Dátové typy - Úvod</h1>
<p>Základné informácie o dátových typoch a prečo sú kľúčové pre správne spracovanie a reprezentáciu údajov v programovaní.</p>

<h2>Čo sú dátové typy?</h2>
<p>Dátový typ určuje, aký druh hodnoty môže byť uložený v premennej a aké operácie sa môžu s touto hodnotou vykonávať. Dátové typy sú základným stavebným kameňom každého programovacieho jazyka, pretože určujú, aké údaje môžeme manipulovať a aký typ výpočtov môžeme vykonávať.</p>

<h3>Prečo sú dátové typy dôležité?</h3>
<ul>
  <li><strong>Efektivita a pamäťová náročnosť:</strong> Každý dátový typ má svoje vlastnosti, ktoré ovplyvňujú, ako efektívne sa s ním pracuje a koľko pamäte potrebuje.</li>
  <li><strong>Bezpečnosť:</strong> Používanie správnych dátových typov pomáha predchádzať chybám, ktoré by mohli vzniknúť pri nesprávnom spracovaní údajov (napr. pokus o použitie textu ako čísla).</li>
  <li><strong>Čitateľnosť kódu:</strong> Dobre zvolené dátové typy zlepšujú čitateľnosť kódu a robia ho ľahšie udržiavateľným.</li>
</ul>

<h3>Základné dátové typy v Python</h3>
<p>Python, ako vysokoúrovňový jazyk, ponúka širokú paletu dátových typov. Medzi najčastejšie patria:</p>

<ul>
  <li><strong>Celé čísla (int):</strong> Používa sa na ukladanie celých čísel, napr. <code>5</code>, <code>-12</code>, <code>0</code>.</li>
  <li><strong>Desatinné čísla (float):</strong> Používa sa na ukladanie čísel s desatinnou čiarkou, napr. <code>3.14</code>, <code>-0.001</code>.</li>
  <li><strong>Reťazce (str):</strong> Používa sa na ukladanie textu, napr. <code>"Ahoj, svet!"</code>, <code>'Python'</code>.</li>
  <li><strong>Logické hodnoty (bool):</strong> Tento typ môže nadobúdať hodnoty <code>True</code> alebo <code>False</code>.</li>
  <li><strong>Zoznamy (list):</strong> Umožňuje uchovávať usporiadané kolekcie hodnôt, napr. <code>[1, 2, 3]</code>, <code>["a", "b", "c"]</code>.</li>
  <li><strong>Slovníky (dict):</strong> Umožňuje uchovávať páry kľúč-hodnota, napr. <code>{"meno Janko vek: 30"}</code>.</li>
  <li><strong>Tuples (tuple):</strong> Umožňuje uchovávať usporiadané, nemenné kolekcie hodnôt, napr. <code>(1, 2, 3)</code>.</li>
</ul>

<h3>Konverzia dátových typov</h3>
<p>V Python môžete medzi rôznymi dátovými typmi prevádzať hodnoty. Napríklad:</p>
<ul>
  <li><code>int("10")</code> prevádza reťazec na celé číslo.</li>
  <li><code>float(5)</code> prevádza celé číslo na desatinné číslo.</li>
  <li><code>str(123)</code> prevádza číslo na reťazec.</li>
</ul>

<h3>Typové chyby a ich predchádzanie</h3>
<p>Chybné použitie dátového typu môže viesť k chybám pri vykonávaní programu. Je dôležité dbať na správny výber typu pre premenné a operácie s nimi. Napríklad:</p>
<ul>
  <li><code>5 + "text"</code> spôsobí chybu, pretože nie je možné sčítať číslo a reťazec.</li>
  <li><code>int("nie číslo")</code> spôsobí chybu, pretože reťazec neobsahuje platné číslo.</li>
</ul>

<h3>Záver</h3>
<p>Dátové typy sú základom každého programu. Ich správne pochopenie a používanie vedie k efektívnemu, bezpečnému a čitateľnému kódu. V Python-e máme širokú paletu dátových typov, ktoré nám umožňujú spracovávať rôzne druhy údajov a efektívne riešiť rôzne úlohy v programovaní.</p>
 </>
  ),
  "Reťazec - String": (
    <>
      <h1>Reťazce (Strings) v Python</h1>
<p>Reťazce sú jedným z najdôležitejších dátových typov v programovaní, ktoré slúžia na ukladanie textových hodnôt. V Pythone sú reťazce flexibilné, jednoduché na manipuláciu a obsahujú množstvo užitočných metód na prácu s textovými údajmi. Tento článok sa zameria na to, čo sú reťazce, ako ich vytvárať, manipulovať s nimi a aké operácie môžeme s reťazcami vykonávať.</p>

<h2>Definícia reťazca</h2>
<p>Reťazec je sekvencia znakov (písmen, číslic, symbolov), ktorá je uzavretá v úvodzovkách. V Pythone môžeme vytvoriť reťazec pomocou jednoduchých (') alebo dvojitých (") úvodzoviek. Obe tieto formy sú platné a môžeme ich používať zameniteľne. Ak reťazec obsahuje úvodzovky, použijeme opačný typ (napr. reťazec s dvojitými úvodzovkami môže obsahovať jednoduché úvodzovky a naopak).</p>

<h3>Príklady definície reťazca:</h3>
<ul>
  <li><code>reťazec_1 = "Ahoj, svet!"</code> – reťazec definovaný pomocou dvojitých úvodzoviek.</li>
  <li><code>reťazec_2 = 'Python je skvelý'</code> – reťazec definovaný pomocou jednoduchých úvodzoviek.</li>
  <li><code>reťazec_3 = "Python's syntax is simple"</code> – reťazec obsahujúci jednoduchú úvodzovku, preto sme použili dvojité úvodzovky.</li>
  <li><code>reťazec_4 = 'It\'s easy to learn Python'</code> – použitie spätného lomítka (escape character) na úvodzovky vnútri reťazca.</li>
</ul>

<h2>Reťazce a escape sekvencie</h2>
<p>Escape sekvencie nám umožňujú používať špeciálne znaky v reťazcoch, ako napríklad nové riadky, tabulátory, alebo špeciálne úvodzovky. Escape sekvencia začína spätným lomítkom (\).</p>

<h3>Niektoré bežné escape sekvencie:</h3>
<ul>
  <li><code>\n</code> – nový riadok.</li>
  <li><code>\t</code> – tabulátor (odsadnutie).</li>
  <li><code>\\</code> – spätné lomítko.</li>
  <li><code>\'</code> – jednoduchá úvodzovka.</li>
  <li><code>\"</code> – dvojitá úvodzovka.</li>
</ul>

<h2>Operácie s reťazcami</h2>
<p>Python poskytuje množstvo operácií, ktoré môžeme vykonávať s reťazcami. Tieto operácie umožňujú manipulovať s textom, vyhľadávať v ňom informácie, spájať reťazce a pod.</p>

<h3>Spojenie reťazcov (konkatenácia)</h3>
<p>Reťazce môžeme spájať pomocou operátora <code>+</code>. Tento operátor sa nazýva konkatenácia a vytvára nový reťazec spojením dvoch alebo viacerých reťazcov.</p>

<h4>Príklad:</h4>
<pre><code>greeting = "Ahoj"
name = "Peter"
message = greeting + ", " + name + "!"
print(message)</code></pre>
<p>Výsledok bude: <code>Ahoj, Peter!</code></p>

<h3>Opakovanie reťazcov</h3>
<p>Pomocou operátora <code>*</code> môžeme reťazec opakovať viackrát.</p>

<h4>Príklad:</h4>
<pre><code>repeated = "Python! " * 3
print(repeated)</code></pre>
<p>Výsledok bude: <code>Python! Python! Python! </code></p>

<h3>Prístup k jednotlivým znakom v reťazci</h3>
<p>Reťazce sú usporiadané, čo znamená, že k jednotlivým znakom môžeme pristupovať pomocou indexu. Indexovanie v Pythone začína od nuly (0). Môžeme použiť pozitívne aj negatívne indexy na prístup k znakom zľava alebo sprava.</p>

<h4>Príklad:</h4>
<pre><code>text = "Ahoj"
prvy_znak = text[0]  # "A"
posledny_znak = text[-1]  # "j"
print(prvy_znak, posledny_znak)</code></pre>
<p>Výsledok bude: <code>A j</code></p>

<h3>Reťazcové metódy</h3>
<p>Python poskytuje mnoho vstavaných metód pre reťazce, ktoré umožňujú rôzne operácie, ako je zistenie dĺžky reťazca, zmena veľkosti písmen, vyhľadávanie podreťazcov a ďalšie. Niektoré z najpoužívanejších metód sú:</p>

<ul>
  <li><code>len()</code> – zistí dĺžku reťazca (počet znakov).</li>
  <li><code>str.upper()</code> – zmení všetky písmená na veľké.</li>
  <li><code>str.lower()</code> – zmení všetky písmená na malé.</li>
  <li><code>str.capitalize()</code> – zmení prvé písmeno na veľké a ostatné na malé.</li>
  <li><code>str.strip()</code> – odstráni medzery na začiatku a na konci reťazca.</li>
  <li><code>str.find()</code> – nájde pozíciu podreťazca v reťazci (vráti -1, ak podreťazec nie je nájdený).</li>
  <li><code>str.replace()</code> – nahradí podreťazec iným reťazcom.</li>
  <li><code>str.split()</code> – rozdelí reťazec na zoznam podľa zadaného oddeľovača.</li>
  <li><code>str.join()</code> – spojí zoznam reťazcov do jedného reťazca.</li>
</ul>

<h4>Príklady:</h4>
<pre><code>text = "   Python je skvelý!   "
print(len(text))  # 22
print(text.upper())  # "PYTHON JE SKVELÝ!"
print(text.strip())  # "Python je skvelý!"
print(text.find("skvelý"))  # 14
print(text.replace("skvelý", "úžasný"))  # "   Python je úžasný!   "</code></pre>

<h2>Formátovanie reťazcov</h2>
<p>Formátovanie reťazcov umožňuje vkladanie hodnôt do reťazcov pomocou špeciálnych placeholderov. Existujú rôzne spôsoby, ako formátovať reťazce:</p>

<ul>
  <li><strong>Starý spôsob (operátor %):</strong></li>
  <pre><code>"Ahoj, %s!" % "Peter"</code></pre>
  <li><strong>Novší spôsob (metóda <code>format()</code>):</strong></li>
  <pre><code>"Ahoj, {}!".format("Peter")</code></pre>
  <li><strong>Formátovanie s f-string (Python 3.6+):</strong></li>
  <pre><code>name = "Peter"
age = 30
print(f"Ahoj, {"name"}! Máš {"age"} rokov.")  # Ahoj, Peter! Máš 30 rokov.</code></pre>
</ul>

<h2>Reťazce ako imutabilné objekty</h2>
<p>V Pythone sú reťazce imutabilné, čo znamená, že po ich vytvorení nemôžeme meniť jednotlivé znaky v reťazci. Ak chceme upravit reťazec, musíme vytvoriť nový reťazec. Pokus o zmenu znaku v reťazci spôsobí chybu.</p>

<h4>Príklad:</h4>
<pre><code>text = "Ahoj"
text[0] = "B"  # Vyvolá TypeError: 'str' object does not support item assignment</code></pre>

<h2>Záver</h2>
<p>Reťazce sú veľmi dôležitým typom dát v Pythone, ktorý umožňuje manipulovať s textovými informáciami rôznymi spôsobmi. Python poskytuje množstvo nástrojov a metód na efektívnu prácu s reťazcami, či už ide o jednoduché operácie ako spájanie a opakovanie, alebo zložitejšie operácie ako formátovanie a vyhľadávanie v texte. Pochopenie reťazcov a ich manipulácie je základným kameňom pre každého Python programátora.</p>
</>
  ),
  "Int": (
    <>
      <h1>Celé čísla (Integers) v Python</h1>
<p>Celé čísla (integer) sú základným dátovým typom v Pythone, ktorý slúži na reprezentáciu čísel bez desatinnej čiarky. Tento dátový typ je nevyhnutný pre výpočty, aritmetické operácie, cykly a rôzne iné operácie v programovaní. V tomto článku sa budeme venovať základom práce s celými číslami, ich vlastnostiam a rôznym operáciám, ktoré môžeme v Pythone vykonávať s týmto dátovým typom.</p>

<h2>Definícia celého čísla</h2>
<p>Celé číslo je číselná hodnota, ktorá neobsahuje desatinnú časť. Môže to byť pozitívne číslo, negatívne číslo alebo nula. V Pythone je reprezentácia celého čísla veľmi jednoduchá, pretože Python automaticky spracuje veľké celé čísla bez potreby špeciálnych dátových typov (napríklad int alebo long v iných jazykoch).</p>

<h3>Príklady definície celého čísla:</h3>
<ul>
  <li><code>cislo_1 = 10</code> – pozitívne celé číslo.</li>
  <li><code>cislo_2 = -5</code> – negatívne celé číslo.</li>
  <li><code>cislo_3 = 0</code> – nula, ktorá je tiež celým číslom.</li>
  <li><code>cislo_4 = 1234567890123456789</code> – veľmi veľké celé číslo (Python spracováva aj veľmi veľké celé čísla automaticky).</li>
</ul>

<h2>Typ celého čísla</h2>
<p>Typ celého čísla môžeme skontrolovať pomocou funkcie <code>type()</code>. Vždy, keď pracujeme s celými číslami, Python ich automaticky považuje za typ <code>int</code>.</p>

<h4>Príklad:</h4>
<pre><code>{`cislo = 10
print(type(cislo))  # <class "int">`}</code></pre>

<h2>Operácie s celými číslami</h2>
<p>Python podporuje množstvo aritmetických operácií s celými číslami, ako sú sčítanie, odčítanie, násobenie, delenie a ďalšie. Všetky tieto operácie môžeme používať priamo s operátormi.</p>

<h3>Sčítanie (+), odčítanie (-), násobenie (*) a delenie (/)</h3>
<p>Najbežnejšie aritmetické operácie sú sčítanie, odčítanie, násobenie a delenie. Python vykonáva tieto operácie podľa štandardných matematických pravidiel.</p>

<h4>Príklady:</h4>
<ul>
  <li><code>sucet = 10 + 5  # 15</code></li>
  <li><code>rozdiel = 10 - 5  # 5</code></li>
  <li><code>soucin = 10 * 5  # 50</code></li>
  <li><code>delenie = 10 / 3  # 3.3333333333333335 (float)</code></li>
</ul>

<p>Pri delení dvoch celých čísel v Pythone je výsledok typu <code>float</code>. Ak chceme získať celé číslo ako výsledok delenia, môžeme použiť operátor <code>//</code>, ktorý vykonáva celočíselné delenie.</p>

<h4>Príklad celočíselného delenia:</h4>
<pre><code>delenie = 10 // 3  # 3 (celočíselný podiel)</code></pre>

<h3>Operátor modulo (%)</h3>
<p>Operátor modulo vracia zvyšok po celočíselnom delení. Je to užitočné pri zisťovaní, či je číslo deliteľné iným číslom alebo pri práci s cyklami.</p>

<h4>Príklad:</h4>
<pre><code>zvysok = 10 % 3  # 1 (zvyšok po delení 10 tromi)</code></pre>

<h3>Exponentiation (**)</h3>
<p>Operátor <code>**</code> je použitý na výkon. Tento operátor umožňuje umocnenie čísla na zadaný exponent.</p>

<h4>Príklad:</h4>
<pre><code>umocnenie = 2 ** 3  # 8 (2 na tretiu)</code></pre>

<h2>Porovnávanie celých čísel</h2>
<p>Porovnávanie celých čísel vykonávame pomocou porovnávacích operátorov, ako sú rovnosť (<code>==</code>), nerovnosť (<code>!=</code>), väčší ako (<code> &gt</code>), menší ako (<code> &lt</code>), väčší alebo rovný (<code> &gt=</code>) a menší alebo rovný (<code> &lt=</code>).</p>

<h4>Príklad:</h4>
<pre><code>a = 10
b = 5
print(a &gt b)  # True
print(a == b)  # False</code></pre>

<h2>Pretečenie a rozsah celých čísel</h2>
<p>Python podporuje veľké celé čísla a automaticky zvyšuje presnosť, ak sú čísla veľmi veľké. Neexistuje žiadny pevný rozsah celých čísel ako v niektorých iných jazykoch. Python môže pracovať s číslami, ktoré majú stovky alebo tisíce číslic, pretože podporuje dynamické zväčšovanie veľkosti celých čísel.</p>

<h3>Príklad pretečenia:</h3>
<pre><code>velke_cislo = 1234567890123456789012345678901234567890
print(velke_cislo)  # 1234567890123456789012345678901234567890</code></pre>

<h2>Funkcie a metódy pre celé čísla</h2>
<p>V Pythone existuje množstvo vstavaných funkcií a metód, ktoré sa používajú na prácu s celými číslami. Niektoré z nich sú:</p>

<ul>
  <li><code>abs()</code> – vráti absolútnu hodnotu čísla (odstráni znamienko).</li>
  <li><code>pow(x, y)</code> – vypočíta <code>x</code> umocnené na <code>y</code>.</li>
  <li><code>divmod(a, b)</code> – vráti dvojicu celočíselného delenia a zvyšku.</li>
</ul>

<h4>Príklady:</h4>
<pre><code>cislo = -10<br></br>
print(abs(cislo))  # 10<br></br>

print(pow(2, 3))  # 8<br></br>

a, b = divmod(10, 3)<br></br>
print(a)  # 3<br></br>
print(b)  # 1</code></pre>

<h2>Celé čísla v cykloch a podmienkach</h2>
<p>Celé čísla sú často používané v cykloch a podmienkach na vykonávanie rôznych výpočtov alebo rozhodnutí. Napríklad môžeme použijeme celočíselné delenie a zvyšok na iterovanie cez hodnoty alebo na rozhodovanie, či je číslo párne alebo nepárne.</p>

<h4>Príklad:</h4>
<pre><code>for i in range(1, 11):<br></br>
<t></t>   if i % 2 == 0:<br></br>
    <t></t>  <t></t>      print(f"{"i"} je párne")<br></br>
    <t></t>   else:<br></br>
    <t></t>    <t></t>    print(f"{"i"} je nepárne")</code></pre>

<h2>Záver</h2>
<p>Celé čísla sú základným a veľmi dôležitým dátovým typom v Pythone. Sú nevyhnutné pre vykonávanie aritmetických operácií, porovnávanie hodnôt a prácu s rôznymi algoritmami. Python poskytuje veľkú flexibilitu pri práci s celými číslami, vrátane podpory pre veľké číselné hodnoty, celočíselné delenie a množstvo užitočných metód a funkcií. Porozumenie základom práce s celými číslami je kľúčové pre efektívne programovanie a riešenie rôznych problémov v Python.</p>
</>
  ),
  "Float": (
    <>
    <h1>Desatinné čísla (Float) v Python</h1>
<p>Desatinné čísla (float) sú dátovým typom v Pythone, ktorý slúži na reprezentáciu čísel s desatinnou čiarkou. Tento typ sa využíva pri výpočtoch, kde je potrebná vyššia presnosť alebo práca s reálnymi číslami, ako sú váhy, dĺžky, peniaze alebo fyzikálne výpočty. V tomto článku sa pozrieme na vlastnosti a operácie s desatinnými číslami v Pythone.</p>

<h2>Definícia desatinného čísla</h2>
<p>Desatinné čísla (float) reprezentujú čísla, ktoré obsahujú desatinnú časť. Python automaticky rozpozná číslo ako float, ak obsahuje bodku (<code>.</code>).</p>

<h3>Príklady definície desatinného čísla:</h3>
<ul>
  <li><code>cislo_1 = 3.14</code> – kladné desatinné číslo.</li>
  <li><code>cislo_2 = -2.71</code> – záporné desatinné číslo.</li>
  <li><code>cislo_3 = 0.0</code> – nula ako desatinné číslo.</li>
  <li><code>cislo_4 = 1e3</code> – číslo v exponentiálnom tvare (1 × 10³ = 1000.0).</li>
</ul>

<h2>Typ desatinného čísla</h2>
<p>Typ desatinného čísla môžeme overiť pomocou funkcie <code>type()</code>. Python rozpoznáva všetky desatinné čísla ako typ <code>float</code>.</p>

<h4>Príklad:</h4>
<pre><code>cislo = 3.14
print(type(cislo))  # class float</code></pre>

<h2>Operácie s desatinnými číslami</h2>
<p>Python podporuje všetky základné aritmetické operácie aj pre desatinné čísla, podobne ako pre celé čísla.</p>

<h3>Sčítanie (+), odčítanie (-), násobenie (*) a delenie (/)</h3>
<p>Rovnako ako pri celých číslach, môžeme vykonávať základné matematické operácie. Výsledok týchto operácií je vždy typu <code>float</code>, pokiaľ do výpočtu zahrnieme aspoň jedno desatinné číslo.</p>

<h4>Príklady:</h4>
<ul>
  <li><code>sucet = 3.1 + 2.2  # 5.3</code></li>
  <li><code>rozdiel = 5.5 - 3.3  # 2.2</code></li>
  <li><code>soucin = 2.5 * 4.0  # 10.0</code></li>
  <li><code>delenie = 10.0 / 4.0  # 2.5</code></li>
</ul>

<h3>Operátor modulo (%)</h3>
<p>Modulo operátor funguje aj pre desatinné čísla a vracia zvyšok po delení.</p>

<h4>Príklad:</h4>
<pre><code>zvysok = 5.5 % 2.0  # 1.5</code></pre>

<h3>Exponentiation (**)</h3>
<p>Umocňovanie funguje rovnako ako pri celých číslach. Výsledok môže byť typu <code>float</code>.</p>

<h4>Príklad:</h4>
<pre><code>umocnenie = 2.5 ** 2  # 6.25</code></pre>

<h2>Presnosť a problémy s float</h2>
<p>Desatinné čísla v Pythone majú obmedzenú presnosť, pretože sú reprezentované v binárnom formáte IEEE 754. To môže viesť k zaokrúhľovacím chybám pri výpočtoch.</p>

<h4>Príklad chyby presnosti:</h4>
<pre><code>cislo = 0.1 + 0.2
print(cislo)  # 0.30000000000000004</code></pre>

<p>Ak potrebujeme presnejšie výpočty (napríklad pri finančných operáciách), môžeme použiť knižnicu <code>decimal</code>, ktorá umožňuje kontrolovať presnosť.</p>

<h3>Príklad použitia <code>decimal</code>:</h3>
<pre><code>from decimal import Decimal

cislo = Decimal('0.1') + Decimal('0.2')
print(cislo)  # 0.3</code></pre>

<h2>Porovnávanie desatinných čísel</h2>
<p>Porovnávanie desatinných čísel funguje pomocou rovnakých operátorov ako pri celých číslach (<code>==</code>, <code>!=</code>, <code>&st</code>, <code>&gt</code>, <code>&st=</code>, <code>&gt=</code>). Pri porovnávaní je však dôležité brať do úvahy možné chyby zaokrúhľovania.</p>

<h4>Príklad:</h4>
<pre><code>cislo_1 = 0.1 + 0.2
cislo_2 = 0.3
print(cislo_1 == cislo_2)  # False (chyba zaokrúhľovania)</code></pre>

<h2>Formátovanie desatinných čísel</h2>
<p>Pri výstupe alebo práci s desatinnými číslami môžeme použiť zaokrúhľovanie alebo formátovanie, aby sme získali presný počet desatinných miest.</p>

<h4>Príklad zaokrúhľovania:</h4>
<pre><code>cislo = 3.14159
print(round(cislo, 2))  # 3.14</code></pre>

<h4>Príklad formátovania:</h4>
<pre><code>cislo = 3.14159
print(f"&#123;cislo:.2f&#125;")  # 3.14</code></pre>

<h2>Funkcie a metódy pre desatinné čísla</h2>
<p>Python poskytuje množstvo vstavaných funkcií a metód na prácu s desatinnými číslami:</p>
<ul>
  <li><code>round(x, n)</code> – zaokrúhli číslo <code>x</code> na <code>n</code> desatinných miest.</li>
  <li><code>abs(x)</code> – vráti absolútnu hodnotu čísla.</li>
  <li><code>math.floor(x)</code> – zaokrúhli číslo nadol.</li>
  <li><code>math.ceil(x)</code> – zaokrúhli číslo nahor.</li>
</ul>

<h4>Príklad:</h4>
<pre><code>import math

cislo = -3.14
print(math.floor(cislo))  # -4
print(math.ceil(cislo))   # -3</code></pre>

<h2>Desatinné čísla v cykloch a podmienkach</h2>
<p>Desatinné čísla sa často využívajú na prácu s podmienkami alebo v cykloch, kde potrebujeme iterovať cez hodnoty s konkrétnym krokom.</p>

<h4>Príklad:</h4>
<pre><code>i = 0.0
while i &gt 1.0:
    print(f"&#123i:.1f&#125")
    i += 0.1</code></pre>

<h2>Záver</h2>
<p>Desatinné čísla (float) sú veľmi užitočným dátovým typom v Pythone. Používajú sa na reprezentáciu čísel s desatinnou časťou, pričom podporujú množstvo aritmetických operácií, funkcií a metód. Dôležité je však uvedomiť si limity presnosti tohto dátového typu a v prípade potreby využiť alternatívne riešenia, ako je knižnica <code>decimal</code>. Zvládnutie práce s desatinnými číslami je základom pre efektívne programovanie.</p>

    </>),
  "Bool": (
    <>
    <h1>Dátový typ - Boolean</h1>
<p>Boolean (skrátene <em>bool</em>) je dátový typ, ktorý predstavuje hodnoty pravdivosti. Používa sa na vyjadrenie logických hodnôt <strong>True</strong> (pravda) a <strong>False</strong> (nepravda). Tento typ je kľúčový v podmienkach, cykloch a rozhodovacích procesoch v programovaní.</p>

<h2>Základné vlastnosti bool</h2>
<ul>
  <li>Boolean má len dve hodnoty: <strong>True</strong> a <strong>False</strong>.</li>
  <li>Je odvodený od celého čísla (True sa správa ako 1, False ako 0).</li>
  <li>Boolean sa často používa v podmienkach na kontrolu výrazov.</li>
</ul>

<h2>Príklady vytvorenia Boolean hodnôt</h2>
<pre><code>
# Priame priradenie
logicka_hodnota = True

# Výsledok porovnávacieho výrazu
logicka_hodnota = 10 &gt 5  # &#123;True&#125;

# Použitie v podmienke
if logicka_hodnota:
    print("Podmienka je splnená.")
</code></pre>

<h2>Bool hodnoty a ich vzťah k číslam</h2>
<ul>
  <li>Hodnota <strong>True</strong> je ekvivalentná číslu 1.</li>
  <li>Hodnota <strong>False</strong> je ekvivalentná číslu 0.</li>
  <li>Boolean hodnota sa dá získať z iných typov pomocou funkcie <code>bool()</code>:</li>
</ul>
<pre><code>
# Prevod hodnôt na bool
bool_hodnota_1 = bool(1)  # &#123;True&#125;
bool_hodnota_0 = bool(0)  # &#123;False&#125;

# Prevod zo stringu
bool_prazdny = bool("")  # &#123;False&#125;
bool_neprazdny = bool("text")  # &#123;True&#125;
</code></pre>

<h2>Porovnávacie operátory</h2>
<p>Porovnávacie operátory vracajú bool hodnotu na základe výsledku porovnania:</p>
<ul>
  <li><code>==</code>: porovnáva rovnosť dvoch hodnôt</li>
  <li><code>!=</code>: porovnáva nerovnosť</li>
  <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>: väčší/menší alebo rovný</li>
</ul>
<pre><code>
# Použitie porovnávacích operátorov
x = 10
y = 5

je_vacsie = x &gt; y  # &#123;True&#125;
je_rovne = x == y    # &#123;False&#125;
</code></pre>

<h2>Logické operátory</h2>
<p>Logické operátory sa používajú na kombinovanie bool hodnôt:</p>
<ul>
  <li><code>and</code>: True, ak obe hodnoty sú True</li>
  <li><code>or</code>: True, ak aspoň jedna hodnota je True</li>
  <li><code>not</code>: Obracia hodnotu (True na False a naopak)</li>
</ul>
<pre><code>
# Logické operácie
a = True
b = False

print(a and b)  # &#123;False&#125;
print(a or b)   # &#123;True&#125;
print(not a)    # &#123;False&#125;
</code></pre>

<h2>Bool v podmienkach a cykloch</h2>
<p>Bool sa často používa na kontrolu podmienok:</p>
<pre><code>
# Podmienka s bool
x = 10
if x &gt; 5:
    print("x je väčšie ako 5.")

# Cyklus s bool
pokracovat = True
while pokracovat:
    print("Tento cyklus beží.")
    pokracovat = False
</code></pre>

<h2>Prečo je Boolean dôležitý?</h2>
<p>Boolean je základom logického programovania. Pomáha rozhodovať, riadiť tok programov a spracovávať údaje na základe ich pravdivosti. Schopnosť efektívne používať bool hodnoty zjednodušuje kód a zvyšuje jeho čitateľnosť.</p>

    </>),
    "List": (
    <>
    <h1>Dátový typ - List</h1>
<p><strong>List</strong> je dátová štruktúra v Pythone, ktorá umožňuje uchovávať kolekciu prvkov. Listy sú flexibilné a umožňujú ukladanie rôznych typov dát vrátane čísiel, stringov, či dokonca iných listov.</p>

<h2>Vlastnosti listov</h2>
<ul>
  <li>Listy sú <strong>mutabilné</strong> – ich obsah možno meniť.</li>
  <li>Umožňujú uchovávať prvky rôznych typov (napr. čísla, stringy, iné objekty).</li>
  <li>Prvky v liste sú <strong>usporiadané</strong> a prístupné pomocou indexov.</li>
  <li>Listy môžu byť prázdne alebo obsahovať ľubovoľný počet prvkov.</li>
</ul>

<h2>Vytváranie listov</h2>
<pre><code>
# Prázdny list
moj_list = []

# List s hodnotami
moj_list = [1, 2, 3, 4]

# List s rôznymi typmi dát
mix_list = [1, "text", 3.14, True]

# Vnorený list
vnoreny_list = [[1, 2], [3, 4]]
</code></pre>

<h2>Prístup k prvkom v liste</h2>
<p>Prvky listu sú prístupné pomocou ich indexu (indexovanie začína od 0):</p>
<pre><code>
# Prístup k prvkom podľa indexu
prvy = moj_list[0]  # &#123;1&#125;
druhy = moj_list[1]  # &#123;2&#125;

# Negatívne indexy pre prístup od konca
posledny = moj_list[-1]  # &#123;4&#125;
predposledny = moj_list[-2]  # &#123;3&#125;
</code></pre>

<h2>Modifikácia listov</h2>
<p>Listy sú mutabilné, čo znamená, že ich obsah možno meniť:</p>
<pre><code>
# Zmena prvku v liste
moj_list[1] = 10  # &#123;[1, 10, 3, 4]&#125;

# Pridanie nového prvku na koniec
moj_list.append(5)  # &#123;[1, 10, 3, 4, 5]&#125;

# Vloženie prvku na konkrétnu pozíciu
moj_list.insert(2, 99)  # &#123;[1, 10, 99, 3, 4, 5]&#125;

# Odstránenie prvku podľa hodnoty
moj_list.remove(99)  # &#123;[1, 10, 3, 4, 5]&#125;

# Odstránenie prvku podľa indexu
del moj_list[0]  # &#123;[10, 3, 4, 5]&#125;
</code></pre>

<h2>Iterácia cez list</h2>
<p>Na iteráciu cez prvky listu sa často používa cyklus <code>for</code>:</p>
<pre><code>
# Prechod cez prvky v liste
for prvok in moj_list:
    print(prvok)

# Prechod cez prvky pomocou ich indexov
for i in range(len(moj_list)):
    print(moj_list[i])
</code></pre>

<h2>Základné operácie nad listami</h2>
<ul>
  <li><code>len()</code>: Získanie dĺžky listu.</li><br></br>
  <li><code>in</code>: Kontrola, či prvok existuje v liste.</li><br></br>
  <li><code>+</code>: Spojenie dvoch listov.</li><br></br>
  <li><code>*</code>: Opakovanie prvkov v liste.</li>
</ul>
<code>
Dĺžka listu<br></br> dlzka = len(moj_list)  # &#123;4&#125;<br></br>

# Kontrola, či prvok existuje<br></br>
je_v_liste = 3 in moj_list  # &#123;True&#125;<br></br>

# Spojenie dvoch listov<br></br>
novy_list = moj_list + [6, 7]  # &#123;[10, 3, 4, 5, 6, 7]&#125;<br></br>

# Opakovanie prvkov<br></br>
opakuj = moj_list * 2  # &#123;[10, 3, 4, 5, 10, 3, 4, 5]&#125;<br></br>
</code>

<h2>Špeciálne funkcie a metódy listov</h2>
<ul>
  <li><code>append()</code>: Pridá prvok na koniec.</li>
  <li><code>extend()</code>: Pridá viac prvkov na koniec listu.</li>
  <li><code>pop()</code>: Odstráni a vráti posledný (alebo konkrétny) prvok.</li>
  <li><code>sort()</code>: Zoradí prvky v liste.</li>
  <li><code>reverse()</code>: Obráti poradie prvkov.</li>
  <li><code>index()</code>: Nájde index prvého výskytu hodnoty.</li>
</ul>
<pre><code>
# Pridanie viacerých prvkov
moj_list.extend([6, 7])  # &#123;[10, 3, 4, 5, 6, 7]&#125;

# Odstránenie posledného prvku
posledny = moj_list.pop()  # &#123;7&#125;

# Zoradenie prvkov
moj_list.sort()  # &#123;[3, 4, 5, 6, 10]&#125;

# Obrátenie poradia
moj_list.reverse()  # &#123;[10, 6, 5, 4, 3]&#125;
</code></pre>

<h2>Listy ako dynamické pole</h2>
<p>V Pythone sú listy implementované ako dynamické pole, čo znamená, že ich veľkosť sa automaticky prispôsobuje pri pridávaní alebo odstraňovaní prvkov. To umožňuje flexibilné a efektívne manipulovanie s dátami.</p>

<h2>Prečo sú listy dôležité?</h2>
<p>Listy sú univerzálne dátové štruktúry, ktoré umožňujú efektívne ukladanie a manipuláciu s kolekciami dát. Ich široké použitie ich robí nevyhnutnými v rôznych oblastiach programovania, od spracovania dát po implementáciu algoritmov.</p>

    </>),
    "Dict": (
    <>
    <h1>Dátový typ - Dict</h1>
<p><strong>Dict</strong> (skratka pre dictionary) je dátová štruktúra v Pythone, ktorá umožňuje uchovávať páry kľúč-hodnota. Každý kľúč je unikátny a používa sa na získanie príslušnej hodnoty.</p>

<h2>Vlastnosti dictov</h2>
<ul>
  <li>Dicty sú <strong>mutabilné</strong> – ich obsah možno meniť.</li>
  <li>Umožňujú uchovávať rôzne typy hodnôt (napr. čísla, stringy, iné objekty).</li>
  <li>Kľúče sú <strong>unikátne</strong> a nemôžu sa opakovať.</li>
  <li>Dicty sú <strong>neusporiadané</strong> (používajú sa na rýchly prístup cez kľúče).</li>
</ul>

<h2>Vytváranie dictov</h2>
<pre><code>
# Prázdny dict
moj_dict = &#123;&#125;

# Dict s kľúčmi a hodnotami
moj_dict = &#123;"meno": "Janko", "vek": 30&#125;

# Dict s rôznymi typmi dát
mix_dict = &#123;"cislo": 5, "meno": "Anna", "flot": 3.14&#125;

# Vnorený dict
vnoreny_dict = &#123;"osoba1": &#123;"meno": "Janko", "vek": 30&#125;, "osoba2": &#123;"meno": "Anna", "vek": 25&#125;&#125;
</code></pre>

<h2>Prístup k hodnotám v dict</h2>
<p>Hodnoty v dict sa získavajú pomocou kľúčov:</p>
<pre><code>
# Prístup k hodnote podľa kľúča
meno = moj_dict["meno"]  # &#123;"Janko"&#125;
vek = moj_dict["vek"]  # &#123;30&#125;
</code></pre>

<h2>Modifikácia dictov</h2>
<p>Dicty sú mutabilné, čo znamená, že ich obsah možno meniť:</p>
<pre><code>
# Zmena hodnoty pre konkrétny kľúč
moj_dict["vek"] = 35  # &#123;"meno": "Janko", "vek": 35&#125;

# Pridanie nového kľúča a hodnoty
moj_dict["adresa"] = "Prešov"  # &#123;"meno": "Janko", "vek": 35, "adresa": "Prešov"&#125;

# Odstránenie kľúča a hodnoty
del moj_dict["adresa"]  # &#123;"meno": "Janko", "vek": 35&#125;
</code></pre>

<h2>Iterácia cez dict</h2>
<p>Na iteráciu cez kľúče a hodnoty v dict sa často používajú cykly:</p>
<pre><code>
# Prechod cez kľúče
for kluc in moj_dict:
    print(kluc)

# Prechod cez hodnoty
for hodnota in moj_dict.values():
    print(hodnota)

# Prechod cez kľúče a hodnoty
for kluc, hodnota in moj_dict.items():
    print(kluc, hodnota)
</code></pre>

<h2>Základné operácie nad dictmi</h2>
<ul>
  <li><code>len()</code>: Získanie počtu kľúčov v dict.</li>
  <li><code>in</code>: Kontrola, či kľúč existuje v dict.</li>
  <li><code>get()</code>: Získanie hodnoty pre daný kľúč, bez vyvolania chyby, ak kľúč neexistuje.</li>
</ul>
<pre><code>
# Dĺžka dictu
dlzka = len(moj_dict)  # &#123;2&#125;

# Kontrola, či kľúč existuje
je_v_dict = "meno" in moj_dict  # &#123;True&#125;

# Získanie hodnoty pre kľúč
vek = moj_dict.get("vek")  # &#123;35&#125;
</code></pre>

<h2>Špeciálne funkcie a metódy dictov</h2>
<ul>
  <li><code>update()</code>: Pridá alebo upraví kľúče a hodnoty z iného dictu alebo iterovateľného objektu.</li>
  <li><code>pop()</code>: Odstráni kľúč a vráti hodnotu.</li>
  <li><code>clear()</code>: Odstráni všetky kľúče a hodnoty z dictu.</li>
  <li><code>keys()</code>: Získa všetky kľúče.</li>
  <li><code>values()</code>: Získa všetky hodnoty.</li>
  <li><code>items()</code>: Získa všetky páry kľúč-hodnota.</li>
</ul>
<pre><code>
# Pridanie alebo zmena kľúčov
moj_dict.update(&#123;"vek": 40, "mesto": "Košice"&#125;)  # &#123;"meno": "Janko", "vek": 40, "mesto": "Košice"&#125;

# Odstránenie kľúča a hodnoty
vek = moj_dict.pop("vek")  # &#123;40&#125;

# Vymazanie všetkých prvkov
moj_dict.clear()  # &#123;&#125;

# Získanie všetkých kľúčov
kluce = moj_dict.keys()  # &#123;"meno", "mesto"&#125;

# Získanie všetkých hodnôt
hodnoty = moj_dict.values()  # &#123;"Janko", "Košice"&#125;

# Získanie všetkých párov kľúč-hodnota
páry = moj_dict.items()  # &#123;("meno", "Janko"), ("mesto", "Košice")&#125;
</code></pre>

<h2>Dicty ako mapa</h2>
<p>Dicty v Pythone sú implementované ako hash-mapy, čo znamená, že kľúče sú mapované na hodnoty pomocou hashovacích funkcií. Tento prístup umožňuje veľmi rýchly prístup k hodnotám na základe kľúče.</p>

<h2>Prečo sú dicty dôležité?</h2>
<p>Dicty sú veľmi užitočné, keď potrebujeme rýchly a efektívny prístup k dátam cez kľúče. Ich flexibilita a rýchlosť ich robí nevyhnutnými pre rôzne aplikácie, ako je napríklad spracovanie dát alebo implementácia rôznych algoritmov.</p>

    </>),
     "Tuple": (
      <>
      <h1>Dátový typ - Tuple</h1>
<p><strong>Tuple</strong> je dátová štruktúra v Pythone, ktorá umožňuje uchovávať kolekciu prvkov. Tupl je podobný listu, ale jeho obsah je <strong>neutrálny</strong>, čo znamená, že nie je možné ho meniť po vytvorení.</p>

<h2>Vlastnosti tuple</h2>
<ul>
  <li>Tupl je <strong>imutabilný</strong> – jeho obsah nemožno meniť po jeho vytvorení.</li>
  <li>Umožňuje uchovávať prvky rôznych typov (napr. čísla, stringy, iné objekty).</li>
  <li>Prvky v tuple sú <strong>usporiadané</strong> a prístupné pomocou indexov.</li>
  <li>Tuple môžu byť prázdne alebo obsahovať ľubovoľný počet prvkov.</li>
</ul>

<h2>Vytváranie tuple</h2>
<pre><code>
# Prázdny tuple
moj_tuple = &#123;&#125;

# Tuple s hodnotami
moj_tuple = &#123;1, 2, 3, 4&#125;

# Tuple s rôznymi typmi dát
mix_tuple = &#123;1, "text", 3.14, True&#125;

# Vnorený tuple
vnoreny_tuple = &#123;&#123;1, 2&#125;, &#123;3, 4&#125;&#125;
</code></pre>

<h2>Prístup k prvkom v tuple</h2>
<p>Prvky tuple sú prístupné pomocou ich indexu (indexovanie začína od 0):</p>
<pre><code>
# Prístup k prvkom podľa indexu
prvy = moj_tuple[0]  # &#123;1&#125;
druhy = moj_tuple[1]  # &#123;2&#125;

# Negatívne indexy pre prístup od konca
posledny = moj_tuple[-1]  # &#123;4&#125;
predposledny = moj_tuple[-2]  # &#123;3&#125;
</code></pre>

<h2>Modifikácia tuple</h2>
<p>Tuple sú imutabilné, takže ich obsah nemožno meniť. Avšak, môžete vytvoriť nový tuple na základe existujúceho:</p>
<pre><code>
# Zmena prvku v tuple (príklad vytvorenia nového tuple)
novy_tuple = moj_tuple[0:2] + &#123;99&#125; + moj_tuple[2:]  # &#123;1, 2, 99, 3, 4&#125;
</code></pre>

<h2>Iterácia cez tuple</h2>
<p>Na iteráciu cez prvky tuple sa často používa cyklus <code>for</code>:</p>
<pre><code>
# Prechod cez prvky v tuple
for prvok in moj_tuple:
    print(prvok)

# Prechod cez prvky pomocou ich indexov
for i in range(len(moj_tuple)):
    print(moj_tuple[i])
</code></pre>

<h2>Základné operácie nad tuple</h2>
<ul>
  <li><code>len()</code>: Získanie dĺžky tuple.</li>
  <li><code>in</code>: Kontrola, či prvok existuje v tuple.</li>
  <li><code>+</code>: Spojenie dvoch tuple.</li>
  <li><code>*</code>: Opakovanie prvkov v tuple.</li>
</ul>
<pre><code>
# Dĺžka tuple
dlzka = len(moj_tuple)  # &#123;4&#125;

# Kontrola, či prvok existuje v tuple
je_v_tuple = 3 in moj_tuple  # &#123;True&#125;

# Spojenie dvoch tuple
novy_tuple = moj_tuple + &#123;6, 7&#125;  # &#123;1, 2, 3, 4, 6, 7&#125;

# Opakovanie prvkov
opakuj = moj_tuple * 2  # &#123;1, 2, 3, 4, 1, 2, 3, 4&#125;
</code></pre>

<h2>Špeciálne funkcie a metódy tuple</h2>
<ul>
  <li><code>count()</code>: Počíta výskyt konkrétneho prvku v tuple.</li>
  <li><code>index()</code>: Nájde index prvého výskytu hodnoty v tuple.</li>
</ul>
<pre><code>
# Počet výskytov prvku
pocet = moj_tuple.count(2)  # &#123;1&#125;

# Index prvého výskytu hodnoty
index = moj_tuple.index(3)  # &#123;2&#125;
</code></pre>

<h2>Tuple ako nemenné kolekcie</h2>
<p>Tuple sú vhodné pre prípady, keď je dôležité zachovať nevyhnutnosť nemennosti dát. Ich výhodou je rýchlosť a bezpečnosť pri práci s dátami, ktoré sa nemajú meniť.</p>

<h2>Prečo sú tuple dôležité?</h2>
<p>Tuple sú vhodné na uchovávanie dát, ktoré by sa nemali meniť počas vykonávania programu. Ich nezmeniteľnosť poskytuje väčšiu bezpečnosť a efektívnosť pri práci s dátami, a sú využívané tam, kde je požiadavka na nemennosť údajov (napr. kľúče v dictionary).</p>
</>),"Operatory":(
  <>
  <h1>Operátory</h1>
  <p><strong>Operátory</strong> v programovaní sú špeciálne symboly alebo kľúčové slová, ktoré umožňujú vykonávať operácie nad hodnotami alebo premennými. Python podporuje množstvo rôznych typov operátorov.</p>
  
  <h2>Typy operátorov</h2>
  <ul>
    <li><strong>Aritmetické operátory</strong>: Operácie s číslami (sčítanie, odčítanie, násobenie atď.).</li>
    <li><strong>Porovnávacie operátory</strong>: Porovnanie dvoch hodnôt.</li>
    <li><strong>Logické operátory</strong>: Kombinovanie podmienok.</li>
    <li><strong>Priraďovacie operátory</strong>: Priraďovanie hodnôt premenným.</li>
    <li><strong>Bitové operátory</strong>: Operácie na úrovni jednotlivých bitov.</li>
    <li><strong>Ostatné operátory</strong>: Členstvo (<code>in</code>) a identita (<code>is</code>).</li>
  </ul>
  
  <h2>Aritmetické operátory</h2>
  <pre><code>
  # Sčítanie<br></br>
  vysledok = 5 + 3  # 8<br></br><br></br>
  
  # Odčítanie<br></br>
  vysledok = 5 - 3  # 2<br></br><br></br>
  
  # Násobenie<br></br>
  vysledok = 5 * 3  # 15<br></br>
  <br></br>
  # Delenie<br></br>
  vysledok = 5 / 3  # 1.666...<br></br><br></br>
  
  # Celé delenie<br></br>
  vysledok = 5 // 3  # 1<br></br><br></br>
  
  # Modulo (zvyšok po delení)<br></br>
  vysledok = 5 % 3  # 2<br></br><br></br>
  
  # Mocnina<br></br>
  vysledok = 5 ** 3  # 125<br></br><br></br>
  </code></pre>
  
  <h2>Porovnávacie operátory</h2>
  <p>Porovnávacie operátory vracajú hodnoty <code>True</code> alebo <code>False</code>:</p>
  <pre><code><br></br>
  # Rovnosť<br></br>
  vysledok = 5 == 3  # False<br></br><br></br>
  
  # Nerovnosť<br></br>
  vysledok = 5 != 3  # True<br></br><br></br>
  
  # Väčší alebo menší<br></br>
  vysledok = 5 &gt 3  # True<br></br>
  vysledok = 5 &lt 3  # False<br></br><br></br>
  
  # Väčší alebo rovný, menší alebo rovný<br></br>
  vysledok = 5 &gt= 3  # True<br></br>
  vysledok = 5 &lt= 3  # False<br></br><br></br>
  </code></pre>
  
  <h2>Logické operátory</h2>
  <p>Na kombinovanie podmienok sa používajú logické operátory:</p>
  <pre><code>
  # AND<br></br>
  vysledok = (5 &gt 3) and (3 &gt 2)  # True<br></br>
  
  # OR<br></br>
  vysledok = (5 &gt 3) or (3 &lt 2)  # True<br></br><br></br>
  
  # NOT<br></br>
  vysledok = not (5 &gt 3)  # False<br></br><br></br>
  </code></pre>
  
  <h2>Priraďovacie operátory</h2>
  <p>Priraďovacie operátory sa používajú na priraďovanie hodnôt premenným:</p>
  <pre><code>
  # Jednoduché priradenie<br></br>
  x = 5<br></br><br></br>
  
  # Sčítanie a priradenie<br></br>
  x += 3  # x = x + 3<br></br><br></br>
  
  # Odčítanie a priradenie<br></br>
  x -= 3  # x = x - 3<br></br><br></br>
  
  # Násobenie a priradenie<br></br>
  x *= 3  # x = x * 3<br></br><br></br>
  
  # Delenie a priradenie<br></br>
  x /= 3  # x = x / 3<br></br><br></br>
  
  # Modulo a priradenie<br></br>
  x %= 3  # x = x % 3<br></br><br></br>
  
  # Mocnina a priradenie<br></br>
  x **= 3  # x = x ** 3<br></br>
  </code></pre>
  
  <h2>Bitové operátory</h2>
  <p>Operátory na prácu s bitmi (možete si pamätať z hodín elektotechniky):</p>
  <pre><code>
  # AND<br></br>
  vysledok = 5 & 3  # 1<br></br>
  
  # OR<br></br>
  vysledok = 5 | 3  # 7<br></br>
  <br></br>
  # XOR<br></br>
  vysledok = 5 ^ 3  # 6<br></br><br></br>
  
  # Posun doľava<br></br>
  vysledok = 5 &lt&lt 1  # 10<br></br><br></br>
  
  # Posun doprava<br></br>
  vysledok = 5 &gt&gt 1  # 2<br></br>
  </code></pre>
  
  <h2>Ostatné operátory</h2>
  <p>Členstvo a identita:</p>
  <pre><code>
  # Členstvo<br></br>
  vysledok = 3 in [1, 2, 3]  # True<br></br>
  
  # Identita<br></br>
  vysledok = x is y  # True, ak x a y sú rovnaké objekty<br></br><br></br>
  </code></pre>
  
  <h2>Prečo sú operátory dôležité?</h2>
  <p>Operátory umožňujú vykonávať základné operácie nad dátami, čo je základom každého programovacieho jazyka. Porozumenie ich použitiu je kľúčové pre efektívne písanie kódu.</p>
  </>
  
),"Podmienky":(
  <>
<h1>Podmienky</h1>
<p><strong>Podmienky</strong> v programovaní umožňujú vykonávať rôzne časti kódu na základe splnenia určitých podmienok. V Pythone sa na implementáciu podmienok používajú kľúčové slová ako <code>if</code>, <code>elif</code>, a <code>else</code>.</p>

<h2>Základná syntax podmienok</h2>
<pre><code>
if podmienka:<br></br>
    &emsp;# Blok kódu, ktorý sa vykoná, ak je podmienka splnená<br></br>
elif iná_podmienka:<br></br>
    &emsp;# Blok kódu, ktorý sa vykoná, ak je splnená iná podmienka<br></br>
else:<br></br>
    &emsp;# Blok kódu, ktorý sa vykoná, ak žiadna podmienka nie je splnená<br></br>
</code></pre>

<h2>Príklad podmienok</h2>
<pre><code>
# Kontrola veku<br></br>
vek = 18<br></br>
if vek &#62;= 18:<br></br>
    &emsp;print("Ste dospelý.")<br></br>
elif vek &#62;= 15:<br></br>
    &emsp;print("Ste tínedžer.")<br></br>
else:<br></br>
    &emsp;print("Ste dieťa.")<br></br>
</code></pre>

<h2>Podmienky s logickými operátormi</h2>
<p>Kombinácia podmienok sa vykonáva pomocou logických operátorov (<code>and</code>, <code>or</code>, <code>not</code>):</p>
<pre><code>
# Kontrola čísel<br></br>
cislo = 10<br></br>
if cislo &#62; 0 and cislo &#60; 100:<br></br>
    &emsp;print("Číslo je v intervale 0 až 100.")<br></br>
if not cislo &#62; 0:<br></br>
    &emsp;print("Číslo nie je záporné.")<br></br>
</code></pre>

<h2>Vnorené podmienky</h2>
<p>Podmienky môžu byť vnorené do seba, aby pokryli viacero scenárov:</p>
<pre><code>
# Kategorizácia známky<br></br>
znamka = 3<br></br>
if znamka &#62;= 1:<br></br>
    &emsp;if znamka &#60;= 3:<br></br>
        &emsp;&emsp;print("Dobrá známka.")<br></br>
    &emsp;else:<br></br>
        &emsp;&emsp;print("Priemerná známka.")<br></br>
else:<br></br>
    &emsp;print("Zlá známka.")<br></br>
</code></pre>

<h2>Podmienky v skrátenom zápise</h2>
<p>Python umožňuje skrátený zápis jednoduchých podmienok pomocou operátoru <code>if-else</code>:</p>
<pre><code>
# Skrátený zápis<br></br>
vek = 20<br></br>
vysledok = "Dospelý" if vek &#62;= 18 else "Nedospelý"<br></br>
print(vysledok)<br></br>
</code></pre>

<h2>Práca s podmienkami vo funkciách</h2>
<p>Podmienky sa často používajú vo funkciách na rozhodovanie:</p>
<pre><code>
# Funkcia na kontrolu párneho čísla<br></br>
def je_parne(cislo):<br></br>
    &emsp;if cislo % 2 == 0:<br></br>
        &emsp;&emsp;return True<br></br>
    &emsp;else:<br></br>
        &emsp;&emsp;return False<br></br>

# Použitie funkcie<br></br>
print(je_parne(4))  # True<br></br>
</code></pre>

<h2>Prečo sú podmienky dôležité?</h2>
<p>Podmienky umožňujú riadiť tok programu na základe rôznych situácií. Sú kľúčovým prvkom pri písaní logiky, ktorá reaguje na rôzne vstupy alebo stavy aplikácie.</p>
</>


),"Cyklus":(
  <>
<h1>Úvod do cyklov</h1>
<p><strong>Cyklus</strong> v programovaní je konštrukcia, ktorá umožňuje opakovane vykonávať určitý blok kódu. Používa sa, keď potrebujeme niečo opakovať, napríklad prechádzať cez položky zoznamu alebo vykonávať akciu, kým nie je splnená určitá podmienka.</p>

<h2>Druhy cyklov v Pythone</h2>
<p>V Pythone existujú dva hlavné druhy cyklov:</p>
<ul>
  <li><code>for</code> cyklus: Používa sa na iteráciu cez sekvencie (zoznamy, tuple, stringy, range).</li>
  <li><code>while</code> cyklus: Používa sa na vykonávanie kódu, kým je splnená určitá podmienka.</li>
</ul>

<h2>Prečo používať cykly?</h2>
<p>Cykly sú dôležitým nástrojom, pretože:</p>
<ul>
  <li>Šetria čas a znižujú množstvo kódu pri opakovaniach.</li>
  <li>Umožňujú efektívne spracovanie dát.</li>
  <li>Sú základným prvkom algoritmov a logiky programovania.</li>
</ul>

<h2>Základné príklady cyklov</h2>

<h3>For cyklus</h3>
<pre><code>
# Prechod cez zoznam pomocou for<br></br>
zoznam = [1, 2, 3, 4]<br></br>
for prvok in zoznam:<br></br>
    print(prvok)<br></br>
</code></pre>

<h3>While cyklus</h3>
<pre><code>
# Opakovanie, kým je splnená podmienka<br></br>
cislo = 0<br></br>
while cislo &lt  5:<br></br>
    print(cislo)<br></br>
    cislo += 1<br></br>
</code></pre>

<h2>Prelom a pokračovanie v cykloch</h2>
<p>Python obsahuje kľúčové slová <code>break</code> a <code>continue</code>, ktoré umožňujú riadiť tok cyklu:</p>
<pre><code>
# Použitie break<br></br>
for cislo in range(10):<br></br>
    if cislo == 5:<br></br>
        break  # Cyklus sa ukončí<br></br>
    print(cislo)<br></br>

# Použitie continue<br></br>
for cislo in range(10):<br></br>
    if cislo % 2 == 0:<br></br>
        continue  # Preskočí aktuálnu iteráciu<br></br>
    print(cislo)<br></br>
</code></pre>

<h2>Kedy použiť ktorý cyklus?</h2>
<ul>
  <li>Použite <code>for</code>, keď viete, koľko iterácií potrebujete (napr. prechádzanie zoznamu).</li>
  <li>Použite <code>while</code>, keď chcete vykonávať akciu, kým platí určitá podmienka.</li>
</ul>

<h2>Zhrnutie</h2>
<p>Cyklus je základný nástroj, ktorý umožňuje zjednodušiť a efektívne vykonávať opakovania v kóde. V ďalších sekciách sa detailnejšie pozrieme na jednotlivé typy cyklov.</p>
</>

),"For":(
  <>
<h1>For cyklus</h1>
<p><strong>For cyklus</strong> je jedným z najpoužívanejších cyklov v Pythone. Umožňuje prechádzať cez sekvencie ako zoznamy, reťazce alebo iné iterovateľné objekty a vykonávať akcie pre každý prvok v tejto sekvencii.</p>

<h2>Základná syntax for cyklu</h2>
<pre><code>
for prvok in sekvencia:<br></br>
    # Blok kódu, ktorý sa vykoná pre každý prvok v sekvencii<br></br>
</code></pre>

<h2>Príklad základného for cyklu</h2>
<pre><code>
# Prechod cez zoznam<br></br>
zoznam = [1, 2, 3, 4, 5]<br></br>
for cislo in zoznam:<br></br>
    print(cislo)<br></br>
</code></pre>

<h2>For cyklus s funkciou range()</h2>
<p>Funkcia <code>range()</code> sa často používa v kombinácii s <code>for</code> cyklom na generovanie číselných sekvencií:</p>
<pre><code>
# For cyklus s range<br></br>
for i in range(5):<br></br>
    print(i)  # Vytlačí čísla 0, 1, 2, 3, 4<br></br>
</code></pre>

<h2>Vnorený for cyklus</h2>
<p>For cykly môžu byť vnorené, čo znamená, že jeden cyklus je umiestnený vo vnútri iného:</p>
<pre><code>
# Vnorený for cyklus<br></br>
for i in range(3):<br></br>
    for j in range(2):<br></br>
        print(f"i: i, j: j")<br></br>
</code></pre>

<h2>Prechod cez znaky v reťazci</h2>
<p>For cyklus môžete použiť aj na prechod cez znaky v reťazci:</p>
<pre><code>
# Prechod cez znaky v reťazci<br></br>
retezec = "Hello"<br></br>
for znak in retezec:<br></br>
    print(znak)<br></br>
</code></pre>


<h2>For cyklus s krokovaním</h2>
<p>Funkcia <code>range()</code> umožňuje definovať krok, ktorý určuje, aký krok sa použije pri generovaní čísel:</p>
<pre><code>
# For cyklus s krokovaním<br></br>
for i in range(0, 10, 2):  # Krok 2<br></br>
    print(i)  # Vytlačí 0, 2, 4, 6, 8<br></br>
</code></pre>

<h2>Prečo je for cyklus dôležitý?</h2>
<p>For cyklus je užitočný na prechod cez sekvencie a opakovanie operácií na základe týchto sekvencií. Je to nevyhnutný nástroj pri spracovaní kolekcií dát v programovaní.</p>
</>

),"While":(
  <>
<h1>Dátový typ - While cyklus</h1>
<p><strong>While cyklus</strong> je ďalší typ cyklu v Pythone, ktorý vykonáva blok kódu, kým je podmienka pravdivá. Tento cyklus je užitočný v prípadoch, keď nevieme vopred, koľkokrát sa má kód vykonať.</p>

<h2>Základná syntax while cyklu</h2>
<pre><code>
while podmienka:<br></br>
    # Blok kódu, ktorý sa vykoná, kým je podmienka pravdivá<br></br>
</code></pre>

<h2>Príklad základného while cyklu</h2>
<pre><code>
# Počítanie od 1 do 5<br></br>
cislo = 1<br></br>
while cislo &#60= 5:<br></br>
    print(cislo)<br></br>
    cislo += 1<br></br>
</code></pre>

<h2>Bežné použitie while cyklu</h2>
<p>While cyklus sa často používa na opakovanie operácií, ktoré sa majú vykonávať, kým sa podmienka neprestane plniť:</p>
<pre><code>
# Hľadanie čísel, ktoré sú menšie ako 10<br></br>
cislo = 0<br></br>
while cislo &#60 10:<br></br>
    print(cislo)<br></br>
    cislo += 1<br></br>
</code></pre>

<h2>Infinite loop (nekonečný cyklus)</h2>
<p>Ak podmienka while cyklu nikdy neprestane byť pravdivá, vytvorí sa nekonečný cyklus:</p>
<pre><code>
# Nekonečný cyklus (Pozor na použitie!)<br></br>
while True:<br></br>
    print("Tento cyklus sa nikdy nezastaví.")<br></br>
</code></pre>

<h2>Prerušenie while cyklu pomocou break</h2>
<p>Pomocou príkazu <code>break</code> môžeme cyklus predčasne ukončiť:</p>
<pre><code>
# Ukončenie cyklu pri dosiahnutí určitej hodnoty<br></br>
cislo = 0<br></br>
while True:<br></br>
    cislo += 1<br></br>
    if cislo == 5:<br></br>
        break<br></br>
    print(cislo)<br></br>
</code></pre>

<h2>Pokračovanie cyklu pomocou continue</h2>
<p>Príkaz <code>continue</code> umožňuje preskočiť aktuálnu iteráciu cyklu a pokračovať v ďalšej:</p>
<pre><code>
# Preskočenie čísel, ktoré sú deliteľné 2<br></br>
cislo = 0<br></br>
while cislo &#60 10:<br></br>
    cislo += 1<br></br>
    if cislo % 2 == 0:<br></br>
        continue<br></br>
    print(cislo)<br></br>
</code></pre>

<h2>Práca s podmienkami vo while cykle</h2>
<p>While cyklus sa dá kombinovať s podmienkami pre ešte flexibilnejšiu kontrolu toku programu:</p>
<pre><code>
# Použitie podmienky vo while cykle<br></br>
cislo = 0<br></br>
while cislo &#60 10:<br></br>
    if cislo % 2 == 0:<br></br>
        print(f"\u007Bcislo\u007D je párne.")<br></br>
    else:<br></br>
        print(f"\u007Bcislo\u007D je nepárne.")<br></br>
    cislo += 1<br></br>
</code></pre>

<h2>Prečo je while cyklus dôležitý?</h2>
<p>While cyklus je užitočný, keď nevieme vopred, koľkokrát sa cyklus vykoná, a je potrebné vykonávať operácie, kým sa nezmení určitý stav alebo podmienka. Je flexibilný a umožňuje riešiť rôzne problémy, kde je potrebná dynamická kontrola podmienok.</p>
</>

),"Markdown":(
  <>
<h1>Základy Markdown</h1>
<p><strong>Markdown</strong> je jednoduchý jazyk na formátovanie textu, ktorý umožňuje rýchle a efektívne vytváranie dokumentov, poznámok a zápiskov. Markdown sa používa na písanie textov, ktoré môžu byť ľahko prevedené do formátov ako HTML.</p>

<h2>Základné formátovanie textu</h2>
<p>Markdown ponúka jednoduché spôsoby formátovania textu pomocou špeciálnych znakov:</p>


<h3>Nadpis</h3>
<p>Ak chcete vytvoriť nadpis, použite hastag pred slovom <code>#slovo</code>:</p>
<pre><code>
#Toto je nadpis<br></br>
</code></pre>

<h3>Tučný text</h3>
<p>Ak chcete vytvoriť tučný text, použite dve hviezdičky <code>**</code> alebo podtržítka <code>__</code> okolo textu:</p>
<pre><code>
**Toto je tučný text**<br></br>
</code></pre>

<h3>Kurzíva</h3>
<p>Pre kurzívu použite jednu hviezdičku <code>*</code> alebo podtržítko <code>_</code>:</p>
<pre><code>
*Toto je kurzíva*<br></br>
</code></pre>

<h3>Preškrtnutý text</h3>
<p>Ak chcete preškrtnúť text, použite dve vlnovky <code>~~</code> okolo textu:</p>
<pre><code>
~~Tento text je preškrtnutý~~<br></br>
</code></pre>

<h2>Odkazy a obrázky</h2>
<h3>Odkazy</h3>
<p>Na vytvorenie odkazu použite zátvorky pre text odkazu a následne v zátvorkách URL:</p>
<pre><code>
[Toto je odkaz](https://www.example.com)<br></br>
</code></pre>

<h3>Obrázky</h3>
<p>Obrázky sa vkladajú podobne ako odkazy, ale pred zátvorkami musíte pridať výkričník:</p>
<pre><code>
![Obrázok](https://via.placeholder.com/150)<br></br>
</code></pre>

<h2>Zoznamy</h2>
<h3>Neusporiadaný zoznam</h3>
<p>Pre neusporiadaný zoznam použite pomlčku <code>-</code>, hviezdičku <code>*</code> alebo plus <code>+</code>:</p>
<pre><code>
- Prvý bod<br></br>
- Druhý bod<br></br>
- Tretí bod<br></br>
</code></pre>

<h3>Usporiadaný zoznam</h3>
<p>Pre usporiadaný zoznam použite čísla s bodkou:</p>
<pre><code>
1. Prvý bod<br></br>
2. Druhý bod<br></br>
3. Tretí bod<br></br>
</code></pre>

<h2>Kódové bloky</h2>
<h3>Jednoduchý kód</h3>
<p>Pre kód v riadku použite spätné úvodzovky <code>`</code>:</p>
<pre><code>
`print("Ahoj svet")`<br></br>
</code></pre>

<h3>Viacriadkový kód</h3>
<p>Pre viacriadkový kód použite tri spätné úvodzovky:</p>
<pre><code>
def pozdrav(): print("Ahoj svet")
</code></pre>

<h2>Hlavičky</h2>
<p>Na vytvorenie hlavičiek použite znak <code>#</code>. Počet <code>#</code> určuje úroveň hlavičky (1 až 6):</p>
<pre><code>
# Hlavná hlavička<br></br>
## Sekcia 1<br></br>
### Podsekcia 1.1<br></br>
</code></pre>

<h2>Horizontálne čiary</h2>
<p>Pre horizontálnu čiaru použite tri pomlčky, hviezdičky alebo podtržítka:</p>
<pre><code>
---<br></br>
</code></pre>

<h2>Tabuľky</h2>
<p>Tabuľky vytvoríte pomocou pomlčiek a vertikálnych čiar <code>|</code>:</p>
<pre><code>
| Meno     | Vek | Mesto      |<br></br>
|----------|-----|------------|<br></br>
| Peter    | 25  | Bratislava |<br></br>
| Jana     | 30  | Košice     |<br></br>
</code></pre>

<h2>Prečo používať Markdown?</h2>
<p>Markdown je skvelý nástroj na rýchle písanie formátovaného textu, ktorý sa dá jednoducho konvertovať do rôznych formátov, ako HTML. Je jednoduchý, flexibilný a vhodný na písanie poznámok, dokumentácie alebo blogov.</p>
</>


)
}

const Content = ({ selectedTopic }) => (
  <div id="content">
    {topicsContent[selectedTopic] || <p>Vyberte tému z menu na bočnej strane.</p>}
  </div>
);

export default Content;
