import React, { useContext } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { StepperCreateProjectContext } from "./StepperCreateProjectContext";
import { makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../Theme";

export type Steps = 0 | 1 | 2;

const steps = ["Overview", "Business Unit", "Spend"];

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "minmax(400px, 600px)"
    }
  })
);

export const StepperCreateProject: React.FC<{}> = () => {
  const classes = useStyles();
  const step = useContext(StepperCreateProjectContext);

  return (
    <div className={classes.root}>
      <Stepper activeStep={step}>
        {steps.map((s, i) => (
          <Step key={i} completed={i < step}>
            <StepLabel>{s}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
