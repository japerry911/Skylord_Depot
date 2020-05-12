import React from 'react';
import HeroHeader from '../components/HeroHeader';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.auth.cart);

    return (
        <div className='cart-main-div'>
            <HeroHeader
                headerText='Your Cart'
                imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/Cart/photo-1505623776320-7edecf5f0771.jpeg'
                centerPosition={true}
            />
            <div className='cart-content-div'>
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
            </div>
        </div>
    );
};

export default Cart;