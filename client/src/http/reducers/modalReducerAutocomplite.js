const SET_CONDITION = "SET_CONDITION";

const defaultState = {
	currentCondition: false
}

export default function modalAutocompliteReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_CONDITION:

			return {
				...state,
				currentCondition: action.payload
			};

		default:
			return state;
	}
}

export const setConditionAutocomplite = flag => ({ type: SET_CONDITION, payload: flag });