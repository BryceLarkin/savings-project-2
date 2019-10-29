import { makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from ".";

interface FormProps {
  width: "long";
}

export const useFormStyle = makeStyles((theme: ITheme) =>
  createStyles({
    root: (props?: FormProps) => {
      let length: number;

      // if (typeof props === "undefined") {
      //   length = theme.breakpoints.values.sm;
      // } else if (props.width === "long") {
      //   length = theme.breakpoints.values.md;
      // }

      if (props && props.width === "long") {
        length = theme.breakpoints.values.md;
      } else {
        length = theme.breakpoints.values.sm;
      }

      return {
        display: "grid",
        gridTemplateColumns: `minmax(auto, ${length}px)`,
        gridRowGap: "2em"
      };
    },
    mdTextField: {
      width: 300
    }
  })
);
