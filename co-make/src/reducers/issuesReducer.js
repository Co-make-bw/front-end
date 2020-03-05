import {
	STATE_ISSUES_ERROR,
	USER_ISSUES_ERROR,
	ADD_ISSUE_ERROR,
	DELETE_ISSUE_ERROR,
	RESET_ERRORS,
	GET_STATE_ISSUES,
	GET_USER_ISSUES,
	ADD_UPVOTE,
	REMOVE_UPVOTE
} from '../actions/issuesActions';

const initialState = {
	issues: [],
	userIssues: [],
	stateError: false,
	userError: false,
	addIssueError: false,
	deleteIssueError: false
};

export const issuesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STATE_ISSUES:
			return {
				...state,
				issues: action.payload
			};
		case GET_USER_ISSUES:
			const filteredUserIssues = action.payload.filter(
				item => item.user_id === Number(action.id)
			);
			return {
				...state,
				userIssues: filteredUserIssues
			};
		case STATE_ISSUES_ERROR:
			return {
				...state,
				stateError: true
			};
		case USER_ISSUES_ERROR:
			return {
				...state,
				userError: true
			};
		case ADD_ISSUE_ERROR:
			return {
				...state,
				addIssueError: true
			};
		case DELETE_ISSUE_ERROR:
			return {
				...state,
				deleteIssueError: true
			};
		case RESET_ERRORS:
			return {
				...state,
				stateError: false,
				userError: false,
				addIssueError: false,
				deleteIssueError: false
			};
		case ADD_UPVOTE:
			const newUpvoteIssues = state.issues.map(item => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			});

			return {
				...state,
				issues: newUpvoteIssues
			};
		case REMOVE_UPVOTE:
			const newUnvoteIssues = state.issues.map(item => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			});

			return {
				...state,
				issues: newUnvoteIssues
			};
		default:
			return state;
	}
};
