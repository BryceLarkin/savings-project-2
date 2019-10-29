import { assert } from "chai";
import { createClient, seedId, gql, createData } from "../../../test";
import { photon } from "../../../config";
import { CreateSpendsInput } from "../../../graphql-types";

describe("createSpendsMutation", () => {
  it("creates Spends for each project profile", async () => {
    const { mutate } = createClient();

    const project = await photon.projects.create({
      data: createData.mockProject()
    });

    const projectProfile1Promise = photon.projectProfiles.create({
      data: createData.mockProjectProfile(project.id, seedId.businessUnitId1)
    });

    const projectProfile2Promise = photon.projectProfiles.create({
      data: createData.mockProjectProfile(project.id, seedId.businessUnitId2)
    });

    const [projectProfile1, projectProfile2] = await Promise.all([
      projectProfile1Promise,
      projectProfile2Promise
    ]);

    const input: CreateSpendsInput[] = [
      {
        projectProfileId: projectProfile1.id,
        spendAmountsAndDates: [
          {
            month: new Date(1602520000000).toISOString(),
            baselineSpend: 40000,
            forecastedSavings: 5000,
            actualSavings: 4500
          },
          {
            month: new Date(1602720000000).toISOString(),
            baselineSpend: 50000,
            forecastedSavings: 5000,
            actualSavings: 4500
          }
        ]
      },
      {
        projectProfileId: projectProfile2.id,
        spendAmountsAndDates: [
          {
            month: new Date(1602520000000).toISOString(),
            baselineSpend: 60000,
            forecastedSavings: 5000,
            actualSavings: 4500
          },
          {
            month: new Date(1602720000000).toISOString(),
            baselineSpend: 70000,
            forecastedSavings: 5000,
            actualSavings: 4500
          }
        ]
      }
    ];

    const { errors } = await mutate({
      mutation: gql.CREATE_SPENDS,
      variables: { input }
    });
    console.error(errors);
    assert.isUndefined(errors);

    const projectProfile1SpendsPromise = photon.spends.findMany({
      where: { projectProfile: { id: projectProfile1.id } }
    });
    const projectProfile2SpendsPromise = photon.spends.findMany({
      where: { projectProfile: { id: projectProfile1.id } }
    });

    const [projectProfile1Spends, projectProfile2Spends] = await Promise.all([
      projectProfile1SpendsPromise,
      projectProfile2SpendsPromise
    ]);

    //TODO: make more comprehensive tests
    assert.lengthOf(projectProfile1Spends, 2);
    assert.lengthOf(projectProfile2Spends, 2);
  });
});
