import { objectType } from "nexus";

export const baseQueries = objectType({
  name: "Query",
  definition(t) {
    t.crud.projects();
  }
});
