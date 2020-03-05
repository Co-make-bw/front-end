import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../actions/dashboardActions';
import {
	ProfileContainer,
	ProfileTitle,
	ProfileGroup,
	ProfileEditLink
} from '../../styles';

const Profile = props => {
	const { id } = useParams();

	useEffect(() => {
		props.getUser(id);
	}, []);

	if (!props.user) {
		return <p>There's no user</p>;
	}

	return (
		<ProfileContainer>
			<ProfileTitle>Your Co-Make</ProfileTitle>
			<ProfileGroup>
				<h3>{props.user.username}</h3>
				<p>Points: {props.user.points}</p>
				<div>
					<p style={{ borderBottom: '1px solid black' }}>About Me</p>
					<p>{props.user.about}</p>
				</div>
				<ProfileEditLink to={`/dashboard/${id}/edit-profile`}>
					🛠
				</ProfileEditLink>
			</ProfileGroup>
		</ProfileContainer>
	);
};

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, { getUser })(Profile);
