import { combineReducers } from 'redux';
import goodsReducer from '../reducers/goodsReducer';

const allReducers = combineReducers({
    goods: goodsReducer
});

export default allReducers;