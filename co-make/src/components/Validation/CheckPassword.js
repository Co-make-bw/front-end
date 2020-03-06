import React from 'react';
import './Validation.css';

function CheckPassword() {
    return (
        <div className="divBox">
            <p>Your password is not formatted correctly</p>
            <p>Please be sure your password has:</p>
            <ul>
                <li>6 or more characters</li>
                <li>No more than 15 characters</li>
                <li>A number</li>
                <li>An uppercase letter</li>
                <li>A lowercase letter</li>
                <li>A special character: ! @ # $</li>
            </ul>
        </div>
    )
}

export default CheckPassword;