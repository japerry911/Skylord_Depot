import React, { useState, useEffect, Fragment } from 'react';
import HeroHeader from '../components/HeroHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authSignUp } from '../redux/actions/authActions';
import Spinner from '../components/Spinner';

const SignUp = ({ history }) => {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.loading);
    const isError = useSelector(state => state.auth.error);

    useEffect(() => {
        if (username !== '' && password !== '' && (password === confirmPassword)) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    }, [username, password, confirmPassword]);

    const handleSubmit = event => {
        event.preventDefault();     
        
        dispatch(authSignUp(username, password)).then(
            createdBool => {
                if (createdBool) {
                    console.log('Account Created');
                    history.push('/');
                } else {
                    alert('not created');
                }
            },
            error => alert(error)
        );
    };

    return (
        <div className='sign-up-main-div'>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader
                    headerText='Register an Account'
                    imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/SignUp/photo-1541952137766-40b2244d0a5b.jpeg'
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
                        <TextField 
                            className='textfield-input' 
                            label='Confirm Password' 
                            type='password'
                            value={confirmPassword}
                            onChange={newConfirmPassword => setConfirmPassword(newConfirmPassword.target.value)} 
                        />
                        <Button
                            className='submit-btn'
                            disabled={!validated}
                            type='submit'
                        >
                            Register Account
                        </Button>
                    </form>
                </div>
            </Fragment>}
        </div>
    );
};

export default SignUp;