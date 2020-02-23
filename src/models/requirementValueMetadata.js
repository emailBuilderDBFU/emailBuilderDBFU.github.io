import {RequirementValueMixed} from './requirementValueMixed.js';

export class RequirementValueMetadata extends RequirementValueMixed {
	
	constructor(value, requirementGroup, replacementText, emailCriteria) {
		super(value, replacementText, emailCriteria);
		this.requirementGroup = requirementGroup;
	}

}


