export class RequirementSelection  {

	getReplacementValue(replacementText) {
		return null;
	}

	static defaultForRequirement(requirement) {
		return new RequirementSelection(requirement, []);
	}

	getRequirementValues() {
		//override on sub classes
		return null;
	}
}