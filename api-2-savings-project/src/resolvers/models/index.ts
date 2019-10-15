import * as baseModelObject from "./baseModels";
import { AdditionalUserFields } from "./user";

const baseModelsArray = Object.values(baseModelObject);

const models = [baseModelsArray, AdditionalUserFields];

export { models };
