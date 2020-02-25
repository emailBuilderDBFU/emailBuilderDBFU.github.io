export let topicMetadata = [{
	"name": "Dog Walking",
	"defaultValue": false,
	"paragraphs": [{
		"text": "This is how you walk a [age] year old dog. I love [him/her], but [he/she] smells like mildew.",
		"requirementTypes": ["age", "gender"]
	}],
	"subTopics": [{
		"name":"Pulling on Leash",
		"defaultValue": false,
		"paragraphs": [{
			"text": "How to prevent the dog [name] from pulling. [He/She] is a buttmunch, but [his/her] fur is luscious. Walking is not a good skill of [his/hers].",
			"requirementTypes": ["name", "gender"]
		}],
		"subTopics": []
	}]
}]