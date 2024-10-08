export let requirementTypeMetadata = [
{
	"name":"Author",
	"defaultValue": "Kathleen",
	"requirementGroups":[],
	"requirementReplacementTexts": [{
		"text":"author"
	}]
},{
	"name":"Dog Name",
	"defaultValue": "Benny",
	"requirementGroups":[],
	"requirementReplacementTexts": [{
		"text":"name"
	}]
},	{
	"name":"Dog Gender",
	"defaultValue": "Female",
	"requirementGroups":[{
		"name":"Male",
		"requirementValues":[
			{ "value":"he", "replacementText":"he/she" },
			{ "value":"him", "replacementText":"him/her" },
			{ "value":"his", "replacementText":"his/hers" },
			{ "value":"his", "replacementText":"his/her" },
			{ "value":"He", "replacementText":"He/She" },
			{ "value":"Him", "replacementText":"Him/Her" },
			{ "value":"His", "replacementText":"His/Hers" },
			{ "value":"His", "replacementText":"His/Her" }
		]
	},	{
		"name":"Female",
		"requirementValues":[
			{ "value":"she", "replacementText":"he/she" },
			{ "value":"her", "replacementText":"him/her" },
			{ "value":"hers", "replacementText":"his/hers" },
			{ "value":"her", "replacementText":"his/her" },
			{ "value":"She", "replacementText":"He/She" },
			{ "value":"Her", "replacementText":"Him/Her" },
			{ "value":"Hers", "replacementText":"His/Hers" },
			{ "value":"Her", "replacementText":"His/Her" }
		]
	}],
	"requirementReplacementTexts": [
		{ "text":"he/she" },
		{ "text":"him/her" },
		{ "text":"his/hers" },
		{ "text":"his/her" },
		{ "text":"He/She" },
		{ "text":"Him/Her" },
		{ "text":"His/Hers" },
		{ "text":"His/Her" }
	]
}]
