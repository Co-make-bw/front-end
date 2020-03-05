import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_USER = 'GET_USER';
export const GET_STATES = 'GET_STATES';

export const ADD_STATE = 'ADD_STATE';
export const DELETE_STATE = 'DELETE_STATE';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const getUser = id => dispatch => {
	axiosWithAuth()
		.get(`https://comake4.herokuapp.com/api/users/${id}`)
		.then(res => {
			dispatch({ type: GET_USER, payload: res.data });
		})
		.catch(err => {
			console.log('get users error', err);
		});
	axiosWithAuth()
		.get(`https://comake4.herokuapp.com/api/users/${id}/states`)
		.then(res => {
			dispatch({ type: GET_STATES, payload: res.data });
		})
		.catch(err => {
			console.log('err from state get:', err);
		});
};
export const addState = (stateID, userID) => dispatch => {
	axiosWithAuth()
		.post(`https://comake4.herokuapp.com/api/users/${userID}/states`, stateID)
		.then(res => {
			dispatch({ type: ADD_STATE, payload: res.data });
		})
		.catch(err => {
			console.log('err from state post', err);
		});
};
export const deleteState = (stateID, userID) => dispatch => {
	axiosWithAuth()
		.delete(
			`https://comake4.herokuapp.com/api/users/${userID}/states/${stateID}`
		)
		.then(res => {
			console.log('res from delete', res);
			dispatch({ type: DELETE_STATE, payload: stateID });
		})
		.catch(err => {
			console.log('err from state delete', err);
		});
};
export const updateProfile = userID => dispatch => {
	return axiosWithAuth()
		.put(`https://comake4.herokuapp.com/api/users/${userID}`)
		.then(res => {
			console.log('res from update profile', res);
			dispatch({ type: RESET_ERROR });
		})
		.catch(err => {
			console.log('err from update profile', err);
			dispatch({ type: UPDATE_ERROR });
		});
};
