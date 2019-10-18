import { assert } from "chai";
import { Spend } from "@generated/photon";
import { sumSpend } from "./sumSpend";

describe("sumSpend", () => {
  const spend1: Spend = {
    id: "abc",
    month: new Date(10).toISOString(),
    baselineSpend: 1,
    forecastedSavings: 2,
    actualSavings: 3
  };

  const spend2: Spend = {
    id: "def",
    month: new Date(20).toISOString(),
    baselineSpend: 4,
    forecastedSavings: 5,
    actualSavings: 6
  };
  const spend3: Spend = {
    id: "ghi",
    month: new Date(30).toISOString(),
    baselineSpend: 7,
    forecastedSavings: 8,
    actualSavings: null
  };

  const getInitSpend = (): Spend => ({
    id: "jkl",
    month: new Date(0).toISOString(),
    baselineSpend: 0,
    forecastedSavings: 0,
    actualSavings: 0
  });

  it("sums baselineSpend, forecastedSavings, and actualSavings and returns one new Spend object", () => {
    const summedSpend = sumSpend([spend1, spend2], getInitSpend());

    assert.strictEqual(summedSpend.baselineSpend, 5);
    assert.strictEqual(summedSpend.forecastedSavings, 7);
    assert.strictEqual(summedSpend.actualSavings, 9);
  });

  it("skips actualSavings when it's null", () => {
    const summedSpend = sumSpend([spend1, spend3], getInitSpend());

    assert.strictEqual(summedSpend.baselineSpend, 8);
    assert.strictEqual(summedSpend.forecastedSavings, 10);
    assert.strictEqual(summedSpend.actualSavings, 3);
  });
});
