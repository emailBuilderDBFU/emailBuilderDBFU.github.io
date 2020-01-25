import React from 'react';
import {Topics} from './Topics';

export class LeftPane extends React.Component {
	
	render() {
		return (
			<div className="LeftPane">
				<Topics 
					emailCriteria={this.props.emailCriteria}
					updateEmailCriteria={this.props.updateEmailCriteria}
				/>
			</div>
		)
	}
}