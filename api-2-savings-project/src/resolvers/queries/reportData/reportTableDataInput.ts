import { inputObjectType } from "nexus";

export const ReportDataTableInput = inputObjectType({
  name: "ReportDataTableInput",
  definition(t) {
    t.string("startPeriod", {
      required: true,
      description: "timestamp in milliseconds"
    });
    t.string("endPeriod", {
      required: true,
      description: "timestamp in milliseconds"
    });
    t.string("projectIds", { required: true, list: true });
    t.string("businessUnitIds", { required: true, list: true });
    t.field("dataType", { type: "ReportDataType", required: true });
  }
});
