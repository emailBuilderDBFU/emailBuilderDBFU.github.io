export class RequirementType {
	
	constructor(name) {
		this.name = name;
		this.paragraphs = [];
		this.replacementTexts = [];
	}

	addParagraph(paragraph) {
		this.paragraphs.push(paragraph);
	}

	addReplacementText(replacementText) {
		this.replacementTexts.push(replacementText);
	}

	replaceText(paragraph, requirementSelections){
		let returnString = paragraph;
		for (let replacementText of this.replacementTexts) {
			returnString = replacementText.replaceText(returnString, requirementSelections);
		}
		return returnString;
	}
}


