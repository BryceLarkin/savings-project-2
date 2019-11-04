import React from "react";
import {
  UpdateSingleProjectProfileTitle,
  ListUpdateSpend
} from "../../components";

export const UpdateSingleProjectProfile: React.SFC<{}> = props => {
  return (
    <>
      <UpdateSingleProjectProfileTitle />
      <ListUpdateSpend />
    </>
  );
};
