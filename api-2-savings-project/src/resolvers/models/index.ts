import * as baseModels from "./baseModels";
import * as user from "./user";
import * as project from "./project";
import * as spend from "./spend";

const models = [
  Object.values(baseModels),
  Object.values(user),
  Object.values(project),
  Object.values(spend)
];

export { models };
