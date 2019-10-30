import { makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from "../../components/Theme";

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridRowGap: "2em"
    },
    form: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "3em"
    },
    titleContent: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "1em"
    },
    datePickers: {
      display: "grid",
      gridTemplateColumns: "200px 200px",
      gridColumnGap: "1em"
    }
  })
);
