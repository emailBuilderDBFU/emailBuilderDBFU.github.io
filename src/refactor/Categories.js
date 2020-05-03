import React from 'react';
import {Topic} from './Topic';

export class Categories extends React.Component {
	
	render() {
		//loop on the categories that came in as prop
		// create category (need new react component for this) pass in cagtegory MD instance and email crit
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