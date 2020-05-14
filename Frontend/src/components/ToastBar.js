import React, { Fragment } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { handleClose } from '../redux/actions/toastsActions';

const Alert = props => {
    return (
        <MuiAlert elevation={6} variant='filled' {...props} />
    );
};

const ToastBar = () => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.toasts.open);
    const type = useSelector(state => state.toasts.type);

    return (
        <Fragment>
            <Snackbar open={open}>
                <Alert severity={type}>
                    TEST ALERT
                </Alert>
            </Snackbar>
        </Fragment>
    );
};

export default ToastBar;