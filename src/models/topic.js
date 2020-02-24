import {TopicSelection} from './topicSelection.js';
import {Paragraph} from './paragraph.js'

export class Topic {

	constructor(name, superTopic) {
		this.name = name;
		this.superTopic = superTopic;
		this.subTopics = [];
		this.paragraphs = [];
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

	static parse(topicJSON, superTopic, allRequirementTypes) {
		let name = topicJSON.name;
		let topic = new Topic(name);
		topic.paragraphs = topicJSON.paragraphs.map((paragraphJSON) => Paragraph.parse(paragraphJSON, topic, allRequirementTypes));
		topic.subTopics = topicJSON.subTopics.map((subTopicJSON) => Topic.parse(subTopicJSON, topic, allRequirementTypes));
		return topic;
	}
}