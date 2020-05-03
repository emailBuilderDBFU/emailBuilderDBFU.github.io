import {requirementTypeMetadata} from './requirementTypeMetadata.js';
import {categoryMetadata} from './categoryMetadata.js';
import {EmailCriteria} from '../models/emailCriteria.js';
import {RequirementType} from '../models/requirementType.js';
import {Category} from '../models/category.js';

export let requirementTypes = requirementTypeMetadata.map((reqTypeJSON) => RequirementType.parse(reqTypeJSON));
export let categories = categoryMetadata.map((categoryJSON) => Category.parse(categoryJSON, requirementTypes)); 
export let defaultEmailCriteria = EmailCriteria.defaultForTopicsAndRequirementTypes(categories.flatMap((category) => category.topics), requirementTypes);
 
