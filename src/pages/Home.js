import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Pridaj CSS pre tento komponent
import lampImage from './lampa.png'; // Zmenená cesta, keďže obrázok je v rovnakom priečinku
import logo3d from './logo_python.png'; // Zmenená cesta, keďže obrázok je v rovnakom priečinku
import spsepo from './spse-po.png'; // Zmenená cesta, keďže obrázok je v rovnakom priečink
import arr from './arrow-removebg-preview.png'; // Zmenená cesta, keďže obrázok je v rovnakom priečinku
import crown from './crown1-removebg-preview.png'; // Zmenená cesta, keďže obrázok je v rovnakom priečink
import carpet from './carpez.png'; // Zmenená cesta, keďže obrázok je v rovnakom priečink






const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")));

  // Sledovanie zmien v localStorage
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    };

    // Event listener na localStorage zmeny
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  return (
    <>
      <div className="section-1">
        <div className="uvod-con">
          <div className="uvod-text">
            <h1 className="uvod-Nadpis">Nauc sa programovat</h1>
            <h2 className="uvod-podNadpis">a ukladaj si svoje poznamky</h2>
          </div>
          <div className="uvod-buttons">
            <Link to="/ucivo">
              <button>
                Zacni sa ucit!
              </button>
            </Link>
            <Link to={isLoggedIn ? '/notes' : '/login'}>
              <button>
                Napis si poznamky!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="section-2">
        <img src={lampImage} alt="lamp" className='lampa'/>
        <img src={logo3d} alt="logo" className='python'/>
        <div className="onas-con">
          <div className="onas-text">
            <h1 className="onas-nadpis">Prečo fp_code?</h1>
            <p className="onas-textik">
            Táto stránka je určená pre všetkých,<br></br>  ktorí sa chcú nadobudnúť základné informácie o <br></br> programovaní v Pythone prípadne Markdown. <br></br><br></br>Ponúka interaktívne návody, príklady kódu a priestor na<br></br> vlastné poznámky, aby ste sa mohli efektívne učiť<br></br> a rýchlo sa kedykoľvek vrátiť k dôležitým informáciám.
            </p>
          </div>
        </div>
      </div>
      <div className="section-3">
            <img src={carpet} alt="carpet" className='carpet'/>
            <img src={crown} alt="crown" className='crown1'/>
            <img src={crown} alt="crown" className='crown2'/>
            <h1 className="ktosme-nadpis">Kto sme??</h1>
            <div className='textiky'>
            <div className="ktosme-textik1">
            <h2>&lt;\Jakub Petrila&gt;</h2>
            </div>
            <img src={spsepo} alt="spse-po" className='spse-po'/>
            <div className="ktosme-textik2">
            <h2>&lt;\Dominik Fečo&gt;</h2>
            </div>
            </div>
            <img src={arr} alt="arr" className='arr1'/>
            <img src={arr} alt="arr" className='arr2'/>

            <div className='text-kto'> Sme študenti SPŠE PO Prešov ktorý sa snažia v tento rok 2025 zmaturovať a odísť z tejto krásnej a milovanej školy ktorá nám bude chýbať.</div>
          </div>
        

    </>
  );
};

export default Home;
