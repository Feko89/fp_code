import React from 'react';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from "./logo_fpcode.png";
import click from "./click.png";


const Footer = () => {
    // Funkcia na scroll hore
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <div className='foot-inf'>
                <div class="foot-con">
                    <div class="foot-grid">
                        <div class="foot-grid-dva">
                            <h1>Kontakt</h1>
                            <div class="grid-content">
                                <a>+421 000 000 000</a>
                                <a>pomoc@fp-code.sk</a>
                                <a>Rastislavova 40, Bratislava</a>
                            </div>
                        </div>
                    </div>
                    <div class="foot-grid">
                        <div class="foot-grid-dva">
                            <h1>Menu:</h1>
                            <div class="grid-content">
                                <Link to="/" onClick={scrollToTop}>Homepage</Link>
                                <Link to="/ucivo" onClick={scrollToTop}>Učivo</Link>
                                <Link to="/notes" onClick={scrollToTop}>Poznámky</Link>
                            </div>
                        </div>
                    </div>
                    <div class="foot-grid">
                        <div class="foot-grid-dva">
                            <h1>Autori</h1>
                            <div class="grid-content">
                                <a>Dominik Fečo</a>
                                <a>Jakub Petrila</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={click} alt='click' class="clicky"></img>
                <Link to="/ucivo" className='pomoc' onClick={scrollToTop}>
                    <button className='but-fut'>
                        Zacni sa ucit!
                    </button>
                </Link>
                <img src={logo} alt='logo' class="logo-foot"></img>
            </div>
            <p class="copy-r">CopyRight@KUBKOADOMINIK S.R.O</p>
        </footer>
    );
}

export default Footer;