import { useState } from 'react';

import './css/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <Header setPage={setPage} theme={theme} setTheme={setTheme}/>
      <Main page={page} setPage={setPage} />
      <Footer/>
    </div>
  );
}

export default App;