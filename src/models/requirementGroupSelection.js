import {RequirementSelection} from './requirementSelection.js';

export class RequirementGroupSelection extends RequirementSelection {
	
	constructor(requirementType, requirementGroup) {
		super();
		this.requirementType = requirementType;
		this.requirementGroup = requirementGroup;
	}

	getRequirementValues() {
		return this.requirementGroup.requirementValueMetadatas;
	}

	getRequirementType() {
		return this.requirementType;
	}

	copyWithValue(value){
		return new RequirementGroupSelection(this.requirementType, value);
	}
}