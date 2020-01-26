import React from 'react';
import $ from 'jquery';
import {Row, Col} from 'react-bootstrap';
import {TopPane} from './TopPane';
import {BottomPane} from './BottomPane';
import {defaultEmailCriteria} from './temp-model';
import './RootComponent.css';
// import './debug.css';

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
				<Row><Col>
					<TopPane
						emailCriteria={this.state.emailCriteria}
						updateEmailCriteria={(emailCriteria) => this.updateEmailCriteria(emailCriteria)}
						generateEmail={() => this.generateEmail()}
						resetEmail={() => this.resetEmail()}
					/>
				</Col></Row>
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
		console.log('Selection updated!');
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