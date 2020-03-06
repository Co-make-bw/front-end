import React from 'react';
import './Validation.css';

function CheckUsername() {
    return (
        <div className="divBox">
            <p>Your username must be between 5 and 15<br />characters in length</p>
        </div>
    )
}

export default CheckUsername;