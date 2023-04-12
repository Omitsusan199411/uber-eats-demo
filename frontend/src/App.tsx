// ライブラリ import
import { VFC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Router } from './router/Router';

// コンポーネント import
import './App.css';
import './GoogleFonts.css';
import { MaterialUiTheme } from './theme/MaterialUiTheme';

// createContext import
import { ResponsiveWide } from './contexts/ResponsiveWide';

// 型 import

export const App: VFC = () => {
  // レスポンシブに伴う画面幅の切り替え指定
  const isWide: boolean = useMediaQuery({
    query: `(max-width: ${MaterialUiTheme.breakpoints.values.md}px`
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
