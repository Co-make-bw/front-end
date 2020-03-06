import React from "react";
import LoginBox from "./LoginBox";
import Register from "./Register";
import Tagline from "./Tagline";
import "./Default.css";

function Login(props) {

    function showLogin(e) {
        e.preventDefault();
        props.setLoginBox(true);
        props.setRegisterBox(false);
    }

    function showRegistration(e) {
        e.preventDefault();
        props.setLoginBox(false);
        props.setRegisterBox(true);
    }

    return (
        <div className="root-container">
            <h1>Login Page</h1>
            <Tagline />
            <div className="box-controller">
                <div className="controller">
                    <div 
                    onClick={showLogin} 
                    className={"header" + (props.loginBox ? " selected" : "")}
                    >Login</div>
                </div>
                <div className="controller">
                    <div 
                    onClick={showRegistration} 
                    className={"header" + (props.registerBox ? " selected" : "")}
                    >Register</div>
                </div>
            </div>
            <div className="box-container">
                <div className="controller">

                    { props.loginBox && 
                    <LoginBox
                    setLogin = { props.setIsLoggedIn } 
                    loginAttempt = { props.loginAttempt } 
                    setLoginAttempt = { props.setLoginAttempt }
                    /> }

                    { props.registerBox && 
                    <Register
                    shRegistration={ props.showRegistration }
                    />}
                    
                </div>
            </div>
        </div>
    )
    

}

export default Login;