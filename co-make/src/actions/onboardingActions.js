import axios from 'axios';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const addNewUser = newUserCredentials => dispatch => {
	return axios
		.post('https://comake4.herokuapp.com/api/auth/register', newUserCredentials)
		.then(res => {
			dispatch({ type: RESET_ERROR });
			return res;
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
			dispatch({ type: RESET_ERROR });
			window.localStorage.setItem('token', res.data.token);
			return res;
		})
		.catch(err => {
			dispatch({ type: LOGIN_ERROR });
			console.log('error from user login post', err);
		});
};
