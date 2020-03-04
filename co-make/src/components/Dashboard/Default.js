import React from 'react';

// components
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile'

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard Home Page</h1>
			<ViewProfile />
			<EditProfile />
		</div>
	);
};

export default Dashboard;
