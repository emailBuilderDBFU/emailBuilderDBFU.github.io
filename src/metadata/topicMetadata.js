export let topicMetadata = [{
	"name": "Generic Intro",
	"default Value": true,
	"paragraphs":[{
		"text": "My name is Kathleen and I’m with the Dog Behavior Department at Austin Pets Alive.",
		"requirementTypes":["name","gender"]
	}],
	"subTopics":[{
		"name":"with Name",
		"defaultValue": false,
		"paragraphs": [{
			"text": "Thanks for reaching out about [name]! Are you still calling [him/her] that, or have you renamed [him/her]?",
			"requirementTypes": ["name", "gender"]
		}],
		"subTopics": []
	}
	]
}, {
	"name":"Return Request",
	"defaultValue": false,
	"paragraphs": [{
		"text": "I’m sorry things aren’t working out with [name]. I wanted to remind you that APA offers free life-long behavioral support for all of our dogs. ",
		"requirementTypes": ["name", "gender"]
	}],
	"subTopics": [
	{
		"name":"Return Request - Generic DBFU Reminder",
		"defaultValue": false,
		"paragraphs": [{
			"text": "If there is a behavioral reason behind your return request, we would be happy to work with you on whatever you’re seeing. If that sounds agreeable to you, we’d love a little background on what behaviors you are experiencing, and we can discuss a training plan from there.",
			"requirementTypes": ["name", "gender"]
		}],
		"subTopics": []
	}, {
		"name":"Return Request - Specific Behavior DBFU Reminder",
		"defaultValue": false,
		"paragraphs": [{
			"text": "If you are at all on the fence about returning [name] and would like to chat about our training options, please let me know! We can talk through what a training plan might look like and then go from there.",
			"requirementTypes": ["name", "gender"]
		}],
		"subTopics": []
	}, {
		"name":"Return Request - Info Gathering",
		"defaultValue": false,
		"paragraphs": [{
			"text": "I wanted to reach out and learn about [his/her] behavior in the time you have had [him/her]. This information will be really helpful for us to update [his/her] file, know how to work with [him/her], and match [him/her] to her next adoptive home. How does [name] do meeting new people in your home? Does [he/she] run up to people saying hello? Does [he/she] act more shy and keep [his/her] distance, excitedly jump, etc.? How does [name] do meeting people out in public? Has [he/she] been around kids and if so how does [he/she] do? What is [he/she] like around other dogs? Cats? How does [he/she] do when left home alone? Do you normally crate [him/her] or section [him/her] off to a smaller space in the house, or is [he/she] left to free roam? Are there any specific behavioral issues you have experienced? If so, can you describe those please? We really appreciate any additional information you can provide; this insight is really helpful to finding a good home for [name].",
			"requirementTypes": ["name", "gender"]
		}],
		"subTopics": []
	}
	]
}, {
	"name": "Potty Training - Adult Dogs",
	"default Value": false,
	"paragraphs":[{
		"text": "",
		"requirementTypes":[]
	}],
	"subTopics":[
	{
		"name":"Recent Relapse",
		"defaultValue": false,
		"paragraphs": [{
			"text": "",
			"requirementTypes": []
		}],
		"subTopics": []
	}, {
		"name":"Partially Potty Trained",
		"defaultValue": false,
		"paragraphs": [{
			"text": "",
			"requirementTypes": []
		}],
		"subTopics": []
	}]
}, {
	"name": "Trainer Recommendation Request",
	"default Value": false,
	"paragraphs":[{
		"text": "",
		"requirementTypes":[]
	}],
	"subTopics":[]
}, {
	"name": "Puppy Issues",
	"default Value": false,
	"paragraphs":[{
		"text": "",
		"requirementTypes":[]
	}],
	"subTopics":[{
		"name":"Potty Training",
		"defaultValue": false,
		"paragraphs": [{
			"text": "Potty training puppies takes time, consistency, and above all, patience. It is a process that all owners of young pups have to go through, and it can certainly be frustrating at times! I’m attaching our “Puppy Basics” document, which has a section dedicated specifically to helping work through potty training. Look through that and let me know if you have any questions on how to implement those techniques. The most important takeaways from that document are to set a schedule/routine and take [him/her] out often. Dogs thrive on routines, so getting [him/her] to a point where [he/she] expects to be let out will go a long way to motivate [him/her] to hold [his/her] business. Make sure you praise [him/her] when [he/she] goes outside, and don’t punish [him/her] if [he/she] does potty indoors. If you scold [him/her] for going indoors, [she/he] could start being scared to go potty in front of you at all, even outdoors, which is definitely not what we want. Instead, if/when [she/he] does have an accident indoors, try to catch [him/her] in the act and take [him/her] outside immediately, where you reward [him/her] for finishing up [his/her] business. This way, [she/he] learns that pottying indoors gets interrupted, but pottying outdoors gets rewarded! I want to note that even if you’re doing everything right, it can take a while for puppies to fully understand and master potty training, so don’t worry if [name] has slip ups sometimes. Just continue to follow the guidelines, reward good choices, and interrupt [him/her] when [he/she] potties indoors.",
			"requirementTypes": ["gender", "name"]
		}],
		"subTopics": []
	}, {
		"name":"Mouthy",
		"defaultValue": false,
		"paragraphs": [{
			"text": "I’m sorry that [name] is showing some rude behavior with [his/her] mouth, but don’t worry. Puppies naturally use their mouths to communicate and explore the world, so it is not unusual to hear of problems with inappropriate nipping. When they’re playing with other dogs, that is the polite and appropriate way to communicate! We as their humans have to teach them that what is appropriate communication with dogs is not always appropriate with humans -- mainly that they can't chomp on us when they are playing. I am going to attach a document to this email that is called “Puppy Basics.” It specifically has a section that walks through how to curb this behavior. There are a couple main takeaways that I’ll quickly walk through here, but I encourage you to read through the document, as it goes into this in a bit more depth. To start, you always want to have items that are appropriate for [name] to chew on close by. That way, when [he/she] goes to grab on to you when you’re playing, you can offer [him/her] a toy instead. If [he/she] engages with the toy, be sure to reward that behavior by praising [him/her] and continuing to play with [him/her]. If [he/she] will not be distracted by a toy, then you should ignore [him/her] when [he/she] starts to get mouthy. Don’t scold, just stand up, look away, and become a statue. Pretend [he/she] doesn’t exist. This way, [he/she] learns that grabbing a toy results in continued play (good), but grabbing you results in the end of play and all attention (bad).",
			"requirementTypes": ['name', 'gender']
		}],
		"subTopics": []
	}, {
		"name":"Jumpy",
		"defaultValue": false,
		"paragraphs": [{
			"text": "I’m sorry that you’re having some problems with [name]’s jumpy behavior. Jumpiness in dogs is a fairly common problem, especially in puppies - it is a natural expression of enthusiasm and excitement, and puppies are full of that! We want to teach them that jumping is not an appropriate way to show their enthusiasm, and will not get them what they want. There are a few things you can do to work on curbing this behavior. You can teach [name] an incompatible behavior, like “sit,” so when [he/she] goes to jump on you, you ask [him/her] for a sit instead. This in turn rewards [him/her] for [his/her] good behavior when [he/she] sits, and breaks the habit of jumping up when excited. Another technique you can try is just completely ignoring [him/her] when [he/she] jumps. If [he/she] is jumping for attention, and then gets the exact opposite of that every time [he/she] jumps, [he/she] will soon learn jumping is not a good way to get what [he/she] wants. Along this train of thought, be sure to reward [him/her] for polite behavior. Teach [name] that calm behavior results in attention, praise, and pets, while jumpy behavior results in the absence of all of those. I’m attaching a document called “Puppy Basics” to this email; check out the section on jumping to read through a bit more detailed version of what I just discussed here.",
			"requirementTypes": ['gender','name']
		}],
		"subTopics": []
	},
	{
		"name":"Chewing",
		"defaultValue": false,
		"paragraphs": [{
			"text": "",
			"requirementTypes": []
		}],
		"subTopics": []
	}]
}
]


/*TEMPLATE
{
	"name": "",
	"default Value": false,
	"paragraphs":[{
		"text": "",
		"requirementTypes":[]
	}],
	"subTopics":[{
		"name":"",
		"defaultValue": false,
		"paragraphs": [{
			"text": "",
			"requirementTypes": []
		}],
		"subTopics": []
	}]
}
*/