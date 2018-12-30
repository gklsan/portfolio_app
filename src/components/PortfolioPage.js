import React from 'react';
import { NavLink } from "react-router-dom";

const PortfolioPage = () => (
    <div>
        <p>This is Portfolio Page...</p>
        <div>
            <NavLink to='portfolio/1'> Item One </NavLink>
            <NavLink to='portfolio/2'> Item Two </NavLink>
        </div>
    </div>
);

export default PortfolioPage;
