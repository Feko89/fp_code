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
    { question: "Ktorý diagram zobrazuje komunikáciu?", options: ["A. Aktivita", "B. Sekvenčný", "C. Vývojový"], answer: "B" }
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
