// ライブラリ import
import { VFC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// コンポーネント import
import "./App.css";
import { MaterialUiTheme } from "./theme/MaterialUiTheme";

export const App: VFC = () => {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      {/* CssBaselineでブラウザに設定された固有のcssをリセット */}
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};
