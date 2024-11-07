import React from 'react';
import { Link } from 'react-router-dom';
import './Ucivo.css';  // Pridaj CSS pre tento komponent
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

const Ucivo = () => (
  <>
    <Sidebar />
    <div className="content-container">
      <Content />
    </div>
  </>
);

export default Ucivo;
