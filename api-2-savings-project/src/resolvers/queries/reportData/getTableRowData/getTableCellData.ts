import { Photon } from "@generated/photon";
import { ReportTableRowData } from "../../../../graphql-types";
import { filterSpendByDate } from "./filterSpendByDate";
import { sumSpend } from "./sumSpend";
import { NexusGenEnums } from "../../../../generated/nexus-typegen";

interface GetTableCellData {
  startPeriod: string;
  endPeriod: string;
  projectId: string;
  businessUnitId: string;
  dataType: NexusGenEnums["ReportDataType"];
}

export const getTableCellData = async (
  photon: Photon,
  {
    startPeriod,
    endPeriod,
    projectId,
    businessUnitId,
    dataType
  }: GetTableCellData
): Promise<ReportTableRowData> => {
  const businessUnitPromise = await photon.businessUnits
    .findOne({
      where: { id: businessUnitId },
      select: { id: true, name: true }
    })
    .catch(e => {
      console.error(e);
      throw new Error("Invalid Business Unit");
    });

  const projectProfilesPromise = await photon.projectProfiles.findMany({
    where: {
      businessUnit: { id: businessUnitId },
      project: { id: projectId }
    },
    select: { spend: true }
  });

  const [businessUnit, projectProfiles] = await Promise.all([
    businessUnitPromise,
    projectProfilesPromise
  ]);

  const initData: ReportTableRowData = {
    id: `${projectId}-${businessUnitId}-${dataType}-${startPeriod}-${endPeriod}`,
    columnName: businessUnit.name,
    columnId: businessUnit.id,
    amount: 0
  };

  if (projectProfiles.length === 0) {
    return initData;
  } else if (projectProfiles.length > 1) {
    throw new Error(
      "Projects should not have more than one Project Profile for a Business Unit"
    );
  }

  const { spend } = projectProfiles[0];

  const dateFilteredSpend = filterSpendByDate(spend, startPeriod, endPeriod);

  const amount = sumSpend(dateFilteredSpend, dataType);

  return {
    ...initData,
    amount
  };
};
