import {
	STATE_ISSUES_ERROR,
	USER_ISSUES_ERROR,
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
	userError: false
};

export const issuesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STATE_ISSUES:
			return {
				...state,
				issues: action.payload
			};
		case GET_USER_ISSUES:
			if (action.payload.isArray) {
				return {
					...state,
					userIssues: action.payload
				};
			} else {
				return {
					...state,
					userIssues: [action.payload]
				};
			}
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
		case RESET_ERRORS:
			return {
				...state,
				stateError: false,
				userError: false
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
