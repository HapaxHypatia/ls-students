import React from "react";
import Subsection from "./subsection";



function Verb(props) {

	return (
		<div>
			Conjugation: {props.conj}
			{props.principal_parts}
			{props.senses.map((sense, index) => <Subsection key={index} sense={sense}/>)}
		</div>
	);
}

export default Verb;