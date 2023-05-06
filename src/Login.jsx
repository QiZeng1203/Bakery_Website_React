import { useState } from 'react';

import LoginForm from "./LoginForm";
import WelcomePage from './WelcomePage';

function Login({ isLogin, setIsLogin, name, setName }) {

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [billingAddress, setBillingAddress] = useState("");

    return (
        <>
            {!isLogin ? <LoginForm
                isLogin={isLogin} setIsLogin={setIsLogin}
                name={name} setName={setName}
                email={email} setEmail={setEmail}
                confirmEmail={confirmEmail} setConfirmEmail={setConfirmEmail}
                shippingAddress={shippingAddress} setShippingAddress={setShippingAddress}
                isChecked={isChecked} setIsChecked={setIsChecked}
                billingAddress={billingAddress} setBillingAddress={setBillingAddress} />
                :
                <WelcomePage
                    setIsLogin={setIsLogin} name={name} setName={setName}
                    setEmail={setEmail} setConfirmEmail={setConfirmEmail} setShippingAddress={setShippingAddress}
                    setBillingAddress={setBillingAddress} setIsChecked={setIsChecked} />}
        </>
    );
}

export default Login;


