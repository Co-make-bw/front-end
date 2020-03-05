import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../actions/onboardingActions';
import { StyledForm, StyledInput, StyledError, StyledButton } from '../styles';

function Register(props) {
	const [newUser, setNewUser] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const user = newUser;
		props.addNewUser(user);
		setTimeout(function() {
			if (props.registerError) {
				props.shRegistration();
			} else {
				props.shLogin();
			}
		}, 1000);
	};

	return (
		<div>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInput
					type='text'
					name='username'
					placeholder='Username'
					autoComplete='off'
					onChange={handleChange}
					value={newUser.username}
				/>

				<StyledInput
					type='password'
					name='password'
					placeholder='Password'
					onChange={handleChange}
					value={newUser.password}
				/>

				<StyledButton type='submit' name='submitRegister'>
					Register
				</StyledButton>
			</StyledForm>
			{props.registerError && (
				<StyledError>User already exists, try a different username</StyledError>
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		registerError: state.onboardingReducer.registerError
	};
};

export default connect(mapStateToProps, { addNewUser })(Register);
