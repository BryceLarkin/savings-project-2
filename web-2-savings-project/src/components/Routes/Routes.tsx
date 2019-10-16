import React from "react";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";
import { ReadProjects } from "../ReadProjects";
import { ReadProject } from "../ReadProject";

export const Routes: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact path={R.PROJECTS} component={ReadProjects} />
      <Route exact path={R.PROJECT} component={ReadProject} />
    </Switch>
  );
};
