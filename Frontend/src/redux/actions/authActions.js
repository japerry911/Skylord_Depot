import railsServer from '../../api/railsServer';

export const authPending = () => {
    return {
        type: 'AUTH_PENDING'
    };
};

export const authError = error => {
    return {
        type: 'AUTH_ERROR',
        error
    };
};

export const authSuccess = payload => {
    return {
        type: 'AUTH_SUCCESS',
        payload 
    };
};

export const authSignUp = (username, password) => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.post('/registrations', { user: { username, password }}, { withCredentials: true }).then(
            response => {
                if (response.status === 200) {
                    dispatch(authSuccess(response.data.user));
                    return true;
                } else {
                    dispatch(authError('Error making account'));
                    return false;
                }
            },
            error => {
                dispatch(authError(error));
                return false;
            }
        );
    }
};

export const authSignIn = (username, password) => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.post('/sessions', { user: { username, password }}, { withCredentials: true }).then(
            response => {
                if (response.data.user) {
                    dispatch(authSuccess(response.data.user))
                    return true;
                } else {
                    dispatch(authError('Incorrect Credentials'));
                    return false;
                }},
            error => dispatch(authError(error))
        );
    };
};

export const authIsLoggedIn = () => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.get('/logged_in', { withCredentials: true }).then(
            response => {
                if (response.data.user) {
                    dispatch(authSuccess(response.data.user))
                } else {
                    dispatch(authSuccessLogout());
                };
            },
            error => console.log(error)
        );
    };
};

export const authLogout = () => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.delete('/logout', { withCredentials: true }).then(
            () => dispatch(authSuccessLogout()),
            error => dispatch(authError(error))
        );
    };
};

export const authSuccessLogout = () => {
    return {
        type: 'AUTH_SUCCESS_LOGOUT'
    };
};

export const authCheckCart = id => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.get(`/sessions/${id}`).then(
            response => dispatch(authSuccessCheckCart(response.data.order_items)),
            error => dispatch(authError(error))
        );
    };
};

export const authSuccessCheckCart = payload => {
    return {
        type: 'AUTH_SUCCESS_CHECK_CART',
        payload
    };
};

export const authSuccessStopLoading = () => {
    return {
        type: 'AUTH_SUCCESS_STOP_LOADING'
    };
};

export const authAddToCart = (userId, goodId, quantity) => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.post('/order_items', { order_item: { user: userId, good: goodId, quantity }}).then(
            () => dispatch(authSuccessStopLoading()),
            error => dispatch(authError(error))
        );
    };
};

export const authDestroyCartItem = id => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.delete(`/order_items/${id}`).then(
            () => dispatch(authSuccessStopLoading()),
            error => dispatch(authError(error))
        );
    };
};

export const authSuccessCreateOrUpdateOrder = payload => {
    return {
        type: 'AUTH_SUCCESS_CREATE_OR_UPDATE_ORDER',
        payload
    };
};

export const authCreateOrder = (user_id, total_price, items) => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.post('/orders', { new_order: { user_id, total_price, items }}).then(
            response => dispatch(authSuccessCreateOrUpdateOrder(response.data)),
            error => dispatch(authError(error))
        );
    };
};

export const authSuccessDestroyOrder = () => {
    return {
        type: 'AUTH_SUCCESS_DESTROY_ORDER'
    };
};

export const authDestroyOrder = id => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.delete(`/orders/${id}`).then(
            () => dispatch(authSuccessDestroyOrder()),
            error => dispatch(authError(error))
        );
    };
};

export const authCreatePaymentIntent = () => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.get('/secret').then(
            response => dispatch(authSuccessCreatePaymentIntent(response.data.client_secret)),
            error => dispatch(authError(error))
        );
    };
} 

export const authSuccessCreatePaymentIntent = payload => {
    return {
        type: 'AUTH_SUCCESS_CREATE_PAYMENT_INTENT',
        payload
    };
};

export const authUpdateOrderProcess = (id, process) => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.put(`/orders/${id}`, { new_order: { processed: process }}).then(
            response => dispatch(authSuccessCreateOrUpdateOrder(response.data.updated_order)),
            error => dispatch(authError(error))
        );
    };
};