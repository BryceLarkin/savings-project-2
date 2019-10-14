import { inputObjectType } from "nexus";

export const CreateSpendAmountAndDate = inputObjectType({
  name: "CreateSpendAmountAndDate",
  definition(t) {
    t.string("month", { required: true });
    t.int("baselineSpend", { required: true });
    t.int("forecasedSavings", { required: true });
    t.int("actualSavings");
  }
});
