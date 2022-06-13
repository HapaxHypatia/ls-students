import React from "react";
import {useState} from "react";
import data from "../data/ls_B.json";
import Entry from "./entry";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [entry, setEntry] = useState("")

	const updateState = (e) => {
		const val = e.target.value;
		setSearchTerm(val);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const selectedEntry = data.find(entry => entry.key === searchTerm);
		if (selectedEntry==undefined){
			setEntry("");
		}else{
			setEntry(selectedEntry)
		}
		console.log("Selected entry = "+ entry)
	}

	return (
			<div className="search">
				<form onSubmit={handleSubmit}>
					<input id='searchBox' value={searchTerm ?? ""} onChange={updateState} placeholder="Search the dictionary" />
					<button>Search</button>
				</form>
				{entry? <Entry term={entry}/> : <p id={"empty"}>No Entry</p>}
			</div>

		);
				}
export default Search;