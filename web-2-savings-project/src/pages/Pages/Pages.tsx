import React from "react";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";
import { ReadProjects } from "../ReadProjects";
import { ReadProject } from "../ReadProject";
import { ReportGenerator } from "../ReportGenerator";
import { makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../../components/Theme";
import { UserProfile } from "../UserProfile";
import { AppBar, FormCreateProject } from "../../components";
import { UpdateSingleProjectProfile } from "../UpdateSingleProjectProfile";
import { UpdateListProjectProfiles } from "../UpdateListProjectProfiles.tsx";
import { Login } from "../Login";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";

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
    },
    toolbar: theme.mixins.toolbar
  })
);

export const Pages: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={R.HOME} component={Home} />
          <Route
            path={R.NEW}
            render={props => <FormCreateProject {...props} rootPath={R.NEW} />}
          />
          <Route exact path={R.PROJECTS} component={ReadProjects} />
          <Route exact path={R.PROJECT} component={ReadProject} />
          <Route exact path={R.REPORT} component={ReportGenerator} />
          <Route exact path={R.USER} component={UserProfile} />
          <Route exact path={R.UPDATE} component={UpdateListProjectProfiles} />
          <Route
            exact
            path={R.UPDATE_PROJECT}
            component={UpdateSingleProjectProfile}
          />
          <Route exact path={R.LOGIN} component={Login} />
          <Route exact path={R.MY_ACCOUNT} component={MyAccount} />
        </Switch>
      </main>
    </>
  );
};
