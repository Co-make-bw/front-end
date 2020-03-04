import { STATE_ISSUES_ERROR, RESET_ERRORS } from '../actions/issuesActions';

const initialState = {
	issues: [
		{
			title: '',
			description: '',
			upvotes: 0,
			location: '',
			user_id: null,
			state_id: null
		}
	],
	stateError: false
};

export const issuesReducer = (state = initialState, action) => {
	switch (action.type) {
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
