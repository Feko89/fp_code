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
    { question: "Aký diagram zobrazuje tok procesu?", options: ["A. Vývojový", "B. Tried", "C. Sekvenčný"], answer: "A" },
    { question: "Ktorý diagram zobrazuje komunikáciu?", options: ["A. Aktivita", "B. Sekvenčný", "C. Vývojový"], answer: "B" }],
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
          <Test topic={selectedTopic} questions={topicsContent[selectedTopic]} />
        ) : (
          <p>Otázky nie sú k dispozícii.</p>
        )}
      </div>
    </div>
  );
};

export default Ucivo;
