const initialState = {
	itemCart: {},
	totalPrice: 0,
	totalCount: 0,
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOOK_CART': {
			const currentBookItems = !state.itemCart[action.payload.id] 
				? [action.payload] 
				: [...state.itemCart[action.payload.id].itemCart,action.payload];
			const newItems = {
				...state.itemCart,
				[action.payload.id]: {
					itemCart: currentBookItems,
					totalPrice: currentBookItems.reduce((sum,obj) => obj.price + sum, 0),

				},
			};
			const items = Object.values(newItems).map(obj => obj.itemCart);
			const allBooksInCart = items.flat();
			return {
				...state,
				itemCart: newItems,
				totalCount: allBooksInCart.length,
				totalPrice: allBooksInCart.reduce((sum,obj) => obj.price + sum, 0),
			};
			// [].concat.apply([], Object.values(newItems)).length,
		}
		case 'SET_TOTAL_PRICE':
			return {
				...state,
				totalPrice: action.payload,
			};
			
			case 'SET_TOTAL_COUNT':
				return {
					...state,
					totalCount: action.payload,
				};
			case 'PLUS_CART_ITEM': {
				const newItems = [
					...state.itemCart[action.payload].itemCart,
					state.itemCart[action.payload].itemCart[0]
				];

					return {
						...state,
						itemCart: {
							...state.itemCart,
							[action.payload]: {
								itemCart: newItems,
								totalPrice: newItems.reduce((sum,obj) => obj.price + sum, 0),
							},
						},
						totalCount: state.totalCount + 1,
						totalPrice: state.totalPrice + state.itemCart[action.payload].itemCart[0].price
					};
				}
			
				case 'MINUS_CART_ITEM': {
					
					const oldItems = state.itemCart[action.payload].itemCart;
					const newItem = oldItems.length > 1 ? state.itemCart[action.payload].itemCart.slice(1) : oldItems;
					const oldCount = state.totalCount;
					const oldPrice = state.totalPrice;
					return {
						...state,
						itemCart: {
							...state.itemCart,
							[action.payload]: {
								itemCart: newItem,
								totalPrice: newItem.reduce((sum,obj) => obj.price + sum, 0),
							},
						},
						totalCount: (oldCount > 1 && state.itemCart[action.payload].itemCart.length > 1) ? state.totalCount - 1 : state.totalCount,
						totalPrice: state.itemCart[action.payload].itemCart.length > 1
							? state.totalPrice - state.itemCart[action.payload].itemCart[0].price
							: state.totalPrice
					}
				}
					
				case 'REMOVE_CART_ITEM':{
					const newItems = {
						...state.itemCart
					};
					const currentTotalPrice = newItems[action.payload].totalPrice;
					const currentTotalCount = newItems[action.payload].itemCart.length;
					delete newItems[action.payload];
					return {
						...state,
						itemCart:  newItems,
						totalPrice: state.totalPrice - currentTotalPrice,
						totalCount: state.totalCount - currentTotalCount,
					};
				}
			case 'CLEAR_CART':
				return {
					...state,
					itemCart: {},
					totalPrice: 0,
					totalCount: 0,
				}
		default:
			return state;
	}
};


export default cart

/*
case 'ADD_BOOK_CART':
			return {
				...state,
				itemCart: {
					...state.itemCart,
					[action.payload.id]: !state.itemCart[action.payload.id] 
						? [action.payload] 
						: [...state.itemCart[action.payload.id],action.payload],
				},

				totalCount: state.totalCount + 1,
			};
*/