import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUpvote, removeUpvote } from '../../actions/issuesActions';

const Issue = props => {
	const [upvoteToggle, setUpvoteToggle] = useState(false);

	const handleUpvote = e => {
		e.preventDefault();
		const issueID = props.issue.id;
		const tempStateID = props.stateID;
		const upvoted = window.localStorage.getItem(`prevent-upvote-${issueID}`);
		if (upvoted) {
			const newIssue = {
				title: props.issue.title,
				description: props.issue.description,
				location: props.issue.location,
				upvotes: props.issue.upvotes - 1
			};
			props.removeUpvote(tempStateID, issueID, newIssue);
			window.localStorage.removeItem(`prevent-upvote-${issueID}`);
			setUpvoteToggle(false);
		} else {
			const newIssue = {
				title: props.issue.title,
				description: props.issue.description,
				location: props.issue.location,
				upvotes: props.issue.upvotes + 1
			};
			props.addUpvote(tempStateID, issueID, newIssue);
			window.localStorage.setItem(`prevent-upvote-${issueID}`, issueID);
			setUpvoteToggle(true);
		}
	};

	useEffect(() => {
		const issueID = props.issue.id;
		if (window.localStorage.getItem(`prevent-upvote-${issueID}`)) {
			setUpvoteToggle(true);
		} else {
			setUpvoteToggle(false);
		}
	}, []);

	return (
		<div className='card-container'>
			<div className='card'>
				<h3>Issue: {props.issue.title}</h3>
				<p>Posted by: {props.issue.posted_by}</p>
				<p>Upvotes: {props.issue.upvotes}</p>
				<p>Location: {props.issue.location}</p>
				<p>Description: {props.issue.description}</p>
				{upvoteToggle ? (
					<button onClick={handleUpvote}>Unvote</button>
				) : (
					<button onClick={handleUpvote}>Upvote</button>
				)}
			</div>
		</div>
	);
};

export default connect(null, { addUpvote, removeUpvote })(Issue);
