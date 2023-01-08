import React from "react";
import navbar from './navbar.css'
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={ logo } alt="" />
            <div className="tabs">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">Profil</NavLink>
                <NavLink to="/">Réglage</NavLink>
                <NavLink to="/">Communauté</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;