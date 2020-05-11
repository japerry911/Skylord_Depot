const INITIAL_STATE = { treats: [], toys: [], foods: [], error: null, loading: false, showItem: {} };

const goodsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PENDING_GOODS':
            return { ...state, loading: true };

        case 'ERROR_GOODS': 
            return { ...state, loading: false, error: action.error };

        case 'SUCCESS_GET_GOODS':
            const treats = action.payload.goods.filter(good => good.product_type === 'Treat');
            const toys = action.payload.goods.filter(good => good.product_type === 'Toy');
            const foods = action.payload.goods.filter(good => good.product_type === 'Food');

            return { ...state, treats, toys, foods, loading: false };

        case 'SUCCESS_GET_GOOD':
            return { ...state, showItem: action.payload.good, loading: false };

        default:
            return state;
    }
};

export default goodsReducer;