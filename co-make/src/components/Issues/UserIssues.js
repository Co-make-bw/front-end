import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserIssues } from '../../actions/issuesActions';
import UserIssue from './UserIssue';

const UserIssues = props => {
	const { id } = useParams();

	useEffect(() => {
		props.getUserIssues(id);
	}, []);

	if (props.userError) {
		return <h3>You haven't drawn attention to any issues</h3>;
	}

	return (
		<>
			<h3>My Posts</h3>
			<div className='card-layout'>
				{props.userIssues.map(issue => (
					<UserIssue key={issue.id} issue={issue} />
				))}
			</div>
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
