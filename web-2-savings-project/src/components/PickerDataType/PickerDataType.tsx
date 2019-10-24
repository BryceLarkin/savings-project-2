import React from "react";
import { Select } from "../FormFields";
import { MenuItem } from "@material-ui/core";
import { ReportDataType } from "../../gql/__generated__/graphql-global-types";
import { reportDataTypeMap } from "../../constants";

export const PickerDataType: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Select
      variant="outlined"
      name={name}
      label="Data Type"
      dataCy="PickerDataType"
      width={275}
    >
      {Object.values(ReportDataType).map(dataType => (
        <MenuItem key={dataType} value={dataType}>
          {reportDataTypeMap[dataType]}
        </MenuItem>
      ))}
    </Select>
  );
};
