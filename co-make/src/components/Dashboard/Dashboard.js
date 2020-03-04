import React from 'react';

// components
import Profile from './Profile';
import Locations from './Locations';
import UserIssues from '../Issues/UserIssues';

const Dashboard = () => {
	return (
		<div>
			<Profile />
			<Locations />
			<UserIssues />
		</div>
	);
};

export default Dashboard;
