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
	state: ''
};

export const issuesReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
