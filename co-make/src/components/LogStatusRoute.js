import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

function LogStatusLink(props) {

    if ( props.isLoggedIn ) {
        return (
            <Route path="/logout">
                <Logout setIsLoggedIn = {props.setIsLoggedIn} />
            </Route>
        )
    }
    
    return (
        <Route path="/login">
            <Login />
        </Route>
    )

}

export default LogStatusLink;