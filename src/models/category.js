import {Topic} from './topic.js';

export class Category {

	constructor(name) {
		this.name = name;
		this.topics = [];
	}

	static parse(categoryJSON, allRequirementTypes) {
		let name = categoryJSON.name;
		let category = new Category(name);
		category.topics = categoryJSON.topics.map((topicJSON) => Topic.parse(topicJSON, null, allRequirementTypes, category));
		return category;
	}
}