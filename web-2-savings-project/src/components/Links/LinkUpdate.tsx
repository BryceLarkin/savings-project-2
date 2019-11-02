import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";
import { Omit } from "@material-ui/types";
import { R } from "../../constants";

export const LinkUpdate = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "innerRef" | "to">
>((props, ref) => <RouterLink innerRef={ref} to={R.UPDATE} {...props} />);
