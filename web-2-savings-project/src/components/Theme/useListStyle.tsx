import { makeStyles, createStyles } from "@material-ui/core";
import { ITheme } from ".";

export const useListStyle = makeStyles((theme: ITheme) => {
  const gridTemplateColumns = "30em minmax(5em, max-content)";
  const root = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "0.5em"
  };

  return createStyles({
    root,
    childRoot: {
      ...root,
      paddingTop: "2em"
    },
    dataRow: {
      display: "grid",
      gridTemplateColumns,
      marginLeft: "0.5em"
    },
    titleRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      marginTop: "0.5em"
    },
    updateText: {
      alignSelf: "center"
    }
  });
});
