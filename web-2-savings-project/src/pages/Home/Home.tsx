import React from "react";
import { Redirect } from "react-router-dom";
import { R } from "../../constants";

export const Home: React.SFC<{}> = props => {
  return <Redirect to={R.PROJECTS} />;
};
