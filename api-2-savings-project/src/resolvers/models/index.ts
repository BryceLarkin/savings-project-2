import * as baseModels from "./baseModels";
import * as user from "./user";
import * as project from "./project";

const models = [
  Object.values(baseModels),
  Object.values(user),
  Object.values(project)
];

export { models };
