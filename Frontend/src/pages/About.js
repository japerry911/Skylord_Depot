import React from 'react';

const About = () => {
    return (
        <div className='main-about-div'>
            <div className='content-div'>
                <h3>
                    About Skylord Depot
                </h3>
                <p>
                    Skylord Depot was founded in May 2020. It was founded under Jack Perry and Skylord Perry with the goal to feed dogs the best treats.
                    Together, Jack and Sky have cooked up and mastered many great treat recipes. These recipes have become famous locally and are starting to 
                    become known around the world. Dogs love Skylord Depot, and rely on it for their food, toys, and, of course, treats! Skylord Depot was founded on
                    love, community, and, once again, good tasting treats! Please feel free to contact us to learn more, we would love to hear from you. In the mean time
                    please enjoy some treats from Skylord and Jack! Happy Treat-Eating!
                </p>
                <div className='img-div'>
                    <img
                        alt='Skylord Depot Logo'
                        src='https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;