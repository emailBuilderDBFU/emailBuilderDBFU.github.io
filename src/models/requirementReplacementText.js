export class RequirementReplacementText  {
	
	constructor(textToReplace, requirementType) {
		this.textToReplace = textToReplace;
		this.requirementType = requirementType;
	}

	replaceText(paragraph, requirementValues){
		//for each value in requirement selections, see if that selection is replaced by the current replacement text
		let requirementValue = requirementValues.find((reqValue) => reqValue.getReplacementValue(this));
		let value = requirementValue.getReplacementValue(this);
		return paragraph.replace(new RegExp('\\[' + this.textToReplace + '\\]', 'g'), value);
	}

	static parse(reqType, repTextJSON) {
		let textToReplace = repTextJSON.text;
		return new RequirementReplacementText(textToReplace, reqType);
	}
}