import { objectType } from "nexus";

export const ReportTableRowData = objectType({
  name: "ReportTableRowData",
  definition(t) {
    t.string("id");
    t.string("columnName");
    t.string("columnId");
    t.int("amount");
  }
});

export const ReportTableData = objectType({
  name: "ReportTableData",
  definition(t) {
    t.string("id");
    t.string("projectUrl");
    t.string("projectName");
    t.field("data", { type: "ReportTableRowData", list: true });
    // t.field("columns", {type: "ReportTableColumns", list: true})
  }
});
