export class RequirementGroup {
	
	constructor(name, requirementType) {
		this.name = name;
		this.requirementType = requirementType;
		this.requirementValueMetadatas = [];
	}

	getReplacementValue(replacementText) {
		for (let reqVal of this.requirementValueMetadatas) {
			if (reqVal.getReplacementValue(replacementText)) {
				return reqVal.getReplacementValue(replacementText);
			}
		}
	}
}
