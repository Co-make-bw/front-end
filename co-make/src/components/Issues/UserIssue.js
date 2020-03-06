import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteIssue } from '../../actions/issuesActions';
import { StyledCard, LocationButton } from '../../styles';

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
		<StyledCard>
			<h3>Issue: {props.issue.title}</h3>
			<p>Upvotes: {props.issue.upvotes}</p>
			<p>Location: {props.issue.location}</p>
			<p>Description: {props.issue.description}</p>
			<LocationButton onClick={deleteIssue}>
				Issue has been resolved
			</LocationButton>
			{props.deleteIssueError && <p>Issue could not be deleted</p>}
		</StyledCard>
	);
};

const mapStateToProps = state => {
	return {
		deleteIssueError: state.issuesReducer.deleteIssueError
	};
};

export default connect(mapStateToProps, { deleteIssue })(UserIssue);
