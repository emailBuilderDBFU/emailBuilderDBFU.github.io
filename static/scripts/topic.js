export class Topic {

	constructor(name) {
		this.name = name;
		this.subTopics = [];
		this.paragraphs = [];
		this.superTopic = null;

	}

	addSubtopic(topic) {
		this.subTopics.push(topic);
	}

	setSuperTopic(topic) {
		this.superTopic = topic;
	}

	getSuperTopic() {
		return this.superTopic;
	}

	addParagraph(paragraph) {
		this.paragraphs.push(paragraph);
	}


	render(selectedTopics, requirementSelections) {
		// if context instance is not in the selected topic list, return empty 
		if (selectedTopics.indexOf(this) == -1) return '';
		let returnString = '';
		for (let paragraph of this.paragraphs) {
			returnString += paragraph.render(requirementSelections) + '\n';
		}
		for (let subTopic of this.subTopics) {
			returnString += subTopic.render(selectedTopics, requirementSelections);
		}
		return returnString;
	}
}