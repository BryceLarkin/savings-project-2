import React from "react";
import { Typography as MuiTypography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";

export const Typography: React.SFC<TypographyProps> = ({
  children,
  ...rest
}) => (
  <MuiTypography variant="subtitle2" {...rest}>
    {children}
  </MuiTypography>
);
