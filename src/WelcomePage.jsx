import { useState, useRef } from 'react';

import Button from './Button';

import './css/WelcomePage.css';

function WelcomePage({setIsLogin, name, setName, setEmail, setConfirmEmail, setShippingAddress, setBillingAddress, setIsChecked}) {

    const [newName, setNewName] = useState(name);
    const [newNameMessage, setNewNameMessage] = useState("");

    const dialogRef = useRef();

    const handleLogout = () => {
        setIsLogin(false);
        setName("");
        setEmail("");
        setConfirmEmail("");
        setShippingAddress("");
        setBillingAddress("");
        setIsChecked(false);
    }

    const openModal = () => dialogRef.current.showModal();

    const closeModal = () => {
        setNewName("");
        dialogRef.current.close();
    }

    const onNewName = (e) => {
        setNewName(e.target.value);
        if(e.target.value ==="") {
            setNewNameMessage("Name field is required");
        }
        else{
            setNewNameMessage("");
        }
    }

    const onSave = (e) => {
        e.preventDefault();
        if(newName === "") {
            setNewNameMessage("Name field is required");
        }
        setName(newName);
        dialogRef.current.close();
    }

    return (
        <div className="welcome">
            <h2>Welcome, {name}!</h2>
            <Button visual="button"  
                    className="logout-button"
                    onClick={handleLogout}
                    arialabel="logout"
            >
                {"Logout"}
            </Button>
            <Button visual="button"  
                    className="change-name-button"
                    onClick={openModal}
                    arialabel="click here to change user name"
            >
                {"Change Username"} 
            </Button>
            <dialog ref={dialogRef} className="dialog">
                <Button 
                    visual="button" 
                    type="button" 
                    className="button-close"
                    onClick={closeModal}
                    arialabel="close dialog"
                >
                        {<i className="gg-close-o" aria-label="Click here to close dialog"></i>}
                </Button>
                <form className="change-name-form" onSubmit={ onSave }>
                    <label className="new-name-label" htmlFor="new-name">New Username: </label>
                    <input className="new-name-input" id="new-name" name="new-name" type="text"
                        onChange={onNewName} value={newName}/>
                    <p className="new-name-error-message">{newNameMessage}</p>
                    <Button
                        visual="button" 
                        type="submit"
                        className="save-button"
                        disabled={!newName}
                        arialabel="save new username"
                    >
                        {"Save"}
                    </Button>
                </form>
            </dialog>
        </div>
    );
}

export default WelcomePage;