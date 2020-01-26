import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

export class TopicSelection extends React.Component {
	
	render() {
		let children = this.props.children.map((topicSel) => (
			<TopicSelection 
				key={topicSel.topic.name}
				topic={topicSel.topic}
				value={topicSel.value}
				children={topicSel.children}
				onChange={(topic, value) => this.props.onChange(topic, value)}
			/>
		));
		return (
			<div className="TopicSelection">
				<Form.Group as={Row} controlId={this.props.topic.name}>
					<Col xs="2">
						<Form.Check
							value={this.props.value} 
							checked={this.props.value}
							onChange={(ev) => this.valueUpdated(ev)} 
						/>
					</Col>
					<Form.Label column xs="9">
						{this.props.topic.name}
					</Form.Label>
				</Form.Group>
				<Row className="TopicSelectionChildren">
					<Col xs={{offset: 1, span: 11}}>
						{children}
					</Col>
				</Row>
			</div>
		)
	}

	valueUpdated(ev) {
		console.log(this.props.topic);
		console.log(ev.target.checked);
		this.props.onChange(this.props.topic, ev.target.checked);
	}
}