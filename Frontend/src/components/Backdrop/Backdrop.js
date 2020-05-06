import React from 'react';
import './Backdrop.scss';

const Backdrop = ({ backdropClickHandler }) => (
    <div className='backdrop' onClick={backdropClickHandler} />
);

export default Backdrop;