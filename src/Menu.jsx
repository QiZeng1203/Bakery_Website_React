import { useRef } from 'react';

import card from './utility/card.js';
import Button from './Button';

import './css/Menu.css';

function Menu() {
    const dialogRef = useRef();
    const onClick = () => dialogRef.current.showModal();

    const cards = card.map(item => {
        return (
            <div className="card" key={item.name}>
                <img className="card-pic" alt={item.alt} src={item.path}/>
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">
                    {item.introduction}
                </p>
                <Button visual="button"  
                    className="card-button"
                    onClick={onClick}
                    arialabel="Click here to read more information"
                >
                    {"Read More"}
                </Button>
                 <dialog ref={dialogRef} className="dialog">
                    <Button 
                        visual="button" 
                        type="button" 
                        className="button-close"
                        onClick={() => dialogRef.current.close()}
                        arialabel="click here to close dialog"
                    >
                        {<i className="gg-close-o" aria-label="Click here to close dialog"></i>}
                    </Button>
                    <p className="card-description">{item.description}</p>
                 </dialog>
            </div>
        );
    });

    return (
        <>
            <h2>Explore Our Menu</h2>
            <div className="cards">
                {cards}
            </div> 
        </>
    );
}

export default Menu;