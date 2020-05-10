import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoods } from '../redux/actions/goodsActions';

const Treats = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.goods.loading);
    const treats = useSelector(state => state.goods.treats);

    useEffect(() => {
        dispatch(getGoods());
    }, [dispatch]);

    return (
        <div>
            <h1>Treats Page</h1>
        </div>
    );
};

export default Treats;