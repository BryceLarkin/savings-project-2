import { assert } from "chai";
import { ProjectProfileUpdateInput } from "../../../graphql-types";
import { checkUserPermissions } from "./checkUserPermissions";

const updateInputWithActual: ProjectProfileUpdateInput = {
  spend: {
    update: [
      {
        where: {
          id: "abc"
        },
        data: {
          actualSavings: 1
        }
      }
    ]
  }
};

const updateInputWithBaseline: ProjectProfileUpdateInput = {
  spend: {
    update: [
      {
        where: {
          id: "abc"
        },
        data: {
          baselineSpend: 1
        }
      }
    ]
  }
};

const updateInputWithForecastedSavings: ProjectProfileUpdateInput = {
  spend: {
    update: [
      {
        where: {
          id: "abc"
        },
        data: {
          forecastedSavingsAmount: 1
        }
      }
    ]
  }
};

const updateInputUndefined: ProjectProfileUpdateInput = {
  spend: undefined
};

const updateInputNull: ProjectProfileUpdateInput = {
  spend: null
};

const userId1 = "userId1";
const userId2 = "userId2";

describe.only("checkUserPermissions", () => {
  it("returns true when user is the Project Profile owner", () => {
    assert.isTrue(
      checkUserPermissions({
        data: updateInputWithActual,
        ownerId: userId1,
        userId: userId1
      })
    );
  });

  it("returns false when user is not the Project Profile owner and wants to edit Basleine", () => {
    assert.isFalse(
      checkUserPermissions({
        data: updateInputWithBaseline,
        ownerId: userId1,
        userId: userId2
      })
    );
  });

  it("returns false when user is not the Project Profile owner and wants to edit Forecasted Savings Amount", () => {
    assert.isFalse(
      checkUserPermissions({
        data: updateInputWithForecastedSavings,
        ownerId: userId1,
        userId: userId2
      })
    );
  });

  it("returns true when spend is null", () => {
    assert.isTrue(
      checkUserPermissions({
        data: updateInputNull,
        ownerId: userId1,
        userId: userId2
      })
    );
  });

  it("returns true when spend is undefined", () => {
    assert.isTrue(
      checkUserPermissions({
        data: updateInputUndefined,
        ownerId: userId1,
        userId: userId2
      })
    );
  });
});
