import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (
        <Router>
            <div className="App">
                <nav>
                    <h2>Make-Co</h2>
                    <div className="nav-links">
                        <Link to="/" className="link">Home</Link>
                    </div>
                </nav>
                
            </div>
        </Router>
        
    );
}




export default Navbar;