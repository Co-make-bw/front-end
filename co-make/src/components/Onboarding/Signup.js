import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../../actions/onboardingActions';
import {
	LoginRegister,
	StyledInput,
	StyledError,
	StyledButton,
	SwitchBox,
	SwitchActive,
	SwitchInactive
} from '../../styles';

function Signup(props) {
	const history = useHistory();
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
		props.addNewUser(user).then(() => {
			history.push('/login');
		});
	};

	const loginSwitch = e => {
		e.preventDefault();
		history.push('/login');
	};
	const signupSwitch = e => {
		e.preventDefault();
		history.push('/signup');
	};

	return (
		<div>
			<SwitchBox>
				<SwitchInactive onClick={loginSwitch}>Login</SwitchInactive>
				<SwitchActive onClick={signupSwitch}>Signup</SwitchActive>
			</SwitchBox>
			<LoginRegister onSubmit={handleSubmit}>
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

				<StyledButton type='submit'>Signup</StyledButton>
			</LoginRegister>
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

export default connect(mapStateToProps, { addNewUser })(Signup);
