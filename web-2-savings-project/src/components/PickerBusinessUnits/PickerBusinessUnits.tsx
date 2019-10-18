import React, { useState } from "react";
import { Select } from "../FormFields";
import { useQuery } from "@apollo/react-hooks";
import { READ_PICKER_BUSINESS_UNITS } from "../../gql";
import {
  ReadPickerBusinessUnits,
  ReadPickerBusinessUnits_businessunits
} from "../../gql/__generated__/ReadPickerBusinessUnits";
import { MenuItem } from "@material-ui/core";

export const PickerBusinessUnits: React.FC<{ name: string }> = ({ name }) => {
  const [businessUnits, setBusinessUnits] = useState<
    ReadPickerBusinessUnits_businessunits[]
  >([]);

  useQuery<ReadPickerBusinessUnits>(READ_PICKER_BUSINESS_UNITS, {
    onCompleted: data => setBusinessUnits(data.businessunits)
  });

  return (
    <Select name={name} label="Business Unit" dataCy="PickerBusinessUnits">
      {businessUnits.map(bu => (
        <MenuItem key={bu.id} value={bu.id}>
          {bu.name}
        </MenuItem>
      ))}
    </Select>
  );
};
