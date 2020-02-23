import {Topic} from './topic.js';
import {Paragraph} from './paragraph.js';
import {RequirementType} from './requirementType.js';
import {RequirementGroup} from './requirementGroup.js';
import {RequirementGroupSelection} from './requirementGroupSelection.js';
import {RequirementReplacementText} from './requirementReplacementText.js';
import {RequirementSelection} from './requirementSelection.js';
import {RequirementValueAudited} from './requirementValueAudited.js';
import {RequirementValueMetadata} from './requirementValueMetadata.js';
import {RequirementValueMixed} from './requirementValueMixed.js';
import {TopicSelection} from './topicSelection.js';
import {EmailCriteria} from './emailCriteria.js';

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
let pullingOnLeashTopic = new Topic("Pulling on Leash", null, []);
let dogWalkingTopic = new Topic("Dog Walking", null, [pullingOnLeashTopic]);

//create Requirement Type metadata - age, gender, name
let nameRqmtType = new RequirementType("name");
let gender = new RequirementType("gender");
let ageRqmtType = new RequirementType("age");

//create paragraph metadata
let dogWalkingParagraph = new Paragraph("This is how you walk a [age] year old dog. I love [him/her], but [she/he] smells like mildew.", dogWalkingTopic, [ageRqmtType, nameRqmtType, gender]);
let pullingOnLeashParagraph = new Paragraph("How to prevent the dog [name] from pulling. [She/He] is a buttmunch, but [his/her] fur is luscious. Walking is not a good skill of [his/hers].", pullingOnLeashTopic, [ageRqmtType, nameRqmtType, gender])

//Link Topics to Paragraph
dogWalkingTopic.paragraphs.push(dogWalkingParagraph);
pullingOnLeashTopic.paragraphs.push(pullingOnLeashParagraph);

//create Requirement Replacement Text metadata - the text to replace in the paragraphs
let nameReplaceText = new RequirementReplacementText("name", nameRqmtType);
let ageReplaceText = new RequirementReplacementText("age", ageRqmtType);
let hisHer = new RequirementReplacementText("his/her", gender);
let hisHers = new RequirementReplacementText("his/hers", gender);
let himHer = new RequirementReplacementText("him/her", gender);
let sheHe = new RequirementReplacementText("she/he", gender);
let capHisHer = new RequirementReplacementText("His/Her", gender);
let capHisHers = new RequirementReplacementText("His/Hers", gender);
let capHimHer = new RequirementReplacementText("Him/Her", gender);
let capSheHe = new RequirementReplacementText("She/He", gender);

//Link Requirement Type to Requirement Replacement Text
ageRqmtType.replacementTexts.push(ageReplaceText);
nameRqmtType.replacementTexts.push(nameReplaceText);
gender.replacementTexts.push(...[hisHer, hisHers, himHer, sheHe, capHisHer, capHisHers, capHimHer, capSheHe]);

//create Requirement Group metadata - grouping of the metadata requirement values (only use case currently: male/female)
let female = new RequirementGroup("Female", gender);
let male = new RequirementGroup("Male", gender);

//default value definitions
gender.defaultValue = new RequirementGroupSelection(gender, female, null);
nameRqmtType.defaultValue = new RequirementValueAudited("Baba", nameReplaceText);
ageRqmtType.defaultValue = new RequirementValueAudited("2", ageReplaceText);

//create Requirement Value metadata - the text that replaces the [bracketed] requirement text 
let she = new RequirementValueMetadata("she", female, sheHe); 
let hers = new RequirementValueMetadata("hers", female, hisHers); 
let herObject = new RequirementValueMetadata("her", female, himHer);  //"Look at her"
let herAdjective = new RequirementValueMetadata("her", female, hisHer);  //"her car"

let him = new RequirementValueMetadata("him", male, himHer);
let he = new RequirementValueMetadata("he", male, sheHe);
let hisAdjective = new RequirementValueMetadata("his", male, hisHer); //"his car"
let hisPronoun = new RequirementValueMetadata("his", male, hisHers); //"the car is his"

let capShe = new RequirementValueMetadata("She", female, capSheHe); 
let capHers = new RequirementValueMetadata("Hers", female, capHisHers); 
let capHerObject = new RequirementValueMetadata("Her", female, capHimHer);  //"Look at her"
let capHerAdjective = new RequirementValueMetadata("Her", female, capHisHer);  //"her car"

let capHim = new RequirementValueMetadata("Him", male, capHimHer);
let capHe = new RequirementValueMetadata("He", male, capSheHe);
let capHisAdjective = new RequirementValueMetadata("His", male, capHisHer); //"his car"
let capHisPronoun = new RequirementValueMetadata("His", male, capHisHers); //"the car is his"

//Link Requirement Group to their Requirement Values
female.requirementValueMetadatas.push(...[she, hers, herObject, herAdjective, capShe, capHers, capHerObject, capHerAdjective]);
male.requirementValueMetadatas.push(...[he, hisPronoun, hisAdjective, him, capHe, capHisAdjective, capHisPronoun, capHim]);

///////////////////////////////////////// Mocked user data /////////////////////////////////////////////////////////

let nameValue = new RequirementValueAudited("Benny", nameReplaceText);
let ageValue = new RequirementValueAudited("6", ageReplaceText);
let genderValue = new RequirementGroupSelection(gender, male);

let firstTopicSelection = new TopicSelection(dogWalkingTopic, true, [pullingOnLeashTopic], null);

let emailCrit = new EmailCriteria([firstTopicSelection], [nameValue, ageValue, genderValue]);


console.log(emailCrit.render());


export let defaultEmailCriteria = EmailCriteria.defaultForTopicsAndRequirements([dogWalkingTopic], [nameRqmtType, ageRqmtType, gender]);




