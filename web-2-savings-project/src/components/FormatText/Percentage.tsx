import React from "react";
import { Typography } from "@material-ui/core";

export const Percentage: React.SFC<{ data: number }> = ({ data }) => {
  return <Typography>{`${data}%`}</Typography>;
};
