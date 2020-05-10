import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGoods } from '../redux/actions/goodsActions';
import Spinner from '../components/Spinner';
import ShopCard from '../components/ShopCard';
import HeroHeader from '../components/HeroHeader';

const Food = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.goods.loading);
    const foods = useSelector(state => state.goods.foods);

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
                    headerText='Food'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/photo-1585846888147-3fe14c130048.jpeg'
                    centerPosition={true}
                />
                <div className='cards-div'>
                    {foods.map(food => {
                        return (
                            <ShopCard
                                key={food.id}
                                item={food}
                                type='food'
                            />
                        );
                    })}
                </div>
            </Fragment>}
        </div>
    );
};

export default Food;