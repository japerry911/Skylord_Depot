import React from 'react';
import HeroHeader from '../components/HeroHeader';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';

const OrderConfirmation = () => {
    const order = useSelector(state => state.auth.order);

    return (
        <div className='order-confirmation-main-div'>
            <HeroHeader
                headerText='Order Confirmation'
                imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/OrderConfirmation/744CC310-352B-4DA0-B40B-45467A63F47B_1_201_a.jpeg'
            />
            <div className='thank-you-div'>
                <img
                    alt='Skylord'
                    src='https://skylord-depot.s3.us-east-2.amazonaws.com/OrderConfirmation/DE48E42C-86C6-4F95-84D7-CBBAAA62D083_1_105_c.jpeg'
                /> 
                <p className='message-p'>
                    Thank you for your purchase. We are preparing your order for shipment now!
                </p>
                <p className='from-p'>
                    - Skylord Depot Team
                </p>
            </div>
            <div className='main-content-div'>
                <img
                    alt='Skylord Depot Logo'
                    src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                    className='logo-img'
                />
                <h3 className='order-confirmation-header-h3'>
                    Order Confirmation
                </h3>
                <Divider className='divider' />
                <div className='item-list-div'>
                    <ul>
                        {order.purchased_items ? order.purchased_items.map(item => {
                            return (
                                <li key={item.id}>
                                    <span>{item.good.name}</span>
                                    <span>${(Number(item.good.price) * item.quantity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                </li>
                            );
                        }) : null}
                    </ul>
                </div>
                <Divider className='divider' />
                <div className='total-div'>
                    <span>Total Charged: ${Number(order.total_price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;