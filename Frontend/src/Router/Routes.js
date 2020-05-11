import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import SignIn from '../pages/SignIn';
import Treats from '../pages/Treats';
import Toys from '../pages/Toys';
import Food from '../pages/Food';
import ShowPage from '../pages/ShowPage';
import ScrollToTop from './ScrollToTop';

export default () => {
    return (
        <Fragment>
            <ScrollToTop />
            <Switch>
                <Route 
                    exact
                    path='/'
                    component={Home}
                />

                <Route
                    exact
                    path='/about'
                    component={About}
                />

                <Route 
                    exact
                    path='/contact'
                    component={Contact}
                />

                <Route 
                    exact
                    path='/shop'
                    component={Shop}
                />

                <Route 
                    exact 
                    path='/sign-in'
                    component={SignIn}
                />

                <Route
                    exact
                    path='/shop/treats'
                    component={Treats}
                />

                <Route
                    exact
                    path='/shop/toys'
                    component={Toys}
                />

                <Route
                    exact
                    path='/shop/food'
                    component={Food}
                />

                <Route
                    exact
                    path='/shop/(treats|toys|food)/:id'
                    component={ShowPage}
                />
            </Switch>
        </Fragment>
    );
};