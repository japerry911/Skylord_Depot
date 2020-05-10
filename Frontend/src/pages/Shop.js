import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className='main-div-shop'>
            <div className='tiles-div'>
                <div className='solo-tile'>
                    <Link to='/shop/treats'>
                        <h6>Gourmet Treats</h6>
                    </Link>
                </div>
                <div className='dual-tiles'>
                    <div className='toys-div'>
                        <Link to='/shop/toys'>
                            <h6>Toys</h6>
                        </Link>
                    </div>
                    <div className='foods-div'>
                        <Link to='/shop/food'>
                            <h6>Food</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;