export class EmailCriteria  {
	
	constructor(topicSelections, requirementSelections) {
		this.topicSelections = topicSelections;
		this.requirementSelections = requirementSelections;
	}

	render() {
		let ret = '';
		let requirementValues = this.requirementSelections.flatMap((requirementSelection) => {
			return requirementSelection.getRequirementValues()
		});
		for (let topicSelection of this.topicSelections) {
			//only execute if the topic is the "super" topic -- the render function for Topic class will handle sub topics
			if (!topicSelection.superTopic) {
				ret += topicSelection.render(requirementValues);
			}
		}
		return ret;
	}

	copyWithTopic(topic, isSelected) {
		let topicSels = this.topicSelections.map((el) => el.copyWithValue(topic, isSelected));
		return new EmailCriteria(topicSels, this.requirementSelections);
	}

	static defaultForTopicsAndRequirements(topics, requirementTypes) {
		return new EmailCriteria(
			topics.map((topic) => topic.defaultTopicSelection()),
			requirementTypes.map((requirementType) => requirementType.defaultRequirementSelection())
		)
	}
}