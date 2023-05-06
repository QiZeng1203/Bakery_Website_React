import { useState} from 'react';

import Home from './Home';
import Menu from './Menu.jsx';
import FAQ from './FAQ.jsx';
import Login from './Login.jsx';

import './css/Main.css';

function Main( {page}) {
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState("");

    return (
        <main className="main" id="main">
            { (page === 'Home') && <Home/> }
            { (page === 'Menu') && <Menu/> }
            { (page === 'FAQ') && <FAQ/> }
            { (page === 'Login') && <Login isLogin={isLogin} setIsLogin={setIsLogin} name={name} setName={setName}/> }
        </main> 
    );
}

export default Main;