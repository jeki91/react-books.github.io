const initialState = {
	items: [],
	isLoaded: false,
	tab: [],
}

 const books = (state = initialState, action) => {

	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items:action.payload,
				isLoaded: true,
			};
		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload,
			};
			case 'SET_TABS':
				return {
					...state,
					isLoaded: true,
					tab: action.payload,
				};
	
		default:
			return state
	}

	
 };

 export default books