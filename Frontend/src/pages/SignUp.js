import React, { useState, useEffect } from 'react';
import HeroHeader from '../components/HeroHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import railsServer from '../api/railsServer';

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (username !== '' && password !== '' && (password === confirmPassword)) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    }, [username, password, confirmPassword]);

    const handleSubmit = event => {
        event.preventDefault();     
        
        railsServer.post('/registrations', { user: { username, password }}, { withCredentials: true }).then(
            response => console.log('registration response', response),
            error => console.log('registration error', error)
        );
    };

    return (
        <div className='sign-up-main-div'>
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
        </div>
    );
};

export default SignUp;