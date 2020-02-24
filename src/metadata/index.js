import {requirementTypeMetadata} from './requirementTypeMetadata.js';
import {topicMetadata} from './topicMetadata.js';
import {EmailCriteria} from '../models/emailCriteria.js';
import {RequirementType} from '../models/requirementType.js';
import {Topic} from '../models/topic.js';

let requirementTypes = requirementTypeMetadata.map((reqTypeJSON) => RequirementType.parse(reqTypeJSON));
let topics = topicMetadata.map((topicJSON) => Topic.parse(topicJSON, null, requirementTypes)); 
export let defaultEmailCriteria = EmailCriteria.defaultForTopicsAndRequirementTypes(topics, requirementTypes);