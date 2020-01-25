export class TempTopic {
	constructor(name, requirements) {
		this.name = name;
		this.requirements = requirements;
	}

	getRequirements() {
		return this.requirements;
	}

	render() {
		return this.name;
	}
}

export class TempRequirement {
	constructor(name) {
		this.name = name;
	}

	render() {
		return this.name;
	}
}

export class TempTopicSelection {
	constructor(topics, requirementSelections) {
		this.topics = topics;
		this.requirementSelections = requirementSelections;
	}

	copyWithRequirement(req, value) {
		let reqSels = this.requirementSelections.map((el) => el.requirement === req ? el.copyWithValue(value) : el);
		return new TempTopicSelection(this.topics, reqSels);
	}

	render() {
		let ret = this.topics.map((topic) => topic.render()).join(', ');
		for (let reqSel of this.requirementSelections) {
			ret += '\n' + reqSel.render();
		}
		return ret;
	}
}

export class TempRequirementSelection {
	constructor(requirement, value) {
		this.requirement = requirement;
		this.value = value;
	}

	copyWithValue(value) {
		return new TempRequirementSelection(this.requirement, value);
	}

	render() {
		return this.requirement.render() + ": " + this.value;
	}
}