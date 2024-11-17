import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => (
    <header>
            <div class="header-content">
                <img src={logo} alt="logo" class="header-logo"/>
                <h1 class="header-title">FP code</h1>
            </div>
            <div class="header-content head-con-second">
                <nav class="navbar navbar-expand-lg bg-body-tertiary nav-custom">
                    <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link">
                                Domov
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ucivo" class="nav-link">
                                Učivo
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/notes" class="nav-link">
                            Poznámky
                        </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            uc sa
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            <div class="header-login"><a href="login">login</a></div>
        </div>
        </header>);
    export default Header;