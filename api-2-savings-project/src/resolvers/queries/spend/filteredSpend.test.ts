import { assert } from "chai";
import { createClient, seedId, gql, createData } from "../../../test";
import { photon } from "../../../config";
import { SpendCreateInput, ProjectProfile, Project } from "@generated/photon";
import { FilteredSpendInput } from "../../../graphql-types";

describe("filteredSpend", () => {
  const getSpend1 = (projectProfileId: string): SpendCreateInput => ({
    month: new Date(1571109987000), //Oct 15, 2019
    baselineSpend: 10,
    forecastedSavings: 2,
    actualSavings: 3,
    projectProfile: { connect: { id: projectProfileId } }
  });

  const getSpend2 = (projectProfileId: string): SpendCreateInput => ({
    month: new Date(1573788387000), //Nov 15 2019
    baselineSpend: 40,
    forecastedSavings: 5,
    actualSavings: 6,
    projectProfile: { connect: { id: projectProfileId } }
  });

  const getSpend3 = (projectProfileId: string): SpendCreateInput => ({
    month: new Date(1579058787000), //Jan 1, 2020
    baselineSpend: 70,
    forecastedSavings: 8,
    actualSavings: 9,
    projectProfile: { connect: { id: projectProfileId } }
  });

  let project: Project;
  let projectProfile1: ProjectProfile;
  let projectProfile2: ProjectProfile;

  before(async () => {
    project = await photon.projects.create({
      data: createData.mockProject()
    });

    projectProfile1 = await photon.projectProfiles.create({
      data: createData.mockProjectProfile(project.id, seedId.businessUnitId1)
    });

    projectProfile2 = await photon.projectProfiles.create({
      data: createData.mockProjectProfile(project.id, seedId.businessUnitId2)
    });

    await photon.spends.create({
      data: getSpend1(projectProfile1.id)
    });

    await photon.spends.create({
      data: getSpend2(projectProfile1.id)
    });

    await photon.spends.create({
      data: getSpend3(projectProfile1.id)
    });
  });

  it("removes spend outside of range and sums filtered spend. Returns one spend object", async () => {
    const { query } = createClient();

    const input: FilteredSpendInput = {
      startPeriod: "1571109987000",
      endPeriod: "1573788387001",
      projectId: project.id,
      businessUnitId: seedId.businessUnitId1
    };

    const { data, errors } = await query({
      query: gql.FILTERED_SPEND,
      variables: { input }
    });

    assert.isUndefined(errors);

    const { filteredSpend } = data;

    assert.isString(filteredSpend.id);
    assert.strictEqual(filteredSpend.baselineSpend, 50);
    assert.strictEqual(new Date(filteredSpend.month).getMonth(), 10);
    assert.strictEqual(new Date(filteredSpend.month).getFullYear(), 2019);
    assert.strictEqual(filteredSpend.actualSavings, 9);
    assert.strictEqual(
      filteredSpend.forecastedSavingsPercentage,
      Math.floor((7 / 50) * 100)
    );
    assert.strictEqual(filteredSpend.forecastedSavingsAmount, 7);
  });

  it("returns zeroed out Spend object when there are no Spend objects", async () => {
    const { query } = createClient();

    const input: FilteredSpendInput = {
      startPeriod: "1571109987000",
      endPeriod: "1573788387001",
      projectId: project.id,
      businessUnitId: seedId.businessUnitId2
    };

    const { data, errors } = await query({
      query: gql.FILTERED_SPEND,
      variables: { input }
    });

    assert.isUndefined(errors);

    const { filteredSpend } = data;

    assert.isString(filteredSpend.id);
    assert.strictEqual(filteredSpend.baselineSpend, 0);
    assert.strictEqual(new Date(filteredSpend.month).getMonth(), 10);
    assert.strictEqual(new Date(filteredSpend.month).getFullYear(), 2019);
    assert.strictEqual(filteredSpend.actualSavings, 0);
    assert.strictEqual(filteredSpend.forecastedSavingsPercentage, 0);
    assert.strictEqual(filteredSpend.forecastedSavingsAmount, 0);
  });
});
