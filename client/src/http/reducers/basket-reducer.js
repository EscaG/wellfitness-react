
const ADD_PRODUCT = 'ADD_PRODUCT';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const BASKET_REMOVE = 'BASKET_REMOVE';
const BASKET_CLEAR = 'BASKET_CLEAR';
const ADD_TO_BASKET = 'ADD_TO_BASKET';

const defaultState = {
	items: {},
	totalPrice: 0,
	totalCount: 0
}

export default function basketReducer(state = defaultState, action) {

	switch (action.type) {

		case ADD_TO_BASKET:
			let sum = 0;
			let count = 0;

			const newItem = {
				...state.items,
				[action.payload.product._id]: action.payload
			}

			Object.keys(newItem).forEach(key => {
				count += newItem[key].amount;
				sum += newItem[key].product.price?.sharePrice
					? Number(newItem[key].product.price.sharePrice.replace(/\s/g, '')) * newItem[key].amount
					: Number(newItem[key].product.price.fullPrice.replace(/\s/g, '')) * newItem[key].amount;
			})

			return {
				...state,
				items: newItem,
				totalPrice: String(sum).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '),
				totalCount: count
			}
		case BASKET_CLEAR:
			return {
				...state,
				items: {},
				totalCount: 0,
				totalPrice: 0
			}


		default:
			return state;
	}


}

// export const addProductToBasket = (product) => ({ type: ADD_PRODUCT, payload: product });
// export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, payload: count });
export const clearBasket = () => ({ type: BASKET_CLEAR });
export const addToBasketRedux = (product) => ({ type: ADD_TO_BASKET, payload: product });

const a = {
	obj: {
		keyid: {
			items: []
		},
		keyid2: {
			items: []
		},
	}
}

const i = {
	obj: {
		keyid: {
			product: {},
			amount: Number
		},
		keyid2: {
			product: {},
			amount: Number
		}
	}
}

const j = [
	{
		product: {},
		amount: Number
	}
]


