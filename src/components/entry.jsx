import React from "react";
import Verb from "./verb";
import Noun from "./noun";


function Entry(props) {
	const selectedEntry = props.term;
	const data = props.data

	//display 5 headwords above and below this entry
	const index = data.indexOf(selectedEntry)
	const before = [];
	const after = [];

		for (let i=index-1; i>index-6; i--){
		//	get key of 5 entries before , add to list
			before.push(data[i].key);
		}

		for (let i=index+1; i<index+6; i++){
		//	get key of 5 entries after, add to list
			after.push(data[i].key);
		}

	let part;
	let main;
	let senses;
	let declension;
	let gender;
	let genitive;
	let conjugation;
	let principal_parts


	if (selectedEntry !== "invalid"){
		part = selectedEntry.part_of_speech
		senses = selectedEntry.senses;
		declension = selectedEntry.declension;
		gender = selectedEntry.gender;
		genitive = selectedEntry.title_genitive;
		conjugation = selectedEntry.conjugation;
		principal_parts = selectedEntry.principal_parts;

		main = selectedEntry.main_notes.split(/[;|()<>{}—[\]\r\n/\\]+/)

	}


	if (selectedEntry === "invalid") {
		return (
			<p>No entry found</p>
		);
	} else {
		return (
			<div>
				<div>{before} {after}</div>
				{/*TODO make each of these a link that replaces the entry with a new one*/}
				{/*TODO Style adjacent entries*/}
				<div>{selectedEntry.key}</div>
				<div>Part of speech: {part}</div>
				{
					(() => {
						switch (part) {
							case "noun":
								return <Noun main={main}
											 senses={senses}
											 declension = {declension}
											 gender = {gender}
											 genitive = {genitive}


								/>;
							case "verb":
								return <Verb main= {main}
											 senses= {senses}
											 conj = {conjugation}
											 parts = {principal_parts}
								/>;
							default:
								return <div />

						}
					})()
				}
			</div>
		);
	}
}

export default Entry;
