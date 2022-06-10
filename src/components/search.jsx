import React from "react";
import {useState, useEffect} from "react";
import data from "../data/ls_A.json";
import Entry from "./entry";
import {hasSelectionSupport} from "@testing-library/user-event/dist/utils";

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
		setEntry(selectedEntry)
	}

	return (
			<div className="search">
				<form onSubmit={handleSubmit}>
					<input id='searchBox' value={searchTerm ?? ""} onChange={updateState} placeholder="Search the dictionary" />
					<button>Search</button>
				</form>
				{entry? <Entry term={entry}/> : <p>No entry found</p>}
			</div>

		);
				}
export default Search;