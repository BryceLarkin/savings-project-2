import { mutationField, arg } from "nexus";
import { createSpendsForProjectProfile } from "./createSpendsForProjectProfile";

export const createSpendsMutation = mutationField("createSpends", {
  type: "Spend",
  list: true,
  args: {
    input: arg({
      type: "CreateSpendsInput",
      required: true,
      list: true
    })
  },
  resolve: async (parent, { input }, { photon }) => {
    const spendPromises = input
      .map(s => createSpendsForProjectProfile(photon, s))
      .flatten();

    return spendPromises;
  }
});
