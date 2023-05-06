import { useState} from 'react';

import Button from './Button';

import './css/LoginForm.css';

function LoginForm({isLogin, setIsLogin, 
    name, setName, 
    email, setEmail,
    confirmEmail, setConfirmEmail,
    shippingAddress, setShippingAddress,
    isChecked, setIsChecked,
    billingAddress, setBillingAddress}) {
    
    const [nameMessage, setNameMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [confirmEmailMessage, setConfirmEmailMessage] = useState("");
    const [shippingAddressMessage, setShippingAddressMessage] = useState("");
    const [billingAddressMessage, setBillingAddressMessage] = useState("");
    // eslint-disable-next-line
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const onName = (e) => {
        setName(e.target.value);
        if(e.target.value ==="") {
            setNameMessage("Name field is required");
        }
        else{
            setNameMessage("");
        }
    }

    const onEmail = (e) => {
        setEmail(e.target.value);
        if(!e.target.value) {
            setEmailMessage("Email field is required");
        }
        else if(!e.target.value.match(mailformat)){
            setEmailMessage("Email is invalid, please re-enter");
        }
        else {
            setEmailMessage("");
        }
    }

    const onConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
        if(!e.target.value) {
            setConfirmEmailMessage("Confirm Email field is required");
        }
        else if(e.target.value !== email){
            setConfirmEmailMessage("Cannot match with the email field");
        }
        else {
            setConfirmEmailMessage("");
        }
    }

    const onShipping = (e) => {
        setShippingAddress(e.target.value);
        if(e.target.value ==="") {
            setShippingAddressMessage("Shipping Address field is required");
        }
        else{
            setShippingAddressMessage("");
        }
    }

    const onCheck = () => {
        setIsChecked(!isChecked);
        if(isChecked === true) {
            setBillingAddress("");
        }
        if(isChecked === false) {
            setBillingAddress(shippingAddress);
        }
    };

    const onBilling = (e) => {
        if(isChecked === false) {
            setBillingAddress(e.target.value);
            if(e.target.value ==="") {
                setBillingAddressMessage("Billing Address field is required");
            }
            else{
                setBillingAddressMessage("");
            }
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(name === "") {
            setNameMessage("Name field is required");
        }
        if(email === "") {
            setEmailMessage("Email field is required");
        }
        if(!email.match(mailformat)) {
            setEmailMessage("Email is invalid, please re-enter");
        }
        if(confirmEmail === "") {
            setConfirmEmailMessage("Confirm Email field is required");
        }
        if(confirmEmail !== email){
            setConfirmEmailMessage("Cannot match with the email field");
        }
        if(shippingAddress ==="") {
            setShippingAddressMessage("Shipping Address field is required");
        }
        if(billingAddress ==="") {
            setBillingAddressMessage("Billing Address field is required");
        }
        if(name !== ""&& email.match(mailformat)&& confirmEmail === email && shippingAddress !==""&& billingAddress !=="")
        setIsLogin(true);
    }


    return (
        <div className="login-form">
            <h2 className="form-title"> Login | Create Account </h2>
            <form className="form" onSubmit={ handleLogin }>
                <p className="indicate-text">* indicates require field</p>
                <div className="name">
                    <label className="name-label" htmlFor="name">Username * </label>
                    <input className="name-input" id="name" name="name" type="text"
                        onChange={onName} value={name}/>
                    <p className="name-error-message">{nameMessage}</p>
                </div>
                <div className="email">
                    <label className="email-label" htmlFor="email">Email * </label>
                    <input className="email-input" id="email" name="email" type="text"
                        onChange={onEmail} value={email}/>
                    <p className="email-error-message">{emailMessage}</p>
                </div>
                <div className="confirm-email">
                    <label className="confirm-email-label" htmlFor="confirm-email">Confirm Email * </label>
                    <input className="confirm-email-input" id="confirm-email" name="confirm-email" type="text"
                        onChange={onConfirmEmail} value={confirmEmail}/>
                    <p className="confirm-error-message">{confirmEmailMessage}</p>
                </div>
                <div className="shipping-address">
                    <label className="shipping-address-label" htmlFor="shipping-address">Shipping Address * </label>
                    <input className="shipping-address-input" id="shipping-address" name="shipping-address" type="text"
                        onChange={onShipping} value={shippingAddress}/>
                    <p className="shipping-error-message">{shippingAddressMessage}</p>
                </div>
                <div className="same-address">
                    <input className="same-address-input" id="same-address" name="same-address" type="checkbox" checked={isChecked}
                        onChange={onCheck}/>
                    <label className="same-address__label" htmlFor="same-address">billing address same as shipping address</label>
                </div>
                <div className="billing-address">
                    <label className="billing-address-label" htmlFor="billing-address">Billing Address * </label>
                    <input className="billing-address-input" id="billing-address" name="billing-address" type="text"
                        onChange={onBilling} value={billingAddress}/>
                    <p className="billing-error-message">{billingAddressMessage}</p>
                </div>
                <Button visual="button" 
                        type="submit" 
                        className="submit-button"
                        arialabel="login"
                >
                    {"Login"}
                </Button>
            </form>
        </div> 
    );
}

export default LoginForm;