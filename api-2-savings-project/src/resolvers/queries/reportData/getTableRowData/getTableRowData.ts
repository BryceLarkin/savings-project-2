import { getTableCellData } from "./getTableCellData";
import { NexusGenEnums } from "../../../../generated/nexus-typegen";
import { Photon } from "@generated/photon";
import { ReportTableRowData } from "../../../../graphql-types";

interface GetTableRowData {
  startPeriod: string;
  endPeriod: string;
  projectId: string;
  businessUnitIds: string[];
  dataType: NexusGenEnums["ReportDataType"];
}

export const getTableRowData = async (
  photon: Photon,
  {
    startPeriod,
    endPeriod,
    projectId,
    businessUnitIds,
    dataType
  }: GetTableRowData
): Promise<ReportTableRowData[]> => {
  const rowsPromise = businessUnitIds.map(businessUnitId =>
    getTableCellData(photon, {
      startPeriod,
      endPeriod,
      projectId,
      businessUnitId,
      dataType
    })
  );

  return Promise.all(rowsPromise);
};
