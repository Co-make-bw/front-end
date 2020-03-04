import React from 'react';



const Issue = (props) => {
	console.log(props)
	return (
		<div className="card-container">
			<div className="card">
			<p>Issue: {props.issue.title}</p>
			<p>Description: {props.issue.description}</p>
			<p>Location: {props.issue.location}</p>
			<p>Upvotes: {props.issue.upvotes}</p>
			</div>
		</div>
	);
};

export default Issue;
