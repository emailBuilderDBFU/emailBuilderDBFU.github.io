import React from 'react';
import {TopicSelection} from './TopicSelection';

export class Topics extends React.Component {
	
	render() {
		let topics = this.props.emailCriteria.topicSelections.map((topicSel) => (
			<TopicSelection 
				key={topicSel.topic.name}
				topic={topicSel.topic}
				value={topicSel.value}
				children={topicSel.children}
				onChange={(topic, value) => this.updateEmailCriteria(topic, value)}
			/>
		));
		return (
			<div className="Topics">
				{topics}
			</div>
		)
	}

	updateEmailCriteria(topic, value) {
		let selection = this.props.emailCriteria.copyWithTopic(topic, value);
		this.props.updateEmailCriteria(selection);
	}
}