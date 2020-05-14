const INITIAL_STATE = { open: true, type: 'success' }

const toastsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HANDLE_CLICK':
            return { open: true, type: 'success' };

        case 'HANDLE_CLOSE':
            return { open: false, type: null };

        default:
            return state;
    }
};

export default toastsReducer;