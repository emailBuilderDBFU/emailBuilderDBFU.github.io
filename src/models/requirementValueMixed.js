import {RequirementSelection} from './requirementSelection.js';

export class RequirementValueMixed extends RequirementSelection {
	
	constructor(value, replacementText, emailCriteria) {
		super(emailCriteria);
		this.value = value;
		this.replacementText = replacementText;
	}

	getReplacementValue(replacementText) {
		if (this.replacementText == replacementText) {
			return this.value;
		}
	}

	getRequirementValues() {
		return this;
	}
}


