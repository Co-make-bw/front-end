import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getStateIssues } from '../../actions/issuesActions';
import Issue from './Issue';

const LocalIssues = props => {
	const { stateid } = useParams();
	const history = useHistory();

	useEffect(() => {
		props.getStateIssues(stateid);
	}, []);

	if (props.stateError) {
		return <h3>This state is awesome, there are no open issues!</h3>;
	}

	return (
		<div className='card-layout'>
			{props.issues.map(issue => (
				<Issue key={issue.id} issue={issue} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		issues: state.issuesReducer.issues,
		stateError: state.issuesReducer.stateError
	};
};

export default connect(mapStateToProps, { getStateIssues })(LocalIssues);
