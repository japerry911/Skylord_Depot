import React from 'react';

const ShowPage = ({ match }) => {
    return (
        <div className='show-page-main-div'>
            <h1>Show Page: {match.params.id}</h1>
        </div>
    );
};

export default ShowPage;