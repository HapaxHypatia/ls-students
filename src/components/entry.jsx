import React from "react";
import data from "../data/ls_A.json";


//TODO still working out how to pass search Term from searchform to entry
function Entry(props) {
	const selectedEntry = data.find(entry => entry.key === props.searchTerm);
	console.log(selectedEntry)
	if (!selectedEntry){
		return (
			<p>no entry found</p>
		);
	}
	else{
		return (
		<div>
			{/*Sample data*/}
			<div >{selectedEntry.key}</div>
			<div >{selectedEntry.main_notes}</div>
			<div>{selectedEntry.part_of_speech}</div>
			<div>{selectedEntry.declension}</div>
			<div>{selectedEntry.gender}</div>
			<div className={"sense"}>{selectedEntry.senses[0]}</div>
			<div className={"sense"}>{selectedEntry.senses[1]}</div>
			<div className={"sense"}>{selectedEntry.senses[2]}</div>
			<div className={"sense"}>{selectedEntry.senses[3]}</div>
		</div>
	);
	}

}
export default Entry;
