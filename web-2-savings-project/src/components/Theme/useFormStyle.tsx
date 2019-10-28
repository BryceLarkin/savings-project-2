import { makeStyles, createStyles } from "@material-ui/styles";
import { ITheme } from ".";

export const useFormStyle = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: `minmax(auto, ${theme.breakpoints.values.sm}px)`,
      gridRowGap: "2em"
    },
    mdTextField: {
      width: 300
    }
  })
);
