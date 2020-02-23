export class RequirementReplacementText  {
	
	constructor(textToReplace, requirementType) {
		this.textToReplace = textToReplace;
		this.requirementType = requirementType;
	}

	replaceText(paragraph, requirementValues){
		console.log(requirementValues);
		console.log(this);
		//for each value in requirement selections, see if that selection is replaced by the current replacement text
		let requirementValue = requirementValues.find((reqValue) => reqValue.getReplacementValue(this));
		console.log(requirementValue);
		console.log("------------BUTTS----------------");
		let value = requirementValue.getReplacementValue(this);
		return paragraph.replace(new RegExp('\\[' + this.textToReplace + '\\]', 'g'), value);
	}
}