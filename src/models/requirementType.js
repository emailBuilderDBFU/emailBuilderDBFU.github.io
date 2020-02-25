import {RequirementGroup} from './requirementGroup.js';
import {RequirementReplacementText} from './requirementReplacementText.js';
import {RequirementValueAudited} from './requirementValueAudited.js'
import {RequirementGroupSelection} from './requirementGroupSelection.js';

export class RequirementType {
	
	constructor(name) {
		this.name = name;
		this.defaultValue = null;
		this.replacementTexts = [];
		this.requirementGroups = [];
		this.paragraphs = [];
	}

	replaceText(paragraph, requirementValues){
		let returnString = paragraph;
		for (let replacementText of this.replacementTexts) {
			returnString = replacementText.replaceText(returnString, requirementValues);
		}
		return returnString;
	}

	defaultRequirementSelection() {
		return this.requirementGroups.length === 0 ? new RequirementValueAudited(this.defaultValue, this.replacementTexts[0]) : new RequirementGroupSelection(this, this.defaultValue);
	}

	static parse(reqTypeJSON) {
		let name = reqTypeJSON.name;
		let ret = new RequirementType(name);
		ret.replacementTexts = reqTypeJSON.requirementReplacementTexts.map((repTextJSON) => RequirementReplacementText.parse(ret, repTextJSON));
		ret.requirementGroups = reqTypeJSON.requirementGroups.map((reqGroupJSON) => RequirementGroup.parse(ret, reqGroupJSON));
		ret.defaultValue = (ret.requirementGroups.length === 0) ? reqTypeJSON.defaultValue : ret.requirementGroups.find((group) => group.name === reqTypeJSON.defaultValue);
		return ret;
	}
}