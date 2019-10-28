import React from "react";
import { ReadProject } from "../../gql/__generated__/ReadProject";
import { Link } from "@material-ui/core";
import { useListStyle } from "../../components/Theme";
import { Currency } from "../../components/FormatText/Currency";
import { TableProjectProfile } from "./TableProjectProfile";
import { Percentage, LinkUser, Typography, Paper } from "../../components";

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
      <Paper>
        <Typography variant="h6">Details</Typography>
        <div className={classes.dataRow}>
          <Typography>Owner</Typography>
          <Link component={LinkUser(owner.id)}>{owner.fullName}</Link>{" "}
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
          <Percentage data={totalForecastedSavingPercentage} />
        </div>
        <div className={classes.dataRow}>
          <Typography>Baseline Spend Amount</Typography>
          <Currency data={totalBaselineSpend} />
        </div>
      </Paper>
      {projectProfiles.map(profile => (
        <div key={profile.id} className={classes.childRoot}>
          <TableProjectProfile profile={profile} />
        </div>
      ))}
    </div>
  );
};
