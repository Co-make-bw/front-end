const initialState = {
	credentials: {
		username: '',
		password: ''
	},
	newUser: {
		username: '',
		password: ''
	}
};

export const onboardingReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
