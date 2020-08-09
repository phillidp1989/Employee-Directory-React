import React from 'react';
import './style.css';

function Header() {
    return (
        <div className='header'>
            <h2 className="title">Employee Directory</h2>
            <h2 className="logo"><i className="fas fa-sitemap"></i></h2>
            <h5>Your Ultimate Employee Lookup</h5>
        </div>        
    );
}
export default Header

