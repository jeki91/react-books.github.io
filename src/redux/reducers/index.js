import { combineReducers } from 'redux';

import filters from './filters';
import books from './books';
import cart from './cart';
import currentBook from './currentBook';

const rootReducer = combineReducers({
	filters,
	books,
	cart,
	currentBook,
});

export default rootReducer;