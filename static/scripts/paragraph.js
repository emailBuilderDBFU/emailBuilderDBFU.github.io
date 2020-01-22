export class Paragraph {
	
	constructor(text) {
		this.text = text;
		this.topic = null;
		this.requirementTypes = [];
	}

	setTopic(topic) {
		this.topic = topic;
	}

	addRequirementType(requirementType) {
		this.requirementTypes.push(requirementType);
	}

	render(requirementSelections){
		let returnParagraph = this.text;
		for (let requirementType of this.requirementTypes) {
			returnParagraph = requirementType.replaceText(returnParagraph, requirementSelections)
		}
		return returnParagraph;
	}

}
