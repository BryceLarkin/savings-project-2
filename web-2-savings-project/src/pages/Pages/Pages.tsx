import React from "react";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";
import { ReadProjects } from "../ReadProjects";
import { ReadProject } from "../ReadProject";
import { ReportGenerator } from "../ReportGenerator";

export const Pages: React.SFC<{}> = () => {
  return (
    <body>
      <Switch>
        <Route exact path={R.PROJECTS} component={ReadProjects} />
        <Route exact path={R.PROJECT} component={ReadProject} />
        <Route exact path={R.REPORT} component={ReportGenerator} />
      </Switch>
    </body>
  );
};
