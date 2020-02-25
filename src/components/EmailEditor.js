import React from 'react';
import {Form} from 'react-bootstrap';

export class EmailEditor extends React.Component {
	
	render() {
		return (
			<div className="EmailEditor">
				<Form.Control 
					as="textarea" 
					id="email-textarea"
					value={this.props.emailText}
					onChange={(ev) => this.handleChange(ev)}
				/>
			</div>
		)
	}

	handleChange(ev) {
		this.props.updateEmailText(ev.target.value);
	}
}