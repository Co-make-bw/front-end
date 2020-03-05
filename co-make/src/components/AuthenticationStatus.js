import React from 'react';
import LoggedInState from "./LoggedInState";

function AuthenticationStatus(props) {
    return (
        
        <div style={{marginBottom: 30 }}>
            <LoggedInState loggedInStatus={props.isLoggedIn} />
        </div>

    )
}

export default AuthenticationStatus;