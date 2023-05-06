import { useState } from 'react';

import menu from './utility/menu.js';
import './css/GlobalNav.css';

function GlobalNav({ className, setPage }) {

    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a 
                    className="global-nav__link" 
                    href={item.path}
                    onClick={ (e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const menuClass = showMenu ? 'global-nav__list--open' : '';

    return (
        <nav className={`global-nav ${className}`}>
            <button className="global-nav__toggle"
                onClick={ () => setShowMenu(!showMenu) }
                aria-label={showMenu ? "Close Menu" : "Open Menu"}
            >
                <i className="gg-menu" aria-label="navigation menu"></i>
            </button>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;