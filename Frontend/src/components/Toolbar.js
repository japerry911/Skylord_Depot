import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton';
import { Auth, NonAuth } from '../Router/routesArrays';
import { useSelector } from 'react-redux';

const Toolbar = ({ drawerClickHandler }) => {
    const loggedIn = useSelector(state => state.auth.loggedIn);

    return (  
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
                        {!loggedIn
                        ?
                        NonAuth.map((routeObject, index) => {
                            return (
                                <li key={index}><Link to={routeObject.path}>{routeObject.title}</Link></li>
                            );
                        })
                        :
                        Auth.map((routeObject, index) => {
                            return (
                                <li key={index}><Link to={routeObject.path}>{routeObject.title}</Link></li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;