import { inputObjectType } from "nexus";

export const CreateProjectInput = inputObjectType({
  name: "CreateProjectInput",
  definition(t) {
    t.string("name", { required: true });
    t.string("ownerId", { required: true });
  }
});
