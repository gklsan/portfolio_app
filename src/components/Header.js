import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <h1>Portfolio App</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}> Home </NavLink>
        <NavLink to='/portfoilo' activeClassName='is-active'> Portfolio </NavLink>
        <NavLink to='/contact' activeClassName='is-active'> contact </NavLink>
    </div>
);

export default Header;