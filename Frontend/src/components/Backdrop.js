import React from 'react';

const Backdrop = ({ backdropClickHandler }) => (
    <div className='backdrop' onClick={backdropClickHandler} />
);

export default Backdrop;