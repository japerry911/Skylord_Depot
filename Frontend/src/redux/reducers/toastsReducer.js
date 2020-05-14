const INITIAL_STATE = { open: true, type: 'success', message: '' }

const toastsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HANDLE_OPEN':
            return { open: true, type: action.payload.type, message: action.payload.message };

        case 'HANDLE_CLOSE':
            return { ...state, open: false };

        default:
            return state;
    }
};

export default toastsReducer;