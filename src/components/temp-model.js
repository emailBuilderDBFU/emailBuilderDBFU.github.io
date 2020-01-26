export class TempTopic {
	constructor(name, requirements, children) {
		this.name = name;
		this.requirements = requirements || [];
		this.children = children || [];
	}

	getRequirements() {
		return this.requirements;
	}

	render() {
		return this.name;
	}
}

export class TempRequirement {
	constructor(name, children) {
		this.name = name;
	}

	render() {
		return this.name;
	}
}

export class TempEmailCriteria {
	constructor(topicSelections, requirementSelections) {
		this.topicSelections = topicSelections || [];
		this.requirementSelections = requirementSelections || [];
	}

	copyWithTopic(topic, value) {
		let topicSels = this.topicSelections.map((el) => el.copyWithValue(topic, value));
		return new TempEmailCriteria(topicSels, this.requirementSelections);
	}

	copyWithRequirement(req, value) {
		let reqSels = this.requirementSelections.map((el) => el.requirement === req ? el.copyWithValue(value) : el);
		return new TempEmailCriteria(this.topicSelections, reqSels);
	}

	render() {
		let ret = '';
		for (let topicSel of this.topicSelections) {
			ret += '\n' + topicSel.render();
		}
		for (let reqSel of this.requirementSelections) {
			ret += '\n' + reqSel.render();
		}
		return ret;
	}

	static defaultForTopicsAndRequirements(topics, requirements) {
		return new TempEmailCriteria(
			topics.map((topic) => TempTopicSelection.defaultForTopic(topic)),
			reqs.map((req) => TempRequirementSelection.defaultForRequirement(req))
		)
	}
}

export class TempTopicSelection {
	constructor(topic, value, children) {
		this.topic = topic;
		this.value = value;
		this.children = children || [];
	}

	copyWithValue(topic, value) {
		if (this.topic === topic) {
			return new TempTopicSelection(this.topic, value, this.children);	
		} else {
			let children = this.children.map((el) => el.copyWithValue(topic, value))
			return new TempTopicSelection(this.topic, this.value, children);
		}
		
	}

	render(indent=0) {
		let ret = '\t'.repeat(indent);
		ret += this.topic.render() + ': ' + this.value;
		for (let child of this.children) {
			ret += '\n' + child.render(indent+1);
		}
		return ret;
	}

	static defaultForTopic(topic) {
		return new TempTopicSelection(topic, false, topic.children.map((child) => TempTopicSelection.defaultForTopic(child)));
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

	static defaultForRequirement(requirement) {
		return new TempRequirementSelection(requirement, '');
	}
}

let reqs = [new TempRequirement('req1'), new TempRequirement('req2'), new TempRequirement('req3'), new TempRequirement('req4')];
let topics = [
	new TempTopic('Topic 1', reqs.slice(0, 3), [
		new TempTopic('Topic 1-A', reqs.slice(0), [
			new TempTopic('Topic 1-A-I'),
			new TempTopic('Topic 1-A-II'),
			new TempTopic('Topic 1-A-III'),
		]),
		new TempTopic('Topic 1-B', reqs.slice(0), [
			new TempTopic('Topic 1-B-I'),
			new TempTopic('Topic 1-B-II')
		]),

	]), 
	new TempTopic('Topic 2', reqs.slice(3)),
	new TempTopic('Topic 3', [], [
		new TempTopic('Topic 3-A-I'),
		new TempTopic('Topic 3-A-II')
	]),
	new TempTopic('Topic 4', [], [
		new TempTopic('Topic 4-A-I'),
		new TempTopic('Topic 4-A-II')
	]),
];
export let defaultEmailCriteria = TempEmailCriteria.defaultForTopicsAndRequirements(topics, reqs);
