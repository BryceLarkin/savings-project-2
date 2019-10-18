import { assert } from "chai";
import { createClient, seedId, gql, createData } from "../../../test";
import { photon } from "../../../config";
import { CreateProjectProfilesInput } from "../../../graphql-types";

describe("createProjectProfilesMutation", () => {
  it("creates ProjectProfiles", async () => {
    const { mutate } = createClient();

    const project = await photon.projects.create({
      data: createData.mockProject()
    });

    const input: CreateProjectProfilesInput = {
      projectId: project.id,
      projectProfiles: [
        { businessUnitId: seedId.businessUnitId1 },
        { businessUnitId: seedId.businessUnitId2 }
      ]
    };

    const { data, errors } = await mutate({
      mutation: gql.CREATE_PROJECT_PROFILES,
      variables: { input }
    });

    assert.isUndefined(errors);

    const profiles = data.createProjectProfiles;

    assert.lengthOf(profiles, 2);

    assert.strictEqual(profiles[0].businessUnit.id, seedId.businessUnitId1);
    assert.strictEqual(profiles[1].businessUnit.id, seedId.businessUnitId2);
  });
});
