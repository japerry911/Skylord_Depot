import React from 'react';
import './DrawerToggleButton.scss';

const DrawerToggleButton = ({ click }) => (
    <button className='toggle-btn' onClick={click} >
        <div className='toggle-btn-line' />
        <div className='toggle-btn-line' />
        <div className='toggle-btn-line' />
    </button>
);

export default DrawerToggleButton;