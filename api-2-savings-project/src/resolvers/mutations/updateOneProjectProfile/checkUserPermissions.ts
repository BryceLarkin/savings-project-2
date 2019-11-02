import { ProjectProfileUpdateInput } from "../../../graphql-types";
import * as _ from "lodash";

interface CheckUserPermissionsArgs {
  data: ProjectProfileUpdateInput;
  ownerId: string;
  userId: string;
}

export const checkUserPermissions = ({
  data,
  ownerId,
  userId
}: CheckUserPermissionsArgs): boolean => {
  if (ownerId === userId) {
    return true;
  } else if (_.isUndefined(data.spend) || _.isNull(data.spend)) {
    return true;
  } else {
    const invalidUpdatesArr = data.spend.update.filter(
      ({ data }) =>
        _.isFinite(data.baselineSpend) ||
        _.isFinite(data.forecastedSavingsAmount)
    );

    const userCanUpdate = _.isEmpty(invalidUpdatesArr);

    return userCanUpdate;
  }
};
