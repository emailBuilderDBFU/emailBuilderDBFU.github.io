import React from 'react';
import {TopicSelection} from './TopicSelection';

export class Topics extends React.Component {
	
	render() {
		let topics = this.props.emailCriteria.topicSelections.map((topicSel) => (
			<TopicSelection 
				key={topicSel.topic.name}
				topic={topicSel.topic}
				isSelected={topicSel.isSelected}
				subTopics={topicSel.subTopics}
				onChange={(topic, isSelected) => this.updateEmailCriteria(topic, isSelected)}
			/>
		));
		return (
			<div className="Topics">
				{topics}
			</div>
		)
	}

	updateEmailCriteria(topic, isSelected) {
		let criteria = this.props.emailCriteria.copyWithTopic(topic, isSelected);
		console.log(criteria);
		this.props.updateEmailCriteria(criteria);
	}
}