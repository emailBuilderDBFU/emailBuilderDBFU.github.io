import {TopicSelection} from './topicSelection';

export class Topic {

	constructor(name, paragraph, subTopics, superTopic) {
		this.name = name;
		this.subTopics = subTopics || [];
		this.paragraphs = [];
		this.superTopic = superTopic;
	}

	render(requirementSelections) {
		// if context instance is not in the selected topic list, return empty 
		let returnString = '';
		for (let paragraph of this.paragraphs) {
			returnString += paragraph.render(requirementSelections) + '\n';
		}
		return returnString;
	}

	defaultTopicSelection() {
		let childSelections = this.subTopics.map((subTopic) => subTopic.defaultTopicSelection());
		return new TopicSelection(this, false, childSelections);
	}
}