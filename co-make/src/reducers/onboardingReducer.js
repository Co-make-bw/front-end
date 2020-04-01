import {
	REGISTER_ERROR,
	LOGIN_ERROR,
	RESET_ERROR
} from '../actions/onboardingActions';

const initialState = {
	registerError: false,
	loginError: false
};

export const onboardingReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_ERROR:
			return {
				...state,
				registerError: true
			};
		case LOGIN_ERROR:
			return {
				...state,
				loginError: true
			};
		case RESET_ERROR:
			return {
				registerError: false,
				loginError: false
			};
		default:
			return state;
	}
};
