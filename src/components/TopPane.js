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
							emailCriteria={this.props.emailCriteria}
							updateEmailCriteria={this.props.updateEmailCriteria}
						/>
					</Col>
					<div className="vertical-line"></div>
					<Col>
						<RightPane
							emailCriteria={this.props.emailCriteria}
							updateEmailCriteria={this.props.updateEmailCriteria}
							generateEmail={this.props.generateEmail}
							resetEmail={this.props.resetEmail}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}