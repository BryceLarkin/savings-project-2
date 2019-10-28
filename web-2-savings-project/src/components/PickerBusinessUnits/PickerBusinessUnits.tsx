import React, { useState } from "react";
import { Select } from "../FormFields";
import { useQuery } from "@apollo/react-hooks";
import { READ_PICKER_BUSINESS_UNITS } from "../../gql";
import {
  ReadPickerBusinessUnits,
  ReadPickerBusinessUnits_businessUnits
} from "../../gql/__generated__/ReadPickerBusinessUnits";
import { MenuItem } from "@material-ui/core";

export const PickerBusinessUnits: React.FC<{ name: string }> = ({ name }) => {
  const [businessUnits, setBusinessUnits] = useState<
    ReadPickerBusinessUnits_businessUnits[]
  >([]);

  useQuery<ReadPickerBusinessUnits>(READ_PICKER_BUSINESS_UNITS, {
    onCompleted: data => setBusinessUnits(data.businessUnits)
  });

  return (
    <Select
      name={name}
      label="Business Unit"
      dataCy="PickerBusinessUnits"
      multiple
    >
      {businessUnits.map(bu => (
        <MenuItem key={bu.id} value={bu.id}>
          {bu.name}
        </MenuItem>
      ))}
    </Select>
  );
};
