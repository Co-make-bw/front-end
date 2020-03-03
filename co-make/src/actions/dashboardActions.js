import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_USER = 'GET_USER';

export const getUser = () => dispatch => {
	dispatch({ type: GET_USER });
};
