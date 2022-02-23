
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
	// console.log(state.currentBasket.map(product => product?.id).includes(action.payload?.id));

	switch (action.type) {
		case ADD_PRODUCT:

			const newItems = {
				...state.items,
				[action.payload._id]: !state.items[action.payload._id]
					? [action.payload]
					: [...state.items[action.payload._id], action.payload]
			}

			const allBasket = [].concat.apply([], Object.values(newItems));
			const summ = allBasket.reduce((sum, item) => item.price?.sharePrice
				? Number(item.price?.sharePrice.replace(/\s/g, '')) + sum
				: Number(item.price?.fullPrice.replace(/\s/g, '')) + sum
				, 0
			)
			return {
				...state,
				items: newItems,
				totalCount: allBasket.length,
				totalPrice: String(summ).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
			}
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.payload
			}
		case BASKET_CLEAR:
			return {
				...state,
				items: {},
				totalCount: 0,
				totalPrice: 0
			}
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

		default:
			return state;
	}


}

export const addProductToBasket = (product) => ({ type: ADD_PRODUCT, payload: product });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, payload: count });
export const clearBasket = () => ({ type: BASKET_CLEAR });
export const addToBasket = (product) => ({ type: ADD_TO_BASKET, payload: product });

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


// export default function cartReducer(state = {}, { type, good, count = 1 }) {

// 	if (type === CARD_ADD) {
// 		return {
// 			...state,
// 			[good["_id"]]: { count: count + (good["_id"] in state ? state[good._id].count : 0), good }
// 		}
// 	}
// 	if (type === CARD_CHANGE) {
// 		return {
// 			...state,
// 			[good._id]: { count: count, good: good }
// 		}
// 	}
// 	if (type === CARD_DELETE) {
// 		let { [good._id]: remove, ...newState } = state;
// 		return newState;
// 	}
// 	if (type === CARD_CLEAR) {
// 		return {};
// 	}
// 	return state;
// }

// export const actionCartAdd = (good, count = 1) => ({ type: CARD_ADD, good, count });
// export const actionCartChange = (good, count = 1) => ({ type: CARD_CHANGE, good, count });
// export const actionCartDelete = (good) => ({ type: CARD_DELETE, good });
// export const actionCartClear = () => ({ type: CARD_CLEAR });