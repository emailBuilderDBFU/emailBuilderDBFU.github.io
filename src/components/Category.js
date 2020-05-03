import React from 'react';
import {Topic} from './Topic';

export class Category extends React.Component {
	
	render() {

		let topics = this.props.category.topics.map((topic) => {
			return (
				<Topic
					key={topic.name}
					topic={topic}
					topicSelection={topic.getTopicSelectionFromList(this.props.emailCriteria.topicSelections)}
					onChange={(topic, value) => this.updateTopicSelection(topic, value)}
				/>
			)
		});

		return (
			<div >
				<div className="Category">
					{this.props.category.name}
				</div>
				<div className="Topics">
					{topics}
				</div>
			</div>
		)
	}

	updateTopicSelection(topic, value) {
		let selection = this.props.emailCriteria.copyWithTopic(topic, value);
		this.props.updateEmailCriteria(selection);
	}
}