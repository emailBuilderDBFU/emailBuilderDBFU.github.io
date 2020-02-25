import {RequirementValueMixed} from './requirementValueMixed.js';

export class RequirementValueAudited extends RequirementValueMixed {

	copyWithValue(value){
		return new RequirementValueAudited(value, this.replacementText);
	}
}
