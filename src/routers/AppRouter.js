import React from 'react';
import { BrowserRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/portfoilo' component={PortfolioPage} exact={true}/>
                <Route path='/portfolio/:id' component={PortfolioItemPage} />
                <Route path='/contact' component={ContactPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

