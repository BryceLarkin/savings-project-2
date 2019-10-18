import React, { useState } from "react";
import { Select } from "../FormFields";
import { useQuery } from "@apollo/react-hooks";
import { READ_PICKER_PROJECTS } from "../../gql";
import {
  ReadPickerProjects,
  ReadPickerProjects_projects
} from "../../gql/__generated__/ReadPickerProjects";
import { MenuItem } from "@material-ui/core";

export const PickerProject: React.FC<{ name: string }> = ({ name }) => {
  const [projects, setProjects] = useState<ReadPickerProjects_projects[]>([]);

  useQuery<ReadPickerProjects>(READ_PICKER_PROJECTS, {
    onCompleted: data => setProjects(data.projects)
  });

  return (
    <Select name={name} label="Project" dataCy="PickerProjects">
      {projects.map(p => (
        <MenuItem key={p.id} value={p.id}>
          {p.name}
        </MenuItem>
      ))}
    </Select>
  );
};
