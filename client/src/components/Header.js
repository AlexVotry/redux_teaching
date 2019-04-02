import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="menu">
            <Link to="/" className="item">
                <div class="cssans cssans--center">
                    <div class="cssans__accessible">CSSans Pro</div>
                    <div class="cssans__word">
                        <b class="cssans:R"></b>
                        <b class="cssans:e"></b>
                        <b class="cssans:a"></b>
                        <b class="cssans:c"></b>
                        <b class="cssans:t"></b>
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