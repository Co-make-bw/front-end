import {
	GET_USER,
	ADD_STATE,
	DELETE_STATE,
	GET_STATES
} from '../actions/dashboardActions';

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
			return {
				user: {
					...state.user,
					id: action.payload.id,
					username: action.payload.username,
					about: action.payload.about,
					points: action.payload.points
				}
			};
		case GET_STATES:
			return {
				user: {
					...state.user,
					locations: action.payload
				}
			};
		case ADD_STATE:
			return {
				user: {
					...state.user,
					locations: action.payload
				}
			};
		case DELETE_STATE:
			if (state.user.locations.length !== 0) {
				const newLocations = state.user.locations.filter(
					item => item.state_id !== action.payload
				);
				return {
					user: {
						...state.user,
						locations: newLocations
					}
				};
			} else {
				return state;
			}
		default:
			return state;
	}
};
