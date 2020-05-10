import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Spinner = () => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
            <MoonLoader size={45} color='black' loading />
        </div>
    );
};

export default Spinner;