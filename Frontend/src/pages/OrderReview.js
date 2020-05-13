import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authDestroyOrder } from '../redux/actions/authActions';
import Spinner from '../components/Spinner';
import StripeButton from '../components/StripeButton';

const OrderReview = ({ history }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.loading);
    const orderId = useSelector(state => state.auth.order.id);

    const handleCancel = () => {
        dispatch(authDestroyOrder(orderId)).then(
            () => {
                alert('Order Canceled Successfully.');
                history.push('/');
            }
        );
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
                <h1>
                    Order Review
                </h1>
                <div>
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                    <StripeButton />
                </div>
            </Fragment>}
        </div>
    );
};

export default OrderReview;