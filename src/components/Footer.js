import React from 'react';
import './Footer.css';
import logo from "./logo_fpcode.png";
const Footer = () => (
    <footer>
            <h1 class="footer-nadpis">FP CODE</h1>
            <img src={logo} alt='logo' class="logo-foot"></img>
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
            <p class="copy-r">CopyRight@KUBKOADOMINIK S.R.O</p>
        </footer>);
        export default Footer;