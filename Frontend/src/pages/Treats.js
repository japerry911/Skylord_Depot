import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoods } from '../redux/actions/goodsActions';
import Spinner from '../components/Spinner';
import ShopCard from '../components/ShopCard';

const Treats = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.goods.loading);
    const treats = useSelector(state => state.goods.treats);

    useEffect(() => {
        dispatch(getGoods());
    }, [dispatch]);

    return (
        <div className='main-div-treats'>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <h1 className='page-header-h1'>Treats Page</h1>
                <div className='cards-div'>
                    {treats.map(treat => {
                        return (
                            <ShopCard
                                key={treat.id}
                                treat={treat}
                            />
                        );
                    })}
                </div>
            </Fragment>}
        </div>
    );
};

export default Treats;