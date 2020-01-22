import {Topic} from './topic.js';
import {Paragraph} from './paragraph.js';
import {RequirementType} from './requirementType.js';
import {RequirementGroup} from './requirementGroup.js';
import {RequirementReplacementText} from './requirementReplacementText.js';
import {RequirementSelection} from './requirementSelection.js';
import {RequirementValueAudited} from './requirementValueAudited.js';
import {RequirementValueMetadata} from './requirementValueMetadata.js';
import {RequirementValueMixed} from './requirementValueMixed.js';
import {TopicSelection} from './topicSelection.js';

window.Topic = Topic;
window.Paragraph = Paragraph;
window.RequirementType = RequirementType;
window.RequirementGroup = RequirementGroup;
window.RequirementReplacementText = RequirementReplacementText;
window.RequirementSelection = RequirementSelection;
window.RequirementValueAudited = RequirementValueAudited;
window.RequirementValueMetadata = RequirementValueMetadata;
window.RequirementValueMixed = RequirementValueMixed;
window.TopicSelection = TopicSelection;

////////////////////////////////Metadata Creation///////////////////////////////////////////////////////////

// create topic metadata
let dogWalkingTopic = new Topic("Dog Walking");
let pullingOnLeashTopic = new Topic("Pulling on Leash");


//create paragraph metadata
let dogWalkingParagraph = new Paragraph("This is how you walk a [age] year old dog. I love [him/her], but [she/he] smells like mildew.");
let pullingOnLeashParagraph = new Paragraph("How to prevent the dog [name] from pulling. [She/He] is a buttmunch, but [his/her] fur is luscious. Walking is not a good skill of [his/hers].")


//create Requirement Type metadata - age, gender, name
let nameRqmtType = new RequirementType("name");
let gender = new RequirementType("gender");
let ageRqmtType = new RequirementType("age");


//create Requirement Replacement Text metadata - the text to replace in the paragraphs
let nameReplaceText = new RequirementReplacementText("name");
let ageReplaceText = new RequirementReplacementText("age");
let hisHer = new RequirementReplacementText("his/her");
let hisHers = new RequirementReplacementText("his/hers");
let himHer = new RequirementReplacementText("him/her");
let sheHe = new RequirementReplacementText("she/he");
let capHisHer = new RequirementReplacementText("His/Her");
let capHisHers = new RequirementReplacementText("His/Hers");
let capHimHer = new RequirementReplacementText("Him/Her");
let capSheHe = new RequirementReplacementText("She/He");


//create Requirement Value metadata - the text that replaces the [bracketed] requirement text 
let she = new RequirementValueMetadata("she"); 
let hers = new RequirementValueMetadata("hers"); 
let herObject = new RequirementValueMetadata("her");  //"Look at her"
let herAdjective = new RequirementValueMetadata("her");  //"her car"

let him = new RequirementValueMetadata("him");
let he = new RequirementValueMetadata("he");
let hisAdjective = new RequirementValueMetadata("his"); //"his car"
let hisPronoun = new RequirementValueMetadata("his"); //"the car is his"

let capShe = new RequirementValueMetadata("She"); 
let capHers = new RequirementValueMetadata("Hers"); 
let capHerObject = new RequirementValueMetadata("Her");  //"Look at her"
let capHerAdjective = new RequirementValueMetadata("Her");  //"her car"

let capHim = new RequirementValueMetadata("Him");
let capHe = new RequirementValueMetadata("He");
let capHisAdjective = new RequirementValueMetadata("His"); //"his car"
let capHisPronoun = new RequirementValueMetadata("His"); //"the car is his"


//create Requirement Group metadata - grouping of the metadata requirement values (only use case currently: male/female)
let female = new RequirementGroup("Female");
let male = new RequirementGroup("Male");

window.female = female;
window.male = male;
window.ageRqmtType = ageRqmtType;
window.nameRqmtType = nameRqmtType;


////////////////////////////////////////////////////////Relationship Setting/////////////////////////////////////////////////

//Link Topics to Subtopics
dogWalkingTopic.addSubtopic(pullingOnLeashTopic);
pullingOnLeashTopic.setSuperTopic(dogWalkingTopic);


//Link Topics to Paragraph
dogWalkingTopic.addParagraph(dogWalkingParagraph);
pullingOnLeashTopic.addParagraph(pullingOnLeashParagraph);

