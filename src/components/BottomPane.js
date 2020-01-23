import React from 'react';
import {EmailEditor} from './EmailEditor';

export class BottomPane extends React.Component {
	
	render() {
		return (
			<div className="BottomPane">
				<EmailEditor
					emailText={this.props.emailText}
					updateEmailText={this.props.updateEmailText}
				/>
			</div>
		)
	}
}