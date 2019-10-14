import { assert } from "chai";
import { isUserPartOfCompany } from "./isUserPartOfCompany";
import { seedId } from "../../test";
import { photon } from "../../config";

describe("isUserPartOfCompany", () => {
  it("returns true if user is part of company", async () => {
    const userId = seedId.userId1;
    const { companyId } = seedId;

    const isUserValid = await isUserPartOfCompany(photon, userId, companyId);

    assert.isTrue(isUserValid);
  });

  it("returns false if user is not part of company", async () => {
    const userId = "abc";
    const { companyId } = seedId;

    const isUserValid = await isUserPartOfCompany(photon, userId, companyId);

    assert.isFalse(isUserValid);
  });
});
