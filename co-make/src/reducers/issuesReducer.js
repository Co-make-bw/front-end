import {
	STATE_ISSUES_ERROR,
	RESET_ERRORS,
	GET_STATE_ISSUES
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
		default:
			return state;
	}
};
