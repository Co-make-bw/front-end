import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../actions/dashboardActions';

const Profile = props => {
	const { id } = useParams();

	useEffect(() => {
		props.getUser(id);
	}, []);

	if (!props.user) {
		return <p>There's no user</p>;
	}

	return (
		<div>
			<h1>Your Co-Make</h1>
			<div>
				<h3>{props.user.username}</h3>
				<p>Points: {props.user.points}</p>
				<p>About Me: {props.user.about}</p>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	console.log('here is state', state);
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, { getUser })(Profile);
