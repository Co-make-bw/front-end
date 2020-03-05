import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteIssue } from '../../actions/issuesActions';

const UserIssue = props => {
	const history = useHistory();

	const deleteIssue = e => {
		e.preventDefault();
		const stateID = props.issue.state_id;
		const issueID = props.issue.id;
		props.deleteIssue(stateID, issueID);
		history.push(`/dashboard/${props.userID}`);
	};

	return (
		<div className='card-container'>
			<div className='card'>
				<h3>Issue: {props.issue.title}</h3>
				<p>Upvotes: {props.issue.upvotes}</p>
				<p>Location: {props.issue.location}</p>
				<p>Description: {props.issue.description}</p>
				<button onClick={deleteIssue}>Issue has been resolved</button>
				{props.deleteIssueError && <p>Issue could not be deleted</p>}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		deleteIssueError: state.issuesReducer.deleteIssueError
	};
};

export default connect(mapStateToProps, { deleteIssue })(UserIssue);
