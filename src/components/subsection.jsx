import React from "react";

function Subsection(props){
	const item = props.sense;
	const abbreviations = {};
	abbreviations["abl."]="ablative";
	abbreviations["acc."]="accusative";
	abbreviations["gen."]="genitive";
	abbreviations["dat."]="dative";
	abbreviations["nom."]="nominative";
	abbreviations["inf."]="infinitive";
	abbreviations["voc."]="vocative";
	abbreviations["esp."]="especially";
	abbreviations["constr."]="constructed";
	abbreviations["adv."]="adverb";
	abbreviations["absol."]="absolute";
	abbreviations["Plaut."]="Plautus";
	abbreviations["Cic."]="Cicero";

	function ReplaceText(text){
		console.log(abbreviations)
		for (let key in abbreviations){
			text = text.replaceAll(key, abbreviations[key]);
		}
		return text;
	}

	if (Array.isArray(item))
	{
		return (
			<div className={"subsection"}>{item.map((item, index) => <Subsection key={index} sense={item}/>)}
			</div>
		);
	}
	else {
		let newItem = ReplaceText(item)
		return (
		<div>{newItem}</div>
	);
	}

}


export default Subsection;
