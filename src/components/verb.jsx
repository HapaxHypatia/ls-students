import React from "react";
import Subsection from "./subsection";



function Verb(props) {

	return (
		<div>
			<p>Conjugation: {props.conj}</p>
			Principal Parts: {props.parts.map((item, index) => <div>{item}</div>)}
			{props.senses.map((sense, index) => <Subsection key={index} sense={sense}/>)}
		</div>
	);
}

export default Verb;