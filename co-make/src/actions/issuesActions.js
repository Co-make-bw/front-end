import { axiosWithAuth } from '../utils/axiosWithAuth';

export const STATE_ISSUES_ERROR = 'STATE_ISSUES_ERROR';
export const RESET_ERRORS = 'RESET_ERRORS';

export const getStateIssues = stateID => dispatch => {
	axiosWithAuth()
		.get(`https://comake4.herokuapp.com/api/states/${stateID}/issues`)
		.then(res => {
			console.log('get state issues res', res);
			dispatch({ type: RESET_ERRORS });
		})
		.catch(err => {
			dispatch({ type: STATE_ISSUES_ERROR });
		});
};
