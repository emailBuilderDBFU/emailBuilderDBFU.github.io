import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Requirements} from './Requirements';
import {ButtonInteraction} from './ButtonInteraction';

export class RightPane extends React.Component {
	
	render() {
		return (
			<div className="RightPane">
				<Row><Col>
					<Requirements
						topicSelection={this.props.topicSelection}
						updateTopicSelection={this.props.updateTopicSelection}
					/>
				</Col></Row>
				<Row><Col>
					<ButtonInteraction
						generateEmail={this.props.generateEmail}
						resetEmail={this.props.resetEmail}
					/>
				</Col></Row>
			</div>
		)
	}
}