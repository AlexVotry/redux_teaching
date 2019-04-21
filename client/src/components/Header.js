import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="menu">
            <Link to="/" className="item">
                <div className="cssans cssans--center">
                    <div className="cssans__accessible">CSSans Pro</div>
                    <div className="cssans__word">
                        <b className="cssans:R"></b>
                        <b className="cssans:e"></b>
                        <b className="cssans:a"></b>
                        <b className="cssans:c"></b>
                        <b className="cssans:t"></b>
                    </div>
                </div>
            </Link>
            <div className="right menu">
                <Link to="/" className="item">React</Link>
            </div>
        </div>
    );
}

export default Header;