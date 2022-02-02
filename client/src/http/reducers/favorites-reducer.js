const SET_FAVORITE = "SET_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";

const defaultState = {
	currentFavorite: []
}

export default function favoritesReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_FAVORITE:

			return {
				...state,
				currentFavorite: action.payload
			};
		case DELETE_FAVORITE:

			break;

		default:
			break;
	}


} 