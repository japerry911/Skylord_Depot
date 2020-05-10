import React from 'react';
import { withRouter } from 'react-router-dom';

const ShopCard = ({ treat, history }) => {
    return (
        <div className='card-div' onClick={() => history.push(`/shop/treats/${treat.id}`)}>
            <img
                src={treat.card_image}
                alt='Card Main'
                className='card-main-img'
            />
            <h6 className='item-header-h6'>{treat.name}</h6>
            <p className='card-description'>{treat.description}</p>
            <p className='card-price'>${treat.price}</p>
        </div>
    );
};

export default withRouter(ShopCard);