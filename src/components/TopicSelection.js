import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

export class TopicSelection extends React.Component {
	
	render() {
		let subTopics = this.props.subTopics.map((topicSel) => (
			<TopicSelection 
				key={topicSel.topic.name}
				topic={topicSel.topic}
				isSelected={topicSel.isSelected}
				subTopics={topicSel.subTopics}
				onChange={(topic, isSelected) => this.props.onChange(topic, isSelected)}
			/>
		));
		return (
			<div className="TopicSelection">
				<Form.Group as={Row} controlId={this.props.topic.name}>
					<Col xs="2">
						<Form.Check
							value={this.props.isSelected}
							checked={this.props.isSelected}
							onChange={(ev) => this.valueUpdated(ev)} 
						/>
					</Col>
					<Form.Label column xs="9">
						{this.props.topic.name}
					</Form.Label>
				</Form.Group>
				<Row className="TopicSelectionSubTopics">
					<Col xs={{offset: 1, span: 11}}>
						{subTopics}
					</Col>
				</Row>
			</div>
		)
	}

	valueUpdated(ev) {
		this.props.onChange(this.props.topic, ev.target.checked);
	}
}