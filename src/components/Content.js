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
      <h1>Syntax</h1>
      <p>Objavte pravidlá syntaxe jazyka Python, ktoré určujú, ako písať a štruktúrovať kód, aby bol správne interpretovaný počítačom.</p>
    </>
  ),
  "Dátové typy - Úvod": (
    <>
      <h1>Dátové typy - Úvod</h1>
      <p>Základné informácie o dátových typoch a prečo sú kľúčové pre správne spracovanie a reprezentáciu údajov v programovaní.</p>
    </>
  ),
  "Prečo rozdeľujeme": (
    <>
      <h1>Prečo rozdeľujeme</h1>
      <p>Preskúmajte dôvody, prečo sa dátové typy v programovaní rozdeľujú, a aký vplyv to má na správnosť a efektivitu kódu.</p>
    </>
  ),
  "Int": (
    <>
      <h1>Int</h1>
      <p>Oboznámte sa s celočíselným dátovým typom (int) v Pythone, ktorý reprezentuje celé čísla bez desatinných miest, a je užitočný pre aritmetické výpočty.</p>
    </>
  ),
  // Ďalšie témy pridajte podľa potreby
};

const Content = ({ selectedTopic }) => (
  <div id="content">
    {topicsContent[selectedTopic] || <p>Vyberte tému z menu na bočnej strane.</p>}
  </div>
);

export default Content;
