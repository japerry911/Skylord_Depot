import { combineReducers } from 'redux';
import goodsReducer from '../reducers/goodsReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
    goods: goodsReducer,
    auth: authReducer
});

export default allReducers;