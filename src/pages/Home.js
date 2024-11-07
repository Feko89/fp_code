import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Pridaj CSS pre tento komponent

const Home = () => (
  <>
    <div className="section-1">
      <div className="uvod-con">
        <div className="uvod-text">
          <h1 className="uvod-Nadpis">Nauc sa programovat</h1>
          <h2 className="uvod-podNadpis">a ukladaj si svoje poznamky</h2>
        </div>
        <div className="uvod-buttons">
          <Link to='/login'>
            <button>
              Zacni sa ucit!
            </button>
          </Link>
          <Link to='/podstranka'>
            <button>
              Napis si poznamky!
            </button>
          </Link>
        </div>
      </div>
    </div>

    <div className="section-2">
      <div className="onas-con">
        <div className="onas-text">
          <h1 className="onas-nadpis">O tejto stranke</h1>
          <p className="onas-textik">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non dolor ligula...
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Home;
