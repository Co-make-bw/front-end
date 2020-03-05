import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LogStatusLink from './LogStatusLink';
import LogStatusRoute from './LogStatusRoute';
import DashboardDefault from './Dashboard/Default';
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
					<LogStatusLink />
				</div>
			</nav>

		  <Switch>
			<Route path="/about">
			  <About />
			</Route>
			<Route path="/contact">
			  <Contact />
			</Route>
			
			<Route path="/dashboard/:id">
			  <DashboardDefault />
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

