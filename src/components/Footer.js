import React from 'react';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from "./logo_fpcode.png";
const Footer = () => (
    <footer>
            <div className='foot-inf'>
           
            <div class="foot-con">
                <div class="foot-grid">
                    <div class="foot-grid-dva">
                        <h1>Kontakt</h1>
                        <div class="grid-content">
                            <a>+421 000 000 000</a>
                            <a >pomoc@fp-code.sk</a>
                            <a>Rastislavova 40, Bratislava</a>
                        </div>
                    </div>
                </div>
                <div class="foot-grid">
                    <div class="foot-grid-dva">
                        <h1>Menu:</h1>
                        <div class="grid-content">
                            <a href="kar">Homepage</a>
                            <a href="kar">Učivo</a>
                            <a href="kar">Poznámky</a>
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
            <Link to="/ucivo" className='pomoc'>
                          <button className='but-fut'>
                            Zacni sa ucit!
                          </button>
            </Link>
            <img src={logo} alt='logo' class="logo-foot"></img>
            </div>
            <p class="copy-r">CopyRight@KUBKOADOMINIK S.R.O</p>
        </footer>);
        export default Footer;