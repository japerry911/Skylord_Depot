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
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
import Cart from '../pages/Cart';
import OrderConfirmation from '../pages/OrderConfirmation';
import OrderReview from '../pages/OrderReview';
import OrderPayment from '../pages/OrderPayment';

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

                <Route
                    exact 
                    path='/register-account'
                    component={SignUp}
                />

                <ProtectedRoute
                    exact
                    path='/cart'
                    component={Cart}
                />

                <ProtectedRoute
                    exact 
                    path='/order-confirmation'
                    component={OrderConfirmation}
                />

                <ProtectedRoute
                    exact
                    path='/order-review'
                    component={OrderReview}
                />

                <ProtectedRoute
                    exact
                    path='/order-payment'
                    component={OrderPayment}
                />
            </Switch>
        </Fragment>
    );
};