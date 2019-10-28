import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { READ_USERS_NAME } from "../../gql";
import { ReadUsersName } from "../../gql/__generated__/ReadUsersName";
import { Loading } from "../Loading";
import { Select } from "../FormFields";
import { MenuItem } from "@material-ui/core";

export const PickerUser: React.FC<{
  name: string;
  label: string;
}> = props => {
  const { name, label } = props;
  // const { Option } = Select;

  const { loading, data, error } = useQuery<ReadUsersName>(READ_USERS_NAME);

  if (loading) return <Loading />;
  if (error) {
    console.log("ERROR", error);
    return <div>error</div>;
  }

  if (!data) return <div>unkown</div>;

  return (
    <Select name={name} dataCy="user-picker" label={label}>
      {data.users.map(u => (
        <MenuItem key={u.id} value={u.id} data-cy="user-picker-option">
          {u.fullName}
        </MenuItem>
      ))}
    </Select>
  );
};
