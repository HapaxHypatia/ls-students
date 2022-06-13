import React from "react";

//TODO how to import all jsons and map to letters of the alphabet(string) for quicker searching

function Entry(props) {
	// const files = {
	// 	'a' = "ls_A.json"
	// }
	const selectedEntry = props.term;
	//TODO This condition does not work- returns blank
	if(selectedEntry===""){
		return (
			<p>"No entry found"</p>
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
			<div className={"sense"}>{selectedEntry.senses[0]}</div>
			<div className={"sense"}>{selectedEntry.senses[1]}</div>
			<div className={"sense"}>{selectedEntry.senses[2]}</div>
			<div className={"sense"}>{selectedEntry.senses[3]}</div>
		</div>
	);
	}


}
export default Entry;
