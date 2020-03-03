import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../actions/onboardingActions';
import './Box.css';

function Register(props) {
	const [newUser, setNewUser] = useState({
		username: '',
		password: ''
	});
	const history = useHistory();

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
		history.push('/');
	};

	return (
		<div className='inner-container'>
			<div className='box'>
				<div className='input-group'>
					<label htmlFor='username'>User Name</label>

					<input
						type='text'
						name='username'
						placeholder='User Name'
						autoComplete='off'
						onChange={handleChange}
						value={newUser.username}
					/>

					<label htmlFor='password'>Password</label>
					<input type='password' name='password' onChange={handleChange} />

					<button onClick={handleSubmit} name='submitRegister'>
						Register
					</button>
				</div>
				{props.registerError && (
					<p>User already exists, try a different username</p>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		registerError: state.registerError
	};
};

export default connect(mapStateToProps, { addNewUser })(Register);
