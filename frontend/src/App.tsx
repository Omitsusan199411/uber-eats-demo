// ライブラリ import
import { VFC, createContext } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// コンポーネント import
import "./App.css";
import "./GoogleFonts.css";
import { MaterialUiTheme } from "./theme/MaterialUiTheme";

export const ResponsiveWide = createContext(true);

export const App: VFC = () => {
  const isWide: boolean = useMediaQuery({
    query: `(max-width: ${MaterialUiTheme.breakpoints.values.md}px`,
  });
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      {/* CssBaselineでブラウザに設定された固有のcssをリセット */}
      <CssBaseline />
      <ResponsiveWide.Provider value={isWide}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ResponsiveWide.Provider>
    </ThemeProvider>
  );
};
