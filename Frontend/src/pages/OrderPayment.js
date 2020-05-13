import React, { useState, useEffect } from 'react';
import CardSection from '../components/CardSection';
import Button from '@material-ui/core/Button';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import HeroHeader from '../components/HeroHeader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const OrderPayment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [bAddress, setBAddress] = useState('');
    const [bCity, setBCity] = useState('');
    const [bState, setBState] = useState('');
    const [bZipcode, setBZipcode] = useState('');
    const [sAddress, setSAddress] = useState('');
    const [sCity, setSCity] = useState('');
    const [sState, setSState] = useState('');
    const [sZipcode, setSZipcode] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const clientSecret = useSelector(state => state.auth.clientSecret);

    useEffect(() => {
        setValidated(bAddress && bCity && bState && bZipcode && sAddress && sCity && sState && sZipcode);
    }, [bAddress, bCity, bState, bZipcode, sAddress, sCity, sState, sZipcode]);

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
        <div className='order-payment-main-div'>
            <HeroHeader
                headerText='Order Payment'
                imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/OrderPayment/jesse-schoff-i2DefZ6PCN0-unsplash.jpg'
            />
            <div className='main-content-div'>
                <h3 className='order-payment-header-h3'>
                    Order Payment
                </h3>
                <Divider className='divider' />
                <form onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <p>
                            Billing Address
                        </p>
                        <TextField label='Address' value={bAddress} onChange={newBAddress => setBAddress(newBAddress.target.value)} />
                        <TextField label='City' value={bCity} onChange={newBCity => setBCity(newBCity.target.value)} />
                        <TextField label='State' value={bState} onChange={newBState => setBState(newBState.target.value)} />
                        <TextField label='Zipcode' value={bZipcode} onChange={newBZipcode => setBZipcode(newBZipcode.target.value)} />
                    </div>
                    <div className='form-div'>
                        <p>
                            Shipping Information
                        </p>
                        <TextField label='Address' value={sAddress} onChange={newSAddress => setSAddress(newSAddress.target.value)} />
                        <TextField label='City' value={sCity} onChange={newSCity => setSCity(newSCity.target.value)} />
                        <TextField label='State' value={sState} onChange={newSState => setSState(newSState.target.value)} />
                        <TextField label='Zipcode' value={sZipcode} onChange={newSZipcode => setSZipcode(newSZipcode.target.value)} />
                    </div>
                    <div className='form-div'>
                        <p>
                            Payment Information
                        </p>
                    </div>
                    <CardSection />
                    <Divider className='divider' />
                    <div className='btn-div'>
                        <Button className='confirm-btn' disabled={!stripe} type='submit' disabled={!validated}>
                            Confirm Order
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderPayment;