// import $api from "../http/http";
import $api from "../http";

const API_URL = process.env.REACT_APP_BASE_URL;

const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";
const ERROR = "ERROR";

const defaultState = {
	currentUser: {},
	isAuth: false,
	isLoading: false,
	errorMessage: ''
}

export default function userReducer(state = defaultState, action) {

	switch (action.type) {
		case ERROR:
			return {
				...state,
				currentUser: {},
				errorMessage: action.payload
			}
		case SET_USER:
			return {
				...state,
				currentUser: action.payload,
				isLoading: false,
				isAuth: true,
				errorMessage: ''
			}
		case UPDATE_USER:
			// return { ...state, currentUser: { ...state.currentUser, ...action.payload }, isAuth: true }
			return {
				...state,
				isLoading: false,
				// currentUser: action.payload.user,
				currentUser: action.payload,
				isAuth: true,
				errorMessage: ''
			};
		case LOGOUT:
			$api.post(API_URL + "/logout");
			localStorage.removeItem('token');
			return {
				...state,
				currentUser: {},
				isAuth: false,
				errorMessage: ''
			}
		default:
			return state;
	}
}

export const setUser = user => ({ type: SET_USER, payload: user });
export const updateUser = res => ({ type: UPDATE_USER, payload: res });
export const logout = () => ({ type: LOGOUT });
export const errorUser = (error) => ({ type: ERROR, payload: error });