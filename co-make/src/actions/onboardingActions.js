import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const addNewUser = newUser => dispatch => {
	axios
		.post('/api/auth/register', newUser)
		.then(res => {
			console.log('response from user post', res);
		})
		.catch(err => {
			console.log('error from user post', err);
		});
};

export const loginUser = credentials => dispatch => {
	axios
		.post('/api/auth/login', credentials)
		.then(res => {
			console.log('response from user post', res);
		})
		.catch(err => {
			console.log('error from user post', err);
		});
};
