import { objectType } from "nexus";

export const baseQueries = objectType({
  name: "Query",
  definition(t) {
    t.crud.projects({ filtering: { url: true }, ordering: { name: true } });
    t.crud.projectProfiles({ filtering: { project: true } });
    t.crud.businessUnits({ ordering: { name: true } });
    t.crud.project();
    t.crud.user();
    t.crud.users();
  }
});
