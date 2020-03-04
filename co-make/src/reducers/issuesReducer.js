import {
	STATE_ISSUES_ERROR,
	RESET_ERRORS,
	GET_STATE_ISSUES,
	ADD_UPVOTE,
	REMOVE_UPVOTE
} from '../actions/issuesActions';

const initialState = {
	issues: [],
	stateError: false
};

export const issuesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STATE_ISSUES:
			return {
				...state,
				issues: action.payload
			};
		case STATE_ISSUES_ERROR:
			return {
				...state,
				stateError: true
			};
		case RESET_ERRORS:
			return {
				...state,
				stateError: false
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
