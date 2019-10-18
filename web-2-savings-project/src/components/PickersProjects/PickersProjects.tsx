import React from "react";
import { PickerProject } from "../PickerProjects";
import { FieldArray, useField } from "formik";
import { Button } from "@material-ui/core";

export const PickersProjects: React.FC<{}> = props => {
  const [field] = useField("projectIds");

  const projectIds = field.value as string[];

  return (
    <FieldArray
      name="projectIds"
      render={arrayHelpers => (
        <>
          {projectIds && projectIds.length > 0 ? (
            projectIds.map((projectId, i) => (
              <div key={i}>
                <PickerProject name={`projectIds.${i}`} />{" "}
                <Button
                  onClick={() => arrayHelpers.remove(i)} // remove a friend from the list
                >
                  -
                </Button>
                <Button
                  onClick={() => arrayHelpers.insert(i, "")} // insert an empty string at a position
                >
                  +
                </Button>
              </div>
            ))
          ) : (
            <Button onClick={() => arrayHelpers.push("")}>Add Project</Button>
          )}
        </>
      )}
    />
  );
};
