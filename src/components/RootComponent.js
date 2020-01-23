import React from 'react';
import $ from 'jquery';
import {Row, Col} from 'react-bootstrap';
import {TopPane} from './TopPane';
import {BottomPane} from './BottomPane';
import {TempTopic, TempRequirement, TempTopicSelection, TempRequirementSelection} from './temp-model';
import './RootComponent.css';
// import './debug.css';

export class RootComponent extends React.Component {

	static reqs = [new TempRequirement('req1'), new TempRequirement('req2'), new TempRequirement('req3'), new TempRequirement('req4')];
	static defaultProps = {
		initialTopicSelection: new TempTopicSelection([], RootComponent.reqs.map((req) => new TempRequirementSelection(req, '')))
	}

	constructor(props) {
		super(props);
		this.state = {
			availableTopics: [
				new TempTopic('Topic 1', RootComponent.reqs.slice(0, 3)),
				new TempTopic('Topic 2', RootComponent.reqs.slice(3))
			],
			topicSelection: this.props.initialTopicSelection,
			emailText: ''
		}
	}
	
	render() {
		return (
			<div className="RootComponent">
				<Row><Col>
					<TopPane
						availableTopics={this.state.availableTopics}
						topicSelection={this.state.topicSelection}
						updateTopicSelection={(topics, reqs) => this.updateTopicSelection(topics, reqs)}
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

	updateTopicSelection(topicSelection) {
		console.log('Selection updated!')
		this.setState({ topicSelection });
	}

	generateEmail() {
		let emailText = this.state.topicSelection.render();
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".BottomPane").offset().top
		}, 500);
		this.setState({ emailText });
	}

	resetEmail() {
		this.setState({
			emailText: '',
			topicSelection: this.props.initialTopicSelection

		})
	}

	updateEmailText(text) {
		this.setState({
			emailText: text
		})
	}
}