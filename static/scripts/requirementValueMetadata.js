import {RequirementValueMixed} from './requirementValueMixed.js';

export class RequirementValueMetadata extends RequirementValueMixed {
	
	constructor(name) {
		super(name);
		this.requirementGroup = null;
	}

	setRequirementGroup(requirementGroup) {
		this.requirementGroup = requirementGroup;
	}

}


