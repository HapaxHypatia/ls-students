import React from "react";
import entry from "../data/ls_A.json"

export default function SearchFunction () {
	return (
		<div>
			<div>{entry[20].main_notes}</div>
			<div>{entry[20].part_of_speech}</div>
			<div>{entry[20].declension}</div>
			<div>{entry[20].gender}</div>
			<div>{entry[20].senses}</div>
		</div>
	)
}