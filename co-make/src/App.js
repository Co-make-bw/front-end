import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Navbar';
import Default from './components/Default';
import Dashboard from './components/Dashboard/Dashboard.js';
import LocalIssues from './components/Issues/LocalIssues';
import AddIssue from './components/Issues/AddIssue';
import PrivateRoute from './utils/PrivateRoute';

function App() {
	return (
		<div>
			<Nav />
			<Route exact path='/' component={Default} />
			<PrivateRoute exact path='/dashboard/:id' component={Dashboard} />
			<PrivateRoute path='/dashboard/:id/add-issue' component={AddIssue} />
			<PrivateRoute path='/state/:stateid' component={LocalIssues} />
		</div>
	);
}

export default App;
