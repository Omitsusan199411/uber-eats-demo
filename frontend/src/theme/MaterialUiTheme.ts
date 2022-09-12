import { createTheme } from "@mui/material/styles";

export const MaterialUiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      sub: "rgba(0, 0, 0, 0.5)",
    },
    secondary: {
      main: "#008000",
    },
    basis: {
      main: "#333333",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Roboto",
    button: {
      textTransform: "none",
    },
  },
});
