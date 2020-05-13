import React from 'react';
import CardSection from '../components/CardSection';
import Button from '@material-ui/core/Button';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const OrderPayment = () => {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <div>
            <h1>Order Payment</h1>
            <form>
                <CardSection />
                <Button disabled={!stripe}>
                    Confirm Order
                </Button>
            </form>
        </div>
    );
};

export default OrderPayment;