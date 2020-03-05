import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AuthenticationStatus from './components/AuthenticationStatus';
import Footer from './components/Footer';

function Main() {

    const [loginBox, setLoginBox] = useState(true);
    const [registerBox, setRegisterBox] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginAttempt, setLoginAttempt] = useState(false);

    return (
        <>
            <Navbar 
                setLoginBox = {setLoginBox} loginBox = {loginBox } 
                setRegisterBox = { setRegisterBox } registerBox = { registerBox }
                loginAttempt = { loginAttempt } setLoginAttempt = { setLoginAttempt }
                setIsLoggedIn = { setIsLoggedIn }  isLoggedIn = { isLoggedIn }
            />
            <AuthenticationStatus isLoggedIn = { isLoggedIn } />
            <Footer />
        </>
    )
}

export default Main;