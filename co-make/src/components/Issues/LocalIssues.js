import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStateIssues } from '../../actions/issuesActions';
import Issue from './Issue';
import { LocalContainer } from '../../styles';

const LocalIssues = props => {
	const { stateid } = useParams();

	useEffect(() => {
		props.getStateIssues(stateid);
	}, []);

	if (props.stateError) {
		return <h3>This state is awesome, there are no open issues!</h3>;
	}

	return (
		<LocalContainer>
			{props.issues.map(issue => (
				<Issue key={issue.id} issue={issue} stateID={stateid} />
			))}
		</LocalContainer>
	);
};

const mapStateToProps = state => {
	return {
		issues: state.issuesReducer.issues,
		stateError: state.issuesReducer.stateError
	};
};

export default connect(mapStateToProps, { getStateIssues })(LocalIssues);
