import React from 'react';
import {Category} from './Category';

export class LeftPane extends React.Component {
	
	render() {
		// loop over the categories and pass as props
		let categories = this.props.categories.map((category) => {
			return (
				<Category
					category={category}
					emailCriteria={this.props.emailCriteria}
					updateEmailCriteria={this.props.updateEmailCriteria}
				/>
			)
		})
		return (
			<div className="LeftPane">
				{categories}
			</div>
		)
	}
}