import { REGISTER_ERROR, RESET_ERROR } from '../actions/onboardingActions';

const initialState = {
	registerError: false
};

export const onboardingReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_ERROR:
			return {
				...state,
				registerError: true
			};
		case RESET_ERROR:
			return {
				registerError: false
			};
		default:
			return state;
	}
};
