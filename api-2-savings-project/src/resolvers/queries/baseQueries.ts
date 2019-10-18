import { objectType } from "nexus";

export const baseQueries = objectType({
  name: "Query",
  definition(t) {
    t.crud.projects({ filtering: { url: true }, ordering: { name: true } });
    t.crud.businessunits({ ordering: { name: true } });
    t.crud.project();
  }
});
