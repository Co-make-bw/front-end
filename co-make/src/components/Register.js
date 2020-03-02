import React from "react";
import "./Box.css";

function Register(props) {

    return (
        <div className="inner-container">
            
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">User Name</label>

                    <input 
                    type="text" 
                    name="username" 
                    placeholder="User Name" 
                    autoComplete="off" 
                    onChange = { props.nameChange } 
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="Password" 
                    onChange = { props.passwordChange } 
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    onChange = { props.emailChange } 
                    />
                    
                    <div>
                        <input
                        type="checkbox"
                        name="tos"
                        onChange = {props.shTos}
                        />
                        <label htmlFor="tos">Accept Terms of Service</label>
                    </div>

                    <button onClick={props.subRegistration} name="submitRegister">Register</button>
                </div>

            </div>

        </div>
    )

}

export default Register;