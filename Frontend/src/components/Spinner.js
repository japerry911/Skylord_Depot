import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Spinner = () => {
    return (
        <div>
            <MoonLoader size={45} color='black' loading />
        </div>
    );
};

export default Spinner;