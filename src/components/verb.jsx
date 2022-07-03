import React from "react";
import Subsection from "./subsection";
import data from "../data/ls_A.json";

function Verb(props) {

	return (
		<div>
			{/*principal parts*/}
			{props.main[0]}
			{/*how to get only principal parts, not other info. E.g. separate conjugation, active/deponent*/}
			{props.main.slice(1,-1).map((item, index) => <div>{item}</div>)}
			{props.senses.map((sense, index) => <Subsection key={index} sense={sense}/>)}
		</div>
	);
}

export default Verb;