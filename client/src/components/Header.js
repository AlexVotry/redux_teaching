import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="menu">
            <Link to="/" className="item">REACT</Link>
            <div className="right menu">
                <Link to="/" className="item">React</Link>
            </div>
        </div>
    );
}

export default Header;