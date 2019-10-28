import React from "react";
import { IconButton, makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../Theme";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    }
  })
);

interface IconLinkProps {
  linkComponent: React.ComponentType<any>;
  iconComponent: React.ComponentType<any>;
  ariaLabel: string;
  color?: "inherit" | "primary" | "secondary" | "default";
}

export const LinkIcon: React.SFC<IconLinkProps> = ({
  linkComponent: Link,
  iconComponent: Icon,
  ariaLabel,
  color
}) => {
  const classes = useStyles();

  return (
    <IconButton
      component={Link}
      className={classes.button}
      aria-label={ariaLabel}
      color={color}
    >
      <Icon />
    </IconButton>
  );
};
