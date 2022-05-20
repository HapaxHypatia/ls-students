import React from "react";
import searchIcon from '../search.svg';


function SearchForm() {
	return (
		<div>
			<div className="search">
			<input id='searchBox' type="search" placeholder="Search the dictionary" />
			</div>
		</div>
	);
}
export default SearchForm;
