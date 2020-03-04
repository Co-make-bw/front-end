import React, { useState, useEffect } from "react";
import LoginBox from "./LoginBox";
import Register from "./Register";
import LoggedInState from "./LoggedInState";
import { gsap } from 'gsap';
import "./Default.css";

function Default() {
    
    useEffect(() => {
        gsap.timeline()
            .fromTo("#sp2", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp4", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp3", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp1", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp5", {opacity: 0}, {duration: 1, opacity: 1})
    }, []);

    const [loginBox, setLoginBox] = useState(true);
    const [registerBox, setRegisterBox] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function showLogin(e) {
        e.preventDefault();
        setLoginBox(true);
        setRegisterBox(false);
    }

    function showRegistration(e) {
        e.preventDefault();
        setLoginBox(false);
        setRegisterBox(true);
    }

    return (
        <div className="root-container">
            <h3 id="tagline">
                <span id="sp1">Imagination.</span> 
                <span id="sp2">Creativity.</span> 
                <span id="sp3">Proactive.</span> 
                <span id="sp4">Vision.</span> 
                <span id="sp5">Clarity.</span>
            </h3>
            
            <div className="box-controller">
                <div className="controller">
                    <div 
                    onClick={showLogin} 
                    className={"header" + (loginBox ? " selected" : "")}
                    >Login</div>
                </div>
                <div className="controller">
                    <div 
                    onClick={showRegistration} 
                    className={"header" + (registerBox ? " selected" : "")}
                    >Register</div>
                </div>
            </div>
            <div className="box-container">
                <div className="controller">

                    { loginBox && 
                    <LoginBox
                    setLogin = { setIsLoggedIn }/> }

                    { registerBox && 
                    <Register
                    shRegistration={ showRegistration }
                    />}
                    
                </div>
            </div>
            <div style={{marginBottom: 30 }}><LoggedInState loggedInStatus={isLoggedIn} /></div>
        </div>
    )
    

}

export default Default;