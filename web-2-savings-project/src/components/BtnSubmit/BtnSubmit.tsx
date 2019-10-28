import React from "react";
import { Button } from "@material-ui/core";

export const BtnSubmit: React.SFC<{
  handleSubmit: React.MouseEventHandler<HTMLElement>;
  disabled: boolean;
}> = props => {
  const { children, handleSubmit, disabled } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={handleSubmit}
      data-cy="submit-btn"
    >
      {children}
    </Button>
  );
};
