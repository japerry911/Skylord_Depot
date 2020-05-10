import railsServer from '../../api/railsServer';

export const pendingGoods = () => {
    return {
        type: 'PENDING_GOODS'
    };
};

export const errorGoods = error => {
    return {
        type: 'ERROR_GOODS',
        error
    };
};

export const successGetGoods = payload => {
    return {
        type: 'SUCCESS_GET_GOODS',
        payload
    };
};

export const getGoods = () => {
    return dispatch => {
        dispatch(pendingGoods());

        return railsServer.get('/goods').then(
                response => dispatch(successGetGoods(response.data)),
                error => dispatch(errorGoods(error))
        );
    };
};