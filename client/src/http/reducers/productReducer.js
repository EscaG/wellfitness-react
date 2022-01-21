const SET_PRODUCT = "SET_PRODUCT";


const defaultState = {
	currentProduct: [],
	errorMessage: ''
}

export default function productReducer(state = defaultState, action) {

	switch (action.type) {
		case SET_PRODUCT:

			return {
				...state,
				currentProduct: action.payload,
				errorMessage: ''
			}

		default:
			return state;
	}


}

export const setProduct = (product) => ({ type: SET_PRODUCT, payload: product }) 