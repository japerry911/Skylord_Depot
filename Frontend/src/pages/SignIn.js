import React, { useState, useEffect, Fragment } from 'react';
import HeroHeader from '../components/HeroHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSignIn } from '../redux/actions/authActions';
import Spinner from '../components/Spinner';
import { handleOpen } from '../redux/actions/toastsActions';

const SignIn = ({ history }) => {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.loading);

    useEffect(() => {
        setValidated(username !== '' && password !== '');
    }, [username, password]);

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(authSignIn(username, password)).then(
            authed => {
                if (authed) {
                    dispatch(handleOpen({ type: 'success', message: 'Successfully logged in.' }));
                    history.push('/');
                } else {
                    dispatch(handleOpen({ type: 'error', message: 'Incorrect credentials.' }));
                }
            }
        );
    };

    return (
        <div className='sign-in-main-div'>
            {isLoading 
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader
                    headerText='Sign In'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/SignIn/photo-1588833945832-a888b6a03c2d.jpeg'
                    centerPosition={true}
                />
                <div className='content-div'>
                    <form onSubmit={handleSubmit}>
                        <img
                            alt='Skylord Depot Logo'
                            src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                            className='logo-img'
                        />
                        <TextField 
                            className='textfield-input' 
                            label='Username' 
                            value={username}
                            onChange={newUsername => setUsername(newUsername.target.value)}
                        />
                        <TextField 
                            className='textfield-input' 
                            label='Password' 
                            type='password'
                            value={password}
                            onChange={newPassword => setPassword(newPassword.target.value)} 
                        />
                        <div className='btns-div'>
                            <Button 
                                variant='contained' 
                                className='sign-in-btn'
                                type='submit'
                                disabled={!validated}
                                endIcon={validated ? <CheckBoxIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'red' }} />}
                            >
                                Sign In
                            </Button>
                            <Link
                                to='/register-account'
                            >
                                <Button 
                                    variant='contained' 
                                    className='create-act-btn' 
                                >
                                    Create Account
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </Fragment>}
        </div>
    );
};

export default SignIn;