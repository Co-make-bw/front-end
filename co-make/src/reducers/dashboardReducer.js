import { GET_USER } from '../actions/dashboardActions';

const initialState = {
	user: {
		id: '',
		username: '',
		locations: [],
		about: '',
		points: 0
	}
};

export const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			console.log('getuser', action.payload);
			return {
				user: {
					...state.user,
					id: action.payload.id,
					username: action.payload.username,
					about: action.payload.about,
					points: action.payload.points
				}
			};
		default:
			return state;
	}
};
