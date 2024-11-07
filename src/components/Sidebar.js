import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Pridaj CSS pre tento komponent

const Sidebar = () => (
  <>
    <nav id="sidebar" class="d-none d-md-block bg-light sidebar">
        <h4 class="text-center">Základy programovania</h4>
        <ul class="nav flex-column">
            <li class="sidebar-item"><a class="sidebar-link" href="#">Úvod do programovania</a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="#">Diagrami</a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="#">Syntax</a></li>
            <li class="sidebar-item">
                <a class="sidebar-link expandable collapsed" data-toggle="collapse" href="#syntaxSubmenu" role="button" aria-expanded="false" aria-controls="syntaxSubmenu">Dátové typi</a>
                <div class="collapse" id="syntaxSubmenu">
                    <ul class="nav flex-column">
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Preco rozdelujeme</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Int</a></li>
                    </ul>
                </div>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link expandable collapsed" data-toggle="collapse" href="#variablesSubmenu" role="button" aria-expanded="false" aria-controls="variablesSubmenu">Integeri</a>
                <div class="collapse" id="variablesSubmenu">
                    <ul class="nav flex-column">
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Funkcie Int</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Pouzitie Int</a></li>
                    </ul>
                </div>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link expandable collapsed" data-toggle="collapse" href="#stringsSubmenu" role="button" aria-expanded="false" aria-controls="stringsSubmenu">Stringy</a>
                <div class="collapse" id="stringsSubmenu">
                    <ul class="nav flex-column">
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Slicing Strings</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Modify Strings</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Concatenate Strings</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Format Strings</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">Escape Characters</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">String Methods</a></li>
                        <li class="sidebar-item"><a class="sidebar-link" href="#">String Exercises</a></li>
                    </ul>
                </div>
            </li>
            <li class="sidebar-item"><a class="sidebar-link" href="#">Booleans</a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="#">Operatory</a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="#">List</a></li>
        </ul>
    </nav>
    </>);
export default Sidebar