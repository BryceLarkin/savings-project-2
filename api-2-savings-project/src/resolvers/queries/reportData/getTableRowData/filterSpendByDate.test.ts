import { assert } from "chai";
import { Spend } from "@generated/photon";
import { filterSpendByDate } from "./filterSpendByDate";

describe("filterSpendByDate", () => {
  const spend1: Spend = {
    id: "abc",
    month: new Date(1262062525000),
    baselineSpend: 0,
    forecastedSavingsAmount: 0,
    actualSavings: 0
  };

  const spend2: Spend = {
    id: "def",
    month: new Date(1893214525000),
    baselineSpend: 0,
    forecastedSavingsAmount: 0,
    actualSavings: 0
  };

  const spend3: Spend = {
    id: "ghi",
    month: new Date(2524366525000),
    baselineSpend: 0,
    forecastedSavingsAmount: 0,
    actualSavings: 0
  };

  it("removes Spend that fall out of date range", () => {
    const spend = [spend1, spend2, spend3];
    const filteredSpend = filterSpendByDate(
      spend,
      new Date(1793214520000).toISOString(),
      new Date(1993214525000).toISOString()
    );
    assert.lengthOf(filteredSpend, 1);
    assert.strictEqual(filteredSpend[0].id, spend2.id);
  });

  it("does not remove Spend that falls on start or end period", () => {
    const spend = [spend1, spend2, spend3];
    const filteredSpend = filterSpendByDate(
      spend,
      new Date(1262062525000).toISOString(),
      new Date(2524366525000).toISOString()
    );

    assert.lengthOf(filteredSpend, 3);
  });

  it("maintains order of spend arg", () => {
    const spend = [spend1, spend2, spend3];
    const filteredSpend = filterSpendByDate(
      spend,
      new Date(1262062525000).toISOString(),
      new Date(2524366525000).toISOString()
    );

    assert.strictEqual(filteredSpend[0].id, spend1.id);
    assert.strictEqual(filteredSpend[1].id, spend2.id);
    assert.strictEqual(filteredSpend[2].id, spend3.id);
  });
});
