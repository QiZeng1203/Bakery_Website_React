import { useState } from 'react';

import './css/Header.css';

import Logo from './images/logo.jpg';
import GlobalNav from './GlobalNav';
//import Button from './Button';

function Header( {setPage, theme, setTheme}) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const togggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    return (
        <header className="header">
            <a href="#main" className="skiplink" aria-label="Click the link to main content">Skip to content</a>
            <a href="/"><img src={Logo} className="header-logo" alt="Header Logo"/></a>
            <h1 className="header-title">
                Pink House Bakery
            </h1>
            <div className="header-theme">
                <button className="theme-button" 
                        onClick={togggleTheme} 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut} 
                        aria-label={theme === "light" ? "dark theme" : "light theme"}
                >
                    {theme==="light" ? <i className="gg-moon" aria-label="Click here to change dark theme"></i> : <i className="gg-sun" aria-label="Click here to change light theme"></i> }
                </button>
                {isHovering && (<p className="hover-message">Change Theme</p>)}
            </div>
            <GlobalNav className="header-nav" setPage={setPage}/>
        </header>
    );
}

export default Header;