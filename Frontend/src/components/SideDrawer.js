import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth, NonAuth } from '../Router/routesArrays';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../redux/actions/authActions';

const SideDrawer = ({ open, closeSideDrawer }) => {
    let drawerClasses = ['side-drawer'];
    if (open) {
        drawerClasses = 'side-drawer open';
    }

    const [totalItemCount, setTotalItemCount] = useState(0);

    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const cartItems = useSelector(state => state.auth.cart);

    useEffect(() => {
        setTotalItemCount(cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0));
    }, [cartItems]);

    const handleLogout = () => {
        dispatch(authLogout());
    };


    return (
        <nav className={drawerClasses}>
            <ul>
                {!loggedIn
                ?
                NonAuth.map((routeObject, index) => {
                    return (
                        <li key={index}><Link to={routeObject.path} onClick={closeSideDrawer}>{routeObject.title}</Link></li>
                    );
                })
                :
                <Fragment>
                    {Auth.map((routeObject, index) => {
                        return (
                            <li key={index}><Link to={routeObject.path} onClick={closeSideDrawer}>{routeObject.title}</Link></li>
                        );
                    })}
                    <li><Link to='/cart' onClick={closeSideDrawer}>Cart (<span>{totalItemCount}</span>)</Link></li>
                    <li className='logout-list-item' onClick={() => {
                        handleLogout();
                        closeSideDrawer();
                    }}>Sign Out</li>
                </Fragment>
                }
                <li>
                    <Link to='/' onClick={closeSideDrawer}>
                        <img
                            alt='Skylord Depot Logo'
                            src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;