import React from 'react';
import HeroHeader from '../components/HeroHeader';

const OrderConfirmation = () => {
    return (
        <div className='order-confirmation-main-div'>
            <HeroHeader
                headerText='Order Confirmation'
                imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/OrderConfirmation/744CC310-352B-4DA0-B40B-45467A63F47B_1_201_a.jpeg'
            />
        </div>
    );
};

export default OrderConfirmation;