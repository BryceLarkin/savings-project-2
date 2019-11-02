import { inputObjectType } from "nexus";

export const ProjectProfileWhereUniqueInput = inputObjectType({
  name: "ProjectProfileWhereUniqueInput",
  definition(t) {
    t.string("id", { required: true });
  }
});

export const ProjectProfileUpdateInput = inputObjectType({
  name: "ProjectProfileUpdateInput",
  definition(t) {
    t.field("spend", {
      type: "SpendUpdateManyWithoutProjectProfileInput"
    });
  }
});

export const SpendUpdateManyWithoutProjectProfileInput = inputObjectType({
  name: "SpendUpdateManyWithoutProjectProfileInput",
  definition(t) {
    t.field("update", {
      required: true,
      list: true,
      type: "SpendUpdateWithWhereUniqueWithoutProjectProfileInput"
    });
  }
});

export const SpendUpdateWithWhereUniqueWithoutProjectProfileInput = inputObjectType(
  {
    name: "SpendUpdateWithWhereUniqueWithoutProjectProfileInput",
    definition(t) {
      t.field("where", {
        required: true,
        type: "SpendWhereUniqueInput"
      });
      t.field("data", {
        required: true,
        type: "SpendUpdateWithoutProjectProfileDataInput"
      });
    }
  }
);

export const SpendWhereUniqueInput = inputObjectType({
  name: "SpendWhereUniqueInput",
  definition(t) {
    t.string("id", { required: true });
  }
});

export const SpendUpdateWithoutProjectProfileDataInput = inputObjectType({
  name: "SpendUpdateWithoutProjectProfileDataInput",
  definition(t) {
    t.int("baselineSpend");
    t.int("forecastedSavingsAmount");
    t.int("actualSavings");
  }
});
