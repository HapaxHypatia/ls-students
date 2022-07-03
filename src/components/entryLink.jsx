import React from "react";
import data from "../data/ls_A.json";

function EntryLink(term) {
	const entry = data.find(entry => entry.key === term)
	return (
		<div>
			<a></a>
		</div>
	);
}

export default EntryLink;