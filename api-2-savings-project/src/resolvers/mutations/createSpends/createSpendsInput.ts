import { inputObjectType } from "nexus";

export const SpendAmountAndDateInput = inputObjectType({
  name: "SpendAmountAndDateInput",
  definition(t) {
    t.string("month", { required: true, description: "dateString format" });
    t.int("baselineSpend", { required: true });
    t.int("forecastedSavings", { required: true });
    t.int("actualSavings");
  }
});

export const CreateSpendsInput = inputObjectType({
  name: "CreateSpendsInput",
  definition(t) {
    t.string("projectProfileId", { required: true });
    t.field("spendAmountsAndDates", {
      type: "SpendAmountAndDateInput",
      list: true,
      required: true
    });
  }
});
