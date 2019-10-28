import React from "react";
import { Typography } from "../Typography";

export const Percentage: React.SFC<{ data: number }> = ({ data }) => {
  return <Typography align="right">{`${data}%`}</Typography>;
};
