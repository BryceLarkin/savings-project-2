import React from "react";
import { ReadProject } from "../../gql/__generated__/ReadProject";
import { Typography, Paper, makeStyles, createStyles } from "@material-ui/core";
import { useListStyle, ITheme } from "../../components/Theme";
import { Currency } from "../../components/FormatText/Currency";
import { TableProjectProfile } from "./TableProjectProfile";
import { Percentage } from "../../components";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    paper: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "1em",
      padding: theme.spacing(3, 2)
    }
  })
);

export const TableProject: React.FC<{
  data: ReadProject | undefined;
}> = ({ data }) => {
  const classes = useStyles();
  const list = useListStyle();

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
    <div className={list.root}>
      <Typography variant="h4">{name}</Typography>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">
          Details
        </Typography>
        <div className={list.dataRow}>
          <Typography>Owner</Typography>
          <Typography>{owner.fullName}</Typography>
        </div>
        <div className={list.titleRow}>
          <Typography>Total</Typography>
        </div>
        <div className={list.dataRow}>
          <Typography>Forecasted Savings Amount</Typography>
          <Currency data={totalForecastedSavingAmount} />
        </div>
        <div className={list.dataRow}>
          <Typography>Forecasted Savings Percentage</Typography>
          <Percentage data={totalForecastedSavingPercentage} />
        </div>
        <div className={list.dataRow}>
          <Typography>Baseline Spend Amount</Typography>
          <Currency data={totalBaselineSpend} />
        </div>
      </Paper>
      {projectProfiles.map(profile => (
        <div key={profile.id} className={list.childRoot}>
          <TableProjectProfile profile={profile} />
        </div>
      ))}
    </div>
  );
};
