import {RequirementValueMixed} from './requirementValueMixed.js';

export class RequirementValueAudited extends RequirementValueMixed {
	
	constructor(value, replacementText, emailCriteria) {
		super(value, replacementText, null);
		this.emailCriteria = null;
	}
}
