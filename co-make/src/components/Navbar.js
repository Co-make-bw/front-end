import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import './Navbar.css';

function Navbar() {
	return (
		<Router>
		<div className='App'>
			<nav>
				<h2>Co-Make</h2>
				<div className='nav-links'>
					<Link to='/' className='link'>
						Home
					</Link>
					<Link to='/about' className='link'>
						About
					</Link>
					<Link to='/contact' className='link'>
						Contact
					</Link>
					<Link to='/login' className='link'>
						Login
					</Link>
				</div>
			</nav>

		  <Switch>
			<Route path="/about">
			  <About />
			</Route>
			<Route path="/contact">
			  <Contact />
			</Route>
			<Route path="/login">
			  <Login />
			</Route>
			<Route path="/">
			  <Home />
			</Route>
		  </Switch>
		</div>
	  </Router>







		
	);
}

export default Navbar;

