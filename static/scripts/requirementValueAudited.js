import {RequirementValueMixed} from './requirementValueMixed.js';

export class RequirementValueAudited extends RequirementValueMixed {
	
	constructor(value) {
		super(value);
		this.requirementReplacementText = null;
	}

}


