import React, { useState, useEffect, Fragment } from 'react';
import HeroHeader from '../components/HeroHeader';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getGood } from '../redux/actions/goodsActions';
import { authAddToCart, authCheckCart } from '../redux/actions/authActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { handleOpen } from '../redux/actions/toastsActions';

const ShowPage = ({ match }) => {
    const [photo, setPhoto] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const item = useSelector(state => state.goods.showItem);
    const user = useSelector(state => state.auth.user);
    const authLoading = useSelector(state => state.auth.loading);
    const goodLoading = useSelector(state => state.goods.loading);

    useEffect(() => {
        const imgs = [
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1581125919695-e481e2c98386.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588413453099-f1acf8009661.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588533588400-9e6b9daadecf.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588645143016-8648469d9af3.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588738190182-ba91e4bca6a6.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588789214771-16bc2b2b5bb9.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588833946439-df4d22cbca1e.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588849538136-93dcb143d025.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588870995846-f4ffbc3d03f5.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588931726309-8e8c4069216f.jpeg',
            'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1589015745591-29c9d40e7ebb.jpeg'
        ]

        const randomInt = Math.floor(Math.random() * imgs.length);
        
        setPhoto(imgs[randomInt]);

        return () => setPhoto(null);
    }, []);

    useEffect(() => {
        dispatch(getGood(match.params.id));
    }, [match.params.id, dispatch]);

    const handleQuantityChange = event => {
        if (event.target.value >= 0) {
            setQuantity(event.target.value)
        } else {
            setQuantity(0);
        }
    };

    const handleAddToCart = () => {
        dispatch(authAddToCart(user.id, item.id, quantity)).then(
            () => {
                dispatch(authCheckCart(user.id)).then(
                    () => dispatch(handleOpen({ type: 'success', message: `${item.name} added to your cart!` }))
                );
            }
        );
    };

    return (
        <div className='show-page-main-div'>
            {goodLoading || authLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader
                    headerText={item.name}
                    imageUrl={photo}
                    centerPosition={true}
                />
                <div className='show-page-content-div'>
                    <h3 className='name-h3'>
                        {item.name}
                    </h3>
                    <p className='description'>
                        {item.description}
                    </p>
                    <p className='price'>
                        ${item.price}
                    </p>
                    <div className='images-div'>
                        <img
                            src={item.card_image}
                            alt='Card'
                        />
                        {item.detail_image1
                        ?
                        <img
                            src={item.detail_image1}
                            alt='Detail 1'
                        />
                        :
                        null}
                        {item.detail_image2
                        ?
                        <img
                            src={item.detail_image2}
                            alt='Detail 2'
                        />
                        :
                        null}
                    </div>
                    <div className='btn-and-quantity-div'>
                        <TextField
                            className='quantity-input'
                            type='number'
                            label='Quantity'
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <Button
                            className='add-to-cart-btn' 
                            disabled={!quantity || Object.keys(user).length === 0}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </Fragment>}
        </div>
    );
};

export default ShowPage;