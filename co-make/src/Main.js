import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Main() {

    const [loginBox, setLoginBox] = useState(true);
    const [registerBox, setRegisterBox] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Navbar 
                setLoginBox = {setLoginBox} loginBox = {loginBox } 
                setRegisterBox = { setRegisterBox } registerBox = { registerBox }
                setIsLoggedIn = { setIsLoggedIn }  isLoggedIn = { isLoggedIn }
            />
            <Footer />
        </>
    )
}

export default Main;