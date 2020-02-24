import {RequirementType} from './requirementType.js'

export class Paragraph {
	
	constructor(text, topic, requirementTypes) {
		this.text = text;
		this.topic = topic;
		this.requirementTypes = requirementTypes;
	}

	render(requirementSelections){
		let returnParagraph = this.text;
		for (let requirementType of this.requirementTypes) {
			returnParagraph = requirementType.replaceText(returnParagraph, requirementSelections)
		}
		return returnParagraph;
	}

	static parse(paragraphsJSON, topic, allRequirementTypes){
		let text = paragraphsJSON.text;
		let requirementTypes = paragraphsJSON.requirementTypes.map((reqTypeName) => allRequirementTypes.find((requirementType) => requirementType.name == reqTypeName));
		return new Paragraph(text, topic, requirementTypes);
	}
}