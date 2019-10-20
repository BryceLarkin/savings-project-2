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
  //   Link,
  //   Typography
} from "@material-ui/core";
import { ITheme } from "../Theme";
import { CellSavings } from "./CellSavings";

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

export const TableSavingsTracker: React.SFC<{
  projectIds: string[];
  businessUnitIds: string[];
  startPeriod: string;
  endPeriod: string;
}> = ({ projectIds, businessUnitIds, startPeriod, endPeriod }) => {
  const classes = useStyles();

  if (projectIds.length === 0 || businessUnitIds.length === 0) {
    return (
      <div>Must select at least one Project and at least one Business Unit</div>
    );
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            {businessUnitIds.map(buId => (
              <TableCell key={buId}>{buId}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {projectIds.map(pId => (
            <TableRow key={pId}>
              <TableCell>{pId}</TableCell>
              {businessUnitIds.map(buId => (
                <TableCell key={buId}>
                  <CellSavings
                    projectId={pId}
                    businessUnitId={buId}
                    startPeriod={startPeriod}
                    endPeriod={endPeriod}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
