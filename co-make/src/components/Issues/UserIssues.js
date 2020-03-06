import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUserIssues } from '../../actions/issuesActions';
import UserIssue from './UserIssue';
import {
	MainContainer,
	CardContainer,
	MainText,
	IssueLink
} from '../../styles';

const UserIssues = props => {
	const { id } = useParams();

	useEffect(() => {
		props.getUserIssues(id);
	}, [props.userIssues]);

	if (props.userError || props.userIssues.length === 0) {
		return (
			<MainContainer>
				<MainText>You haven't drawn attention to any issues</MainText>
				<IssueLink to={`/dashboard/${id}/add-issue`}>Add a New Issue</IssueLink>
			</MainContainer>
		);
	}

	return (
		<MainContainer>
			<MainText>My Posts</MainText>
			<CardContainer>
				{props.userIssues.map(issue => (
					<UserIssue key={issue.id} userID={id} issue={issue} />
				))}
			</CardContainer>
			<IssueLink to={`/dashboard/${id}/add-issue`}>Add a New Issue</IssueLink>
		</MainContainer>
	);
};

const mapStateToProps = state => {
	return {
		userIssues: state.issuesReducer.userIssues,
		userError: state.issuesReducer.userError
	};
};

export default connect(mapStateToProps, { getUserIssues })(UserIssues);
