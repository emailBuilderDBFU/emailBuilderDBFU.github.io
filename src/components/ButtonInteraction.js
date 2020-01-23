import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

export class ButtonInteraction extends React.Component {
	
	render() {
		return (
			<div className="ButtonInteraction">
				<Row>
					<Col xs={{ offset: 2, span: 2 }}>
						<Button onClick={() => this.props.generateEmail()} variant="primary">Generate</Button>
					</Col>
					<Col xs={{ offset: 4, span: 2 }}>
						<Button onClick={() => this.props.resetEmail()} variant="danger">Reset</Button>
					</Col>
				</Row>
			</div>
		)
	}
}