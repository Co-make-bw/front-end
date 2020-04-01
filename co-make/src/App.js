import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Navbar';
import Signup from './components/Onboarding/Signup';
import Login from './components/Onboarding/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import LocalIssues from './components/Issues/LocalIssues';
import AddIssue from './components/Issues/AddIssue';
import EditProfile from './components/Dashboard/EditProfile';
import PrivateRoute from './utils/PrivateRoute';

function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<PrivateRoute path='/state/:stateid' component={LocalIssues} />
				<PrivateRoute path='/dashboard/:id/add-issue' component={AddIssue} />
				<PrivateRoute
					path='/dashboard/:id/edit-profile'
					component={EditProfile}
				/>
				<PrivateRoute exact path='/dashboard/:id' component={Dashboard} />
				<Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route exact path='/' component={Signup} />
			</Switch>
		</div>
	);
}

export default App;
