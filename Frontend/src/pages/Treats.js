import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoods } from '../redux/actions/goodsActions';
import Spinner from '../components/Spinner';
import ShopCard from '../components/ShopCard';
import HeroHeader from '../components/HeroHeader';

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
                <HeroHeader
                    headerText='TREATS'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/christian-bowen-OYUzC-h1glg-unsplash.jpg'
                />
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