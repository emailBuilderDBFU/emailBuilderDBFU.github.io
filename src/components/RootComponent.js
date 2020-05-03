import React from 'react';
import $ from 'jquery';
import {Row, Col} from 'react-bootstrap';
import {TopPane} from './TopPane';
import {BottomPane} from './BottomPane';
import {defaultEmailCriteria, categories, requirementTypes} from '../metadata/index.js';
import './RootComponent.css';

export class RootComponent extends React.Component {

	static defaultProps = {
		initialEmailCriteria: defaultEmailCriteria
	}

	constructor(props) {
		super(props);
		this.state = {
			emailCriteria: this.props.initialEmailCriteria,
			emailText: ''
		}
	}
	
	render() {
		return (
			<div className="RootComponent">
				<Row className="header">
					<Col><h1>Email Builder</h1></Col>
				</Row>
				<Row><Col>
				{/* pass categories and req types as props */}
					<TopPane
						categories={categories}
						emailCriteria={this.state.emailCriteria}
						updateEmailCriteria={(emailCriteria) => this.updateEmailCriteria(emailCriteria)}
						generateEmail={() => this.generateEmail()}
						resetEmail={() => this.resetEmail()}
					/>
				</Col></Row>
				<div className="horizontal-line"></div>
				<Row><Col>
					<BottomPane
						emailText={this.state.emailText}
						updateEmailText={(text) => this.updateEmailText(text)}
					/>
				</Col></Row>
			</div>
		)
	}

	updateEmailCriteria(emailCriteria) {
		this.setState({ emailCriteria });
	}

	generateEmail() {
		let emailText = this.state.emailCriteria.render();
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".BottomPane").offset().top
		}, 500);
		this.setState({ emailText });
	}

	resetEmail() {
		this.setState({
			emailText: '',
			emailCriteria: this.props.initialEmailCriteria
		})
	}

	updateEmailText(text) {
		this.setState({
			emailText: text
		})
	}
}