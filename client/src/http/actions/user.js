import axios from 'axios';
import { setUser } from '../reducers/userReducer';
import $api from "../http";
// import {AuthResponse} from "../http/models/response/AuthResponse";
// import {API_URL} from "../http/http";
const API_URL = process.env.REACT_APP_BASE_URL;


export const registration = (email, password) => {
	return async dispatch => {
		try {
			const response = await $api.post(API_URL + '/api/registration', {
				email,
				password
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
			axios.defaults.withCredentials = true;
			const response = await $api.get(API_URL + '/api/refresh',
				{ withCredentials: true }
			);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
		} catch (error) {

		}
	}
}

// export const auth = () => {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.get('http://localhost:5000/api/auth',
// 				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
// 			);
// 			dispatch(setUser(response.data.user));
// 			localStorage.setItem('token', response.data.accessToken);
// 		} catch (error) {
// 			// console.log(error.response.data.message);
// 			localStorage.removeItem('token');
// 		}
// 	}
// }






