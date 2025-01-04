import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Test from '../components/test';
import Content from '../components/Content';
import './Ucivo.css';

// Lokálna definícia topicsContent
const topicsContent = {
  "Úvod do programovania": [
    { question: "Čo je programovanie?", options: ["A. Riešenie problémov", "B. Hranie hier", "C. Kreslenie"], answer: "A" },
    { question: "Aký jazyk sa odporúča pre začiatočníkov?", options: ["A. C++", "B. Python", "C. Java"], answer: "B" }
  ],
 "Diagramy": [
    { 
        "question": "Ktorý diagram ukazuje, ako aktéri interagujú so systémom?", 
        "options": ["A. Sekvenčný diagram", "B. Diagram prípadov použitia", "C. Vývojový diagram"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý diagram zobrazuje tok činností alebo pracovných postupov?", 
        "options": ["A. Diagram aktivity", "B. Diagram tried", "C. Sekvenčný diagram"], 
        "answer": "A" 
    },
    { 
        "question": "Aký symbol sa používa vo vývojových diagramoch na označenie rozhodovania?", 
        "options": ["A. Obdĺžnik", "B. Kosoštvorec", "C. Kruh"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý typ diagramu zobrazuje štruktúru tried a ich atribúty?", 
        "options": ["A. Sekvenčný diagram", "B. Diagram aktivity", "C. Diagram tried"], 
        "answer": "C" 
    },
    { 
        "question": "Čo reprezentuje symbol ⊓ vo vývojových diagramoch?", 
        "options": ["A. Rozhodnutie", "B. Terminál (Stop/Start)", "C. Prepojenie"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý diagram používa časovú os na zobrazenie poradia volania metód?", 
        "options": ["A. Diagram tried", "B. Sekvenčný diagram", "C. Diagram aktivity"], 
        "answer": "B" 
    },
    { 
        "question": "Na čo slúži symbol ◯ vo vývojových diagramoch?", 
        "options": ["A. Indikuje rozhodnutie", "B. Spojenie na rovnakej strane", "C. Spojenie na inej strane"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý diagram je ideálny na zobrazenie logiky programu?", 
        "options": ["A. Vývojový diagram", "B. Diagram prípadov použitia", "C. Diagram aktivity"], 
        "answer": "A" 
    },
    { 
        "question": "Aký typ symbolu sa používa na reprezentáciu vstupných a výstupných operácií vo vývojových diagramoch?", 
        "options": ["A. Štvorec", "B. Obdĺžnik", "C. Obdĺžnik so zaoblenými rohmi"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý diagram zobrazuje skupinu príkazov vykonávajúcich jednu úlohu spracovania?", 
        "options": ["A. Diagram aktivity", "B. Diagram prípadov použitia", "C. Vývojový diagram"], 
        "answer": "C" 
    }
],"Syntax": [
    { 
        "question": "Ako sa označuje jednoriadkový komentár v Pythone?", 
        "options": ["A. //", "B. /* */", "C. #"], 
        "answer": "C" 
    },
    { 
        "question": "Aký je výsledok príkazu str(5)?", 
        "options": ["A. 5", "B. '5'", "C. Error"], 
        "answer": "B" 
    },
    { 
        "question": "Ktoré kľúčové slovo sa používa na definovanie funkcie?", 
        "options": ["A. func", "B. def", "C. function"], 
        "answer": "B" 
    },
    { 
        "question": "Čo reprezentuje bool typ v Pythone?", 
        "options": ["A. Čísla", "B. Logické hodnoty", "C. Reťazce"], 
        "answer": "B" 
    },
    { 
        "question": "Aký je štandard pre odsadzovanie v Pythone?", 
        "options": ["A. 2 medzery", "B. 4 medzery", "C. Tabulátor"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý operátor sa používa na logické „a“ v podmienkach?", 
        "options": ["A. &&", "B. and", "C. &"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorá dátová štruktúra uchováva páry kľúč-hodnota?", 
        "options": ["A. list", "B. tuple", "C. dict"], 
        "answer": "C" 
    },
    { 
        "question": "Čo vypíše nasledujúci kód?\n\n```python\nfor i in range(3):\n    print(i)\n```", 
        "options": ["A. 0 1 2", "B. 1 2 3", "C. 0 1 2 3"], 
        "answer": "A" 
    },
    { 
        "question": "Aký je výstup kódu?\n\n```python\nx = 0\nwhile x < 2:\n    print(x)\n    x += 1\n```", 
        "options": ["A. 0 1", "B. 1 2", "C. Nekonečný cyklus"], 
        "answer": "A" 
    },
    { 
        "question": "Ktorý z nasledujúcich typov dát nie je nemenný?", 
        "options": ["A. tuple", "B. list", "C. str"], 
        "answer": "B" 
    }
]
,
"Dátové typy - Úvod": [
    { 
        "question": "Aký dátový typ v Pythone uchováva celé čísla?", 
        "options": ["A. int", "B. float", "C. str"], 
        "answer": "A" 
    },
    { 
        "question": "Ktorý dátový typ sa používa na ukladanie textu?", 
        "options": ["A. bool", "B. list", "C. str"], 
        "answer": "C" 
    },
    { 
        "question": "Čo reprezentuje dátový typ bool?", 
        "options": ["A. Čísla", "B. Pravdivostné hodnoty", "C. Texty"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý dátový typ umožňuje uchovávať páry kľúč-hodnota?", 
        "options": ["A. tuple", "B. dict", "C. list"], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý z nasledujúcich dátových typov je nemenný?", 
        "options": ["A. list", "B. tuple", "C. dict"], 
        "answer": "B" 
    },
    { 
        "question": "Čo sa stane, ak sa pokúsite vykonať operáciu 5 + 'text'?", 
        "options": ["A. Výsledkom bude '5text'", "B. Program spôsobí chybu", "C. Výsledkom bude 5"], 
        "answer": "B" 
    },
    { 
        "question": "Aká je správna syntax na konverziu reťazca '10' na celé číslo?", 
        "options": ["A. int('10')", "B. float('10')", "C. str('10')"], 
        "answer": "A" 
    },
    { 
        "question": "Aký je výsledok príkazu float(5)?", 
        "options": ["A. 5.0", "B. '5'", "C. Chyba"], 
        "answer": "A" 
    },
    { 
        "question": "Ktorý dátový typ umožňuje uchovávať usporiadané kolekcie hodnôt, ktoré môžu byť zmenené?", 
        "options": ["A. list", "B. tuple", "C. dict"], 
        "answer": "A" 
    },
    { 
        "question": "Aké hodnoty môže nadobúdať bool typ?", 
        "options": ["A. True a False", "B. 1 a 0", "C. Áno a Nie"], 
        "answer": "A" 
    }
]
,
"Reťazec - String": [
    { 
        "question": "Ako môžeme v Pythone vytvoriť reťazec obsahujúci jednoduchú úvodzovku?", 
        "options": [
            "A. Použijeme spätné lomítko: 'It\\'s easy'", 
            "B. Použijeme dvojité úvodzovky: \"It's easy\"", 
            "C. Obe možnosti sú správne"
        ], 
        "answer": "C" 
    },
    { 
        "question": "Ktorý escape znak použijeme na nový riadok?", 
        "options": ["A. \\t", "B. \\n", "C. \\\\"], 
        "answer": "B" 
    },
    { 
        "question": "Čo je výsledkom operácie 'Python! ' * 3?", 
        "options": [
            "A. 'Python! Python! Python!'", 
            "B. 'Python!3'", 
            "C. Chyba"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Ako získame prvý znak reťazca text = 'Ahoj'?", 
        "options": [
            "A. text[-1]", 
            "B. text[0]", 
            "C. text[1]"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo robí metóda str.strip()?", 
        "options": [
            "A. Odstráni medzery na začiatku a na konci reťazca", 
            "B. Zmení písmená na malé", 
            "C. Nájde podreťazec"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Ktorý spôsob formátovania reťazcov je podporovaný od Python 3.6+?", 
        "options": [
            "A. Operátor %", 
            "B. Metóda format()", 
            "C. f-string"
        ], 
        "answer": "C" 
    },
    { 
        "question": "Čo sa stane, ak sa pokúsime zmeniť znak v reťazci (napr. text[0] = 'B')?", 
        "options": [
            "A. Reťazec sa zmení", 
            "B. Vyvolá sa TypeError", 
            "C. Nový znak sa pridá na koniec"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo vráti operácia 'Python'.find('thon')?", 
        "options": [
            "A. -1", 
            "B. 2", 
            "C. Chyba"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako spojíme zoznam reťazcov ['Ahoj', 'Peter'] do jedného reťazca s medzerou?", 
        "options": [
            "A. ' '.join(['Ahoj', 'Peter'])", 
            "B. ['Ahoj', 'Peter'].split(' ')", 
            "C. 'Ahoj' + ' ' + 'Peter'"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aká je výhoda reťazcových metód v Pythone?", 
        "options": [
            "A. Umožňujú efektívne manipulovať s textom", 
            "B. Reťazce sú mutable", 
            "C. Vždy vrátia nový objekt"
        ], 
        "answer": "A" 
    }
]
,"Int": [
    { 
        "question": "Aký dátový typ predstavujú celé čísla v Pythone?", 
        "options": [
            "A. int", 
            "B. float", 
            "C. complex"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Čo vráti operácia 10 // 3?", 
        "options": [
            "A. 3.3333", 
            "B. 3", 
            "C. 1"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý operátor sa používa na zvyšok po celočíselnom delení?", 
        "options": [
            "A. //", 
            "B. **", 
            "C. %"
        ], 
        "answer": "C" 
    },
    { 
        "question": "Čo spraví operácia 2 ** 3?", 
        "options": [
            "A. Vráti 6", 
            "B. Vráti 8", 
            "C. Vyvolá chybu"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako môžeme zistiť typ premennej v Pythone?", 
        "options": [
            "A. pomocou funkcie isinstance()", 
            "B. pomocou funkcie type()", 
            "C. Obe možnosti sú správne"
        ], 
        "answer": "C" 
    },
    { 
        "question": "Čo sa stane, ak do premennej uložíme veľmi veľké celé číslo?", 
        "options": [
            "A. Python vyvolá chybu pretečenia", 
            "B. Premenná sa automaticky upraví na podporu veľkých čísel", 
            "C. Python skonvertuje číslo na float"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Aká je absolútna hodnota čísla -10?", 
        "options": [
            "A. -10", 
            "B. 10", 
            "C. 0"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo vráti funkcia divmod(10, 3)?", 
        "options": [
            "A. 3", 
            "B. (3, 1)", 
            "C. 1"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý operátor je použitý na porovnanie dvoch čísel, či sú rovnaké?", 
        "options": [
            "A. =", 
            "B. ==", 
            "C. !="
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako vieme zistiť, či je celé číslo párne?", 
        "options": [
            "A. Pomocou operácie n % 2 == 0", 
            "B. Pomocou operácie n // 2 == 0", 
            "C. Pomocou funkcie abs(n)"
        ], 
        "answer": "A" 
    }
]
,"Float": [
    { 
        "question": "Aký dátový typ predstavujú desatinné čísla v Pythone?", 
        "options": [
            "A. int", 
            "B. float", 
            "C. complex"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo sa stane, ak číslo obsahuje desatinnú čiarku (napr. 3.14)?", 
        "options": [
            "A. Python automaticky rozpozná číslo ako float", 
            "B. Python vyvolá chybu", 
            "C. Python číslo prekonvertuje na int"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok operácie 1.5 + 2.5?", 
        "options": [
            "A. 4.5", 
            "B. 5", 
            "C. 3"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Čo znamená operátor % pri desatinných číslach?", 
        "options": [
            "A. Vráti zvyšok po delení", 
            "B. Vráti podiel", 
            "C. Vráti exponent"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Ako získaš presný súčet 0.1 a 0.2 v Pythone?", 
        "options": [
            "A. Použitím funkcie Decimal", 
            "B. Použitím funkcie round()", 
            "C. Nie je možné dosiahnuť presný súčet"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok nasledujúceho porovnania: 0.1 + 0.2 == 0.3?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. Chyba"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Akým spôsobom môžeme zaokrúhliť číslo 3.14159 na dve desatinné miesta?", 
        "options": [
            "A. round(3.14159, 2)", 
            "B. f'{3.14159:.2f}'", 
            "C. Obe možnosti sú správne"
        ], 
        "answer": "C" 
    },
    { 
        "question": "Ktorá funkcia vráti absolútnu hodnotu čísla -3.14?", 
        "options": [
            "A. abs()", 
            "B. round()", 
            "C. math.ceil()"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký je rozdiel medzi funkciami math.floor() a math.ceil()?", 
        "options": [
            "A. math.floor() zaokrúhľuje nadol, math.ceil() nahor", 
            "B. math.floor() zaokrúhľuje nahor, math.ceil() nadol", 
            "C. Obe funkcie zaokrúhľujú nahor"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok operácie 2.5 ** 2?", 
        "options": [
            "A. 5.0", 
            "B. 6.25", 
            "C. 4.5"
        ], 
        "answer": "B" 
    }
  ],"Bool": [
    { 
        "question": "Aké sú základné hodnoty dátového typu Boolean v Pythone?", 
        "options": [
            "A. True, False", 
            "B. 1, 0", 
            "C. True, False, 1, 0"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Akú hodnotu vráti výraz bool(1)?", 
        "options": [
            "A. False", 
            "B. True", 
            "C. 0"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Akú hodnotu vráti výraz bool('text')?", 
        "options": [
            "A. False", 
            "B. True", 
            "C. Chyba"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Aký bude výsledok operácie 10 > 5?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. 10"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Čo vráti operácia 10 == 5?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. 0"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Aký je výsledok operácie True and False?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. None"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý operátor vráti True, ak aspoň jedna hodnota je True?", 
        "options": [
            "A. and", 
            "B. or", 
            "C. not"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Aká bude hodnota po operácii not True?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. None"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Aký je výsledok výrazu x = 10, y = 5; x > y?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. 10"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Ako môžeme použiť bool hodnotu v cykle?", 
        "options": [
            "A. Použitím operátora not", 
            "B. Použitím porovnávacieho operátora", 
            "C. Použitím logického operátora and"
        ], 
        "answer": "B" 
    }
  ],"List": [
    { 
        "question": "Aké vlastnosti má Python list?", 
        "options": [
            "A. Je to immutable dátová štruktúra.", 
            "B. Je to mutable dátová štruktúra, umožňuje zmenu obsahu.", 
            "C. Nepodporuje rôzne typy dát v jednom liste."
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako môžeme získať prístup k prvku na začiatku listu?", 
        "options": [
            "A. moj_list[0]", 
            "B. moj_list[-1]", 
            "C. moj_list[1]"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok operácie moj_list.append(5) pre list moj_list = [1, 2, 3, 4]?", 
        "options": [
            "A. [1, 2, 3, 4, 5]", 
            "B. [5, 1, 2, 3, 4]", 
            "C. [1, 2, 3, 4, 0]"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Čo vrátí operácia moj_list.pop() pre list moj_list = [1, 2, 3]?", 
        "options": [
            "A. 1", 
            "B. 3", 
            "C. None"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorá funkcia vráti dĺžku listu?", 
        "options": [
            "A. len()", 
            "B. length()", 
            "C. size()"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký je výsledok operácie 10 in moj_list pre list moj_list = [10, 20, 30]?", 
        "options": [
            "A. True", 
            "B. False", 
            "C. Chyba"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Ako môžeme pridať viacero prvkov na koniec listu?", 
        "options": [
            "A. pomocou metódy append()", 
            "B. pomocou metódy extend()", 
            "C. pomocou operátora +"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorá metóda sa používa na zoradenie prvkov v liste?", 
        "options": [
            "A. reverse()", 
            "B. sort()", 
            "C. shuffle()"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Aký bude výsledok operácie moj_list[0] = 100, ak máme list moj_list = [1, 2, 3]?", 
        "options": [
            "A. [1, 2, 3]", 
            "B. [100, 2, 3]", 
            "C. Chyba"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo robí operácia moj_list.remove(99)?", 
        "options": [
            "A. Odstráni všetky výskyty 99 z listu.", 
            "B. Odstráni prvý výskyt 99 z listu.", 
            "C. Vráti hodnotu 99."
        ], 
        "answer": "B" 
    }
  ],"Dict": [
    { 
        "question": "Aké vlastnosti má Python dict?", 
        "options": [
            "A. Kľúče v dict môžu byť opakujúce sa.", 
            "B. Kľúče v dict sú unikátne.", 
            "C. Dict je immutable."
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako môžeme získať hodnotu pre kľúč 'meno' v dict moj_dict = {'meno': 'Janko', 'vek': 30}?", 
        "options": [
            "A. moj_dict['meno']", 
            "B. moj_dict[0]", 
            "C. moj_dict.get('meno')"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aká metóda vráti počet kľúčov v dict?", 
        "options": [
            "A. len()", 
            "B. count()", 
            "C. size()"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok operácie moj_dict.pop('vek') pre dict moj_dict = {'meno': 'Janko', 'vek': 30}?", 
        "options": [
            "A. {'meno': 'Janko'}", 
            "B. 30", 
            "C. 'vek' sa odstráni, ale vráti sa None."
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako môžeme získať všetky kľúče v dict?", 
        "options": [
            "A. moj_dict.items()", 
            "B. moj_dict.keys()", 
            "C. moj_dict.get()"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako môžeme skontrolovať, či kľúč 'vek' existuje v dict moj_dict?", 
        "options": [
            "A. 'vek' in moj_dict", 
            "B. 'vek' == moj_dict", 
            "C. moj_dict.has('vek')"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Čo robí metóda update() v dict?", 
        "options": [
            "A. Odstráni kľúče, ktoré už neexistujú.", 
            "B. Pridá alebo upraví kľúče a hodnoty z iného dictu alebo iterovateľného objektu.", 
            "C. Zoradí kľúče v dict."
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorá metóda vráti všetky páry kľúč-hodnota v dict?", 
        "options": [
            "A. moj_dict.items()", 
            "B. moj_dict.keys()", 
            "C. moj_dict.values()"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok operácie moj_dict.clear() pre dict moj_dict = {'meno': 'Janko', 'vek': 30}?", 
        "options": [
            "A. {'meno': 'Janko'}", 
            "B. {} (prázdny dict)", 
            "C. {'meno': 'Janko', 'vek': 30} zostane nezmenený."
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ktorý operátor môžeme použiť na kontrolu, či kľúč existuje v dict?", 
        "options": [
            "A. == ", 
            "B. in", 
            "C. exists"
        ], 
        "answer": "B" 
    }
  ],
  "Tuple": [
    { 
        "question": "Aká je hlavná vlastnosť tuple v Pythone?", 
        "options": [
            "A. Tuple je mutabilný, čo znamená, že jeho obsah možno meniť.", 
            "B. Tuple je imutabilný, čo znamená, že jeho obsah nemožno meniť po jeho vytvorení.", 
            "C. Tuple nie je usporiadaný."
        ], 
        "answer": "B" 
    },
    { 
        "question": "Ako môžeme vytvoriť tuple s rôznymi typmi dát v Pythone?", 
        "options": [
            "A. moj_tuple = [1, 'text', 3.14, True]", 
            "B. moj_tuple = {1, 'text', 3.14, True}", 
            "C. moj_tuple = (1, 'text', 3.14, True)"
        ], 
        "answer": "C" 
    },
    { 
        "question": "Ako môžeme pristupovať k poslednému prvku tuple?", 
        "options": [
            "A. moj_tuple[0]", 
            "B. moj_tuple[-1]", 
            "C. moj_tuple[1]"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo urobí operácia novy_tuple = moj_tuple + (6, 7) pre tuple moj_tuple = (1, 2, 3, 4)?", 
        "options": [
            "A. Vytvorí nový tuple: (1, 2, 3, 4, 6, 7)", 
            "B. Spojí tuple (1, 2, 3, 4, 6, 7) do pôvodného tuple.", 
            "C. Zmení prvky pôvodného tuple na (6, 7)."
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aká metóda tuple vráti počet výskytov konkrétneho prvku?", 
        "options": [
            "A. count()", 
            "B. index()", 
            "C. len()"
        ], 
        "answer": "A" 
    },
    { 
        "question": "Aký bude výsledok operácie moj_tuple[0] = 99 pre tuple moj_tuple = (1, 2, 3, 4)?", 
        "options": [
            "A. Bude to fungovať a zmení hodnotu prvého prvku.", 
            "B. Vytvorí nový tuple s hodnotou 99 na prvom mieste.", 
            "C. Zobrazí chybu, pretože tuple je imutabilný."
        ], 
        "answer": "C" 
    },
    { 
        "question": "Aký bude výsledok operácie moj_tuple * 2 pre tuple moj_tuple = (1, 2, 3, 4)?", 
        "options": [
            "A. (1, 2, 3, 4, 1, 2, 3, 4)", 
            "B. (1, 2, 3, 4, 5, 6, 7, 8)", 
            "C. Zopakuje tuple len raz."
        ], 
        "answer": "A" 
    },
    { 
        "question": "Ako môžeme zistiť index prvého výskytu hodnoty 3 v tuple?", 
        "options": [
            "A. moj_tuple.find(3)", 
            "B. moj_tuple.index(3)", 
            "C. moj_tuple.get(3)"
        ], 
        "answer": "B" 
    },
    { 
        "question": "Čo sa stane, ak použijeme tuple ako kľúč v dictionary?", 
        "options": [
            "A. Môžeme použiť tuple ako kľúč, pretože tuple sú imutabilné.", 
            "B. Tuple sa nemôže použiť ako kľúč v dictionary.", 
            "C. Tuple sa automaticky zmení na list a bude použiteľný ako kľúč."
        ], 
        "answer": "A" 
    },
    { 
        "question": "Čo vrátia metódy count() a index() v tuple?", 
        "options": [
            "A. count() vráti index a index() počet výskytov.", 
            "B. count() vráti počet výskytov a index() vráti index prvého výskytu.", 
            "C. count() vráti nový tuple."
        ], 
        "answer": "B" 
    }
  ], "Podmienky": [
    {
      "question": "Aký je účel podmienok v programovaní?",
      "options": [
        "A. Umožňujú vykonávať rôzne časti kódu na základe splnenia určitých podmienok.",
        "B. Umožňujú vykonávať kód vždy, bez ohľadu na podmienky.",
        "C. Slúžia na definovanie premenných."
      ],
      "answer": "A"
    },
    {
      "question": "Aká je správna syntax pre podmienku s operátorom elif?",
      "options": [
        "A. if podmienka: elif iná_podmienka: else:",
        "B. if podmienka: elif iná_podmienka else: else:",
        "C. if podmienka: elif iná_podmienka: else"
      ],
      "answer": "A"
    },
    {
      "question": "Čo sa stane, ak je podmienka v if nepravdivá, ale elif je pravdivý?",
      "options": [
        "A. Vykoná sa kód v bloku elif.",
        "B. Vykoná sa kód v bloku else.",
        "C. Kód sa nezrealizuje."
      ],
      "answer": "A"
    },
    {
      "question": "Aký logický operátor sa použije na spojenie dvoch podmienok, kde obe musia byť pravdivé?",
      "options": [
        "A. and",
        "B. or",
        "C. not"
      ],
      "answer": "A"
    },
    {
      "question": "Aká je hodnota premennej 'vysledok' po vykonaní kódu: vek = 20; vysledok = 'Dospelý' if vek >= 18 else 'Nedospelý'?",
      "options": [
        "A. Dospelý",
        "B. Nedospelý",
        "C. Nezadefinovaná hodnota"
      ],
      "answer": "A"
    },
    {
      "question": "Čo vracia funkcia 'je_parne(4)' v uvedenom príklade?",
      "options": [
        "A. True",
        "B. False",
        "C. Žiadna hodnota"
      ],
      "answer": "A"
    },
    {
      "question": "Aký je účel operátora 'not' v podmienkach?",
      "options": [
        "A. Zvráti pravdivosť podmienky.",
        "B. Vráti True, ak je podmienka pravdivá.",
        "C. Zastaví vykonávanie kódu."
      ],
      "answer": "A"
    },
    {
      "question": "Aká je výstupná hodnota pre výraz: if cislo > 0 and cislo < 100: print('Číslo je v intervale 0 až 100.') pre cislo = 10?",
      "options": [
        "A. Číslo je v intervale 0 až 100.",
        "B. Číslo nie je záporné.",
        "C. Žiadny výstup."
      ],
      "answer": "A"
    },
    {
      "question": "Ako možno vnoriť podmienky v Pythone?",
      "options": [
        "A. Použitím ďalších if-else blokov v rámci existujúceho bloku.",
        "B. Použitím operátora 'and'.",
        "C. Podmienky sa nemôžu vnoriť."
      ],
      "answer": "A"
    },
    {
      "question": "Aký bude výstup, ak je 'znamka = 2' v nasledujúcom kóde: if znamka >= 1: if znamka <= 3: print('Dobrá známka.') else: print('Priemerná známka.') else: print('Zlá známka.')?",
      "options": [
        "A. Dobrá známka.",
        "B. Priemerná známka.",
        "C. Zlá známka."
      ],
      "answer": "A"
    }
  ],
  "Cyklus": [
    {
      "question": "Aký je účel cyklov v programovaní?",
      "options": [
        "A. Umožňujú opakovane vykonávať určitý blok kódu.",
        "B. Umožňujú vykonať kód iba raz.",
        "C. Slúžia na ukladanie dát do zoznamov."
      ],
      "answer": "A"
    },
    {
      "question": "Ktorý cyklus sa používa na iteráciu cez sekvencie (zoznamy, tuple, stringy)?",
      "options": [
        "A. for cyklus",
        "B. while cyklus",
        "C. do-while cyklus"
      ],
      "answer": "A"
    },
    {
      "question": "Aký cyklus sa používa, keď chceme vykonávať akciu, kým platí určitá podmienka?",
      "options": [
        "A. for cyklus",
        "B. while cyklus",
        "C. do-while cyklus"
      ],
      "answer": "B"
    },
    {
      "question": "Čo spôsobí kód: for cislo in range(10): if cislo == 5: break?",
      "options": [
        "A. Cyklus sa ukončí, keď cislo dosiahne hodnotu 5.",
        "B. Cyklus sa nekončí.",
        "C. Cyklus preskočí iterácie, kým dosiahne 5."
      ],
      "answer": "A"
    },
    {
      "question": "Aký je účel kľúčového slova 'continue' v cykloch?",
      "options": [
        "A. Preskočí aktuálnu iteráciu a pokračuje ďalšou.",
        "B. Ukončí cyklus.",
        "C. Zastaví vykonávanie kódu."
      ],
      "answer": "A"
    },
    {
      "question": "Ktorý cyklus by ste použili, ak viete, koľko iterácií potrebujete?",
      "options": [
        "A. for cyklus",
        "B. while cyklus",
        "C. do-while cyklus"
      ],
      "answer": "A"
    },
    {
      "question": "Ako sa používa while cyklus v Pythone?",
      "options": [
        "A. Kým platí podmienka, cyklus sa vykonáva.",
        "B. Cyklus sa vykonáva iba raz.",
        "C. Cyklus sa vykonáva, pokiaľ sa podmienka nevyhodnotí ako pravdivá."
      ],
      "answer": "A"
    },
    {
      "question": "Čo sa stane pri použití kódu: for cislo in range(10): if cislo % 2 == 0: continue?",
      "options": [
        "A. Cyklus preskočí všetky párne čísla.",
        "B. Cyklus zastaví všetky iterácie.",
        "C. Cyklus vykoná iba iterácie pre párne čísla."
      ],
      "answer": "A"
    },
    {
      "question": "Aký typ cyklu by ste použili na prechádzanie cez zoznam?",
      "options": [
        "A. for cyklus",
        "B. while cyklus",
        "C. do-while cyklus"
      ],
      "answer": "A"
    },
    {
      "question": "Aký bude výstup pri použití kódu: cislo = 0; while cislo < 5: print(cislo); cislo += 1?",
      "options": [
        "A. 0 1 2 3 4",
        "B. 1 2 3 4 5",
        "C. 5 4 3 2 1"
      ],
      "answer": "A"
    }
  ], "For": [
    {
      "question": "Aký je účel for cyklu v Pythone?",
      "options": [
        "A. Prechádza cez sekvencie a vykonáva akcie pre každý prvok.",
        "B. Umožňuje opakovane vykonávať určitý blok kódu.",
        "C. Riadi tok programu na základe podmienok."
      ],
      "answer": "A"
    },
    {
      "question": "Aký bude výstup pri použití tohto kódu: zoznam = [1, 2, 3, 4, 5]; for cislo in zoznam: print(cislo)?",
      "options": [
        "A. 1 2 3 4 5",
        "B. 5 4 3 2 1",
        "C. Žiadny výstup"
      ],
      "answer": "A"
    },
    {
      "question": "Ako sa používa funkcia range() v kombinácii s for cyklom?",
      "options": [
        "A. Generuje číselnú sekvenciu pre iteráciu.",
        "B. Vytvára nekonečný cyklus.",
        "C. Zastaví cyklus, keď sa hodnota dosiahne."
      ],
      "answer": "A"
    },
    {
      "question": "Aký bude výstup pri použití tohto kódu: for i in range(5): print(i)?",
      "options": [
        "A. 0 1 2 3 4",
        "B. 1 2 3 4 5",
        "C. 5 6 7 8 9"
      ],
      "answer": "A"
    },
    {
      "question": "Čo spôsobí tento kód: for i in range(3): for j in range(2): print(f'i: {i}, j: {j}')?",
      "options": [
        "A. Vytlačí kombinácie hodnôt i a j.",
        "B. Vytlačí len hodnoty i.",
        "C. Vytlačí len hodnoty j."
      ],
      "answer": "A"
    },
    {
      "question": "Ako sa použije for cyklus na prechod cez znaky v reťazci?",
      "options": [
        "A. Pre každý znak v reťazci sa vykoná blok kódu.",
        "B. Pre každý znak v reťazci sa cyklus opakuje päťkrát.",
        "C. Cyklus preskočí každý druhý znak v reťazci."
      ],
      "answer": "A"
    },
    {
      "question": "Aký bude výstup pri použití kódu: for i in range(0, 10, 2): print(i)?",
      "options": [
        "A. 0 2 4 6 8",
        "B. 0 1 2 3 4 5 6 7 8 9",
        "C. 1 3 5 7 9"
      ],
      "answer": "A"
    },
    {
      "question": "Prečo je for cyklus dôležitý v programovaní?",
      "options": [
        "A. Umožňuje efektívne prechádzať cez sekvencie a vykonávať operácie.",
        "B. Je rýchlejší ako while cyklus.",
        "C. Umožňuje spracovávať nekonečné slučky."
      ],
      "answer": "A"
    },
    {
      "question": "Aký typ objektov môžeme prechádzať pomocou for cyklu?",
      "options": [
        "A. Iba zoznamy.",
        "B. Iba reťazce.",
        "C. Sekvencie ako zoznamy, reťazce, tuple a iné iterovateľné objekty."
      ],
      "answer": "C"
    },
    {
      "question": "Ktorý z týchto cyklov by ste použili, ak chcete vykonávať akcie pre každý prvok v zozname?",
      "options": [
        "A. while cyklus",
        "B. for cyklus",
        "C. do-while cyklus"
      ],
      "answer": "B"
    }
  ],
  "While": [
    {
      "question": "Aký je účel while cyklu v Pythone?",
      "options": [
        "A. Vykonáva blok kódu, kým je podmienka pravdivá.",
        "B. Umožňuje prechádzať cez sekvencie.",
        "C. Riadi tok programu na základe iterácií."
      ],
      "answer": "A"
    },
    {
      "question": "Aký bude výstup pri použití tohto kódu: cislo = 1; while cislo <= 5: print(cislo); cislo += 1?",
      "options": [
        "A. 1 2 3 4 5",
        "B. 0 1 2 3 4",
        "C. Žiadny výstup"
      ],
      "answer": "A"
    },
    {
      "question": "Aký je účel použitia nekonečného cyklu (while True)?",
      "options": [
        "A. Vytvoriť cyklus, ktorý sa nikdy nezastaví.",
        "B. Na prechod cez sekvencie.",
        "C. Na zastavenie cyklu po určitých podmienkach."
      ],
      "answer": "A"
    },
    {
      "question": "Ako môžeme ukončiť while cyklus predčasne?",
      "options": [
        "A. Použitím príkazu continue.",
        "B. Použitím príkazu break.",
        "C. Použitím príkazu stop."
      ],
      "answer": "B"
    },
    {
      "question": "Aký bude výstup pri použití tohto kódu: cislo = 0; while cislo < 10: cislo += 1; if cislo % 2 == 0: continue; print(cislo)?",
      "options": [
        "A. 1 3 5 7 9",
        "B. 0 2 4 6 8",
        "C. 1 2 3 4 5 6 7 8 9"
      ],
      "answer": "A"
    },
    {
      "question": "Ako môžeme použiť podmienky vo while cykle?",
      "options": [
        "A. Na preskočenie niektorých iterácií.",
        "B. Na kontrolu, či je podmienka stále pravdivá.",
        "C. Na dynamickú kontrolu toku programu počas cyklu."
      ],
      "answer": "C"
    },
    {
      "question": "Aký bude výstup pri použití tohto kódu: cislo = 0; while cislo < 10: if cislo % 2 == 0: print(f'{cislo} je párne.'); else: print(f'{cislo} je nepárne.'); cislo += 1?",
      "options": [
        "A. Vytlačí, či je každé číslo párne alebo nepárne.",
        "B. Vytlačí len párne čísla.",
        "C. Vytlačí len nepárne čísla."
      ],
      "answer": "A"
    },
    {
      "question": "Kedy je vhodné použiť while cyklus?",
      "options": [
        "A. Keď vieme, koľkokrát sa cyklus má vykonať.",
        "B. Keď nevieme vopred, koľkokrát sa cyklus má vykonať.",
        "C. Keď chceme prechádzať sekvenciami dát."
      ],
      "answer": "B"
    },
    {
      "question": "Ako môžeme zabrániť nekonečnému cyklu v while?",
      "options": [
        "A. Použitím príkazu break, ak sa podmienka splní.",
        "B. Zabezpečením, že podmienka sa niekedy stane nepravdivou.",
        "C. Obidve možnosti."
      ],
      "answer": "C"
    },
    {
      "question": "Čo spôsobí tento kód: while True: print('Tento cyklus sa nikdy nezastaví.')?",
      "options": [
        "A. Cyklus sa zastaví po prvom vytlačení.",
        "B. Cyklus sa nikdy nezastaví.",
        "C. Cyklus sa zopakuje päťkrát."
      ],
      "answer": "B"
    }
  ],


  "Operátory": [
    { question: "Ako nazývame na sčítanie,odčítanie...?", options: ["A. Aritmetické", "B. Porovnávacie", "C. Logické"], answer: "A" },
    { question: "Aký operátor použijeme ak chceme získať zvyšok po delení?", options: ["A. //", "B. /", "C. %"], answer: "C" },
    { question: "Čo je výsledkom porovnávacích operátorov?", options: ["A. Int (číslo)", "B. String (text)", "C. Bool (True,False)"], answer: "C" },
    { question: "Ako označujeme nerovnosť?", options: ["A. =!", "B. !=", "C. !"], answer: "B" },
    { question: "Čo nepatrí medzi logické operátory v pythone?", options: ["A. and", "B. xor", "C. or"], answer: "B" },
    { question: "Ako zapisujeme mocninu v pythone?", options: ["A. ", "B. *", "C. '"], answer: "B" },
    { question: "Aký znak označuje bitový operátor AND?", options: ["A. &", "B. |", "C. ^"], answer: "A" },
    { question: "Čo bude výsledkom tejto operácie? 10//3", options: ["A. 3.33", "B. 2", "C. 3"], answer: "C" },
    { question: "Čo bude výsledkom tejto operácie? 5==7", options: ["A. False", "B. True", "C. 2"], answer: "A" },
    { question: "Čo bude výsledkom tejto operácie? 10 | 3", options: ["A. 13", "B. 7", "C. 11"], answer: "C" },
  ]
};

const Ucivo = () => {
  const [selectedTopic, setSelectedTopic] = useState("Úvod do programovania");

  return (
    <div className="telo">
      <Sidebar setSelectedTopic={setSelectedTopic} />
      <div className="content-container">
        <Content selectedTopic={selectedTopic} />
        {topicsContent[selectedTopic] ? (
        <Test
          key={selectedTopic} // Pridanie unikátneho kľúča pre každý výber témy
          topic={selectedTopic}
          questions={topicsContent[selectedTopic]}
        />
        ) : (
          <p>Otázky nie sú k dispozícii.</p>
        )}
      </div>
    </div>
  );
};

export default Ucivo;
