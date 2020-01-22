export class TopicSelection  {
	
	constructor() {
		this.topics = [];
		this.requirementSelections = [];
	}


	addtopic(topic) {
		this.topics.push(topic);
	}

	addRequirementSelection(requirementSelection) {
		this.requirementSelections.push(requirementSelection);
	}

	render() {
		let ret = '';
		for (let topic of this.topics) {
			//only execute if the topic is the "super" topic -- the render function for Topic class will handle sub topics
			if (!topic.getSuperTopic()) {
				ret += topic.render(this.topics, this.requirementSelections);
			}
		}
		return ret;
	}

}


