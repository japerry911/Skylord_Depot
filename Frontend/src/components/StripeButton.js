import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';

const StripeButton = () => {
    const rawPrice = useSelector(state => state.auth.order.total_price);

    const priceForStripe = rawPrice * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay with Stripe'
            name='Skylord Depot'
            billingAddress
            shippingAddress
            bitcoin
            image='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_size.jpg'
            description={`Your total is $${rawPrice}`}
            amount={priceForStripe}
            panelLabel='Pay with Stripe'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;