import React from "react";
import { FormLogin } from "../../components";
import {
  Typography,
  Divider,
  Paper,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { ITheme } from "../../components/Theme";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "1em",
      padding: theme.spacing(4, 3)
    },
    divider: {
      marginBottom: "10px"
    }
  })
);
export const Login: React.FC<{}> = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="subtitle1">
        Welcome Back!
      </Typography>
      <Divider className={classes.divider} />
      <FormLogin />
    </Paper>
  );
};
