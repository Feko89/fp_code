import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import './Ucivo.css';

const Ucivo = () => {
  const [selectedTopic, setSelectedTopic] = useState("Úvod do programovania");

  return (
    <div className="telo">
      <Sidebar setSelectedTopic={setSelectedTopic} />
      <div className="content-container">
        <Content selectedTopic={selectedTopic} />
      </div>
    </div>
  );
};

export default Ucivo;
