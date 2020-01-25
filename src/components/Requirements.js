import React from 'react';
import {RequirementSelection} from './RequirementSelection';

export class Requirements extends React.Component {
	
	render() {
		let reqSels = this.props.emailCriteria.requirementSelections.map((reqSel) => (
			<RequirementSelection 
				key={reqSel.requirement.name}
				requirement={reqSel.requirement}
				value={reqSel.value}
				onChange={(req, value) => this.updateRequirementSelection(req, value)}
			/>
		));
		return (
			<div className="Requirements">
				{reqSels}
			</div>
		)
	}

	updateRequirementSelection(req, value) {
		let selection = this.props.emailCriteria.copyWithRequirement(req, value);
		this.props.updateEmailCriteria(selection);
	}
}