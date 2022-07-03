import React from "react";
import Verb from "./verb";
import Noun from "./noun";
import data from "../data/ls_A.json";


function Entry(props) {
	//map "abcdefghijklmnopqrstuvwxyz" to ./data/*
	const selectedEntry = props.term;

	//TODO display ~5 headwords above and below this entry
	const index = data.indexOf(selectedEntry)
	console.log(index);
	const before = [];
	const after = [];

		for (let i=index-1; i>index-6; i--){
		//	get key of 5 entries before , add to list
			before.push(data[i].key);
		}
		console.log(before);

		for (let i=index+1; i<index+6; i++){
		//	get key of 5 entries after, add to list
			after.push(data[i].key);
		}
		console.log(after)

	let part;
	let main;
	let senses;
	let declension;
	let gender;
	let genitive;


	if (selectedEntry != "invalid"){
		part = selectedEntry.part_of_speech
		main = selectedEntry.main_notes.split(/[;|()<>{}—\[\]\r\n/\\]+/)
		senses = selectedEntry.senses;
		declension = selectedEntry.declension;
		gender = selectedEntry.gender;
		genitive = selectedEntry.title_genitive;
	}


	if (selectedEntry === "invalid") {
		return (
			<p>No entry found</p>
		);
	} else {
		return (
			<div>
				<div>{before} {after}</div>
				{/*make each of these a link that replaces the entry with a new one*/}
				<div>{selectedEntry.key}</div>
				<div>Part of speech: {part}</div>
				{
					(() => {
						switch (part) {
							case "noun":
								return <Noun main={main}
											 senses={senses}
											 part = {part}
											 declension = {declension}
											 gender = {gender}
											 genitive = {genitive}


								/>;
							case "verb":
								return <Verb main={main} senses={senses} part = {part} />;
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
