import React from "react";
import Navbar from "./navbar";

function SearchForm() {
	return (
		<div>
			<form>
				<input type={"text"} id="search"/>
				<label htmlFor="search">Search the dictionary</label>
				<button>Search</button>
			</form>
		</div>
	);
}
export default SearchForm;
