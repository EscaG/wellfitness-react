// import $api from "../http/http";
import $api from "../http";

const API_URL = process.env.REACT_APP_BASE_URL;

const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

const defaultState = {
	currentUser: {},
	isAuth: false
}

export default function userReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				// currentUser: action.payload.user,
				currentUser: action.payload,
				isAuth: true
			}
		case UPDATE_USER:
			return;
		case LOGOUT:
			$api.post(API_URL + "/api/logout");
			localStorage.removeItem('token');
			return {
				...state,
				currentUser: {},
				isAuth: false
			}
		default:
			return state;
	}
}

export const setUser = user => ({ type: SET_USER, payload: user });
export const updateUser = res => ({ type: UPDATE_USER, payload: res });
export const logout = () => ({ type: LOGOUT });