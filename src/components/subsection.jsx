import React from "react";
import abbreviations from "../abbreviations.json";

function Subsection(props){
	const item = props.sense;


	if (Array.isArray(item))
	{
		return (
			<div className={"subsection"}>{item.map((item, index) => <Subsection key={index} sense={item}/>)}
			</div>
		);
	}
	else {
		let split = item.split(/[;|()<>{}—\[\]\r\n/\\]+/);
		return (
			<div className={"subsection"}>
				{split.map((sentence) => <div>{sentence}</div>)}
			</div>

			);
	}

}


export default Subsection;
