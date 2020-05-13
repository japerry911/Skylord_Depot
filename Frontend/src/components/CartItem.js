import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { authDestroyCartItem, authCheckCart } from '../redux/actions/authActions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user.id);
    
    const handleDelete = () => {
        dispatch(authDestroyCartItem(item.id)).then(
            () => dispatch(authCheckCart(userId))
        );
    };

    return (
        <div className='cart-item-main-div'>
            <div className='name-and-image-div'>
                <p>
                    {item.good.name}
                </p>
                <img
                    src={item.good.card_image}
                    alt='Cart Item'
                />
            </div>
            <div className='quantity-and-price-div'>
                <p>
                    Quantity: {item.quantity}
                </p>
                <p>
                    Price: ${item.good.price} x {item.quantity} = ${(item.good.price * item.quantity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
            </div>
            <div className='delete-btn-div'>
                <IconButton className='delete-btn' onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default CartItem;