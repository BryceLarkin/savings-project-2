import React from "react";
import { Link, AppBar as MuiAppBar, Toolbar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { ITheme } from "../Theme";
import { BtnLink } from "../BtnLink";
import {
  LinkHome,
  LinkProjects,
  LinkMyAccount,
  LinkReports,
  LinkNewProject,
  LinkUpdate
} from "../Links";
import { LinkIcon } from "../LinkIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    appBar: {
      // position: "relative",
      zIndex: theme.zIndex.drawer + 1
    },
    toolbarTitle: {
      flex: 1
    },
    menuButton: {
      // marginLeft: -12,
      marginRight: 10
    }
  })
);

export const AppBar: React.FC<{}> = () => {
  const classes = useStyles();
  const textColor = "light";
  return (
    <MuiAppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolbarTitle}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            noWrap
            component={LinkHome}
          >
            Echtd
          </Link>
        </div>
        <div>
          <BtnLink
            component={LinkProjects}
            label="Projects"
            textColor={textColor}
          />
          <BtnLink
            component={LinkNewProject}
            label="Create"
            textColor={textColor}
          />
          <BtnLink
            component={LinkUpdate}
            label="Update"
            textColor={textColor}
          />
          <BtnLink
            component={LinkReports}
            label="Reports"
            textColor={textColor}
          />
          <LinkIcon
            ariaLabel="My-Account"
            linkComponent={LinkMyAccount}
            iconComponent={AccountCircleIcon}
            color="inherit"
          />
        </div>
      </Toolbar>
    </MuiAppBar>
  );
};
