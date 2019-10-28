import React, { useState } from "react";
import { TransferList } from "../TransferList";
import { useQuery } from "@apollo/react-hooks";
import { READ_PICKER_BUSINESS_UNITS } from "../../gql";
import { ReadPickerBusinessUnits } from "../../gql/__generated__/ReadPickerBusinessUnits";
import { Loading } from "../Loading";
import { Typography } from "@material-ui/core";

export const TransferListBusinessUnits: React.FC<{
  onChange: (left: string[], right: string[]) => void;
}> = ({ onChange }) => {
  const [initBusinessUnits, setInitBusinessUnits] = useState<string[]>([]);
  const [idToNameMap, setIdToNameMap] = useState();

  const { loading } = useQuery<ReadPickerBusinessUnits>(
    READ_PICKER_BUSINESS_UNITS,
    {
      onCompleted: ({ businessUnits }) => {
        const idMap = businessUnits.reduce(
          (acc, cur) => ({
            ...acc,
            [cur.id]: cur.name
          }),
          {}
        );
        const businessUnitsIds = businessUnits.map(({ id }) => id);
        setIdToNameMap(idMap);
        setInitBusinessUnits(businessUnitsIds);
      }
    }
  );

  if (loading) return <Loading />;

  if (initBusinessUnits.length === 0) {
    return <Typography>No Business Units. Please create one.</Typography>;
  }
  return (
    <TransferList
      initLeftIds={initBusinessUnits}
      initRightIds={[]}
      idToNameMap={idToNameMap}
      onChange={onChange}
    />
  );
};
