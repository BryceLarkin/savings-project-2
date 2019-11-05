import React from "react";
import {
  Typography,
  IconButton,
  makeStyles,
  createStyles,
  Tooltip
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { ITheme } from "../../components/Theme";
import { LinkUpdateProjectProfile } from "../../components/Links";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    text: {
      paddingTop: "5px",
      marginRight: "0.5em"
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

export const TitleTableProjectProfile: React.FC<{
  title: string;
  projectUrl: string;
  projectProfileId: string;
}> = ({ title, projectUrl, projectProfileId }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h6">
        {title}
      </Typography>
      <Tooltip title="Update" placement="right">
        <IconButton
          component={LinkUpdateProjectProfile({
            projectProfileId,
            projectUrl
          })}
          size="small"
          className={classes.button}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};
