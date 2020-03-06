import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/dashboardActions';
import {
	AddIssueContainer,
	StyledForm,
	StyledButton,
	StyledInput,
	StyledTextArea
} from '../../styles';

const EditProfile = props => {
	const initialState = {
		username: '',
		points: 0,
		about: ''
	};
	const [editedProfile, setEditedProfile] = useState(initialState);
	const [issueStatus, setIssueStatus] = useState(false);
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		setEditedProfile({
			username: props.user.username,
			points: props.user.points,
			about: props.user.about
		});
	}, []);

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
		const updatedProfile = editedProfile;

		props.updateProfile(userID, updatedProfile).then(() => {
			if (!props.updateError) {
				setIssueStatus(false);
				history.push(`/dashboard/${userID}`);
			} else {
				setIssueStatus(true);
			}
		});
	};

	return (
		<AddIssueContainer>
			<h1>Edit Profile</h1>
			<StyledForm>
				<StyledInput
					type='text'
					id='username'
					name='username'
					placeholder='Username'
					onChange={handleChange}
					value={editedProfile.username}
					required
				/>

				<StyledTextArea
					type='textarea'
					id='aboutme'
					name='about'
					placeholder='About me'
					onChange={handleChange}
					value={editedProfile.about}
					required
				/>

				<StyledButton onClick={handleSubmit}>Update</StyledButton>
			</StyledForm>
			{issueStatus && <p>Profile could not be updated, try again.</p>}
		</AddIssueContainer>
	);
};

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user,
		updateError: state.dashboardReducer.updateError
	};
};

export default connect(mapStateToProps, { updateProfile })(EditProfile);
