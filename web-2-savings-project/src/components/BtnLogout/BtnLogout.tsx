import React from "react";
import { Button } from "@material-ui/core";
import { firebase } from "../../services";

export const BtnLogout: React.SFC<{}> = props => {
  const handleClick = async () => {
    await firebase.auth().signOut();
  };

  return (
    <Button onClick={handleClick} variant="contained" style={{ width: 250 }}>
      Logout
    </Button>
  );
};
