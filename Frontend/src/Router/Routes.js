import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import SignIn from '../pages/SignIn';

const Routes = () => {
    return (
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
        </Switch>
    );
};

export default Routes;