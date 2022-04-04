import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <h4>Cricket Accessories</h4>
            <div><a href="/order">Order</a>
            <a href="/Review">Review</a>
            <a href="/Inventory">INventory</a></div>
        </nav>
    );
};

export default Header;