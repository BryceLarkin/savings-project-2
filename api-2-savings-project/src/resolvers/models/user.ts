import { extendType } from "nexus";

export const AdditionalUserFields = extendType({
  type: "User",
  definition(t) {
    t.string("fullName", {
      resolve: parent => `${parent.firstName} ${parent.lastName}`
    });
  }
});
