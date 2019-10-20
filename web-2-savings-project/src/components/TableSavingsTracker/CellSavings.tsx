import React from "react";
import { READ_FILTERED_SPEND } from "../../gql";
import {
  ReadFilteredSpend,
  ReadFilteredSpendVariables
} from "../../gql/__generated__/ReadFilteredSpend";
import { useQuery } from "@apollo/react-hooks";
import { LinearProgress } from "@material-ui/core";

export const CellSavings: React.SFC<{
  startPeriod: string;
  endPeriod: string;
  projectId: string;
  businessUnitId: string;
}> = ({ startPeriod, endPeriod, projectId, businessUnitId }) => {
  const { data, loading } = useQuery<
    ReadFilteredSpend,
    ReadFilteredSpendVariables
  >(READ_FILTERED_SPEND, {
    variables: {
      input: {
        startPeriod,
        endPeriod,
        businessUnitId,
        projectId
      }
    }
  });

  if (loading) {
    return <LinearProgress />;
  }

  if (!data) {
    return <></>;
  }

  return <>{data.filteredSpend.forecastedSavingsAmount}</>;
};
