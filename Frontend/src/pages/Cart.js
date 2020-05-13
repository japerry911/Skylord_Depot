import React, { Fragment, useEffect, useState } from 'react';
import HeroHeader from '../components/HeroHeader';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Button from '@material-ui/core/Button';
import Spinner from '../components/Spinner';
import { authCreateOrder } from '../redux/actions/authActions';

const Cart = ({ history }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.auth.cart);
    const isLoading = useSelector(state => state.auth.loading);
    const userId = useSelector(state => state.auth.user.id);

    useEffect(() => {
        setTotalPrice(cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * Number(currentValue.good.price)), 0));
    }, [cartItems]);

    const handleCheckout = () => {
        const purchaseItems = cartItems.map(itemObject => {
            return {
                id: itemObject.good_id,
                quantity: itemObject.quantity
            };
        })

        dispatch(authCreateOrder(userId, totalPrice, purchaseItems)).then(
            () => history.push('/order-review')
        );
    };

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
                    <div className='total-and-checkout-btn-div'>
                        <div className='total-price-div'>
                            <p className='total-price'>
                                Total: ${totalPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                        <Button
                            disabled={cartItems.length === 0}
                            className='checkout-btn'
                            onClick={handleCheckout}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </Fragment>}
        </div>
    );
};

export default Cart;