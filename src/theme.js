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
    h1: {
      color: primary,
      fontFamily:'Raleway',
      fontWeight: 400,
      fontSize: '5rem',
    },
    h2: {
      color: primary,
      fontFamily:'Raleway',
      fontWeight: 400,
      fontSize: '4rem',
    },
    body1: {
      color: textGrey,
      fontFamily:'Raleway',
      fontSize: '1.2rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      color: primary,
      fontFamily:'Raleway',
      fontSize: '2em',
      lineHeight: 1.2
    }
  },
});

export default theme;
