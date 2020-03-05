import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/dashboardActions';

const EditProfile = props => {
	const initialState = {
		username: props.user.username,
		points: props.user.points,
		about: props.user.about
	};
	const [editedProfile, setEditedProfile] = useState(initialState);
	const [issueStatus, setIssueStatus] = useState(false);
	const history = useHistory();
	const { id } = useParams();

	const handleChange = e => {
		e.preventDefault();
		setEditedProfile({
			...editedProfile,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		const userID = id;

		props.updateProfile(userID).then(() => {
			if (!props.updateError) {
				setIssueStatus(false);
				// history.push(`/dashboard/${userID}`);
			} else {
				setIssueStatus(true);
			}
		});
	};

	return (
		<div>
			<h3>Edit Profile</h3>
			<form>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					onChange={handleChange}
					value={editedProfile.username}
					required
				/>

				<label htmlFor='aboutme'>About Me</label>
				<input
					type='textarea'
					id='aboutme'
					onChange={handleChange}
					value={editedProfile.about}
					required
				/>

				<button onClick={handleSubmit}>Update</button>
			</form>
			{issueStatus && <p>Profile could not be updated, try again.</p>}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user,
		updateError: state.dashboardReducer.updateError
	};
};

export default connect(mapStateToProps, { updateProfile })(EditProfile);
