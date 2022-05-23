import React from "react";
import entry from "../data/ls_A.json";

function Entry() {
	return (
		<div>
			<p>entry</p>
			{/*Sample entry*/}
			<div >{entry[52].main_notes}</div>
			<div>{entry[52].part_of_speech}</div>
			<div>{entry[52].declension}</div>
			<div>{entry[52].gender}</div>
			<div className={"sense"}>{entry[52].senses[0]}</div>
			<div className={"sense"}>{entry[52].senses[1]}</div>
			<div className={"sense"}>{entry[52].senses[2]}</div>
			<div className={"sense"}>{entry[52].senses[3]}</div>
		</div>
	);
}
export default Entry;
