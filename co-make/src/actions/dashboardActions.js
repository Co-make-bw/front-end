import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_USER = 'GET_USER';

export const getUser = username => dispatch => {
	axiosWithAuth()
		.get('https://comake4.herokuapp.com/api/users')
		.then(res => {
			console.log('get users res', res);
			const foundUser = res.data.find(item => item.username === username);
			console.log('foundUser', foundUser);
			dispatch({ type: GET_USER, payload: foundUser });
		})
		.catch(err => {
			console.log('get users error', err);
		});
};
