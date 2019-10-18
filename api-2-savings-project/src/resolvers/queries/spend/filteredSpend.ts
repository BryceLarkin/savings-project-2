import { queryField, inputObjectType, arg } from "nexus";
import { Spend } from "@generated/photon";
import { filterSpendByDate } from "./filterSpendByDate";
import { sumSpend } from "./sumSpend";

export const FilteredSpendInput = inputObjectType({
  name: "FilteredSpendInput",
  definition(t) {
    t.string("startPeriod", {
      required: true,
      description: "timestamp in milliseconds"
    });
    t.string("endPeriod", {
      required: true,
      description: "timestamp in milliseconds"
    });
    t.string("projectId", { required: true });
    t.string("businessUnitId", { required: true });
  }
});

export const filteredSpend = queryField("filteredSpend", {
  type: "Spend",
  args: { input: arg({ type: "FilteredSpendInput", required: true }) },
  resolve: async (parent, { input }, { photon }) => {
    const { startPeriod, endPeriod, projectId, businessUnitId } = input;

    const initSpend: Spend = {
      id: `${projectId}-${businessUnitId}`,
      month: new Date(parseInt(endPeriod, 10)).toString(),
      baselineSpend: 0,
      forecastedSavings: 0,
      actualSavings: 0
    };

    const projectProfiles = await photon.projectProfiles.findMany({
      where: {
        businessUnit: { id: businessUnitId },
        project: { id: projectId }
      },
      select: { spend: true }
    });

    if (projectProfiles.length === 0) {
      return initSpend;
    } else if (projectProfiles.length > 1) {
      throw new Error(
        "Projects should not have more than one Project Profile for a Business Unit"
      );
    }

    const { spend } = projectProfiles[0];

    const dateFilteredSpend = filterSpendByDate(
      spend,
      parseInt(startPeriod, 10),
      parseInt(endPeriod, 10)
    );

    const summedSpend = sumSpend(dateFilteredSpend, initSpend);

    return summedSpend;
  }
});
