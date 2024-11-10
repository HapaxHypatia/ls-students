import React from "react";
import {useState} from "react";
import Entry from "./entry";
import {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z} from '../data'


//TODO design page layout properly
//TODO expand all abbreviations and replace any that are confusing
//TODO format quotation examples differently, and make them collapsible
//TODO remove trailing number from keys, present user with both to choose from (did you mean...?)
//TODO currently page is frozen after finding entry, can't refresh or go back

const Search = () => {
	const dictionary = {
		a: a,
		b: b,
		c: c,
		d: d,
		e: e,
		f: f,
		g: g,
		h: h,
		i: i,
		j: j,
		k: k,
		l:l,
		m:m,
		n:n,
		o:o,
		p:p,
		q:q,
		r:r,
		s:s,
		t:t,
		u:u,
		v:v,
		x:x,
		y:y,
		z:z
	}
	const [searchTerm, setSearchTerm] = useState("")
	const [entry, setEntry] = useState("")
	const [data, setData] = useState('')

	const updateState = (e) => {
		const val = e.target.value;
		setSearchTerm(val);
		const initial = searchTerm.slice(0, 1)
		setData(dictionary[initial])

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		//TODO look for alternative spellings (e.g. alloquor)
		//TODO allow search by infinitive
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
				{entry? <Entry term={entry} data={data} /> : <p id={"empty"}></p>}
			</div>

		);
				}
export default Search;