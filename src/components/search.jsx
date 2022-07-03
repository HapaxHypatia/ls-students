import React from "react";
import {useState} from "react";
import data from "../data/ls_A.json";
import Entry from "./entry";
//TODO how to import all jsons and map to letters of the alphabet(string) for quicker searching


const Search = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [entry, setEntry] = useState("")

	const updateState = (e) => {
		const val = e.target.value;
		setSearchTerm(val);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		//TODO work around for entries like altus1 & altus2
		//TODO look for alternative spellings (e.g. alloquor)
		const selectedEntry = data.find(entry => entry.key === searchTerm);
		if (selectedEntry===undefined){
			setEntry("invalid");
		}else{
			setEntry(selectedEntry)
		}
	}

	return (
			<div className="search">
				<form onSubmit={handleSubmit}>
					<input id='searchBox' value={searchTerm ?? ""} onChange={updateState} placeholder="Search the dictionary" />
					<button>Search</button>
				</form>
				{entry? <Entry term={entry} /> : <p id={"empty"}></p>}
			</div>

		);
				}
export default Search;