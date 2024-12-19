import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelectedTopic }) => {
  const [isDatoveTypyOpen, setDatoveTypyOpen] = useState(false);
  const [isCyklusOpen, setCyklusOpen] = useState(false);
  const [isStudentiOpen, setStudentiOpen] = useState(false); // Stav pre "Pre študentov SPŠE"

  // Funkcia na prepínanie viditeľnosti podtémy "Dátové typy" a nastavenie úvodu
  const handleDatoveTypyClick = () => {
    setDatoveTypyOpen(!isDatoveTypyOpen);
    setSelectedTopic("Dátové typy - Úvod");
  };

  // Funkcia na prepínanie viditeľnosti podtémy "Cyklus" a nastavenie úvodu
  const handleCyklusClick = () => {
    setCyklusOpen(!isCyklusOpen);
    setSelectedTopic("Cyklus");
  };

 
  return (
    <nav id="sidebar" className="d-none d-md-block bg-light sidebar">
      <h4 className="text-center">Základy programovania</h4>
      <ul className="nav flex-column">
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Úvod do programovania")}>Úvod do programovania</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Diagramy")}>Diagramy</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Syntax")}>Syntax</a>
        </li>

        {/* Dátové typy s úvodom a podtémy */}
        <li className="sidebar-item">
          <a className="sidebar-link expandable" href="#" onClick={handleDatoveTypyClick}>
            Dátové typy
          </a>
          {isDatoveTypyOpen && (
            <div className="sub-menu">
              <ul className="nav flex-column">
                <li className="sidebar-item pod">
                  <a className="sidebar-link pod" href="#" onClick={() => setSelectedTopic("Reťazec - String")}><p>String</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Int")}><p>Int</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Float")}><p>Float</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Bool")}><p>Boolean</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("List")}><p>List</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Dict")}><p>Dict</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Tuple")}><p>Tuple</p></a>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Operátory")}>Operátory</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Podmienky")}>Podmienky</a>
        </li>

        {/* Cyklus s úvodom a podtémy */}
        <li className="sidebar-item">
          <a className="sidebar-link expandable" href="#" onClick={handleCyklusClick}>
            Cyklus
          </a>
          {isCyklusOpen && (
            <div className="sub-menu">
              <ul className="nav flex-column">
                <li className="sidebar-item pod">
                  <a className="sidebar-link pod" href="#" onClick={() => setSelectedTopic("For")}><p>For</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("While")}><p>While</p></a>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Pre studentov")}>Pre Studentov</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Markdown")}>Markdown</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
