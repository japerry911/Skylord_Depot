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
            response => dispatch(authSuccess(response.data.user)),
            error => dispatch(authError(error))
        );
    }
};

export const authSignIn = (username, password) => {
    return dispatch => {
        dispatch(authPending());

        return railsServer.post('/sessions', { user: { username, password }}, { withCredentials: true }).then(
            response => dispatch(authSuccess(response.data.user)),
            error => dispatch(authError(error))
        );
    };
};