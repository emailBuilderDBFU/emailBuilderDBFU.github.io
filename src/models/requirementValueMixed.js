import {RequirementSelection} from './requirementSelection.js';

export class RequirementValueMixed extends RequirementSelection {
	
	constructor(value, replacementText) {
		super();
		this.value = value;
		this.replacementText = replacementText;
	}

	getReplacementValue(replacementText) {
		if (this.replacementText === replacementText) {
			return this.value;
		}
	}

	getRequirementType() {
		return this.replacementText.requirementType;
	}

	getRequirementValues() {
		return this;
	}
}


