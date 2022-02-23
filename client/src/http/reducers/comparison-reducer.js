		// case ADD_PRODUCT:

		// 	const newItems = {
		// 		...state.items,
		// 		[action.payload._id]: !state.items[action.payload._id]
		// 			? [action.payload]
		// 			: [...state.items[action.payload._id], action.payload]
		// 	}

		// 	const allBasket = [].concat.apply([], Object.values(newItems));
		// 	const summ = allBasket.reduce((sum, item) => item.price?.sharePrice
		// 		? Number(item.price?.sharePrice.replace(/\s/g, '')) + sum
		// 		: Number(item.price?.fullPrice.replace(/\s/g, '')) + sum
		// 		, 0
		// 	)
		// 	return {
		// 		...state,
		// 		items: newItems,
		// 		totalCount: allBasket.length,
		// 		totalPrice: String(summ).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
		// 	}


		
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