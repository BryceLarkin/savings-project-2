import { assert } from "chai";
import { createClient, seedId, gql, createData } from "../../../test";
import { photon } from "../../../config";
import * as shortid from "shortid";
import { CreateSpendsInput } from "../../../graphql-types";

describe("createSpendsMutation", () => {
  it.only("creates Spends for each project profile", async () => {
    const { mutate } = createClient();

    const project = await photon.projects.create({
      data: createData.mockProject()
    });

    const projectProfile1 = await photon.projectProfiles.create({
      data: createData.mockProjectProfile(project.id, seedId.businessUnitId1)
    });

    const projectProfile2 = await photon.projectProfiles.create({
      data: createData.mockProjectProfile(project.id, seedId.businessUnitId2)
    });

    const input: CreateSpendsInput[] = [
      {
        projectProfileId: projectProfile1.id,
        spendAmountsAndDates: [
          {
            month: "1602720000000",
            baselineSpend: 60000,
            forecastedSavings: 5000,
            actualSavings: 4500
          },
          {
            month: "1602720000000",
            baselineSpend: 60000,
            forecastedSavings: 5000,
            actualSavings: 4500
          }
        ]
      },
      {
        projectProfileId: projectProfile2.id,
        spendAmountsAndDates: [
          {
            month: "1602720000000",
            baselineSpend: 60000,
            forecastedSavings: 5000,
            actualSavings: 4500
          },
          {
            month: "1602720000000",
            baselineSpend: 60000,
            forecastedSavings: 5000,
            actualSavings: 4500
          }
        ]
      }
    ];

    const { data, errors } = await mutate({
      mutation: gql.CREATE_SPENDS,
      variables: { input }
    });

    console.log(data, errors);
  });
});
