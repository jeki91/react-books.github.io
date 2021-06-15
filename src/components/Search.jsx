import React from 'react'

const Search = React.memo(function Search() {
	return (
		<form data-da=".header__content,860,3" action="#" className="body-header__search search-header">
			<div className="search-header__input">
				<input autoComplete="off" type="text" name="form[]" data-error="Ошибка" data-value="" className="input" />
			</div>
			<button type="submit" className="search-header__btn">Search</button>
		</form>
	)
});


export default Search
