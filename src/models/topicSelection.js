export class TopicSelection {
	
	constructor(topic, isSelected, subTopics, superTopic) {
		this.topic = topic;
		this.isSelected = isSelected;
		this.subTopics = subTopics || [];
		this.superTopic = superTopic || null;
	}

	render(requirementSelections) {
		if (!this.isSelected) return '';
		let returnString = this.topic.render(requirementSelections);
		for (let subTopic of this.subTopics) {
			returnString += subTopic.render(requirementSelections);
		}
		return returnString;
	}

	copyWithValue(topic, isSelected) {
		if (this.topic === topic) {
			return new TopicSelection(this.topic, isSelected, this.subTopics);	
		} else {
			let subTopics = this.subTopics.map((el) => el.copyWithValue(topic, isSelected))
			return new TopicSelection(this.topic, this.isSelected, subTopics);
		}
		
	}
}


