import axios from 'axios';
import { setUser, updateUser } from '../reducers/userReducer';
import $api from "../http";
// import {AuthResponse} from "../http/models/response/AuthResponse";
// import {API_URL} from "../http/http";
const API_URL = process.env.REACT_APP_BASE_URL;


export const registration = (email, password, surname, name) => {
	return async dispatch => {
		try {
			const response = await $api.post(API_URL + '/api/registration', {
				email,
				password,
				surname,
				name
			});
			dispatch(setUser(response.data.user));
			// alert(response.data.message);
		} catch (error) {
			alert(error.response?.data?.message);
		}
	}
}

export const login = (email, password) => {
	return async dispatch => {
		try {
			const response = await $api.post(API_URL + '/api/login', {
				email,
				password
			});
			console.log(response.data.user);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
			console.log(localStorage.getItem('token'));
		} catch (error) {
			// console.log(error?.response?.data?.message);
		}
	}
}

export const checkAuth = () => {
	return async dispatch => {
		try {
			// axios.defaults.withCredentials = true;
			const response = await $api.get(API_URL + '/api/refresh',
				{ withCredentials: true }
			);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
		} catch (error) {

		}
	}
}

export const editUser = (surname, name, phone, data) => {
	return async dispatch => {
		try {
			const response = await $api.put(API_URL + '/api/update',
				{ surname, name, phone, data });
			dispatch(updateUser(response));
		} catch (error) {

		}
	}
}

export const editAndUpdateUser = (surname, name, phone, data) => {
	editUser(surname, name, phone, data);
	checkAuth();

}






