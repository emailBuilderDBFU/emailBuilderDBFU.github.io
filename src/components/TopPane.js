import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Requirements} from './Requirements';
import {ButtonInteraction} from './ButtonInteraction';
import {Category} from './Category';

export class TopPane extends React.Component {
	
	render() {
		let categories = this.props.categories.map((category) => {
			return (
				<Category
					category={category}
					emailCriteria={this.props.emailCriteria}
					updateEmailCriteria={this.props.updateEmailCriteria}
				/>
			)
		})
		return (
			<div className="TopPane">
				<Row>
					<Col>
						<div className="LeftPane">
							{categories}
						</div>
					</Col>
					<div className="vertical-line"></div>
					<Col>
						<div className="RightPane">
							<Row><Col>
								<Requirements
									emailCriteria={this.props.emailCriteria}
									updateEmailCriteria={this.props.updateEmailCriteria}
								/>
							</Col></Row>
							<Row><Col>
								<ButtonInteraction
									generateEmail={this.props.generateEmail}
									resetEmail={this.props.resetEmail}
								/>
							</Col></Row>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}