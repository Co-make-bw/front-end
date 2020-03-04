import React from 'react';

const UserIssue = props => {
	return (
		<div className='card-container'>
			<div className='card'>
				<h3>Issue: {props.issue.title}</h3>
				<p>Upvotes: {props.issue.upvotes}</p>
				<p>Location: {props.issue.location}</p>
				<p>Description: {props.issue.description}</p>
			</div>
		</div>
	);
};

export default UserIssue;
