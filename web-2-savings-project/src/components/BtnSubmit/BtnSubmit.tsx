import React from "react";
import { Button, makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../Theme";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      maxWidth: theme.breakpoints.values.sm
    }
  })
);

export const BtnSubmit: React.SFC<{
  handleSubmit: React.MouseEventHandler<HTMLElement>;
  disabled: boolean;
}> = props => {
  const { children, handleSubmit, disabled } = props;
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={handleSubmit}
      data-cy="submit-btn"
      className={classes.root}
    >
      {children}
    </Button>
  );
};
