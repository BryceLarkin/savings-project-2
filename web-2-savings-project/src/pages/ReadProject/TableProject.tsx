import React from "react";
import { ReadProject } from "../../gql/__generated__/ReadProject";
import { Typography } from "@material-ui/core";
import { useListStyle } from "../../components/Theme";
import { Currency } from "../../components/FormatText/Currency";
import { TableProjectProfile } from "./TableProjectProfile";

export const TableProject: React.FC<{
  data: ReadProject | undefined;
}> = ({ data }) => {
  const classes = useListStyle();

  if (!data || data.project === null) {
    return <Typography>No Project</Typography>;
  }

  const {
    project: {
      name,
      owner,
      totalBaselineSpend,
      totalForecastedSavingPercentage,
      totalForecastedSavingAmount,
      projectProfiles
    }
  } = data;

  return (
    <div className={classes.root}>
      <Typography variant="h4">{name}</Typography>
      <div className={classes.childRoot}>
        <div className={classes.dataRow}>
          <Typography>Owner</Typography>
          <Typography>{owner.fullName}</Typography>
        </div>
        <div className={classes.titleRow}>
          <Typography>Total</Typography>
        </div>
        <div className={classes.dataRow}>
          <Typography>Forecasted Savings Amount</Typography>
          <Currency data={totalForecastedSavingAmount} />
        </div>
        <div className={classes.dataRow}>
          <Typography>Forecasted Savings Percentage</Typography>
          <Currency data={totalForecastedSavingPercentage} />
        </div>
        <div className={classes.dataRow}>
          <Typography>Baseline Spend Amount</Typography>
          <Currency data={totalBaselineSpend} />
        </div>
      </div>
      {projectProfiles.map(profile => (
        <div key={profile.id} className={classes.childRoot}>
          <TableProjectProfile profile={profile} />
        </div>
      ))}
    </div>
  );
};
