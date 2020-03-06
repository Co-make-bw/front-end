import React from 'react';
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';
import Tagline from '../Tagline';

const Dashboard = () => {
	return (
		<div>
			<Tagline />
			<h1>Dashboard Home Page</h1>
			<ViewProfile />
			<EditProfile />
		</div>
	);
};

export default Dashboard;
