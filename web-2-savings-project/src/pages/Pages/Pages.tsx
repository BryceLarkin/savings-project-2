import React from "react";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";
import { ReadProjects } from "../ReadProjects";
import { ReadProject } from "../ReadProject";
import { ReportGenerator } from "../ReportGenerator";
import { makeStyles, createStyles } from "@material-ui/styles";
import { ITheme } from "../../components/Theme";
import { Test } from "../Test";
import { UserProfile } from "../UserProfile";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    main: {
      display: "grid",
      justifyItems: "center",
      width: "auto",
      marginLeft: 0,
      marginRight: 0,
      marginTop: theme.spacing(3),
      [theme.breakpoints.up(900 + theme.spacing(6))]: {
        // width: 900,
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
      },
      [theme.breakpoints.down("sm")]: {
        paddingBottom: 60
      }
    }
  })
);

export const Pages: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Switch>
        <Route exact path={R.PROJECTS} component={ReadProjects} />
        <Route exact path={R.PROJECT} component={ReadProject} />
        <Route exact path={R.REPORT} component={ReportGenerator} />
        <Route exact path={R.USER} component={UserProfile} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </main>
  );
};
