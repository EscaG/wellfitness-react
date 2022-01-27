const SET_SEARCH = "SET_SEARCH";


const defaultState = {
	currentProduct: ''
	// errorMessage: ''
}

export default function SearchReducer(state = defaultState, action) {

	switch (action.type) {
		case SET_SEARCH:

			return {
				...state,
				currentSearch: action.payload,
				errorMessage: ''
			}

		default:
			return state;
	}


}

export const setSearch = (search) => ({ type: SET_SEARCH, payload: search }) 