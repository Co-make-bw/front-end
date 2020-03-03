import React, { useState } from "react";
import axios from "axios";
import LoginBox from "./LoginBox";
import Register from "./Register";
import LoggedInState from "./LoggedInState";

import "./Default.css";

function Default() {

    const [loginBox, setLoginBox] = useState(true);
    const [registerBox, setRegisterBox] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function getData(loginData) {

        axios
        .get('https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/users/users.json')
        .then(response => {
            const myData = [];
            response.data.map(({username, password, email }) => {
                myData.push({ 
                    username: `${username}`, 
                    password: `${password}`,
                    email: `${email}` });
            });

            const results = myData.filter( function(user) {

                return (user["email"] === loginData.email && user["password"] === loginData.password)
            
            });

            if (results) {
                console.log("user found");
                setIsLoggedIn(true);
            } else {
                console.log("no user found");
                setIsLoggedIn(false)
            }

        })
        .catch(error => {
            console.log('Error: ', error)
        }); 
    }

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
            <div style={{marginBottom: 30 }}><LoggedInState loggedInStatus={isLoggedIn} /></div>
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
                    processData = { getData }
                    shLogin = { showLogin }/> }

                    { registerBox && 
                    <Register
                    shRegistration={ showRegistration }
                    />}
                    
                </div>
            </div>
        </div>
    )
}

export default Default;