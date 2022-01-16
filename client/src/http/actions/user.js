// import axios from 'axios';
import { errorUser, setUser, updateUser } from '../reducers/userReducer';
import $api from "../http";
// import {AuthResponse} from "../http/models/response/AuthResponse";
// import {API_URL} from "../http/http";
const API_URL = process.env.REACT_APP_BASE_URL;


export const registration = (email, password, surname, name) => {
	return async dispatch => {
		try {
			const response = await $api.post(API_URL + '/registration', {
				email,
				password,
				surname,
				name
			});
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
			// alert(response.data.message);
		} catch (error) {
			// alert(error.response?.data?.message);
			dispatch(errorUser(error?.response?.data?.message));
		}
	}
}

export const login = (email, password) => {
	return async dispatch => {
		try {
			const response = await $api.post(API_URL + '/login', {
				email,
				password
			});
			console.log(response.data.user);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
			console.log(localStorage.getItem('token'));
		} catch (error) {
			// console.log(error?.response?.data?.message);
			dispatch(errorUser(error?.response?.data?.message));
		}
	}
}

export const checkAuth = () => {
	return async dispatch => {
		try {
			// axios.defaults.withCredentials = true;
			const response = await $api.get(API_URL + '/refresh',
				{ withCredentials: true }
			);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
		} catch (error) {
			// dispatch(errorUser(error?.response?.data?.message));
		}
	}
}

export const editUser = (email, surname, name, phone, data) => {
	return async dispatch => {
		try {
			const response = await $api.put(API_URL + '/update',
				{ email, surname, name, phone, data });
			dispatch(updateUser(response.data.user));
		} catch (error) {
			dispatch(errorUser(error?.response?.data?.message));
		}
	}
}

// export const editAndUpdateUser = (email, surname, name, phone, data) => {
// 	return async dispatch => {
// 		try {
// 			const response = await $api.put(API_URL + '/update',
// 				{ email, surname, name, phone, data });
// 			dispatch(updateUser(response.data.user));
// 			const responseAuth = await $api.get(API_URL + '/refresh');
// 			dispatch(setUser(responseAuth.data.user));
// 			localStorage.setItem('token', responseAuth.data.accessToken);
// 		} catch (error) {

// 		}
// 	}
// }






