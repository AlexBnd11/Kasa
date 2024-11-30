import React from "react";
import { NavLink } from 'react-router-dom';
import kasaLogo from '../assets/kasa-logo.png';

export default function Header() {
    return (
        <header>
            <img src={kasaLogo} alt="kasa logo"></img>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>A Propos</NavLink>
            </nav>
        </header>
    );
}