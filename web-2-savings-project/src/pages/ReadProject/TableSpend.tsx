import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  makeStyles,
  createStyles,
  TableHead
} from "@material-ui/core";
import { ITheme } from "../../components/Theme";
import { Currency } from "../../components/FormatText/Currency";
import { ReadProject_project_projectProfiles_spend } from "../../gql/__generated__/ReadProject";
import { Percentage } from "../../components/FormatText";
import dayjs from "dayjs";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      width: "100%",
      // marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    }
  })
);

export const TableSpend: React.FC<{
  spend: ReadProject_project_projectProfiles_spend[];
}> = ({ spend }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Forecasted Savings</TableCell>
            <TableCell align="right">Forecasted Savings Percentage</TableCell>
            <TableCell align="right">Baseline Spend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spend.map(s => (
            <TableRow key={s.id}>
              <TableCell>{dayjs(s.month).format("MMM YYYY")}</TableCell>
              <TableCell>
                <Currency data={s.forecastedSavingsAmount} />
              </TableCell>
              <TableCell>
                <Percentage data={s.forecastedSavingsPercentage} />
              </TableCell>
              <TableCell>
                <Currency data={s.baselineSpend} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
