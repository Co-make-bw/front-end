import React from 'react';

// components
import Navbar from '../Navbar';
import Profile from './Profile';
import Locations from './Locations';
import DashboardIssues from './DashboardIssues';

const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard Info ...</h2>
			<Navbar />
			<Profile />
			<Locations />
			<DashboardIssues />
		</div>
	);
};

export default Dashboard;
