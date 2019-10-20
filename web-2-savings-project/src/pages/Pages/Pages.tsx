import React from "react";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";
import { ReadProjects } from "../ReadProjects";
import { ReadProject } from "../ReadProject";
import { PickersProjectsBUs } from "../PickersProjectsBUs";

export const Pages: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact path={R.PROJECTS} component={ReadProjects} />
      <Route exact path={R.PROJECT} component={ReadProject} />
      <Route exact path="/test" component={PickersProjectsBUs} />
    </Switch>
  );
};
