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
                    dispatch(authSuccess({}));
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
            () => dispatch(authSuccess({})),
            error => dispatch(authError(error))
        );
    };
};