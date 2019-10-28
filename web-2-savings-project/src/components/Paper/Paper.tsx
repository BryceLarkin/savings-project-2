import React from "react";
import { Paper as MuiPaper, makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../Theme";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "1em",
      padding: theme.spacing(3, 2)
    }
  })
);

export const Paper: React.FC<{}> = props => {
  const classes = useStyles();
  return <MuiPaper className={classes.root}>{props.children}</MuiPaper>;
};
