import {
	LOGIN_ERROR,
	REGISTER_ERROR,
	RESET_ERROR
} from '../actions/onboardingActions';

const initialState = {
	loginError: false,
	registerError: false
};

export const onboardingReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ERROR:
			return {
				...state,
				loginError: true
			};
		case REGISTER_ERROR:
			return {
				...state,
				registerError: true
			};
		case RESET_ERROR:
			return {
				loginError: false,
				registerError: false
			};
		default:
			return state;
	}
};
