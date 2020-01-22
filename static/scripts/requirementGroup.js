import {RequirementSelection} from './requirementSelection.js';

export class RequirementGroup extends RequirementSelection {
	
	constructor(name) {
		super(name);
		this.requirementValueMetadatas = [];
	}

	addRequirementValueMetadata(requirementValueMetadata) {
		this.requirementValueMetadatas.push(requirementValueMetadata);
	}

	getReplacementValue(replacementText) {
		for (let reqVal of this.requirementValueMetadatas) {
			if (reqVal.getReplacementValue(replacementText)) {
				return reqVal.getReplacementValue(replacementText);
			}
		}
	}
}


