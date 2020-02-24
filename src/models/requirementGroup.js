import {RequirementValueMetadata} from './requirementValueMetadata.js';

export class RequirementGroup {
	
	constructor(name, requirementType) {
		this.name = name;
		this.requirementType = requirementType;
		this.requirementValueMetadatas = [];
	}

	getReplacementValue(replacementText) {
		for (let reqVal of this.requirementValueMetadatas) {
			if (reqVal.getReplacementValue(replacementText)) {
				return reqVal.getReplacementValue(replacementText);
			}
		}
	}

	static parse(reqType, reqGroupJSON) {
		let name = reqGroupJSON.name;
		let ret = new RequirementGroup(name, reqType);
		ret.requirementValueMetadatas = reqGroupJSON.requirementValues.map((reqValJSON) => RequirementValueMetadata.parse(ret, reqValJSON));
		return ret;
	}
}
