import React, { useState } from 'react';
import Login from './components/Login';

function State() {

    const [loginBox, setLoginBox] = useState(true);
    const [registerBox, setRegisterBox] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Login 
        setLoginBox = {setLoginBox} loginBox = {loginBox } 
        setRegisterBox = { setRegisterBox } registerBox = { registerBox }
        setIsLoggedIn = { setIsLoggedIn }  isLoggedIn = { isLoggedIn }
        />
    )
}

export default State;