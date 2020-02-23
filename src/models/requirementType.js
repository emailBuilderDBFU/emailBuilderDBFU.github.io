import {RequirementSelection} from './requirementSelection.js';

export class RequirementType {
	
	constructor(name, defaultValue) {
		this.name = name;
		this.defaultValue = defaultValue;
		this.paragraphs = [];
		this.replacementTexts = [];
		this.requirementGroups = [];
	}

	replaceText(paragraph, requirementValues){
		let returnString = paragraph;
		for (let replacementText of this.replacementTexts) {
			returnString = replacementText.replaceText(returnString, requirementValues);
		}
		return returnString;
	}

	defaultRequirementSelection() {
		return this.defaultValue;
	}
}