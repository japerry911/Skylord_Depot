import React from 'react';
import HeroHeader from '../components/HeroHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignIn = () => {
    return (
        <div className='sign-in-main-div'>
            <HeroHeader
                headerText='Sign In'
                imageUrl='https://skylord-depot.s3.us-east-2.amazonaws.com/SignIn/photo-1588833945832-a888b6a03c2d.jpeg'
                centerPosition={true}
            />
            <div className='content-div'>
                <form>
                    <img
                        alt='Skylord Depot Logo'
                        src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                        className='logo-img'
                    />
                    <TextField className='textfield-input' label='Username' />
                    <TextField className='textfield-input' label='Password' />
                    <div className='btns-div'>
                        <Button variant='contained' className='sign-in-btn'>
                            Sign In
                        </Button>
                        <Button variant='contained' className='create-act-btn'>
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;