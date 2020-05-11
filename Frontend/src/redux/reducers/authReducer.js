const INITIAL_STATE = { user: {}, loggedIn: false, loading: false, error: null };

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_PENDING':
            return { ...state, loading: true, error: null };

        case 'AUTH_ERROR': 
            return { ...state, loading: false, loggedIn: false, error: action.error };

        case 'AUTH_SUCCESS': 
            return { ...state, loggedIn: true, loading: false, user: action.payload, error: null };

        default:
            return state;
    }
}

export default authReducer;