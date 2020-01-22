import {RequirementSelection} from './requirementSelection.js';

export class RequirementValueMixed extends RequirementSelection {
	
	constructor(name) {
		super(name);
		this.replacementText = null;
	}

	setReplacementText(replacementText) {
		this.replacementText = replacementText;
	}

	getReplacementValue(replacementText) {
		if (this.replacementText == replacementText) {
			return this.name;
		}
	}

}


