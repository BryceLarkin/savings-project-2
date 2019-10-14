import { inputObjectType } from "nexus";

export const CreateProjectProfileInput = inputObjectType({
  name: "CreateProjectProfileInput",
  definition(t) {
    t.string("businessUnitId", { required: true });
  }
});

export const CreateProjectProfilesInput = inputObjectType({
  name: "CreateProjectProfilesInput",
  definition(t) {
    t.string("projectId", { required: true });
    t.field("projectProfiles", {
      type: "CreateProjectProfileInput",
      required: true,
      list: true
    });
  }
});
