import React, {useState} from "react";
import Entry from "./entry";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const handleSubmit = (e) => {
		console.log('handleSubmit ran');
		console.log(e.target.value)
		e.preventDefault(); // 👈️ prevent page refresh
	}

	return (
		<div>
			<div className="search">
			<form onSubmit={handleSubmit}>
				<input id='searchBox' onChange={event => setSearchTerm(event.target.value)} placeholder="Search the dictionary" />
				<button>Search</button>
			</form>
			</div>
			<Entry key = {searchTerm}/>
		</div>
	);
}

export default Search;