import React from 'react';
import { withRouter } from 'react-router-dom';

const ShopCard = ({ item, history, type }) => {
    return (
        <div className='card-div' onClick={() => history.push(`/shop/${type}/${item.id}`)}>
            <img
                src={item.card_image}
                alt='Card Main'
                className='card-main-img'
            />
            <h6 className='item-header-h6'>{item.name}</h6>
            <p className='card-description'>{item.description}</p>
            <p className='card-price'>${item.price}</p>
        </div>
    );
};

export default withRouter(ShopCard);