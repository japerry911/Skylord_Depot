import React, { Fragment } from 'react';
import HeroHeader from '../components/HeroHeader';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Button from '@material-ui/core/Button';
import Spinner from '../components/Spinner';

const Cart = () => {
    const cartItems = useSelector(state => state.auth.cart);
    const isLoading = useSelector(state => state.auth.loading);

    return (
        <div className='cart-main-div'>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader
                    headerText='Your Cart'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/Cart/photo-1505623776320-7edecf5f0771.jpeg'
                    centerPosition={true}
                />
                <div className='cart-content-div'>
                    <img
                        alt='Skylord Depot Logo'
                        src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                        className='logo-img'
                    />
                    <h3 className='cart-header-h3'>
                        Your Items
                    </h3>
                    <Divider className='cart-divider' />
                    <ul>
                        {cartItems.map(cartItem => {
                            return (
                                <li key={cartItem.id}>
                                    <CartItem item={cartItem} />
                                </li>
                            );
                        })}
                    </ul>
                    <Button
                        disabled={cartItems.length === 0}
                        className='checkout-btn'
                    >
                        Checkout
                    </Button>
                </div>
            </Fragment>}
        </div>
    );
};

export default Cart;