const INITIAL_STATE = { treats: [], toys: [], foods: [], error: null, loading: false };

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

        default:
            return state;
    }
};

export default goodsReducer;