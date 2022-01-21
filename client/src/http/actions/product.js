import axios from 'axios';
import { setProduct } from '../reducers/productReducer';
const API_URL = process.env.REACT_APP_BASE_URL;


export const getProduct = () => {
	return async dispatch => {
		try {
			const response = await axios.get(API_URL + "/products")
			dispatch(setProduct(response.data))
		} catch (e) {

		}
	}
}