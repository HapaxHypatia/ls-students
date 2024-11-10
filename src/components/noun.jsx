import React from "react";
import Subsection from "./subsection";


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