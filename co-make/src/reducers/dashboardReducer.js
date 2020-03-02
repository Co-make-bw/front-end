const initialState = {
	user: {
		id: '',
		username: '',
		location: [],
		aboutme: '',
		points: 0
	}
};

export const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
