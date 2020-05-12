import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = props => {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const { component: Component, ...propElements } = props;

    return (
        <Route
            {...propElements}
            render={propElements => (
                loggedIn
                ?
                <Component {...propElements} />
                :
                <Redirect to='/sign-in' />
            )}
        />
    );
};

export default ProtectedRoute;