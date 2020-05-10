import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ treat }) => {
    return (
        <div className='card-div'>
            <img
                src={treat.card_image}
                alt='Card Main'
                className='card-main-img'
            />
            <h6 className='item-header-h6'>{treat.name}</h6>
            <p className='card-description'>{treat.description}</p>
            <p className='card-price'>${treat.price}</p>
            <Link to='/shop/treats'>See more...</Link>
        </div>
    );
};

export default ShopCard;