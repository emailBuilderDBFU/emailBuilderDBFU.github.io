import React from 'react';
import {Topic} from './Topic';
import { Collapse } from 'react-bootstrap';

export class Category extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
	}
	
	toggleState() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {

		let topics = this.props.category.topics.map((topic) => {
			console.log(topic);
			return (
				<Topic
					key={topic.key}
					topic={topic}
					topicSelection={topic.getTopicSelectionFromList(this.props.emailCriteria.topicSelections)}
					onChange={(topic, value) => this.updateTopicSelection(topic, value)}
				/>
			)
		});

		let carrot = this.state.isOpen ? ("fa fa-angle-down") : ("fa fa-angle-right");

		return (
			<div className="right-pane">
				<div className="category" onClick={() => this.toggleState()} >
					{this.props.category.name} &nbsp;&nbsp;&nbsp; <i className={carrot}></i>
				</div>
				<Collapse in={this.state.isOpen}>
					<div className="topics">
						{topics}
					</div>
				</Collapse>
				<hr className="small-horizontal-line"></hr>
			</div>
		)
	}

	updateTopicSelection(topic, value) {
		let selection = this.props.emailCriteria.copyWithTopic(topic, value);
		this.props.updateEmailCriteria(selection);
	}
}