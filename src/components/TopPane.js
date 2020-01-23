import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {LeftPane} from './LeftPane';
import {RightPane} from './RightPane';

export class TopPane extends React.Component {
	
	render() {
		return (
			<div className="TopPane">
				<Row>
					<Col>
						<LeftPane
							availableTopics={this.props.availableTopics}
							topicSelection={this.props.topicSelection}
							updateTopicSelection={this.props.updateTopicSelection}
						/>
					</Col>
					<Col>
						<RightPane
							availableTopics={this.props.availableTopics}
							topicSelection={this.props.topicSelection}
							updateTopicSelection={this.props.updateTopicSelection}
							generateEmail={this.props.generateEmail}
							resetEmail={this.props.resetEmail}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}