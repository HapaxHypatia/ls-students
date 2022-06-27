import React from "react";
import Subsection from "./subsection";

//TODO how to import all jsons and map to letters of the alphabet(string) for quicker searching

function Entry(props) {
	//map "abcdefghijklmnopqrstuvwxyz" to ./data/*
	const selectedEntry = props.term;
	//TODO display ~5 headwords above and below this entry

	const senses = selectedEntry.senses;

	if(selectedEntry==="invalid"){
		return (
			<p>No entry found</p>
		);
	}else{
		return (
		<div>
			{/*Sample data*/}
			<div >{selectedEntry.key}</div>
			<div >{selectedEntry.main_notes}</div>
			<div>{selectedEntry.part_of_speech}</div>
			<div>{selectedEntry.declension}</div>
			<div>{selectedEntry.gender}</div>
			{senses.map((sense, index) => <Subsection key={index} sense={sense}/>)}

		</div>
	);
	}


}
export default Entry;
