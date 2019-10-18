import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.projects();
    t.model.company();
  }
});

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.users();
    t.model.projects();
    t.model.businessUnits();
  }
});

export const BusinessUnit = objectType({
  name: "BusinessUnit",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.projectProfiles();
    t.model.company();
  }
});

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.url();
    t.model.projectProfiles({
      filtering: { businessUnit: true }
    });
    t.model.owner();
    t.model.company();
    t.model.createdAt();
  }
});

export const ProjectProfile = objectType({
  name: "ProjectProfile",
  definition(t) {
    t.model.id();
    t.model.businessUnit();
    t.model.project();
    t.model.spend({ ordering: { month: true } });
  }
});

export const Spend = objectType({
  name: "Spend",
  definition(t) {
    t.model.id();
    t.model.month();
    t.model.baselineSpend();
    // t.model.forecastedSavings();
    t.model.actualSavings();
    t.model.projectProfile();
  }
});
