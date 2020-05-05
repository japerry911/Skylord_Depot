import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';

const SideDrawer = ({ open }) => {
    let drawerClasses = ['side-drawer'];
    if (open) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li><Link to='/'>Sign In</Link></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;