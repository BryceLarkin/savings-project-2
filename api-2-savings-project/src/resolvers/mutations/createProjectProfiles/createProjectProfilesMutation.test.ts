import { assert } from "chai";
import { createClient, seedId, gql } from "../../../test";
import { photon } from "../../../config";
import * as shortid from "shortid";

describe("createProjectProfilesMutation", () => {
  it.only("creates ProjectProfiles", async () => {
    const { mutate } = createClient();

    const project = await photon.projects.create({
      data: {
        name: shortid.generate(),
        url: shortid.generate(),
        owner: { connect: { id: seedId.userId1 } },
        company: { connect: { id: seedId.companyId } }
      }
    });

    const input = {
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

    console.log(data, errors);

    assert.isUndefined(errors);

    const profiles = data.createProjectProfiles;

    assert.lengthOf(profiles, 2);

    assert.strictEqual(profiles[0].businessUnit.id, seedId.businessUnitId1);
    assert.strictEqual(profiles[1].businessUnit.id, seedId.businessUnitId2);
  });
});
