import React, { useState, Fragment } from 'react';
import CardSection from '../components/CardSection';
import Button from '@material-ui/core/Button';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';

const OrderPayment = () => {
    const [isLoading, setIsLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const clientSecret = useSelector(state => state.auth.clientSecret);

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(false);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'TEST_NAME'
                }
            }
        });
        
        setIsLoading(false);

        if (result.error) {
            console.log(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                alert('SUCCESSFUL');
                // Update the order in the backend to payment complete or something similar
            }
        }
    };

    return (
        <div>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <h1>Order Payment</h1>
                <form onSubmit={handleSubmit}>
                    <CardSection />
                    <Button disabled={!stripe} type='submit'>
                        Confirm Order
                    </Button>
                </form>
            </Fragment>}
        </div>
    );
};

export default OrderPayment;