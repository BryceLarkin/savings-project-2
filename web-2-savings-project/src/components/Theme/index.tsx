import { createMuiTheme, Theme } from "@material-ui/core/styles";
// export { default as useFormStyle } from "./formStyle";
// export { default as usePickerStyle } from "./pickerStyle";
// export { default as useReadListStyle } from "./listStyle";
// export { default as useLinkStyle } from "./linkStyle";
// export { default as useAppBarLinkStyles } from "./appBarLinkStyle";
export { useListStyle } from "./useListStyle";
export { useFormStyle } from "./useFormStyle";
// export { default as bottomNavigationStyle } from "./bottomNavigationStyle";

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fffff"
    },
    primary: {
      light: "#A7CCED",
      main: "#1274ED",
      dark: "#4C6085",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ff5c8d",
      main: "#d81b60",
      dark: "#a00037",
      contrastText: "#ffffff"
    }
  }
});
// Dark Green: #012408
//icon colors: #B57962 and Dark Green
export const landingTheme = createMuiTheme({
  palette: {
    primary: { main: "#ffffff", contrastText: "#fff" }
  }
});

export interface ITheme extends Theme {} //eslint-disable-line

export default theme;
