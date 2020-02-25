import React from 'react';
import {GroupRequirementSelection} from './GroupRequirementSelection';
import {AuditedRequirementSelection} from './AuditedRequirementSelection';
import {RequirementGroupSelection} from '../models/requirementGroupSelection';

export class Requirements extends React.Component {
	
	render() {
		let reqSels = this.props.emailCriteria.requirementSelections.map((reqSel) => {
			console.log(reqSel);
			if (reqSel instanceof RequirementGroupSelection) {
				return(
					<GroupRequirementSelection 
						key={reqSel.getRequirementType().name}
						requirement={reqSel.getRequirementType()}
						value={reqSel.requirementGroup}
						possibleValues={reqSel.requirementType.requirementGroups}
						onChange={(req, value) => this.updateRequirementSelection(req, value)}
					/>
				)
			}	else {
				return(
					<AuditedRequirementSelection 
						key={reqSel.getRequirementType().name}
						requirement={reqSel.getRequirementType()}
						value={reqSel.value}
						onChange={(req, value) => this.updateRequirementSelection(req, value)}
					/>
				)
			}
		});
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