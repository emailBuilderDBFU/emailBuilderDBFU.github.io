import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

export class ButtonInteraction extends React.Component {
	
	render() {
		return (
			<div className="ButtonInteraction">
				<Row>
					<Col xs={{ offset: 2, span: 2 }}>
						<Button onClick={() => this.props.generateEmail()} className="GenerateButton">Build It</Button>
					</Col>
					<Col xs={{ offset: 4, span: 2 }}>
						<Button onClick={() => this.props.resetEmail()} className="ResetButton">Reset</Button>
					</Col>
				</Row>
			</div>
		)
	}
}