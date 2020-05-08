import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer  = () => (
    <footer className='main-footer'>
        <div className='footer-div'>
            <div className='follow-us-div'>
                <SocialIcon network='instagram' fgColor='#F9F6F6' />
                <SocialIcon network='youtube' fgColor='#F9F6F6' />
                <SocialIcon network='facebook' fgColor='#F9F6F6' />
                <SocialIcon network='twitter' fgColor='#F9F6F6' />
            </div>
            <div className='logo-div'>
                <Link to='/'>
                    <img
                        src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
                        alt='Skylord Depot Logo'
                    />
                </Link>
            </div>
            <div className='pages-div'>
                <ul>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Sign In</Link></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;