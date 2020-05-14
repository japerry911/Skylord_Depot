import { combineReducers } from 'redux';
import goodsReducer from '../reducers/goodsReducer';
import authReducer from './authReducer';
import toastsReducer from './toastsReducer';

const allReducers = combineReducers({
    goods: goodsReducer,
    auth: authReducer,
    toasts: toastsReducer
});

export default allReducers;