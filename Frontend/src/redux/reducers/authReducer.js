const INITIAL_STATE = { user: {}, loggedIn: false, loading: false, error: null, cart: [] };

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_PENDING':
            return { ...state, loading: true, error: null };

        case 'AUTH_ERROR': 
            return { ...state, loading: false, loggedIn: false, error: action.error };

        case 'AUTH_SUCCESS': 
            return { ...state, loggedIn: true, loading: false, user: action.payload, error: null };

        case 'AUTH_SUCCESS_LOGOUT':
            return { ...state, loggedIn: false, loading: false, user: {}, error: null };

        case 'AUTH_SUCCESS_CHECK_CART':
            return { ...state, loading: false, cart: action.payload };

        case 'AUTH_SUCCESS_STOP_LOADING':
            return { ...state, loading: false };

        default:
            return state;
    }
}

export default authReducer;