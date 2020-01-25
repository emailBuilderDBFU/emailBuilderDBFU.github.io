import React from 'react';
import {RequirementSelection} from './RequirementSelection';

export class Requirements extends React.Component {
	
	render() {
		let reqs = this.props.topicSelection.requirementSelections.map((reqSel) => (
			<RequirementSelection 
				key={reqSel.requirement.name}
				requirement={reqSel.requirement}
				value={reqSel.value}
				onChange={(req, value) => this.updateRequirementSelection(req, value)}
			/>
		));
		return (
			<div className="Requirements">
				{reqs}
			</div>
		)
	}

	updateRequirementSelection(req, value) {
		let selection = this.props.topicSelection.copyWithRequirement(req, value);
		this.props.updateTopicSelection(selection);
	}
}