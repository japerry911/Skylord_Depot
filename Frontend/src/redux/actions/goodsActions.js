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

export const getGoods = dispatch => {
    return dispatch => {};
};