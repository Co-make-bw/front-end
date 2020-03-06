import axios from 'axios';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const addNewUser = newUserCredentials => dispatch => {
	axios
		.post('https://comake4.herokuapp.com/api/auth/register', newUserCredentials)
		.then(res => {
			console.log('res from register user', res);
			dispatch({ type: RESET_ERROR });
		})
		.catch(err => {
			console.log('error from user register post', err);
			dispatch({ type: REGISTER_ERROR });
		});
};
export const loginUser = credentials => dispatch => {
	return axios
		.post('https://comake4.herokuapp.com/api/auth/login', credentials)
		.then(res => {
			console.log('res from login', res);
			window.localStorage.setItem('token', res.data.token);
			return res;
		})
		.catch(err => {
			console.log('error from user login post', err);
		});
};
