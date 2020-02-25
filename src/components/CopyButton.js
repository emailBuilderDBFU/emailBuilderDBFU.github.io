import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

export class CopyButton extends React.Component {
	
	render() {
		return (
			<div className="CopyButton">
				<Row>
					<Col xs={{ offset: 5, span: 2 }}>
						<Button onClick={() => this.copyEmailText()} variant="success">Copy</Button>
					</Col>
				</Row>
			</div>
		)
	}

	copyEmailText() {
		document.getElementById('email-textarea').select();
		document.execCommand('copy');
	}	
}