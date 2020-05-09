import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='main-div-home'>
            <div className='title-content-div'>
                <img
                    src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                    alt='Skylord Depot Logo'
                    className='logo'
                />
                <Link to='/shop'><button>Checkout the Store</button></Link>
            </div>            
        </div>
    );
};

export default Home;