import React from "react";
import { Button } from "@material-ui/core";

export const BtnLink: React.SFC<{
  component: React.ComponentType<any>;
  label: string;
  textColor?: "light" | "dark";
}> = props => {
  const { component: Component, textColor = "dark", label } = props;

  const style = textColor === "light" ? { color: "#fff" } : {};

  return (
    <Button component={Component} style={style} variant="text">
      {label}
    </Button>
  );
};
