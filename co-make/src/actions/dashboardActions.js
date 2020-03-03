import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_USER = 'GET_USER';
export const ADD_STATE = 'ADD_STATE';

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
export const addState = (stateID, userID) => dispatch => {
	axiosWithAuth()
		.post(`https://comake4.herokuapp.com/api/users/${userID}/states`, stateID)
		.then(res => {
			console.log('res from state post', res);
			dispatch({ type: ADD_STATE, payload: res.data });
		})
		.catch(err => {
			console.log('err from state post', err);
		});
};
