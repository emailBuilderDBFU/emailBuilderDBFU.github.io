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
}