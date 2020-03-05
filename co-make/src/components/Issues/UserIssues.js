import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getUserIssues } from '../../actions/issuesActions';
import UserIssue from './UserIssue';

const UserIssues = props => {
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		props.getUserIssues(id);
	}, []);

	if (props.userError || props.userIssues.length === 0) {
		return (
			<>
				<h3>You haven't drawn attention to any issues</h3>
				<Link to={`/dashboard/${id}/add-issue`}>Add a New Issue</Link>
			</>
		);
	}

	const addIssueRoute = e => {
		history.push(`/dashboard/${id}/add-issue`);
	};

	return (
		<>
			<h3>My Posts</h3>
			<div className='card-layout'>
				{props.userIssues.map(issue => (
					<UserIssue key={issue.id} issue={issue} />
				))}
			</div>
			<Link to={`/dashboard/${id}/add-issue`}>Add a New Issue</Link>
		</>
	);
};

const mapStateToProps = state => {
	return {
		userIssues: state.issuesReducer.userIssues,
		userError: state.issuesReducer.userError
	};
};

export default connect(mapStateToProps, { getUserIssues })(UserIssues);
