import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoods } from '../redux/actions/goodsActions';
import Spinner from '../components/Spinner';
import ShopCard from '../components/ShopCard';
import HeroHeader from '../components/HeroHeader';

const Toys = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.goods.loading);
    const toys = useSelector(state => state.goods.toys);

    useEffect(() => {
        dispatch(getGoods());
    }, [dispatch]);

    return (
        <div className='main-div-shop-cat'>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader
                    headerText='TOYS'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/photo-1576686271442-c10befe0b77c.jpeg'
                />
                <div className='cards-div'>
                    {toys.map(toy => {
                        return (
                            <ShopCard
                                key={toy.id}
                                item={toy}
                                type='toys'
                            />
                        );
                    })}
                </div>
            </Fragment>}
        </div>
    );
};

export default Toys;