import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./logo_fpcode.png";

const Header = () => {
    const navigate = useNavigate();

    // Skontrolujeme prihlásenie podľa prítomnosti tokenu
    const isLoggedIn = Boolean(localStorage.getItem("token"));

    const handleLogout = () => {
        localStorage.removeItem("token"); // Odstráni token z localStorage
        navigate("/login"); // Presmeruje na prihlasovaciu stránku
    };

    return (
        <header>
            <Link to="/" className="header-content">
                <img src={logo} alt="logo" className="header-logo" />
                <h1 className="header-title">FP code</h1>
            </Link>
            <div className="header-content head-con-second">
                <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">
                                        Domov
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ucivo" className="nav-link">
                                        Učivo
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/notes" className="nav-link">
                                        Poznámky
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="header-login">
                    {isLoggedIn ? (
                        <>
                            <button className="btn btn-danger" onClick={handleLogout}>
                                Odhlásiť sa
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="nav-link">
                            Prihlásiť sa
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

