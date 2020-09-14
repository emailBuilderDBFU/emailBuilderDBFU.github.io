import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

export class CopyButton extends React.Component {
	
	render() {
		return (
			<div className="copy-button-wrapper">
				<Button onClick={() => this.props.copyEmailText()} variant="info">Copy</Button>
			</div>
		)
	}

	// copyEmailText() {

	// 	// document.getElementById('email-textarea').select();
	// 	// document.execCommand('copy');
	// }	
}