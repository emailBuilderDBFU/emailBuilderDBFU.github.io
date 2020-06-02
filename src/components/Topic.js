import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

export class Topic extends React.Component {

	render() {

		let isSelected = this.props.topicSelection && this.props.topicSelection.isSelected;

		return (
			<div className="topic-selection">
				<Form.Group as={Row} controlId={this.props.topic.key}>
					<Col xs="1">
						<Form.Check
							value={isSelected}
							checked={isSelected}
							onChange={(ev) => this.updateTopicSelection(ev)} 
						/>
					</Col>
					<Form.Label column xs="9">
						{this.props.topic.name}
					</Form.Label>
				</Form.Group>
			</div>
		)
	}

	updateEmailCriteria(topic, isSelected) {
		let criteria = this.props.emailCriteria.copyWithTopic(topic, isSelected);
		this.props.updateEmailCriteria(criteria);
	}

	updateTopicSelection(ev) {
		this.props.onChange(this.props.topic, ev.target.checked);
	}
}