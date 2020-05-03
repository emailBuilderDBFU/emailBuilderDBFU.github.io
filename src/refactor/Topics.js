import React from 'react';
import {Categories} from './Categories';

export class Topics extends React.Component {
	
	render() {
		//loop over the topics
		let categories = this.props.emailCriteria.topicSelections.map((topicSel) => {
			console.log(topicSel);
			return (
				<Topics
					topic={topicSel.topic}
				/>
			)
		});
		return (
			<div className="Category">
				{categories}
			</div>
		)
	}
}