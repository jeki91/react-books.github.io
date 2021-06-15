import axios from 'axios';

export const setLoaded = payload => ({
	type: 'SET_LOADED',
	payload,
})

export const fetchBooks = (category) => (dispatch) =>  {
	
/*
axios.get(
		`http://localhost:3001/books?${
			category != 'All' ? `flt=${category}` : ''
		}`,
*/
	
	dispatch(setLoaded(false));
	/*axios.get(
		`http://localhost:3001/books`*/
		axios.get(
			`/books?${
				category !== 'All' ? 
				(category === 'Fiction and Literature' ||
				 category === 'Non - Fiction' ||
				 category === 'Other')
				 ? `category=${category}` :
				`subCategory=${category}` : ''
			}`,
	).then(({data}) => {
		dispatch(setBooks(data));
		
		});
};

export const setBooks = (items) => ({
	type: 'SET_BOOKS',
	payload: items,
});

export const fetchBooksTab = (tab) => (dispatch) =>  {
	

		dispatch(setLoaded(false));
		axios.get(
			`/books?tab=${tab}`
		
		).then(({data}) => {
			dispatch(setTabs(data));
			});
	};

	export const setTabs = (items) => ({
		type: 'SET_TABS',
		payload: items,
	});