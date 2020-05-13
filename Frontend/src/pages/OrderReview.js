import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authDestroyOrder } from '../redux/actions/authActions';
import Spinner from '../components/Spinner';
import StripeButton from '../components/StripeButton';
import HeroHeader from '../components/HeroHeader';
import Divider from '@material-ui/core/Divider';

const OrderReview = ({ history }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.loading);
    const order = useSelector(state => state.auth.order);

    const handleCancel = () => {
        dispatch(authDestroyOrder(order.id)).then(
            () => {
                alert('Order Canceled Successfully.');
                history.push('/');
            }
        );
    };

    return (
        <div className='order-review-main-div'>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader
                    headerText='Order Review'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/OrderReview/jasser-gomez-Nxorq1UB6fg-unsplash.jpg'
                    centerPosition={true}
                />
                <div className='main-content-div'>
                    <img
                        alt='Skylord Depot Logo'
                        src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                        className='logo-img'
                    />
                    <h3 className='order-review-header-h3'>
                        Order Review
                    </h3>
                    <Divider className='divider' />
                    <div className='item-list-div'>
                        <ul>
                            {order.purchased_items.map(item => {
                                return (
                                    <li key={item.id}>
                                        <span>{item.good.name}</span>
                                        <span>${(Number(item.good.price) * item.quantity).toFixed(2)}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <Divider className='divider' />
                    <div className='total-div'>
                        <span>Total: ${order.total_price}</span>
                    </div>
                    <div className='button-div'>
                        <Button onClick={handleCancel} className='cancel-btn'>
                            Cancel
                        </Button>
                        <StripeButton />
                    </div>
                </div>
            </Fragment>}
        </div>
    );
};

export default OrderReview;