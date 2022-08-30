import { createTheme } from "@mui/material/styles";

// themeのpaletteにキーワードの追加
declare module "@mui/material/styles" {
  interface Palette {
    mainText: Palette["primary"];
    subText: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    mainText?: PaletteOptions["primary"];
    subText?: PaletteOptions["primary"];
  }
}

export const MaterialUiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#008000",
    },
    info: {
      main: "#222222",
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
