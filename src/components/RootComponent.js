import React from 'react';
import $ from 'jquery';
import {Row, Col} from 'react-bootstrap';
import {TopPane} from './TopPane';
import {BottomPane} from './BottomPane';
import {defaultEmailCriteria, categories} from '../metadata/index.js';
import './RootComponent.css';

export class RootComponent extends React.Component {

	static defaultProps = {
		initialEmailCriteria: defaultEmailCriteria
	}

	constructor(props) {
		super(props);
		this._bottomPane = React.createRef();
		this.state = {
			emailCriteria: this.props.initialEmailCriteria,
			// emailText: ''
		}
	}
	
	render() {
		return (
			<div className="RootComponent">
				<div className="Header">
					<Row className="Title">
						<Col><h2>email builder</h2></Col>
					</Row>
					<Row className="Slogan">
						<Col><h3>helping people write emails</h3></Col>
					</Row>
				</div>
				<Row><Col>
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
						ref={this._bottomPane}
						copyEmailText={(text) => this.copyEmailText(text)}
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
		// this.setState({ emailText });
		this._bottomPane.current.updateRichText(emailText);
	}

	resetEmail() {
		this.setState({
			emailCriteria: this.props.initialEmailCriteria
		});
		this._bottomPane.current.updateRichText('');
	}

	copyEmailText(text) {
		// copy(text, {format: 'text/html'});
		const textAreaSelector = '.DraftEditor-root *[data-contents="true"]';
		if (document.selection) { // IE
	        let range = document.body.createTextRange();
	        range.moveToElementText(document.querySelector(textAreaSelector));
	        range.select();
	    } else if (window.getSelection) {
	        let range = document.createRange();
	        range.selectNode(document.querySelector(textAreaSelector));
	        window.getSelection().removeAllRanges();
	        window.getSelection().addRange(range);
	    }
	    setTimeout(() => document.execCommand('copy'), 500);
	}
}



