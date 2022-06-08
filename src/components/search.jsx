import React from "react";
import {useState, useEffect} from "react";
import data from "../data/ls_A.json";
import Entry from "./entry";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [entry, setEntry] = useState("")
	let isSubmitted = false;

	const updateState = (e) => {
		const val = e.target.value;
		setSearchTerm(val);
		console.log("Search term on update = "+searchTerm)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Search term on submit = "+searchTerm)
		isSubmitted = true;
	}

	React.useEffect(() => {
		const selectedEntry = data.find(entry => entry.key === searchTerm);
		console.log("selected entry = " +JSON.stringify(selectedEntry));
	    setEntry(selectedEntry);
  }, [searchTerm]);

	return (
			<div className="search">
				<form onSubmit={handleSubmit}>
					<input id='searchBox' value={searchTerm ?? ""} onChange={updateState} placeholder="Search the dictionary" />
					<button>Search</button>
				</form>
				{isSubmitted &&  <Entry term={entry}/>}
				{isSubmitted &&  <Entry term={entry}/>}
			</div>
		);

}

export default Search;