const SET_FAVORITES = "SET_FAVORITES";

const defaultState = {
	currentFavorites: []
}

export default function favoritesReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_FAVORITES:

			return {
				...state,
				currentFavorites: action.payload
			};

		default:
			return state;
	}
}

export const setFavoritesToRedux = flag => ({ type: SET_FAVORITES, payload: flag });