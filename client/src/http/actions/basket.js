
import axios from 'axios';
import { setTotalPrice } from '../reducers/basket-reducer';
const API_URL = process.env.REACT_APP_BASE_URL;



export const addProductToCard = (product) => {

}

// export const getProduct = () => {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.get(API_URL + "/products")
// 			dispatch(setTotalPrice(response.data))
// 		} catch (e) {

// 		}
// 	}
// }