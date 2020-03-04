import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Navbar';
import Default from './components/Default';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard.js';
import PrivateRoute from './utils/PrivateRoute';

function App() {
	return (
		<div>
			<Nav />
			<Route exact path='/' component={Default} />
			<PrivateRoute path='/dashboard/:username' component={Dashboard} />
			<Footer />
		</div>
	);
}

export default App;