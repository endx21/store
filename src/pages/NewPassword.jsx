import React from "react";
import '@styles/NewPassword.scss';

import logo from '@logos/logo_store.png';

const NewPassword = () => {
    return (
        <div className="newPassword">
        <div className="form-containerNP">
            <img src={logo} alt="logo" className="logo"/>
    
            <h1 className="titleNP">Create a new password</h1>
            <p className="subtitle">Enter a new password for you account</p>
    
            <form action="/" className="form">
            <label for="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password"/>
    
            <label for="new-password" className="label">Password</label>
            <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
    
            <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </div>
        </div>
    );
}

export default NewPassword;