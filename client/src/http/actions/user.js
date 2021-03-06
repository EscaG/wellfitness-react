import { errorUser, setUser, updateUser } from '../reducers/userReducer';
import $api from "../http";

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
			// console.log(response.data.user);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.accessToken);
			// console.log(localStorage.getItem('token'));
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
			// console.log(response);
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
export const editFavorites = (email, favorites) => {
	return async dispatch => {
		try {
			const response = await $api.put(API_URL + '/favorites',
				{ email, favorites });
			dispatch(updateUser(response.data.user));
		} catch (error) {
			dispatch(errorUser(error?.response?.data?.message));
		}
	}
}
export const editBasket = (email, basket) => {
	return async dispatch => {
		try {
			const response = await $api.put(API_URL + '/basket',
				{ email, basket });
			dispatch(updateUser(response.data.user));
		} catch (error) {
			dispatch(errorUser(error?.response?.data?.message));
		}
	}
}

export const editAvatar = (email, avatar) => {
	console.log("redux avatar");
	return async dispatch => {
		try {
			const response = await $api.put(API_URL + '/avatar',
				{ email, avatar });
			dispatch(updateUser(response.data.user));
		} catch (error) {
			dispatch(errorUser(error?.response?.data?.message));
		}
	}
}








