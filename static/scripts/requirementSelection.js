export class RequirementSelection  {
	
	constructor(name) {
		this.name = name;
		this.topicSelection = null;
	}

	setTopicSelection(TopicSelection) {
		this.TopicSelection = TopicSelection;
	}

	getReplacementValue(replacementText) {
		return null;
	}

}
