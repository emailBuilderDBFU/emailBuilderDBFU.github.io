import React from 'react';

export class RequirementSelection extends React.Component {
	
	render() {
		let reqs = this.props.availableRequirements.map((req) => (
			<p key={req.name} onClick={(ev) => this.requirementClicked(req, ev)}>{req.name}</p>
		));
		return (
			<div className="RequirementSelection">
				{reqs}
			</div>
		)
	}

	requirementClicked(req, ev) {
		let value = "New Value!";
		let selection = this.props.topicSelection.copyWithReq(req, value);
		console.log(selection);
		this.props.updateTopicSelection(selection);
	}
}