import React from "react";
import { PickerBusinessUnits } from "../PickerBusinessUnits";
import { FieldArray, useField } from "formik";
import { Button, Paper } from "@material-ui/core";

export const PickersBusinessUnits: React.FC<{}> = props => {
  const [field] = useField("businessUnitIds");

  const businessUnitIds = field.value as string[];

  return (
    <Paper>
      <FieldArray
        name="businessUnitIds"
        render={arrayHelpers => (
          <>
            {businessUnitIds && businessUnitIds.length > 0 ? (
              businessUnitIds.map((projectId, i) => (
                <div key={i}>
                  <PickerBusinessUnits name={`businessUnitIds.${i}`} />
                  <Button onClick={() => arrayHelpers.remove(i)}>-</Button>
                  <Button onClick={() => arrayHelpers.push("")}>+</Button>
                </div>
              ))
            ) : (
              <Button onClick={() => arrayHelpers.push("")}>
                Add Business Units
              </Button>
            )}
          </>
        )}
      />
    </Paper>
  );
};
