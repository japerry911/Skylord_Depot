import React, { useState, useEffect, Fragment } from 'react';
import CardSection from '../components/CardSection';
import Button from '@material-ui/core/Button';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import HeroHeader from '../components/HeroHeader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { authDestroyOrder, authUpdateOrderProcess, authClearCart } from '../redux/actions/authActions';
import { handleOpen } from '../redux/actions/toastsActions';

const OrderPayment = ({ history }) => {
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
    
    const dispatch = useDispatch();
    const clientSecret = useSelector(state => state.auth.clientSecret);
    const order = useSelector(state => state.auth.order);
    const authLoading = useSelector(state => state.auth.loading);
    const user = useSelector(state => state.auth.user);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        setValidated(bAddress && bCity && bState && bZipcode && sAddress && sCity && sState && sZipcode);
    }, [bAddress, bCity, bState, bZipcode, sAddress, sCity, sState, sZipcode]);

    const handleCancel = () => {
        dispatch(authDestroyOrder(order.id)).then(
            () => {
                dispatch(handleOpen({ type: 'success', message: 'Order successfully canceled.'}));
                history.push('/');
            }
        );
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user.username,
                    address: {
                        city: sCity,
                        country: 'US',
                        line1: sAddress,
                        state: sState
                    }
                }
            }
        });

        setIsLoading(false);

        if (result.error) {
            console.log(result.error);
            dispatch(authUpdateOrderProcess(order.id, 'PAYMENT-ERROR'));
            dispatch(handleOpen({ type: 'error', message: `Order Error: ${result.error.message}`}));
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                dispatch(authUpdateOrderProcess(order.id, 'PAYMENT-COMPLETED'));
                dispatch(authClearCart(user.id));
                dispatch(handleOpen({ type: 'success', message: 'Order successfully processed.'}));
                history.push('/order-confirmation');
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
                        <Button className='btn' onClick={handleCancel}>
                            Cancel Order
                        </Button>
                        <Button className='btn' disabled={!stripe || !validated || isLoading || authLoading} type='submit'>
                            {authLoading || isLoading
                            ?
                            <Fragment>
                                <i className='fa fa-refresh fa-spin' style={{ marginRight: '5px' }} /><span>Processing</span>
                            </Fragment>
                            :
                            <Fragment>
                                <span>Confirm Order</span>
                            </Fragment>}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderPayment;