import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
        return (
        <nav className = "navPage" >
            <ul >
                <li > < NavLink to = "/" exact activeClassName = "home" > HOME </NavLink></li >
                <li > < NavLink to = "/findCities" activeClassName = "findCities" > FIND CITIES </NavLink></li >
            </ul>
        </nav>);
        };

export default Navigation;