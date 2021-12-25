import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;

const $api = axios.create({
	API_URL,
	withCredentials : true});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config;
})

$api.interceptors.response.use((config) => {
	return config;
}, async (error) => {
	const originalRequest = error.config;
	if (error.response.status === 401 && error.config && !error.config._isRetry) {
		originalRequest._isRetry = true
		try {
			const response = await axios.get(`${API_URL}/api/refresh`, { withCredentials: true });
			localStorage.setItem('token', response.data.accessToken);
			return $api.request(originalRequest);
		} catch (e) {
			console.log('Не авторизированый пользователь');
		}
	}
	throw error;
})

export default $api;