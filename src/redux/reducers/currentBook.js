const initialState = {
	items: [],
};

const currentBook = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_BOOK':
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
}

export default currentBook