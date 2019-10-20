import React from "react";
import { ReadTableProjects_projects } from "../../gql/__generated__/ReadTableProjects";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  makeStyles,
  createStyles,
  TableHead,
  Link,
  Typography
} from "@material-ui/core";
import { ITheme } from "../../components/Theme";
import { LinkProject } from "../../components/Links";
import { Percentage } from "../../components/FormatText";
import { Currency } from "../../components/FormatText/Currency";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    }
  })
);

export const TableProjects: React.FC<{
  projects: ReadTableProjects_projects[];
}> = ({ projects }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell align="right">Forecasted Savings</TableCell>
            <TableCell align="right">Forecasted Savings Percentage</TableCell>
            <TableCell align="right">Baseline Spend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map(
            ({
              id,
              url,
              name,
              owner,
              totalBaselineSpend,
              totalForecastedSavingAmount,
              totalForecastedSavingPercentage
            }) => (
              <TableRow key={id} hover>
                <TableCell>
                  <Link component={LinkProject(url)}>
                    <Typography>{name}</Typography>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography>{owner.fullName}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Currency data={totalForecastedSavingAmount} />
                </TableCell>
                <TableCell align="right">
                  <Percentage data={totalForecastedSavingPercentage} />
                </TableCell>
                <TableCell align="right">
                  <Currency data={totalBaselineSpend} />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};
