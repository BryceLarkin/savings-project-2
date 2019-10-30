import React from "react";
import { PickerBusinessUnits } from "../PickerBusinessUnits";
import { FieldArray, useField } from "formik";
import { Button, Paper, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

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
                  <IconButton
                    onClick={() => arrayHelpers.remove(i)}
                    data-cy="remove-business-unit-icon"
                  >
                    <Remove />
                  </IconButton>
                  <Button
                    data-cy="add-business-unit-icon"
                    onClick={() => arrayHelpers.push("")}
                  >
                    +
                  </Button>
                </div>
              ))
            ) : (
              <Button
                onClick={() => arrayHelpers.push("")}
                data-cy="add-business-unit-btn"
              >
                Add Business Units
              </Button>
            )}
          </>
        )}
      />
    </Paper>
  );
};
