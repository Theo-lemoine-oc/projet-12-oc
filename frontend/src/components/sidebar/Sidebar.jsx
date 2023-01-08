import React from "react";
import sidebar from './sidebar.css'
import { NavLink } from 'react-router-dom';

import yoga from '../../assets/img/icon1.svg';
import natation from '../../assets/img/icon2.svg';
import velo from '../../assets/img/icon3.svg';
import musculation from '../../assets/img/icon4.svg';


export const Navbar = () => {
    return (
        <nav className="sidebar">
            <div className="tabs">
                <NavLink to="/">
                    <img src={ yoga } alt="Yoga" />
                </NavLink>
                <NavLink to="/">
                    <img src={ natation } alt="Yoga" />
                </NavLink>
                <NavLink to="/">
                    <img src={ velo } alt="Yoga" />
                </NavLink>
                <NavLink to="/">
                    <img src={ musculation } alt="Yoga" />
                </NavLink>
            </div>
            <span className="copyright">Copiryght, SportSee 2020</span>
        </nav>
    )
}

export default Navbar;