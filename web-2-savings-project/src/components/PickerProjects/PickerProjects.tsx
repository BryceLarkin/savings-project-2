import React, { useState } from "react";
import { Select } from "../FormFields";
import { Field } from "formik";
import { useQuery } from "@apollo/react-hooks";
import { READ_PICKER_PROJECTS } from "../../gql";
import {
  ReadPickerProjects,
  ReadPickerProjects_projects
} from "../../gql/__generated__/ReadPickerProjects";
import { MenuItem } from "@material-ui/core";

interface Options {
  id: string;
  name: string;
}

const PickerProject: React.FC<{}> = props => {
  const [projects, setProjects] = useState<ReadPickerProjects_projects[]>([]);
  const { data, error, loading } = useQuery<ReadPickerProjects>(
    READ_PICKER_PROJECTS
  );

  if (!loading && !error && data) {
    setProjects(data.projects);
  }

  return (
    <Select name={}>
      {projects.map(p => (
        <MenuItem value={p.id}>{p.name}</MenuItem>
      ))}
    </Select>
  );
};
