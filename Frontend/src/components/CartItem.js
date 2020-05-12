import React from 'react';

const CartItem = ({ item }) => {
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
                    Price: ${item.good.price} x {item.quantity} = ${(item.good.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default CartItem;