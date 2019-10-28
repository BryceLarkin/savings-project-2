import React, { useState } from "react";
import { StepperCreateProjectProvider } from "./StepperCreateProjectContext";
import { Steps, StepperCreateProject } from "./StepperCreateProject";
import {
  FormCreateProjectOverview,
  FormCreateProfiles,
  FormCreateSpends
} from "./ChildForms";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";

export const FormCreateProject: React.FC<{ rootPath: string }> = ({
  rootPath
}) => {
  const [stepper, setStepper] = useState<Steps>(0);

  const getSecondPath = (projectUrl: string) =>
    `${rootPath}${R.PROJECT_FN(projectUrl)}`;

  const getThirdPath = (projectUrl: string) =>
    `${rootPath}${R.PROFILE_FN(projectUrl)}`;

  return (
    <StepperCreateProjectProvider value={stepper}>
      <StepperCreateProject />
      <Switch>
        <Route
          exact
          path={rootPath}
          render={props => {
            setStepper(0);
            return (
              <FormCreateProjectOverview {...props} nextPath={getSecondPath} />
            );
          }}
        />
        <Route
          exact
          path={`${rootPath}${R.PROJECT}`}
          render={props => {
            setStepper(1);
            return <FormCreateProfiles {...props} nextPath={getThirdPath} />;
          }}
        />
        <Route
          exact
          path={`${rootPath}${R.PROFILES}`}
          render={props => {
            setStepper(2);
            return <FormCreateSpends />;
          }}
        />
      </Switch>
    </StepperCreateProjectProvider>
  );
};
