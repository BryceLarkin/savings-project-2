import { assert } from "chai";
import { createClient, seedId, gql } from "../../../test";
import { INVALID_OWNER_MSG } from "./createProjectMutation";

describe("createProjectMutation", () => {
  it("creates a project", async () => {
    const input = {
      name: "Software",
      ownerId: seedId.userId1
    };

    const { mutate } = createClient();

    const { data, errors } = await mutate({
      mutation: gql.CREATE_PROJECT,
      variables: { input }
    });

    assert.isUndefined(errors);

    assert.isString(data.createProject.id);
    assert.strictEqual(data.createProject.name, "Software");
    assert.strictEqual(data.createProject.owner.id, seedId.userId1);
  });

  it("throws an error when given an invalid ownerId", async () => {
    const input = {
      name: "Software",
      ownerId: "abc"
    };

    const { mutate } = createClient();

    const { data, errors } = await mutate({
      mutation: gql.CREATE_PROJECT,
      variables: { input }
    });

    assert.isNull(data);

    assert.lengthOf(errors, 1);

    assert.strictEqual(errors[0].message, INVALID_OWNER_MSG);
  });
});