//Link Paragraphs to Topic
dogWalkingParagraph.setTopic(dogWalkingTopic);
pullingOnLeashParagraph.setTopic(pullingOnLeashTopic);


//Link Paragraphs to Requirement Types
pullingOnLeashParagraph.addRequirementType(ageRqmtType);
pullingOnLeashParagraph.addRequirementType(gender);
pullingOnLeashParagraph.addRequirementType(nameRqmtType);

//Link Paragraphs to Requirement Types
dogWalkingParagraph.addRequirementType(ageRqmtType);
dogWalkingParagraph.addRequirementType(gender);
dogWalkingParagraph.addRequirementType(nameRqmtType);


//Link Requirement Groups to their Requirement Values
female.addRequirementValueMetadata(she);
female.addRequirementValueMetadata(herObject);
female.addRequirementValueMetadata(herAdjective);
female.addRequirementValueMetadata(hers);
male.addRequirementValueMetadata(he);
male.addRequirementValueMetadata(hisAdjective);
male.addRequirementValueMetadata(hisPronoun);
male.addRequirementValueMetadata(him);

female.addRequirementValueMetadata(capShe);
female.addRequirementValueMetadata(capHerObject);
female.addRequirementValueMetadata(capHerAdjective);
female.addRequirementValueMetadata(capHers);
male.addRequirementValueMetadata(capHe);
male.addRequirementValueMetadata(capHisAdjective);
male.addRequirementValueMetadata(capHisPronoun);
male.addRequirementValueMetadata(capHim);

//Link Requirement values to their Requirement Groups
she.setRequirementGroup(female);
herAdjective.setRequirementGroup(female);
herObject.setRequirementGroup(female);
hers.setRequirementGroup(female);
he.setRequirementGroup(male);
hisAdjective.setRequirementGroup(male);
hisPronoun.setRequirementGroup(male);
him.setRequirementGroup(male);


//Link Requirement Values (MD) to their Requirement Replacement Text (one way relationship)
she.setReplacementText(sheHe);
herObject.setReplacementText(himHer);
herAdjective.setReplacementText(hisHer);
hers.setReplacementText(hisHers);
he.setReplacementText(sheHe);
him.setReplacementText(himHer);
hisAdjective.setReplacementText(hisHer);
hisPronoun.setReplacementText(hisHers);

capShe.setReplacementText(capSheHe);
capHerObject.setReplacementText(capHimHer);
capHerAdjective.setReplacementText(capHisHer);
capHers.setReplacementText(capHisHers);
capHe.setReplacementText(capSheHe);
capHim.setReplacementText(capHimHer);
capHisAdjective.setReplacementText(capHisHer);
capHisPronoun.setReplacementText(capHisHers);


//Link Requirement Replacement Text to Requirement Type
nameReplaceText.setRequirementType(nameRqmtType);
ageReplaceText.setRequirementType(ageRqmtType);

hisHer.setRequirementType(gender);
hisHers.setRequirementType(gender);
himHer.setRequirementType(gender);
sheHe.setRequirementType(gender);

capHisHer.setRequirementType(gender);
capHisHers.setRequirementType(gender);
capHimHer.setRequirementType(gender);
capSheHe.setRequirementType(gender);

//Link Requirement Type to Requirement Replacement Text
ageRqmtType.addReplacementText(ageReplaceText);
nameRqmtType.addReplacementText(nameReplaceText);

gender.addReplacementText(hisHer);
gender.addReplacementText(hisHers);
gender.addReplacementText(himHer);
gender.addReplacementText(sheHe);

gender.addReplacementText(capHisHer);
gender.addReplacementText(capHisHers);
gender.addReplacementText(capHimHer);
gender.addReplacementText(capSheHe);


///////////////////////////////////////// Mocked user data /////////////////////////////////////////////////////////


let firstTopicSelection = new TopicSelection();
firstTopicSelection.addtopic(pullingOnLeashTopic);
firstTopicSelection.addtopic(dogWalkingTopic);

let nameValue = new RequirementValueAudited("Benny");
nameValue.setReplacementText(nameReplaceText);

let ageValue = new RequirementValueAudited("6");
ageValue.setReplacementText(ageReplaceText);

firstTopicSelection.addRequirementSelection(nameValue);
firstTopicSelection.addRequirementSelection(ageValue);
firstTopicSelection.addRequirementSelection(male);


//console.log(ageReplaceText.replaceText("blah blah paragraph [age] blah bloop.", [ageValue]));

console.log(firstTopicSelection.render());
