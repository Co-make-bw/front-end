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
    const [userLoginData, setUserLoginData] = useState({});

    function getData() {

        axios
        .get('https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/users/users.json')
        .then(response => {
            // console.log("Original Data: ", response.data);
            const myData = [];
            response.data.map(({username, password, email }) => {
                myData.push({ 
                    username: `${username}`, 
                    password: `${password}`,
                    email: `${email}` });
            });
            
            console.log("My Data: ", myData);

            let myFilter = "email";
            const results = myData.filter( function(user) {

                console.log("filter info: ", userLoginData)

                if (user[myFilter] === userLoginData.email && user["password"] === userLoginData.password) {
                    return user[myFilter] === userLoginData.email;
                } else {
                    setIsLoggedIn(false);
                    return "No user found";
                }
                
            });

            if (results[0].email === userLoginData.email && results[0].password === userLoginData.password) {
                setIsLoggedIn(true);
            } else {
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
                    loginData = { setUserLoginData }
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