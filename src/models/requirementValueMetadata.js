import {RequirementValueMixed} from './requirementValueMixed.js';

export class RequirementValueMetadata extends RequirementValueMixed {
	
	constructor(value, requirementGroup, replacementText) {
		super(value, replacementText);
		this.requirementGroup = requirementGroup;
	}

	static parse(reqGroup, reqValJSON) {
		let replacementText = reqGroup.requirementType.replacementTexts.find((repText) => repText.textToReplace === reqValJSON.replacementText);
		let value = reqValJSON.value;
		return new RequirementValueMetadata(value, reqGroup, replacementText);
	}

}


