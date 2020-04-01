import React, { useState } from 'react';
import { loginUser } from '../../actions/onboardingActions';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	LoginRegister,
	StyledInput,
	StyledError,
	StyledButton,
	SwitchBox,
	SwitchActive,
	SwitchInactive
} from '../../styles';

function Login(props) {
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	const [userInfo, setUserInfo] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		let submitValues = userInfo;
		setLoading(true);
		props.loginUser(submitValues).then(res => {
			history.push(`/dashboard/${res.data.user_id}`);
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
				<SwitchActive onClick={loginSwitch}>Login</SwitchActive>
				<SwitchInactive onClick={signupSwitch}>Signup</SwitchInactive>
			</SwitchBox>
			<LoginRegister onSubmit={handleSubmit}>
				<StyledInput
					type='text'
					name='username'
					placeholder='Username'
					autoComplete='off'
					onChange={handleChange}
					value={userInfo.username}
				/>

				<StyledInput
					type='password'
					name='password'
					placeholder='Password'
					onChange={handleChange}
					value={userInfo.password}
				/>

				<StyledButton type='submit'>Login</StyledButton>
			</LoginRegister>
			{props.loginError && (
				<StyledError>Wrong username and/or password</StyledError>
			)}
			{loading && (
				<p
					style={{ margin: '1rem auto', fontSize: '1rem', textAlign: 'center' }}
				>
					loading...
				</p>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		loginError: state.onboardingReducer.loginError
	};
}

export default connect(mapStateToProps, { loginUser })(Login);
