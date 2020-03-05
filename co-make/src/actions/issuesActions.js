import { axiosWithAuth } from '../utils/axiosWithAuth';

export const STATE_ISSUES_ERROR = 'STATE_ISSUES_ERROR';
export const USER_ISSUES_ERROR = 'USER_ISSUES_ERROR';
export const ADD_ISSUE_ERROR = 'ADD_ISSUE_ERROR';
export const DELETE_ISSUE_ERROR = 'DELETE_ISSUE_ERROR';
export const RESET_ERRORS = 'RESET_ERRORS';

export const GET_STATE_ISSUES = 'GET_STATE_ISSUES';
export const GET_USER_ISSUES = 'GET_USER_ISSUES';

export const ADD_UPVOTE = 'ADD_UPVOTE';
export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

export const ADD_ISSUE = 'ADD_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';

export const getStateIssues = stateID => dispatch => {
	axiosWithAuth()
		.get(`https://comake4.herokuapp.com/api/states/${stateID}/issues`)
		.then(res => {
			dispatch({ type: RESET_ERRORS });
			dispatch({ type: GET_STATE_ISSUES, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: STATE_ISSUES_ERROR });
		});
};
export const getUserIssues = userID => dispatch => {
	axiosWithAuth()
		.get(`https://comake4.herokuapp.com/api/issues`)
		.then(res => {
			dispatch({ type: RESET_ERRORS });
			dispatch({ type: GET_USER_ISSUES, payload: res.data, id: userID });
		})
		.catch(err => {
			console.log('get user issues err', err);
			dispatch({ type: USER_ISSUES_ERROR });
		});
};
export const addUpvote = (stateID, issueID, newIssue) => dispatch => {
	axiosWithAuth()
		.put(
			`https://comake4.herokuapp.com/api/states/${stateID}/issues/${issueID}`,
			newIssue
		)
		.then(res => {
			dispatch({ type: ADD_UPVOTE, payload: res.data });
		})
		.catch(err => {
			console.log('err from add upvote', err);
		});
};
export const removeUpvote = (stateID, issueID, newIssue) => dispatch => {
	axiosWithAuth()
		.put(
			`https://comake4.herokuapp.com/api/states/${stateID}/issues/${issueID}`,
			newIssue
		)
		.then(res => {
			dispatch({ type: REMOVE_UPVOTE, payload: res.data });
		})
		.catch(err => {
			console.log('err from remove upvote', err);
		});
};
export const addNewIssue = (stateID, issueInfo) => dispatch => {
	return axiosWithAuth()
		.post(
			`https://comake4.herokuapp.com/api/states/${stateID}/issues`,
			issueInfo
		)
		.then(res => {
			console.log('res from add new issue', res);
			dispatch({ type: RESET_ERRORS });
		})
		.catch(err => {
			console.log('err from add new issue', err);
			dispatch({ type: ADD_ISSUE_ERROR });
		});
};
export const deleteIssue = (stateID, issueID) => dispatch => {
	return axiosWithAuth()
		.delete(
			`https://comake4.herokuapp.com/api/states/${stateID}/issues/${issueID}`
		)
		.then(res => {
			console.log('res from deleting issue', res);
			dispatch({ type: RESET_ERRORS });
		})
		.catch(err => {
			console.log('err from deleting issue', err);
			dispatch({ type: DELETE_ISSUE_ERROR });
		});
};
