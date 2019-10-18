import React from "react";
import { useListStyle } from "../Theme";
import { ReadProject_project_projectProfiles } from "../../gql/__generated__/ReadProject";
import { Typography } from "@material-ui/core";
import { TableSpend } from "./TableSpend";

export const TableProjectProfile: React.FC<{
  profile: ReadProject_project_projectProfiles;
}> = ({ profile }) => {
  const classes = useListStyle();

  const { businessUnit, spend } = profile;

  return (
    <div className={classes.root}>
      <Typography variant="h5">{businessUnit.name}</Typography>
      <TableSpend spend={spend} />
    </div>
  );
};
