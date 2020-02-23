import {RequirementSelection} from './requirementSelection.js';

export class RequirementGroupSelection extends RequirementSelection {
	
	constructor(requirementType, requirementGroup, emailCriteria) {
		super(emailCriteria);
		this.requirementType = requirementType;
		this.requirementGroup = requirementGroup;
	}

	getRequirementValues() {
		return this.requirementGroup.requirementValueMetadatas;
	}
}