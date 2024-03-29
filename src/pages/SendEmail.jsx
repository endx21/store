import React from "react";
import "@styles/SendEmail.scss";

import logo from '@logos/logo_store.png';
import email from '@icons/email.png';

const SendEmail = () => {
return(
<div className="SendEmail">
<div className="form-containerSE">
    <img src={logo} alt="logo" class="logo"/>

    <h1 className="titleSE">Email has been sent!</h1>
    <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

    <div className="email-image">
    <img src={email} alt="email"/>
    </div>

    <button className="primary-button login-button">Login</button>

    <p className="resend">
    <span>Didn't receive the email?</span>
    <a href="/"> Resend</a>
    </p>
</div>
</div>
);
}

export default SendEmail;