import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelectedTopic }) => {
  const [isDatoveTypyOpen, setDatoveTypyOpen] = useState(false);

  // Funkcia na prepínanie viditeľnosti podtémy "Dátové typy" a nastavenie úvodu
  const handleDatoveTypyClick = () => {
    setDatoveTypyOpen(!isDatoveTypyOpen);
    setSelectedTopic("Dátové typy - Úvod"); // Nastavenie úvodu pre Dátové typy
  };

  return (
    <nav id="sidebar" className="d-none d-md-block bg-light sidebar">
      <h4 className="text-center">Základy programovania</h4>
      <ul className="nav flex-column">
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Úvod do programovania")}>Úvod do programovania</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Diagramy")}>Diagrami</a>
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
                  <a className="sidebar-link pod" href="#" onClick={() => setSelectedTopic("Prečo rozdeľujeme")}><p>Prečo rozdeľujeme</p></a>
                </li>
                <li className="sidebar-item pod">
                  <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Int")}><p>Int</p></a>
                </li>
                {/* Pridajte ďalšie podtémy podľa potreby */}
              </ul>
            </div>
          )}
        </li>

        {/* Ďalšie položky */}
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Booleans")}>Booleans</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("Operatory")}>Operátory</a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSelectedTopic("List")}>List</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
