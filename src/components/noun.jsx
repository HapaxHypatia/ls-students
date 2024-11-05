import React from "react";
import Subsection from "./subsection";
import data from "../data/ls_A.json";

function Noun(props) {

	return (

		<div>
			<div>Declension: {props.declension}</div>
			<div>Gender: {props.gender}</div>
			<div>Genitive ending: {props.genitive}</div>
			{props.senses.map((sense, index) => <Subsection key={index} sense={sense}/>)}
			{props.main.map((item, index) => <div>{item}</div>)}

		</div>
	);
}

export default Noun;