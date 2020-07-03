import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#aa8cc5";
const secondary = "#ffffd7";
const textGrey = '#4d4d4d'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    common: {
      grey: textGrey
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "500",
      fontSize: "1rem",
    },
  },
});

export default theme;
