import { queryField, arg } from "nexus";
import { getTableRowData } from "./getTableRowData";
import { ReportTableData } from "../../../graphql-types";

export const ReportTableDataQuery = queryField("reportTableData", {
  type: "ReportTableData",
  list: true,
  args: { input: arg({ type: "ReportDataTableInput", required: true }) },
  resolve: async (parent, { input }, { photon }) => {
    const {
      startPeriod,
      endPeriod,
      projectIds,
      businessUnitIds,
      dataType
    } = input;

    const tableDataPromise: Promise<ReportTableData>[] = projectIds.map(
      async projectId => {
        const dataPromise = getTableRowData(photon, {
          startPeriod,
          endPeriod,
          projectId,
          businessUnitIds,
          dataType
        });

        const projectPromise = photon.projects.findOne({
          where: { id: projectId },
          select: { name: true, url: true }
        });

        const [data, project] = await Promise.all([
          dataPromise,
          projectPromise
        ]);

        const tableData: ReportTableData = {
          id: `${projectId}-${startPeriod}-${endPeriod}-${dataType}-${businessUnitIds.join(
            "-"
          )}`,
          projectUrl: project.url,
          projectName: project.name,
          data
        };

        return tableData;
      }
    );

    return tableDataPromise;
  }
});
