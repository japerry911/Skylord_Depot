import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton';

const Toolbar = ({ drawerClickHandler }) => (
    <header className='toolbar'>
        <nav className='toolbar-navigation'>
            <div className='mobile-btn'><DrawerToggleButton click={drawerClickHandler} /></div>
            <div className='toolbar-logo'>
                <Link to='/'>
                    <img
                        alt='Skylord Depot Logo'
                        src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
                    />
                </Link>
            </div>
            <div className='spacer' />
            <div className='toolbar-navigation-items'>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Sign In</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;