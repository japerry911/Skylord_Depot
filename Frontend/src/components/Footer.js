import React, { useState, Fragment, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import { NonAuth, Auth } from '../Router/routesArrays';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/actions/authActions';

const Footer  = () => {
    const [totalItemCount, setTotalItemCount] = useState(0);

    const loggedIn = useSelector(state => state.auth.loggedIn);
    const cartItems = useSelector(state => state.auth.cart);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
    };

    useEffect(() => {
        setTotalItemCount(cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0));
    }, [cartItems]);

    return (
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
                        {!loggedIn
                        ?
                        NonAuth.map((routeObject, index) => {
                            return (
                                <li key={index}><Link to={routeObject.path}>{routeObject.title}</Link></li>
                            );
                        })
                        :
                        <Fragment>
                            {Auth.map((routeObject, index) => {
                                return (
                                    <li key={index}><Link to={routeObject.path}>{routeObject.title}</Link></li>
                                );
                            })}
                            <li><Link to='/cart'>Cart (<span>{totalItemCount}</span>)</Link></li>
                            <li className='logout-list-item' onClick={handleLogout}>Sign Out</li>
                        </Fragment>
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;