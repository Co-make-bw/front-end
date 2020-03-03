import React from 'react';

// components
import Profile from './Profile';
import Locations from './Locations';
import DashboardIssues from './DashboardIssues';

const Dashboard = () => {
	return (
		<div>
			<Profile />
			<Locations />
			<DashboardIssues />
		</div>
	);
};

export default Dashboard;
