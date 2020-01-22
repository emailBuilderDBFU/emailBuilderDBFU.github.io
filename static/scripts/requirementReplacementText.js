export class RequirementReplacementText  {
	
	constructor(textToReplace) {
		this.textToReplace = textToReplace;
		this.requirementType = null;
	}

	setRequirementType(requirementType) {
		this.requirementType = requirementType;
	}

	replaceText(paragraph, requirementSelections){
		//for each value in requirement selections, see if that selection is replaced by the current replacement text
		let value = requirementSelections.find((reqSel) => reqSel.getReplacementValue(this)).getReplacementValue(this);
		return paragraph.replace(new RegExp('\\[' + this.textToReplace + '\\]', 'g'), value);
	}

}

