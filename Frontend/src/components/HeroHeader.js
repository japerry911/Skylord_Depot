import React from 'react';

const HeroHeader = ({ headerText, imageUrl, centerPosition }) => (
    <div 
        className='hero-header-main-div'
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
            backgroundPosition: centerPosition ? 'center' : 'top'
        }}
    >
        <h6 className='hero-header-text-h6'>
            {headerText}
        </h6>
    </div>
);

export default HeroHeader;